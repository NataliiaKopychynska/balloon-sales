<script setup>
import images from "@/assets/images";
import Button from "@/Atoms/Button.vue";
import ArrowRightSvgrepoCom from "@/Atoms/icons/ArrowRightSvgrepoCom.vue";
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
        Creating unforgettable moments <br />for your special days
      </h1>
      <h3>
        Balloons for every celebration — from idea to delivery within 24 hours
      </h3>
      <div class="hero__actions">
        <Button variant="primary" as="button" size="m" href="/catalog"
          ><div class="button-content">
            <h3>Choose Balloons</h3>
            <ArrowRightSvgrepoCom />
          </div>
        </Button>
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
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  justify-content: center;
  align-items: center;
}
.hero__title {
  max-width: 900px;
  text-align: center;
  color: var(--color-text-light);
}

.hero__actions {
  display: flex;
  gap: 1rem;
}

.button-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
