
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const handleBackToTop = (event) => {
    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="footer-logo">
          Zuena<span>.</span>
        </Link>

        <p className="footer-message">
          Designed with intention. Built with curiosity.
        </p>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Zuena. All rights reserved.
          </p>

          <Link to="/" onClick={handleBackToTop}>
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
