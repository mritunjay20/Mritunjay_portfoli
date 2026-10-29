(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Li(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function yf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oa={duration:.5,overwrite:!1,delay:0},Fu,ln,Pt,ei=1e8,St=1/ei,Dc=Math.PI*2,Em=Dc/4,wm=0,Mf=Math.sqrt,Tm=Math.cos,Am=Math.sin,sn=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},zi=function(e){return typeof e=="number"},ku=function(e){return typeof e>"u"},bi=function(e){return typeof e=="object"},An=function(e){return e!==!1},Bu=function(){return typeof window<"u"},no=function(e){return Ot(e)||sn(e)},Sf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,Cm=/random\([^)]+\)/g,Rm=/,\s*/g,Td=/(?:-?\.?\d|\.)+/gi,bf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ef=/[+-]=-?[.\d]+/,Pm=/[^,'"\[\]\s]+/gi,Lm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,mi,Ic,zu,Yn={},rl={},wf,Tf=function(e){return(rl=Hs(e,Yn))&&In},Hu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Fa=function(e,t){return!t&&console.warn(e)},Af=function(e,t){return e&&(Yn[e]=t)&&rl&&(rl[e]=t)||Yn},ka=function(){return 0},Dm={suppressEvents:!0,isStart:!0,kill:!1},Go={suppressEvents:!0,kill:!1},Im={suppressEvents:!0},Gu={},rr=[],Uc={},Cf,zn={},zl={},Ad=30,Vo=[],Vu="",Wu=function(e){var t=e[0],n,i;if(bi(t)||Ot(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Vo.length;i--&&!Vo[i].targetTest(t););n=Vo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Kf(e[i],n)))||e.splice(i,1);return e},Br=function(e){return e._gsap||Wu(ti(e))[0]._gsap},Rf=function(e,t,n){return(n=e[t])&&Ot(n)?e[t]():ku(n)&&e.getAttribute&&e.getAttribute(t)||n},Cn=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},Ls=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Um=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},sl=function(){var e=rr.length,t=rr.slice(0),n,i;for(Uc={},rr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Xu=function(e){return!!(e._initted||e._startAt||e.add)},Pf=function(e,t,n,i){rr.length&&!ln&&sl(),e.render(t,n,!!(ln&&t<0&&Xu(e))),rr.length&&!ln&&sl()},Lf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Pm).length<2?t:sn(e)?e.trim():e},Df=function(e){return e},$n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Nm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Hs=function(e,t){for(var n in t)e[n]=t[n];return e},Cd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=bi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},al=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ya=function(e){var t=e.parent||It,n=e.keyframes?Nm(gn(e.keyframes)):$n;if(An(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Om=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},If=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},El=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},cr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},zr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Fm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nc=function(e,t,n,i){return e._startAt&&(ln?e._startAt.revert(Go):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},km=function r(e){return!e||e._ts&&r(e.parent)},Rd=function(e){return e._repeat?Gs(e._tTime,e=e.duration()+e._rDelay)*e:0},Gs=function(e,t){var n=Math.floor(e=Dt(e/t));return e&&n===e?n-1:n},ol=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},wl=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},Tl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),wl(e),n._dirty||zr(n,e)),e},Uf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ol(e.rawTime(),t),(!t._dur||Ka(0,t.totalDuration(),n)-t._tTime>St)&&t.render(n,!0)),zr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-St}},vi=function(e,t,n,i){return t.parent&&cr(t),t._start=Dt((zi(n)?n:n||e!==It?Zn(e,n,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),If(e,t,"_first","_last",e._sort?"_start":0),Oc(t)||(e._recent=t),i||Uf(e,t),e._ts<0&&Tl(e,e._tTime),e},Nf=function(e,t){return(Yn.ScrollTrigger||Hu("scrollTrigger",t))&&Yn.ScrollTrigger.create(t,e)},Of=function(e,t,n,i,s){if(Yu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Cf!==Gn.frame)return rr.push(e),e._lazy=[s,i],1},Bm=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Oc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zm=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Bm(e)&&!(!e._initted&&Oc(e))||(e._ts<0||e._dp._ts<0)&&!Oc(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Ka(0,e._tDur,t),u=Gs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Gs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||ln||i||e._zTime===St||!t&&e._zTime){if(!e._initted&&Of(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?St:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Nc(e,t,n,!0),e._onUpdate&&!n&&Wn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Wn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&cr(e,1),!n&&!ln&&(Wn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Hm=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Vs=function(e,t,n,i){var s=e._repeat,a=Dt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Dt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Tl(e,e._tTime=e._tDur*o),e.parent&&wl(e),n||zr(e.parent,e),e},Pd=function(e){return e instanceof Tn?zr(e):Vs(e,e._dur)},Gm={_start:0,endTime:ka,totalDuration:ka},Zn=function r(e,t,n){var i=e.labels,s=e._recent||Gm,a=e.duration()>=ei?s.endTime(!1):e._dur,o,l,c;return sn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ma=function(e,t,n){var i=zi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;a.immediateRender=An(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Wt(t[0],a,t[s+1])},mr=function(e,t){return e||e===0?t(e):t},Ka=function(e,t,n){return n<e?e:n>t?t:n},pn=function(e,t){return!sn(e)||!(t=Lm.exec(e))?"":t[1]},Vm=function(e,t,n){return mr(n,function(i){return Ka(e,t,i)})},Fc=[].slice,Ff=function(e,t){return e&&bi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&bi(e[0]))&&!e.nodeType&&e!==mi},Wm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return sn(i)&&!t||Ff(i,1)?(s=n).push.apply(s,ti(i)):n.push(i)})||n},ti=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):sn(e)&&!n&&(Ic||!Ws())?Fc.call((t||zu).querySelectorAll(e),0):gn(e)?Wm(e,n):Ff(e)?Fc.call(e,0):e?[e]:[]},kc=function(e){return e=ti(e)[0]||Fa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ti(t,n.querySelectorAll?n:n===e?Fa("Invalid scope")||zu.createElement("div"):e)}},kf=function(e){return e.sort(function(){return .5-Math.random()})},Bf=function(e){if(Ot(e))return e;var t=bi(e)?e:{each:e},n=Hr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return sn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,_){var g=(_||t).length,m=a[g],p,v,y,M,w,E,b,R,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,ei])[1],!S){for(b=-ei;b<(b=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=a[g]=[],p=l?Math.min(S,g)*u-.5:i%S,v=S===ei?0:l?g*f/S-.5:i/S|0,b=0,R=ei,E=0;E<g;E++)y=E%S-p,M=v-(E/S|0),m[E]=w=c?Math.abs(c==="y"?M:y):Mf(y*y+M*M),w>b&&(b=w),w<R&&(R=w);i==="random"&&kf(m),m.max=b-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=pn(t.amount||t.each)||0,n=n&&g<0?ig(n):n}return g=(m[h]-m.min)/m.max||0,Dt(m.b+(n?n(g):g)*m.v)+m.u}},Bc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(zi(n)?0:pn(n))}},zf=function(e,t){var n=gn(e),i,s;return!n&&bi(e)&&(i=n=e.radius||ei,e.values?(e=ti(e.values),(s=!zi(e[0]))&&(i*=i)):e=Bc(e.increment)),mr(t,n?Ot(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ei,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,s||u===a||zi(a)?u:u+pn(a)}:Bc(e))},Hf=function(e,t,n,i){return mr(gn(e)?!t:n===!0?!!(n=0):!i,function(){return gn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Xm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},qm=function(e,t){return function(n){return e(parseFloat(n))+(t||pn(n))}},Ym=function(e,t,n){return Vf(e,t,0,1,n)},Gf=function(e,t,n){return mr(n,function(i){return e[~~t(i)]})},$m=function r(e,t,n){var i=t-e;return gn(e)?Gf(e,r(0,e.length),t):mr(n,function(s){return(i+(s-e)%i)%i+e})},jm=function r(e,t,n){var i=t-e,s=i*2;return gn(e)?Gf(e,r(0,e.length-1),t):mr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ba=function(e){return e.replace(Cm,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Rm);return Hf(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Vf=function(e,t,n,i,s){var a=t-e,o=i-n;return mr(s,function(l){return n+((l-e)/a*o||0)})},Km=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=sn(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(gn(e)&&!gn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=t}else i||(e=Hs(gn(e)?[]:{},e));if(!u){for(l in t)qu.call(o,e,l,"get",t[l]);s=function(_){return Ku(_,o)||(a?e.p:e)}}}return mr(n,s)},Ld=function(e,t,n){var i=e.labels,s=ei,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Wn=function(e,t,n){var i=e.vars,s=i[t],a=Pt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&rr.length&&sl(),o&&(Pt=o),u=l?s.apply(c,l):s.call(c),Pt=a,u},ha=function(e){return cr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&Wn(e,"onInterrupt"),e},Cs,Wf=[],Xf=function(e){if(e)if(e=!e.name&&e.default||e,Bu()||e.headless){var t=e.name,n=Ot(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ka,render:Ku,add:qu,kill:fg,modifier:hg,rawVars:0},a={targetTest:0,get:0,getSetter:ju,aliases:{},register:0};if(Ws(),e!==i){if(zn[t])return;$n(i,$n(al(e,s),a)),Hs(i.prototype,Hs(s,al(e,a))),zn[i.prop=t]=i,e.targetTest&&(Vo.push(i),Gu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Af(t,i),e.register&&e.register(In,i,Rn)}else Wf.push(e)},Mt=255,fa={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},Hl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},qf=function(e,t,n){var i=e?zi(e)?[e>>16,e>>8&Mt,e&Mt]:0:fa.black,s,a,o,l,c,u,f,h,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fa[e])i=fa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Td),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Hl(l+1/3,s,a),i[1]=Hl(l,s,a),i[2]=Hl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(bf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Td)||fa.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Mt,a=i[1]/Mt,o=i[2]/Mt,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Yf=function(e){var t=[],n=[],i=-1;return e.split(sr).forEach(function(s){var a=s.match(As)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Dd=function(e,t,n){var i="",s=(e+i).match(sr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=qf(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Yf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(sr,"1").split(As),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(sr),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},sr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fa)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Zm=/hsl[a]?\(/,$f=function(e){var t=e.join(" "),n;if(sr.lastIndex=0,sr.test(t))return n=Zm.test(t),e[1]=Dd(e[1],n),e[0]=Dd(e[0],n,Yf(e[1])),!0},za,Gn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,_=function g(m){var p=r()-i,v=m===!0,y,M,w,E;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,y=w-a,(y>0||v)&&(E=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,a+=y+(y>=s?4:s-y),M=1),v||(l=c(g)),M)for(d=0;d<o.length;d++)o[d](w,h,E,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){wf&&(!Ic&&Bu()&&(mi=Ic=window,zu=mi.document||{},Yn.gsap=In,(mi.gsapVersions||(mi.gsapVersions=[])).push(In.version),Tf(rl||mi.GreenSockGlobals||!mi.gsap&&mi||{}),Wf.forEach(Xf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},za=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),za=0,c=ka},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,v){var y=p?function(M,w,E,b){m(M,w,E,b),f.remove(y)}:m;return f.remove(m),o[v?"unshift":"push"](y),Ws(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f}(),Ws=function(){return!za&&Gn.wake()},at={},Jm=/^[\d.\-M][\d.\-,\s]/,Qm=/["']/g,eg=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Qm,"").trim():+c,i=l.substr(o+1).trim();return t},tg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ng=function(e){var t=(e+"").split("("),n=at[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[eg(t[1])]:tg(e).split(",").map(Lf)):at._CE&&Jm.test(e)?at._CE("",e):n},ig=function(e){return function(t){return 1-e(1-t)}},Hr=function(e,t){return e&&(Ot(e)?e:at[e]||ng(e))||t},Jr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Cn(e,function(o){at[o]=Yn[o]=s,at[a=o.toLowerCase()]=n;for(var l in s)at[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[o+"."+l]=s[l]}),s},jf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Gl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Dc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Am((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:jf(o);return s=Dc/s,l.config=function(c,u){return r(e,c,u)},l},Vl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:jf(n);return i.config=function(s){return r(e,s)},i};Cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Jr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;Jr("Elastic",Gl("in"),Gl("out"),Gl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Jr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Jr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Jr("Circ",function(r){return-(Mf(1-r*r)-1)});Jr("Sine",function(r){return r===1?1:-Tm(r*Em)+1});Jr("Back",Vl("in"),Vl("out"),Vl());at.SteppedEase=at.steps=Yn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-St;return function(o){return((i*Ka(0,a,o)|0)+s)*n}}};Oa.ease=at["quad.out"];Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Vu+=r+","+r+"Params,"});var Kf=function(e,t){this.id=wm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Rf,this.set=t?t.getSetter:ju},Ha=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vs(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),za||Gn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Vs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Tl(this,n),!s._dp||s.parent||Uf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===St||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Pf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Rd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Rd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Gs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ol(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-St?0:this._rts,this.totalTime(Ka(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),wl(this),Fm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Dt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&vi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ol(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Im);var i=ln;return ln=n,Xu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Pd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Pd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Zn(this,n),An(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,An(i)),this._dur||(this._zTime=-St),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-St)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ot(n)?n:Df,l=function(){var u=i.then;i.then=null,s&&s(),Ot(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ha(this)},r}();$n(Ha.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var Tn=function(r){yf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),It&&vi(n.parent||It,Li(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Nf(Li(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ma(0,arguments,this),this},t.from=function(i,s,a){return Ma(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ma(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ya(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(i,s,Zn(this,a),1),this},t.call=function(i,s,a){return vi(this,Wt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Wt(i,a,Zn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ya(a).immediateRender=An(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,ya(o).immediateRender=An(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Dt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,_,g,m,p,v,y,M,w,E,b;if(this!==It&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,M=this._start,y=this._ts,p=!y,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Dt(u%m),u===l?(g=this._repeat,h=c):(w=Dt(u/m),g=~~w,g&&g===w&&(h=c,g--),h>c&&(h=c)),w=Gs(this._tTime,m),!o&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),E&&g&1&&(h=c-h,b=1),g!==w&&!this._lock){var R=E&&w&1,S=R===(E&&g&1);if(g<w&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Dt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,w=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Hm(this,Dt(o),Dt(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!w&&(Wn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!p){v=0,_&&(u+=this._zTime=-St);break}}d=_}else{d=this._last;for(var x=i<0?i:h;d;){if(_=d._prev,(d._act||x<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,a||ln&&Xu(d)),h!==this._time||!this._ts&&!p){v=0,_&&(u+=this._zTime=x?-St:St);break}}d=_}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-St)._zTime=h>=o?1:-1,this._ts))return this._start=M,wl(this),this.render(i,s,a);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&cr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Wn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(zi(s)||(s=Zn(this,s,i)),!(i instanceof Ha)){if(gn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(sn(i))return this.addLabel(i,s);if(Ot(i))i=Wt.delayedCall(0,i);else return this}return this!==i?vi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ei);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Wt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return sn(i)?this.removeLabel(i):Ot(i)?this.killTweensOf(i):(i.parent===this&&El(this,i),i===this._recent&&(this._recent=this._last),zr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(Gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Zn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Wt.delayedCall(0,s||ka,a);return o.data="isPause",this._hasPause=1,vi(this,o,Zn(this,i))},t.removePause=function(i){var s=this._first;for(i=Zn(this,i);s;)s._start===i&&s.data==="isPause"&&cr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Qi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ti(i),l=this._first,c=zi(s),u;l;)l instanceof Wt?Um(l._targets,o)&&(c?(!Qi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Zn(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=Wt.to(a,$n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||St,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Vs(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,$n({startAt:{time:Zn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ld(this,Zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ld(this,Zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Dt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return zr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=ei,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,vi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Dt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Vs(a,a===It&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(It._ts&&(Pf(It,ol(i,It)),Cf=Gn.frame),Gn.frame>=Ad){Ad+=qn.autoSleep||120;var s=It._first;if((!s||!s._ts)&&qn.autoSleep&&Gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gn.sleep()}}},e}(Ha);$n(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var rg=function(e,t,n,i,s,a,o){var l=new Rn(this._pt,e,t,0,1,np,null,s),c=0,u=0,f,h,d,_,g,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ba(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),h=n.match(Bl)||[];f=Bl.exec(i);)_=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Ls(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Bl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ef.test(i)||p)&&(l.e=0),this._pt=l,l},qu=function(e,t,n,i,s,a,o,l,c,u){Ot(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:Ot(f)?c?e[t.indexOf("set")||!Ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Ot(f)?c?cg:ep:$u,_;if(sn(i)&&(~i.indexOf("random(")&&(i=Ba(i)),i.charAt(1)==="="&&(_=Ls(h,i)+(pn(h)||0),(_||_===0)&&(i=_))),!u||h!==i||zc)return!isNaN(h*i)&&i!==""?(_=new Rn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?dg:tp,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!f&&!(t in e)&&Hu(t,i),rg.call(this,e,t,h,i,d,l||qn.stringFilter,c))},sg=function(e,t,n,i,s){if(Ot(e)&&(e=Sa(e,s,t,n,i)),!bi(e)||e.style&&e.nodeType||gn(e)||Sf(e))return sn(e)?Sa(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Sa(e[o],s,t,n,i);return a},Zf=function(e,t,n,i,s,a){var o,l,c,u;if(zn[e]&&(o=new zn[e]).init(s,o.rawVars?t[e]:sg(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Rn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Cs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Qi,zc,Yu=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!Fu,M=e.timeline,w=i.easeReverse||f,E,b,R,S,x,C,P,U,O,N,k,X,V;if(M&&(!h||!s)&&(s="none"),e._ease=Hr(s,Oa.ease),e._rEase=w&&(Hr(w)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||h&&!i.stagger){if(U=m[0]?Br(m[0]).harness:0,X=U&&i[U.prop],E=al(i,Gu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?Go:Dm),g._lazy=0),a){if(cr(e._startAt=Wt.set(m,$n({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&An(l),startAt:null,delay:0,onUpdate:c&&function(){return Wn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln||!o&&!d)&&e._startAt.revert(Go),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),R=$n({overwrite:!1,data:"isFromStart",lazy:o&&!g&&An(l),immediateRender:o,stagger:0,parent:p},E),X&&(R[U.prop]=X),cr(e._startAt=Wt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln?e._startAt.revert(Go):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&An(l)||l&&!_,b=0;b<m.length;b++){if(x=m[b],P=x._gsap||Wu(m)[b]._gsap,e._ptLookup[b]=N={},Uc[P.id]&&rr.length&&sl(),k=v===m?b:v.indexOf(x),U&&(O=new U).init(x,X||E,e,k,v)!==!1&&(e._pt=S=new Rn(e._pt,x,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(ae){N[ae]=S}),O.priority&&(C=1)),!U||X)for(R in E)zn[R]&&(O=Zf(R,E,e,k,x,v))?O.priority&&(C=1):N[R]=S=qu.call(e,x,R,"get",E[R],k,v,0,i.stringFilter);e._op&&e._op[b]&&e.kill(x,e._op[b]),y&&e._pt&&(Qi=e,It.killTweensOf(x,N,e.globalTime(t)),V=!e.parent,Qi=0),e._pt&&l&&(Uc[P.id]=1)}C&&ip(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!V,h&&t<=0&&M.render(ei,!0,!0)},ag=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return zc=1,e.vars[t]="+=0",Yu(e,o),zc=0,l?Fa(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=kt(n)+pn(f.e)),f.b&&(f.b=u.s+pn(f.b))},og=function(e,t){var n=e[0]?Br(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Hs({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},lg=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(gn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Sa=function(e,t,n,i,s){return Ot(e)?e.call(t,n,i,s):sn(e)&&~e.indexOf("random(")?Ba(e):e},Jf=Vu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Qf={};Cn(Jf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Qf[r]=1});var Wt=function(r){yf(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ya(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||It,v=(gn(n)||Sf(n)?zi(n[0]):"length"in i)?[n]:ti(n),y,M,w,E,b,R,S,x;if(o._targets=v.length?Wu(v):Fa("GSAP target "+n+" not found. https://gsap.com",!qn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||h||no(c)||no(u)){i=o.vars;var C=i.easeReverse||i.yoyoEase;if(y=o.timeline=new Tn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:v}),y.kill(),y.parent=y._dp=Li(o),y._start=0,h||no(c)||no(u)){if(E=v.length,S=h&&Bf(h),bi(h))for(b in h)~Jf.indexOf(b)&&(x||(x={}),x[b]=h[b]);for(M=0;M<E;M++)w=al(i,Qf),w.stagger=0,C&&(w.easeReverse=C),x&&Hs(w,x),R=v[M],w.duration=+Sa(c,Li(o),M,R,v),w.delay=(+Sa(u,Li(o),M,R,v)||0)-o._delay,!h&&E===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),y.to(R,w,S?S(M,R,v):0),y._ease=at.none;y.duration()?c=u=0:o.timeline=0}else if(_){ya($n(y.vars.defaults,{ease:"none"})),y._ease=Hr(_.ease||i.ease||"none");var P=0,U,O,N;if(gn(_))_.forEach(function(k){return y.to(v,k,">")}),y.duration();else{w={};for(b in _)b==="ease"||b==="easeEach"||lg(b,_[b],w,_.easeEach);for(b in w)for(U=w[b].sort(function(k,X){return k.t-X.t}),P=0,M=0;M<U.length;M++)O=U[M],N={ease:O.e,duration:(O.t-(M?U[M-1].t:0))/100*c},N[b]=O.v,y.to(v,N,P),P+=N.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!Fu&&(Qi=Li(o),It.killTweensOf(v),Qi=0),vi(p,Li(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===Dt(p._time)&&An(f)&&km(Li(o))&&p.data!=="nested")&&(o._tTime=-St,o.render(Math.max(0,-u)||0)),m&&Nf(Li(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-St&&!u?l:i<St?0:i,h,d,_,g,m,p,v,y;if(!c)zm(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(h=Dt(f%g),f===l?(_=this._repeat,h=c):(m=Dt(f/g),_=~~m,_&&_===m?(h=c,_--):h>c&&(h=c)),p=this._yoyo&&_&1,p&&(h=c-h),m=Gs(this._tTime,g),h===o&&!a&&this._initted&&_===m)return this._tTime=f,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(Dt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Of(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var M=h<o;if(M!==this._inv){var w=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(M?-1:1)/w:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!m&&(Wn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Nc(this,i,s,a),Wn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Nc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&cr(this,1),!s&&!(u&&!o)&&(f||o||p)&&(Wn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){za||Gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Yu(this,c),u=this._ease(c/this._dur),ag(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Tl(this,0),this.parent||If(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ha(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ln),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qi&&Qi.vars.overwrite!==!0)._first||ha(this),this.parent&&a!==this.timeline.totalDuration()&&Vs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ti(i):o,c=this._ptLookup,u=this._pt,f,h,d,_,g,m,p;if((!s||s==="all")&&Om(o,l))return s==="all"&&(this._pt=0),ha(this);for(f=this._op=this._op||[],s!=="all"&&(sn(s)&&(g={},Cn(s,function(v){return g[v]=1}),s=g),s=og(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(f[p]=s,_=h,d={}):(d=f[p]=f[p]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&El(this,m,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ha(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ma(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ma(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return It.killTweensOf(i,s,a)},e}(Ha);$n(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Cn("staggerTo,staggerFrom,staggerFromTo",function(r){Wt[r]=function(){var e=new Tn,t=Fc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var $u=function(e,t,n){return e[t]=n},ep=function(e,t,n){return e[t](n)},cg=function(e,t,n,i){return e[t](i.fp,n)},ug=function(e,t,n){return e.setAttribute(t,n)},ju=function(e,t){return Ot(e[t])?ep:ku(e[t])&&e.setAttribute?ug:$u},tp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},dg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},np=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ku=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},hg=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},fg=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?El(this,t,"_pt"):t.dep||(n=1),t=i;return!n},pg=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ip=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Rn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||tp,this.d=l||this,this.set=c||$u,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=pg,this.m=n,this.mt=s,this.tween=i},r}();Cn(Vu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Gu[r]=1});Yn.TweenMax=Yn.TweenLite=Wt;Yn.TimelineLite=Yn.TimelineMax=Tn;It=new Tn({sortChildren:!1,defaults:Oa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qn.stringFilter=$f;var Gr=[],Wo={},mg=[],Id=0,gg=0,Wl=function(e){return(Wo[e]||mg).map(function(t){return t()})},Hc=function(){var e=Date.now(),t=[];e-Id>2&&(Wl("matchMediaInit"),Gr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=mi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Wl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Id=e,Wl("matchMedia"))},rp=function(){function r(t,n){this.selector=n&&kc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=gg++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ot(n)&&(s=i,i=n,n=Ot);var a=this,o=function(){var c=Pt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=kc(s)),Pt=a,f=i.apply(a,arguments),Ot(f)&&a._r.push(f),Pt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Ot?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Pt;Pt=null,n(this),Pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Wt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Gr.length;a--;)Gr[a].id===this.id&&Gr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),_g=function(){function r(t){this.contexts=[],this.scope=t,Pt&&Pt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){bi(n)||(n={matches:n});var a=new rp(0,s||this.scope),o=a.conditions={},l,c,u;Pt&&!a.selector&&(a.selector=Pt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=mi.matchMedia(n[c]),l&&(Gr.indexOf(a)<0&&Gr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Hc):l.addEventListener("change",Hc)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ll={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Xf(i)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,n,i){sn(e)&&(e=ti(e)[0]);var s=Br(e||{}).get,a=n?Df:Lf;return n==="native"&&(n=""),e&&(t?a((zn[t]&&zn[t].get||s)(e,t,n,i)):function(o,l,c){return a((zn[o]&&zn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ti(e),e.length>1){var i=e.map(function(u){return In.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=zn[t],o=Br(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Cs._pt=0,f.init(e,n?u+n:u,Cs,0,[e]),f.render(1,f),Cs._pt&&Ku(1,Cs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=In.to(e,$n((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Hr(e.ease,Oa.ease)),Cd(Oa,e||{})},config:function(e){return Cd(qn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!zn[o]&&!Yn[o]&&Fa(t+" effect requires "+o+" plugin.")}),zl[t]=function(o,l,c){return n(ti(o),$n(l||{},s),c)},a&&(Tn.prototype[t]=function(o,l,c){return this.add(zl[t](o,bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){at[e]=Hr(t)},parseEase:function(e,t){return arguments.length?Hr(e,t):at},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),i,s;for(n.smoothChildTiming=An(e.smoothChildTiming),It.remove(n),n._dp=0,n._time=n._tTime=It._time,i=It._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Wt&&i.vars.onComplete===i._targets[0]))&&vi(n,i,i._start-i._delay),i=s;return vi(It,n,0),n},context:function(e,t){return e?new rp(e,t):Pt},matchMedia:function(e){return new _g(e)},matchMediaRefresh:function(){return Gr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Hc()},addEventListener:function(e,t){var n=Wo[e]||(Wo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Wo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:$m,wrapYoyo:jm,distribute:Bf,random:Hf,snap:zf,normalize:Ym,getUnit:pn,clamp:Vm,splitColor:qf,toArray:ti,selector:kc,mapRange:Vf,pipe:Xm,unitize:qm,interpolate:Km,shuffle:kf},install:Tf,effects:zl,ticker:Gn,updateRoot:Tn.updateRoot,plugins:zn,globalTimeline:It,core:{PropTween:Rn,globals:Af,Tween:Wt,Timeline:Tn,Animation:Ha,getCache:Br,_removeLinkedListItem:El,reverting:function(){return ln},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return Fu=e}}};Cn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ll[r]=Wt[r]});Gn.add(Tn.updateRoot);Cs=ll.to({},{duration:0});var vg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},xg=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=vg(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Xl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(sn(s)&&(l={},Cn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}xg(o,s)}}}},In=ll.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Xl("roundProps",Bc),Xl("modifiers"),Xl("snap",zf))||ll;Wt.version=Tn.version=In.version="3.15.0";wf=1;Bu()&&Ws();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ud,er,Ds,Zu,Nr,Nd,Ju,yg=function(){return typeof window<"u"},Hi={},Cr=180/Math.PI,Is=Math.PI/180,is=Math.atan2,Od=1e8,Qu=/([A-Z])/g,Mg=/(left|right|width|margin|padding|x)/i,Sg=/[\s,\(]\S/,yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Gc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Eg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wg=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Tg=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},sp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ap=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ag=function(e,t,n){return e.style[t]=n},Cg=function(e,t,n){return e.style.setProperty(t,n)},Rg=function(e,t,n){return e._gsap[t]=n},Pg=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Lg=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Dg=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Nt="transform",Pn=Nt+"Origin",Ig=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Hi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=yi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Di(i,o)}):this.tfm[e]=a.x?a[e]:Di(i,e),e===Pn&&(this.tfm.zOrigin=a.zOrigin);else return yi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Nt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Pn,t,"")),e=Nt}(s||t)&&this.props.push(e,t,s[e])},op=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ug=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Qu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ju(),(!s||!s.isStart)&&!n[Nt]&&(op(n),i.zOrigin&&n[Pn]&&(n[Pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},lp=function(e,t){var n={target:e,props:[],revert:Ug,save:Ig};return e._gsap||In.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},cp,Vc=function(e,t){var n=er.createElementNS?er.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):er.createElement(e);return n&&n.style?n:er.createElement(e)},Xn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Qu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Xs(t)||t,1)||""},Fd="O,Moz,ms,Ms,Webkit".split(","),Xs=function(e,t,n){var i=t||Nr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Fd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Fd[a]:"")+e},Wc=function(){yg()&&window.document&&(Ud=window,er=Ud.document,Ds=er.documentElement,Nr=Vc("div")||{style:{}},Vc("div"),Nt=Xs(Nt),Pn=Nt+"Origin",Nr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cp=!!Xs("perspective"),Ju=In.core.reverting,Zu=1)},kd=function(e){var t=e.ownerSVGElement,n=Vc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ds.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ds.removeChild(n),s},Bd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},up=function(e){var t,n;try{t=e.getBBox()}catch{t=kd(e),n=1}return t&&(t.width||t.height)||n||(t=kd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Bd(e,["x","cx","x1"])||0,y:+Bd(e,["y","cy","y1"])||0,width:0,height:0}:t},dp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&up(e))},ur=function(e,t){if(t){var n=e.style,i;t in Hi&&t!==Pn&&(t=Nt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Qu,"-$1").toLowerCase())):n.removeAttribute(t)}},tr=function(e,t,n,i,s,a){var o=new Rn(e._pt,t,n,0,1,a?ap:sp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},zd={deg:1,rad:1,turn:1},Ng={grid:1,flex:1},dr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Nr.style,l=Mg.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",_,g,m,p;if(i===a||!s||zd[i]||zd[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&dp(e),(d||a==="%")&&(Hi[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],kt(d?s/_*f:s/100*_);if(o[l?"width":"height"]=f+(h?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===er||!g.appendChild)&&(g=er.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Gn.time&&!m.uncache)return kt(s/m.width*f);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+i,_=e[u],v?e.style[t]=v:ur(e,t)}else(d||a==="%")&&!Ng[Xn(g,"display")]&&(o.position=Xn(e,"position")),g===e&&(o.position="static"),g.appendChild(Nr),_=Nr[u],g.removeChild(Nr),o.position="absolute";return l&&d&&(m=Br(g),m.time=Gn.time,m.width=g[u]),kt(h?_*s/f:_&&s?f/_*s:0)},Di=function(e,t,n,i){var s;return Zu||Wc(),t in yi&&t!=="transform"&&(t=yi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Hi[t]&&t!=="transform"?(s=Va(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ul(Xn(e,Pn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=cl[t]&&cl[t](e,t,n)||Xn(e,t)||Rf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?dr(e,t,s,n)+n:s},Og=function(e,t,n,i){if(!n||n==="none"){var s=Xs(t,e,1),a=s&&Xn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Xn(e,"borderTopColor"))}var o=new Rn(this._pt,e.style,t,0,1,np),l=0,c=0,u,f,h,d,_,g,m,p,v,y,M,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Xn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Xn(e,t)||i,g?e.style[t]=g:ur(e,t)),u=[n,i],$f(u),n=u[0],i=u[1],h=n.match(As)||[],w=i.match(As)||[],w.length){for(;f=As.exec(i);)m=f[0],v=i.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=h[c++]||"")&&(d=parseFloat(g)||0,M=g.substr((d+"").length),m.charAt(1)==="="&&(m=Ls(d,m)+M),p=parseFloat(m),y=m.substr((p+"").length),l=As.lastIndex-y.length,y||(y=y||qn.units[t]||M,l===i.length&&(i+=y,o.e+=y)),M!==y&&(d=dr(e,t,g,y)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?ap:sp;return Ef.test(i)&&(o.e=0),this._pt=o,o},Hd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Fg=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Hd[n]||n,t[1]=Hd[i]||i,t.join(" ")},kg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Hi[o]&&(l=1,o=o==="transformOrigin"?Pn:Nt),ur(n,o);l&&(ur(n,Nt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Va(n,1),a.uncache=1,op(i)))}},cl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Rn(e._pt,t,n,0,0,kg);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ga=[1,0,0,1,0,0],hp={},fp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Gd=function(e){var t=Xn(e,Nt);return fp(t)?Ga:t.substr(7).match(bf).map(kt)},ed=function(e,t){var n=e._gsap||Br(e),i=e.style,s=Gd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ga:s):(s===Ga&&!e.offsetParent&&e!==Ds&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ds.appendChild(e)),s=Gd(e),l?i.display=l:ur(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ds.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Xc=function(e,t,n,i,s,a){var o=e._gsap,l=s||ed(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],v=l[5],y=t.split(" "),M=parseFloat(y[0])||0,w=parseFloat(y[1])||0,E,b,R,S;n?l!==Ga&&(b=d*m-_*g)&&(R=M*(m/b)+w*(-g/b)+(g*v-m*p)/b,S=M*(-_/b)+w*(d/b)-(d*v-_*p)/b,M=R,w=S):(E=up(e),M=E.x+(~y[0].indexOf("%")?M/100*E.width:M),w=E.y+(~(y[1]||y[0]).indexOf("%")?w/100*E.height:w)),i||i!==!1&&o.smooth?(p=M-c,v=w-u,o.xOffset=f+(p*d+v*g)-p,o.yOffset=h+(p*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=w,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Pn]="0px 0px",a&&(tr(a,o,"xOrigin",c,M),tr(a,o,"yOrigin",u,w),tr(a,o,"xOffset",f,o.xOffset),tr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+w)},Va=function(e,t){var n=e._gsap||new Kf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Xn(e,Pn)||"0",u,f,h,d,_,g,m,p,v,y,M,w,E,b,R,S,x,C,P,U,O,N,k,X,V,ae,L,te,ye,Ce,j,Q;return u=f=h=g=m=p=v=y=M=0,d=_=1,n.svg=!!(e.getCTM&&dp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Nt]!=="none"?l[Nt]:"")),i.scale=i.rotate=i.translate="none"),b=ed(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Xc(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,b)),w=n.xOrigin||0,E=n.yOrigin||0,b!==Ga&&(C=b[0],P=b[1],U=b[2],O=b[3],u=N=b[4],f=k=b[5],b.length===6?(d=Math.sqrt(C*C+P*P),_=Math.sqrt(O*O+U*U),g=C||P?is(P,C)*Cr:0,v=U||O?is(U,O)*Cr+g:0,v&&(_*=Math.abs(Math.cos(v*Is))),n.svg&&(u-=w-(w*C+E*U),f-=E-(w*P+E*O))):(Q=b[6],Ce=b[7],L=b[8],te=b[9],ye=b[10],j=b[11],u=b[12],f=b[13],h=b[14],R=is(Q,ye),m=R*Cr,R&&(S=Math.cos(-R),x=Math.sin(-R),X=N*S+L*x,V=k*S+te*x,ae=Q*S+ye*x,L=N*-x+L*S,te=k*-x+te*S,ye=Q*-x+ye*S,j=Ce*-x+j*S,N=X,k=V,Q=ae),R=is(-U,ye),p=R*Cr,R&&(S=Math.cos(-R),x=Math.sin(-R),X=C*S-L*x,V=P*S-te*x,ae=U*S-ye*x,j=O*x+j*S,C=X,P=V,U=ae),R=is(P,C),g=R*Cr,R&&(S=Math.cos(R),x=Math.sin(R),X=C*S+P*x,V=N*S+k*x,P=P*S-C*x,k=k*S-N*x,C=X,N=V),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=kt(Math.sqrt(C*C+P*P+U*U)),_=kt(Math.sqrt(k*k+Q*Q)),R=is(N,k),v=Math.abs(R)>2e-4?R*Cr:0,M=j?1/(j<0?-j:j):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!fp(Xn(e,Nt)),X&&e.setAttribute("transform",X))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=kt(d),n.scaleY=kt(_),n.rotation=kt(g)+o,n.rotationX=kt(m)+o,n.rotationY=kt(p)+o,n.skewX=v+o,n.skewY=y+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Pn]=ul(c)),n.xOffset=n.yOffset=0,n.force3D=qn.force3D,n.renderTransform=n.svg?zg:cp?pp:Bg,n.uncache=0,n},ul=function(e){return(e=e.split(" "))[0]+" "+e[1]},ql=function(e,t,n){var i=pn(t);return kt(parseFloat(t)+parseFloat(dr(e,"x",n+"px",i)))+i},Bg=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,pp(e,t)},yr="0deg",na="0px",Mr=") ",pp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,y=n.zOrigin,M="",w=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==yr||u!==yr)){var E=parseFloat(u)*Is,b=Math.sin(E),R=Math.cos(E),S;E=parseFloat(f)*Is,S=Math.cos(E),a=ql(v,a,b*S*-y),o=ql(v,o,-Math.sin(E)*-y),l=ql(v,l,R*S*-y+y)}m!==na&&(M+="perspective("+m+Mr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(w||a!==na||o!==na||l!==na)&&(M+=l!==na||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Mr),c!==yr&&(M+="rotate("+c+Mr),u!==yr&&(M+="rotateY("+u+Mr),f!==yr&&(M+="rotateX("+f+Mr),(h!==yr||d!==yr)&&(M+="skew("+h+", "+d+Mr),(_!==1||g!==1)&&(M+="scale("+_+", "+g+Mr),v.style[Nt]=M||"translate(0, 0)"},zg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,y=parseFloat(a),M=parseFloat(o),w,E,b,R,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Is,c*=Is,w=Math.cos(l)*f,E=Math.sin(l)*f,b=Math.sin(l-c)*-h,R=Math.cos(l-c)*h,c&&(u*=Is,S=Math.tan(c-u),S=Math.sqrt(1+S*S),b*=S,R*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),w*=S,E*=S)),w=kt(w),E=kt(E),b=kt(b),R=kt(R)):(w=f,R=h,E=b=0),(y&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(y=dr(d,"x",a,"px"),M=dr(d,"y",o,"px")),(_||g||m||p)&&(y=kt(y+_-(_*w+g*b)+m),M=kt(M+g-(_*E+g*R)+p)),(i||s)&&(S=d.getBBox(),y=kt(y+i/100*S.width),M=kt(M+s/100*S.height)),S="matrix("+w+","+E+","+b+","+R+","+y+","+M+")",d.setAttribute("transform",S),v&&(d.style[Nt]=S)},Hg=function(e,t,n,i,s){var a=360,o=sn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Cr:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Od)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Od)%a-~~(c/a)*a)),e._pt=h=new Rn(e._pt,t,n,i,c,bg),h.e=u,h.u="deg",e._props.push(n),h},Vd=function(e,t){for(var n in t)e[n]=t[n];return e},Gg=function(e,t,n){var i=Vd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Nt]=t,o=Va(n,1),ur(n,Nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Nt],a[Nt]=t,o=Va(n,1),a[Nt]=c);for(l in Hi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=pn(c),_=pn(u),f=d!==_?dr(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Rn(e._pt,o,l,f,h-f,Gc),e._pt.u=_||0,e._props.push(l));Vd(o,i)};Cn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});cl[e>1?"border"+r:r]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(_){return Di(o,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,d,f)}});var mp={name:"css",register:Wc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,_,g,m,p,v,y,M,w,E,b,R,S;Zu||Wc(),this.styles=this.styles||lp(e),R=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(zn[g]&&Zf(g,t,n,i,e,s)))){if(d=typeof u,_=cl[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ba(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",sr.lastIndex=0,sr.test(c)||(m=pn(c),p=pn(u),p?m!==p&&(c=dr(e,g,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),R.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],sn(c)&&~c.indexOf("random(")&&(c=Ba(c)),pn(c+"")||c==="auto"||(c+=qn.units[g]||pn(Di(e,g))||""),(c+"").charAt(1)==="="&&(c=Di(e,g))):c=Di(e,g),h=parseFloat(c),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),g in yi&&(g==="autoAlpha"&&(h===1&&Di(e,"visibility")==="hidden"&&f&&(h=0),R.push("visibility",0,o.visibility),tr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=yi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Hi,y){if(this.styles.save(g),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Xn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=Xn(e,"perspective"),x?e.style.perspective=x:ur(e,"perspective")}f=parseFloat(u)}if(M||(w=e._gsap,w.renderTransform&&!t.parseTransform||Va(e,t.parseTransform),E=t.smoothOrigin!==!1&&w.smooth,M=this._pt=new Rn(this._pt,o,Nt,0,1,w.renderTransform,w,0,-1),M.dep=1),g==="scale")this._pt=new Rn(this._pt,w,"scaleY",w.scaleY,(v?Ls(w.scaleY,v+f):f)-w.scaleY||0,Gc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Pn,0,o[Pn]),u=Fg(u),w.svg?Xc(e,u,0,E,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&tr(this,w,"zOrigin",w.zOrigin,p),tr(this,o,g,ul(c),ul(u)));continue}else if(g==="svgOrigin"){Xc(e,u,1,E,0,this);continue}else if(g in hp){Hg(this,w,g,h,v?Ls(h,v+u):u);continue}else if(g==="smoothOrigin"){tr(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){Gg(this,u,e);continue}}else g in o||(g=Xs(g)||g);if(y||(f||f===0)&&(h||h===0)&&!Sg.test(u)&&g in o)m=(c+"").substr((h+"").length),f||(f=0),p=pn(u)||(g in qn.units?qn.units[g]:m),m!==p&&(h=dr(e,g,c,p)),this._pt=new Rn(this._pt,y?w:o,g,h,(v?Ls(h,v+f):f)-h,!y&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Tg:Gc),this._pt.u=p||0,y&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=wg):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Eg);else if(g in o)Og.call(this,e,g,c,v?v+u:u);else if(g in e)this.add(e,g,c||e[g],v?v+u:u,i,s);else if(g!=="parseTransform"){Hu(g,u);continue}y||(g in o?R.push(g,0,o[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,c||e[g])),a.push(g)}}b&&ip(this)},render:function(e,t){if(t.tween._time||!Ju())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Di,aliases:yi,getSetter:function(e,t,n){var i=yi[t];return i&&i.indexOf(",")<0&&(t=i),t in Hi&&t!==Pn&&(e._gsap.x||Di(e,"x"))?n&&Nd===n?t==="scale"?Pg:Rg:(Nd=n||{})&&(t==="scale"?Lg:Dg):e.style&&!ku(e.style[t])?Ag:~t.indexOf("-")?Cg:ju(e,t)},core:{_removeProperty:ur,_getMatrix:ed}};In.utils.checkPrefix=Xs;In.core.getStyleSaver=lp;(function(r,e,t,n){var i=Cn(r+","+e+","+t,function(s){Hi[s]=1});Cn(e,function(s){qn.units[s]="deg",hp[s]=1}),yi[i[13]]=r+","+e,Cn(n,function(s){var a=s.split(":");yi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){qn.units[r]="px"});In.registerPlugin(mp);var Ui=In.registerPlugin(mp)||In;Ui.core.Tween;function Vg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Wg(r,e,t){return e&&Vg(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var on,Xo,Vn,nr,ir,Us,gp,Rr,Ns,_p,Ni,ci,vp,xp=function(){return on||typeof window<"u"&&(on=window.gsap)&&on.registerPlugin&&on},yp=1,Rs=[],nt=[],Si=[],ba=Date.now,qc=function(e,t){return t},Xg=function(){var e=Ns.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,Si),nt=n,Si=i,qc=function(a,o){return t[a](o)}},ar=function(e,t){return~Si.indexOf(e)&&Si[Si.indexOf(e)+1][t]},Ea=function(e){return!!~_p.indexOf(e)},vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},_n=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},io="scrollLeft",ro="scrollTop",Yc=function(){return Ni&&Ni.isPressed||nt.cache++},dl=function(e,t){var n=function i(s){if(s||s===0){yp&&(Vn.history.scrollRestoration="manual");var a=Ni&&Ni.isPressed;s=i.v=Math.round(s)||(Ni&&Ni.iOS?1:0),e(s),i.cacheID=nt.cache,a&&qc("ss",s)}else(t||nt.cache!==i.cacheID||qc("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},En={s:io,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:dl(function(r){return arguments.length?Vn.scrollTo(r,Kt.sc()):Vn.pageXOffset||nr[io]||ir[io]||Us[io]||0})},Kt={s:ro,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:En,sc:dl(function(r){return arguments.length?Vn.scrollTo(En.sc(),r):Vn.pageYOffset||nr[ro]||ir[ro]||Us[ro]||0})},wn=function(e,t){return(t&&t._ctx&&t._ctx.selector||on.utils.toArray)(e)[0]||(typeof e=="string"&&on.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},qg=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},hr=function(e,t){var n=t.s,i=t.sc;Ea(e)&&(e=nr.scrollingElement||ir);var s=nt.indexOf(e),a=i===Kt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+a]||vn(e,"scroll",Yc);var o=nt[s+a],l=o||(nt[s+a]=dl(ar(e,n),!0)||(Ea(e)?i:dl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=on.getProperty(e,"scrollBehavior")==="smooth"),l},$c=function(e,t,n){var i=e,s=e,a=ba(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=ba();g||m-a>l?(s=i,i=_,o=a,a=m):n?i+=_:i=s+(_-s)/(m-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},h=function(_){var g=o,m=s,p=ba();return(_||_===0)&&_!==i&&u(_),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-g)*1e3};return{update:u,reset:f,getVelocity:h}},ia=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Wd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Mp=function(){Ns=on.core.globals().ScrollTrigger,Ns&&Ns.core&&Xg()},Sp=function(e){return on=e||xp(),!Xo&&on&&typeof document<"u"&&document.body&&(Vn=window,nr=document,ir=nr.documentElement,Us=nr.body,_p=[Vn,nr,ir,Us],on.utils.clamp,vp=on.core.context||function(){},Rr="onpointerenter"in Us?"pointer":"mouse",gp=zt.isTouch=Vn.matchMedia&&Vn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Vn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ci=zt.eventTypes=("ontouchstart"in ir?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ir?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return yp=0},500),Xo=1),Ns||Mp(),Xo};En.op=Kt;nt.cache=0;var zt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Xo||Sp(on)||console.warn("Please gsap.registerPlugin(Observer)"),Ns||Mp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,v=n.onDrag,y=n.onPress,M=n.onRelease,w=n.onRight,E=n.onLeft,b=n.onUp,R=n.onDown,S=n.onChangeX,x=n.onChangeY,C=n.onChange,P=n.onToggleX,U=n.onToggleY,O=n.onHover,N=n.onHoverEnd,k=n.onMove,X=n.ignoreCheck,V=n.isNormalizer,ae=n.onGestureStart,L=n.onGestureEnd,te=n.onWheel,ye=n.onEnable,Ce=n.onDisable,j=n.onClick,Q=n.scrollSpeed,Z=n.capture,ne=n.allowClicks,ce=n.lockAxis,he=n.onLockAxis;this.target=o=wn(o)||ir,this.vars=n,d&&(d=on.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,Q=Q||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Vn.getComputedStyle(Us).lineHeight)||22);var Le,We,I,Se,De,Fe,Me,$=this,Te=0,Ue=0,D=n.passive||!u&&n.passive!==!1,T=hr(o,En),B=hr(o,Kt),W=T(),q=B(),J=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ci[0]==="pointerdown",me=Ea(o),ee=o.ownerDocument||nr,de=[0,0,0],ke=[0,0,0],le=0,ve=function(){return le=ba()},Ne=function(Re,ot){return($.event=Re)&&d&&qg(Re.target,d)||ot&&J&&Re.pointerType!=="touch"||X&&X(Re,ot)},ze=function(){$._vx.reset(),$._vy.reset(),We.pause(),f&&f($)},pe=function(){var Re=$.deltaX=Wd(de),ot=$.deltaY=Wd(ke),fe=Math.abs(Re)>=i,Xe=Math.abs(ot)>=i;C&&(fe||Xe)&&C($,Re,ot,de,ke),fe&&(w&&$.deltaX>0&&w($),E&&$.deltaX<0&&E($),S&&S($),P&&$.deltaX<0!=Te<0&&P($),Te=$.deltaX,de[0]=de[1]=de[2]=0),Xe&&(R&&$.deltaY>0&&R($),b&&$.deltaY<0&&b($),x&&x($),U&&$.deltaY<0!=Ue<0&&U($),Ue=$.deltaY,ke[0]=ke[1]=ke[2]=0),(Se||I)&&(k&&k($),I&&(m&&I===1&&m($),v&&v($),I=0),Se=!1),Fe&&!(Fe=!1)&&he&&he($),De&&(te($),De=!1),Le=0},Ge=function(Re,ot,fe){de[fe]+=Re,ke[fe]+=ot,$._vx.update(Re),$._vy.update(ot),c?Le||(Le=requestAnimationFrame(pe)):pe()},Ye=function(Re,ot){ce&&!Me&&($.axis=Me=Math.abs(Re)>Math.abs(ot)?"x":"y",Fe=!0),Me!=="y"&&(de[2]+=Re,$._vx.update(Re,!0)),Me!=="x"&&(ke[2]+=ot,$._vy.update(ot,!0)),c?Le||(Le=requestAnimationFrame(pe)):pe()},ut=function(Re){if(!Ne(Re,1)){Re=ia(Re,u);var ot=Re.clientX,fe=Re.clientY,Xe=ot-$.x,Be=fe-$.y,qe=$.isDragging;$.x=ot,$.y=fe,(qe||(Xe||Be)&&(Math.abs($.startX-ot)>=s||Math.abs($.startY-fe)>=s))&&(I||(I=qe?2:1),qe||($.isDragging=!0),Ye(Xe,Be))}},z=$.onPress=function(He){Ne(He,1)||He&&He.button||($.axis=Me=null,We.pause(),$.isPressed=!0,He=ia(He),Te=Ue=0,$.startX=$.x=He.clientX,$.startY=$.y=He.clientY,$._vx.reset(),$._vy.reset(),vn(V?o:ee,ci[1],ut,D,!0),$.deltaX=$.deltaY=0,y&&y($))},ie=$.onRelease=function(He){if(!Ne(He,1)){_n(V?o:ee,ci[1],ut,!0);var Re=!isNaN($.y-$.startY),ot=$.isDragging,fe=ot&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),Xe=ia(He);!fe&&Re&&($._vx.reset(),$._vy.reset(),u&&ne&&on.delayedCall(.08,function(){if(ba()-le>300&&!He.defaultPrevented){if(He.target.click)He.target.click();else if(ee.createEvent){var Be=ee.createEvent("MouseEvents");Be.initMouseEvent("click",!0,!0,Vn,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),He.target.dispatchEvent(Be)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,f&&ot&&!V&&We.restart(!0),I&&pe(),p&&ot&&p($),M&&M($,fe)}},re=function(Re){return Re.touches&&Re.touches.length>1&&($.isGesturing=!0)&&ae(Re,$.isDragging)},se=function(){return($.isGesturing=!1)||L($)},ue=function(Re){if(!Ne(Re)){var ot=T(),fe=B();Ge((ot-W)*Q,(fe-q)*Q,1),W=ot,q=fe,f&&We.restart(!0)}},Ie=function(Re){if(!Ne(Re)){Re=ia(Re,u),te&&(De=!0);var ot=(Re.deltaMode===1?l:Re.deltaMode===2?Vn.innerHeight:1)*_;Ge(Re.deltaX*ot,Re.deltaY*ot,0),f&&!V&&We.restart(!0)}},Ke=function(Re){if(!Ne(Re)){var ot=Re.clientX,fe=Re.clientY,Xe=ot-$.x,Be=fe-$.y;$.x=ot,$.y=fe,Se=!0,f&&We.restart(!0),(Xe||Be)&&Ye(Xe,Be)}},xt=function(Re){$.event=Re,O($)},yt=function(Re){$.event=Re,N($)},rt=function(Re){return Ne(Re)||ia(Re,u)&&j($)};We=$._dc=on.delayedCall(h||.25,ze).pause(),$.deltaX=$.deltaY=0,$._vx=$c(0,50,!0),$._vy=$c(0,50,!0),$.scrollX=T,$.scrollY=B,$.isDragging=$.isGesturing=$.isPressed=!1,vp(this),$.enable=function(He){return $.isEnabled||(vn(me?ee:o,"scroll",Yc),a.indexOf("scroll")>=0&&vn(me?ee:o,"scroll",ue,D,Z),a.indexOf("wheel")>=0&&vn(o,"wheel",Ie,D,Z),(a.indexOf("touch")>=0&&gp||a.indexOf("pointer")>=0)&&(vn(o,ci[0],z,D,Z),vn(ee,ci[2],ie),vn(ee,ci[3],ie),ne&&vn(o,"click",ve,!0,!0),j&&vn(o,"click",rt),ae&&vn(ee,"gesturestart",re),L&&vn(ee,"gestureend",se),O&&vn(o,Rr+"enter",xt),N&&vn(o,Rr+"leave",yt),k&&vn(o,Rr+"move",Ke)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=Se=I=!1,$._vx.reset(),$._vy.reset(),W=T(),q=B(),He&&He.type&&z(He),ye&&ye($)),$},$.disable=function(){$.isEnabled&&(Rs.filter(function(He){return He!==$&&Ea(He.target)}).length||_n(me?ee:o,"scroll",Yc),$.isPressed&&($._vx.reset(),$._vy.reset(),_n(V?o:ee,ci[1],ut,!0)),_n(me?ee:o,"scroll",ue,Z),_n(o,"wheel",Ie,Z),_n(o,ci[0],z,Z),_n(ee,ci[2],ie),_n(ee,ci[3],ie),_n(o,"click",ve,!0),_n(o,"click",rt),_n(ee,"gesturestart",re),_n(ee,"gestureend",se),_n(o,Rr+"enter",xt),_n(o,Rr+"leave",yt),_n(o,Rr+"move",Ke),$.isEnabled=$.isPressed=$.isDragging=!1,Ce&&Ce($))},$.kill=$.revert=function(){$.disable();var He=Rs.indexOf($);He>=0&&Rs.splice(He,1),Ni===$&&(Ni=0)},Rs.push($),V&&Ea(o)&&(Ni=$),$.enable(g)},Wg(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();zt.version="3.15.0";zt.create=function(r){return new zt(r)};zt.register=Sp;zt.getAll=function(){return Rs.slice()};zt.getById=function(r){return Rs.filter(function(e){return e.vars.id===r})[0]};xp()&&on.registerPlugin(zt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var we,Es,tt,gt,Hn,ft,td,hl,Wa,wa,pa,so,dn,Al,jc,Sn,Xd,qd,ws,bp,Yl,Ep,Mn,Kc,wp,Tp,Zi,Zc,nd,Os,id,Ta,Jc,$l,ao=1,hn=Date.now,jl=hn(),ii=0,ma=0,Yd=function(e,t,n){var i=Bn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},$d=function(e,t){return t&&(!Bn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Yg=function r(){return ma&&requestAnimationFrame(r)},jd=function(){return Al=1},Kd=function(){return Al=0},gi=function(e){return e},ga=function(e){return Math.round(e*1e5)/1e5||0},Ap=function(){return typeof window<"u"},Cp=function(){return we||Ap()&&(we=window.gsap)&&we.registerPlugin&&we},Yr=function(e){return!!~td.indexOf(e)},Rp=function(e){return(e==="Height"?id:tt["inner"+e])||Hn["client"+e]||ft["client"+e]},Pp=function(e){return ar(e,"getBoundingClientRect")||(Yr(e)?function(){return Ko.width=tt.innerWidth,Ko.height=id,Ko}:function(){return Ii(e)})},$g=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=ar(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Rp(s):e["client"+s])||0}},jg=function(e,t){return!t||~Si.indexOf(e)?Pp(e):function(){return Ko}},Mi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=ar(e,n))?a()-Pp(e)()[s]:Yr(e)?(Hn[n]||ft[n])-Rp(i):e[n]-e["offset"+i])},oo=function(e,t){for(var n=0;n<ws.length;n+=3)(!t||~t.indexOf(ws[n+1]))&&e(ws[n],ws[n+1],ws[n+2])},Bn=function(e){return typeof e=="string"},mn=function(e){return typeof e=="function"},_a=function(e){return typeof e=="number"},Pr=function(e){return typeof e=="object"},ra=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},rs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},ss=Math.abs,Lp="left",Dp="top",rd="right",sd="bottom",Vr="width",Wr="height",Aa="Right",Ca="Left",Ra="Top",Pa="Bottom",Vt="padding",Jn="margin",qs="Width",ad="Height",jt="px",Qn=function(e){return tt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Kg=function(e){var t=Qn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Zd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ii=function(e,t){var n=t&&Qn(e)[jc]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},fl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ip=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Zg=function(e){return function(t){return we.utils.snap(Ip(e),t)}},od=function(e){var t=we.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},Jg=function(e){return function(t,n){return od(Ip(e))(t,n.direction)}},lo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},nn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},co=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Jd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},uo={toggleActions:"play",anticipatePin:0},pl={top:0,left:0,center:.5,bottom:1,right:1},qo=function(e,t){if(Bn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in pl?pl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ho=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=gt.createElement("div"),g=Yr(n)||ar(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?ft:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,y=v?c:u,M="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(M+=(i===Kt?rd:sd)+":"+(a+parseFloat(h))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=M,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Yo(_,0,i,v),_},Yo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+qs]=1,s["border"+o+qs]=0,s[n.p]=t+"px",we.set(e,s)},Qe=[],Qc={},Xa,Qd=function(){return hn()-ii>34&&(Xa||(Xa=requestAnimationFrame(Bi)))},as=function(){(!Mn||!Mn.isPressed||Mn.startX>ft.clientWidth)&&(nt.cache++,Mn?Xa||(Xa=requestAnimationFrame(Bi)):Bi(),ii||jr("scrollStart"),ii=hn())},Kl=function(){Tp=tt.innerWidth,wp=tt.innerHeight},va=function(e){nt.cache++,(e===!0||!dn&&!Ep&&!gt.fullscreenElement&&!gt.webkitFullscreenElement&&(!Kc||Tp!==tt.innerWidth||Math.abs(tt.innerHeight-wp)>tt.innerHeight*.25))&&hl.restart(!0)},$r={},Qg=[],Up=function r(){return tn(it,"scrollEnd",r)||Or(!0)},jr=function(e){return $r[e]&&$r[e].map(function(t){return t()})||Qg},kn=[],Np=function(e){for(var t=0;t<kn.length;t+=5)(!e||kn[t+4]&&kn[t+4].query===e)&&(kn[t].style.cssText=kn[t+1],kn[t].getBBox&&kn[t].setAttribute("transform",kn[t+2]||""),kn[t+3].uncache=1)},Op=function(){return nt.forEach(function(e){return mn(e)&&++e.cacheID&&(e.rec=e())})},ld=function(e,t){var n;for(Sn=0;Sn<Qe.length;Sn++)n=Qe[Sn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ta=!0,t&&Np(t),t||jr("revert")},Fp=function(e,t){nt.cache++,(t||!bn)&&nt.forEach(function(n){return mn(n)&&n.cacheID++&&(n.rec=0)}),Bn(e)&&(tt.history.scrollRestoration=nd=e)},bn,Xr=0,eh,e0=function(){if(eh!==Xr){var e=eh=Xr;requestAnimationFrame(function(){return e===Xr&&Or(!0)})}},kp=function(){ft.appendChild(Os),id=!Mn&&Os.offsetHeight||tt.innerHeight,ft.removeChild(Os)},th=function(e){return Wa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Or=function(e,t){if(Hn=gt.documentElement,ft=gt.body,td=[tt,gt,Hn,ft],ii&&!e&&!Ta){nn(it,"scrollEnd",Up);return}kp(),bn=it.isRefreshing=!0,Ta||Op();var n=jr("refreshInit");bp&&it.sort(),t||ld(),nt.forEach(function(i){mn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qe.slice(0).forEach(function(i){return i.refresh()}),Ta=!1,Qe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Jc=1,th(!0),Qe.forEach(function(i){var s=Mi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),th(!1),Jc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){mn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Fp(nd,1),hl.pause(),Xr++,bn=2,Bi(2),Qe.forEach(function(i){return mn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),bn=it.isRefreshing=!1,jr("refresh")},eu=0,$o=1,La,Bi=function(e){if(e===2||!bn&&!Ta){it.isUpdating=!0,La&&La.update(0);var t=Qe.length,n=hn(),i=n-jl>=50,s=t&&Qe[0].scroll();if($o=eu>s?-1:1,bn||(eu=s),i&&(ii&&!Al&&n-ii>200&&(ii=0,jr("scrollEnd")),pa=jl,jl=n),$o<0){for(Sn=t;Sn-- >0;)Qe[Sn]&&Qe[Sn].update(0,i);$o=1}else for(Sn=0;Sn<t;Sn++)Qe[Sn]&&Qe[Sn].update(0,i);it.isUpdating=!1}Xa=0},tu=[Lp,Dp,sd,rd,Jn+Pa,Jn+Aa,Jn+Ra,Jn+Ca,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],jo=tu.concat([Vr,Wr,"boxSizing","max"+qs,"max"+ad,"position",Jn,Vt,Vt+Ra,Vt+Aa,Vt+Pa,Vt+Ca]),t0=function(e,t,n){Fs(n);var i=e._gsap;if(i.spacerIsNative)Fs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Zl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=tu.length,a=t.style,o=e.style,l;s--;)l=tu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[sd]=o[rd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Vr]=fl(e,En)+jt,a[Wr]=fl(e,Kt)+jt,a[Vt]=o[Jn]=o[Dp]=o[Lp]="0",Fs(i),o[Vr]=o["max"+qs]=n[Vr],o[Wr]=o["max"+ad]=n[Wr],o[Vt]=n[Vt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},n0=/([A-Z])/g,Fs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(n0,"-$1").toLowerCase())}},fo=function(e){for(var t=jo.length,n=e.style,i=[],s=0;s<t;s++)i.push(jo[s],n[jo[s]]);return i.t=e,i},i0=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Ko={left:0,top:0},nh=function(e,t,n,i,s,a,o,l,c,u,f,h,d,_){mn(e)&&(e=e(l)),Bn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?qo("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,v;if(d&&d.seek(0),isNaN(e)||(e=+e),_a(e))d&&(e=we.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&Yo(o,n,i,!0);else{mn(t)&&(t=t(l));var y=(e||"0").split(" "),M,w,E,b;v=wn(t,l)||ft,M=Ii(v)||{},(!M||!M.left&&!M.top)&&Qn(v).display==="none"&&(b=v.style.display,v.style.display="block",M=Ii(v),b?v.style.display=b:v.style.removeProperty("display")),w=qo(y[0],M[i.d]),E=qo(y[1]||"0",n),e=M[i.p]-c[i.p]-u+w+s-E,o&&Yo(o,E,i,n-E<20||o._isStart&&E>20),n-=n-E}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var R=e+n,S=a._isStart;m="scroll"+i.d2,Yo(a,R,i,S&&R>20||!S&&(f?Math.max(ft[m],Hn[m]):a.parentNode[m])<=R+1),f&&(c=Ii(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+jt))}return d&&v&&(m=Ii(v),d.seek(h),p=Ii(v),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*h),d&&d.seek(g),d?e:Math.round(e)},r0=/(webkit|moz|length|cssText|inset)/i,ih=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===ft){e._stOrig=s.cssText,o=Qn(e);for(a in o)!+a&&!r0.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},Bp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},po=function(e,t,n){var i={};i[t.p]="+="+n,we.set(e,i)},rh=function(e,t){var n=hr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,_={};c=c||n();var g=Bp(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){nt.cache++,a.tween&&Bi()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=we.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},nn(e,"wheel",n.wheelHandler),it.isTouch&&nn(e,"touchmove",n.wheelHandler),s},it=function(){function r(t,n){Es||r.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Zc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ma){this.update=this.refresh=this.kill=gi;return}n=Zd(Bn(n)||_a(n)||n.nodeType?{trigger:n}:n,uo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,y=s.once,M=s.snap,w=s.pinReparent,E=s.pinSpacer,b=s.containerAnimation,R=s.fastScrollEnd,S=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?En:Kt,C=!f&&f!==0,P=wn(n.scroller||tt),U=we.core.getCache(P),O=Yr(P),N=("pinType"in n?n.pinType:ar(P,"pinType")||O&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=C&&n.toggleActions.split(" "),V="markers"in n?n.markers:uo.markers,ae=O?0:parseFloat(Qn(P)["border"+x.p2+qs])||0,L=this,te=n.onRefreshInit&&function(){return n.onRefreshInit(L)},ye=$g(P,O,x),Ce=jg(P,O),j=0,Q=0,Z=0,ne=hr(P,x),ce,he,Le,We,I,Se,De,Fe,Me,$,Te,Ue,D,T,B,W,q,J,me,ee,de,ke,le,ve,Ne,ze,pe,Ge,Ye,ut,z,ie,re,se,ue,Ie,Ke,xt,yt;if(L._startClamp=L._endClamp=!1,L._dir=x,m*=45,L.scroller=P,L.scroll=b?b.time.bind(b):ne,We=ne(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(bp=1,n.refreshPriority===-9999&&(La=L)),U.tweenScroll=U.tweenScroll||{top:rh(P,Kt),left:rh(P,En)},L.tweenTo=ce=U.tweenScroll[x.p],L.scrubDuration=function(fe){re=_a(fe)&&fe,re?ie?ie.duration(fe):ie=we.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:re,paused:!0,onComplete:function(){return p&&p(L)}}):(ie&&ie.progress(1).kill(),ie=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(f),ut=0,l||(l=i.vars.id)),M&&((!Pr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in ft.style&&we.set(O?[ft,Hn]:P,{scrollBehavior:"auto"}),nt.forEach(function(fe){return mn(fe)&&fe.target===(O?gt.scrollingElement||Hn:P)&&(fe.smooth=!1)}),Le=mn(M.snapTo)?M.snapTo:M.snapTo==="labels"?Zg(i):M.snapTo==="labelsDirectional"?Jg(i):M.directional!==!1?function(fe,Xe){return od(M.snapTo)(fe,hn()-Q<500?0:Xe.direction)}:we.utils.snap(M.snapTo),se=M.duration||{min:.1,max:2},se=Pr(se)?wa(se.min,se.max):wa(se,se),ue=we.delayedCall(M.delay||re/2||.1,function(){var fe=ne(),Xe=hn()-Q<500,Be=ce.tween;if((Xe||Math.abs(L.getVelocity())<10)&&!Be&&!Al&&j!==fe){var qe=(fe-Se)/T,Lt=i&&!C?i.totalProgress():qe,et=Xe?0:(Lt-z)/(hn()-pa)*1e3||0,bt=we.utils.clamp(-qe,1-qe,ss(et/2)*et/.185),Yt=qe+(M.inertia===!1?0:bt),Tt,Et,mt=M,Un=mt.onStart,A=mt.onInterrupt,F=mt.onComplete;if(Tt=Le(Yt,L),_a(Tt)||(Tt=Yt),Et=Math.max(0,Math.round(Se+Tt*T)),fe<=De&&fe>=Se&&Et!==fe){if(Be&&!Be._initted&&Be.data<=ss(Et-fe))return;M.inertia===!1&&(bt=Tt-qe),ce(Et,{duration:se(ss(Math.max(ss(Yt-Lt),ss(Tt-Lt))*.185/et/.05||0)),ease:M.ease||"power3",data:ss(Et-fe),onInterrupt:function(){return ue.restart(!0)&&A&&rs(L,A)},onComplete:function(){L.update(),j=ne(),i&&!C&&(ie?ie.resetTo("totalProgress",Tt,i._tTime/i._tDur):i.progress(Tt)),ut=z=i&&!C?i.totalProgress():L.progress,v&&v(L),F&&rs(L,F)}},fe,bt*T,Et-fe-bt*T),Un&&rs(L,Un,ce.tween)}}else L.isActive&&j!==fe&&ue.restart(!0)}).pause()),l&&(Qc[l]=L),h=L.trigger=wn(h||d!==!0&&d),yt=h&&h._gsap&&h._gsap.stRevert,yt&&(yt=yt(L)),d=d===!0?h:wn(d),Bn(o)&&(o={targets:h,className:o}),d&&(_===!1||_===Jn||(_=!_&&d.parentNode&&d.parentNode.style&&Qn(d.parentNode).display==="flex"?!1:Vt),L.pin=d,he=we.core.getCache(d),he.spacer?B=he.pinState:(E&&(E=wn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),he.spacerIsNative=!!E,E&&(he.spacerState=fo(E))),he.spacer=J=E||gt.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),he.pinState=B=fo(d)),n.force3D!==!1&&we.set(d,{force3D:!0}),L.spacer=J=he.spacer,Ye=Qn(d),ve=Ye[_+x.os2],ee=we.getProperty(d),de=we.quickSetter(d,x.a,jt),Zl(d,J,Ye),q=fo(d)),V){Ue=Pr(V)?Zd(V,Jd):Jd,$=ho("scroller-start",l,P,x,Ue,0),Te=ho("scroller-end",l,P,x,Ue,0,$),me=$["offset"+x.op.d2];var rt=wn(ar(P,"content")||P);Fe=this.markerStart=ho("start",l,rt,x,Ue,me,0,b),Me=this.markerEnd=ho("end",l,rt,x,Ue,me,0,b),b&&(xt=we.quickSetter([Fe,Me],x.a,jt)),!N&&!(Si.length&&ar(P,"fixedMarkers")===!0)&&(Kg(O?ft:P),we.set([$,Te],{force3D:!0}),ze=we.quickSetter($,x.a,jt),Ge=we.quickSetter(Te,x.a,jt))}if(b){var He=b.vars.onUpdate,Re=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){L.update(0,0,1),He&&He.apply(b,Re||[])})}if(L.previous=function(){return Qe[Qe.indexOf(L)-1]},L.next=function(){return Qe[Qe.indexOf(L)+1]},L.revert=function(fe,Xe){if(!Xe)return L.kill(!0);var Be=fe!==!1||!L.enabled,qe=dn;Be!==L.isReverted&&(Be&&(Ie=Math.max(ne(),L.scroll.rec||0),Z=L.progress,Ke=i&&i.progress()),Fe&&[Fe,Me,$,Te].forEach(function(Lt){return Lt.style.display=Be?"none":"block"}),Be&&(dn=L,L.update(Be)),d&&(!w||!L.isActive)&&(Be?t0(d,J,B):Zl(d,J,Qn(d),Ne)),Be||L.update(Be),dn=qe,L.isReverted=Be)},L.refresh=function(fe,Xe,Be,qe){if(!((dn||!L.enabled)&&!Xe)){if(d&&fe&&ii){nn(r,"scrollEnd",Up);return}!bn&&te&&te(L),dn=L,ce.tween&&!Be&&(ce.tween.kill(),ce.tween=0),ie&&ie.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ae){return Ae.vars.immediateRender&&Ae.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Lt=ye(),et=Ce(),bt=b?b.duration():Mi(P,x),Yt=T<=.01||!T,Tt=0,Et=qe||0,mt=Pr(Be)?Be.end:n.end,Un=n.endTrigger||h,A=Pr(Be)?Be.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),F=L.pinnedContainer=n.pinnedContainer&&wn(n.pinnedContainer,L),K=h&&Math.max(0,Qe.indexOf(L))||0,Y=K,G,oe,_e,Ee,ge,be,Oe,Pe,lt,vt,ct,$t,st;for(V&&Pr(Be)&&($t=we.getProperty($,x.p),st=we.getProperty(Te,x.p));Y-- >0;)be=Qe[Y],be.end||be.refresh(0,1)||(dn=L),Oe=be.pin,Oe&&(Oe===h||Oe===d||Oe===F)&&!be.isReverted&&(vt||(vt=[]),vt.unshift(be),be.revert(!0,!0)),be!==Qe[Y]&&(K--,Y--);for(mn(A)&&(A=A(L)),A=Yd(A,"start",L),Se=nh(A,h,Lt,x,ne(),Fe,$,L,et,ae,N,bt,b,L._startClamp&&"_startClamp")||(d?-.001:0),mn(mt)&&(mt=mt(L)),Bn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Bn(A)?A.split(" ")[0]:"")+mt:(Tt=qo(mt.substr(2),Lt),mt=Bn(A)?A:(b?we.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Se):Se)+Tt,Un=h)),mt=Yd(mt,"end",L),De=Math.max(Se,nh(mt||(Un?"100% 0":bt),Un,Lt,x,ne()+Tt,Me,Te,L,et,ae,N,bt,b,L._endClamp&&"_endClamp"))||-.001,Tt=0,Y=K;Y--;)be=Qe[Y]||{},Oe=be.pin,Oe&&be.start-be._pinPush<=Se&&!b&&be.end>0&&(G=be.end-(L._startClamp?Math.max(0,be.start):be.start),(Oe===h&&be.start-be._pinPush<Se||Oe===F)&&isNaN(A)&&(Tt+=G*(1-be.progress)),Oe===d&&(Et+=G));if(Se+=Tt,De+=Tt,L._startClamp&&(L._startClamp+=Tt),L._endClamp&&!bn&&(L._endClamp=De||-.001,De=Math.min(De,Mi(P,x))),T=De-Se||(Se-=.01)&&.001,Yt&&(Z=we.utils.clamp(0,1,we.utils.normalize(Se,De,Ie))),L._pinPush=Et,Fe&&Tt&&(G={},G[x.a]="+="+Tt,F&&(G[x.p]="-="+ne()),we.set([Fe,Me],G)),d&&!(Jc&&L.end>=Mi(P,x)))G=Qn(d),Ee=x===Kt,_e=ne(),ke=parseFloat(ee(x.a))+Et,!bt&&De>1&&(ct=(O?gt.scrollingElement||Hn:P).style,ct={style:ct,value:ct["overflow"+x.a.toUpperCase()]},O&&Qn(ft)["overflow"+x.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+x.a.toUpperCase()]="scroll")),Zl(d,J,G),q=fo(d),oe=Ii(d,!0),Pe=N&&hr(P,Ee?En:Kt)(),_?(Ne=[_+x.os2,T+Et+jt],Ne.t=J,Y=_===Vt?fl(d,x)+T+Et:0,Y&&(Ne.push(x.d,Y+jt),J.style.flexBasis!=="auto"&&(J.style.flexBasis=Y+jt)),Fs(Ne),F&&Qe.forEach(function(Ae){Ae.pin===F&&Ae.vars.pinSpacing!==!1&&(Ae._subPinOffset=!0)}),N&&ne(Ie)):(Y=fl(d,x),Y&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=Y+jt)),N&&(ge={top:oe.top+(Ee?_e-Se:Pe)+jt,left:oe.left+(Ee?Pe:_e-Se)+jt,boxSizing:"border-box",position:"fixed"},ge[Vr]=ge["max"+qs]=Math.ceil(oe.width)+jt,ge[Wr]=ge["max"+ad]=Math.ceil(oe.height)+jt,ge[Jn]=ge[Jn+Ra]=ge[Jn+Aa]=ge[Jn+Pa]=ge[Jn+Ca]="0",ge[Vt]=G[Vt],ge[Vt+Ra]=G[Vt+Ra],ge[Vt+Aa]=G[Vt+Aa],ge[Vt+Pa]=G[Vt+Pa],ge[Vt+Ca]=G[Vt+Ca],W=i0(B,ge,w),bn&&ne(0)),i?(lt=i._initted,Yl(1),i.render(i.duration(),!0,!0),le=ee(x.a)-ke+T+Et,pe=Math.abs(T-le)>1,N&&pe&&W.splice(W.length-2,2),i.render(0,!0,!0),lt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Yl(0)):le=T,ct&&(ct.value?ct.style["overflow"+x.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+x.a));else if(h&&ne()&&!b)for(oe=h.parentNode;oe&&oe!==ft;)oe._pinOffset&&(Se-=oe._pinOffset,De-=oe._pinOffset),oe=oe.parentNode;vt&&vt.forEach(function(Ae){return Ae.revert(!1,!0)}),L.start=Se,L.end=De,We=I=bn?Ie:ne(),!b&&!bn&&(We<Ie&&ne(Ie),L.scroll.rec=0),L.revert(!1,!0),Q=hn(),ue&&(j=-1,ue.restart(!0)),dn=0,i&&C&&(i._initted||Ke)&&i.progress()!==Ke&&i.progress(Ke||0,!0).render(i.time(),!0,!0),(Yt||Z!==L.progress||b||g||i&&!i._initted)&&(i&&!C&&(i._initted||Z||i.vars.immediateRender!==!1)&&i.totalProgress(b&&Se<-.001&&!Z?we.utils.normalize(Se,De,0):Z,!0),L.progress=Yt||(We-Se)/T===Z?0:Z),d&&_&&(J._pinOffset=Math.round(L.progress*le)),ie&&ie.invalidate(),isNaN($t)||($t-=we.getProperty($,x.p),st-=we.getProperty(Te,x.p),po($,x,$t),po(Fe,x,$t-(qe||0)),po(Te,x,st),po(Me,x,st-(qe||0))),Yt&&!bn&&L.update(),u&&!bn&&!D&&(D=!0,u(L),D=!1)}},L.getVelocity=function(){return(ne()-I)/(hn()-pa)*1e3||0},L.endAnimation=function(){ra(L.callbackAnimation),i&&(ie?ie.progress(1):i.paused()?C||ra(i,L.direction<0,1):ra(i,i.reversed()))},L.labelToScroll=function(fe){return i&&i.labels&&(Se||L.refresh()||Se)+i.labels[fe]/i.duration()*T||0},L.getTrailing=function(fe){var Xe=Qe.indexOf(L),Be=L.direction>0?Qe.slice(0,Xe).reverse():Qe.slice(Xe+1);return(Bn(fe)?Be.filter(function(qe){return qe.vars.preventOverlaps===fe}):Be).filter(function(qe){return L.direction>0?qe.end<=Se:qe.start>=De})},L.update=function(fe,Xe,Be){if(!(b&&!Be&&!fe)){var qe=bn===!0?Ie:L.scroll(),Lt=fe?0:(qe-Se)/T,et=Lt<0?0:Lt>1?1:Lt||0,bt=L.progress,Yt,Tt,Et,mt,Un,A,F,K;if(Xe&&(I=We,We=b?ne():qe,M&&(z=ut,ut=i&&!C?i.totalProgress():et)),m&&d&&!dn&&!ao&&ii&&(!et&&Se<qe+(qe-I)/(hn()-pa)*m?et=1e-4:et===1&&De>qe+(qe-I)/(hn()-pa)*m&&(et=.9999)),et!==bt&&L.enabled){if(Yt=L.isActive=!!et&&et<1,Tt=!!bt&&bt<1,A=Yt!==Tt,Un=A||!!et!=!!bt,L.direction=et>bt?1:-1,L.progress=et,Un&&!dn&&(Et=et&&!bt?0:et===1?1:bt===1?2:3,C&&(mt=!A&&X[Et+1]!=="none"&&X[Et+1]||X[Et],K=i&&(mt==="complete"||mt==="reset"||mt in i))),S&&(A||K)&&(K||f||!i)&&(mn(S)?S(L):L.getTrailing(S).forEach(function(_e){return _e.endAnimation()})),C||(ie&&!dn&&!ao?(ie._dp._time-ie._start!==ie._time&&ie.render(ie._dp._time-ie._start),ie.resetTo?ie.resetTo("totalProgress",et,i._tTime/i._tDur):(ie.vars.totalProgress=et,ie.invalidate().restart())):i&&i.totalProgress(et,!!(dn&&(Q||fe)))),d){if(fe&&_&&(J.style[_+x.os2]=ve),!N)de(ga(ke+le*et));else if(Un){if(F=!fe&&et>bt&&De+1>qe&&qe+1>=Mi(P,x),w)if(!fe&&(Yt||F)){var Y=Ii(d,!0),G=qe-Se;ih(d,ft,Y.top+(x===Kt?G:0)+jt,Y.left+(x===Kt?0:G)+jt)}else ih(d,J);Fs(Yt||F?W:q),pe&&et<1&&Yt||de(ke+(et===1&&!F?le:0))}}M&&!ce.tween&&!dn&&!ao&&ue.restart(!0),o&&(A||y&&et&&(et<1||!$l))&&Wa(o.targets).forEach(function(_e){return _e.classList[Yt||y?"add":"remove"](o.className)}),a&&!C&&!fe&&a(L),Un&&!dn?(C&&(K&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),a&&a(L)),(A||!$l)&&(c&&A&&rs(L,c),k[Et]&&rs(L,k[Et]),y&&(et===1?L.kill(!1,1):k[Et]=0),A||(Et=et===1?1:3,k[Et]&&rs(L,k[Et]))),R&&!Yt&&Math.abs(L.getVelocity())>(_a(R)?R:2500)&&(ra(L.callbackAnimation),ie?ie.progress(1):ra(i,mt==="reverse"?1:!et,1))):C&&a&&!dn&&a(L)}if(Ge){var oe=b?qe/b.duration()*(b._caScrollDist||0):qe;ze(oe+($._isFlipped?1:0)),Ge(oe)}xt&&xt(-qe/b.duration()*(b._caScrollDist||0))}},L.enable=function(fe,Xe){L.enabled||(L.enabled=!0,nn(P,"resize",va),O||nn(P,"scroll",as),te&&nn(r,"refreshInit",te),fe!==!1&&(L.progress=Z=0,We=I=j=ne()),Xe!==!1&&L.refresh())},L.getTween=function(fe){return fe&&ce?ce.tween:ie},L.setPositions=function(fe,Xe,Be,qe){if(b){var Lt=b.scrollTrigger,et=b.duration(),bt=Lt.end-Lt.start;fe=Lt.start+bt*fe/et,Xe=Lt.start+bt*Xe/et}L.refresh(!1,!1,{start:$d(fe,Be&&!!L._startClamp),end:$d(Xe,Be&&!!L._endClamp)},qe),L.update()},L.adjustPinSpacing=function(fe){if(Ne&&fe){var Xe=Ne.indexOf(x.d)+1;Ne[Xe]=parseFloat(Ne[Xe])+fe+jt,Ne[1]=parseFloat(Ne[1])+fe+jt,Fs(Ne)}},L.disable=function(fe,Xe){if(fe!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Xe||ie&&ie.pause(),Ie=0,he&&(he.uncache=1),te&&tn(r,"refreshInit",te),ue&&(ue.pause(),ce.tween&&ce.tween.kill()&&(ce.tween=0)),!O)){for(var Be=Qe.length;Be--;)if(Qe[Be].scroller===P&&Qe[Be]!==L)return;tn(P,"resize",va),O||tn(P,"scroll",as)}},L.kill=function(fe,Xe){L.disable(fe,Xe),ie&&!Xe&&ie.kill(),l&&delete Qc[l];var Be=Qe.indexOf(L);Be>=0&&Qe.splice(Be,1),Be===Sn&&$o>0&&Sn--,Be=0,Qe.forEach(function(qe){return qe.scroller===L.scroller&&(Be=1)}),Be||bn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,fe&&i.revert({kill:!1}),Xe||i.kill()),Fe&&[Fe,Me,$,Te].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),La===L&&(La=0),d&&(he&&(he.uncache=1),Be=0,Qe.forEach(function(qe){return qe.pin===d&&Be++}),Be||(he.spacer=0)),n.onKill&&n.onKill(L)},Qe.push(L),L.enable(!1,!1),yt&&yt(L),i&&i.add&&!T){var ot=L.update;L.update=function(){L.update=ot,nt.cache++,Se||De||L.refresh()},we.delayedCall(.01,L.update),T=.01,Se=De=0}else L.refresh();d&&e0()},r.register=function(n){return Es||(we=n||Cp(),Ap()&&window.document&&r.enable(),Es=ma),Es},r.defaults=function(n){if(n)for(var i in n)uo[i]=n[i];return uo},r.disable=function(n,i){ma=0,Qe.forEach(function(a){return a[i?"kill":"disable"](n)}),tn(tt,"wheel",as),tn(gt,"scroll",as),clearInterval(so),tn(gt,"touchcancel",gi),tn(ft,"touchstart",gi),lo(tn,gt,"pointerdown,touchstart,mousedown",jd),lo(tn,gt,"pointerup,touchend,mouseup",Kd),hl.kill(),oo(tn);for(var s=0;s<nt.length;s+=3)co(tn,nt[s],nt[s+1]),co(tn,nt[s],nt[s+2])},r.enable=function(){if(tt=window,gt=document,Hn=gt.documentElement,ft=gt.body,we){if(Wa=we.utils.toArray,wa=we.utils.clamp,Zc=we.core.context||gi,Yl=we.core.suppressOverwrites||gi,nd=tt.history.scrollRestoration||"auto",eu=tt.pageYOffset||0,we.core.globals("ScrollTrigger",r),ft){ma=1,Os=document.createElement("div"),Os.style.height="100vh",Os.style.position="absolute",kp(),Yg(),zt.register(we),r.isTouch=zt.isTouch,Zi=zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Kc=zt.isTouch===1,nn(tt,"wheel",as),td=[tt,gt,Hn,ft],we.matchMedia?(r.matchMedia=function(u){var f=we.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},we.addEventListener("matchMediaInit",function(){Op(),ld()}),we.addEventListener("matchMediaRevert",function(){return Np()}),we.addEventListener("matchMedia",function(){Or(0,1),jr("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return Kl(),Kl})):console.warn("Requires GSAP 3.11.0 or later"),Kl(),nn(gt,"scroll",as);var n=ft.hasAttribute("style"),i=ft.style,s=i.borderTopStyle,a=we.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ii(ft),Kt.m=Math.round(o.top+Kt.sc())||0,En.m=Math.round(o.left+En.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ft.setAttribute("style",""),ft.removeAttribute("style")),so=setInterval(Qd,250),we.delayedCall(.5,function(){return ao=0}),nn(gt,"touchcancel",gi),nn(ft,"touchstart",gi),lo(nn,gt,"pointerdown,touchstart,mousedown",jd),lo(nn,gt,"pointerup,touchend,mouseup",Kd),jc=we.utils.checkPrefix("transform"),jo.push(jc),Es=hn(),hl=we.delayedCall(.2,Or).pause(),ws=[gt,"visibilitychange",function(){var u=tt.innerWidth,f=tt.innerHeight;gt.hidden?(Xd=u,qd=f):(Xd!==u||qd!==f)&&va()},gt,"DOMContentLoaded",Or,tt,"load",Or,tt,"resize",va],oo(nn),Qe.forEach(function(u){return u.enable(0,1)}),l=0;l<nt.length;l+=3)co(tn,nt[l],nt[l+1]),co(tn,nt[l],nt[l+2])}else if(gt){var c=function u(){r.enable(),gt.removeEventListener("DOMContentLoaded",u)};gt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&($l=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(so)||(so=i)&&setInterval(Qd,i),"ignoreMobileResize"in n&&(Kc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(oo(tn)||oo(nn,n.autoRefreshEvents||"none"),Ep=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=wn(n),a=nt.indexOf(s),o=Yr(s);~a&&nt.splice(a,o?6:2),i&&(o?Si.unshift(tt,i,ft,i,Hn,i):Si.unshift(s,i))},r.clearMatchMedia=function(n){Qe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Bn(n)?wn(n):n).getBoundingClientRect(),o=a[s?Vr:Wr]*i||0;return s?a.right-o>0&&a.left+o<tt.innerWidth:a.bottom-o>0&&a.top+o<tt.innerHeight},r.positionInViewport=function(n,i,s){Bn(n)&&(n=wn(n));var a=n.getBoundingClientRect(),o=a[s?Vr:Wr],l=i==null?o/2:i in pl?pl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/tt.innerWidth:(a.top+l)/tt.innerHeight},r.killAll=function(n){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=$r.killAll||[];$r={},i.forEach(function(s){return s()})}},r}();it.version="3.15.0";it.saveStyles=function(r){return r?Wa(r).forEach(function(e){if(e&&e.style){var t=kn.indexOf(e);t>=0&&kn.splice(t,5),kn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),Zc())}}):kn};it.revert=function(r,e){return ld(!r,e)};it.create=function(r,e){return new it(r,e)};it.refresh=function(r){return r?va(!0):(Es||it.register())&&Or(!0)};it.update=function(r){return++nt.cache&&Bi(r===!0?2:0)};it.clearScrollMemory=Fp;it.maxScroll=function(r,e){return Mi(r,e?En:Kt)};it.getScrollFunc=function(r,e){return hr(wn(r),e?En:Kt)};it.getById=function(r){return Qc[r]};it.getAll=function(){return Qe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!ii};it.snapDirectional=od;it.addEventListener=function(r,e){var t=$r[r]||($r[r]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(r,e){var t=$r[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};it.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=we.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&mn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return mn(s)&&(s=s(),nn(it,"refresh",function(){return s=e.batchMax()})),Wa(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(it.create(c))}),t};var sh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Jl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(zt.isTouch?" pinch-zoom":""):"none",e===Hn&&r(ft,t)},mo={auto:1,scroll:1},s0=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||we.core.getCache(s),o=hn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==ft&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(mo[(l=Qn(s)).overflowY]||mo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Yr(s)&&(mo[(l=Qn(s)).overflowY]||mo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},zp=function(e,t,n,i){return zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&s0,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&nn(gt,zt.eventTypes[0],oh,!1,!0)},onDisable:function(){return tn(gt,zt.eventTypes[0],oh,!0)}})},a0=/(input|label|select|textarea)/i,ah,oh=function(e){var t=a0.test(e.target.tagName);(t||ah)&&(e._gsapAllow=!0,ah=t)},o0=function(e){Pr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=wn(e.target)||Hn,u=we.core.globals().ScrollSmoother,f=u&&u.get(),h=Zi&&(e.content&&wn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=hr(c,Kt),_=hr(c,En),g=1,m=(zt.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,p=0,v=mn(i)?function(){return i(o)}:function(){return i||2.8},y,M,w=zp(c,e.type,!0,s),E=function(){return M=!1},b=gi,R=gi,S=function(){l=Mi(c,Kt),R=wa(Zi?1:0,l),n&&(b=wa(0,Mi(c,En))),y=Xr},x=function(){h._gsap.y=ga(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(M){requestAnimationFrame(E);var V=ga(o.deltaY/2),ae=R(d.v-V);if(h&&ae!==d.v+d.offset){d.offset=ae-d.v;var L=ga((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",h._gsap.y=L+"px",d.cacheID=nt.cache,Bi()}return!0}d.offset&&x(),M=!0},P,U,O,N,k=function(){S(),P.isActive()&&P.vars.scrollY>l&&(d()>l?P.progress(1)&&d(l):P.resetTo("scrollY",l))};return h&&we.set(h,{y:"+=0"}),e.ignoreCheck=function(X){return Zi&&X.type==="touchmove"&&C()||g>1.05&&X.type!=="touchstart"||o.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){M=!1;var X=g;g=ga((tt.visualViewport&&tt.visualViewport.scale||1)/m),P.pause(),X!==g&&Jl(c,g>1.01?!0:n?!1:"x"),U=_(),O=d(),S(),y=Xr},e.onRelease=e.onGestureStart=function(X,V){if(d.offset&&x(),!V)N.restart(!0);else{nt.cache++;var ae=v(),L,te;n&&(L=_(),te=L+ae*.05*-X.velocityX/.227,ae*=sh(_,L,te,Mi(c,En)),P.vars.scrollX=b(te)),L=d(),te=L+ae*.05*-X.velocityY/.227,ae*=sh(d,L,te,Mi(c,Kt)),P.vars.scrollY=R(te),P.invalidate().duration(ae).play(.01),(Zi&&P.vars.scrollY>=l||L>=l-1)&&we.to({},{onUpdate:k,duration:ae})}a&&a(X)},e.onWheel=function(){P._ts&&P.pause(),hn()-p>1e3&&(y=0,p=hn())},e.onChange=function(X,V,ae,L,te){if(Xr!==y&&S(),V&&n&&_(b(L[2]===V?U+(X.startX-X.x):_()+V-L[1])),ae){d.offset&&x();var ye=te[2]===ae,Ce=ye?O+X.startY-X.y:d()+ae-te[1],j=R(Ce);ye&&Ce!==j&&(O+=j-Ce),d(j)}(ae||V)&&Bi()},e.onEnable=function(){Jl(c,n?!1:"x"),it.addEventListener("refresh",k),nn(tt,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),w.enable()},e.onDisable=function(){Jl(c,!0),tn(tt,"resize",k),it.removeEventListener("refresh",k),w.kill()},e.lockAxis=e.lockAxis!==!1,o=new zt(e),o.iOS=Zi,Zi&&!d()&&d(1),Zi&&we.ticker.add(gi),N=o._dc,P=we.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Bp(d,d(),function(){return P.pause()})},onUpdate:Bi,onComplete:N.vars.onComplete}),o};it.sort=function(r){if(mn(r))return Qe.sort(r);var e=tt.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),Qe.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};it.observe=function(r){return new zt(r)};it.normalizeScroll=function(r){if(typeof r>"u")return Mn;if(r===!0&&Mn)return Mn.enable();if(r===!1){Mn&&Mn.kill(),Mn=r;return}var e=r instanceof zt?r:o0(r);return Mn&&Mn.target===e.target&&Mn.kill(),Yr(e.target)&&(Mn=e),e};it.core={_getVelocityProp:$c,_inputObserver:zp,_scrollers:nt,_proxies:Si,bridge:{ss:function(){ii||jr("scrollStart"),ii=hn()},ref:function(){return dn}}};Cp()&&we.registerPlugin(it);const lh=[{id:"radar-system",number:"01",title:"Smart Radar System",type:"Robotics / Detection",shortDesc:"Ultrasonic distance scanning prototype with 180° servo sweep, target coordinate plotting, and dark-green radar HUD.",tags:["Arduino / ESP8266","HC-SR04 Ultrasonic","SG90 Servo","Processing IDE","C++"],status:"Working Prototype",symbol:"◉",accentColor:"#10b981",overview:"An interactive scanning sonar/radar system built by mounting an HC-SR04 ultrasonic sensor onto a micro servo motor that sweeps continuously across a 180-degree field of view. The system emits high-frequency sound pulses (40 kHz) and measures the round-trip travel time to calculate object distance with millimeter accuracy.",workingPrinciple:"The Arduino triggers a 10µs pulse to the sensor Trigger pin. The sensor transmits eight 40kHz ultrasound bursts. When sound bounces back, the Echo pin outputs a high signal proportional to elapsed time. Distance = (Echo Time in µs × 0.0343 cm/µs) / 2. Every angular step (1° resolution) transmits polar coordinates (angle, distance) via Serial to render the live radar display.",components:[{name:"Microcontroller",spec:"Arduino Uno R3 / ESP8266 NodeMCU"},{name:"Ranging Sensor",spec:"HC-SR04 Ultrasonic (2cm - 400cm range, ±3mm accuracy)"},{name:"Actuator",spec:"SG90 9g Micro Servo (180° rotation range)"},{name:"Display Software",spec:"Processing 4 / Custom Three.js Canvas HUD"},{name:"Power & Support",spec:"5V Breadboard Supply, Custom 3D-printed Mount"}],architecture:["Servo sweeps left-to-right (0° to 180°) in 1-degree steps.","HC-SR04 triggers ping at each step and measures echo travel time.",'Distance and angle data are packed into serial string packets: "angle,distance.".',"Web HUD converts polar coordinates (r, θ) into Cartesian (x, y) coordinates.","Target blips are illuminated with decay trails and range-ring references."],applications:["Robotic obstacle detection & autonomous navigation","Blind spot monitoring in narrow corridors","Classroom demonstration of echolocation and radar physics","Perimeter security intruder alert"],disclaimer:"Demonstrates sonar principles using acoustic waves. It is an educational prototype and does not use radio microwave radar."},{id:"smart-agriculture",number:"02",title:"Smart Agriculture System",type:"IoT / Automation",shortDesc:"Automated microclimate farm with soil moisture tracking, rain protection canopy, and automated irrigation pump simulation.",tags:["Arduino","Soil Moisture","Rain Sensor","5V Relay","Submersible Pump","IoT"],status:"In Progress Prototype",symbol:"🌱",accentColor:"#22c55e",overview:"An intelligent agricultural automation prototype created to conserve water, reduce labor, and protect sensitive crops from unexpected rainfall. The system monitors soil moisture and atmospheric precipitation, automatically activating irrigation only when the soil is dry and closing a protective canopy when raindrops are detected.",workingPrinciple:"Two conductive probes measure soil resistance—higher moisture reduces soil electrical resistance, yielding an analog voltage reading. If moisture drops below 35%, a 5V relay switches on the DC water pump. If the rain sensor detects water drops, a servo deploys the protective roof cover over the seedbed.",components:[{name:"Controller",spec:"Arduino Uno / Nano"},{name:"Soil Sensor",spec:"Capacitive / Resistive Soil Moisture Probe"},{name:"Rain Detection",spec:"Nickel-coated Raindrop Sensor Board (LM393 Comparator)"},{name:"Water Pumping",spec:"5V Mini Submersible Water Pump with Vinyl Tubing"},{name:"Actuation",spec:"TowerPro MG90S Metal Gear Servo (Canopy Mechanism)"},{name:"Switching",spec:"Single-channel Optocoupler 5V Relay Module"}],architecture:["Continuous sensor polling every 2 seconds with analog averaging.","Moisture comparator triggers relay when moisture is < threshold.","Interrupt-driven rain detector signals servo motor to pivot canopy.","LCD 16x2 / Web dashboard displays real-time telemetry (Soil %, Rain: YES/NO, Pump: ON/OFF)."],applications:["Automated drip irrigation for greenhouse nurseries","Water conservation in arid farming regions","Protection of delicate floral crops and seedbeds from sudden rainfall damage"],disclaimer:"The web dashboard simulates sensor telemetry and motor responses for demonstrations without physical high-voltage pumps."},{id:"lpg-safety",number:"03",title:"LPG Gas Safety System",type:"Safety / Embedded Systems",shortDesc:"Flammable gas leakage detector with automated exhaust ventilation, sound buzzer, and simulated emergency shutoff valve.",tags:["MQ-2 Gas Sensor","Arduino Nano","Active Buzzer","12V DC Fan","Relay Module"],status:"Working Concept",symbol:"♨",accentColor:"#f97316",overview:"A life-safety concept designed to mitigate liquefied petroleum gas (LPG) explosions in domestic kitchens and school labs. The system monitors combustible hydrocarbon vapors (propane and butane) in real time and executes an automated safety containment sequence upon threshold breach.",workingPrinciple:"The MQ-2 sensor utilizes a SnO2 (tin dioxide) semiconductor layer with low conductivity in clean air. In the presence of combustible gases, adsorbed oxygen is consumed, drastically increasing sensor conductivity. An analog voltage comparator detects hazardous concentrations (> 400 PPM) and trips safety relays.",components:[{name:"Gas Sensor",spec:"MQ-2 Semiconductor Gas Sensor (LPG, Propane, Smoke)"},{name:"Controller",spec:"Arduino Nano ATmega328P"},{name:"Audible Alarm",spec:"85dB Piezo Buzzer with Red Flashing Strobe LED"},{name:"Ventilation",spec:"Brushless 12V DC Exhaust Fan with Transistor Driver"},{name:"Gas Cut-off",spec:"Simulated 12V Solenoid Shut-off Valve"}],architecture:["Pre-heating phase (20s) to stabilize the sensor internal coil.","PPM level continuously measured and categorized into Safe, Caution, and Hazard.","Upon Hazard: buzzer pulses urgently, solenoid valve cuts gas supply, exhaust fan activates to disperse dense gas from floor level.","Automatic reset only once PPM returns to atmospheric baseline."],applications:["Kitchen gas cylinder leak detection","Chemistry laboratory safety automation","Industrial storage tank monitoring"],disclaimer:"This is an educational prototype and visual demonstration. It is not an industrial ATEX-certified safety device."},{id:"voice-assistant",number:"04",title:"Voice Interaction Interface",type:"AI / Speech Interaction",shortDesc:"Hands-free voice recognition interface with live audio waveform visualization and browser speech synthesis responses.",tags:["Web Speech API","AudioContext API","Speech Synthesis","JavaScript","HTML5 Audio"],status:"Interactive Prototype",symbol:"〰",accentColor:"#a855f7",overview:"An interactive voice recognition and audio visualization interface that lets users command the portfolio using natural speech. It demonstrates hands-free accessibility, real-time frequency analysis with the Web Audio API, and voice responses via the Web Speech Synthesis API.",workingPrinciple:"With explicit user microphone permission, the Web Audio API connects a MediaStreamSource to an AnalyserNode. The Fast Fourier Transform (FFT) analyzes audio spectrum bins to animate the glowing frequency waveform. Concurrently, the Web Speech Recognition engine transcribes spoken words into intent commands.",components:[{name:"Speech Recognition",spec:"Browser SpeechRecognition / webkitSpeechRecognition"},{name:"Audio Analyzer",spec:"Web Audio API AnalyserNode (FFT Size 128)"},{name:"Voice Synthesis",spec:"SpeechSynthesisUtterance with custom pitch and rate"},{name:"Rendering Canvas",spec:"HTML5 2D Canvas with Neon Glow Gradient Filters"}],architecture:["User grants microphone access via browser permission prompt.","Continuous audio stream fed into frequency visualizer.",'Speech engine matches spoken phrases: "Go to projects", "Who is Mritunjay", "Say hello".',"Assistant confirms action with speech synthesis and UI scrolling."],applications:["Accessible portfolio navigation for users with motor impairments","Voice-operated smart room controls and IoT dashboards","Interactive kiosk greeting systems"],disclaimer:"Audio processing runs entirely inside the local browser. No audio recordings are stored, saved, or uploaded to any server."},{id:"helmet-detection",number:"05",title:"Smart Helmet Safety Concept",type:"Computer Vision / Road Safety",shortDesc:"Two-wheeler road safety concept verifying rider helmet compliance before authorizing vehicle ignition switch.",tags:["Computer Vision","YOLO Object Detection Concept","Python / OpenCV","Ignition Interlock"],status:"Research & Concept",symbol:"🏍",accentColor:"#dfd0b8",overview:"A vision-based safety system conceptualized to combat motorcycle fatalities caused by lack of helmet use. The system features a forward camera module that inspects the rider’s headgear using an object detection model and controls an ignition relay to prevent riding without protective equipment.",workingPrinciple:'A lightweight neural network (e.g. YOLOv8-nano / MobileNet) processes video frames from a handlebar-mounted camera. It localizes head regions and classifies them into "Helmet" or "No Helmet". If helmet confidence exceeds 90%, the ignition circuit closes; otherwise, an audible warning plays.',components:[{name:"Processing Unit",spec:"Raspberry Pi 4 / ESP32-CAM (Concept Model)"},{name:"Camera Module",spec:"Wide-angle 5MP OV5647 Camera"},{name:"Ignition Control",spec:"12V 30A Automotive Ignition Interlock Relay"},{name:"Visual Indicator",spec:"Dual RGB High-brightness Safety LED"}],architecture:['Rider turns ignition key to "ACC" (accessory mode).',"Camera captures head frame and runs inference.","Model detects helmet bounding box with confidence percentage.","Interlock relay activates starter motor if helmet verified."],applications:["Commercial delivery bike fleet enforcement","Rental motorcycle safety compliance","Traffic checkpoint automated violation logging"],disclaimer:"Simulated computer-vision demonstration. Does not interface with a real motorcycle engine without certified vehicular testing."},{id:"face-recognition",number:"06",title:"3D Face & Landmark Tracker",type:"Computer Vision / 3D Graphics",shortDesc:"Procedural 3D wireframe head mesh with animated facial landmark nodes, depth triangulation, and coordinate telemetry.",tags:["Three.js","WebGL","MediaPipe Concept","3D Landmark Mesh","Python / OpenCV"],status:"Interactive 3D Demo",symbol:"◈",accentColor:"#c084fc",overview:"An interactive exploration of 3D facial landmark estimation, point cloud tracking, and computer vision geometry. Users can rotate and inspect a 3D wireframe human head displaying key landmark points for eyes, nose bridge, jawline contour, and lips.",workingPrinciple:"Modern face trackers map 468 3D landmark coordinates (x, y, z) from a monocular 2D image by inferring depth through deep regression networks. This scene demonstrates the resulting polygonal tessellation using Three.js Wireframe and Point Cloud shaders.",components:[{name:"3D Engine",spec:"Three.js WebGL Renderer with Custom Shaders"},{name:"Mesh Structure",spec:"Procedural 3D Sphere/Head Topology with 320 Vertices"},{name:"Tracker HUD",spec:"Real-time Landmark Coordinate Telemetry (X, Y, Z, Pitch, Yaw)"},{name:"Controls",spec:"Interactive Orbit Controls with Cursor Follow"}],architecture:["Vertex buffer initialized with anatomical facial proportions.","Dynamic keypoint markers attached to ocular, nasal, and mandibular anchors.","Cursor movement smoothly drives head rotation and focal parallax.","HUD reflects simulated landmark coordinate streams in real time."],applications:["Driver fatigue & drowsiness detection","Facial gesture control for assistive computing","Augmented reality avatar face tracking"],disclaimer:"Runs procedurally in WebGL. No biometric facial recognition or storage is performed."},{id:"nfc-card",number:"07",title:"NFC Smart Card System",type:"Embedded Systems / RFID",shortDesc:"Contactless 13.56MHz smart card reader concept with 3D holographic card physics, magnetic flux animation, and UID readout.",tags:["RC522 RFID / NFC","Arduino / ESP32","13.56MHz Mifare","Contactless UID","Access Control"],status:"Working Prototype Concept",symbol:"▣",accentColor:"#34d399",overview:"A high-frequency radio frequency identification (RFID) and near-field communication (NFC) prototype for student access control and cashless canteen attendance. Includes an interactive 3D metallic card with holographic shimmer that users can tap against an NFC reader pad.",workingPrinciple:"The reader generates a 13.56MHz alternating electromagnetic field via its planar antenna coil. When a passive NFC card enters the field within 4cm, inductive coupling powers the card’s internal microchip, which modulates the field to transmit its 4-byte or 7-byte Unique Identifier (UID).",components:[{name:"Reader Module",spec:"RC522 13.56MHz RFID/NFC Module (SPI Interface)"},{name:"Smart Cards",spec:"Mifare Classic 1K Contactless Smart Cards"},{name:"Controller",spec:"Arduino Uno / ESP32 (Wi-Fi Attendance Logger)"},{name:"Feedback",spec:"Buzzer + Green/Red Verification LEDs"}],architecture:["Reader emits constant RF carrier wave.","Card coil harvest energy via Faraday induction.","Card sends anti-collision protocol and responds with UID.","Arduino matches UID against authorized database array and signals access."],applications:["School campus smart attendance logging","Laboratory door lock authorization","Library book borrowing automation"],disclaimer:"This web demo simulates NFC data exchanges and induction physics for educational demonstration."},{id:"fingerprint-system",number:"08",title:"Fingerprint Biometric Concept",type:"Biometrics / Embedded Systems",shortDesc:"Biometric fingerprint scanner visual with animated laser sweep, minutiae ridge-ending detection, and match verification HUD.",tags:["R307 Optical Sensor","Arduino","Minutiae Matching","Biometric Security","Local Cryptography"],status:"Interactive Concept",symbol:"◎",accentColor:"#fb923c",overview:"An interactive exploration of biometric fingerprint authentication and pattern analysis. The demo displays a detailed friction-ridge fingerprint visual, sweeps a cyan laser scanning line across it, detects minutiae points (ridge bifurcations and endings), and visualizes the match verification state.",workingPrinciple:"An optical prism illuminates the finger surface with a blue LED. Ridges touching the glass cause total internal reflection to disperse, creating dark lines, while valleys remain bright. The processor extracts minutiae coordinates and compares them against pre-enrolled template hashes.",components:[{name:"Optical Sensor",spec:"R307 / AS608 Optical Fingerprint Module (500 DPI)"},{name:"Microcontroller",spec:"Arduino Nano via SoftwareSerial (Pins 2 & 3)"},{name:"Template Storage",spec:"Onboard 1000-fingerprint Flash Memory"},{name:"Display Interface",spec:'OLED 0.96" 128x64 I2C Display'}],architecture:["Finger placed on prism activates touch detection.","Image captured and converted into 512-byte normalized minutiae feature vector.","Search algorithm queries stored database with False Acceptance Rate < 0.001%.","System displays verified User ID and match confidence score."],applications:["Classroom attendance verification","Electronic locker secure keypad bypass","Equipment access authorization"],disclaimer:"This interactive canvas demo illustrates biometric minutiae extraction concepts without collecting or storing real fingerprints."}],ml=[{id:"javascript",name:"JavaScript",abbr:"JS",category:"Web & Logic",color:"#f7df1e",accent:"#eab308",description:"Modern ES6+ syntax, asynchronous programming, DOM interactions, Canvas 2D/WebGL engines, and modular architectures.",experience:"Core scripting language for interactive web projects, custom visualizers, and hardware dashboards."},{id:"html",name:"HTML5",abbr:"HTML",category:"Web & Structure",color:"#e34f26",accent:"#f97316",description:"Semantic markup, accessible structure, Canvas elements, audio/video APIs, and responsive page foundations.",experience:"Structuring modular web applications, hardware monitoring dashboards, and accessible interfaces."},{id:"css",name:"CSS3",abbr:"CSS",category:"Design & Motion",color:"#264de4",accent:"#3b82f6",description:"Modern layout systems (Flexbox, CSS Grid), responsive design, keyframe animations, glassmorphism, and custom properties.",experience:"Crafting dark futuristic aesthetics, fluid typography, and micro-interactions."},{id:"python",name:"Python",abbr:"PY",category:"Programming & AI",color:"#3776ab",accent:"#dfd0b8",description:"Object-oriented programming, algorithmic problem-solving, OpenCV computer vision concepts, and serial communication scripts.",experience:"Writing test scripts to bridge microcontroller serial data, image processing experiments, and automation logic."},{id:"c",name:"C Language",abbr:"C",category:"Low-Level Systems",color:"#555555",accent:"#94a3b8",description:"Pointers, memory management, low-level data structures, and foundational algorithmic efficiency.",experience:"Building strong computer science foundations and understanding bare-metal system architecture."},{id:"cpp",name:"C++",abbr:"C++",category:"Embedded & Systems",color:"#00599c",accent:"#60a5fa",description:"Object-oriented hardware programming, timing-critical routines, interrupts, and library development.",experience:"Developing Arduino sketches, sensor drivers, state machines, and hardware communication protocols."},{id:"arduino",name:"Arduino",abbr:"ARD",category:"Physical Computing",color:"#00979d",accent:"#14b8a6",description:"Microcontroller programming, PWM control, analog-to-digital conversion, hardware interrupts, and sensor interfacing.",experience:"Core platform used for Smart Radar, Smart Agriculture, Gas Detection, and robotics prototypes."},{id:"threejs",name:"Three.js / WebGL",abbr:"3D",category:"Creative 3D",color:"#948979",accent:"#a855f7",description:"3D scenes, camera projection, procedural geometries, standard materials, lighting setups, and raycasting interactions.",experience:"Building interactive 3D avatars, floating celestial skill fields, and miniature interactive worlds."},{id:"webdev",name:"Web Development",abbr:"WEB",category:"Frontend Engineering",color:"#06b6d4",accent:"#22d3ee",description:"Full-stack fundamentals, modern build tools (Vite), performance optimization, and cross-browser compatibility.",experience:"Creating fast, responsive developer portfolios, telemetry dashboards, and interactive educational sites."},{id:"uiux",name:"UI/UX Design",abbr:"UI",category:"Visual & Experience",color:"#ec4899",accent:"#f43f5e",description:"Futuristic dark-mode design, visual hierarchy, purposeful motion design, microcopy, and accessible usability.",experience:"Designing cyberpunk/laboratory aesthetic interfaces with clean ergonomics and high contrast."},{id:"robotics",name:"Robotics",abbr:"BOT",category:"Mechatronics",color:"#10b981",accent:"#34d399",description:"Actuators, servo motors, DC motor drivers (L298N), chassis mechanics, kinematics, and obstacle avoidance logic.",experience:"Building pan-tilt ultrasonic scanning mounts, mobile robotic platforms, and automated mechanisms."},{id:"iot",name:"IoT & Automation",abbr:"IoT",category:"Connected Hardware",color:"#6366f1",accent:"#818cf8",description:"ESP8266/ESP32 Wi-Fi microcontrollers, cloud dashboards (Blynk), telemetry streaming, and automated triggers.",experience:"Prototyping connected greenhouse sensors, real-time alert notifications, and remote monitoring."},{id:"electronics",name:"Electronics",abbr:"ELEC",category:"Hardware Engineering",color:"#f59e0b",accent:"#fbbf24",description:"Circuit schematics, breadboard prototyping, voltage regulation, transistors, relays, pull-up/pull-down resistors.",experience:"Designing safe power distribution for microcontrollers, sensors, solenoids, and inductive loads."},{id:"embedded",name:"Embedded Systems",abbr:"EMB",category:"Hardware Logic",color:"#d946ef",accent:"#e879f9",description:"Communication protocols: I2C, SPI, UART; sensor timing diagrams; register operations; and power optimization.",experience:"Interfacing OLED displays (I2C), RFID/NFC readers (SPI), and fingerprint modules (UART)."},{id:"git",name:"Git & GitHub",abbr:"GIT",category:"Version Control",color:"#f05032",accent:"#fb7185",description:"Repository management, branching, commit discipline, open-source collaboration, and project documentation.",experience:"Managing codebase versions, tracking hardware sketch iterations, and sharing open-source projects."},{id:"processing",name:"Processing IDE",abbr:"PROC",category:"Visual Computing",color:"#006699",accent:"#dfd0b8",description:"Creative visual coding, polar-to-cartesian coordinate transformations, serial communication parsing, and radar HUDs.",experience:"Used to render the graphical radar sweep interface directly from Arduino serial ultrasound packets."}],Da=[{id:"milestone-1",landmark:"Taj Mahal",landmarkDescription:"Symbolizing meticulous architecture, symmetry, and patience in craft.",title:"Programming Fundamentals",category:"Software Foundations",status:"Completed",done:!0,level:"Foundation",position:[-1.8,.4,1.2],description:"Began journey learning core algorithmic problem-solving in C and Python, mastering loops, conditional logic, arrays, and syntax precision.",learnings:["Variables, memory basics, and conditional branching","Functions, recursion, and modular decomposition","Algorithmic thinking through practical small utilities"]},{id:"milestone-2",landmark:"Egyptian Pyramids",landmarkDescription:"Timeless engineering standing on solid foundational bedrock.",title:"Exploring Electronics & Circuits",category:"Hardware Physics",status:"Completed",done:!0,level:"Core Knowledge",position:[-.9,.7,1.6],description:"Transitioned from pure software into physical circuitry: understanding Ohm’s Law, breadboard prototyping, resistors, capacitors, transistors, and diodes.",learnings:["Circuit schematics and breadboard wiring discipline","Analog voltage dividers, pull-up/pull-down resistor networks","Safe current limiting for LEDs and microcontrollers"]},{id:"milestone-3",landmark:"Great Wall of China",landmarkDescription:"Resilient defensive architecture spanning undulating landscapes.",title:"Building Arduino Prototypes",category:"Embedded Computing",status:"Completed",done:!0,level:"Intermediate",position:[0,.8,1.7],description:"Interfacing microcontrollers with sensors and actuators in C++. Writing non-blocking code using millis(), hardware timers, and PWM motor drivers.",learnings:["Digital I/O, analog reading (ADC), and PWM duty cycles","Ultrasonic distance calculations and servo motor positioning","I2C liquid crystal displays and SPI module communication"]},{id:"milestone-4",landmark:"Eiffel Tower",landmarkDescription:"Soaring wrought-iron lattice reaching upward into modern engineering.",title:"Developing the Radar System",category:"Mechatronics & Sonar",status:"Active Build",done:!0,level:"Advanced",position:[.9,.6,1.4],description:"Engineered a 180° pan-tilt ultrasonic radar system. Programmed real-time serial coordinate streaming into Processing and WebGL for interactive radar sweeps.",learnings:["Time-of-flight acoustic echolocation algorithms","Serial packet encoding and coordinate parsing","Polar-to-Cartesian geometric projection for radar HUD"]},{id:"milestone-5",landmark:"Statue of Liberty",landmarkDescription:"Welcoming new frontiers of discovery, innovation, and freedom of ideas.",title:"Smart Agriculture & Automation",category:"IoT & Sustainability",status:"In Progress",done:!1,level:"Advanced",position:[1.7,.3,1.1],description:"Designing closed-loop agricultural automation: soil moisture monitoring, rain detection, automated servo-deployed protective crop canopies, and irrigation relays.",learnings:["Threshold hysterisis to avoid pump cycling","Rain sensor calibration and servo mechanical linkage","Designing energy-efficient telemetry logging"]},{id:"milestone-6",landmark:"Futuristic Tech Spire",landmarkDescription:"Vision of interconnected artificial intelligence and autonomous systems.",title:"Creative Web & 3D Visuals",category:"WebGL & Interactive Graphics",status:"Active",done:!0,level:"Creative",position:[1.2,-.4,1.5],description:"Harnessing Three.js, GSAP, and modern frontend architecture to visualize physical systems, telemetry feeds, and interactive 3D portfolios.",learnings:["Procedural 3D voxel modeling and custom raycast interactions","Interactive celestial orbit shaders and particle simulations","Accessible, keyboard-navigable 3D WebGL interfaces"]},{id:"milestone-7",landmark:"Orbital Gateway",landmarkDescription:"Aspiring horizon combining robotics, embedded AI, and assistive devices.",title:"Future Goals: Robotics & Edge AI",category:"Horizon Roadmap",status:"Future Goal",done:!1,level:"Mastery",position:[-.6,-.5,1.7],description:"Pursue advanced computer vision on edge devices (Raspberry Pi / Jetson), autonomous mobile robots, intelligent assistive devices, and IoT networks for social good.",learnings:["Embedded machine learning (TinyML) on microcontrollers","Autonomous SLAM navigation and sensor fusion (LiDAR + Sonar)","Developing open-source assistive hardware for people with disabilities"]}],l0=[{id:"web-dev",number:"01",icon:"🌐",title:"Web Development",tagline:"Modern, fast, and structured web interfaces",description:"Building responsive, standards-compliant web applications with clean component architecture, HTML5, modern CSS, and vanilla JavaScript modules without bloat.",highlights:["Component-based architecture","Responsive across mobile & desktop","Semantic & accessible HTML","Clean performance optimization"]},{id:"ui-design",number:"02",icon:"✨",title:"UI & Visual Design",tagline:"Futuristic, high-contrast digital experiences",description:"Designing immersive dark-mode interfaces, cybernetic aesthetics, thoughtful visual hierarchy, bespoke typography, and subtle glowing accents.",highlights:["Cinematic dark themes","Ergonomic layout & typography","Micro-interactions & feedback","Cohesive design systems"]},{id:"creative-coding",number:"03",icon:"⚡",title:"Creative Coding",tagline:"Transforming algorithms into visual motion",description:"Developing generative canvas graphics, audio frequency visualizers, particle systems, and polar coordinate transformations using Processing and WebGL.",highlights:["Canvas 2D & WebGL shaders","Real-time mathematical plotting","Audio reactivity with Web Audio API","Physics-based spring animations"]},{id:"arduino-prog",number:"04",icon:"📟",title:"Arduino Programming",tagline:"Precise hardware firmware & timing in C++",description:"Writing non-blocking firmware for Atmel/ESP microcontrollers, controlling PWM actuators, handling external interrupts, and decoding sensor telemetry.",highlights:["Non-blocking event loops with millis()","Interrupt service routines","Custom serial communication packets","Low-power state management"]},{id:"robotics-elec",number:"05",icon:"🤖",title:"Robotics & Electronics",tagline:"Mechatronics from breadboard to motion",description:"Designing and wiring breadboard circuits, motor driver stages (L298N/L293D), ultrasonic scanning pan-tilts, and mobile robot chassis mechanics.",highlights:["Circuit prototyping & schematics","Servo & DC motor synchronization","Safe power & ground isolation","Ultrasonic obstacle avoidance"]},{id:"iot-prototypes",number:"06",icon:"📡",title:"IoT Prototypes",tagline:"Connecting physical sensors to digital networks",description:"Prototyping connected devices with ESP8266/ESP32, transmitting sensor telemetry (soil, temperature, gas, rain), and triggering automated safety responses.",highlights:["Microcontroller Wi-Fi integration","Blynk & cloud telemetry logging","Threshold event triggers & alarms","Environmental monitoring"]},{id:"interactive-dash",number:"07",icon:"📊",title:"Interactive Dashboards",tagline:"Telemetry visualization & control consoles",description:"Creating real-time diagnostic heads-up displays (HUDs), gauge meters, radar sweeps, and live status monitors that bring sensor data to life.",highlights:["Real-time radar & gauge instruments","Visual status indicators & alarms","Simulated hardware controls","Clean monospace data telemetry"]},{id:"3d-vis",number:"08",icon:"🧊",title:"3D Visualisation",tagline:"Interactive WebGL scenes & voxel characters",description:"Constructing performant Three.js 3D environments, procedural voxel characters with cursor tracking, celestial skill constellations, and miniature landmark worlds.",highlights:["Procedural Three.js geometry","Raycasting body hotspots","Dynamic lighting & soft bloom","Hardware-conscious 60FPS loops"]},{id:"problem-solving",number:"09",icon:"🧩",title:"Technical Problem-Solving",tagline:"Learning by building, testing, and debugging",description:"Iterative approach to troubleshooting: diagnosing oscilloscope signals, serial debug streams, hardware bus conflicts, and browser console errors.",highlights:["Systematic debugging methodology","Hardware & software integration","Hands-on curiosity and documentation","Refining prototypes step-by-step"]}],c0=[{id:"github",name:"GitHub",handle:"mritunjay20",url:"https://github.com/mritunjay20",isVerified:!0,symbol:"GH",iconColor:"#dfd0b8",description:"Open source repositories, robotics code, and web prototypes"},{id:"linkedin",name:"LinkedIn",handle:"mritunjay-saini-564218445",url:"https://www.linkedin.com/in/mritunjay-saini-564218445?utm_source=share_via&utm_content=profile&utm_medium=member_android",isVerified:!1,symbol:"in",iconColor:"#0a66c2",description:"Professional networking, education, and development updates"},{id:"instagram",name:"Instagram",handle:"mritunjay.social",url:"https://www.instagram.com/mritunjay.social?obrf=ZnI5eDVrbXM1dTVk",isVerified:!1,symbol:"IG",iconColor:"#ec4899",description:"Behind-the-scenes build photos, hardware clips, and desk setup"},{id:"youtube",name:"YouTube",handle:"Configure channel in src/data/socials.js",url:"https://www.youtube.com/",isVerified:!1,symbol:"YT",iconColor:"#ef4444",description:"Project walk-throughs, radar tests, and hardware demonstrations"},{id:"pinterest",name:"Pinterest",handle:"mritunjay",url:"https://pin.it/YZVyJ8waf",isVerified:!1,symbol:"PIN",iconColor:"#e60023",description:"Design inspiration, UI boards, and 3D voxel moodboards"},{id:"x",name:"X (Twitter)",handle:"@mritunjay_33442",url:"https://x.com/mritunjay_33442",isVerified:!1,symbol:"𝕏",iconColor:"#dfd0b8",description:"Short tech updates, learning notes, and project releases"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cd="168",u0=0,ch=1,d0=2,Hp=1,h0=2,Pi=3,fr=0,Ln=1,hi=2,or=0,ks=1,uh=2,dh=3,hh=4,f0=5,Ir=100,p0=101,m0=102,g0=103,_0=104,v0=200,x0=201,y0=202,M0=203,nu=204,iu=205,S0=206,b0=207,E0=208,w0=209,T0=210,A0=211,C0=212,R0=213,P0=214,L0=0,D0=1,I0=2,gl=3,U0=4,N0=5,O0=6,F0=7,Gp=0,k0=1,B0=2,lr=0,z0=1,H0=2,G0=3,V0=4,W0=5,X0=6,q0=7,Vp=300,Ys=301,$s=302,ru=303,su=304,Cl=306,au=1e3,Fr=1001,ou=1002,ni=1003,Y0=1004,go=1005,fi=1006,Ql=1007,kr=1008,Gi=1009,Wp=1010,Xp=1011,qa=1012,ud=1013,Kr=1014,Oi=1015,Za=1016,dd=1017,hd=1018,js=1020,qp=35902,Yp=1021,$p=1022,pi=1023,jp=1024,Kp=1025,Bs=1026,Ks=1027,Zp=1028,fd=1029,Jp=1030,pd=1031,md=1033,Zo=33776,Jo=33777,Qo=33778,el=33779,lu=35840,cu=35841,uu=35842,du=35843,hu=36196,fu=37492,pu=37496,mu=37808,gu=37809,_u=37810,vu=37811,xu=37812,yu=37813,Mu=37814,Su=37815,bu=37816,Eu=37817,wu=37818,Tu=37819,Au=37820,Cu=37821,tl=36492,Ru=36494,Pu=36495,Qp=36283,Lu=36284,Du=36285,Iu=36286,$0=3200,j0=3201,em=0,K0=1,Ji="",ui="srgb",gr="srgb-linear",gd="display-p3",Rl="display-p3-linear",_l="linear",At="srgb",vl="rec709",xl="p3",os=7680,fh=519,Z0=512,J0=513,Q0=514,tm=515,e_=516,t_=517,n_=518,i_=519,ph=35044,mh="300 es",Fi=2e3,yl=2001;class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gh=1234567;const Ia=Math.PI/180,Ya=180/Math.PI;function ea(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function rn(r,e,t){return Math.max(e,Math.min(t,r))}function _d(r,e){return(r%e+e)%e}function r_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function s_(r,e,t){return r!==e?(t-r)/(e-r):0}function Ua(r,e,t){return(1-t)*r+t*e}function a_(r,e,t,n){return Ua(r,e,1-Math.exp(-t*n))}function o_(r,e=1){return e-Math.abs(_d(r,e*2)-e)}function l_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function c_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function u_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function d_(r,e){return r+Math.random()*(e-r)}function h_(r){return r*(.5-Math.random())}function f_(r){r!==void 0&&(gh=r);let e=gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function p_(r){return r*Ia}function m_(r){return r*Ya}function g_(r){return(r&r-1)===0&&r!==0}function __(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function v_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function x_(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),h=a((e-n)/2),d=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*f,l*h,o*c);break;case"YZY":r.set(l*h,o*u,l*f,o*c);break;case"ZXZ":r.set(l*f,l*h,o*u,o*c);break;case"XZX":r.set(o*u,l*_,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*_,o*c);break;case"ZYZ":r.set(l*_,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ts(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ut={DEG2RAD:Ia,RAD2DEG:Ya,generateUUID:ea,clamp:rn,euclideanModulo:_d,mapLinear:r_,inverseLerp:s_,lerp:Ua,damp:a_,pingpong:o_,smoothstep:l_,smootherstep:c_,randInt:u_,randFloat:d_,randFloatSpread:h_,seededRandom:f_,degToRad:p_,radToDeg:m_,isPowerOfTwo:g_,ceilPowerOfTwo:__,floorPowerOfTwo:v_,setQuaternionFromProperEuler:x_,normalize:xn,denormalize:Ts};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,i,s,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],y=i[4],M=i[7],w=i[2],E=i[5],b=i[8];return s[0]=a*g+o*v+l*w,s[3]=a*m+o*y+l*E,s[6]=a*p+o*M+l*b,s[1]=c*g+u*v+f*w,s[4]=c*m+u*y+f*E,s[7]=c*p+u*M+f*b,s[2]=h*g+d*v+_*w,s[5]=h*m+d*y+_*E,s[8]=h*p+d*M+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,_=t*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ec.makeScale(e,t)),this}rotate(e){return this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ec=new Je;function nm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ml(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function y_(){const r=Ml("canvas");return r.style.display="block",r}const _h={};function Na(r){r in _h||(_h[r]=!0,console.warn(r))}function M_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const vh=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xh=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sa={[gr]:{transfer:_l,primaries:vl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[ui]:{transfer:At,primaries:vl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Rl]:{transfer:_l,primaries:xl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(xh),fromReference:r=>r.applyMatrix3(vh)},[gd]:{transfer:At,primaries:xl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(xh),fromReference:r=>r.applyMatrix3(vh).convertLinearToSRGB()}},S_=new Set([gr,Rl]),pt={enabled:!0,_workingColorSpace:gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!S_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=sa[e].toReference,i=sa[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return sa[r].primaries},getTransfer:function(r){return r===Ji?_l:sa[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(sa[e].luminanceCoefficients)}};function zs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function tc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ls;class b_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Ml("canvas")),ls.width=e.width,ls.height=e.height;const n=ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ml("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=zs(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zs(t[n]/255)*255):t[n]=zs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E_=0;class im{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=ea(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(nc(i[a].image)):s.push(nc(i[a]))}else s=nc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function nc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?b_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w_=0;class Dn extends Qs{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,n=Fr,i=Fr,s=fi,a=kr,o=pi,l=Gi,c=Dn.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=ea(),this.name="",this.source=new im(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case au:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case au:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Vp;Dn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(d+1)/2,w=(p+1)/2,E=(u+h)/4,b=(f+g)/4,R=(_+m)/4;return y>M&&y>w?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=b/n):M>w?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=E/i,s=R/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=b/s,i=R/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-g)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T_ extends Qs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new im(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends T_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rm extends Dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ni,this.minFilter=ni,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class A_ extends Dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ni,this.minFilter=ni,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ja{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let m=1-o;const p=l*h+c*d+u*_+f*g,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const w=Math.sqrt(y),E=Math.atan2(w,p*v);m=Math.sin(m*E)/w,o=Math.sin(o*E)/w}const M=o*v;if(l=l*m+h*M,c=c*m+d*M,u=u*m+_*M,f=f*m+g*M,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),d=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new H,yh=new Ja;class Qa{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ai):ai.fromBufferAttribute(s,a),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),vo.subVectors(this.max,aa),cs.subVectors(e.a,aa),us.subVectors(e.b,aa),ds.subVectors(e.c,aa),Xi.subVectors(us,cs),qi.subVectors(ds,us),Sr.subVectors(cs,ds);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-Sr.z,Sr.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,Sr.z,0,-Sr.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-Sr.y,Sr.x,0];return!rc(t,cs,us,ds,vo)||(t=[1,0,0,0,1,0,0,0,1],!rc(t,cs,us,ds,vo))?!1:(xo.crossVectors(Xi,qi),t=[xo.x,xo.y,xo.z],rc(t,cs,us,ds,vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new H,new H,new H,new H,new H,new H,new H,new H],ai=new H,_o=new Qa,cs=new H,us=new H,ds=new H,Xi=new H,qi=new H,Sr=new H,aa=new H,vo=new H,xo=new H,br=new H;function rc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){br.fromArray(r,s);const o=i.x*Math.abs(br.x)+i.y*Math.abs(br.y)+i.z*Math.abs(br.z),l=e.dot(br),c=t.dot(br),u=n.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const C_=new Qa,oa=new H,sc=new H;class eo{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):C_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(oa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(sc)),this.expandByPoint(oa.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new H,ac=new H,yo=new H,Yi=new H,oc=new H,Mo=new H,lc=new H;class Pl{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ac.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(ac);const s=e.distanceTo(t)*.5,a=-this.direction.dot(yo),o=Yi.dot(this.direction),l=-Yi.dot(yo),c=Yi.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ac).addScaledVector(yo,h),d}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const n=Ti.dot(this.direction),i=Ti.dot(Ti)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,i,s){oc.subVectors(t,e),Mo.subVectors(n,e),lc.crossVectors(oc,Mo);let a=this.direction.dot(lc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yi.subVectors(this.origin,e);const l=o*this.direction.dot(Mo.crossVectors(Yi,Mo));if(l<0)return null;const c=o*this.direction.dot(oc.cross(Yi));if(c<0||l+c>a)return null;const u=-o*Yi.dot(lc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,n,i,s,a,o,l,c,u,f,h,d,_,g,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,h,d,_,g,m)}set(e,t,n,i,s,a,o,l,c,u,f,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),a=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h+g*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h-g*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R_,e,P_)}lookAt(e,t,n){const i=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),$i.crossVectors(n,On),$i.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),$i.crossVectors(n,On)),$i.normalize(),So.crossVectors(On,$i),i[0]=$i.x,i[4]=So.x,i[8]=On.x,i[1]=$i.y,i[5]=So.y,i[9]=On.y,i[2]=$i.z,i[6]=So.z,i[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],y=n[7],M=n[11],w=n[15],E=i[0],b=i[4],R=i[8],S=i[12],x=i[1],C=i[5],P=i[9],U=i[13],O=i[2],N=i[6],k=i[10],X=i[14],V=i[3],ae=i[7],L=i[11],te=i[15];return s[0]=a*E+o*x+l*O+c*V,s[4]=a*b+o*C+l*N+c*ae,s[8]=a*R+o*P+l*k+c*L,s[12]=a*S+o*U+l*X+c*te,s[1]=u*E+f*x+h*O+d*V,s[5]=u*b+f*C+h*N+d*ae,s[9]=u*R+f*P+h*k+d*L,s[13]=u*S+f*U+h*X+d*te,s[2]=_*E+g*x+m*O+p*V,s[6]=_*b+g*C+m*N+p*ae,s[10]=_*R+g*P+m*k+p*L,s[14]=_*S+g*U+m*X+p*te,s[3]=v*E+y*x+M*O+w*V,s[7]=v*b+y*C+M*N+w*ae,s[11]=v*R+y*P+M*k+w*L,s[15]=v*S+y*U+M*X+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*f-i*c*f-s*o*h+n*c*h+i*o*d-n*l*d)+g*(+t*l*d-t*c*h+s*a*h-i*a*d+i*c*u-s*l*u)+m*(+t*c*f-t*o*d-s*a*f+n*a*d+s*o*u-n*c*u)+p*(-i*o*u-t*l*f+t*o*h+i*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],v=f*m*c-g*h*c+g*l*d-o*m*d-f*l*p+o*h*p,y=_*h*c-u*m*c-_*l*d+a*m*d+u*l*p-a*h*p,M=u*g*c-_*f*c+_*o*d-a*g*d-u*o*p+a*f*p,w=_*f*l-u*g*l-_*o*h+a*g*h+u*o*m-a*f*m,E=t*v+n*y+i*M+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=v*b,e[1]=(g*h*s-f*m*s-g*i*d+n*m*d+f*i*p-n*h*p)*b,e[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*b,e[3]=(f*l*s-o*h*s-f*i*c+n*h*c+o*i*d-n*l*d)*b,e[4]=y*b,e[5]=(u*m*s-_*h*s+_*i*d-t*m*d-u*i*p+t*h*p)*b,e[6]=(_*l*s-a*m*s-_*i*c+t*m*c+a*i*p-t*l*p)*b,e[7]=(a*h*s-u*l*s+u*i*c-t*h*c-a*i*d+t*l*d)*b,e[8]=M*b,e[9]=(_*f*s-u*g*s-_*n*d+t*g*d+u*n*p-t*f*p)*b,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*p+t*o*p)*b,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*d-t*o*d)*b,e[12]=w*b,e[13]=(u*g*i-_*f*i+_*n*h-t*g*h-u*n*m+t*f*m)*b,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*m-t*o*m)*b,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*h+t*o*h)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,_=s*f,g=a*u,m=a*f,p=o*f,v=l*c,y=l*u,M=l*f,w=n.x,E=n.y,b=n.z;return i[0]=(1-(g+p))*w,i[1]=(d+M)*w,i[2]=(_-y)*w,i[3]=0,i[4]=(d-M)*E,i[5]=(1-(h+p))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(_+y)*b,i[9]=(m-v)*b,i[10]=(1-(h+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=hs.set(i[0],i[1],i[2]).length();const a=hs.set(i[4],i[5],i[6]).length(),o=hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],oi.copy(this);const c=1/s,u=1/a,f=1/o;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,t.setFromRotationMatrix(oi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Fi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let d,_;if(o===Fi)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===yl)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Fi){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(a-s),h=(t+e)*c,d=(n+i)*u;let _,g;if(o===Fi)_=(a+s)*f,g=-2*f;else if(o===yl)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hs=new H,oi=new wt,R_=new H(0,0,0),P_=new H(1,1,1),$i=new H,So=new H,On=new H,Mh=new wt,Sh=new Ja;class Ei{constructor(e=0,t=0,n=0,i=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L_=0;const bh=new H,fs=new Ja,Ai=new wt,bo=new H,la=new H,D_=new H,I_=new Ja,Eh=new H(1,0,0),wh=new H(0,1,0),Th=new H(0,0,1),Ah={type:"added"},U_={type:"removed"},ps={type:"childadded",child:null},cc={type:"childremoved",child:null};class Zt extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new H,t=new Ei,n=new Ja,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wt},normalMatrix:{value:new Je}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Eh,e)}rotateY(e){return this.rotateOnAxis(wh,e)}rotateZ(e){return this.rotateOnAxis(Th,e)}translateOnAxis(e,t){return bh.copy(e).applyQuaternion(this.quaternion),this.position.add(bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eh,e)}translateY(e){return this.translateOnAxis(wh,e)}translateZ(e){return this.translateOnAxis(Th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bo.copy(e):bo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(la,bo,this.up):Ai.lookAt(bo,la,this.up),this.quaternion.setFromRotationMatrix(Ai),i&&(Ai.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(Ai),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ah),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(U_),cc.child=e,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ah),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,D_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,I_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Zt.DEFAULT_UP=new H(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new H,Ci=new H,uc=new H,Ri=new H,ms=new H,gs=new H,Ch=new H,dc=new H,hc=new H,fc=new H;class xi{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),li.subVectors(e,t),i.cross(li);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){li.subVectors(i,t),Ci.subVectors(n,t),uc.subVectors(e,t);const a=li.dot(li),o=li.dot(Ci),l=li.dot(uc),c=Ci.dot(Ci),u=Ci.dot(uc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static isFrontFacing(e,t,n,i){return li.subVectors(n,t),Ci.subVectors(e,t),li.cross(Ci).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),li.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return xi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ms.subVectors(i,n),gs.subVectors(s,n),dc.subVectors(e,n);const l=ms.dot(dc),c=gs.dot(dc);if(l<=0&&c<=0)return t.copy(n);hc.subVectors(e,i);const u=ms.dot(hc),f=gs.dot(hc);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ms,a);fc.subVectors(e,s);const d=ms.dot(fc),_=gs.dot(fc);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(gs,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Ch.subVectors(s,i),o=(f-u)/(f-u+(d-_)),t.copy(i).addScaledVector(Ch,o);const p=1/(m+g+h);return a=g*p,o=h*p,t.copy(n).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function pc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=_d(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=pc(a,s,e+1/3),this.g=pc(a,s,e),this.b=pc(a,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=ui){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const n=sm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=tc(e.r),this.g=tc(e.g),this.b=tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return pt.fromWorkingColorSpace(un.copy(this),e),Math.round(rn(un.r*255,0,255))*65536+Math.round(rn(un.g*255,0,255))*256+Math.round(rn(un.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(un.copy(this),t);const n=un.r,i=un.g,s=un.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=ui){pt.fromWorkingColorSpace(un.copy(this),e);const t=un.r,n=un.g,i=un.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Eo);const n=Ua(ji.h,Eo.h,t),i=Ua(ji.s,Eo.s,t),s=Ua(ji.l,Eo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new $e;$e.NAMES=sm;let N_=0;class Qr extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=ks,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=iu,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==fr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nu&&(n.blendSrc=this.blendSrc),this.blendDst!==iu&&(n.blendDst=this.blendDst),this.blendEquation!==Ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qr extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new H,wo=new je;class ri{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Na("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array),s=xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ph&&(e.usage=this.usage),e}}class am extends ri{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class om extends ri{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends ri{constructor(e,t,n){super(new Float32Array(e),t,n)}}let O_=0;const Kn=new wt,mc=new Zt,_s=new H,Fn=new Qa,ca=new Qa,en=new H;class qt extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nm(e)?om:am)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return mc.lookAt(e),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Fn.min,ca.min),Fn.expandByPoint(en),en.addVectors(Fn.max,ca.max),Fn.expandByPoint(en)):(Fn.expandByPoint(ca.min),Fn.expandByPoint(ca.max))}Fn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)en.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(en));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)en.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),en.add(_s)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new H,l[R]=new H;const c=new H,u=new H,f=new H,h=new je,d=new je,_=new je,g=new H,m=new H;function p(R,S,x){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,x),h.fromBufferAttribute(s,R),d.fromBufferAttribute(s,S),_.fromBufferAttribute(s,x),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const C=1/(d.x*_.y-_.x*d.y);isFinite(C)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(C),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(C),o[R].add(g),o[S].add(g),o[x].add(g),l[R].add(m),l[S].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,S=v.length;R<S;++R){const x=v[R],C=x.start,P=x.count;for(let U=C,O=C+P;U<O;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new H,M=new H,w=new H,E=new H;function b(R){w.fromBufferAttribute(i,R),E.copy(w);const S=o[R];y.copy(S),y.sub(w.multiplyScalar(w.dot(S))).normalize(),M.crossVectors(E,S);const C=M.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,C)}for(let R=0,S=v.length;R<S;++R){const x=v[R],C=x.start,P=x.count;for(let U=C,O=C+P;U<O;U+=3)b(e.getX(U+0)),b(e.getX(U+1)),b(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ri(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new ri(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rh=new wt,Er=new Pl,To=new eo,Ph=new H,vs=new H,xs=new H,ys=new H,gc=new H,Ao=new H,Co=new je,Ro=new je,Po=new je,Lh=new H,Dh=new H,Ih=new H,Lo=new H,Do=new H;class Ve extends Zt{constructor(e=new qt,t=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ao.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(gc.fromBufferAttribute(f,e),a?Ao.addScaledVector(gc,u):Ao.addScaledVector(gc.sub(t),u))}t.add(Ao)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(To.containsPoint(Er.origin)===!1&&(Er.intersectSphere(To,Ph)===null||Er.origin.distanceToSquared(Ph)>(e.far-e.near)**2))&&(Rh.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Rh),!(n.boundingBox!==null&&Er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=a[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=v,w=y;M<w;M+=3){const E=o.getX(M),b=o.getX(M+1),R=o.getX(M+2);i=Io(this,p,e,n,c,u,f,E,b,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const v=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);i=Io(this,a,e,n,c,u,f,v,y,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=a[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=v,w=y;M<w;M+=3){const E=M,b=M+1,R=M+2;i=Io(this,p,e,n,c,u,f,E,b,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const v=m,y=m+1,M=m+2;i=Io(this,a,e,n,c,u,f,v,y,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function F_(r,e,t,n,i,s,a,o){let l;if(e.side===Ln?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===fr,o),l===null)return null;Do.copy(o),Do.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Do);return c<t.near||c>t.far?null:{distance:c,point:Do.clone(),object:r}}function Io(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,vs),r.getVertexPosition(l,xs),r.getVertexPosition(c,ys);const u=F_(r,e,t,n,vs,xs,ys,Lo);if(u){i&&(Co.fromBufferAttribute(i,o),Ro.fromBufferAttribute(i,l),Po.fromBufferAttribute(i,c),u.uv=xi.getInterpolation(Lo,vs,xs,ys,Co,Ro,Po,new je)),s&&(Co.fromBufferAttribute(s,o),Ro.fromBufferAttribute(s,l),Po.fromBufferAttribute(s,c),u.uv1=xi.getInterpolation(Lo,vs,xs,ys,Co,Ro,Po,new je)),a&&(Lh.fromBufferAttribute(a,o),Dh.fromBufferAttribute(a,l),Ih.fromBufferAttribute(a,c),u.normal=xi.getInterpolation(Lo,vs,xs,ys,Lh,Dh,Ih,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};xi.getNormal(vs,xs,ys,f.normal),u.face=f}return u}class Bt extends qt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(f,2));function _(g,m,p,v,y,M,w,E,b,R,S){const x=M/b,C=w/R,P=M/2,U=w/2,O=E/2,N=b+1,k=R+1;let X=0,V=0;const ae=new H;for(let L=0;L<k;L++){const te=L*C-U;for(let ye=0;ye<N;ye++){const Ce=ye*x-P;ae[g]=Ce*v,ae[m]=te*y,ae[p]=O,c.push(ae.x,ae.y,ae.z),ae[g]=0,ae[m]=0,ae[p]=E>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(ye/b),f.push(1-L/R),X+=1}}for(let L=0;L<R;L++)for(let te=0;te<b;te++){const ye=h+te+N*L,Ce=h+te+N*(L+1),j=h+(te+1)+N*(L+1),Q=h+(te+1)+N*L;l.push(ye,Ce,Q),l.push(Ce,j,Q),V+=6}o.addGroup(d,V,S),d+=V,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yn(r){const e={};for(let t=0;t<r.length;t++){const n=Zs(r[t]);for(const i in n)e[i]=n[i]}return e}function k_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function lm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const B_={clone:Zs,merge:yn};var z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z_,this.fragmentShader=H_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=k_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cm extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new H,Uh=new je,Nh=new je;class Xt extends cm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,Uh,Nh),t.subVectors(Nh,Uh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ia*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ms=-90,Ss=1;class G_ extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt(Ms,Ss,e,t);i.layers=this.layers,this.add(i);const s=new Xt(Ms,Ss,e,t);s.layers=this.layers,this.add(s);const a=new Xt(Ms,Ss,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Ms,Ss,e,t);o.layers=this.layers,this.add(o);const l=new Xt(Ms,Ss,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Ms,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class um extends Dn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V_ extends Zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new um(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Bt(5,5,5),s=new pr({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:or});s.uniforms.tEquirect.value=t;const a=new Ve(i,s),o=t.minFilter;return t.minFilter===kr&&(t.minFilter=fi),new G_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const _c=new H,W_=new H,X_=new Je;class Lr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_c.subVectors(n,t).cross(W_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_c),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||X_.getNormalMatrix(e),i=this.coplanarPoint(_c).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new eo,Uo=new H;class xd{constructor(e=new Lr,t=new Lr,n=new Lr,i=new Lr,s=new Lr,a=new Lr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],v=i[13],y=i[14],M=i[15];if(n[0].setComponents(l-s,h-c,m-d,M-p).normalize(),n[1].setComponents(l+s,h+c,m+d,M+p).normalize(),n[2].setComponents(l+a,h+u,m+_,M+v).normalize(),n[3].setComponents(l-a,h-u,m-_,M-v).normalize(),n[4].setComponents(l-o,h-f,m-g,M-y).normalize(),t===Fi)n[5].setComponents(l+o,h+f,m+g,M+y).normalize();else if(t===yl)n[5].setComponents(o,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Uo.x=i.normal.x>0?e.max.x:e.min.x,Uo.y=i.normal.y>0?e.max.y:e.min.y,Uo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dm(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function q_(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(r.bindBuffer(c,o),f.count===-1&&h.length===0&&r.bufferSubData(c,0,u),h.length!==0){for(let d=0,_=h.length;d<_;d++){const g=h[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}f.count!==-1&&(r.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Ll extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const v=p*h-a;for(let y=0;y<c;y++){const M=y*f-s;_.push(M,-v,0),g.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const y=v+c*p,M=v+c*(p+1),w=v+1+c*(p+1),E=v+1+c*p;d.push(y,M,E),d.push(M,w,E)}this.setIndex(d),this.setAttribute("position",new Rt(_,3)),this.setAttribute("normal",new Rt(g,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.width,e.height,e.widthSegments,e.heightSegments)}}var Y_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,j_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,av=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ov=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_v=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ev=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Av=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ov=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ax=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ey=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ty=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ay=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,py=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_y=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,My=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ey=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Y_,alphahash_pars_fragment:$_,alphamap_fragment:j_,alphamap_pars_fragment:K_,alphatest_fragment:Z_,alphatest_pars_fragment:J_,aomap_fragment:Q_,aomap_pars_fragment:ev,batching_pars_vertex:tv,batching_vertex:nv,begin_vertex:iv,beginnormal_vertex:rv,bsdfs:sv,iridescence_fragment:av,bumpmap_pars_fragment:ov,clipping_planes_fragment:lv,clipping_planes_pars_fragment:cv,clipping_planes_pars_vertex:uv,clipping_planes_vertex:dv,color_fragment:hv,color_pars_fragment:fv,color_pars_vertex:pv,color_vertex:mv,common:gv,cube_uv_reflection_fragment:_v,defaultnormal_vertex:vv,displacementmap_pars_vertex:xv,displacementmap_vertex:yv,emissivemap_fragment:Mv,emissivemap_pars_fragment:Sv,colorspace_fragment:bv,colorspace_pars_fragment:Ev,envmap_fragment:wv,envmap_common_pars_fragment:Tv,envmap_pars_fragment:Av,envmap_pars_vertex:Cv,envmap_physical_pars_fragment:Bv,envmap_vertex:Rv,fog_vertex:Pv,fog_pars_vertex:Lv,fog_fragment:Dv,fog_pars_fragment:Iv,gradientmap_pars_fragment:Uv,lightmap_pars_fragment:Nv,lights_lambert_fragment:Ov,lights_lambert_pars_fragment:Fv,lights_pars_begin:kv,lights_toon_fragment:zv,lights_toon_pars_fragment:Hv,lights_phong_fragment:Gv,lights_phong_pars_fragment:Vv,lights_physical_fragment:Wv,lights_physical_pars_fragment:Xv,lights_fragment_begin:qv,lights_fragment_maps:Yv,lights_fragment_end:$v,logdepthbuf_fragment:jv,logdepthbuf_pars_fragment:Kv,logdepthbuf_pars_vertex:Zv,logdepthbuf_vertex:Jv,map_fragment:Qv,map_pars_fragment:ex,map_particle_fragment:tx,map_particle_pars_fragment:nx,metalnessmap_fragment:ix,metalnessmap_pars_fragment:rx,morphinstance_vertex:sx,morphcolor_vertex:ax,morphnormal_vertex:ox,morphtarget_pars_vertex:lx,morphtarget_vertex:cx,normal_fragment_begin:ux,normal_fragment_maps:dx,normal_pars_fragment:hx,normal_pars_vertex:fx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:gx,clearcoat_normal_fragment_maps:_x,clearcoat_pars_fragment:vx,iridescence_pars_fragment:xx,opaque_fragment:yx,packing:Mx,premultiplied_alpha_fragment:Sx,project_vertex:bx,dithering_fragment:Ex,dithering_pars_fragment:wx,roughnessmap_fragment:Tx,roughnessmap_pars_fragment:Ax,shadowmap_pars_fragment:Cx,shadowmap_pars_vertex:Rx,shadowmap_vertex:Px,shadowmask_pars_fragment:Lx,skinbase_vertex:Dx,skinning_pars_vertex:Ix,skinning_vertex:Ux,skinnormal_vertex:Nx,specularmap_fragment:Ox,specularmap_pars_fragment:Fx,tonemapping_fragment:kx,tonemapping_pars_fragment:Bx,transmission_fragment:zx,transmission_pars_fragment:Hx,uv_pars_fragment:Gx,uv_pars_vertex:Vx,uv_vertex:Wx,worldpos_vertex:Xx,background_vert:qx,background_frag:Yx,backgroundCube_vert:$x,backgroundCube_frag:jx,cube_vert:Kx,cube_frag:Zx,depth_vert:Jx,depth_frag:Qx,distanceRGBA_vert:ey,distanceRGBA_frag:ty,equirect_vert:ny,equirect_frag:iy,linedashed_vert:ry,linedashed_frag:sy,meshbasic_vert:ay,meshbasic_frag:oy,meshlambert_vert:ly,meshlambert_frag:cy,meshmatcap_vert:uy,meshmatcap_frag:dy,meshnormal_vert:hy,meshnormal_frag:fy,meshphong_vert:py,meshphong_frag:my,meshphysical_vert:gy,meshphysical_frag:_y,meshtoon_vert:vy,meshtoon_frag:xy,points_vert:yy,points_frag:My,shadow_vert:Sy,shadow_frag:by,sprite_vert:Ey,sprite_frag:wy},xe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},_i={basic:{uniforms:yn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:yn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:yn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:yn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:yn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:yn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:yn([xe.points,xe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:yn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:yn([xe.common,xe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:yn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:yn([xe.sprite,xe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:yn([xe.common,xe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:yn([xe.lights,xe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};_i.physical={uniforms:yn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const No={r:0,b:0,g:0},Tr=new Ei,Ty=new wt;function Ay(r,e,t,n,i,s,a){const o=new $e(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function g(v){let y=!1;const M=_(v);M===null?p(o,l):M&&M.isColor&&(p(M,1),y=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,y){const M=_(y);M&&(M.isCubeTexture||M.mapping===Cl)?(u===void 0&&(u=new Ve(new Bt(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:Zs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Tr.copy(y.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ty.makeRotationFromEuler(Tr)),u.material.toneMapped=pt.getTransfer(M.colorSpace)!==At,(f!==M||h!==M.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=r.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ve(new Ll(2,2),new pr({name:"BackgroundMaterial",uniforms:Zs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=pt.getTransfer(M.colorSpace)!==At,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(No,lm(r)),n.buffers.color.setClear(No.r,No.g,No.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:g,addToRenderList:m}}function Cy(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(x,C,P,U,O){let N=!1;const k=f(U,P,C);s!==k&&(s=k,c(s.object)),N=d(x,U,P,O),N&&_(x,U,P,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,M(x,C,P,U),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function f(x,C,P){const U=P.wireframe===!0;let O=n[x.id];O===void 0&&(O={},n[x.id]=O);let N=O[C.id];N===void 0&&(N={},O[C.id]=N);let k=N[U];return k===void 0&&(k=h(l()),N[U]=k),k}function h(x){const C=[],P=[],U=[];for(let O=0;O<t;O++)C[O]=0,P[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:U,object:x,attributes:{},index:null}}function d(x,C,P,U){const O=s.attributes,N=C.attributes;let k=0;const X=P.getAttributes();for(const V in X)if(X[V].location>=0){const L=O[V];let te=N[V];if(te===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(te=x.instanceColor)),L===void 0||L.attribute!==te||te&&L.data!==te.data)return!0;k++}return s.attributesNum!==k||s.index!==U}function _(x,C,P,U){const O={},N=C.attributes;let k=0;const X=P.getAttributes();for(const V in X)if(X[V].location>=0){let L=N[V];L===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(L=x.instanceColor));const te={};te.attribute=L,L&&L.data&&(te.data=L.data),O[V]=te,k++}s.attributes=O,s.attributesNum=k,s.index=U}function g(){const x=s.newAttributes;for(let C=0,P=x.length;C<P;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const P=s.newAttributes,U=s.enabledAttributes,O=s.attributeDivisors;P[x]=1,U[x]===0&&(r.enableVertexAttribArray(x),U[x]=1),O[x]!==C&&(r.vertexAttribDivisor(x,C),O[x]=C)}function v(){const x=s.newAttributes,C=s.enabledAttributes;for(let P=0,U=C.length;P<U;P++)C[P]!==x[P]&&(r.disableVertexAttribArray(P),C[P]=0)}function y(x,C,P,U,O,N,k){k===!0?r.vertexAttribIPointer(x,C,P,O,N):r.vertexAttribPointer(x,C,P,U,O,N)}function M(x,C,P,U){g();const O=U.attributes,N=P.getAttributes(),k=C.defaultAttributeValues;for(const X in N){const V=N[X];if(V.location>=0){let ae=O[X];if(ae===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),ae!==void 0){const L=ae.normalized,te=ae.itemSize,ye=e.get(ae);if(ye===void 0)continue;const Ce=ye.buffer,j=ye.type,Q=ye.bytesPerElement,Z=j===r.INT||j===r.UNSIGNED_INT||ae.gpuType===ud;if(ae.isInterleavedBufferAttribute){const ne=ae.data,ce=ne.stride,he=ae.offset;if(ne.isInstancedInterleavedBuffer){for(let Le=0;Le<V.locationSize;Le++)p(V.location+Le,ne.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Le=0;Le<V.locationSize;Le++)m(V.location+Le);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Le=0;Le<V.locationSize;Le++)y(V.location+Le,te/V.locationSize,j,L,ce*Q,(he+te/V.locationSize*Le)*Q,Z)}else{if(ae.isInstancedBufferAttribute){for(let ne=0;ne<V.locationSize;ne++)p(V.location+ne,ae.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ne=0;ne<V.locationSize;ne++)m(V.location+ne);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let ne=0;ne<V.locationSize;ne++)y(V.location+ne,te/V.locationSize,j,L,te*Q,te/V.locationSize*ne*Q,Z)}}else if(k!==void 0){const L=k[X];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(V.location,L);break;case 3:r.vertexAttrib3fv(V.location,L);break;case 4:r.vertexAttrib4fv(V.location,L);break;default:r.vertexAttrib1fv(V.location,L)}}}}v()}function w(){R();for(const x in n){const C=n[x];for(const P in C){const U=C[P];for(const O in U)u(U[O].object),delete U[O];delete C[P]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const P in C){const U=C[P];for(const O in U)u(U[O].object),delete U[O];delete C[P]}delete n[x.id]}function b(x){for(const C in n){const P=n[C];if(P[x.id]===void 0)continue;const U=P[x.id];for(const O in U)u(U[O].object),delete U[O];delete P[x.id]}}function R(){S(),a=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function Ry(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];for(let g=0;g<h.length;g++)t.update(_,n,h[g])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Py(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==pi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const b=E===Za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Gi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Oi&&!b)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:M,maxSamples:w}}function Ly(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Lr,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,y=v*4;let M=p.clippingState||null;l.value=M,M=u(_,h,y,d);for(let w=0;w!==y;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,M=d;y!==g;++y,M+=4)a.copy(f[y]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Dy(r){let e=new WeakMap;function t(a,o){return o===ru?a.mapping=Ys:o===su&&(a.mapping=$s),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ru||o===su)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new V_(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class hm extends cm{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,Oh=[.125,.215,.35,.446,.526,.582],Ur=20,vc=new hm,Fh=new $e;let xc=null,yc=0,Mc=0,Sc=!1;const Dr=(1+Math.sqrt(5))/2,bs=1/Dr,kh=[new H(-Dr,bs,0),new H(Dr,bs,0),new H(-bs,0,Dr),new H(bs,0,Dr),new H(0,Dr,-bs),new H(0,Dr,bs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){xc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xc,yc,Mc),this._renderer.xr.enabled=Sc,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:Za,format:pi,colorSpace:gr,depthBuffer:!1},i=zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iy(s)),this._blurMaterial=Uy(s,e,t)}return i}_compileMaterial(e){const t=new Ve(this._lodPlanes[0],e);this._renderer.compile(t,vc)}_sceneToCubeUV(e,t,n,i){const o=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Fh),u.toneMapping=lr,u.autoClear=!1;const d=new qr({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),_=new Ve(new Bt,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Fh),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;Oo(i,v*y,p>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ys||e.mapping===$s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ve(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Oo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=kh[(i-s-1)%kh.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ve(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ur-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Ur;m>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const p=[];let v=0;for(let b=0;b<Ur;++b){const R=b/g,S=Math.exp(-R*R/2);p.push(S),b===0?v+=S:b<m&&(v+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const M=this._sizeLods[i],w=3*M*(i>y-Ps?i-y+Ps:0),E=4*(this._cubeSize-M);Oo(t,w,E,3*M,2*M),l.setRenderTarget(t),l.render(f,vc)}}function Iy(r){const e=[],t=[],n=[];let i=r;const s=r-Ps+1+Oh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Ps?l=Oh[a-r+Ps-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*d),y=new Float32Array(m*_*d),M=new Float32Array(p*_*d);for(let E=0;E<d;E++){const b=E%3*2/3-1,R=E>2?0:-1,S=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];v.set(S,g*_*E),y.set(h,m*_*E);const x=[E,E,E,E,E,E];M.set(x,p*_*E)}const w=new qt;w.setAttribute("position",new ri(v,g)),w.setAttribute("uv",new ri(y,m)),w.setAttribute("faceIndex",new ri(M,p)),e.push(w),i>Ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zh(r,e,t){const n=new Zr(r,e,t);return n.texture.mapping=Cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Uy(r,e,t){const n=new Float32Array(Ur),i=new H(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Hh(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Gh(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ny(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ru||l===su,u=l===Ys||l===$s;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Bh(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Bh(r)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Oy(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Na("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Fy(r,e,t,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const v=d.array;g=d.version;for(let y=0,M=v.length;y<M;y+=3){const w=v[y+0],E=v[y+1],b=v[y+2];h.push(w,E,E,b,b,w)}}else if(_!==void 0){const v=_.array;g=_.version;for(let y=0,M=v.length/3-1;y<M;y+=3){const w=y+0,E=y+1,b=y+2;h.push(w,E,E,b,b,w)}}else return;const m=new(nm(h)?om:am)(h,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ky(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*a),t.update(d,n,1)}function c(h,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,h*a,_),t.update(d,n,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function f(h,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,g,0,_);let p=0;for(let v=0;v<_;v++)p+=d[v];for(let v=0;v<g.length;v++)t.update(p,n,g[v])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function By(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zy(r,e,t){const n=new WeakMap,i=new Ct;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let x=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var d=x;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let w=o.attributes.position.count*M,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*E*4*f),R=new rm(b,w,E,f);R.type=Oi,R.needsUpdate=!0;const S=M*4;for(let C=0;C<f;C++){const P=p[C],U=v[C],O=y[C],N=w*E*4*C;for(let k=0;k<P.count;k++){const X=k*S;_===!0&&(i.fromBufferAttribute(P,k),b[N+X+0]=i.x,b[N+X+1]=i.y,b[N+X+2]=i.z,b[N+X+3]=0),g===!0&&(i.fromBufferAttribute(U,k),b[N+X+4]=i.x,b[N+X+5]=i.y,b[N+X+6]=i.z,b[N+X+7]=0),m===!0&&(i.fromBufferAttribute(O,k),b[N+X+8]=i.x,b[N+X+9]=i.y,b[N+X+10]=i.z,b[N+X+11]=O.itemSize===4?i.w:1)}}h={count:f,texture:R,size:new je(w,E)},n.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function Hy(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class fm extends Dn{constructor(e,t,n,i,s,a,o,l,c,u=Bs){if(u!==Bs&&u!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Bs&&(n=Kr),n===void 0&&u===Ks&&(n=js),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ni,this.minFilter=l!==void 0?l:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const pm=new Dn,Vh=new fm(1,1),mm=new rm,gm=new A_,_m=new um,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),$h=new Float32Array(4);function ta(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Wh[i];if(s===void 0&&(s=new Float32Array(i),Wh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Qt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Dl(r,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Gy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Vy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2fv(this.addr,e),Qt(t,e)}}function Wy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;r.uniform3fv(this.addr,e),Qt(t,e)}}function Xy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4fv(this.addr,e),Qt(t,e)}}function qy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;$h.set(n),r.uniformMatrix2fv(this.addr,!1,$h),Qt(t,n)}}function Yy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;Yh.set(n),r.uniformMatrix3fv(this.addr,!1,Yh),Qt(t,n)}}function $y(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;qh.set(n),r.uniformMatrix4fv(this.addr,!1,qh),Qt(t,n)}}function jy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ky(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2iv(this.addr,e),Qt(t,e)}}function Zy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3iv(this.addr,e),Qt(t,e)}}function Jy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4iv(this.addr,e),Qt(t,e)}}function Qy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function eM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2uiv(this.addr,e),Qt(t,e)}}function tM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3uiv(this.addr,e),Qt(t,e)}}function nM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4uiv(this.addr,e),Qt(t,e)}}function iM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Vh.compareFunction=tm,s=Vh):s=pm,t.setTexture2D(e||s,i)}function rM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gm,i)}function sM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_m,i)}function aM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||mm,i)}function oM(r){switch(r){case 5126:return Gy;case 35664:return Vy;case 35665:return Wy;case 35666:return Xy;case 35674:return qy;case 35675:return Yy;case 35676:return $y;case 5124:case 35670:return jy;case 35667:case 35671:return Ky;case 35668:case 35672:return Zy;case 35669:case 35673:return Jy;case 5125:return Qy;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return aM}}function lM(r,e){r.uniform1fv(this.addr,e)}function cM(r,e){const t=ta(e,this.size,2);r.uniform2fv(this.addr,t)}function uM(r,e){const t=ta(e,this.size,3);r.uniform3fv(this.addr,t)}function dM(r,e){const t=ta(e,this.size,4);r.uniform4fv(this.addr,t)}function hM(r,e){const t=ta(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function fM(r,e){const t=ta(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function pM(r,e){const t=ta(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function mM(r,e){r.uniform1iv(this.addr,e)}function gM(r,e){r.uniform2iv(this.addr,e)}function _M(r,e){r.uniform3iv(this.addr,e)}function vM(r,e){r.uniform4iv(this.addr,e)}function xM(r,e){r.uniform1uiv(this.addr,e)}function yM(r,e){r.uniform2uiv(this.addr,e)}function MM(r,e){r.uniform3uiv(this.addr,e)}function SM(r,e){r.uniform4uiv(this.addr,e)}function bM(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||pm,s[a])}function EM(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||gm,s[a])}function wM(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||_m,s[a])}function TM(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);Jt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||mm,s[a])}function AM(r){switch(r){case 5126:return lM;case 35664:return cM;case 35665:return uM;case 35666:return dM;case 35674:return hM;case 35675:return fM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return _M;case 35669:case 35673:return vM;case 5125:return xM;case 36294:return yM;case 36295:return MM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return TM}}class CM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oM(t.type)}}class RM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AM(t.type)}}class PM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const bc=/(\w+)(\])?(\[|\.)?/g;function jh(r,e){r.seq.push(e),r.map[e.id]=e}function LM(r,e,t){const n=r.name,i=n.length;for(bc.lastIndex=0;;){const s=bc.exec(n),a=bc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){jh(t,c===void 0?new CM(o,r,e):new RM(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new PM(o),jh(t,f)),t=f}}}class nl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);LM(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Kh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const DM=37297;let IM=0;function UM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function NM(r){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(r);let n;switch(e===t?n="":e===xl&&t===vl?n="LinearDisplayP3ToLinearSRGB":e===vl&&t===xl&&(n="LinearSRGBToLinearDisplayP3"),r){case gr:case Rl:return[n,"LinearTransferOETF"];case ui:case gd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Zh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+UM(r.getShaderSource(e),a)}else return i}function OM(r,e){const t=NM(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function FM(r,e){let t;switch(e){case z0:t="Linear";break;case H0:t="Reinhard";break;case G0:t="Cineon";break;case V0:t="ACESFilmic";break;case X0:t="AgX";break;case q0:t="Neutral";break;case W0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fo=new H;function kM(){pt.getLuminanceCoefficients(Fo);const r=Fo.x.toFixed(4),e=Fo.y.toFixed(4),t=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function zM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function HM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function xa(r){return r!==""}function Jh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(r){return r.replace(GM,WM)}const VM=new Map;function WM(r,e){let t=Ze[e];if(t===void 0){const n=VM.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uu(t)}const XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(r){return r.replace(XM,qM)}function qM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function tf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function YM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===h0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function $M(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ys:case $s:e="ENVMAP_TYPE_CUBE";break;case Cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function KM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Gp:e="ENVMAP_BLENDING_MULTIPLY";break;case k0:e="ENVMAP_BLENDING_MIX";break;case B0:e="ENVMAP_BLENDING_ADD";break}return e}function ZM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function JM(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=YM(t),c=$M(t),u=jM(t),f=KM(t),h=ZM(t),d=BM(t),_=zM(s),g=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xa).join(`
`),p.length>0&&(p+=`
`)):(m=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),p=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?Ze.tonemapping_pars_fragment:"",t.toneMapping!==lr?FM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,OM("linearToOutputTexel",t.outputColorSpace),kM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),a=Uu(a),a=Jh(a,t),a=Qh(a,t),o=Uu(o),o=Jh(o,t),o=Qh(o,t),a=ef(a),o=ef(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+a,M=v+p+o,w=Kh(i,i.VERTEX_SHADER,y),E=Kh(i,i.FRAGMENT_SHADER,M);i.attachShader(g,w),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(C){if(r.debug.checkShaderErrors){const P=i.getProgramInfoLog(g).trim(),U=i.getShaderInfoLog(w).trim(),O=i.getShaderInfoLog(E).trim();let N=!0,k=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,w,E);else{const X=Zh(i,w,"vertex"),V=Zh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+X+`
`+V)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(U===""||O==="")&&(k=!1);k&&(C.diagnostics={runnable:N,programLog:P,vertexShader:{log:U,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(w),i.deleteShader(E),R=new nl(i,g),S=HM(i,g)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,DM)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=E,this}let QM=0;class eS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tS(e),t.set(e,n)),n}}class tS{constructor(e){this.id=QM++,this.code=e,this.usedTimes=0}}function nS(r,e,t,n,i,s,a){const o=new vd,l=new eS,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,C,P,U){const O=P.fog,N=U.geometry,k=S.isMeshStandardMaterial?P.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),V=X&&X.mapping===Cl?X.image.height:null,ae=_[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const L=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,te=L!==void 0?L.length:0;let ye=0;N.morphAttributes.position!==void 0&&(ye=1),N.morphAttributes.normal!==void 0&&(ye=2),N.morphAttributes.color!==void 0&&(ye=3);let Ce,j,Q,Z;if(ae){const rt=_i[ae];Ce=rt.vertexShader,j=rt.fragmentShader}else Ce=S.vertexShader,j=S.fragmentShader,l.update(S),Q=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);const ne=r.getRenderTarget(),ce=U.isInstancedMesh===!0,he=U.isBatchedMesh===!0,Le=!!S.map,We=!!S.matcap,I=!!X,Se=!!S.aoMap,De=!!S.lightMap,Fe=!!S.bumpMap,Me=!!S.normalMap,$=!!S.displacementMap,Te=!!S.emissiveMap,Ue=!!S.metalnessMap,D=!!S.roughnessMap,T=S.anisotropy>0,B=S.clearcoat>0,W=S.dispersion>0,q=S.iridescence>0,J=S.sheen>0,me=S.transmission>0,ee=T&&!!S.anisotropyMap,de=B&&!!S.clearcoatMap,ke=B&&!!S.clearcoatNormalMap,le=B&&!!S.clearcoatRoughnessMap,ve=q&&!!S.iridescenceMap,Ne=q&&!!S.iridescenceThicknessMap,ze=J&&!!S.sheenColorMap,pe=J&&!!S.sheenRoughnessMap,Ge=!!S.specularMap,Ye=!!S.specularColorMap,ut=!!S.specularIntensityMap,z=me&&!!S.transmissionMap,ie=me&&!!S.thicknessMap,re=!!S.gradientMap,se=!!S.alphaMap,ue=S.alphaTest>0,Ie=!!S.alphaHash,Ke=!!S.extensions;let xt=lr;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(xt=r.toneMapping);const yt={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:Ce,fragmentShader:j,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:he,batchingColor:he&&U._colorsTexture!==null,instancing:ce,instancingColor:ce&&U.instanceColor!==null,instancingMorph:ce&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:gr,alphaToCoverage:!!S.alphaToCoverage,map:Le,matcap:We,envMap:I,envMapMode:I&&X.mapping,envMapCubeUVHeight:V,aoMap:Se,lightMap:De,bumpMap:Fe,normalMap:Me,displacementMap:h&&$,emissiveMap:Te,normalMapObjectSpace:Me&&S.normalMapType===K0,normalMapTangentSpace:Me&&S.normalMapType===em,metalnessMap:Ue,roughnessMap:D,anisotropy:T,anisotropyMap:ee,clearcoat:B,clearcoatMap:de,clearcoatNormalMap:ke,clearcoatRoughnessMap:le,dispersion:W,iridescence:q,iridescenceMap:ve,iridescenceThicknessMap:Ne,sheen:J,sheenColorMap:ze,sheenRoughnessMap:pe,specularMap:Ge,specularColorMap:Ye,specularIntensityMap:ut,transmission:me,transmissionMap:z,thicknessMap:ie,gradientMap:re,opaque:S.transparent===!1&&S.blending===ks&&S.alphaToCoverage===!1,alphaMap:se,alphaTest:ue,alphaHash:Ie,combine:S.combine,mapUv:Le&&g(S.map.channel),aoMapUv:Se&&g(S.aoMap.channel),lightMapUv:De&&g(S.lightMap.channel),bumpMapUv:Fe&&g(S.bumpMap.channel),normalMapUv:Me&&g(S.normalMap.channel),displacementMapUv:$&&g(S.displacementMap.channel),emissiveMapUv:Te&&g(S.emissiveMap.channel),metalnessMapUv:Ue&&g(S.metalnessMap.channel),roughnessMapUv:D&&g(S.roughnessMap.channel),anisotropyMapUv:ee&&g(S.anisotropyMap.channel),clearcoatMapUv:de&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ke&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(S.sheenRoughnessMap.channel),specularMapUv:Ge&&g(S.specularMap.channel),specularColorMapUv:Ye&&g(S.specularColorMap.channel),specularIntensityMapUv:ut&&g(S.specularIntensityMap.channel),transmissionMapUv:z&&g(S.transmissionMap.channel),thicknessMapUv:ie&&g(S.thicknessMap.channel),alphaMapUv:se&&g(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Me||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(Le||se),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ye,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:xt,decodeVideoTexture:Le&&S.map.isVideoTexture===!0&&pt.getTransfer(S.map.colorSpace)===At,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hi,flipSided:S.side===Ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ke&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&S.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(v(x,S),y(x,S),x.push(r.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function v(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function y(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),S.push(o.mask)}function M(S){const x=_[S.type];let C;if(x){const P=_i[x];C=B_.clone(P.uniforms)}else C=S.uniforms;return C}function w(S,x){let C;for(let P=0,U=u.length;P<U;P++){const O=u[P];if(O.cacheKey===x){C=O,++C.usedTimes;break}}return C===void 0&&(C=new JM(r,x,S,s),u.push(C)),C}function E(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:E,releaseShaderCache:b,programs:u,dispose:R}}function iS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function rS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,d,_,g,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function o(f,h,d,_,g,m){const p=a(f,h,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(f,h,d,_,g,m){const p=a(f,h,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||rS),n.length>1&&n.sort(h||nf),i.length>1&&i.sort(h||nf)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function sS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new rf,r.set(n,[a])):i>=s.length?(a=new rf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function aS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new $e};break;case"SpotLight":t={position:new H,direction:new H,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function oS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let lS=0;function cS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function uS(r){const e=new aS,t=oS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const i=new H,s=new wt,a=new wt;function o(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,v=0,y=0,M=0,w=0,E=0,b=0;c.sort(cS);for(let S=0,x=c.length;S<x;S++){const C=c[S],P=C.color,U=C.intensity,O=C.distance,N=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=P.r*U,f+=P.g*U,h+=P.b*U;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],U);b++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,V=t.get(C);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=C.shadow.matrix,v++}n.directional[d]=k,d++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(P).multiplyScalar(U),k.distance=O,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[g]=k;const X=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,X.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[g]=X.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=N,M++}g++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(P).multiplyScalar(U),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=k,m++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const X=C.shadow,V=t.get(C);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=N,n.pointShadowMatrix[_]=C.shadow.matrix,y++}n.point[_]=k,_++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(U),k.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[p]=k,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const R=n.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==y||R.numSpotShadows!==M||R.numSpotMaps!==w||R.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=y,R.numSpotShadows=M,R.numSpotMaps=w,R.numLightProbes=b,n.version=lS++)}function l(c,u){let f=0,h=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(y.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function sf(r){const e=new uS(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function dS(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new sf(r),e.set(i,[o])):s>=a.length?(o=new sf(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class hS extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fS extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gS(r,e,t){let n=new xd;const i=new je,s=new je,a=new Ct,o=new hS({depthPacking:j0}),l=new fS,c={},u=t.maxTextureSize,f={[fr]:Ln,[Ln]:fr,[hi]:hi},h=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:pS,fragmentShader:mS}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new qt;_.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ve(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hp;let p=this.type;this.render=function(E,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=r.getRenderTarget(),x=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),P=r.state;P.setBlending(or),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=p!==Pi&&this.type===Pi,O=p===Pi&&this.type!==Pi;for(let N=0,k=E.length;N<k;N++){const X=E[N],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ae=V.getFrameExtents();if(i.multiply(ae),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ae.x),i.x=s.x*ae.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ae.y),i.y=s.y*ae.y,V.mapSize.y=s.y)),V.map===null||U===!0||O===!0){const te=this.type!==Pi?{minFilter:ni,magFilter:ni}:{};V.map!==null&&V.map.dispose(),V.map=new Zr(i.x,i.y,te),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const L=V.getViewportCount();for(let te=0;te<L;te++){const ye=V.getViewport(te);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),P.viewport(a),V.updateMatrices(X,te),n=V.getFrustum(),M(b,R,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Pi&&v(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,x,C)};function v(E,b){const R=e.update(g);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Zr(i.x,i.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(b,null,R,h,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(b,null,R,d,g,null)}function y(E,b,R,S){let x=null;const C=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)x=C;else if(x=R.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const P=x.uuid,U=b.uuid;let O=c[P];O===void 0&&(O={},c[P]=O);let N=O[U];N===void 0&&(N=x.clone(),O[U]=N,b.addEventListener("dispose",w)),x=N}if(x.visible=b.visible,x.wireframe=b.wireframe,S===Pi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const P=r.properties.get(x);P.light=R}return x}function M(E,b,R,S,x){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Pi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const U=e.update(E),O=E.material;if(Array.isArray(O)){const N=U.groups;for(let k=0,X=N.length;k<X;k++){const V=N[k],ae=O[V.materialIndex];if(ae&&ae.visible){const L=y(E,ae,S,x);E.onBeforeShadow(r,E,b,R,U,L,V),r.renderBufferDirect(R,null,U,L,E,V),E.onAfterShadow(r,E,b,R,U,L,V)}}}else if(O.visible){const N=y(E,O,S,x);E.onBeforeShadow(r,E,b,R,U,N,null),r.renderBufferDirect(R,null,U,N,E,null),E.onAfterShadow(r,E,b,R,U,N,null)}}const P=E.children;for(let U=0,O=P.length;U<O;U++)M(P[U],b,R,S,x)}function w(E){E.target.removeEventListener("dispose",w);for(const R in c){const S=c[R],x=E.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}function _S(r){function e(){let z=!1;const ie=new Ct;let re=null;const se=new Ct(0,0,0,0);return{setMask:function(ue){re!==ue&&!z&&(r.colorMask(ue,ue,ue,ue),re=ue)},setLocked:function(ue){z=ue},setClear:function(ue,Ie,Ke,xt,yt){yt===!0&&(ue*=xt,Ie*=xt,Ke*=xt),ie.set(ue,Ie,Ke,xt),se.equals(ie)===!1&&(r.clearColor(ue,Ie,Ke,xt),se.copy(ie))},reset:function(){z=!1,re=null,se.set(-1,0,0,0)}}}function t(){let z=!1,ie=null,re=null,se=null;return{setTest:function(ue){ue?Z(r.DEPTH_TEST):ne(r.DEPTH_TEST)},setMask:function(ue){ie!==ue&&!z&&(r.depthMask(ue),ie=ue)},setFunc:function(ue){if(re!==ue){switch(ue){case L0:r.depthFunc(r.NEVER);break;case D0:r.depthFunc(r.ALWAYS);break;case I0:r.depthFunc(r.LESS);break;case gl:r.depthFunc(r.LEQUAL);break;case U0:r.depthFunc(r.EQUAL);break;case N0:r.depthFunc(r.GEQUAL);break;case O0:r.depthFunc(r.GREATER);break;case F0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}re=ue}},setLocked:function(ue){z=ue},setClear:function(ue){se!==ue&&(r.clearDepth(ue),se=ue)},reset:function(){z=!1,ie=null,re=null,se=null}}}function n(){let z=!1,ie=null,re=null,se=null,ue=null,Ie=null,Ke=null,xt=null,yt=null;return{setTest:function(rt){z||(rt?Z(r.STENCIL_TEST):ne(r.STENCIL_TEST))},setMask:function(rt){ie!==rt&&!z&&(r.stencilMask(rt),ie=rt)},setFunc:function(rt,He,Re){(re!==rt||se!==He||ue!==Re)&&(r.stencilFunc(rt,He,Re),re=rt,se=He,ue=Re)},setOp:function(rt,He,Re){(Ie!==rt||Ke!==He||xt!==Re)&&(r.stencilOp(rt,He,Re),Ie=rt,Ke=He,xt=Re)},setLocked:function(rt){z=rt},setClear:function(rt){yt!==rt&&(r.clearStencil(rt),yt=rt)},reset:function(){z=!1,ie=null,re=null,se=null,ue=null,Ie=null,Ke=null,xt=null,yt=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,m=null,p=null,v=null,y=null,M=null,w=null,E=new $e(0,0,0),b=0,R=!1,S=null,x=null,C=null,P=null,U=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),N=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),N=k>=2);let V=null,ae={};const L=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),ye=new Ct().fromArray(L),Ce=new Ct().fromArray(te);function j(z,ie,re,se){const ue=new Uint8Array(4),Ie=r.createTexture();r.bindTexture(z,Ie),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ke=0;Ke<re;Ke++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,se,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(ie+Ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return Ie}const Q={};Q[r.TEXTURE_2D]=j(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=j(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=j(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=j(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Z(r.DEPTH_TEST),s.setFunc(gl),Fe(!1),Me(ch),Z(r.CULL_FACE),Se(or);function Z(z){c[z]!==!0&&(r.enable(z),c[z]=!0)}function ne(z){c[z]!==!1&&(r.disable(z),c[z]=!1)}function ce(z,ie){return u[z]!==ie?(r.bindFramebuffer(z,ie),u[z]=ie,z===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ie),z===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function he(z,ie){let re=h,se=!1;if(z){re=f.get(ie),re===void 0&&(re=[],f.set(ie,re));const ue=z.textures;if(re.length!==ue.length||re[0]!==r.COLOR_ATTACHMENT0){for(let Ie=0,Ke=ue.length;Ie<Ke;Ie++)re[Ie]=r.COLOR_ATTACHMENT0+Ie;re.length=ue.length,se=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,se=!0);se&&r.drawBuffers(re)}function Le(z){return d!==z?(r.useProgram(z),d=z,!0):!1}const We={[Ir]:r.FUNC_ADD,[p0]:r.FUNC_SUBTRACT,[m0]:r.FUNC_REVERSE_SUBTRACT};We[g0]=r.MIN,We[_0]=r.MAX;const I={[v0]:r.ZERO,[x0]:r.ONE,[y0]:r.SRC_COLOR,[nu]:r.SRC_ALPHA,[T0]:r.SRC_ALPHA_SATURATE,[E0]:r.DST_COLOR,[S0]:r.DST_ALPHA,[M0]:r.ONE_MINUS_SRC_COLOR,[iu]:r.ONE_MINUS_SRC_ALPHA,[w0]:r.ONE_MINUS_DST_COLOR,[b0]:r.ONE_MINUS_DST_ALPHA,[A0]:r.CONSTANT_COLOR,[C0]:r.ONE_MINUS_CONSTANT_COLOR,[R0]:r.CONSTANT_ALPHA,[P0]:r.ONE_MINUS_CONSTANT_ALPHA};function Se(z,ie,re,se,ue,Ie,Ke,xt,yt,rt){if(z===or){_===!0&&(ne(r.BLEND),_=!1);return}if(_===!1&&(Z(r.BLEND),_=!0),z!==f0){if(z!==g||rt!==R){if((m!==Ir||y!==Ir)&&(r.blendEquation(r.FUNC_ADD),m=Ir,y=Ir),rt)switch(z){case ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case uh:r.blendFunc(r.ONE,r.ONE);break;case dh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case uh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case dh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}p=null,v=null,M=null,w=null,E.set(0,0,0),b=0,g=z,R=rt}return}ue=ue||ie,Ie=Ie||re,Ke=Ke||se,(ie!==m||ue!==y)&&(r.blendEquationSeparate(We[ie],We[ue]),m=ie,y=ue),(re!==p||se!==v||Ie!==M||Ke!==w)&&(r.blendFuncSeparate(I[re],I[se],I[Ie],I[Ke]),p=re,v=se,M=Ie,w=Ke),(xt.equals(E)===!1||yt!==b)&&(r.blendColor(xt.r,xt.g,xt.b,yt),E.copy(xt),b=yt),g=z,R=!1}function De(z,ie){z.side===hi?ne(r.CULL_FACE):Z(r.CULL_FACE);let re=z.side===Ln;ie&&(re=!re),Fe(re),z.blending===ks&&z.transparent===!1?Se(or):Se(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),i.setMask(z.colorWrite);const se=z.stencilWrite;a.setTest(se),se&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Te(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(z){S!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),S=z)}function Me(z){z!==u0?(Z(r.CULL_FACE),z!==x&&(z===ch?r.cullFace(r.BACK):z===d0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ne(r.CULL_FACE),x=z}function $(z){z!==C&&(N&&r.lineWidth(z),C=z)}function Te(z,ie,re){z?(Z(r.POLYGON_OFFSET_FILL),(P!==ie||U!==re)&&(r.polygonOffset(ie,re),P=ie,U=re)):ne(r.POLYGON_OFFSET_FILL)}function Ue(z){z?Z(r.SCISSOR_TEST):ne(r.SCISSOR_TEST)}function D(z){z===void 0&&(z=r.TEXTURE0+O-1),V!==z&&(r.activeTexture(z),V=z)}function T(z,ie,re){re===void 0&&(V===null?re=r.TEXTURE0+O-1:re=V);let se=ae[re];se===void 0&&(se={type:void 0,texture:void 0},ae[re]=se),(se.type!==z||se.texture!==ie)&&(V!==re&&(r.activeTexture(re),V=re),r.bindTexture(z,ie||Q[z]),se.type=z,se.texture=ie)}function B(){const z=ae[V];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function W(){try{r.compressedTexImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{r.texSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(){try{r.texStorage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{r.texStorage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{r.texImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(z){ye.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),ye.copy(z))}function pe(z){Ce.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Ce.copy(z))}function Ge(z,ie){let re=l.get(ie);re===void 0&&(re=new WeakMap,l.set(ie,re));let se=re.get(z);se===void 0&&(se=r.getUniformBlockIndex(ie,z.name),re.set(z,se))}function Ye(z,ie){const se=l.get(ie).get(z);o.get(ie)!==se&&(r.uniformBlockBinding(ie,se,z.__bindingPointIndex),o.set(ie,se))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,ae={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,m=null,p=null,v=null,y=null,M=null,w=null,E=new $e(0,0,0),b=0,R=!1,S=null,x=null,C=null,P=null,U=null,ye.set(0,0,r.canvas.width,r.canvas.height),Ce.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:Z,disable:ne,bindFramebuffer:ce,drawBuffers:he,useProgram:Le,setBlending:Se,setMaterial:De,setFlipSided:Fe,setCullFace:Me,setLineWidth:$,setPolygonOffset:Te,setScissorTest:Ue,activeTexture:D,bindTexture:T,unbindTexture:B,compressedTexImage2D:W,compressedTexImage3D:q,texImage2D:ve,texImage3D:Ne,updateUBOMapping:Ge,uniformBlockBinding:Ye,texStorage2D:ke,texStorage3D:le,texSubImage2D:J,texSubImage3D:me,compressedTexSubImage2D:ee,compressedTexSubImage3D:de,scissor:ze,viewport:pe,reset:ut}}function af(r,e,t,n){const i=vS(n);switch(t){case Yp:return r*e;case jp:return r*e;case Kp:return r*e*2;case Zp:return r*e/i.components*i.byteLength;case fd:return r*e/i.components*i.byteLength;case Jp:return r*e*2/i.components*i.byteLength;case pd:return r*e*2/i.components*i.byteLength;case $p:return r*e*3/i.components*i.byteLength;case pi:return r*e*4/i.components*i.byteLength;case md:return r*e*4/i.components*i.byteLength;case Zo:case Jo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qo:case el:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cu:case du:return Math.max(r,16)*Math.max(e,8)/4;case lu:case uu:return Math.max(r,8)*Math.max(e,8)/2;case hu:case fu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _u:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case vu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Su:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case bu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case wu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Au:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case tl:case Ru:case Pu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Qp:case Lu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Du:case Iu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vS(r){switch(r){case Gi:case Wp:return{byteLength:1,components:1};case qa:case Xp:case Za:return{byteLength:2,components:1};case dd:case hd:return{byteLength:2,components:4};case Kr:case ud:case Oi:return{byteLength:4,components:1};case qp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function xS(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,T){return d?new OffscreenCanvas(D,T):Ml("canvas")}function g(D,T,B){let W=1;const q=Ue(D);if((q.width>B||q.height>B)&&(W=B/Math.max(q.width,q.height)),W<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const J=Math.floor(W*q.width),me=Math.floor(W*q.height);f===void 0&&(f=_(J,me));const ee=T?_(J,me):f;return ee.width=J,ee.height=me,ee.getContext("2d").drawImage(D,0,0,J,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+J+"x"+me+")."),ee}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==ni&&D.minFilter!==fi}function p(D){r.generateMipmap(D)}function v(D,T,B,W,q=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let J=T;if(T===r.RED&&(B===r.FLOAT&&(J=r.R32F),B===r.HALF_FLOAT&&(J=r.R16F),B===r.UNSIGNED_BYTE&&(J=r.R8)),T===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(J=r.R8UI),B===r.UNSIGNED_SHORT&&(J=r.R16UI),B===r.UNSIGNED_INT&&(J=r.R32UI),B===r.BYTE&&(J=r.R8I),B===r.SHORT&&(J=r.R16I),B===r.INT&&(J=r.R32I)),T===r.RG&&(B===r.FLOAT&&(J=r.RG32F),B===r.HALF_FLOAT&&(J=r.RG16F),B===r.UNSIGNED_BYTE&&(J=r.RG8)),T===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(J=r.RG8UI),B===r.UNSIGNED_SHORT&&(J=r.RG16UI),B===r.UNSIGNED_INT&&(J=r.RG32UI),B===r.BYTE&&(J=r.RG8I),B===r.SHORT&&(J=r.RG16I),B===r.INT&&(J=r.RG32I)),T===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),T===r.RGBA){const me=q?_l:pt.getTransfer(W);B===r.FLOAT&&(J=r.RGBA32F),B===r.HALF_FLOAT&&(J=r.RGBA16F),B===r.UNSIGNED_BYTE&&(J=me===At?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(D,T){let B;return D?T===null||T===Kr||T===js?B=r.DEPTH24_STENCIL8:T===Oi?B=r.DEPTH32F_STENCIL8:T===qa&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Kr||T===js?B=r.DEPTH_COMPONENT24:T===Oi?B=r.DEPTH_COMPONENT32F:T===qa&&(B=r.DEPTH_COMPONENT16),B}function M(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==ni&&D.minFilter!==fi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function w(D){const T=D.target;T.removeEventListener("dispose",w),b(T),T.isVideoTexture&&u.delete(T)}function E(D){const T=D.target;T.removeEventListener("dispose",E),S(T)}function b(D){const T=n.get(D);if(T.__webglInit===void 0)return;const B=D.source,W=h.get(B);if(W){const q=W[T.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(D),Object.keys(W).length===0&&h.delete(B)}n.remove(D)}function R(D){const T=n.get(D);r.deleteTexture(T.__webglTexture);const B=D.source,W=h.get(B);delete W[T.__cacheKey],a.memory.textures--}function S(D){const T=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(T.__webglFramebuffer[W]))for(let q=0;q<T.__webglFramebuffer[W].length;q++)r.deleteFramebuffer(T.__webglFramebuffer[W][q]);else r.deleteFramebuffer(T.__webglFramebuffer[W]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[W])}else{if(Array.isArray(T.__webglFramebuffer))for(let W=0;W<T.__webglFramebuffer.length;W++)r.deleteFramebuffer(T.__webglFramebuffer[W]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let W=0;W<T.__webglColorRenderbuffer.length;W++)T.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[W]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const B=D.textures;for(let W=0,q=B.length;W<q;W++){const J=n.get(B[W]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(B[W])}n.remove(D)}let x=0;function C(){x=0}function P(){const D=x;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),x+=1,D}function U(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function O(D,T){const B=n.get(D);if(D.isVideoTexture&&$(D),D.isRenderTargetTexture===!1&&D.version>0&&B.__version!==D.version){const W=D.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(B,D,T);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+T)}function N(D,T){const B=n.get(D);if(D.version>0&&B.__version!==D.version){Ce(B,D,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+T)}function k(D,T){const B=n.get(D);if(D.version>0&&B.__version!==D.version){Ce(B,D,T);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+T)}function X(D,T){const B=n.get(D);if(D.version>0&&B.__version!==D.version){j(B,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+T)}const V={[au]:r.REPEAT,[Fr]:r.CLAMP_TO_EDGE,[ou]:r.MIRRORED_REPEAT},ae={[ni]:r.NEAREST,[Y0]:r.NEAREST_MIPMAP_NEAREST,[go]:r.NEAREST_MIPMAP_LINEAR,[fi]:r.LINEAR,[Ql]:r.LINEAR_MIPMAP_NEAREST,[kr]:r.LINEAR_MIPMAP_LINEAR},L={[Z0]:r.NEVER,[i_]:r.ALWAYS,[J0]:r.LESS,[tm]:r.LEQUAL,[Q0]:r.EQUAL,[n_]:r.GEQUAL,[e_]:r.GREATER,[t_]:r.NOTEQUAL};function te(D,T){if(T.type===Oi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===fi||T.magFilter===Ql||T.magFilter===go||T.magFilter===kr||T.minFilter===fi||T.minFilter===Ql||T.minFilter===go||T.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,V[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,V[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,V[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ae[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ae[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,L[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ni||T.minFilter!==go&&T.minFilter!==kr||T.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ye(D,T){let B=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",w));const W=T.source;let q=h.get(W);q===void 0&&(q={},h.set(W,q));const J=U(T);if(J!==D.__cacheKey){q[J]===void 0&&(q[J]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),q[J].usedTimes++;const me=q[D.__cacheKey];me!==void 0&&(q[D.__cacheKey].usedTimes--,me.usedTimes===0&&R(T)),D.__cacheKey=J,D.__webglTexture=q[J].texture}return B}function Ce(D,T,B){let W=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(W=r.TEXTURE_3D);const q=ye(D,T),J=T.source;t.bindTexture(W,D.__webglTexture,r.TEXTURE0+B);const me=n.get(J);if(J.version!==me.__version||q===!0){t.activeTexture(r.TEXTURE0+B);const ee=pt.getPrimaries(pt.workingColorSpace),de=T.colorSpace===Ji?null:pt.getPrimaries(T.colorSpace),ke=T.colorSpace===Ji||ee===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let le=g(T.image,!1,i.maxTextureSize);le=Te(T,le);const ve=s.convert(T.format,T.colorSpace),Ne=s.convert(T.type);let ze=v(T.internalFormat,ve,Ne,T.colorSpace,T.isVideoTexture);te(W,T);let pe;const Ge=T.mipmaps,Ye=T.isVideoTexture!==!0,ut=me.__version===void 0||q===!0,z=J.dataReady,ie=M(T,le);if(T.isDepthTexture)ze=y(T.format===Ks,T.type),ut&&(Ye?t.texStorage2D(r.TEXTURE_2D,1,ze,le.width,le.height):t.texImage2D(r.TEXTURE_2D,0,ze,le.width,le.height,0,ve,Ne,null));else if(T.isDataTexture)if(Ge.length>0){Ye&&ut&&t.texStorage2D(r.TEXTURE_2D,ie,ze,Ge[0].width,Ge[0].height);for(let re=0,se=Ge.length;re<se;re++)pe=Ge[re],Ye?z&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,ve,Ne,pe.data):t.texImage2D(r.TEXTURE_2D,re,ze,pe.width,pe.height,0,ve,Ne,pe.data);T.generateMipmaps=!1}else Ye?(ut&&t.texStorage2D(r.TEXTURE_2D,ie,ze,le.width,le.height),z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le.width,le.height,ve,Ne,le.data)):t.texImage2D(r.TEXTURE_2D,0,ze,le.width,le.height,0,ve,Ne,le.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ye&&ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,ze,Ge[0].width,Ge[0].height,le.depth);for(let re=0,se=Ge.length;re<se;re++)if(pe=Ge[re],T.format!==pi)if(ve!==null)if(Ye){if(z)if(T.layerUpdates.size>0){const ue=af(pe.width,pe.height,T.format,T.type);for(const Ie of T.layerUpdates){const Ke=pe.data.subarray(Ie*ue/pe.data.BYTES_PER_ELEMENT,(Ie+1)*ue/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,Ie,pe.width,pe.height,1,ve,Ke,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,le.depth,ve,pe.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,ze,pe.width,pe.height,le.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?z&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,le.depth,ve,Ne,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,ze,pe.width,pe.height,le.depth,0,ve,Ne,pe.data)}else{Ye&&ut&&t.texStorage2D(r.TEXTURE_2D,ie,ze,Ge[0].width,Ge[0].height);for(let re=0,se=Ge.length;re<se;re++)pe=Ge[re],T.format!==pi?ve!==null?Ye?z&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,ve,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,re,ze,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?z&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,ve,Ne,pe.data):t.texImage2D(r.TEXTURE_2D,re,ze,pe.width,pe.height,0,ve,Ne,pe.data)}else if(T.isDataArrayTexture)if(Ye){if(ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,ze,le.width,le.height,le.depth),z)if(T.layerUpdates.size>0){const re=af(le.width,le.height,T.format,T.type);for(const se of T.layerUpdates){const ue=le.data.subarray(se*re/le.data.BYTES_PER_ELEMENT,(se+1)*re/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,se,le.width,le.height,1,ve,Ne,ue)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ve,Ne,le.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,le.width,le.height,le.depth,0,ve,Ne,le.data);else if(T.isData3DTexture)Ye?(ut&&t.texStorage3D(r.TEXTURE_3D,ie,ze,le.width,le.height,le.depth),z&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ve,Ne,le.data)):t.texImage3D(r.TEXTURE_3D,0,ze,le.width,le.height,le.depth,0,ve,Ne,le.data);else if(T.isFramebufferTexture){if(ut)if(Ye)t.texStorage2D(r.TEXTURE_2D,ie,ze,le.width,le.height);else{let re=le.width,se=le.height;for(let ue=0;ue<ie;ue++)t.texImage2D(r.TEXTURE_2D,ue,ze,re,se,0,ve,Ne,null),re>>=1,se>>=1}}else if(Ge.length>0){if(Ye&&ut){const re=Ue(Ge[0]);t.texStorage2D(r.TEXTURE_2D,ie,ze,re.width,re.height)}for(let re=0,se=Ge.length;re<se;re++)pe=Ge[re],Ye?z&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ve,Ne,pe):t.texImage2D(r.TEXTURE_2D,re,ze,ve,Ne,pe);T.generateMipmaps=!1}else if(Ye){if(ut){const re=Ue(le);t.texStorage2D(r.TEXTURE_2D,ie,ze,re.width,re.height)}z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,Ne,le)}else t.texImage2D(r.TEXTURE_2D,0,ze,ve,Ne,le);m(T)&&p(W),me.__version=J.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function j(D,T,B){if(T.image.length!==6)return;const W=ye(D,T),q=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+B);const J=n.get(q);if(q.version!==J.__version||W===!0){t.activeTexture(r.TEXTURE0+B);const me=pt.getPrimaries(pt.workingColorSpace),ee=T.colorSpace===Ji?null:pt.getPrimaries(T.colorSpace),de=T.colorSpace===Ji||me===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ke=T.isCompressedTexture||T.image[0].isCompressedTexture,le=T.image[0]&&T.image[0].isDataTexture,ve=[];for(let se=0;se<6;se++)!ke&&!le?ve[se]=g(T.image[se],!0,i.maxCubemapSize):ve[se]=le?T.image[se].image:T.image[se],ve[se]=Te(T,ve[se]);const Ne=ve[0],ze=s.convert(T.format,T.colorSpace),pe=s.convert(T.type),Ge=v(T.internalFormat,ze,pe,T.colorSpace),Ye=T.isVideoTexture!==!0,ut=J.__version===void 0||W===!0,z=q.dataReady;let ie=M(T,Ne);te(r.TEXTURE_CUBE_MAP,T);let re;if(ke){Ye&&ut&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,Ge,Ne.width,Ne.height);for(let se=0;se<6;se++){re=ve[se].mipmaps;for(let ue=0;ue<re.length;ue++){const Ie=re[ue];T.format!==pi?ze!==null?Ye?z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,0,0,Ie.width,Ie.height,ze,Ie.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,Ge,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,0,0,Ie.width,Ie.height,ze,pe,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,Ge,Ie.width,Ie.height,0,ze,pe,Ie.data)}}}else{if(re=T.mipmaps,Ye&&ut){re.length>0&&ie++;const se=Ue(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,Ge,se.width,se.height)}for(let se=0;se<6;se++)if(le){Ye?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ve[se].width,ve[se].height,ze,pe,ve[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ge,ve[se].width,ve[se].height,0,ze,pe,ve[se].data);for(let ue=0;ue<re.length;ue++){const Ke=re[ue].image[se].image;Ye?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,0,0,Ke.width,Ke.height,ze,pe,Ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,Ge,Ke.width,Ke.height,0,ze,pe,Ke.data)}}else{Ye?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ze,pe,ve[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ge,ze,pe,ve[se]);for(let ue=0;ue<re.length;ue++){const Ie=re[ue];Ye?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,0,0,ze,pe,Ie.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,Ge,ze,pe,Ie.image[se])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),J.__version=q.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Q(D,T,B,W,q,J){const me=s.convert(B.format,B.colorSpace),ee=s.convert(B.type),de=v(B.internalFormat,me,ee,B.colorSpace);if(!n.get(T).__hasExternalTextures){const le=Math.max(1,T.width>>J),ve=Math.max(1,T.height>>J);q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?t.texImage3D(q,J,de,le,ve,T.depth,0,me,ee,null):t.texImage2D(q,J,de,le,ve,0,me,ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),Me(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,q,n.get(B).__webglTexture,0,Fe(T)):(q===r.TEXTURE_2D||q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,q,n.get(B).__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Z(D,T,B){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const W=T.depthTexture,q=W&&W.isDepthTexture?W.type:null,J=y(T.stencilBuffer,q),me=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=Fe(T);Me(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,J,T.width,T.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,J,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,J,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,D)}else{const W=T.textures;for(let q=0;q<W.length;q++){const J=W[q],me=s.convert(J.format,J.colorSpace),ee=s.convert(J.type),de=v(J.internalFormat,me,ee,J.colorSpace),ke=Fe(T);B&&Me(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,de,T.width,T.height):Me(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke,de,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,de,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ne(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const W=n.get(T.depthTexture).__webglTexture,q=Fe(T);if(T.depthTexture.format===Bs)Me(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,W,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,W,0);else if(T.depthTexture.format===Ks)Me(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,W,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function ce(D){const T=n.get(D),B=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const W=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),W){const q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,W.removeEventListener("dispose",q)};W.addEventListener("dispose",q),T.__depthDisposeCallback=q}T.__boundDepthTexture=W}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ne(T.__webglFramebuffer,D)}else if(B){T.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[W]),T.__webglDepthbuffer[W]===void 0)T.__webglDepthbuffer[W]=r.createRenderbuffer(),Z(T.__webglDepthbuffer[W],D,!1);else{const q=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,J)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Z(T.__webglDepthbuffer,D,!1);else{const W=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function he(D,T,B){const W=n.get(D);T!==void 0&&Q(W.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&ce(D)}function Le(D){const T=D.texture,B=n.get(D),W=n.get(T);D.addEventListener("dispose",E);const q=D.textures,J=D.isWebGLCubeRenderTarget===!0,me=q.length>1;if(me||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=T.version,a.memory.textures++),J){B.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[ee]=[];for(let de=0;de<T.mipmaps.length;de++)B.__webglFramebuffer[ee][de]=r.createFramebuffer()}else B.__webglFramebuffer[ee]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let ee=0;ee<T.mipmaps.length;ee++)B.__webglFramebuffer[ee]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(me)for(let ee=0,de=q.length;ee<de;ee++){const ke=n.get(q[ee]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),a.memory.textures++)}if(D.samples>0&&Me(D)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ee=0;ee<q.length;ee++){const de=q[ee];B.__webglColorRenderbuffer[ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[ee]);const ke=s.convert(de.format,de.colorSpace),le=s.convert(de.type),ve=v(de.internalFormat,ke,le,de.colorSpace,D.isXRRenderTarget===!0),Ne=Fe(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,ve,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,B.__webglColorRenderbuffer[ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Z(B.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),te(r.TEXTURE_CUBE_MAP,T);for(let ee=0;ee<6;ee++)if(T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)Q(B.__webglFramebuffer[ee][de],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de);else Q(B.__webglFramebuffer[ee],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(T)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ee=0,de=q.length;ee<de;ee++){const ke=q[ee],le=n.get(ke);t.bindTexture(r.TEXTURE_2D,le.__webglTexture),te(r.TEXTURE_2D,ke),Q(B.__webglFramebuffer,D,ke,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,0),m(ke)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ee=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ee=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,W.__webglTexture),te(ee,T),T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)Q(B.__webglFramebuffer[de],D,T,r.COLOR_ATTACHMENT0,ee,de);else Q(B.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,ee,0);m(T)&&p(ee),t.unbindTexture()}D.depthBuffer&&ce(D)}function We(D){const T=D.textures;for(let B=0,W=T.length;B<W;B++){const q=T[B];if(m(q)){const J=D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,me=n.get(q).__webglTexture;t.bindTexture(J,me),p(J),t.unbindTexture()}}}const I=[],Se=[];function De(D){if(D.samples>0){if(Me(D)===!1){const T=D.textures,B=D.width,W=D.height;let q=r.COLOR_BUFFER_BIT;const J=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=n.get(D),ee=T.length>1;if(ee)for(let de=0;de<T.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let de=0;de<T.length;de++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(q|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(q|=r.STENCIL_BUFFER_BIT)),ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,me.__webglColorRenderbuffer[de]);const ke=n.get(T[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ke,0)}r.blitFramebuffer(0,0,B,W,0,0,B,W,q,r.NEAREST),l===!0&&(I.length=0,Se.length=0,I.push(r.COLOR_ATTACHMENT0+de),D.depthBuffer&&D.resolveDepthBuffer===!1&&(I.push(J),Se.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ee)for(let de=0;de<T.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,me.__webglColorRenderbuffer[de]);const ke=n.get(T[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Fe(D){return Math.min(i.maxSamples,D.samples)}function Me(D){const T=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $(D){const T=a.render.frame;u.get(D)!==T&&(u.set(D,T),D.update())}function Te(D,T){const B=D.colorSpace,W=D.format,q=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||B!==gr&&B!==Ji&&(pt.getTransfer(B)===At?(W!==pi||q!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}function Ue(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=C,this.setTexture2D=O,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=he,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Me}function yS(r,e){function t(n,i=Ji){let s;const a=pt.getTransfer(i);if(n===Gi)return r.UNSIGNED_BYTE;if(n===dd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===hd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===qp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Wp)return r.BYTE;if(n===Xp)return r.SHORT;if(n===qa)return r.UNSIGNED_SHORT;if(n===ud)return r.INT;if(n===Kr)return r.UNSIGNED_INT;if(n===Oi)return r.FLOAT;if(n===Za)return r.HALF_FLOAT;if(n===Yp)return r.ALPHA;if(n===$p)return r.RGB;if(n===pi)return r.RGBA;if(n===jp)return r.LUMINANCE;if(n===Kp)return r.LUMINANCE_ALPHA;if(n===Bs)return r.DEPTH_COMPONENT;if(n===Ks)return r.DEPTH_STENCIL;if(n===Zp)return r.RED;if(n===fd)return r.RED_INTEGER;if(n===Jp)return r.RG;if(n===pd)return r.RG_INTEGER;if(n===md)return r.RGBA_INTEGER;if(n===Zo||n===Jo||n===Qo||n===el)if(a===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===el)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lu||n===cu||n===uu||n===du)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===lu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===du)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hu||n===fu||n===pu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===hu||n===fu)return a===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===pu)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mu||n===gu||n===_u||n===vu||n===xu||n===yu||n===Mu||n===Su||n===bu||n===Eu||n===wu||n===Tu||n===Au||n===Cu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===mu)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gu)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_u)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vu)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xu)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yu)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mu)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Su)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bu)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eu)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wu)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tu)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Au)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cu)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tl||n===Ru||n===Pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===tl)return a===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ru)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qp||n===Lu||n===Du||n===Iu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===tl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Du)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class MS extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dt extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SS={type:"move"};class Ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(SS)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const bS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ES=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Dn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pr({vertexShader:bS,fragmentShader:ES,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new Ll(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TS extends Qs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new wS,m=t.getContextAttributes();let p=null,v=null;const y=[],M=[],w=new je;let E=null;const b=new Xt;b.layers.enable(1),b.viewport=new Ct;const R=new Xt;R.layers.enable(2),R.viewport=new Ct;const S=[b,R],x=new MS;x.layers.enable(1),x.layers.enable(2);let C=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=y[j];return Q===void 0&&(Q=new Ec,y[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=y[j];return Q===void 0&&(Q=new Ec,y[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=y[j];return Q===void 0&&(Q=new Ec,y[j]=Q),Q.getHandSpace()};function U(j){const Q=M.indexOf(j.inputSource);if(Q===-1)return;const Z=y[Q];Z!==void 0&&(Z.update(j.inputSource,j.frame,c||a),Z.dispatchEvent({type:j.type,data:j.inputSource}))}function O(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",N);for(let j=0;j<y.length;j++){const Q=M[j];Q!==null&&(M[j]=null,y[j].disconnect(Q))}C=null,P=null,g.reset(),e.setRenderTarget(p),d=null,h=null,f=null,i=null,v=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",O),i.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Zr(d.framebufferWidth,d.framebufferHeight,{format:pi,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,Z=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Ks:Bs,Z=m.stencil?js:Kr);const ce={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(ce),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Zr(h.textureWidth,h.textureHeight,{format:pi,type:Gi,depthTexture:new fm(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ce.setContext(i),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(j){for(let Q=0;Q<j.removed.length;Q++){const Z=j.removed[Q],ne=M.indexOf(Z);ne>=0&&(M[ne]=null,y[ne].disconnect(Z))}for(let Q=0;Q<j.added.length;Q++){const Z=j.added[Q];let ne=M.indexOf(Z);if(ne===-1){for(let he=0;he<y.length;he++)if(he>=M.length){M.push(Z),ne=he;break}else if(M[he]===null){M[he]=Z,ne=he;break}if(ne===-1)break}const ce=y[ne];ce&&ce.connect(Z)}}const k=new H,X=new H;function V(j,Q,Z){k.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(Z.matrixWorld);const ne=k.distanceTo(X),ce=Q.projectionMatrix.elements,he=Z.projectionMatrix.elements,Le=ce[14]/(ce[10]-1),We=ce[14]/(ce[10]+1),I=(ce[9]+1)/ce[5],Se=(ce[9]-1)/ce[5],De=(ce[8]-1)/ce[0],Fe=(he[8]+1)/he[0],Me=Le*De,$=Le*Fe,Te=ne/(-De+Fe),Ue=Te*-De;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ue),j.translateZ(Te),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ce[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const D=Le+Te,T=We+Te,B=Me-Ue,W=$+(ne-Ue),q=I*We/T*D,J=Se*We/T*D;j.projectionMatrix.makePerspective(B,W,q,J,D,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ae(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Q=j.near,Z=j.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(Z=g.depthFar)),x.near=R.near=b.near=Q,x.far=R.far=b.far=Z,(C!==x.near||P!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,P=x.far);const ne=j.parent,ce=x.cameras;ae(x,ne);for(let he=0;he<ce.length;he++)ae(ce[he],ne);ce.length===2?V(x,b,R):x.projectionMatrix.copy(b.projectionMatrix),L(j,x,ne)};function L(j,Q,Z){Z===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(Z.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ya*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let te=null;function ye(j,Q){if(u=Q.getViewerPose(c||a),_=Q,u!==null){const Z=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ne=!1;Z.length!==x.cameras.length&&(x.cameras.length=0,ne=!0);for(let he=0;he<Z.length;he++){const Le=Z[he];let We=null;if(d!==null)We=d.getViewport(Le);else{const Se=f.getViewSubImage(h,Le);We=Se.viewport,he===0&&(e.setRenderTargetTextures(v,Se.colorTexture,h.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(v))}let I=S[he];I===void 0&&(I=new Xt,I.layers.enable(he),I.viewport=new Ct,S[he]=I),I.matrix.fromArray(Le.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Le.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(We.x,We.y,We.width,We.height),he===0&&(x.matrix.copy(I.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ne===!0&&x.cameras.push(I)}const ce=i.enabledFeatures;if(ce&&ce.includes("depth-sensing")){const he=f.getDepthInformation(Z[0]);he&&he.isValid&&he.texture&&g.init(e,he,i.renderState)}}for(let Z=0;Z<y.length;Z++){const ne=M[Z],ce=y[Z];ne!==null&&ce!==void 0&&ce.update(ne,Q,c||a)}te&&te(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Ce=new dm;Ce.setAnimationLoop(ye),this.setAnimationLoop=function(j){te=j},this.dispose=function(){}}}const Ar=new Ei,AS=new wt;function CS(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lm(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,M=v.envMapRotation;y&&(m.envMap.value=y,Ar.copy(M),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),m.envMapRotation.value.setFromMatrix4(AS.makeRotationFromEuler(Ar)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function RS(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const M=y.program;n.uniformBlockBinding(v,M)}function c(v,y){let M=i[v.id];M===void 0&&(_(v),M=u(v),i[v.id]=M,v.addEventListener("dispose",m));const w=y.program;n.updateUBOMapping(v,w);const E=e.render.frame;s[v.id]!==E&&(h(v),s[v.id]=E)}function u(v){const y=f();v.__bindingPointIndex=y;const M=r.createBuffer(),w=v.__size,E=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,w,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=i[v.id],M=v.uniforms,w=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,b=M.length;E<b;E++){const R=Array.isArray(M[E])?M[E]:[M[E]];for(let S=0,x=R.length;S<x;S++){const C=R[S];if(d(C,E,S,w)===!0){const P=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let N=0;N<U.length;N++){const k=U[N],X=g(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,P+O,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,O),O+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,y,M,w){const E=v.value,b=y+"_"+M;if(w[b]===void 0)return typeof E=="number"||typeof E=="boolean"?w[b]=E:w[b]=E.clone(),!0;{const R=w[b];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return w[b]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function _(v){const y=v.uniforms;let M=0;const w=16;for(let b=0,R=y.length;b<R;b++){const S=Array.isArray(y[b])?y[b]:[y[b]];for(let x=0,C=S.length;x<C;x++){const P=S[x],U=Array.isArray(P.value)?P.value:[P.value];for(let O=0,N=U.length;O<N;O++){const k=U[O],X=g(k),V=M%w,ae=V%X.boundary,L=V+ae;M+=ae,L!==0&&w-L<X.storage&&(M+=w-L),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=X.storage}}}const E=M%w;return E>0&&(M+=w-E),v.__size=M,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class _r{constructor(e={}){const{canvas:t=y_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=lr,this.toneMappingExposure=1;const y=this;let M=!1,w=0,E=0,b=null,R=-1,S=null;const x=new Ct,C=new Ct;let P=null;const U=new $e(0);let O=0,N=t.width,k=t.height,X=1,V=null,ae=null;const L=new Ct(0,0,N,k),te=new Ct(0,0,N,k);let ye=!1;const Ce=new xd;let j=!1,Q=!1;const Z=new wt,ne=new H,ce=new Ct,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function We(){return b===null?X:1}let I=n;function Se(A,F){return t.getContext(A,F)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cd}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",ue,!1),I===null){const F="webgl2";if(I=Se(F,A),I===null)throw Se(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let De,Fe,Me,$,Te,Ue,D,T,B,W,q,J,me,ee,de,ke,le,ve,Ne,ze,pe,Ge,Ye,ut;function z(){De=new Oy(I),De.init(),Ge=new yS(I,De),Fe=new Py(I,De,e,Ge),Me=new _S(I),$=new By(I),Te=new iS,Ue=new xS(I,De,Me,Te,Fe,Ge,$),D=new Dy(y),T=new Ny(y),B=new q_(I),Ye=new Cy(I,B),W=new Fy(I,B,$,Ye),q=new Hy(I,W,B,$),Ne=new zy(I,Fe,Ue),ke=new Ly(Te),J=new nS(y,D,T,De,Fe,Ye,ke),me=new CS(y,Te),ee=new sS,de=new dS(De),ve=new Ay(y,D,T,Me,q,h,l),le=new gS(y,q,Fe),ut=new RS(I,$,Fe,Me),ze=new Ry(I,De,$),pe=new ky(I,De,$),$.programs=J.programs,y.capabilities=Fe,y.extensions=De,y.properties=Te,y.renderLists=ee,y.shadowMap=le,y.state=Me,y.info=$}z();const ie=new TS(y,I);this.xr=ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=De.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=De.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(N,k,!1))},this.getSize=function(A){return A.set(N,k)},this.setSize=function(A,F,K=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,k=F,t.width=Math.floor(A*X),t.height=Math.floor(F*X),K===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(N*X,k*X).floor()},this.setDrawingBufferSize=function(A,F,K){N=A,k=F,X=K,t.width=Math.floor(A*K),t.height=Math.floor(F*K),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,F,K,Y){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,F,K,Y),Me.viewport(x.copy(L).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,F,K,Y){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,F,K,Y),Me.scissor(C.copy(te).multiplyScalar(X).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(A){Me.setScissorTest(ye=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(A=!0,F=!0,K=!0){let Y=0;if(A){let G=!1;if(b!==null){const oe=b.texture.format;G=oe===md||oe===pd||oe===fd}if(G){const oe=b.texture.type,_e=oe===Gi||oe===Kr||oe===qa||oe===js||oe===dd||oe===hd,Ee=ve.getClearColor(),ge=ve.getClearAlpha(),be=Ee.r,Oe=Ee.g,Pe=Ee.b;_e?(d[0]=be,d[1]=Oe,d[2]=Pe,d[3]=ge,I.clearBufferuiv(I.COLOR,0,d)):(_[0]=be,_[1]=Oe,_[2]=Pe,_[3]=ge,I.clearBufferiv(I.COLOR,0,_))}else Y|=I.COLOR_BUFFER_BIT}F&&(Y|=I.DEPTH_BUFFER_BIT),K&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ee.dispose(),de.dispose(),Te.dispose(),D.dispose(),T.dispose(),q.dispose(),Ye.dispose(),ut.dispose(),J.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Re),ie.removeEventListener("sessionend",ot),fe.stop()};function re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=$.autoReset,F=le.enabled,K=le.autoUpdate,Y=le.needsUpdate,G=le.type;z(),$.autoReset=A,le.enabled=F,le.autoUpdate=K,le.needsUpdate=Y,le.type=G}function ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ie(A){const F=A.target;F.removeEventListener("dispose",Ie),Ke(F)}function Ke(A){xt(A),Te.remove(A)}function xt(A){const F=Te.get(A).programs;F!==void 0&&(F.forEach(function(K){J.releaseProgram(K)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,K,Y,G,oe){F===null&&(F=he);const _e=G.isMesh&&G.matrixWorld.determinant()<0,Ee=Et(A,F,K,Y,G);Me.setMaterial(Y,_e);let ge=K.index,be=1;if(Y.wireframe===!0){if(ge=W.getWireframeAttribute(K),ge===void 0)return;be=2}const Oe=K.drawRange,Pe=K.attributes.position;let lt=Oe.start*be,vt=(Oe.start+Oe.count)*be;oe!==null&&(lt=Math.max(lt,oe.start*be),vt=Math.min(vt,(oe.start+oe.count)*be)),ge!==null?(lt=Math.max(lt,0),vt=Math.min(vt,ge.count)):Pe!=null&&(lt=Math.max(lt,0),vt=Math.min(vt,Pe.count));const ct=vt-lt;if(ct<0||ct===1/0)return;Ye.setup(G,Y,Ee,K,ge);let $t,st=ze;if(ge!==null&&($t=B.get(ge),st=pe,st.setIndex($t)),G.isMesh)Y.wireframe===!0?(Me.setLineWidth(Y.wireframeLinewidth*We()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(G.isLine){let Ae=Y.linewidth;Ae===void 0&&(Ae=1),Me.setLineWidth(Ae*We()),G.isLineSegments?st.setMode(I.LINES):G.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else G.isPoints?st.setMode(I.POINTS):G.isSprite&&st.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)st.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ae=G._multiDrawStarts,an=G._multiDrawCounts,ht=G._multiDrawCount,si=ge?B.get(ge).bytesPerElement:1,ns=Te.get(Y).currentProgram.getUniforms();for(let Nn=0;Nn<ht;Nn++)ns.setValue(I,"_gl_DrawID",Nn),st.render(Ae[Nn]/si,an[Nn])}else if(G.isInstancedMesh)st.renderInstances(lt,ct,G.count);else if(K.isInstancedBufferGeometry){const Ae=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,an=Math.min(K.instanceCount,Ae);st.renderInstances(lt,ct,an)}else st.render(lt,ct)};function yt(A,F,K){A.transparent===!0&&A.side===hi&&A.forceSinglePass===!1?(A.side=Ln,A.needsUpdate=!0,bt(A,F,K),A.side=fr,A.needsUpdate=!0,bt(A,F,K),A.side=hi):bt(A,F,K)}this.compile=function(A,F,K=null){K===null&&(K=A),m=de.get(K),m.init(F),v.push(m),K.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),A!==K&&A.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const Y=new Set;return A.traverse(function(G){const oe=G.material;if(oe)if(Array.isArray(oe))for(let _e=0;_e<oe.length;_e++){const Ee=oe[_e];yt(Ee,K,G),Y.add(Ee)}else yt(oe,K,G),Y.add(oe)}),v.pop(),m=null,Y},this.compileAsync=function(A,F,K=null){const Y=this.compile(A,F,K);return new Promise(G=>{function oe(){if(Y.forEach(function(_e){Te.get(_e).currentProgram.isReady()&&Y.delete(_e)}),Y.size===0){G(A);return}setTimeout(oe,10)}De.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let rt=null;function He(A){rt&&rt(A)}function Re(){fe.stop()}function ot(){fe.start()}const fe=new dm;fe.setAnimationLoop(He),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(A){rt=A,ie.setAnimationLoop(A),A===null?fe.stop():fe.start()},ie.addEventListener("sessionstart",Re),ie.addEventListener("sessionend",ot),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,F,b),m=de.get(A,v.length),m.init(F),v.push(m),Z.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ce.setFromProjectionMatrix(Z),Q=this.localClippingEnabled,j=ke.init(this.clippingPlanes,Q),g=ee.get(A,p.length),g.init(),p.push(g),ie.enabled===!0&&ie.isPresenting===!0){const oe=y.xr.getDepthSensingMesh();oe!==null&&Xe(oe,F,-1/0,y.sortObjects)}Xe(A,F,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(V,ae),Le=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Le&&ve.addToRenderList(g,A),this.info.render.frame++,j===!0&&ke.beginShadows();const K=m.state.shadowsArray;le.render(K,A,F),j===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,G=g.transmissive;if(m.setupLights(),F.isArrayCamera){const oe=F.cameras;if(G.length>0)for(let _e=0,Ee=oe.length;_e<Ee;_e++){const ge=oe[_e];qe(Y,G,A,ge)}Le&&ve.render(A);for(let _e=0,Ee=oe.length;_e<Ee;_e++){const ge=oe[_e];Be(g,A,ge,ge.viewport)}}else G.length>0&&qe(Y,G,A,F),Le&&ve.render(A),Be(g,A,F);b!==null&&(Ue.updateMultisampleRenderTarget(b),Ue.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(y,A,F),Ye.resetDefaultState(),R=-1,S=null,v.pop(),v.length>0?(m=v[v.length-1],j===!0&&ke.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Xe(A,F,K,Y){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ce.intersectsSprite(A)){Y&&ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Z);const _e=q.update(A),Ee=A.material;Ee.visible&&g.push(A,_e,Ee,K,ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ce.intersectsObject(A))){const _e=q.update(A),Ee=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ce.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ce.copy(_e.boundingSphere.center)),ce.applyMatrix4(A.matrixWorld).applyMatrix4(Z)),Array.isArray(Ee)){const ge=_e.groups;for(let be=0,Oe=ge.length;be<Oe;be++){const Pe=ge[be],lt=Ee[Pe.materialIndex];lt&&lt.visible&&g.push(A,_e,lt,K,ce.z,Pe)}}else Ee.visible&&g.push(A,_e,Ee,K,ce.z,null)}}const oe=A.children;for(let _e=0,Ee=oe.length;_e<Ee;_e++)Xe(oe[_e],F,K,Y)}function Be(A,F,K,Y){const G=A.opaque,oe=A.transmissive,_e=A.transparent;m.setupLightsView(K),j===!0&&ke.setGlobalState(y.clippingPlanes,K),Y&&Me.viewport(x.copy(Y)),G.length>0&&Lt(G,F,K),oe.length>0&&Lt(oe,F,K),_e.length>0&&Lt(_e,F,K),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function qe(A,F,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Zr(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Za:Gi,minFilter:kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const oe=m.state.transmissionRenderTarget[Y.id],_e=Y.viewport||x;oe.setSize(_e.z,_e.w);const Ee=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor(U),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),Le&&ve.render(K);const ge=y.toneMapping;y.toneMapping=lr;const be=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),j===!0&&ke.setGlobalState(y.clippingPlanes,Y),Lt(A,K,Y),Ue.updateMultisampleRenderTarget(oe),Ue.updateRenderTargetMipmap(oe),De.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Pe=0,lt=F.length;Pe<lt;Pe++){const vt=F[Pe],ct=vt.object,$t=vt.geometry,st=vt.material,Ae=vt.group;if(st.side===hi&&ct.layers.test(Y.layers)){const an=st.side;st.side=Ln,st.needsUpdate=!0,et(ct,K,Y,$t,st,Ae),st.side=an,st.needsUpdate=!0,Oe=!0}}Oe===!0&&(Ue.updateMultisampleRenderTarget(oe),Ue.updateRenderTargetMipmap(oe))}y.setRenderTarget(Ee),y.setClearColor(U,O),be!==void 0&&(Y.viewport=be),y.toneMapping=ge}function Lt(A,F,K){const Y=F.isScene===!0?F.overrideMaterial:null;for(let G=0,oe=A.length;G<oe;G++){const _e=A[G],Ee=_e.object,ge=_e.geometry,be=Y===null?_e.material:Y,Oe=_e.group;Ee.layers.test(K.layers)&&et(Ee,F,K,ge,be,Oe)}}function et(A,F,K,Y,G,oe){A.onBeforeRender(y,F,K,Y,G,oe),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(y,F,K,Y,A,oe),G.transparent===!0&&G.side===hi&&G.forceSinglePass===!1?(G.side=Ln,G.needsUpdate=!0,y.renderBufferDirect(K,F,Y,G,A,oe),G.side=fr,G.needsUpdate=!0,y.renderBufferDirect(K,F,Y,G,A,oe),G.side=hi):y.renderBufferDirect(K,F,Y,G,A,oe),A.onAfterRender(y,F,K,Y,G,oe)}function bt(A,F,K){F.isScene!==!0&&(F=he);const Y=Te.get(A),G=m.state.lights,oe=m.state.shadowsArray,_e=G.state.version,Ee=J.getParameters(A,G.state,oe,F,K),ge=J.getProgramCacheKey(Ee);let be=Y.programs;Y.environment=A.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(A.isMeshStandardMaterial?T:D).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,be===void 0&&(A.addEventListener("dispose",Ie),be=new Map,Y.programs=be);let Oe=be.get(ge);if(Oe!==void 0){if(Y.currentProgram===Oe&&Y.lightsStateVersion===_e)return Tt(A,Ee),Oe}else Ee.uniforms=J.getUniforms(A),A.onBeforeCompile(Ee,y),Oe=J.acquireProgram(Ee,ge),be.set(ge,Oe),Y.uniforms=Ee.uniforms;const Pe=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pe.clippingPlanes=ke.uniform),Tt(A,Ee),Y.needsLights=Un(A),Y.lightsStateVersion=_e,Y.needsLights&&(Pe.ambientLightColor.value=G.state.ambient,Pe.lightProbe.value=G.state.probe,Pe.directionalLights.value=G.state.directional,Pe.directionalLightShadows.value=G.state.directionalShadow,Pe.spotLights.value=G.state.spot,Pe.spotLightShadows.value=G.state.spotShadow,Pe.rectAreaLights.value=G.state.rectArea,Pe.ltc_1.value=G.state.rectAreaLTC1,Pe.ltc_2.value=G.state.rectAreaLTC2,Pe.pointLights.value=G.state.point,Pe.pointLightShadows.value=G.state.pointShadow,Pe.hemisphereLights.value=G.state.hemi,Pe.directionalShadowMap.value=G.state.directionalShadowMap,Pe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pe.spotShadowMap.value=G.state.spotShadowMap,Pe.spotLightMatrix.value=G.state.spotLightMatrix,Pe.spotLightMap.value=G.state.spotLightMap,Pe.pointShadowMap.value=G.state.pointShadowMap,Pe.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Oe,Y.uniformsList=null,Oe}function Yt(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=nl.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Tt(A,F){const K=Te.get(A);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function Et(A,F,K,Y,G){F.isScene!==!0&&(F=he),Ue.resetTextureUnits();const oe=F.fog,_e=Y.isMeshStandardMaterial?F.environment:null,Ee=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:gr,ge=(Y.isMeshStandardMaterial?T:D).get(Y.envMap||_e),be=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Oe=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pe=!!K.morphAttributes.position,lt=!!K.morphAttributes.normal,vt=!!K.morphAttributes.color;let ct=lr;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ct=y.toneMapping);const $t=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,st=$t!==void 0?$t.length:0,Ae=Te.get(Y),an=m.state.lights;if(j===!0&&(Q===!0||A!==S)){const jn=A===S&&Y.id===R;ke.setState(Y,A,jn)}let ht=!1;Y.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==an.state.version||Ae.outputColorSpace!==Ee||G.isBatchedMesh&&Ae.batching===!1||!G.isBatchedMesh&&Ae.batching===!0||G.isBatchedMesh&&Ae.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ae.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ae.instancing===!1||!G.isInstancedMesh&&Ae.instancing===!0||G.isSkinnedMesh&&Ae.skinning===!1||!G.isSkinnedMesh&&Ae.skinning===!0||G.isInstancedMesh&&Ae.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ae.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ae.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ae.instancingMorph===!1&&G.morphTexture!==null||Ae.envMap!==ge||Y.fog===!0&&Ae.fog!==oe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ke.numPlanes||Ae.numIntersection!==ke.numIntersection)||Ae.vertexAlphas!==be||Ae.vertexTangents!==Oe||Ae.morphTargets!==Pe||Ae.morphNormals!==lt||Ae.morphColors!==vt||Ae.toneMapping!==ct||Ae.morphTargetsCount!==st)&&(ht=!0):(ht=!0,Ae.__version=Y.version);let si=Ae.currentProgram;ht===!0&&(si=bt(Y,F,G));let ns=!1,Nn=!1,Ol=!1;const Ht=si.getUniforms(),Wi=Ae.uniforms;if(Me.useProgram(si.program)&&(ns=!0,Nn=!0,Ol=!0),Y.id!==R&&(R=Y.id,Nn=!0),ns||S!==A){Ht.setValue(I,"projectionMatrix",A.projectionMatrix),Ht.setValue(I,"viewMatrix",A.matrixWorldInverse);const jn=Ht.map.cameraPosition;jn!==void 0&&jn.setValue(I,ne.setFromMatrixPosition(A.matrixWorld)),Fe.logarithmicDepthBuffer&&Ht.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ht.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Nn=!0,Ol=!0)}if(G.isSkinnedMesh){Ht.setOptional(I,G,"bindMatrix"),Ht.setOptional(I,G,"bindMatrixInverse");const jn=G.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),Ht.setValue(I,"boneTexture",jn.boneTexture,Ue))}G.isBatchedMesh&&(Ht.setOptional(I,G,"batchingTexture"),Ht.setValue(I,"batchingTexture",G._matricesTexture,Ue),Ht.setOptional(I,G,"batchingIdTexture"),Ht.setValue(I,"batchingIdTexture",G._indirectTexture,Ue),Ht.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&Ht.setValue(I,"batchingColorTexture",G._colorsTexture,Ue));const Fl=K.morphAttributes;if((Fl.position!==void 0||Fl.normal!==void 0||Fl.color!==void 0)&&Ne.update(G,K,si),(Nn||Ae.receiveShadow!==G.receiveShadow)&&(Ae.receiveShadow=G.receiveShadow,Ht.setValue(I,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Wi.envMap.value=ge,Wi.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Wi.envMapIntensity.value=F.environmentIntensity),Nn&&(Ht.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&mt(Wi,Ol),oe&&Y.fog===!0&&me.refreshFogUniforms(Wi,oe),me.refreshMaterialUniforms(Wi,Y,X,k,m.state.transmissionRenderTarget[A.id]),nl.upload(I,Yt(Ae),Wi,Ue)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(nl.upload(I,Yt(Ae),Wi,Ue),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ht.setValue(I,"center",G.center),Ht.setValue(I,"modelViewMatrix",G.modelViewMatrix),Ht.setValue(I,"normalMatrix",G.normalMatrix),Ht.setValue(I,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const jn=Y.uniformsGroups;for(let kl=0,bm=jn.length;kl<bm;kl++){const wd=jn[kl];ut.update(wd,si),ut.bind(wd,si)}}return si}function mt(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Un(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,F,K){Te.get(A.texture).__webglTexture=F,Te.get(A.depthTexture).__webglTexture=K;const Y=Te.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=K===void 0,Y.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const K=Te.get(A);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,K=0){b=A,w=F,E=K;let Y=!0,G=null,oe=!1,_e=!1;if(A){const ge=Te.get(A);if(ge.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(ge.__webglFramebuffer===void 0)Ue.setupRenderTarget(A);else if(ge.__hasExternalTextures)Ue.rebindTextures(A,Te.get(A.texture).__webglTexture,Te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Pe=A.depthTexture;if(ge.__boundDepthTexture!==Pe){if(Pe!==null&&Te.has(Pe)&&(A.width!==Pe.image.width||A.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(A)}}const be=A.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(_e=!0);const Oe=Te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?G=Oe[F][K]:G=Oe[F],oe=!0):A.samples>0&&Ue.useMultisampledRTT(A)===!1?G=Te.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?G=Oe[K]:G=Oe,x.copy(A.viewport),C.copy(A.scissor),P=A.scissorTest}else x.copy(L).multiplyScalar(X).floor(),C.copy(te).multiplyScalar(X).floor(),P=ye;if(Me.bindFramebuffer(I.FRAMEBUFFER,G)&&Y&&Me.drawBuffers(A,G),Me.viewport(x),Me.scissor(C),Me.setScissorTest(P),oe){const ge=Te.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,K)}else if(_e){const ge=Te.get(A.texture),be=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ge.__webglTexture,K||0,be)}R=-1},this.readRenderTargetPixels=function(A,F,K,Y,G,oe,_e){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){Me.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const ge=A.texture,be=ge.format,Oe=ge.type;if(!Fe.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-Y&&K>=0&&K<=A.height-G&&I.readPixels(F,K,Y,G,Ge.convert(be),Ge.convert(Oe),oe)}finally{const ge=b!==null?Te.get(b).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(A,F,K,Y,G,oe,_e){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){Me.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const ge=A.texture,be=ge.format,Oe=ge.type;if(!Fe.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-Y&&K>=0&&K<=A.height-G){const Pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.bufferData(I.PIXEL_PACK_BUFFER,oe.byteLength,I.STREAM_READ),I.readPixels(F,K,Y,G,Ge.convert(be),Ge.convert(Oe),0),I.flush();const lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await M_(I,lt,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,oe)}finally{I.deleteBuffer(Pe),I.deleteSync(lt)}return oe}}finally{const ge=b!==null?Te.get(b).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,ge)}}},this.copyFramebufferToTexture=function(A,F=null,K=0){A.isTexture!==!0&&(Na("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const Y=Math.pow(2,-K),G=Math.floor(A.image.width*Y),oe=Math.floor(A.image.height*Y),_e=F!==null?F.x:0,Ee=F!==null?F.y:0;Ue.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,_e,Ee,G,oe),Me.unbindTexture()},this.copyTextureToTexture=function(A,F,K=null,Y=null,G=0){A.isTexture!==!0&&(Na("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],F=arguments[2],G=arguments[3]||0,K=null);let oe,_e,Ee,ge,be,Oe;K!==null?(oe=K.max.x-K.min.x,_e=K.max.y-K.min.y,Ee=K.min.x,ge=K.min.y):(oe=A.image.width,_e=A.image.height,Ee=0,ge=0),Y!==null?(be=Y.x,Oe=Y.y):(be=0,Oe=0);const Pe=Ge.convert(F.format),lt=Ge.convert(F.type);Ue.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const vt=I.getParameter(I.UNPACK_ROW_LENGTH),ct=I.getParameter(I.UNPACK_IMAGE_HEIGHT),$t=I.getParameter(I.UNPACK_SKIP_PIXELS),st=I.getParameter(I.UNPACK_SKIP_ROWS),Ae=I.getParameter(I.UNPACK_SKIP_IMAGES),an=A.isCompressedTexture?A.mipmaps[G]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,an.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,an.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,ge),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,be,Oe,oe,_e,Pe,lt,an.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,be,Oe,an.width,an.height,Pe,an.data):I.texSubImage2D(I.TEXTURE_2D,G,be,Oe,oe,_e,Pe,lt,an),I.pixelStorei(I.UNPACK_ROW_LENGTH,vt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,st),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ae),G===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(A,F,K=null,Y=null,G=0){A.isTexture!==!0&&(Na("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],F=arguments[3],G=arguments[4]||0);let oe,_e,Ee,ge,be,Oe,Pe,lt,vt;const ct=A.isCompressedTexture?A.mipmaps[G]:A.image;K!==null?(oe=K.max.x-K.min.x,_e=K.max.y-K.min.y,Ee=K.max.z-K.min.z,ge=K.min.x,be=K.min.y,Oe=K.min.z):(oe=ct.width,_e=ct.height,Ee=ct.depth,ge=0,be=0,Oe=0),Y!==null?(Pe=Y.x,lt=Y.y,vt=Y.z):(Pe=0,lt=0,vt=0);const $t=Ge.convert(F.format),st=Ge.convert(F.type);let Ae;if(F.isData3DTexture)Ue.setTexture3D(F,0),Ae=I.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Ue.setTexture2DArray(F,0),Ae=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const an=I.getParameter(I.UNPACK_ROW_LENGTH),ht=I.getParameter(I.UNPACK_IMAGE_HEIGHT),si=I.getParameter(I.UNPACK_SKIP_PIXELS),ns=I.getParameter(I.UNPACK_SKIP_ROWS),Nn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,be),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oe),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ae,G,Pe,lt,vt,oe,_e,Ee,$t,st,ct.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Ae,G,Pe,lt,vt,oe,_e,Ee,$t,ct.data):I.texSubImage3D(Ae,G,Pe,lt,vt,oe,_e,Ee,$t,st,ct),I.pixelStorei(I.UNPACK_ROW_LENGTH,an),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),I.pixelStorei(I.UNPACK_SKIP_PIXELS,si),I.pixelStorei(I.UNPACK_SKIP_ROWS,ns),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Nn),G===0&&F.generateMipmaps&&I.generateMipmap(Ae),Me.unbindTexture()},this.initRenderTarget=function(A){Te.get(A).__webglFramebuffer===void 0&&Ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ue.setTextureCube(A,0):A.isData3DTexture?Ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ue.setTexture2DArray(A,0):Ue.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){w=0,E=0,b=null,Me.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===gd?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===Rl?"display-p3":"srgb"}}class vr extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Md extends Qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sl=new H,bl=new H,of=new wt,ua=new Pl,ko=new eo,wc=new H,lf=new H;class vm extends Zt{constructor(e=new qt,t=new Md){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Sl.fromBufferAttribute(t,i-1),bl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Sl.distanceTo(bl);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(i),ko.radius+=s,e.ray.intersectsSphere(ko)===!1)return;of.copy(i).invert(),ua.copy(e.ray).applyMatrix4(of);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=c){const p=u.getX(g),v=u.getX(g+1),y=Bo(this,e,ua,l,p,v);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),p=Bo(this,e,ua,l,g,m);p&&t.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=c){const p=Bo(this,e,ua,l,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=Bo(this,e,ua,l,_-1,d);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bo(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(Sl.fromBufferAttribute(a,i),bl.fromBufferAttribute(a,s),t.distanceSqToSegment(Sl,bl,wc,lf)>n)return;wc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(wc);if(!(l<e.near||l>e.far))return{distance:l,point:lf.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}class Js extends Qr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cf=new wt,Nu=new Pl,zo=new eo,Ho=new H;class $a extends Zt{constructor(e=new qt,t=new Js){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(i),zo.radius+=s,e.ray.intersectsSphere(zo)===!1)return;cf.copy(i).invert(),Nu.copy(e.ray).applyMatrix4(cf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=h,g=d;_<g;_++){const m=c.getX(_);Ho.fromBufferAttribute(f,m),uf(Ho,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=h,g=d;_<g;_++)Ho.fromBufferAttribute(f,_),uf(Ho,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function uf(r,e,t,n,i,s,a){const o=Nu.distanceSqToPoint(r);if(o<t){const l=new H;Nu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class PS{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],h=n[i+1]-u,d=(a-u)/h;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new je:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new H,i=[],s=[],a=[],o=new H,l=new wt;for(let d=0;d<=e;d++){const _=d/e;i[d]=this.getTangentAt(_,new H)}s[0]=new H,a[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(rn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(rn(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class LS extends PS{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new je){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class di extends qt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],h=[],d=[];let _=0;const g=[],m=n/2;let p=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(d,2));function v(){const M=new H,w=new H;let E=0;const b=(t-e)/n;for(let R=0;R<=s;R++){const S=[],x=R/s,C=x*(t-e)+e;for(let P=0;P<=i;P++){const U=P/i,O=U*l+o,N=Math.sin(O),k=Math.cos(O);w.x=C*N,w.y=-x*n+m,w.z=C*k,f.push(w.x,w.y,w.z),M.set(N,b,k).normalize(),h.push(M.x,M.y,M.z),d.push(U,1-x),S.push(_++)}g.push(S)}for(let R=0;R<i;R++)for(let S=0;S<s;S++){const x=g[S][R],C=g[S+1][R],P=g[S+1][R+1],U=g[S][R+1];u.push(x,C,U),u.push(C,P,U),E+=6}c.addGroup(p,E,0),p+=E}function y(M){const w=_,E=new je,b=new H;let R=0;const S=M===!0?e:t,x=M===!0?1:-1;for(let P=1;P<=i;P++)f.push(0,m*x,0),h.push(0,x,0),d.push(.5,.5),_++;const C=_;for(let P=0;P<=i;P++){const O=P/i*l+o,N=Math.cos(O),k=Math.sin(O);b.x=S*k,b.y=m*x,b.z=S*N,f.push(b.x,b.y,b.z),h.push(0,x,0),E.x=N*.5+.5,E.y=k*.5*x+.5,d.push(E.x,E.y),_++}for(let P=0;P<i;P++){const U=w+P,O=C+P;M===!0?u.push(O,O+1,U):u.push(O+1,O,U),R+=3}c.addGroup(p,R,M===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Il extends qt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new H,M=new H,w=new H;for(let E=0;E<t.length;E+=3)d(t[E+0],y),d(t[E+1],M),d(t[E+2],w),l(y,M,w,v)}function l(v,y,M,w){const E=w+1,b=[];for(let R=0;R<=E;R++){b[R]=[];const S=v.clone().lerp(M,R/E),x=y.clone().lerp(M,R/E),C=E-R;for(let P=0;P<=C;P++)P===0&&R===E?b[R][P]=S:b[R][P]=S.clone().lerp(x,P/C)}for(let R=0;R<E;R++)for(let S=0;S<2*(E-R)-1;S++){const x=Math.floor(S/2);S%2===0?(h(b[R][x+1]),h(b[R+1][x]),h(b[R][x])):(h(b[R][x+1]),h(b[R+1][x+1]),h(b[R+1][x]))}}function c(v){const y=new H;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(v),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function u(){const v=new H;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const M=m(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;a.push(M,1-w)}_(),f()}function f(){for(let v=0;v<a.length;v+=6){const y=a[v+0],M=a[v+2],w=a[v+4],E=Math.max(y,M,w),b=Math.min(y,M,w);E>.9&&b<.1&&(y<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function d(v,y){const M=v*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function _(){const v=new H,y=new H,M=new H,w=new H,E=new je,b=new je,R=new je;for(let S=0,x=0;S<s.length;S+=9,x+=6){v.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),M.set(s[S+6],s[S+7],s[S+8]),E.set(a[x+0],a[x+1]),b.set(a[x+2],a[x+3]),R.set(a[x+4],a[x+5]),w.copy(v).add(y).add(M).divideScalar(3);const C=m(w);g(E,x+0,v,C),g(b,x+2,y,C),g(R,x+4,M,C)}}function g(v,y,M,w){w<0&&v.x===1&&(a[y]=v.x-1),M.x===0&&M.z===0&&(a[y]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.vertices,e.indices,e.radius,e.details)}}class to extends Il{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new to(e.radius,e.detail)}}class Sd extends Il{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sd(e.radius,e.detail)}}class bd extends qt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let f=e;const h=(t-e)/i,d=new H,_=new je;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=s+m/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/t+1)/2,_.y=(d.y/t+1)/2,u.push(_.x,_.y)}f+=h}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const v=p+m,y=v,M=v+n+1,w=v+n+2,E=v+1;o.push(y,M,E),o.push(M,w,E)}}this.setIndex(o),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ki extends qt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new H,h=new H,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const E=w/t;f.x=-e*Math.cos(i+E*s)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(i+E*s)*Math.sin(a+y*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),m.push(E+M,1-y),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=u[p][v+1],M=u[p][v],w=u[p+1][v],E=u[p+1][v+1];(p!==0||a>0)&&d.push(y,M,E),(p!==n-1||l<Math.PI)&&d.push(M,w,E)}this.setIndex(d),this.setAttribute("position",new Rt(_,3)),this.setAttribute("normal",new Rt(g,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ul extends qt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new H,f=new H,h=new H;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){const g=_/i*s,m=d/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(g),f.y=(e+t*Math.cos(m))*Math.sin(g),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){const g=(i+1)*d+_-1,m=(i+1)*(d-1)+_-1,p=(i+1)*(d-1)+_,v=(i+1)*d+_;a.push(g,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _t extends Qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=em,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xm extends _t{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Nl extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class DS extends Nl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Tc=new wt,df=new H,hf=new H;class ym{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xd,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;df.setFromMatrixPosition(e.matrixWorld),t.position.copy(df),hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hf),t.updateMatrixWorld(),Tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ff=new wt,da=new H,Ac=new H;class IS extends ym{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),da.setFromMatrixPosition(e.matrixWorld),n.position.copy(da),Ac.copy(n.position),Ac.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ac),n.updateMatrixWorld(),i.makeTranslation(-da.x,-da.y,-da.z),ff.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ff)}}class Vi extends Nl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new IS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class US extends ym{constructor(){super(new hm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class es extends Nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new US}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ts extends Nl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xr{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=pf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function pf(){return(typeof performance>"u"?Date:performance).now()}const mf=new wt;class Ed{constructor(e,t,n=0,i=1/0){this.ray=new Pl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new vd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mf),this}intersectObject(e,t=!0,n=[]){return Ou(e,this,n,t),n.sort(gf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ou(e[i],this,n,t);return n.sort(gf),n}}function gf(r,e){return r.distance-e.distance}function Ou(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Ou(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);function NS(r,e){const t="Hi, I am Mritunjay.";if("speechSynthesis"in window){window.speechSynthesis.cancel();const n=new SpeechSynthesisUtterance(t);n.rate=1,n.pitch=1.05;const s=window.speechSynthesis.getVoices().find(a=>a.lang.startsWith("en")&&!a.name.includes("Google"));s&&(n.voice=s),n.onstart=()=>{Cc(t),typeof r=="function"&&r()},n.onend=()=>{setTimeout(Rc,1200)},n.onerror=()=>{Cc(t),setTimeout(Rc,2400)},window.speechSynthesis.speak(n)}else Cc(t),setTimeout(Rc,2800)}function Cc(r){let e=document.getElementById("avatar-speech-bubble");e||(e=document.createElement("div"),e.id="avatar-speech-bubble",e.className="avatar-speech-bubble",document.body.appendChild(e)),e.innerHTML=`<span class="speech-icon">💬</span> <strong>Mritunjay:</strong> "${r}"`,e.classList.add("visible")}function Rc(){const r=document.getElementById("avatar-speech-bubble");r&&r.classList.remove("visible")}let il=null;function OS(){let r=document.getElementById("eye-camera-modal");if(!r){r=document.createElement("div"),r.id="eye-camera-modal",r.className="camera-modal-overlay",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label","Camera Interface"),r.innerHTML=`
      <div class="camera-modal-card">
        <div class="camera-modal-header">
          <div class="camera-hud-title">
            <span class="hud-blink-dot"></span>
            <span>OPTICAL SYSTEM / OCULAR INTERFACE</span>
          </div>
          <button class="camera-modal-close" id="camera-modal-close-btn" aria-label="Close camera">✕</button>
        </div>

        <div class="camera-video-wrapper">
          <div class="camera-reticle">
            <div class="reticle-corner top-left"></div>
            <div class="reticle-corner top-right"></div>
            <div class="reticle-corner bottom-left"></div>
            <div class="reticle-corner bottom-right"></div>
            <div class="reticle-crosshair"></div>
          </div>
          <video id="eye-camera-video" autoplay playsinline muted></video>
          <div class="camera-scanline"></div>
          <div class="camera-status-hud" id="camera-status-hud">
            <span>STATUS: INITIALIZING...</span>
          </div>
        </div>

        <div class="camera-modal-footer">
          <p class="camera-privacy-note">
            🔒 <strong>Privacy Assurance:</strong> Camera feed runs 100% locally in your browser memory. No video or frames are recorded, stored, or sent to any server.
          </p>
          <div class="camera-controls">
            <button class="btn ghost small" id="camera-stop-btn">Stop Camera</button>
            <button class="btn primary small" id="camera-close-btn">Close HUD</button>
          </div>
        </div>
      </div>
    `,document.body.appendChild(r);const e=()=>{_f(),r.classList.remove("open")};r.querySelector("#camera-modal-close-btn").addEventListener("click",e),r.querySelector("#camera-close-btn").addEventListener("click",e),r.querySelector("#camera-stop-btn").addEventListener("click",()=>{_f();const t=r.querySelector("#camera-status-hud");t&&(t.innerHTML="<span>STATUS: FEED STOPPED BY USER</span>")}),r.addEventListener("click",t=>{t.target===r&&e()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&r.classList.contains("open")&&e()})}r.classList.add("open"),FS(r)}async function FS(r){const e=r.querySelector("#eye-camera-video"),t=r.querySelector("#camera-status-hud");if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t.innerHTML='<span class="status-error">CAMERA API NOT SUPPORTED IN THIS BROWSER</span>';return}t.innerHTML='<span class="status-pending">AWAITING CAMERA PERMISSION...</span>';try{const n=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"user"},audio:!1});il=n,e.srcObject=n,t.innerHTML='<span class="status-active">FEED ACTIVE • 60 FPS • LOCAL ONLY</span>'}catch(n){console.warn("Camera access denied or unavailable:",n),t.innerHTML=`
      <span class="status-error">
        PERMISSION DENIED OR NO WEBCAM DETECTED.
        <small style="display:block;margin-top:4px;color:#a6a1b8;">
          Allow camera access in your browser address bar permissions to view the ocular feed.
        </small>
      </span>
    `}}function _f(){il&&(il.getTracks().forEach(e=>{try{e.stop()}catch(t){console.error("Error stopping track:",t)}}),il=null);const r=document.getElementById("eye-camera-video");r&&(r.srcObject=null)}function kS(r,e){if(!r)return;const t=r.parentElement,n=new vr,i=new Xt(34,1,.1,100);i.position.set(0,1.25,8.4);const s=new _r({canvas:r,antialias:!0,alpha:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.outputColorSpace=ui,s.shadowMap.enabled=!0;const a=new DS(10859772,329490,2.2);n.add(a);const o=new es(8490232,3.2);o.position.set(3.5,6,5),o.castShadow=!0,n.add(o);const l=new Vi(11032055,22,14);l.position.set(-3.5,2.2,2.5),n.add(l);const c=new Vi(1096065,14,10);c.position.set(3.5,-1,1.5),n.add(c);const u=new dt;n.add(u);const f=13345156,h=1315351,d=461070,_=16317180,g=9133302,m=1096065,p=14870768;function v(W,q,J,me,ee,de,ke,le,ve={}){const Ne=new Bt(ee,de,ke),ze=new _t({color:le,roughness:ve.roughness??.65,metalness:ve.metalness??.15,...ve}),pe=new Ve(Ne,ze);return pe.position.set(q,J,me),pe.castShadow=!0,pe.receiveShadow=!0,W.add(pe),pe}const y=new dt;y.position.set(0,-.45,0),u.add(y);const M=v(y,0,0,0,1.12,1.18,.62,d);M.userData={hotspot:"chest",label:"Chest: View Contact & Socials"};const w=new dt;y.add(w),v(w,0,.08,.32,.42,.95,.04,_),v(w,0,-.04,.35,.13,.58,.04,g,{emissive:7153881,emissiveIntensity:.4});const E=v(w,-.24,.12,.35,.18,.55,.04,1447970);E.rotation.z=-.22;const b=v(w,.24,.12,.35,.18,.55,.04,1447970);b.rotation.z=.22;const R=new dt;R.visible=!1,y.add(R),v(R,0,.12,.33,.22,.22,.03,m,{emissive:366185,emissiveIntensity:.8}),v(R,-.14,-.08,.34,.04,.38,.03,m),v(R,.14,-.08,.34,.04,.38,.03,m),v(R,0,.12,-.33,.28,.28,.03,m,{emissive:366185,emissiveIntensity:.8});const S=new dt;S.position.set(0,.52,0),u.add(S);const x=v(S,0,.28,0,1.1,1.08,.96,f);x.userData={hotspot:"head",label:"Head: Open Education & Qualifications"},v(S,-.6,.25,0,.12,.26,.22,f),v(S,.6,.25,0,.12,.26,.22,f);const C=new dt;C.position.set(0,.32,.49),S.add(C),v(C,-.25,.09,.01,.22,.065,.03,2038564),v(C,.25,.09,.01,.22,.065,.03,2038564);const P=v(C,-.25,0,.01,.2,.12,.03,2038564),U=v(C,.25,0,.01,.2,.12,.03,2038564);P.userData={hotspot:"eyes",label:"Eyes: Launch Camera Interface"},U.userData={hotspot:"eyes",label:"Eyes: Launch Camera Interface"},v(C,-.22,.02,.03,.05,.06,.02,16777215),v(C,.27,.02,.03,.05,.06,.02,16777215),v(S,0,.2,.51,.14,.14,.06,f);const O=v(S,0,.04,.5,.24,.055,.03,7028534);O.userData={hotspot:"mouth",label:'Mouth: Speak "Hi, I am Mritunjay"'};const N=new dt;S.add(N),v(N,0,.82,-.03,1.18,.36,1.05,h),v(N,0,.32,-.48,1.16,.76,.22,h),[[-.5,.72,.24,.3,.28,.28],[-.28,.76,.36,.32,.26,.26],[-.02,.74,.38,.34,.28,.26],[.26,.73,.34,.32,.26,.26],[.48,.68,.26,.3,.28,.28],[-.45,.52,.35,.26,.26,.28],[-.14,.58,.44,.28,.24,.24],[.18,.57,.44,.28,.24,.24],[.44,.51,.36,.26,.26,.28]].forEach(([W,q,J,me,ee,de])=>{v(N,W,q,J,me,ee,de,h)});const X=v(u,-.82,-.48,0,.36,1.08,.44,d);X.rotation.z=-.12,v(X,0,-.56,.02,.32,.28,.4,f);const V=new dt;V.position.set(.82,.05,0),u.add(V);const ae=v(V,0,-.53,0,.36,1.08,.44,d);ae.rotation.z=.12;const L=v(ae,0,-.56,.02,.32,.28,.4,f);L.userData={hotspot:"hand",label:"Right Hand: Wave Hello!"},ae.userData={hotspot:"hand",label:"Right Hand: Wave Hello!"};const te=d;v(u,-.31,-1.42,0,.44,1.02,.46,te),v(u,.31,-1.42,0,.44,1.02,.46,te);const ye=v(u,-.31,-1.94,.12,.48,.26,.62,p),Ce=v(u,.31,-1.94,.12,.48,.26,.62,p),j=v(ye,0,-.02,.22,.482,.08,.2,m),Q=v(Ce,0,-.02,.22,.482,.08,.2,m),Z=new dt;n.add(Z);for(let W=0;W<8;W++){const q=W*Math.PI/4,J=v(Z,Math.cos(q)*1.25,-2.45+Math.sin(W*2)*.06,Math.sin(q)*.72,.82,.32,.72,W%2===0?988970:1973067);J.rotation.y=q}v(Z,0,-2.62,0,1.85,.32,1.45,593174);for(let W=0;W<7;W++){const q=v(Z,Math.sin(W*2.4)*1.35,-2.22+W%2*.18,Math.cos(W*1.7)*.72,.14,.24,.14,g,{emissive:9133302,emissiveIntensity:2.2});q.rotation.y=W}const ne=new dt;n.add(ne);const ce=["JS","PYTHON","C++","ARDUINO","IoT","3D"],he=[];ce.forEach((W,q)=>{const J=new _t({color:[3718648,8490232,11032055,1096065,3900150,12616956][q],metalness:.4,roughness:.2,emissive:[165063,5195493,8141549,366185,1920728,9647082][q],emissiveIntensity:.9}),me=new Ve(new to(.24,2),J),ee=q/ce.length*Math.PI*2;me.position.set(Math.cos(ee)*2.4,Math.sin(ee*1.5)*.75+.2,Math.sin(ee)*.65-.2),me.userData={base:me.position.clone(),label:W},ne.add(me),he.push(me)});const Le=new qt,We=[];for(let W=0;W<240;W++)We.push((Math.random()-.5)*9,(Math.random()-.5)*7,(Math.random()-.5)*5-1);Le.setAttribute("position",new Rt(We,3)),n.add(new $a(Le,new Js({color:8490232,size:.022,transparent:!0,opacity:.65})));const I=new Ed,Se=new je(100,100),De=[x,P,U,O,M,L,ae];function Fe(){Ui.killTweensOf(V.rotation),Ui.to(V.rotation,{z:-1.15,x:.2,duration:.3,yoyo:!0,repeat:5,ease:"sine.inOut",onComplete:()=>{Ui.to(V.rotation,{z:0,x:0,duration:.4})}})}function Me(W){if(W==="head"){const q=document.getElementById("education-card")||document.getElementById("about");q&&q.scrollIntoView({behavior:"smooth",block:"center"}),Pc("Education Profile: Class 10 student developing coding & electronics builds.")}else if(W==="eyes")OS();else if(W==="mouth")NS(()=>{Ui.to(O.scale,{y:1.8,duration:.15,yoyo:!0,repeat:7})});else if(W==="hand")Fe(),Pc("Mritunjay waves hello! 👋");else if(W==="chest"){const q=document.getElementById("contact");q&&q.scrollIntoView({behavior:"smooth"}),Pc("Contact Section Opened: Connect via GitHub, LinkedIn, or Email.")}}r.addEventListener("pointermove",W=>{const q=r.getBoundingClientRect();Se.x=(W.clientX-q.left)/q.width*2-1,Se.y=-((W.clientY-q.top)/q.height*2-1)}),r.addEventListener("pointerdown",W=>{var J,me;I.setFromCamera(Se,i);const q=I.intersectObjects(De,!0);if(q.length>0){let ee=q[0].object;for(;ee&&!((J=ee.userData)!=null&&J.hotspot)&&ee.parent;)ee=ee.parent;ee&&((me=ee.userData)!=null&&me.hotspot)&&Me(ee.userData.hotspot)}});let $="suit";function Te(W){$=W,W==="hoodie"?(w.visible=!1,R.visible=!0,M.material.color.setHex(988970),j.visible=!0,Q.visible=!0):(w.visible=!0,R.visible=!1,M.material.color.setHex(d),j.visible=!1,Q.visible=!1)}function Ue(){const W=t.clientWidth,q=t.clientHeight;s.setSize(W,q,!1),i.aspect=W/q,i.updateProjectionMatrix()}new ResizeObserver(Ue).observe(t),Ue();const D=new xr;let T=null;function B(){var J,me;T=requestAnimationFrame(B);const W=D.getElapsedTime();S.rotation.y=Ut.lerp(S.rotation.y,Se.x*.48,.06),S.rotation.x=Ut.lerp(S.rotation.x,-Se.y*.22,.06),u.position.y=Math.sin(W*1.5)*.06,u.rotation.y=Ut.lerp(u.rotation.y,Se.x*.08,.03),he.forEach((ee,de)=>{ee.position.y=ee.userData.base.y+Math.sin(W*1.3+de)*.12,ee.position.x=Ut.lerp(ee.position.x,ee.userData.base.x+Se.x*.14,.03),ee.rotation.x=W*.3,ee.rotation.y=W*.45}),Z.rotation.y=Math.sin(W*.4)*.05,I.setFromCamera(Se,i);const q=I.intersectObjects(De,!0);if(q.length>0){r.style.cursor="pointer";let ee=q[0].object;for(;ee&&!((J=ee.userData)!=null&&J.label)&&ee.parent;)ee=ee.parent;e&&((me=ee==null?void 0:ee.userData)!=null&&me.label)&&(e.textContent=ee.userData.label,e.classList.add("visible"))}else r.style.cursor="default",e&&e.classList.remove("visible");s.render(n,i)}return T=requestAnimationFrame(B),{waveHand:Fe,handleAction:Me,setOutfit:Te,getOutfit:()=>$,dispose:()=>{T&&cancelAnimationFrame(T),s.dispose()}}}function Pc(r){let e=document.getElementById("toast");e||(e=document.createElement("div"),e.id="toast",document.body.appendChild(e)),e.textContent=r,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2800)}function BS(r){r.innerHTML=`
    <div class="brain-visual-card">
      <div class="brain-canvas-wrapper">
        <canvas id="brain-core-canvas"></canvas>
        <div class="brain-hud-overlay">
          <div class="brain-status">
            <span class="hud-blink-dot purple"></span>
            <span>NEURAL CORE • LOGIC & PROBLEM SOLVING</span>
          </div>
          <span class="brain-node-counter">64 SYNAPTIC NODES ACTIVE</span>
        </div>
      </div>
      <div class="brain-info-dock">
        <h4>Curiosity Driven Problem-Solving</h4>
        <p>Like a neural network forming stronger connections through iterative learning, each robotics prototype and software bug strengthens my engineering intuition.</p>
      </div>
    </div>
  `;const e=r.querySelector("#brain-core-canvas"),t=e.getContext("2d");let n=0,i=0,s=null;function a(){const g=e.parentElement.getBoundingClientRect();n=g.width,i=Math.max(240,g.height||260),e.width=n*window.devicePixelRatio,e.height=i*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio)}a(),window.addEventListener("resize",a);const o=56,l=[];for(let g=0;g<o;g++){const m=g<o/2,p=m?-1:1,v=Math.random(),y=Math.random()*Math.PI*2,M=Math.sqrt(v)*65,w=p*42+Math.cos(y)*M,E=Math.sin(y)*(M*.85);l.push({baseX:w,baseY:E,x:w,y:E,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,radius:Math.random()*2.2+1.8,pulsePhase:Math.random()*Math.PI*2,color:m?"#818cf8":"#c084fc"})}const c=[];function u(){if(l.length<2)return;const g=Math.floor(Math.random()*l.length),m=Math.floor(Math.random()*l.length);g!==m&&c.push({from:g,to:m,progress:0,speed:Math.random()*.02+.015})}setInterval(u,350);let f=0,h=0,d=!1;e.addEventListener("pointermove",g=>{const m=e.getBoundingClientRect();f=g.clientX-m.left-n/2,h=g.clientY-m.top-i/2,d=!0}),e.addEventListener("pointerleave",()=>{d=!1});function _(){t.clearRect(0,0,n,i);const g=n/2,m=i/2;l.forEach(p=>{if(p.pulsePhase+=.05,p.x+=p.vx,p.y+=p.vy,p.vx+=(p.baseX-p.x)*.03,p.vy+=(p.baseY-p.y)*.03,d){const v=f-p.x,y=h-p.y,M=Math.hypot(v,y);M<90&&M>2&&(p.vx+=v/M*.35,p.vy+=y/M*.35)}});for(let p=0;p<l.length;p++)for(let v=p+1;v<l.length;v++){const y=l[p],M=l[v],w=Math.hypot(y.x-M.x,y.y-M.y);if(w<46){const E=(1-w/46)*.45;t.strokeStyle=`rgba(168, 85, 247, ${E})`,t.lineWidth=1,t.beginPath(),t.moveTo(g+y.x,m+y.y),t.lineTo(g+M.x,m+M.y),t.stroke()}}for(let p=c.length-1;p>=0;p--){const v=c[p];if(v.progress+=v.speed,v.progress>=1){c.splice(p,1);continue}const y=l[v.from],M=l[v.to],w=g+y.x+(M.x-y.x)*v.progress,E=m+y.y+(M.y-y.y)*v.progress;t.fillStyle="#dfd0b8",t.shadowColor="#dfd0b8",t.shadowBlur=10,t.beginPath(),t.arc(w,E,2.8,0,Math.PI*2),t.fill(),t.shadowBlur=0}l.forEach(p=>{const v=Math.sin(p.pulsePhase)*.5+.5;t.fillStyle=p.color,t.shadowColor=p.color,t.shadowBlur=8*v+2,t.beginPath(),t.arc(g+p.x,m+p.y,p.radius,0,Math.PI*2),t.fill(),t.shadowBlur=0}),s=requestAnimationFrame(_)}return s=requestAnimationFrame(_),{dispose:()=>{s&&cancelAnimationFrame(s),window.removeEventListener("resize",a)}}}function zS(r,e,t){if(!r)return;const n=r.parentElement,i=new vr,s=new Xt(42,1,.1,100);s.position.set(0,0,8.4);const a=new _r({canvas:r,antialias:!0,alpha:!0});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.add(new ts(8490232,1.8));const o=new Vi(3718648,25,20);o.position.set(2,4,5),i.add(o);const l=[],c=[];ml.forEach((v,y)=>{const M=y/ml.length*Math.PI*2,w=2.8+y%2*.45,E=1.35+y%3*.2,b=Math.sin(M)*.8,R=new xm({color:new $e(v.color),metalness:.35,roughness:.2,clearcoat:1,clearcoatRoughness:.15,emissive:new $e(v.accent),emissiveIntensity:.35}),S=new Ve(new to(.38,2),R);S.position.set(Math.cos(M)*w,Math.sin(M*2)*E,b),S.userData={skill:v,base:S.position.clone(),index:y,baseScale:1},i.add(S),l.push(S);const x=new qr({color:new $e(v.color),transparent:!0,opacity:.5,side:hi}),C=new Ve(new Ul(.5,.015,8,48),x);C.rotation.x=Math.PI/2.5,i.add(C),c.push(C)});for(let v=0;v<3;v++){const M=new LS(0,0,3.2+v*.4,1.5+v*.2,v*.8,v*.8+Math.PI*2,!1,0).getPoints(80).map(b=>new H(b.x,b.y,0)),w=new qt().setFromPoints(M),E=new Md({color:5195493,transparent:!0,opacity:.25});i.add(new vm(w,E))}const u=new Ed,f=new je(100,100);let h=null,d=null;r.addEventListener("pointermove",v=>{const y=r.getBoundingClientRect();f.x=(v.clientX-y.left)/y.width*2-1,f.y=-((v.clientY-y.top)/y.height*2-1)}),r.addEventListener("pointerleave",()=>{f.set(100,100),h=null,e&&e.classList.remove("visible")}),r.addEventListener("pointerdown",()=>{u.setFromCamera(f,s);const v=u.intersectObjects(l);v.length>0&&(d=v[0].object)}),r.addEventListener("pointerup",()=>{d&&(typeof t=="function"&&t(d.userData.skill),d=null)});function _(){const v=n.clientWidth,y=n.clientHeight;a.setSize(v,y,!1),s.aspect=v/y,s.updateProjectionMatrix()}new ResizeObserver(_).observe(n),_();const g=new xr;let m=null;function p(){var M;m=requestAnimationFrame(p);const v=g.getElapsedTime();u.setFromCamera(f,s),h=((M=u.intersectObjects(l)[0])==null?void 0:M.object)||null,l.forEach((w,E)=>{const b=v*.12+E/l.length*Math.PI*2,R=2.8+E%2*.45,S=1.35+E%3*.2;let x=Math.cos(b)*R,C=Math.sin(b*2)*S+Math.sin(v+E)*.08,P=Math.sin(b)*.8;if(f.x<5){const U=x-f.x*3.5,O=C-f.y*2.5,N=Math.hypot(U,O);N<1.6&&N>.01&&(x+=U/N*.35,C+=O/N*.35)}w.position.x=Ut.lerp(w.position.x,x,.08),w.position.y=Ut.lerp(w.position.y,C,.08),w.position.z=Ut.lerp(w.position.z,P,.08),w===h?(w.scale.setScalar(1.35),w.material.emissiveIntensity=1,c[E].scale.setScalar(1.35),c[E].material.opacity=1,e&&(e.innerHTML=`<strong>${w.userData.skill.name}</strong> • <small>${w.userData.skill.category}</small><p style="margin:4px 0 0;font-size:11px;color:#cbd5e1;">${w.userData.skill.description}</p>`,e.classList.add("visible")),r.style.cursor="pointer"):(w.scale.setScalar(1),w.material.emissiveIntensity=.35,c[E].scale.setScalar(1),c[E].material.opacity=.5),c[E].position.copy(w.position),c[E].rotation.z=v*.4+E}),h||(e&&e.classList.remove("visible"),r.style.cursor="grab"),a.render(i,s)}return m=requestAnimationFrame(p),{dispose:()=>{m&&cancelAnimationFrame(m),a.dispose()}}}function HS(r,e){if(!r)return;const t=r.parentElement,n=new vr,i=new Xt(42,1,.1,100);i.position.set(0,1.2,7.8);const s=new _r({canvas:r,antialias:!0,alpha:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.shadowMap.enabled=!0,n.add(new ts(9684477,1.5));const a=new es(16772565,3);a.position.set(4,7,5),a.castShadow=!0,n.add(a);const o=new Vi(11032055,4,12);o.position.set(-4,-2,-2),n.add(o);const l=new dt;n.add(l);const c=new Bt(.46,.46,.46),u=[988970,1976635,805486,1461859],f=[413243,417606,292951,1409085];for(let Z=-3;Z<=3;Z++)for(let ne=-3;ne<=3;ne++)for(let ce=-3;ce<=3;ce++){const he=Math.hypot(Z,ne,ce);if(he>3.2||he<2)continue;const Le=ne>=-1&&Math.sin(Z*1.5)+Math.cos(ce*1.5)>.4,We=Le?f[Math.floor(Math.random()*f.length)]:u[Math.floor(Math.random()*u.length)],I=new _t({color:We,roughness:.8,emissive:Le?142370:536393,emissiveIntensity:.35}),Se=new Ve(c,I);Se.position.set(Z*.46,ne*.46,ce*.46),l.add(Se)}function h(Z,ne,ce,he,Le,We,I,Se,De={}){const Fe=new Ve(new Bt(Le,We,I),new _t({color:Se,roughness:.7,...De}));return Fe.position.set(ne,ce,he),Z.add(Fe),Fe}const d=new dt;d.position.set(-1.8,.6,1.3),d.rotation.y=.4,l.add(d);const _=16317180;h(d,0,0,0,.9,.12,.9,_),h(d,0,.28,0,.58,.45,.58,_);const g=new Ve(new ki(.24,16,12),new _t({color:_,roughness:.3}));g.position.set(0,.62,0),g.scale.set(1,1.25,1),d.add(g),[[-.38,-.38],[.38,-.38],[-.38,.38],[.38,.38]].forEach(([Z,ne])=>{h(d,Z,.32,ne,.08,.65,.08,_)});const m=new dt;m.position.set(-.9,.9,1.6),l.add(m);const p=14251782;h(m,0,0,0,.85,.14,.85,p),h(m,0,.12,0,.65,.14,.65,p),h(m,0,.24,0,.45,.14,.45,p),h(m,0,.36,0,.25,.14,.25,16498468);const v=new dt;v.position.set(.1,1.1,1.7),l.add(v);const y=6583435;h(v,-.4,0,0,.18,.35,.18,y),h(v,0,-.05,0,.6,.2,.12,y),h(v,.4,0,0,.18,.35,.18,y);const M=new dt;M.position.set(.9,.85,1.4),l.add(M);const w=7893356;h(M,0,.08,0,.45,.16,.45,w),h(M,0,.32,0,.3,.32,.3,w),h(M,0,.65,0,.12,.42,.12,w),h(M,0,.95,0,.03,.35,.03,3718648,{emissive:165063,emissiveIntensity:1.2});const E=new dt;E.position.set(1.7,.5,1.2),l.add(E);const b=1357990;h(E,0,0,0,.4,.28,.4,4674921),h(E,0,.35,0,.22,.45,.22,b);const R=h(E,.12,.62,.05,.06,.25,.06,b);R.rotation.z=-.3,h(E,.18,.76,.05,.08,.08,.08,16096779,{emissive:14251782,emissiveIntensity:2});const S=Da.map(Z=>new H(...Z.position)),x=new qt().setFromPoints(S),C=new vm(x,new Md({color:3718648,linewidth:2}));l.add(C);const P=[];Da.forEach((Z,ne)=>{const ce=new _t({color:Z.done?1096065:9133302,emissive:Z.done?366185:7153881,emissiveIntensity:1.6}),he=new Ve(new Sd(Z.done?.16:.14,0),ce);he.position.set(Z.position[0],Z.position[1],Z.position[2]+.12),he.userData={milestone:Z,index:ne},l.add(he),P.push(he)});const U=new qt,O=[];for(let Z=0;Z<300;Z++)O.push((Math.random()-.5)*14,(Math.random()-.5)*10,(Math.random()-.5)*8-2);U.setAttribute("position",new Rt(O,3)),n.add(new $a(U,new Js({color:8490232,size:.02,transparent:!0,opacity:.7})));let N=!1,k=0,X=0,V=-.15,ae=-.35;r.addEventListener("pointerdown",Z=>{N=!0,k=Z.clientX,X=Z.clientY,r.setPointerCapture(Z.pointerId)}),r.addEventListener("pointermove",Z=>{N&&(ae+=(Z.clientX-k)*.008,V+=(Z.clientY-X)*.008,V=Math.max(-1.1,Math.min(1.1,V)),k=Z.clientX,X=Z.clientY)}),r.addEventListener("pointerup",()=>{N=!1}),r.addEventListener("pointercancel",()=>{N=!1}),r.addEventListener("wheel",Z=>{Z.preventDefault(),i.position.z=Ut.clamp(i.position.z+Z.deltaY*.006,3.8,12)},{passive:!1});const L=new Ed,te=new je;r.addEventListener("click",Z=>{const ne=r.getBoundingClientRect();te.x=(Z.clientX-ne.left)/ne.width*2-1,te.y=-((Z.clientY-ne.top)/ne.height*2-1),L.setFromCamera(te,i);const ce=L.intersectObjects(P);if(ce.length>0){const he=ce[0].object.userData.milestone;typeof e=="function"&&e(he)}});function ye(){const Z=t.clientWidth,ne=t.clientHeight;s.setSize(Z,ne,!1),i.aspect=Z/ne,i.updateProjectionMatrix()}new ResizeObserver(ye).observe(t),ye();const Ce=new xr;let j=null;function Q(){j=requestAnimationFrame(Q);const Z=Ce.getElapsedTime();l.rotation.x=Ut.lerp(l.rotation.x,V,.08),l.rotation.y=Ut.lerp(l.rotation.y,ae,.08),P.forEach((ne,ce)=>{ne.rotation.y=Z*1.2+ce,ne.position.y=Da[ce].position[1]+Math.sin(Z*2.5+ce)*.06}),s.render(n,i)}return j=requestAnimationFrame(Q),{zoomIn:()=>{i.position.z=Math.max(3.8,i.position.z-.8)},zoomOut:()=>{i.position.z=Math.min(12,i.position.z+.8)},resetView:()=>{Ui.to(l.rotation,{x:-.15,y:-.35,duration:.8}),Ui.to(i.position,{z:7.8,duration:.8})},dispose:()=>{j&&cancelAnimationFrame(j),s.dispose()}}}function GS(r){r.innerHTML=`
    <div class="radar-container">
      <div class="radar-hud-bar">
        <div class="radar-status-badge">
          <span class="hud-blink-dot green"></span>
          <span id="radar-mode-text">RADAR SWEEP ACTIVE • 180° SERVO</span>
        </div>
        <div class="radar-hud-controls">
          <button class="hud-pill-btn" id="radar-daynight-toggle">Day / Night</button>
          <button class="hud-pill-btn active" id="radar-airland-toggle">Air / Ground</button>
          <button class="hud-pill-btn" id="radar-speed-toggle">Sweep: Normal</button>
        </div>
      </div>

      <div class="radar-display-wrapper">
        <canvas id="radar-canvas"></canvas>
        <div class="radar-overlay-hud">
          <div class="hud-telemetry-corner top-left">
            <span>SYS: HC-SR04 SONAR</span>
            <span>FREQ: 40.0 kHz</span>
            <span>MAX RNG: 40.0 cm</span>
          </div>
          <div class="hud-telemetry-corner top-right">
            <span>ANGLE: <strong id="hud-angle-val">90°</strong></span>
            <span>RANGE: <strong id="hud-dist-val">-- cm</strong></span>
            <span>TARGET: <strong id="hud-target-val">SEARCHING</strong></span>
          </div>
          <div class="hud-telemetry-corner bottom-left">
            <span>FRAME: LIVE SERIAL EMULATION</span>
            <span>BAUD: 9600 BPS</span>
          </div>
          <div class="hud-telemetry-corner bottom-right">
            <span>FOV: 0° — 180°</span>
            <span>ECHO LATENCY: 2.3 ms</span>
          </div>
        </div>
      </div>

      <div class="radar-control-panel">
        <div class="radar-slider-group">
          <label for="radar-manual-angle">Simulate Servo Angle (0° - 180°):</label>
          <input type="range" id="radar-manual-angle" min="0" max="180" value="90" />
        </div>
        <div class="radar-targets-list">
          <span>Active Targets:</span>
          <span class="target-tag">Target A: 48° @ 18cm</span>
          <span class="target-tag">Target B: 112° @ 29cm</span>
          <span class="target-tag">Target C: 154° @ 12cm</span>
        </div>
      </div>
    </div>
  `;const e=r.querySelector("#radar-canvas"),t=e.getContext("2d"),n=r.querySelector("#hud-angle-val"),i=r.querySelector("#hud-dist-val"),s=r.querySelector("#hud-target-val"),a=r.querySelector("#radar-manual-angle"),o=r.querySelector("#radar-daynight-toggle"),l=r.querySelector("#radar-speed-toggle");let c=0,u=0,f=90,h=1,d=.8,_=!0,g=!1,m=null;const p=[{angle:48,dist:18,label:"TGT-1",lastHit:0},{angle:112,dist:29,label:"TGT-2",lastHit:0},{angle:154,dist:12,label:"TGT-3",lastHit:0}];function v(){const M=e.parentElement.getBoundingClientRect();c=M.width,u=Math.max(340,M.height||380),e.width=c*window.devicePixelRatio,e.height=u*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio)}v(),window.addEventListener("resize",v),o.addEventListener("click",()=>{_=!_,o.classList.toggle("active",!_)}),l.addEventListener("click",()=>{d===.8?(d=1.6,l.textContent="Sweep: Fast (2x)"):(d=.8,l.textContent="Sweep: Normal (1x)")}),a.addEventListener("input",M=>{g=!0,f=parseFloat(M.target.value),setTimeout(()=>{g=!1},3e3)});function y(){t.clearRect(0,0,c,u);const M=c/2,w=u*.88,E=Math.min(c*.45,u*.78),b=_?"#10b981":"#dfd0b8",R=_?"rgba(16, 185, 129, 0.18)":"rgba(56, 189, 248, 0.18)",S=_?"#34d399":"#7dd3fc",x=t.createRadialGradient(M,w,10,M,w,E);x.addColorStop(0,_?"rgba(6, 78, 59, 0.35)":"rgba(12, 74, 110, 0.35)"),x.addColorStop(.85,"rgba(4, 12, 22, 0.6)"),x.addColorStop(1,"rgba(2, 6, 12, 0.9)"),t.fillStyle=x,t.beginPath(),t.arc(M,w,E,Math.PI,0,!1),t.closePath(),t.fill();const C=[.25,.5,.75,1],P=["10 cm","20 cm","30 cm","40 cm"];C.forEach((te,ye)=>{const Ce=E*te;t.strokeStyle=R,t.lineWidth=1,t.beginPath(),t.arc(M,w,Ce,Math.PI,0,!1),t.stroke(),t.fillStyle=S,t.font='10px "DM Mono", monospace',t.fillText(P[ye],M+8,w-Ce+12)});for(let te=0;te<=180;te+=30){const ye=(180-te)*(Math.PI/180),Ce=M+Math.cos(ye)*E,j=w-Math.sin(ye)*E;t.strokeStyle=te===90?"rgba(255, 255, 255, 0.25)":R,t.lineWidth=1,t.beginPath(),t.moveTo(M,w),t.lineTo(Ce,j),t.stroke();const Q=M+Math.cos(ye)*(E+14),Z=w-Math.sin(ye)*(E+14);t.fillStyle=S,t.font='9px "DM Mono", monospace',t.textAlign="center",t.fillText(`${te}°`,Q,Z+3)}g||(f+=h*d,f>=180?(f=180,h=-1):f<=0&&(f=0,h=1),a.value=Math.round(f)),n.textContent=`${Math.round(f)}°`;let U=null,O=999;const N=performance.now();p.forEach(te=>{Math.abs(f-te.angle)<4&&(te.lastHit=N);const Ce=N-te.lastHit;if(Ce<2500){const j=Math.max(0,1-Ce/2500),Q=(180-te.angle)*(Math.PI/180),Z=te.dist/40*E,ne=M+Math.cos(Q)*Z,ce=w-Math.sin(Q)*Z;t.fillStyle=`rgba(239, 68, 68, ${j})`,t.shadowColor="#ef4444",t.shadowBlur=12,t.beginPath(),t.arc(ne,ce,5,0,Math.PI*2),t.fill();const he=5+Ce*.015;t.strokeStyle=`rgba(239, 68, 68, ${j*.6})`,t.lineWidth=1.5,t.beginPath(),t.arc(ne,ce,he,0,Math.PI*2),t.stroke(),t.shadowBlur=0,t.fillStyle=`rgba(255, 255, 255, ${j})`,t.font='9px "DM Mono", monospace',t.fillText(`${te.label} (${te.dist}cm)`,ne+8,ce-6),te.dist<O&&(O=te.dist,U=te)}}),U?(i.textContent=`${O.toFixed(1)} cm`,s.textContent=`${U.label} @ ${U.angle}°`,s.style.color="#ef4444"):(i.textContent="-- cm",s.textContent="SCANNING...",s.style.color=S);const k=(180-f)*(Math.PI/180),X=M+Math.cos(k)*E,V=w-Math.sin(k)*E;t.strokeStyle=b,t.lineWidth=2.5,t.shadowColor=b,t.shadowBlur=16,t.beginPath(),t.moveTo(M,w),t.lineTo(X,V),t.stroke(),t.shadowBlur=0;const ae=h>0?.22:-.22,L=t.createRadialGradient(M,w,5,M,w,E);L.addColorStop(0,b),L.addColorStop(1,"transparent"),t.fillStyle=_?"rgba(16, 185, 129, 0.09)":"rgba(56, 189, 248, 0.09)",t.beginPath(),t.moveTo(M,w),t.arc(M,w,E,k+ae,k,h<0),t.closePath(),t.fill(),t.fillStyle=b,t.beginPath(),t.arc(M,w,6,0,Math.PI*2),t.fill(),m=requestAnimationFrame(y)}return m=requestAnimationFrame(y),{dispose:()=>{m&&cancelAnimationFrame(m),window.removeEventListener("resize",v)}}}function VS(r){r.innerHTML=`
    <div class="agri-container">
      <div class="agri-hud-header">
        <div class="agri-badge">
          <span class="hud-blink-dot green"></span>
          <span>MICROCLIMATE SIMULATION • CLOSED-LOOP AUTOMATION</span>
        </div>
        <div class="agri-controls-row">
          <button class="hud-pill-btn" id="agri-rain-btn">Trigger Rain: OFF</button>
          <button class="hud-pill-btn" id="agri-pump-btn">Pump Relay: AUTO</button>
          <button class="hud-pill-btn" id="agri-canopy-btn">Canopy: AUTO</button>
        </div>
      </div>

      <div class="agri-viewport-wrapper">
        <canvas id="agri-canvas"></canvas>
        <div class="agri-telemetry-hud">
          <div class="agri-metric-card">
            <span class="metric-label">SOIL MOISTURE</span>
            <div class="metric-value-row">
              <strong id="agri-moisture-val">42%</strong>
              <span id="agri-moisture-badge" class="badge-warning">IRRIGATION ON</span>
            </div>
            <div class="metric-progress-bar">
              <div id="agri-moisture-fill" style="width: 42%;"></div>
            </div>
          </div>

          <div class="agri-metric-card">
            <span class="metric-label">ATMOSPHERIC RAIN</span>
            <div class="metric-value-row">
              <strong id="agri-rain-status">NONE</strong>
              <span id="agri-rain-badge" class="badge-safe">DRY SENSOR</span>
            </div>
          </div>

          <div class="agri-metric-card">
            <span class="metric-label">CANOPY POSITION</span>
            <div class="metric-value-row">
              <strong id="agri-canopy-status">OPEN (0°)</strong>
              <span class="badge-neutral">SERVO MG90S</span>
            </div>
          </div>

          <div class="agri-metric-card">
            <span class="metric-label">SUBMERSIBLE PUMP</span>
            <div class="metric-value-row">
              <strong id="agri-pump-status">RUNNING</strong>
              <span id="agri-pump-badge" class="badge-active">5V RELAY CLOSED</span>
            </div>
          </div>
        </div>
      </div>

      <div class="agri-slider-dock">
        <label for="agri-soil-slider">Manual Moisture Simulation (0% Dry - 100% Saturated):</label>
        <input type="range" id="agri-soil-slider" min="10" max="90" value="42" />
        <small class="agri-dock-hint">Automatic Rule: If Soil &lt; 45% &rarr; Pump turns ON. If Rain &rarr; Canopy closes over crops.</small>
      </div>
    </div>
  `;const e=r.querySelector("#agri-canvas"),t=r.querySelector("#agri-moisture-val"),n=r.querySelector("#agri-moisture-fill"),i=r.querySelector("#agri-moisture-badge"),s=r.querySelector("#agri-rain-status"),a=r.querySelector("#agri-rain-badge"),o=r.querySelector("#agri-canopy-status"),l=r.querySelector("#agri-pump-status"),c=r.querySelector("#agri-pump-badge"),u=r.querySelector("#agri-rain-btn"),f=r.querySelector("#agri-pump-btn"),h=r.querySelector("#agri-canopy-btn"),d=r.querySelector("#agri-soil-slider");let _=!1,g=42,m=!0,p=0,v=0,y=!1,M=null;const w=new vr;w.background=new $e(264208);const E=new Xt(38,1,.1,100);E.position.set(0,4.2,7.8),E.lookAt(0,0,0);const b=new _r({canvas:e,antialias:!0,alpha:!0});b.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),b.shadowMap.enabled=!0;const R=new ts(8368857,1.4);w.add(R);const S=new es(16774358,2.8);S.position.set(4,8,5),S.castShadow=!0,w.add(S);const x=new Vi(11032055,3,14);x.position.set(-5,3,-3),w.add(x);const C=new dt;w.add(C);const P=new Bt(5.2,.4,3.8),U=new _t({color:2365458,roughness:.9}),O=new Ve(P,U);O.position.y=-.2,O.receiveShadow=!0,C.add(O);for(let B=-1.2;B<=1.2;B+=.8){const W=new Bt(4.8,.14,.55),q=new _t({color:3350550,roughness:.95}),J=new Ve(W,q);J.position.set(0,.05,B),C.add(J)}const N=[],k=new Bt(.08,.42,.08),X=new Bt(.24,.05,.12);for(let B=-1.2;B<=1.2;B+=.8)for(let W=-2.1;W<=2.1;W+=.45){const q=new dt;q.position.set(W+(Math.random()-.5)*.05,.22,B+(Math.random()-.5)*.05);const J=new _t({color:2278750,roughness:.7}),me=new Ve(k,J);me.castShadow=!0,q.add(me);const ee=new Ve(X,J);ee.position.y=.16,ee.rotation.y=Math.random()*Math.PI,ee.rotation.z=.2,q.add(ee),C.add(q),N.push(q)}const V=new _t({color:4674921,metalness:.6,roughness:.3}),ae=new Ve(new di(.05,.05,5,16),V);ae.rotation.z=Math.PI/2,ae.position.set(0,.15,-1.65),C.add(ae);for(let B=-1.8;B<=1.8;B+=1.2){const W=new Ve(new di(.035,.035,3.2,12),V);W.rotation.x=Math.PI/2,W.position.set(B,.14,0),C.add(W)}const L=new _t({color:2450411,metalness:.4,roughness:.4}),te=new Ve(new Bt(.45,.4,.45),L);te.position.set(-2.4,.2,-1.65),C.add(te);const ye=120,Ce=new qt,j=new Float32Array(ye*3);for(let B=0;B<ye;B++){const W=(Math.random()-.5)*4,q=(Math.random()-.5)*2.8;j[B*3]=W,j[B*3+1]=.18,j[B*3+2]=q}Ce.setAttribute("position",new ri(j,3));const Q=new Js({color:3718648,size:.08,transparent:!0,opacity:.85}),Z=new $a(Ce,Q);C.add(Z);const ne=600,ce=new qt,he=new Float32Array(ne*3);for(let B=0;B<ne;B++)he[B*3]=(Math.random()-.5)*6,he[B*3+1]=Math.random()*5+1,he[B*3+2]=(Math.random()-.5)*5;ce.setAttribute("position",new ri(he,3));const Le=new Js({color:9684477,size:.05,transparent:!0,opacity:0}),We=new $a(ce,Le);C.add(We);const I=new dt;I.position.set(0,1.8,1.7),C.add(I);const Se=new _t({color:165063,roughness:.3,transparent:!0,opacity:.85}),De=new Ve(new Bt(4.8,.06,3.4),Se);De.position.set(0,0,-1.7),I.add(De),u.addEventListener("click",()=>{_=!_,u.textContent=`Trigger Rain: ${_?"ON":"OFF"}`,u.classList.toggle("active",_),Fe()}),f.addEventListener("click",()=>{y=!y,y?(m=!m,f.textContent=`Pump: MANUAL (${m?"ON":"OFF"})`):(f.textContent="Pump Relay: AUTO",Fe())}),h.addEventListener("click",()=>{v===0?(v=.55,h.textContent="Canopy: DEPLOYED"):(v=0,h.textContent="Canopy: OPEN")}),d.addEventListener("input",B=>{g=parseInt(B.target.value,10),Fe()});function Fe(){t.textContent=`${g}%`,n.style.width=`${g}%`,g<45?(i.textContent="IRRIGATION NEEDED",i.className="badge-warning"):(i.textContent="OPTIMAL MOISTURE",i.className="badge-safe"),_?(s.textContent="DETECTED",a.textContent="WET SENSOR",a.className="badge-active",v=.52,o.textContent="DEPLOYED (ROOF CLOSED)"):(s.textContent="NONE",a.textContent="DRY SENSOR",a.className="badge-safe",v=0,o.textContent="OPEN (0°)"),y||(g<45&&!_?(m=!0,l.textContent="RUNNING (AUTO)",c.textContent="5V RELAY CLOSED",c.className="badge-active"):(m=!1,l.textContent="STANDBY (IDLE)",c.textContent="RELAY OPEN",c.className="badge-neutral"))}Fe();function Me(){const B=e.parentElement.getBoundingClientRect(),W=B.width,q=Math.max(340,B.height||420);b.setSize(W,q,!1),E.aspect=W/q,E.updateProjectionMatrix()}Me(),window.addEventListener("resize",Me);let $=!1,Te=0,Ue=-.3;e.addEventListener("pointerdown",B=>{$=!0,Te=B.clientX}),window.addEventListener("pointermove",B=>{if($){const W=B.clientX-Te;Ue+=W*.006,Te=B.clientX}}),window.addEventListener("pointerup",()=>{$=!1});const D=new xr;function T(){M=requestAnimationFrame(T),D.getDelta();const B=D.getElapsedTime();if(C.rotation.y=Ut.lerp(C.rotation.y,Ue,.08),p=Ut.lerp(p,v,.05),I.rotation.x=p,N.forEach((W,q)=>{W.rotation.z=Math.sin(B*2+q)*.04}),_){Le.opacity=Ut.lerp(Le.opacity,.8,.05);const W=ce.attributes.position.array;for(let q=0;q<ne;q++)W[q*3+1]-=.15,W[q*3+1]<0&&(W[q*3+1]=5);ce.attributes.position.needsUpdate=!0}else Le.opacity=Ut.lerp(Le.opacity,0,.08);if(m){Q.opacity=Ut.lerp(Q.opacity,.85,.08);const W=Ce.attributes.position.array;for(let q=0;q<ye;q++)W[q*3+1]=.14+Math.sin(B*6+q)*.05;Ce.attributes.position.needsUpdate=!0}else Q.opacity=Ut.lerp(Q.opacity,0,.08);b.render(w,E)}return M=requestAnimationFrame(T),{dispose:()=>{M&&cancelAnimationFrame(M),window.removeEventListener("resize",Me),b.dispose()}}}function WS(r){r.innerHTML=`
    <div class="lpg-container">
      <div class="lpg-hud-header">
        <div class="lpg-badge">
          <span class="hud-blink-dot orange" id="lpg-status-dot"></span>
          <span id="lpg-status-title">MQ-2 SENSOR ACTIVE • GAS MONITORING</span>
        </div>
        <div class="lpg-safety-state" id="lpg-state-pill">
          STATE: NORMAL (SAFE)
        </div>
      </div>

      <div class="lpg-viewport-wrapper">
        <canvas id="lpg-canvas"></canvas>
        <div class="lpg-telemetry-hud">
          <div class="lpg-hud-row">
            <span>GAS CONCENTRATION:</span>
            <strong id="lpg-ppm-text">85 PPM</strong>
          </div>
          <div class="lpg-hud-row">
            <span>THRESHOLD 1 (WARNING):</span>
            <span>250 PPM</span>
          </div>
          <div class="lpg-hud-row">
            <span>THRESHOLD 2 (HAZARD):</span>
            <span>450 PPM</span>
          </div>
          <div class="lpg-hud-row">
            <span>EXHAUST VENTILATION:</span>
            <strong id="lpg-fan-status">OFF (STANDBY)</strong>
          </div>
          <div class="lpg-hud-row">
            <span>GAS VALVE SOLENOID:</span>
            <strong id="lpg-valve-status" class="safe">OPEN (SUPPLY ON)</strong>
          </div>
        </div>
      </div>

      <div class="lpg-slider-dock">
        <label for="lpg-ppm-slider">Simulate Hydrocarbon Vapor Concentration (PPM):</label>
        <div class="slider-row">
          <input type="range" id="lpg-ppm-slider" min="30" max="800" value="85" />
          <button class="hud-pill-btn" id="lpg-test-leak-btn">Trigger Simulated Leak</button>
        </div>
        <div class="lpg-state-indicators">
          <span class="indicator-safe">0-250 PPM: Safe</span>
          <span class="indicator-warn">250-450 PPM: Warning Alert</span>
          <span class="indicator-hazard">450+ PPM: Emergency Containment</span>
        </div>
      </div>
    </div>
  `;const e=r.querySelector("#lpg-canvas"),t=r.querySelector("#lpg-ppm-text"),n=r.querySelector("#lpg-state-pill"),i=r.querySelector("#lpg-fan-status"),s=r.querySelector("#lpg-valve-status"),a=r.querySelector("#lpg-ppm-slider"),o=r.querySelector("#lpg-test-leak-btn"),l=r.querySelector("#lpg-status-dot");let c=85,u=0,f=0,h=null;const d=new vr;d.background=new $e(329227);const _=new Xt(35,1,.1,100);_.position.set(0,1.2,5.8);const g=new _r({canvas:e,antialias:!0,alpha:!0});g.setPixelRatio(Math.min(window.devicePixelRatio,1.8));const m=new ts(8162209,1.2);d.add(m);const p=new es(16773341,2.5);p.position.set(3,6,4),d.add(p);const v=new Vi(1096065,4,8);v.position.set(0,2.2,1.5),d.add(v);const y=new dt;d.add(y);const M=new _t({color:12730636,metalness:.35,roughness:.4}),w=new Ve(new di(.7,.7,1.8,32),M);y.add(w);const E=M,b=new Ve(new ki(.7,32,16,0,Math.PI*2,0,Math.PI/2),E);b.position.y=.9,y.add(b);const R=new Ve(new ki(.7,32,16,0,Math.PI*2,Math.PI/2,Math.PI/2),E);R.position.y=-.9,y.add(R);const S=new Ve(new di(.72,.72,.25,32,1,!0),new _t({color:2042167}));S.position.y=-1.1,y.add(S);const x=new Ve(new di(.55,.55,.38,24,1,!0),M);x.position.y=1.35,y.add(x);const C=new _t({color:14251782,metalness:.8,roughness:.2}),P=new Ve(new di(.08,.08,.35,16),C);P.position.y=1.25,y.add(P);const U=new dt;U.position.set(.9,-.2,.4),y.add(U);const O=new Ve(new Bt(.4,.55,.1),new _t({color:413243}));U.add(O);const N=new Ve(new di(.12,.12,.16,16),new _t({color:9741240,metalness:.7}));N.rotation.x=Math.PI/2,N.position.z=.08,U.add(N);const k=new dt;k.position.set(-1.8,.8,-1.2),d.add(k);const X=new Ve(new di(.65,.65,.2,24),new _t({color:1976635}));X.rotation.x=Math.PI/2,k.add(X);const V=new dt;k.add(V);for(let Q=0;Q<4;Q++){const Z=new Ve(new Bt(.12,.48,.02),new _t({color:9741240}));Z.rotation.z=Q*Math.PI/2,Z.position.y=.2,V.add(Z)}function ae(Q){c=Q,t.textContent=`${c} PPM`,a.value=c,c<250?(n.textContent="STATE: NORMAL (SAFE)",n.className="lpg-safety-state safe",i.textContent="OFF (STANDBY)",s.textContent="OPEN (SUPPLY ON)",s.className="safe",f=0,v.color.setHex(1096065),l.className="hud-blink-dot green"):c<450?(n.textContent="STATE: WARNING THRESHOLD",n.className="lpg-safety-state warning",i.textContent="LOW SPEED (EVACUATION)",s.textContent="OPEN (MONITORING)",s.className="warning",f=.1,v.color.setHex(16096779),l.className="hud-blink-dot orange"):(n.textContent="STATE: EMERGENCY HAZARD!",n.className="lpg-safety-state hazard",i.textContent="MAX SPEED ACTIVE (EXHAUST)",s.textContent="EMERGENCY SHUTOFF (CLOSED)",s.className="danger",f=.45,v.color.setHex(15680580),l.className="hud-blink-dot red")}a.addEventListener("input",Q=>{ae(parseInt(Q.target.value,10))}),o.addEventListener("click",()=>{ae(580),setTimeout(()=>{ae(110)},5e3)});function L(){const Q=e.parentElement.getBoundingClientRect(),Z=Q.width,ne=Math.max(340,Q.height||420);g.setSize(Z,ne,!1),_.aspect=Z/ne,_.updateProjectionMatrix()}L(),window.addEventListener("resize",L);let te=!1,ye=0;e.addEventListener("pointerdown",Q=>{te=!0,ye=Q.clientX}),window.addEventListener("pointermove",Q=>{te&&(y.rotation.y+=(Q.clientX-ye)*.01,ye=Q.clientX)}),window.addEventListener("pointerup",()=>{te=!1});const Ce=new xr;function j(){h=requestAnimationFrame(j);const Q=Ce.getElapsedTime();te||(y.rotation.y+=.005),u=Ut.lerp(u,f,.05),V.rotation.z+=u,c>=450?v.intensity=Math.sin(Q*12)*5+6:v.intensity=3,g.render(d,_)}return h=requestAnimationFrame(j),{dispose:()=>{h&&cancelAnimationFrame(h),window.removeEventListener("resize",L),g.dispose()}}}function XS(r){r.innerHTML=`
    <div class="voice-container">
      <div class="voice-hud-header">
        <div class="voice-badge">
          <span class="hud-blink-dot purple" id="voice-dot"></span>
          <span id="voice-status-title">VOICE INTERACTION CORE • STANDBY</span>
        </div>
        <div class="voice-mic-controls">
          <button class="btn primary small" id="voice-mic-toggle">Start Microphone</button>
          <button class="btn ghost small" id="voice-speak-demo-btn">Say Sample Phrase</button>
        </div>
      </div>

      <div class="voice-visualizer-wrapper">
        <canvas id="voice-canvas"></canvas>
        <div class="voice-transcript-overlay">
          <div class="voice-transcript-box">
            <span class="transcript-label">LIVE SPEECH TRANSCRIPT:</span>
            <p id="voice-transcript-text">"Click 'Start Microphone' or click any sample command below to test speech interaction."</p>
          </div>
          <div class="voice-response-box">
            <span class="response-label">ASSISTANT RESPONSE:</span>
            <p id="voice-response-text">Awaiting user vocal command.</p>
          </div>
        </div>
      </div>

      <div class="voice-command-dock">
        <span class="command-dock-title">Supported Vocal Commands:</span>
        <div class="command-chips">
          <button class="command-chip" data-cmd="Who is Mritunjay?">"Who is Mritunjay?"</button>
          <button class="command-chip" data-cmd="Show me your projects">"Show me your projects"</button>
          <button class="command-chip" data-cmd="Tell me about Smart Radar">"Tell me about Smart Radar"</button>
          <button class="command-chip" data-cmd="What are your core skills?">"What are your core skills?"</button>
          <button class="command-chip" data-cmd="How to contact you?">"How to contact you?"</button>
        </div>
        <p class="voice-privacy-notice">
          🔒 <strong>Local Processing:</strong> Speech recognition runs client-side via the browser's Web Speech API. Audio is never recorded, uploaded, or transmitted to any external server.
        </p>
      </div>
    </div>
  `;const e=r.querySelector("#voice-canvas"),t=e.getContext("2d"),n=r.querySelector("#voice-mic-toggle"),i=r.querySelector("#voice-speak-demo-btn"),s=r.querySelector("#voice-transcript-text"),a=r.querySelector("#voice-response-text"),o=r.querySelector("#voice-status-title"),l=r.querySelector("#voice-dot"),c=r.querySelectorAll(".command-chip");let u=null,f=null,h=null,d=null,_=!1,g=null,m=0,p=0;function v(){const x=e.parentElement.getBoundingClientRect();m=x.width,p=Math.max(260,x.height||320),e.width=m*window.devicePixelRatio,e.height=p*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio)}v(),window.addEventListener("resize",v);const y=window.SpeechRecognition||window.webkitSpeechRecognition;y&&(d=new y,d.continuous=!0,d.interimResults=!0,d.lang="en-US",d.onstart=()=>{_=!0,n.textContent="Stop Microphone",n.classList.add("danger"),o.textContent="LISTENING FOR SPOKEN COMMANDS...",l.className="hud-blink-dot green"},d.onresult=x=>{let C="",P="";for(let O=x.resultIndex;O<x.results.length;++O)x.results[O].isFinal?P+=x.results[O][0].transcript:C+=x.results[O][0].transcript;const U=P||C;U&&(s.textContent=`"${U}"`,P&&E(P))},d.onerror=x=>{console.warn("Speech recognition error:",x.error),x.error==="not-allowed"&&(s.textContent="Microphone permission was denied. You can still test voice synthesis using the sample command buttons below.",w())},d.onend=()=>{if(_)try{d.start()}catch{}});async function M(){try{const x=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});h=x,u=new(window.AudioContext||window.webkitAudioContext);const C=u.createMediaStreamSource(x);f=u.createAnalyser(),f.fftSize=256,C.connect(f),d?d.start():(s.textContent="SpeechRecognition API not available in this browser. Showing simulated audio frequencies.",_=!0,n.textContent="Stop Microphone")}catch(x){console.warn("Mic access failed:",x),s.textContent="Microphone permission not granted. Use sample command buttons to test audio synthesis!"}}function w(){if(_=!1,h&&(h.getTracks().forEach(x=>x.stop()),h=null),u&&(u.close(),u=null,f=null),d)try{d.stop()}catch{}n.textContent="Start Microphone",n.classList.remove("danger"),o.textContent="VOICE INTERACTION CORE • STANDBY",l.className="hud-blink-dot purple"}n.addEventListener("click",()=>{_?w():M()});function E(x){const C=x.toLowerCase();let P="";C.includes("who is")||C.includes("who are you")||C.includes("about")?P="Mritunjay is a Class 10 student passionate about creative coding, robotics, IoT, and embedded electronics.":C.includes("project")||C.includes("build")?P="Mritunjay has built 8 interactive builds including the Smart Radar System, Smart Agriculture, and LPG Safety Detector.":C.includes("radar")?P="The Smart Radar system sweeps 180 degrees using an ultrasonic sensor and micro servo, transmitting live coordinates to a custom HUD.":C.includes("skill")?P="Core skills include HTML, CSS, JavaScript, Python, C, C++, Arduino, Three.js, and IoT prototyping.":C.includes("contact")||C.includes("reach")||C.includes("email")?P="You can reach Mritunjay via GitHub at github.com/mritunjay20 or via the Contact form below.":P=`Received command: "${x}". How else may I assist you with exploring Mritunjay's work?`,a.textContent=P,b(P)}function b(x){if("speechSynthesis"in window){window.speechSynthesis.cancel();const C=new SpeechSynthesisUtterance(x);C.rate=1,C.pitch=1.05,window.speechSynthesis.speak(C)}}c.forEach(x=>{x.addEventListener("click",()=>{const C=x.dataset.cmd;s.textContent=`"${C}"`,E(C)})}),i.addEventListener("click",()=>{const x="Welcome to Mritunjay's interactive 3D portfolio. Explore the avatar, projects, and robotics builds!";s.textContent=`"${x}"`,a.textContent="Speaking greeting message...",b(x)});let R=0;function S(){t.clearRect(0,0,m,p),R+=.04;const x=p/2,C=48,P=m/C*.7,U=m/C*.3;let O=new Uint8Array(C);if(f&&_){const N=new Uint8Array(f.frequencyBinCount);f.getByteFrequencyData(N);for(let k=0;k<C;k++)O[k]=N[Math.floor(k*(N.length/C))]}else for(let N=0;N<C;N++){const k=Math.sin(R*2+N*.2)*25+Math.cos(R+N*.4)*15+30;O[N]=Math.max(10,k)}for(let N=0;N<C;N++){const k=O[N]/255*(p*.38),X=N*(P+U)+U,V=t.createLinearGradient(0,x-k,0,x+k);V.addColorStop(0,"#c084fc"),V.addColorStop(.5,"#948979"),V.addColorStop(1,"#dfd0b8"),t.fillStyle=V,t.shadowColor="#948979",t.shadowBlur=10,t.fillRect(X,x-k,P,k*2)}t.shadowBlur=0,t.strokeStyle="rgba(255, 255, 255, 0.7)",t.lineWidth=2,t.beginPath();for(let N=0;N<m;N+=4){const k=Math.sin(N*.03+R*3)*(_?22:8),X=x+k;N===0?t.moveTo(N,X):t.lineTo(N,X)}t.stroke(),g=requestAnimationFrame(S)}return g=requestAnimationFrame(S),{dispose:()=>{g&&cancelAnimationFrame(g),w(),window.removeEventListener("resize",v)}}}function qS(r){r.innerHTML=`
    <div class="helmet-container">
      <div class="helmet-hud-header">
        <div class="helmet-badge">
          <span class="hud-blink-dot cyan" id="helmet-hud-dot"></span>
          <span>CV VISION PIPELINE • SAFETY INTERLOCK RELAY</span>
        </div>
        <div class="helmet-relay-status" id="helmet-relay-pill">
          IGNITION: LOCKED (NO HELMET)
        </div>
      </div>

      <div class="helmet-viewport-wrapper">
        <canvas id="helmet-canvas"></canvas>
        <div class="cv-bounding-box" id="helmet-bbox">
          <div class="cv-tag">
            <span id="cv-class-label">CLASS: HELMET</span>
            <span id="cv-conf-label">CONF: 98.4%</span>
          </div>
          <div class="cv-bracket top-left"></div>
          <div class="cv-bracket top-right"></div>
          <div class="cv-bracket bottom-left"></div>
          <div class="cv-bracket bottom-right"></div>
        </div>

        <div class="helmet-telemetry-hud">
          <div class="helmet-telemetry-card">
            <span>VISION MODEL:</span>
            <strong>YOLO-v8n (Headgear Classifier)</strong>
          </div>
          <div class="helmet-telemetry-card">
            <span>INFERENCE TIME:</span>
            <strong>14.2 ms / Frame</strong>
          </div>
          <div class="helmet-telemetry-card">
            <span>IGNITION SOLENOID:</span>
            <strong id="helmet-solenoid-status" class="locked">DE-ENERGIZED (OPEN)</strong>
          </div>
        </div>
      </div>

      <div class="helmet-controls-dock">
        <div class="dock-actions">
          <button class="btn primary small" id="helmet-toggle-btn">Toggle Rider Helmet: WEAR HELMET</button>
          <button class="btn ghost small" id="helmet-ignition-btn">Simulate Ignition Key Press</button>
        </div>
        <p class="helmet-disclaimer">
          ⚠️ <strong>Interlock Logic:</strong> The motorcycle electric starter motor relay only energizes when a certified helmet is detected with &gt; 90% model confidence.
        </p>
      </div>
    </div>
  `;const e=r.querySelector("#helmet-canvas"),t=r.querySelector("#helmet-bbox"),n=r.querySelector("#cv-class-label"),i=r.querySelector("#cv-conf-label"),s=r.querySelector("#helmet-relay-pill"),a=r.querySelector("#helmet-solenoid-status"),o=r.querySelector("#helmet-toggle-btn"),l=r.querySelector("#helmet-ignition-btn"),c=r.querySelector("#helmet-hud-dot");let u=!1,f=null;const h=new vr;h.background=new $e(329486);const d=new Xt(36,1,.1,100);d.position.set(0,1.2,5.5);const _=new _r({canvas:e,antialias:!0,alpha:!0});_.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),h.add(new ts(8234196,1.3));const g=new es(16777215,2.5);g.position.set(4,5,4),h.add(g);const m=new Vi(3718648,3,10);m.position.set(-3,2,-2),h.add(m);const p=new dt;h.add(p);const v=new _t({color:13279618,roughness:.6}),y=new Ve(new ki(.55,32,24),v);y.position.set(0,.6,0),p.add(y);const M=new _t({color:1512731,roughness:.9}),w=new Ve(new ki(.58,24,16,0,Math.PI*2,0,Math.PI/1.7),M);w.position.set(0,.65,0),p.add(w);const E=new _t({color:1120295,roughness:.7}),b=new Ve(new di(.7,.6,1.2,24),E);b.position.set(0,-.6,0),p.add(b);const R=new dt;R.position.set(0,.65,0),p.add(R);const S=new _t({color:165063,metalness:.5,roughness:.2}),x=new Ve(new ki(.68,32,24),S);R.add(x);const C=new _t({color:592139,metalness:.9,roughness:.1,transparent:!0,opacity:.85}),P=new Ve(new ki(.7,24,16,Math.PI*.7,Math.PI*.6,Math.PI*.25,Math.PI*.45),C);R.add(P);const U=new _t({color:3718648,transparent:!0,opacity:.35,roughness:.1}),O=new Ve(new Bt(1.6,.9,.05),U);O.position.set(0,-.2,1.2),O.rotation.x=-.3,p.add(O);function N(te){u=te,R.visible=u,u?(o.textContent="Toggle Rider: REMOVE HELMET",t.classList.add("visible"),n.textContent="CLASS: APPROVED HELMET",i.textContent="CONF: 98.6%",s.textContent="IGNITION: READY (INTERLOCK CLOSED)",s.className="helmet-relay-status ready",a.textContent="ENERGIZED (CLOSED)",a.className="ready",c.className="hud-blink-dot green"):(o.textContent="Toggle Rider: WEAR HELMET",t.classList.remove("visible"),n.textContent="CLASS: NO HELMET",i.textContent="CONF: 94.1%",s.textContent="IGNITION: LOCKED (NO HELMET)",s.className="helmet-relay-status locked",a.textContent="DE-ENERGIZED (OPEN)",a.className="locked",c.className="hud-blink-dot red")}N(!1),o.addEventListener("click",()=>{N(!u)}),l.addEventListener("click",()=>{alert(u?"✓ Ignition Sequence Initiated! Relay clicked closed. Engine started safely.":"❌ Ignition Blocked! Helmet not detected. Wear a protective helmet to start engine.")});function k(){const te=e.parentElement.getBoundingClientRect(),ye=te.width,Ce=Math.max(340,te.height||420);_.setSize(ye,Ce,!1),d.aspect=ye/Ce,d.updateProjectionMatrix()}k(),window.addEventListener("resize",k);let X=!1,V=0;e.addEventListener("pointerdown",te=>{X=!0,V=te.clientX}),window.addEventListener("pointermove",te=>{X&&(p.rotation.y+=(te.clientX-V)*.008,V=te.clientX)}),window.addEventListener("pointerup",()=>{X=!1});const ae=new xr;function L(){f=requestAnimationFrame(L);const te=ae.getElapsedTime();X||(p.rotation.y=Math.sin(te*.6)*.15),_.render(h,d)}return f=requestAnimationFrame(L),{dispose:()=>{f&&cancelAnimationFrame(f),window.removeEventListener("resize",k),_.dispose()}}}function YS(r){r.innerHTML=`
    <div class="face-container">
      <div class="face-hud-header">
        <div class="face-badge">
          <span class="hud-blink-dot purple"></span>
          <span>3D FACIAL GEOMETRY • 468 LANDMARK MESH</span>
        </div>
        <div class="face-mode-controls">
          <button class="hud-pill-btn active" id="face-wireframe-toggle">Mode: Triangulation</button>
          <button class="hud-pill-btn" id="face-pointcloud-toggle">Landmark Nodes: ON</button>
        </div>
      </div>

      <div class="face-viewport-wrapper">
        <canvas id="face-canvas"></canvas>
        <div class="face-telemetry-hud">
          <div class="face-hud-row">
            <span>POSE ESTIMATION:</span>
            <strong id="face-pitch-val">PITCH: 0.0° • YAW: 0.0°</strong>
          </div>
          <div class="face-hud-row">
            <span>KEYPOINT DENSITY:</span>
            <span>468 Topological Vertices</span>
          </div>
          <div class="face-hud-row">
            <span>DEPTH RECONSTRUCTION:</span>
            <span class="safe">Monocular Depth (Active)</span>
          </div>
          <div class="face-hud-row">
            <span>LATENCY:</span>
            <span>8.4 ms (WebGL Accelerated)</span>
          </div>
        </div>
      </div>

      <div class="face-controls-dock">
        <span class="dock-hint">Interact: Move cursor or drag across viewport to dynamically steer facial pose tracking.</span>
      </div>
    </div>
  `;const e=r.querySelector("#face-canvas"),t=r.querySelector("#face-pitch-val"),n=r.querySelector("#face-wireframe-toggle"),i=r.querySelector("#face-pointcloud-toggle");let s=null;const a=new vr;a.background=new $e(329229);const o=new Xt(38,1,.1,100);o.position.set(0,0,5.2);const l=new _r({canvas:e,antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),a.add(new ts(8490232,1.2));const c=new es(12616956,2.5);c.position.set(0,3,5),a.add(c);const u=new Vi(3718648,3,10);u.position.set(-3,-2,2),a.add(u);const f=new dt;a.add(f);const h=new to(1.6,4),d=h.attributes.position;for(let C=0;C<d.count;C++){let P=d.getX(C),U=d.getY(C),O=d.getZ(C);U<-.4&&(P*=1+U*.35,O*=1+U*.2),O>.8&&U>0&&U<.6&&(Math.abs(P)<.22?O+=.35:Math.abs(P)<.7&&(O-=.15)),d.setXYZ(C,P,U,O)}h.computeVertexNormals();const _=new _t({color:592404,roughness:.8,metalness:.2}),g=new Ve(h,_);f.add(g);const m=new qr({color:11032055,wireframe:!0,transparent:!0,opacity:.65}),p=new Ve(h,m);f.add(p);const v=new Js({color:3718648,size:.055,transparent:!0,opacity:.85}),y=new $a(h,v);f.add(y);let M=!1;n.addEventListener("click",()=>{M=!M,g.visible=!M,n.classList.toggle("active",!M)});let w=!0;i.addEventListener("click",()=>{w=!w,y.visible=w,i.classList.toggle("active",w)});function E(){const C=e.parentElement.getBoundingClientRect(),P=C.width,U=Math.max(340,C.height||420);l.setSize(P,U,!1),o.aspect=P/U,o.updateProjectionMatrix()}E(),window.addEventListener("resize",E);let b=0,R=0;e.addEventListener("pointermove",C=>{const P=e.getBoundingClientRect();b=(C.clientX-P.left)/P.width*2-1,R=-((C.clientY-P.top)/P.height*2-1)});const S=new xr;function x(){s=requestAnimationFrame(x);const C=S.getElapsedTime(),P=b*.75+Math.sin(C*.5)*.1,U=-R*.5;f.rotation.y=Ut.lerp(f.rotation.y,P,.06),f.rotation.x=Ut.lerp(f.rotation.x,U,.06);const O=(f.rotation.x*(180/Math.PI)).toFixed(1),N=(f.rotation.y*(180/Math.PI)).toFixed(1);t.textContent=`PITCH: ${O}° • YAW: ${N}°`,l.render(a,o)}return s=requestAnimationFrame(x),{dispose:()=>{s&&cancelAnimationFrame(s),window.removeEventListener("resize",E),l.dispose()}}}function $S(r){r.innerHTML=`
    <div class="nfc-container">
      <div class="nfc-hud-header">
        <div class="nfc-badge">
          <span class="hud-blink-dot cyan"></span>
          <span>13.56 MHz HF RFID • INDUCTIVE COUPLING</span>
        </div>
        <div class="nfc-status-pill" id="nfc-status-pill">
          READER: IDLE (WAITING FOR CARD)
        </div>
      </div>

      <div class="nfc-viewport-wrapper">
        <canvas id="nfc-canvas"></canvas>
        <div class="nfc-payload-card" id="nfc-payload-card">
          <div class="payload-header">
            <span>MIFARE CLASSIC 1K • ISO/IEC 14443A</span>
            <span class="payload-tag">VERIFIED</span>
          </div>
          <div class="payload-body">
            <div class="payload-row">
              <span>CARD UID:</span>
              <strong id="nfc-uid-text">0x4A 0x9B 0x1F 0x82</strong>
            </div>
            <div class="payload-row">
              <span>HOLDER NAME:</span>
              <strong>Mritunjay Saini</strong>
            </div>
            <div class="payload-row">
              <span>STATUS:</span>
              <strong class="safe">ACCESS GRANTED • CLASS 10 LAB</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="nfc-controls-dock">
        <button class="btn primary small" id="nfc-tap-btn">Tap Card to Reader Pad</button>
        <button class="btn ghost small" id="nfc-flip-btn">Flip Card (Front / Back)</button>
        <p class="nfc-disclaimer">
          ⚡ <strong>Physical Principle:</strong> High frequency 13.56MHz electromagnetic resonance delivers both power and data to passive smart cards without any battery.
        </p>
      </div>
    </div>
  `;const e=r.querySelector("#nfc-canvas"),t=r.querySelector("#nfc-tap-btn"),n=r.querySelector("#nfc-flip-btn"),i=r.querySelector("#nfc-status-pill"),s=r.querySelector("#nfc-payload-card");let a=null;const o=new vr;o.background=new $e(329489);const l=new Xt(36,1,.1,100);l.position.set(0,1.4,5.2);const c=new _r({canvas:e,antialias:!0,alpha:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),o.add(new ts(8168665,1.4));const u=new es(16777215,2.5);u.position.set(2,5,4),o.add(u);const f=new Vi(11032055,3,10);f.position.set(-3,2,-1),o.add(f);const h=new dt;h.position.set(0,-1.2,0),o.add(h);const d=new Ve(new Bt(3,.22,2.2),new _t({color:988970,roughness:.5,metalness:.6}));h.add(d);const _=new Ve(new Ul(.8,.025,8,48),new qr({color:3718648,transparent:!0,opacity:.7}));_.rotation.x=Math.PI/2,_.position.y=.12,h.add(_);const g=new dt;g.position.set(0,.5,0),o.add(g);const m=new xm({color:592139,metalness:.4,roughness:.2,clearcoat:1,clearcoatRoughness:.1}),p=new Ve(new Bt(2.4,1.5,.04),m);g.add(p);const v=new _t({color:16096779,metalness:.9,roughness:.2}),y=new Ve(new Bt(.42,.35,.05),v);y.position.set(-.65,.15,.02),g.add(y);const M=new qr({color:9133302}),w=new Ve(new Bt(2.36,.2,.042),M);w.position.set(0,-.4,.02),g.add(w);const E=new Ve(new bd(.2,.35,32),new qr({color:3462041,transparent:!0,opacity:0,side:hi}));E.rotation.x=-Math.PI/2,E.position.set(0,-1.05,0),o.add(E);let b=!1,R=.5,S=0,x=0,C=!1;t.addEventListener("click",()=>{b||(b=!0,i.textContent="READER: CARD DETECTED • INDUCTION ACTIVE",i.className="nfc-status-pill active",R=-.95,S=.4,setTimeout(()=>{E.scale.set(1,1,1),E.material.opacity=.9,i.textContent="READER: UID VERIFIED • ACCESS GRANTED",i.className="nfc-status-pill verified",s.classList.add("visible"),setTimeout(()=>{R=.5,S=0,b=!1},1800)},600))}),n.addEventListener("click",()=>{C=!C,x=C?Math.PI:0});function P(){const N=e.parentElement.getBoundingClientRect(),k=N.width,X=Math.max(340,N.height||420);c.setSize(k,X,!1),l.aspect=k/X,l.updateProjectionMatrix()}P(),window.addEventListener("resize",P);const U=new xr;function O(){a=requestAnimationFrame(O);const N=U.getElapsedTime();g.position.y=Ut.lerp(g.position.y,R+Math.sin(N*2)*.05,.08),g.rotation.x=Ut.lerp(g.rotation.x,S,.08),g.rotation.y=Ut.lerp(g.rotation.y,x+Math.sin(N)*.08,.08),E.material.opacity>.01&&(E.scale.x+=.08,E.scale.y+=.08,E.material.opacity=Ut.lerp(E.material.opacity,0,.04)),c.render(o,l)}return a=requestAnimationFrame(O),{dispose:()=>{a&&cancelAnimationFrame(a),window.removeEventListener("resize",P),c.dispose()}}}function jS(r){r.innerHTML=`
    <div class="fingerprint-container">
      <div class="fingerprint-hud-header">
        <div class="fingerprint-badge">
          <span class="hud-blink-dot cyan" id="fp-hud-dot"></span>
          <span>OPTICAL PRISM SCANNER • 500 DPI MINUTIAE</span>
        </div>
        <div class="fingerprint-match-status" id="fp-status-pill">
          STATUS: READY FOR ENROLLMENT / SCAN
        </div>
      </div>

      <div class="fingerprint-viewport-wrapper">
        <canvas id="fingerprint-canvas"></canvas>
        <div class="fingerprint-telemetry-hud">
          <div class="fp-telemetry-card">
            <span>EXTRACTION ALGORITHM:</span>
            <strong>Bifurcation & Ridge-Ending Extraction</strong>
          </div>
          <div class="fp-telemetry-card">
            <span>EXTRACTED MINUTIAE:</span>
            <strong id="fp-minutiae-count">42 Feature Points</strong>
          </div>
          <div class="fp-telemetry-card">
            <span>MATCH SCORE:</span>
            <strong id="fp-score-val" class="safe">96.8% (VERIFIED)</strong>
          </div>
          <div class="fp-telemetry-card">
            <span>FALSE ACCEPTANCE RATE (FAR):</span>
            <span>&lt; 0.001% (Local Hash)</span>
          </div>
        </div>
      </div>

      <div class="fingerprint-controls-dock">
        <button class="btn primary small" id="fp-scan-btn">Trigger Laser Sweep Scan</button>
        <button class="btn ghost small" id="fp-toggle-minutiae">Toggle Minutiae Points: ON</button>
        <p class="fp-disclaimer">
          🔒 <strong>Biometric Security:</strong> Optical scanners convert friction ridges into one-way mathematical feature vectors. Raw fingerprint images are never permanently stored.
        </p>
      </div>
    </div>
  `;const e=r.querySelector("#fingerprint-canvas"),t=e.getContext("2d"),n=r.querySelector("#fp-scan-btn"),i=r.querySelector("#fp-toggle-minutiae"),s=r.querySelector("#fp-status-pill"),a=r.querySelector("#fp-score-val"),o=r.querySelector("#fp-hud-dot");let l=0,c=0,u=0,f=!1,h=!0,d=null;function _(){const p=e.parentElement.getBoundingClientRect();l=p.width,c=Math.max(340,p.height||400),e.width=l*window.devicePixelRatio,e.height=c*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio)}_(),window.addEventListener("resize",_);const g=[];for(let p=0;p<42;p++){const v=Math.random()*Math.PI*2,y=Math.random()*85+15;g.push({xOffset:Math.cos(v)*y*.8,yOffset:Math.sin(v)*y*1.3,type:Math.random()>.5?"Bifurcation":"Ridge Ending",detected:!1})}n.addEventListener("click",()=>{f=!0,u=0,g.forEach(p=>p.detected=!1),s.textContent="SCANNING: EXTRACTING FRICTION RIDGES...",s.className="fingerprint-match-status scanning",o.className="hud-blink-dot cyan"}),i.addEventListener("click",()=>{h=!h,i.textContent=`Toggle Minutiae Points: ${h?"ON":"OFF"}`});function m(){t.clearRect(0,0,l,c);const p=l/2,v=c/2;t.strokeStyle="rgba(56, 189, 248, 0.05)",t.lineWidth=1;const y=24;for(let w=0;w<l;w+=y)t.beginPath(),t.moveTo(w,0),t.lineTo(w,c),t.stroke();for(let w=0;w<c;w+=y)t.beginPath(),t.moveTo(0,w),t.lineTo(l,w),t.stroke();const M=26;for(let w=1;w<=M;w++){const E=w*4.8,b=w*7.6;t.strokeStyle="#dfd0b8",t.lineWidth=1.8,t.shadowColor="#0284c7",t.shadowBlur=6,t.beginPath(),t.ellipse(p,v-10,E,b,0,0,Math.PI*2),t.stroke(),t.shadowBlur=0}if(f){u+=.008,u>1&&(f=!1,s.textContent="STATUS: MATCH VERIFIED (ID: 001)",s.className="fingerprint-match-status verified",a.textContent="98.9% (VERIFIED)",a.className="safe",o.className="hud-blink-dot green");const w=v-170+u*340,E=t.createLinearGradient(p-150,w,p+150,w);E.addColorStop(0,"transparent"),E.addColorStop(.5,"#dfd0b8"),E.addColorStop(1,"transparent"),t.strokeStyle=E,t.lineWidth=3,t.shadowColor="#dfd0b8",t.shadowBlur=18,t.beginPath(),t.moveTo(p-150,w),t.lineTo(p+150,w),t.stroke(),t.shadowBlur=0,g.forEach(b=>{const R=v+b.yOffset;w>=R&&(b.detected=!0)})}h&&g.forEach(w=>{const E=p+w.xOffset,b=v+w.yOffset;(w.detected||!f)&&(t.strokeStyle="#f59e0b",t.lineWidth=1.5,t.beginPath(),t.arc(E,b,4.5,0,Math.PI*2),t.stroke(),t.fillStyle="#f59e0b",t.beginPath(),t.arc(E,b,1.8,0,Math.PI*2),t.fill())}),d=requestAnimationFrame(m)}return d=requestAnimationFrame(m),{dispose:()=>{d&&cancelAnimationFrame(d),window.removeEventListener("resize",_)}}}let fn=null;function vf(r){let e=document.getElementById("project-modal");e||(e=document.createElement("div"),e.id="project-modal",e.className="project-modal-backdrop",document.body.appendChild(e)),fn&&typeof fn.dispose=="function"&&(fn.dispose(),fn=null),e.innerHTML=`
    <div class="project-modal-wrapper" role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div class="modal-header">
        <div class="modal-title-group">
          <span class="modal-eyebrow">PROJECT ${r.number} • ${r.type.toUpperCase()}</span>
          <h2 id="modal-project-title">${r.title}</h2>
        </div>
        <div class="modal-actions">
          <span class="modal-status-badge">${r.status}</span>
          <button class="modal-close-btn" id="modal-close-btn" aria-label="Close project modal">✕</button>
        </div>
      </div>

      <div class="modal-tabs">
        <button class="modal-tab-btn active" data-tab="demo">Interactive Simulation</button>
        <button class="modal-tab-btn" data-tab="specs">Engineering Specs & Architecture</button>
      </div>

      <div class="modal-content">
        <!-- Interactive 3D / 2D Simulation Tab -->
        <div class="modal-tab-pane active" id="tab-demo">
          <div class="project-scene-host" id="project-scene-host"></div>
        </div>

        <!-- Specifications Tab -->
        <div class="modal-tab-pane" id="tab-specs">
          <div class="specs-grid">
            <div class="specs-section">
              <h3>System Overview</h3>
              <p>${r.overview}</p>

              <h3>Working Principle & Logic</h3>
              <p>${r.workingPrinciple}</p>

              <h3>Target Applications</h3>
              <ul class="specs-list">
                ${r.applications.map(a=>`<li>${a}</li>`).join("")}
              </ul>
            </div>

            <div class="specs-section">
              <h3>Hardware & Component Bill of Materials</h3>
              <table class="specs-table">
                <thead>
                  <tr><th>Subsystem</th><th>Specification & Role</th></tr>
                </thead>
                <tbody>
                  ${r.components.map(a=>`<tr><td><strong>${a.name}</strong></td><td>${a.spec}</td></tr>`).join("")}
                </tbody>
              </table>

              <h3>Data & Signal Pipeline</h3>
              <ol class="specs-pipeline">
                ${r.architecture.map(a=>`<li>${a}</li>`).join("")}
              </ol>

              <div class="specs-disclaimer">
                <strong>Project Integrity:</strong> ${r.disclaimer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,e.classList.add("open"),document.body.style.overflow="hidden";const t=e.querySelector("#project-scene-host");KS(r.id,t);const n=()=>{fn&&typeof fn.dispose=="function"&&(fn.dispose(),fn=null),e.classList.remove("open"),document.body.style.overflow=""};e.querySelector("#modal-close-btn").addEventListener("click",n),e.addEventListener("click",a=>{a.target===e&&n()}),window.addEventListener("keydown",a=>{a.key==="Escape"&&e.classList.contains("open")&&n()});const i=e.querySelectorAll(".modal-tab-btn"),s=e.querySelectorAll(".modal-tab-pane");i.forEach(a=>{a.addEventListener("click",()=>{i.forEach(l=>l.classList.remove("active")),s.forEach(l=>l.classList.remove("active")),a.classList.add("active");const o=e.querySelector(`#tab-${a.dataset.tab}`);o&&o.classList.add("active")})})}function KS(r,e){if(e)switch(r){case"radar-system":fn=GS(e);break;case"smart-agriculture":fn=VS(e);break;case"lpg-safety":fn=WS(e);break;case"voice-assistant":fn=XS(e);break;case"helmet-detection":fn=qS(e);break;case"face-recognition":fn=YS(e);break;case"nfc-card":fn=$S(e);break;case"fingerprint-system":fn=jS(e);break;default:e.innerHTML=`<div class="p-8 text-center text-slate-400">Interactive demo for ${r} loaded.</div>`}}async function ZS(r){const e="mritunjay20",t=[{name:"smart-radar-system",description:"Ultrasonic 180° scanning radar with Arduino microcontroller and Processing / Three.js display.",language:"C++",stargazers_count:0,forks_count:0,html_url:"https://github.com/mritunjay20"},{name:"smart-agriculture-iot",description:"Automated soil moisture monitoring, rain detection canopy, and irrigation relay firmware.",language:"Arduino / C++",stargazers_count:0,forks_count:0,html_url:"https://github.com/mritunjay20"},{name:"interactive-3d-portfolio",description:"Futuristic 3D developer portfolio featuring voxel avatar, celestial skill orbs, and landmark journey world.",language:"JavaScript / WebGL",stargazers_count:0,forks_count:0,html_url:"https://github.com/mritunjay20"},{name:"embedded-sensor-prototypes",description:"Collection of sensor driver routines: MQ-2 gas detection, RC522 RFID, and optical fingerprint matching.",language:"C++",stargazers_count:0,forks_count:0,html_url:"https://github.com/mritunjay20"}];r.innerHTML=`
    <div class="github-profile-card">
      <div class="github-user-header">
        <div class="github-avatar-circle">
          <img src="/assets/portrait.jpg" alt="Mritunjay" onerror="this.src='/assets/about-photo.png'" />
        </div>
        <div class="github-meta">
          <h3>Mritunjay Saini</h3>
          <a href="https://github.com/${e}" target="_blank" rel="noopener noreferrer" class="github-handle">@${e} ↗</a>
          <p>Class 10 Student • Aspiring Developer • Robotics & IoT Enthusiast</p>
        </div>
        <div class="github-profile-link">
          <a href="https://github.com/${e}" target="_blank" rel="noopener noreferrer" class="btn primary small">
            View on GitHub
          </a>
        </div>
      </div>

      <div class="github-repos-grid" id="github-repos-grid">
        <div class="github-loading">Fetching repositories from GitHub API...</div>
      </div>

      <div class="github-contribution-preview">
        <div class="contrib-header">
          <span>PUBLIC ACTIVITY / COMMIT MATRIX</span>
          <span class="contrib-live-tag">GITHUB LIVE SYNC</span>
        </div>
        <div class="contrib-matrix" id="contrib-matrix"></div>
        <p class="contrib-caption">
          Displaying confirmed public developer activity for <code>${e}</code>. Source repositories update dynamically when new commits are pushed.
        </p>
      </div>
    </div>
  `;const n=r.querySelector("#github-repos-grid"),i=r.querySelector("#contrib-matrix");JS(i);try{const s=await fetch(`https://api.github.com/users/${e}/repos?sort=updated&per_page=6`);if(s.ok){const a=await s.json();if(Array.isArray(a)&&a.length>0){Lc(n,a);return}}Lc(n,t)}catch(s){console.info("Using curated GitHub repository data (API rate limit or offline):",s),Lc(n,t)}}function Lc(r,e){r.innerHTML=e.slice(0,4).map(t=>`
    <article class="github-repo-card">
      <div class="repo-card-top">
        <span class="repo-book-icon">📖</span>
        <a href="${t.html_url}" target="_blank" rel="noopener noreferrer" class="repo-title">
          ${t.name} ↗
        </a>
      </div>
      <p class="repo-desc">${t.description||"Open source engineering prototype & code repository."}</p>
      <div class="repo-meta">
        <span class="repo-lang"><span class="lang-dot"></span> ${t.language||"Code"}</span>
        <span class="repo-stars">★ ${t.stargazers_count??0}</span>
        <span class="repo-forks">⑂ ${t.forks_count??0}</span>
      </div>
    </article>
  `).join("")}async function JS(r){r.innerHTML='<div class="city-loading">Loading real public contribution activity…</div>';try{const e=await fetch("https://github-contributions-api.jogruber.de/v4/mritunjay20?y=last");if(!e.ok)throw new Error("API unavailable");const t=await e.json(),n=(t.contributions||[]).slice(-364);if(!n.length)throw new Error("No data");const a=Math.max(1,...n.map(o=>Number(o.count)||0));r.innerHTML='<div class="contribution-city"><div class="city-skyline-labels"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div><div class="city-grid"></div></div><div class="city-legend"><span><i class="city-level-0"></i> 0</span><span><i class="city-level-1"></i> 1–3</span><span><i class="city-level-2"></i> 4–7</span><span><i class="city-level-3"></i> 8+</span><span class="city-source">Live public GitHub data</span></div>';const s=r.querySelector(".city-grid");n.forEach((o,l)=>{const c=Number(o.count)||0,d=c===0?0:c<=3?1:c<=7?2:3,h=c===0?5:12+Math.round(c/a*56),i=document.createElement("span");i.className="city-building city-level-"+d;i.style.setProperty("--building-height",h+"px");i.title=o.date+": "+c+" contributions";s.appendChild(i)});const caption=r.closest(".github-profile-card")?.querySelector(".contrib-caption");if(caption)caption.textContent=(typeof t.total?.lastYear==="number"?t.total.lastYear.toLocaleString()+" contributions in the last year":"Public contribution activity")+" for mritunjay20. Building heights reflect daily counts."}catch(e){r.innerHTML='<p class="city-loading">Live contribution data could not load. Open GitHub to view the verified contribution graph.</p><a class="btn ghost" href="https://github.com/mritunjay20?tab=overview" target="_blank" rel="noopener noreferrer">View GitHub contributions ↗</a>'}}function QS(r){r.innerHTML=`
    <div class="contact-wrapper"><a class="contact-phone-link" href="tel:+919758350543">Call / WhatsApp: +91 9758350543 ↗</a>
      <div class="contact-form-card">
        <div class="contact-card-header">
          <h3>Send a message</h3>
          <p>For project discussions, collaboration, or exhibition feedback, send a message below.</p>
        </div>

        <form id="portfolio-contact-form" novalidate>
          <div class="form-group">
            <label for="contact-name">Your Full Name <span class="required">*</span></label>
            <input type="text" id="contact-name" name="name" placeholder="e.g. Alex Sharma" required />
            <span class="field-error" id="name-error"></span>
          </div>

          <div class="form-group">
            <label for="contact-email">Email Address <span class="required">*</span></label>
            <input type="email" id="contact-email" name="email" placeholder="e.g. alex@example.com" required />
            <span class="field-error" id="email-error"></span>
          </div>

          <div class="form-group">
            <label for="contact-subject">Topic / Subject</label>
            <input type="text" id="contact-subject" name="subject" placeholder="e.g. Smart Radar Project Inquiry" />
          </div>

          <div class="form-group">
            <label for="contact-message">Message <span class="required">*</span></label>
            <textarea id="contact-message" name="message" rows="4" placeholder="Write your message or inquiry here..." required></textarea>
            <span class="field-error" id="message-error"></span>
          </div>

          <div class="form-feedback" id="form-feedback"></div>

          <div class="form-actions">
            <button type="submit" class="btn primary" id="contact-submit-btn">
              <span>Send Message</span>
              <span class="btn-spinner" id="btn-spinner"></span>
            </button>
            <a href="mailto:mritunjaysaini20@gmail.com?subject=Portfolio%20Inquiry" class="btn ghost" id="contact-mailto-btn">
              Open in Default Email Client ↗
            </a>
          </div>

          <p class="form-disclaimer">
            📬 <strong>Direct Delivery:</strong> If no local SMTP relay is configured, clicking Send will draft your message directly in your mail client addressed to Mritunjay.
          </p>
        </form>
      </div>

      <div class="contact-heart-stage">
        <div class="heart-pulse-halo"></div>
        <div class="heart-geometric-core" id="heart-core">
          <svg viewBox="0 0 100 100" class="heart-svg">
            <defs>
              <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#c084fc" />
                <stop offset="50%" stop-color="#948979" />
                <stop offset="100%" stop-color="#dfd0b8" />
              </linearGradient>
            </defs>
            <path d="M50,85 C50,85 15,60 15,35 C15,22 25,12 37,12 C44,12 50,17 50,17 C50,17 56,12 63,12 C75,12 85,22 85,35 C85,60 50,85 50,85 Z" fill="url(#heartGrad)" />
          </svg>
        </div>
        <div class="heart-telemetry">
          <span>CONNECTION CORE ACTIVE</span>
          <small>Move your mouse to rotate the 3D heart</small>
        </div>
      </div>
    </div>
  `;const e=r.querySelector("#portfolio-contact-form"),t=r.querySelector("#contact-name"),n=r.querySelector("#contact-email"),i=r.querySelector("#contact-subject"),s=r.querySelector("#contact-message"),a=r.querySelector("#name-error"),o=r.querySelector("#email-error"),l=r.querySelector("#message-error"),c=r.querySelector("#form-feedback"),u=r.querySelector("#contact-submit-btn"),f=r.querySelector("#btn-spinner"),h=r.querySelector("#heart-core");h.addEventListener("pointerenter",()=>{h.classList.add("fast-beat")}),h.addEventListener("pointerleave",()=>{h.classList.remove("fast-beat")}),e.addEventListener("submit",d=>{d.preventDefault(),a.textContent="",o.textContent="",l.textContent="",c.textContent="",c.className="form-feedback";let _=!1;t.value.trim()||(a.textContent="Please enter your name.",_=!0);const g=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;(!n.value.trim()||!g.test(n.value.trim()))&&(o.textContent="Please provide a valid email address.",_=!0),(!s.value.trim()||s.value.trim().length<8)&&(l.textContent="Message must be at least 8 characters long.",_=!0),!_&&(u.disabled=!0,f.classList.add("active"),c.textContent="Packaging transmission packet...",setTimeout(()=>{u.disabled=!1,f.classList.remove("active");const m=encodeURIComponent(i.value.trim()||"Portfolio Contact Inquiry"),p=encodeURIComponent(`From: ${t.value.trim()}
Email: ${n.value.trim()}

Message:
${s.value.trim()}`);c.innerHTML=`
        <span class="safe">✓ Transmission generated!</span>
        <p style="margin:6px 0 0;font-size:12px;color:#cbd5e1;">
          Launching your email client to dispatch this message directly to Mritunjay...
        </p>
      `,window.location.href=`mailto:mritunjaysaini20@gmail.com?subject=${m}&body=${p}`},1e3))})}function eb(){const r=document.getElementById("main-nav"),e=document.getElementById("menu-toggle"),t=document.querySelectorAll("#main-nav a");e&&r&&(e.addEventListener("click",()=>{const o=r.classList.toggle("nav-open");e.setAttribute("aria-expanded",String(o)),e.textContent=o?"✕":"☰"}),t.forEach(o=>{o.addEventListener("click",()=>{r.classList.remove("nav-open"),e.setAttribute("aria-expanded","false"),e.textContent="☰"})}));const n=document.querySelectorAll("main section[id]"),i={rootMargin:"-30% 0px -50% 0px",threshold:0},s=new IntersectionObserver(o=>{o.forEach(l=>{if(l.isIntersecting){const c=l.target.id;t.forEach(u=>{const f=u.getAttribute("href");u.classList.toggle("active",f===`#${c}`)})}})},i);n.forEach(o=>s.observe(o)),window.matchMedia("(prefers-reduced-motion: reduce)").matches&&document.documentElement.classList.add("reduced-motion")}Ui.registerPlugin(it);const Ft=(r,e=document)=>e.querySelector(r),ja=(r,e=document)=>[...e.querySelectorAll(r)],xf=Ft("#current-year");xf&&(xf.textContent=new Date().getFullYear());function tb(){const r=Ft("#projects-grid");r&&(r.innerHTML=lh.map(e=>`
    <article class="project-card reveal" data-project-id="${e.id}" tabindex="0" role="button" aria-label="Open ${e.title} project details">
      <div class="project-card-header">
        <span>${e.number} / ${e.type}</span>
        <span class="project-status-pill">${e.status}</span>
      </div>

      <div class="project-art-stage">
        <div class="project-art-grid"></div>
        <span class="project-symbol" style="color: ${e.accentColor};">${e.symbol}</span>
      </div>

      <div class="project-card-body">
        <h3>
          <span>${e.title}</span>
          <span class="project-arrow">↗</span>
        </h3>
        <p>${e.shortDesc}</p>
        <div class="project-tag-row">
          ${e.tags.map(t=>`<span>${t}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join(""),ja(".project-card").forEach(e=>{const t=lh.find(n=>n.id===e.dataset.projectId);e.addEventListener("click",()=>vf(t)),e.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),vf(t))})}))}function nb(){const r=Ft("#capabilities-grid");r&&(r.innerHTML=l0.map(e=>`
    <article class="capability-card reveal">
      <span class="cap-number">${e.number}</span>
      <span class="cap-icon">${e.icon}</span>
      <h3>${e.title}</h3>
      <span class="cap-tagline">${e.tagline}</span>
      <p>${e.description}</p>
      <ul class="cap-highlights">
        ${e.highlights.map(t=>`<li>${t}</li>`).join("")}
      </ul>
    </article>
  `).join(""))}function ib(){const r=Ft("#skills-tags-container");r&&(r.innerHTML=ml.map(e=>`
    <button class="skill-tag-pill" data-skill-id="${e.id}" title="Click to view ${e.name} notes">
      <span class="lang-dot" style="background: ${e.accent};"></span>
      <span>${e.name}</span>
    </button>
  `).join(""),ja(".skill-tag-pill").forEach(e=>{e.addEventListener("click",()=>{const t=ml.find(n=>n.id===e.dataset.skillId);Mm(t)})}))}function Mm(r){if(!r)return;const e=Ft("#skill-detail-modal");if(!e)return;e.innerHTML=`
    <div class="detail-card">
      <button class="detail-close-btn" id="skill-close-btn" aria-label="Close modal">✕</button>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
        <span class="lang-dot" style="width:12px;height:12px;background:${r.accent};"></span>
        <h3 style="font-size:20px;color:#fff;">${r.name}</h3>
        <span style="font-family:var(--font-mono);font-size:10px;color:var(--cyan-accent);background:rgba(56,189,248,0.12);padding:2px 8px;border-radius:99px;">${r.category}</span>
      </div>
      <p style="font-size:13px;line-height:1.8;color:var(--text-muted);margin-bottom:14px;">${r.description}</p>
      <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-sm);padding:14px;margin-bottom:18px;">
        <strong style="display:block;font-size:12px;color:#fff;margin-bottom:4px;">How Mritunjay applies this:</strong>
        <p style="font-size:12px;color:var(--text-dim);margin:0;line-height:1.6;">${r.experience}</p>
      </div>
      <button class="btn primary small" id="skill-ok-btn" style="width:100%;">Close Details</button>
    </div>
  `,e.classList.add("open");const t=()=>e.classList.remove("open");e.querySelector("#skill-close-btn").onclick=t,e.querySelector("#skill-ok-btn").onclick=t,e.onclick=n=>{n.target===e&&t()}}function rb(){const r=Ft("#milestones-list");r&&(r.innerHTML=Da.map((e,t)=>`
    <article class="milestone-item ${e.done?"done":""}" data-milestone-id="${e.id}" tabindex="0" role="button">
      <div class="milestone-marker">
        ${e.done?"✓":String(t+1).padStart(2,"0")}
      </div>
      <div class="milestone-body">
        <span class="milestone-landmark-tag">📍 Landmark: ${e.landmark}</span>
        <h4>${e.title}</h4>
        <p>${e.description}</p>
      </div>
    </article>
  `).join(""),ja(".milestone-item").forEach(e=>{e.addEventListener("click",()=>{const t=Da.find(n=>n.id===e.dataset.milestoneId);Sm(t)})}))}function Sm(r){if(!r)return;const e=Ft("#milestone-detail-modal");if(!e)return;e.innerHTML=`
    <div class="detail-card">
      <button class="detail-close-btn" id="milestone-close-btn" aria-label="Close modal">✕</button>
      <span style="font-family:var(--font-mono);font-size:10px;color:var(--cyan-accent);letter-spacing:0.14em;">MILESTONE STATION • ${r.category.toUpperCase()}</span>
      <h3 style="font-size:22px;color:#fff;margin:6px 0 10px;">${r.title}</h3>
      <div style="background:rgba(56,189,248,0.08);border:1px solid rgba(56,189,248,0.25);border-radius:var(--radius-sm);padding:10px 14px;margin-bottom:16px;">
        <strong style="color:var(--cyan-accent);font-size:12px;">3D World Landmark: ${r.landmark}</strong>
        <p style="font-size:11px;color:var(--text-muted);margin:2px 0 0;">${r.landmarkDescription}</p>
      </div>
      <p style="font-size:13px;line-height:1.8;color:var(--text-muted);margin-bottom:16px;">${r.description}</p>
      <strong style="font-size:12px;color:#fff;display:block;margin-bottom:8px;">Core Engineering Learnings:</strong>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;font-size:12px;color:var(--text-muted);margin-bottom:20px;">
        ${r.learnings.map(n=>`<li style="display:flex;gap:6px;"><span style="color:var(--emerald-accent);">▹</span> ${n}</li>`).join("")}
      </ul>
      <button class="btn primary small" id="milestone-ok-btn" style="width:100%;">Close Milestone</button>
    </div>
  `,e.classList.add("open");const t=()=>e.classList.remove("open");e.querySelector("#milestone-close-btn").onclick=t,e.querySelector("#milestone-ok-btn").onclick=t,e.onclick=n=>{n.target===e&&t()}}function sb(){const r=Ft("#socials-grid");r&&(r.innerHTML=c0.map(e=>`
    <a class="social-card" href="${e.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${e.name} profile">
      <div class="social-symbol-box" style="border-color: ${e.iconColor}33; color: ${e.iconColor};">
        ${e.symbol}
      </div>
      <div class="social-meta-info">
        <strong>${e.name} ${e.isVerified?"✓":""}</strong>
        <small>${e.handle}</small>
        <em>${e.description}</em>
      </div>
      <span class="social-arrow">↗</span>
    </a>
  `).join(""))}document.addEventListener("DOMContentLoaded",()=>{var u,f,h;tb(),nb(),ib(),rb(),sb(),eb();const r=Ft("#avatar-canvas"),e=Ft("#avatar-tooltip");let t=null;if(r)try{t=kS(r,e),ja(".hotspot-pill").forEach(g=>{g.addEventListener("click",()=>{const m=g.dataset.hotspot;t.handleAction(m)})});const d=Ft("#outfit-suit-btn"),_=Ft("#outfit-hoodie-btn");d&&_&&(d.addEventListener("click",()=>{d.classList.add("active"),_.classList.remove("active"),t.setOutfit("suit")}),_.addEventListener("click",()=>{_.classList.add("active"),d.classList.remove("active"),t.setOutfit("hoodie")}))}catch(d){console.warn("Avatar 3D canvas could not initialize:",d)}const n=Ft("#brain-visual-container");if(n)try{BS(n)}catch(d){console.warn("Brain canvas could not initialize:",d)}const i=Ft("#skills-canvas"),s=Ft("#skills-tooltip");if(i)try{zS(i,s,d=>{Mm(d)})}catch(d){console.warn("Skills 3D canvas could not initialize:",d)}const a=Ft("#world-canvas");if(a)try{const d=HS(a,_=>{Sm(_)});(u=Ft("#world-zoom-in"))==null||u.addEventListener("click",()=>d.zoomIn()),(f=Ft("#world-zoom-out"))==null||f.addEventListener("click",()=>d.zoomOut()),(h=Ft("#world-reset"))==null||h.addEventListener("click",()=>d.resetView())}catch(d){console.warn("World 3D canvas could not initialize:",d)}const o=Ft("#github-section-container");o&&ZS(o);const l=Ft("#contact-form-container");l&&QS(l),ja(".reveal").forEach(d=>{Ui.fromTo(d,{y:28,opacity:0},{y:0,opacity:1,duration:.85,ease:"power3.out",scrollTrigger:{trigger:d,start:"top 88%",once:!0}})})});document.addEventListener("visibilitychange",()=>{document.hidden?document.title="💤 Mritunjay Saini — Developer & Maker":document.title="Mritunjay Saini — 3D Developer & Robotics Portfolio"});

document.addEventListener('pointermove',function(e){const h=document.querySelector('#heart-core');if(!h||!h.matches(':hover'))return;const r=h.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;h.style.transform=`perspective(700px) rotateX(${-y*28}deg) rotateY(${x*34}deg) translateZ(12px)`;});
document.addEventListener('pointerleave',function(){const h=document.querySelector('#heart-core');if(h)h.style.transform='rotateX(0deg) rotateY(0deg)';});
