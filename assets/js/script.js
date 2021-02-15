// variables
let questionIndex = 0;
let time = questions.length * 15;
let timerId;
let timerEl = document.getElementById("time");
let startButtonEl = document.getElementById("start");
let questionsEl = document.getElementById("questions");
let choicesEl = document.getElementById("choices");
let initialsEl = document.getElementById("initials");
let submitButtonEl = document.getElementById("submit");

// Questions
let questions = [
    {
        title:"What color is the sky?",
        choices: ["Red", "White", "Blue"],
        answer: "Blue"
    },
    {
        title: "In Marvel comics who has defeated Thanos?",
        choices: ["Iron Man", "HULK", "Squirrel Girl"],
        answer: "Squirrel Girl"
    },
    {
        title: "Who is the best soccer player in the world?",
        choices: ["Lionel Messi", "Cristiano Ronaldo", "Neymar"],
        answer: "Lionel Messi"
    },
    {
        title: "Who is the best singer in the world",
        choices: ["Taylor Swift", "Madonna", "Yourself"],
        answer: "Taylor Swift"
    },
    {
        title: "What animals are best?",
        choices: ["Dogs","Cats", "Birds"],
        answer: "Dogs"
    }
];

// Start quiz and hide start screen
function startQuiz() {
    let startScreenEl = document.getElementById("start-screen");
    //hide start screen
    startScreenEl.setAttribute("class", "hide");
    // reveail questions
    questionsEl.removeAttribute("class");
    //start timer
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {
    let currentQuestion = questions[questionIndex];

    let titleEl = document.getElementById("question-title");
    titleEl.textContent - currentQuestion.title;

    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i) {
        let choiceSelect = document.createElement("button");
        choiceSelect.setAttribute("class", "choice");
        choiceSelect.setAttribute("value", choice);

        choiceSelect.textContent = i + 1 + ". " + choice;

        choiceSelect.onclick = questionClick;

        choicesEl.appendChild(choiceSelect);
    });
}

function questionClick() {
    if (this.value !== questions[questionIndex].answer) {
            time - 15;
        if (time < 0) {
            time = 0;
        }

        timerEl.textContent = time;
    }

    questionIndex++;

    if (questionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}


function quizEnd() {
    clearInterval(timerId);

    let endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    let finalScore = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    questionsEl.setAttribute("class", "hide");
}

function clockTick() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}