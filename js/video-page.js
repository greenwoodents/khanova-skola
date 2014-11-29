/*
* Video page
*/
var $headerFooterActions = $('.course-header-footer .left');
$headerFooterActions.hide();

//plaing video
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-video', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  console.log("hey Im ready");

	$('.video-play').on('click', function(){
		var $playBtn = $(this);
		var $rightInner = $playBtn.parents('.right-inner').first();
		var $videoPreview = $rightInner.find('.video-preview');
		var $videoReal = $rightInner.find('.video-real');
		var $courseHeaderContentLeft = $('.course-header-content').find('.left');

		$playBtn.fadeOut(100);
		$videoPreview.fadeOut(500);
		$courseHeaderContentLeft.fadeOut(500);
		$videoReal.hide().removeClass('hidden');
		
		var timeout2 = setTimeout(function() {
			$rightInner.addClass('video-playmode');
			$headerFooterActions.fadeIn(700);
			$videoReal.fadeIn(700);
		}, 700);

		player.playVideo();

		return false;
	});
	$('.course-header-footer .toggle').on('click', function(){
		var $icon = $(this).find('.icon');
		if($icon.hasClass('icon-play')) {
			player.playVideo();
			$icon.removeClass('icon-play').addClass('icon-pause');
		}else{
			player.pauseVideo();
			$icon.removeClass('icon-pause').addClass('icon-play');
		}
		return false;
	});

}

function onPlayerStateChange() {
  console.log("my state changed");
}