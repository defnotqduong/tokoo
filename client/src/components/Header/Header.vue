<template>
  <header :class="{ 'header-sticky': isHeaderFixed }">
    <div class="py-3">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <div>
            <router-link :to="{ name: 'home' }" class="text-whiteColor">
              <svg xmlns="http://www.w3.org/2000/svg" width="110" height="30" viewBox="0 0 117 31" fill="currentColor">
                <path
                  class="tokoo-svg"
                  d="M24.471,26.8L22.72,6.809a0.847,0.847,0,0,0-.838-0.78h-3.6a6.041,6.041,0,0,0-12.083,0H2.6a0.843,0.843,0,0,0-.838.78L0.006,26.8c0,0.026-.006.05-0.006,0.076A4.381,4.381,0,0,0,4.59,31h15.3a4.381,4.381,0,0,0,4.59-4.126A0.309,0.309,0,0,0,24.471,26.8ZM12.239,1.712a4.386,4.386,0,0,1,4.353,4.317H7.886A4.385,4.385,0,0,1,12.239,1.712Zm7.648,27.576H4.59a2.7,2.7,0,0,1-2.9-2.377L3.365,7.747H6.191v2.6a0.844,0.844,0,1,0,1.688,0v-2.6h8.712v2.6a0.844,0.844,0,1,0,1.689,0v-2.6h2.827l1.682,19.164A2.709,2.709,0,0,1,19.887,29.288Zm24.472-.042h1.26a1.533,1.533,0,0,0,1.188-.47,1.766,1.766,0,0,0,0-2.315,1.535,1.535,0,0,0-1.188-.47h-1.26a2.793,2.793,0,0,1-1.962-.543,2.506,2.506,0,0,1-.558-1.844v-8.68h4.393a0.882,0.882,0,0,0,.756-0.416,1.861,1.861,0,0,0,0-1.989,0.883,0.883,0,0,0-.756-0.416H41.839V5.485a1.03,1.03,0,0,0-.594-0.868,2.483,2.483,0,0,0-1.314-.362,2.389,2.389,0,0,0-1.3.362,1.031,1.031,0,0,0-.576.868V23.6q0,5.642,6.3,5.642h0Zm6.877-1.881a7.323,7.323,0,0,0,10.424-.018,6.805,6.805,0,0,0,2.251-5.009V19.011A6.677,6.677,0,0,0,61.679,14,7.521,7.521,0,0,0,51.2,14.02,6.745,6.745,0,0,0,49,19.011v3.327A6.808,6.808,0,0,0,51.237,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.653,3.653,0,0,1,1.1,2.587v3.305a3.755,3.755,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.786,3.786,0,0,1-1.08-2.641V19.022Zm15,9.826a2.1,2.1,0,0,0,1.314.4,2.346,2.346,0,0,0,1.368-.4,1.1,1.1,0,0,0,.576-0.868V23.46l2.629-2.387,5.293,7.848a1.2,1.2,0,0,0,1.008.543,2.166,2.166,0,0,0,1.4-.633,1.761,1.761,0,0,0,.72-1.284,1.17,1.17,0,0,0-.216-0.651l-5.653-8.174,4.645-4.159a1.084,1.084,0,0,0,.324-0.8,1.691,1.691,0,0,0-.612-1.23,1.807,1.807,0,0,0-1.224-.579,1.075,1.075,0,0,0-.792.325l-7.526,6.944V3.134a1.018,1.018,0,0,0-.558-0.886A2.6,2.6,0,0,0,69.1,1.9a2.325,2.325,0,0,0-1.332.344,1.034,1.034,0,0,0-.5.886V27.98A1.108,1.108,0,0,0,67.782,28.848ZM85.7,27.366a7.323,7.323,0,0,0,10.424-.018,6.805,6.805,0,0,0,2.25-5.009V19.011A6.677,6.677,0,0,0,96.137,14a7.521,7.521,0,0,0-10.478.018,6.745,6.745,0,0,0-2.2,4.991v3.327A6.807,6.807,0,0,0,85.7,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.654,3.654,0,0,1,1.1,2.587v3.305a3.755,3.755,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.786,3.786,0,0,1-1.08-2.641V19.022Zm15.987,8.343a7.323,7.323,0,0,0,10.424-.018,6.8,6.8,0,0,0,2.25-5.009V19.011A6.677,6.677,0,0,0,113.673,14a7.521,7.521,0,0,0-10.478.018,6.744,6.744,0,0,0-2.2,4.991v3.327A6.807,6.807,0,0,0,103.231,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.653,3.653,0,0,1,1.1,2.587v3.305a3.754,3.754,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.787,3.787,0,0,1-1.08-2.641V19.022Z"
                ></path>
              </svg>
            </router-link>
          </div>
          <nav class="hidden lg:block">
            <ul class="flex items-center justify-center gap-6">
              <li class="has-child-menu">
                <router-link :to="{ name: 'home' }" class="flex items-center justify-center gap-1">
                  <span>Trang chủ</span>
                </router-link>
              </li>
              <li class="has-child-menu">Shop</li>
              <li class="has-child-menu">
                <a class="flex items-center justify-center gap-1">
                  <span>Danh mục</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </a>
                <ul class="sub-menu mega-menu grid grid-cols-12">
                  <li v-for="(cat, i) in homeStore.hightLightCategories" :key="i" class="col-span-6">
                    <router-link :to="{ name: 'products', query: { categoryId: cat.id } }" class="line-clamp-1">
                      {{ cat?.name }}
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="has-child-menu"><a href="">Giới thiệu</a></li>
              <li class="has-child-menu"><a href="">Blog</a></li>
              <li class="has-child-menu"><a href="">Liên hệ</a></li>
            </ul>
          </nav>
          <div class="flex items-center justify-center gap-2">
            <button
              @click="onChangeSearchEl"
              class="relative w-7 h-7 flex items-center justify-center group after:absolute after:content after:left-0 after:top-0 after:w-full after:h-full after:rounded-full after:bg-grayLightColor after:transition-all after:duration-[400ms] hover:after:scale-[1.2] hover:after:opacity-100"
              :class="isShowSearchEl ? 'after:opacity-100 after:scale-[1.3]' : 'after:opacity-0 after:scale-[0.8]'"
              title="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] w-5 h-5 text-primaryColor transition-all duration-[400ms] group-hover:text-primaryColor"
                v-show="isShowSearchEl"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] w-5 h-5 text-whiteColor transition-all duration-[400ms] group-hover:text-primaryColor"
                v-show="!isShowSearchEl"
              >
                <path
                  d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <template v-if="userStore.user">
              <ul class="ml-1 flex items-center justify-center gap-5">
                <li class="has-child-menu">
                  <button @click="onChangeCartModel" class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-5 h-5">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.5 3m0 0L7 15h11l3-9H5.5z" />
                      <circle cx="8" cy="20" r="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                      <circle cx="17" cy="20" r="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    <span
                      class="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-whiteColor text-sm text-primaryColor font-semibold flex items-center justify-center"
                    >
                      {{ userStore.cart.length }}
                    </span>
                  </button>
                </li>
                <li class="has-child-menu">
                  <button @click="redirectWishlistPage" class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span
                      class="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-whiteColor text-sm text-primaryColor font-semibold flex items-center justify-center"
                    >
                      {{ userStore.wishlist.length }}
                    </span>
                  </button>
                </li>
                <li class="has-child-menu">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span
                    class="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-whiteColor text-sm text-primaryColor font-semibold flex items-center justify-center"
                  >
                    1
                  </span>
                </li>
                <li class="user-menu ml-1 flex items-center justify-center gap-4">
                  <div class="hidden lg:block w-[1.5px] h-9 bg-borderColor"></div>
                  <a
                    class="flex items-center justify-center gap-2 text-headingColor text-base font-bold cursor-pointer transitin-all duration-[400ms] hover:text-primaryColor"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-5 h-5">
                      <path
                        d="M17.5 21.0001H6.5C5.11929 21.0001 4 19.8808 4 18.5001C4 14.4194 10 14.5001 12 14.5001C14 14.5001 20 14.4194 20 18.5001C20 19.8808 18.8807 21.0001 17.5 21.0001Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span class="hidden lg:block mt-1 line-clamp-1">{{ userStore.user.username }}</span>
                  </a>
                  <UserMenu />
                </li>
              </ul>
            </template>
            <template v-else>
              <ButtonV1 :content="'Đăng nhập'" :func="redirect" class="ml-3" />
            </template>
            <div class="block lg:hidden px-[10px]">
              <input hidden="" class="check-icon" id="check-icon" name="check-icon" type="checkbox" />
              <label class="icon-menu" for="check-icon">
                <div class="bar bar--1"></div>
                <div class="bar bar--2"></div>
                <div class="bar bar--3"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="search-container" :class="isShowSearchEl && 'active'">
      <SearchEl :onChangeSearchEl="onChangeSearchEl" />
    </div>
  </header>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useHomeStore, useUserStore } from '@/stores'

