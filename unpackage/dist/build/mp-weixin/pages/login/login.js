(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"129e":function(t,e,n){"use strict";n.r(e);var o=n("4cd1"),s=n("187e");for(var u in s)"default"!==u&&function(t){n.d(e,t,(function(){return s[t]}))}(u);n("7770");var r,a=n("f0c5"),i=Object(a["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=i.exports},"187e":function(t,e,n){"use strict";n.r(e);var o=n("1e25"),s=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=s.a},"1e25":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("2f62");var s={data:function(){return{login:!1,user:"",password:""}},onLoad:function(){},methods:{toRegister:function(){t.navigateTo({url:"../register/register"})},getUser:function(){console.log(this.user)},getPwd:function(){console.log(this.password)},onlogin:function(){var e=this;this.user&&this.password?o.callFunction({name:"login",data:{user_id:this.user,password:this.password}}).then((function(n){if(console.log(n),console.log(n.result.status),0===n.result.status){var o=e.user;t.switchTab({url:"/pages/home/home",success:function(){t.setStorage({key:"token",data:"ok"}),t.setStorage({key:"user_id",data:o})}}),console.log(n.result),e.$store.commit("setUser_id",e.user)}else console.log("登陆失败")})):this.login=!0}}};e.default=s}).call(this,n("543d")["default"],n("a9ff")["default"])},"4cd1":function(t,e,n){"use strict";var o,s=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}))},7770:function(t,e,n){"use strict";var o=n("a7af"),s=n.n(o);s.a},a7af:function(t,e,n){},d4ca:function(t,e,n){"use strict";(function(t){n("96dc");o(n("66fd"));var e=o(n("129e"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["d4ca","common/runtime","common/vendor"]]]);