import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/sign-up/",
    name: "Sign Up",
    props: true,
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "@/views/SignUp.vue"),
    meta: {
      title: "Sign Up",
    },
  },
  {
    path: "/event-registration/",
    name: "Event Registration",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "@/views/EventRegistration.vue"
      ),
    meta: {
      title: "Event Registration",
    },
  },
  {
    path: "/event-registration-confirmation/",
    name: "Event Registration Confirmation",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "event registration confirmation" */ "@/views/EventRegistrationConfirmation.vue"
      ),
    meta: {
      title: "Event Registration Confirmation",
    },
  },
  {
    path: "/sign-up-confirmation/",
    name: "Sign Up Confirmation",
    component: () =>
      import(
        /* webpackChunkName: "sign up confirmation" */ "@/views/SignUpConfirmation.vue"
      ),
    meta: {
      title: "Sign Up Confirmation",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
    meta: {
      title: "404",
      requiresAuth: false,
    },
  },
];

//  DISPLAY PAGE TITLE BASED ON ROUTE META
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  }
  next()
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
