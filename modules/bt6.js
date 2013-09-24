var bt6=function(){

	$('ul.nav').empty()
	.append('<li class="active"><a href="#">首页</a></li>')
	.append('<li class="active"><a href="#">BRT績效</a></li>');

	$('table td.bottomInfo').show();
	qmap=$('#centerview').empty().css('background-color','transparent').buildGoogleMap();

	$('#centerview').hide().fadeIn(300);
};