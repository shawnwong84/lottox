webpackJsonp([31],{ZdsZ:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"live-video animated   bounceInDown"},["1"===t.$route.query.id||"18"===t.$route.query.id||"19"===t.$route.query.id?e("a",{attrs:{href:"#/trend/1",target:"_blank"}},[e("div",{staticClass:"btn-box"})]):t._e(),t._v(" "),t.src?t._e():e("div",{staticClass:"noDatas"},[e("img",{attrs:{src:"/static/public/image/lottery/noDatas.jpg",alt:""}})]),t._v(" "),t.noDataStatus?t._e():e("iframe",{ref:"myFrame",staticClass:"animated  bounceInDown",staticStyle:{width:"1128px",height:"719.902px"},attrs:{src:t.src,width:"100%",scrolling:"no",height:"100%",frameborder:"0"}}),t._v(" "),e("div",{staticClass:"closeBt",on:{click:t.upClose}},[t._v("X")])])},staticRenderFns:[]};var c=e("VU/8")({props:{},data:function(){return{src:"",noDataStatus:!1}},watch:{$route:function(){}},methods:{upClose:function(){this.$emit("LotteryAnimateFc",!1)},classify:function(){var t=this.$route.meta.id;1===t||18===t||19===t?1===t&&(this.src="https://kj.kai861.com/view/video/SixColor_animate/index.html?10048?1682018.cn"):4===t||14===t||15===t||16===t||17===t?(4===t&&(this.src="https://kj.kai861.com/view/video/SSC/index.html?10002?1682018.cn"),14===t&&(this.src="https://kj.kai861.com/view/video/SSC/index.html?10004?1682018.cn"),15===t&&(this.src="https://kj.kai861.com/view/video/SSC/index.html?10003?1682018.cn")):2===t||12===t||3===t||13===t?2===t&&(this.src="https://kj.kai861.com/view/video/PK10/video.html?10001?1682018.cn"):10===t?10===t&&(this.src="https://kj.kai861.com/view/video/pcEgg_video/index.html?10046?1682018.cn"):2900===t||2901===t||2902===t||2903===t||2904===t||2905===t||2906===t||9===t||25===t||26===t||27===t?(2902===t&&(this.src="https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10026?1682018.cn"),26===t&&(this.src="https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10027?1682018.cn"),25===t&&(this.src="https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10030?1682018.cn"),2905===t&&(this.src="https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10032?1682018.cn"),2900===t&&(this.src="https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10033?1682018.cn")):7===t||21===t||22===t||23===t||24===t?(21===t&&(this.src="https://kj.kai861.com/view/video/11x5_video/index.html?10015?1682018.cn"),22===t&&(this.src="https://kj.kai861.com/view/video/11x5_video/index.html?10018?1682018.cn")):5===t||20===t||6===t||11!==t&&28!==t&&29!==t||(11===t&&(this.src="https://kj.kai861.com/view/video/fc3DVideo/index.html?10041?1682018.cn"),28===t&&(this.src="https://kj.kai861.com/view/video/fc3DVideo/index.html?10043?1682018.cn"))}},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.classify()})}},s,!1,function(t){e("vZYW")},"data-v-12338a42",null);i.default=c.exports},vZYW:function(t,i){}});