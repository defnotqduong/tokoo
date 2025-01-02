<template>
  <main class="relative">
    <TopHeader />
    <Header />
    <router-view></router-view>
    <CartSideMenu />
    <BackToTopButton />
    <Footer />
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import { useHomeStore } from '@/stores'

import BackToTopButton from '@/components/Button/BackToTopButton.vue'
import TopHeader from '@/components/Header/TopHeader.vue'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import CartSideMenu from '@/components/Cart/CartSideMenu.vue'

export default defineComponent({
  components: { BackToTopButton, Header, TopHeader, Footer, CartSideMenu },
  setup() {
    const homeStore = useHomeStore()

    return { homeStore }
  }
})
</script>

<style></style>
