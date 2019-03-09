/***************************************************************
 *
 *   Bult By : Luke@jcsc.biz for Mr. Todd White
 * 
***************************************************************/

var colors = ['green', 'blue', 'purple', 'red', 'orange', 'yellow', 'grey', 'pink'];

$(document).ready(function() {
	$('#changeColor').on('click', function() {
		console.log('e');
		$('.step').attr('data-color', colors[Math.floor(Math.random() * colors.length)]);
	}); 
});