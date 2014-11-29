

$('.ul-tab a').click(function (e) {
	e.preventDefault();
	$(this).tab('show');
});

$('.dropdown-big .dropdown-toggle').on('click', function(){
	var $dropdown = $(this).parents('.dropdown').first();
	$dropdown.toggleClass('open');
});

$('.search-wrapper .btn-search').on('click', function(){
	var $searchWrapper = $(this).parents('.search-wrapper').first();
	var $searchInput = $searchWrapper.find('.search-input');
	var $searchButton = $searchWrapper.find('.search-button');

	$searchInput.toggleClass('hidden');
	$searchButton.toggleClass('hidden');

	$searchInput.find('input').focus();
});

//this is only for example
$('.search-wrapper .form-control').on('keyup', function(){
	$('.search-box').removeClass('hidden');
});


$('.toggle-password').on('click', function(){
	var $control = $(this);
	var $field = $('.input-password');
	if ($control.is(':checked')) {
		$field.attr('type', 'text');
	} else {
		$field.attr('type', 'password');
	}
});


/*
* Video page
*/

//plaing video
$('.video-play').on('click', function(){
	var $playBtn = $(this);
	var $rightInner = $playBtn.parents('.right-inner').first();
	var $videoPreview = $rightInner.find('.video-preview');
	var $videoReal = $rightInner.find('.video-real');
	var $courseHeaderContentLeft = $('.course-header-content').find('.left');

	$playBtn.fadeOut(100);
	$videoPreview.fadeOut(500);
	$courseHeaderContentLeft.fadeOut(500);
	$videoReal.hide().removeClass('hidden')
	
	var timeout2 = setTimeout(function() {
		$rightInner.addClass('video-playmode');
		$videoReal.fadeIn(700);
	}, 700);

	return false;
});

function playthevideo(){
	var myPlayer = document.getElementById('my_video');
	myPlayer.playVideo();
}
function stopthevideo(){
	var myPlayer = document.getElementById('my_video');
	myPlayer.stopVideo();
}

function pausethevideo(){
	var myPlayer = document.getElementById('my_video'); 
	myPlayer.pauseVideo();
}

$('.course-header-footer .play').on('click', function(){
	playthevideo();
});





