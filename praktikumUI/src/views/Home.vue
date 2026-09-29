<script setup>
import EventCard from '@/components/app/EventCard.vue'
import { categories, events } from '@/data/events'

const featuredEvents = events.slice(0, 3)
</script>

<template>
  <div class="home-page">
    <section class="home-hero">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-dot"></span> Jakarta, and everywhere nearby</p>
        <h1>Make room for <em>something</em> memorable.</h1>
        <p class="hero-description">Find the little moments, new favorites, and good people waiting just around the corner.</p>
        <div class="hero-actions">
          <RouterLink to="/browse/events" class="button button-primary">Explore events <span aria-hidden="true">&rarr;</span></RouterLink>
          <RouterLink to="/about" class="text-link">Meet Gatherly</RouterLink>
        </div>
        <div class="hero-social-proof">
          <div class="avatar-stack" aria-hidden="true"><span>R</span><span>A</span><span>N</span><span>+</span></div>
          <p><strong>1,200+</strong> people found their next plan this month</p>
        </div>
      </div>
      <div class="hero-visual">
        <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=90" alt="A crowd gathered for an outdoor concert at sunset" />
        <div class="hero-image-caption"><span>THIS WEEKEND</span><strong>The Sundown Sessions</strong><small>Jakarta &middot; Sat, Oct 17</small></div>
        <span class="hero-stamp" aria-hidden="true">GO<br />OUT</span>
      </div>
    </section>

    <section class="home-section category-section">
      <div class="section-heading">
        <div><p class="eyebrow">Pick a mood</p><h2>What sounds like you?</h2></div>
        <RouterLink to="/browse/category" class="text-link">All categories <span aria-hidden="true">&rarr;</span></RouterLink>
      </div>
      <div class="category-grid">
        <RouterLink v-for="category in categories" :key="category.slug" :to="{ name: 'category', query: { category: category.slug } }" class="category-tile">
          <img :src="category.image" :alt="`${category.name} events`" loading="lazy" />
          <span class="category-overlay"></span>
          <span class="category-name">{{ category.name }}<span aria-hidden="true">&rarr;</span></span>
        </RouterLink>
      </div>
    </section>

    <section class="home-section featured-section">
      <div class="section-heading">
        <div><p class="eyebrow">A few good plans</p><h2>Worth leaving home for.</h2></div>
        <RouterLink to="/browse/events" class="text-link">See all events <span aria-hidden="true">&rarr;</span></RouterLink>
      </div>
      <div class="event-grid">
        <EventCard v-for="event in featuredEvents" :key="event.id" :event="event" />
      </div>
    </section>

    <section class="home-note">
      <p class="eyebrow">The good stuff happens together</p>
      <h2>One small yes can turn into <em>a story you'll keep.</em></h2>
      <RouterLink to="/browse/events" class="button button-light">Make a plan <span aria-hidden="true">&rarr;</span></RouterLink>
      <div class="note-decoration" aria-hidden="true">G.</div>
    </section>
  </div>
</template>

