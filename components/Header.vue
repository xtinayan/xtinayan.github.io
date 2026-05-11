<template>
  <header class="site-header" ref="headerEl">
    <div class="header-inner">
      <!-- Logo -->
      <NuxtLink to="/" class="logo" @click="handleLogoClick">
        <span class="mono">C<span class="sep">·</span>Y</span>
      </NuxtLink>

      <!-- Desktop nav — floating pill, always visible -->
      <nav class="desktop-nav">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="nav-link">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Mobile toggle -->
      <button
        class="mobile-toggle"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
      >
        <span class="toggle-icon" :class="{ open: menuOpen }">+</span>
      </button>
    </div>

    <!-- Mobile dropdown (overlays content) -->
    <Transition name="slide-down">
      <nav v-if="menuOpen" class="mobile-nav">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="mobile-link"
          @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const links = [
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/education", label: "Education" },
  // { to: '/journal',   label: 'Journal'   },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const menuOpen = ref(false);
const headerEl = ref<HTMLElement | null>(null);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
function closeMenu() {
  menuOpen.value = false;
}

function handleLogoClick() {
  closeMenu();
  if (useRoute().path === "/") window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleOutside(e: MouseEvent) {
  if (menuOpen.value && headerEl.value && !headerEl.value.contains(e.target as Node)) {
    menuOpen.value = false;
  }
}

onMounted(() => document.addEventListener("click", handleOutside));
onUnmounted(() => document.removeEventListener("click", handleOutside));
</script>

<style scoped>
/* ── SHELL — transparent on desktop, lets clicks through the gap ── */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  pointer-events: none; /* gap between logo and nav is click-through */
}

.header-inner {
  width: 88%;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ── LOGO ───────────────────────────────── */
.logo {
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid #2d2d2d;
  text-decoration: none;
  flex-shrink: 0;
  transition: border-color 0.2s ease;
  background: rgba(250, 248, 245, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.logo:hover {
  border-color: #e8a5a5;
}
.logo:hover .mono {
  color: #e8a5a5;
}

.mono {
  font-family: "Cormorant Garamond", serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #2d2d2d;
  line-height: 1;
  transition: color 0.2s ease;
}

.sep {
  font-size: 0.56rem;
  vertical-align: middle;
  margin: 0 0.5px;
  opacity: 0.6;
}

/* ── DESKTOP NAV — frosted pill ─────────── */
.desktop-nav {
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 1.75rem;
  background: rgba(250, 248, 245, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(201, 185, 154, 0.22);
  border-radius: 999px;
  padding: 0.45rem 1.4rem;
}

.nav-link {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2d2d2d;
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 1.5px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.nav-link:hover {
  color: #e8a5a5;
}

.nav-link.router-link-active {
  border-bottom-color: #e8a5a5;
}

/* ── MOBILE TOGGLE (hidden on desktop) ──── */
.mobile-toggle {
  display: none;
  pointer-events: auto;
  background: rgba(250, 248, 245, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(201, 185, 154, 0.22);
  border-radius: 999px;
  cursor: pointer;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.toggle-icon {
  display: inline-block;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.5rem;
  font-weight: 300;
  color: #2d2d2d;
  line-height: 1;
  transition: transform 0.25s ease, color 0.2s ease;
}

.toggle-icon.open {
  transform: rotate(45deg);
  color: #e8a5a5;
}

/* ── MOBILE DROPDOWN ────────────────────── */
.mobile-nav {
  pointer-events: auto;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(250, 248, 245, 0.97);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(201, 185, 154, 0.2);
  display: flex;
  flex-direction: column;
  padding: 0.5rem 6% 1rem;
}

.mobile-link {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2d2d2d;
  text-decoration: none;
  padding: 0.85rem 0;
  border-bottom: 1px solid rgba(201, 185, 154, 0.15);
  transition: color 0.2s ease;
}

.mobile-link:last-child {
  border-bottom: none;
}

.mobile-link:hover,
.mobile-link.router-link-active {
  color: #e8a5a5;
}

/* ── DROPDOWN TRANSITION ────────────────── */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* ── MOBILE BREAKPOINT ──────────────────── */
@media (max-width: 768px) {
  /* Solid bar on mobile */
  .site-header {
    background: rgba(250, 248, 245, 0.92);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(201, 185, 154, 0.18);
    pointer-events: auto;
  }

  .logo {
    background: transparent;
    backdrop-filter: none;
    border-color: #2d2d2d;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }
}
</style>
