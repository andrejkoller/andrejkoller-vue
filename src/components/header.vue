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
import Preloader from "@/components/preloader";
import Logo from "@/components/logo";
import NavLang from "@/components/nav-lang";
</script>
