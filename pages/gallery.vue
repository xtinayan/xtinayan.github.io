<script setup>
const modules = import.meta.glob("~/assets/images/motion_home/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});
const images = Object.values(modules);
</script>

<template>
  <div class="min-h-screen py-8 px-4">
    <h1 class="text-center text-2xl font-bold mb-6">My Gallery</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <GalleryImage v-for="(img, i) in images" :key="i" :src="img" />
    </div>
  </div>
</template>
