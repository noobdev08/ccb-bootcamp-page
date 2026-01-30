import { testimonialsData, projectData } from "../components/bootcampData.js";
import { createShowcaseFooter } from "../components/footerShowcase.js";

createShowcaseFooter("footer-showcase-container");

const container = document.getElementById("testimonials");

container.innerHTML = testimonialsData
  .map(
    ({ name, track, avatar, quote }) => `
    <article class="testimonial-card">
      <img src="${avatar}" alt="${name}" />
      <h3>${name}</h3>
      <p class="track">${track} Track</p>
      <p class="quote">“${quote}”</p>
    </article>
  `,
  )
  .join("");

const projectsContainer = document.getElementById("project-cards");

projectsContainer.innerHTML = projectData
  .map(
    ({ image, alt, title, team }) => `
    <article class="project-card">
      <img src="${image}" alt="${alt}" />
      <h3>${title}</h3>
      <p class="team">${team}</p>
    </article>
  `,
  )
  .join("");