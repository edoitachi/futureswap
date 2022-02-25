const docHeader = document.querySelector('header')
const navMenu = document.querySelector('.nav-menu')

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset
window.onscroll = scrollHideNav = () =>
	function () {
		let currentScrollPos = window.pageYOffset
		prevScrollpos > currentScrollPos
			? (docHeader.style.top = '0')
			: (docHeader.style.top = '-8rem')
		prevScrollpos = currentScrollPos
	}
// window.onscroll = scrollHideNav()
function disableScroll() {
	// Get the current page scroll position
	scrollTop = window.pageYOffset || document.documentElement.scrollTop
	;(scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
		// if any scroll is attempted, set this to the previous value
		(window.onscroll = function () {
			window.scrollTo(scrollLeft, scrollTop)
		})
}
function enableScroll() {
	window.onscroll = scrollHideNav()
}

// toggle menu settings for mobile display
if (window.matchMedia('(max-width: 768px)').matches) {
	const hamburger = document.querySelector('.btn-menu')
	// toggle navbar menu function
	const toggleNavMenu = () => {
		hamburger.classList.toggle('active')
		hamburger.classList.toggle('not-active')
		navMenu.classList.toggle('open')
		// console.log(hamburger.classList.contains('active'))

		if (hamburger.classList.contains('active')) {
			disableScroll()
		} else {
			enableScroll()
		}
	}

	hamburger.addEventListener('click', () => {
		toggleNavMenu()
	})
	// close the navigation menu if opened while clicking on a link
	const anchorLinks = Array.from(document.querySelectorAll('.nav-menu a'))
	anchorLinks.forEach(link => {
		link.addEventListener('click', () => {
			toggleNavMenu()
		})
	})
}
