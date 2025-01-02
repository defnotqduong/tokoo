import api from '@/configs/endpoints'
import connectServer from '@/configs/connectServer'

export const getListProductForStore = id => {
  return connectServer[api.GET_LIST_PRODUCT_FOR_STORE_API.method](api.GET_LIST_PRODUCT_FOR_STORE_API.url + '/' + id)
}

export const getProductInfo = id => {
  return connectServer[api.GET_PRODUCT_INFO_API.method](api.GET_PRODUCT_INFO_API.url + '/' + id)
}

export const createProduct = dataPost => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return connectServer[api.CREATE_PRODUCT_API.method](api.CREATE_PRODUCT_API.url, dataPost, config)
}

export const editProduct = (id, dataPost) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return connectServer[api.EDIT_PRODUCT_API.method](api.EDIT_PRODUCT_API.url + '/' + id, dataPost, config)
}

export const deleteProduct = id => {
  return connectServer[api.DELETE_PRODUCT_API.method](api.DELETE_PRODUCT_API.url + '/' + id)
}
