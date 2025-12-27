<template>
  <div class="text-3xl">
    <a href="/" accesskey="d" class="after:hidden">
      <span class="inline-block mt-9 font-alternateGothic2 uppercase"
        >Andrej Koller</span
      >
      <span class="anim-init-colibri-logo absolute">
        <Hummingbird />
      </span>
    </a>
  </div>
</template>

<script setup>
import Hummingbird from "@/components/hummingbird.vue";
</script>

<style scoped>
.overlay[data-loaded="true"] .anim-init-colibri-logo {
  animation: anim-init-colibri-logo 500ms 2000ms forwards,
    anim-colibri-fly 5000ms 2500ms infinite;
  opacity: 0;
  transform-style: preserve-3d;
}

@keyframes anim-init-colibri-logo {
  0% {
    transform: translateY(-20px) translateX(30px);
    rotate: 20deg;
    opacity: 0;
    filter: blur(0);
  }

  20% {
    filter: blur(3px);
  }

  30% {
    filter: blur(0);
  }

  60% {
    transform: translateY(0) translateX(0);
    rotate: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes anim-colibri-fly {
  0% {
    transform: translateY(0) translateX(0);
    rotate: -10deg;
    filter: blur(3px);
  }

  7% {
    transform: translateY(20px) translateX(10px);
    filter: blur(0);
  }

  22% {
    transform: translateY(10px) translateX(0);
    rotate: 5deg;
  }

  30% {
    transform: translateY(0) translateX(10px);
    rotate: 10deg;
  }

  44% {
    transform: translateY(10px) translateX(15px);
    filter: blur(0);
  }

  46% {
    rotate: 20deg;
    filter: blur(3px);
  }

  50% {
    transform: translateY(20px) translateX(5px);
    filter: blur(0);
  }

  58% {
    rotate: 5deg;
    transform: translateY(0) translateX(20px);
  }

  72% {
    transform: translateY(10px) translateX(0);
    rotate: -5deg;
  }

  80% {
    transform: translateY(-10px) translateX(5px);
  }

  89% {
    rotate: 5deg;
    filter: blur(0);
  }

  92% {
    transform: translateY(10px) translateX(-5px);
    rotate: -10deg;
    filter: blur(3px);
  }

  94% {
    rotate: 0deg;
    filter: blur(0);
  }

  100% {
    transform: translateY(0) translateX(0);
  }
}
</style>
