webpackJsonp([34],{"DWH/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("lK08"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var o=s("QIvx");var l=function(t){s("KKrH")},c=s("VU/8")(a.a,o.a,!1,l,"data-v-d44eda3a",null);e.default=c.exports},KKrH:function(t,e){},QIvx:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view-page"},[s("div",{staticClass:"head"},[s("title-header",{attrs:{title:t.$route.meta.title||"下级列表"}}),t._v(" "),s("vux-group",[s("vux-tab",{staticStyle:{"background-color":"#fff"},attrs:{"line-width":2},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},t._l(t.tabs,function(e){return s("vux-tab-item",{key:e.k},[t._v(t._s(e.v))])}),1)],1),t._v(" "),t._m(0)],1),t._v(" "),s("div",{directives:[{name:"hammer",rawName:"v-hammer.swipeleft",value:t.onSwipeLeft,expression:"onSwipeLeft",modifiers:{swipeleft:!0}},{name:"hammer",rawName:"v-hammer.swiperight",value:t.onSwipeRight,expression:"onSwipeRight",modifiers:{swiperight:!0}}],staticClass:"body"},[s("transition-group",{attrs:{name:t.animation}},t._l(t.list,function(e,i){return t.tabIndex===i?s("div",{key:"animation-box-"+i,staticClass:"animation-box"},[t.list[t.tabIndex].length?s("cube-scroll",{ref:"scroll",refInFor:!0,attrs:{options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},[s("vux-group",t._l(t.list[t.tabIndex],function(e,i){return s("vux-cell-box",{key:e.uid+"-"+i,attrs:{"is-link":""}},[s("ul",{staticClass:"row clear-fix",on:{click:function(s){t.actionUser=e}}},[s("li",{staticClass:"col f-l col-count"},[t._v(t._s(e.userName))]),t._v(" "),s("li",{staticClass:"col f-l col-count"},[t._v(t._s(e.realName||"无"))]),t._v(" "),s("li",{staticClass:"col f-l col-count"},[t._v(t._s("yes"===e.status?"启用":"禁用"))]),t._v(" "),s("li",{staticClass:"col f-l col-count"},[t._v(t._s(e.is_agency?"代理":"会员"))])])])}),1)],1):s("div",{staticClass:"no-data"},[s("img",{staticClass:"img",attrs:{src:"/m/static/img/no-data.png?v=2019-05-14T17:17:08",alt:""}}),t._v(" "),s("p",{staticClass:"info"},[t._v("暂无下级")])])],1):t._e()}),0)],1),t._v(" "),s("vux-popup",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"ios-popup",attrs:{position:"bottom","popup-style":{zIndex:1002}},model:{value:t.actionUserStatus,callback:function(e){t.actionUserStatus=e},expression:"actionUserStatus"}},[s("div",{staticClass:"radio"},[s("ul",{staticClass:"list"},[s("li",{staticClass:"item",on:{click:t.onChangeOdds}},[t._v("修改赔率")]),t._v(" "),t.actionUser&&!t.actionUser.is_agency?s("li",{staticClass:"item",on:{click:t.onToAgent}},[t._v("升为代理")]):t._e()]),t._v(" "),s("button",{staticClass:"btn",on:{click:function(e){t.actionUser=null}}},[t._v("取消")])])]),t._v(" "),s("vux-popup",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{position:"bottom","popup-style":{zIndex:1002}},model:{value:t.changeOddsShow,callback:function(e){t.changeOddsShow=e},expression:"changeOddsShow"}},[s("vux-group",{staticClass:"odds-list"},[s("h5",{staticClass:"odds-header",attrs:{slot:"title"},slot:"title"},[t._v("赔率详情")]),t._v(" "),t._l(t.refundRebate,function(e,i){return s("vux-cell-box",{directives:[{name:"show",rawName:"v-show",value:t.checkGameTypeShow(e.name),expression:"checkGameTypeShow(v.name)"}],key:i,attrs:{"is-link":""}},[s("div",{staticClass:"odds-item",on:{click:function(e){t.$router.push("/user/agent/list/edit-odds/"+i+"?t="+Date.now())}}},[s("span",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),s("span",{staticClass:"value"},[t._v(t._s(t.$store.state.agent.agentListSelected&&e.list[0]?t.$store.state.agent.agentListSelected[e.list[0].key]:"")+"%")])])])})],2)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"row title clear-fix"},[e("li",{staticClass:"col f-l col-count"},[this._v("会员")]),this._v(" "),e("li",{staticClass:"col f-l col-count"},[this._v("姓名")]),this._v(" "),e("li",{staticClass:"col f-l col-count"},[this._v("状态")]),this._v(" "),e("li",{staticClass:"col f-l col-count"},[this._v("类型")])])}]};e.a=i},lK08:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=s("6cYu"),n=s("qhTv"),o=(i=n)&&i.__esModule?i:{default:i};e.default={mixins:[o.default],name:"AgentList",components:{TitleHeader:a.TitleHeader},data:function(){return{actionUser:null,changeOdds:!1,tabs:[{k:2,v:"全部"},{k:1,v:"代理"},{k:0,v:"会员"}],tabIndex:0,animation:"",pageSize:12,list:[[],[],[]],loading:[!1,!1,!1],page:[0,0,0],noMore:[!1,!1,!1]}},watch:{tabIndex:function(t,e){this.animation=t>e?"slide-left":"slide-right",this.page[this.tabIndex]=0,this.noMore[t]=!1,this.loadList(!0,t)}},computed:{refundRebate:function(){return this.$store.state.agent.refundRebate},actionUserStatus:{get:function(){return!!this.actionUser},set:function(t){this.actionUser=t?this.actionUser:null}},changeOddsShow:{get:function(){return this.changeOdds&&!!this.$store.state.agent.agentListSelected},set:function(t){this.changeOdds=t}}},mounted:function(){this.onPullingDown()},methods:{onSwipeLeft:function(){this.tabIndex+1<this.tabs.length&&this.tabIndex++},onSwipeRight:function(){this.tabIndex>0&&this.tabIndex--},onToAgent:function(){var t=this;this.$store.state.main.loadingText="请稍后...",this.$store.dispatch("agent/lowerUpStatus",{uid:this.actionUser.uid}).then(function(e){200===e.code?(t.toastText(e.data,window.TOAST_POSITION.TOP),t.onPullingDown()):t.toastText(e.message,window.TOAST_POSITION.TOP),t.$store.state.main.loadingText=""}).catch(function(){t.$store.state.main.loadingText=""}),this.actionUser=null},onChangeOdds:function(){this.$store.state.agent.agentListSelected=this.actionUser,this.actionUser=null,this.changeOdds=!0},onPullingDown:function(){this.page[this.tabIndex]=0,this.noMore[this.tabIndex]=!1,this.loadList(!0,this.tabIndex)},onPullingUp:function(){this.loadList(!1,this.tabIndex)},loadList:function(t,e){var s=this;this.loading[e]?(this.toastText("正在获取",window.TOAST_POSITION.TOP),this.$refs.scroll&&this.$refs.scroll[0]&&(this.$refs.scroll[0].forceUpdate(),this.$refs.scroll[0].refresh())):this.noMore[e]?(this.toastText("没有更多",window.TOAST_POSITION.TOP),this.$refs.scroll&&this.$refs.scroll[0]&&(this.$refs.scroll[0].forceUpdate(),this.$refs.scroll[0].refresh())):(this.page[this.tabIndex]++,this.$store.state.main.loadingText="正在加载...",this.loading[e]=!0,this.$store.dispatch("agent/lowerList",{type:this.tabs[e].k,page:this.page[e],pageSize:this.pageSize,uid:""}).then(function(i){200===i.code?(0===i.data.data.length&&(s.noMore[e]=!0),t?s.$set(s.list,e,i.data.data):s.$set(s.list,e,s.list[e].concat(i.data.data))):(s.page[e]--,s.toastText(i.message,window.TOAST_POSITION.TOP)),s.$store.state.main.loadingText="",s.loading[e]=!1,s.$refs.scroll&&s.$refs.scroll[0]&&(s.$refs.scroll[0].forceUpdate(),s.$refs.scroll[0].refresh())}).catch(function(){s.toastText("获取失败",window.TOAST_POSITION.TOP),s.page[e]--,s.$store.state.main.loadingText="",s.loading[e]=!1,s.$refs.scroll&&s.$refs.scroll[0]&&(s.$refs.scroll[0].forceUpdate(),s.$refs.scroll[0].refresh())}))}}}}});