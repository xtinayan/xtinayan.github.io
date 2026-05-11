<template>
  <div>
    <!-- Monogram logo — top left, every page -->
    <NuxtLink to="/" class="home-logo" @click="handleHomeClick">
      <span class="mono">C<span class="mono-sep">·</span>Y</span>
    </NuxtLink>

    <header ref="header" class="header-container">
      <div class="menu-container">
        <button @click="toggleMenu" class="toggle-button">+</button>

        <nav v-show="menuOpen" class="nav-menu" @click.stop="onMenuClick">
          <div data-aos="fade-left">
            <ul>
              <li>
                <NuxtLink to="/about">About</NuxtLink> |
                <NuxtLink to="/work">Work</NuxtLink> |
                <NuxtLink to="/education">Education</NuxtLink> |
                <NuxtLink to="/journal">Journal</NuxtLink> |
                <NuxtLink to="/gallery">Gallery</NuxtLink> |
                <NuxtLink to="/contact">Contact</NuxtLink>
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
    document.addEventListener('click', this.handleClickOutside, true);
  },
  beforeDestroy() {
    clearTimeout(this.closeTimer);
    document.removeEventListener('click', this.handleClickOutside, true);
  },
  methods: {
    handleHomeClick() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        this.closeTimer = setTimeout(() => {
          this.menuOpen = false;
        }, 4000);
      } else {
        clearTimeout(this.closeTimer);
      }
    },
    onMenuClick() {
      clearTimeout(this.closeTimer);
    },
    handleClickOutside(event) {
      if (this.menuOpen && this.$refs.header) {
        this.menuOpen = false;
      }
    },
  },
};
</script>

<style scoped>
.home-logo {
  position: fixed;
  top: 5%;
  left: 5%;
  z-index: 1000;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1.5px solid #2D2D2D;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: border-color 0.25s ease, color 0.25s ease;
}

.home-logo:hover {
  border-color: #E8A5A5;
}

.home-logo:hover .mono {
  color: #E8A5A5;
}

.mono {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #2D2D2D;
  line-height: 1;
  transition: color 0.25s ease;
}

.mono-sep {
  font-size: 0.6rem;
  vertical-align: middle;
  margin: 0 0.5px;
  opacity: 0.6;
}

.toggle-button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 28px;
  font-family: 'Courier Prime', 'Courier New', monospace;
  font-weight: 500;
  color: #2D2D2D;
  position: absolute;
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
  font-family: 'Courier Prime', 'Courier New', monospace;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  color: #2D2D2D;
}

nav ul li a {
  text-decoration: none;
  color: #2D2D2D;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;
}

nav ul li a:hover {
  border-bottom-color: #E8A5A5;
}

nav ul li a.router-link-exact-active {
  border-bottom: 2px solid #E8A5A5;
}
</style>
