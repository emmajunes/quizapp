// Our main CSS
import '../css/app.css'
import './animation.js'

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
import { defaultsDeep, fill, get } from 'lodash';
import { doc } from 'prettier';
import slugify from 'slugify';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const startPage = document.getElementById('startPage');
const questionPage = document.getElementById('questionPage');
const answerPage = document.getElementById('answerPage');
const resultPage = document.getElementById('resultPage');
const body = document.body;
const logo = document.getElementById('logo');
const logoText = document.getElementById('logoText');

let blob = document.getElementsByClassName('blob');
let category = document.getElementById('category');
let question = document.getElementById('question');
let answer = document.getElementById('answer');
let questionNumber = document.getElementById('questionNumber');
let progressbar = document.getElementById('progressbar');
let progressbarCounter = document.getElementById('progressbarCounter');
let progressbarLine = document.getElementById('progressbarLine');
let result = document.getElementById('result');

let questions = [];
const maxQuestions = 35;
let currentQuestion = null
let questionCounter = 0;
let correctAnswer = 0;
let correctCategory = {};

const animationDuration = 300;

//********startButton click********//
document.getElementById('startButton').onclick = function () {

   axios.get("/questions").then(response => {
      questions = response.data

      startPage.classList.remove('scale-100');
      startPage.classList.add('scale-0');

      setTimeout(() => {
         questionCounter++;
         currentQuestion = questions[questionCounter - 1]
         category.innerHTML = currentQuestion['category'];
         question.innerHTML = currentQuestion['question'];
         answer.innerHTML = currentQuestion['answer'];
         questionNumber.innerHTML = `Fråga ${questionCounter} av ${maxQuestions}`;
         progressbarCounter.style.width = (questionCounter / maxQuestions) * 100 + "%";
         startPage.style.display = "none";
         questionPage.style.display = "block";
         progressbar.style.display = "block";
      }, animationDuration)

      setTimeout(() => {
         questionPage.classList.remove('scale-0');
         questionPage.classList.add('scale-100');
      }, animationDuration * 1.5)

   });

}

//********answerButton click********//
document.getElementById('answerButton').onclick = function () {
   questionPage.classList.remove('scale-100');
   questionPage.classList.add('scale-0');

   setTimeout(() => {
      body.classList.remove("bg-white");
      body.classList.add("bg-lightblue");
      logo.src = "/images/LogoWhite.svg";
      logoText.classList.remove("text-darkblue");
      logoText.classList.add("text-white");
      blob[0].classList.remove("text-lightblue");
      blob[0].classList.add("text-white");
      blob[1].classList.remove("text-lightblue");
      blob[1].classList.add("text-white");
      questionNumber.classList.remove("text-darkblue");
      questionNumber.classList.add("text-white");
      progressbarCounter.classList.remove("bg-darkblue");
      progressbarCounter.classList.add("bg-white");
      progressbarLine.classList.remove("bg-lightblue");
      progressbarLine.classList.add("bg-white");
      
      questionPage.style.display = "none";
      answerPage.style.display = "block";
   }, animationDuration)

   setTimeout(() => {
      answerPage.classList.remove('scale-0');
      answerPage.classList.add('scale-100');
   }, animationDuration * 1.5)

}

//********nextQuestion when click on yes or no********//
function nextQuestion() {

   answerPage.classList.remove('scale-100');
   answerPage.classList.add('scale-0');

   questionCounter++;

   setTimeout(() => {
      body.classList.remove("bg-lightblue");
      body.classList.add ("bg-white");
      logo.src = "/images/Logo.svg";
      logoText.classList.remove("text-white");
      logoText.classList.add("text-darkblue");
      blob[0].classList.remove("text-white");
      blob[0].classList.add("text-lightblue");
      blob[1].classList.remove("text-white");
      blob[1].classList.add("text-lightblue");
      questionNumber.classList.remove("text-white");
      questionNumber.classList.add("text-darkblue");
      progressbarCounter.classList.remove("bg-white");
      progressbarCounter.classList.add("bg-darkblue");
      progressbarLine.classList.remove("bg-white");
      progressbarLine.classList.add("bg-lightblue");
   }, animationDuration)

   if (questionCounter > maxQuestions) {

      for (let key in correctCategory) {

         for(let i = 0; i < correctCategory[key].length; i++){
            document.getElementById(key).children[i].classList.remove("bg-grey")
            document.getElementById(key).children[i].classList.add("bg-green");
      }
      }

      result.innerHTML = `${correctAnswer} av ${maxQuestions}`;

      setTimeout(() => {
         answerPage.style.display = "none";
         progressbar.style.display = "none";
         resultPage.style.display = "block";
      }, animationDuration)

      setTimeout(() => {
         resultPage.classList.remove('scale-0');
         resultPage.classList.add('scale-100');
      }, animationDuration * 1.5)

   } else {

      setTimeout(() => {
         answerPage.style.display = "none";
         questionPage.style.display = "block";
         currentQuestion = questions[questionCounter - 1]
         category.innerHTML = currentQuestion['category'];
         question.innerHTML = currentQuestion['question'];
         answer.innerHTML = currentQuestion['answer'];
         progressbarCounter.style.width = (questionCounter / maxQuestions) * 100 + "%";
         questionNumber.innerHTML = `Fråga ${questionCounter} av ${maxQuestions}`;
      }, animationDuration)

      setTimeout(() => {
         questionPage.classList.remove('scale-0');
         questionPage.classList.add('scale-100');
      }, animationDuration * 1.5)
   }
}

//********yesButton********//
document.getElementById('yesButton').onclick = function () {
   let categorySlug = slugify(category.textContent, {lower:true, replacement:'-'});
   
   correctCategory[categorySlug] = correctCategory[categorySlug] || []
   correctCategory[categorySlug].push(1)
   
   correctAnswer++;

   nextQuestion()
}

//********noButton********//
document.getElementById('noButton').onclick = function () {
   nextQuestion()
}

//********playagainButton********//
document.getElementById('playAgainButton').onclick = function () {
   questionCounter = 0;
   correctAnswer = 0;

   resultPage.classList.remove('scale-100');
   resultPage.classList.add('scale-0');

   for (let key in correctCategory) {

      for(let i = 0; i < correctCategory[key].length; i++){
         document.getElementById(key).children[i].classList.remove("bg-green");
         document.getElementById(key).children[i].classList.add("bg-grey");
      }
   }

   correctCategory = {};

   setTimeout(() => {
      resultPage.style.display = "none";
      startPage.style.display = "block";
   }, animationDuration)
   setTimeout(() => {
      startPage.classList.remove('scale-0');
      startPage.classList.add('scale-100');
   }, animationDuration * 1.5)

}

