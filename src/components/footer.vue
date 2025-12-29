<template>
  <footer class="relative h-dvh prose-lg leading-normal bg-gray-50">
    <div
      ref="refRoots"
      class="hidden lg:block absolute top-[30px] right-0 w-[50%]"
    >
      <Roots />
    </div>

    <div class="absolute top-0 z-10 w-full rotate-180">
      <Grass />
    </div>

    <div class="container">
      <div class="relative z-10 lg:w-1/2 py-20 lg:py-40">
        <p>
          <a
            href="mailto:andrejkoller@outlook.com"
            target="_blank"
            aria-label="Say hi via email"
            >andrejkoller@outlook.com</a
          >
          ·
          <a
            href="https://github.com/andrejkoller"
            target="_blank"
            aria-label="Check my Github profile"
            >Github</a
          >
          ·
          <a
            href="https://www.linkedin.com/in/andrejkoller"
            target="_blank"
            aria-label="Check my Linkedin profile"
            >Linkedin</a
          >
        </p>
        <p>{{ $t("footer.text") }}</p>
        <p>&copy;{{ currentYear }} Andrej Koller</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, useTemplateRef } from "vue";
import Roots from "@/components/roots.vue";
import Grass from "@/components/grass.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const currentYear = new Date().getFullYear();
const roots = useTemplateRef("refRoots");

onMounted(() => {
  gsap.from(roots.value, {
    y: -50,
    scaleY: 1.1,
    scrollTrigger: {
      trigger: roots.value,
      start: "top center",
      scrub: 2,
    },
  });
});
</script>
