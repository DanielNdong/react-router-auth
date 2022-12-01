import { createContext, useContext, useState, useMemo, useCallback } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = useCallback(
    () => {
    setIsAuthenticated(true)
  },[])
  
  const logout = useCallback(
    () => {
    setIsAuthenticated(false)
  },[])
  
  const value = useMemo(
    () => ({
    isAuthenticated,
    login,
    logout
    }),
   [isAuthenticated, login, logout]
   );

  return (
    <AuthContext.Provider 
      value={value}>
      {children}
    </AuthContext.Provider>)
}


export function useAuthContext(){
  return useContext(AuthContext)
}