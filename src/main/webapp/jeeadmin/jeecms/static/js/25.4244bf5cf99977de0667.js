webpackJsonp([25],{"/pKY":function(t,e){!function(t){function e(){return p.mode!=a.iframe&&p.strict?'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01'+(0==p.strict?" Trasitional":"")+'//EN" "http://www.w3.org/TR/html4/'+(0==p.strict?"loose":"strict")+'.dtd">':""}function d(){var e="<head><title>"+p.popTitle+"</title>";return t(document).find("link").filter(function(){return"stylesheet"==t(this).attr("rel").toLowerCase()}).filter(function(){var e=t(this).attr("media");return""==e.toLowerCase()||"print"==e.toLowerCase()}).each(function(){e+='<link type="text/css" rel="stylesheet" href="'+t(this).attr("href")+'" >'}),e+="</head>"}function o(e){return'<body><div class="'+t(e).attr("class")+'">'+t(e).html()+"</div></body>"}function i(e){return t("input,select,textarea",e).each(function(){var e=t(this).attr("type");if("radio"==e||"checkbox"==e)t(this).is(":not(:checked)")?this.removeAttribute("checked"):this.setAttribute("checked",!0);else if("text"==e)this.setAttribute("value",t(this).val());else if("select-multiple"==e||"select-one"==e)t(this).find("option").each(function(){t(this).is(":not(:selected)")?this.removeAttribute("selected"):this.setAttribute("selected",!0)});else if("textarea"==e){var d=t(this).attr("value");t.browser.mozilla?this.firstChild?this.firstChild.textContent=d:this.textContent=d:this.innerHTML=d}}),e}function r(){var e,d=p.id;try{e=document.createElement("iframe"),document.body.appendChild(e),t(e).attr({style:"border:0;position:absolute;width:0px;height:0px;left:0px;top:0px;",id:d,src:""}),e.doc=null,e.doc=e.contentDocument?e.contentDocument:e.contentWindow?e.contentWindow.document:e.document}catch(t){throw t+". iframes may not be supported in this browser."}if(null==e.doc)throw"Cannot find document.";return e}function l(){var t="location=yes,statusbar=no,directories=no,menubar=no,titlebar=no,toolbar=no,dependent=no";t+=",width="+p.popWd+",height="+p.popHt,t+=",resizable=yes,screenX="+p.popX+",screenY="+p.popY+",personalbar=no,scrollbars=no";var e=window.open("","_blank",t);return e.doc=e.document,e}var n=0,a={iframe:"iframe",popup:"popup"},c={mode:a.iframe,popHt:500,popWd:400,popX:200,popY:200,popTitle:"",popClose:!1},p={};t.fn.printArea=function(s){t.extend(p,c,s),n++;t("[id^=printArea_]").remove();var x=i(t(this));p.id="printArea_"+n;var f,b;switch(p.mode){case a.iframe:var h=new r;f=h.doc,b=h.contentWindow||h;break;case a.popup:b=new l,f=b.doc}f.open(),f.write(e()+"<html>"+d()+o(x)+"</html>"),f.close(),b.focus(),b.print(),p.mode==a.popup&&p.popClose&&b.close()}}(jQuery)},"9CX9":function(t,e,d){"use strict";function o(t){d("eR/N")}Object.defineProperty(e,"__esModule",{value:!0});var i=d("lcoF"),r=d("2sCs"),l=d.n(r),n=(d("x1ym"),d("/pKY"),{mixins:[i.a],data:function(){return{params:{userId:"",contentId:""},activeNames:["1"],rules:{},memberGroup:[],roles:[]}},methods:{getDataInfo:function(t,e){var d=this,o=this.$api;l.a.all([l.a.post(o.jobapplyView,{contentId:this.id,userId:this.type})]).then(l.a.spread(function(t){d.dataInfo=t.body,d.$refs.form.resetFields(),d.loading=!1})).catch(function(t){d.loading=!1})},print:function(){var t=window.open("about:blank","",""),e=document.getElementById("doctitle").innerHTML;t.document.write(e),t.document.location.reload(),t.print()}},created:function(){this.getDataInfo(this.type,this.id)}}),a=function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-body"},[d("cms-back"),t._v(" "),d("div",{staticClass:"print-page",staticStyle:{width:"210mm",height:"297mm",padding:"30px",margin:"0 auto","font-size":"12px","text-align":"center"}},[d("div",{attrs:{id:"doctitle"}},[d("h2",{staticClass:"print-title",staticStyle:{"text-align":"center","margin-bottom":"30px"}},[t._v(t._s(t.dataInfo.resumeName)+"简历")]),t._v(" "),d("table",{staticStyle:{margin:"0 auto","border-collapse":"collapse","border-top":"1px solid #d8dce5","border-right":"1px solid #d8dce5",padding:"0"}},[d("tr",[d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("姓名")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.realname))]),t._v(" "),d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("性别")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t.dataInfo.gender?d("span",[t._v("  男")]):d("span",[t._v(" 女 ")])])]),t._v(" "),d("tr",[d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("出生日期")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.birthday))]),t._v(" "),d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("来自")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.comefrom))])]),t._v(" "),d("tr",[d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("手机号")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.mobile))]),t._v(" "),d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("固定电话")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.phone))])]),t._v(" "),d("tr",[d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("学历")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.eduBack))]),t._v(" "),d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("专业")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.eduDiscipline))])]),t._v(" "),d("tr",[d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("毕业学校")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.eduSchool))]),t._v(" "),d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("毕业时间")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.eduGraduation))])]),t._v(" "),t._m(0),t._v(" "),d("tr",[d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("期望工作性质")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.targetWorknature))]),t._v(" "),d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("期望工作地点")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.targetWorkplace))])]),t._v(" "),d("tr",[d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("期望职位类型")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.targetCategory))]),t._v(" "),d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("期望月薪")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.targetSalary))])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),d("tr",[d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("公司名称")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.recentCompany))]),t._v(" "),d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("职位名称")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"}},[t._v(t._s(t.dataInfo.jobName))])]),t._v(" "),d("tr",[d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"32px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("工作起止时间")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left"},attrs:{colspan:"3"}},[t._v(t._s(t.dataInfo.jobStart))])]),t._v(" "),d("tr",[d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"243px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("工作描述")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left","padding-top":"15px","vertical-align":"top"},attrs:{colspan:"3"}},[t._v(t._s(t.dataInfo.jobDescription))])]),t._v(" "),d("tr",[d("td",{staticStyle:{background:"#f1f3f7",color:"#999999","font-size":"12px",width:"98px",height:"100px","text-align":"center","border-bottom":"1px solid #d8dce5","border-left":"1px solid #d8dce5"}},[t._v("自我评价")]),t._v(" "),d("td",{staticStyle:{width:"170px","border-left":"1px solid #d8dce5","border-bottom":"1px solid #d8dce5","padding-left":"15px",color:"#353535","text-align":"left","padding-top":"15px","vertical-align":"top"},attrs:{colspan:"3"}},[t._v(t._s(t.dataInfo.selfEvaluation))])])])]),t._v(" "),d("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/group/edit",expression:"'/group/edit'"}],staticStyle:{"margin-top":"24px"},attrs:{type:"primary"},on:{click:function(e){t.print()}}},[t._v("打印简历")])],1)],1)},c=[function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("tr",[d("td",{staticStyle:{"border-left":"1px solid #d8dce5",height:"16px","border-bottom":"1px solid #d8dce5"},attrs:{colspan:"4"}})])},function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("tr",[d("td",{staticStyle:{"border-left":"1px solid #d8dce5",height:"16px","border-bottom":"1px solid #d8dce5"},attrs:{colspan:"4"}})])},function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("tr",[d("td",{staticStyle:{"border-left":"1px solid #d8dce5",height:"16px","border-bottom":"1px solid #d8dce5","line-height":"32px","text-align":"center"},attrs:{colspan:"4"}},[t._v("最近一次工作经历")])])}],p={render:a,staticRenderFns:c},s=p,x=d("Z0/y"),f=o,b=x(n,s,!1,f,"data-v-31e83ec8",null);e.default=b.exports},"eR/N":function(t,e,d){var o=d("wE2e");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);d("FIqI")("3e950920",o,!0,{})},wE2e:function(t,e,d){e=t.exports=d("l95E")(!1),e.push([t.i,"\n.print-page[data-v-31e83ec8] {\n  width: 210mm;\n  height: 297mm;\n  padding: 30px;\n  margin: 0 auto;\n  font-size: 12px;\n  text-align: center;\n}\n.print-page table[data-v-31e83ec8] {\n  margin: 0 auto;\n  border-collapse: collapse;\n  padding: 0;\n  border-top: 1px solid #d8dce5;\n  border-right: 1px solid #d8dce5;\n}\n.print-title[data-v-31e83ec8] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.print-label[data-v-31e83ec8] {\n  background: #f1f3f7;\n  color: #999999;\n  font-size: 12px;\n  width: 98px;\n  height: 32px;\n  text-align: center;\n  border-bottom: 1px solid #d8dce5;\n  border-left: 1px solid #d8dce5;\n}\n.print-content[data-v-31e83ec8] {\n  width: 170px;\n  border-left: 1px solid #d8dce5;\n  border-bottom: 1px solid #d8dce5;\n  padding-left: 15px;\n  color: #353535;\n  text-align: left;\n}\n.print-seg[data-v-31e83ec8] {\n  border-left: 1px solid #d8dce5;\n  height: 16px;\n  border-bottom: 1px solid #d8dce5;\n}\n.print-area[data-v-31e83ec8] {\n  padding-top: 15px;\n  vertical-align: top;\n}\n",""])}});