<template>
  <div class="pt-16 pb-32">
    <div class="container px-4 mx-auto">
      <div class="relative grid grid-cols-12 gap-x-10">
        <AccountSidebar class="col-span-3" />
        <router-view class="col-span-9 pb-20"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AccountSidebar from '@/components/Account/AccountSidebar.vue'
export default defineComponent({
  components: { AccountSidebar }
})
</script>

<style></style>
