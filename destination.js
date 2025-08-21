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

function ShowPlanet(keyName, imageID) {
if (document.getElementById(keyName).classList.contains("hidden")) {						
		document.getElementById(keyName).classList.remove("hidden");		
	} 
	
	document.getElementById(keyName).classList.add("hidden");

	if (keyName == imageID) {
		document.getElementById(keyName).classList.remove("hidden");
		document.getElementById(keyName).classList.add("visible");			
	}
	else {
		document.getElementById(keyName).classList.remove("visible");
	} 
}

function ShowText(keyName, imageID, textID) {	
	document.getElementById("moon_text").classList.add("hidden_text");
	document.getElementById("planet_name_span").classList.add("hidden_text");
	document.getElementById("distance_data").classList.add("hidden_text");
	document.getElementById("time_data").classList.add("hidden_text");

	setTimeout( function() {
		 if (textID == "moon_text"){
			document.getElementById("moon_text").innerText = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help " +
"regain perspective and come back refreshed. While you’re there, take in some history " +
"by visiting the Luna 2 and Apollo 11 landing sites."
			document.getElementById("planet_name_span").innerText = "Moon";
			document.getElementById("distance_data").innerText = "384,400 km";
			document.getElementById("time_data").innerText = "384,400 km";
		}
		else if (textID == "mars_text"){
			document.getElementById("moon_text").innerText = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, " +
  "the tallest planetary mountain in our solar system. It’s two and a half times " +
  "the size of Everest!"
  document.getElementById("planet_name_span").innerText = "Mars";
  document.getElementById("distance_data").innerText = "225 mil. km";
  document.getElementById("time_data").innerText = "3 days";
		}
		else if (textID == "europa_text"){
			document.getElementById("moon_text").innerText = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a " +
  "winter lover’s dream. With an icy surface, it’s perfect for a bit of " +
  "ice skating, curling, hockey, or simple relaxation in your snug " +
  "wintery cabin.";
document.getElementById("planet_name_span").innerText = "Europa";
		} 
		else if (textID == "titan_text"){
			document.getElementById("moon_text").innerText = "is a home away from home (just a few hundred degrees colder!). As a " +
 	"bonus, you get striking views of the Rings of Saturn.";
			document.getElementById("planet_name_span").innerText = "Titan";
		}

		document.getElementById("moon_text").classList.add("visible");
		document.getElementById("planet_name_span").classList.add("visible");
		document.getElementById("distance_data").classList.add("visible");		
		document.getElementById("time_data").classList.add("visible");

		document.getElementById("moon_text").classList.remove("hidden_text");
		document.getElementById("planet_name_span").classList.remove("hidden_text");
		document.getElementById("distance_data").classList.remove("hidden_text");
		document.getElementById("time_data").classList.remove("hidden_text");
	}, 400); // 500 milliseconds = .5 seconds	 

	if (keyName == imageID) {
		document.getElementById("moon_text").classList.remove("hidden_text");		
		document.getElementById("planet_name_span").classList.remove("hidden_text");
		document.getElementById("distance_data").classList.remove("hidden_text");
		document.getElementById("time_data").classList.remove("hidden_text");
	}
	else {	
		document.getElementById("moon_text").classList.remove("visible");		
		document.getElementById("planet_name_span").classList.remove("visible");
		document.getElementById("distance_data").classList.remove("visible");
		document.getElementById("time_data").classList.remove("visible");
	}  
}