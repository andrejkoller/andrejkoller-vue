<template>
  <VueLenis root ref="lenisRef" :options="{ autoRaf: false }" />
  <RouterView />
</template>

<script setup>
import { watchEffect, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useHead } from "unhead";
import { VueLenis, useLenis } from "lenis/vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n();
const lenisRef = ref();

watchEffect(() => {
  useHead({
    htmlAttrs: {
      lang: t("languages.code"),
    },
    title: `Andrej Koller · ${t("meta.title")}`,
    meta: [
      {
        name: "description",
        content: t("meta.description"),
      },
      {
        property: "og:title",
        content: `Andrej Koller · ${t("meta.title")}`,
      },
      {
        property: "og:description",
        content: t("meta.description"),
      },
    ],
  });
});

watchEffect((onInvalidate) => {
  if (!lenisRef.value?.lenis) return;

  lenisRef.value.lenis.on("scroll", ScrollTrigger.update);

  function update(time) {
    lenisRef.value.lenis.raf(time * 1000);
  }
  gsap.ticker.add(update);

  gsap.ticker.lagSmoothing(0);

  onInvalidate(() => {
    gsap.ticker.remove(update);
  });
});
</script>

<style>
html[data-page-loaded="true"] {
  animation: anim-init-scroll 500ms 1900ms forwards;
}

@keyframes anim-init-scroll {
  0% {
    overflow: hidden;
  }

  100% {
    overflow: auto;
  }
}

html[data-page-loaded="true"] main {
  opacity: 0;
  animation: anim-init-main 500ms 1900ms forwards;
}

@keyframes anim-init-main {
  0% {
    opacity: 0;
    margin-top: -4vh;
    background-size: auto 90%;
  }

  100% {
    opacity: 1;
    margin-top: 0;
    background-size: auto 95%;
  }
}
</style>
