<template>
  <section class="mt-4">
    <div v-if="loading" class="min-h-[75vh] flex items-center justify-center text-primaryColor">
      <span class="loading loading-spinner loading-md"></span>
    </div>
    <template v-else>
      <div class="border-b border-borderColor">
        <div class="container mx-auto px-4">
          <div class="pb-4 breadcrumbs text-sm text-headingColor">
            <ul>
              <li class="hover:text-primaryColor transition-all duration-300"><router-link :to="{ name: 'home' }">Trang chủ</router-link></li>
              <li class="hover:text-primaryColor transition-all duration-300"><router-link :to="{ name: 'products' }">Danh sách sản phẩm</router-link></li>
              <li class="opacity-60">{{ product?.productName }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-4">
        <ProductOverview :product="product" :variants="variants" />
        <ProductDetail :product="product" :reviews="reviews" />
        <RelatedProduct class="pt-6" v-if="productSameCategory.length > 0" :products="productSameCategory" />
        <StoreProduct class="pt-6" v-if="productSameStore.length > 0" :products="productSameStore" />
      </div>
    </template>
  </section>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore, useToastStore } from '@/stores'
import { getProductInfo, getListVariant, getListSize } from '@/webServices/productService'

import ProductOverview from '@/components/ProductDetail/ProductOverview.vue'
import ProductDetail from '@/components/ProductDetail/ProductDetail.vue'
import RelatedProduct from '@/components/ProductDetail/RelatedProduct.vue'
import StoreProduct from '@/components/ProductDetail/StoreProduct.vue'
export default defineComponent({
  components: { ProductOverview, ProductDetail, RelatedProduct, StoreProduct },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userStore = useUserStore()
    const toastStore = useToastStore()
    const loading = ref(false)

    const product = ref(null)
    const reviews = ref([])
    const variants = ref([])
    const productSameCategory = ref([])
    const productSameStore = ref([])

    const getProduct = async () => {
      const slug = route.params.slug
      const parts = slug.split('-')
      const id = parts[parts.length - 1]
      const res = await getProductInfo(id)

      console.log(res)

      if (res.success) {
        product.value = res.dto
        reviews.value = res.dto.reviewDTOS
        variants.value = res.dto.variantDTOS
        productSameCategory.value = res.productSameCategory
        productSameStore.value = res.productSameStore
      }
    }

    watch(
      () => route.params.slug,
      async () => {
        window.scrollTo({ top: 0 })
        loading.value = true
        await getProduct()
        loading.value = false
      }
    )

    onMounted(async () => {
      loading.value = true
      await getProduct()
      loading.value = false
    })

    return {
      loading,
      product,
      reviews,
      variants,
      productSameCategory,
      productSameStore
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
