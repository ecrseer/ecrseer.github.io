(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},1771:function(e,t,a){var n={"./gdrive.png":"d120","./imgs":"5620","./libfy.png":"49ab","./logo.png":"cf05","./starwr.png":"5f1b","./ytime.png":"89d9"};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id="1771"},"49ab":function(e,t,a){e.exports=a.p+"img/libfy.5dc43b87.png"},5620:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-dark text-white",attrs:{id:"app"}},[a("Index"),a("BottomNav")],1)},r=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"navbar"},[a("a",{attrs:{href:"https://www.github.com/ecrseer"}},[a("span",{staticClass:"fab fa-github"})]),a("nav",{attrs:{id:"navbarinside"}},[a("nav",{attrs:{id:"navbarinside"}},[a("ul",{staticClass:"nav nav-pills"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#meusprojetos"}},[e._v("Meus projetos")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#sobremim"}},[e._v("Sobre mim")])])])])]),a("a",{attrs:{href:"https://www.linkedin.com/in/gabriel-justino-147246169/"}},[a("span",{staticClass:"fab fa-linkedin-in"})])])}],c={name:"BottomNav",props:{msg:String}},l=c,d=(a("bc2b"),a("2877")),u=Object(d["a"])(l,o,s,!1,null,"6164630a",null),p=u.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Descricao")],1)},g=[],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{attrs:{"data-spy":"scroll","data-target":"#navbarinside","data-offset":"0"}},[a("div",{staticClass:"row"},[a("section",{staticClass:"ml-4 col-11 shadow-lg bg-body rounded",class:e.divClicadaTamanho,attrs:{id:"meusprojetos"},on:{click:e.recalculaTamanho}},[a("h6",{staticClass:"d-block text-center"},[e._v("Projetos")]),a("RadioContainer",{attrs:{selectPg:e.selectPg,pagina:"libfy",dados:e.DADOSPAGINAS.libfy}}),a("RadioContainer",{attrs:{selectPg:e.selectPg,pagina:"gdrive",dados:e.DADOSPAGINAS.gdrive}}),a("RadioContainer",{attrs:{selectPg:e.selectPg,pagina:"starwr",dados:e.DADOSPAGINAS.starwr}}),a("RadioContainer",{attrs:{selectPg:e.selectPg,pagina:"ytime",dados:e.DADOSPAGINAS.ytime}})],1),a("section",{staticClass:"sobremim col-12 col-sm-4 shadow-lg bg-body rounded",attrs:{id:"sobremim"}},[a("p",[e._v("Descrição academica")]),e._m(0),a("div",{staticClass:"card bg-dark rounded shadow-lg"},[a("main",{staticClass:"card-body"},[a("h4",[e._v("---")]),a("p",[e._v(e._s(e.DESCR_LIN))])])])])])])},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card bg-dark rounded shadow-lg"},[a("main",{staticClass:"card-body "},[a("p",[e._v("Gabriel Justino")]),a("h4",[e._v("Instituto INFNET")]),a("p",[e._v("Engenharia de software")])])])}],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pullc border bs rounded",class:e.selectPg?"":"pullcHover",style:e.estilizacaoPg},["libfy"!==e.selectPg?a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectPg,expression:"selectPg"}],staticClass:"pgRadio invisibleRadio",attrs:{type:"radio",id:"",value:"libfy"},domProps:{checked:e._q(e.selectPg,"libfy")},on:{click:function(t){return e.checkUncheck(t.target.value)},change:function(t){e.selectPg="libfy"}}}):e._e(),"libfy"===e.selectPg?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectPg,expression:"selectPg"}],staticClass:"invisibleRadio far fa-times-circle text-white",attrs:{type:"radio",id:"",value:"libfy"},domProps:{checked:e._q(e.selectPg,"libfy")},on:{click:function(t){return e.checkUncheck(t.target.value)},change:function(t){e.selectPg="libfy"}}}),a("p",[e._v(" "+e._s(e.descricaoPg)+" ")]),a("div",[a("a",{attrs:{href:e.dados.verMaisUrl}},[a("h5",[e._v("Ver o website")])]),a("a",{attrs:{href:e.linkRepositorio}},[e._m(0)])])]):e._e()])},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h5",[a("span",{staticClass:"fab fa-github"}),e._v("repositorio")])}],P=a("5530"),y=a("1da1"),_=(a("96cf"),a("99af"),a("a4d3"),a("e01a"),a("bc3a")),w=a.n(_),C={name:"RadioContainer",data:function(){return{descricaoPg:"Um projetinho que",linkRepositorio:"#"}},props:{selectPg:String,pagina:String,dados:Object},methods:{checkUncheck:function(e){this.selectPg===e&&(this.selectPg="")},baseBackgrnd:function(e){var t=a("1771")("./".concat(e));return{"background-image":"url(".concat(t,")")}},carregaDadosPaginas:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e||!e.dados){t.next=11;break}if(a="ecrseer","Libfy"!=e.dados.nomeRepositorio){t.next=6;break}return e.linkRepositorio="https://github.com/z21E221E3GRPEDS01C2N2P1/Libfy",a="z21E221E3GRPEDS01C2N2P1",t.abrupt("return");case 6:return n="https://api.github.com/repos/".concat(a,"/").concat(e.dados.nomeRepositorio),t.next=9,w.a.get(n);case 9:i=t.sent,i.data&&(e.linkRepositorio=i.data.html_url,e.descricaoPg=i.data.description);case 11:case"end":return t.stop()}}),t)})))()}},computed:{estilizacaoPg:function(){var e={height:"100vh"},t=this.baseBackgrnd("".concat(this.pagina,".png")),a=Object(P["a"])(Object(P["a"])({},t),"libfy"===this.selectPg?e:{});return a}},mounted:function(){this.carregaDadosPaginas()}},k=C,x=(a("7cc8"),Object(d["a"])(k,v,h,!1,null,"5bbf38b6",null)),O=x.exports,j={ytime:{verMaisUrl:"http://time2shareyt.vercel.app/",nomeRepositorio:"YTime2",descricao:""},starwr:{verMaisUrl:"https://g4br13l-ju5t1n0.vercel.app/",nomeRepositorio:"g4br13lJu5t1n0",descricao:""},libfy:{verMaisUrl:"https://libfyinfnet.netlify.app",nomeRepositorio:"Libfy",descricao:""},gdrive:{verMaisUrl:"https://gd-sheet-y2.vercel.app/",nomeRepositorio:"googleDriveSheet",descricao:""}},R="Estudante de Engenharia de Software interessado na aprimoração dos conhecimentos tecnologicos bem como no leque de coisas que é possível fazer com tecnologia.",S={dadosPaginas:j,descricaoLin:R},D=S,E={components:{RadioContainer:O},name:"Descricao",data:function(){return{selectPg:"",DADOSPAGINAS:D.dadosPaginas,DESCR_LIN:D.descricaoLin,divClicadaTamanho:"col-sm-6"}},computed:{},watch:{selectPg:function(e,t){console.log("prev ".concat(e)),console.log("next ".concat(t))}},methods:{recalculaTamanho:function(){""==this.selectPg?this.divClicadaTamanho="":this.divClicadaTamanho="col-sm-6"}}},N=E,A=Object(d["a"])(N,m,b,!1,null,"b2194796",null),I=A.exports,T={components:{Descricao:I},name:"Index"},M=T,U=(a("8041"),Object(d["a"])(M,f,g,!1,null,null,null)),$=U.exports,G={components:{Index:$,BottomNav:p},name:"App"},L=G,q=(a("034f"),Object(d["a"])(L,i,r,!1,null,null,null)),z=q.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(z)}}).$mount("#app")},"5dd9":function(e,t,a){},"5f1b":function(e,t,a){e.exports=a.p+"img/starwr.b05aecf1.png"},6090:function(e,t,a){},"7cc8":function(e,t,a){"use strict";a("6090")},8041:function(e,t,a){"use strict";a("5dd9")},"85ec":function(e,t,a){},"89d9":function(e,t,a){e.exports=a.p+"img/ytime.fd459ae3.png"},bc2b:function(e,t,a){"use strict";a("d3e7")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d120:function(e,t,a){e.exports=a.p+"img/gdrive.8b7621d2.png"},d3e7:function(e,t,a){}});
//# sourceMappingURL=app.40887e17.js.map