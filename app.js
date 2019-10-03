const correctAnswers = ["B", "B", "A", "B"];
const form = document.querySelector(".quiz-form");
const resultContainer = document.querySelector(".result");
let finalScore = document.querySelector(".result span");

form.addEventListener("submit", e => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // console.log(score);

  // show score on page
  scrollTo(0, 0);
  resultContainer.classList.remove("d-none");

  // animate score
  let points = 0;

  const timer = setInterval(() => {
    finalScore.textContent = `${points}%`;
    if (points === score) {
      clearInterval(timer);
    } else {
      points++;
    }
  }, 10);
});
