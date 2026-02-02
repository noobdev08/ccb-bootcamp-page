export function createHeader(containerId = "header") {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Header container #${containerId} not found`);
    return;
  }

  container.innerHTML = `
    <header class="site-header">
      <img class="header-logo" src="./assets/images/logo.png" alt="Bootcamp logo" />

      <nav>
        <ul class="header-list">
          <li class="nav-page"><a data-btn="home" href="/index.html">Home</a></li>
          <li class="nav-page"><a data-btn="about" href="/About.html">About</a></li>
          <li class="nav-page"><a data-btn="tracks" href="/tracks.html">Tracks</a></li>
          <li class="nav-page"><a data-btn="testimonials" href="/testimonial.html">Testimonials</a></li>
        </ul>
      </nav>

      <a class="header-btn" href="https://forms.gle/zP4DL7qA1WfreTGm8" style="color: black">Apply Now</a>
    </header>
  `;
}

const qa = (s) => document.querySelectorAll(s);

document.addEventListener("DOMContentLoaded", () => {
  navBtn = qa(".nav-page a");
  if (!navBtn.length) return;

  const currentPage = document.body.dataset.page;

  navBtn.forEach((btn) => {
    const btnPage = btn.dataset.btn;
    btn.classList.toggle("active", btnPage === currentPage);
  });
});
