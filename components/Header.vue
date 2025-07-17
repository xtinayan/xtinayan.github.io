<template>
  <div>
    <header ref="header" class="header-container">
      <div class="menu-container">
        <!-- Toggle Button -->
        <button @click="toggleMenu" class="toggle-button">+</button>

        <!-- Navigation Links -->
        <nav v-show="menuOpen" class="nav-menu" @click.stop="onMenuClick">
          <div data-aos="fade-left">
            <ul>
              <li>
                <NuxtLink to="/">Home</NuxtLink> |
                <NuxtLink to="/about">About</NuxtLink> |
                <NuxtLink to="/journals">Journals</NuxtLink> |
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      closeTimer: null,
    };
  },
  mounted() {
    // Add event listener to close the menu when clicking outside
    document.addEventListener("click", this.handleClickOutside, true);
  },
  beforeDestroy() {
    // Cleanup: clear the timer when the component is destroyed to prevent memory leaks
    clearTimeout(this.closeTimer);
    // Remove the event listener when the component is destroyed
    document.removeEventListener("click", this.handleClickOutside, true);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        // Set a timer to automatically close the menu after 3 seconds
        this.closeTimer = setTimeout(() => {
          this.menuOpen = false;
        }, 4000);
      } else {
        // If the menu is manually closed, clear any existing timer
        clearTimeout(this.closeTimer);
      }
    },
    onMenuClick() {
      // Clear the timer if the menu is clicked, to prevent auto-closing
      clearTimeout(this.closeTimer);
    },
    handleClickOutside(event) {
      // Check if the click is outside the header
      if (this.menuOpen && this.$refs.header) {
        // && !this.$refs.header.contains(event.target)) {
        this.menuOpen = false;
      }
    },
  },
};
</script>

<style scoped>
/* .header-container {
  position: relative;
} */

.toggle-button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 28px;
  position: absolute;
  /* Padding is safer than margin here */
  padding: 0.5rem;
  top: 0;
  right: 0;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  margin: 0.5rem 0;
}
</style>
