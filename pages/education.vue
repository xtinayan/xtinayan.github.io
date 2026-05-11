<template>
  <div class="edu-page">
    <div class="edu-layout">
      <!-- LEFT COLUMN -->
      <aside class="left-column">
        <ScrollReveal animation="fade-up">
          <h1 class="page-title">education</h1>
        </ScrollReveal>

        <nav class="side-nav">
          <a href="#university">university</a>
          <a href="#highschool">high school</a>
          <a href="#extracurricular">extracurricular</a>
        </nav>
      </aside>

      <!-- RIGHT COLUMN -->
      <main class="edu-content">
        <!-- ── UNIVERSITY ────────────────────────── -->
        <section id="university" class="edu-section">
          <ScrollReveal animation="fade-up" :delay="0.05">
            <p class="section-label">university</p>
          </ScrollReveal>

          <div class="degrees-list">
            <!-- M.Sc. -->
            <ScrollReveal animation="fade-up" :delay="0.1">
              <div class="degree-card">
                <div class="degree-top">
                  <div class="degree-meta">
                    <h2 class="degree-title">TUM — M.Sc. Information Systems</h2>
                    <p class="institution">Technical University of Munich</p>
                  </div>
                  <div class="meta-right">
                    <span class="period">Oct 2023 — Sep 2024</span>
                    <span class="location">Munich, Germany</span>
                  </div>
                </div>
                <p class="degree-note">
                  Incomplete · Deutschlandstipendium, sponsored by Allianz SE.
                </p>
              </div>
            </ScrollReveal>

            <!-- B.Sc. -->
            <ScrollReveal animation="fade-up" :delay="0.2">
              <div class="degree-card">
                <div class="degree-top">
                  <div class="degree-meta">
                    <h2 class="degree-title">TUM — B.Sc. Information Systems</h2>
                    <p class="institution">Technical University of Munich</p>
                  </div>
                  <div class="meta-right">
                    <span class="period">Oct 2020 — Sep 2023</span>
                    <span class="location">Munich, Germany</span>
                  </div>
                </div>
                <ul class="highlights-list">
                  <li>GPA 1.2 · Ranked 1st of 260 students</li>
                  <li>Deutschlandstipendium, sponsored by SAP & ChemDelta Bavaria</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <!-- ── HIGH SCHOOL ────────────────────────── -->
        <section id="highschool" class="edu-section">
          <ScrollReveal animation="fade-up" :delay="0.05">
            <p class="section-label">high school</p>
          </ScrollReveal>

          <div class="degrees-list">
            <ScrollReveal animation="fade-up" :delay="0.1">
              <div class="school-card">
                <div class="degree-top">
                  <div class="degree-meta">
                    <h2 class="school-title">Gymnasium Schwertstrasse — Abitur</h2>
                    <p class="institution">Germany</p>
                  </div>
                  <div class="meta-right">
                    <span class="period">2017 — 2020</span>
                  </div>
                </div>
                <p class="degree-note">Grade 1.0</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" :delay="0.2">
              <div class="school-card">
                <div class="degree-top">
                  <div class="degree-meta">
                    <h2 class="school-title">
                      Shenzhen College of International Education
                    </h2>
                    <p class="institution">China</p>
                  </div>
                  <div class="meta-right">
                    <span class="period">2015 — 2017</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <!-- ── EXTRACURRICULAR ───────────────────── -->
        <section id="extracurricular" class="edu-section">
          <ScrollReveal animation="fade-up" :delay="0.05">
            <p class="section-label">extracurricular</p>
          </ScrollReveal>

          <div class="timeline">
            <ScrollReveal animation="fade-up" :delay="0.1">
              <div class="timeline-item">
                <div class="timeline-card">
                  <div class="card-top">
                    <div class="card-meta">
                      <h2 class="role-title">Volunteer Translator (EN→DE)</h2>
                      <p class="institution">Lebensstrom e.V.</p>
                    </div>
                    <span class="period">2021 — present</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" :delay="0.2">
              <div class="timeline-item">
                <div class="timeline-card">
                  <div class="card-top">
                    <div class="card-meta">
                      <h2 class="role-title">Simultaneous Translator & Pianist</h2>
                      <p class="institution">Die Gemeinde in München e.V.</p>
                    </div>
                    <span class="period">2022 — 2024</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.edu-page {
  width: 100%;
  padding: 6rem 0;
}

