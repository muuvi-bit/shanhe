webpackJsonp([10],{RxBX:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("q4TV"),s={name:"Software",data:function(){return{id:"001",softwareList:[{id:"001",path:"/software/smartTown",name:"Tessai资管后台系统"},{id:"002",path:"/software/bigData",name:"Tessai客户端系统"}]}},mounted:function(){(new i.WOW).init()},methods:{switchTab:function(t){this.id=t.id;var a={path:t.path,params:{}};this.$router.push(a)}}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container",attrs:{id:"Software"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 col-xs-12",attrs:{id:"left"}},[e("ul",{staticClass:"left-container wow bounceInLeft"},[e("p",[t._v("软件产品")]),t._v(" "),t._l(t.softwareList,function(a,i){return e("li",{key:i,class:a.id==t.id?"active":"",on:{click:function(e){return t.switchTab(a)}}},[t._v("\n                    "+t._s(a.name)+"\n                ")])})],2)]),t._v(" "),e("div",{staticClass:"col-md-8 col-xs-12  wow bounceInRight",attrs:{id:"right"}},[e("router-view")],1)])])},staticRenderFns:[]};var r=e("VU/8")(s,n,!1,function(t){e("cZA2")},"data-v-3c1896df",null);a.default=r.exports},cZA2:function(t,a){}});
//# sourceMappingURL=10.5e131b5cac3c15192dd5.js.map