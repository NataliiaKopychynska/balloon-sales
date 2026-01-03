<script setup></script>

<template>
  <footer>
    <div class="container footer-container">
      <div class="logo-title">
        <div class="logo-container">
          <img class="logo" src="/src/assets/logo.svg" alt="Logo" />
          <h1 class="logo-text">BalloonJoy</h1>
        </div>
        <p>
          Creating unforgettable moments with beautiful balloon decorations
          since 2020.
        </p>
      </div>
      <nav>
        <h3>Quick Links</h3>
        <a href=""> Catalog </a>
        <a href="">About Us</a>
        <a href="">Delivery</a>
        <a href="">Reviews</a>
      </nav>
      <div class="contact-container">
        <h3>Contact Us</h3>
        <p>(555) 123-4567</p>
        <p>hello@balloonjoy.com</p>
        <p>123 Celebration St, City</p>
      </div>
      <div class="line"></div>
      <div class="copyright">
        <p>© 2025 BalloonJoy. All rights reserved.</p>
        <div>
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 60px 0;
  background-color: var(--color-bg-dark);
  color: var(--color-text-light);

  .footer-container {
    margin-top: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(1fr, 1fr, 1fr));
    gap: 2rem;
    /* padding: 3rem 2rem; */
  }

  .logo-title {
    grid-column: 1/2;
    grid-row: 1/2;

    p {
      width: 240px;
      font-size: 14px;
      text-align: start;
      padding-left: 8px;
      margin-top: 16px;
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
      color: var(--color-text-ligh);
      letter-spacing: 0.05rem;
    }
  }

  nav {
    grid-column: 2/3;
    grid-row: 1/2;

    display: flex;
    flex-direction: column;
    gap: 4px;

    a {
      font-size: 16px;
      text-align: center;
      font-weight: 200;
      color: var(--color-text-secondary);

      &:hover {
        color: var(--color-primary);
      }
    }
  }

  .contact-container {
    grid-column: 3/4;
    grid-row: 1/2;

    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .line {
    grid-column: 1/4;
    grid-row: 2/3;

    width: 1200px;
    height: 2px;
    background-color: var(--color-text-secondary);
  }

  .copyright {
    grid-column: 1/4;
    grid-row: 3/4;

    display: flex;
    justify-content: space-between;

    a {
      font-size: 16px;
      text-align: center;
      font-weight: 200;
      color: var(--color-text-secondary);
      padding-left: 16px;

      &:hover {
        color: var(--color-primary);
      }
    }
  }
}
</style>
