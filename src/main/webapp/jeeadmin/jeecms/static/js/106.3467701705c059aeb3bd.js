webpackJsonp([106],{"Q93+":function(e,t,s){"use strict";function r(e){s("vpix")}Object.defineProperty(t,"__esModule",{value:!0});var a=s("2RFS"),o=s("s4F+"),i=s("PHrY"),n={data:function(){return{progress:0,progressState:!1,state:!0,statefont:"上传文件",loading:!0,resourceList:[],names:"",groupList:[],params:{pageNo:1,pageSize:20,root:""},upobj:{},fileName:"",totalCount:0,currentPage:1,changePageSize:localStorage.getItem("PageSize"),disabled:!0}},methods:{getResourceList:function(){var e=this,t=this.params;i.h(t).then(function(t){200==t.code?(e.resourceList=t.body,e.totalCount=t.totalCount,t.body.length>0&&(e.params.root=t.body[0].path,e.upobj=Object(o.a)({appId:"1580387213331704",sessionKey:localStorage.getItem("sessionKey"),root:t.body[0].path,nonceStr:Object(a.a)()},"Sd6qkHm9o4LaVluYRX5pUFyNuiu2a8oi")),e.loading=!1):(e.loading=!1,e.$message.error(t.message))}).catch(function(t){e.loading=!1,e.$message.error("网络异常")})},showProgress:function(e,t,s){this.progressState=!0,e.percent>0&&e.percent<100?this.progress=parseInt(e.percent):100==e.percent&&(this.progressState=!1,this.progress=0,this.getResourceList())},upSuccess:function(e,t,s){200==e.code?(this.state=!1,this.getResourceList()):209==e.code?this.errorMessage("无上传权限"):this.errorMessage("上传失败")},queryChild:function(e,t,s){this.params.root=t,s?this.$router.push({path:"/resourcelist",query:{name:e}}):window.open(this.$store.state.baseUrl+e)},newFile:function(){var e=this;this.loading=!0;var t={root:this.params.root,dirName:this.fileName};i.c(t).then(function(t){200==t.code?(e.params.root=e.params.root,e.getResourceList()):(e.loading=!1,e.$message.error("创建失败"))}).catch(function(t){e.loading=!1,e.$message.error("创建异常")})},editResource:function(e){this.$router.push({path:"/resourceedit",query:{type:"edit",id:e,root:this.params.root}})},addResource:function(){this.$router.push({path:"/resourceadd",query:{type:"add",id:this.params.root,root:this.params.root}})},reName:function(e){this.$router.push({path:"/resourcerename",query:{name:e,root:this.params.root}})},deleteResourceList:function(e){var t=this;this.names=e,this.$confirm("您确定要删除资源吗?","警告",{type:"warning"}).then(function(e){i.e({names:t.names}).then(function(e){t.loading=!1,200==e.code&&(t.$message.success("删除成功"),t.getResourceList())}).catch(function(e){t.loading=!1,t.$message.error("网络异常")})}).catch(function(e){})},checkIds:function(e){for(var t=[],s=0;s<e.length;s++)t.push(e[s].name);0==t.length?(this.names="",this.disabled=!0):(this.names=t.join(","),this.disabled=!1)}},created:function(){this.params.root=this.$route.query.name,this.upobj.root=this.$route.query.name,this.getResourceList()},watch:{$route:function(e,t){this.params.root=this.$route.query.name,this.upobj.root=this.$route.query.name,this.loading=!0,this.getResourceList(),this.fileName=""}}},c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"cms-list-header clearfix "},[s("div",{staticClass:"bread-box cms-left"},[s("label",{},[e._v("当前目录：")]),e._v(" "),s("ul",{staticClass:"type-bread"},[s("li",{staticClass:"bread-items"},[s("a",{attrs:{href:"javascript:void(0)"}},[e._v(e._s(e.params.root))])])])]),e._v(" "),s("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/resourceadd",expression:"'/resourceadd'"}],staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:e.addResource}},[e._v("新建文件")]),e._v(" "),s("div",{staticClass:"cms-left"},[s("el-upload",{staticClass:"tpl-block",staticStyle:{display:"inline-block"},attrs:{action:e.$store.state.sys.resourceUpLoad,name:"uploadFile",data:e.upobj,multiple:!0,"on-success":e.upSuccess,"show-file-list":!1,"on-progress":e.showProgress}},[s("el-button",[e._v(e._s(e.statefont))])],1),e._v(" "),s("div",{staticClass:"po-progress"},[s("el-progress",{directives:[{name:"show",rawName:"v-show",value:e.progressState,expression:"progressState"}],attrs:{percentage:e.progress,"stroke-width":5}})],1)],1),e._v(" "),s("cms-input",{attrs:{label:"新建目录"},model:{value:e.fileName,callback:function(t){e.fileName=t},expression:"fileName"}}),e._v(" "),s("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/resourceadd",expression:"'/resourceadd'"}],attrs:{disabled:""==e.fileName},on:{click:e.newFile}},[e._v("新建")])],1),e._v(" "),s("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"table-responsive"},[s("form",{staticClass:"form-horizontal no-margin"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.resourceList},on:{"selection-change":e.checkIds}},[s("el-table-column",{attrs:{type:"selection",align:"center",width:"68"}}),e._v(" "),s("el-table-column",{attrs:{label:"文件名",prop:"filename",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"cur",on:{click:function(s){e.queryChild(t.row.name,t.row.path,t.row.isDirectory)}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:t.row.isDirectory,expression:"scope.row.isDirectory"}],staticClass:"iconfont icon-wenjianjiabiheicon"}),e._v("\n                                "+e._s(t.row.filename)+"\n                            ")])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"大小",prop:"size",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.size)+" KB")])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"最后修改时间",prop:"lastModifiedDate",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作",align:"center",width:300},scopedSlots:e._u([{key:"default",fn:function(t){return[s("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/resourcerename",expression:"'/resourcerename'"}],attrs:{type:"rename"},nativeOn:{click:function(s){e.reName(t.row.name)}}}),e._v(" "),s("cms-button",{directives:[{name:"show",rawName:"v-show",value:!t.row.isDirectory,expression:"!scope.row.isDirectory"},{name:"perms",rawName:"v-perms",value:"/resourceedit",expression:"'/resourceedit'"}],attrs:{type:"edit"},nativeOn:{click:function(s){e.editResource(t.row.name)}}}),e._v(" "),s("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/resourcedelete",expression:"'/resourcedelete'"}],attrs:{type:"delete"},nativeOn:{click:function(s){e.deleteResourceList(t.row.name)}}})]}}])})],1)],1)]),e._v(" "),s("div",{staticClass:"cms-list-footer"},[s("div",{staticClass:"pull-left"},[s("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/resourcedelete",expression:"'/resourcedelete'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.deleteResourceList(e.names)}}},[e._v("批量删除")])],1)])])},l=[],u={render:c,staticRenderFns:l},d=u,p=s("Z0/y"),m=r,h=p(n,d,!1,m,"data-v-37c8b6e8",null);t.default=h.exports},"UJ+g":function(e,t,s){t=e.exports=s("UTlt")(!1),t.push([e.i,"\n.cur[data-v-37c8b6e8] {\n  cursor: pointer;\n}\n.inline-block[data-v-37c8b6e8] {\n  display: inline-block;\n  width: 500px;\n}\n.inline-block > *[data-v-37c8b6e8] {\n  float: left;\n}\n.icon-wenjianjiabiheicon[data-v-37c8b6e8]{\n  color: #ffc822;\n    font-size: 20px;\n    margin-right: 4px;\n   position: relative;\n   top:2px;\n}\n",""])},vpix:function(e,t,s){var r=s("UJ+g");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);s("FIqI")("aaacc8a0",r,!0,{})}});