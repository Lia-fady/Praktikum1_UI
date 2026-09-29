<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const mobileOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 12
}

watch(() => route.fullPath, () => {
  mobileOpen.value = false
})

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <nav class="navbar" aria-label="Main navigation">
      <div class="navbar-container">
        <RouterLink to="/" class="brand" aria-label="Gatherly home">
          <span class="brand-mark">G</span>
          <span>gatherly<span class="brand-period">.</span></span>
        </RouterLink>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="mobileOpen"
          aria-label="Toggle navigation"
          @click="mobileOpen = !mobileOpen"
        >
          <span></span><span></span>
        </button>

        <div class="nav-links" :class="{ 'is-open': mobileOpen }">
          <RouterLink to="/" class="nav-link" active-class="is-active" :exact-active-class="'is-active'">Home</RouterLink>
          <RouterLink to="/about" class="nav-link" active-class="is-active">About</RouterLink>
          <div class="nav-dropdown" :class="{ 'is-active': route.path.startsWith('/browse') }">
            <RouterLink to="/browse" class="nav-link browse-link" active-class="is-active">
              Browse <span class="nav-caret" aria-hidden="true">+</span>
            </RouterLink>
            <div class="dropdown-panel">
              <RouterLink to="/browse/events" class="dropdown-link">All events</RouterLink>
              <RouterLink to="/browse/category" class="dropdown-link">Categories</RouterLink>
              <RouterLink to="/browse/events/1" class="dropdown-link">Featured event</RouterLink>
            </div>
          </div>
          <RouterLink to="/contact" class="nav-link" active-class="is-active">Contact</RouterLink>
          <RouterLink to="/browse/events" class="nav-cta">Find an event <span aria-hidden="true">&rarr;</span></RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  z-index: 20;
  top: 0;
  border-bottom: 1px solid transparent;
  background: rgba(255, 254, 250, 0.97);
  transition: box-shadow 180ms ease, border-color 180ms ease;
}

.site-header.is-scrolled { border-color: var(--line); box-shadow: 0 6px 24px rgba(32, 37, 31, 0.05); }

.navbar-container {
  display: flex;
  width: min(100% - 64px, 1280px);
  min-height: 78px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

.brand { display: inline-flex; align-items: center; gap: 10px; font-size: 22px; font-weight: 700; }

.brand-mark {
  display: grid;
  width: 34px;
  aspect-ratio: 1;
  place-items: center;
  border-radius: 50%;
  color: var(--lime);
  background: var(--forest);
  font-family: var(--serif);
  font-size: 22px;
}

.brand-period { color: var(--coral); }
.nav-links { display: flex; height: 78px; align-items: center; gap: 30px; }

.nav-link {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: 8px;
  color: #626a61;
  font-size: 14px;
  transition: color 150ms ease;
}

.nav-link:hover,
.nav-link.is-active,
.nav-dropdown.is-active > .nav-link { color: var(--forest); }

.nav-dropdown { position: relative; display: flex; height: 100%; align-items: center; }

.nav-caret {
  display: inline-grid;
  width: 17px;
  height: 17px;
  place-items: center;
  border: 1px solid #cad0c4;
  border-radius: 50%;
  font-size: 13px;
  line-height: 1;
}

.dropdown-panel {
  position: absolute;
  top: calc(100% - 8px);
  left: -14px;
  display: grid;
  min-width: 190px;
  padding: 8px;
  border: 1px solid var(--line);
  background: var(--paper);
  box-shadow: 0 12px 28px rgba(32, 37, 31, 0.1);
  opacity: 0;
  pointer-events: none;
  transform: translateY(5px);
  transition: opacity 150ms ease, transform 150ms ease;
}

.nav-dropdown:hover .dropdown-panel,
.nav-dropdown:focus-within .dropdown-panel { opacity: 1; pointer-events: auto; transform: translateY(0); }

.dropdown-link { padding: 10px 12px; color: var(--muted); font-size: 13px; }
.dropdown-link:hover { color: var(--forest); background: var(--paper-soft); }

.nav-cta {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0 18px;
  border: 0;
  border-radius: 3px;
  color: white;
  background: var(--forest);
  font-size: 13px;
  font-weight: 700;
  transition: background 160ms ease, color 160ms ease, transform 160ms ease;
  cursor: pointer;
}

.nav-cta:hover { color: white; background: var(--forest-dark); transform: translateY(-1px); }
.menu-toggle { display: none; }

@media (max-width: 900px) {
  .navbar-container { width: min(100% - 40px, 1280px); }
  .nav-links { gap: 18px; }
}

@media (max-width: 680px) {
  .navbar-container { width: calc(100% - 36px); min-height: 67px; }
  .menu-toggle { display: grid; width: 42px; height: 42px; place-content: center; gap: 5px; border: 1px solid var(--line); color: var(--ink); background: transparent; }
  .menu-toggle span { display: block; width: 17px; height: 1.5px; background: currentColor; }
  .nav-links { position: absolute; top: 67px; right: 0; left: 0; display: none; height: auto; align-items: stretch; gap: 0; padding: 10px 18px 18px; border-bottom: 1px solid var(--line); background: var(--paper); }
  .nav-links.is-open { display: grid; }
  .nav-link { min-height: 46px; border-bottom: 1px solid var(--line); }
  .nav-dropdown { display: grid; height: auto; }
  .browse-link { justify-content: space-between; }
  .dropdown-panel { position: static; display: none; min-width: 0; border: 0; box-shadow: none; opacity: 1; pointer-events: auto; transform: none; }
  .nav-dropdown:focus-within .dropdown-panel { display: grid; }
  .dropdown-link { padding-left: 13px; }
  .nav-cta { justify-self: start; margin-top: 13px; }
}
</style>
