<template>
  <div class="product-card">
    <div class="product-image">
      <img src="@/assets/images/product-1.jpg" alt="product image" />
    </div>
    <div class="flex-1 flex flex-col">
      <div class="flex items-center justify-between">
        <span class="text-primaryColor font-semibold line-clamp-1">Cánh gà Buffalo giòn truyền thống Foster Farms</span>
        <div class="ml-2 text-headingColor font-semibold">
          {{ formatPrice(128000 * 6) }}
        </div>
      </div>
      <span>Số lượng: 6</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { formatPrice } from '@/utils'
export default defineComponent({
  props: { product: Object },
  setup() {
    return {
      formatPrice
    }
  }
})
</script>

<style scoped>
.product-card {
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  padding: 8px 16px;
  border: 1px solid;
  border-radius: 8px;
  transition: all 1s cubic-bezier(0, 0, 0.05, 1);
  @apply bg-whiteColor border-borderColor;
}

.product-image {
  max-width: 100px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
}

.product-card:hover {
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.05);
  @apply border-mintGreenColor;
}
</style>
