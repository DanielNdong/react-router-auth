import { useAuthContext } from '../../contexts/authContext';
import { PRIVATE, LOGIN, LOGOUT } from '../../config/router/paths';
import { Navigate, Outlet } from 'react-router';
import { Link } from 'react-router-dom';

export default function PublicRoute() {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={PRIVATE} />;
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={LOGOUT}>Iniciar sesion</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
