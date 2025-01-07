import { defineStore } from 'pinia'
import { HOME_STORE } from '@/configs/storeTypes'

export const useHomeStore = defineStore(HOME_STORE, {
  state: () => ({
    isShowCartSideMenu: false,
    popularProducts: [],
    hightLightCategories: [],
    latestProducts: []
  }),
  actions: {
    onChangeShowCartSideMenu() {
      this.isShowCartSideMenu = !this.isShowCartSideMenu
    },
    setPopularProducts(products) {
      this.popularProducts = products
    },
    setHighLightCategories(categories) {
      this.hightLightCategories = categories
    },
    setLatestProducts(products) {
      this.latestProducts = products
    }
  }
})
