// when someone clicks the hamburger menu
// if the menu is closed, open it
// if the menu is open, close it
const nav = document.querySelector(".primary_navigation");
const navToggle = document.querySelector(".mobile_nav_toggle");

//when someone clicks the hamburger button
navToggle.addEventListener("click", () =>{
//if the nav is open
const visibility = nav.getAttribute("data-visible");

console.log(visibility);
if(visibility == "false" || visibility == null){
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded",true);
}
else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded",false);
}
console.log(navToggle.getAttribute("aria-expanded"));
//if the navis closed
})

function ShowDestination(){
	var sliders = ["main", "moon"];
	var sliderToMove = sliders[0];
	var sliderToHide = sliders[1];

	document.getElementById(sliders[0]).classList.add("hidden");
	setTimeout( function() {
		document.getElementById(sliders[1]).classList.add("visible");
	}, 500); // 500 milliseconds = .5 seconds


const interval = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(interval);
      } else {
        opacity += 0.05;
        element.style.opacity = opacity;
      }
    }, 50); // Adjust timing for smoother effect

}
/*
$(document).ready(function(){	
	var sliders = ["#main", "#moon"];
	var sliderToMove = sliders[0];
	var sliderToHide = sliders[1];
	//debugger;
	
	$('.navigation_home').click(function(){	
		//slide a div to the right off the screen	
		$(sliderToMove).animate({
			left: '+100%'
		}, "slow", function(){
			//once off the screen, make the div go away
			$(sliderToMove).css('display', 'none');
			//show the next div
			$(sliderToHide).css('display', 'grid');
			//position the next div to the left of the screen
			$(sliderToHide).css('left', '-100%');
			//$(sliderToHide).prependTo('#main');
			
			//to keep the animation going, slide the next div
			//to the center of the screen. Has to be done
			//in the callback function, animation will otherwise
			//leave the queue
			$(sliderToHide).animate({
				left: '0%'
			}, "slow");
		
			//check which div is up next, for sliding
			/* if(sliderToMove == "#main"){
				sliderToMove = sliders[1];
				sliderToHide = sliders[0];
			}
			else{
				sliderToMove = sliders[0];
				sliderToHide = sliders[1];
			} 
		});	
	});	
	/*
	$('.prev-button').click(function(){
		//slide a div to the left off the screen			
		$(sliderToMove).animate({
			left: '-100%'
		}, "slow", function(){
			//once off the screen, make the div go away
			$(sliderToMove).css('display', 'none');
			//show the next div
			$(sliderToHide).css('display', 'flex');
			//position the next div to the left of the screen
			$(sliderToHide).css('left', '100%');
			$(sliderToHide).prependTo('#main');
						
			//to keep the animation going, slide the next div
			//to the center of the screen. Has to be done
			//in the callback function, animation will otherwise
			//leave the queue
			$(sliderToHide).animate({
				left: '0%'
			}, "slow");
		
			//check which div is up next, for sliding
			if(sliderToMove == "#slider-1"){
				sliderToMove = sliders[1];
				sliderToHide = sliders[0];
			}
			else{
				sliderToMove = sliders[0];
				sliderToHide = sliders[1];
			}
		});	
	});	
    
});
*/