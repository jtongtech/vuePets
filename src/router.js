/* eslint-disable semi */
/* eslint-disable quotes */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Dogs from "./views/Dogs.vue";
import Cats from "./views/Cats.vue";
import Pet from "./views/Pet.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Dogs",
      name: "dogs",
      component: Dogs
    },
    {
      path: "/Cats",
      name: "cats",
      component: Cats
    },
    {
      path: "/pets/:species/:id",
      name: "pet",
      component: Pet
    }
  ]
});
