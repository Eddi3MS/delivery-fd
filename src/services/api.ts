import axios, { AxiosError } from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
  withCredentials: true,
})

api.interceptors.request.use(
  function (config) {
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json'
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (success) => {
    return success
  },
  async (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('curr-user')
      window.location.href = '/'
    }

    return Promise.reject(error)
  }
)

export { api }
