<template>
  <section class="category-page" aria-labelledby="category-title">
    <header class="category-heading">
      <p class="eyebrow">Find your kind of gathering</p>
      <h2 id="category-title">Explore by Category</h2>
      <p>From live music to new ideas, find an event that feels like you.</p>
    </header>

    <div class="category-grid">
      <RouterLink
        v-for="category in categories"
        :key="category.name"
        :to="{ name: 'events', query: { category: category.eventCategory } }"
        class="category-card"
      >
        <div class="category-image">
          <img :src="category.image" :alt="category.imageAlt" loading="lazy" />
          <span class="category-icon" aria-hidden="true">
            <component :is="category.icon" :size="22" :stroke-width="1.8" />
          </span>
        </div>
        <div class="category-card-content">
          <div>
            <h3>{{ category.name }}</h3>
            <p>{{ category.count }} Events</p>
          </div>
          <ArrowUpRight class="category-arrow" :size="19" :stroke-width="1.8" aria-hidden="true" />
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ArrowUpRight, BriefcaseBusiness, Cpu, HeartPulse, Music2, Palette, Utensils } from '@lucide/vue'

const categories = [
  {
    name: 'Music & Concerts',
    eventCategory: 'Music',
    count: 24,
    icon: Music2,
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Crowd gathered at a live outdoor concert',
  },
  {
    name: 'Technology',
    eventCategory: 'Technology',
    count: 18,
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Close-up of a circuit board and electronic components',
  },
  {
    name: 'Art & Design',
    eventCategory: 'Arts',
    count: 12,
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Colorful contemporary art installation',
  },
  {
    name: 'Business',
    eventCategory: 'Business',
    count: 30,
    icon: BriefcaseBusiness,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Colleagues collaborating around a table',
  },
  {
    name: 'Health & Wellness',
    eventCategory: 'Wellness',
    count: 15,
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Person practicing a calming yoga stretch',
  },
  {
    name: 'Food & Drink',
    eventCategory: 'Food',
    count: 22,
    icon: Utensils,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Warmly lit restaurant ready for dinner guests',
  },
]
</script>

<style scoped>
.category-page {
  width: min(100%, 1040px);
  margin: 0 auto;
  padding: 44px 0 70px;
}

.category-heading { margin-bottom: 28px; }
.category-heading h2 { margin-top: 8px; font-family: var(--serif); font-size: 38px; line-height: 1.12; }
.category-heading > p:last-child { max-width: 480px; margin-top: 9px; color: var(--muted); font-size: 14px; }

.category-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }

.category-card {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 6px;
  color: var(--ink);
  background: var(--paper);
  box-shadow: 0 3px 12px rgba(32, 37, 31, 0.045);
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.category-card:hover {
  border-color: #aab9aa;
  box-shadow: 0 12px 24px rgba(32, 37, 31, 0.1);
  transform: translateY(-3px);
}

.category-card:focus-visible { outline: 3px solid var(--coral); outline-offset: 3px; }

.category-image { position: relative; aspect-ratio: 1.75; overflow: hidden; background: var(--paper-soft); }
.category-image::after { position: absolute; inset: 45% 0 0; background: linear-gradient(transparent, rgba(25, 56, 45, 0.2)); content: ''; pointer-events: none; }
.category-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 350ms ease; }
.category-card:hover .category-image img { transform: scale(1.045); }

.category-icon {
  position: absolute;
  z-index: 1;
  top: 12px;
  left: 12px;
  display: grid;
  width: 40px;
  aspect-ratio: 1;
  place-items: center;
  border: 1px solid rgba(229, 231, 223, 0.8);
  border-radius: 4px;
  color: var(--forest);
  background: rgba(255, 254, 250, 0.94);
}

.category-card-content { display: flex; min-height: 82px; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 16px; }
.category-card h3 { overflow-wrap: anywhere; font-family: var(--serif); font-size: 20px; line-height: 1.2; }
.category-card-content p { margin-top: 5px; color: var(--muted); font-size: 12px; }
.category-arrow { flex: 0 0 auto; color: var(--forest); transition: transform 180ms ease; }
.category-card:hover .category-arrow { transform: translate(2px, -2px); }

@media (max-width: 900px) {
  .category-page { padding-top: 34px; }
  .category-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
}

@media (max-width: 440px) {
  .category-page { padding: 28px 0 48px; }
  .category-heading { margin-bottom: 20px; }
  .category-heading h2 { font-size: 32px; }
  .category-grid { grid-template-columns: 1fr; gap: 14px; }
  .category-image { aspect-ratio: 1.9; }
}
</style>