import PrimaryButton from '@/components/Button/PrimaryButton.vue'
import ButtonV1 from '@/components/Button/ButtonV1.vue'
import SearchEl from '@/components/SearchEl/SearchEl.vue'
import UserMenu from '@/components/Header/UserMenu.vue'

export default defineComponent({
  components: { PrimaryButton, ButtonV1, SearchEl, UserMenu },
  setup() {
    const homeStore = useHomeStore()
    const userStore = useUserStore()

    const router = useRouter()

    const isHeaderFixed = ref(false)
    const isShowSearchEl = ref(false)

    const handleScroll = () => {
      if (window.scrollY > 100) {
        isHeaderFixed.value = true
      } else {
        isHeaderFixed.value = false
      }
    }

    const onChangeCartModel = () => {
      homeStore.onChangeShowCartSideMenu()
    }

    const onChangeSearchEl = () => {
      isShowSearchEl.value = !isShowSearchEl.value
    }

    const redirect = () => {
      router.push({ name: 'auth-login' })
    }

    const redirectWishlistPage = () => {
      router.push({ name: 'wishlist' })
    }

    return {
      homeStore,
      userStore,
      isHeaderFixed,
      isShowSearchEl,
      handleScroll,
      onChangeSearchEl,
      redirect,
      onChangeCartModel,
      redirectWishlistPage
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  }
})
</script>

<style scoped>
header {
  position: relative;
  box-shadow: 0 20px 34px rgba(0, 0, 0, 0.05);
  @apply bg-primaryColor;
}

header.header-sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9002;
  animation: stickySlideDown 0.65s cubic-bezier(0.23, 1, 0.32, 1) both;
}

