<template>
  <div class="work-page">
    <div class="work-layout">
      <!-- LEFT COLUMN -->
      <aside class="left-column">
        <ScrollReveal animation="fade-up">
          <h1 class="page-title">work</h1>
        </ScrollReveal>

        <nav class="side-nav">
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#skills">skills</a>
        </nav>
      </aside>

      <!-- RIGHT COLUMN -->
      <main class="work-content">
        <!-- ── EXPERIENCE ───────────────────────── -->
        <section id="experience" class="work-section">
          <ScrollReveal animation="fade-up" :delay="0.05">
            <p class="section-label">experience</p>
          </ScrollReveal>

          <div class="timeline">
            <!-- ITEM -->
            <div class="timeline-item">
              <ScrollReveal animation="fade-up" :delay="0.1">
                <div class="timeline-card">
                  <div class="card-top">
                    <div class="card-meta">
                      <h2 class="role-title">
                        Amana Trust | Web Development & Community Operations
                      </h2>
                    </div>

                    <div class="meta-right">
                      <span class="period">Aug 2024 — present</span>
                      <span class="location">London, UK</span>
                    </div>
                  </div>

                  <p class="description">Two-year Full-time Training program.</p>

                  <ul class="description-list">
                    <li>Built and maintained internal PHP MVC systems for operations</li>

                    <li>
                      Mentored university students in technical and personal development
                    </li>

                    <li>Worked within an international outreach and community team</li>
                  </ul>

                  <div class="tags">
                    <span class="tag">Full-Stack</span>
                    <span class="tag">Community</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <!-- ITEM -->
            <div class="timeline-item">
              <ScrollReveal animation="fade-up" :delay="0.2">
                <div class="timeline-card">
                  <div class="card-top">
                    <div class="card-meta">
                      <h2 class="role-title">SAP SE | Machine Learning Engineer</h2>
                    </div>

                    <div class="meta-right">
                      <span class="period"> March — Aug 2024</span>
                      <span class="location">Munich, Germany</span>
                    </div>
                  </div>

                  <ul class="description-list">
                    <li>Developed anomaly detection systems for telemetry data</li>

                    <li>Built ML pipelines for severity classification workflows</li>

                    <li>Worked with Scikit-learn, Pandas, and NumPy</li>
                  </ul>

                  <div class="tags">
                    <span class="tag">Machine Learning</span>
                    <span class="tag">Python</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <!-- ── PROJECTS ─────────────────────────── -->
        <section id="projects" class="work-section">
          <ScrollReveal animation="fade-up" :delay="0.05">
            <p class="section-label">projects</p>
          </ScrollReveal>

          <div class="projects-grid">
            <!-- PROJECT -->
            <ScrollReveal animation="fade-up" :delay="0.1">
              <NuxtLink to="/projects/attendance-management" class="project-card">
                <div class="project-header">
                  <h2 class="project-name">Attendance Management System</h2>

                  <span class="period"> Aug 2024 — present </span>
                </div>

                <ul class="description-list">
                  <li>Internal management platform for 50+ users</li>

                  <li>Authentication and role-based access system</li>

                  <li>Calendar integration and scheduling workflows</li>
                </ul>

                <div class="tags">
                  <span class="tag">PHP</span>
                  <span class="tag">MVC</span>
                  <span class="tag">Twig</span>
                </div>
                <span class="card-arrow">→</span>
              </NuxtLink>
            </ScrollReveal>

            <!-- PROJECT -->
            <ScrollReveal animation="fade-up" :delay="0.2">
              <NuxtLink to="/projects/servicehub" class="project-card">
                <div class="project-header">
                  <h2 class="project-name">ServiceHub</h2>

                  <span class="period"> Apr — Jul 2024 </span>
                </div>

                <ul class="description-list">
                  <li>Full-stack platform for service booking and management</li>

                  <li>Implemented calendar, booking, and authentication systems</li>

                  <li>Built CRUD workflows using React and Node.js</li>
                </ul>

                <div class="tags">
                  <span class="tag">React</span>
                  <span class="tag">TypeScript</span>
                  <span class="tag">Node.js</span>
                  <span class="tag">MongoDB</span>
                  <span class="tag">Docker</span>
                </div>
                <span class="card-arrow">→</span>
              </NuxtLink>
            </ScrollReveal>

            <!-- PROJECT -->
            <ScrollReveal animation="fade-up" :delay="0.3">
              <NuxtLink to="/projects/createdata4ai" class="project-card">
                <div class="project-header">
                  <h2 class="project-name">CreateData4AI</h2>

                  <span class="badge-pub"> Publication </span>
                </div>

                <p class="project-venue">KONVENS 2024 · Feb — Sep 2023</p>

                <ul class="description-list">
                  <li>Co-authored published NLP research paper</li>

                  <li>Built keyword extraction pipeline with +28% improvement</li>

                  <li>Published at KONVENS 2024 conference</li>
                </ul>

                <div class="tags">
                  <span class="tag">Python</span>
                  <span class="tag">NLP</span>
                  <span class="tag">Transformers</span>
                </div>
                <span class="card-arrow">→</span>
              </NuxtLink>
            </ScrollReveal>
          </div>
        </section>

        <!-- ── SKILLS ───────────────────────────── -->
        <section id="skills" class="work-section">
          <ScrollReveal animation="fade-up" :delay="0.05">
            <div class="skills-intro">
              <p class="section-label">skills</p>
              <p class="skills-subtitle">Technologies and tools I've worked with.</p>
            </div>
          </ScrollReveal>

          <div class="skills-grid">
            <ScrollReveal animation="fade-up" :delay="0.1">
              <div class="skill-group">
                <p class="group-label">Languages & Databases</p>
                <div class="skill-pills">
                  <span class="skill-tag">Java</span>
                  <span class="skill-tag">Python</span>
                  <span class="skill-tag">JavaScript</span>
                  <span class="skill-tag">TypeScript</span>
                  <span class="skill-tag">PHP</span>
                  <span class="skill-tag">SQL</span>
                  <span class="skill-tag">MongoDB</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" :delay="0.15">
              <div class="skill-group">
                <p class="group-label">Web & Frameworks</p>
                <div class="skill-pills">
                  <span class="skill-tag">React</span>
                  <span class="skill-tag">Node.js</span>
                  <span class="skill-tag">Express</span>
                  <span class="skill-tag">Twig</span>
                  <span class="skill-tag">HTML/CSS</span>
                  <span class="skill-tag">REST APIs</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" :delay="0.2">
              <div class="skill-group">
                <p class="group-label">Data & ML</p>
                <div class="skill-pills">
                  <span class="skill-tag">NLP</span>
                  <span class="skill-tag">Anomaly Detection</span>
                  <span class="skill-tag">Keyword Extraction</span>
                  <span class="skill-tag">Scikit-learn</span>
                  <span class="skill-tag">Pandas</span>
                  <span class="skill-tag">NumPy</span>
                  <span class="skill-tag">Transformer Models</span>
                  <span class="skill-tag">SentenceTransformers (SBERT)</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" :delay="0.25">
              <div class="skill-group">
                <p class="group-label">Tools & Methodologies</p>
                <div class="skill-pills">
                  <span class="skill-tag">Git</span>
                  <span class="skill-tag">Docker</span>
                  <span class="skill-tag">MVC</span>
                  <span class="skill-tag">Agile</span>
                  <span class="skill-tag">Scrum</span>
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
.work-page {
  width: 100%;
  padding: 5rem 0;
}

