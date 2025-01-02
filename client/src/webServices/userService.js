import api from '@/configs/endpoints'
import connectServer from '@/configs/connectServer'

export const getUserProfile = dataPost => {
  return connectServer[api.GET_USER_PROFILE_API.method](api.GET_USER_PROFILE_API.url, dataPost)
}

export const updateProfile = dataPost => {
  return connectServer[api.UPDATE_PROFILE_API.method](api.UPDATE_PROFILE_API.url, dataPost)
}

export const updateAvatar = dataPost => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return connectServer[api.UPDATE_AVATAR_API.method](api.UPDATE_AVATAR_API.url, dataPost, config)
}

export const changePassword = dataPost => {
  return connectServer[api.CHANGE_PASSWORD_API.method](api.CHANGE_PASSWORD_API.url, dataPost)
}

export const getListAddress = () => {
  return connectServer[api.GET_LIST_ADDRESS_API.method](api.GET_LIST_ADDRESS_API.url)
}

export const addAddress = dataPost => {
  return connectServer[api.ADD_ADDRESS_API.method](api.ADD_ADDRESS_API.url, dataPost)
}

export const updateAddress = dataPost => {
  return connectServer[api.UPDATE_ADDRESS_API.method](api.UPDATE_ADDRESS_API.url, dataPost)
}

export const deleteAddress = id => {
  return connectServer[api.DELETE_ADDRESS_API.method](api.DELETE_ADDRESS_API.url + '/' + id)
}
