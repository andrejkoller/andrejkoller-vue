<template>
  <nav>
    <ul class="anim-init-nav-lang flex gap-2 text-sm uppercase">
      <li
        v-for="(locale, index) in $i18n.availableLocales"
        :key="`locale-${locale}`"
      >
        <RouterLink
          :to="locale"
          :title="$t('languages.' + locale)"
          :lang="locale"
          :accesskey="index"
        >
          {{ locale }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.anim-init-nav-lang {
  opacity: 0;
  position: absolute;
}

.overlay[data-loaded="true"] .anim-init-nav-lang {
  animation: anim-init-nav-lang 500ms 1800ms forwards;
}

@keyframes anim-init-nav-lang {
  0% {
    opacity: 0;
    position: absolute;
  }

  100% {
    opacity: 1;
    position: static;
  }
}
</style>
