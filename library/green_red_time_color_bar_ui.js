// 折減比例圖的 UI 設計

$(document).ready(function(e){
	$.prototype.create_green_red_time_color_bar_ui=function(ratio){
		// 初始值
		var ratio=ratio || {
			green:45,
			yellow:30,
			red:10
		};

		var me=$(this);
		var ui=$('\
			<div style="margin:0px;">\
				<div style="width:100%;height:20px;backgroundColor:transparent;"></div>\
				<div class="box">\
					<div class="lightbar green">\
						<span style="float:right;position:relative;top:-18px;">m1</span>\
					</div>\
					<div class="lightbar yellow">\
						<span style="float:right;position:relative;top:-18px;">T1</span>\
					</div>\
					<div class="lightbar red">\
						<span style="float:right;position:relative;top:-18px;">M1</span>\
					</div>\
				</div>\
			</div>\
		');
		ui.css({
			width:240,
			height:30,
			position:'relative',
			padding:0,
			margin:0,
			textAlign:'center',
		});
		ui.find('div.box').css({
			boxShadow:'1px 1px 3px #303030',
			margin:0,
			padding:0,
			height:10
		});
		ui.find('.lightbar').css({
			position:'absoulte',
			width:80,
			height:10,
			opacity:0.5,
			padding:0,
			margin:0
		});
		
		// 製作類似 CSS Hover 的漸進變化效果
		ui.find('.lightbar').hover(function(e){
			$(e.target).animate({
				opacity:1
			},200);
		},function(e){
			$(e.target).animate({
				opacity:0.5
			},100);
		});

		var pw=ui.width();
		var sum=0;
		for(var i in ratio) sum+=ratio[i];
		for(var i in ratio){
			ui.find('.'+i).width(pw*ratio[i]/sum);
		};

		// float 前兩個讓它去除該作用兩旁的 space 字元
		ui.find('.lightbar.green').css({backgroundColor:'green',display:'inline-block',float:'left'});
		ui.find('.lightbar.yellow').css({backgroundColor:'yellow',display:'inline-block',float:'left'});
		// 最後一個不用 float
		ui.find('.lightbar.red').css({backgroundColor:'red',display:'inline-block',float:'left'});

		// 將目標元素替換成自訂的 UI
		me.replaceWith(ui);

		return me;
	};

	// Debug
	test();
});


// develop function
var test=function(){

	[
		$('<div style="width:240px;"></div>'),
		$('<div style="width:240px;"></div>'),
		$('<div style="width:240px;"></div>'),
	].forEach(function(r,i,a){
		$('.bottomInfo').append(r);
	});

	$('.bottomInfo').find('>div:eq(0)').create_green_red_time_color_bar_ui({green:30,yellow:24,red:10});
	$('.bottomInfo').find('>div:eq(1)').create_green_red_time_color_bar_ui({green:1,yellow:1,red:1});
	$('.bottomInfo').find('>div:eq(2)').create_green_red_time_color_bar_ui({green:1,yellow:2,red:3})
};