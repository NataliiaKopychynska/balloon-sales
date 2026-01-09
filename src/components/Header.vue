<!-- <script setup>
import Button from "@/Atoms/Button.vue";
import { ref, watch } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

watch(isMenuOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>

<template>
  <header>
    <div>
      <div class="logo-container">
        <img class="logo" src="/src/assets/logo.svg" alt="Logo" />
        <h1 class="logo-text">BalloonJoy</h1>
      </div>
      <nav>
        <ul class="nav-list">
          <li><a href="#catalog ">Catalog</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#delivery">Delivery</a></li>
          <li><a href="#reviews">Reviews</a></li>
        </ul>
      </nav>

      <Button variant="primary" as="button" size="s" href="/contact"
        >Contact Us</Button
      >
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;

  top: 0;
  left: 0;
  width: 100%;

  padding: 1rem 2rem;
  background-color: var(--color-bg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

header > div {
  max-width: 1200px;
  display: flex;
  align-items: center;
  gap: 120px;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  align-items: center;
  /* gap: 10px; */
}
.logo {
  width: 40px;
  height: 40px;
}
.logo-text {
  font-family: var(--font-heading);
  font-size: 24px;
  color: var(--color-text);
  letter-spacing: 0.05rem;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}
.nav-list li a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  font-size: 16px;
}
@media screen and (max-width: 768px) {
  header div {
    flex-direction: column;
  }
}
</style> -->

<script setup>
import { ref, watch } from "vue";
import Button from "@/Atoms/Button.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo-container">
        <img class="logo" src="/src/assets/logo.svg" alt="Logo" />
        <h1 class="logo-text">BalloonJoy</h1>
      </div>

      <nav class="nav desktop">
        <ul class="nav-list">
          <li><a href="#catalog">Catalog</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#delivery">Delivery</a></li>
          <li><a href="#reviews">Reviews</a></li>
        </ul>
      </nav>

      <Button class="desktop" variant="primary" size="s"> Contact Us </Button>

      <button class="burger" @click="toggleMenu">
        <img
          v-if="!isMenuOpen"
          src="@/assets/images/burger-menu-svgrepo-com.svg"
          alt="Open menu"
        />
      </button>
    </div>

    <div v-if="isMenuOpen" class="mobile-menu">
      <button class="btn-close" @click="toggleMenu">
        <img
          v-if="!isMenuOpen"
          src="@/assets/images/burger-menu-svgrepo-com.svg"
          alt="Open menu"
        />
        <p v-else>x</p>
      </button>
      <nav>
        <ul>
          <li><a @click="toggleMenu" href="#catalog">Catalog</a></li>
          <li><a @click="toggleMenu" href="#about">About Us</a></li>
          <li><a @click="toggleMenu" href="#delivery">Delivery</a></li>
          <li><a @click="toggleMenu" href="#reviews">Reviews</a></li>
        </ul>

        <Button variant="primary" size="m" @click="toggleMenu">
          Contact Us
        </Button>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  background: var(--color-bg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.logo-container {
  display: flex;
  align-items: center;
  /* gap: 10px; */
}
.logo {
  width: 40px;
  height: 40px;
}
.logo-text {
  font-family: var(--font-heading);
  font-size: 24px;
  color: var(--color-text);
  letter-spacing: 0.05rem;
}
.nav-list {
  display: flex;
  gap: 24px;
  list-style: none;
}
.burger {
  display: none;
  background-color: var(--color-primary-bg);
  border-radius: 40px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
  }
}

.mobile-menu {
  position: fixed;
  inset: 0;
  background: var(--color-bg);
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  ul {
    list-style: none;
    text-align: center;
    margin-bottom: 32px;

    li {
      margin: 16px 0;
      font-size: 20px;
    }
  }

  .btn-close {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 42px;
    width: 42px;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.441);

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: var(--color-bg-rose);
    }

    p {
      font-size: 24px;
      color: var(--color-text);
      margin: 0;
    }
  }
}
/* .burger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
} */
@media (max-width: 768px) {
  .desktop {
    display: none;
  }
  .burger {
    display: flex;
  }
}
</style>
