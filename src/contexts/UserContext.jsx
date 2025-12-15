import { createContext, useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../contexts/ThemeProvider/ThemeProvider.jsx'

import api from '../utils/api.js'
import { setAccessToken } from '../utils/token.js'

const UserContext = createContext(null)
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const { toggleTheme } = useTheme()
  const { i18n } = useTranslation()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchUser = async () => {
    const res = await api.get('/auth/me/')
    setUser(res.data)
  }

  const login = async (username, password) => {
    const res = await api.post('/auth/token/', { username, password })
    setAccessToken(res.data.access)
    await fetchUser()
  }

  const logout = () => {
    setAccessToken(null)
    setUser(null)
  }

  const updateUser = async ( new_values ) => {
    const new_user = {...user, ...new_values}
    console.log(new_user)
    setUser(new_user)
    const res = await api.patch('/auth/me/', { new_user })
  }

  useEffect(() => {
    const init = async () => {
      try {
        const res = await api.post('/auth/token/refresh/')
        setAccessToken(res.data.access)
        await fetchUser()
      } catch {
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
    }
  }, [user])

  return (
    <UserContext.Provider value={{ user, login, logout, loading, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
