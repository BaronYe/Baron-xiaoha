(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"1d9c":function(t,n,e){"use strict";e.r(n);var a=e("37b9"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=u.a},"1e1e":function(t,n,e){},"37b9":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={created:function(){this.getusers()},data:function(){return{lastDataList:[],x:0,y:0,old:{x:0,y:0}}},methods:{getusers:function(){var n=this;t.callFunction({name:"home"}).then((function(t){console.log(t.result.data),n.lastDataList=t.result.data}))},onChange:function(t){this.old.x=t.detail.x,this.old.y=t.detail.y},nextcard:function(){0==this.old.x&&0==this.old.x||(this.old.x=0,this.old.y=0,console.log("右移"),this.lastDataList.splice(this.lastDataList.length-1,1),this.lastDataList.length<1&&this.getusers())}}};n.default=e}).call(this,e("a9ff")["default"])},"6f8c":function(t,n,e){"use strict";e.r(n);var a=e("cae1"),u=e("1d9c");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("a963");var o,c=e("f0c5"),s=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=s.exports},a963:function(t,n,e){"use strict";var a=e("1e1e"),u=e.n(a);u.a},cae1:function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}))},ed89:function(t,n,e){"use strict";(function(t){e("96dc");a(e("66fd"));var n=a(e("6f8c"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["ed89","common/runtime","common/vendor"]]]);