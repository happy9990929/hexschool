(function(t){function e(e){for(var o,i,c=e[0],n=e[1],d=e[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,c=1;c<a.length;c++){var n=a[c];0!==r[n]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},r={app:0},s=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/hexschool/week3/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=n;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"46d5":function(t,e,a){"use strict";var o=a("a8f5"),r=a.n(o);r.a},"52bf":function(t,e,a){"use strict";var o=a("e39c"),r=a.n(o);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"App"}},[a("product-manage")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"item-manage"}},[t._m(0),a("button",{staticClass:"add",attrs:{"data-action":"add"},on:{click:function(e){return t.openPage()}}},[a("font-awesome-icon",{attrs:{icon:["fas","plus"]}}),t._v("新增")],1),a("ul",{staticClass:"edit"},[t._m(1),t._l(t.products,(function(e,o){return a("li",{key:o,staticClass:"list"},[a("div",{staticClass:"tr",attrs:{"data-id":e.id,"data-index":o}},[a("div",{staticClass:"col"},[a("span",[a("div",{staticClass:"text"},[t._v(t._s(e.category))])])]),a("div",{staticClass:"col"},[a("img",{attrs:{src:e.imageUrl}})]),a("div",{staticClass:"col"},[a("span",[a("div",{staticClass:"text"},[t._v(t._s(e.title))])])]),a("div",{staticClass:"col"},[a("span",[a("div",{staticClass:"text"},[t._v(t._s(e.content))])])]),a("div",{staticClass:"col"},[a("span",[a("div",{staticClass:"text"},[t._v(t._s(e.description))])])]),a("div",{staticClass:"col"},[a("span",[a("font-awesome-icon",{class:e.enabled?"check":"times",attrs:{icon:e.enabled?["fas","check"]:["fas","times"]}})],1)]),a("div",{staticClass:"col"},[a("span",[t._v(t._s(e.origin_price))])]),a("div",{staticClass:"col"},[a("span",[t._v(t._s(e.price))])]),a("div",{staticClass:"col"},[a("span",[t._v(t._s(e.options.store))])]),a("div",{staticClass:"col"},[a("span",[a("button",{staticClass:"update",attrs:{"data-action":"update"},on:{click:function(e){return t.openPage(o)}}},[a("font-awesome-icon",{attrs:{icon:["fas","edit"]}}),t._v("修改")],1),a("button",{staticClass:"del",on:{click:function(e){return t.deleteProduct(o)}}},[a("font-awesome-icon",{attrs:{icon:["fas","trash-alt"]}}),t._v("刪除")],1)])])])])}))],2),a("productPage",{attrs:{product:t.product},on:{newProduct:t.addProduct}})],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("div",{staticClass:"nav-title"},[a("h2",[t._v("產品管理介面")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"title"},[a("div",{staticClass:"tr"},[a("div",{staticClass:"col"},[a("span",[t._v("分類")])]),a("div",{staticClass:"col"},[a("span",[t._v("圖片")])]),a("div",{staticClass:"col"},[a("span",[t._v("標題")])]),a("div",{staticClass:"col"},[a("span",[t._v("說明")])]),a("div",{staticClass:"col"},[a("span",[t._v("描述")])]),a("div",{staticClass:"col"},[a("span",[t._v("是否啟用")])]),a("div",{staticClass:"col"},[a("span",[t._v("原價")])]),a("div",{staticClass:"col"},[a("span",[t._v("售價")])]),a("div",{staticClass:"col"},[a("span",[t._v("庫存")])]),a("div",{staticClass:"col"},[a("span",[t._v("編輯")])])])])}],n=(a("99af"),a("4160"),a("d81d"),a("a434"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"newDataPage"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row-100 row-title"},[a("div",{staticClass:"page-title"},[a("span",[a("h3",[t._v(t._s(t.product.id?"更新":"新增")+"商品")])])])]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"title"}},[t._v("名稱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.title,expression:"product.title"}],staticClass:"required",attrs:{id:"title",type:"text"},domProps:{value:t.product.title},on:{input:function(e){e.target.composing||t.$set(t.product,"title",e.target.value)}}})]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.category,expression:"product.category"}],attrs:{id:"category",type:"text"},domProps:{value:t.product.category},on:{input:function(e){e.target.composing||t.$set(t.product,"category",e.target.value)}}})]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"content"}},[t._v("商品敘述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.content,expression:"product.content"}],attrs:{id:"content",cols:"25",rows:"5"},domProps:{value:t.product.content},on:{input:function(e){e.target.composing||t.$set(t.product,"content",e.target.value)}}})]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"description"}},[t._v("商品說明")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],attrs:{id:"description",cols:"25",rows:"5"},domProps:{value:t.product.description},on:{input:function(e){e.target.composing||t.$set(t.product,"description",e.target.value)}}})]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.origin_price,expression:"product.origin_price"}],attrs:{id:"origin_price",type:"number"},domProps:{value:t.product.origin_price},on:{input:function(e){e.target.composing||t.$set(t.product,"origin_price",e.target.value)}}})]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],attrs:{id:"price",type:"number"},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}})]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"imageUrl"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.imageUrl,expression:"product.imageUrl"}],attrs:{id:"imageUrl",type:"text"},domProps:{value:t.product.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.product,"imageUrl",e.target.value)}}}),a("div",{staticClass:"img"},[a("img",{attrs:{id:"preview",src:t.product.imageUrl,alt:""}})])]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"price"}},[t._v("庫存")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.options.store,expression:"product.options.store"}],attrs:{id:"price",type:"number",placeholder:"0"},domProps:{value:t.product.options.store},on:{input:function(e){e.target.composing||t.$set(t.product.options,"store",e.target.value)}}}),a("label",{attrs:{for:"unit"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.unit,expression:"product.unit"}],attrs:{id:"price",type:"text"},domProps:{value:t.product.unit},on:{input:function(e){e.target.composing||t.$set(t.product,"unit",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.enabled,expression:"product.enabled"}],attrs:{id:"enabled",type:"checkbox"},domProps:{checked:Array.isArray(t.product.enabled)?t._i(t.product.enabled,null)>-1:t.product.enabled},on:{change:function(e){var a=t.product.enabled,o=e.target,r=!!o.checked;if(Array.isArray(a)){var s=null,i=t._i(a,s);o.checked?i<0&&t.$set(t.product,"enabled",a.concat([s])):i>-1&&t.$set(t.product,"enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.product,"enabled",r)}}}),a("label",{attrs:{for:"enabled"}},[t._v("是否啟用")])]),a("div",{staticClass:"row-100"},[t.product.id?a("button",{attrs:{id:"update","data-action":"update",type:"button"},on:{click:t.emitProduct}},[t._v("更新")]):a("button",{attrs:{id:"create","data-action":"create",type:"button"},on:{click:t.emitProduct}},[t._v("新增")]),a("button",{attrs:{id:"cancel",type:"button"},on:{click:t.cancel}},[t._v("取消")])])])])}),d=[],l={name:"productPage",props:{product:Object},methods:{emitProduct:function(){this.$emit("newProduct",this.product),document.querySelector("#newDataPage").classList.remove("open")},cancel:function(){document.querySelector("#newDataPage").classList.remove("open")}}},u=l,p=(a("46d5"),a("2877")),v=Object(p["a"])(u,n,d,!1,null,"1ec7db47",null),m=v.exports,f={name:"product-manage",components:{productPage:m},data:function(){return{api:{base:"https://course-ec-api.hexschool.io/api/",uuid:"dd62b88f-6f23-42a4-8551-b1cb4552bb3e",getAllData:"/ec/products"},products:[],product:{imageUrl:[],options:{store:0}}}},created:function(){var t=this;this.$http.get("".concat(this.api.base).concat(this.api.uuid).concat(this.api.getAllData)).then((function(e){t.products=e.data.data,t.products=t.products.map((function(t){var e=Object.assign({},t);return e.options={store:Math.floor(100*Math.random())},e}))}))},mounted:function(){window.addEventListener("click",(function(t){var e=t.target.dataset.action||t.target.parentNode.dataset.action;switch(e){case"add":break;case"update":break;default:document.querySelector("#newDataPage").classList.remove("open");break}})),document.querySelector("#newDataPage .container").addEventListener("click",(function(t){t.stopPropagation()}))},methods:{openPage:function(t){this.product=t||0==t?JSON.parse(JSON.stringify(this.products[t])):{options:{store:null}},document.querySelector("#newDataPage").classList.toggle("open")},addProduct:function(t){var e=this;this.$set(this.product,t),console.log(this.product),this.product.id?this.products.forEach((function(t,a){t.id==e.product.id&&e.$set(e.products,a,e.product)})):(this.product.id=(new Date).getTime(),this.products.push(this.product)),this.product={image:[],options:{store:null}}},deleteProduct:function(t){confirm("確認刪除？（刪除後無法復原）")&&this.products.splice(t,1)}}},g=f,b=(a("52bf"),Object(p["a"])(g,i,c,!1,null,"d41642a8",null)),_=b.exports,h={name:"App",components:{productManage:_}},w=h,C=Object(p["a"])(w,r,s,!1,null,null,null),y=C.exports,P=a("bc3a"),x=a.n(P),k=a("a7fe"),$=a.n(k),O=a("ecee"),j=a("c074"),N=a("ad3d");o["a"].use($.a,x.a),O["c"].add(j["a"],j["e"],j["d"],j["b"],j["c"]),o["a"].component("font-awesome-icon",N["a"]),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(y)}}).$mount("#app")},a8f5:function(t,e,a){},e39c:function(t,e,a){}});
//# sourceMappingURL=app.ea9c329a.js.map