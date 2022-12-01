import {useAuthContext} from 'contexts/authContext'

export default function PrivateRoute(){
  const {isAuthenticated} = useAuthContext()

  if(!isAuthenticated){
    return  
  }

}