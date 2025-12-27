import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router";
import i18n from "./i18n";
import { createHead } from "@unhead/vue";
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";
import LenisVue from "lenis/vue";

const head = createHead();
router.beforeEach((to, from, next) => {
  const lang = to.params.lang;

  if (i18n.global.availableLocales.includes(lang)) {
    i18n.global.locale.value = lang;
  }

  return next();
});

createApp(App)
  .use(router)
  .use(i18n)
  .use(head)
  .use(LenisVue)
  .use(Particles, {
    init: async (engine) => {
      await loadSlim(engine);
    },
  })
  .mount("#app");
