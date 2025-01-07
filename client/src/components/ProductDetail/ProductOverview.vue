<template>
  <div>
    <div class="mt-6 grid grid-cols-12 gap-8">
      <div class="col-span-5">
        <div class="mb-6 p-8 border border-borderColor rounded-xl">
          <img :src="selectedImage" class="w-full h-[500px] object-cover object-center" alt="product image" />
        </div>
        <Swiper
          v-if="urls.length > 0"
          :modules="modules"
          :slides-per-view="urls.length > 0 ? 4 : 0"
          :navigation="true"
          :speed="800"
          :loop="true"
          class="slider"
        >
          <SwiperSlide v-for="(url, index) in urls" :key="index" @click="handleSlideClick(url)">
            <div class="mx-1 p-1 rounded-md border border-borderPrimaryColor cursor-pointer">
              <img :src="url" alt="Product Image" class="w-32 h-32 object-contain" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="col-span-7">
        <span v-if="product?.discount > 0" class="px-4 py-1 text-sm text-pinkColor font-bold rounded-md bg-pinkOpacityColor"
          >Giảm {{ product?.discount }} %</span
        >
        <span v-else-if="product?.quantity > 100" class="px-4 py-1 text-sm text-secondaryColor font-bold rounded-md bg-secondaryOpacityColor">Bán chạy</span>
        <span v-else class="px-4 py-1 text-sm text-primaryColor font-bold rounded-md bg-primaryOpacityColor">Mới</span>
        <h3 class="mt-3 mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-headingColor font-extrabold">{{ product?.productName }}</h3>
        <div class="flex items-center justify-start gap-2">
          <StarRating :star="product?.averageRating || 5" :size="12" />
          <span class="text-bodyColor text-sm">({{ product?.reviewNumber }} đánh giá)</span>
        </div>
        <div class="mt-5 flex items-end">
          <span class="text-lg md:text-xl lg:text-2xl xl:text-3xl text-primaryColor font-bold">
            {{ selectedSize ? formatPrice(selectedSize.price * (1 - product?.discount / 100)) : formatPrice(product?.specialPrice) }}
          </span>
          <span
            v-if="(selectedSize && product?.discount > 0) || (!selectedSize && product?.discount > 0)"
            class="ml-4 md:text-lg lg:text-xl xl:text-2xl text-bodyColor font-bold opacity-75 line-through"
          >
            {{ selectedSize ? formatPrice(selectedSize.price) : formatPrice(product?.price) }}
          </span>
        </div>
        <p class="mt-6 mb-10 text-headingColor">
          {{ product?.summary }}
        </p>
        <div v-if="variants.length > 0" class="grid grid-cols-12">
          <div class="col-span-2 font-bold">Thể loại:</div>
          <div class="col-span-10">
            <div class="grid grid-cols-12 gap-3">
              <div class="col-span-3" v-for="(variant, i) in variants" :key="i">
                <button
                  class="w-full px-4 py-2 text-center rounded-md border border-borderColor transition-all duration-300 cursor-pointer"
                  :class="{
                    'border-primaryColor text-primaryColor': variant.id === selectedVariant.id,
                    'hover:border-primaryColor': variant.id !== selectedVariant.id
                  }"
                  @click="
                    () => {
                      selectedVariant = variant
                      selectedSize = variant?.sizeDTOS[0]
                    }
                  "
                >
                  {{ variant?.attribute }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="selectedVariant?.sizeDTOS.length > 0" class="mt-8 grid grid-cols-12">
          <div class="col-span-2 font-bold">Size:</div>
          <div class="col-span-10">
            <div class="flex flex-wrap items-center gap-3">
              <button
                class="px-6 py-2 rounded-md border transition-all duration-300 cursor-pointer hover:border-primaryColor"
                :class="{ 'border-primaryColor text-primaryColor': size.id === selectedSize.id, 'hover:border-primaryColor': size.id !== selectedSize.id }"
                v-for="(size, i) in selectedVariant?.sizeDTOS"
                :key="i"
                @click="selectedSize = size"
              >
                {{ size?.size }}
              </button>
            </div>
          </div>
        </div>
        <div class="mt-8 grid grid-cols-12">
          <div class="col-span-2">Số lượng:</div>
          <div class="col-span-10">
            <div class="flex items-center justify-start gap-4">
              <div class="inline-flex items-center border border-borderColor rounded-md">
                <button
                  :disabled="selectedQuantity === 1"
                  @click.prevent="selectedQuantity = selectedQuantity - 1"
                  :class="['p-2 text-headingColor', selectedQuantity === 1 ? 'cursor-not-allowed' : '']"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                    <g>
                      <g id="minus">
                        <rect y="12" fill="currentColor" width="28" height="5" />
                      </g>
                    </g>
                  </svg>
                </button>
                <input type="text" value="1" v-model="selectedQuantity" @blur="handleInput" class="w-12 text-center border-none outline-none" />
                <button @click.prevent="selectedQuantity = selectedQuantity + 1" class="p-2 text-headingColor">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 1920 1920">
                    <path d="M866.332 213v653.332H213v186.666h653.332v653.332h186.666v-653.332h653.332V866.332h-653.332V213z" fill-rule="evenodd" />
                  </svg>
                </button>
              </div>
              <span> {{ selectedSize?.stock || 0 }} sản phẩm có sẵn</span>
            </div>
          </div>
        </div>
        <p v-if="!userStore.user" class="mt-8 text-dangerColor">Hãy đăng nhập để tiếp tục mua sản phẩm</p>
        <div class="mt-8 flex items-center justify-start gap-3">
          <button
            @click.prevent="addCart"
            :disabled="!selectedSize?.stock || selectedSize?.stock === 0"
            :class="[
              'flex items-center justify-center gap-2 text-whiteColor px-4 h-10 bg-primaryColor rounded-md hover:bg-darkPrimaryColor transition-all duration-300',
              !selectedSize?.stock || selectedSize?.stock === 0 ? 'cursor-not-allowed' : ''
            ]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Thêm vào giỏ hàng</span>
          </button>
          <button
            class="px-3 py-2 rounded-md border border-borderColor text-bodyColor transition-all duration-300 hover:bg-primaryColor hover:border-borderColor hover:text-whiteColor hover:translate-y-[-2px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
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
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { formatPrice } from '@/utils'
import { useUserStore, useToastStore } from '@/stores'
import { addToCart, getCart } from '@/webServices/cartService'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import StarRating from '@/components/StarRating/StarRating.vue'
import ButtonV3 from '@/components/Button/ButtonV3.vue'

