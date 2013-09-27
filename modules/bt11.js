var bt11=function(){

	$('ul.nav').empty()
	.append('<li class="active"><a href="#">後台</a></li>')
	.append('<li class="active"><a href="#">路口設備管理</a></li>');

	$('table td.bottomInfo').show().css('height','200px');
	qmap=$('#centerview').empty().css('background-color','transparent').append($('<div class="_gmap"></div>'));
	qmap.map=qmap.find('._gmap').buildGoogleMap();

	qmap.map.addInfo(
		'<div class="btn-group" style="width:100%;">\
			<div class="btn btn-inverse">路線</div>\
			<div class="btn btn-inverse">路段</div>\
			<div class="btn btn-inverse">路口</div>\
			<div class="btn btn-warning">巴士站</div>\
			<div class="btn btn-success">AVI</div>\
			<div class="btn btn-success">號誌控制器</div>\
			<div class="btn btn-success">觸發站</div>\
			<div class="btn btn-success">車輛偵測器</div>\
			<div class="btn btn-success">DSRC</div>\
			<div class="btn btn-success">GPS</div>\
		</div>',
		google.maps.ControlPosition.RIGHT_TOP,
		{
			backgroundColor:'silver',
			marginTop:5,
			marginRight:5
		}
	);

	// 監看經緯度(位置)
	google.maps.event.addListener(qmap.map.map, 'click', function(e) {
		//console.log(e.latLng);
		console.log(123);


	});
	
	$('#centerview').hide().fadeIn(300);
};
