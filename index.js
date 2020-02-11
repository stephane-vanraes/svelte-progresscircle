!function(){"use strict";function e(){}const t=e=>e;function n(e,t){for(const n in t)e[n]=t[n];return e}function s(e){return e()}function r(){return Object.create(null)}function a(e){e.forEach(s)}function l(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(t,n,s){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const s=t.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function u(e,t,s,r){return e[1]&&r?n(s.ctx.slice(),e[1](r(t))):s.ctx}const i="undefined"!=typeof window;let p=i?()=>window.performance.now():()=>Date.now(),f=i?e=>requestAnimationFrame(e):e;const $=new Set;function v(e){$.forEach(t=>{t.c(e)||($.delete(t),t.f())}),0!==$.size&&f(v)}function d(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function h(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function y(e){return document.createTextNode(e)}function k(){return y(" ")}function b(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function C(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e,t){t=""+t,e.data!==t&&(e.data=t)}function A(e,t,n,s){e.style.setProperty(t,n,s?"important":"")}let F;function E(e){F=e}const M=[],P=[],_=[],D=[],S=Promise.resolve();let j=!1;function O(e){_.push(e)}let T=!1;const B=new Set;function I(){if(!T){T=!0;do{for(let e=0;e<M.length;e+=1){const t=M[e];E(t),L(t.$$)}for(M.length=0;P.length;)P.pop()();for(let e=0;e<_.length;e+=1){const t=_[e];B.has(t)||(B.add(t),t())}_.length=0}while(M.length);for(;D.length;)D.pop()();j=!1,T=!1,B.clear()}}function L(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const N=new Set;function V(e,t){e&&e.i&&(N.delete(e),e.i(t))}function q(e,t,n,s){if(e&&e.o){if(N.has(e))return;N.add(e),(void 0).c.push(()=>{N.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function z(e){e&&e.c()}function U(e,t,n){const{fragment:r,on_mount:o,on_destroy:c,after_update:u}=e.$$;r&&r.m(t,n),O(()=>{const t=o.map(s).filter(l);c?c.push(...t):a(t),e.$$.on_mount=[]}),u.forEach(O)}function G(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function H(e,t){-1===e.$$.dirty[0]&&(M.push(e),j||(j=!0,S.then(I)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(t,n,s,l,o,c,u=[-1]){const i=F;E(t);const p=n.props||{},f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:o,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:r(),dirty:u};let $=!1;f.ctx=s?s(t,p,(e,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&o(f.ctx[e],f.ctx[e]=r)&&(f.bound[e]&&f.bound[e](r),$&&H(t,e)),n}):[],f.update(),$=!0,a(f.before_update),f.fragment=!!l&&l(f.ctx),n.target&&(n.hydrate?f.fragment&&f.fragment.l(function(e){return Array.from(e.childNodes)}(n.target)):f.fragment&&f.fragment.c(),n.intro&&V(t.$$.fragment),U(t,n.target,n.anchor),I()),E(i)}class K{$destroy(){G(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}const Q=[];function R(e){return"[object Date]"===Object.prototype.toString.call(e)}function W(e,t){if(e===t||e!=e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const n=t.map((t,n)=>W(e[n],t));return e=>n.map(t=>t(e))}if("object"===n){if(!e||!t)throw new Error("Object cannot be null");if(R(e)&&R(t)){e=e.getTime();const n=(t=t.getTime())-e;return t=>new Date(e+t*n)}const n=Object.keys(t),s={};return n.forEach(n=>{s[n]=W(e[n],t[n])}),e=>{const t={};return n.forEach(n=>{t[n]=s[n](e)}),t}}if("number"===n){const n=t-e;return t=>e+t*n}throw new Error(`Cannot interpolate ${n} values`)}function X(s,r={}){const a=function(t,n=e){let s;const r=[];function a(e){if(o(t,e)&&(t=e,s)){const e=!Q.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),Q.push(n,t)}if(e){for(let e=0;e<Q.length;e+=2)Q[e][0](Q[e+1]);Q.length=0}}}return{set:a,update:function(e){a(e(t))},subscribe:function(l,o=e){const c=[l,o];return r.push(c),1===r.length&&(s=n(a)||e),l(t),()=>{const e=r.indexOf(c);-1!==e&&r.splice(e,1),0===r.length&&(s(),s=null)}}}}(s);let l,c=s;function u(e,o){if(null==s)return a.set(s=e),Promise.resolve();c=e;let u=l,i=!1,{delay:d=0,duration:m=400,easing:x=t,interpolate:g=W}=n(n({},r),o);const h=p()+d;let y;return l=function(e){let t;return 0===$.size&&f(v),{promise:new Promise(n=>{$.add(t={c:e,f:n})}),abort(){$.delete(t)}}}(t=>{if(t<h)return!0;i||(y=g(s,e),"function"==typeof m&&(m=m(s,e)),i=!0),u&&(u.abort(),u=null);const n=t-h;return n>m?(a.set(s=e),!1):(a.set(s=y(x(n/m))),!0)}),l.promise}return{set:u,update:(e,t)=>u(e(c,s),t),subscribe:a.subscribe}}function Y(e){let t,n,s,r,a,l,o,c,i,p;const f=e[4].default,$=function(e,t,n,s){if(e){const r=u(e,t,n,s);return e[0](r)}}(f,e,e[3],null);return{c(){t=g("div"),n=h("svg"),s=h("path"),r=h("path"),l=k(),o=g("div"),$||(c=g("span"),i=y(e[0])),$&&$.c(),C(s,"d","M50,5A45 45 0 1 1 49.9999 5"),C(s,"class","svelte-xa3f4e"),C(r,"d",a=e[1]()),C(r,"class","svelte-xa3f4e"),C(n,"viewBox","0 0 100 100"),C(n,"class","svelte-xa3f4e"),$||C(c,"class","svelte-xa3f4e"),C(o,"class","svelte-xa3f4e"),C(t,"class","svelte-xa3f4e")},m(e,a){m(e,t,a),d(t,n),d(n,s),d(n,r),d(t,l),d(t,o),$||(d(o,c),d(c,i)),$&&$.m(o,null),p=!0},p(e,[t]){(!p||2&t&&a!==(a=e[1]()))&&C(r,"d",a),$||(!p||1&t)&&w(i,e[0]),$&&$.p&&8&t&&$.p(u(f,e,e[3],null),function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if("object"==typeof t.dirty){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(f,e[3],t,null))},i(e){p||(V($,e),p=!0)},o(e){q($,e),p=!1},d(e){e&&x(t),$&&$.d(e)}}}function Z(e,t,n){let s,{value:r=0}=t,{max:a=100}=t,{$$slots:l={},$$scope:o}=t;return e.$set=e=>{"value"in e&&n(0,r=e.value),"max"in e&&n(2,a=e.max),"$$scope"in e&&n(3,o=e.$$scope)},e.$$.update=()=>{5&e.$$.dirty&&n(1,s=()=>{if(0===r)return"";if(r===a)return"M50,5A45 45 0 1 1 49.9999 5";{const e=2*Math.PI*(r/a),t=50+45*Math.cos(e-Math.PI/2),n=50+45*Math.sin(e-Math.PI/2);let s="M50,5";return e>Math.PI&&(s+="A45 45 0 0 1 50 95"),s+=`A45 45 0 0 1 ${t} ${n}`,s}})},[r,s,a,o,l]}class ee extends K{constructor(e){super(),J(this,e,Z,Y,o,{value:0,max:2})}}function te(e){let t,n,s;return{c(){t=g("span"),n=y(e[1]),s=y("/100"),C(t,"class","svelte-34naxk")},m(e,r){m(e,t,r),d(t,n),d(t,s)},p(e,t){2&t&&w(n,e[1])},d(e){e&&x(t)}}}function ne(e){let t,n,s;return{c(){t=g("span"),n=y(e[1]),s=y("%"),C(t,"class","svelte-34naxk")},m(e,r){m(e,t,r),d(t,n),d(t,s)},p(e,t){2&t&&w(n,e[1])},d(e){e&&x(t)}}}function se(e){let t,n,s;return{c(){t=g("span"),n=y(e[1]),s=g("span"),s.textContent="100",C(t,"class","svelte-34naxk"),C(s,"class","svelte-34naxk")},m(e,r){m(e,t,r),d(t,n),m(e,s,r)},p(e,t){2&t&&w(n,e[1])},d(e){e&&x(t),e&&x(s)}}}function re(e){let t,n,s,r,a=Math.floor(e[4])+"";return{c(){t=g("span"),n=y(a),s=k(),r=g("span"),r.textContent="tweened",C(t,"class","svelte-34naxk"),C(r,"class","svelte-34naxk")},m(e,a){m(e,t,a),d(t,n),m(e,s,a),m(e,r,a)},p(e,t){16&t&&a!==(a=Math.floor(e[4])+"")&&w(n,a)},d(e){e&&x(t),e&&x(s),e&&x(r)}}}function ae(e){let t,n,s=Math.floor(e[4])+"";return{c(){t=g("span"),n=y(s),C(t,"class","svelte-34naxk")},m(e,s){m(e,t,s),d(t,n)},p(e,t){16&t&&s!==(s=Math.floor(e[4])+"")&&w(n,s)},d(e){e&&x(t)}}}function le(e){let t,n,s=Math.floor(e[4])+"";return{c(){t=g("span"),n=y(s),C(t,"class","svelte-34naxk")},m(e,s){m(e,t,s),d(t,n)},p(e,t){16&t&&s!==(s=Math.floor(e[4])+"")&&w(n,s)},d(e){e&&x(t)}}}function oe(e){let t,n,s,r,l,o,c,u,i,p,f,$,v,h,y,w,F,E,M,P,_,D,S,j,O,T,B,I,L,N,H,J,K,Q,R,W,X,Y,Z,oe,ce,ue,ie,pe,fe,$e,ve,de,me,xe,ge,he,ye,ke,be,Ce,we,Ae,Fe,Ee,Me,Pe,_e,De,Se,je,Oe,Te,Be;const Ie=new ee({props:{max:"100",value:e[0]}}),Le=new ee({props:{max:"100",value:e[1],$$slots:{default:[te]},$$scope:{ctx:e}}}),Ne=new ee({props:{max:"100",value:e[1],$$slots:{default:[ne]},$$scope:{ctx:e}}}),Ve=new ee({props:{max:"100",value:e[1],$$slots:{default:[se]},$$scope:{ctx:e}}}),qe=new ee({props:{max:"100",value:e[2]}}),ze=new ee({props:{max:"100",value:e[2]}}),Ue=new ee({props:{max:"100",value:e[2]}}),Ge=new ee({props:{max:"100",value:e[4],$$slots:{default:[re]},$$scope:{ctx:e}}}),He=new ee({props:{max:"100",value:e[4],$$slots:{default:[ae]},$$scope:{ctx:e}}}),Je=new ee({props:{max:"100",value:e[4],$$slots:{default:[le]},$$scope:{ctx:e}}});return{c(){t=g("header"),t.innerHTML='<h1 class="svelte-34naxk">Svelte Progress Circle Image</h1> \n  <a href="https://github.com/stephane-vanraes/svelte-progresscircle" class="svelte-34naxk">Github</a>',n=k(),s=g("main"),r=g("h2"),r.textContent="Basic Usage",l=k(),o=g("pre"),o.textContent='<ProgressCircle max="100" value="{value1}" />',c=k(),u=g("div"),i=g("label"),p=g("span"),p.textContent="Change Value",f=k(),$=g("input"),v=k(),z(Ie.$$.fragment),h=k(),y=g("hr"),w=k(),F=g("h2"),F.textContent="Slotted Content",E=k(),M=g("pre"),M.textContent='\x3c!-- Actual styling is done with CSS --\x3e\r\n<ProgressCircle max="100" value="{value2">\r\n  <span>{value2}/100</span>\r\n<ProgressCircle>\r\n<ProgressCircle max="100" value="{value2}">\r\n  <span>{value2}%</span>\r\n</ProgressCircle>\r\n<ProgressCircle max="100" value="{value2}">\r\n  <span>{value2}</span>\r\n  <span>100</span>\r\n</ProgressCircle>',P=k(),_=g("div"),D=g("label"),S=g("span"),S.textContent="Change Value",j=k(),O=g("input"),T=k(),B=g("div"),z(Le.$$.fragment),I=k(),L=g("div"),z(Ne.$$.fragment),N=k(),H=g("div"),z(Ve.$$.fragment),J=k(),K=g("hr"),Q=k(),R=g("h2"),R.textContent="Overriding Styles Usage",W=k(),X=g("pre"),X.textContent=".sample-3a {\r\n  --progress-color: var(--primary);\r\n}\r\n.sample-3b {\r\n  --progress-color: #90D7FF;\r\n  --progress-trackcolor: #BFD0E0;\r\n  --progress-fill: #C9F9FF;\r\n}\r\n.sample-3c {\r\n  --progress-trackcolor: transparent;\r\n}",Y=k(),Z=g("div"),oe=g("label"),ce=g("span"),ce.textContent="Change Value",ue=k(),ie=g("input"),pe=k(),fe=g("div"),z(qe.$$.fragment),$e=k(),ve=g("div"),z(ze.$$.fragment),de=k(),me=g("div"),z(Ue.$$.fragment),xe=k(),ge=g("hr"),he=k(),ye=g("h2"),ye.textContent="Advanced Examples",ke=k(),be=g("pre"),be.textContent="let value4 = tweened(50, { duration: 400});\r\n\r\n$: progressColor = $value4 < 25 ? '#EF476F' : $value4 > 75 ? '#06D6A0' : '#FFD166';\r\n<div style=\"--progress-color: {progressColor}\">...</div>\r\n\r\n\r\n$: progressFillColor = $value4 < 25 ? '#F489A3' : $value4 > 75 ? '#60E4C2' : '#FFE5AB';\r\n<div class=\"sample-4c\" style=\"--progress-color: {progressColor}; --progress-fill: progressFillColor}\">\r\n.sample-4c <\r\n  --progress-trackcolor: transparent;\r\n  --progress-width: 3px;\r\n}",Ce=k(),we=g("div"),Ae=g("label"),Fe=g("span"),Fe.textContent="Change Value",Ee=k(),Me=g("input"),Pe=k(),_e=g("div"),z(Ge.$$.fragment),De=k(),Se=g("div"),z(He.$$.fragment),je=k(),Oe=g("div"),z(Je.$$.fragment),C(t,"class","svelte-34naxk"),C(r,"class","svelte-34naxk"),C(o,"class","svelte-34naxk"),C(p,"class","svelte-34naxk"),C($,"type","range"),C($,"min","0"),C($,"max","100"),$.value=e[0],C($,"class","svelte-34naxk"),C(i,"class","svelte-34naxk"),C(u,"class","samples svelte-34naxk"),C(y,"class","svelte-34naxk"),C(F,"class","svelte-34naxk"),C(M,"class","svelte-34naxk"),C(S,"class","svelte-34naxk"),C(O,"type","range"),C(O,"min","0"),C(O,"max","100"),O.value=e[1],C(O,"class","svelte-34naxk"),C(D,"class","svelte-34naxk"),C(B,"class","sample-2 svelte-34naxk"),C(L,"class","sample-2b svelte-34naxk"),C(H,"class","sample-2c svelte-34naxk"),C(_,"class","samples svelte-34naxk"),C(K,"class","svelte-34naxk"),C(R,"class","svelte-34naxk"),C(X,"class","svelte-34naxk"),C(ce,"class","svelte-34naxk"),C(ie,"type","range"),C(ie,"min","0"),C(ie,"max","100"),ie.value=e[2],C(ie,"class","svelte-34naxk"),C(oe,"class","svelte-34naxk"),C(fe,"class","sample-3a svelte-34naxk"),C(ve,"class","sample-3b svelte-34naxk"),C(me,"class","sample-3c svelte-34naxk"),C(Z,"class","samples svelte-34naxk"),C(ge,"class","svelte-34naxk"),C(ye,"class","svelte-34naxk"),C(be,"class","svelte-34naxk"),C(Fe,"class","svelte-34naxk"),C(Me,"type","range"),C(Me,"min","0"),C(Me,"max","100"),Me.value=e[4],C(Me,"class","svelte-34naxk"),C(Ae,"class","svelte-34naxk"),C(_e,"class","sample-4a svelte-34naxk"),C(Se,"class","sample-4b svelte-34naxk"),A(Se,"--progress-color",e[3]),C(Oe,"class","sample-4c svelte-34naxk"),A(Oe,"--progress-color",e[3]),A(Oe,"--progress-fill",e[5]),C(we,"class","samples svelte-34naxk"),C(s,"class","svelte-34naxk")},m(a,x){m(a,t,x),m(a,n,x),m(a,s,x),d(s,r),d(s,l),d(s,o),d(s,c),d(s,u),d(u,i),d(i,p),d(i,f),d(i,$),d(u,v),U(Ie,u,null),d(s,h),d(s,y),d(s,w),d(s,F),d(s,E),d(s,M),d(s,P),d(s,_),d(_,D),d(D,S),d(D,j),d(D,O),d(_,T),d(_,B),U(Le,B,null),d(_,I),d(_,L),U(Ne,L,null),d(_,N),d(_,H),U(Ve,H,null),d(s,J),d(s,K),d(s,Q),d(s,R),d(s,W),d(s,X),d(s,Y),d(s,Z),d(Z,oe),d(oe,ce),d(oe,ue),d(oe,ie),d(Z,pe),d(Z,fe),U(qe,fe,null),d(Z,$e),d(Z,ve),U(ze,ve,null),d(Z,de),d(Z,me),U(Ue,me,null),d(s,xe),d(s,ge),d(s,he),d(s,ye),d(s,ke),d(s,be),d(s,Ce),d(s,we),d(we,Ae),d(Ae,Fe),d(Ae,Ee),d(Ae,Me),d(we,Pe),d(we,_e),U(Ge,_e,null),d(we,De),d(we,Se),U(He,Se,null),d(we,je),d(we,Oe),U(Je,Oe,null),Te=!0,Be=[b($,"input",e[7]),b(O,"input",e[8]),b(ie,"input",e[9]),b(Me,"input",e[10])]},p(e,[t]){(!Te||1&t)&&($.value=e[0]);const n={};1&t&&(n.value=e[0]),Ie.$set(n),(!Te||2&t)&&(O.value=e[1]);const s={};2&t&&(s.value=e[1]),2050&t&&(s.$$scope={dirty:t,ctx:e}),Le.$set(s);const r={};2&t&&(r.value=e[1]),2050&t&&(r.$$scope={dirty:t,ctx:e}),Ne.$set(r);const a={};2&t&&(a.value=e[1]),2050&t&&(a.$$scope={dirty:t,ctx:e}),Ve.$set(a),(!Te||4&t)&&(ie.value=e[2]);const l={};4&t&&(l.value=e[2]),qe.$set(l);const o={};4&t&&(o.value=e[2]),ze.$set(o);const c={};4&t&&(c.value=e[2]),Ue.$set(c),(!Te||16&t)&&(Me.value=e[4]);const u={};16&t&&(u.value=e[4]),2064&t&&(u.$$scope={dirty:t,ctx:e}),Ge.$set(u);const i={};16&t&&(i.value=e[4]),2064&t&&(i.$$scope={dirty:t,ctx:e}),He.$set(i),(!Te||8&t)&&A(Se,"--progress-color",e[3]);const p={};16&t&&(p.value=e[4]),2064&t&&(p.$$scope={dirty:t,ctx:e}),Je.$set(p),(!Te||8&t)&&A(Oe,"--progress-color",e[3]),(!Te||32&t)&&A(Oe,"--progress-fill",e[5])},i(e){Te||(V(Ie.$$.fragment,e),V(Le.$$.fragment,e),V(Ne.$$.fragment,e),V(Ve.$$.fragment,e),V(qe.$$.fragment,e),V(ze.$$.fragment,e),V(Ue.$$.fragment,e),V(Ge.$$.fragment,e),V(He.$$.fragment,e),V(Je.$$.fragment,e),Te=!0)},o(e){q(Ie.$$.fragment,e),q(Le.$$.fragment,e),q(Ne.$$.fragment,e),q(Ve.$$.fragment,e),q(qe.$$.fragment,e),q(ze.$$.fragment,e),q(Ue.$$.fragment,e),q(Ge.$$.fragment,e),q(He.$$.fragment,e),q(Je.$$.fragment,e),Te=!1},d(e){e&&x(t),e&&x(n),e&&x(s),G(Ie),G(Le),G(Ne),G(Ve),G(qe),G(ze),G(Ue),G(Ge),G(He),G(Je),a(Be)}}}function ce(e,t,n){let s,r=50,a=50,l=50,o=X(50,{duration:400});c(e,o,e=>n(4,s=e));let u,i;return e.$$.update=()=>{16&e.$$.dirty&&n(3,u=s<25?"#EF476F":s>75?"#06D6A0":"#FFD166"),16&e.$$.dirty&&n(5,i=s<25?"#F489A3":s>75?"#60E4C2":"#FFE5AB")},[r,a,l,u,s,i,o,e=>n(0,r=e.currentTarget.value),e=>n(1,a=e.currentTarget.value),e=>n(2,l=e.currentTarget.value),e=>o.update(t=>parseInt(e.target.value))]}class ue extends K{constructor(e){super(),J(this,e,ce,oe,o,{})}}document.addEventListener("DOMContentLoaded",()=>{new ue({target:document.body})})}();