webpackJsonp([47],{BiaM:function(t,s,e){"use strict";var i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"view-page"},[e("div",{ref:"header-box",staticClass:"user-header"},[e("div",{staticClass:"user-header-bg"},[e("p",{staticClass:"title"},[t._v("个人中心")]),t._v(" "),t.userInfo?e("div",{staticClass:"user-info",on:{click:function(s){return t.$router.push("/user/info")}}},[e("img",{staticClass:"user-img",attrs:{src:t.avatar,alt:"头像"}}),t._v(" "),e("div",{staticClass:"user-info-content"},[e("p",{staticClass:"user-name"},[t._v(t._s(t.userInfo?t.userInfo.userName:""))]),t._v(" "),e("p",{staticClass:"user-leave"},[e("span",{staticClass:"icon iconfont h5-icon-level-V1"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.userInfo?t.userInfo.levelName:""))])])])]):e("div",{staticClass:"login-box"},[e("button",{staticClass:"login-btn",on:{click:function(s){return t.$router.push("/admin/login")}}},[t._v("登录/注册")])]),t._v(" "),e("ul",{staticClass:"user-nav"},[e("li",{staticClass:"nav-item",on:{click:function(s){return t.$router.push(t.userInfo?"/user/message":"/admin/login")}}},[e("span",{staticClass:"icon iconfont h5-icon-my-message"}),t._v(" "),e("span",{staticClass:"lab"},[t._v("我的信息")])]),t._v(" "),e("li",{staticClass:"nav-item",on:{click:function(s){return t.$router.push(t.userInfo?"/save":"/admin/login")}}},[e("span",{staticClass:"icon iconfont h5-icon-my-deposit"}),t._v(" "),e("span",{staticClass:"lab"},[t._v("我要充值")])]),t._v(" "),e("li",{staticClass:"nav-item",on:{click:function(s){return t.$router.push(t.userInfo?"/take":"/admin/login")}}},[e("span",{staticClass:"icon iconfont h5-icon-my-draw"}),t._v(" "),e("span",{staticClass:"lab"},[t._v("我要取款")])])])])]),t._v(" "),e("cube-scroll",{ref:"scroll",staticClass:"scroller",style:{height:t.scrollHeight}},[e("div",{staticClass:"scroller-content-box"},[e("vux-group",{staticClass:"user-balance"},[t.userInfo&&t.userInfo.is_agency?e("div",{staticClass:"money-box"},[e("div",{staticClass:"item"},[e("span",{staticClass:"col icon iconfont h5-icon-tent-money"}),t._v(" "),e("div",{staticClass:"item-content"},[e("p",{staticClass:"col"},[t._v("帐号余额")]),t._v(" "),e("p",{staticClass:"col balance"},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.$VuxUtil.number.twoFloat(t.userInfo&&t.userInfo.balance||0)))])])]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"col icon iconfont h5-icon-tent-money"}),t._v(" "),e("div",{staticClass:"item-content"},[e("p",{staticClass:"col"},[t._v("代理收入")]),t._v(" "),e("p",{staticClass:"col balance"},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.$VuxUtil.number.twoFloat(t.userInfo.agencyInfo.balance||0)))])]),t._v(" "),e("span",{staticClass:"change",on:{click:function(s){return t.$router.push("/user/change-money")}}},[e("i",{staticClass:"fa fa-fw fa-exchange"}),t._v("\n              转帐\n            ")])])]):e("div",{staticClass:"clear-fix"},[e("span",{staticClass:"col icon iconfont h5-icon-tent-money"}),t._v(" "),e("span",{staticClass:"col"},[t._v("帐号余额")]),t._v(" "),e("span",{staticClass:"col balance",staticStyle:{"padding-top":"0 !important"}},[e("span",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.$VuxUtil.number.twoFloat(t.userInfo&&t.userInfo.balance||0))+"\n          ")])])]),t._v(" "),e("vux-group",{staticClass:"list"},[e("vux-cell",{attrs:{"is-link":"",link:t.userInfo?"/user/account":"/admin/login"}},[e("span",{staticClass:"icon iconfont h5-icon-tent-record",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),e("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("帐变记录")]),t._v(" "),e("span",{staticClass:"desc"},[t._v("查看存/取款、转帐记录")])]),t._v(" "),e("vux-cell",{attrs:{"is-link":"",link:t.userInfo?"/user/record":"/admin/login"}},[e("span",{staticClass:"icon iconfont h5-icon-bet-record",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),e("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("投注记录")]),t._v(" "),e("span",{staticClass:"desc"},[t._v("查看投注记录")])]),t._v(" "),e("vux-cell",{attrs:{"is-link":"",link:t.userInfo?"/user/result":"/admin/login"}},[e("span",{staticClass:"icon iconfont h5-icon-backwater",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),e("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("实时返水")]),t._v(" "),e("span",{staticClass:"desc"},[t._v("查看返水记录")])])],1),t._v(" "),e("vux-group",{staticClass:"list"},[e("vux-cell",{attrs:{"is-link":"",link:t.userInfo?"/user/report":"/admin/login"}},[e("span",{staticClass:"icon iconfont h5-icon-person_total1",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),e("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("个人报表")]),t._v(" "),e("span",{staticClass:"desc"},[t._v("个人总报表")])]),t._v(" "),t.userInfo&&t.userInfo.is_agency?e("vux-cell",{attrs:{"is-link":"",link:"/user/agency-center"}},[e("span",{staticClass:"icon iconfont h5-icon-acting-center",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),e("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("代理中心")]),t._v(" "),e("span",{staticClass:"desc"},[t._v("代理收益中心")])]):t._e(),t._v(" "),e("vux-cell",{attrs:{"is-link":"",link:t.userInfo?"/user/info":"/admin/login"}},[e("span",{staticClass:"icon iconfont h5-icon-personal-data",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),e("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("个人资料")]),t._v(" "),e("span",{staticClass:"desc"},[t._v("修改用户详细资料")])]),t._v(" "),e("vux-cell",{attrs:{"is-link":"",link:t.userInfo?"/user/edit/safety/dl":"/admin/login"}},[e("span",{staticClass:"icon iconfont h5-icon-account-safe",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),e("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("帐号安全")]),t._v(" "),e("span",{staticClass:"desc"},[t._v("设置用户密保问题")])])],1),t._v(" "),e("vux-group",{staticClass:"list"},[e("vux-cell",{staticClass:"my-cell",attrs:{"is-link":""}},[e("div",{staticClass:"cell-content",on:{click:t.onClear}},[e("span",{staticClass:"icon iconfont h5-icon-clear-cache"}),t._v(" "),e("span",{staticClass:"title"},[t._v("清除缓存")])])]),t._v(" "),e("vux-cell",{staticClass:"my-cell",attrs:{"is-link":""}},[e("div",{staticClass:"cell-content",on:{click:function(s){t.themePickerShow=!0}}},[e("span",{staticClass:"icon iconfont h5-icon-change-skin"}),t._v(" "),e("span",{staticClass:"title"},[t._v("一键换肤")])])]),t._v(" "),e("vux-cell",{attrs:{"is-link":"",link:"/about"}},[e("span",{staticClass:"icon iconfont h5-icon-about-us",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),e("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("关于我们")])])],1)],1)]),t._v(" "),e("vux-popup",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{position:"bottom","popup-style":{zIndex:5e3}},model:{value:t.themePickerShow,callback:function(s){t.themePickerShow=s},expression:"themePickerShow"}},t._l(t.themes,function(s){return e("div",{key:s.code,staticClass:"theme-list",on:{click:function(e){return t.onChangeTheme(s.code)}}},[e("span",{staticClass:"color icon iconfont h5-icon-change-skin",style:{color:s.color}}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.main.theme===s.code,expression:"$store.state.main.theme === theme.code"}],staticClass:"icon iconfont h5-icon-changeskin-icon theme-color"})])}),0)],1)},staticRenderFns:[]};s.a=i},L0dR:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i,n=e("qhTv"),a=(i=n)&&i.__esModule?i:{default:i};s.default={mixins:[a.default],name:"User",computed:{userInfo:function(){return this.$store.state.user.userInfo},avatar:function(){return this.userInfo?"/static/img/avatar/"+(this.userInfo.pic||"default.png"):"/static/img/user/head.png"},themes:function(){return window.siteConfig.themes}},data:function(){return{balance:0,themePickerShow:!1,scrollHeight:"100%"}},mounted:function(){var t=this;this.$refs["header-box"]?(this.scrollHeight=document.documentElement.clientHeight-this.$store.state.main.tabHeight-this.$refs["header-box"].offsetHeight+"px",this.$refs.scroll.refresh()):this.scrollHeight="100%",this.$nextTick(function(){t.$refs["header-box"]?(t.scrollHeight=document.documentElement.clientHeight-t.$store.state.main.tabHeight-t.$refs["header-box"].offsetHeight+"px",t.$refs.scroll.refresh()):t.scrollHeight="100%"})},updated:function(){this.$refs["header-box"]?(this.scrollHeight=document.documentElement.clientHeight-this.$store.state.main.tabHeight-this.$refs["header-box"].offsetHeight+"px",this.$refs.scroll.refresh()):this.scrollHeight="100%"},methods:{onClear:function(){var t=this;this.$vux.confirm.show({title:"清除缓存",onConfirm:function(){localStorage.clear(),t.toastText("清除成功",window.TOAST_POSITION.TOP),setTimeout(function(){window.location.reload()},2e3)}})},onChangeTheme:function(t){this.$store.commit("main/setTheme",t),this.themePickerShow=!1}}}},LErc:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("L0dR"),n=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(s,t,function(){return i[t]})}(a);var o=e("BiaM");var c=function(t){e("RoG3")},l=e("VU/8")(n.a,o.a,!1,c,"data-v-71e16e4e",null);s.default=l.exports},RoG3:function(t,s){}});