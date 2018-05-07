  document.addEventListener("DOMContentLoaded",function(){

	window.addEventListener('keydown', playSound);

  		function playSound(e) {
 			const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 			const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
 			if (!audio) return; // stop the function from running all together

 		key.classList.add('playing');
 		audio.currentTime = 0; // rewind to the start of the sound
 		audio.play();
  		}

 		function removeTransition(e) {
    		if (e.propertyName !== 'transform') return;
    		e.target.classList.remove('playing');
  		}

 	const keys = Array.from(document.querySelectorAll('.key'));
  	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});



  


 