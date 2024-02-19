import { createContext, useState } from "react"


export const AuthContext = createContext()

const AuthContextComponent = ({children}) => {

    const [user, setUser] = useState({})
    const [isLogged, setIsLogged] = useState(true)

    let handleLoginAuth = (userData) => {
        setUser(userData)
        setIsLogged(true)
    }

    let handleLogoutAuth =() =>{
        setUser({})
        setIsLogged(false)
    }

    const data = {handleLoginAuth, handleLogoutAuth, user, isLogged}


  return (
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextComponent