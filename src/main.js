// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";
// // Vue.config.productionTip = false;
// createApp(App).use(router).mount("#app");
// Not available in Vue 2
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router";

Vue.use(VueRouter);

// const router = new VueRouter({
//   // Configure your routes here
// });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
