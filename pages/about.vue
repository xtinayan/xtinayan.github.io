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
            top of my class, and have spent the years since working on everything from ML
            pipelines at SAP SE to full-stack web systems.
          </p>
          <p class="body-text">
            Outside of work I play the piano, crochet, occasionally draw, and like the
            quiet corners of the internet. This site is one of them.
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
        
        <div class="now-content">
          <!-- First Paragraph (Image Right) -->
          <ScrollReveal animation="fade-up" :delay="0.1" class="now-row">
            <div class="now-text">
              <p class="body-text">
                currently, i am in a two-year training program at a London-based CHristian charity,
                focusing on biblical studies, leadership development, community engagement, and team building.
              </p>
            </div>
            <div class="now-image">
              <img src="/images/bowerhouse.webp" alt="Bower House in London" />
            </div>
          </ScrollReveal>
      
          <!-- Second Paragraph (Image Left) -->
          <ScrollReveal animation="fade-up" :delay="0.2" class="now-row">
            <div class="now-text">
              <p class="body-text">
                this is a deliberately different pursuit from my technical background
                that has strengthened my ability to work in disciplined, diverse, 
                high-responsibility team settings. 
              </p>
            </div>
            <div class="now-image">
              <img src="/images/running.png" alt="training life" />
            </div>
          </ScrollReveal>
        </div>
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
              <div class="tl-content">
                <p class="tl-title">{{ event.title }}</p>
                <p v-if="event.text" class="tl-text">{{ event.text }}</p>
              </div>
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
  { year: "2001", title: "Born in China 🇨🇳" },
  {
    year: "2010",
    title: "5 month study abroad in California 🇺🇸",
  },
  {
    year: "March 2017",
    title: "Moved to Germany 🇩🇪 with family",
    text: "From 0 German to fluency in 6 months, managed to skip a grade after a year",
  },
  {
    year: "June 2020",
    title: "Graduated Abitur with 1.0",
    text: "Recognized as one of the best graduates in the state",
  },
  {
    year: "October 2020",
    title: "Started B.Sc. Wirtschaftsinformatik at TUM wtih Deutschlandstipendium",
  },
  { year: "October 2023", title: "Graduated 1st of 260 students, final grade 1.2" },
  { year: "2024", title: "Co-authored KONVENS 2024 NLP publication" },
  {
    year: "2024",
    title: "Dual Study M.Sc. Information Systems, SAP + TUM",
  },
  {
    year: "March 2024",
    text: "As part of the SAP Vocational Training STAR program",
    title: "ML Engineer at SAP SE",
  },
  {
    year: "August 2024",
    title: "Moved to London 🇬🇧",
    text:
      "Started the Full-Time Training Program (FTTL) by Amana Trust, a registered Christian charity ",
  },
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
  gap: clamp(2.5rem, 3.5vw, 5rem);
  width: 100%;
  padding: 5rem 0 8rem;
  align-items: start;
}

/* ── LEFT COLUMN ────────────────────────── */
.left-col {
  position: sticky;
  top: 5rem;
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
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 300;
  color: #2d2d2d;
  margin: 0 0 1.75rem;
  letter-spacing: 0.01em;
}

.body-text {
  font-size: clamp(0.92rem, 1.1vw, 1.05rem);
  line-height: 1.95;
  color: #555;
  margin: 0 0 1.2rem;
  max-width: 100%;
  text-align: justify;
}

.body-text:last-child {
  margin-bottom: 0;
}

/* ── NOW ────────────────────────────────── */
/* ── NOW SECTION LAYOUT ─────────────────── */
.now-content {
  display: flex;
  flex-direction: column;
  gap: 4rem; /* Spacing between the two rows */
}

.now-row {
  display: flex;
  align-items: center;
  gap: 3rem;
}

/* This targets the second row to flip the image and text */
.now-row:nth-child(even) {
  flex-direction: row-reverse;
}

.now-text {
  flex: 1;
}

.now-image {
  flex: 1;
  max-width: 300px; /* Adjust size as needed */
}

.now-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

/* Responsive: Stack them on mobile */
@media (max-width: 767px) {
  .now-row, 
  .now-row:nth-child(even) {
    flex-direction: column-reverse; /* Image on top, text below */
    gap: 1.5rem;
  }
  
  .now-image {
    max-width: 100%;
  }
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

.tl-content {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.tl-title {
  font-size: clamp(0.88rem, 1vw, 0.98rem);
  font-weight: 700; /* bold title */
  color: #2d2d2d;
  margin: 0;
}

.tl-text {
  font-size: clamp(0.85rem, 1vw, 0.95rem);
  line-height: 1.6;
  color: #777;
  margin: 0;
}

.tl-continued {
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
@media (max-width: 767px) {
  /* page shell */
  .about-page {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 4rem 0 6rem;
  }

  /* left col: un-stick, center children, add divider below */
  .left-col {
    position: static;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid rgba(201, 185, 154, 0.18);
    margin-bottom: 2rem;
  }

  /* smaller avatar */
  .avatar-wrap {
    width: 150px;
    height: 150px;
  }

  /* pill tabs */
  .anchor-nav {
    display: none;

    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
    gap: 0.5rem;
    width: 100%;
    padding-bottom: 0;
  }

  .anchor-nav::-webkit-scrollbar {
    display: none;
  }

  .anchor-nav a {
    flex-shrink: 0;
    background: #faf8f5;
    border: 1px solid rgba(232, 165, 165, 0.45);
    border-left: 1px solid rgba(232, 165, 165, 0.45);
    border-radius: 999px;
    padding: 0.3rem 0.9rem;
    font-size: 0.72rem;
    white-space: nowrap;
    color: #aaa;
  }

  .anchor-nav a:hover,
  .anchor-nav a.active {
    background: rgba(232, 165, 165, 0.1);
    border-color: #e8a5a5;
    border-left-color: #e8a5a5;
    color: #e8a5a5;
  }

  /* center social icons */
  .left-socials {
    justify-content: center;
  }

  /* both grid items: prevent min-width: auto from expanding the 1fr column beyond body width */
  .left-col,
  .right-col {
    min-width: 0;
    width: 100%;
  }

  /* right col: reduced section spacing */
  .content-section {
    padding-bottom: 3rem;
    margin-bottom: 3rem;
  }

  .section-heading {
    font-size: 1.4rem;
    margin-bottom: 1.25rem;
  }

  /* body text: full width */
  .body-text {
    max-width: 100%;
  }

  /* timeline: dot+line on left, year above title */
  .timeline::before {
    left: 8px;
  }

  .tl-row {
    grid-template-columns: 18px 1fr;
    grid-template-areas:
      "dot year"
      ".   content";
    column-gap: 1rem;
    row-gap: 0.25rem;
    padding-bottom: 2rem;
    align-items: start;
  }

  .tl-year {
    grid-area: year;
    text-align: left;
    padding-top: 0.1rem;
  }

  .tl-dot {
    grid-area: dot;
    margin-top: 0.25rem;
    justify-self: center;
  }

  .tl-content {
    grid-area: content;
  }

  .tl-continued {
    padding-left: calc(18px + 1rem);
  }

  /* find me: 2-column grid */
  .find-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .find-link {
    justify-content: center;
  }
}
</style>
