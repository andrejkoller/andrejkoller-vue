<template>
  <div
    ref="infoRef"
    class="info relative min-h-dvh py-8 md:py-40 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
  >
    <video
      ref="videoRef"
      class="video hidden sm:block absolute top-0 left-0 w-full lg:w-3/4 4xl:w-[85%] h-auto opacity-20 mix-blend-hard-light"
      preload="auto"
      disableRemotePlayback
      playsinline
      muted
    >
      <source
        src="/videos/flowers_large.mp4"
        type="video/mp4"
        media="(min-width: 1536px)"
      />
      <source
        src="/videos/flowers_medium.mp4"
        type="video/mp4"
        media="(min-width: 1024px)"
      />
      <source
        src="/videos/flowers_small.mp4"
        type="video/mp4"
        media="(min-width: 640px)"
      />
      <source src="" type="video/mp4" />
    </video>
    <div class="container">
      <div
        class="flex flex-col justify-start md:justify-evenly xl:w-[75vw] h-full ml-auto"
      >
        <div class="clients-projects lg:grid grid-cols-2 gap-8">
          <h2>{{ translatedHeading }}</h2>
          <div>
            <ul class="clients flex sm:flex-row flex-wrap gap-x-4">
              <li
                v-for="client in clients"
                :key="client"
                class="relative not-last:after:content-['·'] after:absolute after:ml-1.5 last:not"
              >
                {{ client }}
              </li>
            </ul>
            <ul
              class="projects flex flex-col sm:flex-row flex-wrap gap-x-4 [&_a]:font-light"
            >
              <li
                v-for="project in projects"
                :key="project.name"
                class="relative sm:not-last:after:content-['·'] after:absolute after:ml-1.5 last:not"
              >
                <a
                  :href="`https://${project.web}`"
                  target="_blank"
                  :data-text="project.name"
                  :aria-label="`Go to the website ${project.name}`"
                  >{{ project.name }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, useTemplateRef, watch, computed, nextTick } from "vue";

import clients from "@/data/clients";
import projects from "@/data/projects";

import { useI18n } from "vue-i18n";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const { t, locale } = useI18n();
const video = useTemplateRef("videoRef");
const info = useTemplateRef("infoRef");

const translatedHeading = computed(() => t("projects.title"));

const animateSplitHeading = () => {
  const infoh2 = SplitText.create(".info h2", { type: "words" });
  return gsap.from(infoh2.words, {
    x: 60,
    opacity: 0,
    filter: "blur(6px)",
    stagger: 0.2,
  });
};

onMounted(async () => {
  await document.fonts.ready;

  gsap.to(video.value, {
    yPercent: 2,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  let tlVideo = gsap.timeline();
  tlVideo.to(video.value, {
    opacity: 0.6,
    duration: 1.4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  let tlInfo = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: info.value,
      start: "top top",
      end: window.matchMedia("(min-width: 768px)").matches
        ? "+=170%"
        : "+=100%",
      scrub: true,
      pin: true,
      onEnter: () => tlVideo.pause(0),
      onLeaveBack: () => tlVideo.play(),
    },
  });

  tlInfo.fromTo(
    video.value,
    {
      currentTime: 0,
    },
    {
      currentTime: video.value.duration || 4.2,
    }
  );

  tlInfo.add(animateSplitHeading(), "<");

  tlInfo.from(
    ".info ul",
    {
      x: 60,
      opacity: 0,
      filter: "blur(6px)",
      stagger: 0.2,
    },
    "<"
  );

  watch(locale, () => {
    nextTick(() => {
      tlInfo.add(animateSplitHeading(), "<");
    });
  });
});
</script>
