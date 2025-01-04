<template>
  <div>
    <div v-if="loading" class="min-h-[75vh] flex items-center justify-center text-primaryColor">
      <span class="loading loading-spinner loading-md"></span>
    </div>
    <template v-else>
      <div class="py-4"><h4 class="text-3xl font-bold">Thêm sản phẩm</h4></div>
      <div class="mt-4 pb-20 w-4/5 content-container">
        <div class="mb-6 flex items-center justify-between border-b-2 border-borderColor">
          <ul class="flex items-center justify-start text-headingColor font-bold">
            <li
              v-for="navItem in nav"
              :key="navItem.id"
              class="px-2 py-2 sm:py-4 sm:px-6 text-sm sm:text-base relative transition-all duration-300 hover:text-primaryColor after:absolute after:content after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primaryColor after:transition-all after:duration-300"
              :class="{
                'after:scale-100 text-primaryColor': navItem.isActive,
                'after:scale-0 text-headingColor': !navItem.isActive
              }"
            >
              <span>{{ navItem.label }}</span>
            </li>
          </ul>
          <PrimaryButton class="mr-6" :content="'Quay lại'" :func="cancel" />
        </div>
        <form v-if="nav[0].isActive" class="p-4 form">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
              <div class="input-group">
                <label for="thumbnail" class="title">Ảnh sản phẩm <span class="text-dangerColor">*</span></label>
                <form @drop.prevent="handleDrop" @dragover.prevent>
                  <div class="h-56 relative">
                    <input type="file" name="createInputFile" id="createInputFile" class="absolute z-[-1] opacity-0" @change="handleFileChange" />
                    <label
                      for="createInputFile"
                      class="w-full h-full flex flex-col items-center justify-center text-primaryColor rounded-md border-2 border-dashed border-[#797989]"
                    >
                      <div v-if="imageUrl" class="w-full h-full p-4 flex items-center justify-start">
                        <img :src="imageUrl" alt="Uploaded Image" class="h-full object-cover rounded-md" />
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
            <div class="col-span-6">
              <div class="input-group">
                <label for="name" class="title">Tên sản phẩm <span class="text-dangerColor">*</span></label>
                <input type="text" name="name" id="name" placeholder="Tên danh mục" v-model="name" @input="validateName" @blur="validateName" />
              </div>
              <div v-if="errors?.name && errors?.name.length > 0">
                <p v-for="(err, index) in errors?.name" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
              </div>
            </div>
            <div class="col-span-6">
              <div class="input-group">
                <label for="category" class="title">Tên danh mục <span class="text-dangerColor">*</span></label>
                <select name="category" id="category" class="select w-full" v-model="categoryId" @blur="validateCategory">
                  <option v-for="category in categories" :key="category.id" :value="category.id">
                    {{ category.name }}
                  </option>
                </select>
              </div>
              <div v-if="errors?.categoryId && errors?.categoryId.length > 0">
                <p v-for="(err, index) in errors?.categoryId" :key="index" class="mt-2 text-sm text-dangerColor">{{ err }}</p>
              </div>
            </div>
            <div class="col-span-12">
              <div class="input-group">
                <label for="summary" class="title">Tổng quan sản phẩm </label>
                <textarea type="text" name="summary" id="summary" placeholder="Tổng quan sẩn phẩm" v-model="summary" class="resize-none min-h-32"></textarea>
              </div>
              <div v-if="errors?.summary && errors?.summary.length > 0">
                <p v-for="(err, index) in errors?.summary" :key="index" class="mt-2 text-sm text-dangerColor">{{ err }}</p>
              </div>
            </div>
            <div class="col-span-12">
              <div class="input-group">
                <label for="description" class="title">Mô tả sản phẩm </label>
                <Editor v-model="description" />
              </div>
              <div v-if="errors?.description && errors?.description.length > 0">
                <p v-for="(err, index) in errors?.description" :key="index" class="mt-2 text-sm text-dangerColor">{{ err }}</p>
              </div>
            </div>
            <div class="col-span-6">
              <div class="input-group">
                <label for="price" class="title">Giá <span class="text-dangerColor">*</span></label>
                <input type="text" name="price" id="price" placeholder="Giá" v-model="price" @input="validatePrice" @blur="validatePrice" />
              </div>
              <div v-if="errors?.price && errors?.price.length > 0">
                <p v-for="(err, index) in errors?.price" :key="index" class="mt-2 text-sm text-dangerColor">{{ err }}</p>
              </div>
            </div>
            <div class="col-span-6">
              <div class="input-group">
                <label for="discount" class="title">Discount(%) </label>
                <input type="text" name="discount" id="discount" placeholder="Discount" v-model="discount" @input="validateDiscount" @blur="validateDiscount" />
              </div>
              <div v-if="errors?.discount && errors?.discount.length > 0">
                <p v-for="(err, index) in errors?.discount" :key="index" class="mt-2 text-sm text-dangerColor">{{ err }}</p>
              </div>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-start gap-4">
            <button
              @click.prevent="cancel"
              ref="cancelButton"
              class="px-4 h-10 bg-dangerColor text-whiteColor transition-all duration-300 rounded-lg hover:bg-darkDangerColor"
            >
              Hủy
            </button>
            <button
              :disabled="isSubmitting"
              @click.prevent="create"
              class="px-4 h-10 bg-primaryColor text-whiteColor transition-all duration-300 rounded-lg hover:bg-darkPrimaryColor"
            >
              Thêm
            </button>
          </div>
        </form>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { generateFileName, generateSlug } from '@/utils'
