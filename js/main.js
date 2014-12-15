//Open mobile nav (burger)
$('.burger').on('click', function(){
	$('.mobile-nav').toggleClass('open');
	
	return false;
});

$(document).click(function(e){
    // Mobile nav
    if(!$(e.target).closest(".mobile-nav, .burger").length > 0 ) {
		if($('.mobile-nav').hasClass('open')){
			$('.mobile-nav').removeClass('open');
		}
    }

    //Dropdown big
    if(!$(e.target).closest(".header, .dropdown-big").length > 0 ) {
		if($('.dropdown-big').hasClass('open')){
			$('.dropdown-big').removeClass('open');
			$('.header').removeClass('dropdown-open');
		}
    }

});

$('.ul-tab a').click(function (e) {
	e.preventDefault();
	$(this).tab('show');
});

$('.dropdown-big .dropdown-toggle').on('click', function(){
	var $dropdown = $(this).parents('.dropdown').first();
	$dropdown.toggleClass('open');
	$('.header').toggleClass('dropdown-open');
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












