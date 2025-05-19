const faqs = [
    {
        question: "Are dogs allowed?",
        answer: "Only guide dogs are allowed to make sure that the animals don't get scared."
    },
    {
        question: "Are parking spaces available onsite?",
        answer: "We have 2 car parks: a main one and an overflow one."
    },
    {
        question: "Are parking spaces available onsite?",
        answer: "We have 2 car parks: a main one and an overflow one."
    },
]

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