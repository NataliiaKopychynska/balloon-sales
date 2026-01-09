<script setup>
import { cardData } from "@/Atoms/Card/card";
import { computed, onMounted, ref } from "vue";

const props = defineProps({
  selected: Object,
});

const emit = defineEmits(["close"]);
console.log("open", props.selected);

const submitForm = (data) => {
  console.log("submit", data);
  emit("close", false);
};

const form = ref({
  name: "",
  email: "",
  phone: "",
  eventType: null,
  date: "",
  message: "",
});

const eventOptions = computed(() =>
  cardData.map((item) => ({
    id: item.id,
    title: item.title,
  }))
);

onMounted(() => {
  if (props.selected) {
    form.value.eventType = props.selected;
  }
});

const isSelectOpen = ref(false);

const selectOption = (option) => {
  form.value.eventType = option;
  isSelectOpen.value = false;
};
</script>

<template>
  <section class="order-form">
    <div class="modal-content">
      <div class="header-modal">
        <h1>Get In Touch</h1>
        <p>Tell us about your celebration and we'll make it magical! 🎈</p>
        <button @click="emit('close')">X</button>
      </div>
      <form>
        <label class="inp"
          >Your Name *
          <input v-model="form.name" type="text" />
        </label>
        <label class="inp-1"
          >Email *
          <input type="email" v-model="form.email" />
        </label>
        <label class="inp-2"
          >Phone *
          <input type="text" v-model="form.phone" />
        </label>
        <div class="select-wrapper inp-1">
          <label>Event Type *</label>

          <div class="select-trigger" @click="isSelectOpen = !isSelectOpen">
            <span v-if="form.eventType">
              {{ form.eventType.title }}
            </span>
            <span v-else class="placeholder">Choose event type</span>

            <span class="arrow" :class="{ open: isSelectOpen }">⌄</span>
          </div>

          <ul v-if="isSelectOpen" class="select-dropdown">
            <li
              v-for="option in eventOptions"
              :key="option.id"
              @click="selectOption(option)"
            >
              {{ option.title }}
            </li>
          </ul>
        </div>

        <label class="inp-2"
          >Event Date *
          <input type="date" v-model="form.date" />
        </label>
        <label class="inp"
          >Tell us about your celebration *
          <textarea type="text" v-model="form.message"></textarea>
        </label>
        <button @click="submitForm(form)">Send Message</button>
      </form>
      <!-- <p>Selected product: {{ props.selected.title }}</p> -->
    </div>
  </section>
</template>

<style scoped>
.order-form {
  z-index: 1000;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;

  .modal-content {
    background: var(--color-bg);
    border-radius: 16px;
    /* padding: 2rem; */
    max-width: 800px;
    width: 100%;
    position: relative;
    overflow: hidden;

    .header-modal {
      position: relative;
      padding: 20px;
      background: linear-gradient(rgba(72, 42, 155), rgba(237, 83, 152));

      h1 {
        color: var(--color-text-light);
        text-align: start;
      }

      p {
        color: var(--color-text-light);
        text-align: start;
      }

      button {
        position: absolute;
        top: 10px;
        right: 10px;
        height: 42px;
        width: 42px;
        border-radius: 50px;
        background-color: rgba(255, 255, 255, 0.441);
      }
    }

    form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px 16px;

      flex-direction: column;
      padding: 20px;

      /* justify-content: center; */

      .inp {
        grid-column: 1/3;

        textarea {
          padding-top: 12px;
          height: 120px;
        }
      }
      .inp-1 {
        grid-column: 1/2;
      }
      .inp-2 {
        grid-column: 2/3;
      }

      .select-container {
        display: flex;
        flex-direction: column;
        height: 40px;
        border: 1px solid var(--border);
        background-color: var(--input-background);
        border-radius: 12px;
        font-weight: 300;
        font-size: 18px;
        color: var(--color-tex);
      }
    }

    button {
      grid-column: 1/3;

      font-size: 20px;
      height: 56px;
      border-radius: 48px;

      transition: background-color 0.3s ease;

      &:hover {
        transform: scale(1.05);
        box-shadow: var(--box-shadow);
      }
    }
  }
}

.select-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.select-trigger {
  height: 40px;
  padding: 0 14px;
  border: 1px solid var(--border);
  background-color: var(--input-background);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.select-trigger:hover {
  border-color: var(--color-primary);
}

.select-trigger span {
  font-size: 16px;
  color: var(--color-text);
}

.select-trigger .placeholder {
  color: var(--color-text-secondary);
}

.arrow {
  font-size: 14px;
  transition: transform 0.2s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

.select-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;

  background: var(--color-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--box-shadow);

  z-index: 20;
  overflow: hidden;
}

.select-dropdown li {
  padding: 10px 14px;
  cursor: pointer;
  font-size: 15px;
  color: var(--color-text);

  transition: background-color 0.2s ease;
}

.select-dropdown li:hover {
  background-color: var(--color-bg-rose);
}

@media (max-width: 768px) {
  .modal-content {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    /* max-width: 200px; */

    max-width: 90%;

    form {
      padding: 16px;

      .inp {
        grid-column: 1/2;
      }
      .inp-1 {
        grid-column: 1/2;
      }
      .inp-2 {
        grid-column: 1/2;
      }
    }

    button {
      grid-column: 1/2;
    }
  }
}
</style>