export default defineComponent({
  components: { Swiper, SwiperSlide, StarRating, ButtonV3 },
  props: { product: Object, variants: Array, urls: Array },
  setup(props) {
    const userStore = useUserStore()
    const toastStore = useToastStore()

    const router = useRouter()

    const selectedImage = ref(props.product?.thumbnail || '')

    const selectedVariant = ref(null)

    const selectedSize = ref(null)

    const selectedQuantity = ref(1)

    const setInitialVariant = () => {
      if (props.variants && props.variants.length > 0) {
        selectedVariant.value = { ...props.variants[0] }
      }

      if (props.variants[0]?.sizeDTOS && props.variants[0]?.sizeDTOS.length > 0) {
        selectedSize.value = props.variants[0].sizeDTOS[0]
      }
    }

    const handleSlideClick = url => {
      selectedImage.value = url
    }

    const handleInput = event => {
      const value = Number(event.target.value)
      if (isNaN(value) || value < 1) {
        selectedQuantity.value = 1
      } else if (value > selectedSize.value.stock) {
        selectedQuantity.value = selectedSize.value.stock
      } else {
        selectedQuantity.value = value
      }
    }

    const addCart = async () => {
      if (!userStore.user) {
        router.push({ name: 'auth-login' })
        return
      }

      const res = await addToCart({
        productId: props.product?.productId,
        sizeId: selectedSize.value?.id,
        quantity: selectedQuantity.value
      })

      if (res.success) {
        toastStore.showToastModal({
          type: 'success',
          message: 'Sản phẩm đã được thêm vào giỏ hàng',
          timeout: 3000
        })

        selectedSize.value.stock = selectedSize.value.stock - selectedQuantity.value
        const cartData = await getCart()
        userStore.setCart(cartData.dto.cartItemDTOS)
      }
    }

    watch(
      () => props.variants,
      () => {
        setInitialVariant()
      },
      { immediate: true }
    )

    return {
      selectedVariant,
      selectedSize,
      selectedImage,
      userStore,
      selectedQuantity,
      formatPrice,
      addCart,
      handleSlideClick,
      handleInput,
      modules: [Navigation, Autoplay]
    }
  }
})
</script>

<style>
.slider .swiper-button-prev,
.slider .swiper-button-next {
  height: 32px;
  width: 32px;
  border-radius: 100%;
  opacity: 0;
  transition: opacity 0.5s;
  @apply text-bodyColor;
}

.slider:hover .swiper-button-prev,
.slider:hover .swiper-button-next {
  opacity: 1;
}

.slider .swiper-button-prev::before,
.slider .swiper-button-next::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 100%;
  transition: transform 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  @apply bg-primaryColor;
}

.slider .swiper-button-prev:hover::before,
.slider .swiper-button-next:hover::before {
  transform: scale(1.2);
}

.slider .swiper-button-prev:after,
.slider .swiper-button-next:after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 14px;
  height: 14px;
  background-size: cover;
  background-repeat: no-repeat;
}

.slider .swiper-button-prev:after {
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="%23FFFFFF" width="800px" height="800px" viewBox="0 0 24 24"%3E%3Cpath d="M1.293,12.707a1,1,0,0,1-.216-.325.986.986,0,0,1,0-.764,1,1,0,0,1,.216-.325l8-8a1,1,0,1,1,1.414,1.414L4.414,11H22a1,1,0,0,1,0,2H4.414l6.293,6.293a1,1,0,0,1-1.414,1.414Z"/%3E%3C/svg%3E');
}

.slider .swiper-button-next:after {
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="%23FFFFFF" width="800px" height="800px" viewBox="0 0 24 24"%3E%3Cpath d="M14.707,20.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L13.293,4.707a1,1,0,0,1,1.414-1.414l8,8a1,1,0,0,1,.216.325.986.986,0,0,1,0,.764,1,1,0,0,1-.216.325Z"/%3E%3C/svg%3E');
}
</style>
