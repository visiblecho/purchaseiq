const tokenName = 'purchaseiqToken'

export const setToken = (token) => {
  localStorage.setItem(tokenName, token)
}

export const getToken = () => {
  return localStorage.getItem(tokenName)
}

export const removeToken = () => {
  localStorage.removeItem(tokenName)
}

export const getUserFromToken = () => {
    /*
  const token = getToken()
  if (!token) return null
  const payloadString = token.split('.')[1]
  const payloadJSON = atob(payloadString)
  const { user, exp } = JSON.parse(payloadJSON)
  if (exp < Date.now() / 1000) {
    removeToken()
    return null
  }
  return user
  */
 return {
      username: 'Maria',
      email: 'maria@gmail.com',
      language: 'en_US',
      theme: 'light',
    },
}
