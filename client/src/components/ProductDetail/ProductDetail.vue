<template>
  <div class="mt-10 px-8 py-4 rounded-xl border border-borderColor">
    <div class="mt-4 mb-8">
      <ul class="flex items-center justify-start gap-4">
        <li
          v-for="i in nav"
          :key="i.id"
          @click="setActive(i.id)"
          class="px-6 py-[6px] text-base font-bold border border-borderColor rounded-full cursor-pointer shadow-shadow06 transition-all duration-300 hover:translate-y-[-2px]"
          :class="i.isActive ? ' text-whiteColor bg-primaryColor' : ' text-bodyColor bg-whiteColor hover:text-primaryColor'"
        >
          {{ i.label }}
        </li>
      </ul>
    </div>
    <Description :description="product?.description" v-if="isActive(1)" />
    <!-- <Shop :store="product?.storeName" v-if="isActive(2)" /> -->
    <Review :reviews="reviews" v-if="isActive(3)" />
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

import Description from '@/components/ProductDetail/Description.vue'
import Shop from '@/components/ProductDetail/Shop.vue'
import Review from '@/components/ProductDetail/Review.vue'
export default defineComponent({
  components: { Description, Shop, Review },
  props: { product: Object, reviews: Array },
  setup() {
    const nav = reactive([
      {
        id: 1,
        label: 'Mô tả',
        isActive: true
      },
      // {
      //   id: 2,
      //   label: 'Shop',
      //   isActive: false
      // },
      {
        id: 3,
        label: 'Đánh giá',
        isActive: false
      }
    ])

    const setActive = id => {
      nav.forEach(item => {
        item.isActive = item.id === id
      })
    }

    const isActive = id => {
      return nav.find(item => item.id === id)?.isActive || false
    }

    return {
      nav,
      setActive,
      isActive
    }
  }
})
</script>

<style></style>
