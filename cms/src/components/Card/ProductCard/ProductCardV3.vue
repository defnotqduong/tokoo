<template>
  <div class="product-card">
    <div class="product-image">
      <router-link :to="{ name: 'product-detail', params: { slug: 'slug' } }">
        <img src="@/assets/images/product-1.jpg" alt="product image" />
      </router-link>
    </div>
    <div class="product-content">
      <router-link :to="{ name: 'product-detail', params: { slug: 'slug' } }">
        <h5 class="mt-1 mb-1 text-headingColor font-bold leading-tight line-clamp-2 hover:text-primaryColor transition-all duration-300">
          Cánh gà Buffalo giòn truyền thống Foster Farms
        </h5>
      </router-link>
      <div class="flex items-center gap-2">
        <StarRating :star="4" :size="12" />
        <span class="text-sm text-bodyColor">(4.0)</span>
      </div>
      <div class="mt-2 flex items-center">
        <span class="text-primaryColor font-bold">{{ formatPrice(128000) }}</span>
        <span class="ml-2 text-sm text-bodyColor font-bold opacity-75 line-through">{{ formatPrice(132500) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { formatPrice } from '@/utils'

import StarRating from '@/components/StarRating/StarRating.vue'
export default defineComponent({
  components: { StarRating },
  setup() {
    return {
      formatPrice
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
