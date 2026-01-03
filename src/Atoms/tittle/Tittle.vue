<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <h2>{{ data.tittle }}</h2>
  <p class="sup-title">
    {{ data.supTittle }}
  </p>
</template>
<style>
.sup-title {
  width: 68%;
  margin-bottom: 24px;
}
</style>
