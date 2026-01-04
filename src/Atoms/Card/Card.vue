<script setup>
import Button from "../Button.vue";
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});

const orderForm = defineEmits(["order"]);

const orderNow = () => {
  orderForm("order", props.card);
};
</script>
<template>
  <div class="card-container">
    <div class="img-container"><img :src="card.img" /></div>
    <div class="content-container">
      <h3>{{ card.title }}</h3>
      <p>{{ card.subTitle }}</p>
      <div>
        <p>{{ card.price }}</p>
        <Button @click="orderNow" as="button" variant="primary" size="s"
          >Order Now</Button
        >
      </div>
    </div>
    <div class="svg-container">
      <component :is="card.icon" />
    </div>
  </div>
</template>
<style>
.card-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 460px;
  box-shadow: var(--box-shadow);
  background: var(--color-bg);
  transition: transform 0.3s ease;
  border-radius: 12px;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
  }
}
.img-container {
  width: 100%;
  height: 260px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.content-container {
  padding: 20px 32px;

  h3 {
    color: var(--color-text);
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 8px;
    text-align: start;
  }
  p {
    text-align: start;
    line-height: 125%;
  }
  div {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;

    p {
      color: var(--color-primary);
      font-weight: 600;
      font-size: 28px;
      margin-bottom: 8px;
    }
  }
}

.svg-container {
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 999;
  padding: 16px;
  padding-bottom: 8px;
  border-radius: 50px;
  background-color: #ffffffba;

  svg {
    width: 24px;
    height: 24px;
    stroke: var(--color-primary);
    /* fill: var(--color-primary); */
  }
}
</style>
