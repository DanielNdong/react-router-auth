import { useAuthContext } from '../contexts/authContext';
import { useEffect } from 'react';

export default function Logout() {
  const { logout } = useAuthContext();

  useEffect(() => {
    logout();
  }, [logout]);
  
  return <div>Logout</div>;
}
