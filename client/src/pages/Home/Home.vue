<template>
  <HeroBanner />
  <FeaturedCategory />
  <PopularProduct />
  <BestSeller />
  <TopProduct />
  <ShopBanner />
  <PromoFeatures />
</template>

<script>
import { defineComponent } from 'vue'

import HeroBanner from '@/components/HeroBanner/HeroBanner.vue'
import FeaturedCategory from '@/components/FeaturedCategory/FeaturedCategory.vue'
import PopularProduct from '@/components/PopularProduct/PopularProduct.vue'
import BestSeller from '@/components/BestSeller/BestSeller.vue'
import TopProduct from '@/components/TopProduct/TopProduct.vue'
import ShopBanner from '@/components/ShopBanner/ShopBanner.vue'
import PromoFeatures from '@/components/PromoFeatures/PromoFeatures.vue'

export default defineComponent({
  components: { HeroBanner, FeaturedCategory, PopularProduct, BestSeller, TopProduct, ShopBanner, PromoFeatures },
  setup() {},
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0 })
    }
  },
  created() {
    this.scrollToTop()
  }
})
</script>

<style></style>
