(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],n[o]&&p.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00a2":function(t,e,a){},"436d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),n=a("ce5b"),i=a.n(n),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-layout",[a("v-flex",[a("v-flex",{attrs:{xs12:""}},["About Me"===t.currentSelection?a("div",[a("v-parallax",{attrs:{src:t.bannerImg1}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[a("h1",{staticClass:"text-uppercase display-3"},[t._v("About Me")])])],1)],1):"Projects"===t.currentSelection?a("div",[a("v-parallax",{attrs:{src:t.bannerImg1}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[a("h1",{staticClass:"text-uppercase display-3"},[t._v("Projects")])])],1)],1):"Experience"===t.currentSelection?a("div",[a("v-parallax",{attrs:{src:t.bannerImg1}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[a("h1",{staticClass:"text-uppercase display-3"},[t._v("Experience")])])],1)],1):t._e()]),a("v-toolbar",[a("v-toolbar-title",{staticClass:"text-uppercase"},[a("span",[t._v("David Fentz")]),a("span",{staticClass:"font-weight-light"},[t._v(" Portfolio")])]),a("v-spacer"),a("v-btn",{attrs:{flat:"",target:"_blank"},on:{click:function(e){t.currentSelection="About Me"}}},[a("span",{staticClass:"mr-2"},[t._v("About Me")])]),a("v-btn",{attrs:{flat:"",target:"_blank"},on:{click:function(e){t.currentSelection="Projects"}}},[a("span",{staticClass:"mr-2"},[t._v("Projects")])]),a("v-btn",{attrs:{flat:"",target:"_blank"},on:{click:function(e){t.currentSelection="Experience"}}},[a("span",{staticClass:"mr-2"},[t._v("Experience")])])],1),a("v-card",["About Me"===t.currentSelection?a("v-content",[a("AboutMe")],1):t._e(),"Experience"===t.currentSelection?a("v-content",[a("Experience")],1):t._e(),"Projects"===t.currentSelection?a("v-content",[a("Projects")],1):t._e()],1),a("div",{staticClass:"footer-div"},[a("a",{staticClass:"footer-links",attrs:{href:"https://www.linkedin.com/in/davidfentz/"}},[t._v("LinkedIn")]),a("a",{staticClass:"footer-links",attrs:{href:"https://github.com/bomjumaku"}},[t._v("Github")]),a("a",{staticClass:"footer-links",attrs:{href:"https://github.com/bomjumaku/portfolio"}},[t._v("This Site's Source Code")])])],1)],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-md5":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[a("v-card",[a("v-img",{attrs:{src:t.image1}})],1)],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md3:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":""}},[a("v-card",{attrs:{color:"indigo",dark:""}},[a("v-card-text",[t._v(t._s(t.lorem.slice(0,70)))])],1)],1),a("v-flex",{attrs:{"d-flex":""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(2,function(e){return a("v-flex",{key:e,attrs:{"d-flex":"",xs12:""}},[a("v-card",{attrs:{color:"red lighten-2",dark:""}},[a("v-card-text",[t._v(t._s(t.lorem.slice(0,40)))])],1)],1)}))],1)],1)],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md2:"","child-flex":""}},[a("v-card",{attrs:{color:"green lighten-2",dark:""}},[a("v-card-text",[t._v(t._s(t.lorem.slice(0,90)))])],1)],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md3:""}},[a("v-card",{attrs:{color:"blue lighten-2",dark:""}},[a("v-card-text",[t._v(t._s(t.lorem.slice(0,100)))])],1)],1)],1)],1)},c=[],u={data:function(){return{image1:a("6168"),lorem:"Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus,\n       nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in,\n        mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos."}}},d=u,p=(a("ea41"),a("2877")),f=a("6544"),v=a.n(f),m=a("b0af"),b=a("99d9"),x=a("a523"),h=a("0e8f"),_=a("adda"),g=a("a722"),y=Object(p["a"])(d,l,c,!1,null,null,null);y.options.__file="AboutMe.vue";var w=y.exports;v()(y,{VCard:m["a"],VCardText:b["a"],VContainer:x["a"],VFlex:h["a"],VImg:_["a"],VLayout:g["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-container",[t._v("\n      Ideally, I'll add some text here explaining what this section is!\n    ")]),a("v-timeline",t._l(t.History,function(e){return a("v-timeline-item",{key:e.description,attrs:{color:"red lighten-2",large:""}},[a("span",{attrs:{slot:"opposite"},slot:"opposite"},[t._v(t._s(e.time))]),a("v-card",{staticClass:"elevation-2"},[a("v-card-title",{staticClass:"headline"},[t._v(t._s(e.description))]),a("v-card-text",[t._v("\n        "+t._s(e.details)+"\n      ")])],1)],1)}))],1)},j=[],S={data:function(){return{History:[{time:"2011",description:"Purdue University",details:"Studied Mechanical Engineering and Film & Video..."},{time:"2013",description:"Summer Kitchen Family Farm",details:"Fed & milked cows, planted basil, learned to brew mead, hiked in the mountains."},{time:"2014",description:"Starbucks & ASU",details:"Started working as a barista and attending Arizona State University for Software Engineering."},{time:"June-August 2018",description:"Application Security Internship",details:"Worked with the amazing AppSec team at Starbucks. I developed a service which scans Github through their public API to detect leaked information. I also learned a bit about web pentesting and Andriod APK hacking."},{time:"2018",description:"Keyot",details:"Accepted an offer with Keyot, a small consulting firm, as a Software Developer Consultant. "}]}}},C=S,V=(a("d40e"),a("12b2")),A=a("8414"),P=a("1e06"),E=Object(p["a"])(C,k,j,!1,null,null,null);E.options.__file="Experience.vue";var M=E.exports;v()(E,{VCard:m["a"],VCardText:b["a"],VCardTitle:V["a"],VContainer:x["a"],VTimeline:A["a"],VTimelineItem:P["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{attrs:{id:"temp",xs12:""}},[t._v("\n    Projects\n    ")])],1)],1)},I=[],O={},F=O,L=(a("f6ca"),Object(p["a"])(F,T,I,!1,null,null,null));L.options.__file="Projects.vue";var $=L.exports;v()(L,{VContainer:x["a"],VFlex:h["a"],VLayout:g["a"]}),window.alert("This website is under construction, updated daily.");var z={name:"App",components:{AboutMe:w,Projects:$,Experience:M},data:function(){return{bannerImg1:a("df72"),currentSelection:"About Me"}},methods:{}},K=z,q=(a("ab7e"),a("7496")),J=a("8336"),U=a("549c"),D=a("8b9c"),G=a("9910"),H=a("71d9"),B=a("2a7f"),R=Object(p["a"])(K,o,s,!1,null,"6dddce62",null);R.options.__file="App.vue";var W=R.exports;v()(R,{VApp:q["a"],VBtn:J["a"],VCard:m["a"],VContent:U["a"],VFlex:h["a"],VLayout:g["a"],VParallax:D["a"],VSpacer:G["a"],VToolbar:H["a"],VToolbarTitle:B["a"]});a("bf40");r["default"].config.productionTip=!1,r["default"].use(i.a),new r["default"]({render:function(t){return t(W)}}).$mount("#app")},"5ac8":function(t,e,a){},6168:function(t,e,a){t.exports=a.p+"img/6223.994ff0d1.jpeg"},a896:function(t,e,a){},ab7e:function(t,e,a){"use strict";var r=a("436d"),n=a.n(r);n.a},d40e:function(t,e,a){"use strict";var r=a("5ac8"),n=a.n(r);n.a},df72:function(t,e,a){t.exports=a.p+"img/myface.bb50d280.jpg"},ea41:function(t,e,a){"use strict";var r=a("a896"),n=a.n(r);n.a},f6ca:function(t,e,a){"use strict";var r=a("00a2"),n=a.n(r);n.a}});
//# sourceMappingURL=app.2cc672f3.js.map