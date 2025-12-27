<!-- Not needed anymore, kept it just as a reference -->

<template>
  <div ref="refContainer">
    <slot />
  </div>
</template>

<script setup>
import { onMounted, useTemplateRef } from "vue";
import { useAnimationScroll } from "@/composables/use-animation-scroll";

const props = defineProps({
  type: {
    type: String,
    default: "fade-down",
  },
  delay: {
    type: Number,
    default: 0.3,
  },
});

const container = useTemplateRef("refContainer");

onMounted(() => {
  useAnimationScroll(container.value, props.type, props.delay);
});
</script>
