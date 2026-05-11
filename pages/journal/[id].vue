<template>
  <div class="journal-wrapper">
    <NuxtLink to="/journal" class="back">← back</NuxtLink>
    <p v-if="loading" class="status">loading...</p>
    <p v-else-if="error" class="status">{{ error }}</p>
    <template v-else-if="entry">
      <h1 class="entry-heading">{{ entry.title }}</h1>
      <p class="entry-heading-date">{{ formatDate(entry.created_at) }}</p>
      <div class="prose" v-html="renderedContent" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const route = useRoute()
const { entry, loading, error, fetchEntry } = useJournal()

const renderedContent = computed(() =>
  entry.value?.content ? marked(entry.value.content) as string : ''
)

onMounted(() => fetchEntry(Number(route.params.id)))

function formatDate(iso: string) {
  return new Date(iso)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toLowerCase();
}
</script>

<style scoped>
.journal-wrapper {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 4rem 0;
  font-family: "Courier New", Courier, monospace;
}

.back {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: #aaa;
  text-decoration: none;
  display: block;
  margin-bottom: 2.5rem;
  transition: color 0.2s ease;
}

.back:hover {
  color: #444;
}

.entry-heading {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  margin: 0 0 0.35rem;
  color: black;
}

.entry-heading-date {
  font-size: 0.72rem;
  color: #aaa;
  letter-spacing: 0.08em;
  margin: 0 0 2.5rem;
}

.status {
  letter-spacing: 0.1em;
  font-size: 0.85rem;
  color: #aaa;
}
</style>
