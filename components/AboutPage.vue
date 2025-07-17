<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4"
  >
    <!-- Avatar -->
    <img
      src="public/favicon.png"
      alt="Profile Avatar"
      class="w-32 h-32 rounded-full mb-4"
    />

    <!-- Name -->
    <h1 class="text-3xl font-bold">welcome to chrissy's space on the internet</h1>
    <p class="text-sm text-gray-600 mb-4">you can also find me here:</p>

    <!-- Social Icons -->
    <div class="flex space-x-4 text-2xl mb-6">
      <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="https://github.com" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="#"><i class="fas fa-diamond"></i></a>
      <a href="mailto:example@email.com"><i class="fas fa-envelope"></i></a>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex space-x-4 mb-10">
      <button class="px-4 py-2 bg-gray-200 rounded">About</button>
      <button class="px-4 py-2 bg-gray-200 rounded">Project</button>
      <button class="px-4 py-2 bg-gray-200 rounded">Resume</button>
    </div>

    <!-- Footer -->
    <footer class="text-xs text-gray-500">
      © 2023 <a href="#" class="underline">Kunyang's Blog</a> Visitors: 4798 Views: 16635
    </footer>
  </div>
</template>
