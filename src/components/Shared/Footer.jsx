import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        
        <a href="/about" className="link link-hover">About us</a>
        <a href="/contact" className="link link-hover">Contact</a>
        <a href="/privacy" className="link link-hover">Privacy Policy</a>
        <a href="/terms" className="link link-hover">Terms of Use</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2025 - All right reserved by WarmPaws Inc.</p>
      </aside>
    </footer>
  );
};

export default Footer;