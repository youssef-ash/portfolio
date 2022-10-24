export default function Home() {
  return (
    <main className="home">
      <div className="home__header">
        <h1 className="home__greeting">Hi There!</h1>
        <h2 className="home__introduction">
          I'm <span>Youssef Ahmed</span> <br />
          An Aspiring Web Developer.
        </h2>
      </div>
      <img
        className="home__image"
        src="images/web_dev.png"
        alt="programmer vector"
      />
    </main>
  );
}
