(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2afa75b8"],{"175a":function(t,a,i){"use strict";var n=i("a52f"),e=i.n(n);e.a},1988:function(t,a,i){},"50b2":function(t,a,i){"use strict";var n=i("1988"),e=i.n(n);e.a},"55bd":function(t,a,i){},"575b":function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"productPage",attrs:{id:"productPage"}},[i("categoryList",{class:{sticky:t.sticky}}),i("productList",{class:{sticky:t.sticky}})],1)},e=[],s=i("5530"),c=i("2f62"),o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"category",attrs:{id:"category"}},[i("div",{staticClass:"category-container"},[i("ul",{staticClass:"category-list"},[i("li",[i("button",{on:{click:function(a){return t.setCategory("")}}},[t._v("全部商品")])]),i("li",[i("button",{on:{click:function(a){return t.setCategory("bed")}}},[t._v("床架／床墊")])]),i("li",[i("button",{on:{click:function(a){return t.setCategory("chair")}}},[t._v("椅子／沙發")])]),i("li",[i("button",{on:{click:function(a){return t.setCategory("case")}}},[t._v("櫃子／桌子")])]),i("li",[i("button",{on:{click:function(a){return t.setCategory("curtain")}}},[t._v("地毯／窗簾")])])])])])},r=[],u={methods:Object(s["a"])({},Object(c["b"])(["setCategory"]))},d=u,l=(i("a5ea"),i("2877")),p=Object(l["a"])(d,o,r,!1,null,"bca1c1ea",null),g=p.exports,f=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"product-list",attrs:{id:"product-list"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"item-list"},t._l(t.showProducts,(function(a,n){return i("div",{key:n,staticClass:"item",attrs:{"data-id":a.id},on:{click:t.showDetail}},[i("div",{staticClass:"pic"},[i("img",{attrs:{src:a.imageUrl[0],alt:"",srcset:""}})]),i("div",{staticClass:"detail"},[i("div",{staticClass:"title",attrs:{title:a.title}},[t._v(t._s(t._f("hideText")(a.title)))]),i("div",{staticClass:"cat"},[t._v(t._s(a.category))]),i("div",{staticClass:"descript"},[t._v(t._s(t._f("hideDescipt")(a.content)))]),a.price?i("div",{staticClass:"price"},[t._v(t._s(t._f("cash")(a.price))),i("span",{class:{strike:a.price}},[t._v(t._s(t._f("cash")(a.origin_price)))])]):t._e()]),i("div",{staticClass:"action"},[i("div",{staticClass:"num-control"},[i("button",{staticClass:"num-minus",on:{click:function(a){return t.countQuantity(n,"m")}}},[t._v("−")]),i("input",{staticClass:"num-input",attrs:{type:"number"},domProps:{value:a.quantity}}),i("button",{staticClass:"num-plus",on:{click:function(a){return t.countQuantity(n,"p")}}},[t._v("+")])]),i("button",{staticClass:"addCart",on:{click:function(i){return t.addToCart(n,a.id,a.quantity)}}},[i("div",{staticClass:"txt",class:{hide:a.isLoading}},[t._v("加入購物車")]),i("font-awesome-icon",{staticClass:"loading fa-spin",class:{show:a.isLoading},attrs:{icon:["fas","spinner"]}})],1)])])})),0),t.pagination.current_page?[i("pagination",{attrs:{pagination:t.pagination}})]:t._e(),i("product"),i("router-link",{staticClass:"shop-cart",attrs:{to:"/shopcart"}},[i("div",{staticClass:"shop-container"},[t.shopcart.quantity?i("div",{staticClass:"cart-count"},[t._v(t._s(t.shopcart.quantity))]):t._e(),i("font-awesome-icon",{attrs:{icon:"shopping-cart"}}),i("div",{staticClass:"txt"},[t._v("購物車")])],1)])],2)])},h=[],v=(i("4de4"),i("c975"),i("d81d"),i("2909")),m=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"product",class:{hide:!t.productPage.open},attrs:{id:"product"},on:{click:t.toggle}},[i("div",{ref:"product",staticClass:"product-container"},[i("button",{staticClass:"cancel",on:{click:function(a){return t.cancel()}}},[t._v("×")]),i("div",{staticClass:"category"},[i("small",[t._v(t._s(t.tempProduct.category))])]),i("div",{staticClass:"item"},[t.tempProduct.imageUrl?i("div",{staticClass:"img"},[i("img",{attrs:{src:t.tempProduct.imageUrl[0],alt:"alt"}})]):t._e(),i("div",{staticClass:"detail"},[i("h2",{staticClass:"title"},[t._v(" "+t._s(t.tempProduct.title))]),i("h4",{staticClass:"title"},[t._v("產品說明")]),i("p",{staticClass:"content"},[t._v(t._s(t.tempProduct.content))]),i("h4",{staticClass:"title"},[t._v("產品資訊")]),i("p",{staticClass:"content"},[t._v(t._s(t.tempProduct.description))]),i("div",{staticClass:"item-price"},[i("div",{staticClass:"price-title"},[t._v("售價")]),i("div",{staticClass:"price"},[t._v(t._s(t._f("cash")(t.tempProduct.price))),i("span",{class:{strike:t.tempProduct.price}},[t._v(t._s(t._f("cash")(t.tempProduct.origin_price)))])])]),i("div",{staticClass:"buy-num"},[i("button",{staticClass:"btn-num-minus",attrs:{type:"button"},on:{click:function(a){return t.countQuantity("m")}}},[t._v("−")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.quantity,expression:"tempProduct.quantity"}],staticClass:"num",attrs:{type:"number"},domProps:{value:t.tempProduct.quantity},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"quantity",a.target.value)}}}),i("button",{staticClass:"btn-num-plus",attrs:{type:"button"},on:{click:function(a){return t.countQuantity("p")}}},[t._v("+")])]),i("button",{staticClass:"add-cart",attrs:{type:"button"},on:{click:function(a){return t.addToCart(t.tempProduct.id,t.tempProduct.quantity)}}},[i("div",{staticClass:"txt",class:{hide:t.loading}},[t._v("加入購物車")]),i("font-awesome-icon",{staticClass:"loading fa-spin",class:{show:t.loading},attrs:{icon:["fas","spinner"]}})],1)])])])])},_=[],b=i("2803"),y={name:"product",computed:Object(s["a"])({},Object(c["c"])(["tempProduct","productPage","loading"])),methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["setMsg","toggleProductPage","clearTempProduct","toggleLoading"])),{},{countQuantity:function(t){"m"===t?this.tempProduct.quantity>1&&(this.tempProduct.quantity-=1):"p"===t&&(this.tempProduct.quantity+=1)},toggle:function(t){var a=t.target.className;"product"===a&&(this.clearTempProduct(),this.toggleProductPage())},cancel:function(){this.clearTempProduct(),this.toggleProductPage()},addToCart:function(t,a){var i=this;this.toggleLoading(),t&&a&&Object(b["a"])(t,a).then((function(){i.getShopcartQuantity(),i.toggleLoading()})).catch((function(t){i.setMsg({msg:t.response.data.errors[0],type:!1}),i.toggleLoading()}))}})},C=y,P=(i("50b2"),Object(l["a"])(C,m,_,!1,null,"b7f75956",null)),O=P.exports,j=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"page-wrap",attrs:{id:"pagination"}},[i("button",{staticClass:"page",attrs:{id:"prev"},on:{click:function(a){return t.changePage("m")}}},[t._v("«")]),t._l(t.pagination.total_pages,(function(a){return i("button",{key:a,staticClass:"page",class:{curpage:a===t.pagination.current_page},on:{click:function(i){return t.goToPage(a)}}},[t._v(t._s(a))])})),i("button",{staticClass:"page",attrs:{id:"next"},on:{click:function(a){return t.changePage("p")}}},[t._v("»")])],2)},k=[],w={name:"pagination",props:{pagination:Object},template:"#pagination",methods:{changePage:function(t){var a=this.pagination.current_page,i=this.pagination.total_pages;"p"===t?a<i&&this.$emit("update:pagination",this.pagination.current_page+=1):"m"===t&&a>1&&this.$emit("update:pagination",this.pagination.current_page-=1)},goToPage:function(t){this.$emit("update:pagination",this.pagination.current_page=t)}}},q=w,x=(i("cd62"),Object(l["a"])(q,j,k,!1,null,"0530402a",null)),L=x.exports,$={components:{product:O,productCategories:g,pagination:L},data:function(){return{id:null,pageOpen:!1,shopcart:{quantity:null},pagination:{}}},created:function(){this.getData(),this.getShopcartQuantity()},watch:{"pagination.current_page":{handler:function(){var t=this,a=this.pagination.current_page,i=this.$loading.show();Object(b["d"])(a).then((function(a){t.setProducts(Object(v["a"])(a.data.data).map((function(t){return t.quantity=1,t.isLoading=!1,t}))),i.hide()}))}}},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])(["products","category"])),{},{showProducts:function(){switch(this.category){case"bed":case"curtain":return this.filterProduct(this.category);case"chair":return this.filterProduct(this.category,"sofa");case"case":return this.filterProduct(this.category,"table");default:return this.products}}}),methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["setMsg","setProducts","setPagination","setTempProduct","toggleProductPage"])),{},{getData:function(){var t=this,a=this.$loading.show();Object(b["d"])().then((function(i){t.setProducts(Object(v["a"])(i.data.data).map((function(t){return t.quantity=1,t.isLoading=!1,t}))),t.pagination=i.data.meta.pagination,a.hide()})).catch((function(t){console.error(t)}))},showDetail:function(t){var a=this,i=t.target.parentNode.parentNode.dataset||t.target.parentNode.dataset,n=i.id;this.toggleProductPage();var e=this.$loading.show({container:this.$refs.product,isFullPage:!1});Object(b["g"])(n).then((function(t){a.setTempProduct(Object(s["a"])(Object(s["a"])({},t.data.data),{},{quantity:1})),e.hide()}))},getShopcartQuantity:function(){var t=this;Object(b["f"])().then((function(a){t.shopcart.quantity=a.data.meta.pagination.total}))},countQuantity:function(t,a){"m"===a?this.products[t].quantity>1&&(this.products[t].quantity-=1):"p"===a&&(this.products[t].quantity+=1)},addToCart:function(t,a,i){var n=this;this.products[t].isLoading=!0,a&&i&&Object(b["a"])(a,i).then((function(){n.getShopcartQuantity(),n.products[t].isLoading=!1})).catch((function(a){n.setMsg({msg:a.response.data.errors[0],type:!1}),n.products[t].isLoading=!1}))},filterProduct:function(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return a.length>1?this.products.filter((function(t){var i=t.category.toLowerCase();return i.indexOf(a[0])>-1||i.indexOf(a[1])>-1})):this.products.filter((function(t){return t.category.toLowerCase().indexOf(a[0])>-1}))}})},T=$,Q=(i("175a"),Object(l["a"])(T,f,h,!1,null,"59658cc9",null)),S=Q.exports,E={components:{categoryList:g,productList:S},computed:Object(s["a"])({},Object(c["c"])(["sticky"]))},D=E,N=(i("bfe2"),Object(l["a"])(D,n,e,!1,null,"3901b66f",null));a["default"]=N.exports},8161:function(t,a,i){},a52f:function(t,a,i){},a5ea:function(t,a,i){"use strict";var n=i("ccd2"),e=i.n(n);e.a},bfe2:function(t,a,i){"use strict";var n=i("55bd"),e=i.n(n);e.a},c975:function(t,a,i){"use strict";var n=i("23e7"),e=i("4d64").indexOf,s=i("a640"),c=i("ae40"),o=[].indexOf,r=!!o&&1/[1].indexOf(1,-0)<0,u=s("indexOf"),d=c("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:r||!u||!d},{indexOf:function(t){return r?o.apply(this,arguments)||0:e(this,t,arguments.length>1?arguments[1]:void 0)}})},ccd2:function(t,a,i){},cd62:function(t,a,i){"use strict";var n=i("8161"),e=i.n(n);e.a},d81d:function(t,a,i){"use strict";var n=i("23e7"),e=i("b727").map,s=i("1dde"),c=i("ae40"),o=s("map"),r=c("map");n({target:"Array",proto:!0,forced:!o||!r},{map:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-2afa75b8.7c0754d2.js.map