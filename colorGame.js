var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");


easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++ ){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++ ){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}	
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of the squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = ''
	this.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++){
	/*backgroundColor works on all browsers*/
	squares[i].style.backgroundColor = colors[i]; 
	/*Add Click listeners to squares*/
	squares[i].addEventListener("click", function(){
		//Grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//Compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!"
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i<squares.length; i++){
			//change each color to match given color
			squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i<num; i++){
		//get random color and push into arr 
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	// pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}