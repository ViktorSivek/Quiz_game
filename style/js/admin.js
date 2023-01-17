const questionsList = document.getElementById("questionsList");
const Questions = JSON.parse(localStorage.getItem("Questions")) || [];

console.log(Questions)
console.log(questionsList)
questionsList.innerHTML = Questions
    .map(newQuestion => {
        return `
        <h2 class="text-center">${newQuestion.newQuestion}</h2>
        <div class="question-container">
            <p class="question-prefix">A</p>
            <p class="question-text">${newQuestion.choice1}</p>
        </div>
        <div class="question-container">
            <p class="question-prefix">B</p>
            <p class="question-text">${newQuestion.choice2}</p>
        </div>
        <div class="question-container">
            <p class="question-prefix">C</p>
            <p class="question-text">${newQuestion.choice3}</p>
        </div>
        <div class="question-container">
            <p class="question-prefix">D</p>
            <p class="question-text">${newQuestion.choice4}</p>
        </div>
        
        <p class="new-Question">Correct Answer - ${newQuestion.answer}</p>`;
    })
    .join("");