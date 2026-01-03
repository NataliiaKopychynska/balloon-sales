<script setup>
import AwardSvgrepoCom from "@/Atoms/icons/AwardSvgrepoCom.vue";
import PaletteColorSvgrepoCom from "@/Atoms/icons/PaletteColorSvgrepoCom.vue";
import UsersSvgrepoCom from "@/Atoms/icons/UsersSvgrepoCom.vue";
import { tittle } from "@/Atoms/tittle/tittle.js";
import Tittle from "@/Atoms/tittle/Tittle.vue";
</script>

<template>
  <section class="about">
    <div class="container about-content">
      <Tittle :data="tittle.about" />

      <ul class="cards">
        <li>
          <AwardSvgrepoCom class="icon icon1" />
          <span style="color: var(--color-primary)">5+</span>
          Years of Experience
        </li>
        <li>
          <UsersSvgrepoCom class="icon icon2" /><span
            style="color: var(--color-secondary)"
            >3 000+</span
          >Happy Clients
        </li>
        <li>
          <PaletteColorSvgrepoCom class="icon icon3" /><span
            style="color: var(--color-accent)"
            >100+</span
          >FUnique Designs
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
  background-color: var(--color-bg-rose);
}

.about .cards {
  display: flex;
  gap: 2rem;
  margin-top: 16px;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color: var(--color-bg); */
}
.about .cards li {
  background-color: var(--color-bg);
  box-shadow: var(--box-shadow);
  border-radius: 12px;
  padding: 40px;
  width: 360px;
  height: 240px;
  /* flex: 1 1 200px; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  font-size: 18px;
  color: var(--color-text-secondary);

  span {
    font-size: 32px;
    font-weight: 700;
  }

  .icon {
    width: 64px;
    height: 64px;
    border: none;
    border-radius: 8px;
    padding: 8px;
  }

  .icon1 {
    color: var(--color-primary);
    background-color: var(--color-primary-bg);
  }
  .icon2 {
    color: var(--color-secondary);
    background-color: var(--color-secondary-bg);
  }
  .icon3 {
    padding: 10px 12px;
    color: var(--color-accent);
    background-color: var(--color-accent-bg);
  }
}
</style>
