<template>
  <div class="mt-10">
    <h4
      class="relative pb-3 text-headingColor text-2xl font-bold border-b border-borderColor after:absolute after:content after:bottom-0 after:left-0 after:h-[2px] after:w-32 after:bg-mintGreenColor"
    >
      Sản phẩm cùng Store
    </h4>
    <div class="mt-6 grid grid-cols-12 gap-2">
      <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3" v-for="(product, index) in products" :key="index">
        <ProductCardV1 :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ProductCardV1 from '@/components/Card/ProductCard/ProductCardV1.vue'
export default defineComponent({
  components: { ProductCardV1 },
  props: {
    products: Array
  },
  setup() {}
})
</script>

<style></style>
