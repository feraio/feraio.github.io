// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 9
(function(w,g){w[g]=w[g]||{};})(window,'google_tag_manager');(function(){

var va=this,wa=function(){var a=YT.Player,b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},xa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ya=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,za=function(a){if(null==a)return String(a);var b=ya.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Aa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ca=function(a){if(!a||"object"!=za(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Aa(a,"constructor")&&!Aa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var c in a);return void 0===
c||Aa(a,c)},Ba=function(a,b){var c=b||("array"==za(a)?[]:{}),d;for(d in a)if(Aa(a,d)){var e=a[d];"array"==za(e)?("array"!=za(c[d])&&(c[d]=[]),c[d]=Ba(e,c[d])):ca(e)?(ca(c[d])||(c[d]={}),c[d]=Ba(e,c[d])):c[d]=e}return c};var ha=null,Ca=Math.random(),Da=null,Fa=null,Ga={};var Ha=function(){},I=function(a){return"function"==typeof a},P=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ia=function(a){return"number"==za(a)&&!isNaN(a)},Ja=function(a){return/^[0-9]+$/.test(a)},Ka=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},La=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},J=function(a){return Math.round(Number(a))||0},ea=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Na=function(a){var b=[];if(P(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},B=function(){return new Date},Oa=function(a,b){if(!Ia(a)||!Ia(b)||a>b)a=0,b=2147483647;return Math.round(Math.random()*(b-a)+a)},Pa=function(){this.prefix="gtm.";this.values={}};Pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Pa.prototype.get=function(a){return this.values[this.prefix+a]};Pa.prototype.contains=function(a){return void 0!==this.get(a)};
var Qa=function(a,b,c){try{return a["10"](a,b||Ha,c||Ha)}catch(d){}return!1},Ra=function(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var d=La(b).split("&"),e=0;e<d.length;e++)if(d[e]){var f=d[e].indexOf("=");0>f?c(d[e],"1"):c(d[e].substring(0,f),d[e].substring(f+1))}},Sa=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},Ta=function(a){for(var b=0;b<a.length;b++)a[b]()},aa=B().getTime(),da=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ua=function(a,
b,c){a.prototype["gtm_proxy_"+b]=a.prototype[b];a.prototype[b]=c},Va=function(a){return null!==a&&void 0!==a&&void 0!==a.length},ba=function(a,b,c){if(!(b&&c&&Va(a)&&P(a)&&0!=a.length))return null;for(var d={},e=0;e<a.length;e++)a[e]&&a[e].hasOwnProperty(b)&&a[e].hasOwnProperty(c)&&(d[a[e][b]]=a[e][c]);return d},Wa=function(a,b){0==b?a.Ma=!0:a.complete=!0;var c=a.g;a.i&&(a.i.ka[c]=b);Ga[c]&&(Ga[c].state=b)},Xa=function(a,b){a.sort(function(a,d){return b(a,d)?-1:b(d,a)?1:0})};var A=window,N=document,Za=navigator,v=function(a,b,c){var d=A[a];A[a]=void 0===d||c?b:d;return A[a]},K=function(a,b,c,d){return(d||"http:"!=A.location.protocol?a:b)+c},$a=function(a){var b=N.getElementsByTagName("script")[0]||N.body||N.head;b.parentNode.insertBefore(a,b)},ga=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},p=function(a,b,c){var d=N.createElement("script");d.type="text/javascript";
d.async=!0;d.src=a;ga(d,b);c&&(d.onerror=c);$a(d)},na=function(a,b){var c=N.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";$a(c);ga(c,b);void 0!==a&&(c.src=a);return c},M=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},S=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},q=function(a){A.setTimeout(a,0)},ja=!1,
ka=[],ab=function(a){if(!ja){var b=N.createEventObject,c="complete"==N.readyState,d="interactive"==N.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ja=!0;for(var e=0;e<ka.length;e++)ka[e]()}}},bb=0,cb=function(){if(!ja&&140>bb){bb++;try{N.documentElement.doScroll("left"),ab()}catch(a){A.setTimeout(cb,50)}}},eb=function(a){var b=N.getElementById(a);if(b&&db(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(db(document.all[a][c],"id")==a)return document.all[a][c];return b},db=function(a,
b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},fb=function(a){return a.target||a.srcElement||{}},oa=function(a){var b=N.createElement("div");b.innerHTML="A<div>"+a+"</div>";for(var b=b.lastChild,c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},gb=function(a,b){for(var c={},d=0;d<b.length;d++)c[b[d]]=!0;for(var e=a,d=0;e&&!c[String(e.tagName).toLowerCase()]&&100>d;d++)e=e.parentElement;e&&!c[String(e.tagName).toLowerCase()]&&(e=null);return e},hb=!1,ib=[],
jb=function(){if(!hb){hb=!0;for(var a=0;a<ib.length;a++)ib[a]()}},kb=function(a){a=a||A;var b=a.location.href,c=b.indexOf("#");return 0>c?"":b.substring(c+1)},la=function(a){window.console&&window.console.log&&window.console.log(a)};var lb=function(a,b,c,d,e){var f,g=(a.protocol.replace(":","")||A.location.protocol.replace(":","")).toLowerCase();switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||A.location.hostname).split(":")[0].toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(1*(a.hostname?a.port:A.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=Ka(d||[],m[m.length-
1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");if(e)a:{for(var l=f.split("&"),h=0;h<l.length;h++){var n=l[h].split("=");if(decodeURIComponent(n[0]).replace("+"," ")==e){var r=n.slice(1).join("=");f=decodeURIComponent(r).replace("+"," ");break a}}f=void 0}break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},mb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},pa=function(a){var b=N.createElement("a");
a&&(b.href=a);return b};var ra=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=lb(pa(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1},ta=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var sa=function(a,b){p("//bat.bing.com/bat.js",a,b)},L=A,fa=function(a,b,c){b&&(void 0===L[a]||c&&!L[a])&&(L[a]=b);return L[a]};var nb=new Pa,pb={},rb={set:function(a,b){Ba(qb(a,b),pb)},get:function(a){return G(a,2)},reset:function(){nb=new Pa;pb={}}},G=function(a,b){if(2==b){for(var c=pb,d=a.split("."),e=0;e<d.length;e++){if(void 0===c[d[e]])return;c=c[d[e]]}return c}return nb.get(a)},qb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var tb=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ub={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},vb={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},wb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},xb=function(){var a=G("gtm.whitelist");
var b=a&&wb(Na(a),ub),c=G("gtm.blacklist")||G("tagTypeBlacklist")||[];tb.test(A.location&&A.location.hostname)&&(c=Na(c),c.push("nonGooglePixels","nonGoogleScripts"));var d=c&&wb(Na(c),vb),e={};return function(f){var g=f&&f["10"];if(!g)return!0;if(void 0!==e[g.a])return e[g.a];var k=!0;if(a)a:{if(0>Ka(b,g.a))if(g.b&&0<g.b.length)for(var m=0;m<g.b.length;m++){if(0>
Ka(b,g.b[m])){k=!1;break a}}else{k=!1;break a}k=!0}var l=!1;if(c){var h;if(!(h=0<=Ka(d,g.a)))a:{for(var n=g.b||[],r=new Pa,u=0;u<d.length;u++)r.set(d[u],!0);for(u=0;u<n.length;u++)if(r.get(n[u])){h=!0;break a}h=!1}l=h}return e[g.a]=!k||l}};var Q=function(a){var b=N;return yb?b.querySelectorAll(a):null},zb;a:{var Ab=/MSIE +([\d\.]+)/.exec(Za.userAgent);if(Ab&&Ab[1]){var Bb=N.documentMode;Bb||(Bb="CSS1Compat"==N.compatMode?parseInt(Ab[1],10):5);if(!Bb||8>=Bb){zb=!1;break a}}zb=!!N.querySelectorAll}var yb=zb;var _eu=function(a){var b=String(G("gtm.elementUrl")||a[""]||""),c=pa(b);return b};_eu.a="eu";_eu.b=["google"];var _e=function(){return Fa};_e.a="e";_e.b=["google"];var Gb=/(^|\.)doubleclick\.net$/i,Hb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ib=function(){for(var a=String(N.cookie).split(";"),b=[],c=0;c<a.length;c++){var d=a[c].split("="),e=La(d[0]);if(e&&"_gaexp"==e){var f=La(d.slice(1).join("="));f&&(f=decodeURIComponent(f));b.push(f)}}return b},Jb=function(a,b,c,d){if(Gb.test(N.location.hostname)||"/"==b&&Hb.test(c))return!1;var e="_gaexp="+a+"; ";b&&(e+="path="+b+"; ");d&&(e+="expires="+d.toGMTString()+"; ");c&&(e+="domain="+c+";");var f=N.cookie;N.cookie=
e;return f!=N.cookie||0<=Ka(Ib(),a)},Kb=function(a){if("none"==a)return 0;0==a.indexOf(".")&&(a=a.substr(1));return a.split(".").length},Lb=function(a){var b=a;b?(1<b.length&&b.lastIndexOf("/")==b.length-1&&(b=b.substr(0,b.length-1)),0!=b.indexOf("/")&&(b="/"+b),a=b):a="/";return"/"==a?1:a.split("/").length};var Mb=function(a,b){this.c=a;this.j=b};Mb.prototype.toString=function(){var a=""+this.c;1<this.j&&(a=a+"-"+this.j);return a};var Nb=function(a,b){this.xa=a;this.Y=b};Nb.prototype.toString=function(){return""+this.Y+"."+this.xa};var Qb=function(a,b){var c=new Ob(null,a,b);Pb(c);return c},Ob=function(a,b,c){this.Fa=Math.floor(B().getTime()/864E5);this.X=b||"auto";this.P=c||"/";var d=Kb(this.X),e=Lb(this.P);this.B=a||new Mb(d,e);this.h=[];this.v=new Pa},Ub=function(a,b,c){b&&(""==c.xa?Tb(a,b):(a.v.contains(b)||a.h.push(b),a.v.set(b,c)))},Zb=function(a,b){for(var c=0;c<b.length;c++)Ub(a,b[c][0],b[c][1])},Tb=function(a,b){var c=Ka(a.h,b);0<=c&&a.h.splice(c,1);a.v.set(b,void 0)},$b=function(a){for(var b=[],c=0;c<a.h.length;c++){var d=
a.h[c];b.push([d,a.v.get(d)])}return b},ac=function(a){for(var b=0,c=0;c<a.h.length;c++)b=Math.max(b,a.v.get(a.h[c]).Y);return 864E5*b};Ob.prototype.toString=function(){if(0==this.h.length)return"";for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];a.push(""+c+"."+this.v.get(c).toString())}return"GAX1."+this.B.toString()+"."+a.join("!")};
var bc=function(a,b){for(var c=new Date,d=Lb(a.P),e=[],f=0;f<a.h.length;f++){var g=a.h[f];a.v.get(g).Y<a.Fa&&e.push(g)}for(f=0;f<e.length;f++)Tb(a,e[f]);if(a.h.length>(b||10))return!1;c.setTime(ac(a));if("auto"!=a.X)return Jb(a.toString(),a.P,a.X,c);var k;var m=lb(A.location,"host",!0).split(".");if(4==m.length&&/^[0-9]*$/.exec(m[3]))k=["none"];else{for(var l=[],h=m.length-2;0<=h;h--)l.push(m.slice(h).join("."));l.push("none");k=l}for(var n=0;n<k.length;n++)if("none"!=k[n]&&(a.B=new Mb(Kb(k[n]),d),
Jb(a.toString(),a.P,k[n],c)))return!0;return!1},Pb=function(a){for(var b=a.B.c,c=a.B.j,d=Ib(),e=[],f=0;f<d.length;f++){var g=cc(a,d[f]);g&&e.push(g)}Xa(e,function(a,d){var e=a.B,f=d.B;return e.c==f.c&&e.j==f.j?!1:e.c==b&&e.j==c?!0:f.c==b&&f.j==c?!1:e.c==b?f.c!=b||e.j<f.j:f.c==b?!1:e.j==c?f.c!=b&&(f.j!=c||e.c<f.c):f.j==c?!1:e.c<f.c||e.c==f.c&&e.j<f.j});a.B=0<e.length?e[0].B:new Mb(b,c);for(f=e.length-1;0<=f;f--)Zb(a,$b(e[f]))},cc=function(a,b){var c=b.match(/GAX1\.([^.]+).(.*)/);if(c){var d;a:{var e=
(c[1]||"").split("-");if(!(0==e.length||2<e.length)){var f=La(e[0]);if(0!=f.length){var g=2==e.length?La(e[1]):"1";if(Ja(f)&&Ja(g)){d=new Mb(J(f),J(g));break a}}}d=void 0}if(d){for(var k=new Ob(d,a.X,a.P),m=(c[2]||"").split("!"),l=0;l<m.length;l++){var h=m[l].split(".");if(3==h.length){if(!Ja(h[1]))return;Ub(k,h[0],new Nb(h[2],J(h[1])))}}return k}}};var _f=function(a){var b=String(G("gtm.referrer")||N.referrer);if(!b)return b;var c=pa(b);return b};_f.a="f";_f.b=["google"];var ua=function(a){var b=A.location,c=b.hash?b.href.replace(b.hash,""):b.href,d;if(d=a[""]?a[""]:G("gtm.url"))c=String(d),b=pa(c);var e,f,g;
a["4"]&&(c=lb(b,a["4"],e,f,g));return c},_u=ua;_u.a="u";_u.b=["google"];var _eq=function(a){return String(a["2"])==String(a["3"])};_eq.a="eq";_eq.b=["google"];var kc=Math.random(),lc="1.000000">kc;var mc=Ha;var nc=Ha,oc=[],pc=!1,qc=function(a){return A["dataLayer"].push(a)},rc=function(a){var b=!1;return function(){!b&&I(a)&&q(a);b=!0}},xc=function(){for(var a=!1;!pc&&0<oc.length;){pc=!0;var b=oc.shift();if(I(b))try{b.call(rb)}catch(c){}else if(P(b))a:{var d=b;if("string"==za(d[0])){for(var e=d[0].split("."),f=e.pop(),g=d.slice(1),k=pb,m=0;m<e.length;m++){if(void 0===k[e[m]])break a;k=k[e[m]]}try{k[f].apply(k,g)}catch(l){}}}else{var h=b,n=void 0;for(n in h)if(h.hasOwnProperty(n)){var r=n,u=h[n];
nb.set(r,u);Ba(qb(r,u),pb)}var z=!1,t=h.event,x=void 0;if(t){x=aa++;Fa=t;if(!h["gtm.uniqueEventId"]){var E=x;nb.set("gtm.uniqueEventId",E);Ba(qb("gtm.uniqueEventId",E),pb)}var F=rc(h.eventCallback),D=h.eventTimeout;D&&A.setTimeout(F,Number(D));z=nc(x,t,F,h.eventReporter)}Da||(Da=h["gtm.start"])&&mc();var w=h,C=x,y=t,H=pb;if(!z){var W=x,U=t;}Fa=null;a=z||a}var Ea=b,Z=pb;wc();pc=!1}return!a};var yc,zc=/(Firefox\D28\D)/g.test(Za.userAgent),Ac={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},Bc={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},Ic=function(a,b){return function(c){c=c||A.event;var d=fb(c),e=!1;if(3!==c.which||"LINK_CLICK"!=a){"LINK_CLICK"==a&&(d=gb(d,["a","area"]),e=!d||!d.href||Cc(d.href)||2===c.which||null==c.which&&4==c.button||c.ctrlKey||c.shiftKey||c.altKey||!0===c.metaKey);var f="FORM_SUBMIT"==a?Bc:Ac;if(c.defaultPrevented||!1===c.returnValue||c.oa&&c.oa()){if(d){var g={simulateDefault:!1},
k=Dc(f,["wnc","nwnc"]);k&&Fc(a,d,g,f.wt,k)}}else{if(d){var g={},m=!0,l=Dc(f,["wnc","nwnc","nwc","wc"]);(m=Fc(a,d,g,f.wt,l))||(Gc(g.eventReport,f)?b=!0:e=!0);e=e||m||"LINK_CLICK"==a&&zc;g.simulateDefault=!m&&b&&!e;g.simulateDefault&&(e=Hc(d,g)||e,!e&&c.preventDefault&&c.preventDefault());c.returnValue=m||!b||e;return c.returnValue}return!0}}}},Fc=function(a,b,c,d,e){var f=d||2E3,g={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||db(b,"id")||"","gtm.elementTarget":b.formTarget||
b.target||""};switch(a){case "LINK_CLICK":g["gtm.triggers"]=e||"";g.event="gtm.linkClick";g["gtm.elementUrl"]=b.href;g.eventTimeout=f;g.eventCallback=Jc(b,c);g.eventReporter=function(a){c.eventReport=a};break;case "FORM_SUBMIT":g["gtm.triggers"]=e||"";g.event="gtm.formSubmit";g["gtm.elementUrl"]=Kc(b);g.eventTimeout=f;g.eventCallback=Lc(b,c);g.eventReporter=function(a){c.eventReport=a};break;case "CLICK":g.event="gtm.click";g["gtm.elementUrl"]=b.formAction||b.action||b.href||b.src||b.code||b.codebase||
"";break;default:return!0}return qc(g)},Kc=function(a){var b=a.action;b&&b.tagName&&(b=a.cloneNode(!1).action);return b},Mc=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "area":case "form":b="_self"}return b},Hc=function(a,b){var c=!1,d=/(iPad|iPhone|iPod)/g.test(Za.userAgent),e=Mc(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;f=(e||"_self").substring(1);b.targetWindow=A.frames&&A.frames[f]||A[f];break;case "_blank":d?(b.simulateDefault=
!1,c=!0):(b.targetWindowName="gtm_autoEvent_"+B().getTime(),b.targetWindow=A.open("",b.targetWindowName));break;default:d&&!A.frames[e]?(b.simulateDefault=!1,c=!0):(A.frames[e]||(b.targetWindowName=e),b.targetWindow=A.frames[e]||A.open("",e))}return c},Jc=function(a,b,c){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(c=c||B().getTime(),500>B().getTime()-c&&A.setTimeout(Jc(a,b,c),25)))}},Lc=function(a,b,c){return function(){if(b.simulateDefault)if(b.targetWindow){var d;
b.targetWindowName&&(d=a.target,a.target=b.targetWindowName);N.gtmSubmitFormNow=!0;Nc(a).call(a);b.targetWindowName&&(a.target=d)}else c=c||B().getTime(),500>B().getTime()-c&&A.setTimeout(Lc(a,b,c),25)}},Dc=function(a,b){for(var c=[],d=0;d<b.length;d++){var e=a[b[d]],f;for(f in e)e.hasOwnProperty(f)&&e[f]&&c.push(f)}return c.join(",")},Tc=function(a,b,c,d,e){var f=e;if(!f||"0"==f){if(a.l)return;a.l=!0;f="0"}var g=a.wt;b&&(!g||g>d)&&(a.wt=d);a[b?c?"wc":"wnc":c?"nwc":"nwnc"][f]=!0},Gc=function(a,b){if(b.wnc["0"]||
b.wc["0"])return!0;for(var c=0;c<Uc.length;c++)if(a.passingRules[c]){var d=Uc[c],e=Vc[c],f=e&&e[0]&&e[0][0]||e[1]&&e[1][0];if(f&&"0"!=f&&(b.wc[f]||b.wnc[f]))for(var g=d[1],k=0;k<g.length;k++)if(a.resolvedTags[g[k]])return!0}return!1},Zc=function(a,b,c,d,e){var f,g,k=!1;switch(a){case "CLICK":if(N.gtmHasClickListenerTag)return;N.gtmHasClickListenerTag=!0;f="click";g=function(a){var b=fb(a);b&&Fc("CLICK",b,{},d)};k=!0;break;case "LINK_CLICK":b&&!yc&&(yc=mb(N.location));Tc(Ac,b||!1,c||!1,d,e);if(N.gtmHasLinkClickListenerTag)return;
N.gtmHasLinkClickListenerTag=!0;f="click";g=Ic(a,b||!1);break;case "FORM_SUBMIT":Tc(Bc,b||!1,c||!1,d,e);if(N.gtmHasFormSubmitListenerTag)return;N.gtmHasFormSubmitListenerTag=!0;f="submit";g=Ic(a,b||!1);break;default:return}S(N,f,g,k)},Cc=function(a){if(!yc)return!0;var b=a.indexOf("#");if(0>b)return!1;if(0==b)return!0;var c=pa(a);return yc==mb(c)},Nc=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;
N.gtmFormElementSubmitter||(N.gtmFormElementSubmitter=N.createElement("form"));return N.gtmFormElementSubmitter.submit.call?N.gtmFormElementSubmitter.submit:a.submit};var dc=new String("undefined"),gd=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===dc?b:a[d]);return c.join("")}};gd.prototype.toString=function(){return this.resolve("undefined")};gd.prototype.valueOf=gd.prototype.toString;var hd={},id=function(a,b){var c=aa++;hd[c]=[a,b];return c},jd=function(a){var b=a?0:1;return function(a){var d=hd[a];if(d&&I(d[b]))d[b]();hd[a]=void 0}};var kd=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ld=function(a,b){return a<b?-1:a>b?1:0};var md;a:{var nd=va.navigator;if(nd){var od=nd.userAgent;if(od){md=od;break a}}md=""}var T=function(a){return-1!=md.indexOf(a)};var pd=T("Opera")||T("OPR"),qd=T("Trident")||T("MSIE"),rd=T("Edge"),sd;if(sd=T("Gecko"))sd=!(-1!=md.toLowerCase().indexOf("webkit")&&!T("Edge"));var td=sd&&!(T("Trident")||T("MSIE"))&&!T("Edge"),ud=-1!=md.toLowerCase().indexOf("webkit")&&!T("Edge");ud&&T("Mobile");T("Macintosh");T("Windows");T("Linux")||T("CrOS");var vd=va.navigator||null;vd&&(vd.appVersion||"").indexOf("X11");T("Android");!T("iPhone")||T("iPod")||T("iPad");T("iPad");
var wd=function(){var a=md;if(td)return/rv\:([^\);]+)(\)|;)/.exec(a);if(rd)return/Edge\/([\d\.]+)/.exec(a);if(qd)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ud)return/WebKit\/(\S+)/.exec(a)},xd=function(){var a=va.document;return a?a.documentMode:void 0},yd=function(){if(pd&&va.opera){var a;var b=va.opera.version;try{a=b()}catch(c){a=b}return a}var d="",e=wd();e&&(d=e?e[1]:"");if(qd){var f=xd();if(f>parseFloat(d))return String(f)}return d}(),zd={},Ad=function(a){var b;if(!(b=zd[a])){for(var c=
0,d=kd(String(yd)).split("."),e=kd(String(a)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var k=d[g]||"",m=e[g]||"",l=RegExp("(\\d*)(\\D*)","g"),h=RegExp("(\\d*)(\\D*)","g");do{var n=l.exec(k)||["","",""],r=h.exec(m)||["","",""];if(0==n[0].length&&0==r[0].length)break;c=ld(0==n[1].length?0:parseInt(n[1],10),0==r[1].length?0:parseInt(r[1],10))||ld(0==n[2].length,0==r[2].length)||ld(n[2],r[2])}while(0==c)}b=zd[a]=0<=c}return b},Bd=va.document,Cd=Bd&&qd?xd()||("CSS1Compat"==Bd.compatMode?
parseInt(yd,10):5):void 0;var Dd;if(!(Dd=!td&&!qd)){var Ed;if(Ed=qd)Ed=9<=Cd;Dd=Ed}Dd||td&&Ad("1.9.1");qd&&Ad("9");var Fd=function(a){Fd[" "](a);return a};Fd[" "]=function(){};var ma=function(a,b){var c="";qd&&!Gd(a)&&(c='<script>document.domain="'+document.domain+'";\x3c/script>'+c);var d="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+c+"</head><body>"+b+"</body></html>";if(Hd)a.srcdoc=d;else if(Id){var e=a.contentWindow.document;e.open("text/html","replace");e.write(d);e.close()}else Jd(a,d)},Hd=ud&&"srcdoc"in document.createElement("iframe"),Id=td||ud||qd&&Ad(11),Jd=function(a,b){qd&&Ad(7)&&!Ad(10)&&6>Kd()&&Ld(b)&&(b=Md(b));var c=function(){a.contentWindow.goog_content=
b;a.contentWindow.location.replace("javascript:window.goog_content")};qd&&!Gd(a)?Nd(a,c):c()},Kd=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},Gd=function(a){try{var b;var c=a.contentWindow;try{var d;if(d=!!c&&null!=c.location.href)b:{try{Fd(c.foo);d=!0;break b}catch(e){}d=!1}b=d}catch(f){b=!1}return b}catch(g){return!1}},Od=0,Nd=function(a,b){var c="goog_rendering_callback"+Od++;window[c]=b;a.src="javascript:'<script>(function() {document.domain = \""+
document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation();})()\x3c/script>'"},Ld=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},Md=function(a){for(var b=unescape(encodeURIComponent(a)),c=Math.floor(b.length/2),d=[],e=0;e<c;++e)d[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(d[c]=b.charAt(b.length-1));return d.join("")};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Qd=function(a,b,c,d){return function(){try{if(0<b.length){var e=b.shift(),f=Qd(a,b,c,d);if("SCRIPT"==String(e.nodeName).toUpperCase()&&"text/gtmscript"==e.type){var g=N.createElement("script");g.async=!1;g.type="text/javascript";g.id=e.id;g.text=e.text||e.textContent||e.innerHTML||"";e.charset&&(g.charset=e.charset);var k=e.getAttribute("data-gtmsrc");k&&(g.src=k,ga(g,f));a.insertBefore(g,null);k||f()}else if(e.innerHTML&&0<=e.innerHTML.toLowerCase().indexOf("<script")){for(var m=[];e.firstChild;)m.push(e.removeChild(e.firstChild));
a.insertBefore(e,null);Qd(e,m,f,d)()}else a.insertBefore(e,null),f()}else c()}catch(l){q(d)}}};var Sd=function(a,b,c){if(N.body){var d=
a["11"];d instanceof gd&&(d=d.resolve(id(b,c)),b=Ha);if(a[""])try{ma(na(),"<script>var google_tag_manager=parent.google_tag_manager;\x3c/script>"+d),q(b)}catch(e){q(c)}else a[""]?Rd(d,b,c):Qd(N.body,oa(d),b,c)()}else A.setTimeout(function(){Sd(a,b,c)},200)},_html=Sd;_html.a="html";_html.b=["customScripts"];
var Td={},Vd=function(a,b,c,d,e){if(!yb)return!1;var f=Td[a];f||(f={id:a,L:[],ba:0,za:null,Ea:!1},Td[a]=f);var g={id:a+":"+f.L.length,Ua:c,Pa:d,K:b,ma:0,ja:e||null,Da:0,aa:!1};f.L.push(g);null===b?(g.aa=!0,c(null)):Ud(f);return!0},Ud=function(a){for(var b=a.ba;b<a.L.length;b++){var c=a.L[b],d=b==a.ba;if(!c.aa&&!Wd(d,c))break;c.aa&&d&&a.ba++}a.L.length>a.ba&&(a.za||(a.za=A.setTimeout(function(){a.za=null;Ud(a)},80)),ja||a.Ea||(a.Ea=!0,ka.push(function(){Ud(a)})))},Wd=function(a,b){var c=[];if(b.K){var d=
Xd(b.K,b.id),e=null;b.ja&&(e=Xd(b.ja,b.id+"-t"));for(var f=0;f<d.length;f++){var g=d[f],k;if(null!=e&&(k=e.length>f?e[f]:null,!k&&!ja&&(null===b.ja.o||b.Da+c.length<b.ja.o)))break;c.push({element:g,tb:k})}}if(!ja&&b.Pa&&(!a||null==b.K.o||b.K.o!=b.ma+c.length))return!1;for(var m=0;m<c.length;m++){var l=c[m].element,h=c[m].tb;b.ma++;Yd(l,b.id);h&&(b.Da++,Yd(h,b.id+"-t"));b.Ua(l,h)}if(b.K.o&&b.K.o==b.ma||ja)b.aa=!0;return!0},Yd=function(a,b){a.gtmProgressiveApplied||(a.gtmProgressiveApplied={});a.gtmProgressiveApplied[b]=
!0},Xd=function(a,b){for(var c=Q(a.w)||[],d=[],e=0;e<c.length;e++){var f=c[e];if(!f.gtmProgressiveApplied||!f.gtmProgressiveApplied[b]){if(a.A&&!Zd(f))break;d.push(f)}}return d},Zd=function(a){if(ja)return!0;for(;a;){if(a.nextSibling)return!0;a=a.parentNode}return!1};var le,me;
var we=function(a){return function(){}},xe=function(a){return function(){}};var Oe=function(a){var b=A||va,c=b.onerror,d=!1;ud&&!Ad("535.3")&&(d=!d);b.onerror=function(b,f,g,k,m){c&&c(b,f,g,k,m);a({message:b,fileName:f,mb:g,Jb:k,error:m});return d}};var sf=29,tf=[],uf=[],vf=[],wf=new Pa,xf=[],X=[],Uc=[],Vc=[],yf=function(){this.D=[]};yf.prototype.set=function(a,b){this.D.push([a,b]);return this};yf.prototype.resolve=function(a,b){for(var c={},d=0;d<this.D.length;d++){var e=zf(this.D[d][0],a,b),f=zf(this.D[d][1],a,b);c[e]=f}return c};var Af=function(a){this.index=a};
Af.prototype.resolve=function(a,b){var c=vf[this.index];if(c&&!b(c)){var d=c["12"];if(a){if(a.get(d))return;a.set(d,!0)}c=zf(c,a,b);a&&a.set(d,!1);return Qa(c)}};
var _M=function(a){return new Af(a)},Bf=function(a){this.resolve=function(b,c){for(var d=[],e=!1,f=0;f<a.length;f++){var g=zf(tf[a[f]],b,c);g===dc&&(e=!0);d.push(g)}return e?new gd(d):d.join("")}},_T=function(a){return new Bf(arguments)},Cf=function(a){function b(b){for(var d=1;d<a.length;d++)if(a[d]==b)return!0;return!1}this.resolve=
function(c,d){var e=zf(a[0],c,d);if(a[0]instanceof Af&&b(8)&&b(16)){if(e===dc)return e;var f="gtm"+aa++;wf.set(f,e);return'google_tag_manager["GTM-K4NGV4"].macro(\''+f+"')"}for(var e=String(e),g=1;g<a.length;g++)e=V[a[g]](e);return e}},_E=function(a,b){return new Cf(arguments)},Df=function(a,b){this.s=a;this.ia=b},_R=function(a,b){return new Df(a,b)},Ef=function(a,b){return zf(a,new Pa,b)},zf=function(a,b,c){var d=a;if(a instanceof Af||a instanceof yf||a instanceof Bf||a instanceof Cf)return a.resolve(b,
c);if(!(a instanceof Df))if(P(a))for(var d=[],e=0;e<a.length;e++)d[e]=zf(a[e],b,c);else if(a&&"object"==typeof a){var d={},f;for(f in a)a.hasOwnProperty(f)&&(d[f]=zf(a[f],b,c))}return d},Ff=function(a,b){var c=b[a],d=c;if(c instanceof Af||c instanceof Cf||c instanceof Bf||c instanceof Df)d=c;else if(P(c))for(var d=[],e=0;e<c.length;e++)d[e]=Ff(c[e],b);else if("object"==typeof c){var d=new yf,f;for(f in c)c.hasOwnProperty(f)&&d.set(b[f],Ff(c[f],b))}return d},Hf=function(a,b){for(var c=b?b.split(","):
[],d=0;d<c.length;d++){var e=c[d]=c[d].split(":");0==a&&(e[1]=tf[e[1]]);if(1==a)for(var f=Gf(e[0]),e=c[d]={},g=0;g<f.length;g++){var k=uf[f[g]];e[k[0]]=k[1]}if(2==a)for(g=0;4>g;g++)e[g]=Gf(e[g]);3==a&&(c[d]=tf[e[0]]);if(4==a)for(g=0;2>g;g++)if(e[g]){e[g]=e[g].split(".");for(var m=0;m<e[g].length;m++)e[g][m]=tf[e[g][m]]}else e[g]=[];5==a&&(c[d]=e[0])}return c},Gf=function(a){var b=[];if(!a)return b;for(var c=0,d=0;d<a.length&&c<sf;c+=6,d++){var e=a&&a.charCodeAt(d)||65;if(65!=e){var f=0,f=65<e&&90>=
e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(c);2&f&&b.push(c+1);4&f&&b.push(c+2);8&f&&b.push(c+3);16&f&&b.push(c+4);32&f&&b.push(c+5)}}return b},If=function(a,b,c){a.push.apply(a,Hf(b,c))};
var tc=function(){},Qf=function(a){},wc=function(){},Rf=function(a){},Sf=function(a,b){},uc=function(a){};var Tf=function(a){var b=this;this.g=a;this.complete=this.Ma=!1;this.ha=[];this.Z=[];this.O=function(){if(b.i&&b.i.event){var a=b.i.event,d=b.g;}b.complete||Ta(b.ha);Wa(b,1)};this.N=function(){if(b.i&&b.i.event){var a=b.i.event,d=b.g;}b.complete||Ta(b.Z);Wa(b,2)};this.u=Ha},Uf=function(a,b){a.ha.push(b)},
Vf=function(a,b){a.Z.push(b)},Wf=function(a){this.F=[];this.ya=[];this.Ga={};this.sa=[];this.M=0;this.Ka={};this.Na={};this.ka={};this.event=a};Wf.prototype.addListener=function(a){this.sa.push(a)};
var Xf=function(a,b,c,d,e,f){if(!c.complete){a.F[b]=c;void 0==d&&(d=[]);void 0==e&&(e=[]);void 0==f&&(f=[]);d=P(d)?d.slice():["or",d];e=P(e)?e.slice():[e];f=P(f)?f.slice():[f];a.Ga[b]=d;a.Ka[b]=0<e.length;a.Na[b]=0<f.length;a.M++;var g=function(){0<a.M&&a.M--;0<a.M||Ta(a.sa)};Uf(c,g);Vf(c,g)}},Yf=function(a,b,c){a.F[b]&&(Uf(a.F[b],function(){c(b,!0)}),Vf(a.F[b],function(){c(b,!1)}))},Zf=function(a,b){var c=!1;return function(d,e){var f;a:{for(var g=0;g<a.length;g++)if(a[g]instanceof Df&&a[g].s===
d||a[g]===d){f=g;break a}f=-1}c||0>f||("or"==a[0]?e?(c=!0,b()):(a.splice(f,1),1==a.length&&(c=!0)):e?(a.splice(f,1),1==a.length&&(c=!0,b())):c=!0)}},cg=function(a,b){var c=[],d=!1,e=function(b){var f,g,h=X[b];if(a.event.f(h)){}else g=$f(h,b,a);if(f=g){var k=ag(b,!0);0<k.length&&e(k[0].s);c.push(f);var l=ag(b,!1);0<l.length&&e(l[0].s)}else d=!0};e(b);if(!d){for(var f=0;f<c.length;f++){var g=c[f],k=ag(g.g,
!0);if(0<k.length){var m=c[f-1],l=bg(g);Uf(m,l);0==k[0].ia&&Vf(m,l)}var h=ag(g.g,!1);0<h.length&&(l=bg(c[f+1]),Uf(g,l),0==h[0].ia&&Vf(g,l))}a.ya.push(c)}},ag=function(a,b){var c=b?"":"",d=X[a],e=void 0===d[c]?[]:d[c];return P(e)?e:[e]},bg=function(a){return function(){a.u()}},eg=function(a){for(var b={},c=0;c<a.length;c++){var d=a[c],e=[],f=function(a){var b=ag(a,!0);0<b.length&&f(b[0].s);e.push(a);var c=ag(a,!1);0<c.length&&f(c[0].s)};f(d.g);b[d.g]=e}dg(a,
b);return b},dg=function(a,b){for(var c=0;c<a.length;c++){var d=a[c].g,e;for(e in b)if(b.hasOwnProperty(e)&&e!=d&&-1<Ka(b[e],d)){delete b[d];break}}};var gg=function(a,b){return function(){a["17"]=b.O;a["18"]=b.N;var c=b.g,d=b.i&&b.i.ka[c],e=Ga[c]&&Ga[c].state,f=d?void 0!==d:b.Ma,g=Ga[c]&&Ga[c].firingOption,k=g&&2==g,m=g&&1==g;if((f||e&&0!=e)&&(f||k)&&(k||m))k&&Ga[c]&&1==Ga[c].state||m&&b.i&&1==b.i.ka[c]?b.O():b.N();else{var l=b.i?b.i.event:void 0;a=fg(a,l?l.f:xb());Wa(b,0);if(l){var h=a;Sf(l,c)}Qa(a,b.O,b.N)}}},fg=function(a,b){a=Ef(a,b);return a},$f=function(a,b,c){var d=new Tf(b);d.i=c;Uf(d,we(a));Vf(d,xe(a));d.u=gg(a,d);return d};
var kg=!1,_ua=function(a,b,c){function d(a){var b=[].slice.call(arguments,0);b[0]=n+b[0];A[l()].apply(window,b)}function e(b,c){void 0!==a[c]&&d("set",b,a[c])}function f(a,b){return void 0===b?b:a(b)}function g(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&d("set",a+c,b[c])}function k(){var b=function(a,b,c){if(!ca(b))return!1;for(var e=da(Object(b),c,[]),f=0;e&&f<e.length;f++)d(a,e[f]);return!!e&&0<e.length},c;a["8"]?
c=G("ecommerce"):a[""]&&(c=a[""].ecommerce);if(!ca(c))return;c=Object(c);var e=da(a[""],"currencyCode",c.currencyCode);void 0!==e&&d("set","&cu",e);b("ec:addImpression",c,"impressions");if(b("ec:addPromo",c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){d("ec:setAction","promo_click",c.promoClick.actionField);return}for(var f="detail checkout checkout_option click add remove purchase refund".split(" "),
g=0;g<f.length;g++){var h=c[f[g]];if(h){b("ec:addProduct",h,"products");d("ec:setAction",f[g],h.actionField);break}}}function m(a,b,c){var d=0;if(void 0!==a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&z[e]||!c&&void 0===z[e])){var f=t[e]?ea(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d}v("GoogleAnalyticsObject",a[""]||"ga",!1);var l=function(){return A.GoogleAnalyticsObject},h=v(l(),function(){var a=A[l()];a.q=
a.q||[];a.q.push(arguments)},!1);h.l=Number(B());var n="",r="";void 0==a[""]?(r="gtm"+aa++,n=r+"."):""!==a[""]&&(r=a[""],n=r+".");var u=!1;var x={name:r};
h("create",a["0"],x);d("set","&gtm","GTM-K4NGV4");
a["13"]&&d("require","linkid","linkid.js");
d("set","hitCallback",function(){if(I(a[""]))a[""]();else{var c=a[""],d=c&&c.hitCallback;I(d)&&d()}b()});if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else{a["9"]&&(d("require","ec","ec.js"),k());if(a["7"]&&
!a[""]){var O="_dc_gtm_"+String(a["0"]).replace(/[^A-Za-z0-9-]/g,"");d("require","displayfeatures",void 0,{cookieName:O})}
d("send","pageview");}if(!kg){var U=a["5"]?"u/analytics_debug.js":"analytics.js";kg=!0;p(K("https:","http:","//www.google-analytics.com/"+U,
u),function(){A[l()].loaded||c()},c)}};_ua.a="ua";_ua.b=["google"];var lg,mg;var vg=function(){var a=[];return function(b,c){if(void 0===a[b]){var d=xf[b]&&Ef(xf[b],c),e=d;if(d)if(d[""]&&P(d["3"]))for(var f=d["3"],e=!1,g=0;!e&&g<f.length;g++)d["3"]=f[g],e=Qa(d);else e=Qa(d);a[b]=[e,d]}return a[b]}},Pf=function(a,b){for(var c=b[0],d=0;d<c.length;d++)if(!a.I(c[d],a.f)[0])return!1;for(var e=b[2],d=0;d<e.length;d++)if(a.I(e[d],a.f)[0])return!1;return!0},wg=!1,nc=function(a,b,c,d){switch(b){case "gtm.js":if(wg)return!1;wg=!0;break;
case "gtm.sync":if(G("gtm.snippet")!=Ca)return!1}G("tagTypeBlacklist");for(var e={id:a,name:b,V:c||Ha,U:Gf(),ga:Gf(),I:vg(),f:xb()},f=[],g=0;g<Uc.length;g++)if(Pf(e,Uc[g])){f[g]=!0;for(var k=e,m=Uc[g],l=m[1],h=0;h<l.length;h++)k.U[l[h]]=!0;for(var n=m[3],h=0;h<n.length;h++)k.ga[n[h]]=!0}else f[g]=!1;Sf(e);var u=[];
for(var z=0;z<sf;z++)if(e.U[z]&&!e.ga[z])if(e.f(X[z])){}else{u[z]=X[z];}e.J=u;for(var t=new Wf(e),x=0;x<sf;x++)if(e.U[x]&&!e.ga[x]&&!e.f(X[x])){var E=e.J[x],F=$f(E,x,t);Xf(t,x,F,E[""],
E[""],E[""]);if(E[""])break}t.addListener(e.V);for(var D=[],w=0;w<t.F.length;w++){var C=t.F[w];if(C){var y=t.Ga[w],H=t.Ka[w],O=t.Na[w];if(0!=y.length||H||O){if(0<y.length)for(var W=Zf(y,C.u),U=0;U<y.length;U++)y[U]instanceof Df&&y[U].s!=w&&Yf(t,y[U].s,W);(H||O)&&cg(t,w)}else D.push(w)}}for(w=0;w<D.length;w++)t.F[D[w]].u();for(w=0;w<t.ya.length;w++){for(var Ea=t.ya[w],Z=Ea,Yc=[],Xb=0;Xb<Z.length;Xb++){var Yb=Z[Xb],Wc=Yb.g,Xc=Ga[Wc],
Vb=Xc.firingOption;0!=Vb&&(1==Vb&&void 0!==Yb.i.ka[Wc]||2==Vb&&void 0!==Xc.state)&&Yc.push(Yb)}var Wb=eg(Yc),sb=void 0;for(sb in Wb)if(Wb.hasOwnProperty(sb)){for(var Ec=void 0,Qe=void 0,Rb=Wb[sb],Jg=Rb[0],Re=Rb[Rb.length-1],Se,qa=0;qa<Z.length;qa++){var Sb=Z[qa];!Ec&&Sb.g==Jg&&0<qa&&(Ec=Z[qa-1]);Sb.g==Re&&qa<Z.length-1&&(Qe=Z[qa+1]);if(-1<Ka(Rb,Sb.g))if(Se=Z.splice(qa,1)[0],Sb.g==Re)break;else qa--}if(Se){var Te=Number(sb),Y=Ec,Oc=Qe;if(Y){var Kg=Y.ha[0],Lg=Y.Z[0],Ue=Y;Ue.ha=[];Ue.Z=[];Uf(Y,Kg);Vf(Y,
Lg)}if(Y&&Oc){var Pc=bg(Oc);Uf(Y,Pc);var Qc=ag(Y.g,!1);0<Qc.length&&Qc[0].s!=Te&&0==Qc[0].ia&&Vf(Y,Pc);var Rc=ag(Oc.g,!0);0<Rc.length&&Rc[0].s!=Te&&0==Rc[0].ia&&Vf(Y,Pc)}}}0<Ea.length&&Ea[0].u()}0<t.M||Ta(t.sa);d&&I(d)&&d({passingRules:f,resolvedTags:e.J});for(var Ve in e.J)if(e.J.hasOwnProperty(Ve)){var We=e.J[Ve],Sc;if(!(Sc=void 0==We["12"])){var Xe=We["12"];Sc=!("function"!=typeof String.prototype.startsWith?0===Xe.indexOf("_implicit"):Xe.startsWith("_implicit"))}if(Sc)return!0}return!1};var xg={macro:function(a){if(wf.contains(a))return wf.get(a)}};xg.dataLayer=rb;xg.onHtmlSuccess=jd(!0);xg.onHtmlFailure=jd(!1);xg.Ya=function(){var a=A.google_tag_manager;a||(a=A.google_tag_manager={});a["GTM-K4NGV4"]||(a["GTM-K4NGV4"]=xg);ha=a};tf.push.apply(tf,function(){for(var a=[_eq,_e,'_event',_M(0),'gtm.js','1366260_2147479553',_ua,true,'UA-55922602-5',false,'\x26tid',{10:8},1,_html,'\x3cmeta name\x3d\x22google-site-verification\x22 content\x3d\x228hEX6fkxPyy8TZASnWEGDGPvIPtqZqV7JLV9SdEILDY\x22\x3e',5,_u,'Page URL','Page Hostname','host','Page Path','path',_f,'Referrer','Event'],b=[],c=0;c<a.length;c++)b[c]=Ff(c,a);return b}());If(uf,0,"10:0,10:1,12:2,2:3,3:4,10:6,14:7,0:8,9:9,8:9,16:9,5:9,6:9,1:11,13:9,7:7,15:12,10:13,11:14,15:15,10:16,12:17,12:18,4:19,12:20,4:21,10:22,12:23,12:24");If(vf,1,"G,AAAM,AAA0,AAAED,AAAAM,CAAAQ");If(xf,1,"Z");If(X,1,"g_f,ABgD");If(Uc,2,"B:D::");If(Vc,4,"5.5:");
for(var yg=0;yg<X.length;yg++){var zg=X[yg],Ag=1;zg[""]?Ag=2:zg[""]&&(Ag=0);Ga[yg]={firingOption:Ag,state:void 0}}xg.Ya();
(function(a){})("async");
(function(){var a=v("dataLayer",[],!1),b=v("google_tag_manager",{},!1),b=b["dataLayer"]=b["dataLayer"]||{};ka.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});ib.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(oc.push.apply(oc,b);300<this.length;)this.shift();return xc()};oc.push.apply(oc,a.slice(0));q(xc)})();
if("interactive"==N.readyState&&!N.createEventObject||"complete"==N.readyState)ab();else{S(N,"DOMContentLoaded",ab);S(N,"readystatechange",ab);if(N.createEventObject&&N.documentElement.doScroll){var Ig=!0;try{Ig=!A.frameElement}catch(Mg){}Ig&&cb()}S(A,"load",ab)}"complete"===N.readyState?jb():S(A,"load",jb);
(function(a){})("async");(function(){})();var _vs="res_ts:1438170918251000,srv_cl:103364016,ds:live,cv:9";
})()
