import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-wrapper">
      <h1 className="not-found-code">404</h1>
      <h2 className="not-found-title">Page not found</h2>
      <p className="not-found-desc">
        The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link to="/" className="not-found-btn" style={{ textDecoration: 'none' }}>
        &larr; Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;