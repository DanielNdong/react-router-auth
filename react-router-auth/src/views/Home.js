import {useAuthContext} from '../contexts/authContext'

export default function Home(){
  const value = useAuthContext();
  return(
    <div>
      Home : {value}
    </div>
  )
}