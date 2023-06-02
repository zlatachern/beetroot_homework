// #3

const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const trafficLightColors = ["red", "yellow", "green"];

// Початковий індекс кольору
let currentColorIndex = 0;

function changeLight() {
  const currentColor = trafficLightColors[currentColorIndex];
  document.getElementById(currentColor).classList.remove(currentColor);

  currentColorIndex = (currentColorIndex + 1) % trafficLightColors.length;
  const newColor = trafficLightColors[currentColorIndex];

  document.getElementById(newColor).classList.add(newColor);
}