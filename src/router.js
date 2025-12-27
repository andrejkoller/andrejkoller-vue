import { createWebHistory, createRouter } from "vue-router";

import FullLayout from "@/layouts/full-layout.vue";
import MinimalLayout from "@/layouts/minimal-layout.vue";
import HomePage from "@/pages/HomePage.vue";
import NotFoundPage from "@/pages/not-found-page.vue";

const routes = [
  {
    path: "/:lang(en|es)?",
    component: FullLayout,
    children: [
      {
        path: "",
        component: HomePage,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: MinimalLayout,
    children: [
      {
        path: "",
        component: NotFoundPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
