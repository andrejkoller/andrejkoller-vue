<template>
  <header>
    <div class="container">
      <Preloader>
        <Logo />
        <NavLang />
      </Preloader>
    </div>
  </header>
</template>

<script setup>
import Preloader from "@/components/preloader.vue";
import Logo from "@/components/logo.vue";
import NavLang from "@/components/nav-lang.vue";
</script>
