import axios from 'axios'
import { getAccessToken, setAccessToken } from './token.js'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials: true,
})

/* Interceptors for authentication */

api.interceptors.request.use((config) => {
  const token = getAccessToken()
  if (token) config.headers.Authorization = `Bearer ${token}`
  console.log('Request interceptor')
  console.log(config.url)
  return config
})

api.interceptors.response.use(
  (res) => {
    console.log('Response Interceptor: Success')
    console.log(res.data)
    return res
  },
  async (err) => {
    const original = err.config
    console.log('Response Interceptor: Failure')

    if (err.response?.status === 401 && !original._retry) {
      original._retry = true

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/token/refresh/`,
        {},
        { withCredentials: true },
      )

      setAccessToken(res.data.access)
      original.headers.Authorization = `Bearer ${res.data.access}`
      return api(original)
    }
    return Promise.reject(err)
  },
)

export default api
