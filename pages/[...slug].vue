<template>
  <div class="not-found">
    <p class="error-code">404</p>
    <h1 class="error-heading">hmm, nothing here :(</h1>
    <p class="error-sub">
      that page doesn't exist — maybe it moved, or the link was off.
    </p>
    <NuxtLink to="/" class="home-btn">take me home :)</NuxtLink>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: #faf8f5;
}

.error-code {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 700;
  color: #e8a5a5;
  margin: 0;
  line-height: 1;
}

.error-heading {
  font-size: clamp(1.5rem, 3vw, 2.4rem);
  font-weight: 400;
  color: #2d2d2d;
  margin: 1rem 0 0.75rem;
}

.error-sub {
  font-family: "Courier New", Courier, monospace;
  font-size: clamp(0.9rem, 1.1vw, 1.1rem);
  color: #777;
  line-height: 1.8;
  max-width: 42ch;
  margin: 0 0 2.5rem;
}

.home-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(120px, 13vw, 150px);
  height: clamp(20px, 10vw, 50px);
  border-radius: 15px;
  background: #2d2d2d;
  color: #faf8f5;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.1rem, 1vw, 1.3rem);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: background 0.25s ease, transform 0.25s ease;
}

.home-btn:hover {
  background: #c9b99a;
  color: #2d2d2d;
  transform: scale(1.06);
}
</style>
