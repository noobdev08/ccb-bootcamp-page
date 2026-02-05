export function createHeader(containerId = "header") {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Header container #${containerId} not found`);
    return;
  }

  container.innerHTML = `
    <header class="site-header">
      <img class="header-logo" src="./assets/images/logo.png" alt="Bootcamp logo" />

      <button class="hamburger" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="header-nav">
        <ul class="header-list">
          <li class="nav-page"><a data-btn="home" href="./Home.html">Home</a></li>
          <li class="nav-page"><a data-btn="about" href="./About.html">About</a></li>
          <li class="nav-page"><a data-btn="tracks" href="./tracks.html">Tracks</a></li>
          <li class="nav-page"><a data-btn="testimonial" href="./testimonial.html">Testimonials</a></li>

          <li class="mobile-cta">
            <a href="https://forms.gle/zP4DL7qA1WfreTGm8">Apply Now</a>
          </li>
        </ul>
      </nav>

      <a class="header-btn" href="https://forms.gle/zP4DL7qA1WfreTGm8">
        Apply Now
      </a>
    </header>
  `;
}

const qa = (s) => document.querySelectorAll(s);

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = document.body.dataset.page;

  qa(".nav-page a").forEach((link) => {
    link.classList.toggle("active", link.dataset.btn === currentPage);
  });

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".header-nav");

  if (!hamburger || !nav) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
  });

  // auto-close when a link is clicked
  qa(".header-list a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      nav.classList.remove("open");
    });
  });
});