/**
 * FloatWhatsApp.jsx — Botón flotante de WhatsApp institucional
 * Siempre visible (desktop y móvil), esquina inferior derecha.
 */

export default function FloatWhatsApp() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/5490000000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Contactanos por WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L4 20l.9-3.8A8.5 8.5 0 1 1 20.5 11.6Z" />
        <path d="M8.2 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.6 1.2 1.5 2 2.7 2.6l.6-.6c.2-.2.4-.2.6-.1l1.6.7c.2.1.3.3.3.5v.5c0 .3-.1.5-.4.7-.4.2-.9.3-1.3.2-2.9-.6-5.3-2.9-6-5.9-.1-.5 0-1 .1-1.4Z" />
      </svg>
    </a>
  );
}
