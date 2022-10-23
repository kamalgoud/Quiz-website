const quizDB=[
    {
        question: "Q1: Who is the father of C language?",
        a: "Steve Jobs",
        b: "James Gosling",
        c: "Dennis Ritchie",
        d: "Rasmus Lerdorf",
        ans: "ans3"
    },
    {
        question: "Q2: Which of the following is not a valid C variable name?",
        a: "int number",
        b: "float rate",
        c: "int variable_count",
        d: "int $main",
        ans: "ans4"
    },
    {
        question: "Q3: Which of the following cannot be a variable name in C?",
        a: "volatile",
        b: "true",
        c: "friend",
        d: "export",
        ans: "ans1"
    },
    {
        question: "Q4: Which keyword is used to prevent any changes in the variable within a C program?",
        a: "immutable",
        b: "mutable",
        c: "const",
        d: "volatile",
        ans: "ans3"
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