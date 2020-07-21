(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-585ede01"],{"13d5":function(t,e,r){"use strict";var i=r("23e7"),n=r("d58f").left,c=r("a640"),a=r("ae40"),o=c("reduce"),s=a("reduce",{1:0});i({target:"Array",proto:!0,forced:!o||!s},{reduce:function(t){return n(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},5558:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shopcart"},[t.products&&t.products.length>0?r("div",{staticClass:"container"},[r("button",{ref:"removeAllContainer",staticClass:"removeAll",on:{click:function(e){return t.deleteCartData()}}},[t._v("刪除所有商品")]),r("table",[t._m(0),r("tbody",{ref:"preivew"},[t._l(t.products,(function(e,i){return r("tr",{key:e.product.id},[r("td",{attrs:{scoped:"row"}},[t._v(t._s(i+1))]),r("td",[r("img",{attrs:{src:e.product.imageUrl}})]),r("td",[r("div",{staticClass:"item-name"},[t._v(t._s(t._f("hideText")(e.product.title)))])]),r("td",[e.product.price?r("div",{staticClass:"price"},[t._v(t._s(t._f("cash")(e.product.price))),r("span",{class:{strike:e.product.price}},[t._v(t._s(t._f("cash")(e.product.origin_price)))])]):t._e()]),r("td",[r("div",{staticClass:"num-control"},[r("button",{staticClass:"num-minus",on:{click:function(e){return t.countQuantity(i,"m")}}},[t._v("−")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"item.quantity"}],staticClass:"num-input",attrs:{type:"number"},domProps:{value:e.quantity},on:{change:function(e){return t.updateCartData(i)},input:function(r){r.target.composing||t.$set(e,"quantity",r.target.value)}}}),r("button",{staticClass:"num-plus",on:{click:function(e){return t.countQuantity(i,"p")}}},[t._v("+")])])]),r("td",{staticClass:"item-total"},[t._v(t._s(t._f("cash")(t.getItemTotal(i))))]),r("td",[r("button",{staticClass:"remove",class:{removing:e.removing},on:{click:function(e){return t.deleteCartData(i)}}},[t._v("×")])])])})),r("tr",{staticClass:"total"},[r("td",[t._v("小計")]),r("td",{attrs:{colspan:"4"}}),r("td",[t._v(t._s(t._f("cash")(t.countAll)))]),r("td")])],2)]),r("div",{staticClass:"shopcart-checkout"},[r("button",{staticClass:"continueshop"},[r("router-link",{attrs:{to:"/product-list"}},[t._v("‹‹ 繼續購物")])],1),r("button",{staticClass:"checkout"},[r("router-link",{attrs:{to:"/pay-page"}},[t._v("去結帳 ››")])],1)])]):r("div",{staticClass:"container"},[r("div",{staticClass:"noItemAlert"},[t._v("還沒有把喜愛的商品加入購物車唷 趕快去購物吧！")]),r("div",{staticClass:"shopcart-checkout"},[r("button",{staticClass:"continueshop"},[r("router-link",{attrs:{to:"/product-list"}},[t._v("‹‹繼續購物")])],1)])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("編號")]),r("th",[t._v("圖示")]),r("th",[t._v("產品名稱")]),r("th",[t._v("售價")]),r("th",[t._v("購買數量")]),r("th",[t._v("總價")]),r("th",[t._v("移除")])])])}],c=(r("d81d"),r("13d5"),r("a434"),r("2909")),a=r("2803"),o={data:function(){return{products:[],productCheck:[]}},created:function(){this.getShopCartData()},computed:{countAll:function(){return this.products.reduce((function(t,e){return t+e.quantity*(e.product.price?e.product.price:e.product.origin_price)}),0)}},methods:{getShopCartData:function(){var t=this,e=this.$loading.show();Object(a["e"])().then((function(r){t.products=Object(c["a"])(r.data.data).map((function(t){return t.removing=!1,t})),e.hide()}))},countQuantity:function(t,e){"m"===e?this.products[t].quantity>1&&(this.products[t].quantity-=1):"p"===e&&(this.products[t].quantity+=1),this.updateCartData(t)},updateCartData:function(t){Object(a["h"])(this.products[t].product.id,this.products[t].quantity)},deleteCartData:function(t){var e=this;if(t||0===t)this.products[t].removing=!0,Object(a["c"])(this.products[t].product.id).then((function(){e.products.splice(t,1),e.products[t].removing=!1}));else{var r=this.$loading.show({container:this.$refs.removeAllContainer,isFullPage:!1});Object(a["c"])().then((function(){e.products=[],r.hide()}))}},getItemTotal:function(t){return this.products[t].quantity*(this.products[t].product.price?this.products[t].product.price:this.products[t].product.origin_price)}}},s=o,u=(r("9d37"),r("2877")),d=Object(u["a"])(s,i,n,!1,null,"0523a8ee",null);e["default"]=d.exports},"9d37":function(t,e,r){"use strict";var i=r("f570"),n=r.n(i);n.a},a434:function(t,e,r){"use strict";var i=r("23e7"),n=r("23cb"),c=r("a691"),a=r("50c4"),o=r("7b0b"),s=r("65f0"),u=r("8418"),d=r("1dde"),l=r("ae40"),p=d("splice"),h=l("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,v=Math.min,m=9007199254740991,_="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p||!h},{splice:function(t,e){var r,i,d,l,p,h,g=o(this),C=a(g.length),b=n(t,C),y=arguments.length;if(0===y?r=i=0:1===y?(r=0,i=C-b):(r=y-2,i=v(f(c(e),0),C-b)),C+r-i>m)throw TypeError(_);for(d=s(g,i),l=0;l<i;l++)p=b+l,p in g&&u(d,l,g[p]);if(d.length=i,r<i){for(l=b;l<C-i;l++)p=l+i,h=l+r,p in g?g[h]=g[p]:delete g[h];for(l=C;l>C-i+r;l--)delete g[l-1]}else if(r>i)for(l=C-i;l>b;l--)p=l+i-1,h=l+r-1,p in g?g[h]=g[p]:delete g[h];for(l=0;l<r;l++)g[l+b]=arguments[l+2];return g.length=C-i+r,d}})},d58f:function(t,e,r){var i=r("1c0b"),n=r("7b0b"),c=r("44ad"),a=r("50c4"),o=function(t){return function(e,r,o,s){i(r);var u=n(e),d=c(u),l=a(u.length),p=t?l-1:0,h=t?-1:1;if(o<2)while(1){if(p in d){s=d[p],p+=h;break}if(p+=h,t?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:l>p;p+=h)p in d&&(s=r(s,d[p],p,u));return s}};t.exports={left:o(!1),right:o(!0)}},d81d:function(t,e,r){"use strict";var i=r("23e7"),n=r("b727").map,c=r("1dde"),a=r("ae40"),o=c("map"),s=a("map");i({target:"Array",proto:!0,forced:!o||!s},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},f570:function(t,e,r){}}]);
//# sourceMappingURL=chunk-585ede01.95c304bd.js.map