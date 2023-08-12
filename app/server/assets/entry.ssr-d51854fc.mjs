import{j as u,b as ce,c as le,F as E,s as H,d as W,i as V,u as de,e as me,f as h,g as _,h as ue,k as x,l as fe,S as pe,R as ye,Q as _e}from"./@qwik-city-plan-26f81953.mjs";/**
 * @license
 * @builder.io/qwik/server 1.2.6
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var be=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function Z(e,n){const t=n==null?void 0:n.mapper,s=e.symbolMapper?e.symbolMapper:i=>{var a;if(t){const r=N(i),c=t[r];if(!c){if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(r))return[i,"_"];console.error("Cannot resolve symbol",i,"in",t)}return c}};return{isServer:!0,async importSymbol(i,a,r){var v;const c=N(r),l=(v=globalThis.__qwik_reg_symbols)==null?void 0:v.get(c);if(l)return l;let m=String(a);m.endsWith(".js")||(m+=".js");const w=be(m);if(!(r in w))throw new Error(`Q-ERROR: missing symbol '${r}' in module '${m}'.`);return w[r]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(a=>{setTimeout(()=>{a(i())})}),chunkForSymbol(i){return s(i,t)}}}async function qe(e,n){const t=Z(e,n);H(t)}var N=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e};function k(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function X(e){let n=e.base;return typeof e.base=="function"&&(n=e.base(e)),typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var he=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,ve=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,we=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,ge=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function je(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?ge:we).replace("window.qEvents",JSON.stringify(e.events)):e.debug?ve:he}function xe(e,n,t){if(!t)return[];const s=n.prefetchStrategy,o=X(n);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return ke(e,t,o);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:t.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function ke(e,n,t){const s=[],o=e==null?void 0:e.qrls,{mapper:i,manifest:a}=n,r=new Map;if(Array.isArray(o))for(const c of o){const l=c.getHash(),m=i[l];m&&G(a,r,s,t,m[1])}return s}function G(e,n,t,s,o){const i=s+o;let a=n.get(i);if(!a){a={url:i,imports:[]},n.set(i,a);const r=e.bundles[o];if(r&&Array.isArray(r.imports))for(const c of r.imports)G(e,n,a.imports,s,c)}t.push(a)}function Ne(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function S(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function Se(e){const n={bundles:g(e).map(t=>t.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(n)}}))`}function g(e){const n=[],t=s=>{if(Array.isArray(s))for(const o of s)n.includes(o.url)||(n.push(o.url),t(o.imports))};return t(e),n}function Ee(e){const n=new Map;let t=0;const s=(r,c)=>{if(Array.isArray(r))for(const l of r){const m=n.get(l.url)||0;n.set(l.url,m+1),t++,c.has(l.url)||(c.add(l.url),s(l.imports,c))}},o=new Set;for(const r of e)o.clear(),s(r.imports,o);const i=t/n.size*2,a=Array.from(n.entries());return a.sort((r,c)=>c[1]-r[1]),a.slice(0,5).filter(r=>r[1]>i).map(r=>r[0])}function Ie(e,n,t){const s=Fe(e==null?void 0:e.implementation),o=[];return s.prefetchEvent==="always"&&Ce(o,n,t),s.linkInsert==="html-append"&&Ae(o,n,s),s.linkInsert==="js-append"?ze(o,n,s,t):s.workerFetchInsert==="always"&&Le(o,n,t),o.length>0?u(E,{children:o}):null}function Ce(e,n,t){const s=Ee(n);for(const o of s)e.push(u("link",{rel:"modulepreload",href:o,nonce:t}));e.push(u("script",{dangerouslySetInnerHTML:Se(n),nonce:t}))}function Ae(e,n,t){const s=g(n),o=t.linkRel||"prefetch";for(const i of s){const a={};a.href=i,a.rel=o,(o==="prefetch"||o==="preload")&&i.endsWith(".js")&&(a.as="script"),e.push(u("link",a,void 0))}}function ze(e,n,t,s){const o=t.linkRel||"prefetch";let i="";t.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(g(n))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${o}");`,t.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${o}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",t.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=S(),i+="}"),t.workerFetchInsert==="always"&&(i+=S()),e.push(u("script",{type:"module",dangerouslySetInnerHTML:i,nonce:s}))}function Le(e,n,t){let s=`const u=${JSON.stringify(g(n))};`;s+=S(),e.push(u("script",{type:"module",dangerouslySetInnerHTML:s,nonce:t}))}function Fe(e){return e&&typeof e=="object"?e:Re}var Re={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Te="<!DOCTYPE html>";async function Pe(e,n){var R;let t=n.stream,s=0,o=0,i=0,a=0,r="",c;const l=((R=n.streaming)==null?void 0:R.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},m=n.containerTagName??"html",w=n.containerAttributes??{},v=t,ne=k(),te=X(n),f=ee(n.manifest);function I(){r&&(v.write(r),r="",s=0,i++,i===1&&(a=ne()))}function C(d){const p=d.length;s+=p,o+=p,r+=d}switch(l.strategy){case"disabled":t={write:C};break;case"direct":t=v;break;case"auto":let d=0,p=!1;const T=l.maximunChunk??0,j=l.maximunInitialChunk??0;t={write(q){q==="<!--qkssr-f-->"?p||(p=!0):q==="<!--qkssr-pu-->"?d++:q==="<!--qkssr-po-->"?d--:C(q),d===0&&(p||s>=(i===0?j:T))&&(p=!1,I())}};break}m==="html"?t.write(Te):(t.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await qe(n,f);const A=f==null?void 0:f.manifest.injections,se=A?A.map(d=>u(d.tag,d.attributes??{})):void 0,ie=k(),z=[];let L=0,F=0;await ce(e,{stream:t,containerTagName:m,containerAttributes:w,serverData:n.serverData,base:te,beforeContent:se,beforeClose:async(d,p,T,j)=>{var $,Q,K,M,B,U,Y;L=ie();const q=k();c=await le(d,p,void 0,j);const b=[];if(n.prefetchStrategy!==null){const y=xe(c,n,f);if(y.length>0){const J=Ie(n.prefetchStrategy,y,($=n.serverData)==null?void 0:$.nonce);J&&b.push(J)}}const re=JSON.stringify(c.state,void 0,void 0);b.push(u("script",{type:"qwik/json",dangerouslySetInnerHTML:De(re),nonce:(Q=n.serverData)==null?void 0:Q.nonce})),c.funcs.length>0&&b.push(u("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:$e(c.funcs),nonce:(K=n.serverData)==null?void 0:K.nonce}));const ae=!c||c.mode!=="static",P=((M=n.qwikLoader)==null?void 0:M.include)??"auto",D=P==="always"||P==="auto"&&ae;if(D){const y=je({events:(B=n.qwikLoader)==null?void 0:B.events,debug:n.debug});b.push(u("script",{id:"qwikloader",dangerouslySetInnerHTML:y,nonce:(U=n.serverData)==null?void 0:U.nonce}))}const O=Array.from(p.$events$,y=>JSON.stringify(y));if(O.length>0){let y=`window.qwikevents.push(${O.join(", ")})`;D||(y=`window.qwikevents||=[];${y}`),b.push(u("script",{dangerouslySetInnerHTML:y,nonce:(Y=n.serverData)==null?void 0:Y.nonce}))}return Oe(z,d),F=q(),u(E,{children:b})},manifestHash:(f==null?void 0:f.manifest.manifestHash)||"dev"}),m!=="html"&&t.write("<!--/cq-->"),I();const oe=c.resources.some(d=>d._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:i,manifest:f==null?void 0:f.manifest,size:o,isStatic:!oe,timing:{render:L,snapshot:F,firstFlush:a},_symbols:z}}function ee(e){if(e){if("mapper"in e)return e;if(e=Ne(e),e){const n={};return Object.entries(e.mapping).forEach(([t,s])=>{n[N(t)]=[t,s]}),{mapper:n,manifest:e}}}}var De=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Oe(e,n){var t;for(const s of n){const o=(t=s.$componentQrl$)==null?void 0:t.getSymbol();o&&!e.includes(o)&&e.push(o)}}function $e(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}async function He(e){const n=Z({manifest:e},ee(e));H(n)}const Qe={manifestHash:"d8hjyr",symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[22140,30908]},s_3sccYCDd1Z0:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_3sccycdd1z0",hash:"3sccYCDd1Z0",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[268,793]},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[32708,34334]},s_J4V2qsF7Yxo:{origin:"routes/demo/todolist/index.tsx",displayName:"todolist_component",canonicalFilename:"s_j4v2qsf7yxo",hash:"J4V2qsF7Yxo",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[564,1583]},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[44292,45643]},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[18870,31195]},s_VkLNXphUh5s:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vklnxphuh5s",hash:"VkLNXphUh5s",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[926,1066]},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[31326,32589]},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7908,8622]},s_foRSjkQluCc:{origin:"components/starter/infobox/infobox.tsx",displayName:"infobox_component",canonicalFilename:"s_forsjkqlucc",hash:"foRSjkQluCc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[124,261]},s_hjFxK1FxBqA:{origin:"routes/ssr/index.tsx",displayName:"ssr_component",canonicalFilename:"s_hjfxk1fxbqa",hash:"hjFxK1FxBqA",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[169,4459]},s_mBt9fIl89mc:{origin:"components/starter/header/header.tsx",displayName:"header_component",canonicalFilename:"s_mbt9fil89mc",hash:"mBt9fIl89mc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[159,864]},s_u0bwM0i5dA8:{origin:"components/starter/footer/footer.tsx",displayName:"footer_component",canonicalFilename:"s_u0bwm0i5da8",hash:"u0bwM0i5dA8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[172,497]},s_xYL1qOwPyDI:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_xyl1qowpydi",hash:"xYL1qOwPyDI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[195,2505]},s_zrbrqoaqXSY:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_zrbrqoaqxsy",hash:"zrbrqoaqXSY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,854]},s_JKHgMZ4xLZQ:{origin:"routes/layout.tsx",displayName:"layout_component_useStyles",canonicalFilename:"s_jkhgmz4xlzq",hash:"JKHgMZ4xLZQ",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_VkLNXphUh5s",loc:[947,953]},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[18925,18959]},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[35702,37336]},s_DyVc0YBIqQU:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6849]},s_wOIPfiQ04l4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[40354,42178]},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[31727,31788]},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[33210,33273]},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[20209,21528]},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[33391,33906]},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[44599,45296]}},mapping:{s_02wMImzEAbk:"q-6289c02c.js",s_3sccYCDd1Z0:"q-7b5d06d8.js",s_8gdLBszqbaM:"q-47354885.js",s_J4V2qsF7Yxo:"q-52541b57.js",s_Nk9PlpjQm9Y:"q-d0084d99.js",s_TxCFOy819ag:"q-6289c02c.js",s_VkLNXphUh5s:"q-8defb313.js",s_WmYC5H00wtI:"q-7aaca35c.js",s_e0ssiDXoeAM:"q-2d107356.js",s_foRSjkQluCc:"q-2039531b.js",s_hjFxK1FxBqA:"q-0d707166.js",s_mBt9fIl89mc:"q-f90d56fc.js",s_u0bwM0i5dA8:"q-13e1f2e9.js",s_xYL1qOwPyDI:"q-930dfbc0.js",s_zrbrqoaqXSY:"q-d42b8a50.js",s_JKHgMZ4xLZQ:"q-8defb313.js",s_RPDJAz33WLA:"q-6289c02c.js",s_A5bZC7WO00A:"q-d179a4bc.js",s_DyVc0YBIqQU:"q-61e731e2.js",s_wOIPfiQ04l4:"q-0f764941.js",s_BUbtvTyvVRE:"q-7aaca35c.js",s_eBQ0vFsFKsk:"q-db451e21.js",s_fX0bDjeJa0E:"q-6289c02c.js",s_i1Cv0pYJNR0:"q-47354885.js",s_p9MSze0ojs4:"q-d0084d99.js"},bundles:{"q-0d707166.js":{size:5143,imports:["q-734d351e.js"],origins:["src/entry_ssr.js","src/media/binary.jpeg?jsx","src/media/num.jpeg?jsx","src/s_hjfxk1fxbqa.js"],symbols:["s_hjFxK1FxBqA"]},"q-0f764941.js":{size:889,imports:["q-734d351e.js","q-898f3d90.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-13e1f2e9.js":{size:498,imports:["q-734d351e.js","q-73c21830.js","q-898f3d90.js"],origins:["src/components/starter/footer/footer.module.css?used","src/entry_footer.js","src/s_u0bwm0i5da8.js"],symbols:["s_u0bwM0i5dA8"]},"q-2039531b.js":{size:261,imports:["q-734d351e.js"],origins:["src/components/starter/infobox/infobox.module.css?used","src/entry_infobox.js","src/s_forsjkqlucc.js"],symbols:["s_foRSjkQluCc"]},"q-2d107356.js":{size:467,imports:["q-734d351e.js","q-898f3d90.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-47354885.js":{size:1135,imports:["q-734d351e.js","q-898f3d90.js"],dynamicImports:["q-db451e21.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-52541b57.js":{size:1155,imports:["q-6693c0ff.js","q-734d351e.js","q-898f3d90.js"],origins:["src/entry_todolist.js","src/routes/demo/todolist/todolist.module.css?used","src/s_j4v2qsf7yxo.js"],symbols:["s_J4V2qsF7Yxo"]},"q-61e731e2.js":{size:2272,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-6289c02c.js":{size:5776,imports:["q-734d351e.js","q-898f3d90.js"],dynamicImports:["q-6693c0ff.js","q-6799f855.js","q-73c21830.js","q-a19ef1b8.js","q-f93a0d1d.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-6693c0ff.js":{size:411,imports:["q-734d351e.js","q-898f3d90.js"],dynamicImports:["q-52541b57.js"],origins:["src/routes/demo/todolist/index.tsx"]},"q-6799f855.js":{size:299,imports:["q-734d351e.js"],dynamicImports:["q-930dfbc0.js"],origins:["src/routes/index.tsx"]},"q-734d351e.js":{size:46093,origins:["node_modules/@builder.io/qwik/core.min.mjs"]},"q-73c21830.js":{size:380,imports:["q-734d351e.js","q-898f3d90.js"],dynamicImports:["q-8defb313.js"],origins:["src/routes/layout.tsx"]},"q-7aaca35c.js":{size:787,imports:["q-734d351e.js","q-898f3d90.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-7b5d06d8.js":{size:541,imports:["q-734d351e.js","q-898f3d90.js"],dynamicImports:["q-d42b8a50.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_3sccycdd1z0.js"],symbols:["s_3sccYCDd1Z0"]},"q-898f3d90.js":{size:7613,imports:["q-734d351e.js"],dynamicImports:["q-2d107356.js","q-61e731e2.js","q-6289c02c.js","q-d0084d99.js","q-d179a4bc.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-8defb313.js":{size:5401,imports:["q-734d351e.js"],dynamicImports:["q-13e1f2e9.js","q-f90d56fc.js"],origins:["src/components/starter/footer/footer.tsx","src/components/starter/header/header.tsx","src/entry_layout.js","src/routes/styles.css?used&inline","src/s_jkhgmz4xlzq.js","src/s_vklnxphuh5s.js"],symbols:["s_JKHgMZ4xLZQ","s_VkLNXphUh5s"]},"q-8ea06850.js":{size:2539,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-930dfbc0.js":{size:2170,imports:["q-734d351e.js"],dynamicImports:["q-2039531b.js"],origins:["src/components/starter/infobox/infobox.tsx","src/entry_routes.js","src/s_xyl1qowpydi.js"],symbols:["s_xYL1qOwPyDI"]},"q-a19ef1b8.js":{size:125,imports:["q-734d351e.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-d0084d99.js":{size:1027,imports:["q-734d351e.js","q-898f3d90.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-d179a4bc.js":{size:751,imports:["q-734d351e.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-d42b8a50.js":{size:671,imports:["q-734d351e.js","q-898f3d90.js"],origins:["src/entry_RouterHead.js","src/s_zrbrqoaqxsy.js"],symbols:["s_zrbrqoaqXSY"]},"q-db451e21.js":{size:128,imports:["q-734d351e.js","q-898f3d90.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-f90d56fc.js":{size:3507,imports:["q-734d351e.js"],origins:["src/components/starter/header/header.module.css?used","src/components/starter/icons/qwik.tsx","src/entry_header.js","src/s_mbt9fil89mc.js"],symbols:["s_mBt9fIl89mc"]},"q-f93a0d1d.js":{size:185,imports:["q-734d351e.js"],dynamicImports:["q-0d707166.js"],origins:["src/routes/ssr/index.tsx"]},"q-f969e083.js":{size:207,imports:["q-734d351e.js"],dynamicImports:["q-7b5d06d8.js"],origins:["src/global.css","src/root.tsx"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-94073d72.css",dangerouslySetInnerHTML:`._anchor_1g8hj_1{color:#fff!important;display:block;font-size:.8rem;text-align:center;text-decoration:none;line-height:1.5}._anchor_1g8hj_1 span:not(._spacer_1g8hj_10){display:block}._spacer_1g8hj_10{display:none;padding:0 15px}@media screen and (min-width: 768px){._anchor_1g8hj_1 span{display:inline!important}}._wrapper_tofv3_1{display:flex;align-items:center;justify-content:space-between}._logo_tofv3_7{display:inline-block}._logo_tofv3_7 a{display:block}._header_tofv3_14 ul{margin:0;padding:0;list-style:none;display:flex;gap:30px}._header_tofv3_14 li{display:none;margin:0;padding:0;font-size:.7rem}._header_tofv3_14 li a{color:#fff;display:inline-block;padding:0;text-decoration:none}._header_tofv3_14 li a:hover{color:var(--qwik-light-blue)}@media (min-width: 450px){._header_tofv3_14 li{display:inline-block}}._infobox_oa4r7_1{color:#fff;font-size:.8rem;line-height:2;margin:0 0 40px}._infobox_oa4r7_1 h3{font-size:1rem;font-weight:400;margin:0 0 15px;padding:0}._infobox_oa4r7_1 li{line-height:2.5}@media screen and (min-width: 600px){._infobox_oa4r7_1{margin:0}}._list_1ofyy_1{display:flex;flex-direction:column;gap:20px;color:#fff}._list_1ofyy_1,._empty_1ofyy_9{min-height:250px}._list_1ofyy_1 li{list-style:none}._empty_1ofyy_9{color:#fff;display:block}._input_1ofyy_22{background:white;color:var(--qwik-light-blue);border:none;border-radius:8px;padding:15px 20px;margin-right:10px;font-size:.8rem}._hint_1ofyy_32{font-size:.8rem;color:#fff;margin-top:30px}@media screen and (min-width: 768px){._input_1ofyy_22{padding:23px 35px;margin-right:20px;font-size:1rem}}:root{--qwik-dark-blue: #006ce9;--qwik-light-blue: #18b6f6;--qwik-light-purple: #ac7ff4;--qwik-dark-purple: #713fc2;--qwik-dirty-black: #1d2033;--qwik-dark-background: #151934;--qwik-dark-text: #ffffff}html{line-height:1;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;margin:0;line-height:inherit}html{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;line-height:inherit}
`}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.6",vite:"",rollup:"3.26.3",env:"node",os:"darwin",node:"18.17.0"}},Ke=()=>{const e=de(),n=me();return h(E,{children:[_("title",null,null,e.title,1,null),_("link",null,{href:ue(t=>t.url.href,[n],"p0.url.href"),rel:"canonical"},null,3,null),_("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),_("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),e.meta.map(t=>x("meta",{...t},null,0,t.key)),e.links.map(t=>x("link",{...t},null,0,t.key)),e.styles.map(t=>x("style",{...t.props,dangerouslySetInnerHTML:fe(t,"style")},null,0,t.key))]},1,"OA_0")},Me=W(V(Ke,"s_zrbrqoaqXSY"));const Be=()=>h(_e,{children:[_("head",null,null,[_("meta",null,{charSet:"utf-8"},null,3,null),_("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),h(Me,null,3,"35_0"),h(pe,null,3,"35_1")],1,null),_("body",null,{lang:"en"},h(ye,null,3,"35_2"),1,null)]},1,"35_3"),Ue=W(V(Be,"s_3sccYCDd1Z0"));function We(e){return Pe(h(Ue,null,3,"pY_0"),{manifest:Qe,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Qe as m,We as r,He as s};
