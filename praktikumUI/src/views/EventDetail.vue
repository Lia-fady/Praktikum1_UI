<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { events } from '@/data/events'

const route = useRoute()
const event = computed(() => events.find((item) => item.id === route.params.id))
</script>

<template>
  <article v-if="event" class="event-detail">
    <div class="detail-cover">
      <img :src="event.image" :alt="event.imageAlt" />
      <span class="event-category">{{ event.category }}</span>
    </div>
    <div class="detail-layout">
      <div class="detail-main">
        <p class="eyebrow">{{ event.date }} <span>&middot;</span> {{ event.time }}</p>
        <h1>{{ event.title }}</h1>
        <p class="detail-location">{{ event.venue }}, {{ event.city }}</p>
        <div class="detail-rule"></div>
        <h2>About this gathering</h2>
        <p class="detail-description">{{ event.description }}</p>
        <div class="detail-host"><span class="host-avatar">G</span><div><small>HOSTED WITH GATHERLY</small><strong>Local people, good plans.</strong></div></div>
      </div>
      <aside class="booking-panel">
        <p class="eyebrow">Save your spot</p>
        <p class="booking-price">{{ event.priceLabel }}</p>
        <p class="booking-availability">A few places still open</p>
        <a class="button button-primary booking-button" :href="`mailto:hello@gatherly.id?subject=${encodeURIComponent(`Event enquiry: ${event.title}`)}`">Ask about this event <span aria-hidden="true">&rarr;</span></a>
        <p class="booking-attendees">{{ event.attendees }} people are going</p>
      </aside>
    </div>
  </article>
  <section v-else class="empty-state event-missing">
    <p class="eyebrow">Event not found</p>
    <h1>This plan has wandered off.</h1>
    <RouterLink to="/browse/events" class="button button-primary">Browse all events <span aria-hidden="true">&rarr;</span></RouterLink>
  </section>
</template>
