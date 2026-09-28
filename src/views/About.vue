<template>
  <div class="about-page">
    <Navbar />

    <main>
      <!-- HERO -->
      <section class="about-hero">
        <div class="about-container">
          <RouterLink to="/" class="back-link">
            <span>←</span>
            Back to Follia
          </RouterLink>

          <div class="hero-content">
            <p class="eyebrow">
              ABOUT FOLLIA
            </p>

            <h1>
              We build technology
              <span>around people.</span>
            </h1>

            <p class="hero-description">
              Follia is a technology company building useful digital
              products that solve real problems and make everyday
              experiences simpler.
            </p>
          </div>
        </div>
      </section>

      <!-- STORY -->
      <section class="story-section">
        <div class="about-container">
          <div class="story-grid">
            <div class="section-label">
              <span>01</span>
              OUR STORY
            </div>

            <div class="story-content">
              <h2>
                Technology should
                <span>solve something.</span>
              </h2>

              <p class="large-text">
                Follia exists to create products that people can
                actually use in their everyday lives.
              </p>

              <p>
                We believe technology is most valuable when it removes
                friction from something people already need to do.
              </p>

              <p>
                That could mean moving a file from a phone to a
                computer, finding useful educational resources, sharing
                digital content, or solving a problem that has not yet
                been solved properly.
              </p>

              <p>
                Follia is building a growing ecosystem of products,
                each focused on a specific problem while sharing the
                same philosophy: useful, simple, accessible technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- VALUES -->
      <section class="values-section">
        <div class="about-container">
          <div class="values-heading">
            <p class="eyebrow">
              WHAT WE BELIEVE
            </p>

            <h2>
              Simple ideas.
              <span>Useful products.</span>
            </h2>
          </div>

          <div class="values-grid">
            <article class="value-card">
              <span class="value-number">01</span>

              <h3>Useful first</h3>

              <p>
                We start with the problem instead of starting with
                technology.
              </p>
            </article>

            <article class="value-card">
              <span class="value-number">02</span>

              <h3>Keep it simple</h3>

              <p>
                Products should be understandable and easy to use
                without unnecessary complexity.
              </p>
            </article>

            <article class="value-card">
              <span class="value-number">03</span>

              <h3>Build for people</h3>

              <p>
                Real people and real situations guide the products
                we build.
              </p>
            </article>

            <article class="value-card">
              <span class="value-number">04</span>

              <h3>Keep building</h3>

              <p>
                Follia is an evolving company. New problems create new
                opportunities to build useful products.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- TEAM -->
      <section class="team-section">
        <div class="about-container">
          <div class="team-heading">
            <div>
              <p class="eyebrow">
                THE PEOPLE BEHIND FOLLIA
              </p>

              <h2>
                Meet the
                <span>team.</span>
              </h2>
            </div>

            <p>
              Follia is built by people with different skills working
              together toward the same goal: creating useful products
              for real people.
            </p>
          </div>

          <div class="team-grid">
            <article
              v-for="member in team"
              :key="member.name"
              class="team-card"
              :class="{ placeholder: member.placeholder }"
            >
              <div class="team-image">
                <img
                  v-if="member.image"
                  :src="member.image"
                  :alt="`${member.name} - ${member.position}`"
                />

                <div
                  v-else
                  class="team-placeholder"
                >
                  <span>F</span>
                </div>

                <div class="team-overlay">
                  <a
                    v-if="member.whatsapp"
                    :href="`https://wa.me/${member.whatsapp}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="whatsapp-button"
                    :aria-label="`Contact ${member.name} on WhatsApp`"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .24 5.31.24 11.84c0 2.09.55 4.13 1.6 5.93L.14 24l6.38-1.67a11.83 11.83 0 0 0 5.56 1.41h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.17-1.23-6.15-3.41-8.42ZM12.09 21.73h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.83 9.83 0 0 1-1.51-5.23C2.19 6.4 6.62 1.97 12.08 1.97c2.64 0 5.12 1.03 6.99 2.9a9.8 9.8 0 0 1 2.9 6.99c0 5.46-4.43 9.87-9.88 9.87Zm5.41-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
                      />
                    </svg>

                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div class="team-info">
                <div>
                  <h3>{{ member.name }}</h3>
                  <p>{{ member.position }}</p>
                </div>

                <span class="team-index">
                  {{ member.number }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- CLOSING -->
      <section class="closing-section">
        <div class="about-container">
          <div class="closing-card">
            <p class="eyebrow">
              FOLLIA
            </p>

            <h2>
              We're just getting
              <span>started.</span>
            </h2>

            <p>
              Follia is building one product at a time, with the goal
              of creating technology that becomes genuinely useful in
              people's everyday lives.
            </p>

            <RouterLink
              to="/#products"
              class="primary-button"
            >
              Explore our products
              <span>→</span>
            </RouterLink>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="about-container footer-inner">
        <div class="footer-brand">
          <img
            src="../assets/logo.png"
            alt="Follia"
          />

          <div>
            <strong>Follia</strong>
            <span>
              Useful technology for everyday life.
            </span>
          </div>
        </div>

        <RouterLink to="/" class="footer-back">
          Back to Follia
          <span>→</span>
        </RouterLink>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";

import preciousImage from "../assets/team/precious-efejiro.png";
import ramondImage from "../assets/team/ramond.png";
import deborahImage from "../assets/team/deborah.png";
import ayomideImage from "../assets/team/ayomide.png";
import immaculateImage from "../assets/team/immaculate.png";
import oluwatobilobaImage from "../assets/team/oluwatobiloba.png";
import roseImage from "../assets/team/rose.png";
import josephImage from "../assets/team/joseph.png";

const team = [
  {
    number: "01",
    name: "Precious Efejiro",
    position: "Founder / CEO",
    image: preciousImage,
    whatsapp: "234XXXXXXXXXX",
  },

  {
    number: "02",
    name: "Ramond",
    position: "Co-Founder / Product",
    image: ramondImage,
    whatsapp: "234XXXXXXXXXX",
  },

  {
    number: "03",
    name: "Deborah",
    position: "Chief of Staff",
    image: deborahImage,
    whatsapp: "234XXXXXXXXXX",
  },

  {
    number: "04",
    name: "Ayomide",
    position: "Social Media Marketer",
    image: ayomideImage,
    whatsapp: "234XXXXXXXXXX",
  },

  {
    number: "05",
    name: "Immaculate",
    position: "Marketer",
    image: immaculateImage,
    whatsapp: "234XXXXXXXXXX",
  },

  {
    number: "06",
    name: "Oluwatobiloba",
    position: "UI/UX Designer",
    image: oluwatobilobaImage,
    whatsapp: "234XXXXXXXXXX",
  },

  {
    number: "07",
    name: "Rose",
    position: "Financial Advisor",
    image: roseImage,
    whatsapp: "234XXXXXXXXXX",
  },

  {
    number: "08",
    name: "Joseph",
    position: "Social Media Marketer",
    image: josephImage,
    whatsapp: "234XXXXXXXXXX",
  },

  {
    number: "09",
    name: "Your next teammate",
    position: "Coming soon",
    image: null,
    whatsapp: "",
    placeholder: true,
  },
];
</script>

<style scoped>
.about-page {
  overflow: hidden;
  background: #ffffff;
}

.about-container {
  width: min(1180px, 100%);
  margin: 0 auto;
}

/* HERO */

.about-hero {
  padding: 145px 24px 120px;
  background:
    radial-gradient(
      circle at 80% 25%,
      rgba(15, 23, 42, 0.055),
      transparent 30%
    ),
    #ffffff;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 70px;
  color: #64748b;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
}

.back-link:hover {
  color: #111827;
}

.back-link span {
  font-size: 18px;
}

.hero-content {
  max-width: 900px;
}

.eyebrow {
  margin: 0 0 20px;
  color: #64748b;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.16em;
}

.hero-content h1 {
  margin: 0;
  color: #0f172a;
  font-size: clamp(54px, 7vw, 88px);
  line-height: 0.95;
  letter-spacing: -0.07em;
}

.hero-content h1 span,
.values-heading h2 span,
.story-content h2 span,
.team-heading h2 span,
.closing-card h2 span {
  color: #94a3b8;
}

.hero-description {
  max-width: 650px;
  margin: 35px 0 0;
  color: #64748b;
  font-size: 18px;
  line-height: 1.75;
}

/* STORY */

.story-section {
  padding: 130px 24px;
  background: #f8fafc;
}

.story-grid {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 100px;
}

.story-content {
  max-width: 680px;
}

.story-content h2 {
  margin: 0;
  color: #0f172a;
  font-size: clamp(42px, 5vw, 62px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.large-text {
  margin: 30px 0 35px;
  color: #334155;
  font-size: 21px;
  line-height: 1.6;
  letter-spacing: -0.025em;
}

.story-content p:not(.large-text) {
  margin: 0 0 20px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.85;
}

/* VALUES */

.values-section {
  padding: 130px 24px;
  background: #ffffff;
}

.values-heading {
  max-width: 750px;
  margin-bottom: 60px;
}

.values-heading h2 {
  margin: 0;
  color: #0f172a;
  font-size: clamp(42px, 5vw, 62px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.value-card {
  min-height: 260px;
  padding: 25px;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
}

.value-number {
  color: #cbd5e1;
  font-size: 10px;
  font-weight: 700;
}

.value-card h3 {
  margin: 75px 0 12px;
  color: #0f172a;
  font-size: 19px;
  letter-spacing: -0.03em;
}

.value-card p {
  margin: 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.75;
}

/* TEAM */

.team-section {
  padding: 130px 24px;
  background: #f8fafc;
}

.team-heading {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 70px;
  align-items: end;
  margin-bottom: 60px;
}

.team-heading h2 {
  margin: 0;
  color: #0f172a;
  font-size: clamp(44px, 5vw, 64px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.team-heading > p {
  margin: 0;
  color: #64748b;
  font-size: 14px;
  line-height: 1.8;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.team-card {
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  background: #ffffff;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.1);
}

.team-image {
  position: relative;
  height: 330px;
  overflow: hidden;
  background: #e2e8f0;
}

.team-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.45s ease;
}

.team-card:hover .team-image img {
  transform: scale(1.04);
}

.team-placeholder {
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

.team-placeholder span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 74px;
  height: 74px;
  border: 1px solid #cbd5e1;
  border-radius: 20px;
  color: #94a3b8;
  font-size: 25px;
  font-weight: 750;
}

.team-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 22px;
  opacity: 0;
  background: linear-gradient(
    to top,
    rgba(15, 23, 42, 0.7),
    rgba(15, 23, 42, 0.05) 55%,
    transparent
  );
  transition: opacity 0.25s ease;
}

.team-card:hover .team-overlay {
  opacity: 1;
}

.whatsapp-button {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-height: 40px;
  padding: 0 15px;
  border-radius: 10px;
  background: #ffffff;
  color: #111827;
  text-decoration: none;
  font-size: 11px;
  font-weight: 700;
  transform: translateY(8px);
  transition:
    transform 0.25s ease,
    background 0.2s ease;
}

.team-card:hover .whatsapp-button {
  transform: translateY(0);
}

.whatsapp-button:hover {
  background: #f1f5f9;
}

.whatsapp-button svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.team-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 20px;
}

.team-info h3 {
  margin: 0;
  color: #0f172a;
  font-size: 16px;
  letter-spacing: -0.025em;
}

.team-info p {
  margin: 5px 0 0;
  color: #94a3b8;
  font-size: 11px;
}

.team-index {
  color: #cbd5e1;
  font-size: 10px;
  font-weight: 700;
}

/* CLOSING */

.closing-section {
  padding: 100px 24px;
  background: #ffffff;
}

.closing-card {
  padding: 75px;
  border-radius: 28px;
  background: #111827;
}

.closing-card .eyebrow {
  color: #94a3b8;
}

.closing-card h2 {
  max-width: 800px;
  margin: 0;
  color: #ffffff;
  font-size: clamp(44px, 5vw, 65px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.closing-card h2 span {
  color: #64748b;
}

.closing-card > p:not(.eyebrow) {
  max-width: 620px;
  margin: 28px 0 30px;
  color: #94a3b8;
  font-size: 15px;
  line-height: 1.8;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 12px;
  background: #ffffff;
  color: #111827;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.primary-button:hover {
  background: #f8fafc;
  transform: translateY(-2px);
}

.primary-button span {
  font-size: 18px;
}

/* FOOTER */

.footer {
  padding: 30px 24px;
  border-top: 1px solid #e2e8f0;
  background: #ffffff;
}

.footer-inner {
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

.footer-back {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #64748b;
  text-decoration: none;
  font-size: 12px;
  font-weight: 650;
}

.footer-back:hover {
  color: #111827;
}

.footer-back span {
  font-size: 16px;
}

/* RESPONSIVE */

@media (max-width: 950px) {
  .story-grid {
    grid-template-columns: 1fr;
    gap: 55px;
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .team-heading {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .about-hero,
  .story-section,
  .values-section,
  .team-section,
  .closing-section {
    padding-left: 18px;
    padding-right: 18px;
  }

  .about-hero {
    padding-top: 125px;
    padding-bottom: 85px;
  }

  .back-link {
    margin-bottom: 45px;
  }

  .hero-content h1 {
    font-size: 50px;
  }

  .hero-description {
    font-size: 15px;
  }

  .values-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }

  .team-image {
    height: 360px;
  }

  .closing-card {
    padding: 38px 25px;
    border-radius: 22px;
  }

  .footer-inner {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>