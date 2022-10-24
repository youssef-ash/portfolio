import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="error">
      <h1 className="error__number">
        <span>404</span>
      </h1>
      <h2 className="error__text">Page Not Found</h2>
      <Link to='/' className="error__link">Go Home</Link>
    </main>
  );
}
