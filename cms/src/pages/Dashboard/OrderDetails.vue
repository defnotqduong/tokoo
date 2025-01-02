<template>
  <div class="content-container">
    <div class="py-4 px-4 flex items-center justify-between border-b border-borderColor">
      <h3 class="text-lg font-bold">Chi tiết đơn hàng</h3>
    </div>
    <div class="py-4 px-4">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-9">
          <div>
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-center gap-3">
                #0758267/90
                <span class="px-3 py-1 rounded-lg bg-primaryColor text-whiteColor">Đã thanh toán</span>
                <span class="px-3 py-1 rounded-lg border border-secondaryColor text-secondaryColor">Đang tiến hành</span>
              </div>
              <div class="flex items-center justify-center gap-3">
                <button
                  class="px-3 h-10 rounded-lg text-bodyColor border border-bodyColor transition-all duration-300 hover:text-whiteColor hover:bg-bodyColor"
                >
                  Hoàn tiền
                </button>
                <button class="px-3 h-10 rounded-lg text-whiteColor bg-primaryColor transition-all duration-300 hover:bg-darkPrimaryColor">
                  Chỉnh sửa đơn hàng
                </button>
              </div>
            </div>
            <div class="mt-2">Đơn hàng / Chi tiết đơn hàng / #0758267/90 - {{ formatDateTimeLong('2024-12-28T15:30:00') }}</div>
            <div>
              <h5 class="my-6 text-lg font-bold">Tiến triển</h5>
              <div class="flex items-center justify-start gap-4">
                <div class="flex-1">
                  <div class="mb-2 h-2 w-full rounded-md bg-borderColor overflow-auto">
                    <div class="w-full h-full bg-primaryColor"></div>
                  </div>
                  Xác nhận đơn hàng
                </div>
                <div class="flex-1">
                  <div class="mb-2 h-2 w-full rounded-md bg-borderColor overflow-auto">
                    <div class="w-full h-full bg-primaryColor"></div>
                  </div>
                  Đang chờ thanh toán
                </div>
                <div class="flex-1">
                  <div class="mb-2 h-2 w-full rounded-md bg-borderColor overflow-auto">
                    <div class="w-1/2 h-full bg-secondaryColor"></div>
                  </div>
                  <div class="flex items-center justify-start gap-2">
                    Xử lý
                    <span class="text-secondaryColor">
                      <span class="loading loading-spinner loading-sm"></span>
                    </span>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="mb-2 h-2 w-full rounded-md bg-borderColor overflow-auto">
                    <div class="w-0 h-full bg-secondaryColor"></div>
                  </div>
                  Giao hàng
                </div>
                <div class="flex-1">
                  <div class="mb-2 h-2 w-full rounded-md bg-borderColor overflow-auto">
                    <div class="w-0 h-full bg-secondaryColor"></div>
                  </div>
                  Hoàn thành
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <h5 class="text-lg font-bold pb-4 border-b border-borderColor">Danh sách sản phẩm</h5>
            <table class="table">
              <thead>
                <tr>
                  <th>Tên sản phẩm và size</th>
                  <th>Số lượng</th>
                  <th>Giá</th>
                  <th>Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(order, index) in orders" :key="index">
                  <td>
                    <div class="flex items-center justify-start gap-2">
                      <img src="@/assets/images/product-1.jpg" class="w-16" alt="" />
                      <div>
                        <div>
                          {{ order.name }}
                        </div>
                        <div class="text-bodyColor">Size: {{ order.size }}</div>
                      </div>
                    </div>
                  </td>
                  <td>{{ order.quantity }}</td>
                  <td>{{ formatPrice(order.price) }}</td>
                  <td>{{ formatPrice(order.price * order.quantity) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-span-3">
          <div>
            <h5 class="text-lg font-bold pb-4 mb-4 border-b border-borderColor">Tổng quan đơn hàng</h5>
            <div>
              <div class="pb-4 mb-4 flex items-center justify-between border-b border-borderColor">
                <span class="font-bold">Tổng cộng:</span> <span>{{ formatPrice(1350000) }}</span>
              </div>
              <div class="pb-4 mb-4 flex items-center justify-between border-b border-borderColor">
                <span class="font-bold">Giảm giá:</span> <span>{{ formatPrice(100000) }}</span>
              </div>
              <div class="pb-4 mb-6 flex items-center justify-between">
                <span class="font-bold"> Phí giao hàng:</span> <span>{{ formatPrice(16000) }}</span>
              </div>
              <div class="pb-4 mb-4 flex items-center justify-between">
                <span class="font-bold">Tổng số tiền:</span> <span class="font-bold text-primaryColor">{{ formatPrice(1234000) }}</span>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <h5 class="text-lg font-bold pb-4 mb-4 border-b border-borderColor">Chi tiết khách hàng</h5>
            <div>
              <div class="flex items-start justify-start gap-2">
                <img src="@/assets/images/avatar.png" class="w-10 rounded-lg" alt="" />
                <div>
                  <span class="line-clamp-1 text-bodyColor">{{ customer.name }}</span>
                  <span class="line-clamp-1 text-primaryColor">{{ customer.email }}</span>
                </div>
              </div>
              <div class="mt-4">
                <div>
                  <span class="text-bold text-bodyColor">Số điện thoại:</span>
                  <div class="mt-2">{{ customer.phoneNumber }}</div>
                </div>
                <div class="mt-4">
                  <span class="text-bold text-bodyColor">Địa chỉ giao hàng:</span>
                  <div class="mt-2">{{ customer.address }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { formatDateTimeLong, formatPrice } from '@/utils'
export default defineComponent({
  setup() {
    const orders = ref([
      { name: 'Áo thun nam màu đen', size: 'L', status: 'Mới', quantity: 1, price: 150000, amount: 150000 },
      { name: 'Quần baggy màu xanh lá cây', size: 'M', status: 'Mới', quantity: 3, price: 200000, amount: 200000 },
      { name: 'Áo phông vàng trẻ em', size: 'XL', status: 'Mới', quantity: 4, price: 150000, amount: 150000 }
    ])

    const customer = ref({
      name: 'Phan Quang Dương',
      email: 'phanquangduong2002@gmail.com',
      address: 'Quận Bắc Từ Liêm, Hà Nội',
      phoneNumber: '0373745152'
    })
    return { formatPrice, formatDateTimeLong, orders, customer }
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
