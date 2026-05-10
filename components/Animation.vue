<template>
  <div class="flex flex-col justify-center items-center w-full min-h-[400px] text-center">
    <transition name="fade" mode="out-in" @after-enter="onAfterEnter">
      <!-- animation  -->
      <template v-if="!showText">
        <img
          :key="'image'"
          :src="currentImage"
          alt="Stop motion"
          class="w-full max-w-md h-auto object-contain mx-auto rounded-lg cursor-pointer"
          @click="toggleToText"
        />
      </template>

      <!-- text -->
      <template v-else>
        <div :key="'text'" class="px-4 cursor-pointer" @click="toggleToImages">
          <h2 class="text-xl font-semibold mb-5">click to see the animation again:)</h2>
          <p class="text-xl font-semibold mb-2">or explore the page ↓</p>
          <div class="flex justify-center space-x-4 text-sm">
            <NuxtLink to="/about" class="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
              About
            </NuxtLink>
            <NuxtLink
              to="/journal"
              class="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
              Journal
            </NuxtLink>
            <NuxtLink
              to="/gallery"
              class="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
              Gallery
            </NuxtLink>
          </div>
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

const startAnimation = () => {
  stopAnimation(); // Clear any existing interval
  index.value = 0;
  currentImage.value = props.images[0];

  intervalId = setInterval(() => {
    if (index.value >= stopAtIndex) {
      stopAnimation();
      emit("finished");
    } else {
      index.value++;
      currentImage.value = props.images[index.value];
    }
  }, props.interval);
};

const stopAnimation = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

const toggleToText = () => {
  stopAnimation();
  showText.value = true;
};

// make sure the transition time is taken into account before starting animation
const transitioningToImages = ref(false);

const onAfterEnter = () => {
  if (transitioningToImages.value) {
    transitioningToImages.value = false;
    startAnimation(); // Start animation AFTER the transition
  }
};

const toggleToImages = () => {
  transitioningToImages.value = true;
  showText.value = false;
  // startAnimation();
};

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
// const handleClick = () => {
//   if (finished && canClick.value) {
//     showText.value = true;
//   }
// };

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
