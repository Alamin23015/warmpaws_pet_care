import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-9xl font-extrabold text-primary">404</h1>
      <p className="text-2xl font-semibold md:text-3xl">Page Not Found</p>
      <p className="mt-4 mb-8 text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;