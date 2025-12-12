import { createContext, useState } from 'react'
// import { getUserFromToken, removeToken } from "../utils/token";

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    // getUserFromToken()
    {
      username: 'Maria',
      email: 'maria@gmail.com',
      language: 'en_US',
      theme: 'light',
    },
  )

  const signOut = () => {
    // removeToken()
    setUser(null)
  }

  const resetPassword = () => {
    console.log('Reset password not implemented yet')
  }

  const deleteAccount = () => {
    console.log('Delete account not implemented yet')
  }

  return (
    <UserContext.Provider
      value={{ user, setUser, signOut, resetPassword, deleteAccount }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
