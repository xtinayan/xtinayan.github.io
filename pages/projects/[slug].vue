<template>
  <div class="project-page">
    <!-- 404 -->
    <div v-if="!project" class="not-found">
      <p>Project not found.</p>

      <NuxtLink to="/work" class="back-link"> ← back to work </NuxtLink>
    </div>

    <template v-else>
      <!-- Back -->
      <NuxtLink to="/work" class="back-link"> ← back </NuxtLink>

      <!-- Header -->
      <ScrollReveal animation="fade-up">
        <div class="project-header">
          <div class="header-top">
            <span v-if="project.badge" class="badge-pub">
              {{ project.badge }}
            </span>

            <span class="period">
              {{ project.period }}
            </span>
          </div>

          <h1 class="project-title">
            {{ project.name }}
          </h1>

          <p v-if="project.venue" class="project-venue">
            {{ project.venue }}
          </p>

          <p class="project-summary">
            {{ project.summary }}
          </p>

          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </ScrollReveal>

      <div class="divider" />

      <!-- Dynamic Content -->
      <div class="content-section">
        <ScrollReveal
          v-for="(block, i) in project.content"
          :key="i"
          animation="fade-up"
          :delay="i * 0.05"
        >
          <!-- TEXT -->
          <div v-if="block.type === 'text'" class="description-group">
            <h3 class="section-label">
              {{ block.label }}
            </h3>

            <p class="body-text">
              {{ block.text }}
            </p>
          </div>

          <!-- IMAGE -->
          <div v-else-if="block.type === 'image'" class="image-block">
            <img :src="block.src" :alt="block.alt || project.name" class="project-img" />

            <p v-if="block.caption" class="image-caption">
              {{ block.caption }}
            </p>
          </div>
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
  width: 80%;
  margin: 0 auto;
  padding: 5rem 0 6rem;
  text-align: left;
}

/* Back */

.back-link {
  display: inline-block;
  margin-bottom: 3rem;

  font-family: "Courier New", Courier, monospace;
  font-size: 0.82rem;
  letter-spacing: 0.06em;

  color: #c9b99a;
  text-decoration: none;

  transition: color 0.2s ease;
}

.back-link:hover {
  color: #2d2d2d;
}

/* Header */

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
  margin: 0;

  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 300;
  line-height: 1.1;

  color: #2d2d2d;
}

.project-venue {
  margin: 0;

  font-family: "Courier New", Courier, monospace;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 0.04em;

  color: #c9b99a;
}

.project-summary {
  margin: 0.25rem 0 0;

  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.92rem, 1.1vw, 1.05rem);
  line-height: 1.85;

  color: #666;
}

/* Divider */

.divider {
  width: 100%;
  height: 1px;

  margin: 2.5rem 0;

  background: rgba(201, 185, 154, 0.25);
}

/* Content */

.content-section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.description-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.section-label {
  margin: 0;

  font-family: "Courier New", Courier, monospace;
  font-size: 0.95rem;
  font-weight: 700;

  letter-spacing: 0.12em;
  text-transform: uppercase;

  color: #c9b99a;
}

.body-text {
  margin: 0;

  font-size: clamp(0.92rem, 1.1vw, 1.05rem);
  line-height: 1.9;

  color: #555;

  text-align: justify;
  hyphens: auto;
}

/* Images */

.image-block {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-img {
  width: 100%;
  display: block;

  border-radius: 12px;
  object-fit: cover;
}

.image-caption {
  margin: 0;

  font-family: "Courier New", Courier, monospace;
  font-size: 0.72rem;
  letter-spacing: 0.04em;

  color: #999;
}

/* Links */

.links-section {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;

  margin-top: 4rem;
}

.ext-link {
  padding-bottom: 2px;

  font-size: 0.82rem;
  letter-spacing: 0.06em;

  color: #2d2d2d;
  text-decoration: none;

  border-bottom: 1px solid #c9b99a;

  transition: color 0.2s ease, border-color 0.2s ease;
}

.ext-link:hover {
  color: #e8a5a5;
  border-color: #e8a5a5;
}

/* Shared */

.period {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.75rem;
  letter-spacing: 0.04em;

  color: #c9b99a;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  margin-top: 0.25rem;
}

.tag {
  padding: 0.2rem 0.75rem;

  border-radius: 999px;

  background: rgba(165, 184, 232, 0.15);

  color: #7a90c8;

  font-family: "Courier New", Courier, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.04em;
}

.badge-pub {
  padding: 0.2rem 0.75rem;

  border-radius: 999px;
  border: 1px solid rgba(232, 165, 165, 0.35);

  background: rgba(232, 165, 165, 0.12);

  color: #e8a5a5;

  font-family: "Courier New", Courier, monospace;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
}

/* 404 */

.not-found {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-top: 6rem;

  font-family: "Courier New", Courier, monospace;

  color: #888;
}

/* Mobile */

@media (max-width: 768px) {
  .project-page {
    width: 90%;
    padding-top: 3rem;
  }

  .body-text {
    text-align: left;
  }
}
</style>
