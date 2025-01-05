<template>
  <section class="mt-6">
    <div class="container mx-auto px-4">
      <ProductListHeader :fetchData="fetchData" :options="options" :categories="categories" :meta="meta" />

      <div v-if="loading" class="min-h-[60vh] flex items-center justify-center text-primaryColor">
        <span class="loading loading-spinner loading-md"></span>
      </div>
      <template v-else>
        <div v-if="products.length === 0">Không có sản phẩm</div>
        <div v-else class="relative">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-12 gap-2">
              <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3" v-for="(product, index) in products" :key="index">
                <ProductCardV1 :product="product" class="h-full" />
              </div>
            </div>
            <Pagination class="mt-10" :meta="meta" :changePage="changePage" />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { findProducts } from '@/webServices/productService'
import { getAllCategory } from '@/webServices/categoryService'

import ProductListHeader from '@/components/Header/ProductListHeader.vue'
import ProductCardV1 from '@/components/Card/ProductCard/ProductCardV1.vue'
import Pagination from '@/components/Pagination/Pagination.vue'

export default defineComponent({
  components: { ProductListHeader, ProductCardV1, Pagination },
  setup() {
    const route = useRoute()
    const router = useRouter()

    const loading = ref(false)
    const products = ref([])
    const categories = ref([])

    const options = ref({
      pageNumber: 0,
      pageSize: 12,
      keyword: '',
      sortBy: 'id',
      sortOrder: 'asc',
      categoryId: null,
      minPrice: null,
      maxPrice: null
    })

    const meta = ref({
      first: null,
      last: null,
      number: null,
      numberOfElements: null,
      size: null,
      totalElements: null,
      totalPages: null
    })

    const changePage = async page => {
      options.value.pageNumber = page
      await fetchData()
    }

    const fetchData = async () => {
      const res = await findProducts(options.value)
      products.value = res.dtoList
      meta.value = res.pageDto
    }

    onMounted(async () => {
      loading.value = true
      const [categoriesData, productsData] = await Promise.all([getAllCategory(), findProducts(options.value)])
      console.log(productsData)
      products.value = productsData.dtoList
      meta.value = productsData.pageDto
      categories.value = categoriesData.dtoList
      loading.value = false
    })

    return { options, loading, meta, products, categories, fetchData, changePage }
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
