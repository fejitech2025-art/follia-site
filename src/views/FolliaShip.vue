<template>
  <div class="folliaship-page">
    <Navbar />

    <main>
      <!-- HERO -->
      <section class="product-hero">
        <div class="product-container">
          <RouterLink to="/" class="back-link">
            <span>←</span>
            Back to Follia
          </RouterLink>

          <div class="hero-grid">
            <div class="hero-copy">
              <div class="product-badge">
                <span></span>
                FOLLIA PRODUCT
              </div>

              <h1>
                Move files.
                <span>Without the hassle.</span>
              </h1>

              <p class="hero-text">
                FolliaShip makes it easy to send files between phones,
                computers, cafés, print shops, and other devices on the
                same local network.
              </p>

              <div class="hero-actions">
                <a href="#how-it-works" class="primary-button">
                  See how it works
                  <span>↓</span>
                </a>

                <a href="#problem" class="secondary-button">
                  Why FolliaShip?
                </a>
              </div>

              <div class="hero-meta">
                <div>
                  <strong>Free</strong>
                  <span>No subscription</span>
                </div>

                <div>
                  <strong>Local</strong>
                  <span>No cloud required</span>
                </div>

                <div>
                  <strong>Simple</strong>
                  <span>Built for everyday use</span>
                </div>
              </div>
            </div>

            <div class="hero-image-wrap">
              <div class="hero-image-glow"></div>

              <div class="hero-image-card">
                <img
                  src="../assets/folliaship-img.png"
                  alt="FolliaShip application screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PROBLEM -->
      <section id="problem" class="problem-section">
        <div class="product-container">
          <div class="two-column">
            <div class="section-label">
              <span>01</span>
              THE PROBLEM
            </div>

            <div class="section-content">
              <h2>
                Sending a simple file
                shouldn't be complicated.
              </h2>

              <p class="large-text">
                A file can be ready on your phone, but getting it onto
                another computer can still involve unnecessary steps.
              </p>

              <div class="problem-list">
                <div class="problem-item">
                  <span class="problem-number">01</span>

                  <div>
                    <h3>Unnecessary internet usage</h3>
                    <p>
                      Sending a file through cloud services or messaging
                      platforms can use mobile data even when the devices
                      are sitting right next to each other.
                    </p>
                  </div>
                </div>

                <div class="problem-item">
                  <span class="problem-number">02</span>

                  <div>
                    <h3>Too many steps</h3>
                    <p>
                      Uploading a file somewhere, copying a link, opening
                      another application, and downloading it again can
                      make a simple transfer feel like a process.
                    </p>
                  </div>
                </div>

                <div class="problem-item">
                  <span class="problem-number">03</span>

                  <div>
                    <h3>Shared computers need simple tools</h3>
                    <p>
                      In cafés, print shops, schools, and other shared
                      environments, people often just need a quick way
                      to move a file from their phone to a computer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SOLUTION -->
      <section class="solution-section">
        <div class="product-container">
          <div class="solution-card">
            <div class="solution-content">
              <div class="product-badge">
                <span></span>
                THE FOLLIASHIP APPROACH
              </div>

              <h2>
                Your devices are
                <span>already close.</span>
              </h2>

              <p>
                FolliaShip uses the local network around you instead of
                sending your file through the internet.
              </p>

              <p>
                A computer running FolliaShip creates a simple local
                destination. Your phone connects to the same network,
                opens that destination, selects the file, and sends it
                directly to the computer.
              </p>

              <div class="solution-flow">
                <div>
                  <strong>Phone</strong>
                  <span>Your file</span>
                </div>

                <span class="flow-arrow">→</span>

                <div>
                  <strong>Local network</strong>
                  <span>Direct connection</span>
                </div>

                <span class="flow-arrow">→</span>

                <div>
                  <strong>Computer</strong>
                  <span>File received</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SCREENSHOT -->
      <section class="screenshot-section">
        <div class="product-container">
          <div class="screenshot-heading">
            <div>
              <div class="section-label">
                <span>02</span>
                THE PRODUCT
              </div>

              <h2>
                FolliaShip,
                <span>in action.</span>
              </h2>
            </div>

            <p>
              A simple interface designed around one job:
              getting your file where it needs to go.
            </p>
          </div>

          <div class="large-screenshot">
            <img
              src="../assets/folliaship-img.png"
              alt="FolliaShip product interface"
            />
          </div>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section id="how-it-works" class="how-section">
        <div class="product-container">
          <div class="section-intro">
            <div class="section-label">
              <span>03</span>
              HOW IT WORKS
            </div>

            <h2>
              Three simple steps.
              <span>That's it.</span>
            </h2>

            <p>
              FolliaShip is designed so that someone can use it without
              needing to understand networking or complicated setup.
            </p>
          </div>

          <div class="steps-grid">
            <article class="step-card">
              <div class="step-top">
                <span>01</span>
                <div class="step-icon">
                  1
                </div>
              </div>

              <h3>Connect</h3>

              <p>
                Connect your phone and the FolliaShip computer to the
                same local Wi-Fi network or phone hotspot.
              </p>
            </article>

            <article class="step-card">
              <div class="step-top">
                <span>02</span>
                <div class="step-icon">
                  2
                </div>
              </div>

              <h3>Open</h3>

              <p>
                Open the FolliaShip address shown by the computer,
                either directly or through the QR code provided.
              </p>
            </article>

            <article class="step-card">
              <div class="step-top">
                <span>03</span>
                <div class="step-icon">
                  3
                </div>
              </div>

              <h3>Send</h3>

              <p>
                Choose your file on your phone and send it. FolliaShip
                receives the file directly on the connected computer.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- HOW TO USE -->
      <section class="guide-section">
        <div class="product-container">
          <div class="two-column guide-grid">
            <div class="section-label">
              <span>04</span>
              HOW TO USE FOLLIASHIP
            </div>

            <div class="guide-content">
              <h2>
                From phone
                <span>to computer.</span>
              </h2>

              <div class="guide-steps">
                <div class="guide-step">
                  <div class="guide-index">01</div>

                  <div>
                    <h3>Start FolliaShip</h3>
                    <p>
                      Open FolliaShip on the computer where you want
                      to receive the file.
                    </p>
                  </div>
                </div>

                <div class="guide-step">
                  <div class="guide-index">02</div>

                  <div>
                    <h3>Connect your phone</h3>
                    <p>
                      Turn on your phone hotspot or connect both
                      devices to the same Wi-Fi network.
                    </p>
                  </div>
                </div>

                <div class="guide-step">
                  <div class="guide-index">03</div>

                  <div>
                    <h3>Scan the QR code</h3>
                    <p>
                      Use your phone camera to scan the FolliaShip
                      QR code shown on the computer.
                    </p>
                  </div>
                </div>

                <div class="guide-step">
                  <div class="guide-index">04</div>

                  <div>
                    <h3>Select your file</h3>
                    <p>
                      The FolliaShip page opens on your phone.
                      Select the file you want to send.
                    </p>
                  </div>
                </div>

                <div class="guide-step">
                  <div class="guide-index">05</div>

                  <div>
                    <h3>Send</h3>
                    <p>
                      Tap send and wait for the transfer to complete.
                      Your file is delivered to the computer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- USE CASES -->
      <section class="use-cases-section">
        <div class="product-container">
          <div class="section-intro centered">
            <div class="section-label">
              <span>05</span>
              BUILT FOR REAL SITUATIONS
            </div>

            <h2>
              Wherever a file needs
              <span>to move.</span>
            </h2>
          </div>

          <div class="use-cases-grid">
            <article class="use-case">
              <span>01</span>
              <h3>Print shops</h3>
              <p>
                Send a document from your phone directly to the shop
                computer without using mobile data.
              </p>
            </article>

            <article class="use-case">
              <span>02</span>
              <h3>Cafés & cyber cafés</h3>
              <p>
                Give customers a quick way to transfer documents,
                images, and other files to a shared computer.
              </p>
            </article>

            <article class="use-case">
              <span>03</span>
              <h3>Schools & campuses</h3>
              <p>
                Move files between personal devices and computers
                when the devices are connected to the same network.
              </p>
            </article>

            <article class="use-case">
              <span>04</span>
              <h3>Everyday transfers</h3>
              <p>
                Move a file between nearby devices without adding
                another cloud service to the process.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="final-section">
        <div class="product-container">
          <div class="final-card">
            <div>
              <p class="product-badge">
                <span></span>
                FOLLIASHIP
              </p>

              <h2>
                Simple file transfer,
                <span>without the extra steps.</span>
              </h2>

              <p>
                FolliaShip is free and built to make local file transfer
                easier wherever people share computers.
              </p>
            </div>

            <a href="#how-to-use" class="final-button">
              Learn how to use it
              <span>↓</span>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="product-container footer-inner">
        <div class="footer-brand">
          <img src="../assets/logo.png" alt="Follia" />

          <div>
            <strong>Follia</strong>
            <span>Useful technology for everyday life.</span>
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
</script>