<style scoped>
.home-hero { display: grid; min-height: 550px; grid-template-columns: 0.92fr 1.08fr; align-items: center; gap: 54px; padding: 34px 0 70px; }
.hero-copy { padding: 20px 0; }
.hero-copy > .eyebrow { display: flex; align-items: center; gap: 9px; }
.eyebrow-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--coral); }
.hero-copy h1 { max-width: 650px; margin-top: 21px; font-family: var(--serif); font-size: 68px; line-height: 0.99; }
.hero-copy h1 em { color: var(--coral); font-weight: 400; }
.hero-description { max-width: 430px; margin-top: 22px; color: var(--muted); font-size: 16px; line-height: 1.7; }
.hero-actions { display: flex; align-items: center; gap: 25px; margin-top: 27px; }
.hero-social-proof { display: flex; align-items: center; gap: 14px; margin-top: 37px; }
.avatar-stack { display: flex; padding-left: 4px; }
.avatar-stack span { display: grid; width: 29px; height: 29px; place-items: center; margin-left: -4px; border: 2px solid var(--paper); border-radius: 50%; color: var(--forest-dark); background: var(--lime); font-size: 10px; font-weight: 700; }
.avatar-stack span:nth-child(2) { background: #f4b6a5; }
.avatar-stack span:nth-child(3) { background: #c7d7c0; }
.avatar-stack span:nth-child(4) { color: white; background: var(--forest); }
.hero-social-proof p { max-width: 210px; color: var(--muted); font-size: 11px; line-height: 1.45; }
.hero-social-proof strong { color: var(--ink); }

.hero-visual { position: relative; min-height: 475px; align-self: stretch; overflow: visible; }
.hero-visual > img { width: 100%; height: 100%; min-height: 475px; object-fit: cover; }
.hero-image-caption { position: absolute; right: 18px; bottom: 18px; display: grid; min-width: 220px; gap: 4px; padding: 17px 20px; color: white; background: var(--forest); }
.hero-image-caption span,
.hero-image-caption small { color: #d2dec9; font-size: 10px; }
.hero-image-caption span { letter-spacing: 0.1em; }
.hero-image-caption strong { font-family: var(--serif); font-size: 20px; font-weight: 400; }
.hero-stamp { position: absolute; top: 31px; left: -27px; display: grid; width: 70px; aspect-ratio: 1; place-content: center; border-radius: 50%; color: var(--forest-dark); background: var(--lime); font-family: var(--serif); font-size: 16px; line-height: 1; text-align: center; transform: rotate(-11deg); }

.home-section { padding: 52px 0 65px; }
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 24px; }
.section-heading h2 { margin-top: 7px; font-family: var(--serif); font-size: 36px; line-height: 1.1; }
.category-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; }
.category-tile { position: relative; display: block; aspect-ratio: 0.95; overflow: hidden; color: white; background: var(--forest); }
.category-tile img { width: 100%; height: 100%; object-fit: cover; transition: transform 350ms ease; }
.category-tile:hover img { transform: scale(1.04); }
.category-overlay { position: absolute; inset: 35% 0 0; background: linear-gradient(transparent, rgba(16, 28, 22, 0.72)); }
.category-name { position: absolute; right: 18px; bottom: 16px; left: 18px; display: flex; align-items: center; justify-content: space-between; font-family: var(--serif); font-size: 27px; }
.category-name span { font-family: 'DM Sans', sans-serif; font-size: 17px; }

.home-note { position: relative; display: grid; min-height: 280px; justify-items: center; align-content: center; margin-top: 34px; overflow: hidden; color: white; background: var(--forest); text-align: center; }
.home-note .eyebrow { color: var(--lime); }
.home-note h2 { max-width: 620px; margin: 9px 20px 20px; font-family: var(--serif); font-size: 43px; line-height: 1.08; }
.home-note h2 em { color: var(--lime); }
.button-light { color: var(--forest-dark); background: var(--lime); }
.button-light:hover { color: var(--forest-dark); background: white; }
.note-decoration { position: absolute; right: 4%; bottom: -75px; color: rgba(255, 255, 255, 0.06); font-family: var(--serif); font-size: 260px; line-height: 1; pointer-events: none; }

@media (max-width: 900px) {
  .home-hero { min-height: 480px; grid-template-columns: 0.95fr 1.05fr; gap: 28px; }
  .hero-visual,
  .hero-visual > img { min-height: 410px; }
  .hero-copy h1 { font-size: 56px; }
}

@media (max-width: 680px) {
  .home-hero { grid-template-columns: 1fr; gap: 26px; padding: 22px 0 38px; }
  .hero-copy { padding: 10px 0 0; }
  .hero-copy h1 { max-width: 490px; margin-top: 16px; font-size: 47px; }
  .hero-description { margin-top: 15px; font-size: 14px; }
  .hero-social-proof { margin-top: 22px; }
  .hero-visual,
  .hero-visual > img { min-height: 330px; }
  .hero-stamp { left: 12px; width: 58px; }
  .hero-image-caption { right: 10px; bottom: 10px; min-width: 190px; padding: 12px 14px; }
  .home-section { padding: 37px 0; }
  .section-heading { align-items: start; }
  .section-heading h2 { font-size: 30px; }
  .section-heading > .text-link { margin-top: 23px; white-space: nowrap; font-size: 11px; }
  .category-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
  .category-tile { aspect-ratio: 1.05; }
  .category-name { right: 12px; bottom: 12px; left: 12px; font-size: 22px; }
  .home-note { min-height: 265px; margin-top: 10px; }
  .home-note h2 { font-size: 35px; }
}
</style>
