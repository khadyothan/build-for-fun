var buttons = ["w", "a", "s", "d", "j", "k", "l"];
var buttonObjects = [];
var audioPaths = [
  "tom-1",
  "tom-2",
  "tom-3",
  "tom-4",
  "snare",
  "crash",
  "kick-bass",
];
var audioObjects = [];

for (let button of buttons) {
  buttonObjects.push(document.querySelector("." + button));
}

for (let path of audioPaths) {
  audioObjects.push(new Audio("sounds/" + path + ".mp3"));
}

// callback
// when the returned function is an arrow function, `this` retains the value of the enclosing lexical context's `this`, rather that referring to the element that triggered the event.
function handleClick(audioObject) {
  return function () {
    audioObject.currentTime = 0;
    audioObject.play();
    this.style.color = "white";
    // since we are using arrow function, `this` doesn't refer to the setTimeout
    setTimeout(() => {
      this.style.color = "#da0463";
    }, 20);
  };
}

// this can be also implemented using the switch statements
for (let i in buttonObjects) {
  buttonObjects[i].addEventListener("click", handleClick(audioObjects[i]));
}

document.addEventListener("keydown", (event) => {
  key = event.key;
  switch (key) {
    case "w":
      audioObjects[0].currentTime = 0;
      audioObjects[0].play();
      break;
    case "a":
      audioObjects[1].currentTime = 0;
      audioObjects[1].play();
      break;
    case "s":
      audioObjects[2].currentTime = 0;
      audioObjects[2].play();
      break;
    case "d":
      audioObjects[3].currentTime = 0;
      audioObjects[3].play();
      break;
    case "j":
      audioObjects[4].currentTime = 0;
      audioObjects[4].play();
      break;
    case "k":
      audioObjects[5].currentTime = 0;
      audioObjects[5].play();
      break;
    case "l":
      audioObjects[6].currentTime = 0;
      audioObjects[6].play();
      break;
    default:
      break;
  }
});
