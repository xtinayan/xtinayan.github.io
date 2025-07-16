<template>
    <div class="image-grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="image-item"
        @click="navigateTo(image.route)"
        :style="{ backgroundImage: 'url(' + image.src + ')' }"
      >
        <!-- Optional: If you want to display a caption or overlay -->
        <div class="caption">{{ image.caption }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
    },
  };
  </script>
  
  <style scoped>
  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 16px; /* Adjust the gap size as desired */
  }
  
  .image-item {
    background-size: cover;
    background-position: center;
    aspect-ratio: 1 / 1; /* Adjust based on your preferred aspect ratio */
    cursor: pointer;
    position: relative; /* For positioning caption or overlay, if any */
  }
  
  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
  }
  </style>
  