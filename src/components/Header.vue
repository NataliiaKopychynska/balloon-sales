<script setup>
import Button from "@/Atoms/Button.vue";
</script>

<template>
  <header>
    <div>
      <div>
        <img class="logo" src="/src/assets/logo.svg" alt="Logo" />
        <h1 class="logo-text">BalloonJoy</h1>
      </div>
      <nav>
        <ul class="nav-list">
          <li><a href="/catalog">Catalog</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/delivery">Delivery</a></li>
          <li><a href="/reviews">Reviews</a></li>
        </ul>
      </nav>

      <Button variant="primary" as="button" href="/contact">Contact Us</Button>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  padding: 1rem 2rem;
  background-color: var(--color-bg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

header div {
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 40px;
  height: 40px;
}
.logo-text {
  font-family: var(--font-heading);
  font-size: 1.5rem;
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
</style>
