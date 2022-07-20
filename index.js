
const accordions = document.querySelectorAll("#accordionQuestionAnswer")

accordions.forEach(accordionQuestionAnswer => {
    accordionQuestionAnswer.addEventListener("click", () => {
        accordionQuestionAnswer.classList.toggle("active");
    });
});