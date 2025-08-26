// when one planet button gets clicked, that planet shows
// the other planets are hidden
const moonButton = document.querySelector(".moon_button");
const marsButton = document.querySelector(".mars_button");
const europaButton = document.querySelector(".europa_button");
const titanButton = document.querySelector(".titan_button");

let dictImage = []; // Create an empty array
let dictButton = []; // Create an empty array
let dictParagraph = []; // Create an empty array

dictImage.push("image-moon","image-mars","image-europa", "image-titan");
dictButton.push("moon_button","mars_button","europa_button", "titan_button");
dictParagraph.push("moon_text", "mars_text", "europa_text", "titan_text");
//when someone clicks the hamburger button
moonButton.addEventListener("click", () =>{
ShowDestination("image-moon", "moon_button", "moon_text");
})

marsButton.addEventListener("click", () =>{
ShowDestination("image-mars", "mars_button", "mars_text");
})
europaButton.addEventListener("click", () =>{
ShowDestination("image-europa", "europa_button", "europa_text");
})

titanButton.addEventListener("click", () =>{
ShowDestination("image-titan", "titan_button", "titan_text");
})

function ShowDestination(imageID, buttonID, textID){
for (let key in dictImage) {	
	let keyName = dictImage[key];
	let paragraphName = dictParagraph[key];
	console.log(`Key: ${key}`);

	ShowPlanet(keyName, imageID);
	ShowText(keyName, imageID, textID);
		
}	


for (let key in dictButton) {
	document.getElementById(dictButton[key]).setAttribute("aria-selected",false);
}		
	document.getElementById(buttonID).setAttribute("aria-selected",true);
	console.log(document.getElementById(buttonID).getAttribute("aria-selected"));
}
