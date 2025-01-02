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
      },
      {
        path: '/login/success',
        name: 'auth-login-success',
        component: () => import('@/pages/Home/Home.vue')
      },
      {
        path: 'register',
        name: 'auth-register',
        component: () => import('@/pages/Auth/Register.vue'),
        meta: {
          title: 'Đăng ký - Tokoo'
        }
      },
      {
        path: 'forgot-password',
        name: 'auth-forgot-password',
        component: () => import('@/pages/Auth/ForgotPassword.vue'),
        meta: {
          title: 'Quên mật khẩu - Tokoo'
        }
      },
      {
        path: 'reset-password',
        name: 'auth-reset-password',
        component: () => import('@/pages/Auth/ResetPassword.vue'),
        meta: {
          title: 'Đặt lại mật khẩu - Tokoo'
        }
      }
    ]
  },
  {
    path: '/',
    name: 'global-layout',
    component: () => import('@/layouts/GlobalLayout.vue'),
    meta: {
      title: 'Tokoo'
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/Home/Home.vue'),
        meta: {
          title: 'Trang chủ - Tokoo'
        }
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('@/pages/Product/ProductList.vue'),
        meta: {
          title: 'Danh sách sản phẩm - Tokoo'
        }
      },
      {
        path: 'product/:slug',
        name: 'product-detail',
        component: () => import('@/pages/Product/ProductDetail.vue'),
        mate: {
          title: 'Chi tiết sản phẩm - Tokoo'
        }
      },
      {
        path: '/account',
        name: 'account-layout',
        component: () => import('@/layouts/AccountLayout.vue'),
        redirect: { name: 'account-profile' },
        meta: {
          isAuthenticated: true
        },
        children: [
          {
            path: '',
            name: 'account-profile',
            component: () => import('@/pages/Account/UserProfile.vue'),
            meta: {
              title: 'Tài khoản của tôi - Tokoo'
            }
          },
          {
            path: 'address',
            name: 'account-address',
            component: () => import('@/pages/Account/UserAddress.vue'),
            meta: {
              title: 'Địa chỉ - Tokoo'
            }
          },
          {
            path: 'order',
            name: 'account-order',
            component: () => import('@/pages/Account/UserOrder.vue'),
            meta: {
              title: 'Đơn hàng - Tokoo'
            }
          },
          {
            path: 'order-tracking',
            name: 'account-ordertracking',
            component: () => import('@/pages/Account/OrderTracking.vue'),
            meta: {
              title: 'Theo dõi đơn hàng - Tokoo'
            }
          },
          {
            path: 'voucher',
            name: 'account-voucher',
            component: () => import('@/pages/Account/Voucher.vue'),
            meta: {
              title: 'Voucher - Tokoo'
            }
          },
          {
            path: 'apply-store',
            name: 'account-apply-store',
            component: () => import('@/pages/Account/Store.vue'),
            meta: {
              title: 'Đăng kí bán hàng - Tokoo'
            }
          },
          {
            path: 'change-password',
            name: 'account-change-password',
            component: () => import('@/pages/Account/Setting.vue'),
            meta: {
              title: 'Đổi mật khẩu - Tokoo'
            }
          }
        ]
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/pages/Cart/Cart.vue'),
        meta: {
          title: 'Giỏ hàng - Tokoo'
        }
      },
      {
        path: 'wishlist',
        name: 'wishlist',
        component: () => import('@/pages/Wishlist/Wishlist.vue'),
        meta: {
          title: 'Danh sách yêu thích - Tokoo'
        }
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('@/pages/Checkout/Checkout.vue'),
        meta: {
          title: 'Thanh toán - Tokoo'
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
