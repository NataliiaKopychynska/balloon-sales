<script setup lang="ts">
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import BalloonCatalog from "./components/BalloonCatalog.vue";
import SpecialMoment from "./components/SpecialMoment.vue";
import Delivery from "./components/Delivery.vue";
import Reviews from "./components/Reviews.vue";
import CTA from "./components/CTA.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
import ModalForm from "./components/ModalForm.vue";

const isModalOpen = ref(false);
const selectedOption = ref(null);

const openModal = (item) => {
  if (item) {
    selectedOption.value = item;
  } else {
    selectedOption.value = "birthday";
  }
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <Header />
  <Hero />
  <About />
  <BalloonCatalog @order="openModal" />
  <SpecialMoment />
  <Delivery />
  <Reviews />
  <CTA />
  <Footer />

  <ModalForm
    v-if="isModalOpen"
    :selected="selectedOption"
    @close="closeModal"
  />
</template>
