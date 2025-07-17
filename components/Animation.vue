<template>
  <div class="flex justify-center items-center w-full h-full min-h-[300px]">
    <transition name="fade" mode="out-in">
      <template v-if="!showText">
        <img
          :key="'image'"
          :src="currentImage"
          alt="Stop motion"
          class="w-full max-w-md h-auto object-contain mx-auto rounded-lg cursor-pointer"
          @click="handleClick"
        />
      </template>
      <template v-else>
        <div :key="'text'" class="text-center px-4">
          <h2 class="text-xl font-semibold mb-2">welcome to chrissy's corner :)</h2>
          <p class="text-base">(still don't know what else to write)</p>
        </div>
      </template>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  interval: {
    type: Number,
    default: 700,
  },
  finalImageIndex: {
    type: Number,
    default: null,
  },
});

const emit = defineEmits(["finished"]);

const currentImage = ref(props.images[0] || "");
const index = ref(0);
const showText = ref(false);
let intervalId = null;
let finished = false;

const stopAtIndex =
  props.finalImageIndex !== null ? props.finalImageIndex : props.images.length - 1;

const switchImage = () => {
  if (index.value >= stopAtIndex) {
    clearInterval(intervalId);
    finished = true;
    emit("finished");
    return;
  }

  index.value++;
  currentImage.value = props.images[index.value];
};

const handleClick = () => {
  if (finished) {
    showText.value = true;
  }
};

onMounted(() => {
  if (props.images.length > 1) {
    intervalId = setInterval(switchImage, props.interval);
  }
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
/* Fade transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
