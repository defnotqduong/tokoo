import api from '@/configs/endpoints'
import connectServer from '@/configs/connectServer'

export const getAllOrderByStore = () => {
  return connectServer[api.GET_ALL_ORDER_BY_STORE_API.method](api.GET_ALL_ORDER_BY_STORE_API.url)
}

export const getOrderDetailByStore = id => {
  return connectServer[api.GET_ORDER_DETAILS_BY_STORE_API.method](api.GET_ORDER_DETAILS_BY_STORE_API.url + '/' + id)
}
