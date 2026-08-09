(()=>{function Mi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Iu(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ns={duration:.5,overwrite:!1,delay:0},nc,Qe,Me,qn=1e8,ge=1/qn,Xl=Math.PI*2,Im=Xl/4,Dm=0,Du=Math.sqrt,Um=Math.cos,Nm=Math.sin,Fe=function(t){return typeof t=="string"},Ce=function(t){return typeof t=="function"},bi=function(t){return typeof t=="number"},jo=function(t){return typeof t=="undefined"},pi=function(t){return typeof t=="object"},Cn=function(t){return t!==!1},ic=function(){return typeof window!="undefined"},Wo=function(t){return Ce(t)||Fe(t)},Uu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},je=Array.isArray,ql=/(?:-?\.?\d|\.)+/gi,rc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sc=/[+-]=-?[.\d]+/,Nu=/[^,'"\[\]\s]+/gi,Om=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ee,fi,Yl,oc,Fn={},Zo={},Ou,Fu=function(t){return(Zo=yr(t,Fn))&&tn},ta=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},no=function(t,e){return!e&&console.warn(t)},Bu=function(t,e){return t&&(Fn[t]=e)&&Zo&&(Zo[t]=e)||Fn},io=function(){return 0},Fm={suppressEvents:!0,isStart:!0,kill:!1},Xo={suppressEvents:!0,kill:!1},Bm={suppressEvents:!0},ac={},Wi=[],Zl={},zu,Tn={},zl={},wu=30,qo=[],lc="",cc=function(t){var e=t[0],n,i;if(pi(e)||Ce(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=qo.length;i--&&!qo[i].targetTest(e););n=qo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new fc(t[i],n)))||t.splice(i,1);return t},Xi=function(t){return t._gsap||cc(Yn(t))[0]._gsap},hc=function(t,e,n){return(n=t[e])&&Ce(n)?t[e]():jo(n)&&t.getAttribute&&t.getAttribute(e)||n},hn=function(t,e){return(t=t.split(",")).forEach(e)||t},Re=function(t){return Math.round(t*1e5)/1e5||0},Ve=function(t){return Math.round(t*1e7)/1e7||0},Sr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},zm=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Jo=function(){var t=Wi.length,e=Wi.slice(0),n,i;for(Zl={},Wi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ku=function(t,e,n,i){Wi.length&&!Qe&&Jo(),t.render(e,n,i||Qe&&e<0&&(t._initted||t._startAt)),Wi.length&&!Qe&&Jo()},Vu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Nu).length<2?e:Fe(t)?t.trim():t},Hu=function(t){return t},Zn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},km=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},yr=function(t,e){for(var n in e)t[n]=e[n];return t},Tu=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=pi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},$o=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},js=function(t){var e=t.parent||Ee,n=t.keyframes?km(je(t.keyframes)):Zn;if(Cn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Vm=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Gu=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},ea=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},qi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},_r=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Hm=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Jl=function(t,e,n,i){return t._startAt&&(Qe?t._startAt.revert(Xo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Gm=function r(t){return!t||t._ts&&r(t.parent)},Au=function(t){return t._repeat?is(t._tTime,t=t.duration()+t._rDelay)*t:0},is=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Ko=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},na=function(t){return t._end=Ve(t._start+(t._tDur/Math.abs(t._ts||t._rts||ge)||0))},ia=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ve(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),na(t),n._dirty||_r(n,t)),t},Wu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ko(t.rawTime(),e),(!e._dur||oo(0,e.totalDuration(),n)-e._tTime>ge)&&e.render(n,!0)),_r(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ge}},di=function(t,e,n,i){return e.parent&&qi(e),e._start=Ve((bi(n)?n:n||t!==Ee?Xn(t,n,e):t._time)+e._delay),e._end=Ve(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Gu(t,e,"_first","_last",t._sort?"_start":0),$l(e)||(t._recent=e),i||Wu(t,e),t._ts<0&&ia(t,t._tTime),t},Xu=function(t,e){return(Fn.ScrollTrigger||ta("scrollTrigger",e))&&Fn.ScrollTrigger.create(e,t)},qu=function(t,e,n,i,s){if(mc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Qe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&zu!==An.frame)return Wi.push(t),t._lazy=[s,i],1},Wm=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},$l=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Xm=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Wm(t)&&!(!t._initted&&$l(t))||(t._ts<0||t._dp._ts<0)&&!$l(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=oo(0,t._tDur,e),h=is(l,o),t._yoyo&&h&1&&(a=1-a),h!==is(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Qe||i||t._zTime===ge||!e&&t._zTime){if(!t._initted&&qu(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ge:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Jl(t,e,n,!0),t._onUpdate&&!n&&On(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&On(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&qi(t,1),!n&&!Qe&&(On(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},qm=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},rs=function(t,e,n,i){var s=t._repeat,a=Ve(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ve(a*(s+1)+t._rDelay*s):a,o>0&&!i&&ia(t,t._tTime=t._tDur*o),t.parent&&na(t),n||_r(t.parent,t),t},Cu=function(t){return t instanceof qe?_r(t):rs(t,t._dur)},Ym={_start:0,endTime:io,totalDuration:io},Xn=function r(t,e,n){var i=t.labels,s=t._recent||Ym,a=t.duration()>=qn?s.endTime(!1):t._dur,o,l,c;return Fe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(je(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},to=function(t,e,n){var i=bi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Cn(l.vars.inherit)&&l.parent;a.immediateRender=Cn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Le(e[0],a,e[s+1])},Yi=function(t,e){return t||t===0?e(t):e},oo=function(t,e,n){return n<t?t:n>e?e:n},Ye=function(t,e){return!Fe(t)||!(e=Om.exec(t))?"":e[1]},Zm=function(t,e,n){return Yi(n,function(i){return oo(t,e,i)})},Kl=[].slice,Yu=function(t,e){return t&&pi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&pi(t[0]))&&!t.nodeType&&t!==fi},Jm=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Fe(i)&&!e||Yu(i,1)?(s=n).push.apply(s,Yn(i)):n.push(i)})||n},Yn=function(t,e,n){return Me&&!e&&Me.selector?Me.selector(t):Fe(t)&&!n&&(Yl||!ss())?Kl.call((e||oc).querySelectorAll(t),0):je(t)?Jm(t,n):Yu(t)?Kl.call(t,0):t?[t]:[]},Ql=function(t){return t=Yn(t)[0]||no("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Yn(e,n.querySelectorAll?n:n===t?no("Invalid scope")||oc.createElement("div"):t)}},Zu=function(t){return t.sort(function(){return .5-Math.random()})},Ju=function(t){if(Ce(t))return t;var e=pi(t)?t:{each:t},n=xr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Fe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,_){var g=(_||e).length,m=a[g],p,y,x,E,A,T,b,I,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,qn])[1],!v){for(b=-qn;b<(b=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=a[g]=[],p=l?Math.min(v,g)*h-.5:i%v,y=v===qn?0:l?g*u/v-.5:i/v|0,b=0,I=qn,T=0;T<g;T++)x=T%v-p,E=y-(T/v|0),m[T]=A=c?Math.abs(c==="y"?E:x):Du(x*x+E*E),A>b&&(b=A),A<I&&(I=A);i==="random"&&Zu(m),m.max=b-I,m.min=I,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ye(e.amount||e.each)||0,n=n&&g<0?sf(n):n}return g=(m[f]-m.min)/m.max||0,Ve(m.b+(n?n(g):g)*m.v)+m.u}},jl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ve(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(bi(n)?0:Ye(n))}},$u=function(t,e){var n=je(t),i,s;return!n&&pi(t)&&(i=n=t.radius||qn,t.values?(t=Yn(t.values),(s=!bi(t[0]))&&(i*=i)):t=jl(t.increment)),Yi(e,n?Ce(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=qn,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-o,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:a,s||h===a||bi(a)?h:h+Ye(a)}:jl(t))},Ku=function(t,e,n,i){return Yi(je(t)?!e:n===!0?!!(n=0):!i,function(){return je(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},$m=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Km=function(t,e){return function(n){return t(parseFloat(n))+(e||Ye(n))}},Qm=function(t,e,n){return ju(t,e,0,1,n)},Qu=function(t,e,n){return Yi(n,function(i){return t[~~e(i)]})},jm=function r(t,e,n){var i=e-t;return je(t)?Qu(t,r(0,t.length),e):Yi(n,function(s){return(i+(s-t)%i)%i+t})},tg=function r(t,e,n){var i=e-t,s=i*2;return je(t)?Qu(t,r(0,t.length-1),e):Yi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},os=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?Nu:ql),n+=t.substr(e,i-e)+Ku(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},ju=function(t,e,n,i,s){var a=e-t,o=i-n;return Yi(s,function(l){return n+((l-t)/a*o||0)})},eg=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Fe(t),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(je(t)&&!je(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=yr(je(t)?[]:{},t));if(!h){for(l in e)dc.call(o,t,l,"get",e[l]);s=function(_){return xc(_,o)||(a?t.p:t)}}}return Yi(n,s)},Ru=function(t,e,n){var i=t.labels,s=qn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},On=function(t,e,n){var i=t.vars,s=i[e],a=Me,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Wi.length&&Jo(),o&&(Me=o),h=l?s.apply(c,l):s.call(c),Me=a,h},Ks=function(t){return qi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Qe),t.progress()<1&&On(t,"onInterrupt"),t},es,tf=[],ef=function(t){if(t)if(t=!t.name&&t.default||t,ic()||t.headless){var e=t.name,n=Ce(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:io,render:xc,add:dc,kill:_g,modifier:gg,rawVars:0},a={targetTest:0,get:0,getSetter:ra,aliases:{},register:0};if(ss(),t!==i){if(Tn[e])return;Zn(i,Zn($o(t,s),a)),yr(i.prototype,yr(s,$o(t,a))),Tn[i.prop=e]=i,t.targetTest&&(qo.push(i),ac[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Bu(e,i),t.register&&t.register(tn,i,un)}else tf.push(t)},de=255,Qs={aqua:[0,de,de],lime:[0,de,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,de],navy:[0,0,128],white:[de,de,de],olive:[128,128,0],yellow:[de,de,0],orange:[de,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[de,0,0],pink:[de,192,203],cyan:[0,de,de],transparent:[de,de,de,0]},kl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*de+.5|0},nf=function(t,e,n){var i=t?bi(t)?[t>>16,t>>8&de,t&de]:0:Qs.black,s,a,o,l,c,h,u,f,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Qs[t])i=Qs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&de,i&de,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&de,t&de]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(ql),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=kl(l+1/3,s,a),i[1]=kl(l,s,a),i[2]=kl(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(rc),n&&i.length<4&&(i[3]=1),i}else i=t.match(ql)||Qs.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/de,a=i[1]/de,o=i[2]/de,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},rf=function(t){var e=[],n=[],i=-1;return t.split(Si).forEach(function(s){var a=s.match(Mr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Pu=function(t,e,n){var i="",s=(t+i).match(Si),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=nf(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=rf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Si,"1").split(Mr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Si),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},Si=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Qs)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),ng=/hsl[a]?\(/,uc=function(t){var e=t.join(" "),n;if(Si.lastIndex=0,Si.test(e))return n=ng.test(e),t[1]=Pu(t[1],n),t[0]=Pu(t[0],n,rf(t[1])),!0},ro,An=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,f,d,_=function g(m){var p=r()-i,y=m===!0,x,E,A,T;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,x=A-a,(x>0||y)&&(T=++u.frame,f=A-u.time*1e3,u.time=A=A/1e3,a+=x+(x>=s?4:s-x),E=1),y||(l=c(g)),E)for(d=0;d<o.length;d++)o[d](A,f,T,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Ou&&(!Yl&&ic()&&(fi=Yl=window,oc=fi.document||{},Fn.gsap=tn,(fi.gsapVersions||(fi.gsapVersions=[])).push(tn.version),Fu(Zo||fi.GreenSockGlobals||!fi.gsap&&fi||{}),tf.forEach(ef)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},ro=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ro=0,c=io},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,y){var x=p?function(E,A,T,b){m(E,A,T,b),u.remove(x)}:m;return u.remove(m),o[y?"unshift":"push"](x),ss(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},u})(),ss=function(){return!ro&&An.wake()},ie={},ig=/^[\d.\-M][\d.\-,\s]/,rg=/["']/g,sg=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(rg,"").trim():+c,i=l.substr(o+1).trim();return e},og=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},ag=function(t){var e=(t+"").split("("),n=ie[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[sg(e[1])]:og(t).split(",").map(Vu)):ie._CE&&ig.test(t)?ie._CE("",t):n},sf=function(t){return function(e){return 1-t(1-e)}},of=function r(t,e){for(var n=t._first,i;n;)n instanceof qe?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},xr=function(t,e){return t&&(Ce(t)?t:ie[t]||ag(t))||e},br=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return hn(t,function(o){ie[o]=Fn[o]=s,ie[a=o.toLowerCase()]=n;for(var l in s)ie[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ie[o+"."+l]=s[l]}),s},af=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Vl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Xl*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Nm((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:af(o);return s=Xl/s,l.config=function(c,h){return r(t,c,h)},l},Hl=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:af(n);return i.config=function(s){return r(t,s)},i};hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;br(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ie.Linear.easeNone=ie.none=ie.Linear.easeIn;br("Elastic",Vl("in"),Vl("out"),Vl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};br("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);br("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});br("Circ",function(r){return-(Du(1-r*r)-1)});br("Sine",function(r){return r===1?1:-Um(r*Im)+1});br("Back",Hl("in"),Hl("out"),Hl());ie.SteppedEase=ie.steps=Fn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ge;return function(o){return((i*oo(0,a,o)|0)+s)*n}}};ns.ease=ie["quad.out"];hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return lc+=r+","+r+"Params,"});var fc=function(t,e){this.id=Dm++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:hc,this.set=e?e.getSetter:ra},so=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,rs(this,+e.duration,1,1),this.data=e.data,Me&&(this._ctx=Me,Me.data.push(this)),ro||An.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,rs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ss(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ia(this,n),!s._dp||s.parent||Wu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ge||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ku(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Au(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Au(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?is(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ge?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ko(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ge?0:this._rts,this.totalTime(oo(-Math.abs(this._delay),this._tDur,s),i!==!1),na(this),Hm(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ss(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ge&&(this._tTime-=ge)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&di(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ko(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Bm);var i=Qe;return Qe=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qe=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Cu(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Xn(this,n),Cn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Cn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ge:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ge,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ge)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=Ce(n)?n:Hu,o=function(){var c=i.then;i.then=null,Ce(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Ks(this)},r})();Zn(so.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ge,_prom:0,_ps:!1,_rts:1});var qe=(function(r){Iu(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Cn(n.sortChildren),Ee&&di(n.parent||Ee,Mi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Xu(Mi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return to(0,arguments,this),this},e.from=function(i,s,a){return to(1,arguments,this),this},e.fromTo=function(i,s,a,o){return to(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,js(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Le(i,s,Xn(this,a),1),this},e.call=function(i,s,a){return di(this,Le.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Le(i,a,Xn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,js(a).immediateRender=Cn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,js(o).immediateRender=Cn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ve(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,y,x,E,A,T,b;if(this!==Ee&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,E=this._start,x=this._ts,p=!x,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=Ve(h%m),h===l?(g=this._repeat,f=c):(g=~~(h/m),g&&g===h/m&&(f=c,g--),f>c&&(f=c)),A=is(this._tTime,m),!o&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),T&&g&1&&(f=c-f,b=1),g!==A&&!this._lock){var I=T&&A&1,v=I===(T&&g&1);if(g<A&&(I=!I),o=I?0:h%c?c:h,this._lock=1,this.render(o||(b?0:Ve(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&On(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=I?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;of(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=qm(this,Ve(o),Ve(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!g&&(On(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=-ge);break}}d=_}else{d=this._last;for(var S=i<0?i:f;d;){if(_=d._prev,(d._act||S<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,a||Qe&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=S?-ge:ge);break}}d=_}}if(y&&!s&&(this.pause(),y.render(f>=o?0:-ge)._zTime=f>=o?1:-1,this._ts))return this._start=E,na(this),this.render(i,s,a);this._onUpdate&&!s&&On(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(E===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&qi(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(On(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(bi(s)||(s=Xn(this,s,i)),!(i instanceof so)){if(je(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Fe(i))return this.addLabel(i,s);if(Ce(i))i=Le.delayedCall(0,i);else return this}return this!==i?di(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-qn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Le?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Fe(i)?this.removeLabel(i):Ce(i)?this.killTweensOf(i):(ea(this,i),i===this._recent&&(this._recent=this._last),_r(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ve(An.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Xn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Le.delayedCall(0,s||io,a);return o.data="isPause",this._hasPause=1,di(this,o,Xn(this,i))},e.removePause=function(i){var s=this._first;for(i=Xn(this,i);s;)s._start===i&&s.data==="isPause"&&qi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Gi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Yn(i),l=this._first,c=bi(s),h;l;)l instanceof Le?zm(l._targets,o)&&(c?(!Gi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Xn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,_=Le.to(a,Zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ge,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&rs(_,m,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Zn({startAt:{time:Xn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ru(this,Xn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ru(this,Xn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ge)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return _r(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),_r(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=qn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,di(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;rs(a,a===Ee&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ee._ts&&(ku(Ee,Ko(i,Ee)),zu=An.frame),An.frame>=wu){wu+=Rn.autoSleep||120;var s=Ee._first;if((!s||!s._ts)&&Rn.autoSleep&&An._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||An.sleep()}}},t})(so);Zn(qe.prototype,{_lock:0,_hasPause:0,_forcing:0});var lg=function(t,e,n,i,s,a,o){var l=new un(this._pt,t,e,0,1,_c,null,s),c=0,h=0,u,f,d,_,g,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=os(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),f=n.match(Bl)||[];u=Bl.exec(i);)_=u[0],g=i.substring(c,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Sr(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Bl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(sc.test(i)||p)&&(l.e=0),this._pt=l,l},dc=function(t,e,n,i,s,a,o,l,c,h){Ce(i)&&(i=i(s||0,t,a));var u=t[e],f=n!=="get"?n:Ce(u)?c?t[e.indexOf("set")||!Ce(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=Ce(u)?c?dg:hf:gc,_;if(Fe(i)&&(~i.indexOf("random(")&&(i=os(i)),i.charAt(1)==="="&&(_=Sr(f,i)+(Ye(f)||0),(_||_===0)&&(i=_))),!h||f!==i||tc)return!isNaN(f*i)&&i!==""?(_=new un(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?mg:uf,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&ta(e,i),lg.call(this,t,e,f,i,d,l||Rn.stringFilter,c))},cg=function(t,e,n,i,s){if(Ce(t)&&(t=eo(t,s,e,n,i)),!pi(t)||t.style&&t.nodeType||je(t)||Uu(t))return Fe(t)?eo(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=eo(t[o],s,e,n,i);return a},pc=function(t,e,n,i,s,a){var o,l,c,h;if(Tn[t]&&(o=new Tn[t]).init(s,o.rawVars?e[t]:cg(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new un(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==es))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Gi,tc,mc=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,x=t._overwrite==="auto"&&!nc,E=t.timeline,A,T,b,I,v,S,O,N,K,P,U,W,X;if(E&&(!f||!s)&&(s="none"),t._ease=xr(s,ns.ease),t._yEase=u?sf(xr(u===!0?s:u,ns.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!E&&!!i.runBackwards,!E||f&&!i.stagger){if(N=m[0]?Xi(m[0]).harness:0,W=N&&i[N.prop],A=$o(i,ac),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!d?g.render(-1,!0):g.revert(h&&_?Xo:Fm),g._lazy=0),a){if(qi(t._startAt=Le.set(m,Zn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Cn(l),startAt:null,delay:0,onUpdate:c&&function(){return On(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe||!o&&!d)&&t._startAt.revert(Xo),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),b=Zn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Cn(l),immediateRender:o,stagger:0,parent:p},A),W&&(b[N.prop]=W),qi(t._startAt=Le.set(m,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe?t._startAt.revert(Xo):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ge,ge);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Cn(l)||l&&!_,T=0;T<m.length;T++){if(v=m[T],O=v._gsap||cc(m)[T]._gsap,t._ptLookup[T]=P={},Zl[O.id]&&Wi.length&&Jo(),U=y===m?T:y.indexOf(v),N&&(K=new N).init(v,W||A,t,U,y)!==!1&&(t._pt=I=new un(t._pt,v,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(q){P[q]=I}),K.priority&&(S=1)),!N||W)for(b in A)Tn[b]&&(K=pc(b,A,t,U,v,y))?K.priority&&(S=1):P[b]=I=dc.call(t,v,b,"get",A[b],U,y,0,i.stringFilter);t._op&&t._op[T]&&t.kill(v,t._op[T]),x&&t._pt&&(Gi=t,Ee.killTweensOf(v,P,t.globalTime(e)),X=!t.parent,Gi=0),t._pt&&l&&(Zl[O.id]=1)}S&&vc(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,f&&e<=0&&E.render(qn,!0,!0)},hg=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return tc=1,t.vars[e]="+=0",mc(t,o),tc=0,l?no(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Re(n)+Ye(u.e)),u.b&&(u.b=h.s+Ye(u.b))},ug=function(t,e){var n=t[0]?Xi(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=yr({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},fg=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(je(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},eo=function(t,e,n,i,s){return Ce(t)?t.call(e,n,i,s):Fe(t)&&~t.indexOf("random(")?os(t):t},lf=lc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",cf={};hn(lf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return cf[r]=1});var Le=(function(r){Iu(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:js(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||Ee,x=(je(n)||Uu(n)?bi(n[0]):"length"in i)?[n]:Yn(n),E,A,T,b,I,v,S,O;if(o._targets=x.length?cc(x):no("GSAP target "+n+" not found. https://gsap.com",!Rn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||Wo(c)||Wo(h)){if(i=o.vars,E=o.timeline=new qe({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:x}),E.kill(),E.parent=E._dp=Mi(o),E._start=0,f||Wo(c)||Wo(h)){if(b=x.length,S=f&&Ju(f),pi(f))for(I in f)~lf.indexOf(I)&&(O||(O={}),O[I]=f[I]);for(A=0;A<b;A++)T=$o(i,cf),T.stagger=0,p&&(T.yoyoEase=p),O&&yr(T,O),v=x[A],T.duration=+eo(c,Mi(o),A,v,x),T.delay=(+eo(h,Mi(o),A,v,x)||0)-o._delay,!f&&b===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),E.to(v,T,S?S(A,v,x):0),E._ease=ie.none;E.duration()?c=h=0:o.timeline=0}else if(_){js(Zn(E.vars.defaults,{ease:"none"})),E._ease=xr(_.ease||i.ease||"none");var N=0,K,P,U;if(je(_))_.forEach(function(W){return E.to(x,W,">")}),E.duration();else{T={};for(I in _)I==="ease"||I==="easeEach"||fg(I,_[I],T,_.easeEach);for(I in T)for(K=T[I].sort(function(W,X){return W.t-X.t}),N=0,A=0;A<K.length;A++)P=K[A],U={ease:P.e,duration:(P.t-(A?K[A-1].t:0))/100*c},U[I]=P.v,E.to(x,U,N),N+=U.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return d===!0&&!nc&&(Gi=Mi(o),Ee.killTweensOf(x),Gi=0),di(y,Mi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===Ve(y._time)&&Cn(u)&&Gm(Mi(o))&&y.data!=="nested")&&(o._tTime=-ge,o.render(Math.max(0,-h)||0)),m&&Xu(Mi(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ge&&!h?l:i<ge?0:i,f,d,_,g,m,p,y,x,E;if(!c)Xm(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(f=Ve(u%g),u===l?(_=this._repeat,f=c):(_=~~(u/g),_&&_===Ve(u/g)&&(f=c,_--),f>c&&(f=c)),p=this._yoyo&&_&1,p&&(E=this._yEase,f=c-f),m=is(this._tTime,g),f===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(x&&this._yEase&&of(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render(Ve(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(qu(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(E||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!o&&!s&&!_&&(On(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Jl(this,i,s,a),On(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&On(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Jl(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&qi(this,1),!s&&!(h&&!o)&&(u||o||p)&&(On(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){ro||An.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||mc(this,c),h=this._ease(c/this._dur),hg(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(ia(this,0),this.parent||Gu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ks(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Gi&&Gi.vars.overwrite!==!0)._first||Ks(this),this.parent&&a!==this.timeline.totalDuration()&&rs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Yn(i):o,c=this._ptLookup,h=this._pt,u,f,d,_,g,m,p;if((!s||s==="all")&&Vm(o,l))return s==="all"&&(this._pt=0),Ks(this);for(u=this._op=this._op||[],s!=="all"&&(Fe(s)&&(g={},hn(s,function(y){return g[y]=1}),s=g),s=ug(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(u[p]=s,_=f,d={}):(d=u[p]=u[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ea(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&Ks(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return to(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return to(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Ee.killTweensOf(i,s,a)},t})(so);Zn(Le.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hn("staggerTo,staggerFrom,staggerFromTo",function(r){Le[r]=function(){var t=new qe,e=Kl.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var gc=function(t,e,n){return t[e]=n},hf=function(t,e,n){return t[e](n)},dg=function(t,e,n,i){return t[e](i.fp,n)},pg=function(t,e,n){return t.setAttribute(e,n)},ra=function(t,e){return Ce(t[e])?hf:jo(t[e])&&t.setAttribute?pg:gc},uf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},mg=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},_c=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},xc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},gg=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},_g=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ea(this,e,"_pt"):e.dep||(n=1),e=i;return!n},xg=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},vc=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},un=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||uf,this.d=l||this,this.set=c||gc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=xg,this.m=n,this.mt=s,this.tween=i},r})();hn(lc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return ac[r]=1});Fn.TweenMax=Fn.TweenLite=Le;Fn.TimelineLite=Fn.TimelineMax=qe;Ee=new qe({sortChildren:!1,defaults:ns,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Rn.stringFilter=uc;var vr=[],Yo={},vg=[],Lu=0,yg=0,Gl=function(t){return(Yo[t]||vg).map(function(e){return e()})},ec=function(){var t=Date.now(),e=[];t-Lu>2&&(Gl("matchMediaInit"),vr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=fi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Gl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Lu=t,Gl("matchMedia"))},ff=(function(){function r(e,n){this.selector=n&&Ql(n),this.data=[],this._r=[],this.isReverted=!1,this.id=yg++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ce(n)&&(s=i,i=n,n=Ce);var a=this,o=function(){var c=Me,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ql(s)),Me=a,u=i.apply(a,arguments),Ce(u)&&a._r.push(u),Me=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Ce?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Me;Me=null,n(this),Me=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Le&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof qe?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Le)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=vr.length;a--;)vr[a].id===this.id&&vr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),Mg=(function(){function r(e){this.contexts=[],this.scope=e,Me&&Me.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){pi(n)||(n={matches:n});var a=new ff(0,s||this.scope),o=a.conditions={},l,c,h;Me&&!a.selector&&(a.selector=Me.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=fi.matchMedia(n[c]),l&&(vr.indexOf(a)<0&&vr.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(ec):l.addEventListener("change",ec)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Qo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return ef(i)})},timeline:function(t){return new qe(t)},getTweensOf:function(t,e){return Ee.getTweensOf(t,e)},getProperty:function(t,e,n,i){Fe(t)&&(t=Yn(t)[0]);var s=Xi(t||{}).get,a=n?Hu:Vu;return n==="native"&&(n=""),t&&(e?a((Tn[e]&&Tn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Tn[o]&&Tn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Yn(t),t.length>1){var i=t.map(function(h){return tn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=Tn[e],o=Xi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;es._pt=0,u.init(t,n?h+n:h,es,0,[t]),u.render(1,u),es._pt&&xc(1,es)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=tn.to(t,yr((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Ee.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=xr(t.ease,ns.ease)),Tu(ns,t||{})},config:function(t){return Tu(Rn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Tn[o]&&!Fn[o]&&no(e+" effect requires "+o+" plugin.")}),zl[e]=function(o,l,c){return n(Yn(o),Zn(l||{},s),c)},a&&(qe.prototype[e]=function(o,l,c){return this.add(zl[e](o,pi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ie[t]=xr(e)},parseEase:function(t,e){return arguments.length?xr(t,e):ie},getById:function(t){return Ee.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new qe(t),i,s;for(n.smoothChildTiming=Cn(t.smoothChildTiming),Ee.remove(n),n._dp=0,n._time=n._tTime=Ee._time,i=Ee._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Le&&i.vars.onComplete===i._targets[0]))&&di(n,i,i._start-i._delay),i=s;return di(Ee,n,0),n},context:function(t,e){return t?new ff(t,e):Me},matchMedia:function(t){return new Mg(t)},matchMediaRefresh:function(){return vr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ec()},addEventListener:function(t,e){var n=Yo[t]||(Yo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Yo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:jm,wrapYoyo:tg,distribute:Ju,random:Ku,snap:$u,normalize:Qm,getUnit:Ye,clamp:Zm,splitColor:nf,toArray:Yn,selector:Ql,mapRange:ju,pipe:$m,unitize:Km,interpolate:eg,shuffle:Zu},install:Fu,effects:zl,ticker:An,updateRoot:qe.updateRoot,plugins:Tn,globalTimeline:Ee,core:{PropTween:un,globals:Bu,Tween:Le,Timeline:qe,Animation:so,getCache:Xi,_removeLinkedListItem:ea,reverting:function(){return Qe},context:function(t){return t&&Me&&(Me.data.push(t),t._ctx=Me),Me},suppressOverwrites:function(t){return nc=t}}};hn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Qo[r]=Le[r]});An.add(qe.updateRoot);es=Qo.to({},{duration:0});var Sg=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},bg=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Sg(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Wl=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Fe(s)&&(l={},hn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}bg(o,s)}}}},tn=Qo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Qe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Wl("roundProps",jl),Wl("modifiers"),Wl("snap",$u))||Qo;Le.version=qe.version=tn.version="3.12.5";Ou=1;ic()&&ss();var Eg=ie.Power0,wg=ie.Power1,Tg=ie.Power2,Ag=ie.Power3,Cg=ie.Power4,Rg=ie.Linear,Pg=ie.Quad,Lg=ie.Cubic,Ig=ie.Quart,Dg=ie.Quint,Ug=ie.Strong,Ng=ie.Elastic,Og=ie.Back,Fg=ie.SteppedEase,Bg=ie.Bounce,zg=ie.Sine,kg=ie.Expo,Vg=ie.Circ;var df,Zi,ls,Tc,Ar,Hg,pf,Ac,Gg=function(){return typeof window!="undefined"},wi={},Tr=180/Math.PI,cs=Math.PI/180,as=Math.atan2,mf=1e8,Cc=/([A-Z])/g,Wg=/(left|right|width|margin|padding|x)/i,Xg=/[\s,\(]\S/,mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},qg=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Yg=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Zg=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Sf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},bf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Jg=function(t,e,n){return t.style[e]=n},$g=function(t,e,n){return t.style.setProperty(e,n)},Kg=function(t,e,n){return t._gsap[e]=n},Qg=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},jg=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},t_=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},we="transform",Pn=we+"Origin",e_=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in wi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=mi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Ei(i,o)}):this.tfm[t]=a.x?a[t]:Ei(i,t),t===Pn&&(this.tfm.zOrigin=a.zOrigin);else return mi.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(we)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Pn,e,"")),t=we}(s||e)&&this.props.push(t,e,s[t])},Ef=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},n_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Cc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Ac(),(!s||!s.isStart)&&!n[we]&&(Ef(n),i.zOrigin&&n[Pn]&&(n[Pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},wf=function(t,e){var n={target:t,props:[],revert:n_,save:e_};return t._gsap||tn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Tf,bc=function(t,e){var n=Zi.createElementNS?Zi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Zi.createElement(t);return n&&n.style?n:Zi.createElement(t)},gi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Cc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,hs(e)||e,1)||""},gf="O,Moz,ms,Ms,Webkit".split(","),hs=function(t,e,n){var i=e||Ar,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(gf[a]+t in s););return a<0?null:(a===3?"ms":a>=0?gf[a]:"")+t},Ec=function(){Gg()&&window.document&&(df=window,Zi=df.document,ls=Zi.documentElement,Ar=bc("div")||{style:{}},Hg=bc("div"),we=hs(we),Pn=we+"Origin",Ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Tf=!!hs("perspective"),Ac=tn.core.reverting,Tc=1)},yc=function r(t){var e=bc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(ls.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ls.removeChild(e),this.style.cssText=s,a},_f=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Af=function(t){var e;try{e=t.getBBox()}catch{e=yc.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===yc||(e=yc.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+_f(t,["x","cx","x1"])||0,y:+_f(t,["y","cy","y1"])||0,width:0,height:0}:e},Cf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Af(t))},Cr=function(t,e){if(e){var n=t.style,i;e in wi&&e!==Pn&&(e=we),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Cc,"-$1").toLowerCase())):n.removeAttribute(e)}},Ji=function(t,e,n,i,s,a){var o=new un(t._pt,e,n,0,1,a?bf:Sf);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},xf={deg:1,rad:1,turn:1},i_={grid:1,flex:1},$i=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ar.style,l=Wg.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",_,g,m,p;if(i===a||!s||xf[i]||xf[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&Cf(t),(d||a==="%")&&(wi[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Re(d?s/_*u:s/100*_);if(o[l?"width":"height"]=u+(f?a:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Zi||!g.appendChild)&&(g=Zi.body),m=g._gsap,m&&d&&m.width&&l&&m.time===An.time&&!m.uncache)return Re(s/m.width*u);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=u+i,_=t[h],y?t.style[e]=y:Cr(t,e)}else(d||a==="%")&&!i_[gi(g,"display")]&&(o.position=gi(t,"position")),g===t&&(o.position="static"),g.appendChild(Ar),_=Ar[h],g.removeChild(Ar),o.position="absolute";return l&&d&&(m=Xi(g),m.time=An.time,m.width=g[h]),Re(f?_*s/u:_&&s?u/_*s:0)},Ei=function(t,e,n,i){var s;return Tc||Ec(),e in mi&&e!=="transform"&&(e=mi[e],~e.indexOf(",")&&(e=e.split(",")[0])),wi[e]&&e!=="transform"?(s=co(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:oa(gi(t,Pn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=sa[e]&&sa[e](t,e,n)||gi(t,e)||hc(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?$i(t,e,s,n)+n:s},r_=function(t,e,n,i){if(!n||n==="none"){var s=hs(e,t,1),a=s&&gi(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=gi(t,"borderTopColor"))}var o=new un(this._pt,t.style,e,0,1,_c),l=0,c=0,h,u,f,d,_,g,m,p,y,x,E,A;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=gi(t,e)||i,g?t.style[e]=g:Cr(t,e)),h=[n,i],uc(h),n=h[0],i=h[1],f=n.match(Mr)||[],A=i.match(Mr)||[],A.length){for(;u=Mr.exec(i);)m=u[0],y=i.substring(l,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,E=g.substr((d+"").length),m.charAt(1)==="="&&(m=Sr(d,m)+E),p=parseFloat(m),x=m.substr((p+"").length),l=Mr.lastIndex-x.length,x||(x=x||Rn.units[e]||E,l===i.length&&(i+=x,o.e+=x)),E!==x&&(d=$i(t,e,g,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?bf:Sf;return sc.test(i)&&(o.e=0),this._pt=o,o},vf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},s_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=vf[n]||n,e[1]=vf[i]||i,e.join(" ")},o_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],wi[o]&&(l=1,o=o==="transformOrigin"?Pn:we),Cr(n,o);l&&(Cr(n,we),a&&(a.svg&&n.removeAttribute("transform"),co(n,1),a.uncache=1,Ef(i)))}},sa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new un(t._pt,e,n,0,0,o_);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},lo=[1,0,0,1,0,0],Rf={},Pf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},yf=function(t){var e=gi(t,we);return Pf(e)?lo:e.substr(7).match(rc).map(Re)},Rc=function(t,e){var n=t._gsap||Xi(t),i=t.style,s=yf(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?lo:s):(s===lo&&!t.offsetParent&&t!==ls&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,ls.appendChild(t)),s=yf(t),l?i.display=l:Cr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ls.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},wc=function(t,e,n,i,s,a){var o=t._gsap,l=s||Rc(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],x=e.split(" "),E=parseFloat(x[0])||0,A=parseFloat(x[1])||0,T,b,I,v;n?l!==lo&&(b=d*m-_*g)&&(I=E*(m/b)+A*(-g/b)+(g*y-m*p)/b,v=E*(-_/b)+A*(d/b)-(d*y-_*p)/b,E=I,A=v):(T=Af(t),E=T.x+(~x[0].indexOf("%")?E/100*T.width:E),A=T.y+(~(x[1]||x[0]).indexOf("%")?A/100*T.height:A)),i||i!==!1&&o.smooth?(p=E-c,y=A-h,o.xOffset=u+(p*d+y*g)-p,o.yOffset=f+(p*_+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Pn]="0px 0px",a&&(Ji(a,o,"xOrigin",c,E),Ji(a,o,"yOrigin",h,A),Ji(a,o,"xOffset",u,o.xOffset),Ji(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",E+" "+A)},co=function(t,e){var n=t._gsap||new fc(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=gi(t,Pn)||"0",h,u,f,d,_,g,m,p,y,x,E,A,T,b,I,v,S,O,N,K,P,U,W,X,q,Y,R,$,ct,Z,J,rt;return h=u=f=g=m=p=y=x=E=0,d=_=1,n.svg=!!(t.getCTM&&Cf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[we]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[we]!=="none"?l[we]:"")),i.scale=i.rotate=i.translate="none"),b=Rc(t,n.svg),n.svg&&(n.uncache?(q=t.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),wc(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,T=n.yOrigin||0,b!==lo&&(O=b[0],N=b[1],K=b[2],P=b[3],h=U=b[4],u=W=b[5],b.length===6?(d=Math.sqrt(O*O+N*N),_=Math.sqrt(P*P+K*K),g=O||N?as(N,O)*Tr:0,y=K||P?as(K,P)*Tr+g:0,y&&(_*=Math.abs(Math.cos(y*cs))),n.svg&&(h-=A-(A*O+T*K),u-=T-(A*N+T*P))):(rt=b[6],Z=b[7],R=b[8],$=b[9],ct=b[10],J=b[11],h=b[12],u=b[13],f=b[14],I=as(rt,ct),m=I*Tr,I&&(v=Math.cos(-I),S=Math.sin(-I),X=U*v+R*S,q=W*v+$*S,Y=rt*v+ct*S,R=U*-S+R*v,$=W*-S+$*v,ct=rt*-S+ct*v,J=Z*-S+J*v,U=X,W=q,rt=Y),I=as(-K,ct),p=I*Tr,I&&(v=Math.cos(-I),S=Math.sin(-I),X=O*v-R*S,q=N*v-$*S,Y=K*v-ct*S,J=P*S+J*v,O=X,N=q,K=Y),I=as(N,O),g=I*Tr,I&&(v=Math.cos(I),S=Math.sin(I),X=O*v+N*S,q=U*v+W*S,N=N*v-O*S,W=W*v-U*S,O=X,U=q),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Re(Math.sqrt(O*O+N*N+K*K)),_=Re(Math.sqrt(W*W+rt*rt)),I=as(U,W),y=Math.abs(I)>2e-4?I*Tr:0,E=J?1/(J<0?-J:J):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Pf(gi(t,we)),X&&t.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Re(d),n.scaleY=Re(_),n.rotation=Re(g)+o,n.rotationX=Re(m)+o,n.rotationY=Re(p)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=E+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Pn]=oa(c)),n.xOffset=n.yOffset=0,n.force3D=Rn.force3D,n.renderTransform=n.svg?l_:Tf?Lf:a_,n.uncache=0,n},oa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Mc=function(t,e,n){var i=Ye(e);return Re(parseFloat(e)+parseFloat($i(t,"x",n+"px",i)))+i},a_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Lf(t,e)},Er="0deg",ao="0px",wr=") ",Lf=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,x=n.zOrigin,E="",A=p==="auto"&&t&&t!==1||p===!0;if(x&&(u!==Er||h!==Er)){var T=parseFloat(h)*cs,b=Math.sin(T),I=Math.cos(T),v;T=parseFloat(u)*cs,v=Math.cos(T),a=Mc(y,a,b*v*-x),o=Mc(y,o,-Math.sin(T)*-x),l=Mc(y,l,I*v*-x+x)}m!==ao&&(E+="perspective("+m+wr),(i||s)&&(E+="translate("+i+"%, "+s+"%) "),(A||a!==ao||o!==ao||l!==ao)&&(E+=l!==ao||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+wr),c!==Er&&(E+="rotate("+c+wr),h!==Er&&(E+="rotateY("+h+wr),u!==Er&&(E+="rotateX("+u+wr),(f!==Er||d!==Er)&&(E+="skew("+f+", "+d+wr),(_!==1||g!==1)&&(E+="scale("+_+", "+g+wr),y.style[we]=E||"translate(0, 0)"},l_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,x=parseFloat(a),E=parseFloat(o),A,T,b,I,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=cs,c*=cs,A=Math.cos(l)*u,T=Math.sin(l)*u,b=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(h*=cs,v=Math.tan(c-h),v=Math.sqrt(1+v*v),b*=v,I*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),A*=v,T*=v)),A=Re(A),T=Re(T),b=Re(b),I=Re(I)):(A=u,I=f,T=b=0),(x&&!~(a+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(x=$i(d,"x",a,"px"),E=$i(d,"y",o,"px")),(_||g||m||p)&&(x=Re(x+_-(_*A+g*b)+m),E=Re(E+g-(_*T+g*I)+p)),(i||s)&&(v=d.getBBox(),x=Re(x+i/100*v.width),E=Re(E+s/100*v.height)),v="matrix("+A+","+T+","+b+","+I+","+x+","+E+")",d.setAttribute("transform",v),y&&(d.style[we]=v)},c_=function(t,e,n,i,s){var a=360,o=Fe(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Tr:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*mf)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*mf)%a-~~(c/a)*a)),t._pt=f=new un(t._pt,e,n,i,c,qg),f.e=h,f.u="deg",t._props.push(n),f},Mf=function(t,e){for(var n in e)t[n]=e[n];return t},h_=function(t,e,n){var i=Mf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[we]=e,o=co(n,1),Cr(n,we),n.setAttribute("transform",c)):(c=getComputedStyle(n)[we],a[we]=e,o=co(n,1),a[we]=c);for(l in wi)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=Ye(c),_=Ye(h),u=d!==_?$i(n,l,c,_):parseFloat(c),f=parseFloat(h),t._pt=new un(t._pt,o,l,u,f-u,Sc),t._pt.u=_||0,t._props.push(l));Mf(o,i)};hn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});sa[t>1?"border"+r:r]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(_){return Ei(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,u)}});var Pc={name:"css",register:Ec,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,f,d,_,g,m,p,y,x,E,A,T,b,I;Tc||Ec(),this.styles=this.styles||wf(t),I=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Tn[g]&&pc(g,e,n,i,t,s)))){if(d=typeof h,_=sa[g],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=os(h)),_)_(this,t,g,h,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Si.lastIndex=0,Si.test(c)||(m=Ye(c),p=Ye(h)),p?m!==p&&(c=$i(t,g,c,p)+p):m&&(h+=m),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),I.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Fe(c)&&~c.indexOf("random(")&&(c=os(c)),Ye(c+"")||c==="auto"||(c+=Rn.units[g]||Ye(Ei(t,g))||""),(c+"").charAt(1)==="="&&(c=Ei(t,g))):c=Ei(t,g),f=parseFloat(c),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),g in mi&&(g==="autoAlpha"&&(f===1&&Ei(t,"visibility")==="hidden"&&u&&(f=0),I.push("visibility",0,o.visibility),Ji(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=mi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in wi,x){if(this.styles.save(g),E||(A=t._gsap,A.renderTransform&&!e.parseTransform||co(t,e.parseTransform),T=e.smoothOrigin!==!1&&A.smooth,E=this._pt=new un(this._pt,o,we,0,1,A.renderTransform,A,0,-1),E.dep=1),g==="scale")this._pt=new un(this._pt,A,"scaleY",A.scaleY,(y?Sr(A.scaleY,y+u):u)-A.scaleY||0,Sc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){I.push(Pn,0,o[Pn]),h=s_(h),A.svg?wc(t,h,0,T,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&Ji(this,A,"zOrigin",A.zOrigin,p),Ji(this,o,g,oa(c),oa(h)));continue}else if(g==="svgOrigin"){wc(t,h,1,T,0,this);continue}else if(g in Rf){c_(this,A,g,f,y?Sr(f,y+h):h);continue}else if(g==="smoothOrigin"){Ji(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){h_(this,h,t);continue}}else g in o||(g=hs(g)||g);if(x||(u||u===0)&&(f||f===0)&&!Xg.test(h)&&g in o)m=(c+"").substr((f+"").length),u||(u=0),p=Ye(h)||(g in Rn.units?Rn.units[g]:m),m!==p&&(f=$i(t,g,c,p)),this._pt=new un(this._pt,x?A:o,g,f,(y?Sr(f,y+u):u)-f,!x&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?Zg:Sc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Yg);else if(g in o)r_.call(this,t,g,c,y?y+h:h);else if(g in t)this.add(t,g,c||t[g],y?y+h:h,i,s);else if(g!=="parseTransform"){ta(g,h);continue}x||(g in o?I.push(g,0,o[g]):I.push(g,1,c||t[g])),a.push(g)}}b&&vc(this)},render:function(t,e){if(e.tween._time||!Ac())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ei,aliases:mi,getSetter:function(t,e,n){var i=mi[e];return i&&i.indexOf(",")<0&&(e=i),e in wi&&e!==Pn&&(t._gsap.x||Ei(t,"x"))?n&&pf===n?e==="scale"?Qg:Kg:(pf=n||{})&&(e==="scale"?jg:t_):t.style&&!jo(t.style[e])?Jg:~e.indexOf("-")?$g:ra(t,e)},core:{_removeProperty:Cr,_getMatrix:Rc}};tn.utils.checkPrefix=hs;tn.core.getStyleSaver=wf;(function(r,t,e,n){var i=hn(r+","+t+","+e,function(s){wi[s]=1});hn(t,function(s){Rn.units[s]="deg",Rf[s]=1}),mi[i[13]]=r+","+t,hn(n,function(s){var a=s.split(":");mi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Rn.units[r]="px"});tn.registerPlugin(Pc);var _i=tn.registerPlugin(Pc)||tn,jS=_i.core.Tween;function If(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function u_(r,t,e){return t&&If(r.prototype,t),e&&If(r,e),r}var Ze,ca,f_,Bn,Ki,Qi,fs,Uf,Rr,uo,Nf,Ti,ni,Of,Ff=function(){return Ze||typeof window!="undefined"&&(Ze=window.gsap)&&Ze.registerPlugin&&Ze},Bf=1,us=[],jt=[],ii=[],fo=Date.now,Lc=function(t,e){return e},d_=function(){var t=uo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,jt),i.push.apply(i,ii),jt=n,ii=i,Lc=function(a,o){return e[a](o)}},Ci=function(t,e){return~ii.indexOf(t)&&ii[ii.indexOf(t)+1][e]},po=function(t){return!!~Nf.indexOf(t)},dn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},fn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},aa="scrollLeft",la="scrollTop",Ic=function(){return Ti&&Ti.isPressed||jt.cache++},ha=function(t,e){var n=function i(s){if(s||s===0){Bf&&(Bn.history.scrollRestoration="manual");var a=Ti&&Ti.isPressed;s=i.v=Math.round(s)||(Ti&&Ti.iOS?1:0),t(s),i.cacheID=jt.cache,a&&Lc("ss",s)}else(e||jt.cache!==i.cacheID||Lc("ref"))&&(i.cacheID=jt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},en={s:aa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ha(function(r){return arguments.length?Bn.scrollTo(r,Ie.sc()):Bn.pageXOffset||Ki[aa]||Qi[aa]||fs[aa]||0})},Ie={s:la,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:en,sc:ha(function(r){return arguments.length?Bn.scrollTo(en.sc(),r):Bn.pageYOffset||Ki[la]||Qi[la]||fs[la]||0})},pn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Ze.utils.toArray)(t)[0]||(typeof t=="string"&&Ze.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Ai=function(t,e){var n=e.s,i=e.sc;po(t)&&(t=Ki.scrollingElement||Qi);var s=jt.indexOf(t),a=i===Ie.sc?1:2;!~s&&(s=jt.push(t)-1),jt[s+a]||dn(t,"scroll",Ic);var o=jt[s+a],l=o||(jt[s+a]=ha(Ci(t,n),!0)||(po(t)?i:ha(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=Ze.getProperty(t,"scrollBehavior")==="smooth"),l},ua=function(t,e,n){var i=t,s=t,a=fo(),o=a,l=e||50,c=Math.max(500,l*3),h=function(_,g){var m=fo();g||m-a>l?(s=i,i=_,o=a,a=m):n?i+=_:i=s+(_-s)/(m-o)*(a-o)},u=function(){s=i=n?0:i,o=a=0},f=function(_){var g=o,m=s,p=fo();return(_||_===0)&&_!==i&&h(_),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-g)*1e3};return{update:h,reset:u,getVelocity:f}},ho=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Df=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},zf=function(){uo=Ze.core.globals().ScrollTrigger,uo&&uo.core&&d_()},kf=function(t){return Ze=t||Ff(),!ca&&Ze&&typeof document!="undefined"&&document.body&&(Bn=window,Ki=document,Qi=Ki.documentElement,fs=Ki.body,Nf=[Bn,Ki,Qi,fs],f_=Ze.utils.clamp,Of=Ze.core.context||function(){},Rr="onpointerenter"in fs?"pointer":"mouse",Uf=Pe.isTouch=Bn.matchMedia&&Bn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Bn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ni=Pe.eventTypes=("ontouchstart"in Qi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Qi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Bf=0},500),zf(),ca=1),ca};en.op=Ie;jt.cache=0;var Pe=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){ca||kf(Ze)||console.warn("Please gsap.registerPlugin(Observer)"),uo||zf();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,x=n.onPress,E=n.onRelease,A=n.onRight,T=n.onLeft,b=n.onUp,I=n.onDown,v=n.onChangeX,S=n.onChangeY,O=n.onChange,N=n.onToggleX,K=n.onToggleY,P=n.onHover,U=n.onHoverEnd,W=n.onMove,X=n.ignoreCheck,q=n.isNormalizer,Y=n.onGestureStart,R=n.onGestureEnd,$=n.onWheel,ct=n.onEnable,Z=n.onDisable,J=n.onClick,rt=n.scrollSpeed,_t=n.capture,dt=n.allowClicks,Rt=n.lockAxis,Pt=n.onLockAxis;this.target=o=pn(o)||Qi,this.vars=n,d&&(d=Ze.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,rt=rt||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Bn.getComputedStyle(fs).lineHeight)||22);var Dt,Vt,z,Ht,mt,Lt,gt,V=this,Ot=0,C=0,M=n.passive||!h,F=Ai(o,en),tt=Ai(o,Ie),j=F(),et=tt(),pt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ni[0]==="pointerdown",ht=po(o),lt=o.ownerDocument||Ki,wt=[0,0,0],kt=[0,0,0],Q=0,se=function(){return Q=fo()},At=function(vt,Ct){return(V.event=vt)&&d&&~d.indexOf(vt.target)||Ct&&pt&&vt.pointerType!=="touch"||X&&X(vt,Ct)},Gt=function(){V._vx.reset(),V._vy.reset(),Vt.pause(),u&&u(V)},Et=function(){var vt=V.deltaX=Df(wt),Ct=V.deltaY=Df(kt),nt=Math.abs(vt)>=i,Ft=Math.abs(Ct)>=i;O&&(nt||Ft)&&O(V,vt,Ct,wt,kt),nt&&(A&&V.deltaX>0&&A(V),T&&V.deltaX<0&&T(V),v&&v(V),N&&V.deltaX<0!=Ot<0&&N(V),Ot=V.deltaX,wt[0]=wt[1]=wt[2]=0),Ft&&(I&&V.deltaY>0&&I(V),b&&V.deltaY<0&&b(V),S&&S(V),K&&V.deltaY<0!=C<0&&K(V),C=V.deltaY,kt[0]=kt[1]=kt[2]=0),(Ht||z)&&(W&&W(V),z&&(y(V),z=!1),Ht=!1),Lt&&!(Lt=!1)&&Pt&&Pt(V),mt&&($(V),mt=!1),Dt=0},xt=function(vt,Ct,nt){wt[nt]+=vt,kt[nt]+=Ct,V._vx.update(vt),V._vy.update(Ct),c?Dt||(Dt=requestAnimationFrame(Et)):Et()},Wt=function(vt,Ct){Rt&&!gt&&(V.axis=gt=Math.abs(vt)>Math.abs(Ct)?"x":"y",Lt=!0),gt!=="y"&&(wt[2]+=vt,V._vx.update(vt,!0)),gt!=="x"&&(kt[2]+=Ct,V._vy.update(Ct,!0)),c?Dt||(Dt=requestAnimationFrame(Et)):Et()},Kt=function(vt){if(!At(vt,1)){vt=ho(vt,h);var Ct=vt.clientX,nt=vt.clientY,Ft=Ct-V.x,Nt=nt-V.y,qt=V.isDragging;V.x=Ct,V.y=nt,(qt||Math.abs(V.startX-Ct)>=s||Math.abs(V.startY-nt)>=s)&&(y&&(z=!0),qt||(V.isDragging=!0),Wt(Ft,Nt),qt||m&&m(V))}},ae=V.onPress=function(bt){At(bt,1)||bt&&bt.button||(V.axis=gt=null,Vt.pause(),V.isPressed=!0,bt=ho(bt),Ot=C=0,V.startX=V.x=bt.clientX,V.startY=V.y=bt.clientY,V._vx.reset(),V._vy.reset(),dn(q?o:lt,ni[1],Kt,M,!0),V.deltaX=V.deltaY=0,x&&x(V))},ft=V.onRelease=function(bt){if(!At(bt,1)){fn(q?o:lt,ni[1],Kt,!0);var vt=!isNaN(V.y-V.startY),Ct=V.isDragging,nt=Ct&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ft=ho(bt);!nt&&vt&&(V._vx.reset(),V._vy.reset(),h&&dt&&Ze.delayedCall(.08,function(){if(fo()-Q>300&&!bt.defaultPrevented){if(bt.target.click)bt.target.click();else if(lt.createEvent){var Nt=lt.createEvent("MouseEvents");Nt.initMouseEvent("click",!0,!0,Bn,1,Ft.screenX,Ft.screenY,Ft.clientX,Ft.clientY,!1,!1,!1,!1,0,null),bt.target.dispatchEvent(Nt)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,u&&Ct&&!q&&Vt.restart(!0),p&&Ct&&p(V),E&&E(V,nt)}},it=function(vt){return vt.touches&&vt.touches.length>1&&(V.isGesturing=!0)&&Y(vt,V.isDragging)},L=function(){return(V.isGesturing=!1)||R(V)},st=function(vt){if(!At(vt)){var Ct=F(),nt=tt();xt((Ct-j)*rt,(nt-et)*rt,1),j=Ct,et=nt,u&&Vt.restart(!0)}},ot=function(vt){if(!At(vt)){vt=ho(vt,h),$&&(mt=!0);var Ct=(vt.deltaMode===1?l:vt.deltaMode===2?Bn.innerHeight:1)*_;xt(vt.deltaX*Ct,vt.deltaY*Ct,0),u&&!q&&Vt.restart(!0)}},Ut=function(vt){if(!At(vt)){var Ct=vt.clientX,nt=vt.clientY,Ft=Ct-V.x,Nt=nt-V.y;V.x=Ct,V.y=nt,Ht=!0,u&&Vt.restart(!0),(Ft||Nt)&&Wt(Ft,Nt)}},It=function(vt){V.event=vt,P(V)},ne=function(vt){V.event=vt,U(V)},oe=function(vt){return At(vt)||ho(vt,h)&&J(V)};Vt=V._dc=Ze.delayedCall(f||.25,Gt).pause(),V.deltaX=V.deltaY=0,V._vx=ua(0,50,!0),V._vy=ua(0,50,!0),V.scrollX=F,V.scrollY=tt,V.isDragging=V.isGesturing=V.isPressed=!1,Of(this),V.enable=function(bt){return V.isEnabled||(dn(ht?lt:o,"scroll",Ic),a.indexOf("scroll")>=0&&dn(ht?lt:o,"scroll",st,M,_t),a.indexOf("wheel")>=0&&dn(o,"wheel",ot,M,_t),(a.indexOf("touch")>=0&&Uf||a.indexOf("pointer")>=0)&&(dn(o,ni[0],ae,M,_t),dn(lt,ni[2],ft),dn(lt,ni[3],ft),dt&&dn(o,"click",se,!0,!0),J&&dn(o,"click",oe),Y&&dn(lt,"gesturestart",it),R&&dn(lt,"gestureend",L),P&&dn(o,Rr+"enter",It),U&&dn(o,Rr+"leave",ne),W&&dn(o,Rr+"move",Ut)),V.isEnabled=!0,bt&&bt.type&&ae(bt),ct&&ct(V)),V},V.disable=function(){V.isEnabled&&(us.filter(function(bt){return bt!==V&&po(bt.target)}).length||fn(ht?lt:o,"scroll",Ic),V.isPressed&&(V._vx.reset(),V._vy.reset(),fn(q?o:lt,ni[1],Kt,!0)),fn(ht?lt:o,"scroll",st,_t),fn(o,"wheel",ot,_t),fn(o,ni[0],ae,_t),fn(lt,ni[2],ft),fn(lt,ni[3],ft),fn(o,"click",se,!0),fn(o,"click",oe),fn(lt,"gesturestart",it),fn(lt,"gestureend",L),fn(o,Rr+"enter",It),fn(o,Rr+"leave",ne),fn(o,Rr+"move",Ut),V.isEnabled=V.isPressed=V.isDragging=!1,Z&&Z(V))},V.kill=V.revert=function(){V.disable();var bt=us.indexOf(V);bt>=0&&us.splice(bt,1),Ti===V&&(Ti=0)},us.push(V),q&&po(o)&&(Ti=V),V.enable(g)},u_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Pe.version="3.12.5";Pe.create=function(r){return new Pe(r)};Pe.register=kf;Pe.getAll=function(){return us.slice()};Pe.getById=function(r){return us.filter(function(t){return t.vars.id===r})[0]};Ff()&&Ze.registerPlugin(Pe);var yt,ms,re,Te,ri,xe,rd,Aa,Ao,Mo,go,fa,nn,La,kc,gn,Vf,Hf,gs,sd,Dc,od,mn,Vc,ad,ld,ji,Hc,Yc,_s,Zc,Ca,Gc,Uc,da=1,rn=Date.now,Nc=rn(),Kn=0,_o=0,Gf=function(t,e,n){var i=kn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Wf=function(t,e){return e&&(!kn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},p_=function r(){return _o&&requestAnimationFrame(r)},Xf=function(){return La=1},qf=function(){return La=0},xi=function(t){return t},xo=function(t){return Math.round(t*1e5)/1e5||0},cd=function(){return typeof window!="undefined"},hd=function(){return yt||cd()&&(yt=window.gsap)&&yt.registerPlugin&&yt},Nr=function(t){return!!~rd.indexOf(t)},ud=function(t){return(t==="Height"?Zc:re["inner"+t])||ri["client"+t]||xe["client"+t]},fd=function(t){return Ci(t,"getBoundingClientRect")||(Nr(t)?function(){return Ta.width=re.innerWidth,Ta.height=Zc,Ta}:function(){return Ri(t)})},m_=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=Ci(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?ud(s):t["client"+s])||0}},g_=function(t,e){return!e||~ii.indexOf(t)?fd(t):function(){return Ta}},vi=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=Ci(t,n))?a()-fd(t)()[s]:Nr(t)?(ri[n]||xe[n])-ud(i):t[n]-t["offset"+i])},pa=function(t,e){for(var n=0;n<gs.length;n+=3)(!e||~e.indexOf(gs[n+1]))&&t(gs[n],gs[n+1],gs[n+2])},kn=function(t){return typeof t=="string"},xn=function(t){return typeof t=="function"},vo=function(t){return typeof t=="number"},Pr=function(t){return typeof t=="object"},mo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Oc=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},ds=Math.abs,dd="left",pd="top",Jc="right",$c="bottom",Ir="width",Dr="height",So="Right",bo="Left",Eo="Top",wo="Bottom",De="padding",Jn="margin",vs="Width",Kc="Height",Be="px",$n=function(t){return re.getComputedStyle(t)},__=function(t){var e=$n(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Yf=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ri=function(t,e){var n=e&&$n(t)[kc]!=="matrix(1, 0, 0, 1, 0, 0)"&&yt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ra=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},md=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},x_=function(t){return function(e){return yt.utils.snap(md(t),e)}},Qc=function(t){var e=yt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},v_=function(t){return function(e,n){return Qc(md(t))(e,n.direction)}},ma=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Ge=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},He=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ga=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Zf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_a={toggleActions:"play",anticipatePin:0},Pa={top:0,left:0,center:.5,bottom:1,right:1},Sa=function(t,e){if(kn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Pa?Pa[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},xa=function(t,e,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,u=s.fontSize,f=s.indent,d=s.fontWeight,_=Te.createElement("div"),g=Nr(n)||Ci(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?xe:n,y=t.indexOf("start")!==-1,x=y?c:h,E="border-color:"+x+";font-size:"+u+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(E+=(i===Ie?Jc:$c)+":"+(a+parseFloat(f))+"px;"),o&&(E+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=E,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],ba(_,0,i,y),_},ba=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+vs]=1,s["border"+o+vs]=0,s[n.p]=e+"px",yt.set(t,s)},te=[],Wc={},Co,Jf=function(){return rn()-Kn>34&&(Co||(Co=requestAnimationFrame(Pi)))},ps=function(){(!mn||!mn.isPressed||mn.startX>xe.clientWidth)&&(jt.cache++,mn?Co||(Co=requestAnimationFrame(Pi)):Pi(),Kn||Fr("scrollStart"),Kn=rn())},Fc=function(){ld=re.innerWidth,ad=re.innerHeight},yo=function(){jt.cache++,!nn&&!od&&!Te.fullscreenElement&&!Te.webkitFullscreenElement&&(!Vc||ld!==re.innerWidth||Math.abs(re.innerHeight-ad)>re.innerHeight*.25)&&Aa.restart(!0)},Or={},y_=[],gd=function r(){return He(Jt,"scrollEnd",r)||Lr(!0)},Fr=function(t){return Or[t]&&Or[t].map(function(e){return e()})||y_},zn=[],_d=function(t){for(var e=0;e<zn.length;e+=5)(!t||zn[e+4]&&zn[e+4].query===t)&&(zn[e].style.cssText=zn[e+1],zn[e].getBBox&&zn[e].setAttribute("transform",zn[e+2]||""),zn[e+3].uncache=1)},jc=function(t,e){var n;for(gn=0;gn<te.length;gn++)n=te[gn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ca=!0,e&&_d(e),e||Fr("revert")},xd=function(t,e){jt.cache++,(e||!_n)&&jt.forEach(function(n){return xn(n)&&n.cacheID++&&(n.rec=0)}),kn(t)&&(re.history.scrollRestoration=Yc=t)},_n,Ur=0,$f,M_=function(){if($f!==Ur){var t=$f=Ur;requestAnimationFrame(function(){return t===Ur&&Lr(!0)})}},vd=function(){xe.appendChild(_s),Zc=!mn&&_s.offsetHeight||re.innerHeight,xe.removeChild(_s)},Kf=function(t){return Ao(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Lr=function(t,e){if(Kn&&!t&&!Ca){Ge(Jt,"scrollEnd",gd);return}vd(),_n=Jt.isRefreshing=!0,jt.forEach(function(i){return xn(i)&&++i.cacheID&&(i.rec=i())});var n=Fr("refreshInit");sd&&Jt.sort(),e||jc(),jt.forEach(function(i){xn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),te.slice(0).forEach(function(i){return i.refresh()}),Ca=!1,te.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Gc=1,Kf(!0),te.forEach(function(i){var s=vi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Kf(!1),Gc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),jt.forEach(function(i){xn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),xd(Yc,1),Aa.pause(),Ur++,_n=2,Pi(2),te.forEach(function(i){return xn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),_n=Jt.isRefreshing=!1,Fr("refresh")},Xc=0,Ea=1,To,Pi=function(t){if(t===2||!_n&&!Ca){Jt.isUpdating=!0,To&&To.update(0);var e=te.length,n=rn(),i=n-Nc>=50,s=e&&te[0].scroll();if(Ea=Xc>s?-1:1,_n||(Xc=s),i&&(Kn&&!La&&n-Kn>200&&(Kn=0,Fr("scrollEnd")),go=Nc,Nc=n),Ea<0){for(gn=e;gn-- >0;)te[gn]&&te[gn].update(0,i);Ea=1}else for(gn=0;gn<e;gn++)te[gn]&&te[gn].update(0,i);Jt.isUpdating=!1}Co=0},qc=[dd,pd,$c,Jc,Jn+wo,Jn+So,Jn+Eo,Jn+bo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],wa=qc.concat([Ir,Dr,"boxSizing","max"+vs,"max"+Kc,"position",Jn,De,De+Eo,De+So,De+wo,De+bo]),S_=function(t,e,n){xs(n);var i=t._gsap;if(i.spacerIsNative)xs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Bc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=qc.length,a=e.style,o=t.style,l;s--;)l=qc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[$c]=o[Jc]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ir]=Ra(t,en)+Be,a[Dr]=Ra(t,Ie)+Be,a[De]=o[Jn]=o[pd]=o[dd]="0",xs(i),o[Ir]=o["max"+vs]=n[Ir],o[Dr]=o["max"+Kc]=n[Dr],o[De]=n[De],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},b_=/([A-Z])/g,xs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||yt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(b_,"-$1").toLowerCase())}},va=function(t){for(var e=wa.length,n=t.style,i=[],s=0;s<e;s++)i.push(wa[s],n[wa[s]]);return i.t=t,i},E_=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},Ta={left:0,top:0},Qf=function(t,e,n,i,s,a,o,l,c,h,u,f,d,_){xn(t)&&(t=t(l)),kn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Sa("0"+t.substr(3),n):0));var g=d?d.time():0,m,p,y;if(d&&d.seek(0),isNaN(t)||(t=+t),vo(t))d&&(t=yt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),o&&ba(o,n,i,!0);else{xn(e)&&(e=e(l));var x=(t||"0").split(" "),E,A,T,b;y=pn(e,l)||xe,E=Ri(y)||{},(!E||!E.left&&!E.top)&&$n(y).display==="none"&&(b=y.style.display,y.style.display="block",E=Ri(y),b?y.style.display=b:y.style.removeProperty("display")),A=Sa(x[0],E[i.d]),T=Sa(x[1]||"0",n),t=E[i.p]-c[i.p]-h+A+s-T,o&&ba(o,T,i,n-T<20||o._isStart&&T>20),n-=n-T}if(_&&(l[_]=t||-.001,t<0&&(t=0)),a){var I=t+n,v=a._isStart;m="scroll"+i.d2,ba(a,I,i,v&&I>20||!v&&(u?Math.max(xe[m],ri[m]):a.parentNode[m])<=I+1),u&&(c=Ri(o),u&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Be))}return d&&y&&(m=Ri(y),d.seek(f),p=Ri(y),d._caScrollDist=m[i.p]-p[i.p],t=t/d._caScrollDist*f),d&&d.seek(g),d?t:Math.round(t)},w_=/(webkit|moz|length|cssText|inset)/i,jf=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===xe){t._stOrig=s.cssText,o=$n(t);for(a in o)!+a&&!w_.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;yt.core.getCache(t).uncache=1,e.appendChild(t)}},yd=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=a,a}},ya=function(t,e,n){var i={};i[e.p]="+="+n,yt.set(t,i)},td=function(t,e){var n=Ai(t,e),i="_scroll"+e.p2,s=function a(o,l,c,h,u){var f=a.tween,d=l.onComplete,_={};c=c||n();var g=yd(n,c,function(){f.kill(),a.tween=0});return u=h&&u||0,h=h||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){jt.cache++,a.tween&&Pi()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=yt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ge(t,"wheel",n.wheelHandler),Jt.isTouch&&Ge(t,"touchmove",n.wheelHandler),s},Jt=(function(){function r(e,n){ms||r.register(yt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Hc(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_o){this.update=this.refresh=this.kill=xi;return}n=Yf(kn(n)||vo(n)||n.nodeType?{trigger:n}:n,_a);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,x=s.once,E=s.snap,A=s.pinReparent,T=s.pinSpacer,b=s.containerAnimation,I=s.fastScrollEnd,v=s.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?en:Ie,O=!u&&u!==0,N=pn(n.scroller||re),K=yt.core.getCache(N),P=Nr(N),U=("pinType"in n?n.pinType:Ci(N,"pinType")||P&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=O&&n.toggleActions.split(" "),q="markers"in n?n.markers:_a.markers,Y=P?0:parseFloat($n(N)["border"+S.p2+vs])||0,R=this,$=n.onRefreshInit&&function(){return n.onRefreshInit(R)},ct=m_(N,P,S),Z=g_(N,P),J=0,rt=0,_t=0,dt=Ai(N,S),Rt,Pt,Dt,Vt,z,Ht,mt,Lt,gt,V,Ot,C,M,F,tt,j,et,pt,ht,lt,wt,kt,Q,se,At,Gt,Et,xt,Wt,Kt,ae,ft,it,L,st,ot,Ut,It,ne;if(R._startClamp=R._endClamp=!1,R._dir=S,m*=45,R.scroller=N,R.scroll=b?b.time.bind(b):dt,Vt=dt(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(sd=1,n.refreshPriority===-9999&&(To=R)),K.tweenScroll=K.tweenScroll||{top:td(N,Ie),left:td(N,en)},R.tweenTo=Rt=K.tweenScroll[S.p],R.scrubDuration=function(nt){it=vo(nt)&&nt,it?ft?ft.duration(nt):ft=yt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:it,paused:!0,onComplete:function(){return p&&p(R)}}):(ft&&ft.progress(1).kill(),ft=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(u),Kt=0,l||(l=i.vars.id)),E&&((!Pr(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in xe.style&&yt.set(P?[xe,ri]:N,{scrollBehavior:"auto"}),jt.forEach(function(nt){return xn(nt)&&nt.target===(P?Te.scrollingElement||ri:N)&&(nt.smooth=!1)}),Dt=xn(E.snapTo)?E.snapTo:E.snapTo==="labels"?x_(i):E.snapTo==="labelsDirectional"?v_(i):E.directional!==!1?function(nt,Ft){return Qc(E.snapTo)(nt,rn()-rt<500?0:Ft.direction)}:yt.utils.snap(E.snapTo),L=E.duration||{min:.1,max:2},L=Pr(L)?Mo(L.min,L.max):Mo(L,L),st=yt.delayedCall(E.delay||it/2||.1,function(){var nt=dt(),Ft=rn()-rt<500,Nt=Rt.tween;if((Ft||Math.abs(R.getVelocity())<10)&&!Nt&&!La&&J!==nt){var qt=(nt-Ht)/F,be=i&&!O?i.totalProgress():qt,Qt=Ft?0:(be-ae)/(rn()-go)*1e3||0,pe=yt.utils.clamp(-qt,1-qt,ds(Qt/2)*Qt/.185),Ne=qt+(E.inertia===!1?0:pe),_e,me,le=E,Nn=le.onStart,w=le.onInterrupt,D=le.onComplete;if(_e=Dt(Ne,R),vo(_e)||(_e=Ne),me=Math.round(Ht+_e*F),nt<=mt&&nt>=Ht&&me!==nt){if(Nt&&!Nt._initted&&Nt.data<=ds(me-nt))return;E.inertia===!1&&(pe=_e-qt),Rt(me,{duration:L(ds(Math.max(ds(Ne-be),ds(_e-be))*.185/Qt/.05||0)),ease:E.ease||"power3",data:ds(me-nt),onInterrupt:function(){return st.restart(!0)&&w&&w(R)},onComplete:function(){R.update(),J=dt(),i&&(ft?ft.resetTo("totalProgress",_e,i._tTime/i._tDur):i.progress(_e)),Kt=ae=i&&!O?i.totalProgress():R.progress,y&&y(R),D&&D(R)}},nt,pe*F,me-nt-pe*F),Nn&&Nn(R,Rt.tween)}}else R.isActive&&J!==nt&&st.restart(!0)}).pause()),l&&(Wc[l]=R),f=R.trigger=pn(f||d!==!0&&d),ne=f&&f._gsap&&f._gsap.stRevert,ne&&(ne=ne(R)),d=d===!0?f:pn(d),kn(o)&&(o={targets:f,className:o}),d&&(_===!1||_===Jn||(_=!_&&d.parentNode&&d.parentNode.style&&$n(d.parentNode).display==="flex"?!1:De),R.pin=d,Pt=yt.core.getCache(d),Pt.spacer?tt=Pt.pinState:(T&&(T=pn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Pt.spacerIsNative=!!T,T&&(Pt.spacerState=va(T))),Pt.spacer=pt=T||Te.createElement("div"),pt.classList.add("pin-spacer"),l&&pt.classList.add("pin-spacer-"+l),Pt.pinState=tt=va(d)),n.force3D!==!1&&yt.set(d,{force3D:!0}),R.spacer=pt=Pt.spacer,Wt=$n(d),se=Wt[_+S.os2],lt=yt.getProperty(d),wt=yt.quickSetter(d,S.a,Be),Bc(d,pt,Wt),et=va(d)),q){C=Pr(q)?Yf(q,Zf):Zf,V=xa("scroller-start",l,N,S,C,0),Ot=xa("scroller-end",l,N,S,C,0,V),ht=V["offset"+S.op.d2];var oe=pn(Ci(N,"content")||N);Lt=this.markerStart=xa("start",l,oe,S,C,ht,0,b),gt=this.markerEnd=xa("end",l,oe,S,C,ht,0,b),b&&(It=yt.quickSetter([Lt,gt],S.a,Be)),!U&&!(ii.length&&Ci(N,"fixedMarkers")===!0)&&(__(P?xe:N),yt.set([V,Ot],{force3D:!0}),Gt=yt.quickSetter(V,S.a,Be),xt=yt.quickSetter(Ot,S.a,Be))}if(b){var bt=b.vars.onUpdate,vt=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){R.update(0,0,1),bt&&bt.apply(b,vt||[])})}if(R.previous=function(){return te[te.indexOf(R)-1]},R.next=function(){return te[te.indexOf(R)+1]},R.revert=function(nt,Ft){if(!Ft)return R.kill(!0);var Nt=nt!==!1||!R.enabled,qt=nn;Nt!==R.isReverted&&(Nt&&(ot=Math.max(dt(),R.scroll.rec||0),_t=R.progress,Ut=i&&i.progress()),Lt&&[Lt,gt,V,Ot].forEach(function(be){return be.style.display=Nt?"none":"block"}),Nt&&(nn=R,R.update(Nt)),d&&(!A||!R.isActive)&&(Nt?S_(d,pt,tt):Bc(d,pt,$n(d),At)),Nt||R.update(Nt),nn=qt,R.isReverted=Nt)},R.refresh=function(nt,Ft,Nt,qt){if(!((nn||!R.enabled)&&!Ft)){if(d&&nt&&Kn){Ge(r,"scrollEnd",gd);return}!_n&&$&&$(R),nn=R,Rt.tween&&!Nt&&(Rt.tween.kill(),Rt.tween=0),ft&&ft.pause(),g&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var be=ct(),Qt=Z(),pe=b?b.duration():vi(N,S),Ne=F<=.01,_e=0,me=qt||0,le=Pr(Nt)?Nt.end:n.end,Nn=n.endTrigger||f,w=Pr(Nt)?Nt.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),D=R.pinnedContainer=n.pinnedContainer&&pn(n.pinnedContainer,R),G=f&&Math.max(0,te.indexOf(R))||0,k=G,B,at,Mt,Bt,St,Tt,zt,Yt,ye,Oe,ce,cn,he;for(q&&Pr(Nt)&&(cn=yt.getProperty(V,S.p),he=yt.getProperty(Ot,S.p));k--;)Tt=te[k],Tt.end||Tt.refresh(0,1)||(nn=R),zt=Tt.pin,zt&&(zt===f||zt===d||zt===D)&&!Tt.isReverted&&(Oe||(Oe=[]),Oe.unshift(Tt),Tt.revert(!0,!0)),Tt!==te[k]&&(G--,k--);for(xn(w)&&(w=w(R)),w=Gf(w,"start",R),Ht=Qf(w,f,be,S,dt(),Lt,V,R,Qt,Y,U,pe,b,R._startClamp&&"_startClamp")||(d?-.001:0),xn(le)&&(le=le(R)),kn(le)&&!le.indexOf("+=")&&(~le.indexOf(" ")?le=(kn(w)?w.split(" ")[0]:"")+le:(_e=Sa(le.substr(2),be),le=kn(w)?w:(b?yt.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Ht):Ht)+_e,Nn=f)),le=Gf(le,"end",R),mt=Math.max(Ht,Qf(le||(Nn?"100% 0":pe),Nn,be,S,dt()+_e,gt,Ot,R,Qt,Y,U,pe,b,R._endClamp&&"_endClamp"))||-.001,_e=0,k=G;k--;)Tt=te[k],zt=Tt.pin,zt&&Tt.start-Tt._pinPush<=Ht&&!b&&Tt.end>0&&(B=Tt.end-(R._startClamp?Math.max(0,Tt.start):Tt.start),(zt===f&&Tt.start-Tt._pinPush<Ht||zt===D)&&isNaN(w)&&(_e+=B*(1-Tt.progress)),zt===d&&(me+=B));if(Ht+=_e,mt+=_e,R._startClamp&&(R._startClamp+=_e),R._endClamp&&!_n&&(R._endClamp=mt||-.001,mt=Math.min(mt,vi(N,S))),F=mt-Ht||(Ht-=.01)&&.001,Ne&&(_t=yt.utils.clamp(0,1,yt.utils.normalize(Ht,mt,ot))),R._pinPush=me,Lt&&_e&&(B={},B[S.a]="+="+_e,D&&(B[S.p]="-="+dt()),yt.set([Lt,gt],B)),d&&!(Gc&&R.end>=vi(N,S)))B=$n(d),Bt=S===Ie,Mt=dt(),kt=parseFloat(lt(S.a))+me,!pe&&mt>1&&(ce=(P?Te.scrollingElement||ri:N).style,ce={style:ce,value:ce["overflow"+S.a.toUpperCase()]},P&&$n(xe)["overflow"+S.a.toUpperCase()]!=="scroll"&&(ce.style["overflow"+S.a.toUpperCase()]="scroll")),Bc(d,pt,B),et=va(d),at=Ri(d,!0),Yt=U&&Ai(N,Bt?en:Ie)(),_?(At=[_+S.os2,F+me+Be],At.t=pt,k=_===De?Ra(d,S)+F+me:0,k&&(At.push(S.d,k+Be),pt.style.flexBasis!=="auto"&&(pt.style.flexBasis=k+Be)),xs(At),D&&te.forEach(function(Zt){Zt.pin===D&&Zt.vars.pinSpacing!==!1&&(Zt._subPinOffset=!0)}),U&&dt(ot)):(k=Ra(d,S),k&&pt.style.flexBasis!=="auto"&&(pt.style.flexBasis=k+Be)),U&&(St={top:at.top+(Bt?Mt-Ht:Yt)+Be,left:at.left+(Bt?Yt:Mt-Ht)+Be,boxSizing:"border-box",position:"fixed"},St[Ir]=St["max"+vs]=Math.ceil(at.width)+Be,St[Dr]=St["max"+Kc]=Math.ceil(at.height)+Be,St[Jn]=St[Jn+Eo]=St[Jn+So]=St[Jn+wo]=St[Jn+bo]="0",St[De]=B[De],St[De+Eo]=B[De+Eo],St[De+So]=B[De+So],St[De+wo]=B[De+wo],St[De+bo]=B[De+bo],j=E_(tt,St,A),_n&&dt(0)),i?(ye=i._initted,Dc(1),i.render(i.duration(),!0,!0),Q=lt(S.a)-kt+F+me,Et=Math.abs(F-Q)>1,U&&Et&&j.splice(j.length-2,2),i.render(0,!0,!0),ye||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Dc(0)):Q=F,ce&&(ce.value?ce.style["overflow"+S.a.toUpperCase()]=ce.value:ce.style.removeProperty("overflow-"+S.a));else if(f&&dt()&&!b)for(at=f.parentNode;at&&at!==xe;)at._pinOffset&&(Ht-=at._pinOffset,mt-=at._pinOffset),at=at.parentNode;Oe&&Oe.forEach(function(Zt){return Zt.revert(!1,!0)}),R.start=Ht,R.end=mt,Vt=z=_n?ot:dt(),!b&&!_n&&(Vt<ot&&dt(ot),R.scroll.rec=0),R.revert(!1,!0),rt=rn(),st&&(J=-1,st.restart(!0)),nn=0,i&&O&&(i._initted||Ut)&&i.progress()!==Ut&&i.progress(Ut||0,!0).render(i.time(),!0,!0),(Ne||_t!==R.progress||b||g)&&(i&&!O&&i.totalProgress(b&&Ht<-.001&&!_t?yt.utils.normalize(Ht,mt,0):_t,!0),R.progress=Ne||(Vt-Ht)/F===_t?0:_t),d&&_&&(pt._pinOffset=Math.round(R.progress*Q)),ft&&ft.invalidate(),isNaN(cn)||(cn-=yt.getProperty(V,S.p),he-=yt.getProperty(Ot,S.p),ya(V,S,cn),ya(Lt,S,cn-(qt||0)),ya(Ot,S,he),ya(gt,S,he-(qt||0))),Ne&&!_n&&R.update(),h&&!_n&&!M&&(M=!0,h(R),M=!1)}},R.getVelocity=function(){return(dt()-z)/(rn()-go)*1e3||0},R.endAnimation=function(){mo(R.callbackAnimation),i&&(ft?ft.progress(1):i.paused()?O||mo(i,R.direction<0,1):mo(i,i.reversed()))},R.labelToScroll=function(nt){return i&&i.labels&&(Ht||R.refresh()||Ht)+i.labels[nt]/i.duration()*F||0},R.getTrailing=function(nt){var Ft=te.indexOf(R),Nt=R.direction>0?te.slice(0,Ft).reverse():te.slice(Ft+1);return(kn(nt)?Nt.filter(function(qt){return qt.vars.preventOverlaps===nt}):Nt).filter(function(qt){return R.direction>0?qt.end<=Ht:qt.start>=mt})},R.update=function(nt,Ft,Nt){if(!(b&&!Nt&&!nt)){var qt=_n===!0?ot:R.scroll(),be=nt?0:(qt-Ht)/F,Qt=be<0?0:be>1?1:be||0,pe=R.progress,Ne,_e,me,le,Nn,w,D,G;if(Ft&&(z=Vt,Vt=b?dt():qt,E&&(ae=Kt,Kt=i&&!O?i.totalProgress():Qt)),m&&d&&!nn&&!da&&Kn&&(!Qt&&Ht<qt+(qt-z)/(rn()-go)*m?Qt=1e-4:Qt===1&&mt>qt+(qt-z)/(rn()-go)*m&&(Qt=.9999)),Qt!==pe&&R.enabled){if(Ne=R.isActive=!!Qt&&Qt<1,_e=!!pe&&pe<1,w=Ne!==_e,Nn=w||!!Qt!=!!pe,R.direction=Qt>pe?1:-1,R.progress=Qt,Nn&&!nn&&(me=Qt&&!pe?0:Qt===1?1:pe===1?2:3,O&&(le=!w&&X[me+1]!=="none"&&X[me+1]||X[me],G=i&&(le==="complete"||le==="reset"||le in i))),v&&(w||G)&&(G||u||!i)&&(xn(v)?v(R):R.getTrailing(v).forEach(function(Mt){return Mt.endAnimation()})),O||(ft&&!nn&&!da?(ft._dp._time-ft._start!==ft._time&&ft.render(ft._dp._time-ft._start),ft.resetTo?ft.resetTo("totalProgress",Qt,i._tTime/i._tDur):(ft.vars.totalProgress=Qt,ft.invalidate().restart())):i&&i.totalProgress(Qt,!!(nn&&(rt||nt)))),d){if(nt&&_&&(pt.style[_+S.os2]=se),!U)wt(xo(kt+Q*Qt));else if(Nn){if(D=!nt&&Qt>pe&&mt+1>qt&&qt+1>=vi(N,S),A)if(!nt&&(Ne||D)){var k=Ri(d,!0),B=qt-Ht;jf(d,xe,k.top+(S===Ie?B:0)+Be,k.left+(S===Ie?0:B)+Be)}else jf(d,pt);xs(Ne||D?j:et),Et&&Qt<1&&Ne||wt(kt+(Qt===1&&!D?Q:0))}}E&&!Rt.tween&&!nn&&!da&&st.restart(!0),o&&(w||x&&Qt&&(Qt<1||!Uc))&&Ao(o.targets).forEach(function(Mt){return Mt.classList[Ne||x?"add":"remove"](o.className)}),a&&!O&&!nt&&a(R),Nn&&!nn?(O&&(G&&(le==="complete"?i.pause().totalProgress(1):le==="reset"?i.restart(!0).pause():le==="restart"?i.restart(!0):i[le]()),a&&a(R)),(w||!Uc)&&(c&&w&&Oc(R,c),W[me]&&Oc(R,W[me]),x&&(Qt===1?R.kill(!1,1):W[me]=0),w||(me=Qt===1?1:3,W[me]&&Oc(R,W[me]))),I&&!Ne&&Math.abs(R.getVelocity())>(vo(I)?I:2500)&&(mo(R.callbackAnimation),ft?ft.progress(1):mo(i,le==="reverse"?1:!Qt,1))):O&&a&&!nn&&a(R)}if(xt){var at=b?qt/b.duration()*(b._caScrollDist||0):qt;Gt(at+(V._isFlipped?1:0)),xt(at)}It&&It(-qt/b.duration()*(b._caScrollDist||0))}},R.enable=function(nt,Ft){R.enabled||(R.enabled=!0,Ge(N,"resize",yo),P||Ge(N,"scroll",ps),$&&Ge(r,"refreshInit",$),nt!==!1&&(R.progress=_t=0,Vt=z=J=dt()),Ft!==!1&&R.refresh())},R.getTween=function(nt){return nt&&Rt?Rt.tween:ft},R.setPositions=function(nt,Ft,Nt,qt){if(b){var be=b.scrollTrigger,Qt=b.duration(),pe=be.end-be.start;nt=be.start+pe*nt/Qt,Ft=be.start+pe*Ft/Qt}R.refresh(!1,!1,{start:Wf(nt,Nt&&!!R._startClamp),end:Wf(Ft,Nt&&!!R._endClamp)},qt),R.update()},R.adjustPinSpacing=function(nt){if(At&&nt){var Ft=At.indexOf(S.d)+1;At[Ft]=parseFloat(At[Ft])+nt+Be,At[1]=parseFloat(At[1])+nt+Be,xs(At)}},R.disable=function(nt,Ft){if(R.enabled&&(nt!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Ft||ft&&ft.pause(),ot=0,Pt&&(Pt.uncache=1),$&&He(r,"refreshInit",$),st&&(st.pause(),Rt.tween&&Rt.tween.kill()&&(Rt.tween=0)),!P)){for(var Nt=te.length;Nt--;)if(te[Nt].scroller===N&&te[Nt]!==R)return;He(N,"resize",yo),P||He(N,"scroll",ps)}},R.kill=function(nt,Ft){R.disable(nt,Ft),ft&&!Ft&&ft.kill(),l&&delete Wc[l];var Nt=te.indexOf(R);Nt>=0&&te.splice(Nt,1),Nt===gn&&Ea>0&&gn--,Nt=0,te.forEach(function(qt){return qt.scroller===R.scroller&&(Nt=1)}),Nt||_n||(R.scroll.rec=0),i&&(i.scrollTrigger=null,nt&&i.revert({kill:!1}),Ft||i.kill()),Lt&&[Lt,gt,V,Ot].forEach(function(qt){return qt.parentNode&&qt.parentNode.removeChild(qt)}),To===R&&(To=0),d&&(Pt&&(Pt.uncache=1),Nt=0,te.forEach(function(qt){return qt.pin===d&&Nt++}),Nt||(Pt.spacer=0)),n.onKill&&n.onKill(R)},te.push(R),R.enable(!1,!1),ne&&ne(R),i&&i.add&&!F){var Ct=R.update;R.update=function(){R.update=Ct,Ht||mt||R.refresh()},yt.delayedCall(.01,R.update),F=.01,Ht=mt=0}else R.refresh();d&&M_()},r.register=function(n){return ms||(yt=n||hd(),cd()&&window.document&&r.enable(),ms=_o),ms},r.defaults=function(n){if(n)for(var i in n)_a[i]=n[i];return _a},r.disable=function(n,i){_o=0,te.forEach(function(a){return a[i?"kill":"disable"](n)}),He(re,"wheel",ps),He(Te,"scroll",ps),clearInterval(fa),He(Te,"touchcancel",xi),He(xe,"touchstart",xi),ma(He,Te,"pointerdown,touchstart,mousedown",Xf),ma(He,Te,"pointerup,touchend,mouseup",qf),Aa.kill(),pa(He);for(var s=0;s<jt.length;s+=3)ga(He,jt[s],jt[s+1]),ga(He,jt[s],jt[s+2])},r.enable=function(){if(re=window,Te=document,ri=Te.documentElement,xe=Te.body,yt&&(Ao=yt.utils.toArray,Mo=yt.utils.clamp,Hc=yt.core.context||xi,Dc=yt.core.suppressOverwrites||xi,Yc=re.history.scrollRestoration||"auto",Xc=re.pageYOffset,yt.core.globals("ScrollTrigger",r),xe)){_o=1,_s=document.createElement("div"),_s.style.height="100vh",_s.style.position="absolute",vd(),p_(),Pe.register(yt),r.isTouch=Pe.isTouch,ji=Pe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Vc=Pe.isTouch===1,Ge(re,"wheel",ps),rd=[re,Te,ri,xe],yt.matchMedia?(r.matchMedia=function(l){var c=yt.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},yt.addEventListener("matchMediaInit",function(){return jc()}),yt.addEventListener("matchMediaRevert",function(){return _d()}),yt.addEventListener("matchMedia",function(){Lr(0,1),Fr("matchMedia")}),yt.matchMedia("(orientation: portrait)",function(){return Fc(),Fc})):console.warn("Requires GSAP 3.11.0 or later"),Fc(),Ge(Te,"scroll",ps);var n=xe.style,i=n.borderTopStyle,s=yt.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Ri(xe),Ie.m=Math.round(a.top+Ie.sc())||0,en.m=Math.round(a.left+en.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),fa=setInterval(Jf,250),yt.delayedCall(.5,function(){return da=0}),Ge(Te,"touchcancel",xi),Ge(xe,"touchstart",xi),ma(Ge,Te,"pointerdown,touchstart,mousedown",Xf),ma(Ge,Te,"pointerup,touchend,mouseup",qf),kc=yt.utils.checkPrefix("transform"),wa.push(kc),ms=rn(),Aa=yt.delayedCall(.2,Lr).pause(),gs=[Te,"visibilitychange",function(){var l=re.innerWidth,c=re.innerHeight;Te.hidden?(Vf=l,Hf=c):(Vf!==l||Hf!==c)&&yo()},Te,"DOMContentLoaded",Lr,re,"load",Lr,re,"resize",yo],pa(Ge),te.forEach(function(l){return l.enable(0,1)}),o=0;o<jt.length;o+=3)ga(He,jt[o],jt[o+1]),ga(He,jt[o],jt[o+2])}},r.config=function(n){"limitCallbacks"in n&&(Uc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(fa)||(fa=i)&&setInterval(Jf,i),"ignoreMobileResize"in n&&(Vc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(pa(He)||pa(Ge,n.autoRefreshEvents||"none"),od=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=pn(n),a=jt.indexOf(s),o=Nr(s);~a&&jt.splice(a,o?6:2),i&&(o?ii.unshift(re,i,xe,i,ri,i):ii.unshift(s,i))},r.clearMatchMedia=function(n){te.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(kn(n)?pn(n):n).getBoundingClientRect(),o=a[s?Ir:Dr]*i||0;return s?a.right-o>0&&a.left+o<re.innerWidth:a.bottom-o>0&&a.top+o<re.innerHeight},r.positionInViewport=function(n,i,s){kn(n)&&(n=pn(n));var a=n.getBoundingClientRect(),o=a[s?Ir:Dr],l=i==null?o/2:i in Pa?Pa[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/re.innerWidth:(a.top+l)/re.innerHeight},r.killAll=function(n){if(te.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Or.killAll||[];Or={},i.forEach(function(s){return s()})}},r})();Jt.version="3.12.5";Jt.saveStyles=function(r){return r?Ao(r).forEach(function(t){if(t&&t.style){var e=zn.indexOf(t);e>=0&&zn.splice(e,5),zn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),yt.core.getCache(t),Hc())}}):zn};Jt.revert=function(r,t){return jc(!r,t)};Jt.create=function(r,t){return new Jt(r,t)};Jt.refresh=function(r){return r?yo():(ms||Jt.register())&&Lr(!0)};Jt.update=function(r){return++jt.cache&&Pi(r===!0?2:0)};Jt.clearScrollMemory=xd;Jt.maxScroll=function(r,t){return vi(r,t?en:Ie)};Jt.getScrollFunc=function(r,t){return Ai(pn(r),t?en:Ie)};Jt.getById=function(r){return Wc[r]};Jt.getAll=function(){return te.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Jt.isScrolling=function(){return!!Kn};Jt.snapDirectional=Qc;Jt.addEventListener=function(r,t){var e=Or[r]||(Or[r]=[]);~e.indexOf(t)||e.push(t)};Jt.removeEventListener=function(r,t){var e=Or[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Jt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,h){var u=[],f=[],d=yt.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(_){u.length||d.restart(!0),u.push(_.trigger),f.push(_),s<=u.length&&d.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&xn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return xn(s)&&(s=s(),Ge(Jt,"refresh",function(){return s=t.batchMax()})),Ao(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(Jt.create(c))}),e};var ed=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},zc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Pe.isTouch?" pinch-zoom":""):"none",t===ri&&r(xe,e)},Ma={auto:1,scroll:1},T_=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||yt.core.getCache(s),o=rn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==xe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ma[(l=$n(s)).overflowY]||Ma[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Nr(s)&&(Ma[(l=$n(s)).overflowY]||Ma[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Md=function(t,e,n,i){return Pe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&T_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ge(Te,Pe.eventTypes[0],id,!1,!0)},onDisable:function(){return He(Te,Pe.eventTypes[0],id,!0)}})},A_=/(input|label|select|textarea)/i,nd,id=function(t){var e=A_.test(t.target.tagName);(e||nd)&&(t._gsapAllow=!0,nd=e)},C_=function(t){Pr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=pn(t.target)||ri,h=yt.core.globals().ScrollSmoother,u=h&&h.get(),f=ji&&(t.content&&pn(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),d=Ai(c,Ie),_=Ai(c,en),g=1,m=(Pe.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,p=0,y=xn(i)?function(){return i(o)}:function(){return i||2.8},x,E,A=Md(c,t.type,!0,s),T=function(){return E=!1},b=xi,I=xi,v=function(){l=vi(c,Ie),I=Mo(ji?1:0,l),n&&(b=Mo(0,vi(c,en))),x=Ur},S=function(){f._gsap.y=xo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},O=function(){if(E){requestAnimationFrame(T);var q=xo(o.deltaY/2),Y=I(d.v-q);if(f&&Y!==d.v+d.offset){d.offset=Y-d.v;var R=xo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",d.cacheID=jt.cache,Pi()}return!0}d.offset&&S(),E=!0},N,K,P,U,W=function(){v(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&yt.set(f,{y:"+=0"}),t.ignoreCheck=function(X){return ji&&X.type==="touchmove"&&O(X)||g>1.05&&X.type!=="touchstart"||o.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){E=!1;var X=g;g=xo((re.visualViewport&&re.visualViewport.scale||1)/m),N.pause(),X!==g&&zc(c,g>1.01?!0:n?!1:"x"),K=_(),P=d(),v(),x=Ur},t.onRelease=t.onGestureStart=function(X,q){if(d.offset&&S(),!q)U.restart(!0);else{jt.cache++;var Y=y(),R,$;n&&(R=_(),$=R+Y*.05*-X.velocityX/.227,Y*=ed(_,R,$,vi(c,en)),N.vars.scrollX=b($)),R=d(),$=R+Y*.05*-X.velocityY/.227,Y*=ed(d,R,$,vi(c,Ie)),N.vars.scrollY=I($),N.invalidate().duration(Y).play(.01),(ji&&N.vars.scrollY>=l||R>=l-1)&&yt.to({},{onUpdate:W,duration:Y})}a&&a(X)},t.onWheel=function(){N._ts&&N.pause(),rn()-p>1e3&&(x=0,p=rn())},t.onChange=function(X,q,Y,R,$){if(Ur!==x&&v(),q&&n&&_(b(R[2]===q?K+(X.startX-X.x):_()+q-R[1])),Y){d.offset&&S();var ct=$[2]===Y,Z=ct?P+X.startY-X.y:d()+Y-$[1],J=I(Z);ct&&Z!==J&&(P+=J-Z),d(J)}(Y||q)&&Pi()},t.onEnable=function(){zc(c,n?!1:"x"),Jt.addEventListener("refresh",W),Ge(re,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),A.enable()},t.onDisable=function(){zc(c,!0),He(re,"resize",W),Jt.removeEventListener("refresh",W),A.kill()},t.lockAxis=t.lockAxis!==!1,o=new Pe(t),o.iOS=ji,ji&&!d()&&d(1),ji&&yt.ticker.add(xi),U=o._dc,N=yt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:yd(d,d(),function(){return N.pause()})},onUpdate:Pi,onComplete:U.vars.onComplete}),o};Jt.sort=function(r){return te.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};Jt.observe=function(r){return new Pe(r)};Jt.normalizeScroll=function(r){if(typeof r=="undefined")return mn;if(r===!0&&mn)return mn.enable();if(r===!1){mn&&mn.kill(),mn=r;return}var t=r instanceof Pe?r:C_(r);return mn&&mn.target===t.target&&mn.kill(),Nr(t.target)&&(mn=t),t};Jt.core={_getVelocityProp:ua,_inputObserver:Md,_scrollers:jt,_proxies:ii,bridge:{ss:function(){Kn||Fr("scrollStart"),Kn=rn()},ref:function(){return nn}}};hd()&&yt.registerPlugin(Jt);var R_=0,Sd=1,P_=2;var Kp=1,L_=2,Oi=3,hr=0,Dn=1,Bi=2;var ar=0,zs=1,ki=2,bd=3,Ed=4,I_=5,Gr=100,D_=101,U_=102,wd=103,Td=104,N_=200,O_=201,F_=202,B_=203,Ih=204,Dh=205,z_=206,k_=207,V_=208,H_=209,G_=210,W_=211,X_=212,q_=213,Y_=214,Z_=0,J_=1,$_=2,rl=3,K_=4,Q_=5,j_=6,t0=7,Qp=0,e0=1,n0=2,lr=0,i0=1,r0=2,s0=3,o0=4,a0=5,l0=6;var jp=300,Hs=301,Gs=302,Uh=303,Nh=304,Cl=306,Oh=1e3,li=1001,Fh=1002,yn=1003,Ad=1004;var th=1005;var jn=1006,c0=1007;var Oo=1008;var cr=1009,h0=1010,u0=1011,gu=1012,tm=1013,sr=1014,or=1015,Fo=1016,em=1017,nm=1018,Xr=1020,f0=1021,ci=1023,d0=1024,p0=1025,qr=1026,Ws=1027,m0=1028,im=1029,g0=1030,rm=1031,sm=1033,eh=33776,nh=33777,ih=33778,rh=33779,Cd=35840,Rd=35841,Pd=35842,Ld=35843,om=36196,Id=37492,Dd=37496,Ud=37808,Nd=37809,Od=37810,Fd=37811,Bd=37812,zd=37813,kd=37814,Vd=37815,Hd=37816,Gd=37817,Wd=37818,Xd=37819,qd=37820,Yd=37821,sh=36492,Zd=36494,Jd=36495,_0=36283,$d=36284,Kd=36285,Qd=36286;var sl=2300,ol=2301,oh=2302,jd=2400,tp=2401,ep=2402;var am=3e3,Yr=3001,x0=3200,v0=3201,y0=0,M0=1,ti="",Je="srgb",Vi="srgb-linear",_u="display-p3",Rl="display-p3-linear",al="linear",ve="srgb",ll="rec709",cl="p3";var ys=7680;var np=519,S0=512,b0=513,E0=514,lm=515,w0=516,T0=517,A0=518,C0=519,ip=35044;var rp="300 es",Bh=1035,zi=2e3,hl=2001,ur=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ah=Math.PI/180,zh=180/Math.PI;function Ho(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[r&255]+sn[r>>8&255]+sn[r>>16&255]+sn[r>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function In(r,t,e){return Math.max(t,Math.min(e,r))}function R0(r,t){return(r%t+t)%t}function lh(r,t,e){return(1-e)*r+e*t}function sp(r){return(r&r-1)===0&&r!==0}function kh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ro(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ln(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var fe=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(In(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class r{constructor(t,e,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],y=i[1],x=i[4],E=i[7],A=i[2],T=i[5],b=i[8];return s[0]=a*g+o*y+l*A,s[3]=a*m+o*x+l*T,s[6]=a*p+o*E+l*b,s[1]=c*g+h*y+u*A,s[4]=c*m+h*x+u*T,s[7]=c*p+h*E+u*b,s[2]=f*g+d*y+_*A,s[5]=f*m+d*x+_*T,s[8]=f*p+d*E+_*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,_=e*u+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ch.makeScale(t,e)),this}rotate(t){return this.premultiply(ch.makeRotation(-t)),this}translate(t,e){return this.premultiply(ch.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ch=new ee;function cm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ul(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function P0(){let r=ul("canvas");return r.style.display="block",r}var op={};function Uo(r){r in op||(op[r]=!0,console.warn(r))}var ap=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lp=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ia={[Vi]:{transfer:al,primaries:ll,toReference:r=>r,fromReference:r=>r},[Je]:{transfer:ve,primaries:ll,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Rl]:{transfer:al,primaries:cl,toReference:r=>r.applyMatrix3(lp),fromReference:r=>r.applyMatrix3(ap)},[_u]:{transfer:ve,primaries:cl,toReference:r=>r.convertSRGBToLinear().applyMatrix3(lp),fromReference:r=>r.applyMatrix3(ap).convertLinearToSRGB()}},L0=new Set([Vi,Rl]),ue={enabled:!0,_workingColorSpace:Vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!L0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let n=Ia[t].toReference,i=Ia[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Ia[r].primaries},getTransfer:function(r){return r===ti?al:Ia[r].transfer}};function ks(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function hh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ms,fl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=ul("canvas")),Ms.width=t.width,Ms.height=t.height;let n=Ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ul("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ks(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ks(e[n]/255)*255):e[n]=ks(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},I0=0,dl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Ho(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(uh(i[a].image)):s.push(uh(i[a]))}else s=uh(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function uh(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?fl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var D0=0,hi=class r extends ur{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=li,i=li,s=jn,a=Oo,o=ci,l=cr,c=r.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Ho(),this.name="",this.source=new dl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Yr?Je:ti),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oh:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case Fh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oh:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case Fh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Je?Yr:am}set encoding(t){Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Yr?Je:ti}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=jp;hi.DEFAULT_ANISOTROPY=1;var $e=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,E=(d+1)/2,A=(p+1)/2,T=(h+f)/4,b=(u+g)/4,I=(_+m)/4;return x>E&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=b/n):E>A?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=T/i,s=I/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=I/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-g)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vh=class extends ur{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new $e(0,0,t,e),this.scissorTest=!1,this.viewport=new $e(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Uo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yr?Je:ti),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new hi(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new dl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hi=class extends Vh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},pl=class extends hi{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hh=class extends hi{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==d||h!==_){let m=1-o,p=l*f+c*d+h*_+u*g,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let A=Math.sqrt(x),T=Math.atan2(A,p*y);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}let E=o*y;if(l=l*m+f*E,c=c*m+d*E,h=h*m+_*E,u=u*m+g*E,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+h*u+l*d-c*f,t[e+1]=l*_+h*f+c*u-o*d,t[e+2]=c*_+h*d+o*f-l*u,t[e+3]=h*_-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(In(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fh.copy(this).projectOnVector(t),this.sub(fh)}reflect(t){return this.sub(fh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(In(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fh=new H,cp=new fr,Zr=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,si):si.fromBufferAttribute(s,a),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Da.copy(n.boundingBox)),Da.applyMatrix4(t.matrixWorld),this.union(Da)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),Ua.subVectors(this.max,Po),Ss.subVectors(t.a,Po),bs.subVectors(t.b,Po),Es.subVectors(t.c,Po),tr.subVectors(bs,Ss),er.subVectors(Es,bs),Br.subVectors(Ss,Es);let e=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Br.z,Br.y,tr.z,0,-tr.x,er.z,0,-er.x,Br.z,0,-Br.x,-tr.y,tr.x,0,-er.y,er.x,0,-Br.y,Br.x,0];return!dh(e,Ss,bs,Es,Ua)||(e=[1,0,0,0,1,0,0,0,1],!dh(e,Ss,bs,Es,Ua))?!1:(Na.crossVectors(tr,er),e=[Na.x,Na.y,Na.z],dh(e,Ss,bs,Es,Ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Li=[new H,new H,new H,new H,new H,new H,new H,new H],si=new H,Da=new Zr,Ss=new H,bs=new H,Es=new H,tr=new H,er=new H,Br=new H,Po=new H,Ua=new H,Na=new H,zr=new H;function dh(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){zr.fromArray(r,s);let o=i.x*Math.abs(zr.x)+i.y*Math.abs(zr.y)+i.z*Math.abs(zr.z),l=t.dot(zr),c=e.dot(zr),h=n.dot(zr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var U0=new Zr,Lo=new H,ph=new H,Jr=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):U0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);let e=Lo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Lo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ph.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(ph)),this.expandByPoint(Lo.copy(t.center).sub(ph))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ii=new H,mh=new H,Oa=new H,nr=new H,gh=new H,Fa=new H,_h=new H,Bo=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){mh.copy(t).add(e).multiplyScalar(.5),Oa.copy(e).sub(t).normalize(),nr.copy(this.origin).sub(mh);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Oa),o=nr.dot(this.direction),l=-nr.dot(Oa),c=nr.lengthSq(),h=Math.abs(1-a*a),u,f,d,_;if(h>0)if(u=a*l-o,f=a*o-l,_=s*h,u>=0)if(f>=-_)if(f<=_){let g=1/h;u*=g,f*=g,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(mh).addScaledVector(Oa,f),d}intersectSphere(t,e){Ii.subVectors(t.center,this.origin);let n=Ii.dot(this.direction),i=Ii.dot(Ii)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,n,i,s){gh.subVectors(e,t),Fa.subVectors(n,t),_h.crossVectors(gh,Fa);let a=this.direction.dot(_h),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nr.subVectors(this.origin,t);let l=o*this.direction.dot(Fa.crossVectors(nr,Fa));if(l<0)return null;let c=o*this.direction.dot(gh.cross(nr));if(c<0||l+c>a)return null;let h=-o*nr.dot(_h);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xe=class r{constructor(t,e,n,i,s,a,o,l,c,h,u,f,d,_,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,f,d,_,g,m)}set(t,e,n,i,s,a,o,l,c,h,u,f,d,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ws.setFromMatrixColumn(t,0).length(),s=1/ws.setFromMatrixColumn(t,1).length(),a=1/ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=a*h,d=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f-g*o,e[4]=-a*u,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+_,e[10]=f-g*u}else if(t.order==="XZY"){let f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=a*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=o*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(N0,t,O0)}lookAt(t,e,n){let i=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ir.crossVectors(n,Vn),ir.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ir.crossVectors(n,Vn)),ir.normalize(),Ba.crossVectors(Vn,ir),i[0]=ir.x,i[4]=Ba.x,i[8]=Vn.x,i[1]=ir.y,i[5]=Ba.y,i[9]=Vn.y,i[2]=ir.z,i[6]=Ba.z,i[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],y=n[3],x=n[7],E=n[11],A=n[15],T=i[0],b=i[4],I=i[8],v=i[12],S=i[1],O=i[5],N=i[9],K=i[13],P=i[2],U=i[6],W=i[10],X=i[14],q=i[3],Y=i[7],R=i[11],$=i[15];return s[0]=a*T+o*S+l*P+c*q,s[4]=a*b+o*O+l*U+c*Y,s[8]=a*I+o*N+l*W+c*R,s[12]=a*v+o*K+l*X+c*$,s[1]=h*T+u*S+f*P+d*q,s[5]=h*b+u*O+f*U+d*Y,s[9]=h*I+u*N+f*W+d*R,s[13]=h*v+u*K+f*X+d*$,s[2]=_*T+g*S+m*P+p*q,s[6]=_*b+g*O+m*U+p*Y,s[10]=_*I+g*N+m*W+p*R,s[14]=_*v+g*K+m*X+p*$,s[3]=y*T+x*S+E*P+A*q,s[7]=y*b+x*O+E*U+A*Y,s[11]=y*I+x*N+E*W+A*R,s[15]=y*v+x*K+E*X+A*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*d-n*l*d)+g*(+e*l*d-e*c*f+s*a*f-i*a*d+i*c*h-s*l*h)+m*(+e*c*u-e*o*d-s*a*u+n*a*d+s*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],y=u*m*c-g*f*c+g*l*d-o*m*d-u*l*p+o*f*p,x=_*f*c-h*m*c-_*l*d+a*m*d+h*l*p-a*f*p,E=h*g*c-_*u*c+_*o*d-a*g*d-h*o*p+a*u*p,A=_*u*l-h*g*l-_*o*f+a*g*f+h*o*m-a*u*m,T=e*y+n*x+i*E+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return t[0]=y*b,t[1]=(g*f*s-u*m*s-g*i*d+n*m*d+u*i*p-n*f*p)*b,t[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*b,t[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*d-n*l*d)*b,t[4]=x*b,t[5]=(h*m*s-_*f*s+_*i*d-e*m*d-h*i*p+e*f*p)*b,t[6]=(_*l*s-a*m*s-_*i*c+e*m*c+a*i*p-e*l*p)*b,t[7]=(a*f*s-h*l*s+h*i*c-e*f*c-a*i*d+e*l*d)*b,t[8]=E*b,t[9]=(_*u*s-h*g*s-_*n*d+e*g*d+h*n*p-e*u*p)*b,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*p+e*o*p)*b,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*d-e*o*d)*b,t[12]=A*b,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*m+e*u*m)*b,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*b,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*b,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,_=s*u,g=a*h,m=a*u,p=o*u,y=l*c,x=l*h,E=l*u,A=n.x,T=n.y,b=n.z;return i[0]=(1-(g+p))*A,i[1]=(d+E)*A,i[2]=(_-x)*A,i[3]=0,i[4]=(d-E)*T,i[5]=(1-(f+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(_+x)*b,i[9]=(m-y)*b,i[10]=(1-(f+g))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=ws.set(i[0],i[1],i[2]).length(),a=ws.set(i[4],i[5],i[6]).length(),o=ws.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],oi.copy(this);let c=1/s,h=1/a,u=1/o;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,e.setFromRotationMatrix(oi),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=zi){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,_;if(o===zi)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===hl)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=zi){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),f=(e+t)*c,d=(n+i)*h,_,g;if(o===zi)_=(a+s)*u,g=-2*u;else if(o===hl)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ws=new H,oi=new Xe,N0=new H(0,0,0),O0=new H(1,1,1),ir=new H,Ba=new H,Vn=new H,hp=new Xe,up=new fr,ml=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(In(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-In(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(In(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-In(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(In(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-In(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return up.setFromEuler(this),this.setFromQuaternion(up,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ml.DEFAULT_ORDER="XYZ";var gl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},F0=0,fp=new H,Ts=new fr,Di=new Xe,za=new H,Io=new H,B0=new H,z0=new fr,dp=new H(1,0,0),pp=new H(0,1,0),mp=new H(0,0,1),k0={type:"added"},V0={type:"removed"},Gn=class r extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new H,e=new ml,n=new fr,i=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new ee}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(dp,t)}rotateY(t){return this.rotateOnAxis(pp,t)}rotateZ(t){return this.rotateOnAxis(mp,t)}translateOnAxis(t,e){return fp.copy(t).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dp,t)}translateY(t){return this.translateOnAxis(pp,t)}translateZ(t){return this.translateOnAxis(mp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?za.copy(t):za.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Io,za,this.up):Di.lookAt(za,Io,this.up),this.quaternion.setFromRotationMatrix(Di),i&&(Di.extractRotation(i.matrixWorld),Ts.setFromRotationMatrix(Di),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(k0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(V0)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,B0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Gn.DEFAULT_UP=new H(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new H,Ui=new H,xh=new H,Ni=new H,As=new H,Cs=new H,gp=new H,vh=new H,yh=new H,Mh=new H,ka=!1,Os=class r{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ai.subVectors(t,e),i.cross(ai);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ai.subVectors(i,e),Ui.subVectors(n,e),xh.subVectors(t,e);let a=ai.dot(ai),o=ai.dot(Ui),l=ai.dot(xh),c=Ui.dot(Ui),h=Ui.dot(xh),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,_=(a*h-o*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getUV(t,e,n,i,s,a,o,l){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),this.getInterpolation(t,e,n,i,s,a,o,l)}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l)}static isFrontFacing(t,e,n,i){return ai.subVectors(n,e),Ui.subVectors(t,e),ai.cross(Ui).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ai.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;As.subVectors(i,n),Cs.subVectors(s,n),vh.subVectors(t,n);let l=As.dot(vh),c=Cs.dot(vh);if(l<=0&&c<=0)return e.copy(n);yh.subVectors(t,i);let h=As.dot(yh),u=Cs.dot(yh);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(As,a);Mh.subVectors(t,s);let d=As.dot(Mh),_=Cs.dot(Mh);if(_>=0&&d<=_)return e.copy(s);let g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Cs,o);let m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return gp.subVectors(s,i),o=(u-h)/(u-h+(d-_)),e.copy(i).addScaledVector(gp,o);let p=1/(m+g+f);return a=g*p,o=f*p,e.copy(n).addScaledVector(As,a).addScaledVector(Cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Sh(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=R0(t,1),e=In(e,0,1),n=In(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Sh(a,s,t+1/3),this.g=Sh(a,s,t),this.b=Sh(a,s,t-1/3)}return ue.toWorkingColorSpace(this,i),this}setStyle(t,e=Je){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=hm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}copyLinearToSRGB(t){return this.r=hh(t.r),this.g=hh(t.g),this.b=hh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ue.fromWorkingColorSpace(on.copy(this),t),Math.round(In(on.r*255,0,255))*65536+Math.round(In(on.g*255,0,255))*256+Math.round(In(on.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(on.copy(this),e);let n=on.r,i=on.g,s=on.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Je){ue.fromWorkingColorSpace(on.copy(this),t);let e=on.r,n=on.g,i=on.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(rr),this.setHSL(rr.h+t,rr.s+e,rr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rr),t.getHSL(Va);let n=lh(rr.h,Va.h,e),i=lh(rr.s,Va.s,e),s=lh(rr.l,Va.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Xt;Xt.NAMES=hm;var H0=0,dr=class extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=zs,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Dh,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==hr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ih&&(n.blendSrc=this.blendSrc),this.blendDst!==Dh&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==np&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_l=class extends dr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ue=new H,Ha=new fe,bn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ip,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ha.fromBufferAttribute(this,e),Ha.applyMatrix3(t),this.setXY(e,Ha.x,Ha.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ro(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ro(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ro(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ro(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ro(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array),i=Ln(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array),i=Ln(i,this.array),s=Ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ip&&(t.usage=this.usage),t}};var xl=class extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vl=class extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var En=class extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}};var G0=0,Qn=new Xe,bh=new Gn,Rs=new H,Hn=new Zr,Do=new Zr,We=new H,wn=class r extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cm(t)?vl:xl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,n){return Qn.makeTranslation(t,e,n),this.applyMatrix4(Qn),this}scale(t,e,n){return Qn.makeScale(t,e,n),this.applyMatrix4(Qn),this}lookAt(t){return bh.lookAt(t),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new En(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Do.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(Hn.min,Do.min),Hn.expandByPoint(We),We.addVectors(Hn.max,Do.max),Hn.expandByPoint(We)):(Hn.expandByPoint(Do.min),Hn.expandByPoint(Do.max))}Hn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)We.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(We));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)We.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(t,c),We.add(Rs)),i=Math.max(i,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<o;S++)c[S]=new H,h[S]=new H;let u=new H,f=new H,d=new H,_=new fe,g=new fe,m=new fe,p=new H,y=new H;function x(S,O,N){u.fromArray(i,S*3),f.fromArray(i,O*3),d.fromArray(i,N*3),_.fromArray(a,S*2),g.fromArray(a,O*2),m.fromArray(a,N*2),f.sub(u),d.sub(u),g.sub(_),m.sub(_);let K=1/(g.x*m.y-m.x*g.y);isFinite(K)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(K),y.copy(d).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(K),c[S].add(p),c[O].add(p),c[N].add(p),h[S].add(y),h[O].add(y),h[N].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let S=0,O=E.length;S<O;++S){let N=E[S],K=N.start,P=N.count;for(let U=K,W=K+P;U<W;U+=3)x(n[U+0],n[U+1],n[U+2])}let A=new H,T=new H,b=new H,I=new H;function v(S){b.fromArray(s,S*3),I.copy(b);let O=c[S];A.copy(O),A.sub(b.multiplyScalar(b.dot(O))).normalize(),T.crossVectors(I,O);let K=T.dot(h[S])<0?-1:1;l[S*4]=A.x,l[S*4+1]=A.y,l[S*4+2]=A.z,l[S*4+3]=K}for(let S=0,O=E.length;S<O;++S){let N=E[S],K=N.start,P=N.count;for(let U=K,W=K+P;U<W;U+=3)v(n[U+0]),v(n[U+1]),v(n[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new H,s=new H,a=new H,o=new H,l=new H,c=new H,h=new H,u=new H;if(t)for(let f=0,d=t.count;f<d;f+=3){let _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*h;for(let p=0;p<h;p++)f[_++]=c[d++]}return new bn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_p=new Xe,kr=new Bo,Ga=new Jr,xp=new H,Ps=new H,Ls=new H,Is=new H,Eh=new H,Wa=new H,Xa=new fe,qa=new fe,Ya=new fe,vp=new H,yp=new H,Mp=new H,Za=new H,Ja=new H,Sn=class extends Gn{constructor(t=new wn,e=new _l){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){Wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Eh.fromBufferAttribute(u,t),a?Wa.addScaledVector(Eh,h):Wa.addScaledVector(Eh.sub(e),h))}e.add(Wa)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),kr.copy(t.ray).recast(t.near),!(Ga.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Ga,xp)===null||kr.origin.distanceToSquared(xp)>(t.far-t.near)**2))&&(_p.copy(s).invert(),kr.copy(t.ray).applyMatrix4(_p),!(n.boundingBox!==null&&kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kr)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let E=y,A=x;E<A;E+=3){let T=o.getX(E),b=o.getX(E+1),I=o.getX(E+2);i=$a(this,p,t,n,c,h,u,T,b,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let y=o.getX(m),x=o.getX(m+1),E=o.getX(m+2);i=$a(this,a,t,n,c,h,u,y,x,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=y,A=x;E<A;E+=3){let T=E,b=E+1,I=E+2;i=$a(this,p,t,n,c,h,u,T,b,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let y=m,x=m+1,E=m+2;i=$a(this,a,t,n,c,h,u,y,x,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function W0(r,t,e,n,i,s,a,o){let l;if(t.side===Dn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===hr,o),l===null)return null;Ja.copy(o),Ja.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Ja);return c<e.near||c>e.far?null:{distance:c,point:Ja.clone(),object:r}}function $a(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Ps),r.getVertexPosition(l,Ls),r.getVertexPosition(c,Is);let h=W0(r,t,e,n,Ps,Ls,Is,Za);if(h){i&&(Xa.fromBufferAttribute(i,o),qa.fromBufferAttribute(i,l),Ya.fromBufferAttribute(i,c),h.uv=Os.getInterpolation(Za,Ps,Ls,Is,Xa,qa,Ya,new fe)),s&&(Xa.fromBufferAttribute(s,o),qa.fromBufferAttribute(s,l),Ya.fromBufferAttribute(s,c),h.uv1=Os.getInterpolation(Za,Ps,Ls,Is,Xa,qa,Ya,new fe),h.uv2=h.uv1),a&&(vp.fromBufferAttribute(a,o),yp.fromBufferAttribute(a,l),Mp.fromBufferAttribute(a,c),h.normal=Os.getInterpolation(Za,Ps,Ls,Is,vp,yp,Mp,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new H,materialIndex:0};Os.getNormal(Ps,Ls,Is,u.normal),h.face=u}return h}var zo=class r extends wn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(h,3)),this.setAttribute("uv",new En(u,2));function _(g,m,p,y,x,E,A,T,b,I,v){let S=E/b,O=A/I,N=E/2,K=A/2,P=T/2,U=b+1,W=I+1,X=0,q=0,Y=new H;for(let R=0;R<W;R++){let $=R*O-K;for(let ct=0;ct<U;ct++){let Z=ct*S-N;Y[g]=Z*y,Y[m]=$*x,Y[p]=P,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[p]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ct/b),u.push(1-R/I),X+=1}}for(let R=0;R<I;R++)for(let $=0;$<b;$++){let ct=f+$+U*R,Z=f+$+U*(R+1),J=f+($+1)+U*(R+1),rt=f+($+1)+U*R;l.push(ct,Z,rt),l.push(Z,J,rt),q+=6}o.addGroup(d,q,v),d+=q,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function vn(r){let t={};for(let e=0;e<r.length;e++){let n=Xs(r[e]);for(let i in n)t[i]=n[i]}return t}function X0(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function um(r){return r.getRenderTarget()===null?r.outputColorSpace:ue.workingColorSpace}var q0={clone:Xs,merge:vn},Y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends dr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y0,this.fragmentShader=Z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=X0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},yl=class extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mn=class extends yl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ah*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zh*2*Math.atan(Math.tan(ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ah*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ds=-90,Us=1,Gh=class extends Gn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Mn(Ds,Us,t,e);i.layers=this.layers,this.add(i);let s=new Mn(Ds,Us,t,e);s.layers=this.layers,this.add(s);let a=new Mn(Ds,Us,t,e);a.layers=this.layers,this.add(a);let o=new Mn(Ds,Us,t,e);o.layers=this.layers,this.add(o);let l=new Mn(Ds,Us,t,e);l.layers=this.layers,this.add(l);let c=new Mn(Ds,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ml=class extends hi{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Hs,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wh=class extends Hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Uo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Yr?Je:ti),this.texture=new Ml(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zo(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:ar});s.uniforms.tEquirect.value=e;let a=new Sn(i,s),o=e.minFilter;return e.minFilter===Oo&&(e.minFilter=jn),new Gh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},wh=new H,J0=new H,$0=new ee,Fi=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=wh.subVectors(n,e).cross(J0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(wh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$0.getNormalMatrix(t),i=this.coplanarPoint(wh).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vr=new Jr,Ka=new H,Sl=class{constructor(t=new Fi,e=new Fi,n=new Fi,i=new Fi,s=new Fi,a=new Fi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zi){let n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],y=i[13],x=i[14],E=i[15];if(n[0].setComponents(l-s,f-c,m-d,E-p).normalize(),n[1].setComponents(l+s,f+c,m+d,E+p).normalize(),n[2].setComponents(l+a,f+h,m+_,E+y).normalize(),n[3].setComponents(l-a,f-h,m-_,E-y).normalize(),n[4].setComponents(l-o,f-u,m-g,E-x).normalize(),e===zi)n[5].setComponents(l+o,f+u,m+g,E+x).normalize();else if(e===hl)n[5].setComponents(o,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(t){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ka.x=i.normal.x>0?t.max.x:t.min.x,Ka.y=i.normal.y>0?t.max.y:t.min.y,Ka.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fm(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function K0(r,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,f=c.usage,d=u.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=r.SHORT;else if(u instanceof Uint32Array)g=r.UNSIGNED_INT;else if(u instanceof Int32Array)g=r.INT;else if(u instanceof Int8Array)g=r.BYTE;else if(u instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,h,u){let f=h.array,d=h._updateRange,_=h.updateRanges;if(r.bindBuffer(u,c),d.count===-1&&_.length===0&&r.bufferSubData(u,0,f),_.length!==0){for(let g=0,m=_.length;g<m;g++){let p=_[g];e?r.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):r.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var pr=class r extends wn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let x=0;x<c;x++){let E=x*u-s;_.push(E,-y,0),g.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let x=y+c*p,E=y+c*(p+1),A=y+1+c*(p+1),T=y+1+c*p;d.push(x,E,T),d.push(E,A,T)}this.setIndex(d),this.setAttribute("position",new En(_,3)),this.setAttribute("normal",new En(g,3)),this.setAttribute("uv",new En(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j0=`#ifdef USE_ALPHAHASH
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
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
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
#endif`,sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ox=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ux=`#ifdef USE_IRIDESCENCE
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
#endif`,fx=`#ifdef USE_BUMPMAP
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
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mx=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Sx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rx=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Px=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
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
}`,kx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wx=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Xx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$x=`PhysicalMaterial material;
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
#endif`,Kx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Qx=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,jx=`#if defined( RE_IndirectDiffuse )
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
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ev=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lv=`#if defined( USE_POINTS_UV )
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
#endif`,cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yv=`#ifdef USE_NORMALMAP
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
#endif`,Mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Av=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ov=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bv=`#ifdef USE_SKINNING
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
#endif`,zv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kv=`#ifdef USE_SKINNING
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
#endif`,Vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wv=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xv=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qv=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qv=`uniform sampler2D t2D;
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
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`#include <common>
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
}`,ry=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,sy=`#define DISTANCE
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
}`,oy=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uy=`#include <common>
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
}`,fy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,dy=`#define LAMBERT
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
}`,py=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,my=`#define MATCAP
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
}`,gy=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_y=`#define NORMAL
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
}`,xy=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vy=`#define PHONG
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
}`,yy=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,My=`#define STANDARD
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
}`,Sy=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,by=`#define TOON
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
}`,Ey=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wy=`uniform float size;
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
}`,Ty=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ay=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Cy=`uniform vec3 color;
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
}`,Ry=`uniform float rotation;
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
}`,Py=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$t={alphahash_fragment:Q0,alphahash_pars_fragment:j0,alphamap_fragment:tx,alphamap_pars_fragment:ex,alphatest_fragment:nx,alphatest_pars_fragment:ix,aomap_fragment:rx,aomap_pars_fragment:sx,batching_pars_vertex:ox,batching_vertex:ax,begin_vertex:lx,beginnormal_vertex:cx,bsdfs:hx,iridescence_fragment:ux,bumpmap_pars_fragment:fx,clipping_planes_fragment:dx,clipping_planes_pars_fragment:px,clipping_planes_pars_vertex:mx,clipping_planes_vertex:gx,color_fragment:_x,color_pars_fragment:xx,color_pars_vertex:vx,color_vertex:yx,common:Mx,cube_uv_reflection_fragment:Sx,defaultnormal_vertex:bx,displacementmap_pars_vertex:Ex,displacementmap_vertex:wx,emissivemap_fragment:Tx,emissivemap_pars_fragment:Ax,colorspace_fragment:Cx,colorspace_pars_fragment:Rx,envmap_fragment:Px,envmap_common_pars_fragment:Lx,envmap_pars_fragment:Ix,envmap_pars_vertex:Dx,envmap_physical_pars_fragment:Xx,envmap_vertex:Ux,fog_vertex:Nx,fog_pars_vertex:Ox,fog_fragment:Fx,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_fragment:kx,lightmap_pars_fragment:Vx,lights_lambert_fragment:Hx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Wx,lights_toon_fragment:qx,lights_toon_pars_fragment:Yx,lights_phong_fragment:Zx,lights_phong_pars_fragment:Jx,lights_physical_fragment:$x,lights_physical_pars_fragment:Kx,lights_fragment_begin:Qx,lights_fragment_maps:jx,lights_fragment_end:tv,logdepthbuf_fragment:ev,logdepthbuf_pars_fragment:nv,logdepthbuf_pars_vertex:iv,logdepthbuf_vertex:rv,map_fragment:sv,map_pars_fragment:ov,map_particle_fragment:av,map_particle_pars_fragment:lv,metalnessmap_fragment:cv,metalnessmap_pars_fragment:hv,morphcolor_vertex:uv,morphnormal_vertex:fv,morphtarget_pars_vertex:dv,morphtarget_vertex:pv,normal_fragment_begin:mv,normal_fragment_maps:gv,normal_pars_fragment:_v,normal_pars_vertex:xv,normal_vertex:vv,normalmap_pars_fragment:yv,clearcoat_normal_fragment_begin:Mv,clearcoat_normal_fragment_maps:Sv,clearcoat_pars_fragment:bv,iridescence_pars_fragment:Ev,opaque_fragment:wv,packing:Tv,premultiplied_alpha_fragment:Av,project_vertex:Cv,dithering_fragment:Rv,dithering_pars_fragment:Pv,roughnessmap_fragment:Lv,roughnessmap_pars_fragment:Iv,shadowmap_pars_fragment:Dv,shadowmap_pars_vertex:Uv,shadowmap_vertex:Nv,shadowmask_pars_fragment:Ov,skinbase_vertex:Fv,skinning_pars_vertex:Bv,skinning_vertex:zv,skinnormal_vertex:kv,specularmap_fragment:Vv,specularmap_pars_fragment:Hv,tonemapping_fragment:Gv,tonemapping_pars_fragment:Wv,transmission_fragment:Xv,transmission_pars_fragment:qv,uv_pars_fragment:Yv,uv_pars_vertex:Zv,uv_vertex:Jv,worldpos_vertex:$v,background_vert:Kv,background_frag:Qv,backgroundCube_vert:jv,backgroundCube_frag:ty,cube_vert:ey,cube_frag:ny,depth_vert:iy,depth_frag:ry,distanceRGBA_vert:sy,distanceRGBA_frag:oy,equirect_vert:ay,equirect_frag:ly,linedashed_vert:cy,linedashed_frag:hy,meshbasic_vert:uy,meshbasic_frag:fy,meshlambert_vert:dy,meshlambert_frag:py,meshmatcap_vert:my,meshmatcap_frag:gy,meshnormal_vert:_y,meshnormal_frag:xy,meshphong_vert:vy,meshphong_frag:yy,meshphysical_vert:My,meshphysical_frag:Sy,meshtoon_vert:by,meshtoon_frag:Ey,points_vert:wy,points_frag:Ty,shadow_vert:Ay,shadow_frag:Cy,sprite_vert:Ry,sprite_frag:Py},ut={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},yi={basic:{uniforms:vn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:vn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:vn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:vn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:vn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:vn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:vn([ut.points,ut.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:vn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:vn([ut.common,ut.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:vn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:vn([ut.sprite,ut.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:vn([ut.common,ut.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:vn([ut.lights,ut.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};yi.physical={uniforms:vn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Qa={r:0,b:0,g:0};function Ly(r,t,e,n,i,s,a){let o=new Xt(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function _(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),y=!0);let E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Cl)?(h===void 0&&(h=new Sn(new zo(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Xs(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ue.getTransfer(x.colorSpace)!==ve,(u!==x||f!==x.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Sn(new pr(2,2),new ln({name:"BackgroundMaterial",uniforms:Xs(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ue.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Qa,um(r)),n.buffers.color.setClear(Qa.r,Qa.g,Qa.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function Iy(r,t,e,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null),c=l,h=!1;function u(P,U,W,X,q){let Y=!1;if(a){let R=g(X,W,U);c!==R&&(c=R,d(c.object)),Y=p(P,X,W,q),Y&&y(P,X,W,q)}else{let R=U.wireframe===!0;(c.geometry!==X.id||c.program!==W.id||c.wireframe!==R)&&(c.geometry=X.id,c.program=W.id,c.wireframe=R,Y=!0)}q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,I(P,U,W,X),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function g(P,U,W){let X=W.wireframe===!0,q=o[P.id];q===void 0&&(q={},o[P.id]=q);let Y=q[U.id];Y===void 0&&(Y={},q[U.id]=Y);let R=Y[X];return R===void 0&&(R=m(f()),Y[X]=R),R}function m(P){let U=[],W=[],X=[];for(let q=0;q<i;q++)U[q]=0,W[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:X,object:P,attributes:{},index:null}}function p(P,U,W,X){let q=c.attributes,Y=U.attributes,R=0,$=W.getAttributes();for(let ct in $)if($[ct].location>=0){let J=q[ct],rt=Y[ct];if(rt===void 0&&(ct==="instanceMatrix"&&P.instanceMatrix&&(rt=P.instanceMatrix),ct==="instanceColor"&&P.instanceColor&&(rt=P.instanceColor)),J===void 0||J.attribute!==rt||rt&&J.data!==rt.data)return!0;R++}return c.attributesNum!==R||c.index!==X}function y(P,U,W,X){let q={},Y=U.attributes,R=0,$=W.getAttributes();for(let ct in $)if($[ct].location>=0){let J=Y[ct];J===void 0&&(ct==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),ct==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));let rt={};rt.attribute=J,J&&J.data&&(rt.data=J.data),q[ct]=rt,R++}c.attributes=q,c.attributesNum=R,c.index=X}function x(){let P=c.newAttributes;for(let U=0,W=P.length;U<W;U++)P[U]=0}function E(P){A(P,0)}function A(P,U){let W=c.newAttributes,X=c.enabledAttributes,q=c.attributeDivisors;W[P]=1,X[P]===0&&(r.enableVertexAttribArray(P),X[P]=1),q[P]!==U&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),q[P]=U)}function T(){let P=c.newAttributes,U=c.enabledAttributes;for(let W=0,X=U.length;W<X;W++)U[W]!==P[W]&&(r.disableVertexAttribArray(W),U[W]=0)}function b(P,U,W,X,q,Y,R){R===!0?r.vertexAttribIPointer(P,U,W,q,Y):r.vertexAttribPointer(P,U,W,X,q,Y)}function I(P,U,W,X){if(n.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let q=X.attributes,Y=W.getAttributes(),R=U.defaultAttributeValues;for(let $ in Y){let ct=Y[$];if(ct.location>=0){let Z=q[$];if(Z===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){let J=Z.normalized,rt=Z.itemSize,_t=e.get(Z);if(_t===void 0)continue;let dt=_t.buffer,Rt=_t.type,Pt=_t.bytesPerElement,Dt=n.isWebGL2===!0&&(Rt===r.INT||Rt===r.UNSIGNED_INT||Z.gpuType===tm);if(Z.isInterleavedBufferAttribute){let Vt=Z.data,z=Vt.stride,Ht=Z.offset;if(Vt.isInstancedInterleavedBuffer){for(let mt=0;mt<ct.locationSize;mt++)A(ct.location+mt,Vt.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let mt=0;mt<ct.locationSize;mt++)E(ct.location+mt);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let mt=0;mt<ct.locationSize;mt++)b(ct.location+mt,rt/ct.locationSize,Rt,J,z*Pt,(Ht+rt/ct.locationSize*mt)*Pt,Dt)}else{if(Z.isInstancedBufferAttribute){for(let Vt=0;Vt<ct.locationSize;Vt++)A(ct.location+Vt,Z.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Vt=0;Vt<ct.locationSize;Vt++)E(ct.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let Vt=0;Vt<ct.locationSize;Vt++)b(ct.location+Vt,rt/ct.locationSize,Rt,J,rt*Pt,rt/ct.locationSize*Vt*Pt,Dt)}}else if(R!==void 0){let J=R[$];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(ct.location,J);break;case 3:r.vertexAttrib3fv(ct.location,J);break;case 4:r.vertexAttrib4fv(ct.location,J);break;default:r.vertexAttrib1fv(ct.location,J)}}}}T()}function v(){N();for(let P in o){let U=o[P];for(let W in U){let X=U[W];for(let q in X)_(X[q].object),delete X[q];delete U[W]}delete o[P]}}function S(P){if(o[P.id]===void 0)return;let U=o[P.id];for(let W in U){let X=U[W];for(let q in X)_(X[q].object),delete X[q];delete U[W]}delete o[P.id]}function O(P){for(let U in o){let W=o[U];if(W[P.id]===void 0)continue;let X=W[P.id];for(let q in X)_(X[q].object),delete X[q];delete W[P.id]}}function N(){K(),h=!0,c!==l&&(c=l,d(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:N,resetDefaultState:K,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:E,disableUnusedAttributes:T}}function Dy(r,t,e,n){let i=n.isWebGL2,s;function a(h){s=h}function o(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,f){if(f===0)return;let d,_;if(i)d=r,_="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,h,u,f),e.update(u,s,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<f;_++)this.render(h[_],u[_]);else{d.multiDrawArraysWEBGL(s,h,0,u,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Uy(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=a||t.has("OES_texture_float"),A=x&&E,T=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:T}}function Ny(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Fi,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{let y=s?0:n,x=y*4,E=p.clippingState||null;l.value=E,E=h(_,f,x,d);for(let A=0;A!==x;++A)E[A]=e[A];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=d+g*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=d;x!==g;++x,E+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Oy(r){let t=new WeakMap;function e(a,o){return o===Uh?a.mapping=Hs:o===Nh&&(a.mapping=Gs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Uh||o===Nh)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Wh(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Xh=class extends yl{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fs=4,Sp=[.125,.215,.35,.446,.526,.582],Wr=20,Th=new Xh,bp=new Xt,Ah=null,Ch=0,Rh=0,Hr=(1+Math.sqrt(5))/2,Ns=1/Hr,Ep=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Hr,Ns),new H(0,Hr,-Ns),new H(Ns,0,Hr),new H(-Ns,0,Hr),new H(Hr,Ns,0),new H(-Hr,Ns,0)],bl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ah=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ah,Ch,Rh),t.scissorTest=!1,ja(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hs||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ah=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Fo,format:ci,colorSpace:Vi,depthBuffer:!1},i=wp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wp(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fy(s)),this._blurMaterial=By(s,t,e)}return i}_compileMaterial(t){let e=new Sn(this._lodPlanes[0],t);this._renderer.compile(e,Th)}_sceneToCubeUV(t,e,n,i){let o=new Mn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(bp),h.toneMapping=lr,h.autoClear=!1;let d=new _l({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),_=new Sn(new zo,d),g=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(bp),g=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let x=this._cubeSize;ja(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Hs||t.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tp());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Sn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;ja(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Th)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ep[(i-1)%Ep.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Sn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Wr-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Wr;m>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wr}`);let p=[],y=0;for(let b=0;b<Wr;++b){let I=b/g,v=Math.exp(-I*I/2);p.push(v),b===0?y+=v:b<m&&(y+=2*v)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;let E=this._sizeLods[i],A=3*E*(i>x-Fs?i-x+Fs:0),T=4*(this._cubeSize-E);ja(e,A,T,3*E,2*E),l.setRenderTarget(e),l.render(u,Th)}};function Fy(r){let t=[],e=[],n=[],i=r,s=r-Fs+1+Sp.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Fs?l=Sp[a-r+Fs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*d),x=new Float32Array(m*_*d),E=new Float32Array(p*_*d);for(let T=0;T<d;T++){let b=T%3*2/3-1,I=T>2?0:-1,v=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];y.set(v,g*_*T),x.set(f,m*_*T);let S=[T,T,T,T,T,T];E.set(S,p*_*T)}let A=new wn;A.setAttribute("position",new bn(y,g)),A.setAttribute("uv",new bn(x,m)),A.setAttribute("faceIndex",new bn(E,p)),t.push(A),i>Fs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wp(r,t,e){let n=new Hi(r,t,e);return n.texture.mapping=Cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ja(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function By(r,t,e){let n=new Float32Array(Wr),i=new H(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xu(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Tp(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Ap(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function xu(){return`

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
	`}function zy(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Uh||l===Nh,h=l===Hs||l===Gs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new bl(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new bl(r));let f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ky(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vy(r,t,e,n){let i={},s=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}f.removeEventListener("dispose",a),delete i[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let _ in f)t.update(f[_],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let _ in d){let g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],r.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,_=u.attributes.position,g=0;if(d!==null){let y=d.array;g=d.version;for(let x=0,E=y.length;x<E;x+=3){let A=y[x+0],T=y[x+1],b=y[x+2];f.push(A,T,T,b,b,A)}}else if(_!==void 0){let y=_.array;g=_.version;for(let x=0,E=y.length/3-1;x<E;x+=3){let A=x+0,T=x+1,b=x+2;f.push(A,T,T,b,b,A)}}else return;let m=new(cm(f)?vl:xl)(f,1);m.version=g;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Hy(r,t,e,n){let i=n.isWebGL2,s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,_){r.drawElements(s,_,o,d*l),e.update(_,s,1)}function u(d,_,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,_,o,d*l,g),e.update(_,s,g)}function f(d,_,g){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(d[p]/l,_[p]);else{m.multiDrawElementsWEBGL(s,_,0,o,d,0,g);let p=0;for(let y=0;y<g;y++)p+=_[y];e.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Gy(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Wy(r,t){return r[0]-t[0]}function Xy(r,t){return Math.abs(t[1])-Math.abs(r[1])}function qy(r,t,e){let n={},i=new Float32Array(8),s=new WeakMap,a=new $e,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=d!==void 0?d.length:0,g=s.get(h);if(g===void 0||g.count!==_){let P=function(){N.dispose(),s.delete(h),h.removeEventListener("dispose",P)};g!==void 0&&g.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],b=h.morphAttributes.color||[],I=0;y===!0&&(I=1),x===!0&&(I=2),E===!0&&(I=3);let v=h.attributes.position.count*I,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let O=new Float32Array(v*S*4*_),N=new pl(O,v,S,_);N.type=or,N.needsUpdate=!0;let K=I*4;for(let U=0;U<_;U++){let W=A[U],X=T[U],q=b[U],Y=v*S*4*U;for(let R=0;R<W.count;R++){let $=R*K;y===!0&&(a.fromBufferAttribute(W,R),O[Y+$+0]=a.x,O[Y+$+1]=a.y,O[Y+$+2]=a.z,O[Y+$+3]=0),x===!0&&(a.fromBufferAttribute(X,R),O[Y+$+4]=a.x,O[Y+$+5]=a.y,O[Y+$+6]=a.z,O[Y+$+7]=0),E===!0&&(a.fromBufferAttribute(q,R),O[Y+$+8]=a.x,O[Y+$+9]=a.y,O[Y+$+10]=a.z,O[Y+$+11]=q.itemSize===4?a.w:1)}}g={count:_,texture:N,size:new fe(v,S)},s.set(h,g),h.addEventListener("dispose",P)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{let d=f===void 0?0:f.length,_=n[h.id];if(_===void 0||_.length!==d){_=[];for(let x=0;x<d;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<d;x++){let E=_[x];E[0]=x,E[1]=f[x]}_.sort(Xy);for(let x=0;x<8;x++)x<d&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Wy);let g=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let E=o[x],A=E[0],T=E[1];A!==Number.MAX_SAFE_INTEGER&&T?(g&&h.getAttribute("morphTarget"+x)!==g[A]&&h.setAttribute("morphTarget"+x,g[A]),m&&h.getAttribute("morphNormal"+x)!==m[A]&&h.setAttribute("morphNormal"+x,m[A]),i[x]=T,p+=T):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Yy(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var El=class extends hi{constructor(t,e,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:qr,h!==qr&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qr&&(n=sr),n===void 0&&h===Ws&&(n=Xr),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},dm=new hi,pm=new El(1,1);pm.compareFunction=lm;var mm=new pl,gm=new Hh,_m=new Ml,Cp=[],Rp=[],Pp=new Float32Array(16),Lp=new Float32Array(9),Ip=new Float32Array(4);function Zs(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Cp[i];if(s===void 0&&(s=new Float32Array(i),Cp[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ze(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ke(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Pl(r,t){let e=Rp[t];e===void 0&&(e=new Int32Array(t),Rp[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Zy(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Jy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2fv(this.addr,t),ke(e,t)}}function $y(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;r.uniform3fv(this.addr,t),ke(e,t)}}function Ky(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4fv(this.addr,t),ke(e,t)}}function Qy(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Ip.set(n),r.uniformMatrix2fv(this.addr,!1,Ip),ke(e,n)}}function jy(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Lp.set(n),r.uniformMatrix3fv(this.addr,!1,Lp),ke(e,n)}}function tM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Pp.set(n),r.uniformMatrix4fv(this.addr,!1,Pp),ke(e,n)}}function eM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function nM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2iv(this.addr,t),ke(e,t)}}function iM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3iv(this.addr,t),ke(e,t)}}function rM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4iv(this.addr,t),ke(e,t)}}function sM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function oM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2uiv(this.addr,t),ke(e,t)}}function aM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3uiv(this.addr,t),ke(e,t)}}function lM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4uiv(this.addr,t),ke(e,t)}}function cM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?pm:dm;e.setTexture2D(t||s,i)}function hM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gm,i)}function uM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_m,i)}function fM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mm,i)}function dM(r){switch(r){case 5126:return Zy;case 35664:return Jy;case 35665:return $y;case 35666:return Ky;case 35674:return Qy;case 35675:return jy;case 35676:return tM;case 5124:case 35670:return eM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return rM;case 5125:return sM;case 36294:return oM;case 36295:return aM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return fM}}function pM(r,t){r.uniform1fv(this.addr,t)}function mM(r,t){let e=Zs(t,this.size,2);r.uniform2fv(this.addr,e)}function gM(r,t){let e=Zs(t,this.size,3);r.uniform3fv(this.addr,e)}function _M(r,t){let e=Zs(t,this.size,4);r.uniform4fv(this.addr,e)}function xM(r,t){let e=Zs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function vM(r,t){let e=Zs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function yM(r,t){let e=Zs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function MM(r,t){r.uniform1iv(this.addr,t)}function SM(r,t){r.uniform2iv(this.addr,t)}function bM(r,t){r.uniform3iv(this.addr,t)}function EM(r,t){r.uniform4iv(this.addr,t)}function wM(r,t){r.uniform1uiv(this.addr,t)}function TM(r,t){r.uniform2uiv(this.addr,t)}function AM(r,t){r.uniform3uiv(this.addr,t)}function CM(r,t){r.uniform4uiv(this.addr,t)}function RM(r,t,e){let n=this.cache,i=t.length,s=Pl(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),ke(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||dm,s[a])}function PM(r,t,e){let n=this.cache,i=t.length,s=Pl(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),ke(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||gm,s[a])}function LM(r,t,e){let n=this.cache,i=t.length,s=Pl(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),ke(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||_m,s[a])}function IM(r,t,e){let n=this.cache,i=t.length,s=Pl(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),ke(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||mm,s[a])}function DM(r){switch(r){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return _M;case 35674:return xM;case 35675:return vM;case 35676:return yM;case 5124:case 35670:return MM;case 35667:case 35671:return SM;case 35668:case 35672:return bM;case 35669:case 35673:return EM;case 5125:return wM;case 36294:return TM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return IM}}var qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dM(e.type)}},Yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=DM(e.type)}},Zh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},Ph=/(\w+)(\])?(\[|\.)?/g;function Dp(r,t){r.seq.push(t),r.map[t.id]=t}function UM(r,t,e){let n=r.name,i=n.length;for(Ph.lastIndex=0;;){let s=Ph.exec(n),a=Ph.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Dp(e,c===void 0?new qh(o,r,t):new Yh(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Zh(o),Dp(e,u)),e=u}}}var Vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);UM(s,a,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Up(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var NM=37297,OM=0;function FM(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function BM(r){let t=ue.getPrimaries(ue.workingColorSpace),e=ue.getPrimaries(r),n;switch(t===e?n="":t===cl&&e===ll?n="LinearDisplayP3ToLinearSRGB":t===ll&&e===cl&&(n="LinearSRGBToLinearDisplayP3"),r){case Vi:case Rl:return[n,"LinearTransferOETF"];case Je:case _u:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Np(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+FM(r.getShaderSource(t),a)}else return i}function zM(r,t){let e=BM(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function kM(r,t){let e;switch(t){case i0:e="Linear";break;case r0:e="Reinhard";break;case s0:e="OptimizedCineon";break;case o0:e="ACESFilmic";break;case l0:e="AgX";break;case a0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function VM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function HM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Bs).join(`
`)}function GM(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function WM(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Bs(r){return r!==""}function Op(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fp(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var XM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(r){return r.replace(XM,YM)}var qM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function YM(r,t){let e=$t[t];if(e===void 0){let n=qM.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jh(e)}var ZM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(r){return r.replace(ZM,JM)}function JM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zp(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $M(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Kp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===L_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function KM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hs:case Gs:t="ENVMAP_TYPE_CUBE";break;case Cl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function QM(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Gs&&(t="ENVMAP_MODE_REFRACTION"),t}function jM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qp:t="ENVMAP_BLENDING_MULTIPLY";break;case e0:t="ENVMAP_BLENDING_MIX";break;case n0:t="ENVMAP_BLENDING_ADD";break}return t}function tS(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function eS(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=$M(e),c=KM(e),h=QM(e),u=jM(e),f=tS(e),d=e.isWebGL2?"":VM(e),_=HM(e),g=GM(s),m=i.createProgram(),p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bs).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bs).join(`
`),y.length>0&&(y+=`
`)):(p=[zp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),y=[d,zp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==lr?"#define TONE_MAPPING":"",e.toneMapping!==lr?$t.tonemapping_pars_fragment:"",e.toneMapping!==lr?kM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,zM("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),a=Jh(a),a=Op(a,e),a=Fp(a,e),o=Jh(o),o=Op(o,e),o=Fp(o,e),a=Bp(a),o=Bp(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let E=x+p+a,A=x+y+o,T=Up(i,i.VERTEX_SHADER,E),b=Up(i,i.FRAGMENT_SHADER,A);i.attachShader(m,T),i.attachShader(m,b),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(N){if(r.debug.checkShaderErrors){let K=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(T).trim(),U=i.getShaderInfoLog(b).trim(),W=!0,X=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,T,b);else{let q=Np(i,T,"vertex"),Y=Np(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+q+`
`+Y)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(P===""||U==="")&&(X=!1);X&&(N.diagnostics={runnable:W,programLog:K,vertexShader:{log:P,prefix:p},fragmentShader:{log:U,prefix:y}})}i.deleteShader(T),i.deleteShader(b),v=new Vs(i,m),S=WM(i,m)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(m,NM)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=OM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=b,this}var nS=0,$h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kh(t),e.set(t,n)),n}},Kh=class{constructor(t){this.id=nS++,this.code=t,this.usedTimes=0}};function iS(r,t,e,n,i,s,a){let o=new gl,l=new $h,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===0?"uv":`uv${v}`}function m(v,S,O,N,K){let P=N.fog,U=K.geometry,W=v.isMeshStandardMaterial?N.environment:null,X=(v.isMeshStandardMaterial?e:t).get(v.envMap||W),q=X&&X.mapping===Cl?X.image.height:null,Y=_[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let R=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,$=R!==void 0?R.length:0,ct=0;U.morphAttributes.position!==void 0&&(ct=1),U.morphAttributes.normal!==void 0&&(ct=2),U.morphAttributes.color!==void 0&&(ct=3);let Z,J,rt,_t;if(Y){let vt=yi[Y];Z=vt.vertexShader,J=vt.fragmentShader}else Z=v.vertexShader,J=v.fragmentShader,l.update(v),rt=l.getVertexShaderID(v),_t=l.getFragmentShaderID(v);let dt=r.getRenderTarget(),Rt=K.isInstancedMesh===!0,Pt=K.isBatchedMesh===!0,Dt=!!v.map,Vt=!!v.matcap,z=!!X,Ht=!!v.aoMap,mt=!!v.lightMap,Lt=!!v.bumpMap,gt=!!v.normalMap,V=!!v.displacementMap,Ot=!!v.emissiveMap,C=!!v.metalnessMap,M=!!v.roughnessMap,F=v.anisotropy>0,tt=v.clearcoat>0,j=v.iridescence>0,et=v.sheen>0,pt=v.transmission>0,ht=F&&!!v.anisotropyMap,lt=tt&&!!v.clearcoatMap,wt=tt&&!!v.clearcoatNormalMap,kt=tt&&!!v.clearcoatRoughnessMap,Q=j&&!!v.iridescenceMap,se=j&&!!v.iridescenceThicknessMap,At=et&&!!v.sheenColorMap,Gt=et&&!!v.sheenRoughnessMap,Et=!!v.specularMap,xt=!!v.specularColorMap,Wt=!!v.specularIntensityMap,Kt=pt&&!!v.transmissionMap,ae=pt&&!!v.thicknessMap,ft=!!v.gradientMap,it=!!v.alphaMap,L=v.alphaTest>0,st=!!v.alphaHash,ot=!!v.extensions,Ut=!!U.attributes.uv1,It=!!U.attributes.uv2,ne=!!U.attributes.uv3,oe=lr;return v.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(oe=r.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:Z,fragmentShader:J,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:_t,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Pt,instancing:Rt,instancingColor:Rt&&K.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:dt===null?r.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Vi,map:Dt,matcap:Vt,envMap:z,envMapMode:z&&X.mapping,envMapCubeUVHeight:q,aoMap:Ht,lightMap:mt,bumpMap:Lt,normalMap:gt,displacementMap:f&&V,emissiveMap:Ot,normalMapObjectSpace:gt&&v.normalMapType===M0,normalMapTangentSpace:gt&&v.normalMapType===y0,metalnessMap:C,roughnessMap:M,anisotropy:F,anisotropyMap:ht,clearcoat:tt,clearcoatMap:lt,clearcoatNormalMap:wt,clearcoatRoughnessMap:kt,iridescence:j,iridescenceMap:Q,iridescenceThicknessMap:se,sheen:et,sheenColorMap:At,sheenRoughnessMap:Gt,specularMap:Et,specularColorMap:xt,specularIntensityMap:Wt,transmission:pt,transmissionMap:Kt,thicknessMap:ae,gradientMap:ft,opaque:v.transparent===!1&&v.blending===zs,alphaMap:it,alphaTest:L,alphaHash:st,combine:v.combine,mapUv:Dt&&g(v.map.channel),aoMapUv:Ht&&g(v.aoMap.channel),lightMapUv:mt&&g(v.lightMap.channel),bumpMapUv:Lt&&g(v.bumpMap.channel),normalMapUv:gt&&g(v.normalMap.channel),displacementMapUv:V&&g(v.displacementMap.channel),emissiveMapUv:Ot&&g(v.emissiveMap.channel),metalnessMapUv:C&&g(v.metalnessMap.channel),roughnessMapUv:M&&g(v.roughnessMap.channel),anisotropyMapUv:ht&&g(v.anisotropyMap.channel),clearcoatMapUv:lt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:wt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:At&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&g(v.sheenRoughnessMap.channel),specularMapUv:Et&&g(v.specularMap.channel),specularColorMapUv:xt&&g(v.specularColorMap.channel),specularIntensityMapUv:Wt&&g(v.specularIntensityMap.channel),transmissionMapUv:Kt&&g(v.transmissionMap.channel),thicknessMapUv:ae&&g(v.thicknessMap.channel),alphaMapUv:it&&g(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(gt||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:It,vertexUv3s:ne,pointsUvs:K.isPoints===!0&&!!U.attributes.uv&&(Dt||it),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ct,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Dt&&v.map.isVideoTexture===!0&&ue.getTransfer(v.map.colorSpace)===ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Bi,flipSided:v.side===Dn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ot&&v.extensions.derivatives===!0,extensionFragDepth:ot&&v.extensions.fragDepth===!0,extensionDrawBuffers:ot&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ot&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)S.push(O),S.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(y(S,v),x(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function x(v,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function E(v){let S=_[v.type],O;if(S){let N=yi[S];O=q0.clone(N.uniforms)}else O=v.uniforms;return O}function A(v,S){let O;for(let N=0,K=c.length;N<K;N++){let P=c[N];if(P.cacheKey===S){O=P,++O.usedTimes;break}}return O===void 0&&(O=new eS(r,S,v,s),c.push(O)),O}function T(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),v.destroy()}}function b(v){l.remove(v)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:A,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:I}}function rS(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function sS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function kp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Vp(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,_,g,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,f,d,_,g,m){let p=a(u,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,_,g,m){let p=a(u,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||sS),n.length>1&&n.sort(f||kp),i.length>1&&i.sort(f||kp)}function h(){for(let u=t,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function oS(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new Vp,r.set(n,[a])):i>=s.length?(a=new Vp,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function aS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Xt};break;case"SpotLight":e={position:new H,direction:new H,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new H,halfWidth:new H,halfHeight:new H};break}return r[t.id]=e,e}}}function lS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var cS=0;function hS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function uS(r,t){let e=new aS,n=lS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new H);let s=new H,a=new Xe,o=new Xe;function l(h,u){let f=0,d=0,_=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let g=0,m=0,p=0,y=0,x=0,E=0,A=0,T=0,b=0,I=0,v=0;h.sort(hS);let S=u===!0?Math.PI:1;for(let N=0,K=h.length;N<K;N++){let P=h[N],U=P.color,W=P.intensity,X=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=U.r*W*S,d+=U.g*W*S,_+=U.b*W*S;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],W);v++}else if(P.isDirectionalLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){let R=P.shadow,$=n.get(P);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,i.directionalShadow[g]=$,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=P.shadow.matrix,E++}i.directional[g]=Y,g++}else if(P.isSpotLight){let Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(U).multiplyScalar(W*S),Y.distance=X,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[p]=Y;let R=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,R.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[p]=R.matrix,P.castShadow){let $=n.get(P);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,i.spotShadow[p]=$,i.spotShadowMap[p]=q,T++}p++}else if(P.isRectAreaLight){let Y=e.get(P);Y.color.copy(U).multiplyScalar(W),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=Y,y++}else if(P.isPointLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*S),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let R=P.shadow,$=n.get(P);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,$.shadowCameraNear=R.camera.near,$.shadowCameraFar=R.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=P.shadow.matrix,A++}i.point[m]=Y,m++}else if(P.isHemisphereLight){let Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(W*S),Y.groundColor.copy(P.groundColor).multiplyScalar(W*S),i.hemi[x]=Y,x++}}y>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=_;let O=i.hash;(O.directionalLength!==g||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==y||O.hemiLength!==x||O.numDirectionalShadows!==E||O.numPointShadows!==A||O.numSpotShadows!==T||O.numSpotMaps!==b||O.numLightProbes!==v)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=T+b-I,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=v,O.directionalLength=g,O.pointLength=m,O.spotLength=p,O.rectAreaLength=y,O.hemiLength=x,O.numDirectionalShadows=E,O.numPointShadows=A,O.numSpotShadows=T,O.numSpotMaps=b,O.numLightProbes=v,i.version=cS++)}function c(h,u){let f=0,d=0,_=0,g=0,m=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let E=h[y];if(E.isDirectionalLight){let A=i.directional[f];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),f++}else if(E.isSpotLight){let A=i.spot[_];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),_++}else if(E.isRectAreaLight){let A=i.rectArea[g];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),o.identity(),a.copy(E.matrixWorld),a.premultiply(p),o.extractRotation(a),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Hp(r,t){let e=new uS(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function fS(r,t){let e=new WeakMap;function n(s,a=0){let o=e.get(s),l;return o===void 0?(l=new Hp(r,t),e.set(s,[l])):a>=o.length?(l=new Hp(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var Qh=class extends dr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jh=class extends dr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},dS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pS=`uniform sampler2D shadow_pass;
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
}`;function mS(r,t,e){let n=new Sl,i=new fe,s=new fe,a=new $e,o=new Qh({depthPacking:v0}),l=new jh,c={},h=e.maxTextureSize,u={[hr]:Dn,[Dn]:hr,[Bi]:Bi},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:dS,fragmentShader:pS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let _=new wn;_.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Sn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kp;let p=this.type;this.render=function(T,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=r.getRenderTarget(),S=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ar),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let K=p!==Oi&&this.type===Oi,P=p===Oi&&this.type!==Oi;for(let U=0,W=T.length;U<W;U++){let X=T[U],q=X.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let Y=q.getFrameExtents();if(i.multiply(Y),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,q.mapSize.y=s.y)),q.map===null||K===!0||P===!0){let $=this.type!==Oi?{minFilter:yn,magFilter:yn}:{};q.map!==null&&q.map.dispose(),q.map=new Hi(i.x,i.y,$),q.map.texture.name=X.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();let R=q.getViewportCount();for(let $=0;$<R;$++){let ct=q.getViewport($);a.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),N.viewport(a),q.updateMatrices(X,$),n=q.getFrustum(),E(b,I,q.camera,X,this.type)}q.isPointLightShadow!==!0&&this.type===Oi&&y(q,I),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,S,O)};function y(T,b){let I=t.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hi(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(b,null,I,f,g,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(b,null,I,d,g,null)}function x(T,b,I,v){let S=null,O=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)S=O;else if(S=I.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let N=S.uuid,K=b.uuid,P=c[N];P===void 0&&(P={},c[N]=P);let U=P[K];U===void 0&&(U=S.clone(),P[K]=U,b.addEventListener("dispose",A)),S=U}if(S.visible=b.visible,S.wireframe=b.wireframe,v===Oi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:u[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=r.properties.get(S);N.light=I}return S}function E(T,b,I,v,S){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Oi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let K=t.update(T),P=T.material;if(Array.isArray(P)){let U=K.groups;for(let W=0,X=U.length;W<X;W++){let q=U[W],Y=P[q.materialIndex];if(Y&&Y.visible){let R=x(T,Y,v,S);T.onBeforeShadow(r,T,b,I,K,R,q),r.renderBufferDirect(I,null,K,R,T,q),T.onAfterShadow(r,T,b,I,K,R,q)}}}else if(P.visible){let U=x(T,P,v,S);T.onBeforeShadow(r,T,b,I,K,U,null),r.renderBufferDirect(I,null,K,U,T,null),T.onAfterShadow(r,T,b,I,K,U,null)}}let N=T.children;for(let K=0,P=N.length;K<P;K++)E(N[K],b,I,v,S)}function A(T){T.target.removeEventListener("dispose",A);for(let I in c){let v=c[I],S=T.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}function gS(r,t,e){let n=e.isWebGL2;function i(){let L=!1,st=new $e,ot=null,Ut=new $e(0,0,0,0);return{setMask:function(It){ot!==It&&!L&&(r.colorMask(It,It,It,It),ot=It)},setLocked:function(It){L=It},setClear:function(It,ne,oe,bt,vt){vt===!0&&(It*=bt,ne*=bt,oe*=bt),st.set(It,ne,oe,bt),Ut.equals(st)===!1&&(r.clearColor(It,ne,oe,bt),Ut.copy(st))},reset:function(){L=!1,ot=null,Ut.set(-1,0,0,0)}}}function s(){let L=!1,st=null,ot=null,Ut=null;return{setTest:function(It){It?Pt(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(It){st!==It&&!L&&(r.depthMask(It),st=It)},setFunc:function(It){if(ot!==It){switch(It){case Z_:r.depthFunc(r.NEVER);break;case J_:r.depthFunc(r.ALWAYS);break;case $_:r.depthFunc(r.LESS);break;case rl:r.depthFunc(r.LEQUAL);break;case K_:r.depthFunc(r.EQUAL);break;case Q_:r.depthFunc(r.GEQUAL);break;case j_:r.depthFunc(r.GREATER);break;case t0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ot=It}},setLocked:function(It){L=It},setClear:function(It){Ut!==It&&(r.clearDepth(It),Ut=It)},reset:function(){L=!1,st=null,ot=null,Ut=null}}}function a(){let L=!1,st=null,ot=null,Ut=null,It=null,ne=null,oe=null,bt=null,vt=null;return{setTest:function(Ct){L||(Ct?Pt(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(Ct){st!==Ct&&!L&&(r.stencilMask(Ct),st=Ct)},setFunc:function(Ct,nt,Ft){(ot!==Ct||Ut!==nt||It!==Ft)&&(r.stencilFunc(Ct,nt,Ft),ot=Ct,Ut=nt,It=Ft)},setOp:function(Ct,nt,Ft){(ne!==Ct||oe!==nt||bt!==Ft)&&(r.stencilOp(Ct,nt,Ft),ne=Ct,oe=nt,bt=Ft)},setLocked:function(Ct){L=Ct},setClear:function(Ct){vt!==Ct&&(r.clearStencil(Ct),vt=Ct)},reset:function(){L=!1,st=null,ot=null,Ut=null,It=null,ne=null,oe=null,bt=null,vt=null}}}let o=new i,l=new s,c=new a,h=new WeakMap,u=new WeakMap,f={},d={},_=new WeakMap,g=[],m=null,p=!1,y=null,x=null,E=null,A=null,T=null,b=null,I=null,v=new Xt(0,0,0),S=0,O=!1,N=null,K=null,P=null,U=null,W=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Y=0,R=r.getParameter(r.VERSION);R.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(R)[1]),q=Y>=1):R.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),q=Y>=2);let $=null,ct={},Z=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),rt=new $e().fromArray(Z),_t=new $e().fromArray(J);function dt(L,st,ot,Ut){let It=new Uint8Array(4),ne=r.createTexture();r.bindTexture(L,ne),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let oe=0;oe<ot;oe++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(st,0,r.RGBA,1,1,Ut,0,r.RGBA,r.UNSIGNED_BYTE,It):r.texImage2D(st+oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,It);return ne}let Rt={};Rt[r.TEXTURE_2D]=dt(r.TEXTURE_2D,r.TEXTURE_2D,1),Rt[r.TEXTURE_CUBE_MAP]=dt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Rt[r.TEXTURE_2D_ARRAY]=dt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Rt[r.TEXTURE_3D]=dt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pt(r.DEPTH_TEST),l.setFunc(rl),Ot(!1),C(Sd),Pt(r.CULL_FACE),gt(ar);function Pt(L){f[L]!==!0&&(r.enable(L),f[L]=!0)}function Dt(L){f[L]!==!1&&(r.disable(L),f[L]=!1)}function Vt(L,st){return d[L]!==st?(r.bindFramebuffer(L,st),d[L]=st,n&&(L===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=st),L===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=st)),!0):!1}function z(L,st){let ot=g,Ut=!1;if(L)if(ot=_.get(st),ot===void 0&&(ot=[],_.set(st,ot)),L.isWebGLMultipleRenderTargets){let It=L.texture;if(ot.length!==It.length||ot[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,oe=It.length;ne<oe;ne++)ot[ne]=r.COLOR_ATTACHMENT0+ne;ot.length=It.length,Ut=!0}}else ot[0]!==r.COLOR_ATTACHMENT0&&(ot[0]=r.COLOR_ATTACHMENT0,Ut=!0);else ot[0]!==r.BACK&&(ot[0]=r.BACK,Ut=!0);Ut&&(e.isWebGL2?r.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function Ht(L){return m!==L?(r.useProgram(L),m=L,!0):!1}let mt={[Gr]:r.FUNC_ADD,[D_]:r.FUNC_SUBTRACT,[U_]:r.FUNC_REVERSE_SUBTRACT};if(n)mt[wd]=r.MIN,mt[Td]=r.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(mt[wd]=L.MIN_EXT,mt[Td]=L.MAX_EXT)}let Lt={[N_]:r.ZERO,[O_]:r.ONE,[F_]:r.SRC_COLOR,[Ih]:r.SRC_ALPHA,[G_]:r.SRC_ALPHA_SATURATE,[V_]:r.DST_COLOR,[z_]:r.DST_ALPHA,[B_]:r.ONE_MINUS_SRC_COLOR,[Dh]:r.ONE_MINUS_SRC_ALPHA,[H_]:r.ONE_MINUS_DST_COLOR,[k_]:r.ONE_MINUS_DST_ALPHA,[W_]:r.CONSTANT_COLOR,[X_]:r.ONE_MINUS_CONSTANT_COLOR,[q_]:r.CONSTANT_ALPHA,[Y_]:r.ONE_MINUS_CONSTANT_ALPHA};function gt(L,st,ot,Ut,It,ne,oe,bt,vt,Ct){if(L===ar){p===!0&&(Dt(r.BLEND),p=!1);return}if(p===!1&&(Pt(r.BLEND),p=!0),L!==I_){if(L!==y||Ct!==O){if((x!==Gr||T!==Gr)&&(r.blendEquation(r.FUNC_ADD),x=Gr,T=Gr),Ct)switch(L){case zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ki:r.blendFunc(r.ONE,r.ONE);break;case bd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ed:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ki:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case bd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ed:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,A=null,b=null,I=null,v.set(0,0,0),S=0,y=L,O=Ct}return}It=It||st,ne=ne||ot,oe=oe||Ut,(st!==x||It!==T)&&(r.blendEquationSeparate(mt[st],mt[It]),x=st,T=It),(ot!==E||Ut!==A||ne!==b||oe!==I)&&(r.blendFuncSeparate(Lt[ot],Lt[Ut],Lt[ne],Lt[oe]),E=ot,A=Ut,b=ne,I=oe),(bt.equals(v)===!1||vt!==S)&&(r.blendColor(bt.r,bt.g,bt.b,vt),v.copy(bt),S=vt),y=L,O=!1}function V(L,st){L.side===Bi?Dt(r.CULL_FACE):Pt(r.CULL_FACE);let ot=L.side===Dn;st&&(ot=!ot),Ot(ot),L.blending===zs&&L.transparent===!1?gt(ar):gt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);let Ut=L.stencilWrite;c.setTest(Ut),Ut&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pt(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(L){N!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),N=L)}function C(L){L!==R_?(Pt(r.CULL_FACE),L!==K&&(L===Sd?r.cullFace(r.BACK):L===P_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),K=L}function M(L){L!==P&&(q&&r.lineWidth(L),P=L)}function F(L,st,ot){L?(Pt(r.POLYGON_OFFSET_FILL),(U!==st||W!==ot)&&(r.polygonOffset(st,ot),U=st,W=ot)):Dt(r.POLYGON_OFFSET_FILL)}function tt(L){L?Pt(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function j(L){L===void 0&&(L=r.TEXTURE0+X-1),$!==L&&(r.activeTexture(L),$=L)}function et(L,st,ot){ot===void 0&&($===null?ot=r.TEXTURE0+X-1:ot=$);let Ut=ct[ot];Ut===void 0&&(Ut={type:void 0,texture:void 0},ct[ot]=Ut),(Ut.type!==L||Ut.texture!==st)&&($!==ot&&(r.activeTexture(ot),$=ot),r.bindTexture(L,st||Rt[L]),Ut.type=L,Ut.texture=st)}function pt(){let L=ct[$];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ht(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(L){rt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),rt.copy(L))}function Kt(L){_t.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),_t.copy(L))}function ae(L,st){let ot=u.get(st);ot===void 0&&(ot=new WeakMap,u.set(st,ot));let Ut=ot.get(L);Ut===void 0&&(Ut=r.getUniformBlockIndex(st,L.name),ot.set(L,Ut))}function ft(L,st){let Ut=u.get(st).get(L);h.get(st)!==Ut&&(r.uniformBlockBinding(st,Ut,L.__bindingPointIndex),h.set(st,Ut))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},$=null,ct={},d={},_=new WeakMap,g=[],m=null,p=!1,y=null,x=null,E=null,A=null,T=null,b=null,I=null,v=new Xt(0,0,0),S=0,O=!1,N=null,K=null,P=null,U=null,W=null,rt.set(0,0,r.canvas.width,r.canvas.height),_t.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pt,disable:Dt,bindFramebuffer:Vt,drawBuffers:z,useProgram:Ht,setBlending:gt,setMaterial:V,setFlipSided:Ot,setCullFace:C,setLineWidth:M,setPolygonOffset:F,setScissorTest:tt,activeTexture:j,bindTexture:et,unbindTexture:pt,compressedTexImage2D:ht,compressedTexImage3D:lt,texImage2D:Et,texImage3D:xt,updateUBOMapping:ae,uniformBlockBinding:ft,texStorage2D:At,texStorage3D:Gt,texSubImage2D:wt,texSubImage3D:kt,compressedTexSubImage2D:Q,compressedTexSubImage3D:se,scissor:Wt,viewport:Kt,reset:it}}function _S(r,t,e,n,i,s,a){let o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return d?new OffscreenCanvas(C,M):ul("canvas")}function g(C,M,F,tt){let j=1;if((C.width>tt||C.height>tt)&&(j=tt/Math.max(C.width,C.height)),j<1||M===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){let et=M?kh:Math.floor,pt=et(j*C.width),ht=et(j*C.height);u===void 0&&(u=_(pt,ht));let lt=F?_(pt,ht):u;return lt.width=pt,lt.height=ht,lt.getContext("2d").drawImage(C,0,0,pt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+pt+"x"+ht+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return sp(C.width)&&sp(C.height)}function p(C){return o?!1:C.wrapS!==li||C.wrapT!==li||C.minFilter!==yn&&C.minFilter!==jn}function y(C,M){return C.generateMipmaps&&M&&C.minFilter!==yn&&C.minFilter!==jn}function x(C){r.generateMipmap(C)}function E(C,M,F,tt,j=!1){if(o===!1)return M;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let et=M;if(M===r.RED&&(F===r.FLOAT&&(et=r.R32F),F===r.HALF_FLOAT&&(et=r.R16F),F===r.UNSIGNED_BYTE&&(et=r.R8)),M===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(et=r.R8UI),F===r.UNSIGNED_SHORT&&(et=r.R16UI),F===r.UNSIGNED_INT&&(et=r.R32UI),F===r.BYTE&&(et=r.R8I),F===r.SHORT&&(et=r.R16I),F===r.INT&&(et=r.R32I)),M===r.RG&&(F===r.FLOAT&&(et=r.RG32F),F===r.HALF_FLOAT&&(et=r.RG16F),F===r.UNSIGNED_BYTE&&(et=r.RG8)),M===r.RGBA){let pt=j?al:ue.getTransfer(tt);F===r.FLOAT&&(et=r.RGBA32F),F===r.HALF_FLOAT&&(et=r.RGBA16F),F===r.UNSIGNED_BYTE&&(et=pt===ve?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function A(C,M,F){return y(C,F)===!0||C.isFramebufferTexture&&C.minFilter!==yn&&C.minFilter!==jn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){return C===yn||C===Ad||C===th?r.NEAREST:r.LINEAR}function b(C){let M=C.target;M.removeEventListener("dispose",b),v(M),M.isVideoTexture&&h.delete(M)}function I(C){let M=C.target;M.removeEventListener("dispose",I),O(M)}function v(C){let M=n.get(C);if(M.__webglInit===void 0)return;let F=C.source,tt=f.get(F);if(tt){let j=tt[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(C),Object.keys(tt).length===0&&f.delete(F)}n.remove(C)}function S(C){let M=n.get(C);r.deleteTexture(M.__webglTexture);let F=C.source,tt=f.get(F);delete tt[M.__cacheKey],a.memory.textures--}function O(C){let M=C.texture,F=n.get(C),tt=n.get(M);if(tt.__webglTexture!==void 0&&(r.deleteTexture(tt.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(F.__webglFramebuffer[j]))for(let et=0;et<F.__webglFramebuffer[j].length;et++)r.deleteFramebuffer(F.__webglFramebuffer[j][et]);else r.deleteFramebuffer(F.__webglFramebuffer[j]);F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[j])}else{if(Array.isArray(F.__webglFramebuffer))for(let j=0;j<F.__webglFramebuffer.length;j++)r.deleteFramebuffer(F.__webglFramebuffer[j]);else r.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let j=0;j<F.__webglColorRenderbuffer.length;j++)F.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[j]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let j=0,et=M.length;j<et;j++){let pt=n.get(M[j]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(M[j])}n.remove(M),n.remove(C)}let N=0;function K(){N=0}function P(){let C=N;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),N+=1,C}function U(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function W(C,M){let F=n.get(C);if(C.isVideoTexture&&V(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){let tt=C.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(F,C,M);return}}e.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+M)}function X(C,M){let F=n.get(C);if(C.version>0&&F.__version!==C.version){rt(F,C,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+M)}function q(C,M){let F=n.get(C);if(C.version>0&&F.__version!==C.version){rt(F,C,M);return}e.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+M)}function Y(C,M){let F=n.get(C);if(C.version>0&&F.__version!==C.version){_t(F,C,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+M)}let R={[Oh]:r.REPEAT,[li]:r.CLAMP_TO_EDGE,[Fh]:r.MIRRORED_REPEAT},$={[yn]:r.NEAREST,[Ad]:r.NEAREST_MIPMAP_NEAREST,[th]:r.NEAREST_MIPMAP_LINEAR,[jn]:r.LINEAR,[c0]:r.LINEAR_MIPMAP_NEAREST,[Oo]:r.LINEAR_MIPMAP_LINEAR},ct={[S0]:r.NEVER,[C0]:r.ALWAYS,[b0]:r.LESS,[lm]:r.LEQUAL,[E0]:r.EQUAL,[A0]:r.GEQUAL,[w0]:r.GREATER,[T0]:r.NOTEQUAL};function Z(C,M,F){if(F?(r.texParameteri(C,r.TEXTURE_WRAP_S,R[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,R[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,R[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,$[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,$[M.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==li||M.wrapT!==li)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,T(M.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==yn&&M.minFilter!==jn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ct[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let tt=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===yn||M.minFilter!==th&&M.minFilter!==Oo||M.type===or&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Fo&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(C,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function J(C,M){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",b));let tt=M.source,j=f.get(tt);j===void 0&&(j={},f.set(tt,j));let et=U(M);if(et!==C.__cacheKey){j[et]===void 0&&(j[et]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[et].usedTimes++;let pt=j[C.__cacheKey];pt!==void 0&&(j[C.__cacheKey].usedTimes--,pt.usedTimes===0&&S(M)),C.__cacheKey=et,C.__webglTexture=j[et].texture}return F}function rt(C,M,F){let tt=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=r.TEXTURE_3D);let j=J(C,M),et=M.source;e.bindTexture(tt,C.__webglTexture,r.TEXTURE0+F);let pt=n.get(et);if(et.version!==pt.__version||j===!0){e.activeTexture(r.TEXTURE0+F);let ht=ue.getPrimaries(ue.workingColorSpace),lt=M.colorSpace===ti?null:ue.getPrimaries(M.colorSpace),wt=M.colorSpace===ti||ht===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let kt=p(M)&&m(M.image)===!1,Q=g(M.image,kt,!1,i.maxTextureSize);Q=Ot(M,Q);let se=m(Q)||o,At=s.convert(M.format,M.colorSpace),Gt=s.convert(M.type),Et=E(M.internalFormat,At,Gt,M.colorSpace,M.isVideoTexture);Z(tt,M,se);let xt,Wt=M.mipmaps,Kt=o&&M.isVideoTexture!==!0&&Et!==om,ae=pt.__version===void 0||j===!0,ft=A(M,Q,se);if(M.isDepthTexture)Et=r.DEPTH_COMPONENT,o?M.type===or?Et=r.DEPTH_COMPONENT32F:M.type===sr?Et=r.DEPTH_COMPONENT24:M.type===Xr?Et=r.DEPTH24_STENCIL8:Et=r.DEPTH_COMPONENT16:M.type===or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===qr&&Et===r.DEPTH_COMPONENT&&M.type!==gu&&M.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=sr,Gt=s.convert(M.type)),M.format===Ws&&Et===r.DEPTH_COMPONENT&&(Et=r.DEPTH_STENCIL,M.type!==Xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Xr,Gt=s.convert(M.type))),ae&&(Kt?e.texStorage2D(r.TEXTURE_2D,1,Et,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,Et,Q.width,Q.height,0,At,Gt,null));else if(M.isDataTexture)if(Wt.length>0&&se){Kt&&ae&&e.texStorage2D(r.TEXTURE_2D,ft,Et,Wt[0].width,Wt[0].height);for(let it=0,L=Wt.length;it<L;it++)xt=Wt[it],Kt?e.texSubImage2D(r.TEXTURE_2D,it,0,0,xt.width,xt.height,At,Gt,xt.data):e.texImage2D(r.TEXTURE_2D,it,Et,xt.width,xt.height,0,At,Gt,xt.data);M.generateMipmaps=!1}else Kt?(ae&&e.texStorage2D(r.TEXTURE_2D,ft,Et,Q.width,Q.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,At,Gt,Q.data)):e.texImage2D(r.TEXTURE_2D,0,Et,Q.width,Q.height,0,At,Gt,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Kt&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,Et,Wt[0].width,Wt[0].height,Q.depth);for(let it=0,L=Wt.length;it<L;it++)xt=Wt[it],M.format!==ci?At!==null?Kt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,xt.width,xt.height,Q.depth,At,xt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,it,Et,xt.width,xt.height,Q.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,xt.width,xt.height,Q.depth,At,Gt,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,it,Et,xt.width,xt.height,Q.depth,0,At,Gt,xt.data)}else{Kt&&ae&&e.texStorage2D(r.TEXTURE_2D,ft,Et,Wt[0].width,Wt[0].height);for(let it=0,L=Wt.length;it<L;it++)xt=Wt[it],M.format!==ci?At!==null?Kt?e.compressedTexSubImage2D(r.TEXTURE_2D,it,0,0,xt.width,xt.height,At,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,it,Et,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage2D(r.TEXTURE_2D,it,0,0,xt.width,xt.height,At,Gt,xt.data):e.texImage2D(r.TEXTURE_2D,it,Et,xt.width,xt.height,0,At,Gt,xt.data)}else if(M.isDataArrayTexture)Kt?(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,Et,Q.width,Q.height,Q.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,At,Gt,Q.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Et,Q.width,Q.height,Q.depth,0,At,Gt,Q.data);else if(M.isData3DTexture)Kt?(ae&&e.texStorage3D(r.TEXTURE_3D,ft,Et,Q.width,Q.height,Q.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,At,Gt,Q.data)):e.texImage3D(r.TEXTURE_3D,0,Et,Q.width,Q.height,Q.depth,0,At,Gt,Q.data);else if(M.isFramebufferTexture){if(ae)if(Kt)e.texStorage2D(r.TEXTURE_2D,ft,Et,Q.width,Q.height);else{let it=Q.width,L=Q.height;for(let st=0;st<ft;st++)e.texImage2D(r.TEXTURE_2D,st,Et,it,L,0,At,Gt,null),it>>=1,L>>=1}}else if(Wt.length>0&&se){Kt&&ae&&e.texStorage2D(r.TEXTURE_2D,ft,Et,Wt[0].width,Wt[0].height);for(let it=0,L=Wt.length;it<L;it++)xt=Wt[it],Kt?e.texSubImage2D(r.TEXTURE_2D,it,0,0,At,Gt,xt):e.texImage2D(r.TEXTURE_2D,it,Et,At,Gt,xt);M.generateMipmaps=!1}else Kt?(ae&&e.texStorage2D(r.TEXTURE_2D,ft,Et,Q.width,Q.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,At,Gt,Q)):e.texImage2D(r.TEXTURE_2D,0,Et,At,Gt,Q);y(M,se)&&x(tt),pt.__version=et.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function _t(C,M,F){if(M.image.length!==6)return;let tt=J(C,M),j=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+F);let et=n.get(j);if(j.version!==et.__version||tt===!0){e.activeTexture(r.TEXTURE0+F);let pt=ue.getPrimaries(ue.workingColorSpace),ht=M.colorSpace===ti?null:ue.getPrimaries(M.colorSpace),lt=M.colorSpace===ti||pt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let wt=M.isCompressedTexture||M.image[0].isCompressedTexture,kt=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let it=0;it<6;it++)!wt&&!kt?Q[it]=g(M.image[it],!1,!0,i.maxCubemapSize):Q[it]=kt?M.image[it].image:M.image[it],Q[it]=Ot(M,Q[it]);let se=Q[0],At=m(se)||o,Gt=s.convert(M.format,M.colorSpace),Et=s.convert(M.type),xt=E(M.internalFormat,Gt,Et,M.colorSpace),Wt=o&&M.isVideoTexture!==!0,Kt=et.__version===void 0||tt===!0,ae=A(M,se,At);Z(r.TEXTURE_CUBE_MAP,M,At);let ft;if(wt){Wt&&Kt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ae,xt,se.width,se.height);for(let it=0;it<6;it++){ft=Q[it].mipmaps;for(let L=0;L<ft.length;L++){let st=ft[L];M.format!==ci?Gt!==null?Wt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,L,0,0,st.width,st.height,Gt,st.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,L,xt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,L,0,0,st.width,st.height,Gt,Et,st.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,L,xt,st.width,st.height,0,Gt,Et,st.data)}}}else{ft=M.mipmaps,Wt&&Kt&&(ft.length>0&&ae++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ae,xt,Q[0].width,Q[0].height));for(let it=0;it<6;it++)if(kt){Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Q[it].width,Q[it].height,Gt,Et,Q[it].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,xt,Q[it].width,Q[it].height,0,Gt,Et,Q[it].data);for(let L=0;L<ft.length;L++){let ot=ft[L].image[it].image;Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,L+1,0,0,ot.width,ot.height,Gt,Et,ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,L+1,xt,ot.width,ot.height,0,Gt,Et,ot.data)}}else{Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Gt,Et,Q[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,xt,Gt,Et,Q[it]);for(let L=0;L<ft.length;L++){let st=ft[L];Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,L+1,0,0,Gt,Et,st.image[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,L+1,xt,Gt,Et,st.image[it])}}}y(M,At)&&x(r.TEXTURE_CUBE_MAP),et.__version=j.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function dt(C,M,F,tt,j,et){let pt=s.convert(F.format,F.colorSpace),ht=s.convert(F.type),lt=E(F.internalFormat,pt,ht,F.colorSpace);if(!n.get(M).__hasExternalTextures){let kt=Math.max(1,M.width>>et),Q=Math.max(1,M.height>>et);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,et,lt,kt,Q,M.depth,0,pt,ht,null):e.texImage2D(j,et,lt,kt,Q,0,pt,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),gt(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,j,n.get(F).__webglTexture,0,Lt(M)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,tt,j,n.get(F).__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(C,M,F){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let tt=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||gt(M)){let j=M.depthTexture;j&&j.isDepthTexture&&(j.type===or?tt=r.DEPTH_COMPONENT32F:j.type===sr&&(tt=r.DEPTH_COMPONENT24));let et=Lt(M);gt(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,tt,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,et,tt,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,tt,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){let tt=Lt(M);F&&gt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,r.DEPTH24_STENCIL8,M.width,M.height):gt(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{let tt=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let j=0;j<tt.length;j++){let et=tt[j],pt=s.convert(et.format,et.colorSpace),ht=s.convert(et.type),lt=E(et.internalFormat,pt,ht,et.colorSpace),wt=Lt(M);F&&gt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,lt,M.width,M.height):gt(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,wt,lt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,lt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);let tt=n.get(M.depthTexture).__webglTexture,j=Lt(M);if(M.depthTexture.format===qr)gt(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0);else if(M.depthTexture.format===Ws)gt(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Dt(C){let M=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pt(M.__webglFramebuffer,C)}else if(F){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]=r.createRenderbuffer(),Rt(M.__webglDepthbuffer[tt],C,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Rt(M.__webglDepthbuffer,C,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(C,M,F){let tt=n.get(C);M!==void 0&&dt(tt.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Dt(C)}function z(C){let M=C.texture,F=n.get(C),tt=n.get(M);C.addEventListener("dispose",I),C.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=M.version,a.memory.textures++);let j=C.isWebGLCubeRenderTarget===!0,et=C.isWebGLMultipleRenderTargets===!0,pt=m(C)||o;if(j){F.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ht]=[];for(let lt=0;lt<M.mipmaps.length;lt++)F.__webglFramebuffer[ht][lt]=r.createFramebuffer()}else F.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)F.__webglFramebuffer[ht]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(et)if(i.drawBuffers){let ht=C.texture;for(let lt=0,wt=ht.length;lt<wt;lt++){let kt=n.get(ht[lt]);kt.__webglTexture===void 0&&(kt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&gt(C)===!1){let ht=et?M:[M];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let lt=0;lt<ht.length;lt++){let wt=ht[lt];F.__webglColorRenderbuffer[lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[lt]);let kt=s.convert(wt.format,wt.colorSpace),Q=s.convert(wt.type),se=E(wt.internalFormat,kt,Q,wt.colorSpace,C.isXRRenderTarget===!0),At=Lt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,At,se,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,F.__webglColorRenderbuffer[lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Rt(F.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),Z(r.TEXTURE_CUBE_MAP,M,pt);for(let ht=0;ht<6;ht++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let lt=0;lt<M.mipmaps.length;lt++)dt(F.__webglFramebuffer[ht][lt],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,lt);else dt(F.__webglFramebuffer[ht],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);y(M,pt)&&x(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){let ht=C.texture;for(let lt=0,wt=ht.length;lt<wt;lt++){let kt=ht[lt],Q=n.get(kt);e.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Z(r.TEXTURE_2D,kt,pt),dt(F.__webglFramebuffer,C,kt,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,0),y(kt,pt)&&x(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ht=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,tt.__webglTexture),Z(ht,M,pt),o&&M.mipmaps&&M.mipmaps.length>0)for(let lt=0;lt<M.mipmaps.length;lt++)dt(F.__webglFramebuffer[lt],C,M,r.COLOR_ATTACHMENT0,ht,lt);else dt(F.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,ht,0);y(M,pt)&&x(ht),e.unbindTexture()}C.depthBuffer&&Dt(C)}function Ht(C){let M=m(C)||o,F=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let tt=0,j=F.length;tt<j;tt++){let et=F[tt];if(y(et,M)){let pt=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ht=n.get(et).__webglTexture;e.bindTexture(pt,ht),x(pt),e.unbindTexture()}}}function mt(C){if(o&&C.samples>0&&gt(C)===!1){let M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],F=C.width,tt=C.height,j=r.COLOR_BUFFER_BIT,et=[],pt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(C),lt=C.isWebGLMultipleRenderTargets===!0;if(lt)for(let wt=0;wt<M.length;wt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let wt=0;wt<M.length;wt++){et.push(r.COLOR_ATTACHMENT0+wt),C.depthBuffer&&et.push(pt);let kt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(kt===!1&&(C.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),lt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[wt]),kt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[pt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[pt])),lt){let Q=n.get(M[wt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,F,tt,0,0,F,tt,j,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),lt)for(let wt=0;wt<M.length;wt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[wt]);let kt=n.get(M[wt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,kt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function Lt(C){return Math.min(i.maxSamples,C.samples)}function gt(C){let M=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function V(C){let M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Ot(C,M){let F=C.colorSpace,tt=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Bh||F!==Vi&&F!==ti&&(ue.getTransfer(F)===ve?o===!1?t.has("EXT_sRGB")===!0&&tt===ci?(C.format=Bh,C.minFilter=jn,C.generateMipmaps=!1):M=fl.sRGBToLinear(M):(tt!==ci||j!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}this.allocateTextureUnit=P,this.resetTextureUnits=K,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=Vt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=gt}function xS(r,t,e){let n=e.isWebGL2;function i(s,a=ti){let o,l=ue.getTransfer(a);if(s===cr)return r.UNSIGNED_BYTE;if(s===em)return r.UNSIGNED_SHORT_4_4_4_4;if(s===nm)return r.UNSIGNED_SHORT_5_5_5_1;if(s===h0)return r.BYTE;if(s===u0)return r.SHORT;if(s===gu)return r.UNSIGNED_SHORT;if(s===tm)return r.INT;if(s===sr)return r.UNSIGNED_INT;if(s===or)return r.FLOAT;if(s===Fo)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===f0)return r.ALPHA;if(s===ci)return r.RGBA;if(s===d0)return r.LUMINANCE;if(s===p0)return r.LUMINANCE_ALPHA;if(s===qr)return r.DEPTH_COMPONENT;if(s===Ws)return r.DEPTH_STENCIL;if(s===Bh)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===m0)return r.RED;if(s===im)return r.RED_INTEGER;if(s===g0)return r.RG;if(s===rm)return r.RG_INTEGER;if(s===sm)return r.RGBA_INTEGER;if(s===eh||s===nh||s===ih||s===rh)if(l===ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===eh)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ih)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===rh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===eh)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nh)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ih)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===rh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cd||s===Rd||s===Pd||s===Ld)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Cd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ld)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===om)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Id||s===Dd)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Id)return l===ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Dd)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ud||s===Nd||s===Od||s===Fd||s===Bd||s===zd||s===kd||s===Vd||s===Hd||s===Gd||s===Wd||s===Xd||s===qd||s===Yd)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ud)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nd)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Od)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fd)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bd)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zd)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===kd)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vd)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hd)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gd)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wd)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xd)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qd)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yd)return l===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sh||s===Zd||s===Jd)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===sh)return l===ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_0||s===$d||s===Kd||s===Qd)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===sh)return o.COMPRESSED_RED_RGTC1_EXT;if(s===$d)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xr?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var tu=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},an=class extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},vS={type:"move"},No=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vS)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},eu=class extends ur{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null,g=e.getContextAttributes(),m=null,p=null,y=[],x=[],E=new fe,A=null,T=new Mn;T.layers.enable(1),T.viewport=new $e;let b=new Mn;b.layers.enable(2),b.viewport=new $e;let I=[T,b],v=new tu;v.layers.enable(1),v.layers.enable(2);let S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=y[Z];return J===void 0&&(J=new No,y[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=y[Z];return J===void 0&&(J=new No,y[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=y[Z];return J===void 0&&(J=new No,y[Z]=J),J.getHandSpace()};function N(Z){let J=x.indexOf(Z.inputSource);if(J===-1)return;let rt=y[J];rt!==void 0&&(rt.update(Z.inputSource,Z.frame,c||a),rt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",P);for(let Z=0;Z<y.length;Z++){let J=x[Z];J!==null&&(x[Z]=null,y[Z].disconnect(J))}S=null,O=null,t.setRenderTarget(m),d=null,f=null,u=null,i=null,p=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",K),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let J={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Hi(d.framebufferWidth,d.framebufferHeight,{format:ci,type:cr,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,rt=null,_t=null;g.depth&&(_t=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=g.stencil?Ws:qr,rt=g.stencil?Xr:sr);let dt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(dt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Hi(f.textureWidth,f.textureHeight,{format:ci,type:cr,depthTexture:new El(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let Rt=t.properties.get(p);Rt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ct.setContext(i),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(Z){for(let J=0;J<Z.removed.length;J++){let rt=Z.removed[J],_t=x.indexOf(rt);_t>=0&&(x[_t]=null,y[_t].disconnect(rt))}for(let J=0;J<Z.added.length;J++){let rt=Z.added[J],_t=x.indexOf(rt);if(_t===-1){for(let Rt=0;Rt<y.length;Rt++)if(Rt>=x.length){x.push(rt),_t=Rt;break}else if(x[Rt]===null){x[Rt]=rt,_t=Rt;break}if(_t===-1)break}let dt=y[_t];dt&&dt.connect(rt)}}let U=new H,W=new H;function X(Z,J,rt){U.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(rt.matrixWorld);let _t=U.distanceTo(W),dt=J.projectionMatrix.elements,Rt=rt.projectionMatrix.elements,Pt=dt[14]/(dt[10]-1),Dt=dt[14]/(dt[10]+1),Vt=(dt[9]+1)/dt[5],z=(dt[9]-1)/dt[5],Ht=(dt[8]-1)/dt[0],mt=(Rt[8]+1)/Rt[0],Lt=Pt*Ht,gt=Pt*mt,V=_t/(-Ht+mt),Ot=V*-Ht;J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ot),Z.translateZ(V),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();let C=Pt+V,M=Dt+V,F=Lt-Ot,tt=gt+(_t-Ot),j=Vt*Dt/M*C,et=z*Dt/M*C;Z.projectionMatrix.makePerspective(F,tt,j,et,C,M),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function q(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;v.near=b.near=T.near=Z.near,v.far=b.far=T.far=Z.far,(S!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,O=v.far);let J=Z.parent,rt=v.cameras;q(v,J);for(let _t=0;_t<rt.length;_t++)q(rt[_t],J);rt.length===2?X(v,T,b):v.projectionMatrix.copy(T.projectionMatrix),Y(Z,v,J)};function Y(Z,J,rt){rt===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(rt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=zh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)};let R=null;function $(Z,J){if(h=J.getViewerPose(c||a),_=J,h!==null){let rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let _t=!1;rt.length!==v.cameras.length&&(v.cameras.length=0,_t=!0);for(let dt=0;dt<rt.length;dt++){let Rt=rt[dt],Pt=null;if(d!==null)Pt=d.getViewport(Rt);else{let Vt=u.getViewSubImage(f,Rt);Pt=Vt.viewport,dt===0&&(t.setRenderTargetTextures(p,Vt.colorTexture,f.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(p))}let Dt=I[dt];Dt===void 0&&(Dt=new Mn,Dt.layers.enable(dt),Dt.viewport=new $e,I[dt]=Dt),Dt.matrix.fromArray(Rt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Rt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),dt===0&&(v.matrix.copy(Dt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),_t===!0&&v.cameras.push(Dt)}}for(let rt=0;rt<y.length;rt++){let _t=x[rt],dt=y[rt];_t!==null&&dt!==void 0&&dt.update(_t,J,c||a)}R&&R(Z,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}let ct=new fm;ct.setAnimationLoop($),this.setAnimationLoop=function(Z){R=Z},this.dispose=function(){}}};function yS(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,um(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function MS(r,t,e,n){let i={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let E=x.program;n.uniformBlockBinding(y,E)}function c(y,x){let E=i[y.id];E===void 0&&(_(y),E=h(y),i[y.id]=E,y.addEventListener("dispose",m));let A=x.program;n.updateUBOMapping(y,A);let T=t.render.frame;s[y.id]!==T&&(f(y),s[y.id]=T)}function h(y){let x=u();y.__bindingPointIndex=x;let E=r.createBuffer(),A=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,A,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,E),E}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=i[y.id],E=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let T=0,b=E.length;T<b;T++){let I=Array.isArray(E[T])?E[T]:[E[T]];for(let v=0,S=I.length;v<S;v++){let O=I[v];if(d(O,T,v,A)===!0){let N=O.__offset,K=Array.isArray(O.value)?O.value:[O.value],P=0;for(let U=0;U<K.length;U++){let W=K[U],X=g(W);typeof W=="number"||typeof W=="boolean"?(O.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,N+P,O.__data)):W.isMatrix3?(O.__data[0]=W.elements[0],O.__data[1]=W.elements[1],O.__data[2]=W.elements[2],O.__data[3]=0,O.__data[4]=W.elements[3],O.__data[5]=W.elements[4],O.__data[6]=W.elements[5],O.__data[7]=0,O.__data[8]=W.elements[6],O.__data[9]=W.elements[7],O.__data[10]=W.elements[8],O.__data[11]=0):(W.toArray(O.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,x,E,A){let T=y.value,b=x+"_"+E;if(A[b]===void 0)return typeof T=="number"||typeof T=="boolean"?A[b]=T:A[b]=T.clone(),!0;{let I=A[b];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return A[b]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function _(y){let x=y.uniforms,E=0,A=16;for(let b=0,I=x.length;b<I;b++){let v=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,O=v.length;S<O;S++){let N=v[S],K=Array.isArray(N.value)?N.value:[N.value];for(let P=0,U=K.length;P<U;P++){let W=K[P],X=g(W),q=E%A;q!==0&&A-q<X.boundary&&(E+=A-q),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=X.storage}}}let T=E%A;return T>0&&(E+=A-T),y.__size=E,y.__cache={},this}function g(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(let y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}var ko=class{constructor(t={}){let{canvas:e=P0(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let d=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this._useLegacyLights=!1,this.toneMapping=lr,this.toneMappingExposure=1;let x=this,E=!1,A=0,T=0,b=null,I=-1,v=null,S=new $e,O=new $e,N=null,K=new Xt(0),P=0,U=e.width,W=e.height,X=1,q=null,Y=null,R=new $e(0,0,U,W),$=new $e(0,0,U,W),ct=!1,Z=new Sl,J=!1,rt=!1,_t=null,dt=new Xe,Rt=new fe,Pt=new H,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Vt(){return b===null?X:1}let z=n;function Ht(w,D){for(let G=0;G<w.length;G++){let k=w[G],B=e.getContext(k,D);if(B!==null)return B}return null}try{let w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",st,!1),z===null){let D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),z=Ht(D,w),z===null)throw Ht(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let mt,Lt,gt,V,Ot,C,M,F,tt,j,et,pt,ht,lt,wt,kt,Q,se,At,Gt,Et,xt,Wt,Kt;function ae(){mt=new ky(z),Lt=new Uy(z,mt,t),mt.init(Lt),xt=new xS(z,mt,Lt),gt=new gS(z,mt,Lt),V=new Gy(z),Ot=new rS,C=new _S(z,mt,gt,Ot,Lt,xt,V),M=new Oy(x),F=new zy(x),tt=new K0(z,Lt),Wt=new Iy(z,mt,tt,Lt),j=new Vy(z,tt,V,Wt),et=new Yy(z,j,tt,V),At=new qy(z,Lt,C),kt=new Ny(Ot),pt=new iS(x,M,F,mt,Lt,Wt,kt),ht=new yS(x,Ot),lt=new oS,wt=new fS(mt,Lt),se=new Ly(x,M,F,gt,et,f,l),Q=new mS(x,et,Lt),Kt=new MS(z,V,Lt,gt),Gt=new Dy(z,mt,V,Lt),Et=new Hy(z,mt,V,Lt),V.programs=pt.programs,x.capabilities=Lt,x.extensions=mt,x.properties=Ot,x.renderLists=lt,x.shadowMap=Q,x.state=gt,x.info=V}ae();let ft=new eu(x,z);this.xr=ft,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(U,W,!1))},this.getSize=function(w){return w.set(U,W)},this.setSize=function(w,D,G=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,W=D,e.width=Math.floor(w*X),e.height=Math.floor(D*X),G===!0&&(e.style.width=w+"px",e.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(U*X,W*X).floor()},this.setDrawingBufferSize=function(w,D,G){U=w,W=D,X=G,e.width=Math.floor(w*G),e.height=Math.floor(D*G),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,D,G,k){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,D,G,k),gt.viewport(S.copy(R).multiplyScalar(X).floor())},this.getScissor=function(w){return w.copy($)},this.setScissor=function(w,D,G,k){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,D,G,k),gt.scissor(O.copy($).multiplyScalar(X).floor())},this.getScissorTest=function(){return ct},this.setScissorTest=function(w){gt.setScissorTest(ct=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(w=!0,D=!0,G=!0){let k=0;if(w){let B=!1;if(b!==null){let at=b.texture.format;B=at===sm||at===rm||at===im}if(B){let at=b.texture.type,Mt=at===cr||at===sr||at===gu||at===Xr||at===em||at===nm,Bt=se.getClearColor(),St=se.getClearAlpha(),Tt=Bt.r,zt=Bt.g,Yt=Bt.b;Mt?(d[0]=Tt,d[1]=zt,d[2]=Yt,d[3]=St,z.clearBufferuiv(z.COLOR,0,d)):(_[0]=Tt,_[1]=zt,_[2]=Yt,_[3]=St,z.clearBufferiv(z.COLOR,0,_))}else k|=z.COLOR_BUFFER_BIT}D&&(k|=z.DEPTH_BUFFER_BIT),G&&(k|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",st,!1),lt.dispose(),wt.dispose(),Ot.dispose(),M.dispose(),F.dispose(),et.dispose(),Wt.dispose(),Kt.dispose(),pt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",vt),ft.removeEventListener("sessionend",Ct),_t&&(_t.dispose(),_t=null),nt.stop()};function it(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=V.autoReset,D=Q.enabled,G=Q.autoUpdate,k=Q.needsUpdate,B=Q.type;ae(),V.autoReset=w,Q.enabled=D,Q.autoUpdate=G,Q.needsUpdate=k,Q.type=B}function st(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ot(w){let D=w.target;D.removeEventListener("dispose",ot),Ut(D)}function Ut(w){It(w),Ot.remove(w)}function It(w){let D=Ot.get(w).programs;D!==void 0&&(D.forEach(function(G){pt.releaseProgram(G)}),w.isShaderMaterial&&pt.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,G,k,B,at){D===null&&(D=Dt);let Mt=B.isMesh&&B.matrixWorld.determinant()<0,Bt=me(w,D,G,k,B);gt.setMaterial(k,Mt);let St=G.index,Tt=1;if(k.wireframe===!0){if(St=j.getWireframeAttribute(G),St===void 0)return;Tt=2}let zt=G.drawRange,Yt=G.attributes.position,ye=zt.start*Tt,Oe=(zt.start+zt.count)*Tt;at!==null&&(ye=Math.max(ye,at.start*Tt),Oe=Math.min(Oe,(at.start+at.count)*Tt)),St!==null?(ye=Math.max(ye,0),Oe=Math.min(Oe,St.count)):Yt!=null&&(ye=Math.max(ye,0),Oe=Math.min(Oe,Yt.count));let ce=Oe-ye;if(ce<0||ce===1/0)return;Wt.setup(B,k,Bt,G,St);let cn,he=Gt;if(St!==null&&(cn=tt.get(St),he=Et,he.setIndex(cn)),B.isMesh)k.wireframe===!0?(gt.setLineWidth(k.wireframeLinewidth*Vt()),he.setMode(z.LINES)):he.setMode(z.TRIANGLES);else if(B.isLine){let Zt=k.linewidth;Zt===void 0&&(Zt=1),gt.setLineWidth(Zt*Vt()),B.isLineSegments?he.setMode(z.LINES):B.isLineLoop?he.setMode(z.LINE_LOOP):he.setMode(z.LINE_STRIP)}else B.isPoints?he.setMode(z.POINTS):B.isSprite&&he.setMode(z.TRIANGLES);if(B.isBatchedMesh)he.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)he.renderInstances(ye,ce,B.count);else if(G.isInstancedBufferGeometry){let Zt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ul=Math.min(G.instanceCount,Zt);he.renderInstances(ye,ce,Ul)}else he.render(ye,ce)};function ne(w,D,G){w.transparent===!0&&w.side===Bi&&w.forceSinglePass===!1?(w.side=Dn,w.needsUpdate=!0,pe(w,D,G),w.side=hr,w.needsUpdate=!0,pe(w,D,G),w.side=Bi):pe(w,D,G)}this.compile=function(w,D,G=null){G===null&&(G=w),m=wt.get(G),m.init(),y.push(m),G.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),w!==G&&w.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(x._useLegacyLights);let k=new Set;return w.traverse(function(B){let at=B.material;if(at)if(Array.isArray(at))for(let Mt=0;Mt<at.length;Mt++){let Bt=at[Mt];ne(Bt,G,B),k.add(Bt)}else ne(at,G,B),k.add(at)}),y.pop(),m=null,k},this.compileAsync=function(w,D,G=null){let k=this.compile(w,D,G);return new Promise(B=>{function at(){if(k.forEach(function(Mt){Ot.get(Mt).currentProgram.isReady()&&k.delete(Mt)}),k.size===0){B(w);return}setTimeout(at,10)}mt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let oe=null;function bt(w){oe&&oe(w)}function vt(){nt.stop()}function Ct(){nt.start()}let nt=new fm;nt.setAnimationLoop(bt),typeof self!="undefined"&&nt.setContext(self),this.setAnimationLoop=function(w){oe=w,ft.setAnimationLoop(w),w===null?nt.stop():nt.start()},ft.addEventListener("sessionstart",vt),ft.addEventListener("sessionend",Ct),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(D),D=ft.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,D,b),m=wt.get(w,y.length),m.init(),y.push(m),dt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Z.setFromProjectionMatrix(dt),rt=this.localClippingEnabled,J=kt.init(this.clippingPlanes,rt),g=lt.get(w,p.length),g.init(),p.push(g),Ft(w,D,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(q,Y),this.info.render.frame++,J===!0&&kt.beginShadows();let G=m.state.shadowsArray;if(Q.render(G,w,D),J===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(g,w),m.setupLights(x._useLegacyLights),D.isArrayCamera){let k=D.cameras;for(let B=0,at=k.length;B<at;B++){let Mt=k[B];Nt(g,w,Mt,Mt.viewport)}}else Nt(g,w,D);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(x,w,D),Wt.resetDefaultState(),I=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Ft(w,D,G,k){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){k&&Pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);let Mt=et.update(w),Bt=w.material;Bt.visible&&g.push(w,Mt,Bt,G,Pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){let Mt=et.update(w),Bt=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pt.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Pt.copy(Mt.boundingSphere.center)),Pt.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(Bt)){let St=Mt.groups;for(let Tt=0,zt=St.length;Tt<zt;Tt++){let Yt=St[Tt],ye=Bt[Yt.materialIndex];ye&&ye.visible&&g.push(w,Mt,ye,G,Pt.z,Yt)}}else Bt.visible&&g.push(w,Mt,Bt,G,Pt.z,null)}}let at=w.children;for(let Mt=0,Bt=at.length;Mt<Bt;Mt++)Ft(at[Mt],D,G,k)}function Nt(w,D,G,k){let B=w.opaque,at=w.transmissive,Mt=w.transparent;m.setupLightsView(G),J===!0&&kt.setGlobalState(x.clippingPlanes,G),at.length>0&&qt(B,at,D,G),k&&gt.viewport(S.copy(k)),B.length>0&&be(B,D,G),at.length>0&&be(at,D,G),Mt.length>0&&be(Mt,D,G),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function qt(w,D,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let at=Lt.isWebGL2;_t===null&&(_t=new Hi(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")?Fo:cr,minFilter:Oo,samples:at?4:0})),x.getDrawingBufferSize(Rt),at?_t.setSize(Rt.x,Rt.y):_t.setSize(kh(Rt.x),kh(Rt.y));let Mt=x.getRenderTarget();x.setRenderTarget(_t),x.getClearColor(K),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let Bt=x.toneMapping;x.toneMapping=lr,be(w,G,k),C.updateMultisampleRenderTarget(_t),C.updateRenderTargetMipmap(_t);let St=!1;for(let Tt=0,zt=D.length;Tt<zt;Tt++){let Yt=D[Tt],ye=Yt.object,Oe=Yt.geometry,ce=Yt.material,cn=Yt.group;if(ce.side===Bi&&ye.layers.test(k.layers)){let he=ce.side;ce.side=Dn,ce.needsUpdate=!0,Qt(ye,G,k,Oe,ce,cn),ce.side=he,ce.needsUpdate=!0,St=!0}}St===!0&&(C.updateMultisampleRenderTarget(_t),C.updateRenderTargetMipmap(_t)),x.setRenderTarget(Mt),x.setClearColor(K,P),x.toneMapping=Bt}function be(w,D,G){let k=D.isScene===!0?D.overrideMaterial:null;for(let B=0,at=w.length;B<at;B++){let Mt=w[B],Bt=Mt.object,St=Mt.geometry,Tt=k===null?Mt.material:k,zt=Mt.group;Bt.layers.test(G.layers)&&Qt(Bt,D,G,St,Tt,zt)}}function Qt(w,D,G,k,B,at){w.onBeforeRender(x,D,G,k,B,at),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(x,D,G,k,w,at),B.transparent===!0&&B.side===Bi&&B.forceSinglePass===!1?(B.side=Dn,B.needsUpdate=!0,x.renderBufferDirect(G,D,k,B,w,at),B.side=hr,B.needsUpdate=!0,x.renderBufferDirect(G,D,k,B,w,at),B.side=Bi):x.renderBufferDirect(G,D,k,B,w,at),w.onAfterRender(x,D,G,k,B,at)}function pe(w,D,G){D.isScene!==!0&&(D=Dt);let k=Ot.get(w),B=m.state.lights,at=m.state.shadowsArray,Mt=B.state.version,Bt=pt.getParameters(w,B.state,at,D,G),St=pt.getProgramCacheKey(Bt),Tt=k.programs;k.environment=w.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(w.isMeshStandardMaterial?F:M).get(w.envMap||k.environment),Tt===void 0&&(w.addEventListener("dispose",ot),Tt=new Map,k.programs=Tt);let zt=Tt.get(St);if(zt!==void 0){if(k.currentProgram===zt&&k.lightsStateVersion===Mt)return _e(w,Bt),zt}else Bt.uniforms=pt.getUniforms(w),w.onBuild(G,Bt,x),w.onBeforeCompile(Bt,x),zt=pt.acquireProgram(Bt,St),Tt.set(St,zt),k.uniforms=Bt.uniforms;let Yt=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Yt.clippingPlanes=kt.uniform),_e(w,Bt),k.needsLights=Nn(w),k.lightsStateVersion=Mt,k.needsLights&&(Yt.ambientLightColor.value=B.state.ambient,Yt.lightProbe.value=B.state.probe,Yt.directionalLights.value=B.state.directional,Yt.directionalLightShadows.value=B.state.directionalShadow,Yt.spotLights.value=B.state.spot,Yt.spotLightShadows.value=B.state.spotShadow,Yt.rectAreaLights.value=B.state.rectArea,Yt.ltc_1.value=B.state.rectAreaLTC1,Yt.ltc_2.value=B.state.rectAreaLTC2,Yt.pointLights.value=B.state.point,Yt.pointLightShadows.value=B.state.pointShadow,Yt.hemisphereLights.value=B.state.hemi,Yt.directionalShadowMap.value=B.state.directionalShadowMap,Yt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Yt.spotShadowMap.value=B.state.spotShadowMap,Yt.spotLightMatrix.value=B.state.spotLightMatrix,Yt.spotLightMap.value=B.state.spotLightMap,Yt.pointShadowMap.value=B.state.pointShadowMap,Yt.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=zt,k.uniformsList=null,zt}function Ne(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=Vs.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function _e(w,D){let G=Ot.get(w);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function me(w,D,G,k,B){D.isScene!==!0&&(D=Dt),C.resetTextureUnits();let at=D.fog,Mt=k.isMeshStandardMaterial?D.environment:null,Bt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Vi,St=(k.isMeshStandardMaterial?F:M).get(k.envMap||Mt),Tt=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,zt=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Yt=!!G.morphAttributes.position,ye=!!G.morphAttributes.normal,Oe=!!G.morphAttributes.color,ce=lr;k.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ce=x.toneMapping);let cn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,he=cn!==void 0?cn.length:0,Zt=Ot.get(k),Ul=m.state.lights;if(J===!0&&(rt===!0||w!==v)){let Wn=w===v&&k.id===I;kt.setState(k,w,Wn)}let Ae=!1;k.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ul.state.version||Zt.outputColorSpace!==Bt||B.isBatchedMesh&&Zt.batching===!1||!B.isBatchedMesh&&Zt.batching===!0||B.isInstancedMesh&&Zt.instancing===!1||!B.isInstancedMesh&&Zt.instancing===!0||B.isSkinnedMesh&&Zt.skinning===!1||!B.isSkinnedMesh&&Zt.skinning===!0||B.isInstancedMesh&&Zt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Zt.instancingColor===!1&&B.instanceColor!==null||Zt.envMap!==St||k.fog===!0&&Zt.fog!==at||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==kt.numPlanes||Zt.numIntersection!==kt.numIntersection)||Zt.vertexAlphas!==Tt||Zt.vertexTangents!==zt||Zt.morphTargets!==Yt||Zt.morphNormals!==ye||Zt.morphColors!==Oe||Zt.toneMapping!==ce||Lt.isWebGL2===!0&&Zt.morphTargetsCount!==he)&&(Ae=!0):(Ae=!0,Zt.__version=k.version);let mr=Zt.currentProgram;Ae===!0&&(mr=pe(k,D,B));let bu=!1,$s=!1,Nl=!1,Ke=mr.getUniforms(),gr=Zt.uniforms;if(gt.useProgram(mr.program)&&(bu=!0,$s=!0,Nl=!0),k.id!==I&&(I=k.id,$s=!0),bu||v!==w){Ke.setValue(z,"projectionMatrix",w.projectionMatrix),Ke.setValue(z,"viewMatrix",w.matrixWorldInverse);let Wn=Ke.map.cameraPosition;Wn!==void 0&&Wn.setValue(z,Pt.setFromMatrixPosition(w.matrixWorld)),Lt.logarithmicDepthBuffer&&Ke.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ke.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,$s=!0,Nl=!0)}if(B.isSkinnedMesh){Ke.setOptional(z,B,"bindMatrix"),Ke.setOptional(z,B,"bindMatrixInverse");let Wn=B.skeleton;Wn&&(Lt.floatVertexTextures?(Wn.boneTexture===null&&Wn.computeBoneTexture(),Ke.setValue(z,"boneTexture",Wn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ke.setOptional(z,B,"batchingTexture"),Ke.setValue(z,"batchingTexture",B._matricesTexture,C));let Ol=G.morphAttributes;if((Ol.position!==void 0||Ol.normal!==void 0||Ol.color!==void 0&&Lt.isWebGL2===!0)&&At.update(B,G,mr),($s||Zt.receiveShadow!==B.receiveShadow)&&(Zt.receiveShadow=B.receiveShadow,Ke.setValue(z,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(gr.envMap.value=St,gr.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),$s&&(Ke.setValue(z,"toneMappingExposure",x.toneMappingExposure),Zt.needsLights&&le(gr,Nl),at&&k.fog===!0&&ht.refreshFogUniforms(gr,at),ht.refreshMaterialUniforms(gr,k,X,W,_t),Vs.upload(z,Ne(Zt),gr,C)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Vs.upload(z,Ne(Zt),gr,C),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ke.setValue(z,"center",B.center),Ke.setValue(z,"modelViewMatrix",B.modelViewMatrix),Ke.setValue(z,"normalMatrix",B.normalMatrix),Ke.setValue(z,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Wn=k.uniformsGroups;for(let Fl=0,Lm=Wn.length;Fl<Lm;Fl++)if(Lt.isWebGL2){let Eu=Wn[Fl];Kt.update(Eu,mr),Kt.bind(Eu,mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mr}function le(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function Nn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,D,G){Ot.get(w.texture).__webglTexture=D,Ot.get(w.depthTexture).__webglTexture=G;let k=Ot.get(w);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,D){let G=Ot.get(w);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,G=0){b=w,A=D,T=G;let k=!0,B=null,at=!1,Mt=!1;if(w){let St=Ot.get(w);St.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(z.FRAMEBUFFER,null),k=!1):St.__webglFramebuffer===void 0?C.setupRenderTarget(w):St.__hasExternalTextures&&C.rebindTextures(w,Ot.get(w.texture).__webglTexture,Ot.get(w.depthTexture).__webglTexture);let Tt=w.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(Mt=!0);let zt=Ot.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(zt[D])?B=zt[D][G]:B=zt[D],at=!0):Lt.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?B=Ot.get(w).__webglMultisampledFramebuffer:Array.isArray(zt)?B=zt[G]:B=zt,S.copy(w.viewport),O.copy(w.scissor),N=w.scissorTest}else S.copy(R).multiplyScalar(X).floor(),O.copy($).multiplyScalar(X).floor(),N=ct;if(gt.bindFramebuffer(z.FRAMEBUFFER,B)&&Lt.drawBuffers&&k&&gt.drawBuffers(w,B),gt.viewport(S),gt.scissor(O),gt.setScissorTest(N),at){let St=Ot.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+D,St.__webglTexture,G)}else if(Mt){let St=Ot.get(w.texture),Tt=D||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,St.__webglTexture,G||0,Tt)}I=-1},this.readRenderTargetPixels=function(w,D,G,k,B,at,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Bt=Bt[Mt]),Bt){gt.bindFramebuffer(z.FRAMEBUFFER,Bt);try{let St=w.texture,Tt=St.format,zt=St.type;if(Tt!==ci&&xt.convert(Tt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Yt=zt===Fo&&(mt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&mt.has("EXT_color_buffer_float"));if(zt!==cr&&xt.convert(zt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===or&&(Lt.isWebGL2||mt.has("OES_texture_float")||mt.has("WEBGL_color_buffer_float")))&&!Yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-k&&G>=0&&G<=w.height-B&&z.readPixels(D,G,k,B,xt.convert(Tt),xt.convert(zt),at)}finally{let St=b!==null?Ot.get(b).__webglFramebuffer:null;gt.bindFramebuffer(z.FRAMEBUFFER,St)}}},this.copyFramebufferToTexture=function(w,D,G=0){let k=Math.pow(2,-G),B=Math.floor(D.image.width*k),at=Math.floor(D.image.height*k);C.setTexture2D(D,0),z.copyTexSubImage2D(z.TEXTURE_2D,G,0,0,w.x,w.y,B,at),gt.unbindTexture()},this.copyTextureToTexture=function(w,D,G,k=0){let B=D.image.width,at=D.image.height,Mt=xt.convert(G.format),Bt=xt.convert(G.type);C.setTexture2D(G,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment),D.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,k,w.x,w.y,B,at,Mt,Bt,D.image.data):D.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,k,w.x,w.y,D.mipmaps[0].width,D.mipmaps[0].height,Mt,D.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,k,w.x,w.y,Mt,Bt,D.image),k===0&&G.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(w,D,G,k,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let at=w.max.x-w.min.x+1,Mt=w.max.y-w.min.y+1,Bt=w.max.z-w.min.z+1,St=xt.convert(k.format),Tt=xt.convert(k.type),zt;if(k.isData3DTexture)C.setTexture3D(k,0),zt=z.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)C.setTexture2DArray(k,0),zt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let Yt=z.getParameter(z.UNPACK_ROW_LENGTH),ye=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Oe=z.getParameter(z.UNPACK_SKIP_PIXELS),ce=z.getParameter(z.UNPACK_SKIP_ROWS),cn=z.getParameter(z.UNPACK_SKIP_IMAGES),he=G.isCompressedTexture?G.mipmaps[B]:G.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,he.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,he.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,w.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,w.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,w.min.z),G.isDataTexture||G.isData3DTexture?z.texSubImage3D(zt,B,D.x,D.y,D.z,at,Mt,Bt,St,Tt,he.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(zt,B,D.x,D.y,D.z,at,Mt,Bt,St,he.data)):z.texSubImage3D(zt,B,D.x,D.y,D.z,at,Mt,Bt,St,Tt,he),z.pixelStorei(z.UNPACK_ROW_LENGTH,Yt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Oe),z.pixelStorei(z.UNPACK_SKIP_ROWS,ce),z.pixelStorei(z.UNPACK_SKIP_IMAGES,cn),B===0&&k.generateMipmaps&&z.generateMipmap(zt),gt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),gt.unbindTexture()},this.resetState=function(){A=0,T=0,b=null,gt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===_u?"display-p3":"srgb",e.unpackColorSpace=ue.workingColorSpace===Rl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Je?Yr:am}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Yr?Je:Vi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},nu=class extends ko{};nu.prototype.isWebGL1Renderer=!0;var wl=class extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var $r=class extends dr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Gp=new H,Wp=new H,Xp=new Xe,Lh=new Bo,tl=new Jr,iu=class extends Gn{constructor(t=new wn,e=new $r){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Gp.fromBufferAttribute(e,i-1),Wp.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Gp.distanceTo(Wp);t.setAttribute("lineDistance",new En(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(i),tl.radius+=s,t.ray.intersectsSphere(tl)===!1)return;Xp.copy(i).invert(),Lh.copy(t.ray).applyMatrix4(Xp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new H,h=new H,u=new H,f=new H,d=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){let p=Math.max(0,a.start),y=Math.min(_.count,a.start+a.count);for(let x=p,E=y-1;x<E;x+=d){let A=_.getX(x),T=_.getX(x+1);if(c.fromBufferAttribute(m,A),h.fromBufferAttribute(m,T),Lh.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let I=t.ray.origin.distanceTo(f);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let x=p,E=y-1;x<E;x+=d){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Lh.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},qp=new H,Yp=new H,qs=class extends iu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)qp.fromBufferAttribute(e,i),Yp.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qp.distanceTo(Yp);t.setAttribute("lineDistance",new En(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ru=class extends dr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zp=new Xe,su=new Bo,el=new Jr,nl=new H,Tl=class extends Gn{constructor(t=new wn,e=new ru){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(i),el.radius+=s,t.ray.intersectsSphere(el)===!1)return;Zp.copy(i).invert(),su.copy(t.ray).applyMatrix4(Zp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,g=d;_<g;_++){let m=c.getX(_);nl.fromBufferAttribute(u,m),Jp(nl,m,l,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=f,g=d;_<g;_++)nl.fromBufferAttribute(u,_),Jp(nl,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Jp(r,t,e,n,i,s,a){let o=su.distanceSqToPoint(r);if(o<e){let l=new H;su.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}function il(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function SS(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ys=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ou=class extends Ys{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jd,endingEnd:jd}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case tp:s=t,o=2*e-n;break;case ep:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tp:a=t,l=2*n-e;break;case ep:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,y=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,x=(-1-d)*m+(1.5+d)*g+.5*_,E=d*m-d*g;for(let A=0;A!==o;++A)s[A]=p*a[h+A]+y*a[c+A]+x*a[l+A]+E*a[u+A];return s}},au=class extends Ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*u+a[l+f]*h;return s}},lu=class extends Ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ui=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=il(e,this.TimeBufferType),this.values=il(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:il(t.times,Array),values:il(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new lu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new au(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ou(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case sl:e=this.InterpolantFactoryMethodDiscrete;break;case ol:e=this.InterpolantFactoryMethodLinear;break;case oh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sl;case this.InterpolantFactoryMethodLinear:return ol;case this.InterpolantFactoryMethodSmooth:return oh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&SS(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===oh,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[f+_]||g!==e[d+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=ol;var Kr=class extends ui{};Kr.prototype.ValueTypeName="bool";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=sl;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var cu=class extends ui{};cu.prototype.ValueTypeName="color";var hu=class extends ui{};hu.prototype.ValueTypeName="number";var uu=class extends Ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)fr.slerpFlat(s,0,a,c-o,a,c,l);return s}},Vo=class extends ui{InterpolantFactoryMethodLinear(t){return new uu(this.times,this.values,this.getValueSize(),t)}};Vo.prototype.ValueTypeName="quaternion";Vo.prototype.DefaultInterpolation=ol;Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends ui{};Qr.prototype.ValueTypeName="string";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=sl;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var fu=class extends ui{};fu.prototype.ValueTypeName="vector";var du=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}},bS=new du,pu=class{constructor(t){this.manager=t!==void 0?t:bS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};pu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Al=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$p(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=$p();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function $p(){return(typeof performance=="undefined"?Date:performance).now()}var vu="\\[\\]\\.:\\/",ES=new RegExp("["+vu+"]","g"),yu="[^"+vu+"]",wS="[^"+vu.replace("\\.","")+"]",TS=/((?:WC+[\/:])*)/.source.replace("WC",yu),AS=/(WCOD+)?/.source.replace("WCOD",wS),CS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yu),RS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yu),PS=new RegExp("^"+TS+AS+CS+RS+"$"),LS=["material","materials","bones","map"],mu=class{constructor(t,e,n){let i=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ES,"")}static parseTrackName(t){let e=PS.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);LS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=mu;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rb=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var xm=`
vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 mod289(vec4 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x){ return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

// Ridged multifractal \u2014 the sharp, chiselled alpine silhouette the hero needs.
// Plain fBm gives rolling hills; folding each octave around zero and inverting
// turns the zero-crossings into knife-edge ridgelines instead.
float ridged(vec2 p, int octaves){
  float sum = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  float prev = 1.0;
  for (int i = 0; i < 8; i++) {
    if (i >= octaves) break;
    float n = 1.0 - abs(snoise(vec3(p * freq, 0.0)));
    n *= n;
    n *= prev;
    prev = n;
    sum += n * amp;
    freq *= 2.03;
    amp *= 0.5;
  }
  return sum;
}
`;function vm(){let r=new an,t={uTime:{value:0},uOpacity:{value:1},uAmp:{value:30},uFogColor:{value:new Xt("#050a16")},uDeep:{value:new Xt("#071c46")},uMid:{value:new Xt("#1a5cb4")},uRock:{value:new Xt("#0a1428")},uPeak:{value:new Xt("#f2c8a0")}},e=`
    ${xm}

    uniform float uTime;
    uniform float uAmp;

    varying float vHeight;
    varying vec3 vNormalW;
    varying vec3 vWorld;

    float terrainHeight(vec2 p){
      // Two overlaid ridged fields: a coarse one carving the primary massif and
      // a finer, faster one adding the scree detail that reads at close range.
      // The base frequency is deliberately low \u2014 higher values shatter the
      // range into a field of identical spikes instead of a few big massifs.
      float h = ridged(p * 0.0125, 5);
      h += ridged(p * 0.05 + 41.3, 3) * 0.20;
      // Flatten the far foreground into a valley floor so the peaks read as
      // a distinct range rather than a uniform field of noise.
      float valley = smoothstep(0.0, 55.0, abs(p.y + 40.0));
      return h * uAmp * mix(0.18, 1.0, valley);
    }

    void main(){
      vec3 pos = position;
      vec2 p = vec2(pos.x, pos.y);

      float h = terrainHeight(p);
      pos.z = h;

      // Central differences give us normals without a second geometry pass.
      float e = 1.2;
      float hx = terrainHeight(p + vec2(e, 0.0));
      float hy = terrainHeight(p + vec2(0.0, e));
      vec3 tanX = normalize(vec3(e, 0.0, hx - h));
      vec3 tanY = normalize(vec3(0.0, e, hy - h));
      vec3 n = normalize(cross(tanX, tanY));

      vHeight = h;
      vec4 world = modelMatrix * vec4(pos, 1.0);
      vWorld = world.xyz;
      vNormalW = normalize(mat3(modelMatrix) * n);

      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `,n=`
    uniform vec3 uFogColor;
    uniform vec3 uDeep;
    uniform vec3 uMid;
    uniform vec3 uRock;
    uniform vec3 uPeak;
    uniform float uAmp;
    uniform float uOpacity;

    varying float vHeight;
    varying vec3 vNormalW;
    varying vec3 vWorld;

    void main(){
      vec3 n = normalize(vNormalW);

      // Low sun raking in from the upper right \u2014 the only warm light in the scene.
      vec3 sunDir = normalize(vec3(0.55, 0.30, 0.78));
      float sun = max(dot(n, sunDir), 0.0);

      // Sky fill from straight above, tinted the same blue as the atmosphere.
      float sky = max(dot(n, vec3(0.0, 1.0, 0.0)), 0.0);

      float alt = clamp(vHeight / (uAmp * 0.72), 0.0, 1.0);

      vec3 col = mix(uDeep, uRock, smoothstep(0.02, 0.4, alt));
      col = mix(col, uMid * 0.55, sky * 0.5);

      // Warm light is rationed hard: only the highest, most sun-facing faces
      // get it, which is what keeps the range reading blue overall.
      float rim = smoothstep(0.62, 0.99, alt) * smoothstep(0.42, 0.92, sun);
      col = mix(col, uPeak, rim * 0.82);

      // A cold blue bounce keeps the shadow sides from going flat black.
      col += uMid * pow(1.0 - sun, 2.0) * 0.20;

      // Exponential-squared depth haze dissolves the far ranges into the sky.
      float dist = length(vWorld - cameraPosition);
      float fogAmt = 1.0 - exp(-pow(dist * 0.0088, 2.0));
      // Valleys hold more mist than ridges.
      fogAmt = clamp(fogAmt + (1.0 - alt) * 0.26, 0.0, 1.0);
      vec3 haze = mix(uFogColor, uMid * 0.62, 0.6);
      col = mix(col, haze, fogAmt);

      gl_FragColor = vec4(col, uOpacity);
    }
  `,i=new pr(700,520,300,230),s=new ln({uniforms:t,vertexShader:e,fragmentShader:n,transparent:!0}),a=new Sn(i,s);a.rotation.x=-Math.PI/2,a.position.y=-14,r.add(a);let o=new pr(900,320),l=new ln({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Xt("#2f7fd8")},uOpacity:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 uColor; uniform float uOpacity; varying vec2 vUv;
      void main(){
        float v = smoothstep(0.0, 0.55, vUv.y) * (1.0 - smoothstep(0.35, 1.0, vUv.y));
        float h = smoothstep(0.0, 0.3, vUv.x) * (1.0 - smoothstep(0.7, 1.0, vUv.x));
        gl_FragColor = vec4(uColor, v * h * 0.8 * uOpacity);
      }
    `}),c=new Sn(o,l);return c.position.set(0,30,-240),r.add(c),{group:r,uniforms:t,setOpacity(h){t.uOpacity.value=h,l.uniforms.uOpacity.value=h},update(h){t.uTime.value=h}}}function ym({cols:r=130,rows:t=130,spacing:e=3.4}={}){let n=new an,i=o=>{let l=r*t,c=new Float32Array(l*3),h=new Float32Array(l),u=0;for(let g=0;g<t;g++)for(let m=0;m<r;m++)c[u*3]=(m-r/2)*e,c[u*3+1]=0,c[u*3+2]=(g-t/2)*e,h[u]=Math.random(),u++;let f=new wn;f.setAttribute("position",new bn(c,3)),f.setAttribute("aSeed",new bn(h,1));let d=new ln({transparent:!0,depthWrite:!1,blending:ki,uniforms:{uTime:{value:0},uColor:{value:new Xt("#7fb4ff")},uOpacity:{value:1},uFlip:{value:o}},vertexShader:`
        attribute float aSeed;
        uniform float uTime;
        uniform float uFlip;
        varying float vFade;
        varying float vTwinkle;

        void main(){
          vec3 p = position;
          // Travelling swell across the lattice.
          float wave = sin(p.x * 0.055 + uTime * 0.45) * cos(p.z * 0.05 - uTime * 0.32);
          p.y += wave * 1.6 * uFlip;

          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          float dist = -mv.z;

          // Fade the lattice out at both extremes so it has no visible edge.
          vFade = smoothstep(230.0, 70.0, dist) * smoothstep(1.0, 14.0, dist);
          vTwinkle = 0.6 + 0.4 * sin(uTime * 1.6 + aSeed * 40.0);

          gl_PointSize = (190.0 / max(dist, 1.0)) * (0.7 + aSeed * 0.8);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vFade;
        varying float vTwinkle;

        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.06, d);
          gl_FragColor = vec4(uColor, a * vFade * vTwinkle * uOpacity);
        }
      `});return{pts:new Tl(f,d),mat:d}},s=i(1);s.pts.position.y=-18,n.add(s.pts);let a=i(-1);return a.pts.position.y=26,n.add(a.pts),{group:n,setOpacity(o){s.mat.uniforms.uOpacity.value=o,a.mat.uniforms.uOpacity.value=o*.7},update(o){s.mat.uniforms.uTime.value=o,a.mat.uniforms.uTime.value=o*.8}}}var IS=new Xt("#3d9bff");function DS({radius:r=1,height:t=2.6,hoops:e=13,ribs:n=40,spokes:i=24}){let s=[],a=t/2,o=(h,u,f=r)=>[Math.cos(h)*f,u,Math.sin(h)*f];for(let h=0;h<e;h++){let u=h/(e-1),f=-a+u*t,d=Math.abs(u-.3)<.035||Math.abs(u-.7)<.035,_=r*(d?1.045:1);for(let g=0;g<n;g++){let m=g/n*Math.PI*2,p=(g+1)/n*Math.PI*2;s.push(...o(m,f,_),...o(p,f,_))}}for(let h=0;h<n;h++){let u=h/n*Math.PI*2;s.push(...o(u,-a),...o(u,a))}for(let h of[-a,a]){for(let u=0;u<i;u++){let f=u/i*Math.PI*2;s.push(0,h,0,...o(f,h))}for(let u=0;u<n;u++){let f=u/n*Math.PI*2,d=(u+1)/n*Math.PI*2;s.push(...o(f,h,r*.42),...o(d,h,r*.42))}}let l=new wn;l.setAttribute("position",new En(s,3));let c=new $r({color:IS,transparent:!0,opacity:.85,blending:ki,depthWrite:!1});return new qs(l,c)}function US(){let r=new ln({transparent:!0,depthWrite:!1,blending:ki,uniforms:{uColor:{value:new Xt("#63c0ff")},uOpacity:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 uColor; uniform float uOpacity; varying vec2 vUv;
      void main(){
        float d = length(vUv - 0.5) * 2.0;
        float a = pow(max(1.0 - d, 0.0), 3.2);
        gl_FragColor = vec4(uColor, a * uOpacity);
      }
    `}),t=new Sn(new pr(3.2,3.2),r);return t.userData.mat=r,t}function Mm(){let r=new an,e=[{pos:[-10,-4,4],rot:[1.28,.35,.62],scale:2.6,spin:.07},{pos:[-3.5,2.6,-1],rot:[-1.05,.9,.3],scale:1.8,spin:-.1},{pos:[4.2,-1.6,-8],rot:[1.42,-.4,1.05],scale:1.4,spin:.13},{pos:[-9,6.2,-14],rot:[.95,1.3,-.45],scale:1.15,spin:-.07},{pos:[7.5,5,-20],rot:[-1.3,.25,1.35],scale:.95,spin:.09}].map(n=>{let i=new an;i.position.set(...n.pos),i.rotation.set(...n.rot),i.scale.setScalar(n.scale);let s=DS({});i.add(s);let a=US();return a.position.set(0,-1.3,0),a.rotation.x=-Math.PI/2,i.add(a),r.add(i),{holder:i,drum:s,glow:a,cfg:n}});return{group:r,setOpacity(n){e.forEach(({drum:i,glow:s})=>{i.material.opacity=.85*n,s.userData.mat.uniforms.uOpacity.value=n})},update(n,i){e.forEach(({holder:s,cfg:a},o)=>{s.rotation.y=a.rot[1]+n*a.spin*.3+i*Math.PI*.55*(o%2?-1:1),s.rotation.x=a.rot[0]+Math.sin(n*.3+o)*.07+i*.22,s.rotation.z=a.rot[2]+Math.sin(n*.22+o*2.1)*.05,s.position.y=a.pos[1]+Math.sin(n*.5+o*1.7)*.3-i*2.2*(.4+o*.15),s.position.z=a.pos[2]+i*7*(.5+o%3*.3)}),r.position.x=-i*1.6}}}var NS=new Xt("#2f8fff");function OS(r=2.6,t=4.2,e=.55,n=.62){let i=r/2,s=t/2,a=n/2;return[[-i,-s],[i,-s],[i,-s+e],[a,-s+e],[a,s-e],[i,s-e],[i,s],[-i,s],[-i,s-e],[-a,s-e],[-a,-s+e],[-i,-s+e]]}function FS(r,t=6){let e=OS(),n=e.length,i=[];for(let o=0;o<=t;o++){let l=o/t*r;for(let c=0;c<n;c++){let h=e[c],u=e[(c+1)%n];i.push(h[0],h[1],l,u[0],u[1],l)}}for(let o=0;o<n;o++){let l=e[o];i.push(l[0],l[1],0,l[0],l[1],r)}let s=new wn;s.setAttribute("position",new En(i,3));let a=new $r({color:NS,transparent:!0,opacity:.95,blending:ki,depthWrite:!1});return new qs(s,a)}function Sm(){let r=new an,e=[{pos:[-26,-14,-25],rot:[.1,.42,.35],scale:2.4,len:40},{pos:[10,-20,-60],rot:[-.09,-.36,1.15],scale:2.6,len:45},{pos:[-20,12,-95],rot:[.12,.48,-.45],scale:2.2,len:42},{pos:[24,6,-135],rot:[-.1,-.4,.85],scale:2.5,len:48},{pos:[-9,22,-175],rot:[.08,.33,.15],scale:2.1,len:45},{pos:[16,-9,-220],rot:[-.06,-.3,1.35],scale:2.3,len:50},{pos:[-24,-4,-265],rot:[.07,.38,-.2],scale:2.4,len:52}].map(n=>{let i=new an;i.position.set(...n.pos),i.rotation.set(...n.rot),i.scale.setScalar(n.scale);let s=FS(n.len);return i.add(s),r.add(i),{holder:i,mesh:s,cfg:n}});return{group:r,setOpacity(n){e.forEach(({mesh:i})=>{i.material.opacity=.95*n})},update(n,i){e.forEach(({holder:s,cfg:a},o)=>{s.position.z=a.pos[2]+i*(90+o*6),s.position.y=a.pos[1]+Math.sin(n*.35+o*1.3)*.5,s.rotation.z=a.rot[2]+i*.4*(o%2?-1:1),s.rotation.y=a.rot[1]+Math.sin(n*.2+o)*.03}),r.rotation.z=i*.1}}}var ei=(r,t,e)=>r+(t-r)*e,BS=(r,t=0,e=1)=>Math.min(e,Math.max(t,r)),bm=(r,t,e)=>{let n=BS((e-r)/(t-r));return n*n*(3-2*n)};function Em(r){let t=new ko({canvas:r,antialias:window.devicePixelRatio<2,powerPreference:"high-performance"});t.setClearColor(330262,1);let e=new wl,n=new Mn(52,1,.1,900),i=vm(),s=ym(),a=Mm(),o=Sm();e.add(i.group,s.group,a.group,o.group);let l={terrain:1,dots:0,barrels:0,beams:0},c={terrain:1,dots:0,barrels:0,beams:0},h={hero:0,statement:0,oil:0,metals:0},u="hero",f={x:0,y:0,tx:0,ty:0};window.addEventListener("pointermove",A=>{f.tx=(A.clientX/window.innerWidth-.5)*2,f.ty=(A.clientY/window.innerHeight-.5)*2},{passive:!0});function d(){let A=window.innerWidth,T=window.innerHeight;t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),t.setSize(A,T,!1),n.aspect=A/T,n.updateProjectionMatrix()}window.addEventListener("resize",d),d();let _=new H(0,30,150),g=new H(0,6,-120),m=new H(0,6,-120);n.position.copy(_);function p(){let A=f.x,T=f.y;if(u==="hero"){let I=h.hero;_.set(A*3,ei(24,2,I)+T*-1.6,ei(140,34,I)),g.set(0,ei(2,14,I),-140),i.uniforms.uAmp.value=ei(40,44,I);return}if(u==="oil"){let I=h.oil;_.set(A*2.2+1.2,T*-1.8+ei(1.6,-1.4,I),ei(30,21,I)),g.set(-.8,0,0);return}if(u==="metals"){let I=h.metals;_.set(A*1.8,T*-1.4+ei(1,-.6,I),28),g.set(0,0,-60);return}let b=u==="statement"?h.statement:1;_.set(A*2.2,T*-1.8+ei(2,0,b),ei(34,26,b)),g.set(0,0,0)}let y=new Al,x=0;function E(){let A=y.getElapsedTime(),T=Math.min(Math.max(A-x,.001),.1);x=A;let b=1-Math.pow(.001,T);f.x=ei(f.x,f.tx,b*.35),f.y=ei(f.y,f.ty,b*.35),c.terrain=1-bm(.25,.85,h.hero),c.dots=Math.max(bm(.35,.9,h.hero),u==="hero"?0:1),c.barrels=u==="oil"?1:0,c.beams=u==="metals"?1:0;for(let I of Object.keys(l))l[I]=ei(l[I],c[I],b*2.4);i.group.visible=l.terrain>.004,s.group.visible=l.dots>.004,a.group.visible=l.barrels>.004,o.group.visible=l.beams>.004,i.setOpacity(l.terrain),i.update(A),s.update(A),s.setOpacity(l.dots),a.update(A,h.oil),a.setOpacity(l.barrels),o.update(A,h.metals),o.setOpacity(l.beams),p(),n.position.lerp(_,b*1.8),m.lerp(g,b*1.8),n.lookAt(m),t.render(e,n),requestAnimationFrame(E)}return requestAnimationFrame(E),{progress:h,setSection(A){u=A}}}var Ll=[{name:"Crude Oil",body:"Meridian is committed to ensuring the seamless and efficient movement of crude oil from producing regions to refining centres, chartering tonnage and managing storage across every major basin."},{name:"Marine Fuels",body:"Our bunkering operations are active in the world's principal ports, supplying compliant, quality-assured fuel to shipowners and operators around the clock."},{name:"LPG",body:"We play a key role in global LPG trade, transporting large volumes on Very Large Gas Carriers and pressurised tonnage into fast-growing demand centres."},{name:"Gas & Power",body:"From natural gas through to electricity, we structure and deliver energy solutions that keep industry, utilities and infrastructure running reliably."},{name:"Petrochemicals",body:"We trade the aromatics, olefins and polymers that sit at the base of modern manufacturing, connecting producers with converters worldwide."},{name:"Naphtha",body:"We specialise in trading various naphtha grades for both petrochemical feedstock and gasoline blending applications across Europe, Asia and the Middle East."},{name:"Low Carbon",body:"We are developing a strategy to accelerate the energy transition \u2014 investing in biofuels, carbon markets and the lower-emission molecules that follow."}],Il=[{name:"Ferro Alloys",body:"We supply the ferro alloys that underpin global steelmaking, moving silicon, manganese and chrome units from smelter to mill on long-term contract."},{name:"Dry Bulk",body:"Our dry bulk desk moves iron ore, coal and bauxite at scale, matching cargo to tonnage across every major freight route in the world."},{name:"Base Metals",body:"Base metals such as copper, aluminium, zinc and nickel are essential for a wide range of industrial applications and for the energy transition itself."}];_i.registerPlugin(Jt);var Js=(r,t=0,e=1)=>Math.min(e,Math.max(t,r)),ts=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function zS(r){let s="",a=0,o=[];for(let l=0;l<9;l++){let c=4-Math.abs(l-4);for(let h=-c;h<=c;h++){let u=60+h*12,f=60+(l-8/2)*12,d=Math.hypot(u-60,f-60);a=Math.max(a,d),o.push({x:u,y:f,d})}}for(let{x:l,y:c,d:h}of o){let u=(1.15+(1-h/a)*1.85).toFixed(2),f=(.42+(1-h/a)*.58).toFixed(2);s+=`<circle cx="${l}" cy="${c}" r="${u}" opacity="${f}"/>`}r.innerHTML=s}document.querySelectorAll(".mark-dots").forEach(zS);function kS(r){let t=r.textContent.trim(),e=t.split(/\s+/);r.textContent="";let n=[];return e.forEach((i,s)=>{let a=document.createElement("span");a.className="word";for(let o of i){let l=document.createElement("span");l.className="char",l.textContent=o,a.appendChild(l),n.push(l)}r.appendChild(a),s<e.length-1&&r.appendChild(document.createTextNode(" "))}),r.setAttribute("aria-label",t),n}document.querySelectorAll("[data-split]").forEach(r=>{r._chars=kS(r)});function Tm(r,t){let e=document.getElementById(r);return t.map((i,s)=>{let a=document.createElement("article");return a.className="product-panel",a.innerHTML=`
      <span class="panel-index">${String(s+1).padStart(2,"0")} / ${String(t.length).padStart(2,"0")}</span>
      <h3></h3>
      <p></p>`,a.querySelector("h3").textContent=i.name,a.querySelector("p").textContent=i.body,e.appendChild(a),a})}function Am(r,t){let e=document.getElementById(r),n=[];for(let i=0;i<t;i++){let s=document.createElement("span");s.className="tick",e.appendChild(s),n.push(s)}return n}var VS=Tm("oil-stack",Ll),HS=Tm("metals-stack",Il),GS=Am("oil-progress",Ll.length),WS=Am("metals-progress",Il.length);function Cm(r,t){let e=document.getElementById(r);e.style.height=`${100+t*85}vh`}Cm("oil",Ll.length);Cm("metals",Il.length);function Rm(r,t,e,n=.16){let i=r.length,s=Js((e-n)/(1-n)),a=1/i;r.forEach((l,c)=>{let h=(s-c*a)/a,u=0,f=40,d=8;if(h>-.55&&h<1.55){let _=Js((h+.12)/.3),g=1-Js((h-.72)/.3);u=Js(Math.min(_,g)),f=(1-_)*42-(1-g)*34,d=(1-u)*9}l.style.opacity=u.toFixed(3),l.style.transform=`translate3d(0, ${f.toFixed(2)}px, 0)`,l.style.filter=ts?"none":`blur(${d.toFixed(2)}px)`});let o=Js(Math.floor(s*i),0,i-1);t.forEach((l,c)=>l.classList.toggle("is-on",c===o&&s>.001))}var jr=Em(document.getElementById("gl")),Un={hero:document.getElementById("hero"),statement:document.getElementById("statement"),oil:document.getElementById("oil"),metals:document.getElementById("metals"),closing:document.getElementById("closing")};function Dl(r,t,e="bottom bottom"){Jt.create({trigger:r,start:"top top",end:e,onUpdate:n=>t(n.progress),onLeave:()=>t(1),onLeaveBack:()=>t(0),onRefresh:n=>t(n.progress)})}Dl(Un.hero,r=>{jr.progress.hero=r},"bottom top");function Mu(r,t){let e=r.querySelector(".pin");e.style.opacity=(1-Js((t-.93)/.07)).toFixed(3)}Dl(Un.statement,r=>{jr.progress.statement=r,Mu(Un.statement,r)});Dl(Un.oil,r=>{jr.progress.oil=r,Rm(VS,GS,r),Mu(Un.oil,r)});Dl(Un.metals,r=>{jr.progress.metals=r,Rm(HS,WS,r),Mu(Un.metals,r)});Object.entries(Un).forEach(([r,t])=>{Jt.create({trigger:t,start:"top 55%",end:"bottom 55%",onEnter:()=>jr.setSection(r),onEnterBack:()=>jr.setSection(r),onRefresh:e=>{e.isActive&&jr.setSection(r)}})});_i.to(".hero-inner",{scrollTrigger:{trigger:Un.hero,start:"top top",end:"bottom top",scrub:.5},y:-90,opacity:0,filter:ts?"none":"blur(12px)",ease:"none"});_i.to(".hero-cue",{scrollTrigger:{trigger:Un.hero,start:"top top",end:"25% top",scrub:.5},opacity:0,ease:"none"});function Su(r,t,e={}){var i,s;let n=r._chars;n&&(_i.set(n,{opacity:.06,yPercent:60,filter:ts?"none":"blur(10px)"}),_i.to(n,{scrollTrigger:{trigger:t,start:e.start||"top 75%",end:e.end||"top 15%",scrub:(i=e.scrub)!=null?i:.7},opacity:1,yPercent:0,filter:"blur(0px)",ease:"power2.out",stagger:{each:(s=e.each)!=null?s:.012,from:"start"}}))}Su(document.querySelector(".statement-head"),Un.statement,{start:"top top",end:"45% top",each:.01});_i.from(".statement-body",{scrollTrigger:{trigger:Un.statement,start:"40% top",end:"75% top",scrub:.7},y:46,opacity:0,filter:ts?"none":"blur(8px)",ease:"none"});document.querySelectorAll(".product-section").forEach(r=>{let t=r.querySelector(".product-title");Su(t,r,{start:"top top",end:"14% top",each:.035}),_i.from(r.querySelectorAll(".eyebrow, .product-intro"),{scrollTrigger:{trigger:r,start:"top top",end:"16% top",scrub:.6},y:26,opacity:0,filter:ts?"none":"blur(6px)",stagger:.1,ease:"none"})});Su(document.querySelector(".closing-head"),Un.closing,{start:"top 80%",end:"center 55%",each:.018});document.querySelectorAll("[data-count]").forEach(r=>{let t=Number(r.dataset.count),e={v:0};_i.to(e,{scrollTrigger:{trigger:Un.statement,start:"45% top",end:"80% top",scrub:.8},v:t,ease:"none",onUpdate:()=>{r.textContent=Math.round(e.v)}})});var XS=document.getElementById("nav"),Pm=document.getElementById("to-top");Jt.create({start:"top -80",end:99999,onToggle:r=>{XS.classList.toggle("is-solid",r.isActive),Pm.classList.toggle("is-on",r.isActive)}});Pm.addEventListener("click",()=>{window.scrollTo({top:0,behavior:ts?"auto":"smooth"})});document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",t=>{let e=r.getAttribute("href");if(e.length<2)return;let n=document.querySelector(e);n&&(t.preventDefault(),window.scrollTo({top:n.offsetTop,behavior:ts?"auto":"smooth"}))})});var wm;window.addEventListener("resize",()=>{clearTimeout(wm),wm=setTimeout(()=>Jt.refresh(),220)});window.addEventListener("load",()=>Jt.refresh());document.documentElement.classList.add("is-ready");})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
