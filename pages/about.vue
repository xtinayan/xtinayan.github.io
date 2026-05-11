<template>
  <div class="about-page">
    <!-- ── LEFT COLUMN ─────────────────────────── -->
    <aside class="left-col">
      <!-- Avatar -->
      <div class="avatar-wrap">
        <img src="/favicon.png" alt="Christina Yan" class="avatar" />
      </div>

      <!-- Anchor nav -->
      <nav class="anchor-nav">
        <a href="#about" :class="{ active: active === 'about' }">about me in 1 min</a>
        <a href="#now" :class="{ active: active === 'now' }">now</a>
        <a href="#timeline" :class="{ active: active === 'timeline' }">timeline</a>
        <a href="#find" :class="{ active: active === 'find' }">find me</a>
      </nav>

      <!-- Social icons -->
      <div class="left-socials">
        <a
          href="https://github.com/xtinayan"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          ><i class="fab fa-github"></i
        ></a>
        <a
          href="https://linkedin.com/in/xtinayan"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          ><i class="fab fa-linkedin-in"></i
        ></a>
        <a
          href="https://instagram.com/xtinayan"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          ><i class="fab fa-instagram"></i
        ></a>
        <a
          href="https://facebook.com/xtinaxyan"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a href="mailto:christinayan2001@gmail.com" aria-label="Email"
          ><i class="fas fa-envelope"></i
        ></a>
      </div>
    </aside>

    <!-- ── RIGHT COLUMN ────────────────────────── -->
    <main class="right-col" ref="scrollArea">
      <!-- SECTION 1 — about me in 1 min -->
      <section id="about" class="content-section">
        <ScrollReveal animation="fade-up">
          <h2 class="section-heading">about me in 1 min</h2>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" :delay="0.1">
          <p class="body-text">
            I'm Christina — born in China, raised in Germany, now based in London. I
            studied Information Systems at the Technical University of Munich, graduated
            1st of 260 students, and have spent the years since building things with code,
            thinking in data, and occasionally writing about life.
          </p>
          <p class="body-text">
            Outside of work I play piano, crochet, keep a journal, and like the quiet
            corners of the internet. This site is one of them.
          </p>
          <p class="body-text">
            I am fluent in Chinese 🇨🇳, English 🇺🇸, German 🇩🇪, and dabble in Spanish 🇪🇸.
          </p>
        </ScrollReveal>
      </section>

      <!-- SECTION 2 — now -->
      <section id="now" class="content-section">
        <ScrollReveal animation="fade-up">
          <h2 class="section-heading">now</h2>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" :delay="0.1">
          <ul class="now-list">
            <li>
              <span class="arrow">→</span> Full-Time Training Program at Amana Trust,
              London
            </li>
            <li><span class="arrow">→</span> Building this website :)</li>
            <li class="placeholder"><span class="arrow">→</span> currently reading…</li>
            <li class="placeholder">
              <span class="arrow">→</span> currently listening to…
            </li>
            <li class="placeholder"><span class="arrow">→</span> currently learning…</li>
          </ul>
        </ScrollReveal>
      </section>

      <!-- SECTION 3 — timeline -->
      <section id="timeline" class="content-section">
        <ScrollReveal animation="fade-up">
          <h2 class="section-heading">timeline</h2>
        </ScrollReveal>

        <div class="timeline">
          <ScrollReveal
            v-for="(event, i) in timelineEvents"
            :key="i"
            animation="fade-up"
            :delay="i * 0.06"
          >
            <div class="tl-row">
              <span class="tl-year">{{ event.year }}</span>
              <div class="tl-dot" />
              <p class="tl-text">{{ event.text }}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" :delay="timelineEvents.length * 0.06">
            <p class="tl-continued">… to be continued :)</p>
          </ScrollReveal>
        </div>
      </section>

      <!-- SECTION 4 — find me -->
      <section id="find" class="content-section">
        <ScrollReveal animation="fade-up">
          <h2 class="section-heading">find me</h2>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" :delay="0.1">
          <div class="find-links">
            <a
              href="https://github.com/xtinayan"
              target="_blank"
              rel="noopener"
              class="find-link"
            >
              <i class="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://linkedin.com/in/xtinayan"
              target="_blank"
              rel="noopener"
              class="find-link"
            >
              <i class="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a
              href="https://instagram.com/xtinayan"
              target="_blank"
              rel="noopener"
              class="find-link"
            >
              <i class="fab fa-instagram"></i> Instagram
            </a>
            <a
              href="https://facebook.com/xtinaxyan"
              target="_blank"
              rel="noopener"
              class="find-link"
            >
              <i class="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" target="_blank" rel="noopener" class="find-link">
              <i class="fas fa-pen-nib"></i> Substack
            </a>
            <a href="mailto:christinayan2001@gmail.com" class="find-link">
              <i class="fas fa-envelope"></i> Email
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const timelineEvents = [
  { year: "2001", text: "Born in China" },
  { year: "2017", text: "Moved to Germany, started learning the language" },
  { year: "2020", text: "Graduated Abitur with 1.0" },
  {
    year: "2020",
    text: "Started B.Sc. Information Systems at TUM, Munich — Deutschlandstipendium",
  },
  { year: "2023", text: "Graduated 1st of 260 students, GPA 1.2" },
  { year: "2023", text: "Co-authored KONVENS 2024 NLP publication" },
  { year: "2024", text: "Started M.Sc. at TUM + Deutschlandstipendium by Allianz" },
  { year: "2024", text: "ML Engineer intern at SAP SE" },
  { year: "2024", text: "Moved to London ✈️" },
  { year: "2024", text: "Full-Time Training Program, Amana Trust" },
];

