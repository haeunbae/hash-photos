import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";
import signUp from "../views/signUp.vue";
import home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "login",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: signUp,
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
