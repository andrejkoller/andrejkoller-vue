<template>
  <div class="roots relative w-[50vw]">
    <div
      class="grass absolute z-10 top-[-20px] w-full h-[120px] bg-bottom bg-no-repeat rotate-180"
    >
      <div
        class="grass-roots absolute right-0 bottom-0 bg-grass-tree w-full h-full bg-bottom bg-no-repeat"
      ></div>
      <div
        class="grass-roots absolute right-0 bottom-0 bg-grass-tree w-full h-[105px] bg-bottom bg-no-repeat"
      ></div>
    </div>
    <div class="root root1 absolute top-0 left-0 w-full h-full">
      <img
        width="100%"
        height="100%"
        src="/images/root1.svg"
        alt="root"
        loading="lazy"
      />
    </div>
    <div
      class="root root2 absolute top-0 left-[22%] w-full h-full opacity-70 [filter:_blur(1.4px)]"
    >
      <img
        width="100%"
        height="100%"
        src="/images/root2.svg"
        alt="root"
        loading="lazy"
      />
    </div>
    <div
      class="root root3 absolute top-0 left-[36%] w-1/2 h-full opacity-60 [filter:_blur(2px)]"
    >
      <img
        width="100%"
        height="100%"
        src="/images/root2.svg"
        alt="root"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped>
.root1 {
  animation: anim-root1 5000ms infinite ease-in-out;
}

.root3 {
  animation: anim-root1 4400ms infinite ease-in-out;
}

@keyframes anim-root1 {
  0% {
    transform: translateY(-5px) scaleX(0.98);
  }

  50% {
    transform: translateY(0) scaleX(1);
  }

  100% {
    transform: translateY(-5px) scaleX(0.98);
  }
}

.root2 {
  animation: anim-root2 3500ms infinite ease-in-out;
}

@keyframes anim-root2 {
  0% {
    transform: translateY(-5px) scaleY(1.02);
  }

  50% {
    transform: translateY(0) scaleY(1);
  }

  100% {
    transform: translateY(-5px) scaleY(1.02);
  }
}

.grass-roots {
  animation: anim-grassx 7s infinite ease-in-out;
  transform-style: preserve-3d;
}

@keyframes anim-grassx {
  0% {
    transform: skewX(0);
  }

  20% {
    transform: skewX(-2deg);
  }

  40% {
    transform: skewX(2deg);
  }

  70% {
    transform: skewX(0);
  }

  90% {
    transform: skewX(3deg);
  }
}
</style>
