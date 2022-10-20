// Our main CSS
import '../css/app.css'

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
import { defaultsDeep, fill, get } from 'lodash';
import { doc } from 'prettier';
import { spline } from '@georgedoescode/spline';
import { createNoise2D } from 'simplex-noise';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const startPage = document.getElementById('startPage');
const questionPage = document.getElementById('questionPage');
const answerPage = document.getElementById('answerPage');
const resultPage = document.getElementById('resultPage');
const logo = document.getElementById('logo');
const logoText = document.getElementById('logoText');
const body = document.body;

let blob = document.getElementsByClassName('blob');
let category = document.getElementById('category');
let question = document.getElementById('question');
let answer = document.getElementById('answer');
let questionNumber = document.getElementById('questionNumber');
let progressbar = document.getElementById('progressbar');
let progressbarCounter = document.getElementById('progressbarCounter');
let progressbarLine = document.getElementById('progressbarLine');
let result = document.getElementById('result');
let filmIndicator = document.getElementById('filmIndicator').children;
let geografiIndicator = document.getElementById('geografiIndicator').children;
let historiaIndicator = document.getElementById('historiaIndicator').children;
let musikIndicator = document.getElementById('musikIndicator').children;
let övrigtIndicator = document.getElementById('övrigtIndicator').children;
let vetenskapIndicator = document.getElementById('vetenskapIndicator').children;
let sportIndicator = document.getElementById('sportIndicator').children;

let questions = [];
const maxQuestions = 35;
let questionCounter = 0;
let correctAnswer = 0;
let currentQuestion = null

const animationDuration = 300;

//********animation blob********//

const path = document.querySelector('path');
const root = document.documentElement;

function createPoints() {
   const points = [];
   const numPoints = 6;
   const angleStep = (Math.PI * 2) / numPoints;
   const rad = 75;

   for (let i = 1; i <= numPoints; i++) {
      // x & y coordinates of the current point
      const theta = i * angleStep;

      const x = 100 + Math.cos(theta) * rad;
      const y = 100 + Math.sin(theta) * rad;

      // store the point
      points.push({
         x: x,
         y: y,
         /* we need to keep a reference to the point's original {x, y} coordinates 
         for when we modulate the values later */
         originX: x,
         originY: y,
        
         noiseOffsetX: Math.random() * 1000,
         noiseOffsetY: Math.random() * 1000,
      });
   }

   return points;
}
//initialise blob points
const points = createPoints();

function map(n, start1, end1, start2, end2) {
   return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

const simplex = new createNoise2D();

// how fast we progress through "time"
let noiseStep = 0.002;

function noise(x, y) {
   return simplex(x, y);
}

(function animate() {
   // generate a smooth continuous curve based on points, using Bezier curves. spline() will return an SVG path-data string. The arguments are (points, tension, close). Play with tension and check out the effect!

   for (let b of blob) {
      b.setAttribute('d', spline(points, 1, true));
   }

   requestAnimationFrame(animate);

   for (let i = 0; i < points.length; i++) {
      const point = points[i];

      const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
      const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
    
      const x = map(nX, -1, 1, point.originX - 10, point.originX + 10);
      const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

      // update the point's current coordinates
      point.x = x;
      point.y = y;

      point.noiseOffsetX += noiseStep;
      point.noiseOffsetY += noiseStep;
   }
})();

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
      logo.src = "/images/LogoWhite.svg";
      logoText.style.color = "white";
      questionNumber.style.color = "white";
      progressbarCounter.style.backgroundColor = "white";
      progressbarLine.style.backgroundColor = "white";
      body.style.backgroundColor = "#7678ED"; // eller använd classlist med remove och add
      for (let b of blob) {
         b.setAttribute('fill', 'white');
      }
      questionPage.style.display = "none";
      answerPage.style.display = "block";
   }, animationDuration)
   setTimeout(() => {
      answerPage.classList.remove('scale-0');
      answerPage.classList.add('scale-100');
   }, animationDuration * 1.5)

}
//ev använda dessa för att kunna göra  om till endast en loop
// let categoryCounter = [0, 0, 0, 0, 0, 0, 0];
// const categories = ['Film & TV','Geografi','Historia','Musik','Övrigt','Vetenskap','Sport'];
let filmCounter = 0;
let geografiCounter = 0;
let historiaCounter = 0;
let musikCounter = 0;
let övrigtCounter = 0;
let vetenskapCounter = 0;
let sportCounter = 0;

//********nextQuestion when click on yes or no********//
function nextQuestion() {

   answerPage.classList.remove('scale-100');
   answerPage.classList.add('scale-0');

   questionCounter++;

   setTimeout(() => {
      body.style.backgroundColor = "white";
      questionNumber.style.color = "#000064";
      progressbarCounter.style.backgroundColor = "#000064";
      progressbarLine.style.backgroundColor = "#7678ED";
      logoText.style.color = "#000064";
      logo.src = "/images/Logo.svg";
      for (let b of blob) {
         b.setAttribute('fill', '#7678ED');
      }
   }, animationDuration)


   if (questionCounter > maxQuestions) {

      // for(let i=0; i < categoryCounter.length; i++){


      //    for(let j=0; j < categories.length; j++){
      //       categories[i].classList.remove("bg-grey");
      //       categories[i].classList.add("bg-green");
      //    }

      // }

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

      result.innerHTML = `${correctAnswer} av ${maxQuestions}`;

      setTimeout(() => {
         resultPage.classList.remove('scale-0');
         resultPage.classList.add('scale-100');
      }, animationDuration * 1.5)
      setTimeout(() => {
         answerPage.style.display = "none";
         progressbar.style.display = "none";
         resultPage.style.display = "block";
      }, animationDuration)

      filmCounter = 0;
      geografiCounter = 0;
      historiaCounter = 0;
      musikCounter = 0;
      övrigtCounter = 0;
      vetenskapCounter = 0;
      sportCounter = 0;

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

   for (let i = 0; i < 5; i++) {
      filmIndicator[i].classList.remove("bg-green");
      filmIndicator[i].classList.add("bg-grey");
      geografiIndicator[i].classList.remove("bg-green");
      geografiIndicator[i].classList.add("bg-grey");
      historiaIndicator[i].classList.remove("bg-green");
      historiaIndicator[i].classList.add("bg-grey");
      musikIndicator[i].classList.remove("bg-green");
      musikIndicator[i].classList.add("bg-grey");
      övrigtIndicator[i].classList.remove("bg-green");
      övrigtIndicator[i].classList.add("bg-grey");
      vetenskapIndicator[i].classList.remove("bg-green");
      vetenskapIndicator[i].classList.add("bg-grey");
      sportIndicator[i].classList.remove("bg-green");
      sportIndicator[i].classList.add("bg-grey");
   }

   setTimeout(() => {
      resultPage.style.display = "none";
      startPage.style.display = "block";

   }, animationDuration)
   setTimeout(() => {
      startPage.classList.remove('scale-0');
      startPage.classList.add('scale-100');
   }, animationDuration * 1.5)

}

