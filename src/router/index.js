// import { createRouter, createWebHistory } from "vue-router";
// import About from "../views/About.vue";
// const routes = [
//   {
//     path: "/about",
//     name: "About",
//     component: About,
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

// export default router;
//Above code is for v3

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  routes,
  mode: "history", // Use "hash" for hash mode instead of "history"
});

export default router;
