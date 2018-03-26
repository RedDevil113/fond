$(document).ready(function(){

	//mob menu
	$('.menu-bar').on('click', function(){
		$('.wrapper-overlay').toggleClass('wrapper-overlay__open');
		$('.header').toggleClass('open-menu');
		$('.sidebar-menu').toggleClass('sidebar-menu__open');
	});

	$('.notice').on('click', function(e){
		e.preventDefault();
		$('.wrapper-overlay').toggleClass('wrapper-overlay__open');
		$('.header').toggleClass('header-hidden');
		$('.content-header__bell-wrap').toggleClass('content-header__bell-wrap__open');
	});

	$('.content-tabs__menu li').on('click', function(){
		$('.tab-block').removeClass('tab-block__active');
		$('.content-tabs__menu li').removeClass('tabs-menu__active');
		$(this).addClass('tabs-menu__active');
		var attr = $(this).attr('data-tab');
		$('.' + attr).addClass('tab-block__active');	
	});

	$('.phone-confirm').on('click', function(e){
		e.preventDefault();
		$(this).css('display', 'none');
		$('.phone-hidden').addClass('phone-hidden__open');
	});

	$('.bills-table__col-3 div input').on('input',function(){
		$('.bills-table__submit').css('background', '#ff9800');
		if($('.bills-table__col-3 div input').val().length <= 0)
			$('.bills-table__submit').css('background', '#c2cbd8');
	});

	$('.email-hidden__wrap input').on('input',function(){
		$('.email-hidden__wrap a').css('background', '#448aff');
		if($(this).val().length <= 0)
			$('.email-hidden__wrap a').css('background', '#c2cbd8');
	});

	$('.phone-hidden__wrap input').on('input',function(){
		$('.phone-hidden__wrap a').css('background', '#448aff');
		if($(this).val().length <= 0)
			$('.phone-hidden__wrap a').css('background', '#c2cbd8');
	});

	$('.modal-paymentAll__bottom-input').on('click', function(){
		$(this).toggleClass('modal-paymentAll__bottom-input__checked');
		if($(this).find('input').attr('checked'))
			$(this).find('input').removeAttr('checked')
		else
			$(this).find('input').attr('checked', 'checked');
	});

	var bodyW = $(window).width()
			wrappW = $('.wrapper').width();

	$('.content-header,.content-message__bottom').css({'left': 244 + 'px', 'max-width': $('.content').innerWidth() + 'px'});
	$('.content').css('padding-top', $('.content-header').innerHeight() + 1 + 'px');

	if($(window).width() <= 880)
		$('.content-header,.content-message__bottom').css('left', '0px');

	$(window).resize(function(){
		var bodyW = $(window).width()
				wrappW = $('.wrapper').width();

		$('.content-header,.content-message__bottom').css({'left': 244 + 'px', 'max-width': $('.content').innerWidth() + 'px'});
		$('.content').css('padding-top', $('.content-header').innerHeight() + 1 + 'px');

		if($(window).width() <= 880)
			$('.content-header,.content-message__bottom').css('left', '0px');

	});

	//modal
	var modalCont = $('.modal'),
		modalOver = $('.modal-overlay');
		
	$('.button-modal').on('click',function(e){
		e.preventDefault();
		var id = $(this).attr('href');
		$(id).addClass('open');
		$(modalOver).addClass('open-overlay');
	});

	$('.cancel').on('click',function(){
		$(modalCont).removeClass('open');
		$(modalOver).removeClass('open-overlay');
	});
	$(modalOver).on('click',function(){
		$(modalCont).removeClass('open');
		$(modalOver).removeClass('open-overlay');
	});


});