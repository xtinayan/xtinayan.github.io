<template> 
  <head>
    <title>Chrissy's Space :)</title>
  </head>
  <div> 
      <NuxtLayout>
        <header> 
          <nav> 
          <ul>
            <li>
              <NuxtLink id = "navi" to="/">Home</NuxtLink> |
              <!-- <a href="#about">About</a> | -->
              <NuxtLink id = "navi" to="/about">About</NuxtLink> |
              <NuxtLink id = "navi" to="/journals">Journals</NuxtLink>
            </li>
          </ul>
        </nav>
      </header>
          <!-- that it uses the router -->
          <NuxtPage />
      </NuxtLayout>
  </div>
</template>

