const listenEventSweetboxContainer = (container, options) => {

	let items = getItems(container),
		smallImages = getSmallImages(items),
		largeImages = getLargeImages(items),
		srcLargeImages = getSrcLargeImages(largeImages)

	container.addEventListener('click', e => {
		let element = e.target,
			i = smallImages.indexOf(element)

		if (element.nodeName === 'IMG') {
			// Validar si se mostrarán las descripciones de las imágenes
			if (options.descriptionImage) {
				let descriptions = getDescriptions(items)
				sweetboxLightbox(i, srcLargeImages, descriptions)
			}
			else {
				sweetboxLightbox(i, srcLargeImages)
			}
		}
	})
}