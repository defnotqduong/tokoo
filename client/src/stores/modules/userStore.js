import { defineStore } from 'pinia'
import { USER_STORE } from '@/configs/storeTypes'
import { removeUserStore, removeRefreshUserStore, localEnUserStore, localEnRefreshUserStore } from '@/helpers/localStorageHelper'

export const useUserStore = defineStore(USER_STORE, {
  state: () => ({
    user: null,
    cart: [],
    wishlist: []
  }),
  actions: {
    login(accToken, refToken) {
      localEnUserStore(accToken)
      localEnRefreshUserStore(refToken)
    },
    logout() {
      removeUserStore()
      removeRefreshUserStore()
      this.user = null
    },
    setUser(user) {
      this.user = user
    },
    setCart(items) {
      this.cart = items
    }
  }
})
