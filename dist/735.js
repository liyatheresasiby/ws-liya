"use strict";(self.webpackChunk_=self.webpackChunk_||[]).push([[735],{735:(e,t,n)=>{function r(e,t,n){return void 0===t&&void 0===n?e:void 0!==t&&void 0===n?Math.max(e,t):void 0===t&&void 0!==n?Math.min(e,n):Math.min(Math.max(e,t),n)}function u(e){return"string"!=typeof e?"":e.charAt(0).toLowerCase()+e.slice(1)}function o(){return`mantine-${Math.random().toString(36).slice(2,11)}`}function c(e,t){const n=Math.abs(t-e)+1;return e>t?Array.from({length:n},((t,n)=>e-n)):Array.from({length:n},((t,n)=>n+e))}function i(e,t){if(e===t)return!0;if(!(e instanceof Object&&t instanceof Object))return!1;const n=Object.keys(e),{length:r}=n;if(r!==Object.keys(t).length)return!1;for(let u=0;u<r;u+=1){const r=n[u];if(!(r in t))return!1;if(e[r]!==t[r])return!1}return!0}function s(e){return"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}n.r(t),n.d(t,{assignRef:()=>G,clamp:()=>r,clampUseMovePosition:()=>ne,getHotkeyHandler:()=>Ae,lowerFirst:()=>u,mergeRefs:()=>Z,randomId:()=>o,range:()=>c,readLocalStorageValue:()=>Q,readSessionStorageValue:()=>_,shallowEqual:()=>i,upperFirst:()=>s,useCallbackRef:()=>f,useClickOutside:()=>v,useClipboard:()=>w,useColorScheme:()=>g,useCounter:()=>E,useDebounceCallback:()=>d,useDebouncedState:()=>y,useDebouncedValue:()=>b,useDidUpdate:()=>R,useDisclosure:()=>Ke,useDocumentTitle:()=>L,useDocumentVisibility:()=>k,useElementSize:()=>pe,useEventListener:()=>je,useEyeDropper:()=>rt,useFavicon:()=>Ge,useFocusReturn:()=>C,useFocusTrap:()=>D,useFocusWithin:()=>Xe,useForceUpdate:()=>q,useFullscreen:()=>De,useHash:()=>xe,useHeadroom:()=>nt,useHotkeys:()=>Ie,useHover:()=>qe,useId:()=>N,useIdle:()=>H,useInViewport:()=>ut,useInputState:()=>We,useIntersection:()=>Ce,useInterval:()=>$,useIsomorphicEffect:()=>S,useListState:()=>W,useLocalStorage:()=>B,useLogger:()=>Oe,useMediaQuery:()=>h,useMergedRef:()=>ee,useMouse:()=>te,useMove:()=>re,useNetwork:()=>Ue,useOs:()=>Pe,usePageLeave:()=>ae,usePagination:()=>ie,usePrevious:()=>Je,useQueue:()=>se,useReducedMotion:()=>le,useResizeObserver:()=>ge,useScrollIntoView:()=>we,useSessionStorage:()=>J,useSetState:()=>He,useShallowEffect:()=>Ee,useTextSelection:()=>Qe,useTimeout:()=>Be,useToggle:()=>ye,useUncontrolled:()=>ue,useValidatedState:()=>ze,useViewportSize:()=>Se,useWindowEvent:()=>j,useWindowScroll:()=>Re});var a=n(914),l=n.n(a);function f(e){const t=(0,a.useRef)(e);return(0,a.useEffect)((()=>{t.current=e})),(0,a.useMemo)((()=>(...e)=>t.current?.(...e)),[])}function d(e,t){const n=f(e),r=(0,a.useRef)(0);return(0,a.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),(0,a.useCallback)((()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,t)}),[n,t])}const m=["mousedown","touchstart"];function v(e,t,n){const r=(0,a.useRef)();return(0,a.useEffect)((()=>{const u=t=>{const{target:u}=t??{};if(Array.isArray(n)){const r=u?.hasAttribute("data-ignore-outside-clicks")||!document.body.contains(u)&&"HTML"!==u.tagName;n.every((e=>!!e&&!t.composedPath().includes(e)))&&!r&&e()}else r.current&&!r.current.contains(u)&&e()};return(t||m).forEach((e=>document.addEventListener(e,u))),()=>{(t||m).forEach((e=>document.removeEventListener(e,u)))}}),[r,e,n]),r}function w({timeout:e=2e3}={}){const[t,n]=(0,a.useState)(null),[r,u]=(0,a.useState)(!1),[o,c]=(0,a.useState)(null);return{copy:t=>{"clipboard"in navigator?navigator.clipboard.writeText(t).then((()=>(!0,window.clearTimeout(o),c(window.setTimeout((()=>u(!1)),e)),void u(true)))).catch((e=>n(e))):n(new Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{u(!1),n(null),window.clearTimeout(o)},error:t,copied:r}}function h(e,t,{getInitialValueInEffect:n}={getInitialValueInEffect:!0}){const[r,u]=(0,a.useState)(n?t:function(e,t){return"undefined"!=typeof window&&"matchMedia"in window&&window.matchMedia(e).matches}(e)),o=(0,a.useRef)();return(0,a.useEffect)((()=>{if("matchMedia"in window)return o.current=window.matchMedia(e),u(o.current.matches),function(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch(n){return e.addListener(t),()=>e.removeListener(t)}}(o.current,(e=>u(e.matches)))}),[e]),r}function g(e,t){return h("(prefers-color-scheme: dark)","dark"===e,t)?"dark":"light"}const p={min:-1/0,max:1/0};function E(e=0,t){const{min:n,max:u}={...p,...t},[o,c]=(0,a.useState)(r(e,n,u));return[o,{increment:()=>c((e=>r(e+1,n,u))),decrement:()=>c((e=>r(e-1,n,u))),set:e=>c(r(e,n,u)),reset:()=>c(r(e,n,u))}]}function y(e,t,n={leading:!1}){const[r,u]=(0,a.useState)(e),o=(0,a.useRef)(null),c=(0,a.useRef)(!0),i=()=>window.clearTimeout(o.current);return(0,a.useEffect)((()=>i),[]),[r,(0,a.useCallback)((e=>{i(),c.current&&n.leading?u(e):o.current=window.setTimeout((()=>{c.current=!0,u(e)}),t),c.current=!1}),[n.leading])]}function b(e,t,n={leading:!1}){const[r,u]=(0,a.useState)(e),o=(0,a.useRef)(!1),c=(0,a.useRef)(null),i=(0,a.useRef)(!1),s=()=>window.clearTimeout(c.current);return(0,a.useEffect)((()=>{o.current&&(!i.current&&n.leading?(i.current=!0,u(e)):(s(),c.current=window.setTimeout((()=>{i.current=!1,u(e)}),t)))}),[e,n.leading,t]),(0,a.useEffect)((()=>(o.current=!0,s)),[]),[r,s]}const S="undefined"!=typeof document?a.useLayoutEffect:a.useEffect;function L(e){S((()=>{"string"==typeof e&&e.trim().length>0&&(document.title=e.trim())}),[e])}function k(){const[e,t]=(0,a.useState)("visible");return(0,a.useEffect)((()=>{const e=()=>t(document.visibilityState);return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)}),[]),e}function R(e,t){const n=(0,a.useRef)(!1);(0,a.useEffect)((()=>()=>{n.current=!1}),[]),(0,a.useEffect)((()=>{if(n.current)return e();n.current=!0}),t)}function C({opened:e,shouldReturnFocus:t=!0}){const n=(0,a.useRef)(),r=()=>{n.current&&"focus"in n.current&&"function"==typeof n.current.focus&&n.current?.focus({preventScroll:!0})};return R((()=>{let u=-1;const o=e=>{"Tab"===e.key&&window.clearTimeout(u)};return document.addEventListener("keydown",o),e?n.current=document.activeElement:t&&(u=window.setTimeout(r,10)),()=>{window.clearTimeout(u),document.removeEventListener("keydown",o)}}),[e,t]),r}const x=/input|select|textarea|button|object/,T="a, input, select, textarea, button, object, [tabindex]";function A(e){return"none"===e.style.display}function I(e){let t=e.getAttribute("tabindex");return null===t&&(t=void 0),parseInt(t,10)}function F(e){const t=e.nodeName.toLowerCase(),n=!Number.isNaN(I(e));return(x.test(t)&&!e.disabled||e instanceof HTMLAnchorElement&&e.href||n)&&function(e){if(e.getAttribute("aria-hidden")||e.getAttribute("hidden")||"hidden"===e.getAttribute("type"))return!1;let t=e;for(;t&&t!==document.body&&11!==t.nodeType;){if(A(t))return!1;t=t.parentNode}return!0}(e)}function M(e){const t=I(e);return(Number.isNaN(t)||t>=0)&&F(e)}function V(e){return Array.from(e.querySelectorAll(T)).filter(M)}function D(e=!0){const t=(0,a.useRef)(),n=(0,a.useRef)(null),r=e=>{let t=e.querySelector("[data-autofocus]");if(!t){const n=Array.from(e.querySelectorAll(T));t=n.find(M)||n.find(F)||null,!t&&F(e)&&(t=e)}t&&t.focus({preventScroll:!0})},u=(0,a.useCallback)((u=>{e&&(null!==u?(n.current=function(e,t="body > :not(script)"){const n=o(),r=Array.from(document.querySelectorAll(t)).map((t=>{if(t?.shadowRoot?.contains(e)||t.contains(e))return;const r=t.getAttribute("aria-hidden"),u=t.getAttribute("data-hidden"),o=t.getAttribute("data-focus-id");return t.setAttribute("data-focus-id",n),null===r||"false"===r?t.setAttribute("aria-hidden","true"):u||o||t.setAttribute("data-hidden",r),{node:t,ariaHidden:u||null}}));return()=>{r.forEach((e=>{e&&n===e.node.getAttribute("data-focus-id")&&(null===e.ariaHidden?e.node.removeAttribute("aria-hidden"):e.node.setAttribute("aria-hidden",e.ariaHidden),e.node.removeAttribute("data-focus-id"),e.node.removeAttribute("data-hidden"))}))}}(u),t.current!==u&&(u?(setTimeout((()=>{u.getRootNode()&&r(u)})),t.current=u):t.current=null)):n.current&&(n.current(),n.current=null))}),[e]);return(0,a.useEffect)((()=>{if(!e)return;t.current&&setTimeout((()=>r(t.current)));const u=e=>{"Tab"===e.key&&t.current&&function(e,t){const n=V(e);if(!n.length)return void t.preventDefault();const r=n[t.shiftKey?0:n.length-1],u=e.getRootNode();let o=r===u.activeElement||e===u.activeElement;const c=u.activeElement;if("INPUT"===c.tagName&&"radio"===c.getAttribute("type")&&(o=n.filter((e=>"radio"===e.getAttribute("type")&&e.getAttribute("name")===c.getAttribute("name"))).includes(r)),!o)return;t.preventDefault();const i=n[t.shiftKey?n.length-1:0];i&&i.focus()}(t.current,e)};return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u),n.current&&n.current()}}),[e]),u}const O=e=>(e+1)%1e6;function q(){const[,e]=(0,a.useReducer)(O,0);return e}const z=l()["useId".toString()]||(()=>{});function N(e){const t=function(){const e=z();return e?`mantine-${e.replace(/:/g,"")}`:""}(),[n,r]=(0,a.useState)(t);return S((()=>{r(o())}),[]),"string"==typeof e?e:"undefined"==typeof window?t:n}const P={events:["keypress","mousemove","touchmove","click","scroll"],initialState:!0};function H(e,t){const{events:n,initialState:r}={...P,...t},[u,o]=(0,a.useState)(r),c=(0,a.useRef)();return(0,a.useEffect)((()=>{const t=()=>{o(!1),c.current&&window.clearTimeout(c.current),c.current=window.setTimeout((()=>{o(!0)}),e)};return n.forEach((e=>document.addEventListener(e,t))),()=>{n.forEach((e=>document.removeEventListener(e,t)))}}),[e]),u}function $(e,t){const[n,r]=(0,a.useState)(!1),u=(0,a.useRef)(),o=(0,a.useRef)();(0,a.useEffect)((()=>{o.current=e}),[e]);const c=()=>{r((e=>(e||u.current||(u.current=window.setInterval(o.current,t)),!0)))},i=()=>{r(!1),window.clearInterval(u.current),u.current=void 0};return{start:c,stop:i,toggle:()=>{n?i():c()},active:n}}function W(e=[]){const[t,n]=(0,a.useState)(e);return[t,{setState:n,append:(...e)=>n((t=>[...t,...e])),prepend:(...e)=>n((t=>[...e,...t])),insert:(e,...t)=>n((n=>[...n.slice(0,e),...t,...n.slice(e)])),pop:()=>n((e=>{const t=[...e];return t.pop(),t})),shift:()=>n((e=>{const t=[...e];return t.shift(),t})),apply:e=>n((t=>t.map(((t,n)=>e(t,n))))),applyWhere:(e,t)=>n((n=>n.map(((n,r)=>e(n,r)?t(n,r):n)))),remove:(...e)=>n((t=>t.filter(((t,n)=>!e.includes(n))))),reorder:({from:e,to:t})=>n((n=>{const r=[...n],u=n[e];return r.splice(e,1),r.splice(t,0,u),r})),swap:({from:e,to:t})=>n((n=>{const r=[...n],u=r[e],o=r[t];return r.splice(t,1,u),r.splice(e,1,o),r})),setItem:(e,t)=>n((n=>{const r=[...n];return r[e]=t,r})),setItemProp:(e,t,r)=>n((n=>{const u=[...n];return u[e]={...u[e],[t]:r},u})),filter:e=>{n((t=>t.filter(e)))}}]}function j(e,t,n){(0,a.useEffect)((()=>(window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n))),[e,t])}function K(e){try{return e&&JSON.parse(e)}catch{return e}}function X(e){return{getItem:t=>{try{return window[e].getItem(t)}catch(e){return console.warn("use-local-storage: Failed to get value from storage, localStorage is blocked"),null}},setItem:(t,n)=>{try{window[e].setItem(t,n)}catch(e){console.warn("use-local-storage: Failed to set value to storage, localStorage is blocked")}},removeItem:t=>{try{window[e].removeItem(t)}catch(e){console.warn("use-local-storage: Failed to remove value from storage, localStorage is blocked")}}}}function Y(e,t){const n="localStorage"===e?"mantine-local-storage":"mantine-session-storage",{getItem:r,setItem:u,removeItem:o}=X(e);return function({key:c,defaultValue:i,getInitialValueInEffect:s=!0,deserialize:l=K,serialize:f=(e=>function(e,t="use-local-storage"){try{return JSON.stringify(e)}catch(e){throw new Error(`@mantine/hooks ${t}: Failed to serialize the value`)}}(e,t))}){const d=(0,a.useCallback)((t=>{let n;try{n="undefined"==typeof window||!(e in window)||null===window[e]||!!t}catch(e){n=!0}if(n)return i;const u=r(c);return null!==u?l(u):i}),[c,i]),[m,v]=(0,a.useState)(d(s)),w=(0,a.useCallback)((e=>{e instanceof Function?v((t=>{const r=e(t);return u(c,f(r)),window.dispatchEvent(new CustomEvent(n,{detail:{key:c,value:e(t)}})),r})):(u(c,f(e)),window.dispatchEvent(new CustomEvent(n,{detail:{key:c,value:e}})),v(e))}),[c]),h=(0,a.useCallback)((()=>{o(c),window.dispatchEvent(new CustomEvent(n,{detail:{key:c,value:i}}))}),[]);return j("storage",(t=>{t.storageArea===window[e]&&t.key===c&&v(l(t.newValue??void 0))})),j(n,(e=>{e.detail.key===c&&v(e.detail.value)})),(0,a.useEffect)((()=>{void 0!==i&&void 0===m&&w(i)}),[i,m,w]),(0,a.useEffect)((()=>{const e=d();void 0!==e&&w(e)}),[]),[void 0===m?i:m,w,h]}}function U(e){const{getItem:t}=X(e);return function({key:n,defaultValue:r,deserialize:u=K}){let o;try{o="undefined"==typeof window||!(e in window)||null===window[e]}catch(e){o=!0}if(o)return r;const c=t(n);return null!==c?u(c):r}}function B(e){return Y("localStorage","use-local-storage")(e)}const Q=U("localStorage");function J(e){return Y("sessionStorage","use-session-storage")(e)}const _=U("sessionStorage");function G(e,t){"function"==typeof e?e(t):"object"==typeof e&&null!==e&&"current"in e&&(e.current=t)}function Z(...e){return t=>{e.forEach((e=>G(e,t)))}}function ee(...e){return(0,a.useCallback)(Z(...e),e)}function te(e={resetOnExit:!1}){const[t,n]=(0,a.useState)({x:0,y:0}),r=(0,a.useRef)(),u=e=>{if(r.current){const t=e.currentTarget.getBoundingClientRect(),r=Math.max(0,Math.round(e.pageX-t.left-(window.pageXOffset||window.scrollX))),u=Math.max(0,Math.round(e.pageY-t.top-(window.pageYOffset||window.scrollY)));n({x:r,y:u})}else n({x:e.clientX,y:e.clientY})},o=()=>n({x:0,y:0});return(0,a.useEffect)((()=>{const t=r?.current?r.current:document;return t.addEventListener("mousemove",u),e.resetOnExit&&t.addEventListener("mouseleave",o),()=>{t.removeEventListener("mousemove",u),e.resetOnExit&&t.removeEventListener("mouseleave",o)}}),[r.current]),{ref:r,...t}}function ne(e){return{x:r(e.x,0,1),y:r(e.y,0,1)}}function re(e,t,n="ltr"){const u=(0,a.useRef)(null),o=(0,a.useRef)(!1),c=(0,a.useRef)(!1),i=(0,a.useRef)(0),[s,l]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{o.current=!0}),[]),(0,a.useEffect)((()=>{const s=({x:t,y:c})=>{cancelAnimationFrame(i.current),i.current=requestAnimationFrame((()=>{if(o.current&&u.current){u.current.style.userSelect="none";const o=u.current.getBoundingClientRect();if(o.width&&o.height){const u=r((t-o.left)/o.width,0,1);e({x:"ltr"===n?u:1-u,y:r((c-o.top)/o.height,0,1)})}}}))},a=()=>{!c.current&&o.current&&(c.current=!0,"function"==typeof t?.onScrubStart&&t.onScrubStart(),l(!0),document.addEventListener("mousemove",m),document.addEventListener("mouseup",f),document.addEventListener("touchmove",w),document.addEventListener("touchend",f))},f=()=>{c.current&&o.current&&(c.current=!1,l(!1),document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",f),setTimeout((()=>{"function"==typeof t?.onScrubEnd&&t.onScrubEnd()}),0))},d=e=>{a(),e.preventDefault(),m(e)},m=e=>s({x:e.clientX,y:e.clientY}),v=e=>{e.cancelable&&e.preventDefault(),a(),w(e)},w=e=>{e.cancelable&&e.preventDefault(),s({x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY})};return u.current?.addEventListener("mousedown",d),u.current?.addEventListener("touchstart",v,{passive:!1}),()=>{u.current&&(u.current.removeEventListener("mousedown",d),u.current.removeEventListener("touchstart",v))}}),[n,e]),{ref:u,active:s}}function ue({value:e,defaultValue:t,finalValue:n,onChange:r=(()=>{})}){const[u,o]=(0,a.useState)(void 0!==t?t:n);return void 0!==e?[e,r,!0]:[u,(e,...t)=>{o(e),r?.(e,...t)},!1]}function oe(e,t){const n=t-e+1;return Array.from({length:n},((t,n)=>n+e))}const ce="dots";function ie({total:e,siblings:t=1,boundaries:n=1,page:r,initialPage:u=1,onChange:o}){const c=Math.max(Math.trunc(e),0),[i,s]=ue({value:r,onChange:o,defaultValue:u,finalValue:u}),l=e=>{s(e<=0?1:e>c?c:e)};return{range:(0,a.useMemo)((()=>{if(2*t+3+2*n>=c)return oe(1,c);const e=Math.max(i-t,n),r=Math.min(i+t,c-n),u=e>n+2,o=r<c-(n+1);if(!u&&o)return[...oe(1,2*t+n+2),ce,...oe(c-(n-1),c)];if(u&&!o){const e=n+1+2*t;return[...oe(1,n),ce,...oe(c-e,c)]}return[...oe(1,n),ce,...oe(e,r),ce,...oe(c-n+1,c)]}),[c,t,i]),active:i,setPage:l,next:()=>l(i+1),previous:()=>l(i-1),first:()=>l(1),last:()=>l(c)}}function se({initialValues:e=[],limit:t}){const[{state:n,queue:r},u]=(0,a.useState)({state:e.slice(0,t),queue:e.slice(t)});return{state:n,queue:r,add:(...e)=>u((n=>{const r=[...n.state,...n.queue,...e];return{state:r.slice(0,t),queue:r.slice(t)}})),update:e=>u((n=>{const r=e([...n.state,...n.queue]);return{state:r.slice(0,t),queue:r.slice(t)}})),cleanQueue:()=>u((e=>({state:e.state,queue:[]})))}}function ae(e){(0,a.useEffect)((()=>(document.documentElement.addEventListener("mouseleave",e),()=>document.documentElement.removeEventListener("mouseleave",e))),[])}function le(e,t){return h("(prefers-reduced-motion: reduce)",e,t)}const fe=e=>e<.5?2*e*e:(4-2*e)*e-1,de=({axis:e,target:t,parent:n,alignment:r,offset:u,isList:o})=>{if(!t||!n&&"undefined"==typeof document)return 0;const c=!!n,i=(n||document.body).getBoundingClientRect(),s=t.getBoundingClientRect(),a=e=>s[e]-i[e];if("y"===e){const e=a("top");if(0===e)return 0;if("start"===r){const t=e-u;return t<=s.height*(o?0:1)||!o?t:0}const t=c?i.height:window.innerHeight;if("end"===r){const n=e+u-t+s.height;return n>=-s.height*(o?0:1)||!o?n:0}return"center"===r?e-t/2+s.height/2:0}if("x"===e){const e=a("left");if(0===e)return 0;if("start"===r){const t=e-u;return t<=s.width||!o?t:0}const t=c?i.width:window.innerWidth;if("end"===r){const n=e+u-t+s.width;return n>=-s.width||!o?n:0}return"center"===r?e-t/2+s.width/2:0}return 0},me=({axis:e,parent:t})=>{if(!t&&"undefined"==typeof document)return 0;const n="y"===e?"scrollTop":"scrollLeft";if(t)return t[n];const{body:r,documentElement:u}=document;return r[n]+u[n]},ve=({axis:e,parent:t,distance:n})=>{if(!t&&"undefined"==typeof document)return;const r="y"===e?"scrollTop":"scrollLeft";if(t)t[r]=n;else{const{body:e,documentElement:t}=document;e[r]=n,t[r]=n}};function we({duration:e=1250,axis:t="y",onScrollFinish:n,easing:r=fe,offset:u=0,cancelable:o=!0,isList:c=!1}={}){const i=(0,a.useRef)(0),s=(0,a.useRef)(0),l=(0,a.useRef)(!1),f=(0,a.useRef)(null),d=(0,a.useRef)(null),m=le(),v=()=>{i.current&&cancelAnimationFrame(i.current)},w=(0,a.useCallback)((({alignment:o="start"}={})=>{l.current=!1,i.current&&v();const a=me({parent:f.current,axis:t})??0,w=de({parent:f.current,target:d.current,axis:t,alignment:o,offset:u,isList:c})-(f.current?0:a);!function u(){0===s.current&&(s.current=performance.now());const o=performance.now()-s.current,c=m||0===e?1:o/e,d=a+w*r(c);ve({parent:f.current,axis:t,distance:d}),!l.current&&c<1?i.current=requestAnimationFrame(u):("function"==typeof n&&n(),s.current=0,i.current=0,v())}()}),[t,e,r,c,u,n,m]),h=()=>{o&&(l.current=!0)};return j("wheel",h,{passive:!0}),j("touchmove",h,{passive:!0}),(0,a.useEffect)((()=>v),[]),{scrollableRef:f,targetRef:d,scrollIntoView:w,cancel:v}}const he={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function ge(e){const t=(0,a.useRef)(0),n=(0,a.useRef)(null),[r,u]=(0,a.useState)(he),o=(0,a.useMemo)((()=>"undefined"!=typeof window?new ResizeObserver((e=>{const r=e[0];r&&(cancelAnimationFrame(t.current),t.current=requestAnimationFrame((()=>{n.current&&u(r.contentRect)})))})):null),[]);return(0,a.useEffect)((()=>(n.current&&o?.observe(n.current,e),()=>{o?.disconnect(),t.current&&cancelAnimationFrame(t.current)})),[n.current]),[n,r]}function pe(e){const[t,{width:n,height:r}]=ge(e);return{ref:t,width:n,height:r}}function Ee(e,t){(0,a.useEffect)(e,function(e){const t=(0,a.useRef)([]),n=(0,a.useRef)(0);return function(e,t){if(!e||!t)return!1;if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(!i(e[n],t[n]))return!1;return!0}(t.current,e)||(t.current=e,n.current+=1),[n.current]}(t))}function ye(e=[!1,!0]){const[[t],n]=(0,a.useReducer)(((e,t)=>{const n=t instanceof Function?t(e[0]):t,r=Math.abs(e.indexOf(n));return e.slice(r).concat(e.slice(0,r))}),e);return[t,n]}const be={passive:!0};function Se(){const[e,t]=(0,a.useState)({width:0,height:0}),n=(0,a.useCallback)((()=>{t({width:window.innerWidth||0,height:window.innerHeight||0})}),[]);return j("resize",n,be),j("orientationchange",n,be),(0,a.useEffect)(n,[]),e}function Le(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function ke({x:e,y:t}){if("undefined"!=typeof window){const n={behavior:"smooth"};"number"==typeof e&&(n.left=e),"number"==typeof t&&(n.top=t),window.scrollTo(n)}}function Re(){const[e,t]=(0,a.useState)({x:0,y:0});return j("scroll",(()=>t(Le()))),j("resize",(()=>t(Le()))),(0,a.useEffect)((()=>{t(Le())}),[]),[e,ke]}function Ce(e){const[t,n]=(0,a.useState)(null),r=(0,a.useRef)(null);return{ref:(0,a.useCallback)((t=>{r.current&&(r.current.disconnect(),r.current=null),null!==t?(r.current=new IntersectionObserver((([e])=>{n(e)}),e),r.current.observe(t)):n(null)}),[e?.rootMargin,e?.root,e?.threshold]),entry:t}}function xe({getInitialValueInEffect:e=!0}={}){const[t,n]=(0,a.useState)(e?"":window.location.hash||"");return j("hashchange",(()=>{const e=window.location.hash;t!==e&&n(t)})),(0,a.useEffect)((()=>{e&&n(window.location.hash)}),[]),[t,e=>{const t=e.startsWith("#")?e:`#${e}`;window.location.hash=t,n(t)}]}function Te(e){return t=>function(e,t){const{alt:n,ctrl:r,meta:u,mod:o,shift:c,key:i}=e,{altKey:s,ctrlKey:a,metaKey:l,shiftKey:f,key:d}=t;if(n!==s)return!1;if(o){if(!a&&!l)return!1}else{if(r!==a)return!1;if(u!==l)return!1}return c===f&&!(!i||d.toLowerCase()!==i.toLowerCase()&&t.code.replace("Key","").toLowerCase()!==i.toLowerCase())}(function(e){const t=e.toLowerCase().split("+").map((e=>e.trim())),n={alt:t.includes("alt"),ctrl:t.includes("ctrl"),meta:t.includes("meta"),mod:t.includes("mod"),shift:t.includes("shift")},r=["alt","ctrl","meta","shift","mod"];return{...n,key:t.find((e=>!r.includes(e)))}}(e),t)}function Ae(e){return t=>{const n="nativeEvent"in t?t.nativeEvent:t;e.forEach((([e,r,u={preventDefault:!0}])=>{Te(e)(n)&&(u.preventDefault&&t.preventDefault(),r(n))}))}}function Ie(e,t=["INPUT","TEXTAREA","SELECT"],n=!1){(0,a.useEffect)((()=>{const r=r=>{e.forEach((([e,u,o={preventDefault:!0}])=>{Te(e)(r)&&function(e,t,n=!1){return!(e.target instanceof HTMLElement)||(n||!e.target.isContentEditable)&&!t.includes(e.target.tagName)}(r,t,n)&&(o.preventDefault&&r.preventDefault(),u(r))}))};return document.documentElement.addEventListener("keydown",r),()=>document.documentElement.removeEventListener("keydown",r)}),[e])}function Fe(){const e=window.document;return e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement}const Me=["","webkit","moz","ms"];function Ve(e,{onFullScreen:t,onError:n}){return Me.forEach((r=>{e.addEventListener(`${r}fullscreenchange`,t),e.addEventListener(`${r}fullscreenerror`,n)})),()=>{Me.forEach((r=>{e.removeEventListener(`${r}fullscreenchange`,t),e.removeEventListener(`${r}fullscreenerror`,n)}))}}function De(){const[e,t]=(0,a.useState)(!1),n=(0,a.useRef)(),r=(0,a.useCallback)((e=>{t(e.target===Fe())}),[t]),u=(0,a.useCallback)((e=>{t(!1),console.error(`[@mantine/hooks] use-fullscreen: Error attempting full-screen mode method: ${e} (${e.target})`)}),[t]),o=(0,a.useCallback)((async()=>{Fe()?await async function(){const e=window.document;return"function"==typeof e.exitFullscreen?e.exitFullscreen():"function"==typeof e.msExitFullscreen?e.msExitFullscreen():"function"==typeof e.webkitExitFullscreen?e.webkitExitFullscreen():"function"==typeof e.mozCancelFullScreen?e.mozCancelFullScreen():null}():await async function(e){const t=e;return t.requestFullscreen?.()||t.msRequestFullscreen?.()||t.webkitEnterFullscreen?.()||t.webkitRequestFullscreen?.()||t.mozRequestFullscreen?.()}(n.current)}),[]),c=(0,a.useCallback)((e=>{n.current=null===e?window.document.documentElement:e}),[]);return(0,a.useEffect)((()=>!n.current&&window.document?(n.current=window.document.documentElement,Ve(n.current,{onFullScreen:r,onError:u})):n.current?Ve(n.current,{onFullScreen:r,onError:u}):void 0),[]),{ref:c,toggle:o,fullscreen:e}}function Oe(e,t){return(0,a.useEffect)((()=>(console.log(`${e} mounted`,...t),()=>console.log(`${e} unmounted`))),[]),R((()=>{console.log(`${e} updated`,...t)}),t),null}function qe(){const[e,t]=(0,a.useState)(!1),n=(0,a.useRef)(null),r=(0,a.useCallback)((()=>t(!0)),[]),u=(0,a.useCallback)((()=>t(!1)),[]);return(0,a.useEffect)((()=>{if(n.current)return n.current.addEventListener("mouseenter",r),n.current.addEventListener("mouseleave",u),()=>{n.current?.removeEventListener("mouseenter",r),n.current?.removeEventListener("mouseleave",u)}}),[]),{ref:n,hovered:e}}function ze(e,t,n){const[r,u]=(0,a.useState)(e),[o,c]=(0,a.useState)(t(e)?e:void 0),[i,s]=(0,a.useState)("boolean"==typeof n?n:t(e));return[{value:r,lastValidValue:o,valid:i},e=>{t(e)?(c(e),s(!0)):s(!1),u(e)}]}function Ne(){if("undefined"==typeof window)return"undetermined";const{userAgent:e}=window.navigator;return/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i.test(e)?"macos":/(iPhone)|(iPad)|(iPod)/i.test(e)?"ios":/(Win32)|(Win64)|(Windows)|(WinCE)/i.test(e)?"windows":/Android/i.test(e)?"android":/Linux/i.test(e)?"linux":"undetermined"}function Pe(e={getValueInEffect:!0}){const[t,n]=(0,a.useState)(e.getValueInEffect?"undetermined":Ne());return S((()=>{e.getValueInEffect&&n(Ne)}),[]),t}function He(e){const[t,n]=(0,a.useState)(e);return[t,(0,a.useCallback)((e=>n((t=>({...t,..."function"==typeof e?e(t):e})))),[])]}function $e(e){return t=>{if(t)if("function"==typeof t)e(t);else if("object"==typeof t&&"nativeEvent"in t){const{currentTarget:n}=t;"checkbox"===n.type?e(n.checked):e(n.value)}else e(t);else e(t)}}function We(e){const[t,n]=(0,a.useState)(e);return[t,$e(n)]}function je(e,t,n){const r=(0,a.useRef)();return(0,a.useEffect)((()=>{if(r.current)return r.current.addEventListener(e,t,n),()=>r.current?.removeEventListener(e,t,n)}),[t,n]),r}function Ke(e=!1,t){const{onOpen:n,onClose:r}=t||{},[u,o]=(0,a.useState)(e),c=(0,a.useCallback)((()=>{o((e=>e||(n?.(),!0)))}),[n]),i=(0,a.useCallback)((()=>{o((e=>e?(r?.(),!1):e))}),[r]),s=(0,a.useCallback)((()=>{u?i():c()}),[i,c,u]);return[u,{open:c,close:i,toggle:s}]}function Xe({onBlur:e,onFocus:t}={}){const n=(0,a.useRef)(),[r,u]=(0,a.useState)(!1),o=(0,a.useRef)(!1),c=e=>{u(e),o.current=e},i=e=>{o.current||(c(!0),t?.(e))},s=t=>{o.current&&!function(e){return e.currentTarget instanceof HTMLElement&&e.relatedTarget instanceof HTMLElement&&e.currentTarget.contains(e.relatedTarget)}(t)&&(c(!1),e?.(t))};return(0,a.useEffect)((()=>{if(n.current)return n.current.addEventListener("focusin",i),n.current.addEventListener("focusout",s),()=>{n.current?.removeEventListener("focusin",i),n.current?.removeEventListener("focusout",s)}}),[i,s]),{ref:n,focused:r}}function Ye(){if("undefined"==typeof navigator)return{};const e=navigator,t=e.connection||e.mozConnection||e.webkitConnection;return t?{downlink:t?.downlink,downlinkMax:t?.downlinkMax,effectiveType:t?.effectiveType,rtt:t?.rtt,saveData:t?.saveData,type:t?.type}:{}}function Ue(){const[e,t]=(0,a.useState)({online:!0}),n=(0,a.useCallback)((()=>t((e=>({...e,...Ye()})))),[]);return j("online",(()=>t({online:!0,...Ye()}))),j("offline",(()=>t({online:!1,...Ye()}))),(0,a.useEffect)((()=>{const e=navigator;if(e.connection)return t({online:e.onLine,...Ye()}),e.connection.addEventListener("change",n),()=>e.connection.removeEventListener("change",n);"boolean"==typeof e.onLine&&t((t=>({...t,online:e.onLine})))}),[]),e}function Be(e,t,n={autoInvoke:!1}){const r=(0,a.useRef)(null),u=(0,a.useCallback)(((...n)=>{r.current||(r.current=window.setTimeout((()=>{e(n),r.current=null}),t))}),[t]),o=(0,a.useCallback)((()=>{r.current&&(window.clearTimeout(r.current),r.current=null)}),[]);return(0,a.useEffect)((()=>(n.autoInvoke&&u(),o)),[o,u]),{start:u,clear:o}}function Qe(){const e=q(),[t,n]=(0,a.useState)(null),r=()=>{n(document.getSelection()),e()};return(0,a.useEffect)((()=>(n(document.getSelection()),document.addEventListener("selectionchange",r),()=>document.removeEventListener("selectionchange",r))),[]),t}function Je(e){const t=(0,a.useRef)();return(0,a.useEffect)((()=>{t.current=e}),[e]),t.current}const _e={ico:"image/x-icon",png:"image/png",svg:"image/svg+xml",gif:"image/gif"};function Ge(e){const t=(0,a.useRef)();S((()=>{if(!e)return;if(!t.current){document.querySelectorAll('link[rel*="icon"]').forEach((e=>document.head.removeChild(e)));const e=document.createElement("link");e.rel="shortcut icon",t.current=e,document.querySelector("head").appendChild(e)}const n=e.split(".");t.current.setAttribute("type",_e[n[n.length-1].toLowerCase()]),t.current.setAttribute("href",e)}),[e])}const Ze=(e,t)=>e<=t,et=(e,t,n,r,u,o)=>{const c=Ze(e,t);c&&!n.current?(n.current=!0,u?.()):c||!r||n.current?!c&&n.current&&(n.current=!1,o?.()):(n.current=!0,u?.())},tt=()=>{const[e,t]=(0,a.useState)(0),[n,r]=(0,a.useState)(!1),[u,o]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{let n;const c=()=>{o(!0),clearTimeout(n),n=setTimeout((()=>{o(!1)}),300)},i=()=>{if(u)return;const n=window.pageYOffset||document.documentElement.scrollTop;r(n<e),t(n)};return window.addEventListener("scroll",i),window.addEventListener("resize",c),()=>{window.removeEventListener("scroll",i),window.removeEventListener("resize",c)}}),[e,u]),n};function nt({fixedAt:e=0,onPin:t,onFix:n,onRelease:r}={}){const u=(0,a.useRef)(!1),o=tt(),[{y:c}]=Re();return S((()=>{et(c,e,u,o,t,r)}),[c]),S((()=>{Ze(c,e)&&n?.()}),[c,e,n]),!(!Ze(c,e)&&!o)}function rt(){const[e,t]=(0,a.useState)(!1);S((()=>{t("undefined"!=typeof window&&"EyeDropper"in window)}),[]);const n=(0,a.useCallback)(((t={})=>e?(new window.EyeDropper).open(t):Promise.resolve(void 0)),[e]);return{supported:e,open:n}}function ut(){const e=(0,a.useRef)(null),[t,n]=(0,a.useState)(!1),r=(0,a.useMemo)((()=>"undefined"==typeof IntersectionObserver?null:new IntersectionObserver((([e])=>n(e.isIntersecting)))),[e]);return(0,a.useEffect)((()=>e.current&&r?(r.observe(e.current),()=>r.disconnect()):()=>null),[]),{ref:e,inViewport:t}}}}]);