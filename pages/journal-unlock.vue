<template>
  <div class="unlock-wrapper">
    <form @submit.prevent="handleSubmit">
      <input
        v-model="password"
        type="password"
        placeholder="password"
        autocomplete="current-password"
        autofocus
      />
      <button type="submit">enter</button>
      <p v-if="error" class="error">wrong password</p>
    </form>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const password = ref('')
const error = ref(false)

function handleSubmit() {
  if (password.value === config.public.journalPassword) {
    localStorage.setItem('journal_unlocked', 'true')
    navigateTo('/journal')
  } else {
    error.value = true
    password.value = ''
  }
}
</script>

<style scoped>
.unlock-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

input {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding: 0.25rem 0;
  background: transparent;
  text-align: center;
  width: 12rem;
  letter-spacing: 0.1em;
}

button {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.15em;
  padding: 0;
}

button:hover {
  text-decoration: underline;
}

.error {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  margin: 0;
}
</style>