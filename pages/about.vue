<template>
  <div
    class="min-h-full flex flex-col justify-center items-center text-center max-h-full"
  >
    <!-- Avatar -->
    <img
      src="public/favicon.png"
      alt="Profile Avatar"
      class="w-32 h-32 rounded-full mb-4 bg-gray-50"
    />

    <!-- Name -->
    <h3 class="text-2xl font-bold mb-4">hi! this is chrissy :)</h3>

    <p class="text-md text-gray-600 mb-4">you can also find me here:</p>

    <!-- Social Icons -->
    <div class="flex space-x-4 text-2xl mb-6 mt-[5vh]">
      <a href="https://instagram.com/xtinayan" target="_blank"
        ><i class="fab fa-instagram"></i
      ></a>
      <a href="https://github.com/xtinayan" target="_blank"
        ><i class="fab fa-github"></i
      ></a>
      <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://facebook.com/xtinaxyan" target="_blank"
        ><i class="fab fa-facebook"></i
      ></a>
      <a href="mailto:christinayan2001@gmail.com"><i class="fas fa-envelope"></i></a>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex space-x-4 mb-4">
      <NuxtLink to="/" class="px-4 py-2 bg-gray-50 rounded hover:bg-gray-100"
        >Home</NuxtLink
      >
      <NuxtLink to="/journal" class="px-4 py-2 bg-gray-50 rounded hover:bg-gray-100"
        >Journal</NuxtLink
      >
      <NuxtLink to="/gallery" class="px-4 py-2 bg-gray-50 rounded hover:bg-gray-100"
        >Gallery</NuxtLink
      >
    </div>

    <!-- Footer -->
    <!-- <footer class="text-xs text-gray-500"></footer> -->
  </div>
</template>
