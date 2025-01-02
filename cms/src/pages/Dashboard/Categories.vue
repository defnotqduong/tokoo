<template>
  <div class="content-container">
    <div class="py-4 px-4 flex items-center justify-between border-b border-borderColor">
      <h3 class="text-lg font-bold">Danh sách danh mục</h3>
      <PrimaryButton :content="'Thêm danh mục'" :func="openCreateModal" />
    </div>
    <div v-if="loading" class="min-h-[75vh] flex items-center justify-center text-primaryColor">
      <span class="loading loading-spinner loading-md"></span>
    </div>
    <template v-else>
      <p class="px-4 pt-4 pb-10 italic" v-if="categories.length === 0">Chưa có danh mục nào</p>
      <div v-else class="pb-4">
        <table class="table">
          <thead>
            <tr>
              <th class="text-center">ID</th>
              <th>Danh mục</th>
              <th>Mô tả</th>

              <th class="text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, index) in categories" :key="index">
              <td class="text-center">{{ category.id }}</td>
              <td>{{ category.name }}</td>
              <td>{{ category.description }}</td>
              <td>
                <div class="flex items-center justify-center gap-2">
                  <button
                    @click="changeSelectEditCategory(category.id)"
                    class="px-3 py-2 rounded-md bg-primaryOpacityColor text-primaryColor transition-all duration-300 hover:bg-primaryColor hover:text-whiteColor"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" width="16" height="16">
                      <path
                        d="M229.65137,58.34326l-32-32a8.00034,8.00034,0,0,0-11.31446,0l-96,96A8.00035,8.00035,0,0,0,87.99414,128v32a8.00039,8.00039,0,0,0,8,8h32a8.00076,8.00076,0,0,0,5.65723-2.34326l96-96A8,8,0,0,0,229.65137,58.34326Zm-29.657,18.34326L179.30811,56l12.686-12.68652L212.68066,64ZM223.99414,120v88a16.01833,16.01833,0,0,1-16,16h-160a16.01833,16.01833,0,0,1-16-16V48a16.01833,16.01833,0,0,1,16-16h88a8,8,0,0,1,0,16h-88V208h160V120a8,8,0,0,1,16,0Z"
                      />
                    </svg>
                  </button>
                  <button
                    @click="changeSelectDeleteCategory(category.id)"
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
        <Pagination class="mt-4 px-4" :meta="meta" />
      </div>
    </template>

    <CreateCategoryModal :isCreateModalOpen="isCreateModalOpen" :closeCreateModal="closeCreateModal" :fetchData="fetchData" />
    <EditCategoryModal :isEditModalOpen="isEditModalOpen" :selectCategory="selectEditCategory" :closeEditModal="closeEditModal" :fetchData="fetchData" />
    <DeleteCategoryModal
      :isDeleteModalOpen="isDeleteModalOpen"
      :selectCategory="selectDeleteCategory"
      :closeDeleteModal="closeDeleteModal"
      :fetchData="fetchData"
    />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useUserStore, useToastStore } from '@/stores'
import { getListCategory } from '@/webServices/categoryService'

import CreateCategoryModal from '@/components/Dashboard/Category/CreateCategoryModal.vue'
import EditCategoryModal from '@/components/Dashboard/Category/EditCategoryModal.vue'
import DeleteCategoryModal from '@/components/Dashboard/Category/DeleteCategoryModal.vue'
import PrimaryButton from '@/components/Button/PrimaryButton.vue'
import Pagination from '@/components/Pagination/Pagination.vue'

export default defineComponent({
  components: { PrimaryButton, CreateCategoryModal, EditCategoryModal, DeleteCategoryModal, Pagination },
  setup() {
    const userStore = useUserStore()
    const toastStore = useToastStore()

    const loading = ref(false)
    const categories = ref([])

    const meta = ref({
      first: null,
      last: null,
      number: null,
      numberOfElements: null,
      size: null,
      totalElements: null,
      totalPages: null
    })
    const selectEditCategory = ref({
      id: null,
      name: '',
      description: ''
    })
    const selectDeleteCategory = ref({
      id: null,
      name: '',
      description: ''
    })

    const isCreateModalOpen = ref(false)
    const isEditModalOpen = ref(false)
    const isDeleteModalOpen = ref(false)

    const openCreateModal = () => {
      isCreateModalOpen.value = true
    }

    const closeCreateModal = () => {
      isCreateModalOpen.value = false
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

    const changeSelectEditCategory = id => {
      const selected = categories.value.find(category => category.id === id)
      selectEditCategory.value = { ...selected }
      openEditModal()
    }

    const changeSelectDeleteCategory = id => {
      const selected = categories.value.find(category => category.id === id)
      selectDeleteCategory.value = { ...selected }
      openDeleteModal()
    }

    const fetchData = async () => {
      const res = await getListCategory()
      console.log(res)
      if (res.success) {
        categories.value = res.dtoList
        meta.value = res.pageDto
      }
    }

    onMounted(async () => {
      loading.value = true
      await fetchData()
      loading.value = false
    })

    return {
      loading,
      categories,
      meta,
      selectEditCategory,
      selectDeleteCategory,
      isCreateModalOpen,
      isEditModalOpen,
      isDeleteModalOpen,
      openCreateModal,
      closeCreateModal,
      openEditModal,
      closeEditModal,
      openDeleteModal,
      closeDeleteModal,
      changeSelectEditCategory,
      changeSelectDeleteCategory,
      fetchData
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

.payment-container {
  @apply sticky bottom-0 px-4 py-8 bg-whiteColor rounded-md border border-borderColor shadow-shadow06;
}

.ui-checkbox {
  --primary-color: #3bb77e;
  --secondary-color: #fff;
  --primary-hover-color: #def9ec;
  --checkbox-diameter: 20px;
  --checkbox-border-radius: 5px;
  --checkbox-border-color: #d9d9d9;
  --checkbox-border-width: 1px;
  --checkbox-border-style: solid;
  --checkmark-size: 1.2;
}

.ui-checkbox,
.ui-checkbox *,
.ui-checkbox *::before,
.ui-checkbox *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.ui-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: var(--checkbox-diameter);
  height: var(--checkbox-diameter);
  border-radius: var(--checkbox-border-radius);
  background: var(--secondary-color);
  border: var(--checkbox-border-width) var(--checkbox-border-style) var(--checkbox-border-color);
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
}

.ui-checkbox::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
  box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
  border-radius: inherit;
  opacity: 0;
  -webkit-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  -o-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
}

.ui-checkbox::before {
  top: 40%;
  left: 50%;
  content: '';
  position: absolute;
  width: 4px;
  height: 7px;
  border-right: 2px solid var(--secondary-color);
  border-bottom: 2px solid var(--secondary-color);
  -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(0);
  -ms-transform: translate(-50%, -50%) rotate(45deg) scale(0);
  transform: translate(-50%, -50%) rotate(45deg) scale(0);
  opacity: 0;
  -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
  -o-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
  transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
}

.ui-checkbox:hover {
  border-color: var(--primary-color);
}

.ui-checkbox:checked {
  background: var(--primary-color);
  border-color: transparent;
}

.ui-checkbox:checked::before {
  opacity: 1;
  -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  -ms-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  -o-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
}

.ui-checkbox:active:not(:checked)::after {
  -webkit-transition: none;
  -o-transition: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  transition: none;
  opacity: 1;
}
</style>
