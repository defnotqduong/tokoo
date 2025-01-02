<template>
  <section class="mt-4">
    <div class="border-b border-borderColor">
      <div class="container mx-auto px-4">
        <div class="pb-4 breadcrumbs text-sm text-headingColor">
          <ul>
            <li class="hover:text-primaryColor transition-all duration-300"><router-link :to="{ name: 'home' }">Trang chủ</router-link></li>
            <li class="hover:text-primaryColor transition-all duration-300"><router-link :to="{ name: 'products' }">Danh sách sản phẩm</router-link></li>
            <li class="opacity-60">Seeds of Change Organic Quinoa, Brown</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4">
      <ProductOverview />
      <ProductDetail />
      <RelatedProduct />
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

import ProductOverview from '@/components/ProductDetail/ProductOverview.vue'
import ProductDetail from '@/components/ProductDetail/ProductDetail.vue'
import RelatedProduct from '@/components/ProductDetail/RelatedProduct.vue'
export default defineComponent({
  components: { ProductOverview, ProductDetail, RelatedProduct },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0 })
    }
  },
  created() {
    this.scrollToTop()
  }
})
</script>

<style></style>
