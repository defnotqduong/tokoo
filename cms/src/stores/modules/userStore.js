import { defineStore } from 'pinia'
import { USER_STORE } from '@/configs/storeTypes'
import { removeUserStore, removeRefreshUserStore, localEnUserStore, localEnRefreshUserStore } from '@/helpers/localStorageHelper'

export const useUserStore = defineStore(USER_STORE, {
  state: () => ({
    user: null,
    store: null
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
      this.store = null
    },
    setUser(user) {
      this.user = user
    },
    setStore(store) {
      this.store = store
    }
  }
})
