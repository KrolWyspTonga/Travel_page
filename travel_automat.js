
$(document).ready(function(){
	var Menu1 = $('.NavbarBis').offset().top;
	var sticky_Menu1 = function()
	{
		var Skrol = $(window).scrollTop();
		if(Skrol > Menu1)
		{
			$('.NavbarBis').addClass('Klej');
		}
		else
		{
			$('.NavbarBis').removeClass('Klej');
		}
	};
	sticky_Menu1();
	$(window).scroll(function () {sticky_Menu1()});
});

