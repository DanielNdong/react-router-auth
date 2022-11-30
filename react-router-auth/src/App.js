import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
//Rutas
import Profile from './views/Profile'
import Login from './views/Login'
import Logout from './views/Logout'
import Home from './views/Home'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/logout" element={<Logout />}/>
            <Route path="/" element={<Home />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
