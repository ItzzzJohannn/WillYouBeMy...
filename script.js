let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let message = document.getElementById("message");

const noMessages = [
    "Are you sure? :(",
    "Think again... ;-;",
    "Don't break my heart! ;-;",
    "Last chance... >_<"
];

let noClickCount = 0;

noButton.addEventListener("click", function () {
    if (noClickCount < noMessages.length) {
        message.innerText = noMessages[noClickCount];
    } else {
        message.innerText = "You can't escape love ❤️";
    }
    noClickCount++;
    yesButton.style.transform = `scale(${1 + noClickCount * 0.2})`;
});

yesButton.addEventListener("click", function () {
    message.innerText = "Yay! I’m so happy! (✿◕‿◕)";
});
