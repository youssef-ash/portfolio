import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export default function Nav({ darkMode, toggleDarkMode }) {
  return (
    <nav className="nav">
      <button
        className="nav__dark-mode"
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={toggleDarkMode}
      >
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
      <div className="nav__list">
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
    </nav>
  );
}
