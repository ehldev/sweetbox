const closeLightbox = lightbox => {
	let sweetboxClose = lightbox.querySelector('.sweetbox-close')

	if(sweetboxClose) {
		sweetboxClose.addEventListener('click', () => {
			lightbox.classList.add('fadeOut')
			setTimeout(()=> {
				lightbox.remove()
			}, 500)
		})
	}
}