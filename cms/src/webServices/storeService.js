import api from '@/configs/endpoints'
import connectServer from '@/configs/connectServer'

export const getStoreInfo = () => {
  return connectServer[api.GET_STORE_INFO_API.method](api.GET_STORE_INFO_API.url)
}

export const getAllRequestByAdmin = () => {
  return connectServer[api.GET_ALL_REQUEST_BY_ADMIN_API.method](api.GET_ALL_REQUEST_BY_ADMIN_API.url)
}

export const confirmRequestByAdmin = id => {
  return connectServer[api.CONFIRM_REQUEST_BY_ADMIN_API.method](api.CONFIRM_REQUEST_BY_ADMIN_API.url + '/' + id)
}
