import api from '@/configs/endpoints'
import connectServer from '@/configs/connectServer'

export const getListCategory = () => {
  return connectServer[api.GET_LIST_CATEGORY_API.method](api.GET_LIST_CATEGORY_API.url)
}

export const getAllCategory = () => {
  return connectServer[api.GET_ALL_CATEGORY_API.method](api.GET_ALL_CATEGORY_API.url)
}

export const createCategory = dataPost => {
  return connectServer[api.CREATE_CATEGORY_API.method](api.CREATE_CATEGORY_API.url, dataPost)
}

export const editCategory = (id, dataPost) => {
  return connectServer[api.EDIT_CATEGORY_API.method](api.EDIT_CATEGORY_API.url + '/' + id, dataPost)
}

export const deleteCategory = id => {
  return connectServer[api.DELETE_CATEGORY_API.method](api.DELETE_CATEGORY_API.url + '/' + id)
}
