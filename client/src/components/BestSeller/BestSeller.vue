<template>
  <section class="mt-16">
    <div class="container mx-auto px-4">
      <div class="pb-4 flex items-center justify-between">
        <h3 class="text-primaryColor text-3xl font-extrabold">Bán chạy hàng ngày</h3>
        <ul class="filter-list">
          <li class="filter-item active">Nổi bật</li>
          <li class="filter-item">Phổ biến</li>
          <li class="filter-item">Mới thêm</li>
        </ul>
      </div>
      <div class="mt-2 grid grid-cols-12 gap-3">
        <div class="col-span-3 rounded-xl bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: 'url(/src/assets/images/banner-05.png)' }">
          <div class="p-6">
            <h4 class="mb-6 text-3xl text-headingColor font-extrabold">Khám phá sản phẩm độc đáo cho bạn</h4>
            <ButtonV4 :content="'Mua ngay'" :func="redirect" />
          </div>
        </div>
        <div class="col-span-9">
          <Swiper
            :modules="modules"
            :slides-per-view="4"
            :navigation="true"
            :autoplay="{ delay: 10000, disableOnInteraction: false }"
            :speed="800"
            :loop="true"
            class="slider"
          >
            <SwiperSlide v-for="(product, i) in homeStore.latestProducts" :key="i">
              <ProductCardV2 class="mx-1 h-full" :product="product" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useHomeStore } from '@/stores'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import ProductCardV2 from '@/components/Card/ProductCard/ProductCardV2.vue'
import ButtonV4 from '@/components/Button/ButtonV4.vue'
export default defineComponent({
  components: { Swiper, SwiperSlide, ProductCardV2, ButtonV4 },
  setup() {
    const router = useRouter()
    const homeStore = useHomeStore()

    const redirect = () => {
      router.push({ name: 'products' })
    }

    return { redirect, homeStore, modules: [Navigation, Autoplay] }
  }
})
</script>

<style scoped>
.filter-list {
  @apply flex items-center gap-3;
}

.filter-item {
  @apply px-1 text-base text-headingColor font-semibold cursor-pointer transition-all duration-300;
}

.filter-item.active {
  @apply text-primaryColor;
}

.filter-item:hover {
  @apply text-primaryColor -translate-y-[2px];
}
</style>
