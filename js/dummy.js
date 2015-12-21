window.onload = function() {
    initSlide();
    initPopup();
    var navItems = document.querySelectorAll(".nav-menu li ul");
    for (var i in navItems) {
	if (navItems[i].style) {
	    navItems[i].style.width = window.innerWidth + "px";
	}
    }
}

function initSlide() {
    var slide = document.querySelector(".slide");
    var previousBackground = slide.querySelector(".background.previous-slide");
    var currentBackground = slide.querySelector(".background.current-slide");
    var nextBackground = slide.querySelector(".background.next-slide");
    var leftButton = slide.querySelector(".left-arrow");
    var rightButton = slide.querySelector(".right-arrow");
    var bottomView = slide.querySelector(".bottom-view");    
    var titleView = bottomView.querySelector(".title");
    var contentView = bottomView.querySelector(".content");
    var dotsView = bottomView.querySelector(".dots");
    var links = slide.querySelectorAll(".link");
    var maxIndex = slideData.length - 1;
    var previousIndex = maxIndex;
    var currentIndex = 0;
    var nextIndex = currentIndex < maxIndex ? currentIndex + 1 : currentIndex;
    var transitioning = false;

    titleView.style.color = "#F0F0F0";
    titleView.style.fontSize = "30px";
    titleView.style.marginBottom = "10px";
    
    contentView.style.color = "#F0F0F0";

    for (var i in links) {
	links[i].href = slideData[currentIndex].link;
    }

    slide.onmouseover = function() {
	clearInterval(intervalID);
	intervalID = null;
    }

    slide.onmouseleave = function() {
	if (!intervalID) {
	    intervalID = startSlideShow();
	}
    }
    
    var onClickDot = function(i) {

	if (!transitioning && i !== currentIndex) {
	    transitioning = true;

	    clearInterval(intervalID);
	    intervalID = null;
	    if (currentIndex > i) {
		previousIndex = i > 0 ? i - 1 : maxIndex;
    		nextIndex = i < maxIndex ? i + 1 : 0;
		previousBackground.style.backgroundImage = "url(\'" + slideData[i].thumbUrl + "\')";
		setTimeout(function(){
		    previousBackground.classList.add("to-current");
		    currentBackground.classList.add("to-next");
		}, 1);
	    } else {
    		previousIndex = i > 0 ? i - 1 : maxIndex;
    		nextIndex = i < maxIndex ? i + 1 : 0;
    		nextBackground.style.backgroundImage = "url(\'" + slideData[i].thumbUrl + "\')";
		setTimeout(function(){
		    currentBackground.classList.add("to-previous");
		    nextBackground.classList.add("to-current");
		}, 1);
	    }
	    currentIndex = i;
	    setTimeout(function() {
		previousBackground.style.backgroundImage = "url(\'" + slideData[previousIndex].thumbUrl + "\')";
    		currentBackground.style.backgroundImage = "url(\'" + slideData[currentIndex].thumbUrl + "\')";
    		nextBackground.style.backgroundImage = "url(\'" + slideData[nextIndex].thumbUrl + "\')";
		for(var i = 0; i < dotsContainer.childNodes.length; i++) {
		    var node = dotsContainer.childNodes[i];
		    if (i === currentIndex) {
			node.style.background = "#7EC0EE";
		    } else {
			node.style.background = "#AFAFAF";
		    }
		}
		previousBackground.classList.remove("to-current");
		currentBackground.classList.remove("to-previous");
		currentBackground.classList.remove("to-next");
    		nextBackground.classList.remove("to-current");
		transitioning = false;
		if (!intervalID) {
		    intervalID = startSlideShow();
		}
	    }, 501);
	}
    };
    
    var dotFactory = function(i) {
	var dot = document.createElement("div");
	dot.style.width = "10px";
	dot.style.height = "10px";
	dot.style.borderRadius = "5px";
	dot.style.background = "#AFAFAF";
	dot.style.position = "absolute";
	dot.style.left = i * 15 + "px";
	dot.style.cursor = "pointer";
	dot.setAttribute("id", "dot-" + i);
	dot.onclick = function(e){onClickDot(i)};
	return dot;
    };
    var dotsContainer = document.createElement("div");
    dotsContainer.style.position = "absolute";
    dotsContainer.style.width = (slideData.length - 1) * 15 + 10 + "px";
    dotsContainer.style.height = "20px";
    dotsContainer.style.top = "5px";
    dotsContainer.style.left = 400 - ((slideData.length - 1) * 15 + 10) / 2 + "px";
    dotsView.appendChild(dotsContainer);
    
    var t = document.createTextNode("CLICK ME");
    for (var i = 0; i < slideData.length; i++){
	dotsContainer.appendChild(dotFactory(i));
    }
    
    previousBackground.style.backgroundImage = "url(\'" + slideData[previousIndex].thumbUrl + "\')";
    currentBackground.style.backgroundImage = "url(\'" + slideData[currentIndex].thumbUrl + "\')";
    nextBackground.style.backgroundImage = "url(\'" + slideData[nextIndex].thumbUrl + "\')";
    for(var i = 0; i < dotsContainer.childNodes.length; i++) {
	var node = dotsContainer.childNodes[i];
	if (i === currentIndex) {
	    node.style.background = "#7EC0EE";
	} else {
	    node.style.background = "#AFAFAF";
	}
    }
    titleView.innerHTML = slideData[currentIndex].title;
    contentView.innerHTML = slideData[currentIndex].excerpt;

    var startSlideShow = function() {
	return setInterval(function() {
	    
	    transitioning = true;
	    currentDot = dotsContainer.querySelector("#dot-" + currentIndex);	    
    	    currentBackground.classList.add("to-previous");
    	    nextBackground.classList.add("to-current");
	    dotsContainer.querySelector("#dot-" + currentIndex).classList.add("active");		
	    
    	    setTimeout(function() {
		
		dotsContainer.querySelector("#dot-" + currentIndex).classList.remove("active");		
    		previousIndex = previousIndex < maxIndex ? previousIndex + 1 : 0;
    		currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    		nextIndex = nextIndex < maxIndex ? nextIndex + 1 : 0;
		dotsContainer.querySelector("#dot-" + currentIndex).classList.add("active");		

    		currentBackground.classList.remove("to-previous");
    		nextBackground.classList.remove("to-current");
		for(var i = 0; i < dotsContainer.childNodes.length; i++) {
		    var node = dotsContainer.childNodes[i];
		    if (i === currentIndex) {
			node.style.background = "#7EC0EE";
		    } else {
			node.style.background = "#AFAFAF";
		    }
		}

		for (var i in links) {
		    links[i].href = slideData[currentIndex].link;
		}
    		previousBackground.style.backgroundImage = "url(\'" + slideData[previousIndex].thumbUrl + "\')";
    		currentBackground.style.backgroundImage = "url(\'" + slideData[currentIndex].thumbUrl + "\')";
    		nextBackground.style.backgroundImage = "url(\'" + slideData[nextIndex].thumbUrl + "\')";
		titleView.innerHTML = slideData[currentIndex].title;
		contentView.innerHTML = slideData[currentIndex].excerpt;

		transitioning = false;
		
    	    }, 501);	
	}, 5000);
    }
    var intervalID = startSlideShow();

    leftButton.onclick = function() {

	if (!transitioning) {
	    
	    transitioning = true;
	    
	    clearInterval(intervalID);
	    intervalID = null;

	    previousBackground.classList.add("to-current");
	    currentBackground.classList.add("to-next");
	    
    	    setTimeout(function() {

		dotsContainer.querySelector("#dot-" + currentIndex).classList.remove("active");		
    		previousIndex = previousIndex > 0 ? previousIndex - 1 : maxIndex;
    		currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
    		nextIndex = nextIndex > 0 ? nextIndex - 1 : maxIndex;
		dotsContainer.querySelector("#dot-" + currentIndex).classList.add("active");		
		
		previousBackground.classList.remove("to-current");
    		currentBackground.classList.remove("to-next");

		for(var i = 0; i < dotsContainer.childNodes.length; i++) {
		    var node = dotsContainer.childNodes[i];
		    if (i === currentIndex) {
			node.style.background = "#7EC0EE";
		    } else {
			node.style.background = "#AFAFAF";
		    }
		}
		for (var i in links) {
		    links[i].href = slideData[currentIndex].link;
		}
    		previousBackground.style.backgroundImage = "url(\'" + slideData[previousIndex].thumbUrl + "\')";
    		currentBackground.style.backgroundImage = "url(\'" + slideData[currentIndex].thumbUrl + "\')";
    		nextBackground.style.backgroundImage = "url(\'" + slideData[nextIndex].thumbUrl + "\')";
		currentDot = dotsContainer.querySelector("#dot-" + currentIndex);
		currentDot.style.backgroundColor = "#7EC0EE";
		titleView.innerHTML = slideData[currentIndex].title;
		contentView.innerHTML = slideData[currentIndex].excerpt;

		transitioning = false;
		if (!intervalID) {
		    intervalID = startSlideShow();
		}
    	    }, 501);	
	    

	}
    }

    rightButton.onclick = function() {

	if (!transitioning) {
	    
	    transitioning = true;
	    
	    clearInterval(intervalID);
	    intervalID = null;

	    currentBackground.classList.add("to-previous");
	    nextBackground.classList.add("to-current");

    	    setTimeout(function() {

		dotsContainer.querySelector("#dot-" + currentIndex).classList.remove("active");
    		previousIndex = previousIndex < maxIndex ? previousIndex + 1 : 0;
    		currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    		nextIndex = nextIndex < maxIndex ? nextIndex + 1 : 0;
		dotsContainer.querySelector("#dot-" + currentIndex).classList.add("active");		

    		currentBackground.classList.remove("to-previous");
    		nextBackground.classList.remove("to-current");

		for(var i = 0; i < dotsContainer.childNodes.length; i++) {
		    var node = dotsContainer.childNodes[i];
		    if (i === currentIndex) {
			node.style.background = "#7EC0EE";
		    } else {
			node.style.background = "#AFAFAF";
		    }
		}
		for (var i in links) {
		    links[i].href = slideData[currentIndex].link;
		}
    		previousBackground.style.backgroundImage = "url(\'" + slideData[previousIndex].thumbUrl + "\')";
    		currentBackground.style.backgroundImage = "url(\'" + slideData[currentIndex].thumbUrl + "\')";
    		nextBackground.style.backgroundImage = "url(\'" + slideData[nextIndex].thumbUrl + "\')";
		currentDot = dotsContainer.querySelector("#dot-" + currentIndex);
		currentDot.style.backgroundColor = "#7EC0EE";
		titleView.innerHTML = slideData[currentIndex].title;
		contentView.innerHTML = slideData[currentIndex].excerpt;

		transitioning = false;
		if (!intervalID) {
		    intervalID = startSlideShow();
		}
    	    }, 501);		    
	}
    }    
}

function initPopup() {
    var popup = document.querySelector(".popup");
    var topbar = popup.querySelector(".topbar");
    var content = popup.querySelector(".content");
    var closeBtn = topbar.querySelector("svg");

    content.style.backgroundImage = "url(\'" + popupData.imageUrl + "\')";

    if (popupData.enable) {
	setTimeout(function() {
	    popup.classList.add("show");
	}, 2000);
    }
    
    topbar.onclick = function() {
	popup.classList.remove("show");
	popup.classList.add("hide");
    }    
}
