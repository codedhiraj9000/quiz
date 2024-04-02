const questionList = [{
  id: 1,
  question: "what did Lencho hope for?",
  answer: "good rain",
  options: ["good rain",
    "good crop", "bad rain",
    "bad crop"]
}, {
  id: 2,
  question: "it rains but the rain soon change into?",
  answer: "hailstone",
  options: ["hailstorm",
    "hailstone", "snowfall",
    "acid rain"]
}, {
  id: 3,
  question: "how was lencho's faith in god?",
  answer: "firm",
  options: ["huge", "firm", "big",
    "micro"]
}, {
  id: 4,
  question: "lencho wrote the letter for whom?",
  answer: "god",
  options: ["postmaster", "postman",
    "employees", "god"]
}, {
  id: 5,
  question: "how much money lencho wants?",
  answer: "hundred pesos",
  options: ["seventy pesos",
    "hundred pesos",
    "seventy dollar",
    "hundred rupees"]
}, {
  id: 6,
  question: "what was postman and employees reaction after read the letter?",
  answer: "laughing",
  options: ["sad", "cry",
    "laughing", "emotional"]
}, {
  id: 7,
  question: "what postmaster wants from employees?",
  answer: "help in lencho's problem",
  options: [
    "help in postmaster problem",
    "help in lencho's problem",
    "send letter to real god",
    "throw letter into trashbin"]
}, {
  id: 8,
  question: "what postmaster decide to do?",
  answer: "help lencho in his problem",
  options: ["work with lencho",
    "suggest or advice lencho",
    "offers lencho a job",
    "help lencho in his problem"]
}, {
  id: 9,
  question: "what lencho's first reaction on beginning of rain, and after hailstone?",
  answer: "happy, depressed",
  options: ["depressed, sad",
    "happy, depressed",
    "happy, sad", "sad, depressed"
    ]
}, {
  id: 10,
  question: "how much money postmaster gets?",
  answer: "seventy pesos",
  options: ["seventy five pesos",
    "seventy rupees",
    "seventy dollar",
    "seventy pesos"]
}, {
  id: 11,
  question: "what did lencho called the post office?",
  answer: "bunch of crook",
  options: ["bunch of gods",
    "bunch of thifes",
    "bunch of crook",
    "bunch of employees"]
}, {
  id: 12,
  question: "what was lencho's feeling after gets money?",
  answer: "angry",
  options: ["sad", "happy",
    "depressed", "angry"]
}, {
  id: 13,
  question: "what did postmaster done with money after collect",
  answer: "give to lencho",
  options: ["give to lencho",
    "give to bagger",
    "give to god",
    "give to his wife"]
}, {
  id: 14,
  question: "what lencho did after gets the money?",
  answer: "wrote another letter to god",
  options: ["scold postmaster",
    "scold employees",
    "scold god",
    "wrote another letter to god"]
}, {
  id: 15,
  question: `who is the writer of"A letter to god" story?`,
  answer: "G.L.Fuentes",
  options: ["G.L.Fuentes",
    "Robart Crook",
    "Lencho da Vinci",
    "Robindronath Tagore"]
}]

//import answers
questionList.forEach((e) => {
  const element = document
    .createElement('li');
  element.innerHTML = e.question;
  questionListEle.appendChild(
    element);
})

questionList.forEach((e) => {
  const element = document
    .createElement('li');
  element.innerHTML = e.answer;
  answerListEle.appendChild(
    element);
})