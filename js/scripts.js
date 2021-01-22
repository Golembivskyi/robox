
// Burger Menu
let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});




// Smooth scroll.
(() => {
	let easeInOutQuad = t => t<.5 ? 2*t*t : -1+(4-2*t)*t;
	
	document.addEventListener('click', e => {
		let a = e.target;

		while (a !== null && a.tagName !== 'A') {
			a = a.parentNode;
		}

		if (a !== null && a.getAttribute('href')[0] === '#') {
			let d = document.documentElement;
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

// Map popups on Main page
(() => {
	let svg = document.getElementById('world-map-image');
	let infoCont = document.getElementById('countries-info');
	let activeInfo = null;
	svg.addEventListener('mouseover', e => {
		if (e.target !== null) {
			if (activeInfo !== null) {
				activeInfo.style.display = 'none';
			}
			let code = e.target.getAttribute('id');
			let info = document.getElementById('info-' + code);
			if (info !== null) {
				let contRect = infoCont.getBoundingClientRect();
				let infoRect = e.target.getBoundingClientRect();
				info.style.display = 'block';
				info.style.left = infoRect.left - contRect.left + infoRect.width/2 + 'px'
				info.style.top = infoRect.top - contRect.top + infoRect.height/2 + 'px'
				activeInfo = info
			}
		}
	});

	svg.addEventListener('mouseout', e => {
		if (activeInfo !== null) {
			activeInfo.style.display = 'none';
			activeInfo = null;
		}
	});

})();