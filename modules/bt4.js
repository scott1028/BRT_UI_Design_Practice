var bt4=function(){
	// 基本版型
		$('ul.nav').empty()
		.append('<li class="active"><a href="#">首页</a></li>')
		.append('<li class="active"><a href="#">排程</a></li>')
		.append('<li class="active"><a href="#">路口參數</a></li>');

		$('table td.bottomInfo').hide();//.css('height','0px');
		qmap=$('#centerview').empty().css('background-color','transparent');
		qmap.append('\
			<div style="position:relative;z-index:-1;">\
			<span class="btn btn-success" style="float:left;margin:3px;font-size:12pt;">新增時段</span>\
			<!--span class="btn btn-success lcn_calculate" style="float:right;margin:3px;font-size:12pt;" data-toggle="button">行事曆</span-->\
			<ul class="nav nav-tabs">\
				<li class="active">\
					<a style="cursor: pointer;" onclick="$(this).parent().parent().find(\'li\').attr(\'class\',\'\');$(this).parent().attr(\'class\',\'active\');"><span style="color:#303030;">平日(6)</span></a>\
				</li>\
				<li>\
					<a style="cursor: pointer;" onclick="$(this).parent().parent().find(\'li\').attr(\'class\',\'\');$(this).parent().attr(\'class\',\'active\');"><span style="color:orangered;">例假日(7)</span></a>\
				</li>\
				<li>\
					<a style="cursor: pointer;" onclick="$(this).parent().parent().find(\'li\').attr(\'class\',\'\');$(this).parent().attr(\'class\',\'active\');"><span style="color:brown;">特別日 1(8)</span></a>\
				</li>\
				<li>\
					<a style="cursor: pointer;" onclick="$(this).parent().parent().find(\'li\').attr(\'class\',\'\');$(this).parent().attr(\'class\',\'active\');"><span style="color:darkgreen;">特別日 2(9)</span></a>\
				</li>\
			</ul>\
			</div>\
		');
		
		qmap.append(
			'<div style="height:100%;padding:10px;padding-top:10px;">\
				<label style="float:left;margin-right:10px;font-size:14pt;font-weight:bold;">路口名稱　\
					<select class="span3" style="margin:2px;font-size:12pt;font-weight:bold;">\
						<option>忠明路口</option>\
						<option>英才路口</option>\
						<option>五權路口</option>\
					</select>\
				</label>\
				<a class="calender_insert_pointer" style="display:none;"></a>\
				<a class="data_header_insert_point" style="display:none;"></a>\
				\
				<div style="height:100px;text-align:right;clear:both;">\
					<span class="btn btn-large btn-inverse">放棄</span>\
					<span class="btn btn-large btn-inverse">保存</span>\
				</div>\
			</div>'
		);

		$('\
			<div style="clear:both;text-align:right;margin:5px;">\
				<span class="btn btn-deltime">刪除選取</span>\
				<span class="btn btn-addtime">新增時間</span>\
			</div>\
		').insertBefore(qmap.find('a.data_header_insert_point'));		// 插入點;

		$('\
			<table class="table table-bordered mainbody">\
				<thead>\
					<tr class="header">\
						<th style="color:blue;text-align:center;font-size:12pt;font-weight:bold;width:174px;" colspan="3">計畫編號與起始時間</th>\
						<th style="color:blue;text-align:center;font-size:12pt;font-weight:bold;width:630px;" colspan="2">時制設定</th>\
					</tr>\
				</thead>\
				<tbody></tbody>\
			</table>\
		').insertAfter(qmap.find('a.data_header_insert_point'));		// 插入點;

	// 萬年曆,萬年曆的資料填寫程式
	var create_calendar_ui=function(){
		var calendar_container=$('<div class="calendar_container" style="-webkit-user-select: none;clear:both;width:100%;position:relative;height:220px;margin-bottom:10px;"></div>');
		calendar_container.append('\
			<table class="table-bordered table table-striped table-hover scalendar sc1" style="width: 49%;height:220px;float:left;margin-left:0px;border-collapse:collapse"><tbody>\
				<tr><th class="btn-info cleft" style="cursor:pointer;"><span class="icon-backward" style="width:20px;height:20px;"></span></th><th colspan="6" class="theader btn-warning"></th></tr>\
				<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>\
				<tr><td class="d0"></td><td class="d1"></td><td class="d2"></td><td class="d3"></td><td class="d4"></td><td class="d5"></td><td class="d6"></td></tr>\
				<tr><td class="d0"></td><td class="d1"></td><td class="d2"></td><td class="d3"></td><td class="d4"></td><td class="d5"></td><td class="d6"></td></tr>\
				<tr><td class="d0"></td><td class="d1"></td><td class="d2"></td><td class="d3"></td><td class="d4"></td><td class="d5"></td><td class="d6"></td></tr>\
				<tr><td class="d0"></td><td class="d1"></td><td class="d2"></td><td class="d3"></td><td class="d4"></td><td class="d5"></td><td class="d6"></td></tr>\
				<tr><td class="d0"></td><td class="d1"></td><td class="d2"></td><td class="d3"></td><td class="d4"></td><td class="d5"></td><td class="d6"></td></tr>\
				<tr><td class="d0"></td><td class="d1"></td><td class="d2"></td><td class="d3"></td><td class="d4"></td><td class="d5"></td><td class="d6"></td></tr>\
			</tbody></table>\
		');
		calendar_container.append('\
			<table class="table-bordered table table-striped table-hover scalendar sc2" style="width: 49%;height:200px;float:right;margin-right:0px;border-collapse:collapse"><tbody>\
				<tr><th colspan="6" class="theader btn-warning"></th><th class="btn-info cright" style="cursor:pointer;"><span class="icon-forward" style="width:20px;height:20px;"></span></th></tr>\
				<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>\
				<tr><td class="d0"></td><td class="d1"></td><td class="d2"></td><td class="d3"></td><td class="d4"></td><td class="d5"></td><td class="d6"></td></tr>\
				<tr><td class="d0"></td><td class="d1"></td><td class="d2"></td><td class="d3"></td><td class="d4"></td><td class="d5"></td><td class="d6"></td></tr>\
				<tr><td class="d0"></td><td class="d1"></td><td class="d2"></td><td class="d3"></td><td class="d4"></td><td class="d5"></td><td class="d6"></td></tr>\
				<tr><td class="d0"></td><td class="d1"></td><td class="d2"></td><td class="d3"></td><td class="d4"></td><td class="d5"></td><td class="d6"></td></tr>\
				<tr><td class="d0"></td><td class="d1"></td><td class="d2"></td><td class="d3"></td><td class="d4"></td><td class="d5"></td><td class="d6"></td></tr>\
				<tr><td class="d0"></td><td class="d1"></td><td class="d2"></td><td class="d3"></td><td class="d4"></td><td class="d5"></td><td class="d6"></td></tr>\
			</tbody></table>\
		');

		calendar_container.find('th.cleft').click(function(e){
			// console.log(bt4.year_mon);
			bt4.year_mon.month-=1;
			if(bt4.year_mon.month<=0){
				bt4.year_mon.month=12;
				bt4.year_mon.year-=1;
			}
			create_calendar_ui.create_calendar(bt4.year_mon.year,bt4.year_mon.month);
		});

		calendar_container.find('th.cright').click(function(e){
			// console.log(bt4.year_mon);
			bt4.year_mon.month+=1;
			if(bt4.year_mon.month>=13){
				bt4.year_mon.month=1;
				bt4.year_mon.year+=1;
			}
			create_calendar_ui.create_calendar(bt4.year_mon.year,bt4.year_mon.month);
		});

		return calendar_container;
	};
	create_calendar_ui.create_calendar=function(year,m){
		var cell_index=0;
		var cal=getYearFirstDate(year,m,1);
		var cal_tds=$('table.scalendar.sc1').find('td').empty().attr('date','').attr('index','');
		var day=1;
		for(var i=0;i<cal_tds.length;i++){

			console.log(cell_index);

			if(cal_tds[i].className=='d'+cal.firstDay && day==1){
				$(cal_tds[i]).text(day).attr('date',year+'-'+( m<10 ? '0'+m : m )+'-'+( day<10 ? '0'+day : day ) ).attr('index',cell_index);
				day+=1;
				cell_index+=1;
			}
			else if(day>1){
				$(cal_tds[i]).text(day).attr('date',year+'-'+( m<10 ? '0'+m : m )+'-'+( day<10 ? '0'+day : day ) ).attr('index',cell_index);
				day+=1;
				cell_index+=1;
			}

			if(day>cal.monthDays) break;
		};

		$('table.scalendar.sc1').find('th.theader').text(year+'-'+( m<10 ? '0'+m : m) );

		var _m = ( m+1>12 ? m+1-12 : m+1 );
		var _year= ( m+1>12 ? year+1 : year );

		var cal=getYearFirstDate(_year,_m,1);
		var cal_tds=$('table.scalendar.sc2').find('td').empty().attr('date','').attr('index','');;
		var day=1;
		for(var i=0;i<cal_tds.length;i++){
			if(cal_tds[i].className=='d'+cal.firstDay && day==1){
				$(cal_tds[i]).text(day).attr('date',_year+'-'+( _m<10 ? '0'+_m : _m )+'-'+( day<10 ? '0'+day : day ) ).attr('index',cell_index);
				day+=1;
				cell_index+=1;
			}
			else if(day>1){
				$(cal_tds[i]).text(day).attr('date',_year+'-'+( _m<10 ? '0'+_m : _m )+'-'+( day<10 ? '0'+day : day ) ).attr('index',cell_index);
				day+=1;
				cell_index+=1;
			}

			if(day>cal.monthDays) break;
		};

		$('table.scalendar.sc2').find('th.theader').text(_year+'-'+(_m<10 ? '0'+_m : _m) );

		// 紀錄 flag, 之後要用來操作用
		bt4.year_mon={ year:year, month:m };

	};window.create_calendar=create_calendar_ui.create_calendar;

	// 日曆插入點
	create_calendar_ui().insertAfter(qmap.find('a.calender_insert_pointer'));

	// 資料列的 UI 設計
	var create_tr_ui=function(data){
		var ui=$('\
			<tr>\
				<th style="width:20px;text-align:center;padding-top:24px;"><input type="checkbox" style="margin:2px;" /></th>\
				<th style="width:20px;text-align:center;padding-top:22px;"><input type="number" style="width:15px;height:18px;" value=1 /></th>\
				<th style="color:#505050;font-size:18pt;font-weight:bold;vertical-align:top;padding-top:20px;width:40px;">\
					<div class="input-append bootstrap-timepicker">\
						<input type="text" class="input-small" style="width:50px;">\
						<span class="add-on"><i class="icon-time"></i></span>\
					</div>\
				</th>\
				<td style="color:#505050;font-size:18pt;font-weight:bold;vertical-align:top;width:150px;padding-top:20px;text-align:center;">\
					<select style="width:130px;font-size:12pt;font-weight:bold;">\
						<option selected="selected">普通二時相</option>\
						<option>閃黃燈</option>\
					</select>\
				</td>\
				<td style="padding:0px;">\
					<table style="width:100%;margin:0px;height:100%;">\
						<thead>\
							<tr>\
								<th class="display-btn" onclick="console.log(a=this);$(this).parent().parent().parent().find(\'tbody tr.phase_details\').toggle(150);" style="cursor:pointer;width:30px;text-align:center;">＋</th>\
								<th style="text-align:center;color:red !important;">分1</th>\
								<th style="text-align:center;color:red !important;">分2</th>\
								<th style="text-align:center;color:red !important;">分3</th>\
								<th style="text-align:center;color:red !important;">分4</th>\
								<th style="text-align:center;color:red !important;">分5</th>\
								<th style="text-align:center;color:red !important;">分6</th>\
								<th style="text-align:center;color:red !important;">分7</th>\
								<th style="text-align:center;color:red !important;">分8</th>\
								<th style="text-align:center;color:red !important;">週期</th>\
								<th style="text-align:center;color:red !important;">延遲</th>\
							</tr>\
							<!--總攬-->\
							<tr class="phase_overview">\
								<td style="color:#0080FF;font-weight:bold;font-size:8pt;padding-left:0px;padding-right:0px;text-align:center;">總秒數</td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
							</tr>\
						</thead>\
						<tbody>\
							<!--細項-->\
							<tr class="phase_details">\
								<th style="font-weight:bold;font-size:8pt;padding-left:0px;padding-right:0px;text-align:center;">紅</th>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
							</tr>\
							<!--細項-->\
							<tr class="phase_details">\
								<th style="font-weight:bold;font-size:8pt;padding-left:0px;padding-right:0px;text-align:center;">綠</th>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
							</tr>\
							<tr class="phase_details">\
								<th style="font-weight:bold;font-size:8pt;padding-left:0px;padding-right:0px;text-align:center;">黃</th>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
							</tr>\
							<tr class="phase_details">\
								<th style="font-weight:bold;font-size:8pt;padding-left:0px;padding-right:0px;text-align:center;">行綠</th>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
							</tr>\
							<tr class="phase_details">\
								<th style="font-weight:bold;font-size:8pt;padding-left:0px;padding-right:0px;text-align:center;">行綠閃</th>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
							</tr>\
							<tr class="phase_details">\
								<th style="font-weight:bold;font-size:8pt;padding-left:0px;padding-right:0px;text-align:center;">最小綠</th>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
							</tr>\
							<tr class="phase_details">\
								<th style="font-weight:bold;font-size:8pt;padding-left:0px;padding-right:0px;text-align:center;">最大綠</th>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
								<td style="padding:0px;"><input type="number" style="padding:0px;margin:0px;width:100%;border-width:0px;height:100%;font-size:14pt;font-weight:bold;"" /></td>\
							</tr>\
						</tbody>\
					</table>\
					\
				</td>\
			</tr>\
		');

		// script
		/*
		ui.find('input[type=number]').click(function(e){ // 當 input:number 被點選的時候
			// console.log(e);
			$('div.bottom_spinner').remove();
			var spinner=$('<div class="bottom_spinner"></div>').css({
				width:'100%',
				height:'200px',
				position:'fixed',
				bottom:0,
				left:0,
				backgroundColor:'#303030',
				zIndex:101,
			});

			var close_bt=$('<div>X</div>').css({
				borderRadius:35,
				position:'absolute',
				backgroundColor:'white',
				width:50,
				height:50,
				textAlign:'center',
				lineHeight:'50px',
				boxShadow:'#303030 0px 0px 10px inset',
				border:'5px solid #303030',
				right:25,
				top:-25,
				cursor:'pointer'
			}).click(function(e){
				$(this).parent().animate({
					bottom:-200
				},300,'swing',function(ee){
					$('div.top_stretch').css('height',0);
					$('hr.bottom_stretch').css({borderWidth:0});
					$(this).remove();
				});
			}).hover(function(e){
				$(e.target).css('background-color','yellow');
			},function(e){
				$(e.target).css('background-color','white');
			});

			close_bt.appendTo(spinner);

			//spinner.append();

			spinner.css('bottom','-200px').insertAfter($('a.bottom_modal_point')).animate({
				bottom:0
			},300,'swing',function(ee){
				$('div.top_stretch').css('height','100%');
				$('hr.bottom_stretch').css({borderWidth:80});
			});
		});
		*/

		var tp=ui.find('div.bootstrap-timepicker>input').css('font-size','14pt').timepicker({
			minuteStep: 10,
			showSeconds: false,
			showMeridian: false,
			defaultTime: 'current'
		});
		if(data && data.setTime) tp.timepicker('setTime',data.setTime);
		ui.find('tr.phase_details>td>input').val(0);
		ui.find('tr.phase_overview>td>input').css({backgroundColor:'#f9f9f9'}).val(0);
		ui.find('th').css({fontWeight:'bold',color:'darkgreen'});
		ui.find('.phase_overview input').css({textAlign:'center',color:'#0080FF'});
		ui.find('.phase_details input').css({textAlign:'center',color:'#008080'});
		ui.find('.display-btn').click(function(e){
			if($(this).text()=='＋'){
				$(this).text('－');
			}
			else{
				$(this).text('＋');
			}
		});

		return ui;
	};
	create_tr_ui.create_and_insert=function(data,after_target){
		if(after_target==undefined){
			create_tr_ui(data).appendTo(qmap.find('table.table.mainbody>tbody'));
		}
		else{
			create_tr_ui(data).insertAfter(after_target);	
		}
	};

	// 新增時間按鈕 script
	qmap.find('.btn-addtime').click(function(e){
		var item=qmap.find('tbody>tr>th>input[type=checkbox]:checked:last').parent().parent();
		if(item.length!=0) create_tr_ui.create_and_insert(undefined,item);
		else create_tr_ui.create_and_insert(undefined);
	});

	// 刪除時間按鈕 script
	qmap.find('.btn-deltime').click(function(e){
		var items=qmap.find('tbody>tr>th>input[type=checkbox]:checked');
		for(var i=0;i<items.length;i++){
			$(items[i]).parent().parent().remove();
		}
	});

	// 展示資料(可以刪除)
		// var i=0;
		for(var i=0;i<6;i++){
			create_tr_ui.create_and_insert( { setTime: i<10 ? '0'+i+':00' : i+':00' } );
		};

	// 展示資料(假定日曆時間)
		create_calendar_ui.create_calendar(
			(new Date).getFullYear(),
			(new Date).getMonth()+1
		);

	// 樣式&特效
		$('table.table td').css({textAlign:'center'});
		$('table.table th').css({textAlign:'center'});
		$('table.table tr.phase_details th').css({
			textAlign:'center',
			backgroundColor: '#f9f9f9',
			fontWeight:'bold',
			fontSize:'8pt',
			paddingLeft:0,
			paddingRight:0
		});
		$('#centerview').hide().fadeIn(300);
};