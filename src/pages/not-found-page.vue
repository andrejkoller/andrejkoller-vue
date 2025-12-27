<template>
  <section class="container h-full content-center">
    <div class="lg:w-[60%] prose-lg md:prose-xl prose-h1:mb-0 text-balance">
      <h1 class="text-5xl capitalize">{{ $t("404.title") }}</h1>
      <p>
        {{ $t("404.text") }}
        <Ghost :size="20" :stroke-width="1.75" class="inline-block" />
      </p>
      <p>
        <a href="/">{{ $t("404.linkText") }}</a>
      </p>
    </div>
  </section>
</template>

<script setup>
import { Ghost } from "lucide-vue-next";
</script>
