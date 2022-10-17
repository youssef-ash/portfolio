import '../App.css';

export default function Home() {
  return (
    <main className='main'>
      <div className='main__header'>
        <h2 className='main__greeting'>Hi There!</h2>
        <h1 className='main__introduction'>
          I'm <span>Youssef Ahmed</span> <br /> An Aspiring Web Developer.
        </h1>
      </div>
      <img className='main__image' src='images/web_dev_image.png' alt='programmer vector image' />
    </main>
  )
}