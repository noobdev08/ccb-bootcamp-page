import { createHeader } from "../components/header.js";
import { createFooter } from "../components/footer.js";

createHeader("header");
createFooter("footer-container");


const testimonials =[
{
    name: "Chinweike David Chinedu", 
    text: "The Code & Create Bootcamp was an incredibly impactful experience. Over three months, I gained practical web development skills, built real projects, and grew more confident as a developer. The supportive mentorship and structured learning made the journey both effective and enjoyable. I’m truly grateful for the knowledge and guidance that now empower me to excel in real-world projects.",
    cohort: "Cohort 1",
    status: "Completed",
    track: "Web Development",
    image: "assets/Images/David.png",
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

function loadTestimonial(index) {
    card.style.opacity = 0;

    setTimeout(() => {
    document.getElementById("userName").textContent=testimonials[index].name;

    document.getElementById("userText").textContent=testimonials[index].text;

    document.getElementById("userCohort").textContent=testimonials[index].cohort;

    document.getElementById("userImage").src=testimonials[index].image;

    document.getElementById("userStatus").textContent=testimonials[index].status;

    document.getElementById("userTrack").textContent=testimonials[index].track;

    card.style.opacity = 1;
    }, 200);
}


function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    loadTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    loadTestimonial(currentIndex);
}

document.getElementById("next").addEventListener("click", nextTestimonial);
document.getElementById("prev").addEventListener("click", prevTestimonial);

loadTestimonial(currentIndex);


const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {

    faqs.forEach(item => {
        if (item !== faq){
            item.classList.remove("active");
        }
    });

        faq.classList.toggle("active");

  });
});

