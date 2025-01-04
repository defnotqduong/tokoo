import api from '@/configs/endpoints'
import connectServer from '@/configs/connectServer'

export const getListProductForStore = (id, options = {}) => {
  const queryParams = new URLSearchParams(options).toString()
  const url = `${api.GET_LIST_PRODUCT_FOR_STORE_API.url}/${id}${queryParams ? `?${queryParams}` : ''}`
  return connectServer[api.GET_LIST_PRODUCT_FOR_STORE_API.method](url)
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

export const getListVariant = id => {
  return connectServer[api.GET_LIST_VARIANT_API.method](api.GET_LIST_VARIANT_API.url + '/' + id)
}

export const addVatirant = dataPost => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return connectServer[api.ADD_VARIANT_API.method](api.ADD_VARIANT_API.url, dataPost, config)
}

export const editVariant = (id, dataPost) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  return connectServer[api.EDIT_VARIANT_API.method](api.EDIT_VARIANT_API.url + '/' + id, dataPost, config)
}

export const deleteVariant = id => {
  return connectServer[api.DELETE_VARIANT_API.method](api.DELETE_VARIANT_API.url + '/' + id)
}

export const getListSize = id => {
  return connectServer[api.GET_LIST_SIZE_API.method](api.GET_LIST_SIZE_API.url + '/' + id)
}

export const addSize = dataPost => {
  return connectServer[api.ADD_SIZE_API.method](api.ADD_SIZE_API.url, dataPost)
}

export const editSize = (id, dataPost) => {
  return connectServer[api.EDIT_SIZE_API.method](api.EDIT_SIZE_API.url + '/' + id, dataPost)
}

export const deleteSize = id => {
  return connectServer[api.DELETE_SIZE_API.method](api.DELETE_SIZE_API.url + '/' + id)
}
