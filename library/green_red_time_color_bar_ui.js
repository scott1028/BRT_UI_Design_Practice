// 折減比例圖的 UI 設計

$(document).ready(function(e){
	$.prototype.create_green_red_time_color_bar_ui=function(opt){
		var me=$(this);
		var ui=$('\
			<div style="margin:0px;">\
				<span class="green"></span>\
				<span class="yellow"></span>\
				<span class="red"></span>\
			</div>\
		');
		ui.css({
			backgroundColor:'silver',
			width:240,
			height:40,
			position:'relative',
			padding:0,
			margin:0,
			textAlignL'center'
		});
		ui.find('span').css({
			width:'33.33%',
			height:'100%',
			padding:0,
			margin:0,
			float:'left'
		});
		ui.find('span.green').css({backgroundColor:'green',display:'inline-block'});
		ui.find('span.yellow').css({backgroundColor:'yellow',display:'inline-block'});
		ui.find('span.red').css({backgroundColor:'red',display:'inline-block'});

		if(opt && opt.css) ui.css(opt.css);

		// 增加 UI 到畫面上
		ui.appendTo(me);
	};

	// Debug
	test();
});


// develop function
var test=function(){
	$('.bottomInfo').create_green_red_time_color_bar_ui();
};

console.log(1);