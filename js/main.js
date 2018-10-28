$(function() {
	var
		$icon         = $('#hamburger-icon'),
		$window       = $('#window'),
		$backWindow   = $('#back-window'),
		$pageTop      = $('#pageTop'),
		$scroll       = $(window);

	$icon.on('click', function() {
		$scroll.scrollTop(0);
		$window.toggleClass('showDown');
		$backWindow.toggleClass('show');
	});
});
