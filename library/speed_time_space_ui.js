// 速度時空圖UI

$(document).ready(function(){
	// 時空圖
	$.prototype.speed_space_time_ui=function(){
		var me=$(this);
		var ui=$('\
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="background-color: white;width:512px;height:200px;">\
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
		');
		me.append(ui);
	}

	$('.bottomInfo').speed_space_time_ui();

	// 時空圖( createjs )
	// $.prototype.speed_space_time_ui=function(){
	// 	console.log(this);

	// 	var me=$(this);
	// 	var cav=$('<canvas></canvas>');
	// 	cav.css({
	// 		width:400,
	// 		height:300
	// 	});
	// 	var id='canvas_'+(new Date).getTime();
	// 	cav.attr('id',id);
	// 	me.append(cav);

	// 	stage = new createjs.Stage(id);
	// 	createjs.Ticker.addEventListener("tick", stage);

	// 	var gR = new createjs.Graphics();
	// 	gR.setStrokeStyle(2)
	// 	.beginStroke(createjs.Graphics.getRGB(0,0,0))
	// 	.moveTo(0,0).lineTo(0,stage.canvas.height-30)
	// 	.lineTo(stage.canvas.width-95,stage.canvas.height-30)
	// 	.endStroke();
	// 	var sR = new createjs.Shape(gR);
	// 	sR.x = 80;sR.y = 10;
	// 	stage.addChild(sR);

	// 	var l1_spos={ x:50,y:(stage.canvas.height-30)*1/4 };
	// 	var l2_spos={ x:50,y:(stage.canvas.height-30)*2/4 };
	// 	var l3_spos={ x:50,y:(stage.canvas.height-30)*3/4 };

	// 	var gL = new createjs.Graphics();
	// 	gL.setStrokeStyle(2)
	// 	.beginStroke(createjs.Graphics.getRGB(0,0,0))
	// 	.moveTo(30,0).lineTo(30,stage.canvas.height-30)
	// 	.moveTo(10,(stage.canvas.height-30)*1/4).lineTo(l1_spos.x,l1_spos.y)
	// 	.moveTo(10,(stage.canvas.height-30)*2/4).lineTo(l2_spos.x,l2_spos.y)
	// 	.moveTo(10,(stage.canvas.height-30)*3/4).lineTo(l3_spos.x,l3_spos.y)
	// 	.endStroke();

	// 	var sL = new createjs.Shape(gL);sL.y=10;sL.x=10;
	// 	stage.addChild(sL);

	// 	stage.update();
	// };

	// Debug
	// $('body').speed_space_time_ui();
});