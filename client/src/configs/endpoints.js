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

  // Cart
  GET_CART_API: {
    method: 'get',
    url: '/cart/user'
  }
}
