window.onload = function() {
    console.log(slideData);
    var slide = document.querySelector(".slide");
    var slideBackground = slide.querySelector(".background");
    var leftButton = slide.querySelector(".left-arrow");
    var leftButton = slide.querySelector(".right-arrow");
    var bottomView = slide.querySelector(".bottom-view");
    var currentIndex = 0;
    var maxIndex = slideData.length - 1;
    
    slideBackground.style.backgroundImage = "url(\'" + slideData[0].thumbUrl + "\')";
    currentIndex++;

    setInterval(function(){
	if (slideData[currentIndex].hasThumb) {
	    slideBackground.classList.add("next");
	    slideBackground.style.backgroundImage = "url(\'" + slideData[currentIndex].thumbUrl + "\')";
	} else {
	    slideBackground.style.backgroundImage = "";
	}
	if (currentIndex === maxIndex) {
	    currentIndex = 0
	} else {
	    currentIndex++;
	}
    }, 5000);
    
}
