webpackJsonp([44],{e9yM:function(t,s){},iQ6W:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var l=e("6cYu"),i=n(e("3dZY")),a=n(e("qhTv"));function n(t){return t&&t.__esModule?t:{default:t}}s.default={mixins:[a.default],name:"AgentFinance",components:{TitleHeader:l.TitleHeader,DateInterval:l.DateInterval},data:function(){return{page:[0,0,0,0],limit:12,dateIndex:0,tabs:["存款","取款","返点","优惠"],text:{withdrawals:"总提现",deposit:"总充值",bonus:"总优惠",agency:"总代理",others:"总额"},tabIndex:0,list:[[],[],[],[]],animation:"slide-left",loading:[!1,!1,!1,!1],noMore:[!1,!1,!1,!1]}},mounted:function(){this.$store.state.user.token?this.onPullingDown():this.$router.replace("/admin/login")},watch:{dateIndex:function(){this.onPullingDown()},tabIndex:function(t,s){this.animation=t<s?"slide-right":"slide-left",this.onPullingDown()}},methods:{onSwipeLeft:function(){this.tabIndex+1<this.tabs.length&&this.tabIndex++},onSwipeRight:function(){this.tabIndex>0&&this.tabIndex--},getTime:function(t){return i.default.unix(t).format("YYYY-MM-DD HH:mm:ss")},onPullingDown:function(){this.page[this.tabIndex]=0,this.loading[this.tabIndex]=!1,this.noMore[this.tabIndex]=!1,this.refreshList(!0)},onPullingUp:function(){this.refreshList()},refreshList:function(t){var s=this;this.loading[this.tabIndex]?this.$refs.scroll&&(this.$refs.scroll.forceUpdate(),this.$refs.scroll.refresh()):this.noMore[this.tabIndex]?this.$refs.scroll&&this.$refs.scroll&&(this.$refs.scroll.forceUpdate(),this.$refs.scroll.refresh()):(this.$store.state.main.loadingText="正在获取...",this.page[this.tabIndex]++,this.$store.dispatch("agent/lowerFinance",{type:this.tabIndex+1,date:this.dateIndex+1,page:this.page[this.tabIndex],limit:this.limit}).then(function(e){if(200===e.code){if(t)s.$set(s.list,s.tabIndex,e.data.data);else{var l=s.list[s.tabIndex].concat(e.data.data);s.$set(s.list,s.tabIndex,l)}0===e.data.data.length&&(s.noMore[s.tabIndex]=!0)}else s.page--;s.loading[s.tabIndex]=!1,s.$store.state.main.loadingText="",s.$nextTick(function(){s.$refs.scroll&&(s.$refs.scroll.forceUpdate(),s.$refs.scroll.refresh())})}).catch(function(){s.page[s.tabIndex]--,s.loading[s.tabIndex]=!1,s.$store.state.main.loadingText="",s.$nextTick(function(){s.$refs.scroll&&(s.$refs.scroll.forceUpdate(),s.$refs.scroll.refresh())})}))}}}},jIjl:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var l=e("iQ6W"),i=e.n(l);for(var a in l)"default"!==a&&function(t){e.d(s,t,function(){return l[t]})}(a);var n=e("kCqY");var o=function(t){e("e9yM")},c=e("VU/8")(i.a,n.a,!1,o,"data-v-3439fece",null);s.default=c.exports},kCqY:function(t,s,e){"use strict";var l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"record"},[e("div",{staticClass:"record-header"},[e("title-header",{attrs:{title:t.$route.meta.title||"下级财务"}}),t._v(" "),e("div",{staticStyle:{width:"100%",height:"0.2rem"}}),t._v(" "),e("date-interval",{attrs:{default:""},model:{value:t.dateIndex,callback:function(s){t.dateIndex=s},expression:"dateIndex"}}),t._v(" "),e("vux-tab",{staticClass:"record-tab",staticStyle:{"background-color":"#fff"},attrs:{"scroll-threshold":5,"line-width":2},model:{value:t.tabIndex,callback:function(s){t.tabIndex=s},expression:"tabIndex"}},t._l(t.tabs,function(s){return e("vux-tab-item",{key:s},[t._v(t._s(s))])}),1)],1),t._v(" "),e("div",{directives:[{name:"hammer",rawName:"v-hammer.swipeleft",value:t.onSwipeLeft,expression:"onSwipeLeft",modifiers:{swipeleft:!0}},{name:"hammer",rawName:"v-hammer.swiperight",value:t.onSwipeRight,expression:"onSwipeRight",modifiers:{swiperight:!0}}],staticClass:"record-content"},[e("transition",{attrs:{name:t.animation}},[e("div",{key:"wrapper_"+t.tabIndex,ref:"solid",staticClass:"content-body"},[0===t.tabIndex?e("ul",{staticClass:"row clear-fix title"},[e("li",{staticClass:"col f-l col-4"},[t._v("会员")]),t._v(" "),e("li",{staticClass:"col f-l col-4"},[t._v("类型")]),t._v(" "),e("li",{staticClass:"col f-l col-4"},[t._v("状态")]),t._v(" "),e("li",{staticClass:"col f-l col-4"},[t._v("金额")])]):3===t.tabIndex?e("ul",{staticClass:"row clear-fix title"},[e("li",{staticClass:"col f-l col-3"},[t._v("优惠名称")]),t._v(" "),e("li",{staticClass:"col f-l col-3"},[t._v("状态")]),t._v(" "),e("li",{staticClass:"col f-l col-3"},[t._v("金额")])]):e("ul",{staticClass:"row clear-fix title"},[e("li",{staticClass:"col f-l col-3"},[t._v("会员")]),t._v(" "),e("li",{staticClass:"col f-l col-3"},[t._v("状态")]),t._v(" "),e("li",{staticClass:"col f-l col-3"},[t._v("金额")])]),t._v(" "),t.list[t.tabIndex].length?e("cube-scroll",{ref:"scroll",staticClass:"list",attrs:{options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},[0===t.tabIndex?e("div",{staticClass:"list"},t._l(t.list[t.tabIndex],function(s,l){return e("ul",{key:"item-"+l,staticClass:"row clear-fix"},[e("li",{staticClass:"col f-l col-4"},[t._v(t._s(s.username))]),t._v(" "),e("li",{staticClass:"col f-l col-4"},[t._v(t._s(s.subType))]),t._v(" "),e("li",{staticClass:"col f-l col-4 ok"},[t._v(t._s("success"===s.status?"成功":"失败"))]),t._v(" "),e("li",{staticClass:"col f-l col-4"},[t._v(t._s(s.amount))])])}),0):1===t.tabIndex?e("div",{staticClass:"list"},t._l(t.list[t.tabIndex],function(s,l){return e("ul",{key:"item-"+l,staticClass:"row clear-fix"},[e("li",{staticClass:"col f-l col-3"},[t._v(t._s(s.username))]),t._v(" "),e("li",{staticClass:"col f-l col-3 ok"},[t._v(t._s("success"===s.status?"成功":"失败"))]),t._v(" "),e("li",{staticClass:"col f-l col-3"},[t._v(t._s(s.amount))])])}),0):2===t.tabIndex?e("div",{staticClass:"list"},t._l(t.list[t.tabIndex],function(s,l){return e("ul",{key:"item-"+l,staticClass:"row clear-fix"},[e("li",{staticClass:"col f-l col-3"},[t._v(t._s(s.userName))]),t._v(" "),e("li",{staticClass:"col f-l col-3 ok"},[t._v("成功")]),t._v(" "),e("li",{staticClass:"col f-l col-3"},[t._v(t._s(s.amount))])])}),0):3===t.tabIndex?e("div",{staticClass:"list"},t._l(t.list[t.tabIndex],function(s,l){return e("ul",{key:"item-"+l,staticClass:"row clear-fix"},[e("li",{staticClass:"col f-l col-3 col-l"},[t._v(t._s(s.title))]),t._v(" "),e("li",{staticClass:"col f-l col-3 ok"},[t._v(t._s("success"===s.status?"成功":"失败"))]),t._v(" "),e("li",{staticClass:"col f-l col-3"},[t._v(t._s(s.bouns))])])}),0):t._e()]):e("div",{staticClass:"list-empty"},[e("div",{staticClass:"img"}),t._v(" "),e("p",{staticClass:"info"},[t._v("暂无投注记录")])])],1)])],1)])},staticRenderFns:[]};s.a=l}});