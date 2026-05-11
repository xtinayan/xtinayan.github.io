<template>
  <div class="page">
    <!-- ── SECTION 1: HERO ──────────────────────────────────── -->
    <section class="hero">
      <div class="hero-img-wrap">
        <img src="/images/snowman.png" class="hero-img" alt="chrissy" />
      </div>

      <ScrollReveal animation="fade-up" class="hero-right">
        <span class="label">TUM · SAP · Amana Trust</span>
        <h1 class="hero-heading">hi, i'm christina :)</h1>
        <p class="hero-sub">
          I build things with code, think in data, and occasionally write about life.
        </p>
        <div class="socials">
          <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="Email"><i class="fas fa-envelope"></i></a>
        </div>
      </ScrollReveal>

      <div class="scroll-arrow">
        <i class="fas fa-chevron-down bounce"></i>
      </div>
    </section>

    <!-- ── SECTION 2: ABOUT SNAPSHOT ───────────────────────── -->
    <section class="about-section">
      <ScrollReveal animation="slide-left" class="col">
        <p class="body-text">
          Based in London. TUM graduate, 1st of 260. I work at the intersection of machine
          learning, full-stack development, and the occasional creative detour.
        </p>
      </ScrollReveal>
      <ScrollReveal animation="slide-right" class="col">
        <img src="/images/bench.png" class="section-img" alt="sitting on a bench" />
      </ScrollReveal>
    </section>

    <!-- ── SECTION 3: WHAT I DO ─────────────────────────────── -->
    <section class="cards-section">
      <div class="cards-grid">
        <ScrollReveal animation="fade-up" :delay="0">
          <div class="card">
            <h3>ML & AI</h3>
            <p>NLP, anomaly detection, transformer models</p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" :delay="0.15">
          <div class="card">
            <h3>Full-Stack Dev</h3>
            <p>React, Node.js, PHP, TypeScript</p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" :delay="0.3">
          <div class="card">
            <h3>Research</h3>
            <p>Co-author, KONVENS 2024, NLP publication</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- ── SECTION 4: HIGHLIGHTS ─────────────────────────────── -->
    <section class="highlights-section">
      <ScrollReveal animation="slide-right">
        <h2 class="section-heading">a few things i'm proud of</h2>
      </ScrollReveal>
      <div class="highlights-body">
        <ScrollReveal animation="slide-left" class="col">
          <img src="/images/laptop.png" class="section-img" alt="working on laptop" />
        </ScrollReveal>
        <ScrollReveal animation="slide-right" class="col">
          <ul class="highlights-list">
            <li>Graduated top of class — 1st of 260, TUM</li>
            <li>Co-authored KONVENS 2024 NLP publication</li>
            <li>ML Engineer at SAP SE</li>
          </ul>
        </ScrollReveal>
      </div>
    </section>

    <!-- ── SECTION 5: CONNECT ────────────────────────────────── -->
    <section class="connect-section">
      <ScrollReveal animation="fade">
        <NuxtLink to="/contact" class="talk-btn">let's talk</NuxtLink>
      </ScrollReveal>
    </section>
  </div>
</template>

<style scoped>
/* ── PAGE ─── */
.page {
  width: 100%;
}

/* ── SHARED: every section fills one viewport ─── */
.hero,
.about-section,
.cards-section,
.highlights-section,
.connect-section {
  min-height: 100vh;
  box-sizing: border-box;
}

/* ── HERO ─── */
.hero {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4rem;
  padding-top: 5vh; /* clear fixed header toggle */
}

.hero-img-wrap {
  flex: 0 0 42%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-img {
  width: 100%;
  max-height: 78vh;
  object-fit: contain;
  border-radius: 14px;
  transition: transform 0.35s ease;
  display: block;
}


.hero-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.label {
  font-size: clamp(0.6rem, 0.75vw, 0.8rem);
  font-variant: small-caps;
  letter-spacing: 0.14em;
  color: #c9b99a;
  font-family: "Courier New", Courier, monospace;
}

.hero-heading {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2rem, 5.5vw, 4.2rem);
  font-weight: 300;
  color: #2d2d2d;
  line-height: 1.1;
  margin: 0;
}

.hero-sub {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.95rem, 1.2vw, 1.2rem);
  line-height: 1.9;
  color: #666;
  margin: 0;
  max-width: 44ch;
}

.socials {
  display: flex;
  gap: 1.4rem;
  align-items: center;
  margin-top: 0.5rem;
}

.socials a {
  color: #2d2d2d;
  font-size: clamp(1rem, 1.3vw, 1.3rem);
  text-decoration: none;
  transition: color 0.2s ease;
}

.socials a:hover {
  color: #e8a5a5;
}

.scroll-arrow {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: #c9b99a;
  font-size: 1.1rem;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

.bounce {
  display: inline-block;
  animation: bounce 1.6s ease-in-out infinite;
}

/* ── ABOUT ─── */
.about-section {
  display: flex;
  align-items: center;
  gap: 4rem;
}

/* ── SHARED COLUMN ─── */
.col {
  flex: 1;
}

/* ── SHARED IMAGE ─── */
.section-img {
  width: 100%;
  max-height: 65vh;
  object-fit: contain;
  border-radius: 10px;
  display: block;
}

/* ── BODY TEXT ─── */
.body-text {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.95rem, 1.2vw, 1.2rem);
  line-height: 1.9;
  color: #555;
  margin: 0;
}

/* ── CARDS ─── */
.cards-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

.card {
  background: #faf8f5;
  border-left: 3px solid #e8a5a5;
  border-radius: 8px;
  padding: 1.75rem 1.5rem;
  box-sizing: border-box;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.07);
}

.card h3 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.1rem, 1.5vw, 1.45rem);
  font-weight: 600;
  color: #2d2d2d;
  margin: 0 0 0.5rem;
}

.card p {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.88rem, 1vw, 1rem);
  color: #777;
  line-height: 1.65;
  margin: 0;
}

/* ── HIGHLIGHTS ─── */
.highlights-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
}

.section-heading {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  font-weight: 300;
  color: #2d2d2d;
  margin: 0;
}

.highlights-body {
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;
}

.highlights-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.highlights-list li {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.95rem, 1.1vw, 1.1rem);
  color: #555;
  padding-left: 1.4rem;
  position: relative;
  line-height: 1.5;
}

.highlights-list li::before {
  content: "·";
  position: absolute;
  left: 0;
  color: #e8a5a5;
  font-size: 1.6rem;
  line-height: 0.85;
}

/* ── CONNECT ─── */
.connect-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.talk-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(120px, 13vw, 160px);
  height: clamp(120px, 13vw, 160px);
  border-radius: 50%;
  background: #2d2d2d;
  color: #faf8f5;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.3rem, 1.1vw, 1.5rem);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-decoration: none;
  transition: background 0.25s ease, transform 0.25s ease;
}

.talk-btn:hover {
  background: #c9b99a;
  color: #2d2d2d;
  transform: scale(1.06);
}
</style>
