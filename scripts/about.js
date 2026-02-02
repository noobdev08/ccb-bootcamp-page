import { createHeader } from "../components/header.js";
import { createFooter } from "../components/footer.js";

createHeader("header");
createFooter("footer-container");

const coreValuesData = [
    {
        title: "Innovation",
        icon: "./assets/Images/bulb.png",
        desc: "We encourage creative thinking and problem-solving, empowering learners to explore new ideas and build solutions that matter."
    },
    {
        title: "Practicality",
        icon: "./assets/Images/ball.png",
        desc: "We focus on hands-on learning and real-world application, ensuring our training translates into usable, industry-relevant skills."
    },
    {
        title: "Growth",
        icon: "./assets/Images/arrow.png",
        desc: "We believe in continuous learning and personal development, supporting our learners as they build confidence."
    },
    {
        title: "Accessibility",
        icon: "./assets/Images/person.png",
        desc: "We are committed to making tech education approachable and inclusive, removing barriers for beginners."
    },
    {
        title: "Community",
        icon: "./assets/Images/people.png",
        desc: "We foster a supportive and collaborative environment where learners, mentors, and instructors grow together."
    }
];

function createValueCards(containerSelector, data) {
    const container = document.querySelector(containerSelector);

    const htmlContent = data.map(item => {
        return `
            <div class="value-card">
                <div class="value-img">
                    <img src="${item.icon}" alt="${item.title} icon">
                </div>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `;
    }).join(''); 

    container.innerHTML = htmlContent;
}

createValueCards('.values-grid', coreValuesData);

function createTeamCard(containerSelector, personName, personRole, customClass = ''){
    const container = document.querySelector(containerSelector);
    
    const bgImage = `./assets/Images/${personName}.png`;

    const classAttr = customClass ? ` class="${customClass}"` : '';
    
    const htmlContent = `
        <div class="teamCard"${classAttr} style="background-image: url('${bgImage}');">
            <div class="banner">
                <div class="name">
                    <h3>${personName}</h3>
                </div>
                <div class="role">
                    <p>${personRole}</p>
                </div> 
            </div>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', htmlContent);
}

createTeamCard('.card1', 'Oko Patricia', 'Program Manager');
createTeamCard('.card1', 'Adina Destiny', 'Social Media Manager');
createTeamCard('.card1', 'Dura Ogochukwu', 'Community Manager');

// Instructors
createTeamCard('.instructors', 'Habibu Haruna', 'Web Development');
createTeamCard('.instructors', 'George Babalola', 'Product Design');
createTeamCard('.instructors', 'Loretta Anyika', 'Data Analysis');
createTeamCard('.instructors', 'Instructor\'s Name', '3D Animation');
createTeamCard('.instructors', 'Veloria Igweogu', 'Product Management');