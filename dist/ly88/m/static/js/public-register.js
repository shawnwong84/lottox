webpackJsonp([37],{SGfs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("dVvR"),o=a.n(s);for(var n in s)"default"!==n&&function(e){a.d(t,e,function(){return s[e]})}(n);var i=a("UzDt");var r=function(e){a("wSWL")},c=a("VU/8")(o.a,i.a,!1,r,"data-v-88d5a69e",null);t.default=c.exports},UzDt:function(e,t,a){"use strict";var s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-box",style:{height:e.height+"px"}},[a("svg",{staticClass:"bg-img",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 100 35",preserveAspectRatio:"none"}},[a("defs",[a("path",{attrs:{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}})]),e._v(" "),a("g",{staticClass:"parallax"},[a("use",{attrs:{"xlink:href":"#gentle-wave",x:"50",y:"0"}}),e._v(" "),a("use",{attrs:{"xlink:href":"#gentle-wave",x:"50",y:"3"}}),e._v(" "),a("use",{attrs:{"xlink:href":"#gentle-wave",x:"50",y:"6"}})])]),e._v(" "),a("cube-scroll",[a("img",{staticClass:"logo",attrs:{src:"/m/static/img/logo-b.png?v=2019-05-14T20:04:05",alt:""}}),e._v(" "),a("div",{staticClass:"admin-input-box"},[a("label",{staticClass:"input-row"},[a("span",{staticClass:"icon iconfont h5-icon-new-index-user theme-color"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.modal.userName,expression:"modal.userName"}],staticClass:"input",attrs:{name:"user",type:"text",placeholder:"帐号(6-10位字母或数字)",autocomplete:"new-password"},domProps:{value:e.modal.userName},on:{input:function(t){t.target.composing||e.$set(e.modal,"userName",t.target.value)}}})]),e._v(" "),a("label",{staticClass:"input-row"},[a("span",{staticClass:"icon iconfont h5-icon-new-index-password theme-color"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.modal.password,expression:"modal.password"}],staticClass:"input",attrs:{name:"password",type:"password",placeholder:"密码(8-20位字母或数字)",autocomplete:"new-password"},domProps:{value:e.modal.password},on:{input:function(t){t.target.composing||e.$set(e.modal,"password",t.target.value)}}})]),e._v(" "),a("label",{staticClass:"input-row"},[a("span",{staticClass:"icon iconfont h5-icon-new-index-password theme-color"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.modal.password2,expression:"modal.password2"}],staticClass:"input",attrs:{name:"password",type:"password",placeholder:"请确认密码",autocomplete:"new-password"},domProps:{value:e.modal.password2},on:{input:function(t){t.target.composing||e.$set(e.modal,"password2",t.target.value)}}})]),e._v(" "),e._l(e.register,function(t,s){return a("label",{key:"input-"+s,staticClass:"input-row"},[a("span",{class:t.class+" theme-color"}),e._v(" "),"checkbox"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.modal[t.key],expression:"modal[item.key]"}],staticClass:"input",attrs:{name:t.key,maxlength:t.max,placeholder:t.placeholder,autocomplete:"new-password",type:"checkbox"},domProps:{checked:Array.isArray(e.modal[t.key])?e._i(e.modal[t.key],null)>-1:e.modal[t.key]},on:{change:function(a){var s=e.modal[t.key],o=a.target,n=!!o.checked;if(Array.isArray(s)){var i=e._i(s,null);o.checked?i<0&&e.$set(e.modal,t.key,s.concat([null])):i>-1&&e.$set(e.modal,t.key,s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.modal,t.key,n)}}}):"radio"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.modal[t.key],expression:"modal[item.key]"}],staticClass:"input",attrs:{name:t.key,maxlength:t.max,placeholder:t.placeholder,autocomplete:"new-password",type:"radio"},domProps:{checked:e._q(e.modal[t.key],null)},on:{change:function(a){return e.$set(e.modal,t.key,null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.modal[t.key],expression:"modal[item.key]"}],staticClass:"input",attrs:{name:t.key,maxlength:t.max,placeholder:t.placeholder,autocomplete:"new-password",type:t.type},domProps:{value:e.modal[t.key]},on:{input:function(a){a.target.composing||e.$set(e.modal,t.key,a.target.value)}}})])}),e._v(" "),a("label",{staticClass:"input-row auth"},[a("span",{staticClass:"icon iconfont h5-icon-new-index-yzm theme-color"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.modal.code,expression:"modal.code"}],staticClass:"input",attrs:{name:"code",type:"tel",placeholder:"验证码",autocomplete:"new-password"},domProps:{value:e.modal.code},on:{focus:e.refreshArchCode,input:function(t){t.target.composing||e.$set(e.modal,"code",t.target.value)}}}),e._v(" "),a("img",{staticClass:"auth-code-img",attrs:{src:e.$store.state.user.code.authImg,alt:""},on:{click:e.refreshArchCode}})]),e._v(" "),"invite_code"===e.siteModel?a("label",{staticClass:"input-row"},[a("span",{staticClass:"icon iconfont h5-icon-new-index-yqm theme-color"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.agent,expression:"agent"}],staticClass:"input",attrs:{name:"agent",type:"tel",placeholder:"请输入邀请码",autocomplete:"new-password",disabled:e.hasAgent},domProps:{value:e.agent},on:{input:function(t){t.target.composing||(e.agent=t.target.value)}}})]):e._e(),e._v(" "),a("vux-button",{staticClass:"submit-button",attrs:{type:"primary","action-type":"submit"},nativeOn:{click:function(t){return e.onRegister(t)}}},[e._v("立即注册\n      ")])],2),e._v(" "),a("p",{staticClass:"bottom"},[e._v("\n      已有帐号?\n      "),a("a",{staticClass:"tag-a",on:{click:function(t){return t.stopPropagation(),e.$router.push("/admin/login")}}},[e._v("立即登录")])]),e._v(" "),a("div",{staticStyle:{width:"100%",height:"100px"}})])],1)},staticRenderFns:[]};t.a=s},dVvR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(a("475x"));a("+iqb");var o=n(a("qhTv"));function n(e){return e&&e.__esModule?e:{default:e}}t.default={mixins:[o.default],components:{vantSwitch:s.default},name:"Register",data:function(){return{modal:{userName:"",password:"",password2:"",archCode:""},agent:"",hasAgent:!1,record:!1,submitted:!1,height:window.document.documentElement.offsetHeight}},computed:{siteModel:function(){return this.$store.state.main.config.site_model},register:function(){try{if(!JSON.parse(localStorage.config))return[];var e=JSON.parse(localStorage.config).register.h5,t=[];return e.forEach(function(e,a){switch(t[a]={},e){case"phone":t[a].placeholder="请输入手机号",t[a].name="手机号",t[a].class="icon iconfont h5-icon-new-index-phone",t[a].value="",t[a].key=e,t[a].type="tel",t[a].check=/^1[\d]{10}$/,t[a].max=11;break;case"email":t[a].placeholder="请输入邮箱地址",t[a].name="邮箱地址",t[a].class="icon iconfont h5-icon-new-index-mail",t[a].value="",t[a].key=e,t[a].type="text",t[a].check=/^[A-z\d_]+@[A-z\d_]+\.[a-z]+$/,t[a].max=99;break;case"wechat":t[a].placeholder="请输入微信号",t[a].name="微信号",t[a].class="icon iconfont h5-icon-new-index-weixin",t[a].value="",t[a].key=e,t[a].type="text",t[a].check=/^[\S]+$/,t[a].max=32;break;case"realName":t[a].placeholder="请输入真实姓名",t[a].name="真实姓名",t[a].class="icon iconfont h5-icon-new-index-realname",t[a].value="",t[a].key=e,t[a].type="text",t[a].check=/^[\S]+$/,t[a].max=10;break;case"payPassword":t[a].placeholder="请输入支付密码",t[a].name="支付密码",t[a].class="icon iconfont h5-icon-new-index-password",t[a].value="",t[a].key=e,t[a].type="password",t[a].check=/^[\d]{6}$/,t[a].max=6}}),t}catch(e){return[]}}},watch:{archCode:function(){this.modal.archCode=this.archCode},"modal.userName":function(){this.modal.userName?this.$store.state.user.code.authImg||this.refreshArchCode():this.$store.state.user.code={authImg:"",code:""}}},created:function(){localStorage.agent&&(this.agent=localStorage.agent,this.hasAgent=!0)},methods:{onRegister:function(){var e=this;this.submitted||this.checkUserForRegister(this.modal.userName)&&this.checkPasswordForRegister(this.modal.password)&&this.checkPassword2(this.modal.password,this.modal.password2)&&this.register.every(function(t){var a=!0;return e.modal[t.key]?(e.$set(e.modal,t.key,e.modal[t.key].replace(/\s/g,"")),t.check.test(e.modal[t.key])?a=!0:(a=!1,e.toastText("请输入正确的"+t.name,"top"))):(a=!1,e.toastText(t.name+"不能为空","top")),a})&&("invite_code"!==this.siteModel||this.checkAgent(this.agent))&&this.checkCode(this.modal.code)&&(this.submitted=!0,"invite_code"!==this.siteModel&&"invite_link"!==this.siteModel||(this.modal.agent=this.modal.invite_code=this.agent),this.$store.dispatch("user/register",{data:this.modal,record:this.record,callback:function(t){e.submitted=!1,"string"==typeof t?e.toastText(t,"top"):200===t.code?(e.$store.dispatch("user/refreshBalance",{callback:function(t){t.code&&200!==t.code&&(t.message.includes("设备上登录")||t.message.includes("请登录"))&&(e.$store.commit("user/clean"),e.$router.push("/"),e.toastText(t.message,window.TOAST_POSITION.TOP))}}),e.$store.dispatch("user/refreshBank").then(),setTimeout(function(){this.$router.push("/")}.bind(e),100)):t.msg?e.toastText(t.msg,"top"):t.message?e.toastText(t.message,"top"):e.toastText("注册失败","top")}}))},refreshArchCode:function(){this.$store.dispatch("user/refreshAuthCode",{userName:this.userName})}}}},wSWL:function(e,t){}});