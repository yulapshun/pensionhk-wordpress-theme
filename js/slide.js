window.onload = function() {
    console.log(slideData);
    var slide = document.querySelector(".slide");
    var previousBackground = slide.querySelector(".background.previous-slide");
    var currentBackground = slide.querySelector(".background.current-slide");
    var nextBackground = slide.querySelector(".background.next-slide");
    var leftButton = slide.querySelector(".left-arrow");
    var rightButton = slide.querySelector(".right-arrow");
    var bottomView = slide.querySelector(".bottom-view");
    var maxIndex = slideData.length - 1;
    var previousIndex = maxIndex;
    var currentIndex = 0;
    var nextIndex = currentIndex < maxIndex ? currentIndex + 1 : currentIndex;
    
    previousBackground.style.backgroundImage = "url(\'" + slideData[previousIndex].thumbUrl + "\')";
    currentBackground.style.backgroundImage = "url(\'" + slideData[currentIndex].thumbUrl + "\')";
    nextBackground.style.backgroundImage = "url(\'" + slideData[nextIndex].thumbUrl + "\')";

    var startSlideShow = function() {
	return setInterval(function() {
    	    currentBackground.classList.add("to-previous");
    	    nextBackground.classList.add("to-current");

    	    setTimeout(function() {
		
    		previousIndex = previousIndex < maxIndex ? previousIndex + 1 : 0;
    		currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    		nextIndex = nextIndex < maxIndex ? nextIndex + 1 : 0;

    		currentBackground.classList.remove("to-previous");
    		nextBackground.classList.remove("to-current");
		
    		previousBackground.style.backgroundImage = "url(\'" + slideData[previousIndex].thumbUrl + "\')";
    		currentBackground.style.backgroundImage = "url(\'" + slideData[currentIndex].thumbUrl + "\')";
    		nextBackground.style.backgroundImage = "url(\'" + slideData[nextIndex].thumbUrl + "\')";	   		

    	    }, 1000);	
	}, 5000);
    }
    var intervalID = startSlideShow();

    leftButton.onclick = function() {
	clearInterval(intervalID);

	previousBackground.classList.add("to-current");
	currentBackground.classList.add("to-next");

    	setTimeout(function() {
	    
    	    previousIndex = previousIndex > 0 ? previousIndex - 1 : maxIndex;
    	    currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
    	    nextIndex = nextIndex > 0 ? nextIndex - 1 : maxIndex;

	    previousBackground.classList.remove("to-current");
    	    currentBackground.classList.remove("to-next");
	    
    	    previousBackground.style.backgroundImage = "url(\'" + slideData[previousIndex].thumbUrl + "\')";
    	    currentBackground.style.backgroundImage = "url(\'" + slideData[currentIndex].thumbUrl + "\')";
    	    nextBackground.style.backgroundImage = "url(\'" + slideData[nextIndex].thumbUrl + "\')";	   		

    	}, 1000);	
	
	intervalID = startSlideShow();
    }

    rightButton.onclick = function() {
	clearInterval(intervalID);

	currentBackground.classList.add("to-previous");
	nextBackground.classList.add("to-current");

    	setTimeout(function() {
	    
    	    previousIndex = previousIndex < maxIndex ? previousIndex + 1 : 0;
    	    currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    	    nextIndex = nextIndex < maxIndex ? nextIndex + 1 : 0;

    	    currentBackground.classList.remove("to-previous");
    	    nextBackground.classList.remove("to-current");
	    
    	    previousBackground.style.backgroundImage = "url(\'" + slideData[previousIndex].thumbUrl + "\')";
    	    currentBackground.style.backgroundImage = "url(\'" + slideData[currentIndex].thumbUrl + "\')";
    	    nextBackground.style.backgroundImage = "url(\'" + slideData[nextIndex].thumbUrl + "\')";	   		

    	}, 1000);	
	
	intervalID = startSlideShow();
    }
    
}
