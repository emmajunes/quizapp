// Our main CSS
import '../css/app.css'

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
import { get } from 'lodash';
import { doc } from 'prettier';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const startPage = document.getElementById('startPage');
const questionPage = document.getElementById('questionPage');
const answerPage = document.getElementById('answerPage');
const resultPage = document.getElementById('resultPage');
const logo = document.getElementById('logo');
const logoText = document.getElementById('logoText');
const leftBlob = document.getElementById('leftBlob');
const rightBlob = document.getElementById('rightBlob');
let progressbar = document.getElementById('progressbar');
let progressbar2 = document.getElementById('progressbar2');
let filmIndicator = document.getElementById('filmIndicator').children;
let geografiIndicator = document.getElementById('geografiIndicator').children;
let historiaIndicator = document.getElementById('historiaIndicator').children;
let musikIndicator = document.getElementById('musikIndicator').children;
let övrigtIndicator = document.getElementById('övrigtIndicator').children;
let vetenskapIndicator = document.getElementById('vetenskapIndicator').children;
let sportIndicator = document.getElementById('sportIndicator').children;

let category = document.getElementById('category');
let question = document.getElementById('question');
let answer = document.getElementById('answer');


let questions = [];
const maxQuestions = 35;
let questionCounter = 0;
let correctAnswer = 0;
let currentQuestion = null

document.getElementById('startButton').onclick = function () {
   //detta nedan är en funktion som används för att hämta in frågorna från api:et.
   axios.get("/questions").then(response => {
      questions = response.data

      startPage.classList.remove('scale-100');
      startPage.classList.add('scale-0');

      startPage.addEventListener('transitionend',function(){
         startPage.style.display = "none";
         questionPage.style.display = "block";
         setTimeout(()=>{
            questionPage.classList.remove('scale-0');
            questionPage.classList.add('scale-100');
         },0)
   })
      questionCounter++;

      currentQuestion = questions[questionCounter - 1]

      document.getElementById('category').innerHTML = currentQuestion['category'];
      document.getElementById('question').innerHTML = currentQuestion['question'];
      document.getElementById('answer').innerHTML = currentQuestion['answer'];

      document.getElementById('questionCounter').innerHTML = `Fråga ${questionCounter} av ${maxQuestions}`;

      setTimeout(()=>{
         progressbar.style.width = (questionCounter / maxQuestions) * 100 + "%";
         progressbar2.style.width = (questionCounter / maxQuestions) * 100 + "%";
      },100) //varför behöver jag skriva detta värde?
   
   });

 
   
}

document.getElementById('answerButton').onclick = function () {
   questionPage.style.display = "none";
   answerPage.style.display = "block";
   logoText.style.color = "white";
   logo.src = "/images/LogoWhite.svg";
   leftBlob.src = "/images/LeftBlobWhite.svg";
   rightBlob.src = "/images/RightBlobWhite.svg";

   document.getElementById('questionCounter2').innerHTML = `Fråga ${questionCounter} av ${maxQuestions}`;
}

function nextQuestion() {
   questionCounter++;
   document.getElementById('questionCounter').innerHTML = `Fråga ${questionCounter} av ${maxQuestions}`;
   setTimeout(()=>{
      progressbar.style.width = (questionCounter / maxQuestions) * 100 + "%";
   })
   
  

   logoText.style.color = "darkblue";
   logo.src = "/images/Logo.svg";
   leftBlob.src = "/images/LeftBlob.svg";
   rightBlob.src = "/images/RightBlob.svg";

   setTimeout(()=>{
      progressbar2.style.width = (questionCounter / maxQuestions) * 100 + "%";
   })

   document.getElementById('result').innerHTML = `${correctAnswer} av ${maxQuestions}`
   answerPage.style.display = "none";
   resultPage.style.display = "block";
   
   if (questionCounter > maxQuestions) {
      for (let i = 0; i < filmCounter; i++) {
       
         filmIndicator[i].classList.remove("bg-grey");
         filmIndicator[i].classList.add("bg-green");
      }
      for (let i = 0; i < geografiCounter; i++) {
       
         geografiIndicator[i].classList.remove("bg-grey");
         geografiIndicator[i].classList.add("bg-green");
      }
      for (let i = 0; i < historiaCounter; i++) {
       
         historiaIndicator[i].classList.remove("bg-grey");
         historiaIndicator[i].classList.add("bg-green");
      }
      for (let i = 0; i < musikCounter; i++) {
       
         musikIndicator[i].classList.remove("bg-grey");
         musikIndicator[i].classList.add("bg-green");
      }
      for (let i = 0; i < övrigtCounter; i++) {
       
         övrigtIndicator[i].classList.remove("bg-grey");
         övrigtIndicator[i].classList.add("bg-green");
      }
      for (let i = 0; i < vetenskapCounter; i++) {
       
         vetenskapIndicator[i].classList.remove("bg-grey");
         vetenskapIndicator[i].classList.add("bg-green");
      }
      for (let i = 0; i < sportCounter; i++) {
       
         sportIndicator[i].classList.remove("bg-grey");
         sportIndicator[i].classList.add("bg-green");
      }
   } else {
      currentQuestion = questions[questionCounter - 1]
      document.getElementById('category').innerHTML = currentQuestion['category'];
      document.getElementById('question').innerHTML = currentQuestion['question'];
      document.getElementById('answer').innerHTML = currentQuestion['answer'];
      answerPage.style.display = "none";
      questionPage.style.display = "block";
   }


}

let filmCounter = 0;
let geografiCounter = 0;
let historiaCounter = 0;
let musikCounter = 0;
let övrigtCounter = 0;
let vetenskapCounter = 0;
let sportCounter = 0;

document.getElementById('yesButton').onclick = function () {
   if (currentQuestion.category === 'Film & TV') {
      filmCounter++
   }

   if (currentQuestion.category === 'Geografi') {
      geografiCounter++
   }

   if (currentQuestion.category === 'Historia') {
      historiaCounter++
   }

   if (currentQuestion.category === 'Musik') {
      musikCounter++
   }

   if (currentQuestion.category === 'Övrigt') {
      övrigtCounter++
   }

   if (currentQuestion.category === 'Vetenskap') {
      vetenskapCounter++
   }

   if (currentQuestion.category === 'Sport') {
      sportCounter++
   }

   correctAnswer++;

   nextQuestion()
}

document.getElementById('noButton').onclick = function () {
   nextQuestion()
}

document.getElementById('playAgainButton').onclick = function () {
   questionCounter = 0;
   correctAnswer = 0;
   resultPage.style.display = "none";
   startPage.style.display = "block";
}






