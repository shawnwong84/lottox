webpackJsonp([66],{C8Xw:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,".register[data-v-d2133ffe]{width:1200px;margin:0 auto}.register .reg_step[data-v-d2133ffe]{text-align:center}.register .reg_step ul li[data-v-d2133ffe]{cursor:pointer;display:inline-block;margin-right:30px;padding:10px 0;font-weight:700;color:#000;text-align:center;margin-left:-7px;font-size:14px;border-bottom:2px solid transparent}.register .reg_step ul li i[data-v-d2133ffe]{display:inline-block;width:20px;height:20px;line-height:18px;margin-right:5px;text-align:center;border:1px solid #939393;font-size:16px;color:#939393;font-style:italic}.register .reg_step ul .active[data-v-d2133ffe]{border-bottom:2px solid red}.register .content[data-v-d2133ffe]{padding:52px 0 60px;background:#fff}.register .content .left[data-v-d2133ffe]{width:49%;height:100%;text-align:center}.register .content .right[data-v-d2133ffe]{padding-top:20px;margin-top:40px;width:45%;padding-right:20px;margin-right:60px;border:1px solid #b48d3e;border-radius:5px}.register .register-wrap .list-box .list[data-v-d2133ffe]{padding-bottom:25px;position:relative;font-size:16px;color:#333;text-align:center}.register .register-wrap .list-box .list input[data-v-d2133ffe]{width:180px;height:30px;border:1px solid #666;box-shadow:0 0 6px #3a3a3a;border-radius:3px;color:#444;font-size:12px;text-indent:5px;outline:none}.register .register-wrap .list-box .list input[data-v-d2133ffe]:focus{border:1px solid #90f}.register .register-wrap .list-box .list label[data-v-d2133ffe]{font-size:12px;color:#000;width:80px;text-align:right;display:inline-block}.register .register-wrap .list-box .list label span[data-v-d2133ffe]{color:red;font-weight:700;vertical-align:-2px}.register .register-wrap .list-box .list i[data-v-d2133ffe]{position:absolute;top:5px;left:13px;font-size:24px;color:#949494}.register .register-wrap .list-box .list .yzm_reg[data-v-d2133ffe]{position:absolute;top:0;right:36px;cursor:pointer}.register .register-wrap .list-box .list .yzm_reg img[data-v-d2133ffe]{width:84px;height:30px}.register .register-wrap .list-box .err[data-v-d2133ffe]{width:180px;margin-left:210px;height:30px;line-height:30px;color:#444;font-size:14px;border:1px solid #666;box-shadow:0 0 6px #3a3a3a;border-radius:3px;margin-bottom:20px}.register .register-wrap .list-box .err i[data-v-d2133ffe]{padding-left:5px;font-size:15px}.register .register-wrap .list-box .forget[data-v-d2133ffe]{font-size:16px;color:#666;zoom:1;overflow:hidden;padding-bottom:26px}.register .register-wrap .list-box .forget span[data-v-d2133ffe]:first-child{float:left}.register .register-wrap .list-box .forget span:first-child label[data-v-d2133ffe]{text-decoration:underline;cursor:pointer}.register .register-wrap .list-box .treaty[data-v-d2133ffe]{font-size:15px;color:#999;text-align:center;padding:20px 0;padding-left:60px}.register .register-wrap .list-box .submit[data-v-d2133ffe]{width:200px;height:45px;margin-left:200px;margin-top:5px;font-size:18px;text-align:center;line-height:45px;background:#2c2d2e;color:#fff;border-radius:5px;cursor:pointer}",""])},LjVS:function(e,t,r){"use strict";r.d(t,"a",function(){return g}),r.d(t,"c",function(){return f}),r.d(t,"b",function(){return v});var a=r("//Fk"),i=r.n(a),n=r("Dd8w"),s=r.n(n),o=r("7+uW"),l=r("mtWM"),c=r.n(l),d=r("YtJ0"),p=r("xzxg"),u=r("mw3O"),g=function(e,t){return c()({url:""+e,method:"post",data:s()({},t)})};c.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",c.a.defaults.timeout=2e4,c.a.defaults.transformRequest=[function(e){return u.stringify(e)}],c.a.interceptors.request.use(function(e){return e.headers.Authorization=""+localStorage.token,e},function(e){return i.a.reject(e)}),p.a.vpSetConfig(),c.a.interceptors.response.use(function(e){if(e.data.sign>localStorage.getItem("configTime")&&!e.config.url.includes("/config")&&p.a.vpReloadConfig(),5003===e.data.code||5002===e.data.code)return localStorage.removeItem("userBank"),p.a.removeCache(),d.a.commit("alert/showTipModel",{bool:!0,title:"您未登录！",model:"warn"}),!1;if(5e3===e.data.code)p.a.vpSetConfig(),location.href="/static/public/html/weihu/index.html";else{if(5005===e.data.code)return d.a.commit("alert/showTipModel",{bool:!0,title:e.data.message,model:"warn"}),window.history.back(-1),!1;4e3===e.data.code&&(location.href="/static/public/html/feifa/index.html")}return localStorage.token&&!e.config.url.includes("/member/refresh")&&p.a.expired(localStorage.token),200===e.data.code?e.data:5006!==e.data.code&&(d.a.commit("alert/showTipModel",{bool:!1,title:e.data.message,model:"warn"}),e.data)},function(e){return e.request.responseURL.indexOf("/member/balance")<=-1&&d.a.commit("alert/showTipModel",{bool:!0,title:"网络异常,请稍后重试。",model:"warn"}),e});var f=function(e,t){return c()({headers:{Accept:"application/x.tg.v2+json"},url:"/frontend/"+(o.default.prototype.$HOST_NAME?o.default.prototype.$HOST_NAME.substring(10):"v1")+"/"+e,method:"post",data:s()({},t)})},v=function(e,t){return c()({headers:{Accept:"application/x.tg.v2+json"},url:"/frontend/"+(o.default.prototype.$HOST_NAME?o.default.prototype.$HOST_NAME.substring(10):"v1")+"/"+e,method:"get",params:s()({},t)})};o.default.prototype.$getS=v,o.default.prototype.$http=c.a,o.default.prototype.$postS=f},RQcD:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Xxa5"),l=r.n(a),i=r("exGp"),n=r.n(i),s=r("xzxg"),c=r("LjVS"),o={data:function(){return{userName:"",intacode:"",password:"",password_confirmation:"",phoneNumber:"",pulicError:"",register:[],codeImg:"/static/public/image/common/code.jpg",captcha_key:"",code:"",agent:null,iscode:!1,islink:!0}},methods:{registerTest:function(){var o=this;return n()(l.a.mark(function e(){var t,r,a,i,n,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.validateAccountUserNamenew(o.userName),r=o.validateAccountnew(o.password),1!=o.iscode){e.next=6;break}if(o.intacode.length<6||6<o.intacode.length)return o.pulicError="请输入6位邀请码",e.abrupt("return",!1);e.next=6;break;case 6:if(t){e.next=9;break}return o.pulicError="帐号 6-10位数字或字母",e.abrupt("return",!1);case 9:if(r){e.next=12;break}return o.pulicError="密码 8-20位数字或字母",e.abrupt("return",!1);case 12:if(o.password!==o.password_confirmation)return o.pulicError="两次密码不一致",e.abrupt("return",!1);e.next=15;break;case 15:if(""===o.code)return o.pulicError="请输入验证码",e.abrupt("return",!1);e.next=18;break;case 18:if(o.code.length<4||4<o.code.length)return o.pulicError="请输入4位验证码",e.abrupt("return",!1);e.next=21;break;case 21:(a={}).userName=o.userName,a.password=o.password,a.code=o.code,a.captcha_key=o.captcha_key,i=!0,o.intacode&&(a.invite_code=o.intacode),n=0;case 29:if(!(n<o.register.length)){e.next=38;break}if(o.register[n].value){e.next=34;break}return o.pulicError=o.register[n].placeholder,i=!1,e.abrupt("break",38);case 34:a[o.register[n].key]=o.register[n].value;case 35:n++,e.next=29;break;case 38:if(i){e.next=40;break}return e.abrupt("return",!1);case 40:return o.agent&&(a.agent=o.agent),e.next=43,Object(c.a)(o.$HOST_NAME+"/checkUsername/"+o.userName,{});case 43:if(!(s=e.sent)||200!=s.code){e.next=47;break}e.next=49;break;case 47:return o.pulicError="帐号已存在",e.abrupt("return",!1);case 49:o.registerSubmit(a);case 50:case"end":return e.stop()}},e,o)}))()},registerSubmit:function(r){var a=this;return n()(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.c)("register",r);case 2:200==(t=e.sent).code?(s.a.setCachereg(t,"v1"),window.location.href="/"):a.dNotify(t.message,"error");case 4:case"end":return e.stop()}},e,a)}))()},login:function(){this.$store.commit("mainState/setChooseModel","登录"),this.$store.commit("mainState/setLoginTitle","登录")},getCode:function(){var t=this;if(!this.userName)return!1;this.$http.post(this.$HOST_NAME+"/captcha",{userName:this.userName}).then(function(e){200==e.code&&(t.codeImg=e.data.captcha_image_text,t.captcha_key=e.data.captcha_key)})}},created:function(){var r=this;this.$nextTick(function(){r.agent=r.GetQueryString("agent");var e=JSON.parse(localStorage.getItem("config")).register.pc,t=JSON.parse(localStorage.getItem("config")).site_model;r.iscode="invite_code"==t,e.forEach(function(e,t){switch(r.register[t]={},e){case"phone":r.register[t].placeholder="请输入手机号",r.register[t].value="",r.register[t].key=e,r.register[t].name="手机号";break;case"email":r.register[t].placeholder="请输入邮箱地址",r.register[t].value="",r.register[t].key=e,r.register[t].name="邮箱";break;case"wechat":r.register[t].placeholder="请输入微信号",r.register[t].value="",r.register[t].key=e,r.register[t].name="微信";break;case"realName":r.register[t].placeholder="请输入真实姓名",r.register[t].value="",r.register[t].key=e,r.register[t].name="真实姓名";break;case"payPassword":r.register[t].placeholder="请输入支付密码",r.register[t].value="",r.register[t].key=e,r.register[t].name="支付密码"}})})},store:r("YtJ0").a},d={render:function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("div",{staticClass:"register"},[r._m(0),r._v(" "),r._m(1),r._v(" "),a("div",{staticClass:"content clearfloat"},[r._m(2),r._v(" "),a("div",{staticClass:"right fr"},[a("div",{staticClass:"register-wrap"},[a("div",{staticClass:"list-box"},[r.iscode?a("div",{staticClass:"list"},[r._m(3),r._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:r.intacode,expression:"intacode"}],attrs:{placeholder:"请输入邀请码",type:"text"},domProps:{value:r.intacode},on:{keydown:function(e){r.pulicError=""},keyup:function(e){return!e.type.indexOf("key")&&r._k(e.keyCode,"enter",13,e.key,"Enter")?null:r.registerTest(e)},input:function(e){e.target.composing||(r.intacode=e.target.value)}}})]):r._e(),r._v(" "),a("div",{staticClass:"list"},[r._m(4),r._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:r.userName,expression:"userName"}],attrs:{placeholder:"帐号 6-10位数字或字母",type:"text"},domProps:{value:r.userName},on:{keydown:function(e){r.pulicError=""},keyup:function(e){return!e.type.indexOf("key")&&r._k(e.keyCode,"enter",13,e.key,"Enter")?null:r.registerTest(e)},blur:r.getCode,input:function(e){e.target.composing||(r.userName=e.target.value)}}})]),r._v(" "),a("div",{staticClass:"list"},[r._m(5),r._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:r.password,expression:"password"}],attrs:{placeholder:"密码 8-20位数字或字母",type:"password"},domProps:{value:r.password},on:{keydown:function(e){r.pulicError=""},keyup:function(e){return!e.type.indexOf("key")&&r._k(e.keyCode,"enter",13,e.key,"Enter")?null:r.registerTest(e)},input:function(e){e.target.composing||(r.password=e.target.value)}}})]),r._v(" "),a("div",{staticClass:"list"},[r._m(6),r._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:r.password_confirmation,expression:"password_confirmation"}],attrs:{placeholder:"请重复密码",type:"password"},domProps:{value:r.password_confirmation},on:{keydown:function(e){r.pulicError=""},keyup:function(e){return!e.type.indexOf("key")&&r._k(e.keyCode,"enter",13,e.key,"Enter")?null:r.registerTest(e)},input:function(e){e.target.composing||(r.password_confirmation=e.target.value)}}})]),r._v(" "),a("div",{staticClass:"list"},[r._m(7),r._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:r.code,expression:"code"}],attrs:{placeholder:"请输入验证码",type:"text"},domProps:{value:r.code},on:{keydown:function(e){r.pulicError=""},keyup:function(e){return!e.type.indexOf("key")&&r._k(e.keyCode,"enter",13,e.key,"Enter")?null:r.registerTest(e)},input:function(e){e.target.composing||(r.code=e.target.value)}}}),r._v(" "),a("span",{staticClass:"yzm_reg"},[a("img",{staticClass:"checkLoginCodeImage",attrs:{src:r.codeImg},on:{click:r.getCode}})])]),r._v(" "),r._l(r.register,function(t,e){return a("div",{key:e,staticClass:"list"},[a("label",[a("span",[r._v("*")]),r._v("\n              "+r._s(t.name)+"：\n            ")]),r._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.value},on:{keydown:function(e){r.pulicError=""},keyup:function(e){return!e.type.indexOf("key")&&r._k(e.keyCode,"enter",13,e.key,"Enter")?null:r.registerTest(e)},input:function(e){e.target.composing||r.$set(t,"value",e.target.value)}}})])}),r._v(" "),r.pulicError?a("div",{staticClass:"err"},[a("i",{staticClass:"iconfont icon-baojing"}),r._v(" "),a("span",{ref:"pulicError"},[r._v(r._s(r.pulicError))])]):r._e(),r._v(" "),a("div",{staticClass:"submit",on:{click:r.registerTest}},[r._v("\n            立即注册\n          ")]),r._v(" "),a("div",{staticClass:"treaty"},[r._v("完成即视为同意已满18岁，且同意各项开户条约。")])],2)])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"register-logo"},[t("img",{attrs:{src:"/static/klk/img/thirdparty/regbanner.jpg",alt:""}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reg_step"},[r("ul",[r("li",[r("i",[e._v("1")]),e._v("会员登录\n      ")]),e._v(" "),r("li",{staticClass:"active"},[r("i",[e._v("2")]),e._v("注册申请\n      ")]),e._v(" "),r("li",[r("i",[e._v("3")]),e._v("注册成功\n      ")]),e._v(" "),r("li",[r("i",[e._v("4")]),e._v("忘记密码\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"left fl"},[t("img",{attrs:{src:"/static/klk/img/thirdparty/left_banner.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",[this._v("*")]),this._v("\n              邀请码：\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",[this._v("*")]),this._v("\n              帐号：\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",[this._v("*")]),this._v("\n              密码：\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",[this._v("*")]),this._v("\n              重复密码：\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",[this._v("*")]),this._v("\n              验证码：\n            ")])}]};var p=r("VU/8")(o,d,!1,function(e){r("jUxf")},"data-v-d2133ffe",null);t.default=p.exports},jUxf:function(e,t,r){var a=r("C8Xw");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("591da560",a,!0,{})}});