export default {
  // User
  REGISTER_USER_API: {
    method: 'post',
    url: '/auth/sign-up'
  },
  LOGIN_USER_API: {
    method: 'post',
    url: '/auth/sign-in'
  },
  LOGIN_GOOGLE_API: {
    method: 'post',
    url: '/auth/google'
  },
  REFRESH_TOKEN_API: {
    method: 'post',
    url: '/auth/refresh-token'
  },
  GET_USER_PROFILE_API: {
    method: 'get',
    url: '/user/profile'
  },
  UPDATE_PROFILE_API: {
    method: 'put',
    url: '/user/profile'
  },
  UPDATE_AVATAR_API: {
    method: 'put',
    url: '/user/update-avatar'
  },
  CHANGE_PASSWORD_API: {
    method: 'put',
    url: '/auth/user/change-password'
  },
  FORGOT_PASSWORD_API: {
    method: 'post',
    url: '/auth/forgot-password'
  },
  CHECK_PASSWORD_RESET_TOKEN_API: {
    method: 'post',
    url: '/auth/check-password-reset-token'
  },
  RESET_PASSWORD_API: {
    method: 'post',
    url: '/auth/reset-password'
  },
  LOGOUT_USER_API: {
    method: 'post',
    url: '/user/log-out'
  },

  // Store
  GET_STORE_INFO_API: {
    method: 'get',
    url: '/store/info'
  },

  // Category
  GET_LIST_CATEGORY_API: {
    method: 'get',
    url: '/categories'
  },
  GET_ALL_CATEGORY_API: {
    method: 'get',
    url: '/categories/all'
  },
  CREATE_CATEGORY_API: {
    method: 'post',
    url: '/categories/admin'
  },
  EDIT_CATEGORY_API: {
    method: 'put',
    url: '/categories/admin'
  },
  DELETE_CATEGORY_API: {
    method: 'deleted',
    url: '/categories/admin'
  },

  // Product
  GET_LIST_PRODUCT_FOR_STORE_API: {
    method: 'get',
    url: '/product/public/store'
  },
  GET_PRODUCT_INFO_API: {
    method: 'get',
    url: '/product/public'
  },
  CREATE_PRODUCT_API: {
    method: 'post',
    url: '/store/product/add'
  },
  EDIT_PRODUCT_API: {
    method: 'put',
    url: '/store/product'
  },
  DELETE_PRODUCT_API: {
    method: 'deleted',
    url: '/store/product'
  },
  GET_LIST_VARIANT_API: {
    method: 'get',
    url: '/public/variant'
  },
  ADD_VARIANT_API: {
    method: 'post',
    url: '/store/variant/add'
  },
  EDIT_VARIANT_API: {
    method: 'put',
    url: '/store/variant'
  },
  DELETE_VARIANT_API: {
    method: 'deleted',
    url: '/store/variant'
  },
  GET_LIST_SIZE_API: {
    method: 'get',
    url: '/public/size'
  },
  ADD_SIZE_API: {
    method: 'post',
    url: '/store/size'
  },
  EDIT_SIZE_API: {
    method: 'put',
    url: '/store/size'
  },
  DELETE_SIZE_API: {
    method: 'deleted',
    url: '/store/size'
  }
}
