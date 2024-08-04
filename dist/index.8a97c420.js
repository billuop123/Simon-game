let gamePattern = [];
const buttonsColor = [
    "red",
    "blue",
    "green",
    "yellow"
];
let start = true;
let level = 0;
let userClickedPattern = [];
function gameTheory() {
    let random_number = Math.round(Math.random() * 3);
    randomChosenColor = buttonsColor[random_number];
    gamePattern.push(randomChosenColor);
    animatePress(randomChosenColor);
    playSound(randomChosenColor);
}
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        console.log($("h1").html());
    } else {
        $("h1").text("Game Over");
        $(`body`).css("background-color", "red");
        $(`body`).animate({
            opacity: 0.3
        }, 100);
        playSound("wrong");
        setTimeout(()=>{
            startOver();
        }, 1000);
    }
    if (currentLevel === gamePattern.length - 1) {
        if ($("h1").html() != "Game Over") setTimeout(()=>{
            nextSequence();
        }, 1000);
    }
}
$(document).keypress(function(event) {
    if (start) {
        nextSequence();
        start = false;
    }
});
function nextSequence() {
    level++;
    $("h1").text("Level " + level);
    userClickedPattern = [];
    gameTheory();
}
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    animatePress(userChosenColour);
});
function playSound(color) {
    var audio = new Audio(`sounds/${color}.mp3`);
    audio.play();
}
function animatePress(color) {
    $(`#${color}`).css({
        opacity: 0.3
    });
    $(`#${color}`).animate({
        opacity: 1
    }, 100);
}
function startOver() {
    level = 0;
    start = true;
    gamePattern = [];
    $("body").css("background-color", "black");
    $("body").css({
        opacity: 1
    });
    $("h1").html("Press Any Key to Start");
}

//# sourceMappingURL=index.8a97c420.js.map
