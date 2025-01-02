<template>
  <section class="mt-16">
    <div class="container mx-auto px-4">
      <div class="pb-4 flex items-center justify-start gap-2">
        <h3 class="text-primaryColor text-3xl font-extrabold leading-none">Danh mục nổi bật</h3>
        <ul class="filter-list">
          <li class="filter-item active">Tất cả</li>
          <li class="filter-item">Cà phê & Trà</li>
          <li class="filter-item">Điện tử</li>
          <li class="filter-item">Thời trang</li>
          <li class="filter-item">Sản phẩm hữu cơ</li>
        </ul>
      </div>
      <div class="mt-2">
        <Swiper
          :modules="modules"
          :slides-per-view="8"
          :navigation="true"
          :autoplay="{ delay: 10000, disableOnInteraction: false }"
          :speed="800"
          :loop="true"
          class="slider"
        >
          <SwiperSlide v-for="(category, index) in categories" :key="index">
            <CategoryCard :category="category" class="mx-1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import CategoryCard from '@/components/Card/CategoryCard/CategoryCard.vue'
export default defineComponent({
  components: { Swiper, SwiperSlide, CategoryCard },
  setup() {
    const categories = [
      {
        color: 'bg-greenOpacityColor',
        name: 'Sản phẩm hữu cơ',
        quantity: 150
      },
      {
        color: 'bg-peachCreamColor',
        name: 'Sản phẩm giảm giá',
        quantity: 75
      },
      {
        color: 'bg-blushApricotColor',
        name: 'Bán chạy nhất',
        quantity: 200
      },
      {
        color: 'bg-softPinkColor',
        name: 'Điện tử',
        quantity: 50
      },
      {
        color: 'bg-peachCreamColor',
        name: 'Sản phẩm mới',
        quantity: 100
      },
      {
        color: 'bg-frostedGreenColor',
        name: 'Thời trang',
        quantity: 120
      },
      {
        color: 'bg-paleLemonColor',
        name: 'Nhà & Vườn',
        quantity: 80
      },
      {
        color: 'bg-greenOpacityColor',
        name: 'Sản phẩm hữu cơ',
        quantity: 150
      },
      {
        color: 'bg-blushApricotColor',
        name: 'Sản phẩm giảm giá',
        quantity: 75
      },
      {
        color: 'bg-peachCreamColor',
        name: 'Sản phẩm mới',
        quantity: 100
      }
    ]

    return { categories, modules: [Navigation, Autoplay] }
  }
})
</script>

<style>
.slider .swiper-button-prev,
.slider .swiper-button-next {
  height: 40px;
  width: 40px;
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

.filter-list {
  @apply mt-1 flex items-center gap-3;
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
