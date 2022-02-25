console.log('testing')

$('.list-faq__header').on('click', function () {
	if ($(this).parent().hasClass('is-active')) {
		$(this).parent().removeClass('is-active')
	} else {
		$('.list-faq').removeClass('is-active')
		$(this).parent().addClass('is-active')
	}
})

$('.tab').on('click', function () {
	console.log('oke')
	$('.tab').removeClass('btn-primary')
	$('.tab').addClass('btn-default')
	$(this).removeClass('btn-default')
	$(this).addClass('btn-primary')

	let tabid = $(this).attr('data-tab')
	$('.content-tab').removeClass('is-show')
	$('#' + tabid).addClass('is-show')
})

// $('#boxTestimonial').slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 3,
// 	prevArrow: "<button type='button' class='btn-prev'></button>",
// 	nextArrow: "<button type='button' class='btn-next'></button>",
// 	dots: true,
// 	responsive: [
// 		{
// 			breakpoint: 769,
// 			settings: {
// 				slidesToShow: 2,
// 				slidesToScroll: 2,
// 				swipe: true,
// 			},
// 		},
// 		{
// 			breakpoint: 480,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 				swipe: true,
// 			},
// 		},
// 	],
// })

// $('#boxstaking').slick({
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	prevArrow: "<button type='button' class='btn-prev'></button>",
// 	nextArrow: "<button type='button' class='btn-next'></button>",
// 	dots: false,
// 	responsive: [
// 		{
// 			breakpoint: 769,
// 			settings: {
// 				swipe: true,
// 				unslick: true,
// 			},
// 		},
// 	],
// })

// $('#homeSlider').slick({
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	prevArrow: "<button type='button' class='btn-prev'></button>",
// 	nextArrow: "<button type='button' class='btn-next'></button>",
// 	dots: false,
// 	responsive: [
// 		{
// 			breakpoint: 1024,
// 			settings: {
// 				swipe: true,
// 				arrows: false,
// 			},
// 		},
// 		{
// 			breakpoint: 480,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 				swipe: true,
// 				arrows: false,
// 			},
// 		},
// 	],
// })

// $('#guideSlider').slick({
// 	slidesToShow: 4,
// 	slidesToScroll: 1,
// 	prevArrow: "<button type='button' class='btn-prev guide-arrow'></button>",
// 	nextArrow: "<button type='button' class='btn-next guide-arrow'></button>",
// 	dots: false,
// 	centerMode: false,
// 	infinite: false,
// 	responsive: [
// 		{
// 			breakpoint: 1025,
// 			settings: {
// 				slidesToShow: 3,
// 				swipe: true,
// 			},
// 		},
// 		{
// 			breakpoint: 769,
// 			settings: {
// 				slidesToShow: 2,
// 				slidesToScroll: 1,
// 				swipe: true,
// 			},
// 		},
// 		{
// 			breakpoint: 408,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 				swipe: true,
// 			},
// 		},
// 	],
// })

// $('#guideSlider2').slick({
// 	slidesToShow: 4,
// 	slidesToScroll: 1,
// 	prevArrow: "<button type='button' class='btn-prev guide-arrow'></button>",
// 	nextArrow: "<button type='button' class='btn-next guide-arrow'></button>",
// 	dots: false,
// 	centerMode: false,
// 	infinite: false,
// 	responsive: [
// 		{
// 			breakpoint: 1025,
// 			settings: {
// 				slidesToShow: 3,
// 				swipe: true,
// 			},
// 		},
// 		{
// 			breakpoint: 769,
// 			settings: {
// 				slidesToShow: 2,
// 				slidesToScroll: 1,
// 				swipe: true,
// 			},
// 		},
// 		{
// 			breakpoint: 408,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 				swipe: true,
// 			},
// 		},
// 	],
// })

// $('#boxClients').slick({
// 	slidesToShow: 4,
// 	slidesToScroll: 1,
// 	dots: false,
// 	autoplay: true,
// 	autoplaySpeed: 2000,
// 	arrows: false,
// 	centerMode: true,
// 	centerPadding: '60px',
// 	responsive: [
// 		{
// 			breakpoint: 1024,
// 			settings: {
// 				slidesToShow: 2,
// 				slidesToScroll: 1,
// 			},
// 		},
// 		{
// 			breakpoint: 480,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 			},
// 		},
// 	],
// })

// $('#boxExchange').slick({
// 	slidesToShow: 4,
// 	slidesToScroll: 1,
// 	dots: false,
// 	autoplay: true,
// 	autoplaySpeed: 2000,
// 	arrows: false,
// 	centerMode: true,
// 	centerPadding: '60px',
// 	responsive: [
// 		{
// 			breakpoint: 1024,
// 			settings: {
// 				slidesToShow: 2,
// 				slidesToScroll: 1,
// 			},
// 		},
// 		{
// 			breakpoint: 480,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 			},
// 		},
// 	],
// })

// $('#boxRoadmap').not('.slick-initialized').slick()
$('#boxRoadmap').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: "<button type='button' class='btn-prev'></button>",
	nextArrow: "<button type='button' class='btn-next'></button>",
	dots: true,
	infinite: false,
	dots: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				unslick: true,
			},
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				unslick: true,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				unslick: true,
			},
		},
	],
})

let stackTitle = ['Promise Token', 'SLOT Token']
// let dataStack = [
//     ['$740,775,511','740,775,511,784 Tokens','17,187 %'],
//     ['$912,378,121','401,765,212,564 Tokens','20,9 %'],
// ]
let stackState = true

$('#boxstaking').on('afterChange', () => {
	stackState = !stackState
	$('.staking-title > .bold').text(stackTitle[stackState ? 0 : 1])
})
// function toggleStack(){
//     stackState = !stackState
//     $('.staking-title > .bold').text(stackTitle[stackState ? 0 : 1])
//     $('#stack1 > .stack-itm-top').text(dataStack[stackState ? 0 : 1][0])
//     $('#stack2 > .stack-itm-top').text(dataStack[stackState ? 0 : 1][1])
//     $('#stack3 > .stack-itm-top').text(dataStack[stackState ? 0 : 1][2])
// }
