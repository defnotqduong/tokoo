<template>
  <div class="p-4 bg-whiteColor rounded-md shadow-shadow01">
    <div class="mb-4 pb-4 border-b-[1px] border-borderColor flex items-center justify-between">
      <h4 class="text-xl text-headingColor font-extrabold">Đăng kí bán hàng</h4>
    </div>
    <div>
      <form class="form">
        <div class="input-group">
          <label for="old-password" class="title"
            >Tên shop
            <span class="text-dangerColor">*</span>
          </label>
          <div class="relative w-1/2">
            <input type="text" />
          </div>
        </div>
        <div class="w-1/2" v-if="errors?.name && errors?.name.length > 0">
          <p v-for="(err, index) in errors?.name" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
        </div>
        <div class="input-group">
          <label for="old-password" class="title">Mô tả </label>
          <div class="relative w-1/2">
            <input type="text" />
          </div>
        </div>
        <div class="w-1/2" v-if="errors?.description && errors?.description.length > 0">
          <p v-for="(err, index) in errors?.description" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
        </div>
        <div class="input-group">
          <label for="old-password" class="title">Địa chỉ <span class="text-dangerColor">*</span></label>
          <div class="relative w-1/2">
            <input type="text" />
          </div>
        </div>
        <div class="w-1/2" v-if="errors?.address && errors?.address.length > 0">
          <p v-for="(err, index) in errors?.address" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
        </div>
        <div class="mt-4">
          <PrimaryButton :content="'Yêu cầu'" :func="request" :loading="loading" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
import { useToastStore } from '@/stores'
import PrimaryButton from '@/components/Button/PrimaryButton.vue'
export default defineComponent({
  components: { PrimaryButton },
  setup() {
    const toastStore = useToastStore()

    const request = () => {}

    return { request }
  },
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

<style scoped>
.form {
}

.input-group .title {
  @apply block mb-2 font-bold leading-none;
}

.input-group {
  display: block;
  margin-top: 16px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  position: relative;
}

.input-group input {
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid;
  outline: 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  @apply border-borderColor text-headingColor;
}

.input-group input:focus {
  @apply border-headingOpacityColor;
}
</style>
