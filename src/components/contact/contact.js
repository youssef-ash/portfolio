import './contact.css';

export default function Contact() {
  return (
    <main className="contact">
      <h1>
        Contact <span>Me</span>
      </h1>
      <p>
        I'm currently looking for opportunities. <br />
        If you're interested connect with me on{' '}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/youssef-ash/"
          rel="noreferrer"
          className="link"
        >
          LinkedIn
        </a>{' '}
        or send me an e&#8209;mail using the button below.
      </p>
      <a
        className="button contact__button"
        href="mailto:youssefashwal@outlook.com"
      >
        E-mail me
      </a>
    </main>
  );
}
