import "./footer.css";

export default function Footer() {
  return <div className="footer"><div class="social-button">
    <a href="https://www.instagram.com" target="_blank">
      <img src="/assets/img/instagramlogo.avif" alt="Instagram"/>
    </a>
    <p>¡Síguenos en Instagram!</p>
  </div>
    <div class="social-button">
      <a href="https://www.facebook.com" target="_blank">
        <img src="/assets/img/instagramlogo.avif" alt="Facebook"/>
      </a>
      <p>¡Síguenos en Instagram!</p>
    </div>
    <div class="social-button">
      <a href="https://wa.me/5492234973138" target="_blank">
        <img src="/assets/img/whatsapplogo.png" alt="WhatsApp"/>
      </a>
      <p>Chatea con nosotros en WhatsApp</p>
    </div></div>;
}
