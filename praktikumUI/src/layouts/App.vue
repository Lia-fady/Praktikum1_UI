<script setup>
import Navbar from '@/components/app/Navbar.vue'
import Breadcrumb from '@/components/app/Breadcrumb.vue'
</script>

<template>
  <div class="app-layout">
    <Navbar />
    <main class="main-content">
      <Breadcrumb />
      <RouterView />
    </main>
    <footer class="site-footer">
      <div class="footer-inner">
        <RouterLink to="/" class="footer-brand">Gatherly<span>.</span></RouterLink>
        <p>Find your people. Make a day of it.</p>
        <span class="footer-copy">&copy; 2026 Gatherly</span>
      </div>
    </footer>
  </div>
</template>