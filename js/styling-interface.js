$('li.color li').each(function() {
	var color = $(this).html();
	$(this).css('background', color);
});

$('li.p-color li').click(function() {
	var color = $(this).html();
	$('p').css('color', color);
	$('li.color li').removeClass('active');
	$(this).addClass('active');
});

$('li.bg-color li').click(function() {
	var color = $(this).html();
	$('body').css('background', color);
	$('li.color li').removeClass('active');
	$(this).addClass('active');
});

$('input').click(function() {
	if ($(this).prop('checked') == true) {
		var style = $(this).attr('id');
		var styleAtr = $(this).attr('style');
		$('p').css(styleAtr, style);
		
		if ($(this).attr('style') == 'text-transform') {
			$('input[style="text-transform"]').attr('disabled', true);
			$(this).attr('disabled', false);
		} else if ($(this).attr('style') == 'text-decoration') {
			$('input[style="text-decoration"]').attr('disabled', true);
			$(this).attr('disabled', false);
		}
		
	} else {
		var styleAtr = $(this).attr('style');
		if (styleAtr == "font-style") {
			$('p').css(styleAtr, 'normal');
		} else if (styleAtr == "text-transform") {
			$('p').css(styleAtr, 'none');
			$('input[style="text-transform"]').attr('disabled', false);
		} else if (styleAtr == "text-decoration") {
			$('p').css(styleAtr, 'none');
			$('input[style="text-decoration"]').attr('disabled', false);
		}
	}
});

$(function() {
	$('.box').draggable({cancel : '.tabs, ul'});
});

$('.close').click(function() {
	var id = '#' + $(this).parent().attr('id');
	$(this).toggleClass('open');
	$(id).toggleClass('closed');
});

$('.tab').click(function() {
	var id = '#' + $(this).parentsUntil('.box').parent().attr('id');
	var tab = '.tab' + $(this).attr('open-tab');
	$(id + ' ul').removeClass('active');
	$(id + ' ul' + tab).addClass('active');
	$(id + ' .tab').removeClass('active');
	$(this).addClass('active');
});

function select() {
	var fs = $('#font-size').val();
	var fs = fs + 'px'
	var lh = $('#line-height').val();
	var fw = $('#font-weight').val();
	$('p').css('font-size', fs).css('line-height', lh).css('font-weight', fw);
}

$('select').change(select);