<template>
  <div class="journal-wrapper">

    <!-- List view -->
    <template v-if="!selectedSlug">
      <p v-if="loading" class="status">loading...</p>
      <p v-else-if="error" class="status">{{ error }}</p>
      <ul v-else>
        <li
          v-for="e in entries"
          :key="e.id"
          @click="openEntry(e.slug)"
        >
          <span class="entry-title">{{ e.title }}</span>
          <span class="entry-date">{{ formatDate(e.created_at) }}</span>
        </li>
      </ul>
    </template>

    <!-- Entry view -->
    <template v-else>
      <button class="back" @click="closeEntry">← back</button>
      <p v-if="loading" class="status">loading...</p>
      <p v-else-if="error" class="status">{{ error }}</p>
      <template v-else-if="entry">
        <h1 class="entry-heading">{{ entry.title }}</h1>
        <p class="entry-heading-date">{{ formatDate(entry.created_at) }}</p>
        <div class="prose">
          <MDC :value="entry.content" />
        </div>
      </template>
    </template>

  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'journal-auth' })

const { entries, entry, loading, error, fetchEntries, fetchEntry } = useJournal()

const selectedSlug = ref<string | null>(null)

onMounted(fetchEntries)

async function openEntry(slug: string) {
  selectedSlug.value = slug
  await fetchEntry(slug)
}

function closeEntry() {
  selectedSlug.value = null
  entry.value = null
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).toLowerCase()
}
</script>

<style scoped>
.journal-wrapper {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 4rem 0;
  font-family: 'Courier New', Courier, monospace;
}

/* ── List ── */

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

li {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  cursor: pointer;
  padding: 1rem 0 1rem 0;
  border-left: 1px solid transparent;
  padding-left: 0;
  transition: border-color 0.25s ease, padding-left 0.25s ease, color 0.2s ease;
  letter-spacing: 0.04em;
}

li:hover {
  border-left-color: #bbb;
  padding-left: 1rem;
}

li + li {
  border-top: 1px solid #f0f0f0;
}

.entry-title {
  font-size: 0.95rem;
  color: #1a1a1a;
}

.entry-date {
  font-size: 0.72rem;
  color: #aaa;
  letter-spacing: 0.08em;
}

/* ── Entry heading ── */

.entry-heading {
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.04em;
  margin: 0 0 0.35rem;
  color: #1a1a1a;
}

.entry-heading-date {
  font-size: 0.72rem;
  color: #aaa;
  letter-spacing: 0.08em;
  margin: 0 0 2.5rem;
}

/* ── Back button ── */

.back {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: #aaa;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-bottom: 2.5rem;
  display: block;
  transition: color 0.2s ease;
}

.back:hover {
  color: #444;
}

/* ── Status ── */

.status {
  letter-spacing: 0.1em;
  font-size: 0.85rem;
  color: #aaa;
}
</style>