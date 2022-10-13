// Our main CSS
import '../css/app.css'

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

 import axios from 'axios';
import { get } from 'lodash';
 window.axios = axios;

 window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const firstPage = document.getElementById('firstPage');
const questionPage = document.getElementById('questionPage');
const answerPage = document.getElementById('answerPage');
const resultPage = document.getElementById('resultPage');

const maxQuestions = 5;
let questionCounter = 0;
let correctAnswer = 0;

 document.getElementById('startButton').onclick = function(){
    firstPage.style.display = "none";
    questionPage.style.display = "block";
    questionCounter++;
    document.getElementById('questionCounter').innerHTML = `Fråga ${questionCounter} av ${maxQuestions}`;

 }

 document.getElementById('answerButton').onclick = function(){
   questionPage.style.display = "none";
   answerPage.style.display = "block"; 
   document.getElementById('questionCounter2').innerHTML = `Fråga ${questionCounter} av ${maxQuestions}`;
   questionCounter++;
   document.getElementById('questionCounter').innerHTML = `Fråga ${questionCounter} av ${maxQuestions}`;
     
 }

 document.getElementById('yesButton').onclick = function(){
   correctAnswer++;
   if(questionCounter > maxQuestions){
      document.getElementById('result').innerHTML = `${correctAnswer} av ${maxQuestions}`
      answerPage.style.display = "none";
      resultPage.style.display = "block";
   }
   else{
      answerPage.style.display = "none";
      questionPage.style.display = "block";
   }
   
 }

 document.getElementById('noButton').onclick = function(){
   if(questionCounter > maxQuestions){
      answerPage.style.display = "none";
      resultPage.style.display = "block";
      document.getElementById('result').innerHTML = `${correctAnswer} av ${maxQuestions}`;
   }
   else{
      answerPage.style.display = "none";
      questionPage.style.display = "block";
   }

 }

 document.getElementById('playAgainButton').onclick = function(){
    questionCounter = 0;
    correctAnswer = 0;
    resultPage.style.display = "none";
    firstPage.style.display = "block";
 }






