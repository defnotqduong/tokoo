<template>
  <section>
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :navigation="true"
      :autoplay="{ delay: 10000, disableOnInteraction: false }"
      :speed="800"
      :loop="true"
      class="h-[500px] hero-banner"
    >
      <SwiperSlide :style="{ backgroundImage: 'url(/src/assets/images/slider-1.png)' }" class="relative w-full h-full bg-no-repeat bg-cover bg-center">
        <div class="absolute top-0 left-0 w-full h-full z-[1] flex items-center justify-center">
          <div class="container mx-auto px-4">
            <div class="px-10">
              <h1 class="text-start text-3xl sm:text-4xl md:text-5xl font-black text-headingColor title">
                Khám phá những ưu đãi tốt nhất <br />
                <strong>cho trải nghiệm mua sắm của bạn.</strong>
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide :style="{ backgroundImage: 'url(/src/assets/images/slider-2.png)' }" class="relative w-full h-full bg-no-repeat bg-cover bg-center">
        <div class="absolute top-0 left-0 w-full h-full z-[1] flex items-center justify-center">
          <div class="container mx-auto px-4">
            <div class="px-10">
              <h1 class="text-start text-3xl sm:text-4xl md:text-5xl font-black text-headingColor title">
                Nâng tầm mua sắm của bạn <br />
                <strong>với những ưu đãi và sản phẩm độc quyền.</strong>
              </h1>
            </div>
          </div>
        </div></SwiperSlide
      >
    </Swiper>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation, Autoplay]
    }
  }
})
</script>

<style>
.hero-banner .swiper-button-prev,
.hero-banner .swiper-button-next {
  height: 48px;
  width: 48px;
  border-radius: 100%;
  opacity: 0;
  transition: opacity 0.5s;
  @apply text-bodyColor;
}

.hero-banner:hover .swiper-button-prev,
.hero-banner:hover .swiper-button-next {
  opacity: 1;
}

.hero-banner .swiper-button-prev::before,
.hero-banner .swiper-button-next::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 100%;
  transition: transform 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  @apply bg-primaryColor;
}

.hero-banner .swiper-button-prev:hover::before,
.hero-banner .swiper-button-next:hover::before {
  transform: scale(1.2);
}

.hero-banner .swiper-button-prev:after,
.hero-banner .swiper-button-next:after {
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

.hero-banner .swiper-button-prev:after {
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="%23FFFFFF" width="800px" height="800px" viewBox="0 0 24 24"%3E%3Cpath d="M1.293,12.707a1,1,0,0,1-.216-.325.986.986,0,0,1,0-.764,1,1,0,0,1,.216-.325l8-8a1,1,0,1,1,1.414,1.414L4.414,11H22a1,1,0,0,1,0,2H4.414l6.293,6.293a1,1,0,0,1-1.414,1.414Z"/%3E%3C/svg%3E');
}

.hero-banner .swiper-button-next:after {
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="%23FFFFFF" width="800px" height="800px" viewBox="0 0 24 24"%3E%3Cpath d="M14.707,20.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L13.293,4.707a1,1,0,0,1,1.414-1.414l8,8a1,1,0,0,1,.216.325.986.986,0,0,1,0,.764,1,1,0,0,1-.216.325Z"/%3E%3C/svg%3E');
}

.section-title {
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-delay: 0.5s;
}

.title {
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-delay: 1s;
}

.button-group {
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-delay: 1.2s;
}

.social-share-wrapper {
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-delay: 1.5s;
}

.swiper-slide-active .section-title,
.swiper-slide-active .title,
.swiper-slide-active .button-group,
.swiper-slide-active .social-share-wrapper {
  animation-name: fadeInUp;
}

.swiper-slide-prev .section-title,
.swiper-slide-prev .title,
.swiper-slide-prev .button-group,
.swiper-slide-prev .social-share-wrapper,
.swiper-slide-next .section-title,
.swiper-slide-next .title,
.swiper-slide-next .button-group,
.swiper-slide-next .social-share-wrapper {
  animation-name: fadeOutUp;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeOutUp {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
</style>
