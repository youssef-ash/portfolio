import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function Nav({darkMode, toggleDarkMode, setViewing}) {
  return (
    <nav className='nav'>
      <button className='nav__dark-mode' title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggleDarkMode}>
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
      <div className='nav__list'>
        <a className='nav__link' onClick={() => {setViewing('Home')}}>Home</a>
        <a className='nav__link' onClick={() => {setViewing('About')}}>About</a>
        <a className='nav__link' onClick={() => {setViewing('Projects')}}>Projects</a>
        <a className='nav__link' onClick={() => {setViewing('Contact')}}>Contact</a>
      </div>
    </nav>
  )
}