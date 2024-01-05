import "./footer.css";

export default function Footer() {
  return <div className="footer"><div class="social-button">
    <a href="https://www.instagram.com/india.house.club/" target="_blank">
      <img src="/assets/img/instagramlogo.avif" alt="Instagram"/>
    </a>
    <p>¡Síguenos en india.house.club!</p>
  </div>
    <div class="social-button">
      <a href="https://www.instagram.com/cannabis.com.ar/" target="_blank">
        <img src="/assets/img/instagramlogo.avif" alt="Facebook"/>
      </a>
      <p>¡Síguenos en cannabis.com.ar!</p>
    </div>
    <div class="social-button">
      <a href="https://wa.me/5492234973138" target="_blank">
        <img src="/assets/img/whatsapplogo.png" alt="WhatsApp"/>
      </a>
      <p>Chatea con nosotros en WhatsApp</p>
    </div></div>;
}