<style scoped>
.folliaship-page {
  overflow: hidden;
  background: #ffffff;
}

.product-container {
  width: min(1180px, 100%);
  margin: 0 auto;
}

/* HERO */

.product-hero {
  padding: 145px 24px 110px;
  background:
    radial-gradient(
      circle at 80% 20%,
      rgba(15, 23, 42, 0.06),
      transparent 30%
    ),
    #ffffff;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 65px;
  color: #64748b;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: #111827;
}

.back-link span {
  font-size: 18px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  align-items: center;
  gap: 80px;
}

.product-badge {
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 20px;
  color: #64748b;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.14em;
}

.product-badge > span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #111827;
}

.hero-copy h1 {
  max-width: 650px;
  margin: 0;
  color: #0f172a;
  font-size: clamp(52px, 6vw, 76px);
  line-height: 0.98;
  letter-spacing: -0.065em;
}

.hero-copy h1 span,
.solution-content h2 span,
.screenshot-heading h2 span,
.section-intro h2 span,
.guide-content h2 span,
.use-cases-section h2 span,
.final-card h2 span {
  color: #94a3b8;
}

.hero-text {
  max-width: 570px;
  margin: 28px 0 0;
  color: #64748b;
  font-size: 17px;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 35px;
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
  font-size: 13px;
  font-weight: 700;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.primary-button {
  gap: 12px;
  background: #111827;
  color: #ffffff;
}

.primary-button:hover {
  background: #1f2937;
  transform: translateY(-2px);
}

.secondary-button {
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: #334155;
}

.secondary-button:hover {
  background: #f8fafc;
  transform: translateY(-2px);
}

.hero-meta {
  display: flex;
  gap: 34px;
  margin-top: 45px;
  padding-top: 25px;
  border-top: 1px solid #e2e8f0;
}

.hero-meta strong,
.hero-meta span {
  display: block;
}

.hero-meta strong {
  color: #0f172a;
  font-size: 13px;
}

.hero-meta span {
  margin-top: 5px;
  color: #94a3b8;
  font-size: 10px;
}

.hero-image-wrap {
  position: relative;
}

.hero-image-glow {
  position: absolute;
  inset: 10% 5%;
  border-radius: 50%;
  background: #e2e8f0;
  filter: blur(60px);
  opacity: 0.8;
}

.hero-image-card {
  position: relative;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  background: #f8fafc;
  box-shadow: 0 35px 80px rgba(15, 23, 42, 0.12);
}

.hero-image-card img {
  width: 100%;
  display: block;
}

/* PROBLEM */

.problem-section {
  padding: 130px 24px;
  background: #f8fafc;
}

.two-column {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 100px;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #64748b;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.14em;
}

.section-label > span {
  color: #cbd5e1;
}

.section-content h2,
.section-intro h2,
.guide-content h2 {
  margin: 0;
  color: #0f172a;
  font-size: clamp(40px, 5vw, 60px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.large-text {
  max-width: 650px;
  margin: 28px 0 45px;
  color: #475569;
  font-size: 20px;
  line-height: 1.65;
  letter-spacing: -0.02em;
}

.problem-list {
  border-top: 1px solid #e2e8f0;
}

.problem-item {
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 20px;
  padding: 27px 0;
  border-bottom: 1px solid #e2e8f0;
}

.problem-number {
  color: #94a3b8;
  font-size: 11px;
  font-weight: 700;
}

.problem-item h3 {
  margin: 0 0 8px;
  color: #0f172a;
  font-size: 16px;
  letter-spacing: -0.02em;
}

.problem-item p {
  max-width: 600px;
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.75;
}

/* SOLUTION */

.solution-section {
  padding: 120px 24px;
  background: #ffffff;
}

.solution-card {
  padding: 70px;
  border-radius: 28px;
  background: #111827;
  color: #ffffff;
}

.solution-content {
  max-width: 900px;
}

.solution-content .product-badge {
  color: #94a3b8;
}

.solution-content .product-badge > span {
  background: #ffffff;
}

.solution-content h2 {
  margin: 0;
  max-width: 700px;
  font-size: clamp(42px, 5vw, 64px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.solution-content h2 span {
  color: #64748b;
}

.solution-content > p {
  max-width: 680px;
  margin: 28px 0 0;
  color: #94a3b8;
  font-size: 16px;
  line-height: 1.8;
}

.solution-flow {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 50px;
  padding-top: 28px;
  border-top: 1px solid #334155;
}

.solution-flow div strong,
.solution-flow div span {
  display: block;
}

.solution-flow strong {
  font-size: 13px;
}

.solution-flow span {
  margin-top: 4px;
  color: #64748b;
  font-size: 10px;
}

.flow-arrow {
  color: #64748b;
  font-size: 20px;
}

/* SCREENSHOT */

.screenshot-section {
  padding: 130px 24px;
  background: #f8fafc;
}

.screenshot-heading {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 70px;
  align-items: end;
  margin-bottom: 55px;
}

.screenshot-heading h2 {
  margin: 20px 0 0;
  color: #0f172a;
  font-size: clamp(42px, 5vw, 62px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.screenshot-heading > p {
  margin: 0;
  color: #64748b;
  font-size: 14px;
  line-height: 1.8;
}

.large-screenshot {
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 30px 70px rgba(15, 23, 42, 0.08);
}

.large-screenshot img {
  width: 100%;
  display: block;
}

/* HOW */

.how-section {
  padding: 130px 24px;
  background: #ffffff;
}

.section-intro {
  max-width: 800px;
}

.section-intro h2 {
  margin-top: 20px;
}

.section-intro > p {
  max-width: 600px;
  margin: 25px 0 0;
  color: #64748b;
  font-size: 15px;
  line-height: 1.8;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 65px;
}

.step-card {
  min-height: 280px;
  padding: 28px;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  background: #ffffff;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.07);
}

.step-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #94a3b8;
  font-size: 11px;
  font-weight: 700;
}

.step-icon {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  color: #0f172a;
  font-size: 12px;
}

.step-card h3 {
  margin: 55px 0 10px;
  color: #0f172a;
  font-size: 22px;
  letter-spacing: -0.035em;
}

.step-card p {
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.75;
}

/* GUIDE */

.guide-section {
  padding: 130px 24px;
  background: #f8fafc;
}

.guide-grid {
  align-items: start;
}

.guide-content h2 {
  margin-bottom: 45px;
}

.guide-steps {
  border-top: 1px solid #e2e8f0;
}

.guide-step {
  display: grid;
  grid-template-columns: 55px 1fr;
  gap: 18px;
  padding: 25px 0;
  border-bottom: 1px solid #e2e8f0;
}

.guide-index {
  color: #94a3b8;
  font-size: 11px;
  font-weight: 700;
}

.guide-step h3 {
  margin: 0 0 7px;
  color: #0f172a;
  font-size: 15px;
}

.guide-step p {
  max-width: 600px;
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.7;
}

/* USE CASES */

.use-cases-section {
  padding: 130px 24px;
  background: #ffffff;
}

.centered {
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
}

.centered .section-label {
  justify-content: center;
}

.use-cases-section h2 {
  margin-top: 20px;
  color: #0f172a;
  font-size: clamp(42px, 5vw, 60px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 65px;
}

.use-case {
  min-height: 240px;
  padding: 25px;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
}

.use-case > span {
  color: #cbd5e1;
  font-size: 10px;
  font-weight: 700;
}

.use-case h3 {
  margin: 65px 0 10px;
  color: #0f172a;
  font-size: 18px;
  letter-spacing: -0.025em;
}

.use-case p {
  margin: 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.7;
}

/* FINAL CTA */

.final-section {
  padding: 100px 24px;
  background: #f8fafc;
}

.final-card {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 60px;
  padding: 65px;
  border-radius: 28px;
  background: #111827;
}

.final-card .product-badge {
  color: #94a3b8;
}

.final-card .product-badge > span {
  background: #ffffff;
}

.final-card h2 {
  max-width: 700px;
  margin: 0;
  color: #ffffff;
  font-size: clamp(40px, 5vw, 60px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.final-card h2 span {
  color: #64748b;
}

.final-card > div > p:last-child {
  max-width: 560px;
  margin: 25px 0 0;
  color: #94a3b8;
  font-size: 14px;
  line-height: 1.8;
}

.final-button {
  flex-shrink: 0;
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
}

.final-button span {
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
  .hero-grid,
  .two-column {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .hero-image-wrap {
    max-width: 760px;
  }

  .screenshot-heading {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .use-cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .final-card {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .product-hero,
  .problem-section,
  .solution-section,
  .screenshot-section,
  .how-section,
  .guide-section,
  .use-cases-section {
    padding-left: 18px;
    padding-right: 18px;
  }

  .product-hero {
    padding-top: 125px;
    padding-bottom: 80px;
  }

  .back-link {
    margin-bottom: 45px;
  }

  .hero-copy h1 {
    font-size: 50px;
  }

  .hero-text {
    font-size: 15px;
  }

  .hero-meta {
    gap: 18px;
    flex-wrap: wrap;
  }

  .solution-card,
  .final-card {
    padding: 32px 24px;
    border-radius: 22px;
  }

  .solution-flow {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
  }

  .flow-arrow {
    transform: rotate(90deg);
  }

  .large-screenshot,
  .hero-image-card {
    border-radius: 16px;
  }

  .use-cases-grid {
    grid-template-columns: 1fr;
  }

  .use-case {
    min-height: auto;
  }

  .use-case h3 {
    margin-top: 35px;
  }

  .footer-inner {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>