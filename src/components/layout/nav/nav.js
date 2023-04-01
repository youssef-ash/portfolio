import "./nav.css";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Nav({ darkMode, toggleDarkMode }) {
  /* State Declarations */
  const [open, setOpen] = useState(false);

  /* Main Functions */
  function toggleMenu() {
    open ? setOpen(false) : setOpen(true);
  }

  /* Hooks and Events */
  useEffect(() => {
    const navLinks = Array.from(document.getElementsByClassName("nav__link"));
    navLinks.map((link) =>
      link.addEventListener("click", () => setOpen(false))
    );
  }, []);

  return (
    <nav className="nav">
      <button
        className="nav__dark-mode"
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        onClick={toggleDarkMode}
      >
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
      <div className={`nav__list ${open ? "open" : ""}`}>
        <NavLink to="/" end className="nav__link">
          Home
        </NavLink>
        <NavLink to="about" className="nav__link">
          About
        </NavLink>
        <NavLink to="projects" className="nav__link">
          Projects
        </NavLink>
        <NavLink to="contact" className="nav__link">
          Contact
        </NavLink>
      </div>
      <div
        className={`nav__menu ${open ? "open" : ""}`}
        onClick={toggleMenu}
        tabIndex="0"
      >
        <div className="nav__hamburger"></div>
      </div>
    </nav>
  );
}
