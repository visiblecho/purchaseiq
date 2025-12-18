import api from './api'

// Sign-up
export const signUp = async () => {}

// Sign-in
export const signIn = async (username, password) => {
  const res = await api.post('/auth/token/', { username, password })
  return res
}

// Sign-out
export const signOut = async () => {
  const res = await api.post('/auth/logout/')
  return res
}

// Refresh
export const refresh = async () => {
  const res = await api.post('/auth/token/refresh/')
  return res
}

// Get user details
export const aboutMe = async () => {
  const res = await api.get('/auth/me/')
  return res
}

// Update user details
export const patchMe = async (new_user) => {
  const res = await api.patch('/auth/me/', { ...new_user })
  return res
}
