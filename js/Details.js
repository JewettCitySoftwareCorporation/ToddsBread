/***************************************************************
 *
 *   Bult By : Luke@jcsc.biz for Mr. Todd White
 * 
***************************************************************/

$(document).ready(function() {
	var h = $('.nxt').height();
	h = h + 'px';
	$('.nxt span').css('width', h);
});

$('.pre').on('mouseenter', (e) => {
	$('.box1').css('background-position', 'left 40% bottom 0')
	.css('width', '120%');
	$('.box2').css('background-position', 'right -20px bottom 0');
});
$('.pre').on('mouseleave', (e) => {
	$('.box1').css('background-position', 'left 50% bottom 0')
	.css('width', '100%');
	$('.box2').css('background-position', 'right 0 bottom 0');
});

$('.next').on('mouseenter', (e) => {
	$('.box1').css('background-position', 'left 60% bottom 0');
	$('.box2').css('background-position', 'right 10px bottom 0');
	$('.box2').addClass('shift');
});
$('.next').on('mouseleave', (e) => {
	$('.box1').css('background-position', 'left 50% bottom 0');
	$('.box2').css('background-position', 'right 0 bottom 0');
	$('.box2').removeClass('shift');
});

window.sr = ScrollReveal({
	reset: false,
	duration: 800,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});
sr.reveal('.container');
sr.reveal('.detail', {delay: 50, origin: 'right', distance: '80px'});
sr.reveal('.nxt', { delay: 200, origin: 'right', distance: '90px'});
sr.reveal('.nr', { delay: 350, origin: 'right', distance: '90px'});