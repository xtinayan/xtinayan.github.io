<template>
  <div class="contact-page">
    <ScrollReveal animation="fade-up">
      <h1 class="page-title">get in touch</h1>
      <p class="page-sub">Have a project, question, or just want to say hi?</p>
    </ScrollReveal>

    <ScrollReveal animation="fade-up" :delay="0.1" class="form-wrap">
      <!-- SUCCESS STATE -->
      <div v-if="submitted" class="success-box">
        <span class="success-icon">✦</span>
        <p>Message sent! I'll get back to you soon :)</p>
      </div>

      <!-- FORM -->
      <form v-else @submit.prevent="handleSubmit" class="contact-form" novalidate>
        <div class="field-row">
          <div class="field">
            <label for="name">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div class="field">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            placeholder="What's on your mind?"
            required
          />
        </div>

        <p v-if="error" class="error-msg">{{ error }}</p>

        <button type="submit" class="submit-btn" :disabled="loading">
          <span v-if="loading">sending…</span>
          <span v-else>send message</span>
        </button>
      </form>
    </ScrollReveal>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ ssr: false })

const supabase = useSupabase()

const form = reactive({ name: '', email: '', message: '' })
const loading = ref(false)
const submitted = ref(false)
const error = ref('')

async function handleSubmit() {
  error.value = ''

  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    error.value = 'Please fill in all fields.'
    return
  }

  if (!supabase) {
    error.value = 'Something went wrong. Please try again.'
    return
  }

  loading.value = true

  const { error: sbError } = await supabase
    .from('contact_messages')
    .insert({ name: form.name.trim(), email: form.email.trim(), message: form.message.trim() })

  loading.value = false

  if (sbError) {
    error.value = 'Something went wrong. Please try again.'
    return
  }

  submitted.value = true
}
</script>

<style scoped>
.contact-page {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 6rem 0 5rem;
}

.page-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 300;
  color: #2D2D2D;
  margin: 0 0 0.5rem;
}

.page-sub {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.95rem;
  color: #888;
  margin: 0 0 3rem;
}

/* form-wrap class applied via Vue attr inheritance on ScrollReveal root */
.form-wrap {
  width: 100%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.field-row {
  display: flex;
  gap: 1.25rem;
}

.field-row .field {
  flex: 1;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

label {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #888;
}

input,
textarea {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.95rem;
  color: #2D2D2D;
  background: transparent;
  border: none;
  border-bottom: 1px solid #C9B99A;
  padding: 0.6rem 0;
  outline: none;
  width: 100%;
  resize: none;
  transition: border-color 0.2s ease;
}

input::placeholder,
textarea::placeholder {
  color: #bbb;
}

input:focus,
textarea:focus {
  border-bottom-color: #2D2D2D;
}

.error-msg {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.82rem;
  color: #E8A5A5;
  margin: 0;
}

.submit-btn {
  align-self: flex-start;
  background: #2D2D2D;
  color: #FAF8F5;
  border: none;
  border-radius: 999px;
  padding: 0.85rem 2.4rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #C9B99A;
  color: #2D2D2D;
  transform: scale(1.03);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* SUCCESS */
.success-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 2.5rem;
  background: #FAF8F5;
  border-left: 3px solid #E8A5A5;
  border-radius: 8px;
}

.success-icon {
  font-size: 1.4rem;
  color: #E8A5A5;
}

.success-box p {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.95rem;
  color: #555;
  margin: 0;
}
</style>
