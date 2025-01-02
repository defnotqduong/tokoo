<template>
  <section class="mt-6">
    <div class="container mx-auto px-4">
      <ProductListHeader :isShowFilter="isShowFilter" :toggleFilter="toggleFilter" :fetchData="fetchData" />

      <template v-if="!loading">
        <div v-if="products.length === 0">Không có sản phẩm</div>
        <div v-else class="relative">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-12 gap-2">
              <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3" v-for="i in 10" :key="i">
                <ProductCardV1 />
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import ProductListHeader from '@/components/Header/ProductListHeader.vue'
import ProductCardV1 from '@/components/Card/ProductCard/ProductCardV1.vue'
import Pagination from '@/components/Pagination/Pagination.vue'

export default defineComponent({
  components: { ProductListHeader, ProductCardV1, Pagination },
  setup() {
    const route = useRoute()
    const router = useRouter()

    const loading = ref(false)
    const products = ref([1])

    const isShowFilter = ref(false)

    const toggleFilter = () => {
      isShowFilter.value = !isShowFilter.value
    }

    const fetchData = async () => {}

    return {
      loading,
      products,
      isShowFilter,
      toggleFilter,
      fetchData
    }
  },
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
