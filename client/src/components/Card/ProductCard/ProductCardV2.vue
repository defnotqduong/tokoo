<template>
  <div class="product-card">
    <div class="product-image">
      <router-link :to="{ name: 'product-detail', params: { slug: 'slug' } }">
        <img src="@/assets/images/product-1.jpg" alt="product image" />
      </router-link>
    </div>
    <div>
      <span class="text-sm text-bodyColor">Rau củ</span>
      <router-link :to="{ name: 'product-detail', params: { slug: 'slug' } }">
        <h5 class="mt-1 mb-2 text-headingColor font-bold leading-tight line-clamp-2 hover:text-primaryColor transition-all duration-300">
          Cánh gà Buffalo giòn truyền thống Foster Farms
        </h5>
      </router-link>
      <div class="flex items-center gap-2">
        <StarRating :star="3.5" :size="14" />
      </div>
      <div class="mt-2 flex items-center">
        <span class="text-primaryColor font-bold">{{ formatPrice(128000) }}</span>
        <!-- <span class="ml-2 text-sm text-bodyColor font-bold opacity-75 line-through">{{ formatPrice(132500) }}</span> -->
      </div>
      <ButtonV3 class="mt-2 w-full" />
    </div>
    <div class="absolute top-0 left-0 px-3 py-[2px] bg-pinkColor rounded-tl-xl rounded-br-xl">
      <span class="text-xs text-whiteColor leading-none">Sale</span>
    </div>
    <div class="product-actions">
      <div class="flex flex-col gap-1">
        <button @click.prevent="redirect">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="tooltip">Xem chi tiết</span>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="tooltip">Thêm vào yêu thích</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { formatPrice } from '@/utils'

import StarRating from '@/components/StarRating/StarRating.vue'
import ButtonV3 from '@/components/Button/ButtonV3.vue'

export default defineComponent({
  components: { StarRating, ButtonV3 },
  setup() {
    const redirect = () => {
      router.push({ name: 'product-detail', params: { slug: 'slug' } })
    }

    const addToWishList = () => {}

    const addToCart = () => {}

    return {
      formatPrice,
      redirect,
      addToWishList,
      addToCart
    }
  }
})
</script>

<style scoped>
.product-card {
  position: relative;
  padding: 20px;
  border: 1px solid;
  border-radius: 12px;
  transition: all 1s cubic-bezier(0, 0, 0.05, 1);
  @apply bg-whiteColor border-borderColor cursor-pointer;
}

.product-image {
  overflow: hidden;
}

.product-image img {
  margin: 0 auto;
  max-width: 100%;
  max-height: 240px;
  object-fit: cover;
  object-position: center;
  transition: all 1.5s cubic-bezier(0, 0, 0.05, 1);
}

.product-card:hover {
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.05);
  @apply border-mintGreenColor;
}

.product-card:hover .product-image img {
  scale: 1.1;
}

.product-actions {
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px 12px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  @apply text-primaryColor;
}

.product-card:hover .product-actions {
  opacity: 1;
  visibility: visible;
}

.product-actions button {
  position: relative;
  padding: 4px;
}

.product-actions button:hover {
  @apply text-secondaryColor;
}

.tooltip {
  position: absolute;
  top: 10px;
  right: 110%;
  padding: 6px 10px;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  white-space: nowrap;
  transition: all 0.3s ease;
  @apply text-sm text-whiteColor bg-primaryColor;
}

.product-actions button:hover .tooltip {
  opacity: 1;
  visibility: visible;
  top: 5px;
}
</style>
