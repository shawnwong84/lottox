webpackJsonp([15],{"+Dfs":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=u(s("kdB6")),a=u(s("hR14")),n=u(s("Juq7")),o=u(s("zo7E")),l=s("6cYu"),r=u(s("qhTv")),c=u(s("js4u"));function u(t){return t&&t.__esModule?t:{default:t}}e.default={mixins:[r.default,c.default],name:"DPC",components:{LotteryRightMenu:l.LotteryRightMenu,LotteryLeftMenu:l.LotteryLeftMenu,LotteryResult:i.default,LotteryTimer:a.default,LotteryBallHistory:o.default,LotteryBetInput:n.default},data:function(){return{showMore:!1,keyHeight:"69.4444444vw",keyShow:!1,leftMenuList:[],leftMenuView:null,showLeftMenu:!1,showRightMenu:!1,result:null,targetTabIndex:0,playList:[],radioShow:!1,scrollerHeight:window.document.body.offsetHeight,headerHeight:0,bottomHeight:50,targetCode:[],showInput:!1,inputOpt:{count:0,money:"",moneyAll:0,unit:"元",multiple:1,rebate:0},showUnit:!1,showRebate:!1,showSubmit:!1,issue:"000",orderList:[],orderListView:null,submitted:!1,fengpan:!1,ballResult:null,EzTabIndex:0,EzCode:[],SzCode:[],wrapperAnimationName:""}},watch:{EzTabIndex:function(){this.clearSelected()},EzCode:{handler:function(){this.onSelectChange()},deep:!0},SzCode:{handler:function(){this.onSelectChange()},deep:!0},targetTabIndex:function(t,e){this.wrapperAnimationName=t>e?"slide-left":"slide-right",this.clearSelected()},targetCode:{handler:function(){this.onSelectChange()},deep:!0},"inputOpt.money":"onSelectChange","inputOpt.unit":"onSelectChange","inputOpt.multiple":"onSelectChange",showInput:function(){var t=this;this.inputOpt?this.$nextTick(function(){t.$refs["input-box"]&&(t.$refs["input-box"].$el?t.bottomHeight=t.$refs["input-box"].$el.getBoundingClientRect().height+50:t.bottomHeight=t.$refs["input-box"].getBoundingClientRect().height+50)}):this.bottomHeight=10,this.$nextTick(function(){t.showSubmit&&t.$refs["list-scroll"]&&t.$refs["list-scroll"].refresh()})},fengpan:function(t,e){t!==e&&(this.getResult(),this.clearSelected()),t||(this.opening=!0)},"$route.meta.id":"init"},mounted:function(){var t=this;this.targetTabIndex=0,this.$nextTick(function(){t.$refs["input-box"]&&(t.$refs["input-box"].$el?t.bottomHeight=t.$refs["input-box"].$el.getBoundingClientRect().height+50:t.bottomHeight=t.$refs["input-box"].getBoundingClientRect().height+50),t.scrollerHeight=Math.round(window.document.documentElement.offsetHeight-t.headerHeight)}),this.init()},beforeDestroy:function(){this.$stomp.off(this.$route.meta.id),this.$stomp.task&&window.clearIntervalByIframe(this.$stomp.task)},methods:{onSwiperLeft:function(){this.targetTabIndex+1<this.playList.length&&this.targetTabIndex++},onSwiperRight:function(){this.targetTabIndex>0&&this.targetTabIndex--},onFp:function(t){this.fengpan=t},init:function(){var t=this;this.getResult(!0),this.playList=[],this.$store.dispatch("lottery/getPlayWaySet",{id:this.$route.meta.id,callback:function(e){if(200===(e=e.data).code){t.onBallRefresh(),e.data.find(function(t){return"主盘势"===t.big}).items.forEach(function(t){switch(t.small){case"大":case"小":t.code[0].ball="佰",t.code[1].ball="拾",t.code[2].ball="个",t.code[3].ball="佰拾和尾数",t.code[4].ball="佰个和尾数",t.code[5].ball="拾个和尾数",t.code[6].ball="佰拾个和数",t.code[7].ball="佰拾个和尾数";break;case"单":case"双":t.code[0].ball="佰",t.code[1].ball="拾",t.code[2].ball="个",t.code[3].ball="佰拾",t.code[4].ball="佰个",t.code[5].ball="拾个",t.code[6].ball="佰拾个";break;case"质":case"合":t.code[0].ball="佰",t.code[1].ball="拾",t.code[2].ball="个",t.code[3].ball="佰拾和尾数",t.code[4].ball="佰个和尾数",t.code[5].ball="拾个和尾数",t.code[6].ball="佰拾个和尾数"}});for(var s,i,a,n=e.data.find(function(t){return"三字组合"===t.big}).items[0].code,o=n.find(function(t){return"XXX"===t.code}),l=n.find(function(t){return"XXO"===t.code}),r=n.find(function(t){return"XOY"===t.code}),c=e.data.find(function(t){return"三字组合"===t.big}).items[0].code=[],u=function(t,e,n,u){t=u<10?"00"+u:u<100?"0"+u:u.toString(),n=[t[0]+t[1]+t[2],t[0]+t[2]+t[1],t[1]+t[0]+t[2],t[1]+t[2]+t[0],t[2]+t[1]+t[0],t[2]+t[0]+t[1]],c.find(function(t){return n.includes(t.code)})||(t[0]===t[1]&&t[0]===t[2]?(e=JSON.copyObj(o)).name=e.code=t:t[0]===t[1]||t[0]===t[2]||t[1]===t[2]?(e=JSON.copyObj(l)).name=e.code=t:(e=JSON.copyObj(r)).name=e.code=t,c.push(e)),s=t,i=e,a=n},d=0;d<1e3;d++)u(s,i,a,d);t.playList=e.data}}}),this.showLeftMenu=this.showRightMenu=!1,this.clearSelected(),this.$store.dispatch("main/gameSort",{id:"30001",callback:function(e){e&&e[30001]&&(t.leftMenuList=e[30001])}}),"websocket"===this.$store.state.main.config.lotteryOpenUpdateModel?this.$stomp.on(this.$route.meta.id,function(e){t.result.lastissue=e.lastissue,t.result.lastluzhu=e.lastluzhu,t.result.lastresultInfo=e.lastresultInfo,t.getResult(),t.onBallRefresh()}):(this.$stomp.task&&window.clearInterval(this.$stomp.task),this.$stomp.task=window.setIntervalByIframe(function(){!t.fengpan&&t.opening?(console.log("open ... "),t.$store.dispatch("lottery/refreshResult",{id:t.$route.meta.id,callback:function(e){if(200===(e=e.data).code){if(t.fengpan=e.data.djs_next_kaipan>0,!t.fengpan){var s=parseInt(e.data.lastissue),i=parseInt(e.data.issue);i-s==1?(t.opening=!1,t.onBallRefresh()):i-s>1&&(t.opening=!0)}t.issue=e.data.issue,t.result=e.data}else t.result=null,t.fengpan=!0}})):console.log("no something ... ")},5e3))},onShowSubmit:function(){var t=this;document.body.scrollTop=0,setTimeout(function(){t.showSubmit=!0},600)},checkUser:function(){localStorage.token||(localStorage.lastPath=this.$route.fullPath,this.$router.push("/admin/login"))},onSubmit:function(){var t=this;if(this.inputOpt.moneyAll>0&&this.orderList.length&&!this.submitted){this.submitted=!0,this.showSubmit=!1;var e={lotteryId:this.$route.meta.id,issue:parseInt(this.issue),rebate:this.inputOpt.rebate,code:this.orderList.map(function(t){return{code:t.code,playway:t.playway,odds:t.odds,money:t.money,ball:t.ball,attach:""}})};this.$store.dispatch("lottery/submit",{data:e,callback:function(e,s){t.$store.state.main.loadingText="",t.submitted=!1,t.$store.state.main.loadingText="",t.submitted=!1,s||(200===e.status?200===(e=e.data).code?(t.toastText(e.data,window.TOAST_POSITION.DEFAULT),t.$store.dispatch("user/refreshBalance",{callback:null}),t.clearSelected()):e.message&&t.toastText(e.message,window.TOAST_POSITION.DEFAULT):console.log(e))}})}},clearSelected:function(){this.showSubmit=!1,this.chipEditing=!1,this.targetCode=[],this.orderList=[],this.EzCode=[],this.SzCode=[],this.inputOpt={count:0,money:"",moneyAll:0,unit:"元",multiple:1,rebate:0},this.radioShow=!1},onSelectChange:function(){var t=this;if(this.targetCode&&this.targetCode.length||"二字定位"===this.playList[this.targetTabIndex].big&&this.EzCode[0]&&this.EzCode[1]||"三字定位"===this.playList[this.targetTabIndex].big&&this.SzCode[0]&&this.SzCode[1]&&this.SzCode[2]){var e=[];if("二字定位"===this.playList[this.targetTabIndex].big?(this.inputOpt.count=1,e.push({ball:this.EzCode[0].ball+this.EzCode[1].ball,code:this.EzCode[0].code+this.EzCode[1].code,name:this.EzCode[0].name+this.EzCode[1].name,money:0,odds:this.EzCode[0].odds,playway:this.EzCode[0].playway})):"三字定位"===this.playList[this.targetTabIndex].big?(this.inputOpt.count=1,e.push({ball:this.SzCode[0].ball+this.SzCode[1].ball+this.SzCode[2].ball,code:this.SzCode[0].code+this.SzCode[1].code+this.SzCode[2].code,name:this.SzCode[0].name+this.SzCode[1].name+this.SzCode[2].name,money:0,odds:this.SzCode[0].odds,playway:this.SzCode[0].playway})):(this.inputOpt.count=this.targetCode.length,this.targetCode.forEach(function(t){e.push({ball:t.ball,code:t.code,name:t.name,money:0,odds:t.odds,playway:t.playway})})),this.inputOpt.money){var s=parseFloat(this.inputOpt.money);"角"===this.inputOpt.unit?s/=10:"分"===this.inputOpt.unit&&(s/=100),this.inputOpt.moneyAll=s*this.inputOpt.count,e.forEach(function(t){t.money=s})}else this.inputOpt.moneyAll=0;this.inputOpt.multiple>1?(this.inputOpt.moneyAll*=this.inputOpt.multiple,e.forEach(function(e){e.money*=t.inputOpt.multiple})):this.inputOpt.multiple<1&&(this.inputOpt.multiple=1),this.inputOpt.count&&this.checkUser(),this.showInput=!0,this.orderList=e}else this.showInput=!1,this.orderList=[]}}}},"+O36":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l(s("8FtN")),a=l(s("GyB/")),n=l(s("qhTv")),o=l(s("EH9D"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={mixins:[n.default],name:"LotteryBallHistory",components:{BallHistory:o.default},props:{itemSize:{type:Number,default:.34},ballResult:{type:Object,default:null}},data:function(){return{num:0,isNum:!0,picker:null,typeIndex:0,ballScroller:null,maxLen:8,ballList:[]}},watch:{isNum:function(){this.ballList=this.getBallForm(),this.$emit("is-num-change"),this.toEnd()},num:function(){this.ballList=this.getBallForm(),this.$emit("is-num-change"),this.toEnd()},ballResult:function(){this.ballList=this.getBallForm(),this.$emit("is-num-change"),this.toEnd()},typeIndex:function(){this.ballList=this.getBallForm(),this.$emit("is-num-change"),this.toEnd()},"$route.meta.id":function(){var t=this;setTimeout(function(){t.onRefresh()},600)}},mounted:function(){this.ballList=this.getBallForm(),this.$emit("is-num-change"),this.toEnd()},computed:{ballStyle:function(){return{height:this.itemSize-.04+"rem",width:this.itemSize-.04+"rem","font-size":this.itemSize/1.8+"rem","line-height":this.itemSize+"rem","background-size":this.itemSize-.02+"rem"}},getBalls:function(){var t=this;return(this.ballResult?this.ballResult.list:[]).map(function(e,s){return{text:"第"+t.chinaNum[s+1]+"球",value:s}})},getList:function(){return this.ballResult?this.ballResult.list[this.num]:[]}},methods:{toEnd:function(){var t=this;this.$nextTick(function(){t.$refs.scroll&&t.$refs.scroll.scroll&&(t.$refs.scroll.refresh(),t.$refs.scroll.scrollTo(t.$refs.scroll.scroll.maxScrollX,0,0))})},getBallForm:function(){var t=this;if(this.$nextTick(function(){t.ballScroller&&(t.ballScroller.scrollTo(0,0,0),t.ballScroller.refresh())}),this.ballResult){var e=[],s=null;this.getList.list[this.typeIndex].list.forEach(function(t){s&&s.val===t.ball?s.count++:(s={val:t.ball,count:1},e.push(s))}),e.reverse();for(var i=[],a=[],n=0;n<e.length;n++)i.push([]);e.forEach(function(t,e){for(var s=0;s<t.count;s++)i[e].push(t.val)}),i.forEach(function(e){return a.push(e.splice(0,t.maxLen))}),i.forEach(function(e,s){if(e.length){for(var i=t.maxLen-1,n=i;n>0;n--)if(!a[s][n]){i=n;break}for(var o=0;o<e.length;o++)a[s+o]||(a[s+o]=[]),a[s+o][i]=e[o]}}),a.push([]),a.push([]);var o=Math.floor(7.5/this.itemSize),l=a.length;if(l<o)for(var r=0;r<o-l;r++)a.push([]);return a}return[]},onTabClick:function(t){var e=this;t?this.isNum?(this.picker?this.picker.setData([this.getBalls],[this.num]):this.picker=this.$createPicker({data:[this.getBalls],onSelect:function(t,s){e.num=s[0]}}),this.picker.show()):this.isNum=!0:this.isNum=!1},getMap:function(t){if("object"===(void 0===t?"undefined":(0,a.default)(t))){var e=(0,i.default)(t)[0];return{key:e,val:t[e]}}return{key:"",val:""}}}}},B2Ii:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("+Dfs"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var o=s("dbH5"),l=s("VU/8")(a.a,o.a,!1,null,null,null);e.default=l.exports},F23h:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=s("qhTv"),n=(i=a)&&i.__esModule?i:{default:i};e.default={mixins:[n.default],name:"LotteryResult",props:{result:{type:Object,default:null},showMore:{type:Boolean,default:!1},fp:{type:Boolean,default:!1}},computed:{showMoreModal:{get:function(){return this.showMore},set:function(t){this.$emit("update:showMore",t)}}},watch:{result:function(t,e){if(t){var s=parseInt(t.issue)-parseInt(t.lastissue);this.opening=!!(t.djs_next_kaipan&&1===s||2===s),this.opening||(this.numArr=t.lastresultInfo.split(",")),this.onRefresh(t&&!e)}},"$route.meta.id":function(){var t=this;setTimeout(function(){t.onRefresh(!0)},600)},showMoreModal:function(){this.showMoreModal&&this.$emit("on-show-more")}},data:function(){return{results:[],numArr:[1,2,3],opening:!1,task:null}},created:function(){var t=this;this.task=window.setInterval(function(){(t.opening||t.fp)&&(t.numArr=[Math.floor(100*Math.random())%9+1,Math.floor(100*Math.random())%9+1,Math.floor(100*Math.random())%9+1])},250)},beforeDestroy:function(){this.task&&window.clearInterval(this.task)},methods:{onRefresh:function(t){var e=this;this.$store.dispatch("lottery/getTrend",{data:{status:t,lotteryId:this.$route.meta.id,pageSize:10},callback:function(t){e.loading=!1,200===(t=t.data).code?e.results=t.data.data.list:e.results=[]}})}}}},QOqB:function(t,e){},dbH5:function(t,e,s){"use strict";var i={render:function(){var t=this,e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"view-page"},[i("lottery-left-menu",{staticClass:"drawer-box",attrs:{show:e.showLeftMenu,list:e.leftMenuList},on:{"update:show":function(t){e.showLeftMenu=t}}}),e._v(" "),i("lottery-right-menu",{staticClass:"drawer-box",attrs:{show:e.showRightMenu,"refresh-count":e.refreshCount},on:{"update:show":function(t){e.showRightMenu=t},"update:refreshCount":function(t){e.refreshCount=t},"update:refresh-count":function(t){e.refreshCount=t}}}),e._v(" "),i("div",{directives:[{name:"hammer",rawName:"v-hammer.swipedown",value:function(){t.showMore=!0},expression:"() => {this.showMore=true}",modifiers:{swipedown:!0}},{name:"hammer",rawName:"v-hammer.swipeup",value:function(){t.showMore=!1},expression:"() => {this.showMore=false}",modifiers:{swipeup:!0}}],ref:"header-box",staticClass:"header-box"},[i("div",{directives:[{name:"hammer",rawName:"v-hammer.swipeleft",value:function(){t.showRightMenu=!0},expression:"() => {this.showRightMenu=true}",modifiers:{swipeleft:!0}},{name:"hammer",rawName:"v-hammer.swiperight",value:function(){t.showLeftMenu=!0},expression:"() => {this.showLeftMenu=true}",modifiers:{swiperight:!0}}],staticStyle:{width:"100%"}},[i("div",{directives:[{name:"no-touch-move",rawName:"v-no-touch-move"}],staticClass:"lottery-header"},[i("div",{staticClass:"header-box"},[i("div",{staticClass:"lottery-name clear-fix"},[i("span",{staticClass:"name f-l",on:{click:function(t){e.showLeftMenu=!0}}},[e._v(e._s(e.$route.meta.name))]),e._v(" "),i("i",{staticClass:"fa fa-fw fa-angle-right icon f-l"})]),e._v(" "),e.$store.state.user.userInfo?i("span",{staticClass:"balance"},[i("span",{staticClass:"rmb"},[e._v("¥")]),e._v(":"+e._s(e.$store.state.user.userInfo.balance))]):e._e(),e._v(" "),i("span",{staticClass:"header-menu-icon",on:{click:function(t){e.showRightMenu=!0}}})])]),e._v(" "),i("lottery-result",{directives:[{name:"no-touch-move",rawName:"v-no-touch-move"}],attrs:{result:e.result,"show-more":e.showMore,fp:e.fengpan},on:{"on-show-more":function(t){e.radioShow=!1},"update:showMore":function(t){e.showMore=t},"update:show-more":function(t){e.showMore=t}}}),e._v(" "),i("lottery-timer",{attrs:{result:e.result},on:{"on-fp":e.onFp}})],1),e._v(" "),i("div",{staticClass:"tab-box"},[i("vux-tab",{ref:"play-tab",staticClass:"play-way-tab",attrs:{"line-width":0},model:{value:e.targetTabIndex,callback:function(t){e.targetTabIndex=t},expression:"targetTabIndex"}},e._l(e.playList,function(t,s){return i("vux-tab-item",{key:t.big+s,staticClass:"vux-tab-item"},[i("span",{staticClass:"item"},[e._v(e._s(t&&t.big))])])}),1),e._v(" "),i("span",{staticClass:"icon"},[i("i",{class:"icon iconfont h5-icon-qushi-moreup"+(e.radioShow?"":" fa-rotate-180"),on:{click:function(t){e.radioShow=!e.radioShow}}})]),e._v(" "),i("div",{staticClass:"radio-box",staticStyle:{overflow:"hidden"}},[i("transition",{attrs:{name:"slide-down"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.radioShow,expression:"radioShow"}],staticClass:"radio-transition-box"},[i("vux-checker",{attrs:{"default-item-class":"default-item-class","selected-item-class":"selected-item-class","radio-required":""},model:{value:e.targetTabIndex,callback:function(t){e.targetTabIndex=t},expression:"targetTabIndex"}},e._l(e.playList,function(t,s){return i("vux-checker-item",{key:t.big+s,attrs:{value:s}},[i("span",{staticClass:"item-content",on:{click:function(t){e.radioShow=!1}}},[e._v(e._s(t.big))])])}),1)],1)])],1)],1)]),e._v(" "),i("div",{staticClass:"wrapper",style:{height:e.scrollerHeight+"px","padding-bottom":"0"}},[i("transition",{attrs:{name:e.wrapperAnimationName}},[i("div",{key:"wrapper-"+e.targetTabIndex,ref:"content-box",staticStyle:{position:"absolute",left:"0",top:"0",width:"100%",height:"100%","box-sizing":"border-box"}},[i("cube-scroll",{ref:"bet-scroll",attrs:{options:{eventPassthrough:"horizontal"}}},[e.playList.length&&e.playList[e.targetTabIndex]?i("div",{directives:[{name:"hammer",rawName:"v-hammer.swipeleft",value:e.onSwiperLeft,expression:"onSwiperLeft",modifiers:{swipeleft:!0}},{name:"hammer",rawName:"v-hammer.swiperight",value:e.onSwiperRight,expression:"onSwiperRight",modifiers:{swiperight:!0}}]},["二字定位"===e.playList[e.targetTabIndex].big?i("vux-tab",{ref:"play-tab",model:{value:e.EzTabIndex,callback:function(t){e.EzTabIndex=t},expression:"EzTabIndex"}},e._l(e.playList[e.targetTabIndex].items,function(t,s){return i("vux-tab-item",{key:t.small+"_"+s},[e._v("\n                "+e._s(t.small)+"\n              ")])}),1):e._e(),e._v(" "),e._l(2,function(t){return"二字定位"===e.playList[e.targetTabIndex].big?i("vux-card",{key:t},[i("h4",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[e._v("\n                "+e._s(e.playList[e.targetTabIndex].items[e.EzTabIndex].small[t-1]))]),e._v(" "),i("vux-checker",{staticClass:"small-codes clear-fix",attrs:{slot:"content",type:"radio","default-item-class":"code-default","selected-item-class":"code-selected"},slot:"content",model:{value:e.EzCode[t-1],callback:function(s){e.$set(e.EzCode,t-1,s)},expression:"EzCode[i-1]"}},e._l(e.playList[e.targetTabIndex].items[e.EzTabIndex].code,function(s,a){return(1===t?a<10:a>9)?i("vux-checker-item",{key:s.playway+"_"+a,staticClass:"code-item code-item-circle",attrs:{value:Object.assign({ball:e.playList[e.targetTabIndex].items[e.EzTabIndex].small[t-1]},s)}},[i("span",{staticClass:"code-name"},[e._v(e._s(s.name))]),e._v(" "),i("span",{staticClass:"code-odds"},[e._v(e._s(s.odds))])]):e._e()}),1)],1):e._e()}),e._v(" "),e._l(["佰","拾","个"],function(t,s){return"三字定位"===e.playList[e.targetTabIndex].big?i("vux-card",{key:t+s},[i("h4",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[e._v(e._s(t))]),e._v(" "),i("vux-checker",{staticClass:"small-codes clear-fix",attrs:{slot:"content",type:"radio","default-item-class":"code-default","selected-item-class":"code-selected"},slot:"content",model:{value:e.SzCode[s],callback:function(t){e.$set(e.SzCode,s,t)},expression:"SzCode[i]"}},e._l(e.playList[e.targetTabIndex].items[e.EzTabIndex].code,function(a,n){return(1===s?n<10:2===s?n>9&&n<20:n>19)?i("vux-checker-item",{key:a.playway+"_"+n,staticClass:"code-item code-item-circle",attrs:{value:Object.assign({ball:t},a)}},[i("span",{staticClass:"code-name"},[e._v(e._s(a.name))]),e._v(" "),i("span",{staticClass:"code-odds"},[e._v(e._s(a.odds))])]):e._e()}),1)],1):e._e()}),e._v(" "),e._l(e.playList[e.targetTabIndex].items,function(t,s){return["二字定位","三字定位"].includes(e.playList[e.targetTabIndex].big)?e._e():i("vux-card",{key:t.small+"_"+s},[i("h4",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[e._v(e._s(t.small||e.playList[e.targetTabIndex].big))]),e._v(" "),"整合"===e.playList[e.targetTabIndex].big?i("vux-checker",{staticClass:"small-codes clear-fix",attrs:{slot:"content",type:"checkbox","default-item-class":"code-default","selected-item-class":"code-selected"},slot:"content",model:{value:e.targetCode,callback:function(t){e.targetCode=t},expression:"targetCode"}},e._l(t.code,function(s,a){return i("vux-checker-item",{key:s.playway+"_"+a,class:{"code-item":!0,"code-item-circle":["独胆","跨度"].includes(t.small),"code-item-5":["3连"].includes(t.small)},attrs:{value:Object.assign({ball:t.small},s)}},[i("span",{staticClass:"code-name"},[e._v(e._s(s.name))]),e._v(" "),i("span",{staticClass:"code-odds"},[e._v(e._s(s.odds))])])}),1):"主盘势"===e.playList[e.targetTabIndex].big?i("vux-checker",{staticClass:"small-codes clear-fix",attrs:{slot:"content",type:"checkbox","default-item-class":"code-default","selected-item-class":"code-selected"},slot:"content",model:{value:e.targetCode,callback:function(t){e.targetCode=t},expression:"targetCode"}},e._l(t.code,function(s,a){return i("vux-checker-item",{key:s.playway+"_"+a,staticClass:"code-item code-item-2",attrs:{value:Object.assign({ball:t.small},s)}},[i("span",{staticClass:"code-name"},[e._v(e._s(s.ball))]),e._v(" "),i("span",{staticClass:"code-odds"},[e._v(e._s(s.odds))])])}),1):i("vux-checker",{staticClass:"small-codes clear-fix",attrs:{slot:"content",type:"checkbox","default-item-class":"code-default","selected-item-class":"code-selected"},slot:"content",model:{value:e.targetCode,callback:function(t){e.targetCode=t},expression:"targetCode"}},e._l(t.code,function(s,a){return i("vux-checker-item",{key:s.playway+"_"+a,class:{"code-item":!0,"code-item-circle":/[\d]+/.test(s.name)},attrs:{value:Object.assign({ball:t.small||e.playList[e.targetTabIndex].big},s)}},[i("span",{class:{"code-name":!0,"code-name-2":["二字组合","三字组合"].includes(e.playList[e.targetTabIndex].big),"code-name-3":["二字和数","三字和数"].includes(e.playList[e.targetTabIndex].big)},style:s.name.length>3?"font-size: 0.3rem !important;":""},[e._v(e._s(s.name))]),e._v(" "),i("span",{staticClass:"code-odds"},[e._v(e._s(s.odds))])])}),1)],1)})],2):e._e(),e._v(" "),i("lottery-ball-history",{key:"ball-"+e.targetTabIndex,attrs:{"ball-result":e.ballResult}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showInput,expression:"showInput"}],staticClass:"bottom",style:{width:"100%",height:e.bottomHeight+"px"}})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.fengpan,expression:"fengpan"}],staticClass:"fengpan-modal"}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.fengpan,expression:"fengpan"}],staticClass:"feng-pan-text"},[e._v("已封盘")])],1)])],1),e._v(" "),"chip"===e.siteConfig.betInputTheme?i("lottery-bet-input",{ref:"input-box",attrs:{"show-input":e.showInput},on:{"update:showInput":function(t){e.showInput=t},"update:show-input":function(t){e.showInput=t},submit:e.onShowSubmit,clear:e.clearSelected},model:{value:e.inputOpt,callback:function(t){e.inputOpt=t},expression:"inputOpt"}}):i("transition",{attrs:{name:"slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showInput,expression:"showInput"}],ref:"input-box",staticClass:"input-box lottery-bet-input-box",style:{bottom:e.keyShow?e.keyHeight:"0"}},[i("div",{staticClass:"select-row"},[i("div",{staticClass:"count-money"},[i("span",{staticClass:"count"},[e._v("已选"),i("span",{staticClass:"num"},[e._v(e._s(e.inputOpt.count))]),e._v("注")]),e._v(" "),i("span",{staticClass:"money"},[e._v("共"),i("span",{staticClass:"num"},[i("span",{staticClass:"rmb"},[e._v("¥")]),e._v(e._s(e.inputOpt.moneyAll))])])]),e._v(" "),i("div",{staticClass:"unit",on:{click:function(t){e.showUnit=!0}}},[e._v(e._s(e.inputOpt.unit))]),e._v(" "),i("div",{staticClass:"rebate",on:{click:function(t){e.showRebate=!0}}},[i("span",{staticClass:"rebate-num"},[e._v(e._s(e.inputOpt.rebate)+"%")]),e._v(" "),i("span",{staticClass:"icon"})]),e._v(" "),i("div",{staticClass:"multiple"},[i("span",{staticClass:"icon",on:{click:function(t){e.inputOpt.multiple>1?e.inputOpt.multiple--:e.inputOpt.multiple}}},[e._v("－")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.inputOpt.multiple,expression:"inputOpt.multiple"}],staticClass:"input",attrs:{type:"number",readonly:""},domProps:{value:e.inputOpt.multiple},on:{input:function(t){t.target.composing||e.$set(e.inputOpt,"multiple",t.target.value)}}}),e._v(" "),i("span",{staticClass:"icon",on:{click:function(t){e.inputOpt.multiple++}}},[e._v("＋")])])]),e._v(" "),i("div",{staticClass:"input-row"},[i("span",{staticClass:"clean",on:{click:e.clearSelected}},[e._v("清除")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.inputOpt.money,expression:"inputOpt.money"}],ref:"money-input",staticClass:"input",attrs:{type:"number",placeholder:"输入金额"},domProps:{value:e.inputOpt.money},on:{input:function(t){t.target.composing||e.$set(e.inputOpt,"money",t.target.value)}}}),e._v(" "),i("button",{staticClass:"submit",attrs:{type:"button",disabled:!(this.inputOpt.moneyAll>0)},on:{click:e.onShowSubmit}},[e._v("\n          立即投注\n        ")])])])]),e._v(" "),i("cube-picker",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{data:[[{text:"元",value:"元"},{text:"角",value:"角"},{text:"分",value:"分"}]]},on:{select:function(t){e.inputOpt.unit=t[0]}},model:{value:e.showUnit,callback:function(t){e.showUnit=t},expression:"showUnit"}}),e._v(" "),i("cube-picker",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{data:[e.rebateList],select:"val => {inputOpt.rebate=val[0]}"},model:{value:e.showRebate,callback:function(t){e.showRebate=t},expression:"showRebate"}}),e._v(" "),i("vux-dialog",{attrs:{show:e.showSubmit,"dialog-style":{"max-width":"6.6rem",width:"6.6rem","border-radius":"0.2rem"}},on:{"update:show":function(t){e.showSubmit=t}}},[i("div",{staticClass:"submit-header"},[i("span",{staticClass:"title"},[e._v("下注信息")]),e._v(" "),i("span",{staticClass:"issue"},[e._v("第 "+e._s(e.issue)+" 期")])]),e._v(" "),i("p",{staticClass:"all-info"},[e._v("\n      共计:"),i("span",{staticClass:"num"},[e._v(e._s(e.inputOpt.count))]),e._v("注,\n      下注金额"),i("span",{staticClass:"num"},[e._v(e._s(e.inputOpt.moneyAll))]),e._v("元\n    ")]),e._v(" "),i("div",{staticClass:"submit-content"},[i("cube-scroll",{ref:"list-scroll"},[i("ul",{staticClass:"scroller"},e._l(e.orderList,function(t,s){return i("li",{key:t.ball+t.code+s,staticClass:"order"},[i("span",{staticClass:"name"},[e._v(e._s(t.ball)+" - "+e._s(t.code))]),e._v(" "),i("span",{staticClass:"odds"},[e._v("赔率:"+e._s((t.odds*(100-e.inputOpt.rebate)/100).toFixed(2)))]),e._v(" "),i("span",{staticClass:"num"},[i("span",{staticClass:"rmb"},[e._v("¥")]),e._v(e._s(t.money))])])}),0)])],1),e._v(" "),i("div",{staticClass:"submit-footer"},[i("vux-button",{staticStyle:{margin:"0 0.1rem"},attrs:{type:"default","action-type":"button"},nativeOn:{click:function(t){e.showSubmit=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),i("vux-button",{staticStyle:{margin:"0 0.1rem"},attrs:{type:"primary","action-type":"button"},nativeOn:{click:function(t){return e.onSubmit(t)}}},[e._v("\n        确认\n      ")])],1)]),e._v(" "),i("vux-dialog",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{show:e.submitted}},[i("vux-loading",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{show:e.submitted,text:"下注中"}})],1)],1)},staticRenderFns:[]};e.a=i},hR14:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("t0U1"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var o=s("jZPU"),l=s("VU/8")(a.a,o.a,!1,null,null,null);e.default=l.exports},jZPU:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timer-50"},[s("p",{staticClass:"issue"},[t._v(t._s(t.result?t.result.issue.substr(4):"000")+"期投注")]),t._v(" "),t.fp?s("p",{staticClass:"time-box"},[t._v("封盘:封盘")]):s("p",{staticClass:"time-box"},[t._v("封盘:"),s("span",{staticClass:"time"},[t._v(t._s(t.timeStr))])])])},staticRenderFns:[]};e.a=i},kHfB:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result-50",on:{click:function(e){t.showMoreModal=!t.showMoreModal}}},[t.opening?s("p",{staticClass:"issue"},[t._v(t._s(t.result?(parseInt(t.result.lastissue)+1).substr(4):"000")+"期开奖号码")]):s("p",{staticClass:"issue"},[t._v(t._s(t.result?t.result.lastissue.substr(4):"000")+"期开奖号码")]),t._v(" "),s("ul",{staticClass:"list"},[t._l(t.numArr,function(e,i){return s("li",{key:e+"-"+i,staticClass:"num-item number-text"},[t._v(t._s(e)+"\n    ")])}),t._v(" "),s("li",{class:"icon iconfont h5-icon-qushi-moreup"+(t.showMoreModal?" active":"")})],2),t._v(" "),s("div",{staticClass:"more-box"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMoreModal,expression:"showMoreModal"}],staticClass:"modal-box"}),t._v(" "),s("div",{staticStyle:{overflow:"hidden"}},[s("transition",{attrs:{name:"slide-down"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMoreModal,expression:"showMoreModal"}]},[s("ul",{staticClass:"more-list"},[s("li",{staticClass:"row"},[s("span",{staticClass:"col col-issue"},[t._v("期数")]),t._v(" "),s("span",{staticClass:"col col-result"},[t._v("开奖号码")]),t._v(" "),s("span",{staticClass:"col col-info"},[t._v("和值")]),t._v(" "),s("span",{staticClass:"col col-info"},[t._v("跨度")]),t._v(" "),s("span",{staticClass:"col col-info"},[t._v("走势")])]),t._v(" "),t._l(t.results,function(e,i){return s("li",{key:e.issue+"_"+i,staticClass:"row"},[s("span",{staticClass:"col col-issue"},[t._v(t._s(e.issue.toString().substr(-3)))]),t._v(" "),s("span",{staticClass:"col col-result"},t._l(e.resultInfo.split(","),function(e,i){return s("i",{key:i,staticClass:"ball num"},[t._v(t._s(e))])}),0),t._v(" "),s("span",{staticClass:"col col-info"},[t._v(t._s(e.hz))]),t._v(" "),s("span",{staticClass:"col col-info"},[t._v(t._s(e.kd))]),t._v(" "),s("span",{staticClass:"col col-info"},[t._v(t._s(e.xt))])])})],2),t._v(" "),s("div",{staticClass:"more-button-box"},[s("button",{staticClass:"more-button",on:{click:function(e){return t.$router.push("/trend/"+t.$route.meta.id)}}},[s("i",{staticClass:"icon-trend icon iconfont h5-icon-H-qushi",staticStyle:{transform:"none"}}),t._v("\n              查看更多走势\n            ")])])])])],1)])])},staticRenderFns:[]};e.a=i},kdB6:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("F23h"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var o=s("kHfB");var l=function(t){s("QOqB")},r=s("VU/8")(a.a,o.a,!1,l,"data-v-216f714e",null);e.default=r.exports},"q3+A":function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.ballResult?s("vux-card",{staticClass:"lu-zhu-card"},[s("ul",{staticClass:"top-tab clear-fix",attrs:{slot:"header"},slot:"header"},[s("li",{class:{"top-tab-item":!0,active:t.isNum},on:{click:function(e){return t.onTabClick(!0)}}},[t._v("\n        第"+t._s(t.chinaNum[t.num+1])+"球\n        "),s("span",{staticClass:"icon-box"},[s("i",{staticClass:"icon iconfont h5-icon-qushi-moreup"})])]),t._v(" "),s("li",{class:{"top-tab-item":!0,active:!t.isNum},on:{click:function(e){return t.onTabClick(!1)}}},[t._v("\n        两面长龙\n      ")])]),t._v(" "),s("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isNum,expression:"isNum"}],staticClass:"num-ball"},[s("vux-tab",{staticClass:"play-way-nav",model:{value:t.typeIndex,callback:function(e){t.typeIndex=e},expression:"typeIndex"}},t._l(t.getList.list,function(e,i){return s("vux-tab-item",{key:e.title+i},[t._v(t._s(e.title))])}),1),t._v(" "),s("cube-scroll",{ref:"scroll",staticClass:"ball-form-scroll cube-scroll-content-horizontal",attrs:{direction:"horizontal"}},[s("ball-history",{attrs:{data:t.ballList,size:t.itemSize,rows:t.maxLen}})],1)],1),t._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:!t.isNum,expression:"!isNum"}],staticClass:"l-m-c-l"},t._l(t.ballResult?t.ballResult["double:"]:[],function(e,i){return s("li",{key:"i_"+i,staticClass:"item"},[s("span",{staticClass:"name"},[t._v(t._s(t.getMap(e).key))]),s("span",{staticClass:"number"},[t._v(t._s(t.getMap(e).val))])])}),0)])]):t._e()},staticRenderFns:[]};e.a=i},t0U1:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=s("qhTv"),n=(i=a)&&i.__esModule?i:{default:i};e.default={mixins:[n.default],name:"LotteryTimer",props:{result:{type:Object,default:null}},data:function(){return{time:NaN,task:null,refreshing:!1,fp:!1}},computed:{timeStr:function(){if(this.time<0)return"";if(this.time){var t=Math.floor(this.time/60/60),e=Math.floor(this.time%3600/60),s=this.time%60;return e=e>0?e:0,s=s>0?s:0,t?this.$VuxUtil.number.numberPad(t)+":"+this.$VuxUtil.number.numberPad(e)+":"+this.$VuxUtil.number.numberPad(s):this.$VuxUtil.number.numberPad(e)+":"+this.$VuxUtil.number.numberPad(s)}return"00:00"}},watch:{result:function(){this.result&&(this.result.djs_fengpan>0?(this.time=this.result.djs_fengpan,this.fp=!1):this.result.djs_next_kaipan>0?(this.time=this.result.djs_next_kaipan,this.fp=!0):this.removeTask(),this.$emit("on-fp",this.fp))}},mounted:function(){var t=this;this.removeTask(),this.task=window.setIntervalByIframe(function(){t.time>0?t.time--:0===t.time&&(t.fp=!t.fp,t.$emit("on-fp",t.fp),t.time=-1)},1e3)},methods:{removeTask:function(){this.task&&window.clearIntervalByIframe(this.task)}},beforeDestroy:function(){this.removeTask()}}},zo7E:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("+O36"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var o=s("q3+A"),l=s("VU/8")(a.a,o.a,!1,null,null,null);e.default=l.exports}});