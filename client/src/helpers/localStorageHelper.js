import axios from 'axios'
import { KEY_USER_STORAGE, KEY_RF_USER_STORAGE } from '@/configs/constantTypes'
import { refreshTokenAuth } from '@/webServices/authorizationService'
import { BASE_API_URL } from '@/configs/baseUrl'

const refreshTokenApi = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

export const refTokenUserStore = async () => {
  try {
    const refToken = localDeRefreshUserStore()

    const res = await refreshTokenApi.post('/auth/refresh-token', {
      refreshToken: refToken
    })
    const { accessToken, refreshToken } = res.data

    return { accessToken, refreshToken }
  } catch (error) {
    console.log('Error refreshing access token:', error)
    return null
  }
}

export const localEnUserStore = str => {
  if (!str) return
  localStorage.setItem(KEY_USER_STORAGE, JSON.stringify(str))
}

export const localEnRefreshUserStore = str => {
  if (!str) return
  localStorage.setItem(KEY_RF_USER_STORAGE, JSON.stringify(str))
}

export const removeUserStore = () => {
  localStorage.removeItem(KEY_USER_STORAGE)
}

export const removeRefreshUserStore = () => {
  localStorage.removeItem(KEY_RF_USER_STORAGE)
}

export const localDeRefreshUserStore = str => {
  if (!str) {
    str = localStorage.getItem(KEY_RF_USER_STORAGE)
  }
  if (!str) return null
  try {
    return JSON.parse(str)
  } catch (error) {
    return null
  }
}

export const localDeUserStore = str => {
  if (!str) {
    str = localStorage.getItem(KEY_USER_STORAGE)
  }
  if (!str) return null
  try {
    return JSON.parse(str)
  } catch (error) {
    return null
  }
}

export const gtka = () => {
  let str = localStorage.getItem(KEY_USER_STORAGE)
  let jd = localDeUserStore(str)
  if (!jd) return null
  return jd
}
