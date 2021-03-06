import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NotFound from "@/components/error-pages/NotFound";

Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "home"
      }
    },
    {
      path: "/exp",
      name: "exp",
      meta: {
        title: "Experience"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "experience" */ "./views/Exp.vue")
    },
    {
      path: "/works",
      name: "works",
      meta: {
        title: "Works"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "works" */ "./views/Works.vue")
    },
    {
      path: "*",
      name: "notfound",
      component: NotFound
    }
  ]
});
