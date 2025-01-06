import api from '@/configs/endpoints'
import connectServer from '@/configs/connectServer'

export const getCart = () => {
  return connectServer[api.GET_CART_API.method](api.GET_CART_API.url)
}

export const addToCart = dataPost => {
  return connectServer[api.ADD_TO_CART_API.method](api.ADD_TO_CART_API.url, dataPost)
}

export const updateItemFromCart = dataPost => {
  return connectServer[api.UPDATE_ITEM_FROM_CART_API.method](api.UPDATE_ITEM_FROM_CART_API.url, dataPost)
}

export const deleteItemFromCart = cartItemId => {
  const url = `${api.DELETE_ITEM_FROM_CART_API.url}?cartItemId=${cartItemId}`
  return connectServer[api.DELETE_ITEM_FROM_CART_API.method](url)
}
