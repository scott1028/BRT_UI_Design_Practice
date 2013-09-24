var bt1=function(){
	$('ul.nav').empty()
	.append('<li class="active"><a href="#">首页</a></li>')
	.append('<li class="active"><a href="#">BRT即時狀態</a></li>')
	.append('<li class="active"><a href="#">即時狀態</a></li>');

	$('table td.bottomInfo').show();
	qmap=$('#centerview').empty().css('background-color','transparent').buildGoogleMap();
	qmap.addInfo(
		'<div class="btn-group btn-group-vertical">\
			<div class="btn btn-success">快捷巴士</div>\
			<div class="btn btn-success">快捷巴士站</div>\
			<div class="btn btn-success">優先號誌</div>\
			<div class="btn btn-success">BRT路線</div>\
			<div class="btn btn-success">TOD</div>\
			<div class="btn btn-success">Priority</div>\
			<div class="btn btn-success">手動</div>\
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
