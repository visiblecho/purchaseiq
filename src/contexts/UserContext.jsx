import { createContext, useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../contexts/ThemeProvider/ThemeProvider.jsx'

import { signIn, signOut, aboutMe, patchMe } from '../utils/auth.js'

const UserContext = createContext(null)
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const { toggleTheme } = useTheme()
  const { i18n } = useTranslation()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchUser = async () => {
    const res = await aboutMe()
    setUser(res.data)
  }

  const login = async (username, password) => {
    await signIn(username, password)
    await fetchUser()
  }

  const logout = async () => {
    await signOut()
    setUser(null)
  }

  const updateUser = async (newValues) => {
    const newUser = { ...user, ...newValues }
    await patchMe(newUser)
    setUser(newUser)
  }

  useEffect(() => {
    const init = async () => {
      try {
        await fetchUser()
      } catch (error) {
        console.log(error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [])

  useEffect(() => {
    if (user) {
      toggleTheme(user.theme)
      i18n.changeLanguage(user.language)
    } else {
      toggleTheme('light')
      i18n.changeLanguage('en_US')
    }
  }, [user])

  return (
    <UserContext.Provider value={{ user, login, logout, loading, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
