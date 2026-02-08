import { createHeader } from "../components/header.js";
import { createShowcaseFooter } from "../components/footerShowcase.js";
import { tracksData } from "../components/bootcampData.js";

createHeader("header");
createShowcaseFooter("footer-showcase-container");

const tracksContainer = document.getElementById("tracks-container");

tracksContainer.innerHTML = tracksData
  .map((track) => {
    return `
      <article class="track-card" aria-labelledby="track-${track.id}">
        <header class="track-card-header">
          <span>
            <h3 id="track-title">${track.title}</h3>
            <img src="${track.icon.src}" alt="${track.icon.alt}">
          </span>

          <p class="track-description">
            ${track.description}
          </p>
        </header>

        <section class="track-card-section">
          <h4>${track.learningsHeading}</h4>
          <ul class="track-card-list">
            ${track.learnings.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>

        <section class="track-card-section">
          <h4>${track.toolsHeading}</h4>
          <ul class="track-card-list">
            ${track.tools.map((tool) => `<li>${tool}</li>`).join("")}
          </ul>
        </section>

        <section class="track-card-section">
          <h4>${track.outcomeHeading}</h4>
          <p>${track.outcome}</p>
        </section>

        <footer class="track-card-footer">
          <p class="track-card-duration">${track.duration}</p>
          <button class="apply" type="button" onclick="window.location.href='https://forms.gle/zP4DL7qA1WfreTGm8'">
            ${track.ctaLabel}
          </button>
        </footer>
      </article>
    `;
  })
  .join("");

document.addEventListener("DOMContentLoaded", () => {
  const qa = (s) => document.querySelectorAll(s);

  const applyBtn = qa(".apply");

  applyBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let x = e.target.tagName;
      if (!x === "BUTTON") return;
      window.open("https://forms.gle/zP4DL7qA1WfreTGm8", "_blank");
    });
  });
});
