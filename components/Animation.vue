<template>
  <div class="flex justify-center items-center w-full h-full">
    <img
      :src="currentImage"
      alt="Stop motion"
      class="w-0.75 max-w-md h-auto object-contain mx-auto rounded-lg cursor-pointer"
      @click="handleClick"
    />
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
    default: null, // If null, just end on the last image
  },
  link: {
    type: String,
    default: null, // Optional link on final image
  },
});

const emit = defineEmits(["finished"]);

const currentImage = ref(props.images[0] || "");
const index = ref(0);
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
  if (finished && props.link) {
    window.open(props.link, "_blank");
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
img {
  transition: none;
}
</style>