/* ── LAYOUT ─────────────────────────────── */
.edu-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 4rem;
}

/* LEFT */
.left-column {
  position: sticky;
  top: 2.5rem;
  align-self: start;
  height: fit-content;
}

.page-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: #2d2d2d;
  margin: 0 0 1.5rem;
  letter-spacing: 0.02em;
}

.side-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.side-nav a {
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #aaa;
  transition: color 0.2s ease;
}

.side-nav a:hover {
  color: #e8a5a5;
}

/* RIGHT */
.edu-content {
  max-width: 850px;
  margin-top: 2.5rem;
}

/* ── SECTIONS ───────────────────────────── */
.edu-section {
  margin-bottom: 5rem;
}

.section-label {
  font-family: "Courier New", Courier, monospace;
  font-size: 1.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #c9b99a;
  margin: 0 0 2rem;
}

/* ── DEGREES ────────────────────────────── */
.degrees-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.degree-card {
  background: #faf8f5;
  border-left: 3px solid #e8a5a5;
  border-radius: 8px;
  padding: 1.5rem 1.75rem;
  box-sizing: border-box;
}

.degree-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 0.75rem;
}

.degree-meta {
  flex: 1;
}

.degree-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.2rem, 1.8vw, 1.45rem);
  font-weight: 600;
  color: #2d2d2d;
  margin: 0 0 0.3rem;
}

.institution {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.78rem, 0.9vw, 0.9rem);
  color: #999;
  margin: 0;
}

.degree-note {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.85rem, 1vw, 0.95rem);
  color: #888;
  margin: 0;
  font-style: italic;
}

.highlights-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.highlights-list li {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.85rem, 1vw, 0.95rem);
  color: #555;
  padding-left: 1.2rem;
  position: relative;
  line-height: 1.6;
}

.highlights-list li::before {
  content: "·";
  position: absolute;
  left: 0;
  color: #e8a5a5;
  font-size: 1.4rem;
  line-height: 0.9;
}

.meta-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  flex-shrink: 0;
}

.period {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.68rem, 0.8vw, 0.78rem);
  color: #c9b99a;
  white-space: nowrap;
}

/* ── HIGH SCHOOL CARDS ──────────────────── */
.school-card {
  background: #faf8f5;
  border-left: 3px solid #c9b99a;
  border-radius: 8px;
  padding: 1.25rem 1.75rem;
  box-sizing: border-box;
}

.school-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.05rem, 1.5vw, 1.25rem);
  font-weight: 600;
  color: #2d2d2d;
  margin: 0 0 0.3rem;
}

.location {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.65rem, 0.75vw, 0.72rem);
  color: #c9b99a;
  white-space: nowrap;
}

/* ── EXTRACURRICULAR (reuses timeline pattern) ── */
.timeline {
  position: relative;
  padding-left: 2.5rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5rem;
  bottom: 1rem;
  width: 1.5px;
  background: linear-gradient(to bottom, #e8a5a5, rgba(201, 185, 154, 0.2));
}

.timeline-item {
  position: relative;
  margin-bottom: 1.5rem;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: calc(-2.5rem - 4px);
  top: 1.4rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e8a5a5;
  border: 2px solid #faf8f5;
  box-shadow: 0 0 0 1.5px #e8a5a5;
}

.timeline-card {
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(201, 185, 154, 0.25);
  border-radius: 10px;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
}

.card-meta {
  flex: 1;
}

.role-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.1rem, 1.5vw, 1.35rem);
  font-weight: 600;
  color: #2d2d2d;
  margin: 0 0 0.25rem;
}

/* ── MOBILE ─────────────────────────────── */
@media (max-width: 900px) {
  .edu-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .left-column {
    position: static;
  }

  .side-nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .degree-top,
  .card-top {
    flex-direction: column;
    gap: 0.4rem;
  }

  .meta-right {
    align-items: flex-start;
  }
}
</style>
