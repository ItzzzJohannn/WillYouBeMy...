const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const noPrompts = [
    "Are you sure? :(",
    "Really sure? ;-;",
    "Don't break my heart! ;-;",
    "Think again... >_<",
    "You might regret this... :(",
    "But I like you... :'>",
    "Last chance!",
    "You can't escape love ❤️"
];

let noClickCount = 0;

noButton.addEventListener("click", function () {
    // Cycle through the prompts infinitely
    noButton.innerText = noPrompts[noClickCount % noPrompts.length];
    
    // Increase the size of the Yes button
    yesButton.style.transform = `scale(${1 + noClickCount * 0.2})`;
    
    noClickCount++;
});

yesButton.addEventListener("click", function () {
    noButton.innerText = "Too late now! ❤️";
    yesButton.innerText = "Yay! (✿◕‿◕)";
});
