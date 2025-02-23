
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
} )

function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("./sounds/mne-etot-mir-ponyaten.mp3").play();
            break;
        
        case "a":
            new Audio("./sounds/baza-otvette.mp3").play();
            break;
    
        case "s":
            new Audio("./sounds/isuse.mp3").play();
            break;
    
        case "d":
            new Audio("./sounds/ya-hochu-kakat.mp3").play();
            break;
    
        case "j":
            new Audio("./sounds/wi-wi-wi-cat.mp3").play();
            break;
    
        case "k":
            new Audio("./sounds/pizdash-oseni.mp3").play();
            break;
    
        default:
            console.log("Don't have sound for: " + key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}