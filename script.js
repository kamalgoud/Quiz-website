const quizDB=[
    {
        question: "Q1: What is full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: Which of the following tag is used for inserting the largest heading in HTML?",
        a: "head",
        b: "h1",
        c: "h6",
        d: "heading",
        ans: "ans2"
    },
    {
        question: "Q3: What is full form of HTTP?",
        a: "HyperText Transform Product",
        b: "Hey Text Type Protocol",
        c: "HyperText Transform Product",
        d: "HyperText Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the correct syntax of doctype in HTML5?",
        a: "/doctype html",
        b: "doctype html",
        c: "doctype html!",
        d: "!doctype html",
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