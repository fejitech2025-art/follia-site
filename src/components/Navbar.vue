<template>
  <header class="navbar">
    <div class="navbar-inner">
      <RouterLink to="/" class="brand" @click="closeMenu">
        <img
          src="../assets/logo.png"
          alt="Follia"
          class="brand-logo"
        />

        <span class="brand-name">Follia</span>
      </RouterLink>

      <nav class="desktop-nav">
        <RouterLink to="/" exact-active-class="active">
          Home
        </RouterLink>

        <RouterLink
          to="/#products"
          class="products-nav-link"
        >
          Products
        </RouterLink>

        <RouterLink to="/about" active-class="active">
          About
        </RouterLink>
      </nav>

      <div class="navbar-actions">
        <RouterLink
          to="/#products"
          class="products-button"
        >
          Explore products
        </RouterLink>

        <button
          class="menu-button"
          aria-label="Open navigation"
          :aria-expanded="mobileMenuOpen"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <div v-if="mobileMenuOpen" class="mobile-menu">
      <RouterLink
        to="/"
        exact-active-class="active"
        @click="closeMenu"
      >
        Home
      </RouterLink>

      <RouterLink
        to="/#products"
        @click="closeMenu"
      >
        Products
      </RouterLink>

      <RouterLink
        to="/about"
        active-class="active"
        @click="closeMenu"
      >
        About
      </RouterLink>

      <RouterLink
        to="/#products"
        class="mobile-products-button"
        @click="closeMenu"
      >
        Explore products
      </RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuOpen = ref(false);

function closeMenu() {
  mobileMenuOpen.value = false;
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 18px 24px;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(15, 23, 42, 0.07);
}

.navbar-inner {
  width: min(1180px, 100%);
  height: 58px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #111827;
  text-decoration: none;
}

.brand-logo {
  width: 42px;
  height: 42px;
  object-fit: contain;
  display: block;
}

.brand-name {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 34px;
  margin-left: 80px;
}

.desktop-nav a {
  position: relative;
  color: #64748b;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.desktop-nav a:hover,
.desktop-nav a.active {
  color: #111827;
}

.desktop-nav a.active::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -9px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #111827;
  transform: translateX(-50%);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.products-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 18px;
  border-radius: 12px;
  background: #111827;
  color: white;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.products-button:hover {
  background: #1f2937;
  transform: translateY(-1px);
}

.menu-button {
  display: none;
  width: 42px;
  height: 42px;
  padding: 0;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
}

.menu-button span {
  width: 17px;
  height: 1.5px;
  background: #111827;
  border-radius: 10px;
}

.mobile-menu {
  width: min(1180px, 100%);
  margin: 12px auto 0;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
}

.mobile-menu a {
  padding: 14px;
  border-radius: 10px;
  color: #334155;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.mobile-menu a:hover,
.mobile-menu a.active {
  background: #f8fafc;
  color: #111827;
}

.mobile-products-button {
  margin-top: 6px;
  background: #111827 !important;
  color: white !important;
  text-align: center;
}

@media (max-width: 760px) {
  .navbar {
    padding: 12px 16px;
  }

  .desktop-nav,
  .products-button {
    display: none;
  }

  .menu-button {
    display: flex;
  }

  .brand-logo {
    width: 38px;
    height: 38px;
  }

  .brand-name {
    font-size: 19px;
  }
}
</style>