.has-child-menu {
  position: relative;
}

.user-menu,
.user-menu > a,
.has-child-menu,
.has-child-menu > a {
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.3s;
  @apply text-whiteColor;
}

.has-child-menu > a > svg {
  width: 14px;
  height: 14px;
  transition: transform 0.3s, color 0.3s 0.1s;
}

.user-menu,
.user-menu > a,
.has-child-menu:hover,
.has-child-menu:hover > a {
  @apply text-whiteColor;
}

.has-child-menu:hover > a > svg {
  transform: rotate(180deg);
  @apply text-whiteColor;
}

.sub-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: auto;
  z-index: 2000;
  visibility: hidden;
  min-width: 560px;
  padding: 16px 0;
  border-radius: 6px;
  background: white;
  background-color: white;
  box-shadow: 0px 6px 30px rgba(207, 208, 210, 0.4);
  border-top: 1px solid rgba(225, 224, 231, 0.3);
  overflow-y: auto;
  clip: rect(0, 200vw, 0, 0);
  opacity: 0;
  transform: translateZ(0);
  transition: clip 0.45s linear, opacity 0.25s linear;
}

.sub-menu li a,
.sub-menu li button,
.user-menu-list-wrapper li a,
.user-menu-list-wrapper li button {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 4px;
  margin: 2px 10px;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.4s;
  @apply bg-whiteColor text-bodyColor;
}

