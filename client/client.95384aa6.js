function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,n,r,o){return e[1]&&o?t(r.ctx.slice(),e[1](o(n))):r.ctx}function c(e,t,n,r,o,s,i){const c=function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(t,r,o,s);if(c){const o=a(t,n,r,i);e.p(o,c)}}function l(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function u(e){return null==e?"":e}let f=!1;const d=new Set;function p(e,t){f&&d.delete(t),t.parentNode!==e&&e.appendChild(t)}function h(e,t,n){f&&d.delete(t),(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function m(e){f?d.add(e):e.parentNode&&e.parentNode.removeChild(e)}function g(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function v(){return b(" ")}function w(){return b("")}function _(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function E(e){return function(t){return t.preventDefault(),e.call(this,t)}}function S(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:S(e,r,t[r])}function A(e){return Array.from(e.childNodes)}function P(e,t,n,r){for(;e.length>0;){const r=e.shift();if(r.nodeName===t){let e=0;const t=[];for(;e<r.attributes.length;){const o=r.attributes[e++];n[o.name]||t.push(o.name)}for(let e=0;e<t.length;e++)r.removeAttribute(t[e]);return r}m(r)}return r?y(t):$(t)}function T(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return b(t)}function R(e){return T(e," ")}function I(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function L(e,t){e.value=null==t?"":t}let N,O;function k(){if(void 0===N){N=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){N=!0}}return N}function C(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=k();let o;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=_(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{o=_(n.contentWindow,"resize",t)}),p(e,n),()=>{(r||o&&n.contentWindow)&&o(),m(n)}}function U(e,t=document.body){return Array.from(t.querySelectorAll(e))}class j{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=$(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)h(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(m)}}function M(e){O=e}function D(){if(!O)throw new Error("Function called outside component initialization");return O}function H(e){D().$$.on_mount.push(e)}function q(e){D().$$.after_update.push(e)}function G(e){D().$$.on_destroy.push(e)}const B=[],J=[],z=[],K=[],V=Promise.resolve();let F=!1;function W(e){z.push(e)}let Y=!1;const Q=new Set;function X(){if(!Y){Y=!0;do{for(let e=0;e<B.length;e+=1){const t=B[e];M(t),Z(t.$$)}for(M(null),B.length=0;J.length;)J.pop()();for(let e=0;e<z.length;e+=1){const t=z[e];Q.has(t)||(Q.add(t),t())}z.length=0}while(B.length);for(;K.length;)K.pop()();F=!1,Y=!1,Q.clear()}}function Z(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}const ee=new Set;let te;function ne(){te={r:0,c:[],p:te}}function re(){te.r||o(te.c),te=te.p}function oe(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function se(e,t,n,r){if(e&&e.o){if(ee.has(e))return;ee.add(e),te.c.push((()=>{ee.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function ie(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const i=e[s],a=t[s];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)o[e]||(n[e]=a[e],o[e]=1);e[s]=a}else for(const e in i)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function ae(e){return"object"==typeof e&&null!==e?e:{}}function ce(e){e&&e.c()}function le(e,t){e&&e.l(t)}function ue(e,t,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),i||W((()=>{const t=c.map(n).filter(s);l?l.push(...t):o(t),e.$$.on_mount=[]})),u.forEach(W)}function fe(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(e,t){-1===e.$$.dirty[0]&&(B.push(e),F||(F=!0,V.then(X)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pe(t,n,s,i,a,c,l=[-1]){const u=O;M(t);const p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(p.ctx=s?s(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),h&&de(t,e)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),n.target){if(n.hydrate){f=!0;const e=A(n.target);p.fragment&&p.fragment.l(e),e.forEach(m)}else p.fragment&&p.fragment.c();n.intro&&oe(t.$$.fragment),ue(t,n.target,n.anchor,n.customElement),function(){f=!1;for(const e of d)e.parentNode.removeChild(e);d.clear()}(),X()}M(u)}class he{$destroy(){fe(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const me=[];function ge(t,n=e){let r;const o=[];function s(e){if(i(t,e)&&(t=e,r)){const e=!me.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),me.push(n,t)}if(e){for(let e=0;e<me.length;e+=2)me[e][0](me[e+1]);me.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,a=e){const c=[i,a];return o.push(c),1===o.length&&(r=n(s)||e),i(t),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}const $e={};var ye={owner:"tictactrip",repo:"upptime",sites:[{name:"Website",url:"https://www.tictactrip.eu"},{name:"Blog",url:"https://www.tictactrip.eu/blog"},{name:"API",url:"https://api.tictactrip.eu"}],assignees:["rimiti"],path:"https://tictactrip.github.io/upptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function be(t){let n,r,o,s,i;return{c(){n=$("nav"),r=$("div"),o=v(),s=$("ul"),i=v(),this.h()},l(e){n=P(e,"NAV",{class:!0});var t=A(n);r=P(t,"DIV",{class:!0});var a=A(r);o=R(a),s=P(a,"UL",{class:!0});var c=A(s);i=R(c),c.forEach(m),a.forEach(m),t.forEach(m),this.h()},h(){S(s,"class","svelte-a08hsz"),S(r,"class","container svelte-a08hsz"),S(n,"class","svelte-a08hsz")},m(e,t){h(e,n,t),p(n,r),p(r,o),p(r,s),p(s,i)},p(e,[t]){},i:e,o:e,d(e){e&&m(n)}}}function ve(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class we extends he{constructor(e){super(),pe(this,e,ve,be,i,{segment:0})}}var _e={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ee(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Se(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xe(e,t){var n,r,o,s,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=_e[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function p(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");o=a.exec(e);)r=e.substring(f,o.index),f=a.lastIndex,n=o[0],r.match(/[^\\](\\\\)*\\$/)||((i=o[3]||o[4])?n='<pre class="code '+(o[4]?"poetry":o[2].toLowerCase())+'"><code'+(o[2]?' class="language-'+o[2].toLowerCase()+'"':"")+">"+Ee(Se(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=o[6])?(i.match(/\./)&&(o[5]=o[5].replace(/^\d+/gm,"")),s=xe(Ee(o[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",s=s.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+s+"</"+i+">"):o[8]?n='<img src="'+Se(o[8])+'" alt="'+Se(o[7])+'">':o[10]?(l=l.replace("<a>",'<a href="'+Se(o[11]||u[r.toLowerCase()])+'">'),n=p()+"</a>"):o[9]?n="<a>":o[12]||o[14]?n="<"+(i="h"+(o[14]?o[14].length:o[13]>"="?1:2))+">"+xe(o[12]||o[15],u)+"</"+i+">":o[16]?n="<code>"+Se(o[16])+"</code>":(o[17]||o[1])&&(n=d(o[17]||"--"))),l+=r,l+=n;return(l+e.substring(f)+p()).replace(/^\n+|\n+$/g,"")}function Ae(t){let n;return{c(){n=$("link"),this.h()},l(e){n=P(e,"LINK",{rel:!0,href:!0}),this.h()},h(){S(n,"rel","stylesheet"),S(n,"href",`${ye.path}/themes/light.css`)},m(e,t){h(e,n,t)},p:e,d(e){e&&m(n)}}}function Pe(t){let n,r,o,s,i,l,u,f,d,g,y,b,_,E,x,T,I,L,N=xe(ye.i18n.footer.replace(/\$REPO/,`https://github.com/${ye.owner}/${ye.repo}`))+"";let O=Ae(t),k=ye["status-website"].css&&function(t){let n,r,o=`<style>${ye["status-website"].css}</style>`;return{c(){r=w(),this.h()},l(e){r=w(),this.h()},h(){n=new j(r)},m(e,t){n.m(o,e,t),h(e,r,t)},p:e,d(e){e&&m(r),e&&n.d()}}}(),C=ye["status-website"].js&&function(t){let n,r,o=`<script>${ye["status-website"].js}<\/script>`;return{c(){r=w(),this.h()},l(e){r=w(),this.h()},h(){n=new j(r)},m(e,t){n.m(o,e,t),h(e,r,t)},p:e,d(e){e&&m(r),e&&n.d()}}}();b=new we({props:{segment:t[0]}});const M=t[2].default,D=function(e,t,n,r){if(e){const o=a(e,t,n,r);return e[0](o)}}(M,t,t[1],null);return{c(){n=w(),O.c(),r=$("link"),o=$("link"),s=$("link"),i=w(),l=w(),u=w(),k&&k.c(),f=w(),C&&C.c(),d=w(),g=v(),y=v(),ce(b.$$.fragment),_=v(),E=$("main"),D&&D.c(),x=v(),T=$("footer"),I=$("p"),this.h()},l(e){const t=U('[data-svelte="svelte-ri9y7q"]',document.head);n=w(),O.l(t),r=P(t,"LINK",{rel:!0,href:!0}),o=P(t,"LINK",{rel:!0,type:!0,href:!0}),s=P(t,"LINK",{rel:!0,type:!0,href:!0}),i=w(),l=w(),u=w(),k&&k.l(t),f=w(),C&&C.l(t),d=w(),t.forEach(m),g=R(e),y=R(e),le(b.$$.fragment,e),_=R(e),E=P(e,"MAIN",{class:!0});var a=A(E);D&&D.l(a),a.forEach(m),x=R(e),T=P(e,"FOOTER",{class:!0});var c=A(T);I=P(c,"P",{}),A(I).forEach(m),c.forEach(m),this.h()},h(){S(r,"rel","stylesheet"),S(r,"href",`${ye.path}/global.css`),S(o,"rel","icon"),S(o,"type","image/svg"),S(o,"href","https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),S(s,"rel","icon"),S(s,"type","image/png"),S(s,"href","/logo-192.png"),S(E,"class","container"),S(T,"class","svelte-jbr799")},m(e,t){p(document.head,n),O.m(document.head,null),p(document.head,r),p(document.head,o),p(document.head,s),p(document.head,i),p(document.head,l),p(document.head,u),k&&k.m(document.head,null),p(document.head,f),C&&C.m(document.head,null),p(document.head,d),h(e,g,t),h(e,y,t),ue(b,e,t),h(e,_,t),h(e,E,t),D&&D.m(E,null),h(e,x,t),h(e,T,t),p(T,I),I.innerHTML=N,L=!0},p(e,[t]){O.p(e,t),ye["status-website"].css&&k.p(e,t),ye["status-website"].js&&C.p(e,t);const n={};1&t&&(n.segment=e[0]),b.$set(n),D&&D.p&&(!L||2&t)&&c(D,M,e,e[1],t,null,null)},i(e){L||(oe(b.$$.fragment,e),oe(D,e),L=!0)},o(e){se(b.$$.fragment,e),se(D,e),L=!1},d(e){m(n),O.d(e),m(r),m(o),m(s),m(i),m(l),m(u),k&&k.d(e),m(f),C&&C.d(e),m(d),e&&m(g),e&&m(y),fe(b,e),e&&m(_),e&&m(E),D&&D.d(e),e&&m(x),e&&m(T)}}}function Te(e,t,n){let{$$slots:r={},$$scope:o}=t,{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment),"$$scope"in e&&n(1,o=e.$$scope)},[s,o,r]}class Re extends he{constructor(e){super(),pe(this,e,Te,Pe,i,{segment:0})}}function Ie(e){let t,n,r=e[1].stack+"";return{c(){t=$("pre"),n=b(r)},l(e){t=P(e,"PRE",{});var o=A(t);n=T(o,r),o.forEach(m)},m(e,r){h(e,t,r),p(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&I(n,r)},d(e){e&&m(t)}}}function Le(t){let n,r,o,s,i,a,c,l,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&Ie(t);return{c(){r=v(),o=$("h1"),s=b(t[0]),i=v(),a=$("p"),c=b(f),l=v(),d&&d.c(),u=w(),this.h()},l(e){U('[data-svelte="svelte-1moakz"]',document.head).forEach(m),r=R(e),o=P(e,"H1",{class:!0});var n=A(o);s=T(n,t[0]),n.forEach(m),i=R(e),a=P(e,"P",{class:!0});var p=A(a);c=T(p,f),p.forEach(m),l=R(e),d&&d.l(e),u=w(),this.h()},h(){S(o,"class","svelte-17w3omn"),S(a,"class","svelte-17w3omn")},m(e,t){h(e,r,t),h(e,o,t),p(o,s),h(e,i,t),h(e,a,t),p(a,c),h(e,l,t),d&&d.m(e,t),h(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&I(s,e[0]),2&t&&f!==(f=e[1].message+"")&&I(c,f),e[2]&&e[1].stack?d?d.p(e,t):(d=Ie(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&m(r),e&&m(o),e&&m(i),e&&m(a),e&&m(l),d&&d.d(e),e&&m(u)}}}function Ne(e,t,n){let{status:r}=t,{error:o}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,o=e.error)},[r,o,false]}class Oe extends he{constructor(e){super(),pe(this,e,Ne,Le,i,{status:0,error:1})}}function ke(e){let n,r,o;const s=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ce(n.$$.fragment),r=w()},l(e){n&&le(n.$$.fragment,e),r=w()},m(e,t){n&&ue(n,e,t),h(e,r,t),o=!0},p(e,t){const o=16&t?ie(s,[ae(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){ne();const e=n;se(e.$$.fragment,1,0,(()=>{fe(e,1)})),re()}i?(n=new i(a()),ce(n.$$.fragment),oe(n.$$.fragment,1),ue(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(e){o||(n&&oe(n.$$.fragment,e),o=!0)},o(e){n&&se(n.$$.fragment,e),o=!1},d(e){e&&m(r),n&&fe(n,e)}}}function Ce(e){let t,n;return t=new Oe({props:{error:e[0],status:e[1]}}),{c(){ce(t.$$.fragment)},l(e){le(t.$$.fragment,e)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){fe(t,e)}}}function Ue(e){let t,n,r,o;const s=[Ce,ke],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=s[t](e),{c(){n.c(),r=w()},l(e){n.l(e),r=w()},m(e,n){i[t].m(e,n),h(e,r,n),o=!0},p(e,o){let c=t;t=a(e),t===c?i[t].p(e,o):(ne(),se(i[c],1,1,(()=>{i[c]=null})),re(),n=i[t],n?n.p(e,o):(n=i[t]=s[t](e),n.c()),oe(n,1),n.m(r.parentNode,r))},i(e){o||(oe(n),o=!0)},o(e){se(n),o=!1},d(e){i[t].d(e),e&&m(r)}}}function je(e){let n,r;const o=[{segment:e[2][0]},e[3].props];let s={$$slots:{default:[Ue]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new Re({props:s}),{c(){ce(n.$$.fragment)},l(e){le(n.$$.fragment,e)},m(e,t){ue(n,e,t),r=!0},p(e,[t]){const r=12&t?ie(o,[4&t&&{segment:e[2][0]},8&t&&ae(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(oe(n.$$.fragment,e),r=!0)},o(e){se(n.$$.fragment,e),r=!1},d(e){fe(n,e)}}}function Me(e,t,n){let{stores:r}=t,{error:o}=t,{status:s}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return q(l),u=$e,f=r,D().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,o=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[o,s,i,a,c,r,l]}class De extends he{constructor(e){super(),pe(this,e,Me,je,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const He=[],qe=[{js:()=>Promise.all([import("./index.ec7956fd.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.4b47e26d.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].eb71e6d5.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].3884af4b.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-49f387e2.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.ba164808.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],Ge=(Be=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:Be(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:Be(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Be;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Je(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function ze(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let Ke,Ve=1;const Fe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},We={};let Ye,Qe;function Xe(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function Ze(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Ye))return null;let t=e.pathname.slice(Ye.length);if(""===t&&(t="/"),!He.some((e=>e.test(t))))for(let n=0;n<Ge.length;n+=1){const r=Ge[n],o=r.pattern.exec(t);if(o){const n=Xe(e.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:o,page:a}}}}function et(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=ze(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ze(o);if(s){rt(s,null,t.hasAttribute("sapper:noscroll"),o.hash),e.preventDefault(),Fe.pushState({id:Ke},"",o.href)}}function tt(){return{x:pageXOffset,y:pageYOffset}}function nt(e){if(We[Ke]=tt(),e.state){const t=Ze(new URL(location.href));t?rt(t,e.state.id):location.href=location.href}else!function(e){Ve=e}(Ve+1),function(e){Ke=e}(Ve),Fe.replaceState({id:Ke},"",location.href)}function rt(e,t,n,r){return Je(this,void 0,void 0,(function*(){const o=!!t;if(o)Ke=t;else{const e=tt();We[Ke]=e,Ke=t=++Ve,We[Ke]=n?e:{x:0,y:0}}if(yield Qe(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=We[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),We[Ke]=n,n&&(o||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function ot(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let st,it=null;function at(e){const t=ze(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=Ze(new URL(e,ot(document)));if(t)it&&e===it.href||(it={href:e,promise:St(t)}),it.promise}(t.href)}function ct(e){clearTimeout(st),st=setTimeout((()=>{at(e)}),20)}function lt(e,t={noscroll:!1,replaceState:!1}){const n=Ze(new URL(e,ot(document)));if(n){const r=rt(n,null,t.noscroll);return Fe[t.replaceState?"replaceState":"pushState"]({id:Ke},"",e),r}return location.href=e,new Promise((()=>{}))}const ut="undefined"!=typeof __SAPPER__&&__SAPPER__;let ft,dt,pt,ht=!1,mt=[],gt="{}";const $t={page:function(e){const t=ge(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:ge(null),session:ge(ut&&ut.session)};let yt,bt,vt;function wt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function _t(e){return Je(this,void 0,void 0,(function*(){ft&&$t.preloading.set(!0);const t=function(e){return it&&it.href===e.href?it.promise:St(e)}(e),n=dt={},r=yield t,{redirect:o}=r;if(n===dt)if(o)yield lt(o.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Et(n,t,wt(t,e.page))}}))}function Et(e,t,n){return Je(this,void 0,void 0,(function*(){$t.page.set(n),$t.preloading.set(!1),ft?ft.$set(t):(t.stores={page:{subscribe:$t.page.subscribe},preloading:{subscribe:$t.preloading.subscribe},session:$t.session},t.level0={props:yield pt},t.notify=$t.page.notify,ft=new De({target:vt,props:t,hydrate:!0})),mt=e,gt=JSON.stringify(n.query),ht=!0,bt=!1}))}function St(e){return Je(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{s.error="string"==typeof t?new Error(t):t,s.status=e}};if(!pt){const e=()=>({});pt=ut.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},yt)}let a,c=1;try{const o=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>Je(this,void 0,void 0,(function*(){const f=r[a];if(function(e,t,n,r){if(r!==gt)return!0;const o=mt[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[c]=r[a+1],!t)return{segment:f};const d=c++;let p;if(bt||u||!mt[a]||mt[a].part!==t.i){u=!1;const{default:r,preload:o}=yield qe[t.i].js();let s;s=ht||!ut.preloaded[a+1]?o?yield o.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},yt):{}:ut.preloaded[a+1],p={component:r,props:s,segment:f,match:l,part:t.i}}else p=mt[a];return s[`level${d}`]=p})))))}catch(e){s.error=e,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}var xt,At,Pt;$t.session.subscribe((e=>Je(void 0,void 0,void 0,(function*(){if(yt=e,!ht)return;bt=!0;const t=Ze(new URL(location.href)),n=dt={},{redirect:r,props:o,branch:s}=yield St(t);n===dt&&(r?yield lt(r.location,{replaceState:!0}):yield Et(s,o,wt(o,t.page)))})))),xt={target:document.querySelector("#sapper")},At=xt.target,vt=At,Pt=ut.baseUrl,Ye=Pt,Qe=_t,"scrollRestoration"in Fe&&(Fe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Fe.scrollRestoration="auto"})),addEventListener("load",(()=>{Fe.scrollRestoration="manual"})),addEventListener("click",et),addEventListener("popstate",nt),addEventListener("touchstart",at),addEventListener("mousemove",ct),ut.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:o,status:s,error:i}=ut;pt||(pt=o&&o[0]);const a={error:i,status:s,session:r,level0:{props:pt},level1:{props:{status:s,error:i},component:Oe},segments:o},c=Xe(n);Et([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;Fe.replaceState({id:Ve},"",t);const n=Ze(new URL(location.href));if(n)return rt(n,Ve,!0,e)}));export{fe as A,_ as B,o as C,J as D,u as E,U as F,y as G,j as H,lt as I,L as J,E as K,xe as L,t as M,x as N,ie as O,q as P,G as Q,l as R,he as S,ae as T,W as U,C as V,A as a,T as b,P as c,m as d,$ as e,S as f,h as g,p as h,pe as i,v as j,R as k,ne as l,se as m,e as n,re as o,oe as p,H as q,ye as r,i as s,b as t,I as u,w as v,g as w,ce as x,le as y,ue as z};

import __inject_styles from './inject_styles.5607aec6.js';