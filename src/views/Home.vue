<template>
  <div class="home-page">
    <Navbar />

    <!-- HERO -->
    <main>
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-copy">
            <div class="hero-brand">
              <!-- <img src="../assets/logo.png" alt="Follia" /> -->
            </div>

            <p class="eyebrow">BUILDING USEFUL DIGITAL PRODUCTS</p>

            <h1>
              Technology designed
              <span>for real life.</span>
            </h1>

            <p class="hero-description">
              Follia creates simple, useful products that help people
              work, learn, share, and move through the digital world
              with less friction.
            </p>

            <div class="hero-actions">
              <a href="#products" class="primary-button">
                Explore products
                <span>→</span>
              </a>

              <a href="#about" class="secondary-button">
                About Follia
              </a>
            </div>
          </div>

          <div class="hero-visual">
            <div class="visual-glow"></div>

            <div class="visual-card visual-card-main">
              <div class="visual-card-top">
                <span class="visual-dot"></span>
                <span>FOLLIA</span>
              </div>

              <div class="visual-card-content">
                <span class="visual-number">01</span>
                <h2>Useful products.</h2>
                <p>
                  Built around real problems, real people,
                  and everyday digital experiences.
                </p>
              </div>

              <div class="visual-card-line"></div>
            </div>

            <div class="floating-card floating-card-one">
              <span>Products</span>
              <strong>04+</strong>
            </div>

            <div class="floating-card floating-card-two">
              <span>Built for</span>
              <strong>People</strong>
            </div>
          </div>
        </div>
      </section>

      <!-- PRODUCTS -->
      <section id="products" class="products-section">
        <div class="section-container">
          <div class="section-heading">
            <div>
              <p class="eyebrow">THE FOLLIA ECOSYSTEM</p>

              <h2>
                One company.
                <span>Many useful products.</span>
              </h2>
            </div>

            <p class="section-intro">
              Follia is building a growing collection of products
              designed to solve different problems across everyday
              digital life.
            </p>
          </div>

          <div class="products-grid">
            <article
              v-for="product in products"
              :key="product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div class="product-preview">
                <template v-if="product.image">
                  <img
                    :src="product.image"
                    :alt="`${product.name} screenshot`"
                    class="product-screenshot"
                  />
                </template>

                <template v-else>
                  <div class="preview-placeholder">
                    <span>F</span>
                  </div>
                </template>

                <div class="preview-overlay"></div>

                <span
                  class="preview-status"
                  :class="{ coming: product.status === 'Coming soon' }"
                >
                  {{ product.status }}
                </span>
              </div>

              <div class="product-body">
                <div class="product-top">
                  <p class="product-label">
                    {{ product.label }}
                  </p>
                </div>

                <h3>{{ product.name }}</h3>

                <p class="product-description">
                  {{ product.description }}
                </p>

                <div
                  v-if="product.feature"
                  class="product-feature"
                >
                  <span></span>
                  {{ product.feature }}
                </div>

                <RouterLink
                  v-if="product.status === 'Available'"
                  :to="product.link"
                  class="product-link"
                >
                  Explore {{ product.name }}
                  <span>→</span>
                </RouterLink>

                <span
                  v-else
                  class="product-link disabled"
                >
                  Coming soon
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- ABOUT -->
      <section id="about" class="about-section">
        <div class="section-container">
          <div class="about-grid">
            <div class="about-heading">
              <p class="eyebrow">ABOUT FOLLIA</p>

              <h2>
                We build things
                <span>people can actually use.</span>
              </h2>
            </div>

            <div class="about-content">
              <p class="about-large">
                Follia is a technology company focused on creating
                practical digital products for everyday problems.
              </p>

              <p>
                Instead of building technology simply because it is
                possible, we focus on the problem first. Every Follia
                product starts with a real need and grows from there.
              </p>

              <p>
                Our products may serve completely different purposes,
                but they share the same philosophy: keep things useful,
                simple, and accessible.
              </p>

              <div class="about-brand-card">
                <img
                  src="../assets/logo.png"
                  alt="Follia"
                />

                <div>
                  <strong>Follia</strong>
                  <span>Useful technology for everyday life.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="cta-container">
          <p class="eyebrow">EXPLORE FOLLIA</p>

          <h2>
            There is always
            <span>something useful being built.</span>
          </h2>

          <a href="#products" class="primary-button">
            Explore our products
            <span>→</span>
          </a>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <img src="../assets/logo.png" alt="Follia" />

          <div>
            <strong>Follia</strong>
            <span>Useful technology for everyday life.</span>
          </div>
        </div>

        <p>© {{ currentYear }} Follia. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import folliashipImage from "../assets/folliaship-img.png";

const currentYear = new Date().getFullYear();

