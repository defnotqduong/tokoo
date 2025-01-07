<template>
  <section class="mt-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-3">
          <h4
            class="relative pb-3 text-headingColor text-2xl font-bold border-b border-borderColor after:absolute after:content after:bottom-0 after:left-0 after:h-[1.5px] after:w-1/4 after:bg-mintGreenColor"
          >
            Bán chạy nhất
          </h4>
          <ul class="mt-2">
            <li v-for="(product, index) in homeStore.popularProducts.slice(0, 4)" :key="index" class="transition-all duration-300 hover:-translate-y-[2px]">
              <ProductCardV3 :product="product" />
            </li>
          </ul>
        </div>
        <div class="col-span-3">
          <h4
            class="relative pb-3 text-headingColor text-2xl font-bold border-b border-borderColor after:absolute after:content after:bottom-0 after:left-0 after:h-[1.5px] after:w-1/4 after:bg-mintGreenColor"
          >
            Sản phẩm đang hot
          </h4>
          <ul class="mt-2">
            <li v-for="(product, index) in homeStore.popularProducts.slice(5, 9)" :key="index" class="transition-all duration-300 hover:-translate-y-[2px]">
              <ProductCardV3 :product="product" />
            </li>
          </ul>
        </div>
        <div class="col-span-3">
          <h4
            class="relative pb-3 text-headingColor text-2xl font-bold border-b border-borderColor after:absolute after:content after:bottom-0 after:left-0 after:h-[1.5px] after:w-1/4 after:bg-mintGreenColor"
          >
            Mới thêm gần đây
          </h4>
          <ul class="mt-2">
            <li v-for="(product, index) in homeStore.latestProducts.slice(0, 4)" :key="index" class="transition-all duration-300 hover:-translate-y-[2px]">
              <ProductCardV3 :product="product" />
            </li>
          </ul>
        </div>
        <div class="col-span-3">
          <h4
            class="relative pb-3 text-headingColor text-2xl font-bold border-b border-borderColor after:absolute after:content after:bottom-0 after:left-0 after:h-[1.5px] after:w-1/4 after:bg-mintGreenColor"
          >
            Được đánh giá cao nhất
          </h4>
          <ul class="mt-2">
            <li v-for="(product, index) in homeStore.popularProducts.slice(10, 14)" :key="index" class="transition-all duration-300 hover:-translate-y-[2px]">
              <ProductCardV3 :product="product" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { useHomeStore } from '@/stores'

import ProductCardV3 from '@/components/Card/ProductCard/ProductCardV3.vue'
export default defineComponent({
  components: { ProductCardV3 },
  setup() {
    const homeStore = useHomeStore()

    return { homeStore }
  }
})
</script>

<style></style>