.page-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  color: #2d2d2d;
  margin: 0 0 3.5rem;
  letter-spacing: 0.02em;
}

/* ── LAYOUT ───────────────────────────── */
.work-layout {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 4rem;
}

/* LEFT SIDE */

.left-column {
  position: sticky;
  top: 5rem;
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

/* NAV */

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

/* RIGHT SIDE */

.work-content {
  max-width: 850px;
}

/* ── SECTIONS ─────────────────────────── */

.work-section {
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

/* ── TIMELINE ─────────────────────────── */

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
  margin-bottom: 2rem;
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
  padding: 1.5rem 1.75rem;

  border: 1px solid rgba(201, 185, 154, 0.25);
  border-radius: 10px;

  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.timeline-card:hover {
  transform: translateY(-3px);

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

/* ── CARD HEADER ─────────────────────── */

.card-top,
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  gap: 1.5rem;

  margin-bottom: 0.75rem;
}

.card-meta {
  flex: 1;
}

.meta-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1rem;
}

.role-title,
.project-name {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.2rem, 1.8vw, 1.5rem);
  font-weight: 600;

  color: #2d2d2d;

  margin: 0 0 0.3rem;
}

.company {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.78rem, 0.9vw, 0.9rem);

  color: #999;
  margin: 0;
}

