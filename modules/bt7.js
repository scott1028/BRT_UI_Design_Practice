var bt7=function(){

	$('ul.nav').empty()
	.append('<li class="active"><a href="#">首页</a></li>')
	.append('<li class="active"><a href="#">事故顯示</a></li>');

	$('table td.bottomInfo').css('height','200px');
	qmap=$('#centerview').empty().css('background-color','transparent').buildGoogleMap();

	$('#centerview').hide().fadeIn(300);
};