module.exports.routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    meta: {
      title: "Find Your People",
      sitemap: {
        priority: 1.0,
      }
    },
  },
  {
    path: "/sign-up/",
    name: "Sign Up",
    props: true,
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "@/views/SignUp.vue"),
    meta: {
      title: "Sign Up For Free",
      sitemap: {
        priority: 0.9,
      }
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
      title: "Registration Confirmation",
      sitemap: {
        priority: 0.1,
      }
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
      sitemap: {
        priority: 0.1,
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue"),
    meta: {
      title: "Page Not Found",
      sitemap: {
        priority: 0.1,
      }
    },
  },
]