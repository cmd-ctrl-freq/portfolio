(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],d=0,f=[];d<s.length;d++)o=s[d],r[o]&&f.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00a2":function(e,t,n){},"15b3":function(e,t,n){},"2a04":function(e,t,n){e.exports=n.p+"img/TensegrityTower.145763ce.png"},"54e3":function(e,t,n){e.exports=n.p+"img/sdrcap.c3d5aeca.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=n("ce5b"),i=n.n(r),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-layout",[n("v-flex",[n("v-flex",["About Me"===e.currentSelection?n("div",[n("v-img",{attrs:{height:"300",src:e.bannerImg1}},[n("v-layout",{attrs:{"align-center":"",column:"","justify-center":"","fill-height":"300"}},[n("h1",{staticClass:"text-uppercase display-3",attrs:{id:"Banner-Message"}},[e._v("About Me")])])],1)],1):"Projects"===e.currentSelection?n("div",[n("v-img",{attrs:{height:"300",src:e.bannerImg1}},[n("v-layout",{attrs:{"align-center":"",column:"","justify-center":"","fill-height":"300"}},[n("h1",{staticClass:"text-uppercase display-3",attrs:{id:"Banner-Message"}},[e._v("Projects")])])],1)],1):"Experience"===e.currentSelection?n("div",[n("v-img",{attrs:{height:"300",src:e.bannerImg1}},[n("v-layout",{attrs:{"align-center":"",column:"","justify-center":"","fill-height":"300"}},[n("h1",{staticClass:"text-uppercase display-3",attrs:{id:"Banner-Message"}},[e._v("Experience")])])],1)],1):e._e()]),n("v-toolbar",[n("v-flex",{staticClass:"hidden-xs-only"},[n("v-toolbar-title",{staticClass:"text-uppercase"},[n("span",[e._v("David Fentz")]),n("span",{staticClass:"font-weight-light"},[e._v(" Portfolio")])]),n("v-spacer")],1),n("v-btn",{attrs:{flat:"",target:"_blank"},on:{click:function(t){e.currentSelection="About Me"}}},[n("span",{staticClass:"mr-2",attrs:{xs4:""}},[e._v("About Me")])]),n("v-btn",{attrs:{flat:"",target:"_blank"},on:{click:function(t){e.currentSelection="Projects",e.currentProject="None"}}},[n("span",{staticClass:"mr-2",attrs:{xs4:""}},[e._v("Projects")])]),n("v-btn",{attrs:{flat:"",target:"_blank"},on:{click:function(t){e.currentSelection="Experience"}}},[n("span",{staticClass:"mr-2",attrs:{xs4:""}},[e._v("Experience")])])],1),n("v-card",["About Me"===e.currentSelection?n("v-content",[n("AboutMe")],1):e._e(),"Experience"===e.currentSelection?n("v-content",[n("Experience")],1):e._e(),"Projects"===e.currentSelection?n("v-content",[n("Projects",{attrs:{currentProject:e.currentProject},on:{changeProject:function(t){e.updateProj(t)}}})],1):e._e()],1),n("div",{staticClass:"footer-div"},[n("a",{staticClass:"footer-links",attrs:{href:"https://www.linkedin.com/in/davidfentz/"}},[e._v("LinkedIn")]),n("a",{staticClass:"footer-links",attrs:{href:"https://github.com/bomjumaku"}},[e._v("Github")]),n("a",{staticClass:"footer-links",attrs:{href:"https://github.com/bomjumaku/portfolio"}},[e._v("This Site's Source Code")])])],1)],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","grid-list-md5":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[n("v-card",[n("v-img",{attrs:{src:e.image1}})],1)],1),n("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md8:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{id:"AboutMeMessage"}},[n("p",[e._v("\n            Hello there, My name is David and (if you haven't noticed) you're on my portfolio.\n             This isn't LinkedIn,\n             so I'm going to go into a bit more detail about myself, my hobbies, and my\n             experiences. Hopefully a bit more of my personality can shine through here!\n            ")]),n("p",[e._v("\n              This space is built primarily as an exposition of computational prowess.\n              However, I also want to give you some conception of what I'm like as a person.\n              Here are a few fun facts:\n            ")]),n("ul",[n("li",[e._v(" I love to cook. I'm currently perfecting my searing techniques after\n                immersing myself into the world of using sous vide for proteins.\n              ")]),n("li",[e._v(" Mindfulness techniques are an important (and often underutilized)\n                set of tools in my arsenal for maintaining a semblance of sanity in\n                 the modern world.\n              ")]),n("li",[e._v(" If I had it my way, I would only wear toe shoes. I honestly can't stand\n                traditional footwear, so I'm almost always wearing some form of minimalist\n                shoe.\n              ")]),n("li",[e._v(" I love coffee, tea, yerba mate, chocolate, etc. I have a lot of respect\n                for the chemical relationships which are formed between man and plant. I'm\n                really a purist when it comes to psychotropic botanicals, and I'm generally\n                picky about what I put on/into my body, so I geek out about how these substances\n                are grown, processed, transported, served, and consumed.\n              ")]),n("li",[e._v(" I love hacking. My next career goal is to become a penetration tester for\n                an independant security firm or a red teamer for a larger business. I am so\n                interested in how computer (and physical) systems are intended to operate,\n                and how they fail to do so.\n              ")])]),n("p",{attrs:{hidden:""}},[e._v("\n              I'm pretty much always doing something interesting. If you've got interesting\n               problems to solve and you need help, or just have a random question, feel\n               free to contact me.\n            ")])])],1)],1)],1)],1)},c=[],u={data:function(){return{image1:n("6c3b")}}},d=u,f=(n("ea41"),n("2877")),p=n("6544"),m=n.n(p),v=n("b0af"),h=n("a523"),y=n("0e8f"),g=n("adda"),b=n("a722"),w=Object(f["a"])(d,l,c,!1,null,null,null);w.options.__file="AboutMe.vue";var _=w.exports;m()(w,{VCard:v["a"],VContainer:h["a"],VFlex:y["a"],VImg:g["a"],VLayout:b["a"]});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-container",[n("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[n("a",{attrs:{href:"downloadable/david_fentz_resume_2018_oct.pdf",download:""}},[e._v("Looking for my Resume?")])])],1),n("v-container",{staticClass:"hidden-sm-and-down"},[n("v-timeline",e._l(e.History,function(t){return n("v-timeline-item",{key:t.description,attrs:{color:"red lighten-2",large:""}},[n("span",{attrs:{slot:"opposite"},slot:"opposite"},[e._v(e._s(t.time))]),n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[e._v(e._s(t.description))]),n("v-card-text",[e._v("\n            "+e._s(t.details)+"\n          ")])],1)],1)}))],1),n("v-container",{staticClass:"hidden-md-and-up"},[n("v-timeline",{attrs:{dense:""}},e._l(e.History,function(t){return n("v-timeline-item",{key:t.description,attrs:{color:"red lighten-2",large:""}},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[e._v("\n            "+e._s(t.description)+" ("+e._s(t.time)+")\n          ")]),n("v-card-text",[e._v("\n            "+e._s(t.details)+"\n          ")])],1)],1)}))],1)],1)},I=[],j={data:function(){return{History:[{time:"2011",description:"Purdue University",details:'This was my first foray into academia, and I didn\'t really have any idea what I wanted to do so I studied Mechanical Engineering for a year. In my second year I studied Film & Video before reading "The Way of Zen" by Alan Watts and subsequently dropping out. I built the foundation for my engineering mindset during this period of time, and developed capacities to analyze finer media (which I now consider invaluable) from my studies in liberal arts.'},{time:"2013",description:"Summer Kitchen Family Farm",details:"After dropping out of college with the idea that I would become a buddhist monk (You can draw your own conclusions about how that went, haha), I decided to spend the summer working on organic farms. I got really lucky and landed in Fayetteville Arkansas with Mariah and Ira White. I fed & milked cows, planted basil, learned to brew mead, and hiked in the mountains. I learned a LOT about where my food comes from and what a happy family looks like."},{time:"2014",description:"Starbucks & ASU",details:"After deciding that becoming a farmer was not the optimal path for my life (enjoyable as it was) I joined Starbucks as a Barista and started looking for opportunities to get an education. Starbucks had a minimal tuition assistance program at the time, so I spend about a year re-building my GPA at Purdue before being accepted at ASU as a Software Engineering major. I spent a few years working part time and going to school full time."},{time:"June-August 2018",description:"Application Security Internship",details:"The culmination of all of that work was my internship with the Application Security team at Starbucks. This was an amazing experience inside and outside of the office. I made life-long friends and professional contacts that I still talk with today. I learned the basics of penetration testing web applications and Andriod applications. During this period of time I also built the coolest thing to date, a service/tool which scans GitHub for leaked information. The cherry on top... it actually returns repositories containing sensitive information."},{time:"2018-Present",description:"Keyot",details:"I'm employed as a Software Developer Consultant with Keyot, and will be working with Principal Financial Group in Des Moines, Iowa. I'm finishing up my degree, and plan to pivot my education to offensive security in the near future."}]}}},k=j,P=(n("d40e"),n("99d9")),C=n("12b2"),S=n("8414"),T=n("1e06"),V=Object(f["a"])(k,x,I,!1,null,null,null);V.options.__file="Experience.vue";var A=V.exports;m()(V,{VCard:v["a"],VCardText:P["a"],VCardTitle:C["a"],VContainer:h["a"],VLayout:b["a"],VTimeline:S["a"],VTimelineItem:T["a"]});var M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-flex",["None"===e.currentProject?n("v-container",{attrs:{fluid:"","grid-list-md5":""}},[n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.myProjects,function(t){return n("v-flex",{key:t.Title,attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(a){var r=a.hover;return n("v-card",{class:"elevation-"+(r?12:2),on:{click:function(n){e.updateProject(t.Title)}}},[n("v-img",{attrs:{src:t.image,height:"300"}}),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[e._v(e._s(t.Title))]),n("div",[e._v(e._s(t.description))])])])],1)}}])})],1)}))],1):e._e(),"Tensegrity Tower"===e.currentProject?n("v-flex",[e._v("\n    Tensegrity Tower\n  ")]):e._e(),"Lab Bench Power Supply"===e.currentProject?n("v-flex",[e._v("\n   Lab Bench Power Supply\n  ")]):e._e(),"RF Replay Attack"===e.currentProject?n("v-flex",[e._v("\n    RF Replay Attack\n  ")]):e._e()],1)},O=[],E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","grid-list-md5":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[n("v-card")],1),n("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md8:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{id:"AboutMeMessage"}},[n("p",[e._v("\n            Bing Bong your tactic will work!\n            ")])])],1)],1)],1)],1)},F=[],B={data:function(){return{}}},L=B,H=(n("7f40"),Object(f["a"])(L,E,F,!1,null,null,null));H.options.__file="Project1.vue";H.exports;m()(H,{VCard:v["a"],VContainer:h["a"],VFlex:y["a"],VLayout:b["a"]});var z={props:["currentProject"],data:function(){return{image1:n("6c3b"),myProjects:[{Title:"Tensegrity Tower",image:n("2a04"),description:"Building a completely useless and mezmerizing luminescent structure."},{Title:"Lab Bench Power Supply",image:n("b343"),description:"Managing not to electrocute myself while converting a PC power supply to a bench power supply."},{Title:"RF Replay Attack",image:n("54e3"),description:"Capturing Key-FOB RF packets and replaying them at will."}]}},methods:{updateProject:function(e){this.$emit("changeProject",e)}}},R=z,$=(n("f6ca"),n("ce87")),D=Object(f["a"])(R,M,O,!1,null,null,null);D.options.__file="Projects.vue";var q=D.exports;m()(D,{VCard:v["a"],VCardTitle:C["a"],VContainer:h["a"],VFlex:y["a"],VHover:$["a"],VImg:g["a"],VLayout:b["a"]});var G={name:"App",components:{AboutMe:_,Projects:q,Experience:A},data:function(){return{bannerImg1:n("df72"),currentSelection:"About Me",currentProject:"None"}},methods:{updateProj:function(e){this.currentProject=e}}},K=G,J=(n("cf58"),n("7496")),N=n("8336"),U=n("549c"),W=n("9910"),Y=n("71d9"),Z=n("2a7f"),Q=Object(f["a"])(K,o,s,!1,null,"93def956",null);Q.options.__file="App.vue";var X=Q.exports;m()(Q,{VApp:J["a"],VBtn:N["a"],VCard:v["a"],VContent:U["a"],VFlex:y["a"],VImg:g["a"],VLayout:b["a"],VSpacer:W["a"],VToolbar:Y["a"],VToolbarTitle:Z["a"]});n("bf40");a["default"].config.productionTip=!1,a["default"].use(i.a),new a["default"]({render:function(e){return e(X)}}).$mount("#app")},"5ac8":function(e,t,n){},"6c3b":function(e,t,n){e.exports=n.p+"img/HoldingCoffeeInSeattle.994ff0d1.jpeg"},"7f40":function(e,t,n){"use strict";var a=n("f8f9"),r=n.n(a);r.a},a896:function(e,t,n){},b343:function(e,t,n){e.exports=n.p+"img/PowerSupply.275f574a.jpg"},cf58:function(e,t,n){"use strict";var a=n("15b3"),r=n.n(a);r.a},d40e:function(e,t,n){"use strict";var a=n("5ac8"),r=n.n(a);r.a},df72:function(e,t,n){e.exports=n.p+"img/myface.bb50d280.jpg"},ea41:function(e,t,n){"use strict";var a=n("a896"),r=n.n(a);r.a},f6ca:function(e,t,n){"use strict";var a=n("00a2"),r=n.n(a);r.a},f8f9:function(e,t,n){}});
//# sourceMappingURL=app.fe7dbe7f.js.map