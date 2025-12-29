<template>
  <div
    class="flies absolute -z-10 left-0 bottom-0 w-full before:absolute before:w-full before:h-full before:bg-gray-50 before:[mask-image:linear-gradient(black,_transparent_30%)]"
  >
    <vue-particles
      class="w-full h-[330px] lg:h-[230px]"
      id="tsparticles"
      @particles-loaded="particlesLoaded"
      :options="options"
    />
  </div>
</template>

<script setup>
const options = {
  fullScreen: {
    enable: false,
    zIndex: 2,
  },
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
      limit: {
        mode: "delete",
        value: 0,
      },
    },
    color: {
      value: "#000000",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nbSides: 5,
      },
    },
    opacity: {
      value: {
        min: 0.1,
        max: 1,
      },
      random: true,
      animation: {
        enable: true,
        speed: 0.8,
        opacityMin: 0.1,
        sync: false,
      },
    },
    size: {
      value: {
        min: 0.1,
        max: 3,
      },
      random: true,
      animation: {
        enable: true,
        speed: 5,
        startValue: "random",
        sync: false,
      },
    },
    lineLinked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "top-right",
      random: false,
      straight: false,
      outMode: "out",
      bounce: false,
      attract: {
        distance: 200,
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 60,
        duration: 0.4,
      },
      push: {
        particlesNb: 4,
      },
      remove: {
        particlesNb: 2,
      },
    },
  },
  detectRetina: false,
};
</script>
