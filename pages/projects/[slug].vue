<template>
  <div class="project-page">
    <!-- 404 state -->
    <div v-if="!project" class="not-found">
      <p>Project not found.</p>
      <NuxtLink to="/work" class="back-link">← back to work</NuxtLink>
    </div>

    <template v-else>
      <!-- Back link -->
      <NuxtLink to="/work" class="back-link">← back</NuxtLink>

      <!-- Header -->
      <ScrollReveal animation="fade-up">
        <div class="project-header">
          <div class="header-top">
            <span v-if="project.badge" class="badge-pub">{{ project.badge }}</span>
            <span class="period">{{ project.period }}</span>
          </div>
          <h1 class="project-title">{{ project.name }}</h1>
          <p v-if="project.venue" class="project-venue">{{ project.venue }}</p>
          <p class="project-summary">{{ project.summary }}</p>
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </ScrollReveal>

      <div class="divider" />

      <!-- Description -->
      <ScrollReveal animation="fade-up" :delay="0.1" class="description-section">
        <div
          v-for="(section, i) in project.description"
          :key="i"
          class="description-group"
        >
          <h3 class="section-label">{{ section.label }}</h3>
          <p class="body-text">{{ section.text }}</p>
        </div>
      </ScrollReveal>

      <!-- Images (shown when added) -->
      <div v-if="project.images.length" class="images-section">
        <ScrollReveal
          v-for="(src, i) in project.images"
          :key="i"
          animation="fade-up"
          :delay="i * 0.1"
        >
          <img :src="src" :alt="project.name + ' screenshot'" class="project-img" />
        </ScrollReveal>
      </div>

      <!-- Links -->
      <ScrollReveal
        v-if="project.links?.length"
        animation="fade-up"
        class="links-section"
      >
        <a
          v-for="link in project.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="ext-link"
        >
          {{ link.label }} ↗
        </a>
      </ScrollReveal>
    </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { getProject } = useProjects();

const project = computed(() => getProject(route.params.slug as string));

useHead({
  title: computed(() =>
    project.value ? `${project.value.name} — Christina Yan` : "Project"
  ),
});
</script>

<style scoped>
.project-page {
  margin: 0 auto;
  width: 80%;
  text-align: left;
  /* max-width: 80%; */
  padding: 5rem 0 6rem;
}

.back-link {
  display: inline-block;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  color: #c9b99a;
  text-decoration: none;
  margin-bottom: 3rem;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: #2d2d2d;
}

.project-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.header-top {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.project-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 300;
  color: #2d2d2d;
  margin: 0;
  line-height: 1.1;
}

.project-venue {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.8rem;
  color: #c9b99a;
  margin: 0;
  letter-spacing: 0.04em;
}

.project-summary {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.92rem, 1.1vw, 1.05rem);
  line-height: 1.85;
  color: #666;
  margin: 0.25rem 0 0;
  /* max-width: 58ch; */
}

.divider {
  width: 100%;
  height: 1px;
  background: rgba(201, 185, 154, 0.25);
  margin: 2.5rem 0;
}

.description-section {
  display: flex;
  flex-direction: column;
  gap: 2.5rem; /* Increased gap between groups */
}

.description-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}

.section-label {
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #c9b99a; /* Using your accent gold */
  margin: 0;
}

/* Ensure body text stays consistent */
.body-text {
  font-size: clamp(0.92rem, 1.1vw, 1.05rem);
  line-height: 1.9;
  color: #555;
  margin: 0;
  text-align: justify;
  hyphens: auto;
}

.images-section {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-img {
  width: 100%;
  border-radius: 10px;
  object-fit: contain;
  display: block;
}

.links-section {
  margin-top: 3rem;
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.ext-link {
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  color: #2d2d2d;
  text-decoration: none;
  border-bottom: 1px solid #c9b99a;
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.ext-link:hover {
  color: #e8a5a5;
  border-color: #e8a5a5;
}

/* shared */
.period {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.75rem;
  color: #c9b99a;
  letter-spacing: 0.04em;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
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
}

.not-found {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 6rem;
  font-family: "Courier New", Courier, monospace;
  color: #888;
}
</style>
