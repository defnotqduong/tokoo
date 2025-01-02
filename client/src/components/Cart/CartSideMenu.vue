<template>
  <div>
    <div
      class="fixed top-0 left-0 right-0 bottom-0 bg-overlayColor backdrop-blur z-[9999] cursor-pointer transition-all duration-[350ms]"
      :class="homeStore.isShowCartSideMenu ? 'opacity-100 visible' : 'opacity-0 invisible'"
      @click="onChangeCartModal"
    ></div>
    <div class="cart-side-menu w-full sm:w-[80%] lg:w-[60%] xl:w-[50%]" :class="{ 'side-menu-active': homeStore.isShowCartSideMenu }">
      <div class="h-full pt-14 pb-12 px-10 overflow-y-auto">
        <div class="flex items-center justify-between">
          <h4 class="text-3xl text-headingColor font-extrabold">Giỏ hàng của tôi</h4>
          <button
            @click="onChangeCartModal"
            class="relative w-8 h-8 flex items-center justify-center group after:absolute after:content after:left-0 after:top-0 after:w-full after:h-full after:rounded-full after:bg-grayLightColor after:transition-all after:duration-[400ms] hover:after:scale-[1.25] hover:after:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              width="20"
              height="20"
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] text-headingColor transition-all duration-[400ms] group-hover:text-primaryColor"
            >
              <g>
                <path
                  id="Vector"
                  d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <div class="h-[80%] flex items-center justify-center" v-if="userStore.cart.length === 0">
          <img src="@/assets/icons/cart-empty.svg" alt="Cart empty" />
        </div>
        <div v-else class="py-6 relative">
          <ProductCardV4 v-for="product in userStore.cart" :key="product.id" :product="product" class="mb-3" />
        </div>
      </div>
      <div v-if="userStore.cart.length > 0" class="absolute bottom-0 left-0 right-0">
        <div class="p-4 mx-6 bg-whiteColor">
          <ButtonV4 :content="'Xem giỏ hàng'" :func="redirect" class="w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useHomeStore, useUserStore } from '@/stores'

import ProductCardV4 from '@/components/Card/ProductCard/ProductCardV4.vue'
import ButtonV4 from '@/components/Button/ButtonV4.vue'

export default defineComponent({
  components: { ProductCardV4, ButtonV4 },
  setup() {
    const router = useRouter()
    const homeStore = useHomeStore()
    const userStore = useUserStore()

    const onChangeCartModal = () => {
      homeStore.onChangeShowCartSideMenu()
    }

    const redirect = () => {
      homeStore.onChangeShowCartSideMenu()
      router.push({ name: 'cart' })
    }

    return { homeStore, userStore, onChangeCartModal, redirect }
  }
})
</script>

<style scoped>
.cart-side-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  transform: translateX(100%);
  overscroll-behavior: contain;
  transition: transform 0.85s cubic-bezier(0.23, 1, 0.32, 1);
  @apply bg-whiteColor;
}

.cart-side-menu.side-menu-active {
  transform: translateX(0);
}
</style>
