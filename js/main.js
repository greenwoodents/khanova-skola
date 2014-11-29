

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