const products = [
  {
    name: "FolliaShip",
    label: "FOLLIA PRODUCT",
    description:
      "Fast local file transfers between phones, computers, cafés, and shared devices.",
    status: "Available",
    image: folliashipImage,
    link: "/products/folliaship",
    feature: "No mobile data required",
    featured: true,
  },
  {
    name: "Follia Library",
    label: "FOLLIA PRODUCT",
    description:
      "A place to discover, organize, and access useful learning resources.",
    status: "Coming soon",
    image: null,
    link: "#",
    feature: null,
    featured: false,
  },
  {
    name: "FolliaBook",
    label: "FOLLIA PRODUCT",
    description:
      "Tools and services designed to make everyday digital work simpler.",
    status: "Coming soon",
    image: null,
    link: "#",
    feature: null,
    featured: false,
  },
  {
    name: "FolliaDrops",
    label: "FOLLIA PRODUCT",
    description:
      "Simple ways to share and move digital content between people and devices.",
    status: "Coming soon",
    image: null,
    link: "#",
    feature: null,
    featured: false,
  },
];
</script>

<style scoped>
.home-page {
  overflow: hidden;
  background: #ffffff;
}

.hero {
  min-height: 760px;
  padding: 170px 24px 100px;
  background:
    radial-gradient(
      circle at 78% 30%,
      rgba(15, 23, 42, 0.055),
      transparent 30%
    ),
    #ffffff;
}

.hero-inner {
  width: min(1180px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 80px;
}

.hero-copy {
  max-width: 650px;
}

.hero-brand {
  margin-bottom: 34px;
}

.hero-brand img {
  width: 58px;
  height: 58px;
  object-fit: contain;
}

.eyebrow {
  margin: 0 0 18px;
  color: #64748b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.hero h1 {
  margin: 0;
  max-width: 700px;
  color: #0f172a;
  font-size: clamp(52px, 6vw, 78px);
  line-height: 0.98;
  letter-spacing: -0.065em;
  font-weight: 750;
}

.hero h1 span,
.section-heading h2 span,
.about-heading h2 span,
.cta-container h2 span {
  color: #94a3b8;
}

.hero-description {
  max-width: 560px;
  margin: 30px 0 0;
  color: #64748b;
  font-size: 17px;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 36px;
  flex-wrap: wrap;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 650;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.primary-button {
  gap: 14px;
  background: #111827;
  color: #ffffff;
}

.primary-button:hover {
  background: #1f2937;
  transform: translateY(-2px);
}

.primary-button span {
  font-size: 18px;
}

.secondary-button {
  border: 1px solid #e2e8f0;
  color: #334155;
  background: #ffffff;
}

.secondary-button:hover {
  background: #f8fafc;
  transform: translateY(-2px);
}

/* HERO VISUAL */

.hero-visual {
  min-height: 480px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-glow {
  position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  background: #f1f5f9;
  filter: blur(5px);
}

.visual-card {
  position: relative;
  width: min(410px, 100%);
  min-height: 410px;
  padding: 28px;
  border: 1px solid #e2e8f0;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 35px 80px rgba(15, 23, 42, 0.1);
}

.visual-card-top {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #64748b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.visual-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #111827;
}

.visual-card-content {
  position: absolute;
  left: 28px;
  right: 28px;
  top: 145px;
}

.visual-number {
  color: #cbd5e1;
  font-size: 12px;
  font-weight: 700;
}

.visual-card h2 {
  margin: 16px 0 12px;
  color: #0f172a;
  font-size: 42px;
  line-height: 1;
  letter-spacing: -0.05em;
}

.visual-card p {
  max-width: 280px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.7;
}

.visual-card-line {
  position: absolute;
  left: 28px;
  right: 28px;
  bottom: 30px;
  height: 1px;
  background: #e2e8f0;
}

.floating-card {
  position: absolute;
  z-index: 2;
  padding: 16px 18px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.1);
}

.floating-card span {
  display: block;
  margin-bottom: 5px;
  color: #94a3b8;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.floating-card strong {
  color: #0f172a;
  font-size: 18px;
}

.floating-card-one {
  top: 65px;
  right: -10px;
}

.floating-card-two {
  bottom: 55px;
  left: -20px;
}

/* SECTIONS */

.products-section {
  padding: 120px 24px;
  background: #f8fafc;
}

.section-container {
  width: min(1180px, 100%);
  margin: 0 auto;
}

.section-heading {
  display: grid;
  grid-template-columns: 1fr 380px;
  align-items: end;
  gap: 60px;
  margin-bottom: 60px;
}

.section-heading h2,
.about-heading h2,
.cta-container h2 {
  max-width: 700px;
  margin: 0;
  color: #0f172a;
  font-size: clamp(40px, 5vw, 62px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.section-intro {
  margin: 0;
  color: #64748b;
  font-size: 15px;
  line-height: 1.8;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.product-card {
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 22px;
  background: #ffffff;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.08);
}

.product-preview {
  position: relative;
  height: 270px;
  overflow: hidden;
  background: #e2e8f0;
}

.product-screenshot {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.5s ease;
}

.product-card:hover .product-screenshot {
  transform: scale(1.025);
}

.preview-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(15, 23, 42, 0.03),
    transparent 50%,
    rgba(15, 23, 42, 0.1)
  );
}

.preview-status {
  position: absolute;
  top: 18px;
  right: 18px;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: #166534;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  backdrop-filter: blur(10px);
}

.preview-status.coming {
  color: #64748b;
}

.preview-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(
      135deg,
      #f8fafc,
      #e2e8f0
    );
}

.preview-placeholder span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border: 1px solid #cbd5e1;
  border-radius: 20px;
  color: #64748b;
  font-size: 26px;
  font-weight: 750;
}

.product-body {
  padding: 28px;
}

.product-label {
  margin: 0;
  color: #94a3b8;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.product-body h3 {
  margin: 13px 0 10px;
  color: #0f172a;
  font-size: 27px;
  letter-spacing: -0.04em;
}

.product-description {
  min-height: 54px;
  margin: 0;
  color: #64748b;
  font-size: 14px;
  line-height: 1.7;
}

.product-feature {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 20px;
  color: #334155;
  font-size: 12px;
  font-weight: 600;
}

.product-feature span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #16a34a;
}

