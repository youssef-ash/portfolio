export default function Home() {
  return (
    <main className='home'>
      <div className='home__header'>
        <h2 className='home__greeting'>Hi There!</h2>
        <h1 className='home__introduction'>
          I'm <span>Youssef Ahmed</span> <br />
          An Aspiring Web Developer.
        </h1>
      </div>
      <img className='home__image' src='images/web_dev_image.png' alt='programmer vector' />
    </main>
  )
}