import { createRouter, createWebHistory } from "vue-router";
import { routes } from "../routes";


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    } else return { top: -1 };
  },
});

//  DISPLAY PAGE TITLE BASED ON ROUTE META
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  if (nearestWithTitle) {
    document.title = "HumeOne | " + nearestWithTitle.meta.title;
  }
  next()
})

export default router;