import { useUserStore, useToastStore } from '@/stores'
import { createProduct } from '@/webServices/productService'
import { getAllCategory } from '@/webServices/categoryService'

import Editor from '@/components/Editor/Editor.vue'
import PrimaryButton from '@/components/Button/PrimaryButton.vue'
export default defineComponent({
  components: { Editor, PrimaryButton },
  setup() {
    const router = useRouter()
    const userStore = useUserStore()
    const toastStore = useToastStore()

    const nav = reactive([
      {
        id: 1,
        label: 'Thông tin sản phẩm',
        isActive: true
      }
    ])

    const setActive = id => {
      nav.forEach(item => {
        item.isActive = item.id === id
      })
    }

    const loading = ref(false)
    const isSubmitting = ref(false)
    const categories = ref([])

    const product = reactive({
      name: '',
      categoryId: null,
      summary: '',
      description: '',
      price: null,
      discount: null
    })

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

    const isErrorFile = ref(false)
    const isErrorName = ref(false)
    const isErrorCategory = ref(false)
    const isErrorSumary = ref(false)
    const isErrorDes = ref(false)
    const isErrorPrice = ref(false)
    const isErrorDiscount = ref(false)

    const errors = ref({
      file: [],
      name: [],
      categoryId: [],
      summary: [],
      description: [],
      price: [],
      discount: []
    })

    const validateFile = () => {
      errors.value.file = []

      if (!file.value) {
        errors.value.file.push('Vui lòng chọn file')
        isErrorFile.value = true
      } else {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
        if (!allowedTypes.includes(file.value.type)) {
          errors.value.file.push('File không đúng định dạng (chỉ chấp nhận JPEG, PNG, GIF)')
          isErrorFile.value = true
        } else if (file.value.size > 4 * 1024 * 1024) {
          errors.value.file.push('Vui lòng chọn file có dung lượng không vượt quá 4MB')
          isErrorFile.value = true
        } else {
          isErrorFile.value = false
        }
      }
    }

    const validateName = () => {
      errors.value.name = []

      if (!product.name) {
        errors.value.name.push('Vui lòng nhập tên sản phẩm')
        isErrorName.value = true
      } else {
        isErrorName.value = false
      }
    }

    const validateCategory = () => {
      errors.value.categoryId = []
      if (!product.categoryId) {
        errors.value.categoryId.push('Vui lòng chọn danh mục')
        isErrorCategory.value = true
      } else {
        isErrorCategory.value = false
      }
    }

    const validateSummary = () => {
      errors.value.summary = []

      if (!product.summary) {
        errors.value.summary.push('Vui lòng nhập tổng quan sản phẩm')
        isErrorSumary.value = true
      } else {
        isErrorSumary.value = false
      }
    }

    const validateDes = () => {
      errors.value.description = []

      if (!product.description) {
        errors.value.description.push('Vui lòng nhập mô tả sản phẩm')
        isErrorDes.value = true
      } else {
        isErrorDes.value = false
      }
    }

    const validatePrice = () => {
      errors.value.price = []

      if (!product.price) {
        errors.value.price.push('Vui lòng nhập giá sản phẩm')
        isErrorPrice.value = true
      } else if (!/^[0-9]+$/.test(product.price)) {
        errors.value.price.push('Giá sản phẩm chỉ được phép chứa chữ số')
        isErrorPrice.value = true
      } else {
        isErrorPrice.value = false
      }
    }

    const validateDiscount = () => {
      errors.value.discount = []

      if (!/^[0-9]+$/.test(product.discount)) {
        errors.value.discount.push('Discount chỉ được phép chứa chữ số')
        isErrorDiscount.value = true
      } else {
        isErrorDiscount.value = false
      }
    }

    const cancel = () => {
      router.push({ name: 'products' })
    }

    const redirectEditProductPage = (name, id) => {
      const slug = `${generateSlug(name)}-${id}`
      router.push({ name: 'edit-product', params: { slug } })
    }

    const create = async () => {
      isSubmitting.value = true
      validateFile()
      validateName()
      validateCategory()
      validatePrice()
      validateDiscount()

      if (isErrorFile.value || isErrorName.value || isErrorCategory.value || isErrorPrice.value || isErrorDiscount.value) {
        isSubmitting.value = false
        return
      }

      const formData = new FormData()
      const specialPrice = parseFloat(product.price) - (parseFloat(product.price) * parseFloat(product.discount)) / 100

      formData.append('name', product.name)
      formData.append('categoryId', product.categoryId)
      formData.append('summary', product.summary)
      formData.append('description', product.description)
      formData.append('price', parseFloat(product.price))
      formData.append('discount', parseFloat(product.discount))
      formData.append('specialPrice', specialPrice.toFixed(2))
      formData.append('file', file.value)

      const res = await createProduct(formData)

      console.log(res)

      if (res.success) {
        toastStore.showToastModal({
          type: 'success',
          message: 'Tạo sản phẩm thành công',
          timeout: 3000
        })

        setTimeout(() => {
          redirectEditProductPage(res.dto.productName, res.dto.productId)
        }, 3000)
      }

      isSubmitting.value = false
    }

    const fetchData = async () => {
      const res = await getAllCategory()

      if (res.success) {
        categories.value = res.dtoList
      }
    }

    onMounted(() => {
      loading.value = true
      fetchData()
      loading.value = false
    })

    return {
      nav,
      loading,
      isSubmitting,
      ...toRefs(product),
      file,
      imageUrl,
      categories,
      errors,
      validateFile,
      validateName,
      validateCategory,
      validateSummary,
      validateDes,
      validatePrice,
      validateDiscount,
      handleDrop,
      handleFileChange,
      cancel,
      create
    }
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
