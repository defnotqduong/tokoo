import { createRouter, createWebHistory } from 'vue-router'
import { gtka } from '@/helpers/localStorageHelper'

const routes = [
  {
    path: '/auth',
    name: 'auth-layout',
    component: () => import('@/layouts/AuthLayout.vue'),
    redirect: { name: 'auth-login' },
    children: [
      {
        path: 'login',
        name: 'auth-login',
        component: () => import('@/pages/Auth/Login.vue'),
        meta: {
          title: 'Đăng nhập - Tokoo'
        }
      }
    ]
  },
  {
    path: '/',
    name: 'global-layout',
    component: () => import('@/layouts/GlobalLayout.vue'),
    meta: {
      title: 'Tokoo',
      isAuthenticated: true
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/Dashboard/Home.vue'),
        meta: {
          title: 'Bảng điều khiển - Tokoo'
        }
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('@/pages/Dashboard/Categories.vue'),
        meta: {
          title: 'Danh mục - Tokoo'
        }
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('@/pages/Dashboard/Products.vue'),
        meta: {
          title: 'Danh sách sản phẩm - Tokoo'
        }
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/pages/Dashboard/Orders.vue'),
        meta: {
          title: 'Đơn hàng - Tokoo'
        }
      },
      {
        path: 'order/:id',
        name: 'order-details',
        component: () => import('@/pages/Dashboard/OrderDetails.vue'),
        meta: {
          title: 'Chi tiết đơn hàng - Tokoo'
        }
      },
      {
        path: 'create-product',
        name: 'create-product',
        component: () => import('@/pages/Dashboard/CreateProduct.vue'),
        meta: {
          title: 'Thêm sản phẩm - Tokoo'
        }
      },
      {
        path: 'product/:slug',
        name: 'edit-product',
        component: () => import('@/pages/Dashboard/EditProduct.vue'),
        meta: {
          title: 'Chỉnh sửa sản phẩm - Tokoo'
        }
      },
      {
        path: 'inventory',
        name: 'inventory',
        component: () => import('@/pages/Dashboard/Inventory.vue'),
        meta: {
          title: 'Kho - Tokoo'
        }
      },
      {
        path: 'shipping',
        name: 'shipping',
        component: () => import('@/pages/Dashboard/Shipping.vue'),
        meta: {
          title: 'Vận chuyển - Tokoo'
        }
      },
      {
        path: 'purchase',
        name: 'purchase',
        component: () => import('@/pages/Dashboard/Purchase.vue'),
        meta: {
          title: 'Thanh toán - Tokoo'
        }
      },
      {
        path: 'accounts',
        name: 'accounts',
        component: () => import('@/pages/Dashboard/Account.vue'),
        meta: {
          title: 'Quản lý tài khoản - Tokoo'
        }
      },
      {
        path: 'stores',
        name: 'stores',
        component: () => import('@/pages/Dashboard/Store.vue'),
        meta: {
          title: 'Store - Tokoo'
        }
      },
      {
        path: 'request-store',
        name: 'request-store',
        component: () => import('@/pages/Dashboard/RequestStore.vue'),
        meta: {
          title: 'Yêu cầu bán hàng - Tokoo'
        }
      },
      {
        path: 'reviews',
        name: 'reviews',
        component: () => import('@/pages/Dashboard/Review.vue'),
        meta: {
          title: 'Đánh giá - Tokoo'
        }
      },
      {
        path: 'statistic',
        name: 'statistic',
        component: () => import('@/pages/Dashboard/Statistic.vue'),
        meta: {
          title: 'Thống kê - Tokoo'
        }
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('@/pages/Dashboard/Setting.vue'),
        meta: {
          title: 'Cài đặt - Tokoo'
        }
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'error',
    component: () => import('@/pages/Error/Error.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'E-ecommerce'
  next()
})

router.beforeEach(async (to, from, next) => {
  const user = true
  const token = gtka()

  if (to.meta.isAuthenticated) {
    if (user && token) {
      next()
    } else {
      next('/auth/login')
    }
  } else if (
    user &&
    token &&
    (to.path === '/auth/login' || to.path === '/auth/register' || to.path === '/auth/forgot-password' || to.path === '/auth/reset-password')
  ) {
    next('/')
  } else {
    next()
  }
})

export default router
