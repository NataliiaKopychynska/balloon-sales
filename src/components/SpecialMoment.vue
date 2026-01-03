<script setup>
import images from "@/assets/images";
</script>

<template>
  <section
    class="special-moment"
    :style="{
      backgroundImage: `linear-gradient(
      rgba(72, 42, 155, 0.7),
      rgba(237, 83, 152, 0.7)
    ), url(${images.helium})`,
    }"
  >
    <div class="container sm-container">
      <h1>Every Moment is Special</h1>
      <h3>
        Imagine balloons floating up, revealing a message or a gift. These are
        the moments that stay in your heart forever. Let us help you create
        memories that will be cherished for a lifetime.
      </h3>
    </div>
  </section>
</template>

<style scoped>
.special-moment {
  min-height: 30vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background: #482a9b; */
  /* background: ; */
}
.sm-container {
  padding-top: 60px;
  padding-bottom: 60px;
  color: var(--color-text-light);

  gap: 24px;
}
</style>
