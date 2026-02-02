export function createShowcaseFooter(containerId = "footer-showcase-container") {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Footer container #${containerId} not found`);
    return;
  }

  container.innerHTML = `
    <footer class="showcase-footer">
      <section class="newsletter-panel">
        <div class="newsletter-copy">
          <h2 class="eyebrow">Stay Updated</h3>
          <p>Get notified about new cohorts, events, and <br> important updates.</p>
        </div>
        <form class="newsletter-form">
          <label class="sr-only" for="newsletter-email">Email address</label>
          <input id="newsletter-email" type="email" placeholder="Enter your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <section class="footer-grid">
        <div class="footer-card brand">
          <div class="brand-lockup">
            <span class="brand-icon">&lt;/&gt;</span>
            <div>
              <p class="brand-eyebrow">Code&Create</p>
              <p class="brand-title">Bootcamp</p>
            </div>
          </div>
          <p class="emp">
            Empowering the next generation of tech leaders through practical learning and innovation. We keep you
            equipped with real-world experience and the confidence to thrive in today&#39;s evolving tech landscape.
          </p>
          <div class="brand-socials">
            <a href="#" aria-label="Visit us on X">
              <img src="./assets/images/x-logo.png" alt="X icon" />
            </a>
            <a href="#" aria-label="Visit us on LinkedIn">
              <img src="./assets/images/linkedln-logo.png" alt="LinkedIn icon" />
            </a>
          </div>
        </div>

        <div class="footer-card">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About.html">About</a></li>
            <li><a href="/tracks.html">Tracks</a></li>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Announcements</a></li>
            <li><a href="/testimonial.html">Testimonials</a></li>
          </ul>
        </div>

        <div class="footer-card contact">
          <h3>Contact & Support</h3>
          <ul class="contact-list">
            <li>Email: <a href="mailto:hello@codeandcreate.com">hello@codeandcreate.com</a></li>
            <li>Phone: <a href="tel:+2348001234567">+234 800 123 4567</a></li>
          </ul>
        </div>

        <div class="footer-card partners">
          <h3>Our Partners</h3>
          <ul>
            <li>Edustipend</li>
            <li>Innovation Hub</li>
            <li>Future Labs</li>
          </ul>
        </div>
      </section>

      <section class="footer-meta">
        <p>&copy; 2025 Code&Create. All rights reserved.</p>
        <div class="meta-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Of Service</a>
        </div>
      </section>
    </footer>
  `;
}
