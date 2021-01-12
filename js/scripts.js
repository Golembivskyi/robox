let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});


/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
	}, 5500);
});


// Smooth scroll.
(() => {
	let easeInOutQuad = t => t<.5 ? 2*t*t : -1+(4-2*t)*t;
	
	document.addEventListener('click', e => {
		let a = e.target;

		while (a !== null && a.tagName !== 'A') {
			a = a.parentNode;
		}

		let d = document.documentElement;
		if (a.getAttribute('href')[0] === '#') {
			let t = document.querySelector(a.getAttribute('href'));
			let rect = t.getBoundingClientRect();
			let dist = rect.top;
			let startTime = Date.now();
			let duration = 500;
			let scrollTop = d.scrollTop;
			let f = () => {
				let k = (Date.now() - startTime) / duration;
				if (k > 1) k = 1;
				d.scrollTop = scrollTop + (dist * easeInOutQuad(k));
				if (k < 1) requestAnimationFrame(f);
			};
			requestAnimationFrame(f);
		}
	});
})();