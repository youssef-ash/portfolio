import './footer.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">Designed & Built by Youssef Ahmed</div>
      <div className="footer__links__container">
        <a href="mailto:youssefashwal@outlook.com" className="footer__link">
          <FaEnvelope />
        </a>
        <a
          target="_blank"
          href="https://github.com/youssef-ash"
          rel="noreferrer"
          className="footer__link"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/youssef-ash/"
          rel="noreferrer"
          className="footer__link"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
