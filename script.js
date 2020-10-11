var questions = [
    {
        question : "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
      
        choiceA : "a wrapper",
        choiceB : "a link",
        choiceC : "a cursor",
        choiceD : "a form",
        correct : "A"
    },{
        question : "Which of the following is not a reserved word in JavaScript?",
      
        choiceA : "interface",
        choiceB : "throws",
        choiceC : "program",
        choiceD : "short",
        correct : "B"
    },{
        question : "What should appear at the very end of your JavaScript?",
       
        choiceA : "The </script>",
        choiceB : "The <script>",
        choiceC : "The END statement",
        choiceD : "None of the above",
        correct : "A"
    },{
        question : "Which of the following is not a valid JavaScript variable name?",
       
        choiceA : "2names",
        choiceB : "_first_and_last_names",
        choiceC : "FirstAndLast",
        choiceD : "None of the above",
        correct : "A"
    },{
        question : "Which of the following attribute can hold the JavaScript version?",
        choiceA : "SCRIPT",
        choiceB : "None of these options",
        choiceC : "VERSION",
        choiceD : "LANGUAGE",
        correct : "D"
    }
];
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
var score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML =  q.question ;

    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    
}

start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    

}
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
}
function answerIsCorrect(){
    document.getElementById(runningQuestion);
}
function answerIsWrong(){
    document.getElementById(runningQuestion);
}