const active = ref("about");

onMounted(() => {
  const sections = ["about", "now", "timeline", "find"];
  const observers: IntersectionObserver[] = [];

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) active.value = id;
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    obs.observe(el);
    observers.push(obs);
  });

  onUnmounted(() => observers.forEach((o) => o.disconnect()));
});
</script>

<style scoped>
/* ── PAGE SHELL ─────────────────────────── */
.about-page {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 5rem;
  width: 100%;
  padding: 5rem 0 8rem;
  align-items: start;
}

/* ── LEFT COLUMN ────────────────────────── */
.left-col {
  position: sticky;
  top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  align-self: start;
}

.avatar-wrap {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #e8a5a5;
  overflow: hidden;
  flex-shrink: 0;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* anchor nav */
.anchor-nav {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.anchor-nav a {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: #aaa;
  text-decoration: none;
  transition: color 0.2s ease;
  padding-left: 0.75rem;
  border-left: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.anchor-nav a:hover,
.anchor-nav a.active {
  color: #2d2d2d;
  border-left-color: #e8a5a5;
}

/* social icons */
.left-socials {
  display: flex;
  gap: 1.1rem;
  align-items: center;
  flex-wrap: wrap;
}

.left-socials a {
  color: #bbb;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.left-socials a:hover {
  color: #e8a5a5;
}

/* ── RIGHT COLUMN ───────────────────────── */
.right-col {
  display: flex;
  flex-direction: column;
}

.content-section {
  padding-bottom: 5rem;
  border-bottom: 1px solid rgba(201, 185, 154, 0.18);
  margin-bottom: 5rem;
}

.content-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.section-heading {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 300;
  color: #2d2d2d;
  margin: 0 0 1.75rem;
  letter-spacing: 0.01em;
}

.body-text {
  /* font-family: "Courier New", Courier, monospace; */
  font-size: clamp(0.92rem, 1.1vw, 1.05rem);
  line-height: 1.95;
  color: #555;
  margin: 0 0 1.2rem;
  max-width: 80%;
}

.body-text:last-child {
  margin-bottom: 0;
}

/* ── NOW ────────────────────────────────── */
.now-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.now-list li {
  /* font-family: "Courier New", Courier, monospace; */
  font-size: clamp(0.92rem, 1.1vw, 1.05rem);
  line-height: 1.6;
  color: #555;
  display: flex;
  align-items: baseline;
  gap: 0.65rem;
}

.now-list li.placeholder {
  color: #bbb;
}

.arrow {
  color: #e8a5a5;
  flex-shrink: 0;
  font-size: 0.9rem;
}

/* ── TIMELINE ───────────────────────────── */
.timeline {
  display: flex;
  flex-direction: column;
  position: relative;
}

/* single continuous line running through all dots */
.timeline::before {
  content: "";
  position: absolute;
  left: calc(52px + 1.5rem);
  top: 0.5rem;
  bottom: 1.5rem;
  width: 1px;
  background: linear-gradient(
    to bottom,
    rgba(232, 165, 165, 0.55),
    rgba(201, 185, 154, 0.12)
  );
  z-index: 0;
}

.tl-row {
  display: grid;
  grid-template-columns: 52px 1px 1fr;
  gap: 0 1.5rem;
  align-items: start;
  padding-bottom: 1.75rem;
}

.tl-year {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: #c9b99a;
  padding-top: 0.15rem;
  text-align: right;
}

.tl-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #e8a5a5;
  border: 2px solid #faf8f5;
  box-shadow: 0 0 0 1.5px #e8a5a5;
  margin-top: 0.3rem;
  justify-self: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.tl-text {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.88rem, 1vw, 0.98rem);
  line-height: 1.65;
  color: #555;
  margin: 0;
}

.tl-continued {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.82rem;
  color: #bbb;
  margin: 0;
  padding-left: calc(52px + 3rem);
}

/* ── FIND ME ────────────────────────────── */
.find-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.find-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.82rem;
  letter-spacing: 0.05em;
  color: #2d2d2d;
  text-decoration: none;
  border: 1px solid rgba(201, 185, 154, 0.4);
  border-radius: 999px;
  padding: 0.4rem 1rem;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
}

.find-link:hover {
  border-color: #e8a5a5;
  color: #e8a5a5;
  background: rgba(232, 165, 165, 0.05);
}

.find-link i {
  font-size: 0.78rem;
}

/* ── MOBILE ─────────────────────────────── */
@media (max-width: 860px) {
  .about-page {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding-top: 4rem;
  }

  .left-col {
    position: static;
    flex-direction: column;
    gap: 1.5rem;
  }

  .anchor-nav {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 0;
    padding-bottom: 0.25rem;
    scrollbar-width: none;
  }

  .anchor-nav::-webkit-scrollbar {
    display: none;
  }

  .anchor-nav a {
    flex-shrink: 0;
    border-left: none;
    border-bottom: 2px solid transparent;
    padding: 0.35rem 0.75rem;
    white-space: nowrap;
  }

  .anchor-nav a:hover,
  .anchor-nav a.active {
    border-left-color: transparent;
    border-bottom-color: #e8a5a5;
  }
}
</style>
