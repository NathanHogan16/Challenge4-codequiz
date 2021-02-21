// variables
let questionIndex = 0;

let timerId;
let timerEl = document.getElementById("time");
let startButtonEl = document.getElementById("start-button");
let questionsEl = document.getElementById("questions");
let choicesEl = document.getElementById("choices");
let initialsEl = document.getElementById("initials");
let submitButtonEl = document.getElementById("submit");
let scores = [];
let highScores = document.getElementById("highscores");


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

let time = questions.length * 15;



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

    let titleEl = document.getElementById("questions-title");
    titleEl.textContent = currentQuestion.title;

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
            time -= 15;
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

    
    finalScoreEl.textContent = time;

    questionsEl.setAttribute("class", "hide");
    

}
let finalScoreEl = document.getElementById("final-score");
function clockTick() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}



submitButtonEl.onclick = ()=> {
    //let score = finalScoreEl.value;
    let input = initialsEl.value;

    console.log(time);
    console.log(input);

    //make leader board array from getstoarge
    //push newScore to leader board array 
    //set item leader board array using spraed oporator ....
    let leaderBoard = [];
    let topScores = JSON.parse(localStorage.getItem("score"));
    if(topScores) {
        leaderBoard.push(...topScores);
        
    } 
    leaderBoard.push({"user":input,"score":time});

    
    console.log(leaderBoard);

    // getScores = JSON.parse(localStorage.getItem(leaderBoard)) || [];

    // highScores.innerHTML = leaderBoard.map(score => {
    //     return leader

    

    let table = ()=> {
        //iterate thorugh leaderboard array with for loop, create table based on score and display for users
        for (let i = 0; i < leaderBoard.length; i++) {
            leaderBoard += names[i] + ", " + scores[i];
            let list = document.createElement("li");
            list.setAttribute("value", highScores[i]);
            highScores.appendChild("high-score");
        }

        //document.jquerySelector("high-scores").value = leaderBoard;
        //highScores.appendChild(list);
    };
    

    localStorage.setItem("score", JSON.stringify(leaderBoard));
    console.log("hi");
};


startButtonEl.onclick = ()=> {
    startQuiz();
}