.product-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  color: #111827;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
}

.product-link span {
  font-size: 18px;
  transition: transform 0.2s ease;
}

.product-link:hover span {
  transform: translateX(4px);
}

.product-link.disabled {
  color: #94a3b8;
}

/* ABOUT */

.about-section {
  padding: 130px 24px;
  background: #ffffff;
}

.about-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 100px;
}

.about-content {
  max-width: 600px;
}

.about-large {
  margin: 0 0 28px;
  color: #0f172a;
  font-size: 23px;
  line-height: 1.5;
  letter-spacing: -0.025em;
}

.about-content > p:not(.about-large) {
  margin: 0 0 18px;
  color: #64748b;
  font-size: 15px;
  line-height: 1.8;
}

.about-brand-card {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 42px;
  padding: 18px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  width: fit-content;
}

.about-brand-card img {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

.about-brand-card strong,
.about-brand-card span {
  display: block;
}

.about-brand-card strong {
  margin-bottom: 3px;
  color: #0f172a;
  font-size: 14px;
}

.about-brand-card span {
  color: #94a3b8;
  font-size: 11px;
}

/* CTA */

.cta-section {
  padding: 130px 24px;
  background: #f8fafc;
  text-align: center;
}

.cta-container {
  width: min(800px, 100%);
  margin: 0 auto;
}

.cta-container h2 {
  margin: 0 auto 34px;
}

.cta-container .primary-button {
  margin: 0 auto;
}

/* FOOTER */

.footer {
  padding: 30px 24px;
  border-top: 1px solid #e2e8f0;
  background: #ffffff;
}

.footer-inner {
  width: min(1180px, 100%);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-brand img {
  width: 38px;
  height: 38px;
  object-fit: contain;
}

.footer-brand strong,
.footer-brand span {
  display: block;
}

.footer-brand strong {
  color: #0f172a;
  font-size: 14px;
}

.footer-brand span {
  margin-top: 2px;
  color: #94a3b8;
  font-size: 10px;
}

.footer-inner > p {
  margin: 0;
  color: #94a3b8;
  font-size: 11px;
}

/* MOBILE */

@media (max-width: 850px) {
  .hero {
    min-height: auto;
    padding-top: 140px;
  }

  .hero-inner,
  .about-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .hero-visual {
    min-height: 420px;
  }

  .section-heading {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .about-grid {
    gap: 45px;
  }
}

@media (max-width: 600px) {
  .hero {
    padding: 125px 18px 80px;
  }

  .hero h1 {
    font-size: 50px;
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-visual {
    min-height: 350px;
  }

  .visual-card {
    min-height: 330px;
  }

  .visual-card h2 {
    font-size: 32px;
  }

  .floating-card-one {
    right: -5px;
    top: 25px;
  }

  .floating-card-two {
    left: -5px;
    bottom: 25px;
  }

  .products-section,
  .about-section,
  .cta-section {
    padding: 90px 18px;
  }

  .section-heading h2,
  .about-heading h2,
  .cta-container h2 {
    font-size: 42px;
  }

  .product-preview {
    height: 220px;
  }

  .product-body {
    padding: 24px;
  }

  .footer-inner {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>