function webAnimation(currentKey) {
    var clickedBTN = document.querySelector("." + currentKey);
    setTimeout(function () {
        clickedBTN.classList.remove("pressed");
    }, 100);
}

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default: console.log(this.innerHTML);
    }
}

var drumElements = document.querySelectorAll(".drum");
for (var i = 0; i < drumElements.length; i++) {
    drumElements[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        webAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event){  
    var keyPressed = event.key; 
    makeSound(keyPressed);
    webAnimation(keyPressed);
});

