import api from '@/configs/endpoints'
import connectServer from '@/configs/connectServer'

export const registerUser = dataPost => {
  return connectServer[api.REGISTER_USER_API.method](api.REGISTER_USER_API.url, dataPost)
}

export const loginUser = dataPost => {
  return connectServer[api.LOGIN_USER_API.method](api.LOGIN_USER_API.url, dataPost)
}

export const loginWithGoogle = dataPost => {
  return connectServer[api.LOGIN_GOOGLE_API.method](api.LOGIN_GOOGLE_API.url, dataPost)
}

export const refreshTokenAuth = dataPost => {
  return connectServer[api.REFRESH_TOKEN_API.method](api.REFRESH_TOKEN_API.url, dataPost)
}

export const forgotPassword = dataPost => {
  return connectServer[api.FORGOT_PASSWORD_API.method](api.FORGOT_PASSWORD_API.url, dataPost)
}

export const resetPassword = (token, dataPost) => {
  const url = `${api.RESET_PASSWORD_API.url}?token=${token}`
  return connectServer[api.RESET_PASSWORD_API.method](url, dataPost)
}

export const logoutUser = dataPost => {
  return connectServer[api.LOGOUT_USER_API.method](api.LOGOUT_USER_API.url, dataPost)
}
