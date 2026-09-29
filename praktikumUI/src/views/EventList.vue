<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import EventCard from '@/components/app/EventCard.vue'
import { categories, events } from '@/data/events'

const route = useRoute()
const search = ref('')
const activeCategory = computed(() => route.query.category || '')
const filteredEvents = computed(() => events.filter((event) => {
  const matchesCategory = !activeCategory.value || event.category === activeCategory.value
  const term = search.value.trim().toLowerCase()
  const matchesSearch = !term || `${event.title} ${event.venue} ${event.city} ${event.category}`.toLowerCase().includes(term)
  return matchesCategory && matchesSearch
}))
</script>

<template>
  <section class="listing-section">
    <div class="listing-toolbar">
      <label class="search-field">
        <span class="search-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Search events</span>
        <input v-model="search" type="search" placeholder="Search events, places, or cities" />
      </label>
      <div class="filter-list" aria-label="Filter by category">
        <RouterLink :to="{ name: 'events' }" class="filter-chip" :class="{ selected: !activeCategory }">All events</RouterLink>
        <RouterLink v-for="category in categories" :key="category.slug" :to="{ name: 'events', query: { category: category.slug } }" class="filter-chip" :class="{ selected: activeCategory === category.slug }">{{ category.name }}</RouterLink>
      </div>
    </div>
    <div v-if="filteredEvents.length" class="event-grid">
      <EventCard v-for="event in filteredEvents" :key="event.id" :event="event" />
    </div>
    <div v-else class="empty-state">
      <p class="eyebrow">Nothing on the calendar yet</p>
      <h2>No events match that search.</h2>
      <p>Try a different name, place, or category.</p>
      <button type="button" class="button button-primary" @click="search = ''">Clear search</button>
    </div>
  </section>
</template>