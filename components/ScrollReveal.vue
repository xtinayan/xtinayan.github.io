<template>
  <div ref="target">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { AnimationType } from '~/composables/useScrollAnimation'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

const props = withDefaults(
  defineProps<{
    animation?: AnimationType
    delay?: number
  }>(),
  {
    animation: 'fade-up',
    delay: 0,
  }
)

const { target } = useScrollAnimation({
  animation: props.animation,
  delay: props.delay,
})
</script>