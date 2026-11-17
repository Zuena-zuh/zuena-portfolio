
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Skills", to: "/skills" },
  ];

  return (
    <header className="navbar">
      <Link
        to="/"
        className="nav-logo"
        onClick={() => setMenuOpen(false)}
      >
        Zuena<span>.</span>
      </Link>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}

        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${
            theme === "light" ? "dark" : "light"
          } mode`}
        >
          {theme === "light" ? (
            <Moon size={19} />
          ) : (
            <Sun size={19} />
          )}
        </button>

        <NavLink
          to="/contact"
          className="nav-contact"
          onClick={() => setMenuOpen(false)}
        >
          Let's talk ↗
        </NavLink>
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

export default Navbar;
