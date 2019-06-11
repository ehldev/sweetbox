const keyboardEvents = (prev, next, close) => {
	document.addEventListener('keydown', e => {
		if(e.key === 'ArrowLeft') {
			prev.click()
		}
		else if(e.key === 'ArrowRight'){
			next.click()
		}
		else if(e.key === 'Escape'){
			close.click()
		}
	});
}