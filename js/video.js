// define video variable
var video = document.getElementsByClassName("video");

// log that window is open, turn off autoplay and looping
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

// play video when clicked and log it to the console
document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// pause video when clicked and log it to the console
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

// slow down the video by 10% when clicked and log new speed to console
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video", video.playbackRate);
	video.playbackRate -= 0.1;
	console.log("New speed is", video.playbackrate);
});

// speed up the video by 10% when clicked and log new speed to console
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video", video.playbackRate);
	video.playbackRate += 0.1;
	console.log("New speed is", video.playbackrate);
});

// skip ahead by 10 seconds when clicked
// currentTime : current time in secs
// duration : gives length of the video
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Forward 10 seconds");
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
		console.log("Restarted Video");
	}
	else {
		video.currentTime += 10;
		console.log("Current time is", video.currentTime);
	}
});

// mute/unmute the video and update the text in the button
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		document.getElementById("mute").innerHTML = "Unmute";  // using .innerHTML to change the actual text
		video.muted = true;
	}
	else if (video.muted == true) {
		document.getElementById("mute").innerHTML = "Mute";
		video.muted = false;
	}
});

// change the volume based on the slider and update the volume information
document.querySelector("#slider").addEventListener("change", function() {  
	console.log("Volume Slider used");
	// set the sliders value to a variable 
	var slider = document.querySelector("#slider").value;
	video.volume = slider;
	console.log("before the * 100", video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"; ////////////////////////
	console.log(video.volume);
});

// add the oldSchool class: instead of changing the class to only the oldSchool class
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School filter used")
	console.log(video.className);
	document.querySelector(".video").className += " oldSchool";
	console.log(video.className);
});

// remove the oldSchool class from the video
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original filter used")
	document.querySelector(".video").className = "video";
});