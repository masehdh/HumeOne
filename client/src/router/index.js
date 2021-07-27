import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/event-registration',
    name: 'Event Registration',
    component: () =>
      import(/* webpackChunkName: "register" */ "@/views/EventRegistration.vue"),
  },
  {
    path: '/registration-confirmation',
    name: 'Registration Confirmation',
    component: () =>
      import(/* webpackChunkName: "confirmation" */ "@/views/RegistrationConfirmation.vue"),
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
