<template>
  <section class="mt-16">
    <div class="container mx-auto px-4">
      <div class="pb-4 flex items-center justify-between">
        <h3 class="text-primaryColor text-3xl font-extrabold">Sản phẩm phổ biến</h3>
        <ButtonV5 :content="'Xem thêm'" :func="redirect" />
      </div>
      <div class="mt-2 grid grid-cols-12 gap-7">
        <div v-for="(product, i) in homeStore.popularProducts" :key="i" class="col-span-3">
          <ProductCardV1 class="h-full" :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useHomeStore } from '@/stores'

import ProductCardV1 from '@/components/Card/ProductCard/ProductCardV1.vue'
import ButtonV5 from '@/components/Button/ButtonV5.vue'
export default defineComponent({
  components: { ProductCardV1, ButtonV5 },
  setup() {
    const homeStore = useHomeStore()
    const router = useRouter()

    const redirect = () => {
      router.push({ name: 'products' })
    }

    return { homeStore, redirect }
  }
})
</script>

<style scoped>
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
