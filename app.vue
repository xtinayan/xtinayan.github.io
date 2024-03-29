<template> 
  <div> 
      <NuxtLayout>
        <header> 
          <ul>
            <li>
              <NuxtLink id = "navi" to="/">Home</NuxtLink> |
              <NuxtLink id = "navi" to="/events">Events</NuxtLink>
            </li>
          </ul>
        </header>
          <!-- that it uses the router -->
          <NuxtPage />
      </NuxtLayout>
  </div>
</template>

