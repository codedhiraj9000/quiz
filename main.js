const options = Array.from(document
  .querySelectorAll('.op'))
const questionEle = document
  .querySelector('.question')
const next = document.querySelector(
  '.next')
const timer = document.querySelector(
  '.timer')
const container = document
  .querySelector('.container')
const points = document.querySelector(
  '.points')
const correctEle = document
  .querySelector('.correct')
const wrongEle = document.querySelector(
  '.wrong')
const answerListEle = document
  .querySelector('.answer-list')
const questionListEle = document
  .querySelector('.question-list')
const scoreEle = document.querySelector(
  '.score-sect')

let num = 0;
let score = 0;
let correct = 0;
let wrong = 0;
let min = 4;
let second = 49;

function updateQuestion() {
  questionEle.innerHTML =
    `<h3>${questionList[num].id}. ${questionList[num].question}</h3>`;
  for (let i = 0; i < options
    .length; i++) {
    options[i].innerText =
      `${questionList[num].options[i]}`;
  }
}

function updateTime() {
  let time = `0${min}:${second}`;

  defaultTime = "00:00";

  if (min != 0) {
    if (second == 00) {
      min -= 1;
      second = 59;
      return time;
      updateTime()
    }
    else if (second != 00) {
      second -= 1;
      if (second < 10) {
        second = `0${second}`
      }
      return time;
      updateTime()
    }
    return defaultTime;
  }

  else {
    return defaultTime;
  }

}

window.addEventListener('load', () => {
  alert("Rule: don't touch any element if your not sure. each questions contains 2 points. for each incorrect answer you get -1 point all the best for test.")
  updateQuestion()
  next.addEventListener('click',
    () => {
      num++;
      if (num != questionList
        .length) {
        updateQuestion()
      }
      else if (num == questionList
        .length) {
        displayScore()
      }
    })
  const intervel = setInterval(
    () => {
      let timeValue = updateTime()
      if (timeValue ==
        defaultTime) {
        alert('time up')
        clearInterval(intervel)
        displayScore()
      }
      timer.innerText =
        `${timeValue}`;
    }, 1000)

})

options.forEach((e) => {
  e.addEventListener('click',
    () => {
      if (questionList[num]
        .answer == e.innerText
      ) {
        score += 2;
        correct += 1;
        console.log(
          `score: ${score}`)
        console.log(
          `correct: ${correct}`)
        console.log(
          `wrong: ${wrong}`)

      }

      else if (questionList[num]
        .answer != e.innerText
      ) {
        score -= 1;
        wrong += 1;
        console.log(
          `score: ${score}`)
        console.log(
          `correct: ${correct}`)
        console.log(
          `wrong: ${wrong}`)
        console.log(questionList[
          num].answer)
        console.log(e.innerText)
      }

      else {
        console.log(
          "an error comes plzz Contact the devoloper"
        )

      }
    })
})

const displayScore = () => {
  next.classList.add('hide')
  container.classList.add('hide')
  scoreEle.classList.remove('hide')
  points.innerHTML =
    `${score}/${(questionList.length)*2}`;
  correctEle.innerHTML =
    `<span>correct</span>${correct}`;
  wrongEle.innerHTML =
    `<span>wrong</span>${wrong}`;
}