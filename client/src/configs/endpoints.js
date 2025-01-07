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

  // Address
  GET_LIST_ADDRESS_API: {
    method: 'get',
    url: '/user/addresses'
  },

  ADD_ADDRESS_API: {
    method: 'post',
    url: '/user/address'
  },

  UPDATE_ADDRESS_API: {
    method: 'put',
    url: '/user/address'
  },

  DELETE_ADDRESS_API: {
    method: 'deleted',
    url: '/user/address'
  },

  // Request create store
  REQUEST_CREATE_STORE_API: {
    method: 'post',
    url: '/user/create-store-request'
  },

  GET_STORE_REQUEST_STATE_API: {
    method: 'get',
    url: '/user/store-request-state'
  },

  // Category
  GET_ALL_CATEGORY_API: {
    method: 'get',
    url: '/categories/all'
  },
  GET_HIGHLIGHT_CATEGORY_API: {
    method: 'get',
    url: '/categories/highlight'
  },

  // Cart
  GET_CART_API: {
    method: 'get',
    url: '/cart/user'
  },
  ADD_TO_CART_API: {
    method: 'post',
    url: '/cart/user/add'
  },
  UPDATE_ITEM_FROM_CART_API: {
    method: 'put',
    url: '/cart/user'
  },
  DELETE_ITEM_FROM_CART_API: {
    method: 'deleted',
    url: '/cart/user'
  },
  // Product
  FIND_PRODUCT_API: {
    method: 'get',
    url: '/product/public/search'
  },

  GET_PRODUCT_INFO_API: {
    method: 'get',
    url: '/product/public'
  },
  GET_LIST_VARIANT_API: {
    method: 'get',
    url: '/public/variant'
  },
  GET_LIST_SIZE_API: {
    method: 'get',
    url: '/public/size'
  },
  // Order
  CREATE_ORDER_API: {
    method: 'post',
    url: '/order/create'
  },
  GET_ALL_ORDER_API: {
    method: 'get',
    url: '/order/all'
  },
  PAYMENT_VNPAY_API: {
    method: 'post',
    url: '/payment/create'
  }
}
