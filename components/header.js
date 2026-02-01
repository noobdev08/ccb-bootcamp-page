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
          <li><a href="/index.html">Home</a></li>
          <li><a href="/About.html">About</a></li>
          <li><a href="/tracks.html">Tracks</a></li>
          <li><a href="/testimonial.html">Testimonials</a></li>
        </ul>
      </nav>

      <a class="header-btn" href="https://forms.gle/zP4DL7qA1WfreTGm8" style="color: black">Apply Now</a>
    </header>
  `;
}