webpackJsonp([22],{"8qNh":function(n,e,a){"use strict";function t(n){a("MY4q")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("lcoF"),o=a("2sCs"),i=a.n(o),l=a("x1ym"),r={mixins:[s.a],data:function(){return{params:{},rules:{name:[l.a.required("该项必填")]}}},methods:{getDataInfo:function(n){var e=this,a=this.$api;i.a.all([i.a.post(a.scoregroupGet,{id:n})]).then(i.a.spread(function(n){e.dataInfo=n.body,e.$refs.form.resetFields(),e.loading=!1})).catch(function(n){e.loading=!1})},update:function(){this.updateDataInfo(this.$api.scoregroupUpdate,this.dataInfo,"list")},add:function(n){this.saveDataInfo(n,this.$api.scoregroupSave,this.dataInfo,"list")}},created:function(){this.getDataInfo(this.id)}},d=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[a("cms-back"),n._v(" "),a("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[a("el-form-item",{staticClass:"flex-50",attrs:{label:"分组名",prop:"name"}},[a("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.name,callback:function(e){n.$set(n.dataInfo,"name",e)},expression:"dataInfo.name"}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-50"}),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"启用",prop:"enable"}},[a("el-radio",{attrs:{label:!0},model:{value:n.dataInfo.enable,callback:function(e){n.$set(n.dataInfo,"enable",e)},expression:"dataInfo.enable"}},[n._v("是")]),n._v(" "),a("el-radio",{attrs:{label:!1},model:{value:n.dataInfo.enable,callback:function(e){n.$set(n.dataInfo,"enable",e)},expression:"dataInfo.enable"}},[n._v("否")])],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"默认分组",prop:"def"}},[a("el-radio",{attrs:{label:!0},model:{value:n.dataInfo.def,callback:function(e){n.$set(n.dataInfo,"def",e)},expression:"dataInfo.def"}},[n._v("是")]),n._v(" "),a("el-radio",{attrs:{label:!1},model:{value:n.dataInfo.def,callback:function(e){n.$set(n.dataInfo,"def",e)},expression:"dataInfo.def"}},[n._v("否")])],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"描述",prop:"description"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:n.dataInfo.description,callback:function(e){n.$set(n.dataInfo,"description",e)},expression:"dataInfo.description"}})],1),n._v(" "),a("div",{staticClass:"form-footer"},[0==this.id?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/scoregroup/add",expression:"'/scoregroup/add'"}],attrs:{type:"warning"},on:{click:function(e){n.add(!0)}}},[n._v("保存并继续添加")]):n._e(),n._v(" "),0==this.id?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/scoregroup/add",expression:"'/scoregroup/add'"}],attrs:{type:"primary"},on:{click:function(e){n.add(!1)}}},[n._v("提交")]):n._e(),n._v(" "),0!=this.id?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/scoregroup/edit",expression:"'/scoregroup/edit'"}],attrs:{type:"primary"},on:{click:function(e){n.update()}}},[n._v("修改")]):n._e(),n._v(" "),a("el-button",{attrs:{type:"info"},on:{click:n.$reset}},[n._v("重置")])],1)],1)],1)},c=[],f={render:d,staticRenderFns:c},p=f,u=a("Z0/y"),m=t,v=u(r,p,!1,m,null,null);e.default=v.exports},HnhY:function(n,e,a){e=n.exports=a("XLS9")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},MY4q:function(n,e,a){var t=a("HnhY");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);a("FIqI")("52fce6da",t,!0,{})}});