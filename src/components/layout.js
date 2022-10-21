import Nav from './nav';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

export default function Layout({ darkMode, toggleDarkMode, firstLoaded }) {
  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''} ${firstLoaded ? 'loaded' : ''}`}>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Outlet />
      <Footer />
    </div>
  );
}
