webpackJsonp([134],{59:function(t,e,a){a("j1ja"),t.exports=a("A/ha")},"A/ha":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),r=a.n(i),o=a("exGp"),s=a.n(o),c=a("cTfC"),n={data:function(){return{}},methods:{choosePosit:function(t){var a=this;if(!this.isopen)return!1;this.submitDatas.list1=[],t.active=!t.active,this.listPosit.forEach(function(t,e){t.mess&&t.mess.forEach(function(t,e){t.active&&a.submitDatas.list1.push(t)})}),this.calculationTotal()},chooseNumber:function(t){var a=this;if(!this.isopen)return!1;this.submitDatas.list2=[],t.active=!t.active,this.listNumber.forEach(function(t,e){t.mess&&t.mess.forEach(function(t,e){t.active&&a.submitDatas.list2.push(t)})}),this.calculationTotal()},chooseStyle:function(t){var a=this;if(!this.isopen)return!1;this.submitDatas.list3=[],t.active=!t.active,this.listStyle.forEach(function(t,e){t.mess&&t.mess.forEach(function(t,e){t.active&&a.submitDatas.list3.push(t)})}),this.calculationTotal()},calculationTotal:function(){var t=0,e=0,a=0,i=0,o=0,s=!1;this.listStyle.forEach(function(t,e){t.mess&&t.mess.forEach(function(t,e){(t.active&&"龙"==t.ball||t.active&&"虎"==t.ball)&&(s=!0)})}),this.submitDatas.list1.length&&this.submitDatas.list2.length&&!s||this.submitDatas.list1.length&&this.submitDatas.list3.length&&!s?(t=this.submitDatas.list1.length*(this.submitDatas.list2.length+this.submitDatas.list3.length),this.saveSelectMoney.money&&(e=t*+this.saveSelectMoney.money)):(this.submitDatas.list1.length&&this.submitDatas.list2.length&&s||this.submitDatas.list1.length&&this.submitDatas.list3.length&&s)&&(this.listStyle.forEach(function(t,e){t.mess&&t.mess.forEach(function(t,e){t.active&&"龙"==t.ball||t.active&&"虎"==t.ball?a++:(t.active&&"龙"!=t.ball||t.active&&"虎"!=t.ball)&&i++})}),this.listPosit.forEach(function(t,e){t.mess&&t.mess.forEach(function(t,e){t.active&&o++})}),e=(t=this.submitDatas.list1.length*this.submitDatas.list2.length+this.submitDatas.list1.length*i+a*o)*this.saveSelectMoney.money),this.totalCount.number=t,"元"==this.totalCount.mol?this.totalCount.total=e*+this.totalCount.ratio*+this.totalCount.db:"角"==this.totalCount.mol?this.totalCount.total=(e*+this.totalCount.ratio*+this.totalCount.db).toFixed(1):"分"==this.totalCount.mol&&(this.totalCount.total=(e*+this.totalCount.ratio*+this.totalCount.db).toFixed(2))},resetAll:function(){this.listPosit.forEach(function(t,e){t.mess&&t.mess.forEach(function(t,e){t.active=!1,t.model=""})}),this.listNumber.forEach(function(t,e){t.mess&&t.mess.forEach(function(t,e){t.active=!1,t.model=""})}),this.listStyle.forEach(function(t,e){t.mess&&t.mess.forEach(function(t,e){t.active=!1,t.model=""})}),this.submitList=[],this.seletPriceStaue="",this.saveSelectMoney.money="",this.selectFast.list.forEach(function(t,e){t.active=!1}),this.totalCount.number=0,this.totalCount.total=0,this.submitDatas.submitList=[],this.submitDatas.list1=[],this.submitDatas.list2=[],this.submitDatas.list3=[]},review:function(){var i=this;return this.submitDatas.list1.length?!!this.isopen&&(this.submitDatas.submitList=[],(this.submitDatas.list1.length&&this.submitDatas.list2.length||this.submitDatas.list1.length&&this.submitDatas.list3.length)&&(this.submitDatas.list1.forEach(function(a,t){i.submitDatas.list2.length&&i.submitDatas.list2.forEach(function(t,e){i.submitDatas.submitList.push({code:"",title:a.title,ball:t.ball,id:"",model:i.saveSelectMoney.money,price:t.price,active:!1})})}),this.submitDatas.list1.forEach(function(a,t){i.submitDatas.list3.length&&i.submitDatas.list3.forEach(function(t,e){i.submitDatas.submitList.push({code:"",title:a.title,ball:t.ball,id:"",model:i.saveSelectMoney.money,price:t.price,active:!1})})})),this.submitDatas.submitList.length&&this.saveSelectMoney.money?(this.modal=!0,void this.$refs.betting.getList(this.submitDatas.submitList,this.totalCount,this.childNeedMess)):(this.$store.commit("alert/showTipModel",{bool:!0,title:"请选择并输金额!",model:"warn"}),!1)):(this.dNotify("快捷必须选择位置","error"),!1)},submit:function(){var n=this;return s()(r.a.mark(function t(){var o,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=[],s=[{title:"第一名",alias:"1V10"},{title:"第二名",alias:"2V9"},{title:"第三名",alias:"3V8"},{title:"第四名",alias:"4V7"},{title:"第五名",alias:"5V6"},{title:"第六名",alias:"5V6"},{title:"第七名",alias:"4V7"},{title:"第八名",alias:"3V8"},{title:"第九名",alias:"2V9"},{title:"第十名",alias:"1V10"}],n.submitDatas.list1.length&&n.submitDatas.list1.forEach(function(i,t){n.submitDatas.list2.forEach(function(t,e){o.push({code:t.ball,playway:t.code,odds:t.fixedOdds,money:n.saveSelectMoney.money,ball:i.title,attach:""})}),n.submitDatas.list3.forEach(function(t,e){if("龙"==t.ball||"虎"==t.ball){var a=s.filter(function(t){return t.title==i.title})[0];o.push({code:t.ball,playway:t.code,odds:t.fixedOdds,money:n.saveSelectMoney.money,ball:a.alias,attach:""})}else o.push({code:t.ball,playway:t.code,odds:t.fixedOdds,money:n.saveSelectMoney.money,ball:i.title,attach:""})})}),c.default.vpSubmit.call(n,o);case 4:case"end":return t.stop()}},t,n)}))()}}};e.default=n},YtJ0:function(t,e,a){"use strict";var i=a("7+uW"),o=a("NYxO"),s=a("mvHQ"),n=a.n(s);var r={namespaced:!0,state:{userinfo:function(){if(!localStorage.getItem("userinfo"))return null;try{return JSON.parse(localStorage.getItem("userinfo"))}catch(t){return localStorage.setItem("userinfo",""),null}}(),flag:!0,aid:"",ifpourT:!0,websoc:{},color:!1,routeSrc:"",navIndex:0,nightCheck:!1,gameList:null,downloadUrl:{},lotteryiuss:"",showDialog:{home:{login:!0,noLogin:!0},game:{login:!0,noLogin:!0}}},mutations:{resetUserinfo:function(t,e){t.userinfo=e},getDownLoad:function(t,e){t.downloadUrl=e},reloadUserinfo:function(t,e){localStorage.setItem("userinfo",n()(e)),t.userinfo=localStorage.userinfo&&JSON.parse(localStorage.userinfo)},lotteryiuss:function(t,e){t.lotteryiuss=e},getGameList:function(t,e){t.gameList=e},getNigth:function(t,e){t.nightCheck=e},resetFlag:function(t,e){t.flag=e},getNavIndex:function(t,e){t.navIndex=e},getRoute:function(t,e){t.routeSrc=e},resetPour:function(t,e){t.ifpourT=e},websoc:function(t,e){t.websoc=e},changcolor:function(t,e){t.color=e},getDialog:function(t,e){t.showDialog=e}}},c={namespaced:!0,state:{login:{ifLogin:!1,modelTitle:"登入帐号",chooseModel:"登入帐号"},tipModel:{bool:!1,title:"",model:""},promit:{isPromit:!1},newtip:{bool:!1,title:"",model:"",leftspan:!1}},mutations:{showTipModel:function(t,e){t.tipModel.bool=e.bool,t.tipModel.title=e.title,t.tipModel.model=e.model},showLogin:function(t,e){t.login.ifLogin=e},setLoginTitle:function(t,e){t.login.modelTitle=e},setChooseModel:function(t,e){t.login.chooseModel=e},newshowtip:function(t,e){t.newtip.bool=e.bool,t.newtip.title=e.title,t.newtip.model=e.model,t.newtip.leftspan=e.leftspan}},actions:{}},l={namespaced:!0,state:{sideReady:!1,childNeedMess:{title:"",issue:"",id:"",total:"",plays:"",code:"",series:""},shareData:{},childNeed:"",fetchTime:""},mutations:{resetChildMsg:function(t,e){t.childNeedMess.title=e.title,t.childNeedMess.id=e.id},resetSeriesMsg:function(t,e){t.childNeedMess.code=e.code,t.childNeedMess.series=e.series,t.childNeedMess.id=e.id,t.childNeedMess.title=e.title},setReady:function(t,e){t.sideReady=!0},resetShareData:function(t,e){t.shareData=e},resetTrend:function(t,e){t.childNeed=e},fetchBetRecord:function(t,e){t.fetchTime=e}},actions:{}},u={namespaced:!0,state:{navActive:localStorage.navAvtive||0,registerShow:!1},mutations:{setNav:function(t,e){t.navActive=e,localStorage.setItem("navAvtive",e)},showRegister:function(t,e){t.registerShow=e}}},h={namespaced:!0,state:{navActive:localStorage.navAvtive||0,registerShow:!1},mutations:{setNav:function(t,e){t.navActive=e,localStorage.setItem("navAvtive",e)},showRegister:function(t,e){t.registerShow=e}}},f={namespaced:!0,state:{navActive:localStorage.navAvtive||0,registerShow:!1},mutations:{setNav:function(t,e){t.navActive=e,localStorage.setItem("navAvtive",e)},showRegister:function(t,e){t.registerShow=e}}},d={state:{curr:localStorage.navCurr||0},mutations:{setCurr:function(t,e){t.curr=e,localStorage.setItem("navCurr",e)}}},m={namespaced:!0,state:{navActive:localStorage.navAvtive||0,registerShow:!1},mutations:{setNav:function(t,e){t.navActive=e,localStorage.setItem("navAvtive",e)},showRegister:function(t,e){t.registerShow=e}}},p=a("Xxa5"),v=a.n(p),g=a("exGp"),b=a.n(g),S={state:{isPersonal:!1,liActive:0,contentView:"recharge",navView:0,navActive:0,navText:"充值",paymentData:[],categoryId:"",itemDatas:"",withdraw:0,isRefresh:0,bankSafety:0,payName:"",classType:"",loadingShow:!1,uid:"",list_userid:"",showclean:!1,gameList:null},mutations:{showPersonal:function(e,a){var i=this;return b()(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.isPersonal=a.bool,e.liActive=a.num,a.bool?document.querySelector("html").setAttribute("style","overflow: hidden"):document.querySelector("html").setAttribute("style","overflow: auto");case 3:case"end":return t.stop()}},t,i)}))()},showContent:function(t,e){t.contentView=e.parent},listUserId:function(t,e){t.list_userid=e},userIdbyDetails:function(t,e){t.uid=e},showNav:function(t,e){t.navView=e.child},liActive:function(t,e){t.navActive=e},navText:function(t,e){t.navText=e},withdraw:function(t,e){t.withdraw=e},refresh:function(t,e){t.isRefresh+=e},payment:function(t,e){t.categoryId=e.id,t.itemDatas=e},paymentDataFc:function(t,e){t.paymentData=e},bankSafety:function(t,e){t.bankSafety=e},loading:function(t,e){t.loadingShow=e},showclean:function(t,e){t.showclean=e.newbool}},actions:{}},y={namespaced:!0,state:{navActive:localStorage.navAvtive||0,registerShow:!1},mutations:{setNav:function(t,e){t.navActive=e,localStorage.setItem("navAvtive",e)},showRegister:function(t,e){t.registerShow=e}}},w={namespaced:!0,state:{navActive:localStorage.navAvtive||0,registerShow:!1,loginShow:!1,dianziData:"",publicImg:{}},mutations:{setNav:function(t,e){t.navActive=e,localStorage.setItem("navAvtive",e)},showRegister:function(t,e){t.registerShow=e},showBanner:function(t,e){t.publicImg=e},showLogin:function(t,e){t.loginShow=e},changedian:function(t,e){t.dianziData=e}}},A={namespaced:!0,state:{navActive:localStorage.navAvtive||0,registerShow:!1,isLogin:!1,showBox:!1},mutations:{setNav:function(t,e){t.navActive=e,localStorage.setItem("navAvtive",e)},showBox:function(t,e){var a=e.showBox,i=e.isLogin;t.showBox=a,t.isLogin=i}}};i.default.use(o.a);var x=new o.a.Store({modules:{mainState:r,alert:c,lottery:l,hsyl:u,cjw:h,zyyl:f,jltx:m,bet:y,szc:w,wbw:d,yibo:A,personal:S}});e.a=x},cTfC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),s=a.n(i),o=a("mvHQ"),n=a.n(o),r=a("exGp"),c=a.n(r),l=a("xzxg");e.default=new function(){var e;function o(t,e){return this.$http.post(""+t,e)}this.vpSubmit=(e=c()(s.a.mark(function t(e){var a,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.token){t.next=3;break}return this.$store.commit("alert/showLogin",!0),t.abrupt("return",!1);case 3:return this.confirmbet=!1,"角"==(a=JSON.parse(localStorage.totalCount)).mol?e[0].money=String(e[0].money/10):"分"==a.mol&&(e[0].money=String(e[0].money/100)),e[0].money=e[0].money*a.db,t.next=9,o.call(this,this.$HOST_NAME+"/lottery/submit",{lotteryId:this.$route.meta.id,issue:this.childNeedMess.issue,code:n()(e),rebate:this.rebate});case 9:(i=t.sent)&&200==i.code?(this.confirmbet=!0,this.dNotify(i.data,"success"),this.resetAll(),l.a.vpGetBasicInfo.call(this)):(this.confirmbet=!0,this.dNotify(i.message,"error"));case 11:case"end":return t.stop()}},t,this)})),function(t){return e.apply(this,arguments)})}},xzxg:function(t,e,a){"use strict";var i=a("mvHQ"),n=a.n(i),o=a("Xxa5"),m=a.n(o),s=a("exGp"),r=a.n(s),p=a("YtJ0"),c=a("mtWM"),l=a.n(c),v=a("7+uW"),u=a("zL8q");a.n(u);e.a=new function(){var e,a,i=(e=r()(m.a.mark(function t(e){var a,i;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/frontend/"+(v.default.prototype.$HOST_NAME?v.default.prototype.$HOST_NAME.substring(10):"v1")+"/member/info",{headers:{Accept:"application/x.tg.v2+json"}});case 2:if(200===(a=t.sent).code)return i=a.data,localStorage.userinfo=n()(i),t.abrupt("return",i);t.next=9;break;case 9:h.removeCache();case 10:case"end":return t.stop()}},t,this)})),function(t){return e.apply(this,arguments)}),o=(a=r()(m.a.mark(function t(e){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.call(e,v.default.prototype.$HOST_NAME+"/member/logout",{});case 2:200===t.sent.code?(h.removeCache(),window.location.reload()):h.removeCache();case 4:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)}),h=this,s=!0;this.vpGetBasicInfo=r()(m.a.mark(function t(){var e;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.token){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,i(this);case 4:(e=t.sent)&&p.a.commit("mainState/reloadUserinfo",e);case 6:case"end":return t.stop()}},t,this)})),this.expiredPart=function(t){if(!t)return!1;var e=t.split(".")[1],a={enKey:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",deKey:new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1),encode:function(t){for(var e=new Array,a=void 0,i=void 0,o=void 0,s=0;s+3<=t.length;)a=t.charCodeAt(s++),i=t.charCodeAt(s++),o=t.charCodeAt(s++),e.push(this.enKey.charAt(a>>2),this.enKey.charAt((a<<4)+(i>>4)&63)),e.push(this.enKey.charAt((i<<2)+(o>>6)&63),this.enKey.charAt(63&o));return s<t.length&&(a=t.charCodeAt(s++),e.push(this.enKey.charAt(a>>2)),s<t.length?(i=t.charCodeAt(s),e.push(this.enKey.charAt((a<<4)+(i>>4)&63)),e.push(this.enKey.charAt(i<<2&63),"=")):e.push(this.enKey.charAt(a<<4&63),"==")),e.join("")},decode:function(t){var e=[],a=void 0,i=void 0,o=void 0,s=void 0,n=0;for(t=t.replace(/[^A-Za-z0-9+/]/g,"");n+4<=t.length;)a=this.deKey[t.charCodeAt(n++)],i=this.deKey[t.charCodeAt(n++)],o=this.deKey[t.charCodeAt(n++)],s=this.deKey[t.charCodeAt(n++)],e.push(String.fromCharCode((a<<2&255)+(i>>4),(i<<4&255)+(o>>2),(o<<6&255)+s));return n+1<t.length&&(a=this.deKey[t.charCodeAt(n++)],i=this.deKey[t.charCodeAt(n++)],n<t.length?(o=this.deKey[t.charCodeAt(n)],e.push(String.fromCharCode((a<<2&255)+(i>>4),(i<<4&255)+(o>>2)))):e.push(String.fromCharCode((a<<2&255)+(i>>4)))),e.join("")}},i=JSON.parse(a.decode(e)),o=Math.floor((new Date).getTime()/1e3);return{exp:i.exp,timestamp:o}},this.expired=function(){var t=h.expiredPart(localStorage.token);if(t.exp-t.timestamp<=1800&&0<=t.exp-t.timestamp){if(!s)return!1;s=!1,setTimeout(function(){h.vpReloadToken()},5e3)}else t.exp-t.timestamp<0&&h.removeCache()},this.vpReloadToken=r()(m.a.mark(function t(){var e;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.token){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,l.a.post(v.default.prototype.$HOST_NAME+"/member/refresh",{device:"pc"});case 4:200===(e=t.sent).code?(localStorage.setItem("token",e.data),s=!0):h.removeCache();case 6:case"end":return t.stop()}},t,this)})),this.vpSetConfig=function(){var a=this;if(localStorage.configTime)return h.vpGetBasWebsoc(),!1;v.default.prototype.$nextTick(r()(m.a.mark(function t(){var e;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(v.default.prototype.$HOST_NAME+"/config",{});case 2:(e=t.sent)&&200===e.code&&(e.data.siteConfig.siteId=e.data.id,localStorage.setItem("configTime",e.data.data?e.data.data.updated_at:e.data.updated_at),localStorage.setItem("config",e.data.data?n()(e.data.data.siteConfig):n()(e.data.siteConfig)),h.vpGetBasWebsoc());case 4:case"end":return t.stop()}},t,a)})))},this.vpReloadConfig=r()(m.a.mark(function t(){var e;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(v.default.prototype.$HOST_NAME+"/config",{});case 2:200===(e=t.sent).code&&(e.data.siteConfig.siteId=e.data.id,localStorage.setItem("configTime",e.sign),localStorage.setItem("config",e.data.data?n()(e.data.data.siteConfig):n()(e.data.siteConfig)));case 4:case"end":return t.stop()}},t,this)}));var f=!0;function d(t,e){return l.a.post(t,e)}this.vpGetBasWebsoc=function(){var u=this;if(!f)return!1;v.default.prototype.$nextTick(r()(m.a.mark(function t(){var e,a,i,o,s,n,r,c,l;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(t){for(var e="",a=0;a<t;a++){var i=Math.ceil(35*Math.random());e+=r[i]}return e},t.next=3,d(v.default.prototype.$HOST_NAME+"/websocket",{});case 3:if(200!==(e=t.sent).code){t.next=8;break}f=!1,t.next=10;break;case 8:if(e){t.next=10;break}return t.abrupt("return",!1);case 10:if(a=e.data.wss,i={},s=o="",n=JSON.parse(localStorage.config).siteId,r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],localStorage.userinfo)try{l=JSON.parse(localStorage.userinfo),o=l.uid}catch(t){localStorage.setItem("userinfo","")}"test"===localStorage.Public_User?s="test":"vm"===localStorage.Public_User?s="vm":"v1"===localStorage.Public_User&&localStorage.token?s="member":(s="anonymous",o=n+"_"+(new Date).getTime()+c(16)),i.socket=Stomp.client(a),i.headers={id:o,group:s,siteid:n},i.message={all:"/topic/public",group:"/group/"+i.headers.group,site:"/group/"+n,alone:"/user/"+i.headers.group+"_"+i.headers.id+"/message"},i.socket.connect(i.headers,function(t){i.socket.subscribe(i.message.all,function(t){"user.lotteryOpen"===JSON.parse(t.body).type?p.a.commit("mainState/websoc",JSON.parse(t.body)):h.publicInform(JSON.parse(t.body))}),i.socket.subscribe(i.message.group,function(t){"user.lotteryOpen"===JSON.parse(t.body).type?p.a.commit("mainState/websoc",JSON.parse(t.body)):h.publicInform(JSON.parse(t.body))}),i.socket.subscribe(i.message.alone,function(t){"user.lotteryOpen"===JSON.parse(t.body).type?p.a.commit("mainState/websoc",JSON.parse(t.body)):h.publicInform(JSON.parse(t.body))}),i.socket.subscribe(i.message.site,function(t){"user.lotteryOpen"===JSON.parse(t.body).type?p.a.commit("mainState/websoc",JSON.parse(t.body)):h.publicInform(JSON.parse(t.body))})},function(t){f=!0,i.socket.disconnect(),setTimeout(function(){h.vpGetBasWebsoc()},5e3)});case 22:case"end":return t.stop()}},t,u)})))},this.publicInform=function(t){if("user.lotteryOpen"===t.type)return!1;Object(u.Notification)({title:t.typeName?t.typeName:"温馨提示",message:t.message,type:"success"})},this.logout=r()(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.token){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,o(this);case 4:t.sent;case 5:case"end":return t.stop()}},t,this)})),this.set_code_show=r()(m.a.mark(function t(){var e,a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/frontend/v1/is-show-captcha",{headers:{Accept:"application/x.tg.v2+json"}});case 2:e=t.sent,(a=e.data)&&200===a.code&&(localStorage.is_code_show=a.data);case 5:case"end":return t.stop()}},t,this)})),this.removeCache=function(){if(localStorage.removeItem("token"),localStorage.removeItem("userinfo"),p.a.commit("mainState/resetUserinfo",null),"/frontend/vm"===v.default.prototype.$HOST_NAME)return!1;localStorage.removeItem("Public_User"),v.default.prototype.$HOST_NAME="/frontend/v1"},this.setCache=function(t,e,a){if(localStorage.setItem("userinfo",n()(t.data.userInfo||t.data.userinfo)),localStorage.setItem("token",t.data.token),a||p.a.commit("mainState/reloadUserinfo",t.data.userInfo||t.data.userinfo),"/frontend/vm"===v.default.prototype.$HOST_NAME)return!1;localStorage.setItem("Public_User",e),v.default.prototype.$HOST_NAME="/frontend/"+e},this.setCachereg=function(t,e,a){if(localStorage.setItem("userinfo",n()(t.data.userInfo||t.data.userinfo)),localStorage.setItem("token",t.data.token),a||p.a.commit("mainState/reloadUserinfo",t.data.userInfo||t.data.userinfo),"/frontend/vm"===v.default.prototype.$HOST_NAME)return!1;localStorage.setItem("Public_User",e),v.default.prototype.$HOST_NAME="/frontend/"+e}}}},[59]);