<template>
  <div class="p-4 bg-whiteColor rounded-md shadow-shadow01">
    <div class="mb-4 pb-4 border-b-[1px] border-borderColor flex items-center justify-between">
      <h4 class="text-xl text-headingColor font-extrabold">Đăng kí bán hàng</h4>
    </div>
    <div>
      <form class="form">
        <div class="input-group">
          <label for="name" class="title"
            >Tên shop
            <span class="text-dangerColor">*</span>
          </label>
          <div class="relative w-1/2">
            <input type="text" id="name" name="name" v-model="name" @input="validateName" @blur="validateName" />
          </div>
        </div>
        <div class="w-1/2" v-if="errors?.name && errors?.name.length > 0">
          <p v-for="(err, index) in errors?.name" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
        </div>
        <div class="input-group">
          <label for="desc" class="title">Mô tả </label>
          <div class="relative w-1/2">
            <textarea type="text" name="desc" id="desc" placeholder="Mô tả" v-model="description" class="resize-none min-h-20"></textarea>
          </div>
        </div>
        <div class="w-1/2" v-if="errors?.description && errors?.description.length > 0">
          <p v-for="(err, index) in errors?.description" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
        </div>
        <div class="input-group">
          <label for="address" class="title">Địa chỉ <span class="text-dangerColor">*</span></label>
          <div class="relative w-1/2">
            <textarea
              type="text"
              name="address"
              id="address"
              placeholder="Địa chỉ"
              v-model="address"
              class="resize-none min-h-20"
              @input="validateAddress"
              @blur="validateAddress"
            ></textarea>
          </div>
        </div>
        <div class="w-1/2" v-if="errors?.address && errors?.address.length > 0">
          <p v-for="(err, index) in errors?.address" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
        </div>
        <div class="mt-4">
          <PrimaryButton :content="'Yêu cầu'" :func="request" :loading="isSubmitting" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from 'vue'
import { useToastStore } from '@/stores'
import { requestCreateStore } from '@/webServices/userService'

import PrimaryButton from '@/components/Button/PrimaryButton.vue'
export default defineComponent({
  components: { PrimaryButton },
  setup() {
    const toastStore = useToastStore()

    const isSubmitting = ref(false)

    const requestForm = reactive({
      name: '',
      description: '',
      address: ''
    })

    const errors = ref({
      name: [],
      description: [],
      address: []
    })

    const clearRequestForm = () => {
      requestForm.name = ''
      requestForm.description = ''
      requestForm.address = ''
    }

    const isErrorName = ref(false)
    const isErrorDesc = ref(false)
    const isErrorAddress = ref(false)

    const validateName = () => {
      errors.value.name = []

      if (!requestForm.name) {
        errors.value.name.push('Vui lòng nhập tên shop')
        isErrorName.value = true
      } else {
        isErrorName.value = false
      }
    }

    const validateDesc = () => {
      errors.value.description = []

      if (!requestForm.description) {
        errors.value.description.push('Vui lòng nhập mô tả')
        isErrorDesc.value = true
      } else {
        isErrorDesc.value = false
      }
    }

    const validateAddress = () => {
      errors.value.address = []

      if (!requestForm.address) {
        errors.value.address.push('Vui lòng nhập địa chỉ')
        isErrorAddress.value = true
      } else {
        isErrorAddress.value = false
      }
    }

    const request = async () => {
      isSubmitting.value = true
      validateName()
      validateAddress()

      if (isErrorName.value || isErrorAddress.value) {
        isSubmitting.value = false
        return
      }

      const res = await requestCreateStore({
        name: requestForm.name,
        description: requestForm.description,
        address: requestForm.address
      })

      if (res.success) {
        toastStore.showToastModal({
          type: 'error',
          message: 'Đăng kí bán hàng thành công',
          timeout: 3000
        })

        clearRequestForm()
      }

      isSubmitting.value = false
    }

    return { isSubmitting, errors, ...toRefs(requestForm), validateName, validateDesc, validateAddress, request }
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
.input-group .title {
  @apply text-headingColor block mb-2 font-bold;
}

.input-group {
  display: block;
  margin-top: 16px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  position: relative;
}

.input-group input,
.input-group textarea,
.input-group .select {
  width: 100%;
  border-radius: 0.375rem;
  height: 40px;
  border: 1px solid;
  outline: 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  @apply border-borderColor text-headingColor;
}

select {
  min-height: auto;
}

.input-group input:focus,
.input-group textarea:focus,
.input-group .select:focus {
  @apply border-headingOpacityColor;
}
</style>
