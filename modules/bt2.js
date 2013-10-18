var bt2=function(){
	$('ul.nav').empty()
	.append('<li class="active"><a href="#">首页</a></li>')
	.append('<li class="active"><a href="#">BRT即時狀態</a></li>')
	.append('<li class="active"><a href="#">號誌控制狀態</a></li>');

	$('table td.bottomInfo').show().css('height','200px');
	qmap=$('#centerview').empty().css('background-color','transparent').append($('<div class="_gmap"></div>'));
	qmap.map=qmap.find('._gmap').buildGoogleMap().addInfo(
		'<div class="btn-group btn-group-vertical" style="width:100%;">\
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

	// 時空圖
	$('.bottomInfo').empty().html('\
		<table style="height:100%;width:100%;table-layout:fixed;">\
			<tbody>\
				<tr>\
					<td>圖表A</td>\
					<td>\
						<div style="height:100%;width:100%;">\
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="background-color: white;width:100%;height:100%;">\
								<!--圖表-->\
								<path d="M 120 10 l 0 160 l 370 0" stroke="#202020" stroke-width="0.5" fill="none" />\
								<path d="M 60 10 l 0 160" stroke="blue" stroke-width="6" fill="none" />\
								<path stroke-dasharray="2,2" d="M 35 145 l 455 0" stroke="silver" stroke-width="2" />\
								<path d="M 35 145 l 50 0" stroke="black" stroke-width="4" fill="none" />\
								\
								<path stroke-dasharray="2,2" d="M 35 86 l 455 0" stroke="silver" stroke-width="2" />\
								<path d="M 35 86 l 50 0" stroke="black" stroke-width="4" fill="none" />\
								\
								<path stroke-dasharray="2,2" d="M 35 30 l 455 0" stroke="silver" stroke-width="2" />\
								<path d="M 35 30 l 50 0" stroke="black" stroke-width="4" fill="none" />\
							</svg>\
						</div>\
					</td>\
				</tr>\
			</tbody>\
		</table>\
	');
};