.period {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.8rem, 0.8vw, 0.9rem);
  font-weight: 600;

  color: #c9b99a;

  white-space: nowrap;
  flex-shrink: 0;
}

.location {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.8rem, 0.8vw, 0.9rem);
  font-style: italic;
  font-weight: 600;

  color: #c9b99a;

  white-space: nowrap;
  /* flex-shrink: 0; */
}

/* ── DESCRIPTION LIST ────────────────── */

.description {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.88rem, 1vw, 1rem);
  line-height: 1.5;

  color: #999;

  margin: 0.75rem 0 0.5rem;
}

.description-list {
  margin: 0.75rem 0 1rem;
  padding-left: 1.25rem;

  list-style-type: disc;
  list-style-position: outside;

  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.88rem, 1vw, 1rem);
  line-height: 1.8;

  color: #555;
}

.description-list li {
  display: list-item;
  margin-bottom: 0.35rem;
}

/* ── PROJECTS ────────────────────────── */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.project-card {
  display: block;
  background: #faf8f5;

  border-left: 3px solid #e8a5a5;
  border-radius: 8px;

  padding: 1.5rem;
  position: relative;

  text-decoration: none;
  color: inherit;

  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.project-card:hover {
  transform: translateY(-4px);

  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.07);
}

.card-arrow {
  position: absolute;
  bottom: 1.1rem;
  right: 1.1rem;
  font-size: 0.85rem;
  color: #c9b99a;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.project-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
}

.project-venue {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.75rem;

  color: #c9b99a;

  margin: 0 0 0.75rem;
}

/* ── TAGS ────────────────────────────── */

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  background: rgba(165, 184, 232, 0.15);

  color: #7a90c8;

  border-radius: 999px;

  padding: 0.2rem 0.75rem;

  font-family: "Courier New", Courier, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.04em;
}

.badge-pub {
  background: rgba(232, 165, 165, 0.12);

  color: #e8a5a5;

  border: 1px solid rgba(232, 165, 165, 0.35);
  border-radius: 999px;

  padding: 0.2rem 0.75rem;

  font-family: "Courier New", Courier, monospace;
  font-size: 0.68rem;
  letter-spacing: 0.06em;

  white-space: nowrap;
}

/* ── SKILLS ──────────────────────────── */

.skills-intro .section-label {
  margin-bottom: 0.4rem;
}

.skills-subtitle {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.85rem, 1vw, 0.95rem);
  color: #aaa;
  margin: 0 0 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.skill-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.group-label {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #c9b99a;
  margin: 0;
}

.skill-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.skill-tag {
  background: rgba(165, 184, 232, 0.18);
  color: #2d2d2d;
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.72rem;
  letter-spacing: 0.03em;
}

/* ── MOBILE ──────────────────────────── */

@media (max-width: 900px) {
  .work-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .left-column {
    position: static;
  }

  .side-nav {
    flex-direction: row;
    gap: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .card-top,
  .project-header {
    flex-direction: column;
    gap: 0.4rem;
  }

  .meta-right {
    align-items: flex-start;
  }

  .timeline {
    margin-left: 6px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
