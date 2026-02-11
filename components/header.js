export function createHeader(containerId = 'header') {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Header container #${containerId} not found`);
    return;
  }

  container.innerHTML = `
    <header class="site-header">
      <div class="brand-lockup" id="logo">
        <span class="brand-icon">&lt;/&gt;</span>
        <div>
          <p class="brand-eyebrow">Code&Create</p>
          <p class="brand-title">Bootcamp</p>
        </div>
      </div>

      <button class="hamburger" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="header-nav">
        <ul class="header-list">
          <li class="nav-page"><a data-btn="home" href="./index.html">Home</a></li>
          <li class="nav-page"><a data-btn="about" href="./About.html">About</a></li>
          <li class="nav-page"><a data-btn="tracks" href="./tracks.html">Tracks</a></li>
          <li class="nav-page"><a data-btn="testimonial" href="./testimonial.html">Testimonials</a></li>

          <!-- Mobile only -->
          <li class="mobile-cta">
            <a href="https://forms.gle/zP4DL7qA1WfreTGm8">Apply Now</a>
          </li>
        </ul>
      </nav>

      <!-- Desktop only -->
      <a class="header-btn" href="https://forms.gle/zP4DL7qA1WfreTGm8">
        Apply Now
      </a>
    </header>
  `;
}

const qa = (s) => document.querySelectorAll(s);

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = document.body.dataset.page;
  const logo = document.getElementById('logo');

  if (logo) {
    logo.addEventListener('click', () => {
      window.location.href = './index.html';
    });
  }

  qa('.nav-page a').forEach((link) => {
    link.classList.toggle('active', link.dataset.btn === currentPage);
  });

  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.header-nav');
  const body = document.body;

  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');

    hamburger.classList.toggle('open', isOpen);
    body.classList.toggle('no-scroll', isOpen); // 🔒 lock/unlock scroll
  });

  // auto-close when any nav link is clicked
  qa('.header-list a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      body.classList.remove('no-scroll'); // 🔓 restore scroll
    });
  });
});
