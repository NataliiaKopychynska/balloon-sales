<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary", // primary | secondary | link
  },
  size: {
    type: String,
    default: "m", // s | m
  },
  as: {
    type: String,
    default: "button", // button | a
  },
  href: {
    type: String,
    default: "",
  },
});

const classes = computed(() => {
  return [`button--${props.variant}`, `button--${props.size}`].join(" ");
});
</script>

<template>
  <component
    :is="props.as"
    :href="props.as === 'a' ? props.href : undefined"
    :class="classes"
  >
    <slot />
  </component>
</template>

<style scoped>
.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  opacity: 0.85;
}

.btn-secondary {
  background-color: var(--color-secondary);
  color: var(--color-text);
}

.button--link {
  background-color: transparent;
  color: var(--color-primary);
  padding: 0;
  border-radius: 0;
}
.button--link:hover {
  text-decoration: underline;
}

.button--s {
  font-size: 16px;
  padding: 0.25rem 0.5rem;
}
.button--m {
  font-size: 20px;

  height: 48px;
  padding: 0.5rem 1rem;
}
</style>
