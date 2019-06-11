const removeAnimation = (img, className) => {
	setTimeout(() => {
		img.classList.remove(className)
	}, 1000)
}