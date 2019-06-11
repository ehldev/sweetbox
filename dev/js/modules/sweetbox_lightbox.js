const sweetboxLightbox = (i, srcLargeImages, descriptions) => {

	const setDescription = () => {
		return `<p class="sweetbox-description-img">${showDescription(descriptions, i)}</p>`
	}

	let lightbox = document.createElement('div')
	lightbox.id = 'sweetbox-lightbox'
	lightbox.classList.add('sweetbox', 'animated', 'fadeIn')
	lightbox.innerHTML = `
		<div class="sweetbox-header">
			<span class="sweetbox-info">${i + 1} / ${srcLargeImages.length}</span>
			<!-- <span>&#176;</span>
			<span>&#8226;</span> -->
			<span class="sweetbox-close">&times;</span>
		</div>
		<div class="sweetbox-body">
			<span class="sweetbox-control-prev">&#8592;</span>
			<div class="sweetbox-image">
				<img src="${srcLargeImages[i]}">
			</div>
			<span class="sweetbox-control-next">&#8594;</span>
		</div>
		<div class="sweetbox-footer">
			${ descriptions ? setDescription() : ''}
		</div>
	`

	// Verificar que no se pueda abrir otro lightbox si uno ya está activo
	if(!document.getElementById(lightbox.id)) {
		document.body.appendChild(lightbox)
	}

	// Navegación
	if(descriptions) {
		lightboxNavigate(lightbox, i, srcLargeImages, descriptions)
	}
	else {
		lightboxNavigate(lightbox, i, srcLargeImages)
	}

	// Cerrar lightbox
	closeLightbox(lightbox)
}