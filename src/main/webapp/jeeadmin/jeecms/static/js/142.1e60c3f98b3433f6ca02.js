webpackJsonp([142],{CAw0:function(n,e,t){e=n.exports=t("I71c")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},LNuT:function(n,e,t){var r=t("CAw0");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t("FIqI")("12f93d6d",r,!0,{})},"y4/j":function(n,e,t){"use strict";function r(n){t("LNuT")}Object.defineProperty(e,"__esModule",{value:!0});var s=t("PHrY"),a={data:function(){return{loading:!0,rules:{distName:[{required:!0,message:"此项必填",trigger:"blur"}]},params:{origName:"",distName:"",root:""}}},methods:{reName:function(n){var e=this;this.$refs[n].validate(function(n){if(!n)return!1;var t=e.params;s.n(t).then(function(n){e.loading=!1,200==n.code?(e.$message.success("修改成功"),e.$router.push({path:"/resourcelist",query:{name:e.params.root}})):(e.$message.error(n.message),e.$router.push({path:"/resourcelist",query:{name:e.params.root}}))}).catch(function(n){e.loading=!1,e.$message.error("修改失败"),e.$router.push({path:"/resourcelist",query:{name:e.params.root}})})})},back:function(){this.$router.push({path:"/resourcelist",query:{name:this.params.root}})}},created:function(){var n=this.$route.query.name,e=this.$route.query.root;this.params.origName=n,this.params.distName=n,this.params.root=e}},o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("cms-back"),n._v(" "),t("el-form",{ref:"topicInfo",staticClass:"cms-form",staticStyle:{padding:"0",margin:"0"},attrs:{model:n.params,rules:n.rules,"label-width":"162px"}},[t("el-form-item",{staticClass:"flex-100",attrs:{label:"原名称"}},[n._v("\n                     "+n._s(n.params.origName)+"\n             ")]),n._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"新名称",prop:"distName"}},[t("el-input",{staticClass:"cms-width",staticStyle:{width:"280px"},model:{value:n.params.distName,callback:function(e){n.$set(n.params,"distName",e)},expression:"params.distName"}})],1)],1),n._v(" "),t("div",{staticClass:"form-footer"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/resourcerename",expression:"'/resourcerename'"}],attrs:{type:"primary"},on:{click:function(e){n.reName("topicInfo")}}},[n._v("修改")]),n._v(" "),t("el-button",{attrs:{type:"info"}},[n._v("重置")])],1)],1)},i=[],u={render:o,staticRenderFns:i},m=u,c=t("Z0/y"),l=r,p=c(a,m,!1,l,null,null);e.default=p.exports}});