<template>
  <div
    class="overlay bg-black text-white absolute z-40 top-0 left-0 w-full h-dvh pt-20 pb-[5dvh] flex flex-col justify-center"
    :data-loaded="isLoaded"
  >
    <div class="container">
      <slot />
      <span class="loader text-sm text-white" role="status"
        >{{ $t("preloader.loading") }}...</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const isLoaded = ref(false);
document.documentElement.dataset.pageLoaded = isLoaded.value;
ScrollTrigger.clearScrollMemory("manual");

onMounted(() => {
  document.onreadystatechange = () => {
    if (document.readyState == "complete") {
      isLoaded.value = true;
      document.documentElement.dataset.pageLoaded = isLoaded.value;
    }
  };
});
</script>

<style scoped>
.overlay[data-loaded="false"] .loader {
  position: absolute;
  animation: anim-loader 500ms infinite;
}

@keyframes anim-loader {
  0% {
    font-family: Arial, Helvetica, sans-serif;
  }

  20% {
    font-family: "Times New Roman", Times, serif;
  }

  40% {
    font-family: "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
      sans-serif;
  }

  60% {
    font-family: "Courier New", Courier, monospace;
  }

  80% {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
}

.overlay[data-loaded="true"] {
  animation: anim-loaded 900ms 1200ms forwards;

  .loader {
    display: none;
    position: absolute;
    opacity: 0;
    transform: translateY(0.4rem);
    transition: all 0.2s linear;
    transition-behavior: allow-discrete;
  }
}

@keyframes anim-loaded {
  0% {
    height: 100vh;
  }

  50% {
    height: 105vh;
  }

  100% {
    height: 0;
    background-color: transparent;
    color: #000;
  }
}
</style>
