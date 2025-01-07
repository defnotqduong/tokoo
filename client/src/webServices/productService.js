import api from '@/configs/endpoints'
import connectServer from '@/configs/connectServer'

export const findProducts = (options = {}) => {
  const filteredOptions = Object.fromEntries(Object.entries(options).filter(([_, value]) => value !== null && value !== 0))
  const queryString = new URLSearchParams(filteredOptions).toString()
  const urlWithQuery = `${api.FIND_PRODUCT_API.url}?${queryString}`
  return connectServer[api.FIND_PRODUCT_API.method](urlWithQuery)
}

export const getPopularProduct = (options = {}) => {
  const filteredOptions = Object.fromEntries(Object.entries(options).filter(([_, value]) => value !== null && value !== 0))
  const queryString = new URLSearchParams(filteredOptions).toString()
  const urlWithQuery = `${api.FIND_PRODUCT_API.url}?${queryString}`
  return connectServer[api.FIND_PRODUCT_API.method](urlWithQuery)
}

export const getLatestProduct = (options = {}) => {
  const filteredOptions = Object.fromEntries(Object.entries(options).filter(([_, value]) => value !== null && value !== 0))
  const queryString = new URLSearchParams(filteredOptions).toString()
  const urlWithQuery = `${api.FIND_PRODUCT_API.url}?${queryString}`
  return connectServer[api.FIND_PRODUCT_API.method](urlWithQuery)
}

export const getProductInfo = id => {
  const urlWithQuery = `${api.GET_PRODUCT_INFO_API.url}?id=${encodeURIComponent(id)}`
  return connectServer[api.GET_PRODUCT_INFO_API.method](urlWithQuery)
}

export const getListVariant = id => {
  return connectServer[api.GET_LIST_VARIANT_API.method](api.GET_LIST_VARIANT_API.url + '/' + id)
}

export const getListSize = id => {
  return connectServer[api.GET_LIST_SIZE_API.method](api.GET_LIST_SIZE_API.url + '/' + id)
}
