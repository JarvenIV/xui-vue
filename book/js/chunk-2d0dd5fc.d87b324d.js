/*! hash:59b00b7271a75ef2a89a, chunkhash:305fc0b707d6af10a27f, name:chunk-2d0dd5fc, filebase:chunk-2d0dd5fc.d87b324d.js, query:, file:js/chunk-2d0dd5fc.d87b324d.js */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd5fc"],{"80b0":function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"xui-m-vue markdown-section"},[t("div",{staticClass:"main"},[t("h1",[e._v("message")]),e._m(0),t("h5",{attrs:{id:"使用及参数说明"}},[e._v("使用及参数说明:")]),t("codes",{attrs:{codes:e.params}}),e._m(1),t("h3",[e._v("效果展示")]),t("p",[e._v("1.我们可以就配置一些显示的文字,默认时间为1s.")]),t("xui-m-button",{attrs:{type:"default"},on:{click:e.open1}},[e._v("试试看")]),t("codes",{attrs:{codes:e.open_1}}),t("p",[e._v("2.当然,我们也可以修改一下显示并消失的时间")]),t("xui-m-button",{attrs:{type:"default"},on:{click:e.open2}},[e._v("试试看")]),t("codes",{attrs:{codes:e.open_2}}),t("p",[e._v("3.如果你想文字显示完了,加一个回调,我们也是支持的哦~")]),t("xui-m-button",{attrs:{type:"default"},on:{click:e.open3}},[e._v("试试看")]),t("codes",{attrs:{codes:e.open_3}})],1)])},n=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("blockquote",[t("p",[e._v(" 说明: 用来提示用户,具体行为是出现一个 "),t("code",[e._v("message")]),e._v(",然后一段时间后消失 ")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",[t("li",[t("code",[e._v("string")]),e._v("表示提示信息的文案 "),t("strong",[e._v("必传")])]),t("li",[t("code",[e._v("time")]),e._v("表示提示信息显示的时间,默认是1000ms ")]),t("li",[t("code",[e._v("callback")]),e._v("表示提示信息消失后的回调 ")]),t("li",[e._v(" 没有你想要的功能? 快联系我: "),t("code",[e._v("xumeng0611@gmail.com")]),e._v("添加吧 ")])])}],a=t("3e36"),c={name:"Message",data:function(){return{params:"this.$message(string, time, callback)",params1:"import xui-mMessage from 'xui-mjs';\nVue.use(xui-mMessage);\nVue.prototype.$message = xui-mMessage.MessageService;",open_1:'this.$message("hello,world")',open_2:'this.$message("hello,world", 2000)',open_3:"this.$message(\n  'hello, world', \n  1500, \n  function(){\n    console.log('callback');\n  }\n)"}},mounted:function(){if("ontouchstart"in window){var e=document.getElementById("app");e.querySelector(".test").classList.add("folded"),e.querySelector(".main").classList.add("folded")}},methods:{open1:function(){this.$message("hello,world")},open2:function(){this.$message("hello,world",2e3)},open3:function(){var e=this;e.$message("hello, world",1500,(function(){e.$message("callback")}))}},components:{Codes:a["a"]}},l=c,i=t("2877"),r=Object(i["a"])(l,o,n,!1,null,null,null);s["default"]=r.exports}}]);