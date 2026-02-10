import { createHeader } from "../components/header.js";
import { createFooter } from "../components/footer.js";

createHeader("header");
createFooter("footer-container");

// Roll Number Animation Function
function rollNumber(elementId, finalNumber, duration = 2000, showPlus = false) {
  const element = document.getElementById(elementId);
  const startTime = performance.now();
  const start = 0;
  const suffix = showPlus ? ' +' : '';

  function update(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const current = Math.floor(progress * finalNumber);
    element.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = finalNumber.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(update);
}

// Intersection Observer to trigger animation when section is visible
const accomplishmentSection = document.getElementById("accomplishment");
if (accomplishmentSection) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // Start animations with staggered timing
      rollNumber("counter-tracks", 5, 4000);
      setTimeout(() => rollNumber("counter-capstone", 19, 4000), 100);
      setTimeout(() => rollNumber("counter-admitted", 400, 4000, true), 200);
      setTimeout(() => rollNumber("counter-graduated", 140, 4000, true), 300);
      
      // Stop observing after animation starts
      observer.unobserve(accomplishmentSection);
    }
  }, { threshold: 0.5 });
  
  observer.observe(accomplishmentSection);
}

// Reveal-on-scroll for elements with `.reveal`
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));
}


const testimonials =[
{
    name: "Chinweike David Chinedu", 
    text: "The Code & Create Bootcamp was an incredibly impactful experience. Over three months, I gained practical web development skills, built real projects, and grew more confident as a developer. The supportive mentorship and structured learning made the journey both effective and enjoyable. I’m truly grateful for the knowledge and guidance that now empower me to excel in real-world projects.",
    cohort: "Cohort 1",
    status: "Completed",
    track: "Web Development",
    image: "assets/Images/David.jpg",
},
{
    name: "Igwe Favour",
    text: "Code & Create bootcamp transformed how I approach tech and design. From hands-on projects to mentor feedback and a supportive community, every part of the journey challenged me to grow. I gained real skills, confidence, and a strong foundation for my tech journey.",
    cohort: "Cohort 1",
    status: "Completed",
    track: "UI/UX Product Design",
    image: "assets/Images/igwe.png",
},
{
    name: "Iwuoha Vera",
    text: "Before joining the Code and Create Bootcamp, tech felt confusing and overwhelming. But the program completely transformed my perspective, equipping me with strong knowledge in product management from ideation to launch. Thanks to this bootcamp, I’ve confidently broken free from tech illiteracy and now feel empowered to thrive in the tech space.",
    cohort: "Cohort 1",
    status: "Completed",
    track: "Product Management",
    image: "assets/Images/vera.png",
},
{
    name: "Sarah Gabriel",
    text: "Joining the Data Analysis track at Code & Create Bootcamp transformed my learning journey. It helped me understand how data drives real decisions while offering practical, structured, and engaging learning. Working on real projects and collaborating with a team boosted my confidence, and I now strongly recommend the program to anyone who wants solid, hands-on data analysis skills.",
    cohort: "Cohort 1",
    status: "Completed",
    track: "Data Analysis",
    image: "assets/Images/sarah.png",
},
{
    name: "Jennifer Okwueri",
    text: "Joining the Data Analysis track at Code & Create Bootcamp transformed my learning journey. It helped me understand how data drives real decisions while offering practical, structured, and engaging learning. Working on real projects and collaborating with a team boosted my confidence, and I now strongly recommend the program to anyone who wants solid, hands-on data analysis skills.",
    cohort: "Cohort 1",
    status: "Completed",
    track: "Product Design",
    image: "assets/Images/Jennifer.png",
}
];

let currentIndex = 0;

const card = document.querySelector(".testimonial-card");
let touchStartX = 0;
let touchEndX = 0;

function loadTestimonial(index) {
  // remove show class to trigger slide-out
  card.classList.remove('show');

  // wait for slide-out to finish, then update content and slide-in
  setTimeout(() => {
  document.getElementById("userName").textContent = testimonials[index].name;

  document.getElementById("userText").textContent = testimonials[index].text;

  document.getElementById("userCohort").textContent = testimonials[index].cohort;

  document.getElementById("userImage").src = testimonials[index].image;

  document.getElementById("userStatus").textContent = testimonials[index].status;

  document.getElementById("userTrack").textContent = testimonials[index].track;

  // add class to animate slide-in
  requestAnimationFrame(() => card.classList.add('show'));
  }, 300);
}


function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    loadTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    loadTestimonial(currentIndex);
}

// Touch event listeners for swipe functionality
card.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

card.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    // Swiped left - show next testimonial
    if (diff > swipeThreshold) {
        nextTestimonial();
    }
    
    // Swiped right - show previous testimonial
    if (diff < -swipeThreshold) {
        prevTestimonial();
    }
}

document.getElementById("next").addEventListener("click", nextTestimonial);
document.getElementById("prev").addEventListener("click", prevTestimonial);

loadTestimonial(currentIndex);


const faqs = document.querySelectorAll(".faq-item");

if (faqs.length) {
  faqs.forEach(faq => {
    const ans = faq.querySelector('.faq-answer');
    faq.setAttribute('aria-expanded', 'false');
    if (ans) ans.setAttribute('aria-hidden', 'true');
  });

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faqs.forEach(item => {
        if (item !== faq) {
          item.classList.remove("active");
          item.setAttribute('aria-expanded', 'false');
          const a = item.querySelector('.faq-answer');
          if (a) a.setAttribute('aria-hidden', 'true');
        }
      });

      faq.classList.toggle("active");
      const isActive = faq.classList.contains('active');
      faq.setAttribute('aria-expanded', String(isActive));
      const answer = faq.querySelector('.faq-answer');
      if (answer) answer.setAttribute('aria-hidden', String(!isActive));
    });
  });
}

