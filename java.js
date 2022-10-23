const quizDB=[
    {
        question: "Q1: Who invented Java Programming?",
        a: "Guido van Rossum",
        b: "James Gosling",
        c: "Dennis Ritchie",
        d: "Bjarne Stroustrup",
        ans: "ans2"
    },
    {
        question: "Q2: Which component is used to compile, debug and execute the java programs?",
        a: "JRE",
        b: "JIT",
        c: "JDK",
        d: "JVM",
        ans: "ans3"
    },
    {
        question: "Q3: Which one of the following is not a Java feature?",
        a: "Object-oriented",
        b: "Use of pointers",
        c: "Portable",
        d: "Dynamic and Extensible",
        ans: "ans2"
    },
    {
        question: "Q4: Which of these cannot be used for a variable name in Java?",
        a: "identifier & keyword",
        b: "identifier",
        c: "keyword",
        d: "none of the mentioned",
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