import { useAuthContext } from '../contexts/authContext';

export default function Home() {
  const { isAuthenticated } = useAuthContext();

  return <div>Home : {`${isAuthenticated ? 'YES' : 'NO'}`}</div>;
}
