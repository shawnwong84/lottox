webpackJsonp([20],{AO7A:function(t,e,n){var a=n("jbfb");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("3f9878d8",a,!0,{})},BgYp:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),f=n.n(a),r=n("RRo+"),b=n.n(r),i=n("exGp"),d=n.n(i),s={data:function(){return{isLoading:!1,titleLeft:["冠亚大小","冠亚单双","冠亚和","1龙虎","2龙虎","3龙虎","4龙虎","5龙虎"],titleRight:["冠军","亚军","季军","第四位","第五位","第六位","第七位","第八位","第九位","第十位"],resultBallLength:10,ballLength:10,periodsNum:20,canvas:{left:0,top:0,width:0,height:0,color:"#029BAE"},checkDatas:[{name:"折线显示",staue:!0},{name:"遗漏显示",staue:!0}],issueDatas:{name:"最近20期"},drawDeclList:[],allDatas:{},newDatas:{leftDatas:{newIssue:"",newTimeArr:"",newResult:"",newSingle:""},total:"",continuous:"",forget:"",lotteryId:""}}},methods:{drawPicFc:function(t,e,n,a){return!1},drawCanvasPic:function(){var c=this;this.drawDeclList.forEach(function(t,e){c.canvas.color=e%2==0?"#029BAE":"#FF5151";var d=c.$refs["trendCanvas"+(e+1)],n=c.$refs["postBall"+(e+1)],s=[],l=30,o=30;d[0].style.display="none",t.list.forEach(function(t,n){t.ballList.forEach(function(t,e){t.row=n+3,t.posit=e+1,t.staue&&s.push(t)})}),s.forEach(function(t,e){var n="";if(0<e){if(n=s[e].posit-s[e-1].posit,c.canvas.width=Math.abs(n)*o,c.canvas.height=l,d[e].width=c.canvas.width,d[e].height=c.canvas.height,0<n){c.canvas.top=(t.row-1)*l-15,d[e].style.top=c.canvas.top+"px",c.canvas.left=(t.posit-1)*o-c.canvas.width+15,d[e].style.left=c.canvas.left+"px";var a=d[e].getContext("2d");a.beginPath(),a.strokeStyle=c.canvas.color,a.lineWidth=2,a.moveTo(0,0),a.lineTo(c.canvas.width,c.canvas.height),a.stroke()}if(n<0){c.canvas.top=(t.row-1)*l-15,d[e].style.top=c.canvas.top+"px",c.canvas.left=(t.posit-1)*o+15,d[e].style.left=c.canvas.left+"px";var r=d[e].getContext("2d");r.beginPath(),r.strokeStyle=c.canvas.color,r.lineWidth=2,r.moveTo(0,c.canvas.height),r.lineTo(c.canvas.width,0),r.stroke()}if(0==n){c.canvas.height=30,c.canvas.width=30,d[e].width=c.canvas.width,d[e].height=c.canvas.height,c.canvas.top=t.row*l-45,d[e].style.top=c.canvas.top+"px",c.canvas.left=(t.posit-1)*o,d[e].style.left=c.canvas.left+"px";var i=d[e].getContext("2d");i.beginPath(),i.strokeStyle=c.canvas.color,i.lineWidth=2,i.moveTo(.5*c.canvas.width,0),i.lineTo(.5*c.canvas.width,c.canvas.height),i.stroke()}}}),s.forEach(function(t,e){n[e].style.top=l*(t.row-1)+4+"px",n[e].style.left=o*(t.posit-1)+4+"px"})})},checkFc:function(t){t.staue=!t.staue},issueFc:function(t,e){this.issueDatas.name=t,this.periodsNum=e,this.getHisDatas()},getHisDatas:function(){var v=this;return d()(f.a.mark(function t(){var e,n,d,s,a,r,i,l,o,c,p;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return v.isLoading=!0,e=v.$route.fullPath.split("/"),v.lotteryId=1*e.filter(function(t){return b()(1*t)&&""!==t})[0],"/frontend/test"==v.$HOST_NAME&&(v.$HOST_NAME="/frontend/v1"),t.next=6,v.$http.post(v.$HOST_NAME+"/lottery/trend",{lotteryId:v.lotteryId,pageSize:v.periodsNum});case 6:if(!(n=t.sent)||200!=n.code){t.next=31;break}if(n.data.data.list){t.next=11;break}return alert("暂无数据"),t.abrupt("return",!1);case 11:for(a in v.isLoading=!1,v.$refs.contentWrap&&(v.$refs.contentWrap.style.display="block"),v.newDatas.leftDatas.newIssue=[],v.newDatas.leftDatas.newTimeArr=[],v.newDatas.leftDatas.newResult=[],v.newDatas.leftDatas.newSingle=[],v.newDatas.total=[],v.newDatas.continuous=[],v.newDatas.forget=[],d=[{index:0,name:"gydx"},{index:1,name:"gyds"},{index:2,name:"gyh"},{index:3,name:"lh1"},{index:4,name:"lh2"},{index:5,name:"lh3"},{index:6,name:"lh4"},{index:7,name:"lh5"}],v.drawDeclList=[],s=n.data.data.gather.listunm,n.data.data.gather.forget)for(r in n.data.data.gather.forget[a])v.newDatas.forget.push(n.data.data.gather.forget[a][r]);for(i in n.data.data.gather.total)for(l in n.data.data.gather.total[i])v.newDatas.total.push(n.data.data.gather.total[i][l]);for(o in n.data.data.gather.continuous)for(c in n.data.data.gather.continuous[o])v.newDatas.continuous.push(n.data.data.gather.continuous[o][c]);for(p=0;p<v.resultBallLength;p++)v.drawDeclList.push({title:v.titleRight[p],list:[]});n.data.data.list.forEach(function(r){var n=[],t=function(e){switch(e){case"issue":v.newDatas.leftDatas.newIssue.push(r.issue);break;case"resultInfo":v.newDatas.leftDatas.newResult.push(r.resultInfo.split(","));break;case"openingTime":v.newDatas.leftDatas.newTimeArr.push(v.getTime(1e3*r.openingTime));break;default:d.forEach(function(t){t.name===e&&(n[t.index]=r[e])})}};for(var e in r)t(e);v.newDatas.leftDatas.newSingle.push(n);for(var a=function(n){for(var a=[],t=1;t<11;t++)a.push({ball:t,staue:!1,lost:s[r.issue][n][t]});a.forEach(function(t,e){t.ball==+r.resultInfo.split(",")[n]&&(t.staue=!0,v.drawDeclList[n].list.push({ballList:a,activeBall:+r.resultInfo.split(",")[n]}))})},i=0;i<v.resultBallLength;i++)a(i)}),v.$nextTick(function(){v.drawCanvasPic()}),t.next=32;break;case 31:alert("获取开奖记录数据出错！！");case 32:case"end":return t.stop()}},t,v)}))()},translateObj:function(t){var e=[];for(var n in t)e.push([t[n],n]);return e.reverse(),e}},created:function(){this.childNeed&&this.getHisDatas()},mounted:function(){},computed:{childNeed:function(){return this.$store.state.lottery.childNeed}},watch:{childNeed:{handler:function(t,e){e||this.getHisDatas(),e&&t.className==e.className&&this.getHisDatas()},deep:!0},"$route.fullPath":function(t,e){t&&this.getHisDatas()}},store:n("YtJ0").a},l={render:function(){var i=this,t=i.$createElement,d=i._self._c||t;return d("div",[d("div",{staticClass:"vp-lottery-trend-content"},[i.isLoading?d("Spin",{attrs:{size:"large",fix:""}}):i._e(),i._v(" "),d("div",{ref:"contentWrap",staticStyle:{display:"none"}},[d("div",{staticClass:"trend-toggle"},[d("span",{staticClass:"name"},[i._v(i._s(i.childNeed.name))]),i._v(" "),d("span",{staticClass:"check"},i._l(i.checkDatas,function(e,t){return d("label",{key:t,attrs:{for:""}},[d("span",{staticClass:"check-ico",class:{active:e.staue},on:{click:function(t){return i.checkFc(e)}}}),i._v(" "),d("span",{staticClass:"check-name"},[i._v(i._s(e.name))])])}),0),i._v(" "),d("span",{staticClass:"issue"},[d("span",{staticClass:"periodbtn",class:{active:"最近20期"==i.issueDatas.name},on:{click:function(t){return i.issueFc("最近20期",20)}}},[i._v("最近20期")]),i._v(" "),d("span",{staticClass:"periodbtn",class:{active:"最近30期"==i.issueDatas.name},on:{click:function(t){return i.issueFc("最近30期",30)}}},[i._v("最近30期")]),i._v(" "),d("span",{staticClass:"periodbtn",class:{active:"最近50期"==i.issueDatas.name},on:{click:function(t){return i.issueFc("最近50期",50)}}},[i._v("最近50期")]),i._v(" "),d("span",{staticClass:"periodbtn",class:{active:"最近100期"==i.issueDatas.name},on:{click:function(t){return i.issueFc("最近100期",100)}}},[i._v("最近100期")])])]),i._v(" "),d("div",{staticClass:"trend-table-wrapper"},[d("div",{staticClass:"trend-table-inner"},[d("div",{staticClass:"trend-left-box"},[d("div",{staticClass:"trend-left-box-top"},[d("div",{staticClass:"td-issue"},[d("div",{staticClass:"left-title"},[i._v("期号")]),i._v(" "),i._l(i.newDatas.leftDatas.newIssue,function(t,e){return d("div",{key:e,staticClass:"issue-number"},[i._v("\n                  "+i._s(2==i.lotteryId||10==i.lotteryId?t:t.toString().substring(4,t.length))+"\n                ")])})],2),i._v(" "),d("div",{staticClass:"td-issue"},[d("div",{staticClass:"left-title"},[i._v("开奖时间")]),i._v(" "),i._l(i.newDatas.leftDatas.newTimeArr,function(t,e){return d("div",{key:e,staticClass:"issue-number"},[i._v("\n                  "+i._s(t)+"\n                ")])})],2),i._v(" "),d("div",{staticClass:"td-lottery-number"},[d("div",{staticClass:"left-title"},[i._v("开奖号")]),i._v(" "),d("div",{staticClass:"td-lottery-number-item"},i._l(i.newDatas.leftDatas.newResult,function(t,e){return d("div",{key:e,staticClass:"lottery-number"},i._l(t,function(t,e){return d("div",{key:e,staticClass:"left-td-ball"},[d("label",{attrs:{for:""}},[d("span",[i._v(i._s(t))])])])}),0)}),0)]),i._v(" "),d("div",{staticClass:"td-lottery-wide"},[d("div",{staticClass:"left-title"},i._l(i.titleLeft,function(t,e){return d("div",{key:e,staticClass:"td-lottery-wide-title"},[i._v(i._s(t))])}),0),i._v(" "),i._l(i.newDatas.leftDatas.newSingle,function(t,e){return d("div",{key:e,staticClass:"wide-wrap"},[d("div",{staticClass:"wide-inner-wrap"},i._l(t,function(t,e){return d("div",{key:e,staticClass:"item",class:{active:"大"==t||"双"==t}},[i._v(i._s(t)+"\n                    ")])}),0)])})],2)]),i._v(" "),i._m(0)]),i._v(" "),d("div",{staticClass:"trend-center-box"},[d("div",{staticClass:"trend-center-canvas-list"},i._l(i.drawDeclList,function(t,r){return d("div",{key:r,staticClass:"vp-lottery-trend-cavans"},[d("div",{staticClass:"trend-cavans-title"},[d("div",{staticClass:"t1"},[i._v(i._s(t.title))]),i._v(" "),d("div",{staticClass:"t2"},i._l(i.ballLength,function(t,e){return d("div",{key:e},[i._v(i._s(e+1))])}),0)]),i._v(" "),d("div",{staticClass:"trend-out-box"},i._l(t.list,function(t,a){return d("div",{key:a,staticClass:"row"},i._l(t.ballList,function(e,n){return d("div",{key:n,on:{click:function(t){return i.drawPicFc(e,r,a,n)}}},[d("span",[i._v(i._s(i.checkDatas[1].staue?e.lost:""))])])}),0)}),0),i._v(" "),i._l(t.list,function(t,e){return d("canvas",{directives:[{name:"show",rawName:"v-show",value:i.checkDatas[0].staue,expression:"checkDatas[0].staue"}],key:e,ref:"trendCanvas"+(r+1),refInFor:!0})}),i._v(" "),d("div",{staticClass:"refBall-list"},i._l(t.list,function(t,e){return d("div",{key:e,ref:"postBall"+(r+1),refInFor:!0,class:{active:r%2!=0}},[d("span",[i._v("\n                                          "+i._s(t.activeBall)+"\n                                      ")])])}),0)],2)}),0),i._v(" "),d("div",{staticClass:"statistics-item"},i._l(i.newDatas.total,function(t,e){return d("div",{key:e},[i._v(i._s(t))])}),0),i._v(" "),d("div",{staticClass:"statistics-item"},i._l(i.newDatas.continuous,function(t,e){return d("div",{key:e},[i._v(i._s(t))])}),0),i._v(" "),d("div",{staticClass:"statistics-item"},i._l(i.newDatas.forget,function(t,e){return d("div",{key:e},[i._v(i._s(t))])}),0)])])])])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"trend-statistics"},[n("div",[t._v("出现总次数")]),t._v(" "),n("div",[t._v("最大连出值")]),t._v(" "),n("div",[t._v("最大遗漏值")])])}]};var o=n("VU/8")(s,l,!1,function(t){n("AO7A")},"data-v-798614c8",null);e.default=o.exports},jbfb:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'.vp-lottery-trend-content[data-v-798614c8]{padding-top:54px;font-size:15px;text-align:center;background:#f8f6f7}.vp-lottery-trend-content .ivu-spin-fix[data-v-798614c8]{position:fixed}.vp-lottery-trend-content .trend-toggle[data-v-798614c8]{min-width:800px;position:fixed;z-index:99;width:100%;height:56px;line-height:56px;text-align:center;background:#f8f6f7}.vp-lottery-trend-content .trend-toggle .name[data-v-798614c8]{color:#ff5151;margin-right:23px}.vp-lottery-trend-content .trend-toggle .check label[data-v-798614c8]{display:inline-block;margin:0 3px 0 16px}.vp-lottery-trend-content .trend-toggle .check label .check-ico[data-v-798614c8]{width:17px;height:17px;vertical-align:text-top;display:inline-block;cursor:pointer;border:1px solid gray;background:#f5f5f5}.vp-lottery-trend-content .trend-toggle .check label .check-ico.active[data-v-798614c8]{border:0;background:url("/static/public/image/lottery/trend/vp-trend-true-bg.png") #ff5151 50% no-repeat}.vp-lottery-trend-content .trend-toggle .check label .check-name[data-v-798614c8]{padding-left:3px}.vp-lottery-trend-content .trend-toggle .issue[data-v-798614c8]{padding-left:30px}.vp-lottery-trend-content .trend-toggle .issue .periodbtn[data-v-798614c8]{cursor:pointer;border:1px solid #dadada;border-radius:4px;padding:3px 8px;margin-right:8px}.vp-lottery-trend-content .trend-toggle .issue .periodbtn.active[data-v-798614c8]{background-color:#ff5151;color:#fff;border-color:#ff5151}.vp-lottery-trend-content .trend-table-wrapper[data-v-798614c8]{margin-top:56px;display:inline-block;height:calc(100vh - 175px);text-align:center;color:#515151;overflow-y:auto;overflow-x:hidden;cursor:default;padding-right:4px}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner[data-v-798614c8]{background-color:#f8f6f7;border:1px solid #ddd;border-right:0;border-bottom:0;display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top[data-v-798614c8]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .left-title[data-v-798614c8]{border-right:1px solid #ddd;border-bottom:1px solid #ddd;height:60px;line-height:60px;min-width:30px;white-space:nowrap;text-align:center;background:#f1edea}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .left-title span[data-v-798614c8]{border-right:1px solid #ddd}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .left-title span[data-v-798614c8]:last-child{border-right:none}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .left-td-ball[data-v-798614c8]{border-right:1px solid #ddd;border-bottom:1px solid #ddd;height:30px;line-height:30px;min-width:30px;text-align:center}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-issue .issue-number[data-v-798614c8]{border-right:1px solid #ddd;border-bottom:1px solid #ddd;padding-left:15px;padding-right:15px;line-height:30px;height:30px;white-space:nowrap}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-number .td-lottery-number-item[data-v-798614c8]{font-size:12px}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-number .lottery-number[data-v-798614c8]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-number .lottery-number div label[data-v-798614c8]{display:inline-block;border-radius:50%;width:20px;height:20px;line-height:20px;text-align:center;background:#ff5151;color:#fff}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .left-title[data-v-798614c8]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .left-title .td-lottery-wide-title[data-v-798614c8]{-ms-flex:1;flex:1;border-right:1px solid #ddd}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .left-title .td-lottery-wide-title[data-v-798614c8]:last-child{border-right:0}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .wide-wrap .wide-inner-wrap[data-v-798614c8]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .wide-wrap .wide-inner-wrap .item[data-v-798614c8]{width:60px;height:30px;border-right:1px solid #ddd;border-bottom:1px solid #ddd;line-height:30px;white-space:nowrap;text-align:center}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-left-box-top .td-lottery-wide .wide-wrap .wide-inner-wrap .item.active[data-v-798614c8]{color:#ff5151}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-left-box .trend-statistics div[data-v-798614c8]{border-right:1px solid #ddd;border-bottom:1px solid #ddd;line-height:30px;height:30px;text-align:center}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list[data-v-798614c8]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans[data-v-798614c8]{position:relative}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-cavans-title[data-v-798614c8]{text-align:center;border-bottom:1px solid #ddd;height:60px;background:#f1edea}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-cavans-title .t1[data-v-798614c8]{line-height:30px;height:30px;border-bottom:1px solid #ddd;border-right:1px solid #ddd}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-cavans-title .t2[data-v-798614c8]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-cavans-title .t2 div[data-v-798614c8]{height:30px;width:30px;line-height:30px;border-right:1px solid #ddd;border-bottom:1px solid #ddd}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box[data-v-798614c8]{background:#f9faea}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box .row[data-v-798614c8]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box .row div[data-v-798614c8]{width:30px;height:30px;border-right:1px solid #ddd;border-bottom:1px solid #ddd;text-align:center;line-height:30px}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box .row div span[data-v-798614c8]{display:inline-block;width:20px;height:20px;line-height:20px}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .trend-out-box .row div.active span[data-v-798614c8]{border-radius:50%;background:#029bae;border:1px solid #029bae;color:#fff}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans canvas[data-v-798614c8]{position:absolute}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .refBall-list div[data-v-798614c8]{position:absolute;display:inline-block;width:22px;height:22px;line-height:22px;border-radius:50%;background:#029bae;border:1px solid #029bae;color:#fff}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .trend-center-canvas-list .vp-lottery-trend-cavans .refBall-list div.active[data-v-798614c8]{background:#ff5151;border:1px solid #ff5151}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .statistics-item[data-v-798614c8]{display:-ms-flexbox;display:flex}.vp-lottery-trend-content .trend-table-wrapper .trend-table-inner .trend-center-box .statistics-item div[data-v-798614c8]{width:30px;height:30px;line-height:30px;text-align:center;border-bottom:1px solid #ddd;border-right:1px solid #ddd}',""])}});