import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import de from "./locales/de.json";

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: "en",
  messages: { en, de },
  legacy: false,
});

export default i18n;
