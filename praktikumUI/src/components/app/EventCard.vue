<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="event-card">
    <RouterLink :to="`/browse/events/${event.id}`" class="event-image-link" :aria-label="`View ${event.title}`">
      <img class="event-image" :src="event.image" :alt="event.imageAlt" loading="lazy" />
      <span class="event-category">{{ event.category }}</span>
      <span class="event-save" aria-hidden="true">+</span>
    </RouterLink>
    <div class="event-card-body">
      <p class="event-date">{{ event.dateShort }} <span>&middot;</span> {{ event.time }}</p>
      <h3><RouterLink :to="`/browse/events/${event.id}`">{{ event.title }}</RouterLink></h3>
      <p class="event-location">{{ event.venue }}, {{ event.city }}</p>
      <div class="event-card-foot">
        <span class="event-price">{{ event.priceLabel }}</span>
        <span class="event-attendees">{{ event.attendees }} going</span>
      </div>
    </div>
  </article>
</template>