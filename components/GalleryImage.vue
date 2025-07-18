<template>
  <div class="relative">
    <img
      :src="src"
      alt="Gallery image"
      loading="lazy"
      class="cursor-pointer rounded-md object-cover w-full h-full"
      @click="open = true"
    />

    <div
      v-if="open"
      class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      @click.self="open = false"
    >
      <img
        :src="src"
        alt="Full image"
        class="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  src: String,
});
const open = ref(false);
</script>
