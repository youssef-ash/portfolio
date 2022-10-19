import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import { useState, useEffect } from 'react';

export default function App() {

  /* State Declarations */
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [dark, setDark] = useState(false);
  const [viewing, setViewing] = useState('Home');

  /* Effects */

  // loads component in dark mode if the last set theme was that
  useEffect(() => {
    const prefersDark = localStorage.getItem('darkMode');
    if (prefersDark === 'enabled') {
      setDark(true);
    }
  }, []);

  // applies transitions after start component is loaded to prevent light mode styling flashing before dark mode styling
  useEffect(() => {
    setTimeout(() => {
      setFirstLoaded(true)
    }, 100);
  }, []);

  /* Main Functions */

  // toggles dark mode
  function toggleDarkMode() {
    if (dark) {
      setDark(false);
      localStorage.setItem('darkMode', 'disabled');
    } else {
      setDark(true);
      localStorage.setItem('darkMode', 'enabled');
    }
  };

  return (
    <div className={`app ${dark ? 'dark-mode' : ''} ${firstLoaded ? 'loaded' : ''}`}>
      <Nav darkMode={dark} toggleDarkMode={toggleDarkMode} setViewing={setViewing} />
      {viewing === 'Home' && <Home />}
      {viewing === 'About' && <About />}
      {/* {viewing === 'Contact' && <Contact />} */}
      <Footer />
    </div>
  );
}
