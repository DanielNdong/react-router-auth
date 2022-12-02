import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
//Rutas
import { LOGIN, LOGOUT, PRIVATE } from './config/router/paths'
import AuthContextProvider from './contexts/authContext'
import Profile from './views/Profile'
import Login from './views/Login'
import Logout from './views/Logout'
import Home from './views/Home'
import PublicRoute from './components/router/PublicRoute'
import PrivateRoute from './components/router/PrivateRoute'


function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
        <Routes>
            <Route path={PRIVATE} element={<PrivateRoute />}>
              <Route index element={<Profile />}/>
              <Route path={LOGOUT} element={<Logout />}/>
            </Route>
            <Route path='/' element={<PublicRoute />}>
              <Route index element={<Home />}/>
              <Route path={LOGIN} element={<Login />}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
