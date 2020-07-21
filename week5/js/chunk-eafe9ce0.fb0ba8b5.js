(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eafe9ce0"],{"13d5":function(t,e,a){"use strict";var s=a("23e7"),r=a("d58f").left,o=a("a640"),i=a("ae40"),n=o("reduce"),l=i("reduce",{1:0});s({target:"Array",proto:!0,forced:!n||!l},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"4dd3":function(t,e,a){"use strict";var s=a("6082"),r=a.n(s);r.a},6082:function(t,e,a){},"7cef":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"pay-page"}},[a("message"),a("div",{staticClass:"container"},[a("h4",[a("font-awesome-icon",{staticClass:"titleIcon",attrs:{icon:["far","clipboard"]}}),t._v(" 購物清單")],1),a("div",{staticClass:"buy-item-preview"},[a("div",{staticClass:"preview-content",class:{show:t.isCollapse}},t._l(t.products,(function(e,s){return a("div",{staticClass:"buy-item"},[a("div",[a("img",{attrs:{src:e.product.imageUrl[0]}})]),a("div",[t._v(t._s(t._f("hideText")(e.product.title)))]),a("div",[t._v("x"+t._s(e.quantity))]),a("div",[t._v(t._s(t._f("cash")(t.getItemTotal(s))))])])})),0),t.products.length>4?a("div",{staticClass:"buy-item"},[a("button",{staticClass:"collapse",class:t.isCollapse?"up":"down",on:{click:function(e){return t.toggleCollapse()}}},[a("font-awesome-icon",{attrs:{icon:["fas",t.isCollapse?"angle-double-up":"angle-double-down"]}})],1)]):t._e(),a("div",{staticClass:"total"},[t._v("總額"),a("span",[t._v(t._s(t._f("cash")(t.countAll)))])])]),a("h4",[a("font-awesome-icon",{staticClass:"titleIcon",attrs:{icon:["fas","info-circle"]}}),t._v(" 訂單資訊")],1),a("div",{staticClass:"buyer-detail"},[a("validation-observer",{on:{submit:function(e){return e.preventDefault(),t.submitForm()}},scopedSlots:t._u([{key:"default",fn:function(e){e.invalid;return[a("form",[a("validation-provider",{staticClass:"row",attrs:{name:"姓名",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{staticClass:"no-break-label",attrs:{for:"name"}},[t._v("姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"input",class:r,attrs:{id:"name",type:"text",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),s[0]?a("span",{staticClass:"warning"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)}),a("validation-provider",{staticClass:"row",attrs:{name:"電話",rules:"required|digits:10"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{staticClass:"no-break-label",attrs:{for:"phone"}},[t._v("電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"input",class:r,attrs:{id:"phone",type:"tel",maxlength:"10",required:""},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value)}}}),s[0]?a("span",{staticClass:"warning"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)}),a("validation-provider",{staticClass:"row",attrs:{name:"信箱",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{staticClass:"break-label",attrs:{for:"email"}},[t._v("信箱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"input",class:r,attrs:{id:"email",type:"email",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),s[0]?a("span",{staticClass:"warning"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)}),a("validation-provider",{staticClass:"row",attrs:{name:"收件地址",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{staticClass:"break-label",attrs:{for:"address"}},[t._v("收件地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"input",class:r,attrs:{id:"address",type:"text",required:""},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),s[0]?a("span",{staticClass:"warning"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)}),a("div",{staticClass:"row"},[a("label",{attrs:{for:"remark"}},[t._v("備註"),a("small",{staticClass:"option"},[t._v("（選填)")])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.remark,expression:"form.remark"}],staticClass:"remark",attrs:{id:"remark",rows:"5"},domProps:{value:t.form.remark},on:{input:function(e){e.target.composing||t.$set(t.form,"remark",e.target.value)}}})]),a("validation-provider",{staticClass:"row",attrs:{name:"付款方式",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"paytype"}},[t._v("付款方式")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"pay-type",class:r,attrs:{name:"payment",id:"paytype"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"payment",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("---請選擇付款方式---")]),t._l(t.payment,(function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])}))],2),s[0]?a("span",{staticClass:"warning"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)}),a("div",{staticClass:"check-block"},[a("button",{staticClass:"back",attrs:{type:"button"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("上一頁")]),a("button",{staticClass:"check"},[a("div",{staticClass:"txt",class:{hide:t.loading}},[t._v("確認訂單")]),a("font-awesome-icon",{staticClass:"loading fa-1x fa-spin",class:{show:t.loading},attrs:{icon:["fa","spinner"]}})],1)])],1)]}}])})],1),a("vue-confirm-dialog")],1)],1)},r=[],o=(a("13d5"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("5530")),i=a("2f62"),n=a("2803"),l={name:"pay_page",data:function(){return{payment:["WebATM","ATM","Barcode","Credit","ApplePay","GooglePay"],form:{name:"",tel:"",email:"",payment:"",address:"",remark:""},isCollapse:!1,collapse:!1}},created:function(){this.getShopCartData()},computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])(["products","loading"])),{},{countAll:function(){return this.products.reduce((function(t,e){return t+e.quantity*(e.product.price?e.product.price:e.product.origin_price)}),0)}}),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["setProducts","toggleLoading"])),{},{getShopCartData:function(){var t=this,e=this.$loading.show({container:this.$refs.preivew,isFullPage:!1});Object(n["e"])().then((function(a){t.setProducts(a.data.data),e.hide()}))},getItemTotal:function(t){return this.products[t].quantity*(this.products[t].product.onsale?this.products[t].product.onsale:this.products[t].product.price)},cashFormat:function(t){return"$".concat(t.toString().replace(/\d{1,3}(?=(\d{3})+$)/g,"$&,"))},submitForm:function(){var t=this;this.toggleLoading(),Object(n["b"])(this.form).then((function(){t.toggleLoading(),t.$confirm({message:"訂單已建立",button:{no:"繼續購物",yes:"去付款"},callback:function(e){return t.$router.push(e?"/":"/product-list")}})}))},toggleCollapse:function(){this.isCollapse=!this.isCollapse}})},c=l,u=(a("4dd3"),a("2877")),d=Object(u["a"])(c,s,r,!1,null,"04bbd928",null);e["default"]=d.exports},d58f:function(t,e,a){var s=a("1c0b"),r=a("7b0b"),o=a("44ad"),i=a("50c4"),n=function(t){return function(e,a,n,l){s(a);var c=r(e),u=o(c),d=i(c.length),p=t?d-1:0,m=t?-1:1;if(n<2)while(1){if(p in u){l=u[p],p+=m;break}if(p+=m,t?p<0:d<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:d>p;p+=m)p in u&&(l=a(l,u[p],p,c));return l}};t.exports={left:n(!1),right:n(!0)}}}]);
//# sourceMappingURL=chunk-eafe9ce0.fb0ba8b5.js.map