// Función que inicializa el lightbox
const sweetbox = (gallery_container, options) => {
	if(options) {
		listenEventSweetboxContainer(gallery_container, options)
	}
	else {
		let defaultOptions = {
			descriptionImage: false
		}
		listenEventSweetboxContainer(gallery_container, defaultOptions)
	}
}