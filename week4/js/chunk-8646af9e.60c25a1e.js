(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8646af9e"],{"929d":function(e,t,n){},a55b:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[e._m(0),n("div",{staticClass:"login"},[n("h3",[e._v("登入")]),n("label",{attrs:{for:"email"}},[e._v("信箱")]),n("input",{attrs:{id:"email",type:"account",required:"",placeholder:"example@example.com"}}),n("label",{attrs:{for:"pwd"}},[e._v("密碼")]),n("input",{attrs:{id:"pwd",type:"password",required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginFn(t)}}}),n("div",{staticClass:"btn-block"},[n("button",{staticClass:"login-btn",attrs:{type:"button"},on:{click:e.loginFn}},[e._v("登入")])])]),e._m(1)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("GAGU"),n("small",[e._v("（가구）")]),e._v("傢俱")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"img"},[a("img",{attrs:{src:n("d0cf")}})])}],i=n("5530"),r=n("2f62"),o=n("a502"),s=n("2b1d"),l=n("2803"),u={components:{msg:o["a"]},data:function(){return{msg:""}},methods:Object(i["a"])(Object(i["a"])({},Object(r["b"])(["setMsg","clearMsg"])),{},{loginFn:function(){var e=this,t=document.querySelector("#email").value,n=document.querySelector("#pwd").value;t?n?Object(l["a"])({email:t,password:n}).then((function(t){Object(s["b"])("uuid",t.data.uuid,new Date(1e3*t.data.expire),"/"),Object(s["b"])("token",t.data.token,new Date(1e3*t.data.expire),"/"),e.setMsg({msg:"登入成功！",type:!0}),setTimeout((function(){e.clearMsg(),window.location="product-manage"}),1e3)})).catch((function(){e.setMsg({msg:"登入失敗！",type:!1}),setTimeout((function(){return e.clearMsg()}),1e3)})):document.querySelector("#pwd").reportValidity():document.querySelector("#email").reportValidity()}})},d=u,p=(n("c7b2"),n("2877")),m=Object(p["a"])(d,a,c,!1,null,"02b982bc",null);t["default"]=m.exports},c7b2:function(e,t,n){"use strict";var a=n("929d"),c=n.n(a);c.a},d0cf:function(e,t,n){e.exports=n.p+"img/login.907e4e10.jpg"}}]);
//# sourceMappingURL=chunk-8646af9e.60c25a1e.js.map