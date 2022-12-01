import {useAuthContext} from 'contexts/useAuthContext'
import {PRIVATE, LOGIN} from 'config/router/paths'
import {Navigate} from 'react-router'
import {Link} from 'react-router-dom'

export default function PublicRoute(){
  const {isAuthenticated} = useAuthContext()


  if(isAuthenticated){
    return <Navigate to={PRIVATE} />
  }

  return(
    <div>
      <nav>
        <ul>
          <li><Link to={LOGIN}>Inicio</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}