/* Qwik Service Worker */
const appBundles=[["q-0d707166.js",[11],["hjFxK1FxBqA"]],["q-0f764941.js",[11,15],["wOIPfiQ04l4"]],["q-13e1f2e9.js",[11,12,15],["u0bwM0i5dA8"]],["q-2039531b.js",[11],["foRSjkQluCc"]],["q-2d107356.js",[11,15],["e0ssiDXoeAM"]],["q-47354885.js",[11,15],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-52541b57.js",[9,11,15],["J4V2qsF7Yxo"]],["q-61e731e2.js",[],["DyVc0YBIqQU"]],["q-6289c02c.js",[11,15],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-6693c0ff.js",[11,15]],["q-6799f855.js",[11]],["q-734d351e.js",[]],["q-73c21830.js",[11,15]],["q-7aaca35c.js",[11,15],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-7b5d06d8.js",[11,15],["3sccYCDd1Z0"]],["q-898f3d90.js",[11]],["q-8defb313.js",[11],["JKHgMZ4xLZQ","VkLNXphUh5s"]],["q-8ea06850.js",[]],["q-930dfbc0.js",[11],["xYL1qOwPyDI"]],["q-a19ef1b8.js",[11]],["q-d0084d99.js",[11,15],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-d179a4bc.js",[11],["A5bZC7WO00A"]],["q-d42b8a50.js",[11,15],["zrbrqoaqXSY"]],["q-db451e21.js",[11,15],["eBQ0vFsFKsk"]],["q-f90d56fc.js",[11],["mBt9fIl89mc"]],["q-f93a0d1d.js",[11]],["q-f969e083.js",[11]]];
const libraryBundleIds=[8];
const linkBundles=[[/^\/$/,[12,16,10,18]],[/^\/demo\/todolist\/?$/,[12,16,9,6]],[/^\/ssr\/?$/,[12,16,25,0]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
