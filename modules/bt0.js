// 登入
var bt0=function(){
	var UIs=$('\
		<hr style="margin:5px;vertical-align:middle;border: 1px solid #DDDDDD;" />\
		<div class="accordion-group">\
			<div class="accordion-heading">\
				<div style="color:gold;" class="accordion-toggle btn btn-primary text-center" data-toggle="collapse" data-parent="#accordion2" href="#collapse5" onclick="bt8();">\
					事故建立\
				</div>\
			</div>\
		</div>\
		\
		<div class="accordion-group">\
			<div class="accordion-heading">\
				<div style="color:gold;" class="accordion-toggle btn btn-primary text-center" data-toggle="collapse" data-parent="#accordion2" href="#collapse5" onclick="bt9();">\
					歷史資料查詢\
				</div>\
			</div>\
		</div>\
		\
		<div class="accordion-group">\
			<div class="accordion-heading">\
				<div style="color:gold;" class="accordion-toggle btn btn-primary text-center" data-toggle="collapse" data-parent="#accordion2" href="#collapse5" onclick="bt10();">\
					系統帳號管理\
				</div>\
			</div>\
		</div>\
		\
		<div class="accordion-group">\
			<div class="accordion-heading">\
				<div style="color:gold;" class="accordion-toggle btn btn-primary text-center" data-toggle="collapse" data-parent="#accordion2" href="#collapse5" onclick="bt11();">\
					路口設備管理\
				</div>\
			</div>\
		</div>\
	');


	var loginUI=$('<div class="btn btn-danger" style="width:40px;height:20px;position:fixed;z-index:100;margin-left:10px;bottom:20px;left:0px;">登入</div>');
	loginUI.appendTo($('body'));
	loginUI.click(function(e){
		if($(e.target).text()=='登入'){
			$('div.dashboard').empty();
			$('div.dashboard').append(UIs.hide());
			UIs.show(250);
			$(e.target).text('登出');
		}
		else{
			UIs.hide(250,function(e){
				UIs.remove();
				$('div.dashboard').empty();	
			});
			$(e.target).text('登入');
		}
	});
};