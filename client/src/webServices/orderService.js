import api from '@/configs/endpoints'
import connectServer from '@/configs/connectServer'

export const getAllOrder = () => {
  return connectServer[api.GET_ALL_ORDER_API.method](api.GET_ALL_ORDER_API.url)
}

export const createOrder = dataPost => {
  return connectServer[api.CREATE_ORDER_API.method](api.CREATE_ORDER_API.url, dataPost)
}

export const paymentVNPay = dataPost => {
  return connectServer[api.PAYMENT_VNPAY_API.method](api.PAYMENT_VNPAY_API.url, dataPost)
}
