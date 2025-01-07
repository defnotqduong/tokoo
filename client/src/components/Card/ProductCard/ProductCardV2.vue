<template>
  <div class="product-card">
    <div class="product-image">
      <router-link :to="{ name: 'product-detail', params: { slug: `${generateSlug(product?.productName || '')}-${product?.productId}` } }">
        <img :src="product?.thumbnail" alt="product image" class="w-52 h-52 object-cover object-center" />
      </router-link>
    </div>
    <div>
      <span class="text-sm text-bodyColor">{{ product?.categoryDTO?.name }}</span>
      <router-link :to="{ name: 'product-detail', params: { slug: `${generateSlug(product?.productName || '')}-${product?.productId}` } }">
        <h5 class="mt-1 mb-2 text-headingColor font-bold leading-tight line-clamp-2 hover:text-primaryColor transition-all duration-300">
          {{ product?.productName }}
        </h5>
      </router-link>
      <div class="flex items-center gap-2">
        <StarRating :star="product?.averageRating || 5" :size="14" />
      </div>
      <span class="text-primaryColor font-bold">{{ formatPrice(product?.specialPrice) }}</span>
      <span v-if="product?.discount > 0" class="ml-2 text-sm text-bodyColor font-bold opacity-75 line-through">{{ formatPrice(product?.price) }}</span>

      <ButtonV3 class="mt-2 w-full" :func="addToCart" />
    </div>
    <div>
      <div v-if="product?.quantity > 100" class="absolute top-0 left-0 px-3 py-[2px] bg-secondaryColor rounded-tl-xl rounded-br-xl">
        <span class="text-xs text-whiteColor leading-none">Bán chạy</span>
      </div>
      <div v-else-if="product?.discount > 0" class="absolute top-0 left-0 px-3 py-[2px] bg-pinkColor rounded-tl-xl rounded-br-xl">
        <span class="text-xs text-whiteColor leading-none">Giảm {{ product?.discount }} %</span>
      </div>
      <div v-else class="absolute top-0 left-0 px-3 py-[2px] bg-primaryColor rounded-tl-xl rounded-br-xl">
        <span class="text-xs text-whiteColor leading-none">Mới</span>
      </div>
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
import { formatPrice, generateSlug } from '@/utils'

import StarRating from '@/components/StarRating/StarRating.vue'
import ButtonV3 from '@/components/Button/ButtonV3.vue'

export default defineComponent({
  components: { StarRating, ButtonV3 },
  props: { product: Object },

  setup(props) {
    const router = useRouter()

    const redirect = () => {
      const slug = generateSlug(`${props.product?.productName || ''}-${props.product?.productId}`)
      router.push({ name: 'product-detail', params: { slug } })
    }
    const addToWishList = () => {}

    const addToCart = () => {
      const slug = generateSlug(`${props.product?.productName || ''}-${props.product?.productId}`)
      router.push({ name: 'product-detail', params: { slug } })
    }

    return {
      formatPrice,
      generateSlug,
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
  height: 410px;
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
