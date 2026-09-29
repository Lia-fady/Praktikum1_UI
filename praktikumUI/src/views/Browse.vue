<template>
  <section class="browse-shell">
    <header class="browse-heading">
      <p class="eyebrow">Find your next good story</p>
      <h1>Browse <span>what's on.</span></h1>
      <p>Good plans start with a little curiosity. See what's happening around you.</p>
    </header>
    <nav class="browse-tabs" aria-label="Browse sections">
      <RouterLink :to="{ name: 'events' }">All events</RouterLink>
      <RouterLink :to="{ name: 'category' }">Categories</RouterLink>
    </nav>
    <RouterView />
  </section>
</template>