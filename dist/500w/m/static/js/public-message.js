webpackJsonp([51],{"1Wwg":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("6cYu"),i=o(e("3dZY")),n=o(e("qhTv"));function o(t){return t&&t.__esModule?t:{default:t}}s.default={mixins:[n.default],name:"Message",components:{TitleHeader:a.TitleHeader},data:function(){return{dayJs:i.default,data:null,tabIndex:0,animation:"",animationTab:"",text:"",submitting:!1,userMessage:[],userPage:0,userPageSize:8,userLoading:!1,userNoMore:!1,systemMessage:[],systemPage:0,systemPageSize:8,systemLoading:!1,systemNoMore:!1}},watch:{tabIndex:function(t,s){var e=this;this.animationTab=t>s?"slide-left":"slide-right",this.$nextTick(function(){setTimeout(function(){0===t?e.onPullingDownUser(!0):2===t&&e.onPullingDownSystem(!0)},600)})},data:function(){this.animation=this.data?"slide-left":"slide-right"}},mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.onPullingDownUser(!0),t.onPullingDownSystem(!0)},600)})},methods:{onSwipeLeft:function(){this.tabIndex+1<3&&this.tabIndex++},onSwipeRight:function(){this.tabIndex>0&&this.tabIndex--},onBack:function(){this.data?this.data=null:this.$router.back()},onPullingDownSystem:function(){this.systemPage=0,this.systemNoMore=!1,this.loadSystemMessage(!0)},onPullingDownUser:function(){this.userPage=0,this.userNoMore=!1,this.loadUserMessage(!0)},onPullingUpSystem:function(){this.loadSystemMessage()},onPullingUpUser:function(){this.loadUserMessage()},loadUserMessage:function(t){var s=this;this.userNoMore?(this.toastText("没有更多",window.TOAST_POSITION.TOP),this.$refs["user-scroll"]&&this.$refs["user-scroll"].forceUpdate(),this.$refs["user-scroll"]&&this.$refs["user-scroll"].refresh()):this.userLoading||(this.userPage++,this.userLoading=!0,this.$store.state.main.loadingText="加载中...",this.$store.dispatch("user/loadUserMessage",{page:this.userPage,pageSize:this.userPageSize}).then(function(e){s.userMessage=t?e.data.data:s.userMessage.concat(e.data.data),0===e.data.data.length&&(s.userNoMore=!0),s.userLoading=!1,s.$store.state.main.loadingText="",s.$refs["user-scroll"]&&s.$refs["user-scroll"].forceUpdate(),s.$refs["user-scroll"]&&s.$refs["user-scroll"].refresh()}).catch(function(t){t&&t.message?s.toastText(t.message,window.TOAST_POSITION.TOP):s.toastText("加载失败",window.TOAST_POSITION.TOP),s.userLoading=!1,s.$store.state.main.loadingText="",s.$refs["user-scroll"]&&s.$refs["user-scroll"].forceUpdate(),s.$refs["user-scroll"]&&s.$refs["user-scroll"].refresh()}))},loadSystemMessage:function(t){var s=this;this.systemNoMore?(this.toastText("没有更多",window.TOAST_POSITION.TOP),this.$refs["system-scroll"]&&this.$refs["system-scroll"].forceUpdate(),this.$refs["system-scroll"]&&this.$refs["system-scroll"].refresh()):this.systemLoading||(this.systemPage++,this.systemLoading=!0,this.$store.state.main.loadingText="加载中...",this.$store.dispatch("user/loadSystemMessage",{page:this.systemPage,pageSize:this.systemPageSize}).then(function(e){s.systemMessage=t?e.data.data:s.systemMessage.concat(e.data.data),0===e.data.data.length&&(s.systemNoMore=!0),s.systemLoading=!1,s.$store.state.main.loadingText="",s.$refs["system-scroll"]&&s.$refs["system-scroll"].forceUpdate(),s.$refs["system-scroll"]&&s.$refs["system-scroll"].refresh()}).catch(function(t){t&&t.message?s.toastText(t.message,window.TOAST_POSITION.TOP):s.toastText("加载失败",window.TOAST_POSITION.TOP),s.systemLoading=!1,s.$store.state.main.loadingText="",s.$refs["system-scroll"]&&s.$refs["system-scroll"].forceUpdate(),s.$refs["system-scroll"]&&s.$refs["system-scroll"].refresh()}))},onSubmit:function(){var t=this;this.text?this.submitting||(this.submitting=!0,this.$store.state.main.loadingText="提交中...",this.$store.dispatch("user/submitMessage",{content:this.text}).then(function(s){t.text="",200===s.code?t.toastText("提交成功",window.TOAST_POSITION.TOP):t.toastText(s.message,window.TOAST_POSITION.TOP),t.$store.state.main.loadingText="",t.submitting=!1}).catch(function(){t.$store.state.main.loadingText="",t.submitting=!1})):this.toastText("请输入内容",window.TOAST_POSITION.TOP)}}}},"6c0H":function(t,s){},SQy5:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("1Wwg"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);var o=e("p8qA");var r=function(t){e("6c0H")},l=e("VU/8")(i.a,o.a,!1,r,"data-v-2fe93874",null);s.default=l.exports},p8qA:function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"message-center"},[e("title-header",{attrs:{title:t.$route.meta.title||"消息中心","back-event":""},on:{back:t.onBack}}),t._v(" "),e("div",{directives:[{name:"hammer",rawName:"v-hammer.swipeleft",value:t.onSwipeLeft,expression:"onSwipeLeft",modifiers:{swipeleft:!0}},{name:"hammer",rawName:"v-hammer.swiperight",value:t.onSwipeRight,expression:"onSwipeRight",modifiers:{swiperight:!0}}],staticClass:"body"},[e("transition-group",{attrs:{name:t.animation}},[t.data?e("ul",{key:"page-item",staticClass:"animation-box page-item"},[e("li",{staticClass:"msg-item"},[e("p",{staticClass:"content"},[t._v(t._s(t.data.content))]),t._v(" "),e("p",{staticClass:"time"},[t._v(t._s(t.dayJs.unix(t.data.updated_at).format("YYYY-MM-DD HH:mm:ss")))])]),t._v(" "),t._l(t.data.received,function(s,a){return e("li",{key:s.id+"_"+a,staticClass:"msg-item"},[e("p",{staticClass:"title"},[e("span",{staticClass:"fa fa-fw fa-envelope"}),t._v(" "),e("span",[t._v(t._s(s.title))])]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(s.content))]),t._v(" "),e("p",{staticClass:"time"},[t._v(t._s(t.dayJs.unix(s.updated_at).format("YYYY-MM-DD HH:mm:ss")))])])})],2):e("div",{key:"page-list",staticClass:"animation-box"},[e("vux-tab",{staticClass:"tab",staticStyle:{"background-color":"#fff"},attrs:{"line-width":2},model:{value:t.tabIndex,callback:function(s){t.tabIndex=s},expression:"tabIndex"}},[e("vux-tab-item",[t._v("已发信息")]),t._v(" "),e("vux-tab-item",[t._v("编写信息")]),t._v(" "),e("vux-tab-item",[t._v("系统信息")])],1),t._v(" "),e("div",{staticClass:"tab-content"},[e("transition-group",{attrs:{name:t.animationTab}},[0===t.tabIndex?e("div",{key:"box-"+t.tabIndex,staticClass:"animation-box"},[t.userNoMore&&0===t.userMessage.length?e("div",{staticClass:"no-data"},[e("img",{staticClass:"img",attrs:{src:"/m/static/img/no-data.png?v=2019-05-14T17:18:40",alt:""}}),t._v(" "),e("p",{staticClass:"info"},[t._v("暂无信息")])]):e("cube-scroll",{ref:"user-scroll",staticClass:"list",attrs:{options:t.options},on:{"pulling-down":t.onPullingDownUser,"pulling-up":t.onPullingUpUser}},[e("vux-group",{staticClass:"msg-list"},t._l(t.userMessage,function(s,a){return e("vux-cell-box",{key:s.id+"_"+a,attrs:{"is-link":""}},[e("div",{class:{"msg-item":!0,ok:s.received&&s.received.length},on:{click:function(e){t.data=s}}},[e("div",{staticClass:"flex"},[s.received&&s.received.length?e("span",{staticClass:"fa fa-fw fa-envelope-open"}):e("span",{staticClass:"fa fa-fw fa-envelope"}),t._v(" "),e("span",{staticClass:"title flex-1"},[t._v("\n                          "+t._s(s.received&&s.received.length?"站长已回复":"站长未回复")+"\n                        ")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.dayJs.unix(s.updated_at).format("YYYY-MM-DD HH:mm:ss")))])]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(s.content))])])])}),1)],1)],1):t._e(),t._v(" "),1===t.tabIndex?e("div",{key:"box-"+t.tabIndex,staticClass:"animation-box"},[e("div",{staticClass:"edit"},[e("vux-textarea",{attrs:{placeholder:"请输入您的问题,我们会第一时间回复。谢谢",rows:10},model:{value:t.text,callback:function(s){t.text=s},expression:"text"}}),t._v(" "),e("vux-button",{attrs:{type:"primary"},nativeOn:{click:function(s){return t.onSubmit(s)}}},[t._v("提交")])],1)]):t._e(),t._v(" "),2===t.tabIndex?e("div",{key:"box-"+t.tabIndex,staticClass:"animation-box"},[t.systemNoMore&&0===t.systemMessage.length?e("div",{staticClass:"no-data"},[e("img",{staticClass:"img",attrs:{src:"/static/img/no-data.png",alt:""}}),t._v(" "),e("p",{staticClass:"info"},[t._v("暂无信息")])]):e("cube-scroll",{ref:"system-scroll",staticClass:"list",attrs:{options:t.options},on:{"pulling-down":t.onPullingDownSystem,"pulling-up":t.onPullingUpSystem}},[e("vux-group",{staticClass:"msg-list"},t._l(t.systemMessage,function(s,a){return e("vux-cell-box",{key:s.id+"_"+a,attrs:{"is-link":""}},[e("div",{class:{"msg-item":!0,ok:s.received&&s.received.length},on:{click:function(e){t.data=s}}},[e("div",{staticClass:"flex"},[s.received&&s.received.length?e("span",{staticClass:"fa fa-fw fa-envelope-open"}):e("span",{staticClass:"fa fa-fw fa-envelope"}),t._v(" "),e("span",{staticClass:"title flex-1"},[t._v(t._s(s.title))]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.dayJs.unix(s.updated_at).format("YYYY-MM-DD HH:mm:ss")))])]),t._v(" "),e("p",{staticClass:"content"},[t._v(t._s(s.content))])])])}),1)],1)],1):t._e()])],1)],1)])],1)],1)},staticRenderFns:[]};s.a=a}});