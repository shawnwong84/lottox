webpackJsonp([29],{"6Z8G":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),i=n.n(a),r=n("RRo+"),l=n.n(r),d=n("exGp"),o=n.n(d),s={data:function(){return{isLoading:!1,periodsNum:20,titleLeft:["和值","大小","单双","尾大小","上下盘","奇偶盘"],canvas:{left:0,top:0,width:0,height:0,color:"#029BAE"},checkDatas:[{name:"折线显示",staue:!0},{name:"遗漏显示",staue:!0}],issueDatas:{name:"最近20期"},drawDeclList:[],allDatas:{},newDatas:{leftDatas:{newIssue:"",newResult:"",newSingle:""}},lotteryId:""}},methods:{drawPicFc:function(t,e,n,a){return!1},drawCanvasPic:function(){var p=this;this.drawDeclList.forEach(function(t,e){p.canvas.color=e%2==0?"#029BAE":"#FF5151";var i=p.$refs["trendCanvas"+(e+1)],n=p.$refs["postBall"+(e+1)],l=[],o=30,s=30;i[0].style.display="none",t.list.forEach(function(t,n){t.ballList.forEach(function(t,e){t.row=n+3,t.posit=e+1,t.staue&&l.push(t)})}),l.forEach(function(t,e){var n="";if(0<e){if(n=l[e].posit-l[e-1].posit,p.canvas.width=Math.abs(n)*s,p.canvas.height=o,i[e].width=p.canvas.width,i[e].height=p.canvas.height,0<n){p.canvas.top=(t.row-1)*o-15,i[e].style.top=p.canvas.top+"px",p.canvas.left=(t.posit-1)*s-p.canvas.width+15,i[e].style.left=p.canvas.left+"px";var a=i[e].getContext("2d");a.beginPath(),a.strokeStyle=p.canvas.color,a.lineWidth=2,a.moveTo(0,0),a.lineTo(p.canvas.width,p.canvas.height),a.stroke()}if(n<0){p.canvas.top=(t.row-1)*o-15,i[e].style.top=p.canvas.top+"px",p.canvas.left=(t.posit-1)*s+15,i[e].style.left=p.canvas.left+"px";var r=i[e].getContext("2d");r.beginPath(),r.strokeStyle=p.canvas.color,r.lineWidth=2,r.moveTo(0,p.canvas.height),r.lineTo(p.canvas.width,0),r.stroke()}if(0==n){p.canvas.height=30,p.canvas.width=30,i[e].width=p.canvas.width,i[e].height=p.canvas.height,p.canvas.top=t.row*o-45,i[e].style.top=p.canvas.top+"px",p.canvas.left=(t.posit-1)*s,i[e].style.left=p.canvas.left+"px";var d=i[e].getContext("2d");d.beginPath(),d.strokeStyle=p.canvas.color,d.lineWidth=2,d.moveTo(.5*p.canvas.width,0),d.lineTo(.5*p.canvas.width,p.canvas.height),d.stroke()}}}),l.forEach(function(t,e){n[e].style.top=o*(t.row-1)+4+"px",n[e].style.left=s*(t.posit-1)+4+"px"})})},checkFc:function(t){t.staue=!t.staue},issueFc:function(t,e){this.issueDatas.name=t,this.periodsNum=e,this.getHisDatas()},getHisDatas:function(){var d=this;return o()(i.a.mark(function t(){var e,n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d.isLoading=!0,e=d.$route.fullPath.split("/"),d.lotteryId=1*e.filter(function(t){return l()(1*t)&&""!==t})[0],"/frontend/test"==d.$HOST_NAME&&(d.$HOST_NAME="/frontend/v1"),t.next=6,d.$http.post(d.$HOST_NAME+"/lottery/trend",{lotteryId:d.lotteryId,pageSize:d.periodsNum});case 6:if(!(n=t.sent)||200!=n.code){t.next=22;break}if(n.data.data.list){t.next=11;break}return alert("暂无数据"),t.abrupt("return",!1);case 11:d.isLoading=!1,d.$refs.contentWrap&&(d.$refs.contentWrap.style.display="block"),d.newDatas.leftDatas.newIssue=[],d.newDatas.leftDatas.newTime=[],d.newDatas.leftDatas.newResult=[],d.newDatas.leftDatas.newSingle=[],r=[{index:0,name:"hz"},{index:1,name:"dx"},{index:2,name:"ds"},{index:3,name:"wdx"},{index:4,name:"sxp"},{index:5,name:"jop"}],n.data.data.list.forEach(function(n){var a=[],t=function(e){switch(e){case"issue":d.newDatas.leftDatas.newIssue.push(n.issue);break;case"resultInfo":d.newDatas.leftDatas.newResult.push(n.resultInfo.split(","));break;case"openingTime":d.newDatas.leftDatas.newTime.push(d.getTime(1e3*n.openingTime));break;default:r.forEach(function(t){t.name===e&&(a[t.index]=n[e])})}};for(var e in n)t(e);d.newDatas.leftDatas.newSingle.push(a)}),t.next=23;break;case 22:alert("获取开奖记录数据出错！！");case 23:case"end":return t.stop()}},t,d)}))()}},created:function(){this.childNeed&&this.getHisDatas()},mounted:function(){},computed:{childNeed:function(){return this.$store.state.lottery.childNeed}},watch:{childNeed:{handler:function(t,e){e||this.getHisDatas(),e&&t.className==e.className&&this.getHisDatas()},deep:!0},"$route.fullPath":function(t,e){t&&this.getHisDatas()}},store:n("YtJ0").a},p={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",[a("div",{staticClass:"vp-lottery-trend-content"},[n.isLoading?a("Spin",{attrs:{size:"large",fix:""}}):n._e(),n._v(" "),a("div",{ref:"contentWrap",staticStyle:{display:"none"}},[a("div",{staticClass:"trend-toggle"},[a("span",{staticClass:"name"},[n._v(n._s(n.childNeed.name))]),n._v(" "),a("span",{staticClass:"issue"},[a("span",{staticClass:"periodbtn",class:{active:"最近20期"==n.issueDatas.name},on:{click:function(t){return n.issueFc("最近20期",20)}}},[n._v("最近20期")]),n._v(" "),a("span",{staticClass:"periodbtn",class:{active:"最近30期"==n.issueDatas.name},on:{click:function(t){return n.issueFc("最近30期",30)}}},[n._v("最近30期")]),n._v(" "),a("span",{staticClass:"periodbtn",class:{active:"最近50期"==n.issueDatas.name},on:{click:function(t){return n.issueFc("最近50期",50)}}},[n._v("最近50期")]),n._v(" "),a("span",{staticClass:"periodbtn",class:{active:"最近100期"==n.issueDatas.name},on:{click:function(t){return n.issueFc("最近100期",100)}}},[n._v("最近100期")])])]),n._v(" "),a("div",{staticClass:"trend-table-wrapper"},[a("div",{staticClass:"trend-table-inner"},[a("div",{staticClass:"trend-left-box"},[a("div",{staticClass:"trend-left-box-top"},[a("div",{staticClass:"td-issue"},[a("div",{staticClass:"left-title"},[n._v("期号")]),n._v(" "),n._l(n.newDatas.leftDatas.newIssue,function(t,e){return a("div",{key:e,staticClass:"issue-number"},[n._v("\n                  "+n._s(2==n.lotteryId||10==n.lotteryId?t:t.toString().substring(4,t.length))+"\n                ")])})],2),n._v(" "),a("div",{staticClass:"td-issue"},[a("div",{staticClass:"left-title"},[n._v("开奖时间")]),n._v(" "),n._l(n.newDatas.leftDatas.newTime,function(t,e){return a("div",{key:e,staticClass:"issue-number"},[n._v(n._s(t)+"\n                ")])})],2),n._v(" "),a("div",{staticClass:"td-lottery-number"},[a("div",{staticClass:"left-title"},[n._v("开奖号")]),n._v(" "),a("div",{staticClass:"td-lottery-number-item"},n._l(n.newDatas.leftDatas.newResult,function(t,e){return a("div",{key:e,staticClass:"lottery-number"},n._l(t,function(t,e){return a("div",{key:e,staticClass:"left-td-ball"},[a("label",{attrs:{for:""}},[a("span",[n._v(n._s(t))])])])}),0)}),0)]),n._v(" "),a("div",{staticClass:"td-lottery-wide"},[a("div",{staticClass:"left-title"},n._l(n.titleLeft,function(t,e){return a("div",{key:e,staticClass:"td-lottery-wide-title"},[n._v(n._s(t))])}),0),n._v(" "),n._l(n.newDatas.leftDatas.newSingle,function(t,e){return a("div",{key:e,staticClass:"wide-wrap"},[a("div",{staticClass:"wide-inner-wrap"},n._l(t,function(t,e){return a("div",{key:e,staticClass:"item",class:{active:"大"==t||"双"==t}},[n._v(n._s(t)+"\n                    ")])}),0)])})],2)])])])])])],1)])},staticRenderFns:[]};var c=n("VU/8")(s,p,!1,function(t){n("tGby")},"data-v-125a5d16",null);e.default=c.exports},fn9f:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'.vp-lottery-trend-content[data-v-125a5d16]{padding-top:54px;font-size:15px;text-align:center;background:#f8f6f7}.vp-lottery-trend-content .ivu-spin-fix[data-v-125a5d16]{position:fixed}.vp-lottery-trend-content .trend-toggle[data-v-125a5d16]{min-width:800px;position:fixed;z-index:99;width:100%;height:56px;line-height:56px;text-align:center;background:#f8f6f7}.vp-lottery-trend-content .trend-toggle .name[data-v-125a5d16]{color:#ff5151;margin-right:23px}.vp-lottery-trend-content .trend-toggle .check label[data-v-125a5d16]{display:inline-block;margin:0 3px 0 16px}.vp-lottery-trend-content .trend-toggle .check label .check-ico[data-v-125a5d16]{width:17px;height:17px;vertical-align:text-top;display:inline-block;cursor:pointer;border:1px solid gray;background:#f5f5f5}.vp-lottery-trend-content .trend-toggle .check label .check-ico.active[data-v-125a5d16]{border:0;background:url("/static/public/image/lottery/trend/vp-trend-true-bg.png") #ff5151 50% no-repeat}.vp-lottery-trend-content .trend-toggle .check label .check-name[data-v-125a5d16]{padding-left:3px}.vp-lottery-trend-content .trend-toggle .issue[data-v-125a5d16]{padding-left:30px}.vp-lottery-trend-content .trend-toggle .issue .periodbtn[data-v-125a5d16]{cursor:pointer;border:1px solid #dadada;border-radius:4px;padding:3px 8px;margin-right:8px}.vp-lottery-trend-content .trend-toggle .issue .periodbtn.active[data-v-125a5d16]{background-color:#ff5151;color:#fff;border-color:#ff5151}.vp-lottery-trend-content .trend-table-wrapper[data-v-125a5d16]{margin-top:56px;display:inline-block;height:calc(100vh - 175px);text-align:center;color:#515151;overflow-y:auto;overflow-x:hidden;cursor:default;padding-right:4px}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner[data-v-125a5d16]{background-color:#f8f6f7;border:1px solid #ddd;border-right:0;border-bottom:0;display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top[data-v-125a5d16]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .left-title[data-v-125a5d16]{border-right:1px solid #ddd;border-bottom:1px solid #ddd;height:60px;line-height:60px;min-width:30px;white-space:nowrap;text-align:center;background:#f1edea}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .left-title span[data-v-125a5d16]{border-right:1px solid #ddd}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .left-title span[data-v-125a5d16]:last-child{border-right:none}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .left-td-ball[data-v-125a5d16]{border-right:1px solid #ddd;border-bottom:1px solid #ddd;height:30px;line-height:30px;min-width:30px;text-align:center}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-issue .issue-number[data-v-125a5d16]{border-right:1px solid #ddd;border-bottom:1px solid #ddd;padding-left:15px;padding-right:15px;line-height:30px;height:30px;white-space:nowrap}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-number .td-lottery-number-item[data-v-125a5d16]{font-size:12px}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-number .lottery-number[data-v-125a5d16]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-number .lottery-number div label[data-v-125a5d16]{display:inline-block;border-radius:50%;width:20px;height:20px;line-height:20px;text-align:center;background:#ff5151;color:#fff}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .left-title[data-v-125a5d16]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .left-title .td-lottery-wide-title[data-v-125a5d16]{-ms-flex:1;flex:1;border-right:1px solid #ddd}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .left-title .td-lottery-wide-title[data-v-125a5d16]:last-child{border-right:0}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .wide-wrap .wide-inner-wrap[data-v-125a5d16]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .wide-wrap .wide-inner-wrap .item[data-v-125a5d16]{width:60px;height:30px;border-right:1px solid #ddd;border-bottom:1px solid #ddd;line-height:30px;white-space:nowrap;text-align:center}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .wide-wrap .wide-inner-wrap .item.active[data-v-125a5d16]{color:#ff5151}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-statistics div[data-v-125a5d16]{border-right:1px solid #ddd;border-bottom:1px solid #ddd;line-height:30px;height:30px;text-align:center}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list[data-v-125a5d16]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans[data-v-125a5d16]{position:relative}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-cavans-title[data-v-125a5d16]{text-align:center;border-bottom:1px solid #ddd;height:60px;background:#f1edea}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-cavans-title .t1[data-v-125a5d16]{line-height:30px;height:30px;border-bottom:1px solid #ddd;border-right:1px solid #ddd}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-cavans-title .t2[data-v-125a5d16]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-cavans-title .t2 div[data-v-125a5d16]{height:30px;width:30px;line-height:30px;border-right:1px solid #ddd;border-bottom:1px solid #ddd}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box[data-v-125a5d16]{background:#f9faea}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box .row[data-v-125a5d16]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box .row div[data-v-125a5d16]{width:30px;height:30px;border-right:1px solid #ddd;border-bottom:1px solid #ddd;text-align:center;line-height:30px}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box .row div span[data-v-125a5d16]{display:inline-block;width:20px;height:20px;line-height:20px}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box .row div.active span[data-v-125a5d16]{border-radius:50%;background:#029bae;border:1px solid #029bae;color:#fff}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans canvas[data-v-125a5d16]{position:absolute}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .refBall-list div[data-v-125a5d16]{position:absolute;display:inline-block;width:22px;height:22px;line-height:22px;border-radius:50%;background:#029bae;border:1px solid #029bae;color:#fff}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .refBall-list div.active[data-v-125a5d16]{background:#ff5151;border:1px solid #ff5151}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .statistics-item[data-v-125a5d16]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .statistics-item div[data-v-125a5d16]{width:30px;height:30px;line-height:30px;text-align:center;border-bottom:1px solid #ddd;border-right:1px solid #ddd}',""])},tGby:function(t,e,n){var a=n("fn9f");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("850de474",a,!0,{})}});