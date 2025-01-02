import api from '@/configs/endpoints'
import connectServer from '@/configs/connectServer'

export const getStoreInfo = () => {
  return connectServer[api.GET_STORE_INFO_API.method](api.GET_STORE_INFO_API.url)
}
