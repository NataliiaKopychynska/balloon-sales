<script setup>
import images from "@/assets/images";
import Button from "@/Atoms/Button.vue";
import ArrowRightSvgrepoCom from "@/Atoms/icons/ArrowRightSvgrepoCom.vue";
</script>

<template>
  <section class="CTA">
    <div class="CTA__content">
      <h1 class="CTA__title">Make Your Celebration Brighter Today</h1>
      <h3>
        Join thousands of satisfied customers who trust BalloonJoy for their
        special moments
      </h3>

      <Button variant="link" as="button" size="m" href="/catalog"
        ><div class="button-content">
          <h3>Order Balloons Now</h3>
          <ArrowRightSvgrepoCom />
        </div>
      </Button>
    </div>
  </section>
</template>

<style scoped>
.CTA {
  /* margin-top: 60px; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background: linear-gradient(rgba(72, 42, 155), rgba(237, 83, 152));
  height: 30vh;
}
.CTA__content {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}
.CTA__title {
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

  h3 {
    color: var(--color-text);
    font-weight: 500;
  }

  svg {
    color: var(--color-text);
  }
}
</style>
