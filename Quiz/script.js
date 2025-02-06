const questions = [
    {
        question: "Fraudulently travelling or attempting to travel without proper pass or ticket, comes under which railway act section?",
        answers: [
            { text: "138 Rly act", correct: false },
            { text: "140 Rly act", correct: false },
            { text: "137 Rly act", correct: true },
            { text: "139 Rly act", correct: false },
        ]
    },
    {
        question: "Penalty for unauthorised carrying on of business of procuring and supplying of railway tickets, comes in which railway act section?",
        answers: [
            { text: "142 Rly act", correct: false },
            { text: "143 Rly act", correct: true },
            { text: "141 Rly act", correct: false },
            { text: "144 Rly act", correct: false },
        ]
    },
    {
        question: "Prohibition on hawking, etc., and begging in train and railway premises, comes in which railway act section?",
        answers: [
            { text: "142 Rly act", correct: false },
            { text: "144 Rly act", correct: true },
            { text: "145 Rly act", correct: false },
            { text: "143 Rly act", correct: false },
        ]
    },
    {
        question: "Obstructing railway servant in his duties, comes in which railway act section?",
        answers: [
            { text: "144 Rly act", correct: false },
            { text: "146 Rly act", correct: true },
            { text: "145 Rly act", correct: false },
            { text: "147 Rly act", correct: false },
        ]
    },
    {
        question: "Trespass and refusal to desist from trespass, comes in which railway act section?",
        answers: [
            { text: "146 Rly act", correct: false },
            { text: "145 Rly act", correct: false },
            { text: "148 Rly act", correct: false },
            { text: "147 Rly act", correct: true },
        ]
    },
    {
        question: "Endangering safety of persons travelling by railway by wilful act or omission, comes in which railway act section?",
        answers: [
            { text: "150 Rly act", correct: false },
            { text: "152 Rly act", correct: false },
            { text: "153 Rly act", correct: true },
            { text: "151 Rly act", correct: false },
        ]
    },
    {
        question: "Opening or breaking a level crossing gate, comes in which railway act section?",
        answers: [
            { text: "160 Rly act", correct: true },
            { text: "159 Rly act", correct: false },
            { text: "161 Rly act", correct: false },
            { text: "162 Rly act", correct: false },
        ]
    },
    {
        question: "Travelling on roof, step or engine of a train, comes in which railway act section?",
        answers: [
            { text: "155 Rly act", correct: false },
            { text: "156 Rly act", correct: true },
            { text: "154 Rly act", correct: false },
            { text: "157 Rly act", correct: false },
        ]
    },
    {
        question: "Unlawfully bringing dangerous goods on a railway, comes in which railway act section?",
        answers: [
            { text: "162 Rly act", correct: false },
            { text: "163 Rly act", correct: false },
            { text: "161 Rly act", correct: false },
            { text: "164 Rly act", correct: true },
        ]
    },
    {
        question: "Smoking, comes in which railway act section?",
        answers: [
            { text: "166 Rly act", correct: false },
            { text: "167 Rly act", correct: true },
            { text: "168 Rly act", correct: false },
            { text: "165 Rly act", correct: false },
        ]
    },
    {
        question: "Jurisdiction area of the RPF/POST/GHY is?",
        answers: [
            { text: "6/10 to 12/0", correct: true },
            { text: "5/10 to 10/0", correct: false },
            { text: "5/10 to 12/0", correct: false },
            { text: "6/10 to 10/0", correct: false },
        ]
    },
    {
        question: "Black spot of RPF/POST/GHY is?",
        answers: [
            { text: "Maligaon/Guwahati", correct: false },
            { text: "Paltan Bazar/Guwahati", correct: false },
            { text: "Pubit line/Guwahati", correct: true },
            { text: "Bamunimaidan/Guwahati", correct: false },
        ]
    },
    {
        question: "Major run over section of RPF/POST/GHY is?",
        answers: [
            { text: "Guwahati - NBQ", correct: false },
            { text: "Guwahati - KYQ", correct: true },
            { text: "Guwahati - LMG", correct: false },
            { text: "Guwahati - RNY", correct: false },
        ]
    },
    {
        question: "Present officers and staffs strength of RPF/POST/GHY is?",
        answers: [
            { text: "140", correct: false },
            { text: "150", correct: false },
            { text: "120", correct: false },
            { text: "130", correct: true },
        ]
    },
    {
        question: "Total number of RPF Outposts under RPF/POST/GHY jurisdiction?",
        answers: [
            { text: "2", correct: true },
            { text: "1", correct: false },
            { text: "4", correct: false },
            { text: "3", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const regionSelect = document.getElementById("region");

let currentQuestionIndex = 0;
let score = 0;
let filteredQuestions = [];

function startQuiz() {
    const selectedRegion = regionSelect.value;
    if (selectedRegion === "Kolkata") {
        filteredQuestions = questions.slice(0, 5);
    } else if (selectedRegion === "Newalipur") {
        filteredQuestions = questions.slice(5, 10);
    }
    else if (selectedRegion === "Guwahati") {
        filteredQuestions = questions.slice(10, 15);
    }
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = filteredQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${filteredQuestions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < filteredQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < filteredQuestions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startButton.addEventListener("click", startQuiz);