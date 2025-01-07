<template>
  <div class="product-card">
    <div class="product-image">
      <router-link :to="{ name: 'product-detail', params: { slug: `${generateSlug(product?.productName || '')}-${product?.productId}` } }">
        <img :src="product?.thumbnail" alt="product image" class="rounded-md" />
      </router-link>
    </div>
    <div class="product-content">
      <router-link :to="{ name: 'product-detail', params: { slug: `${generateSlug(product?.productName || '')}-${product?.productId}` } }">
        <h5 class="mt-1 mb-1 text-headingColor font-bold leading-tight line-clamp-2 hover:text-primaryColor transition-all duration-300">
          {{ product?.productName }}
        </h5>
      </router-link>
      <div class="flex items-center gap-2">
        <StarRating :star="product?.averageRating || 5" :size="12" />
        <span class="text-sm text-bodyColor">{{ (product?.averageRating || 5.0).toFixed(1) }}</span>
      </div>
      <div class="mt-2 flex items-center">
        <span class="text-primaryColor font-bold">{{ formatPrice(product?.specialPrice) }}</span>
        <span v-if="product?.discount > 0" class="ml-2 text-sm text-bodyColor font-bold opacity-75 line-through">{{ formatPrice(product?.price) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { formatPrice, generateSlug } from '@/utils'

import StarRating from '@/components/StarRating/StarRating.vue'
export default defineComponent({
  components: { StarRating },
  props: { product: Object },
  setup() {
    return {
      formatPrice,
      generateSlug
    }
  }
})
</script>

<style scoped>
.product-card {
  @apply bg-whiteColor py-3 grid grid-cols-12 gap-2 cursor-pointer;
}

.product-image {
  @apply col-span-4;
}

.product-image img {
  @apply w-full object-cover object-center;
}

.product-content {
  @apply col-span-8;
}
</style>
