<template>
  <div>
    <div v-if="loading" class="min-h-[75vh] flex items-center justify-center text-primaryColor">
      <span class="loading loading-spinner loading-md"></span>
    </div>
    <template v-else>
      <div class="py-4"><h4 class="text-3xl font-bold">Cập nhật sản phẩm</h4></div>
      <div class="mt-4 pb-20 w-4/5 content-container">
        <div class="mb-6 flex items-center justify-between border-b-2 border-borderColor">
          <ul class="flex items-center justify-start text-headingColor font-bold">
            <li
              v-for="navItem in nav"
              :key="navItem.id"
              @click="setActive(navItem.id)"
              class="px-2 py-2 sm:py-4 sm:px-6 text-sm sm:text-base relative cursor-pointer transition-all duration-300 hover:text-primaryColor after:absolute after:content after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primaryColor after:transition-all after:duration-300"
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

        <div v-if="nav[0].isActive" class="p-4 form">
          <form>
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
                        <div v-if="imageUrl || thumbnail" class="w-full h-full p-4 flex items-center justify-start">
                          <img :src="imageUrl || thumbnail" alt="Uploaded Image" class="h-full object-cover rounded-md" />
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
                  <input
                    type="text"
                    name="discount"
                    id="discount"
                    placeholder="Discount"
                    v-model="discount"
                    @input="validateDiscount"
                    @blur="validateDiscount"
                  />
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
                @click.prevent="edit"
                class="px-4 h-10 bg-primaryColor text-whiteColor transition-all duration-300 rounded-lg hover:bg-darkPrimaryColor"
              >
                Cập nhật
              </button>
            </div>
          </form>
        </div>
        <div v-if="nav[1].isActive" class="px-4 form content-container">
          <div class="py-4 px-2 flex items-center justify-between border-b border-borderColor">
            <h3 class="text-lg font-bold">Danh sách biến thể</h3>
            <div class="flex items-center justify-center gap-2">
              <PrimaryButton :content="'Thêm biến thể'" :func="openAddModal" />
            </div>
          </div>
          <p v-if="variants.length === 0" class="px-4 pt-4 pb-10 italic">Chưa có biến thể nào</p>
          <div v-else>
            <table class="table">
              <thead>
                <tr>
                  <th class="text-center">ID</th>
                  <th>Ảnh</th>
                  <th>Biến thể</th>
                  <th class="text-end">
                    <div class="mr-9">Thao tác</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(variant, index) in variants" :key="index">
                  <td class="text-center">{{ index + 1 }}</td>
                  <td><img :src="variant.imageUrl" class="w-20 object-cover object-center rounded-md" alt="variant thumbnail" /></td>
                  <td>
                    {{ variant.attribute }}
                  </td>
                  <td>
                    <div class="flex items-center justify-end gap-2">
                      <button
                        @click="getSizes(variant.id)"
                        class="px-3 py-2 rounded-md bg-secondaryOpacityColor text-secondaryColor transition-all duration-300 hover:bg-secondaryColor hover:text-whiteColor"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.5 12c0-2.25 3.75-7.5 10.5-7.5S22.5 9.75 22.5 12s-3.75 7.5-10.5 7.5S1.5 14.25 1.5 12zM12 16.75a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5zM14.7 12a2.7 2.7 0 1 1-5.4 0 2.7 2.7 0 0 1 5.4 0z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <button
                        @click="changeSelectEditVariant(variant.id)"
                        class="px-3 py-2 rounded-md bg-primaryOpacityColor text-primaryColor transition-all duration-300 hover:bg-primaryColor hover:text-whiteColor"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" width="16" height="16">
                          <path
                            d="M229.65137,58.34326l-32-32a8.00034,8.00034,0,0,0-11.31446,0l-96,96A8.00035,8.00035,0,0,0,87.99414,128v32a8.00039,8.00039,0,0,0,8,8h32a8.00076,8.00076,0,0,0,5.65723-2.34326l96-96A8,8,0,0,0,229.65137,58.34326Zm-29.657,18.34326L179.30811,56l12.686-12.68652L212.68066,64ZM223.99414,120v88a16.01833,16.01833,0,0,1-16,16h-160a16.01833,16.01833,0,0,1-16-16V48a16.01833,16.01833,0,0,1,16-16h88a8,8,0,0,1,0,16h-88V208h160V120a8,8,0,0,1,16,0Z"
                          />
                        </svg>
                      </button>
                      <button
                        @click="changeSelectDeleteVariant(variant.id)"
                        class="px-3 py-2 rounded-md bg-dangerColor text-whiteColor transition-all duration-300 hover:bg-darkDangerColor"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="-3 0 32 32">
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-261.000000, -205.000000)" fill="currentColor">
                              <path
                                d="M268,220 C268,219.448 268.448,219 269,219 C269.552,219 270,219.448 270,220 L270,232 C270,232.553 269.552,233 269,233 C268.448,233 268,232.553 268,232 L268,220 L268,220 Z M273,220 C273,219.448 273.448,219 274,219 C274.552,219 275,219.448 275,220 L275,232 C275,232.553 274.552,233 274,233 C273.448,233 273,232.553 273,232 L273,220 L273,220 Z M278,220 C278,219.448 278.448,219 279,219 C279.552,219 280,219.448 280,220 L280,232 C280,232.553 279.552,233 279,233 C278.448,233 278,232.553 278,232 L278,220 L278,220 Z M263,233 C263,235.209 264.791,237 267,237 L281,237 C283.209,237 285,235.209 285,233 L285,217 L263,217 L263,233 L263,233 Z M277,209 L271,209 L271,208 C271,207.447 271.448,207 272,207 L276,207 C276.552,207 277,207.447 277,208 L277,209 L277,209 Z M285,209 L279,209 L279,207 C279,205.896 278.104,205 277,205 L271,205 C269.896,205 269,205.896 269,207 L269,209 L263,209 C261.896,209 261,209.896 261,211 L261,213 C261,214.104 261.895,214.999 262.999,215 L285.002,215 C286.105,214.999 287,214.104 287,213 L287,211 C287,209.896 286.104,209 285,209 L285,209 Z"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <CreateVariantModal :isAddModalOpen="isAddModalOpen" :closeAddModal="closeAddModal" :fetchData="getVatirants" :productId="id" />
          <EditVariantModal
            :isEditModalOpen="isEditModalOpen"
            :variant="selectEditVariant"
            :closeEditModal="closeEditModal"
            :fetchData="getVatirants"
            :productId="id"
          />
          <DeleteVariantModal
            :isDeleteModalOpen="isDeleteModalOpen"
            :variant="selectDeleteVariant"
            :closeDeleteModal="closeDeleteModal"
            :fetchData="getVatirants"
          />
          <SizeModal
            :isSizeModalOpen="isSizeModalOpen"
            :sizes="sizes"
            :variantId="selectVariantId"
            :closeSizeModal="closeSizeModal"
            :price="price"
            :fetchData="getSizes"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { generateFileName } from '@/utils'
