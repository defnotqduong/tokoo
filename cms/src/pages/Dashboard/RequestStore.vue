<template>
  <div>
    <div class="py-4"><h4 class="text-3xl font-bold">Yêu cầu</h4></div>
    <div class="mt-4 content-container">
      <div class="py-4 px-4 flex items-center justify-between border-b border-borderColor">
        <h3 class="text-lg font-bold">Danh sách yêu cầu</h3>
      </div>
      <div v-if="loading" class="min-h-[75vh] flex items-center justify-center text-primaryColor">
        <span class="loading loading-spinner loading-md"></span>
      </div>
      <template v-else>
        <p class="px-4 pt-4 pb-10 italic" v-if="requests.length === 0">Chưa có yêu cầu nào</p>
        <div v-else class="pb-4">
          <div class="overflow-x-auto scrollbar-table">
            <table class="table w-full">
              <thead>
                <tr>
                  <th class="text-center">STT</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th class="max-w-[400px]">Store</th>
                  <th>Địa chỉ</th>
                  <th>Mô tả</th>
                  <th>Trạng thái</th>
                  <th class="text-end">
                    <div class="mr-2">Thao tác</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(req, index) in requests" :key="index">
                  <td class="text-center">{{ index + 1 }}</td>
                  <td>
                    {{ req?.userName }}
                  </td>
                  <td>{{ req?.userEmail }}</td>
                  <td>{{ req?.name }}</td>
                  <td>{{ req?.address }}</td>
                  <td class="max-w-[400px]">
                    <div class="line-clamp-4">{{ req?.description || '_' }}</div>
                  </td>

                  <td>{{ req?.approved ? 'Đã duyệt' : 'Chưa duyệt' }}</td>
                  <td>
                    <div class="flex items-center justify-end gap-2">
                      <button
                        @click.prevent="confirm(req?.id)"
                        class="px-3 py-2 rounded-md bg-primaryOpacityColor text-primaryColor font-bold transition-all duration-300 hover:bg-primaryColor hover:text-whiteColor"
                      >
                        Duyệt
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useUserStore, useToastStore } from '@/stores'

import { getAllRequestByAdmin, confirmRequestByAdmin } from '@/webServices/storeService'
export default defineComponent({
  setup() {
    const userStore = useUserStore()
    const toastStore = useToastStore()

    const loading = ref(false)
    const isSubmitting = ref(false)

    const requests = ref([])

    const confirm = async id => {
      isSubmitting.value = true
      const res = await confirmRequestByAdmin(id)

      if (res.success) {
        toastStore.showToastModal({
          type: 'success',
          message: 'Xác nhận yêu cầu thành công',
          timeout: 3000
        })

        const res = await getAllRequestByAdmin()
        requests.value = res.dtoList
      }

      isSubmitting.value = false
    }

    const fetchData = async () => {
      const res = await getAllRequestByAdmin()

      if (res.success) {
        requests.value = res.dtoList
      }
    }

    onMounted(async () => {
      loading.value = true
      await fetchData()
      loading.value = false
    })

    return {
      loading,
      requests,
      confirm
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
</style>
