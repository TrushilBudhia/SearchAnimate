	(function ($) {

	  let typeAnimate = ".search-auto-text"
	  let typeSearchLine = ".search-flicker"

	  let typeArray = " Red, Orange, Yellow, Green, Blue, Indigo, Violet,"

	  function wordGenerate() {
		const currentElement = $(typeAnimate);
		const currentElementLine = $(typeSearchLine);
		let lastWord = currentElement[0].innerText;
		let arrayIndex = 0;
		let charPos = 0;
		let timeout = 1000;
		let wordsArray = typeArray.split(',');
		let nextTextToWrite = wordsArray[0];

		const timeoutFunction = () => {
		  let speed = 100;      

		  if (lastWord.length > 0 && charPos === 0) {
			lastWord = lastWord.slice(0, lastWord.length - 1);
		  } else if (lastWord.length < nextTextToWrite.length) {
			lastWord += nextTextToWrite[charPos];
			charPos += 1;
			currentElement.css('color', nextTextToWrite);
			currentElementLine.css('color', nextTextToWrite);      
			
		  } else {
			arrayIndex = (arrayIndex + 1) % wordsArray.length;
			nextTextToWrite = wordsArray[arrayIndex];
			
			charPos = 0;
			speed = timeout;
		  }
		  
		  currentElement[0].innerText = lastWord;      
		  setTimeout(timeoutFunction, speed);

		}

		window.requestAnimationFrame(() =>
		  setTimeout(timeoutFunction, timeout)
		)
	  }

	  wordGenerate()
	})(jQuery);
