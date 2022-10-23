const quizDB=[
    {
        question: "Q1: What is CSS?",
        a: "CSS is a style sheet language",
        b: "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
        c: "CSS is the language used to style the HTML documents",
        d: "All of the mentioned",
        ans: "ans4"
    },
    {
        question: "Q2: Which of the following CSS selectors are used to specify a group of elements?",
        a: "tag",
        b: "id",
        c: "class",
        d: " both class and tag",
        ans: "ans2"
    },
    {
        question: "Q3: Which of the following has introduced text, list, box, margin, border, color, and background properties?",
        a: "HTML",
        b: "PHP",
        c: "CSS",
        d: "Ajax",
        ans: "ans3"
    },
    {
        question: "Q4: Which of the following CSS property is used to make the text bold?",
        a: "text-decoration: bold",
        b: "font-weight: bold",
        c: "font-style: bold",
        d: "text-align: bold",
        ans: "ans2"
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