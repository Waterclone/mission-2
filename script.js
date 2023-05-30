const getStarted = document.getElementById("get-started");
const qScript = document.getElementById("qScript");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
const nextQues = document.getElementById("next-question");
const totalScore = document.getElementById("your-score");
let score = 0;
let questionArray = 0;
getStarted.addEventListener("click", startQuiz);

function startQuiz() {
  console.log(questionArray);
  opt1.style.background = "white";
  opt2.style.background = "white";
  opt3.style.background = "white";
  opt4.style.background = "white";
  document.getElementById("get-started").style.display = "none";
  document.getElementById("content").style.display = "block";

  question1();
}

function question1() {
  // console.log(questionArray);
  document.getElementById("img").src = "images/pic1.jpg";
  qScript.textContent = qArray[0].question;
  opt1.textContent = qArray[0].opt1;
  opt2.textContent = qArray[0].opt2;
  opt3.textContent = qArray[0].opt3;
  opt4.textContent = qArray[0].opt4;

  opt1.addEventListener("click", opt1Clicked);
}

function opt1Clicked() {
  score++;
}

function answerReveal() {
  if (questionArray === 0) {
    // console.log(questionArray);
    questionArray++;
    // console.log(questionArray);
    opt1.style.background = "green";
    opt2.style.background = "red";
    opt3.style.background = "red";
    opt4.style.background = "red";

    nextQuestion1();
  } else if (questionArray === 1) {
    // console.log(questionArray);
    questionArray++;
    // console.log(questionArray);
    opt1.style.background = "red";
    opt2.style.background = "green";
    opt3.style.background = "red";
    opt4.style.background = "red";

    nextQuestion2();
  } else {
    // console.log(questionArray);
    opt1.style.background = "red";
    opt2.style.background = "red";
    opt3.style.background = "red";
    opt4.style.background = "green";

    yourScore();
  }
}

function nextQuestion1() {
  document.getElementById("next-question").style.display = "block";
  nextQues.addEventListener("click", question2);
}

function question2() {
  opt1.removeEventListener("click", opt1Clicked);
  document.getElementById("img").src = "images/pic2.jpg";
  opt1.style.background = "white";
  opt2.style.background = "white";
  opt3.style.background = "white";
  opt4.style.background = "white";
  document.getElementById("next-question").style.display = "none";

  qScript.textContent = qArray[1].question;
  opt1.textContent = qArray[1].opt1;
  opt2.textContent = qArray[1].opt2;
  opt3.textContent = qArray[1].opt3;
  opt4.textContent = qArray[1].opt4;

  opt2.addEventListener("click", opt2Clicked);
}

function opt2Clicked() {
  score++;
}

function nextQuestion2() {
  document.getElementById("next-question").style.display = "block";
  nextQues.addEventListener("click", question3);
}

function question3() {
  opt2.removeEventListener("click", opt2Clicked);
  document.getElementById("img").src = "images/pic3.jpg";
  qScript.textContent = qArray[2].question;
  opt1.textContent = qArray[2].opt1;
  opt2.textContent = qArray[2].opt2;
  opt3.textContent = qArray[2].opt3;
  opt4.textContent = qArray[2].opt4;

  opt4.addEventListener("click", opt4Clicked);
}

function opt4Clicked() {
  score++;
}

function yourScore() {
  document.getElementById("your-score").style.display = "block";
  totalScore.addEventListener("click", finalScreen);
}

function finalScreen() {
  document.getElementById("content").style.display = "none";
  document.getElementById("img").src = "images/splash.jpg";
  document.getElementById("blurb").textContent = "YOU SCORED";
  document.getElementById("welldone").style.display = "block";
  document.getElementById("final").style.display = "block";
  document.getElementById("final").textContent = score;
}

let qArray = [
  {
    question: "What kind of animal is this?",
    opt1: "Three-Toed Sloth",
    opt2: "African Elephant",
    opt3: "Sea Otter",
    opt4: "Chimpanzee",
  },
  {
    question:
      "Where in the world would you most likely find one of these animals?",
    opt1: "New Zealand",
    opt2: "Canada",
    opt3: "India",
    opt4: "South Africa",
  },
  {
    question: "What colour is hippopotamus milk?",
    opt1: "Green",
    opt2: "White",
    opt3: "Blue",
    opt4: "Pink",
  },
];
