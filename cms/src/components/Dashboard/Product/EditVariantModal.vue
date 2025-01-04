<template>
  <div>
    <input type="checkbox" id="my_modal_add_address" class="modal-toggle" v-model="isEditModalOpen" />
    <div class="modal" role="dialog">
      <div class="modal-box max-w-[800px] bg-white py-6 px-8">
        <div>
          <h4 class="text-xl font-bold">Chỉnh sửa biến thể</h4>
        </div>
        <form class="form">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
              <div class="input-group">
                <label for="thumbnail" class="title">Ảnh biến thể <span class="text-dangerColor">*</span></label>
                <form @drop.prevent="handleDrop" @dragover.prevent>
                  <div class="h-56 relative">
                    <input type="file" name="editInputFile" id="editInputFile" class="absolute z-[-1] opacity-0" @change="handleFileChange" />
                    <label
                      for="editInputFile"
                      class="w-full h-full flex flex-col items-center justify-center text-primaryColor rounded-md border-2 border-dashed border-[#797989]"
                    >
                      <div v-if="imageUrl || variant.imageUrl" class="w-full h-full p-4 flex items-center justify-start">
                        <img :src="imageUrl || variant.imageUrl" alt="Uploaded Image" class="h-full object-cover rounded-md" />
                      </div>
                      <div v-else class="w-full h-full flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="48" height="48" viewBox="0 -1.5 35 35" version="1.1">
                          <path
                            d="M29.426 15.535c0 0 0.649-8.743-7.361-9.74-6.865-0.701-8.955 5.679-8.955 5.679s-2.067-1.988-4.872-0.364c-2.511 1.55-2.067 4.388-2.067 4.388s-5.576 1.084-5.576 6.768c0.124 5.677 6.054 5.734 6.054 5.734h9.351v-6h-3l5-5 5 5h-3v6h8.467c0 0 5.52 0.006 6.295-5.395 0.369-5.906-5.336-7.070-5.336-7.070z"
                          />
                        </svg>
                        <div class="mt-2 font-bold text-bodyColor">Chọn tệp hoặc kéo và thả</div>
                        <span class="text-sm text-bodyColor">Ảnh (4MB)</span>
                      </div>
                    </label>
                  </div>
                </form>
                <div v-if="errors?.file && errors?.file.length > 0">
                  <p v-for="(err, index) in errors?.file" :key="index" class="mt-2 text-dangerColor">{{ err }}</p>
                </div>
              </div>
            </div>
            <div class="col-span-12">
              <div class="input-group">
                <label for="name" class="title">Tên biến thể <span class="text-dangerColor">*</span></label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Tên biến thể"
                  v-model="variant.attribute"
                  @input="validateAttribute"
                  @blur="validateAttribute"
                />
              </div>
              <div v-if="errors?.attribute && errors?.attribute.length > 0">
                <p v-for="(err, index) in errors?.attribute" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
              </div>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-end gap-4">
            <button
              @click.prevent="close"
              ref="cancelButton"
              :class="[
                'px-4 h-10 bg-dangerColor text-whiteColor transition-all duration-300 rounded-lg hover:bg-darkDangerColor',
                { 'cursor-not-allowed': isSubmitting }
              ]"
            >
              Hủy
            </button>
            <button
              :disabled="isSubmitting"
              @click.prevent="edit"
              :class="[
                'px-4 h-10 bg-primaryColor text-whiteColor transition-all duration-300 rounded-lg hover:bg-darkPrimaryColor',
                { 'cursor-not-allowed': isSubmitting }
              ]"
            >
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from 'vue'
import { useUserStore, useToastStore } from '@/stores'
import { generateFileName } from '@/utils'

import { editVariant } from '@/webServices/productService'

export default defineComponent({
  props: {
    isEditModalOpen: Boolean,
    variant: Object,
    productId: Number,
    fetchData: Function,
    closeEditModal: Function
  },
  setup(props) {
    const userStore = useUserStore()
    const toastStore = useToastStore()

    const isSubmitting = ref(false)

    const errors = ref({
      file: [],
      attribute: []
    })

    const clearVariant = () => {
      file.value = null
      imageUrl.value = null
    }

    const clearError = () => {
      isErrorFile.value = false
      isErrorAttribute.value = false
      errors.value.file = []
      errors.value.attribute = []
    }

    const isErrorFile = ref(false)
    const isErrorAttribute = ref(false)

    const file = ref(null)
    const imageUrl = ref(null)

    const handleDrop = e => {
      if (e.dataTransfer.files.length > 0) {
        const originalFile = e.dataTransfer.files[0]
        const newFileName = generateFileName(originalFile.name)
        file.value = new File([originalFile], newFileName, { type: originalFile.type })
        imageUrl.value = URL.createObjectURL(file.value)

        validateFile()
      }
    }

    const handleFileChange = e => {
      if (e.target.files.length > 0) {
        const originalFile = e.target.files[0]
        const newFileName = generateFileName(originalFile.name)
        file.value = new File([originalFile], newFileName, { type: originalFile.type })
        imageUrl.value = URL.createObjectURL(file.value)

        validateFile()
      }
    }

    const validateFile = () => {
      errors.value.file = []
      isErrorFile.value = false

      if (!file.value) {
        return
      }

      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
      const maxSize = 4 * 1024 * 1024

      if (!allowedTypes.includes(file.value.type)) {
        errors.value.file.push('File không đúng định dạng (chỉ chấp nhận JPEG, PNG, GIF)')
        isErrorFile.value = true
      } else if (file.value.size > maxSize) {
        errors.value.file.push('Vui lòng chọn file có dung lượng không vượt quá 4MB')
        isErrorFile.value = true
      }
    }

    const validateAttribute = () => {
      errors.value.attribute = []

      if (!props.variant.attribute) {
        errors.value.attribute.push('Vui lòng nhập tên biến thể')
        isErrorAttribute.value = true
      } else {
        isErrorAttribute.value = false
      }
    }

    const close = () => {
      clearVariant()
      clearError()
      props.closeEditModal()
    }

    const edit = async () => {
      isSubmitting.value = true
      validateFile()
      validateAttribute()

      if (isErrorFile.value || isErrorAttribute.value) {
        isSubmitting.value = false
        return
      }

      const formData = new FormData()
      formData.append('attribute', props.variant.attribute)
      formData.append('productId', props.productId)

      if (file && file.value) {
        formData.append('file', file.value)
      }

      const res = await editVariant(props.variant.id, formData)

      if (res.success) {
        toastStore.showToastModal({
          type: 'success',
          message: 'Chỉnh sửa biến thể thành công',
          timeout: 3000
        })
        props.fetchData()
      }

      close()
      isSubmitting.value = false
    }

    return {
      isSubmitting,
      errors,
      file,
      imageUrl,
      handleDrop,
      handleFileChange,
      validateFile,
      validateAttribute,
      close,
      edit
    }
  }
})
</script>

<style scoped>
.content-container {
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.03);
  @apply bg-whiteColor rounded-md;
}

.form {
  @apply w-full;
}

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
