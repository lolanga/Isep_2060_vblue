import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, extname } from "node:path";
import { randomBytes } from "node:crypto";

/** Lee el cuerpo de un request POST como string. */
function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

/**
 * Plugin Vite que agrega middleware solo durante el desarrollo:
 * - POST /api/upload → guarda una imagen en public/img/noticias/
 * - POST /api/noticias/save → inserta una noticia en src/data/noticias.js
 * No afecta el build de producción.
 */
function devPlugin() {
  const UPLOAD_DIR = join(process.cwd(), "public", "img", "noticias");
  const NOTICIAS_FILE = join(process.cwd(), "src", "data", "noticias.js");

  return {
    name: "dev-middleware",
    configureServer(server) {
      server.middlewares.use("/api/upload", (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        const chunks = [];
        req.on("data", (chunk) => chunks.push(chunk));
        req.on("end", () => {
          try {
            const body = Buffer.concat(chunks);
            const raw = body.toString("binary");
            const boundaryMatch = raw.match(/boundary=(.+?)/);

            if (!boundaryMatch) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: "No boundary found" }));
              return;
            }

            const boundary = boundaryMatch[1];
            const parts = raw.split("--" + boundary).slice(1, -1);

            for (const part of parts) {
              const headerEnd = part.indexOf("\r\n\r\n");
              if (headerEnd === -1) continue;

              const header = part.substring(0, headerEnd);
              const contentDisposition = header.match(
                /Content-Disposition:.*filename="(.+?)"/
              );

              if (!contentDisposition) continue;

              const filename = contentDisposition[1];
              const ext = extname(filename).toLowerCase();
              const safeName =
                randomBytes(8).toString("hex") + ext;

              if (!existsSync(UPLOAD_DIR)) {
                mkdirSync(UPLOAD_DIR, { recursive: true });
              }

              const fileData = part.substring(
                headerEnd + 4,
                part.lastIndexOf("\r\n") !== -1
                  ? part.lastIndexOf("\r\n")
                  : part.length
              );

              writeFileSync(join(UPLOAD_DIR, safeName), fileData, "binary");

              res.setHeader("Content-Type", "application/json");
              res.end(
                JSON.stringify({
                  url: `/img/noticias/${safeName}`,
                  filename: safeName,
                })
              );
              return;
            }

            res.statusCode = 400;
            res.end(JSON.stringify({ error: "No file in request" }));
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      });

      server.middlewares.use("/api/noticias/save", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        try {
          const body = await readBody(req);
          const data = JSON.parse(body);
          const code = String(data.code || "").trim();

          if (!code.startsWith("{")) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Código inválido" }));
            return;
          }

          const content = readFileSync(NOTICIAS_FILE, "utf8");
          const lastIndex = content.lastIndexOf("];");

          if (lastIndex === -1) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "No se encontró cierre del array" }));
            return;
          }

          const insertion = `\n${code}\n`;
          const updated =
            content.slice(0, lastIndex) + insertion + content.slice(lastIndex);

          writeFileSync(NOTICIAS_FILE, updated);

          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ ok: true }));
        } catch (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), devPlugin()],
});
