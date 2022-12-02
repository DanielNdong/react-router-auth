import { useAuthContext } from '../../contexts/authContext';
import { Navigate, Outlet } from 'react-router';
import { LOGIN, LOGOUT } from '../../config/router/paths';
import { Link } from 'react-router-dom';

export default function PrivateRoute() {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={LOGIN}></Navigate>;
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={LOGOUT}>Cerrar sesión</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
