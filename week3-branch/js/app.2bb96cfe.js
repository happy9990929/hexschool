(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/hexschool/week3-branch/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"psychological"},on:{click:t.scrollBlock}},[n("div",{staticClass:"vld-parent"},[n("loading",{attrs:{active:t.loadingConfig.isLoading,"can-cancel":!1,opacity:1,"is-full-page":t.loadingConfig.fullPage},on:{"update:active":function(e){return t.$set(t.loadingConfig,"isLoading",e)}}})],1),n("div",{staticClass:"start-page fill-page",attrs:{id:"start"}},[n("div",{staticClass:"title"},[n("div",{staticClass:"zh"},[n("h1",[t._v(t._s(t.title.zh))])]),n("div",{staticClass:"en"},[n("h2",[t._v(t._s(t.title.en))])]),n("p",[t._v(t._s(t.description))])]),t._m(0)]),t._l(t.problemList,(function(e,i){return n("div",{key:i,staticClass:"fill-page test-page",attrs:{id:"q"+(i+1)}},[n("div",{staticClass:"number"},[t._v("Q"+t._s(i+1))]),n("div",{staticClass:"quesion"},[n("h1",[t._v(t._s(e.problem))])]),t._l(e.options,(function(a){return n("span",{key:a.id,staticClass:"check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.problemCategorys[Math.floor(i/2)].score[i%2],expression:"problemCategorys[Math.floor(index/2)].score[index%2]"}],attrs:{type:"radio",name:e.id},domProps:{value:a.fraction,checked:t._q(t.problemCategorys[Math.floor(i/2)].score[i%2],a.fraction)},on:{change:function(e){t.$set(t.problemCategorys[Math.floor(i/2)].score,i%2,a.fraction)}}}),n("label",[t._v(t._s(t.captureStr(a.description,"。")+"。")),n("small",[t._v(t._s(" "+t.captureStr(a.description,"。","r")))])])])})),n("div",{staticClass:"noChoiceMsg",class:{hide:t.hasChoice}},[t._v("尚未選擇答案唷")]),n("div",{staticClass:"btn"},[9!=i?n("button",{on:{click:function(n){return t.nextQuesion(e.id,i+1)}}},[t._v("下一題")]):n("button",{on:{click:t.countResult}},[t._v("看結果")])])],2)})),t.showResult?t._l(t.problemCategorys,(function(e,i){return n("div",{key:e.category,staticClass:"fill-page result-page",attrs:{id:e.category}},[n("div",{staticClass:"category-title"},[n("h1",[t._v(t._s(t.getCategoryTextZh(e.category)))]),n("h2",[t._v(t._s(e.category))])]),n("div",{staticClass:"score"},[t._v(t._s(e.score.reduce((function(t,e){return t+e}),0)))]),n("div",{staticClass:"w-50"},[n("div",{staticClass:"detail"},[t._v(t._s(e.description.desc))])]),n("div",{staticClass:"w-50"},[n("div",{staticClass:"description",class:{highlight:t.resultCheck[i].high}},[t._m(1,!0),t._v(t._s(e.description.high))]),n("div",{staticClass:"description",class:{highlight:t.resultCheck[i].middle}},[t._m(2,!0),t._v(t._s(e.description.middle))]),n("div",{staticClass:"description",class:{highlight:t.resultCheck[i].low}},[t._m(3,!0),t._v(t._s(e.description.low))])]),n("div",{staticClass:"btn"},[i!=t.problemCategorys.length-1?n("button",{on:{click:function(e){return t.nextPage(i+1)}}},[t._v("下一頁")]):n("button",{on:{click:t.nextPage}},[t._v("再測一次")])])])})):t._e()],2)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"start-btn-block"},[n("a",{staticClass:"start",attrs:{href:"#q1"}},[t._v("開始測驗")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"description-title"},[t._v("高"),n("small",[t._v("（≥ 7）")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"description-title"},[t._v("中"),n("small",[t._v(" (= 6)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"description-title"},[t._v("低"),n("small",[t._v("（≤ 5）")])])}],s=(n("a4d3"),n("e01a"),n("7db0"),n("4160"),n("c975"),n("13d5"),n("b0c0"),n("b64b"),n("07ac"),n("159b"),n("2909")),o=n("9062"),c=n.n(o),l=(n("e40d"),{name:"psychological",components:{Loading:c.a},data:function(){return{loadingConfig:{isLoading:!1,fullPage:!0},title:[],description:"",problemCategorys:[],problemList:[],degree:{},traits:{},hasChoice:!0,resultCheck:[],showResult:!1}},created:function(){var t=this;this.loadingConfig.isLoading=!0,this.$http.get("https://raw.githubusercontent.com/hexschool/js-training-task/master/api/BigFive.json").then((function(e){t.title=e.data.name,t.description=e.data.description,t.degree=e.data.degree,t.traits=e.data.traits,t._.forEach(e.data.problemList,(function(e,n){t.problemCategorys.push({category:n,description:e.description,score:[0,0]}),e.problems.forEach((function(e){return t.problemList.push(e)}))}))})).then((function(){t.loadingConfig.isLoading=!1}))},methods:{nextQuesion:function(t,e){document.querySelector('[name="'.concat(t,'"]:checked'))?(window.location.href="#q".concat(e+1),this.hasChoice=!0):this.hasChoice=!1},captureStr:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"l",i=t.indexOf(e),a="r"==n?i+1:0,r="r"==n?t.length:i;return i>-1?t.substring(a,r):t},scrollBlock:function(t){t.target.addEventListener("scroll",(function(t){t.preventDefault()}))},countResult:function(){var t=this;this.resultCheck=[];var e=Object.keys(this.degree),n=Object.values(this.degree);this._.forEach(this.problemCategorys,(function(i){var a=i.score.reduce((function(t,e){return t+e}),0),r=a>=Math.max.apply(Math,Object(s["a"])(n))?t.findKey(t.degree,Math.max.apply(Math,Object(s["a"])(n))):a<=Math.min.apply(Math,Object(s["a"])(n))?t.findKey(t.degree,Math.min.apply(Math,Object(s["a"])(n))):t.findKey(t.degree,n[Math.floor(n.length/2)]),o=t.addCheckObject(e,r);t.resultCheck.push(o)})),this.showResult=!0,setTimeout((function(){t.nextPage(0)}),200)},findKey:function(t,e){return Object.keys(t).find((function(n){return t[n]===e}))},addCheckObject:function(t,e){var n={};return t.forEach((function(t){return n[t]=t===e})),n},getCategoryTextZh:function(t){return this.traits.zh[this.traits.en.indexOf(t)]},nextPage:function(t){var e=this;"number"===typeof t?window.location.href="#".concat(this.problemCategorys[t].category):(this._.forEach(this.problemCategorys,(function(t,n){e.problemCategorys[n].score=[0,0]})),window.location.href="#start")},exit:function(){}}}),u=l,d=(n("cf25"),n("2877")),h=Object(d["a"])(u,a,r,!1,null,null,null),f=h.exports,p=n("bc3a"),g=n.n(p),v=n("a7fe"),_=n.n(v),b=n("2ef0"),m=n.n(b),C=n("9955"),y=n.n(C);i["a"].use(_.a,g.a),i["a"].use(y.a,{name:"custom",lodash:m.a}),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(f)}}).$mount("#app")},cf25:function(t,e,n){"use strict";var i=n("fea6"),a=n.n(i);a.a},fea6:function(t,e,n){}});
//# sourceMappingURL=app.2bb96cfe.js.map