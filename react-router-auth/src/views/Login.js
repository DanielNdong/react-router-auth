import { useState } from 'react';
import { useAuthContext } from '../contexts/authContext';

export default function Login() {
  const [magicWord, setMagicWord] = useState('');
  const { login } = useAuthContext();

  const handleInputChange = (e) => {
    setMagicWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (magicWord === 'Latte and Code') {
      login();
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={magicWord} onChange={handleInputChange} />
        <button type="submit">Iniciar sesion</button>
      </form>
    </div>
  );
}
