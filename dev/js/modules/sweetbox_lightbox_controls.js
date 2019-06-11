const lightboxNavigate = (lightbox, i, imagesSrc, descriptions) => {
	let sweetboxControlPrev = lightbox.querySelector('.sweetbox-control-prev'),
		sweetboxControlNext = lightbox.querySelector('.sweetbox-control-next'),
		currentImage = lightbox.querySelector('img'),
		sweetboxInfo = lightbox.querySelector('.sweetbox-info'),
		imageDescription = lightbox.querySelector('.sweetbox-description-img'),
		sweetboxClose = lightbox.querySelector('.sweetbox-close')

	// Mostrar u ocultar íconos de navegación
	showControls(imagesSrc, i, sweetboxControlPrev, sweetboxControlNext)

	lightbox.addEventListener('click', e => {
		e.preventDefault()

		// Aplicar animación
		currentImage.classList.add('animated')

		if(e.target === sweetboxControlPrev) {
			if(i > 0) {
				i--

				// Reemplazar imagen
				currentImage.src = imagesSrc[i]
				
				// Agregar animación
				currentImage.classList.add('fadeInLeft')

				showControls(imagesSrc, i, sweetboxControlPrev, sweetboxControlNext)

				// Quitar animación
				removeAnimation(currentImage, 'fadeInLeft')
			}
		}
		else if(e.target === sweetboxControlNext) {
			if(i < imagesSrc.length - 1) {
				i++

				// Reemplazar imagen
				currentImage.src = imagesSrc[i]

				// Agregar animación
				currentImage.classList.add('fadeInRight')

				showControls(imagesSrc, i, sweetboxControlPrev, sweetboxControlNext)

				// Quitar animación
				removeAnimation(currentImage, 'fadeInRight')
			}
		}
		else {
			// Cerrar lightbox si se hace click fuera de imagen o info
			if(e.target != currentImage && e.target != sweetboxInfo) {
				sweetboxClose.click()
			}
		}

		// Cambiar el texto del lightbox info
		sweetboxInfo.textContent = i + 1 + ' / ' + imagesSrc.length

		// Agregar descripción de imágenes
		if(descriptions) {
			imageDescription.textContent = showDescription(descriptions, i)
		}
	})

	// Eventos de teclado
	keyboardEvents(sweetboxControlPrev, sweetboxControlNext, sweetboxClose)
}