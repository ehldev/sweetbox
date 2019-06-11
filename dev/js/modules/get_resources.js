const getItems = container => {
	let items = Array.from(container.querySelectorAll('.sweetbox-item'))

	return items
}

const getSmallImages = items => {
	let smallImages = []

	items.map(item => {
		let img = item.querySelector('img.sweetbox-small-img')
		smallImages.push(img)
	})

	return smallImages
}

const getLargeImages = items => {
	let largeImages = []

	items.map(item => {
		let img = item.querySelector('img.sweetbox-large-img')
		largeImages.push(img)
	})

	return largeImages
}

const getSrcLargeImages = largeImages => {
	let srcImages = []

	largeImages.map(image => {
		let src = image.src
		srcImages.push(src)
	})

	return srcImages
}

const getDescriptions = items => {
	let descriptions = [],
		defaultDescription = document.createElement('p')

	items.map(item => {
		let description = item.querySelector('.sweetbox-description-img')
		// Si no encuentra descripción en una imagen, se agregará un texto por defecto
		if (!description) {
			defaultDescription.textContent = 'Imagen sin descripción'
			descriptions.push(defaultDescription)
		}
		else {
			descriptions.push(description)
		}
	})

	return descriptions
}