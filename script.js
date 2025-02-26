const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const message = document.getElementById("message");

const noPrompts = [
  "Are you sure? :(",
  "Really sure?",
  "Do you really mean no?",
  "Don't you feel it?"
];

let noClickCount = 0;

noButton.addEventListener("click", function () {
  if (noClickCount < noPrompts.length) {
    noButton.innerText = noPrompts[noClickCount];
  } else {
    noButton.innerText = "Can't say no to love!";
  }
  noClickCount++;
  // Make the Yes button bigger each time No is clicked
  yesButton.style.transform = `scale(${1 + noClickCount * 0.2})`;
});

yesButton.addEventListener("click", function () {
  message.innerText = "Yay! I’m so happy! (✿◕‿◕)";
});
