const quizDB=[
    {
        question: "Q1: What is C++?",
        a: "C++ is an object oriented programming language",
        b: "C++ is a procedural programming language",
        c: "C++ supports both procedural and object oriented programming language",
        d: "C++ is a functional programming language",
        ans: "ans3"
    },
    {
        question: "Q2: Which of the following is not a type of Constructor in C++?",
        a: "Default constructor",
        b: "Parameterized constructor",
        c: "Copy constructor",
        d: "Friend constructor",
        ans: "ans4"
    },
    {
        question: "Q3: Which of the following is correct about this pointer in C++?",
        a: "this pointer is passed as a hidden argument in all static variables of a class",
        b: "this pointer is passed as a hidden argument in all the functions of a class",
        c: "this pointer is passed as a hidden argument in all non-static functions of a class",
        d: "this pointer is passed as a hidden argument in all static functions of a class",
        ans: "ans3"
    },
    {
        question: "Q4: Which of the following type is provided by C++ but not C?",
        a: "double",
        b: "float",
        c: "int",
        d: "bool",
        ans: "ans4"
    },
];

const question=document.getElementById("question");
const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const option4=document.getElementById("option4");
const submit=document.getElementById("submit");
const answers=document.querySelectorAll('.answer')
const showScore=document.querySelector('#showScore');      

let questionCount=0;
let score=0;
function loadQuestion ()  {
    const c=quizDB[questionCount];
    question.innerHTML=c.question;
    option1.innerHTML=c.a;
    option2.innerHTML=c.b;
    option3.innerHTML=c.c;
    option4.innerHTML=c.d;
}
loadQuestion();

function getCheckAnswer(){
    let answer;
    answers.forEach((curAnsElement) => {
        if(curAnsElement.checked){
            answer = curAnsElement.id;
            return answer; 
        }
    }) 
    return answer
}

function deselectAll(){
    answers.forEach((curAnsElement) => curAnsElement.checked=false);
}

submit.addEventListener('click',() => {
    const checkAnswer=getCheckAnswer();
    if(checkAnswer == quizDB[questionCount].ans){
        score++;
    }
    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML= "Your score is "+score;
        var b=document.createElement("button");
        b.innerHTML="HOME";
        b.class="b";
        showScore.appendChild(b);
        b.addEventListener('click',function(){
            window.location='home.html';
        })
        showScore.classList.remove('scoreArea');
    }

})