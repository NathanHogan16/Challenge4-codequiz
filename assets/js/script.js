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

