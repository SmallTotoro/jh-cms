webpackJsonp([30],{O67K:function(n,t,e){"use strict";function a(n){e("bC8z")}Object.defineProperty(t,"__esModule",{value:!0});var s=e("lcoF"),o=e("2sCs"),i=e.n(o),l=e("x1ym"),r={mixins:[s.a],data:function(){var n=l.a.required();l.a.number();return{params:{queryUsername:"",https:""},rules:{name:[n],nature:[n],scale:[n],longitude:[n]},scaleList:[],natureList:[],industryList:[]}},methods:{getDataInfo:function(){var n=this,t=this.$api;i.a.all([i.a.post(t.configCompanyGet),i.a.post(t.dictionaryType,{type:"scale"}),i.a.post(t.dictionaryType,{type:"nature"}),i.a.post(t.dictionaryType,{type:"industry"})]).then(i.a.spread(function(t,e,a,s){n.dataInfo=t.body,n.scaleList=e.body,n.natureList=a.body,n.industryList=s.body,n.$refs.form.resetFields(),n.loading=!1})).catch(function(t){n.loading=!1})},update:function(){this.updateDataInfo(this.$api.configCompanyUpdate,this.dataInfo,"")}},created:function(){this.getDataInfo(this.id)}},c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[e("div",{staticClass:"cms-list-header"},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/siteConfig/edit",expression:"'/siteConfig/edit'"}],attrs:{type:"primary"},on:{click:function(t){n.routerLink("/siteConfig","update",0)}}},[n._v("基本设置")])],1),n._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-50",attrs:{label:"公司名称",prop:"name"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.name,callback:function(t){n.$set(n.dataInfo,"name",t)},expression:"dataInfo.name"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"公司规模",prop:"scale"}},[e("el-select",{model:{value:n.dataInfo.scale,callback:function(t){n.$set(n.dataInfo,"scale",t)},expression:"dataInfo.scale"}},n._l(n.scaleList,function(t,a){return e("el-option",{key:a,attrs:{value:t.value}},[n._v(n._s(t.name))])}))],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"公司性质",prop:"nature"}},[e("el-select",{model:{value:n.dataInfo.nature,callback:function(t){n.$set(n.dataInfo,"nature",t)},expression:"dataInfo.nature"}},n._l(n.natureList,function(t,a){return e("el-option",{key:a,attrs:{value:t.value}},[n._v(n._s(t.name))])}))],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"公司行业",prop:"industry"}},[e("el-select",{model:{value:n.dataInfo.industry,callback:function(t){n.$set(n.dataInfo,"industry",t)},expression:"dataInfo.industry"}},n._l(n.industryList,function(t,a){return e("el-option",{key:a,attrs:{value:t.value}},[n._v(n._s(t.name))])}))],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"公司地址",prop:"address"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.address,callback:function(t){n.$set(n.dataInfo,"address",t)},expression:"dataInfo.address"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"公司联系方式",prop:"contact"}},[e("el-input",{attrs:{type:"textarea",rows:4},model:{value:n.dataInfo.contact,callback:function(t){n.$set(n.dataInfo,"contact",t)},expression:"dataInfo.contact"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"公司简介",prop:"companyDescription"}},[e("el-input",{attrs:{type:"textarea",rows:4},model:{value:n.dataInfo.companyDescription,callback:function(t){n.$set(n.dataInfo,"companyDescription",t)},expression:"dataInfo.companyDescription"}})],1),n._v(" "),e("div",{staticClass:"form-footer"},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/companyUpdate",expression:"'/globel/companyUpdate'"}],attrs:{type:"primary"},on:{click:function(t){n.update()}}},[n._v("修改")]),n._v(" "),e("el-button",{attrs:{type:"info"},on:{click:n.$reset}},[n._v("重置")])],1)],1)],1)},d=[],u={render:c,staticRenderFns:d},p=u,f=e("Z0/y"),m=a,v=f(r,p,!1,m,null,null);t.default=v.exports},bC8z:function(n,t,e){var a=e("hCF9");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("FIqI")("3ce7be20",a,!0,{})},hCF9:function(n,t,e){t=n.exports=e("XLS9")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});