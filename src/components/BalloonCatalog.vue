<script setup>
import Card from "../Atoms/Card/Card.vue";
import { cardData } from "../Atoms/Card/card";
import { tittle } from "@/Atoms/tittle/tittle";
import Tittle from "../Atoms/tittle/Tittle.vue";
</script>

<template>
  <section class="cards">
    <div class="container">
      <Tittle :data="tittle.catalog" />
      <ul>
        <li v-for="item in cardData" :key="item.id">
          <Card :card="item" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.cards {
  display: flex;
  gap: 2rem;
  margin-top: 80px;
  margin-bottom: 80px;
  flex-wrap: wrap;
  justify-content: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>
