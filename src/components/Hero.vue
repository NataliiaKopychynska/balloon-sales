<script setup>
import images from "@/assets/images";
import Button from "@/Atoms/Button.vue";
</script>

<template>
  <section
    class="hero"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${images.hero})`,
    }"
  >
    <div class="hero__content">
      <h1 class="hero__title">
        Creating unforgettable moments<strong>for your special days</strong>
      </h1>
      <p class="hero__subtitle">
        Balloons for every celebration — from idea to delivery within 24 hours
      </p>
      <div class="hero__actions">
        <Button variant="primary" as="button" size="m" href="/catalog"
          >Choose Balloons</Button
        >
        <Button variant="link" as="button" size="m" href="/contact"
          >Contact Us</Button
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-size: cover;
  background-position: center;

  height: 90vh;
}
.hero__content {
  /* max-width: 800px; */
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  justify-content: center;
  align-items: center;

  /* background-color: rgba(255, 255, 255, 0.8); */
  /* box-shadow: var(--box-shadow); */
}
.hero__title {
  max-width: 900px;
  font-family: var(--font-heading);
  font-size: 3rem;
  /* margin-bottom: 1rem; */
  text-align: center;
  color: var(--color-text-light);
}
.hero__subtitle {
  font-size: 1.25rem;
  color: var(--color-text-light-secondary);
}

.hero__actions {
  display: flex;
  gap: 1rem;
}
</style>
