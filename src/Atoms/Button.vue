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
  if (props.as === "a") {
    return ["button--link", `button--${props.size}`].join(" ");
  }

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
.button--primary {
  background-color: var(--color-primary);
  color: white;
}

.button--secondary {
  background-color: var(--color-secondary);
  color: var(--color-text);
}

.button--link {
  background-color: var(--color-bg);
  color: var(--color-primary);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  letter-spacing: 0.05rem;
  transition: background-color 0.3s ease;
}
.button--link:hover {
  transform: scale(1.05);
  box-shadow: var(--box-shadow);
}

.button--s {
  font-size: 18px;
  height: 42px;
  padding: 0.5rem 1.5rem;
  border-radius: 24px;
}
.button--m {
  font-size: 20px;
  height: 56px;
  padding: 0.5rem 1.5rem;
  border-radius: 48px;
}
</style>
