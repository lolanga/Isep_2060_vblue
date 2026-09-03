import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ── Estilos modularizados ──
// Orden importante: variables primero, base segundo, luego componentes
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/news.css";
import "./styles/schools-cta.css";
import "./styles/apps.css";
import "./styles/footer.css";
import "./styles/noticias.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
