<template>
  <Header />
  <main
    class="h-dvh relative before:absolute before:-z-10 before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-50 before:[clip-path:_polygon(0_63%,_100%_15%,_100%_100%,_0%_100%)]"
  >
    <RouterView />
    <Garden />
  </main>
</template>

<script setup>
import Header from "@/components/header.vue";
import Garden from "@/components/garden.vue";
</script>
