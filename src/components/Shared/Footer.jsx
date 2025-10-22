import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms of Use</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a><FaFacebook /></a>
          <a><FaTwitter /></a>
          <a><FaInstagram /></a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2025 - All right reserved by WarmPaws Inc.</p>
      </aside>
    </footer>
  );
};

export default Footer;