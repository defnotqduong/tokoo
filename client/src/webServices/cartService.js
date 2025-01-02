import api from '@/configs/endpoints'
import connectServer from '@/configs/connectServer'

export const getCart = () => {
  return connectServer[api.GET_CART_API.method](api.GET_CART_API.url)
}
