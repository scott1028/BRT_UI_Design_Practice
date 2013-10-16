#include <sqlite3.h>
#include <iostream>
#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <regex.h>

using namespace std;

// URIDecode(用來解析參數先過濾掉規避字)
string urlDecode(string &SRC) {
	string ret;
	char ch;
	int i, ii;
	for (i=0; i<SRC.length(); i++) {
		if (int(SRC[i])==37) {
			sscanf(SRC.substr(i+1,2).c_str(), "%x", &ii);
			ch=static_cast<char>(ii);
			ret+=ch;
			i=i+2;
		}
		else {
			ret+=SRC[i];
		}
	}
	return (ret);
}

// 尋找取代文字(replace All)
void replace_all(string *str,const char *r_str){
	string rs=string(r_str);
	int idx=str->find(rs);
	while(idx<=str->size()){
		str->replace(str->find(rs),rs.size()," ");
		idx=str->find(rs,idx);
	}
}

// 如果有回傳值(例如 select 由此輸出)
static int callback_json(void *NotUsed, int argc, char **argv, char **azColName){
	cout << "{";
	for(int i=0; i<argc; i++){
		printf("\"%s\" : \"%s\", ", azColName[i], argv[i] ? argv[i] : "NULL");
	}
	cout << "}, " << endl;
	return 0;
}

// 執行 SQL 的副程式
void do_sql_json(string sql, int rc, char *zErrMsg, sqlite3 *db){
	cout << "[" << endl;
	rc = sqlite3_exec(db, sql.c_str(), callback_json, 0, &zErrMsg);
	if( rc != SQLITE_OK ){
		cout << "/*sql error!!!*/" << endl;
		sqlite3_free(zErrMsg);
	}
	else{
		//fprintf(stdout, "SQL Command successfully\n");
	}
	cout << "]" << endl;
}

int main(int argc, char* argv[]){
	sqlite3 *db;
	char *zErrMsg = 0;
	int rc;
	string sql;
	char i2s[4096];		// 用來數字轉字串的暫存

	rc = sqlite3_open("Database.db", &db);

	if( rc ){
		//fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
		return 0;
	}
	else{
		//fprintf(stderr, "Opened database successfully\n");
	}

	// cout << "<html><body>" << endl;

	sql=string(getenv("QUERY_STRING"));

	if(sql.size()<=0){
		cout << "Content-Type: text/html" << endl << endl;
		cout << "<html><body>" << endl;
		cout << "<script src='http://code.jquery.com/jquery-1.10.2.min.js'></script>" << endl;
		cout << "\
			<script>\
				var cmd=function(sql,url,type,debug){\
					this.sql=sql;\
					this.url=url;\
					this.type=type;\
					this.debug=debug;\
					this.excuteSQL=function(){\
						var _this=this;\
						$.ajax({\
							url:this.url+'?cmd=true',\
							data:{\
								sql:this.sql\
							},\
							type:this.type,\
							dataType:'html',\
							async:this.async || false,\
							success:function(data){\
								_this.result=eval(data);\
								_this.debug ? console.log(_this.result) : undefined;\
							}\
						});\
					}\
				};\
				var sql=new cmd('create table devise(id integer primary key,name text);','/cgi-bin/a.out','post',true);\
			</script>"\
		<< endl;
		cout << "</body></html>" << endl;
	}
	else{
		cout << "Content-Type: text/json" << endl << endl;

		// Get: getenv("QUERY_STRING")
		// Post Data Handle (與 Get Handle 不能共存)
		int contentLength = atoi( getenv( "CONTENT_LENGTH" ) );
		char *postString=new char[contentLength+1];
		cin.read( postString, contentLength );
		postString[contentLength] = '\0';
		sql=string(postString);
		sql=sql.substr(sql.find("sql=")+4,sql.size());
		replace_all(&sql,"+");
		sql=urlDecode(sql);
		do_sql_json(sql, rc, zErrMsg, db);
		
		sqlite3_close(db);
	}
	return 0;
}
