(function(a){function t(t){for(var r,l,o=t[0],i=t[1],c=t[2],v=0,p=[];v<o.length;v++)l=o[v],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(a[r]=i[r]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var a,t=0;t<s.length;t++){for(var e=s[t],r=!0,o=1;o<e.length;o++){var i=e[o];0!==n[i]&&(r=!1)}r&&(s.splice(t--,1),a=l(l.s=e[0]))}return a}var r={},n={app:0},s=[];function l(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=a,l.c=r,l.d=function(a,t,e){l.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},l.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},l.t=function(a,t){if(1&t&&(a=l(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)l.d(e,r,function(t){return a[t]}.bind(null,r));return e},l.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return l.d(t,"a",t),t},l.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},l.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=i;s.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"034f":function(a,t,e){"use strict";var r=e("64a9"),n=e.n(r);n.a},"56d7":function(a,t,e){"use strict";e.r(t);e("14c6"),e("08c1"),e("4842"),e("d9fc");var r=e("2b0e"),n=e("8c4f"),s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("breadcrumb",{attrs:{breadcrumbs:a.breadcrumbs}}),e("h1",[a._v(a._s(a.msg))]),e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[a._v("Home")])],1),e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a._v("\n            Page1\n          ")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page1"}},[a._v("Page1")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/page1/2"}},[a._v("Page1-2")])],1)]),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page2"}},[a._v("Page2")])],1)])])])],1)},l=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("nav",{attrs:{"aria-label":"breadcrumb",role:"navigation"}},[e("ol",{staticClass:"breadcrumb"},[a._m(0),a._l(a.breadcrumbs,function(t,r){return e("li",{key:r,class:{"breadcrumb-item":t.path,"breadcrumb-item active":!t.path}},[t.path?e("router-link",{attrs:{to:t.path}},[a._v(a._s(t.title))]):e("span",[a._v(a._s(t.title))])],1)})],2)])},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"/"}},[a._v("Home")])])}],c={name:"breadcrumb",props:{breadcrumbs:{title:{default:""},path:{default:""}}}},u=c,v=e("2877"),p=Object(v["a"])(u,o,i,!1,null,null,null),d=p.exports;r["a"].component("breadcrumb",d);var b={name:"Home",data:function(){return{msg:"Home",breadcrumbs:[]}}},g=b,m=Object(v["a"])(g,s,l,!1,null,null,null),f=m.exports,C=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("breadcrumb",{attrs:{breadcrumbs:a.breadcrumbs}}),e("h1",[a._v(a._s(a.msg))]),e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[a._v("Home")])],1),e("li",{staticClass:"nav-item dropdown active"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a._v("\n            Page1\n          ")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[e("router-link",{staticClass:"nav-link active",attrs:{to:"/page1"}},[a._v("Page1")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/page1/2"}},[a._v("Page1-2")])],1)]),e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page2"}},[a._v("Page2")])],1)])])])],1)},_=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],h={name:"Page1",data:function(){return{msg:"Page1",breadcrumbs:[{title:"Page1"}]}}},k=h,w=Object(v["a"])(k,C,_,!1,null,null,null),P=w.exports,y=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("breadcrumb",{attrs:{breadcrumbs:a.breadcrumbs}}),e("h1",[a._v(a._s(a.msg))]),e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[a._v("Home")])],1),e("li",{staticClass:"nav-item dropdown active"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a._v("\n            Page1\n          ")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page1"}},[a._v("Page1")]),e("router-link",{staticClass:"nav-link active",attrs:{to:"/page1/2"}},[a._v("Page1-2")])],1)]),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page2"}},[a._v("Page2")])],1)])])])],1)},x=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],O={name:"Page1of2",data:function(){return{msg:"Page1-2",breadcrumbs:[{title:"Page1",path:"/page1"},{title:"Page1-2"}]}}},S=O,j=Object(v["a"])(S,y,x,!1,null,null,null),$=j.exports,E=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("breadcrumb",{attrs:{breadcrumbs:a.breadcrumbs}}),e("h1",[a._v(a._s(a.msg))]),e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[a._v("Home")])],1),e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a._v("\n            Page1\n          ")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page1"}},[a._v("Page1")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/page1/2"}},[a._v("Page1-2")])],1)]),e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page2"}},[a._v("Page2")])],1)])])])],1)},D=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],H={name:"Page2",data:function(){return{msg:"Page2",breadcrumbs:[{title:"Page2"}]}}},T=H,M=Object(v["a"])(T,E,D,!1,null,null,null),J=M.exports;r["a"].use(n["a"]);var q=new n["a"]({routes:[{path:"/",name:"home",component:f},{path:"/page1",name:"Page1",component:P},{path:"/page1/2",name:"Page1_2",component:$},{path:"/page2",name:"Page2",component:J}]}),z=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},A=[],B=(e("034f"),{}),F=Object(v["a"])(B,z,A,!1,null,null,null),G=F.exports;new r["a"]({router:q,render:function(a){return a(G)}}).$mount("#app")},"64a9":function(a,t,e){}});
//# sourceMappingURL=app.js.map