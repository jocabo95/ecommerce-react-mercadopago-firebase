import { createContext } from "react"


export const AuthContext = createContext()

const AuthContextComponent = ({children}) => {
  return (
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextComponent