webpackJsonp([20],{"/Zzn":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7wN4"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var o=n("QFGW");var r=function(t){n("0J/H")},l=n("VU/8")(s.a,o.a,!1,r,"data-v-4aea31e6",null);e.default=l.exports},"0J/H":function(t,e){},"7wN4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("6cYu"),s=o(n("CNQh")),i=o(n("qhTv"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={mixins:[i.default],name:"Result",components:{ViewPage:a.ViewPage,XButton:s.default,TitleHeader:a.TitleHeader},data:function(){return{refund:!1,list:[],total_amount:{}}},methods:{onResult:function(){var t=this;this.$store.dispatch("user/refund").then(function(e){200===e.code?(t.refund=!0,t.list=e.data.list,t.total_amount=e.data.total_amount):t.toastText(e.message,window.TOAST_POSITION.TOP)})}}}},"8Ohp":function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"weui-btn",class:t.classes,style:t.buttonStyle,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?n("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]};e.a=a},CNQh:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("OfSd"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var o=n("8Ohp");var r=function(t){n("mQKo")},l=n("VU/8")(s.a,o.a,!1,r,null,null);e.default=l.exports},OfSd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("oVe1");e.default={name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object],gradients:{type:Array,validator:function(t){return 2===t.length}}},methods:{onClick:function(){!this.disabled&&(0,a.go)(this.link,this.$router)}},computed:{noBorder:function(){return Array.isArray(this.gradients)},buttonStyle:function(){if(this.gradients)return{background:"linear-gradient(90deg, "+this.gradients[0]+", "+this.gradients[1]+")",color:"#FFFFFF"}},classes:function(){return[{"weui-btn_disabled":!this.plain&&this.disabled,"weui-btn_plain-disabled":this.plain&&this.disabled,"weui-btn_mini":this.mini,"vux-x-button-no-border":this.noBorder},this.plain?"":"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}},QFGW:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view-page",{staticClass:"result"},[n("title-header",{attrs:{slot:"header",title:t.$route.meta.title||"实时返水"},slot:"header"}),t._v(" "),t.refund?t._e():n("div",{staticClass:"body",attrs:{slot:"content"},slot:"content"},[n("img",{staticClass:"img",attrs:{src:"/m/static/img/user/honest.png?v=2019-05-14T20:08:03",alt:""}}),t._v(" "),n("div",{staticClass:"btn-box"},[n("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.onResult(e)}}},[t._v("一键返水")])],1),t._v(" "),n("p",{staticClass:"info"},[t._v("\n      所有平台返水都是按美东时间计算,会员可随时返水。如会员未自行返水,系统每天将自动为您返水。由于数据同步有延迟,请下注后30分钟左右再来返水！\n    ")])]),t._v(" "),t.refund&&0===t.list.length?n("div",{staticClass:"body",attrs:{slot:"content"},slot:"content"},[n("img",{staticClass:"img-no-data",attrs:{src:"/static/img/no-data.png",alt:""}}),t._v(" "),n("p",{staticClass:"info-no-data"},[t._v("暂无返水记录")])]):t._e(),t._v(" "),t.refund&&t.list.length>0?n("div",{staticClass:"honest-content",attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"main-title"},[n("span",[t._v("游戏类型")]),t._v(" "),n("span",[t._v("有效投注")]),t._v(" "),n("span",[t._v("返水金额")]),t._v(" "),n("span",[t._v("返水比例")])]),t._v(" "),n("div",{ref:"honestContent",staticClass:"main-content"},t._l(t.list,function(e,a){return n("div",{key:a,staticClass:"main-row"},[n("span",[t._v(t._s(e.platformName))]),t._v(" "),n("span",[t._v(t._s(e.validBetAmount))]),t._v(" "),n("span",[t._v(t._s(e.amount))]),t._v(" "),n("span",[t._v(t._s(e.point)+"%")])])}),0),t._v(" "),n("div",{staticClass:"total-refund"},[n("div",{staticClass:"left"},[n("span",[t._v("有效投注")]),t._v(" "),n("span",[t._v("￥"+t._s(t.total_amount.validBetAmount))])]),t._v(" "),n("div",{staticClass:"right"},[n("span",[t._v("总返水")]),t._v(" "),n("span",[t._v("￥"+t._s(t.total_amount.amount))])])])]):t._e()],1)},staticRenderFns:[]};e.a=a},mQKo:function(t,e){},oVe1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.go=function(t,e){if(/^javas/.test(t)||!t)return;"object"==typeof t||e&&"string"==typeof t&&!/http/.test(t)?"object"==typeof t&&!0===t.replace?e.replace(t):"BACK"===t?e.go(-1):e.push(t):window.location.href=t},e.getUrl=function(t,e){if(e&&!e._history&&"string"==typeof t&&!/http/.test(t))return"#!"+t;return t&&"object"!=typeof t?t:"javascript:void(0);"}}});