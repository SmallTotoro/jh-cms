webpackJsonp([131],{GdhR:function(n,a,t){a=n.exports=t("l95E")(!1),a.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},pCvP:function(n,a,t){var e=t("GdhR");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);t("FIqI")("19305196",e,!0,{})},uwEp:function(n,a,t){"use strict";function e(n){t("pCvP")}Object.defineProperty(a,"__esModule",{value:!0});var l=t("lcoF"),s=t("2sCs"),o=t.n(s),i=t("x1ym"),r={mixins:[l.a],data:function(){var n=i.a.required("此项必填"),a=i.a.number("只能输入数字");return{params:{},rules:{name:[n],priority:[n,a],allowPerDay:[n,a],allowMaxFile:[n,a],allowFileSize:[n,a],allowFileTotal:[n,a]},memberGroup:[],roles:[]}},methods:{getRoleIds:function(n){console.log(n)},getDataInfo:function(n,a){var t=this,e=this.$api;o.a.all([o.a.post(e.groupGet,{id:n,https:a})]).then(o.a.spread(function(n){t.dataInfo=n.body,t.$refs.form.resetFields(),t.loading=!1})).catch(function(n){t.loading=!1})},update:function(){this.dataInfo.steps=1,this.dataInfo.contriChannelIds=this.dataInfo.contriChannelIds.join(","),this.updateDataInfo(this.$api.groupUpdate,this.dataInfo,"list")}},created:function(){this.getDataInfo(this.id)}},d=function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[t("cms-back"),n._v(" "),t("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[t("el-form-item",{staticClass:"flex-50",attrs:{label:"名称",prop:"name"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"required"},model:{value:n.dataInfo.name,callback:function(a){n.$set(n.dataInfo,"name",a)},expression:"dataInfo.name"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"排列顺序",prop:"priority"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:n.dataInfo.priority,callback:function(a){n.$set(n.dataInfo,"priority",a)},expression:"dataInfo.priority"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"每日附件总尺寸",prop:"allowPerDay"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"required"},model:{value:n.dataInfo.allowPerDay,callback:function(a){n.$set(n.dataInfo,"allowPerDay",a)},expression:"dataInfo.allowPerDay"}}),n._v(" "),t("span",{staticClass:"gray"},[n._v("0为不限制，单位(KB)")])],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"最大附件总尺寸",prop:"allowMaxFile"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"required"},model:{value:n.dataInfo.allowMaxFile,callback:function(a){n.$set(n.dataInfo,"allowMaxFile",a)},expression:"dataInfo.allowMaxFile"}}),n._v(" "),t("span",{staticClass:"gray"},[n._v("0为不限制，单位(KB)")])],1),n._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"允许上传后缀",prop:"allowSuffix"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.allowSuffix,callback:function(a){n.$set(n.dataInfo,"allowSuffix",a)},expression:"dataInfo.allowSuffix"}}),n._v(" "),t("span",{staticClass:"gray"},[n._v('留空则不限制，多个用","分开')])],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"评论需要审核",prop:"needCheck"}},[t("el-radio-group",{model:{value:n.dataInfo.needCheck,callback:function(a){n.$set(n.dataInfo,"needCheck",a)},expression:"dataInfo.needCheck"}},[t("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),t("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"评论需要验证码",prop:"needCaptcha"}},[t("el-radio-group",{model:{value:n.dataInfo.needCaptcha,callback:function(a){n.$set(n.dataInfo,"needCaptcha",a)},expression:"dataInfo.needCaptcha"}},[t("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),t("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),t("div",{staticClass:"form-footer"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/group/edit",expression:"'/group/edit'"}],attrs:{type:"primary"},on:{click:function(a){n.update()}}},[n._v("修改")]),n._v(" "),t("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")])],1)],1)],1)},c=[],f={render:d,staticRenderFns:c},p=f,u=t("Z0/y"),m=e,v=u(r,p,!1,m,null,null);a.default=v.exports}});