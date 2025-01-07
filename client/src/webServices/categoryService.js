import api from '@/configs/endpoints'
import connectServer from '@/configs/connectServer'

export const getAllCategory = () => {
  return connectServer[api.GET_ALL_CATEGORY_API.method](api.GET_ALL_CATEGORY_API.url)
}

export const getHighLightCategory = () => {
  return connectServer[api.GET_HIGHLIGHT_CATEGORY_API.method](api.GET_HIGHLIGHT_CATEGORY_API.url)
}
