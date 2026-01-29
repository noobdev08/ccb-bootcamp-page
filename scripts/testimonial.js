import { testimonialsData } from "../components/bootcampData.js";
import { createShowcaseFooter } from "../components/footerShowcase.js";

createShowcaseFooter("footer-showcase-container");

// const container = document.getElementById("testimonials");

// container.innerHTML = testimonialsData
//   .map(
//     ({ name, track, avatar, quote }) => `
//     <article class="testimonial-card">
//       <img src="${avatar}" alt="${name}" />
//       <h3>${name}</h3>
//       <p class="track">${track} Track</p>
//       <p class="quote">“${quote}”</p>
//     </article>
//   `,
//   )
//   .join("");