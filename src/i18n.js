import { createI18n } from "vue-i18n";
import es from "./locales/es.json";
import en from "./locales/en.json";

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: "en",
  messages: { es, en },
  legacy: false,
});

export default i18n;
