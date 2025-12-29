import { createI18n } from "vue-i18n";
import ru from "./locales/ru.json";
import en from "./locales/en.json";

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: "en",
  messages: { ru, en },
  legacy: false,
});

export default i18n;
