<template>
  <Header class="h-28" />
  <main class="bg-horizon bg-bottom bg-no-repeat">
    <RouterView />
  </main>
  <Footer />
</template>

<script setup>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
</script>
