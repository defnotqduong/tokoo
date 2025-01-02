import axios from 'axios'
import { TIMEOUT } from '@/configs/constantTypes'
import { refTokenUserStore, localEnUserStore, localEnRefreshUserStore, gtka } from '@/helpers/localStorageHelper'
import { useUserStore } from '@/stores'
import { BASE_API_URL } from '@/configs/baseUrl'

const connectServer = (config = {}) => {
  const userStore = useUserStore()

  let headersDefault = {
    'Content-Type': 'application/json; charset=utf-8'
  }
  let headers = config.headers ? { ...headersDefault, ...config.headers } : headersDefault

  const token = gtka()
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const api = axios.create({
    ...config,
    headers: headers
  })

  api.interceptors.response.use(
    response => {
      return response
    },
    async error => {
      const originalRequest = error.config
      if (error.response?.status === 419 && !originalRequest._retry) {
        originalRequest._retry = true

        const tokens = await refTokenUserStore()

        if (!tokens?.accessToken) {
          userStore.logout()
          window.location.href = '/'
        } else {
          localEnUserStore(tokens.accessToken)
          localEnRefreshUserStore(tokens.refreshToken)
          originalRequest.headers.Authorization = `Bearer ${tokens.accessToken}`
          return api(originalRequest)
        }
      } else {
        return Promise.reject(error)
      }
    }
  )

  return api
}

export const endpointAccess = path => {
  return `${BASE_API_URL}/api${path}`
}

export const get = async (path, data = {}, config = {}) => {
  try {
    path = endpointAccess(path)
    const res = await connectServer(config).get(path, data)
    return res.data
  } catch (err) {
    console.log('catch api GET:', err)
    return err.response
  }
}

export const post = async (path, data = {}, config = {}) => {
  try {
    path = endpointAccess(path)
    const res = await connectServer(config).post(path, data)
    return res.data
  } catch (err) {
    console.log('catch api POST: ', err)
    return err.response
  }
}

export const put = async (path, data = {}, config = {}) => {
  try {
    path = endpointAccess(path)
    const res = await connectServer(config).put(path, data)
    return res.data
  } catch (err) {
    console.log('catch api PUT: ', err)
    return err.response
  }
}

export const patch = async (path, data = {}, config = {}) => {
  try {
    path = endpointAccess(path)
    const res = await connectServer(config).patch(path, data)
    return res.data
  } catch (err) {
    console.log('catch api PATCH: ', err)
    return err.response
  }
}

export const deleted = async (path, data = {}, config = {}) => {
  try {
    path = endpointAccess(path)
    const res = await connectServer(config).delete(path, data)
    return res.data
  } catch (err) {
    console.log('catch api DELETE: ', err)
    return err.response
  }
}

export default { get, post, put, patch, deleted, endpointAccess }
