const showControls = (images, i, prev, next) => {
	// Prev
	if(i === 0) {
		prev.classList.add('disabled-control')
	}
	else if(i > 0) {
		prev.classList.remove('disabled-control')
	}

	// Next
	if(i === images.length -1) {
		next.classList.add('disabled-control')
	}
	else if(i < images.length -1){
		next.classList.remove('disabled-control')
	}
}