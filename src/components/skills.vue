<template>
  <div ref="skillsRef" class="skills">
    <h2>{{ translatedHeading }}</h2>
    <ul class="flex flex-wrap gap-x-4">
      <li v-for="skill in skills" :key="skill">
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, useTemplateRef, watch, computed, nextTick } from "vue";

import { useSkills } from "@/data/skills";
import { useI18n } from "vue-i18n";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const { t, locale } = useI18n();
const skills = useSkills();
const skillsRef = useTemplateRef("skillsRef");

const translatedHeading = computed(() => t("skills.title"));

const animateSplitHeading = () => {
  const skillsh2 = SplitText.create(".skills h2", { type: "words" });
  gsap.from(skillsh2.words, {
    y: -60,
    opacity: 0,
    filter: "blur(6px)",
    skewY: 4,
    stagger: 0.1,
    duration: 0.4,
    scrollTrigger: {
      trigger: skillsRef.value,
      start: "-=25% center",
      end: "+=100%",
      toggleActions: "play none none reverse",
    },
  });
};

watch(locale, () => {
  nextTick(() => {
    animateSplitHeading();
  });
});

onMounted(async () => {
  await document.fonts.ready;

  animateSplitHeading();

  gsap.from(".skills ul", {
    y: 60,
    opacity: 0,
    filter: "blur(6px)",
    skewY: 4,
    stagger: 0.1,
    duration: 0.4,
    scrollTrigger: {
      trigger: skillsRef.value,
      start: "top center",
      end: "+=100%",
      toggleActions: "play none none reverse",
    },
  });
});
</script>
