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

for (let i in buttonObjects) {
  buttonObjects[i].addEventListener("click", () => {
    audioObjects[i].play();
  });
}
