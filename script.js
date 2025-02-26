const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const noPrompts = [
    "Think again... ;-;",
    "Are you really sure? :(",
    "Please don't do this... :'>",
    "But I like you... :<",
    "You're breaking my heart! ;-;",
    "Last chance!",
    "You can't escape love ❤️"
];

let noClickCount = 0;

noButton.addEventListener("click", function () {
    // Change the "No" button text
    noButton.innerText = noPrompts[noClickCount % noPrompts.length];
    
    // Make the "Yes" button bigger
    yesButton.style.transform = `scale(${1 + noClickCount * 0.2})`;
    
    noClickCount++;
});

yesButton.addEventListener("click", function () {
    // Redirect to the romantic page
    window.location.href = "yes.html";
});
