(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af84e"],{"0f57":function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"xui-vue markdown-section"},[l("div",{staticClass:"main"},[l("h1",[e._v("下拉框")]),e._m(0),l("h5",[e._v("使用及参数说明:")]),l("codes",{attrs:{codes:e.params}}),e._m(1),l("h3",[e._v("效果展示")]),l("p",[e._v("1. 先来看看一个例子吧")]),l("fc-selector",{attrs:{selectorData:e.selectorData,selectorValue:e.selectorValue,extralClass:"hello-world"},on:{sendChooseData:e.getChooseData}}),l("codes",{attrs:{codes:e.select_1}})],1)])},s=[function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("blockquote",[l("p",[e._v("说明: 当选项过多时，使用下拉菜单展示并选择内容")])])},function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("ul",[l("li",[l("code",[e._v("selectorData")]),e._v("下拉框列表数据源, 类型为数组 "),l("strong",[e._v("必传")]),e._v(", 可以设置禁止选中 ")]),l("li",[l("code",[e._v("selectorValue")]),e._v("默认选中的一项 ")]),l("li",[l("code",[e._v("extralClass")]),e._v("自定义下拉框类名 ")]),l("li",[l("code",[e._v("sendChooseData")]),e._v("点击确定后的回调, 返回当前选择的 "),l("code",[e._v("label")]),e._v("和 "),l("code",[e._v("value")]),e._v(", 是一个对象 ")]),l("li",[e._v(" 没有你想要的功能? 快联系我: "),l("code",[e._v("xumeng0611@gmail.com")]),e._v("添加吧 ")])])}],n=l("3e36"),o={name:"Selector",data:function(){return{selectorData:[{label:"vuejs",value:"1"},{label:"reactjs",value:"2",disabled:!0},{label:"angularjs",value:"3"},{label:"jquery",value:"4"}],selectorValue:"",params:'import { FcSelector } from \'fcbox-m-ui\';\nVue.use(FcSelector);\n\n<fc-selector \n  :selectorData="selectorData" \n  :selectorValue="selectorValue"\n  extralClass="hello-world"\n  @sendChooseData="getChooseData"\n/>\n',select_1:"// 下拉框数据\nselectorData: \n  [\n    {\n      label: 'vuejs',\n      value: '1',\n    },\n    {\n      label: 'reactjs',\n      value: '2',\n      disabled: true\n    },\n    {\n      label: 'angularjs',\n      value: '3',\n    },\n    {\n      label: 'jquery',\n      value: '4',\n    },\n],\nselectorValue: '2',\n\n// 获取选中的值\ngetChooseData(data){\n  this.$message(data.label)\n},\n",select_2:2}},methods:{showVal:function(){console.log(this.selectedVal)},getChooseData:function(e){this.$message(e.label)}},mounted:function(){if("ontouchstart"in window){var e=document.getElementById("app");e.querySelector(".test").classList.add("folded"),e.querySelector(".main").classList.add("folded")}},components:{Codes:n["a"]}},c=o,r=l("2877"),u=Object(r["a"])(c,t,s,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0af84e.cc4a8836.js.map