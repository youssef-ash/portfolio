import '../App.css';

export default function Nav() {
  return (
    <nav className='nav'>
      <button className='nav__dark-mode'></button>
      <div className='nav__list'>
        <a href='' className='nav__link'>About</a>
        <a href='' className='nav__link'>Projects</a>
        <a href='' className='nav__link'>Contact</a>
      </div>
    </nav>
  )
}