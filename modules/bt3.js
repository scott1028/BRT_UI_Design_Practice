var bt3=function(){
	$('ul.nav').empty()
	.append('<li class="active"><a href="#">首页</a></li>')
	.append('<li class="active"><a href="#">控制設備資訊</a></li>');

	$('table td.bottomInfo').show();
	qmap=$('#centerview').empty().css('background-color','transparent').buildGoogleMap();
	qmap.addInfo(
		'<div class="btn-group btn-group-vertical">\
			<div class="btn btn-success">正常</div>\
			<div class="btn btn-success">異常</div>\
			<div class="btn btn-success">BRT路線</div>\
			<div class="btn btn-success">快捷巴士</div>\
		</div>',
		google.maps.ControlPosition.RIGHT_BOTTOM,
		{
			backgroundColor:'silver',
			width: 130,
			marginBottom:5,
			marginRight:5
		}
	);

	$('#centerview').hide().fadeIn(300);
};