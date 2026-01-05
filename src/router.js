import { createWebHistory, createRouter } from "vue-router";
import FullLayout from "@/layouts/full-layout.vue";
import MinimalLayout from "@/layouts/minimal-layout.vue";
import HomePage from "@/pages/home-page.vue";
import NotFoundPage from "@/pages/not-found-page.vue";

const routes = [
  {
    path: "/:lang(en|de)?",
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
