// document.querySelectorAll("button").addEventListener("click",function(){
//     alert("i got clicked");
// });

var drumSound1 = new Audio("sounds/tom-1.mp3");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    // console.log(this);
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var snare = new Audio("sounds/crash.mp3");
      snare.play();
      break;

    case "l":
      var snare = new Audio("sounds/kick-bass.mp3");
      snare.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {
  if (
    currentKey === "w" ||
    currentKey === "a" ||
    currentKey === "s" ||
    currentKey === "d" ||
    currentKey === "j" ||
    currentKey === "k" ||
    currentKey === "l"
  ) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
