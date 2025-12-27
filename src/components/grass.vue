<template>
  <div class="grass relative">
    <div class="absolute bottom-0 w-full sm:h-[30px] bg-black">
      <div
        class="grass1 absolute bottom-0 h-[85px] w-full bg-grass bg-[-2rem_bottom] bg-repeat-x bg-cover lg:bg-auto"
      ></div>
      <div
        class="grass2 absolute bottom-0 h-[85px] w-full bg-grass bg-[2rem_bottom] bg-repeat-x bg-cover lg:bg-auto"
      ></div>
      <div
        class="grass3 absolute bottom-0 h-[85px] w-full bg-grass bg-[4rem_105%] bg-repeat-x bg-cover lg:bg-auto"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.grass1,
.grass2,
.grass3 {
  scale: 1.05 1;
}

.grass1 {
  animation: anim-grass1 5s infinite ease;
}

@keyframes anim-grass1 {
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
    transform: skewX(5deg);
  }
}

.grass2 {
  animation: anim-grass2 8s 1.5s infinite ease-in-out;
}

@keyframes anim-grass2 {
  0% {
    transform: skewX(0);
  }

  20% {
    transform: skewX(-2deg);
  }

  40% {
    transform: skewX(5deg);
  }

  70% {
    transform: skewX(0);
  }

  90% {
    transform: skewX(7deg);
  }
}

.grass3 {
  animation: anim-grass3 10s 2s infinite ease-in-out;
}

@keyframes anim-grass3 {
  0% {
    transform: skewX(0);
  }

  20% {
    transform: skewX(-2deg);
  }

  40% {
    transform: skewX(5deg);
  }

  70% {
    transform: skewX(0);
  }

  90% {
    transform: skewX(10deg);
  }
}
</style>
