(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),u=n(1978),a=n(2139),f=n(7795),i=n(670),c=n(4465),s=n(2692),d=n(8245),p=n(9246),h=n(227),v=n(3468);let y=new Set;function _(e,t,n,o,r){if(r||a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(y.has(l))return;y.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function b(e){return"string"==typeof e?e:f.formatUrl(e)}let g=l.default.forwardRef(function(e,t){let n,o;let{href:f,as:y,children:g,prefetch:m,passHref:C,replace:j,shallow:M,scroll:E,locale:k,onClick:O,onMouseEnter:P,onTouchStart:x,legacyBehavior:w=!1}=e,L=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,w&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let S=!1!==m,T=l.default.useContext(s.RouterContext),R=l.default.useContext(d.AppRouterContext),I=null!=T?T:R,N=!T,{href:U,as:A}=l.default.useMemo(()=>{if(!T){let e=b(f);return{href:e,as:y?b(y):e}}let[e,t]=u.resolveHref(T,f,!0);return{href:e,as:y?u.resolveHref(T,y):t||e}},[T,f,y]),D=l.default.useRef(U),K=l.default.useRef(A);w&&(o=l.default.Children.only(n));let H=w?o&&"object"==typeof o&&o.ref:t,[B,X,Z]=p.useIntersection({rootMargin:"200px"}),q=l.default.useCallback(e=>{(K.current!==A||D.current!==U)&&(Z(),K.current=A,D.current=U),B(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[A,H,U,Z,B]);l.default.useEffect(()=>{I&&X&&S&&_(I,U,A,{locale:k},N)},[A,U,X,k,S,null==T?void 0:T.locale,I,N]);let z={ref:q,onClick(e){w||"function"!=typeof O||O(e),w&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,o,r,u,f,i,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:u,locale:i,scroll:f}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!s})};c?l.default.startTransition(h):h()}(e,I,U,A,j,M,E,k,N,S)},onMouseEnter(e){w||"function"!=typeof P||P(e),w&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),I&&(S||!N)&&_(I,U,A,{locale:k,priority:!0,bypassPrefetchedCheck:!0},N)},onTouchStart(e){w||"function"!=typeof x||x(e),w&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),I&&(S||!N)&&_(I,U,A,{locale:k,priority:!0,bypassPrefetchedCheck:!0},N)}};if(i.isAbsoluteUrl(A))z.href=A;else if(!w||C||"a"===o.type&&!("href"in o.props)){let e=void 0!==k?k:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&h.getDomainLocale(A,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);z.href=t||v.addBasePath(c.addLocale(A,e,null==T?void 0:T.defaultLocale))}return w?l.default.cloneElement(o,z):l.default.createElement("a",Object.assign({},L,z),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:f}=e,i=f||!l,[c,s]=o.useState(!1),d=o.useRef(null),p=o.useCallback(e=>{d.current=e},[]);o.useEffect(()=>{if(l){if(i||c)return;let e=d.current;if(e&&e.tagName){let o=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=u.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},a.push(n),u.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(o);let e=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return o}}else if(!c){let e=r.requestIdleCallback(()=>s(!0));return()=>r.cancelIdleCallback(e)}},[i,n,t,c,d.current]);let h=o.useCallback(()=>{s(!1)},[]);return[p,c,h]};var o=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u}});var o=n(5893),r=n(1664),l=n.n(r),u=!0;t.default=function(e){let{products:t}=e;return t?(0,o.jsx)("ul",{children:t.map(e=>(0,o.jsx)("li",{children:(0,o.jsx)(l(),{href:"/products/".concat(e.id),children:e.title})},e.id))}):(0,o.jsx)("p",{children:"...Loading"})}},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);