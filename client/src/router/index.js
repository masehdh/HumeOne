import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Register',
    component: () =>
      import(/* webpackChunkName: "register" */ "@/views/Register.vue"),
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: () =>
      import(/* webpackChunkName: "confirmation" */ "@/views/Confirmation.vue"),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
    meta: {
      title: '404',
      requiresAuth: false,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
