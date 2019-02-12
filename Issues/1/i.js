var d = bl$("id1234");
if(d) { b = bl$("id_btn_LoadIssue");_on_off_div(b,d);}
else{

 var s = '<div class="header"><div class="header-right" id="id_div_title">'; 
s += '<a href= "https://github.com/littleflute/bluespiano/issues/1" target="_blank">#1_v0.0.  335</a> ';
s += "<a class='xd1' target='_blank' href='https://github.com/littleflute/bluespiano/edit/master/Issues/1/i.js'"
s +=">";		s += " i1.js*  ";		s += "</a> "; 
		s += "  <a class='xd2'    target='_blank'  href='https://littleflute.github.io/bluespiano/Issues/1/i.js'"; 
		s +=">";		s += " i1.js ";		s += "</a>";   
 s += '</div></div>';
var d = blo0.blMDiv(document.body,"id1234",s,50,50,400,300,blGrey[0]);
d.v1 = blo0.blDiv(d,d.id + "v1", "v1",blGrey[0]);
var s = " //alert(location.href); \n";
s += " blo0.blScript('id_script_t' , 't.js');";
 
d.v1.t1 = blo0.blTextarea (d.v1,d.v1.id + "t1", s ,blGrey[1]);
d.v1.t1.style.width = "90%";
d.v1.t1.style.height= "210px";
d.v1.b1 = blo0.blBtn(d.v1,d.v1.id + "b1", "run",blColor[4]);

d.v1.b1.onclick = function(){
    eval(d.v1.t1.value);
}
function _Cs(o) {
				var _i = 0;
				var _s = "<a target='_balnk' href ='";
				_s += "https://github.com/littleflute/bluespiano/issues/1'";
				_s += ">#1</a>"; 
				var _v = blo0.blDiv(d.v1, d.v1.id+"_v", _s, blGrey[1]);
				for(i in o){
					_i++;
					var a = o[i].body;
					var btnJS = blo0.blBtn(_v, _v.id+"btnJS"+i,_i,blGrey[2]);
					btnJS.onclick = function(_txt){
				               return function(){d.v1.t1.value = _txt;}
				        }(a);
				}

			}
			var _src = "https://api.github.com/repos/littleflute/bluespiano/issues/1/comments";
			w3.getHttpObject(_src,  _Cs);	


 b = bl$("id_btn_LoadIssue");_on_off_div(b,d);
}

 