.sub-menu li button,
.user-menu-list-wrapper li button {
  width: 100%;
}

.user-menu-list-wrapper li a,
.user-menu-list-wrapper li button {
  margin: 2px 0;
  font-size: 15px;
  font-weight: 500;
}

.user-menu-list-wrapper li a svg,
.user-menu-list-wrapper li button svg {
  width: 20px;
  height: 20px;
  margin-bottom: 2px;
  margin-right: 4px;
}

.sub-menu li a:hover,
.sub-menu li button:hover,
.user-menu-list-wrapper li a:hover,
.user-menu-list-wrapper li button:hover {
  transform: translateX(4px);
  @apply bg-blackOpacityColor text-primaryColor;
}

.has-child-menu:hover .sub-menu,
.has-child-menu:hover .noti-container,
.user-menu:hover .user-menu-list-wrapper {
  visibility: visible;
  opacity: 1;
  clip: rect(0, 100vw, 200vh, -20px);
}

.user-menu {
  position: relative;
}

.noti-container,
.user-menu-list-wrapper {
  position: absolute;
  top: 100%;
  right: 0;
  left: auto;
  z-index: 2000;
  visibility: hidden;
  background: white;
  min-width: 260px;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0px 6px 30px rgba(207, 208, 210, 0.4);
  border-top: 1px solid rgba(225, 224, 231, 0.3);
  overflow-y: auto;
  clip: rect(0, 200vw, 0, 0);
  opacity: 0;
  transform: translateZ(0);
  transition: clip 0.45s linear, opacity 0.25s linear;
}

.search-container {
  position: absolute;
  top: 100%;
  right: 0;
  left: auto;
  z-index: 999;
  visibility: visible;
  background: white;
  width: 100%;
  background-color: white;
  border-top: 1px solid rgba(225, 224, 231, 0.3);
  box-shadow: 0px 6px 34px rgba(215, 216, 222, 0.4);
  clip: rect(0, 200vw, 0, 0);
  opacity: 0;
  transform: translateZ(0);
  transition: clip 0.55s linear, opacity 0.2s linear;
}

.search-container.active {
  top: 100%;
  visibility: visible;
  opacity: 1;
  clip: rect(0, 100vw, 200vh, -20px);
}

.icon-menu {
  --gap: 5px;
  --height-bar: 2px;
  --pos-y-bar-one: 0;
  --pos-y-bar-three: 0;
  --scale-bar: 1;
  --rotate-bar-one: 0;
  --rotate-bar-three: 0;
  width: 20px;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  cursor: pointer;
  position: relative;
}

.bar {
  position: relative;
  height: var(--height-bar);
  width: 100%;
  border-radius: 0.5rem;
  @apply bg-headingColor;
}

.bar--1 {
  top: var(--pos-y-bar-one);
  transform: rotate(var(--rotate-bar-one));
  transition: top 200ms 100ms, transform 100ms;
}

.bar--2 {
  transform: scaleX(var(--scale-bar));
  transition: transform 150ms 100ms;
}

.bar--3 {
  bottom: var(--pos-y-bar-three);
  transform: rotate(var(--rotate-bar-three));
  transition: bottom 200ms 100ms, transform 100ms;
}

.check-icon:checked + .icon-menu > .bar--1 {
  transition: top 200ms, transform 200ms 100ms;
}

.check-icon:checked + .icon-menu > .bar--3 {
  transition: bottom 200ms, transform 200ms 100ms;
}

.check-icon:checked + .icon-menu {
  --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
  --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
  --scale-bar: 0;
  --rotate-bar-one: 45deg;
  --rotate-bar-three: -45deg;
}

.check-icon:checked + .icon-menu .bar {
  @apply bg-primaryColor;
}

@keyframes stickySlideDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
