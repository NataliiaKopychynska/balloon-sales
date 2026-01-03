<script setup>
import ClockTwoThirtySvgrepoCom from "@/Atoms/icons/ClockTwoThirtySvgrepoCom.vue";
import GiftAltSvgrepoCom from "@/Atoms/icons/GiftAltSvgrepoCom.vue";
import MapPointSvgrepoCom from "@/Atoms/icons/MapPointSvgrepoCom.vue";
import TruckSpeedSvgrepoCom from "@/Atoms/icons/TruckSpeedSvgrepoCom.vue";
import { tittle } from "@/Atoms/tittle/tittle.js";
import Tittle from "@/Atoms/tittle/Tittle.vue";
</script>

<template>
  <section class="delivery">
    <div class="container delivery-content">
      <Tittle :data="tittle.delivery" />

      <ul class="cards">
        <li>
          <TruckSpeedSvgrepoCom class="icon icon1" />
          <span style="color: var(--color-primary)">City Delivery</span>
          Fast delivery within 24 hours across the city
        </li>
        <li>
          <ClockTwoThirtySvgrepoCom class="icon icon2" /><span
            style="color: var(--color-secondary)"
            >Express Orders</span
          >Rush delivery available from 3 hours
        </li>
        <li>
          <GiftAltSvgrepoCom class="icon icon3" /><span
            style="color: var(--color-accent)"
            >Secure Packaging</span
          >Elegant and protective packaging for all orders
        </li>
        <li>
          <MapPointSvgrepoCom class="icon icon4" />
          <span style="color: var(--color-primary)">Self Pickup</span>
          Pick up your order at our store location
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.delivery {
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
}

.delivery .cards {
  display: flex;
  gap: 2rem;
  margin-top: 16px;
  flex-wrap: wrap;
  justify-content: center;
}
.delivery .cards li {
  background-color: var(--color-bg);
  box-shadow: var(--box-shadow);
  border-radius: 12px;
  padding: 28px 20px;
  width: 260px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--color-text-secondary);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  span {
    color: var(--color-text-secondary) !important;
    font-size: 20px;
    font-weight: 600;
  }

  .icon {
    width: 64px;
    height: 48px;
    border: none;
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 8px;
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
    padding: 10px 6px;
    color: var(--color-accent);
    background-color: var(--color-accent-bg);
  }
  .icon4 {
    padding: 10px 6px;
    fill: var(--color-primary);
    background-color: var(--color-primary-bg);
  }
}
</style>
