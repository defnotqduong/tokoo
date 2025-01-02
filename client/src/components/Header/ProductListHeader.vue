<template>
  <div>
    <div class="p-10 rounded-xl bg-cover bg-center" :style="{ backgroundImage: 'url(/src/assets/images/header-bg.png)' }">
      <div class="breadcrumbs text-sm text-headingColor">
        <ul>
          <li class="hover:text-primaryColor transition-all duration-300"><router-link :to="{ name: 'home' }">Trang chủ</router-link></li>
          <li class="opacity-60">Danh sách sản phẩm</li>
        </ul>
      </div>
      <h1 class="mb-3 text-2xl sm:text-3xl xl:text-4xl text-headingColor font-black">Danh sách sản phẩm</h1>
      <div class="mt-6">
        <form class="flex items-center justify-start gap-2">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            class="sm:min-w-[360px] h-10 px-4 text-headingColor font-semibold line-clamp-1 bg-whiteColor border border-whiteColor outline-none rounded-lg shadow-shadow02 transition-all duration-300 placeholder:text-bodyColor focus:border-primaryColor"
          />
          <PrimaryButton :content="'Tìm kiếm'" />
        </form>
      </div>
    </div>
    <div class="py-6 flex items-center justify-between">
      <div>Hiển thị 100 sản phẩm dành cho bạn!</div>
      <form class="flex items-center gap-3">
        <div>
          <select class="select w-full">
            <option value="" selected disabled>Sắp xếp theo</option>
            <option value="">Default</option>
            <option value="latest">Latest</option>
            <option value="popularity">Popularity</option>
            <option value="price_asc">Price: low to high</option>
            <option value="price_desc">Price: high to low</option>
          </select>
        </div>
        <div>
          <select class="select w-full">
            <option value="" selected disabled>Danh mục</option>
            <option value="latest">Latest</option>
            <option value="popularity">Popularity</option>
            <option value="price_asc">Price: low to high</option>
            <option value="price_desc">Price: high to low</option>
          </select>
        </div>
        <div class="flex items-center gap-3">
          <input type="text" name="" id="" placeholder="Tối thiểu" class="filter-input" />
          <span>-</span>
          <input type="text" name="" id="" placeholder="Tối đa" class="filter-input" />
        </div>
        <button class="px-3 h-10 rounded-lg bg-primaryColor text-whiteColor">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20" height="20">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.2673 6.24223C2.20553 4.40955 3.50184 1 6.26039 1H17.7396C20.4981 1 21.7945 4.40955 19.7327 6.24223L15.3356 10.1507C15.1221 10.3405 15 10.6125 15 10.8981V21.0858C15 22.8676 12.8457 23.7599 11.5858 22.5L9.58578 20.5C9.21071 20.1249 8.99999 19.6162 8.99999 19.0858V10.8981C8.99999 10.6125 8.87785 10.3405 8.66436 10.1507L4.2673 6.24223ZM6.26039 3C5.34088 3 4.90877 4.13652 5.59603 4.74741L9.99309 8.6559C10.6336 9.22521 11 10.0412 11 10.8981V19.0858L13 21.0858V10.8981C13 10.0412 13.3664 9.22521 14.0069 8.6559L18.404 4.74741C19.0912 4.13652 18.6591 3 17.7396 3H6.26039Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { formatPrice } from '@/utils'

import PrimaryButton from '@/components/Button/PrimaryButton.vue'
export default defineComponent({
  components: { PrimaryButton },
  props: {
    isShowFilter: Boolean,
    toggleFilter: Function,
    fetchData: Function
  },
  setup(props) {
    return {
      formatPrice
    }
  }
})
</script>

<style scoped>
.select,
.filter-input {
  min-height: 40px;
  height: 40px;
  font-size: 16px;
  padding: 0 16px;
  border: 1px solid rgba(204, 204, 204, 1);
  @apply text-headingColor bg-whiteColor rounded-md;
}

.filter-input {
  @apply w-32;
}

.select:focus,
.filter-input:focus {
  @apply border-primaryColor outline-none;
}
</style>
