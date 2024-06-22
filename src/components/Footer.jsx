import "./Footer.css";
import edzone from "../assets/edzone-1.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={edzone} alt="edzone-pic" className="footer-image" />
        <div className="footer-links">
          <a href="/terms-and-conditions" className="footer-link">
            Terms & Conditions
          </a>
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
