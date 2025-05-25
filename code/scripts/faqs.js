const faqs = [
    {
        question: "How much are tickets?",
        answer: "Adult (16+) tickets: £10. Children (5-16): £5. OAPs and Children under 5 go free."
    },
    {
        question: "Are dogs allowed?",
        answer: "Only guide dogs are allowed to make sure that the animals don't get scared."
    },
    {
        question: "Are parking spaces available onsite?",
        answer: "We have 2 car parks: a main one and an overflow one."
    },
    {
        question: "Can I bring a group to the zoo?",
        answer: "Of course you can! For groups larger than 10 people, contact us for an exclusive discount!"
    },
    {
        question: "Can visitors feed the animals?",
        answer: "To ensure that our animals have the most natural life possible, we do not handle the majority of our animals. You can however get closer to a lot of the animals on site, including our friendly farm animals in the Village Farm."
    },
    {
        question: "What are your opening hours?",
        answer: "We are open daily from 9:00 AM to 5:00 PM, with last entry at 4:00 PM. Please check our website for seasonal variations or special event hours."
    },
    {
        question: "Is the zoo wheelchair accessible?",
        answer: "Yes, the zoo is largely wheelchair accessible with paved paths throughout. We also have accessible restrooms and designated parking spaces. Wheelchairs are available for rent at the main entrance on a first-come, first-served basis."
    },
    {
        question: "Do you have food and drink options available?",
        answer: "Absolutely! We have several cafes and kiosks offering a variety of snacks, meals, and beverages located throughout the zoo. You're also welcome to bring your own picnic to enjoy in our designated picnic areas."
    },
    {
        question: "Can I book tickets in advance?",
        answer: "We highly recommend booking your tickets online in advance to guarantee entry, especially during peak seasons and holidays. This also helps with faster entry on arrival."
    },
    {
        question: "What happens if it rains?",
        answer: "The zoo remains open in most weather conditions. Many of our animal habitats have indoor viewing areas, and there are covered pathways and sheltered spaces throughout the park. We recommend checking the weather forecast before your visit and dressing appropriately."
    },
    {
        question: "Do you offer educational programs or animal encounters?",
        answer: "Yes, we offer a variety of educational programs for schools and groups, as well as daily animal talks and demonstrations that are open to all visitors. Check our daily schedule upon arrival for times and locations of these activities."
    }
];

function createQuestion(faq) {
    const allFAQs = document.querySelector('.faqs');

    const questionAnswer = document.createElement('article');
    questionAnswer.classList.toggle('faq-item');

    const question = document.createElement('button');
    question.classList.toggle('faq-question');
    question.textContent = faq['question'];

    const icon = document.createElement('span');
    icon.textContent = '+';
    icon.classList.toggle('icon');
    question.appendChild(icon);

    const answer = document.createElement('p');
    answer.classList.toggle('faq-answer');
    answer.textContent = faq['answer'];

    questionAnswer.appendChild(question);
    questionAnswer.appendChild(answer);
    allFAQs.appendChild(questionAnswer);
}

document.addEventListener('DOMContentLoaded', () => {
    for (let faq of faqs) {
        createQuestion(faq);
    };

    const questions = document.querySelectorAll(".faq-question");
    questions.forEach(question => {
        question.addEventListener("click", () => handleQuestionClick(question));
    });
});

function handleQuestionClick (question) {
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".icon");

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
    } else {
        answer.style.display = "block";
        icon.textContent = "-";
    }
};