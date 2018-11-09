webpackJsonp([17],{"7D6w":function(t,a,e){var s=e("l6uB");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("FIqI")("7f0e8f47",s,!0,{})},DVF8:function(t,a,e){"use strict";function s(t){e("7D6w")}Object.defineProperty(a,"__esModule",{value:!0});var n=e("3cXf"),l=e.n(n),i=e("2sCs"),o=e.n(i),c=e("x1ym"),r=e("lcoF"),d={mixins:[r.a],data:function(){var t=c.a.required();return{dataInfo:{},types:[],channels:[],selectChannels:[],shields:[],replaces:[],rules:{name:[t],pageEncoding:[t],channelId:[t,c.a.number()],imgAcqu:[t],pauseTime:[t]}}},methods:{getTypeList:function(t){var a=this;o.a.post(this.$api.typeList,{hasContentOnly:!0}).then(function(t){"200"==t.code&&(a.types=t.body,""==a.dataInfo.typeId&&t.body.length>0&&(a.dataInfo.typeId=t.body[0].id))}).catch(function(t){})},getChannels:function(){var t=this;o.a.post(this.$api.fullTextSearchChannelList,{hasContentOnly:!0}).then(function(a){"200"==a.code&&(t.channels=a.body,""==t.dataInfo.channelId&&a.body.length>0&&(t.dataInfo.channelId=a.body[0].id),o.a.post(t.$api.channelGet,{id:t.dataInfo.channelId}).then(function(a){"200"==a.code&&(t.selectChannels=a.body.nodeIds)}))}).catch(function(t){})},addShield:function(){var t={id:"",shieldStart:"",shieldEnd:""};this.shields.push(t)},addReplace:function(){var t={id:"",keyword:"",replaceWord:""};this.replaces.push(t)},deleteIndex:function(t){this.shields.splice(t,1)},deleteReplace:function(t){this.replaces.splice(t,1)},getDataInfo:function(t){var a=this;this.$api;o.a.post(this.$api.collectGet,{id:t}).then(function(e){a.loading=!1,a.dataInfo=e.body.acq,a.shields=e.body.shields,a.replaces=e.body.replaces,0==t&&(a.dataInfo.dynamicStart=2,a.dataInfo.dynamicEnd=10,a.dataInfo.pageEncoding="utf-8",a.dataInfo.releaseTimeFormat="yyyy-MM-dd HH:mm:ss",a.dataInfo.imgAcqu=!1,a.dataInfo.pauseTime=500),a.getChannels(),a.getTypeList()}).catch(function(t){a.loading=!1})},initParam:function(){this.selectChannels.length>0&&(this.dataInfo.channelId=this.selectChannels[this.selectChannels.length-1])},update:function(){this.initParam(),this.dataInfo.shieldArrs=l()(this.shields),this.dataInfo.replaceArrs=l()(this.replaces),this.updateDataInfo(this.$api.collectUpdate,this.dataInfo,"list")},add:function(t){this.initParam(),this.dataInfo.shieldArrs=l()(this.shields),this.dataInfo.replaceArrs=l()(this.replaces),this.saveDataInfo(t,this.$api.collectSave,this.dataInfo,"list")}},created:function(){this.getDataInfo(this.id)}},f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-body"},[e("cms-back"),t._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:t.dataInfo,rules:t.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"采集名称",prop:"name"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.name,callback:function(a){t.$set(t.dataInfo,"name",a)},expression:"dataInfo.name"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"入库类型",prop:"domain"}},[e("el-select",{staticClass:"cms-width",model:{value:t.dataInfo.typeId,callback:function(a){t.$set(t.dataInfo,"typeId",a)},expression:"dataInfo.typeId"}},t._l(t.types,function(a,s){return e("el-option",{key:s,attrs:{label:t.types[s].name,value:t.types[s].id}})}))],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"入库栏目",prop:"channelId"}},[e("el-cascader",{staticClass:"cms-width",attrs:{props:{value:"id",label:"name",children:"child"},options:t.channels,"change-on-select":"",filterable:""},model:{value:t.selectChannels,callback:function(a){t.selectChannels=a},expression:"selectChannels"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"页面编码",prop:"pageEncoding"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.pageEncoding,callback:function(a){t.$set(t.dataInfo,"pageEncoding",a)},expression:"dataInfo.pageEncoding"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"暂停时间",prop:"pauseTime"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:t.dataInfo.pauseTime,callback:function(a){t.$set(t.dataInfo,"pauseTime",a)},expression:"dataInfo.pauseTime"}}),t._v(" "),e("span",{staticClass:"gray"},[t._v("每采集一篇文章暂停时间。单位(毫秒)")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"是否采集图片",prop:"imgAcqu"}},[e("el-radio-group",{staticClass:"cms-width",model:{value:t.dataInfo.imgAcqu,callback:function(a){t.$set(t.dataInfo,"imgAcqu",a)},expression:"dataInfo.imgAcqu"}},[e("el-radio",{attrs:{label:!0}},[t._v("是")]),t._v(" "),e("el-radio",{attrs:{label:!1}},[t._v("否")])],1),t._v(" "),e("span",{staticClass:"采集图片耗时较长，请酌情选择"})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"发布时间格式"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.releaseTimeFormat,callback:function(a){t.$set(t.dataInfo,"releaseTimeFormat",a)},expression:"dataInfo.releaseTimeFormat"}}),t._v(" "),e("span",{staticClass:"gray"},[t._v("例如：yyyy-MM-dd HH:mm:ss")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"是否默认类型图片",prop:"defTypeImg"}},[e("el-radio-group",{staticClass:"cms-width",model:{value:t.dataInfo.defTypeImg,callback:function(a){t.$set(t.dataInfo,"defTypeImg",a)},expression:"dataInfo.defTypeImg"}},[e("el-radio",{attrs:{label:!0}},[t._v("是")]),t._v(" "),e("el-radio",{attrs:{label:!1}},[t._v("否")])],1),t._v(" "),e("span",{staticClass:"gray"},[t._v("选择是：默认正文第一张为类型图 否：自定义")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"采集地址"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.planList,callback:function(a){t.$set(t.dataInfo,"planList",a)},expression:"dataInfo.planList"}}),t._v(" "),e("span",{staticClass:"gray"},[t._v("多个地址请换行填写")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"动态地址"}},[e("el-input",{staticClass:"cms-col5",model:{value:t.dataInfo.dynamicAddr,callback:function(a){t.$set(t.dataInfo,"dynamicAddr",a)},expression:"dataInfo.dynamicAddr"}}),t._v("\n          页码从"),e("el-input",{staticClass:"cms-col1",attrs:{type:"number"},model:{value:t.dataInfo.dynamicStart,callback:function(a){t.$set(t.dataInfo,"dynamicStart",a)},expression:"dataInfo.dynamicStart"}}),t._v("至\n          "),e("el-input",{staticClass:"cms-col1",attrs:{type:"number"},model:{value:t.dataInfo.dynamicEnd,callback:function(a){t.$set(t.dataInfo,"dynamicEnd",a)},expression:"dataInfo.dynamicEnd"}}),t._v(" "),e("span",{staticClass:"gray"},[t._v("分页变量用[page]代替")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"内容地址补全url"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.contentPrefix,callback:function(a){t.$set(t.dataInfo,"contentPrefix",a)},expression:"dataInfo.contentPrefix"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"分页链接地址补全url"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.contentPagePrefix,callback:function(a){t.$set(t.dataInfo,"contentPagePrefix",a)},expression:"dataInfo.contentPagePrefix"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"图片地址补全url"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.imgPrefix,callback:function(a){t.$set(t.dataInfo,"imgPrefix",a)},expression:"dataInfo.imgPrefix"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"内容地址集"}},[e("el-row",[e("el-col",{attrs:{span:12}},[t._v("开始HTML")]),t._v(" "),e("el-col",{attrs:{span:12}},[t._v("结束HTML")])],1),t._v(" "),e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.linksetStart,callback:function(a){t.$set(t.dataInfo,"linksetStart",a)},expression:"dataInfo.linksetStart"}})],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.linksetEnd,callback:function(a){t.$set(t.dataInfo,"linksetEnd",a)},expression:"dataInfo.linksetEnd"}})],1)],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"内容地址"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.linkStart,callback:function(a){t.$set(t.dataInfo,"linkStart",a)},expression:"dataInfo.linkStart"}})],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.linkEnd,callback:function(a){t.$set(t.dataInfo,"linkEnd",a)},expression:"dataInfo.linkEnd"}})],1)],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"内容分页地址"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.contentPageStart,callback:function(a){t.$set(t.dataInfo,"contentPageStart",a)},expression:"dataInfo.contentPageStart"}})],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.contentPageEnd,callback:function(a){t.$set(t.dataInfo,"contentPageEnd",a)},expression:"dataInfo.contentPageEnd"}})],1)],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"内容分页链接地址"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.pageLinkStart,callback:function(a){t.$set(t.dataInfo,"pageLinkStart",a)},expression:"dataInfo.pageLinkStart"}})],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.pageLinkEnd,callback:function(a){t.$set(t.dataInfo,"pageLinkEnd",a)},expression:"dataInfo.pageLinkEnd"}})],1)],1)],1),t._v(" "),t.dataInfo.defTypeImg?t._e():e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"类型图"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.typeImgStart,callback:function(a){t.$set(t.dataInfo,"typeImgStart",a)},expression:"dataInfo.typeImgStart"}})],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.typeImgEnd,callback:function(a){t.$set(t.dataInfo,"typeImgEnd",a)},expression:"dataInfo.typeImgEnd"}})],1)],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"标题"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.titleStart,callback:function(a){t.$set(t.dataInfo,"titleStart",a)},expression:"dataInfo.titleStart"}})],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.titleEnd,callback:function(a){t.$set(t.dataInfo,"titleEnd",a)},expression:"dataInfo.titleEnd"}})],1)],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"描述"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.descriptionStart,callback:function(a){t.$set(t.dataInfo,"descriptionStart",a)},expression:"dataInfo.descriptionStart"}})],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.descriptionEnd,callback:function(a){t.$set(t.dataInfo,"descriptionEnd",a)},expression:"dataInfo.descriptionEnd"}})],1)],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"内容"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.contentStart,callback:function(a){t.$set(t.dataInfo,"contentStart",a)},expression:"dataInfo.contentStart"}})],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.contentEnd,callback:function(a){t.$set(t.dataInfo,"contentEnd",a)},expression:"dataInfo.contentEnd"}})],1)],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"浏览量"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.viewStart,callback:function(a){t.$set(t.dataInfo,"viewStart",a)},expression:"dataInfo.viewStart"}})],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.viewEnd,callback:function(a){t.$set(t.dataInfo,"viewEnd",a)},expression:"dataInfo.viewEnd"}})],1)],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"浏览量访问地址"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.viewLink,callback:function(a){t.$set(t.dataInfo,"viewLink",a)},expression:"dataInfo.viewLink"}})],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.viewIdEnd,callback:function(a){t.$set(t.dataInfo,"viewIdEnd",a)},expression:"dataInfo.viewIdEnd"}})],1)],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"作者"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.authorStart,callback:function(a){t.$set(t.dataInfo,"authorStart",a)},expression:"dataInfo.authorStart"}})],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.authorEnd,callback:function(a){t.$set(t.dataInfo,"authorEnd",a)},expression:"dataInfo.authorEnd"}})],1)],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"来源"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.originStart,callback:function(a){t.$set(t.dataInfo,"originStart",a)},expression:"dataInfo.originStart"}})],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.originEnd,callback:function(a){t.$set(t.dataInfo,"originEnd",a)},expression:"dataInfo.originEnd"}})],1)],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"指定来源"}},[e("el-row",[e("el-col",{attrs:{span:24}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.originAppoint,callback:function(a){t.$set(t.dataInfo,"originAppoint",a)},expression:"dataInfo.originAppoint"}})],1)],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"发布时间"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.releaseTimeStart,callback:function(a){t.$set(t.dataInfo,"releaseTimeStart",a)},expression:"dataInfo.releaseTimeStart"}})],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.releaseTimeEnd,callback:function(a){t.$set(t.dataInfo,"releaseTimeEnd",a)},expression:"dataInfo.releaseTimeEnd"}})],1)],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 "},[e("el-button",{attrs:{type:"warning"},on:{click:function(a){t.addShield()}}},[t._v(" 添加屏蔽内容")])],1),t._v(" "),t._l(t.shields,function(a,s){return e("el-form-item",{key:s,staticClass:"flex-100 ",attrs:{label:"内容屏蔽"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:a.shieldStart,callback:function(e){t.$set(a,"shieldStart",e)},expression:"item.shieldStart"}})],1),t._v(" "),e("el-col",{attrs:{span:10}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:a.shieldEnd,callback:function(e){t.$set(a,"shieldEnd",e)},expression:"item.shieldEnd"}})],1),t._v(" "),e("el-col",{attrs:{span:2}},[e("cms-button",{attrs:{type:"delete"},nativeOn:{click:function(a){t.deleteIndex(s)}}})],1)],1)],1)}),t._v(" "),e("el-form-item",{staticClass:"flex-100 "},[e("el-button",{attrs:{type:"warning"},on:{click:function(a){t.addReplace()}}},[t._v(" 添加替换")])],1),t._v(" "),t._l(t.replaces,function(a,s){return e("el-form-item",{key:s,staticClass:"flex-100 ",attrs:{label:"替换"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:a.keyword,callback:function(e){t.$set(a,"keyword",e)},expression:"item.keyword"}})],1),t._v(" "),e("el-col",{attrs:{span:10}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:a.replaceWord,callback:function(e){t.$set(a,"replaceWord",e)},expression:"item.replaceWord"}})],1),t._v(" "),e("el-col",{attrs:{span:2}},[e("cms-button",{attrs:{type:"delete"},nativeOn:{click:function(a){t.deleteReplace(s)}}})],1)],1)],1)}),t._v(" "),e("div",{staticClass:"form-footer"},[t.isType("save")?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/collectionmanage/save",expression:"'/collectionmanage/save'"}],attrs:{type:"warning"},on:{click:function(a){t.add(!0)}}},[t._v("\n             提交并继续添加\n            ")]):t._e(),t._v(" "),t.isType("save")?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/collectionmanage/save",expression:"'/collectionmanage/save'"}],attrs:{type:"primary"},on:{click:function(a){t.add(!1)}}},[t._v("\n             提交\n            ")]):t._e(),t._v(" "),t.isType("update")?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/collectionmanage/update",expression:"'/collectionmanage/update'"}],attrs:{type:"primary"},on:{click:function(a){t.update()}}},[t._v("\n              修改\n            ")]):t._e(),t._v(" "),e("el-button",{attrs:{type:"info"},on:{click:t.$reset}},[t._v("重置")]),t._v(" "),t.isType("save")?e("span",{staticClass:"gray"},[t._v("选择“提交并继续添加”按钮会停留在添加页面；选择“提交”按钮后将跳转到对应的列表页")]):t._e()],1)],2)],1)},p=[],m={render:f,staticRenderFns:p},u=m,v=e("Z0/y"),I=s,h=v(d,u,!1,I,"data-v-207599c6",null);a.default=h.exports},l6uB:function(t,a,e){a=t.exports=e("XLS9")(!1),a.push([t.i,"\n.cms-col5[data-v-207599c6]{\r\n  width: 50%\n}\n.cms-col1[data-v-207599c6]{\r\n  width: 10%\n}\r\n",""])}});