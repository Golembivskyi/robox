let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav'),
	 slowmo = document.getElementById('slowmo');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

slowmo.addEventListener('click', function(e){
	this.classList.toggle('is-slowmo');
});

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
	slowmo.dispatchEvent(clickEvent);
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
		
		setTimeout(function(){
			slowmo.dispatchEvent(clickEvent);
		}, 3500);
	}, 5500);
});


// Smooth Scroll

(() => {
	let easeInOutCubic = t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
	
	document.addEventListener('click', e => {
		let a = e.target;
		let d = document.documentElement;
		if (a.tagName === 'A' && a.getAttribute('href')[0] === '#') {
			let t = document.querySelector(a.getAttribute('href'));
			let rect = getBoundingClientRect(t);
			let dist = rect.top - d.scrollTop;
			let startTime = Date.now();
			let duration = 500;
			let scrollTop = d.scrollTop;
			let f = () => {
				let k = duration / (Date.now() - startTime);
				if (k > 1) k = 1;
				d.scrollTop = scrollTop + (dist * k);
				if (k < 1) requestAnimationFrame(f);
			};
			requestAnimationFrame(f);
		}
	});
})();