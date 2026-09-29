<script setup>
import { ref } from 'vue'

const submitted = ref(false)
const submitMessage = () => {
  submitted.value = true
}
</script>

<template>
  <div class="content-page contact-page">
    <header class="page-intro contact-intro">
      <p class="eyebrow">Say hello</p>
      <h1>Good things start <em>with a note.</em></h1>
      <p>Questions, ideas, or a gathering we should know about? We would love to hear from you.</p>
    </header>
    <div class="contact-layout">
      <aside class="contact-details">
        <div><span class="contact-number">01</span><h2>Write to us</h2><a href="mailto:hello@gatherly.id">hello@gatherly.id</a></div>
        <div><span class="contact-number">02</span><h2>Find us</h2><p>Jakarta, Indonesia<br />Making plans everywhere.</p></div>
        <div><span class="contact-number">03</span><h2>Follow along</h2><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">&nearr;</span></a></div>
      </aside>
      <form class="contact-form" @submit.prevent="submitMessage">
        <p v-if="submitted" class="form-success" role="status">Thanks for reaching out. Your note is ready for our team.</p>
        <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
        <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
        <label>What is on your mind?<textarea name="message" rows="5" placeholder="Tell us a little about it..." required></textarea></label>
        <button class="button button-primary" type="submit">Send your note <span aria-hidden="true">&rarr;</span></button>
      </form>
    </div>
  </div>
</template>