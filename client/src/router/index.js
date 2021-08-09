import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
  {
    path: '/sign-up/',
    name: 'Sign Up',
    props: true,
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "@/views/SignUp.vue"),
  },
  {
    path: '/payment-processing/',
    name: 'Payment Processing',
    props: true,
    component: () =>
      import(/* webpackChunkName: "payment processing" */ "@/views/PaymentProcessing.vue"),
  },
  {
    path: '/event-registration/',
    name: 'Event Registration',
    component: () =>
      import(/* webpackChunkName: "register" */ "@/views/EventRegistration.vue"),
  },
  {
    path: '/event-registration-confirmation/',
    name: 'Event Registration Confirmation',
    props: true,
    component: () =>
      import(/* webpackChunkName: "event registration confirmation" */ "@/views/EventRegistrationConfirmation.vue"),
  },
  {
    path: '/sign-up-confirmation/',
    name: 'Sign Up Confirmation',
    component: () =>
      import(/* webpackChunkName: "sign up confirmation" */ "@/views/SignUpConfirmation.vue"),
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
  routes: routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
