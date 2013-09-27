var bt10=function(){
	$('ul.nav').empty()
	.append('<li class="active"><a href="#">後台</a></li>')
	.append('<li class="active"><a href="#">系統帳號管理</a></li>');

	$('table td.bottomInfo').hide();//.css('height','200px');
	qmap=$('#centerview').empty().append($('<div style="padding: 10px;"></div>'));

	var topbutton=$('\
		<div style="text-align:right;margin-bottom:10px;height:30px;">\
			<span class="btn btn-inverse">新增使用者</span>\
		</div>\
	').appendTo(qmap.find('div:first'));

	var datagrid=$('\
		<table class="table table-bordered table-hover table-usergrid">\
			<thead>\
				<tr>\
					<th style="width:40px;text-align:center;">編號</th>\
					<th style="text-align:center;">帳號</th>\
					<th style="width:120px;text-align:center;">管理</th>\
				</tr>\
			</thead>\
			<tbody>\
				<tr>\
					<th style="text-align:right;">1</th>\
					<td>user1@brt.com</td>\
					<td style="text-align:center;">\
						<span class="btn" style="width:30px;">修改</span>\
						<span class="btn btn-danger" style="width:30px;">刪除</span>\
					</td>\
				</tr>\
				<tr>\
					<th style="text-align:right;">2</th>\
					<td>user2@brt.com</td>\
					<td style="text-align:center;">\
						<span class="btn" style="width:30px;">修改</span>\
						<span class="btn btn-danger" style="width:30px;">刪除</span>\
					</td>\
				</tr>\
				<tr>\
					<th style="text-align:right;">3</th>\
					<td>user3@brt.com</td>\
					<td style="text-align:center;">\
						<span class="btn" style="width:30px;">修改</span>\
						<span class="btn btn-danger" style="width:30px;">刪除</span>\
					</td>\
				</tr>\
			</tbody>\
		</table>\
	').appendTo(qmap.find('div:first'));

	$('#centerview').hide().fadeIn(300);
}