<template>
  <main class="relative bg-bgLightPrimaryColor min-w-screen min-h-screen">
    <DashboardSidebar />
    <div class="ml-64">
      <Header />
      <div class="px-6 pt-5 pb-20">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue'

import Header from '@/components/Header/Header.vue'
import DashboardSidebar from '@/components/Sidebar/DashboardSidebar.vue'

export default defineComponent({
  components: { DashboardSidebar, Header },
  setup() {}
})
</script>

<style></style>
