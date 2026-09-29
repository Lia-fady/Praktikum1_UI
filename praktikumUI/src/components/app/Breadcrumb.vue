<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => {
  const crumbs = route.matched
    .filter((record) => record.meta.breadcrumb)
    .map((record) => ({
      label: record.meta.breadcrumb,
      to: record.name === 'event-detail' ? route.fullPath : record.path,
    }))

  if (route.name === 'event-detail') {
    crumbs.splice(crumbs.length - 1, 0, { label: 'Event List', to: '/browse/events' })
  }

  if (crumbs[0]?.label !== 'Home') {
    crumbs.unshift({ label: 'Home', to: '/' })
  }

  return crumbs
})
</script>

<template>
  <nav v-if="breadcrumbs.length > 1" class="breadcrumb" aria-label="Breadcrumb">
    <ol>
      <li v-for="(crumb, index) in breadcrumbs" :key="`${crumb.label}-${index}`">
        <span v-if="index > 0" class="breadcrumb-separator" aria-hidden="true">/</span>
        <RouterLink v-if="index < breadcrumbs.length - 1" :to="crumb.to">{{ crumb.label }}</RouterLink>
        <span v-else class="breadcrumb-current" aria-current="page">{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb { padding: 18px 0 4px; }
.breadcrumb ol { display: flex; flex-wrap: wrap; gap: 9px; padding: 0; list-style: none; }
.breadcrumb li { display: inline-flex; align-items: center; gap: 9px; color: #93988d; font-size: 12px; }
.breadcrumb a:hover,
.breadcrumb-current { color: var(--forest); }

@media (max-width: 680px) {
  .breadcrumb { padding-top: 12px; }
}
</style>