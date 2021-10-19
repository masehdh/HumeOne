module.exports.routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    meta: {
      title: "Find Your People",
      sitemap: {
        lastmod: 'October 14, 2021',
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
        lastmod: 'October 14, 2021',
        priority: 0.9,
      }
    },
  },
  {
    path: "/upcoming-events/",
    name: "Upcoming Events",
    props: true,
    component: () =>
      import(/* webpackChunkName: "upcoming-events" */ "@/views/UpcomingEvents.vue"),
    meta: {
      title: "Upcoming Events",
      sitemap: {
        lastmod: 'October 19, 2021',
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
        lastmod: 'October 14, 2021',
        priority: 0.1,
        ignoreRoute: true,
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
        lastmod: 'October 14, 2021',
        priority: 0.1,
        ignoreRoute: true,
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
        lastmod: 'October 14, 2021',
        priority: 0.1,
        ignoreRoute: true,
      }
    },
  },
]