import { useUserStore, useToastStore } from '@/stores'
import { getProductInfo, editProduct, getListVariant, getListSize } from '@/webServices/productService'
import { getAllCategory } from '@/webServices/categoryService'

import Editor from '@/components/Editor/Editor.vue'
import PrimaryButton from '@/components/Button/PrimaryButton.vue'
import CreateVariantModal from '@/components/Dashboard/Product/CreateVariantModal.vue'
import EditVariantModal from '@/components/Dashboard/Product/EditVariantModal.vue'
import DeleteVariantModal from '@/components/Dashboard/Product/DeleteVariantModal.vue'
import SizeModal from '@/components/Dashboard/Product/SizeModal.vue'
export default defineComponent({
  components: { Editor, PrimaryButton, CreateVariantModal, EditVariantModal, DeleteVariantModal, SizeModal },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userStore = useUserStore()
    const toastStore = useToastStore()

    const loading = ref(false)
    const isSubmitting = ref(false)
    const categories = ref([])

    const nav = reactive([
      {
        id: 1,
        label: 'Thông tin sản phẩm',
        isActive: true
      },
      {
        id: 2,
        label: 'Biến thể',
        isActive: false
      }
    ])

    const setActive = id => {
      nav.forEach(item => {
        item.isActive = item.id === id
      })
    }

    const product = reactive({
      id: null,
      thumbnail: '',
      name: '',
      categoryId: null,
      summary: '',
      description: '',
      price: null,
      discount: null
    })

    const variants = ref([])
    const sizes = ref([])

    const selectEditVariant = ref({
      id: null,
      imageUrl: '',
      attribute: ''
    })

    const selectDeleteVariant = ref({
      id: null,
      imageUrl: '',
      attribute: ''
    })

    const selectVariantId = ref(null)

    const isAddModalOpen = ref(false)
    const isEditModalOpen = ref(false)
    const isDeleteModalOpen = ref(false)
    const isSizeModalOpen = ref(false)

    const openAddModal = () => {
      isAddModalOpen.value = true
    }

    const closeAddModal = () => {
      isAddModalOpen.value = false
    }

    const openEditModal = () => {
      isEditModalOpen.value = true
    }

    const closeEditModal = () => {
      isEditModalOpen.value = false
    }

    const openDeleteModal = () => {
      isDeleteModalOpen.value = true
    }

    const closeDeleteModal = () => {
      isDeleteModalOpen.value = false
    }

    const openSizeModal = () => {
      isSizeModalOpen.value = true
    }

    const closeSizeModal = () => {
      isSizeModalOpen.value = false
    }

    const changeSelectEditVariant = id => {
      const selected = variants.value.find(variant => variant.id === id)
      selectEditVariant.value = { ...selected }
      openEditModal()
    }

    const changeSelectDeleteVariant = id => {
      const selected = variants.value.find(variant => variant.id === id)
      selectDeleteVariant.value = { ...selected }
      openDeleteModal()
    }

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

    const edit = async () => {
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

      if (file && file.value) {
        formData.append('file', file.value)
      }

      const res = await editProduct(product.id, formData)

      if (res.success) {
        toastStore.showToastModal({
          type: 'success',
          message: 'Cập nhật sản phẩm thành công',
          timeout: 3000
        })
      }
      isSubmitting.value = false
    }

    const fetchData = async () => {
      const res = await getAllCategory()
      if (res.success) {
        categories.value = res.dtoList
      }
    }

    const getVatirants = async () => {
      const res = await getListVariant(product.id)
      variants.value = res.dtoList
    }

    const getSizes = async id => {
      const res = await getListSize(id)
      if (res.success) {
        selectVariantId.value = id
        sizes.value = res.sizeList
        openSizeModal()
      }
    }

    const getProduct = async () => {
      const slug = route.params.slug
      const parts = slug.split('-')
      const id = parts[parts.length - 1]
      const res = await getProductInfo(id)

      console.log(res)

      if (res.success) {
        Object.assign(product, {
          id: res.dto.productId || null,
          thumbnail: res.dto.thumbnail || '',
          name: res.dto.productName || '',
          categoryId: res.dto.categoryDTO?.id || null,
          summary: res.dto.summary || '',
          description: res.dto.description || '',
          price: res.dto.price || 0,
          discount: res.dto.discount || 0
        })

        variants.value = res.dto.variantDTOS
      }
    }

    onMounted(async () => {
      loading.value = true
      await Promise.all([fetchData(), getProduct()])
      loading.value = false
    })

    return {
      nav,
      loading,
      isSubmitting,
      ...toRefs(product),
      variants,
      file,
      imageUrl,
      categories,
      errors,
      isAddModalOpen,
      isEditModalOpen,
      isDeleteModalOpen,
      isSizeModalOpen,
      selectEditVariant,
      selectDeleteVariant,
      selectVariantId,
      sizes,
      openAddModal,
      closeAddModal,
      openEditModal,
      closeEditModal,
      openDeleteModal,
      closeDeleteModal,
      openSizeModal,
      closeSizeModal,
      changeSelectEditVariant,
      changeSelectDeleteVariant,
      setActive,
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
      getVatirants,
      getSizes,
      edit
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

.table thead {
  @apply border-b border-borderColor;
}
.table th {
  @apply text-base text-headingColor font-semibold;
}

.table thead tr {
  border-bottom: none;
}

.table tbody tr {
  @apply border-b border-borderColor;
}
</style>
