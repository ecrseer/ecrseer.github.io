(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"06a1":function(t,e,n){"use strict";n("0ea3")},"0ea3":function(t,e,n){},1771:function(t,e,n){var r={"./gdrive.png":"d120","./imgs":"5620","./libfy.png":"49ab","./logo.png":"cf05","./starwr.png":"5f1b","./ytime.png":"89d9"};function a(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=s,t.exports=a,a.id="1771"},"49ab":function(t,e,n){t.exports=n.p+"img/libfy.5dc43b87.png"},5620:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("index")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("Descricao"),n("BottomNav")],1)},o=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"navbar"},[n("a",{attrs:{href:"https://www.github.com/ecrseer"}},[n("span",{staticClass:"fab fa-github"})]),n("nav",{attrs:{id:"navbarinside"}},[n("nav",{attrs:{id:"navbarinside"}},[n("ul",{staticClass:"nav nav-pills"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#meusprojetos"}},[t._v("Meus projetos")])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#sobremim"}},[t._v("Sobre mim")])])])])]),n("a",{attrs:{href:"https://www.linkedin.com/in/gabriel-justino-147246169/"}},[n("span",{staticClass:"fab fa-linkedin-in"})])])}],u={name:"BottomNav",props:{msg:String}},d=u,p=(n("8ea1"),n("2877")),f=Object(p["a"])(d,c,l,!1,null,"df3192e8",null),b=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"mx-auto ",attrs:{"data-spy":"scroll","data-target":"#navbarinside","data-offset":"0"}},[n("div",{staticClass:"row"},[n("section",{staticClass:"col-11 col-sm-6 shadow-lg  bg-body rounded",attrs:{id:"meusprojetos"}},[n("h6",{staticClass:"d-block text-center"},[t._v("Projetos")]),n("a",{attrs:{href:"libfyinfnet.netlify.app/"}},[n("div",{staticClass:"pullc border bs rounded",style:t.imgLibfy})]),n("a",{attrs:{href:"http://time2shareyt.vercel.app/"}},[n("div",{staticClass:"pullc border bs rounded",style:t.imgYt})]),n("a",{attrs:{href:"https://gd-sheet-y2.vercel.app/"}},[n("div",{staticClass:"pullc border bs rounded",style:t.imgGd})]),n("a",{attrs:{href:"https://g4br13l-ju5t1n0.vercel.app/"}},[n("div",{staticClass:"pullc border bs rounded",style:t.imgSw})])]),t._m(0)])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sobremim col-12 col-sm-4 shadow-lg  bg-body rounded",attrs:{id:"sobremim"}},[n("p",[t._v("Descrição academica")]),n("div",{staticClass:"card rounded shadow-lg"},[n("main",{staticClass:"card-body"},[n("p",[t._v("Gabriel Justino")]),n("h4",[t._v("Instituto INFNET")]),n("p",[t._v("Engenharia de software")])])]),n("div",{staticClass:"card rounded shadow-lg"},[n("main",{staticClass:"card-body"},[n("h4",[t._v("---")]),n("p",[t._v("---")])])])])}],g={name:"Descricao",data:function(){var t,e,r,a,s=function(t){var e=n("1771")("./".concat(t));return{"background-image":"url(".concat(e,")")}};return e=s("gdrive.png"),t=s("ytime.png"),r=s("starwr.png"),a=s("libfy.png"),{imgGd:e,imgYt:t,imgSw:r,imgLibfy:a}},props:{msg:String}},h=g,y=(n("06a1"),Object(p["a"])(h,v,m,!1,null,"27ca38c9",null)),_=y.exports,w={components:{Descricao:_,BottomNav:b},name:"Index"},C=w,x=(n("c9c1"),Object(p["a"])(C,i,o,!1,null,null,null)),j=x.exports,O={components:{index:j},name:"App"},k=O,E=(n("034f"),Object(p["a"])(k,a,s,!1,null,null,null)),S=E.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(S)}}).$mount("#app")},"5f1b":function(t,e,n){t.exports=n.p+"img/starwr.b05aecf1.png"},"85ec":function(t,e,n){},"89d9":function(t,e,n){t.exports=n.p+"img/ytime.fd459ae3.png"},"8ea1":function(t,e,n){"use strict";n("dd3e")},"956c":function(t,e,n){},c9c1:function(t,e,n){"use strict";n("956c")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d120:function(t,e,n){t.exports=n.p+"img/gdrive.8b7621d2.png"},dd3e:function(t,e,n){}});
//# sourceMappingURL=app.df0a926c.js.map