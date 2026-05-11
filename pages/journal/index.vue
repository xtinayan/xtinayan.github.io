<template>
  <div class="journal-wrapper">
    <p v-if="loading" class="status">loading...</p>
    <p v-else-if="error" class="status">{{ error }}</p>
    <ul v-else>
      <li v-for="e in entries" :key="e.id">
        <NuxtLink :to="`/journal/${e.id}`">
          <span class="entry-title">{{ e.title }}</span>
          <span class="entry-date">{{ formatDate(e.created_at) }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { entries, loading, error, fetchEntries } = useJournal()

onMounted(fetchEntries)

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

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

li + li {
  border-top: 1px solid #f0f0f0;
}

li a {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 0;
  padding-left: 0;
  border-left: 1px solid transparent;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: border-color 0.25s ease, padding-left 0.25s ease;
}

li a:hover {
  border-left-color: #bbb;
  padding-left: 1rem;
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

.status {
  letter-spacing: 0.1em;
  font-size: 0.85rem;
  color: #aaa;
}
</style>