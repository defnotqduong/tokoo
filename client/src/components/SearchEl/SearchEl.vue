<template>
  <div class="container mx-auto px-4">
    <div class="max-w-[900px] my-4 mx-auto px-4">
      <form class="mt-7 flex items-center justify-center">
        <input
          type="text"
          v-model="keyword"
          class="flex-1 outline-none px-4 mr-3 h-12 text-headingColor border-[1.5px] border-borderColor rounded-md placeholder:text-base placeholder:text-bodyColor placeholder:font-medium transition-all duration-300 focus:border-primaryColor"
          placeholder="Tìm kiếm sản phẩm..."
        />
        <PrimaryButton :content="'Tìm kiếm'" :func="search" class="h-12" />
      </form>
      <div class="mt-7">
        <hr class="h-[1.5px] w-full bg-borderColor" />
      </div>
      <div class="pt-7 pb-14">
        <div class="mb-4 flex items-center justify-start">
          <h5 class="text-sm font-bold text-headingColor uppercase tracking-wide">SẢN PHẨM HÀNG ĐẦU</h5>
          <span class="ml-1 text-sm text-bodyColor">(4 kết quả)</span>

          <button class="ml-auto">
            <router-link
              :to="{ name: 'home' }"
              class="flex items-center justify-center gap-1 text-sm text-bodyColor cursor-pointer relative transition-all duration-[400ms] after:absolute after:content after:bottom-0 after:left-auto after:right-0 after:w-0 after:h-[1.5px] after:rounded after:bg-primaryColor hover:text-primaryColor hover:after:w-full hover:after:right-auto hover:after:left-0 after:transition-width after:duration-[400ms]"
              >Xem thêm
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-4 h-4">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                  fill="currentColor"
                />
              </svg>
            </router-link>
          </button>
        </div>
        <div class="h-[60vh] pr-1 overflow-y-auto custom-scrollbar">
          <template v-if="loading">
            <div class="min-h-[40vh] text-primaryColor flex items-center justify-center">
              <span class="loading loading-spinner loading-md"></span>
            </div>
          </template>
          <template v-else>
            <!-- <div v-if="products.length === 0" class="ml-6 italic">Không tìm thấy sản phẩm...</div> -->
            <div class="mx-6 sm:mx-0 grid grid-cols-12 gap-2">
              <div class="col-span-12 sm:col-span-6 lg:col-span-4" v-for="i in 4" :key="i" @click="onChangeSearchEl">
                <ProductCardV1 />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useHomeStore } from '@/stores'

import PrimaryButton from '@/components/Button/PrimaryButton.vue'
import ProductCardV1 from '@/components/Card/ProductCard/ProductCardV1.vue'

export default defineComponent({
  components: { PrimaryButton, ProductCardV1 },
  props: {
    onChangeSearchEl: Function
  },
  setup() {
    const homeStore = useHomeStore()

    const keyword = ref('')
    const loading = ref(false)

    const search = async () => {}

    return { keyword, loading, search }
  }
})
</script>

<style></style>
