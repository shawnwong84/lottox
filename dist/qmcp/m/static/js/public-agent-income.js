webpackJsonp([43],{"4GWj":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=a("6cYu"),n=a("qhTv"),l=(i=n)&&i.__esModule?i:{default:i};e.default={mixins:[l.default],name:"AgentIncome",components:{TitleHeader:s.TitleHeader,DateInterval:s.DateInterval},data:function(){return{dateIndex:0,date:null,list:[[],[],[],[]],totalAmount:"0.00",animation:""}},watch:{dateIndex:function(t,e){this.animation=t>e?"slide-left":"slide-right",this.refreshList()}},created:function(){this.refreshList()},methods:{onSwipeLeft:function(){this.dateIndex+1<4&&this.dateIndex++},onSwipeRight:function(){this.dateIndex>0&&this.dateIndex--},refreshList:function(){var t=this,e=this.dateIndex;this.$store.state.main.loadingText="正在获取...",this.$store.dispatch("agent/myEarnings",{date:e+1}).then(function(a){200===a.code?(t.$set(t.list,e,a.data.list),t.totalAmount=a.data.totalnetAmount):t.toastText("获取列表失败",window.TOAST_POSITION.TOP),t.$store.state.main.loadingText=""}).catch(function(){t.$store.state.main.loadingText=""})}}}},"az+a":function(t,e){},"cN+n":function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view-page"},[a("div",{staticClass:"head"},[a("title-header",{attrs:{title:t.$route.meta.title||"我的收益"}}),t._v(" "),a("date-interval",{attrs:{date:t.date,default:""},on:{"update:date":function(e){t.date=e}},model:{value:t.dateIndex,callback:function(e){t.dateIndex=e},expression:"dateIndex"}}),t._v(" "),t._m(0)],1),t._v(" "),a("div",{directives:[{name:"hammer",rawName:"v-hammer.swipeleft",value:t.onSwipeLeft,expression:"onSwipeLeft",modifiers:{swipeleft:!0}},{name:"hammer",rawName:"v-hammer.swiperight",value:t.onSwipeRight,expression:"onSwipeRight",modifiers:{swiperight:!0}}],staticClass:"body"},[a("transition-group",{attrs:{name:t.animation}},t._l(4,function(e){return t.dateIndex===e-1?a("div",{key:"animation-box-"+e,staticClass:"animation-box"},[a("div",{staticClass:"scroller"},[a("cube-scroll",{ref:"scroll",refInFor:!0},[a("vux-group",t._l(t.list[e-1],function(e,i){return a("vux-cell-box",{key:e.date+"-"+i,attrs:{"is-link":""}},[a("ul",{staticClass:"row clear-fix",on:{click:function(a){return t.$router.push("/user/agent/income/"+e.date)}}},[a("li",{staticClass:"col f-l col-time"},[a("p",{staticClass:"date"},[t._v(t._s(e.date))]),t._v(" "),a("p",{staticClass:"week"},[t._v("星期"+t._s(e.week))])]),t._v(" "),a("li",{class:{"col f-l col-bet":!0,red:parseFloat(e.allbetAmount)}},[t._v(t._s(e.allbetAmount)+"("+t._s(e.lowerbetAmount)+")")]),t._v(" "),a("li",{class:{"col f-l col-income":!0,red:parseFloat(e.allnetAmount)}},[t._v(t._s(e.allnetAmount)+"("+t._s(e.lowernetAmount)+")")])])])}),1)],1)],1),t._v(" "),a("p",{staticClass:"footer"},[t._v("分润额"),a("span",{staticClass:"red"},[a("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.totalAmount))])])]):t._e()}),0)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"row title clear-fix"},[e("li",{staticClass:"col f-l col-time"},[this._v("时间")]),this._v(" "),e("li",{staticClass:"col f-l col-bet"},[this._v("投注额(直属)")]),this._v(" "),e("li",{staticClass:"col f-l col-income"},[this._v("分润额(直属)")])])}]};e.a=i},gDAw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("4GWj"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var l=a("cN+n");var o=function(t){a("az+a")},r=a("VU/8")(s.a,l.a,!1,o,"data-v-247c4646",null);e.default=r.exports}});