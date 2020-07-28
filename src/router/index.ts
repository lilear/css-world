import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "../layout/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "LayOut",
    component: Layout,
    redirect: { name: "CssGrid" },
    children: [
      {
        path: '/cssGrid',
        name: "CssGrid",
        component: () => import("../components/CssGrid/index.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
