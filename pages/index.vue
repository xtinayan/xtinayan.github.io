<script setup>
// const frames = [
//   "/images/bower.png",
//   "/images/team.png",
//   "/images/friends1.png",
//   "/images/friends2.png",
// ];

const modules = import.meta.glob("~/assets/images/motion_home/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});
const frames = Object.values(modules);
</script>

<template>
  <div id="typewriter">
    <!-- <NuxtWelcome /> -->
    <!-- <section id = "home" class = "section"> -->
    <h1>Hello World :)</h1>
    <!-- </section> -->
    <!-- About Section -->
  </div>

  <div class="pt-20">
    <Animation
      :images="frames"
      :interval="600"
      link="https://xtinayan.substack.com"
      @finished="console.log('Animation done!')"
    />
  </div>
</template>
