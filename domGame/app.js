let numSquares = 6;
let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 0, 255)",
  "rgb(255, 225, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(0, 255, 0)"];
let pickedColor;
let squares = document.querySelectorAll('.square');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];  
}

let button = document.getElementById('#test');

button.onclick(alert("hello!!"))
alert('linked')
console.log("Am I connected?")