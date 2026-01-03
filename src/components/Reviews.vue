<script setup>
import ClockTwoThirtySvgrepoCom from "@/Atoms/icons/ClockTwoThirtySvgrepoCom.vue";
import GiftAltSvgrepoCom from "@/Atoms/icons/GiftAltSvgrepoCom.vue";
import MapPointSvgrepoCom from "@/Atoms/icons/MapPointSvgrepoCom.vue";
import StarSvgrepoCom from "@/Atoms/icons/StarSvgrepoCom.vue";
import TruckSpeedSvgrepoCom from "@/Atoms/icons/TruckSpeedSvgrepoCom.vue";
import UsersSvgrepoCom from "@/Atoms/icons/UsersSvgrepoCom.vue";
import { tittle } from "@/Atoms/tittle/tittle.js";
import Tittle from "@/Atoms/tittle/Tittle.vue";

const content = [
  {
    title:
      "We ordered balloons for our daughter's birthday — everything looked absolutely amazing! The team was professional and the delivery was right on time.",
    name: "Sarah Johnson",
  },
  {
    title:
      "The wedding balloon decorations exceeded our expectations. Beautiful, elegant, and perfectly matched our theme. Highly recommend!",
    name: "Michael Chen",
  },
  {
    title:
      "Best balloon service in town! Creative designs, great prices, and fantastic customer service. They made our corporate event truly special.",
    name: "Sarah Johnson",
  },
];
</script>

<template>
  <section id="reviews">
    <div class="container reviews-content">
      <Tittle :data="tittle.reviews" />

      <ul class="cards">
        <li v-for="item in content">
          <div class="stars"><StarSvgrepoCom v-for="n in 5" /></div>
          <blockquote>{{ item.title }}</blockquote>
          <div class="customer">
            <UsersSvgrepoCom />
            <h4>{{ item.name }}</h4>
            <p>Verified Customer</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
#reviews {
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
}

#reviews .cards {
  display: flex;
  gap: 2rem;
  margin-top: 16px;
  flex-wrap: wrap;
  justify-content: center;
}
#reviews .cards li {
  background-color: var(--color-bg);
  box-shadow: var(--box-shadow);
  border-radius: 12px;
  padding: 28px 20px;
  width: 360px;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* gap: 2px; */
  color: var(--color-text-secondary);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  .stars {
    display: flex;
    flex-direction: row;
    svg {
      fill: var(--color-secondary);
    }
  }

  .customer {
    display: grid;
    grid-template-columns: 60px;
    grid-template-rows: 1rm 1rm;
    gap: 0 16px;

    svg {
      grid-column: 1/2;
      grid-row: 1/3;

      width: 60px;
      height: 60px;
      padding: 12px;
      background-color: var(--border);
      border-radius: 100%;
    }

    h4 {
      text-align: start;
      grid-column: 2/3;
      grid-row: 1/2;
      font-size: 18px;
      height: 20px;
    }
    p {
      text-align: start;
      font-size: 16px;
    }
  }
}
</style>
