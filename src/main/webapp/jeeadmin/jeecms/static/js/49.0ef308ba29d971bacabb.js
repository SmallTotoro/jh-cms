webpackJsonp([49],{"5AkZ":function(e,t,a){var n=a("sG/h");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("FIqI")("4a0ced65",n,!0,{})},"9R/o":function(e,t,a){"use strict";function n(e){a("5AkZ")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("5HJ5"),s=a("2sCs"),r=a.n(s),l={mixins:[i.a],data:function(){return{params:{parentName:"",parentId:"",modelId:"",https:"",hasCollect:""},breadState:!1,allTotal:0,breadItems:[{name:"根目录",id:""}],channelInfo:{},modelList:[]}},methods:{addChannel:function(e){this.params.modelId=e,this.routerLink("/channel/save","save",0,this.params)},checkChange:function(e,t,a){t&&(this.currentCheckChannelId=e.id,this.$refs.channelTree.setCheckedKeys([e.id],!0))},getChannelId:function(e,t){e.isChild?this.routerLink("/channel/update","update",e.id):(this.breadState=!0,this.creatBread(t,[]),this.params.parentId=e.id,this.params.parentName=e.name,this.getTableData(this.params))},getModelList:function(){var e=this;r.a.post(this.$api.modelList,{containDisabled:!1}).then(function(t){"200"==t.code&&(e.modelList=t.body)})},creatBread:function(e,t){if(null==e.parent)return this.breadItems=t.reverse(),!1;var a={name:e.data.name,id:e.data.id};t.push(a),this.creatBread(e.parent,t)},priorityBatch:function(e){var t=this;this.$confirm("是否保存排序","提示",{type:"warning"}).then(function(a){var n=[];for(var i in t.checkedList)n.push(t.checkedList[i].priority);t.$http.post(e,{ids:t.ids,prioritys:n.join(",")}).then(function(e){"200"==e.code&&(t.successMessage("保存成功"),t.getTableData(t.params))})}).catch(function(e){})}},created:function(){this.$store.dispatch("setCollapse",!0),this.loading=!1,this.breadState=!1,"list"==this.$route.query.type&&(0==this.$route.query.id?this.params.parentId="":this.params.parentId=this.$route.query.id),this.initTableData(this.$api.channelList,this.params),this.getModelList()},mounted:function(){var e=document.body.clientHeight;$(".cms-body").css("minHeight",e-110+"px")}},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body flex"},[a("cms-tree",{attrs:{copy:!0},on:{change:e.getChannelId}}),e._v(" "),a("div",{staticClass:"cms-content-right"},[a("div",{staticClass:"cms-list-header clearfix flex"},[e.breadState?a("div",{staticClass:"bread-box cms-left"},[a("label",{},[e._v("当前栏目:")]),e._v(" "),a("ul",{staticClass:"type-bread"},e._l(e.breadItems,function(t,n){return a("li",{key:n,staticClass:"bread-items"},[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){e.clickBread(t.id,n)}}},[e._v(e._s(t.name))])])}))]):e._e(),e._v(" "),a("div",{staticClass:"cms-left channel-group"},[a("el-dropdown",{on:{command:e.addChannel}},[a("el-button",{attrs:{type:"primary"}},[a("i",{directives:[{name:"perms",rawName:"v-perms",value:"/channel/save",expression:"'/channel/save'"}],staticClass:"el-icon-plus "}),e._v(" 栏目添加\n            ")]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.modelList,function(t){return a("el-dropdown-item",{key:t.id,attrs:{command:t.id}},[e._v("\n                "+e._s(t.name))])}))],1)],1)]),e._v(" "),a("el-table",{attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.checkIds}},[a("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"id",width:"50",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"栏目名称",prop:"name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"栏目路径",prop:"path",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"排列顺序",prop:"priority",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[a("el-input",{staticClass:"w50",attrs:{type:"number"},model:{value:t.row.priority,callback:function(a){e.$set(t.row,"priority",a)},expression:"scope.row.priority"}})],1)}}])}),e._v(" "),a("el-table-column",{attrs:{label:"显示",prop:"display",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[t.row.display?a("span",[e._v("是")]):a("span",[e._v("否")])])}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[a("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/channel/update",expression:"'/channel/update'"}],attrs:{type:"edit"},nativeOn:{click:function(a){e.routerLink("/channel/update","update",t.row.id)}}}),e._v(" "),a("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/channel/delete",expression:"'/channel/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(a){e.deleteBatch(e.$api.channelDelete,t.row.id)}}})],1)}}])})],1),e._v(" "),a("div",{staticClass:"cms-list-footer",staticStyle:{"padding-bottom":"52px"}},[a("div",{staticClass:"cms-left"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/channel/savePriority",expression:"'/channel/savePriority'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.priorityBatch(e.$api.channelPriority)}}},[e._v("保存排序")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/channel/delete",expression:"'/channel/delete'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.deleteBatch(e.$api.channelDelete,e.ids)}}},[e._v("批量删除")])],1)])],1)],1)},d=[],c={render:o,staticRenderFns:d},p=c,h=a("Z0/y"),u=n,f=h(l,p,!1,u,"data-v-9963fef4",null);t.default=f.exports},"sG/h":function(e,t,a){t=e.exports=a("l95E")(!1),t.push([e.i,'\n.bread-box[data-v-9963fef4] {\n  display: -webkit-box;\n  display: flex;\n  display: -ms-flexbox;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.bread-box label[data-v-9963fef4] {\n  color: #5a5e66;\n  font-size: 14px;\n}\n.type-bread[data-v-9963fef4] {\n  margin-right: 12px;\n}\n.bread-items[data-v-9963fef4] {\n  display: inline-block;\n}\n.bread-items a[data-v-9963fef4] {\n  color: #1276c3;\n  font-size: 14px;\n}\n.bread-items a[data-v-9963fef4]::after {\n  content: "/";\n  padding: 0 5px;\n  color: #1276c3;\n}\n.bread-items:last-child a[data-v-9963fef4]::after {\n  content: "";\n  padding: 0 5px;\n  color: #1276c3;\n}\n.tree-left[data-v-9963fef4] {\n  width: 200px;\n  float: left;\n}\n.tree-right[data-v-9963fef4] {\n  margin-left: 200px;\n}\n.font-bold[data-v-9963fef4] {\n  font-weight: bold;\n}\n/* .iconfont{\n    color: #409EFF;\n  } */\n.dialog .tree-layout[data-v-9963fef4] {\n  min-height: 400px;\n  width: 90%;\n}\n.dialog .tree-layout .tree[data-v-9963fef4] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  position: absolute;\n  border-right: 0px solid #d4dde2;\n}\n.el-dialog__body[data-v-9963fef4] {\n  min-height: 450px;\n  overflow: auto;\n}\n.red-color[data-v-9963fef4] {\n  color: red;\n}\n',""])}});