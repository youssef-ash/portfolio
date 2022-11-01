import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/layout/layout';
import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Error from './components/error/error';

export default function App() {
  /* State Declarations */
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [dark, setDark] = useState(false);

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
      setFirstLoaded(true);
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
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              darkMode={dark}
              toggleDarkMode={toggleDarkMode}
              firstLoaded={firstLoaded}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About dark={dark} />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
