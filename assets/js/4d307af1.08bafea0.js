"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[547],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=p(r),h=a,d=s["".concat(l,".").concat(h)]||s[h]||c[h]||i;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4951:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],u={},l="Router",p={unversionedId:"architecture/router",id:"architecture/router",title:"Router",description:"The router determines which handlers are called when a request hits the app based on HTTP method (GET, POST, DELETE, etc.) and URL. Every router handles routes a little differently so if you want to extend a router that already exists, it needs to meet the minimum requirements",source:"@site/docs/architecture/router.md",sourceDirName:"architecture",slug:"/architecture/router",permalink:"/docs/docs/architecture/router",editUrl:"https://github.com/ambientkit/docs/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/router.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Storage System",permalink:"/docs/docs/architecture/storage"},next:{title:"Template Engine",permalink:"/docs/docs/architecture/template-engine"}},m=[],c={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"router"},"Router"),(0,i.kt)("p",null,"The router determines which handlers are called when a request hits the app based on HTTP method (GET, POST, DELETE, etc.) and URL. Every router handles routes a little differently so if you want to extend a router that already exists, it needs to meet the minimum requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"must support parameters in URL paths: ",(0,i.kt)("inlineCode",{parentName:"li"},"/music/{band}/{song}")),(0,i.kt)("li",{parentName:"ul"},"parameters in URLs must be surrounded in braces - if they use the convention where they start with a colon (",(0,i.kt)("inlineCode",{parentName:"li"},"/music/:band/:song"),"), you can use the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/plugin/tree/main/pkg/paramconvert"},(0,i.kt)("inlineCode",{parentName:"a"},"paramconvert"))," package to make it compatible with Ambient"),(0,i.kt)("li",{parentName:"ul"},"must support routes being added and removed via ",(0,i.kt)("inlineCode",{parentName:"li"},"Clear(method string, path string)")," - when plugins are disabled while the app is running, the routes must no longer be accessible"),(0,i.kt)("li",{parentName:"ul"},"the order in which routes are added shouldn't matter. For instance, if ",(0,i.kt)("inlineCode",{parentName:"li"},"GET /app/{name}")," is added before ",(0,i.kt)("inlineCode",{parentName:"li"},"GET /app"),", it should behave the same as if they were added in reverse")),(0,i.kt)("p",null,"There are five routers in the library:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/plugin/tree/main/router/awayrouter"},"awayrouter")," - routing using fork of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/away"},(0,i.kt)("inlineCode",{parentName:"a"},"matryer/way"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/plugin/tree/main/router/chirouter"},"chirouter")," - routing using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/go-chi/chi"},(0,i.kt)("inlineCode",{parentName:"a"},"go-chi/chi"))," with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/plugin/tree/main/pkg/paramconvert"},(0,i.kt)("inlineCode",{parentName:"a"},"paramconvert"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/plugin/tree/main/router/gorillamux"},"gorillamux")," - routing using fork of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/mux"},(0,i.kt)("inlineCode",{parentName:"a"},"gorilla/mux"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/plugin/tree/main/router/jshttprouter"},"jshttprouter")," routing using fork of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/httprouter"},(0,i.kt)("inlineCode",{parentName:"a"},"julienschmidt/httprouter"))," with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/plugin/tree/main/pkg/paramconvert"},(0,i.kt)("inlineCode",{parentName:"a"},"paramconvert"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/plugin/tree/main/router/patrouter"},"patrouter")," - routing using fork of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/pat"},(0,i.kt)("inlineCode",{parentName:"a"},"bmizerany/pat"))," with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/plugin/tree/main/pkg/paramconvert"},(0,i.kt)("inlineCode",{parentName:"a"},"paramconvert")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"awayrouter")," is also used for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/cli/devconsole"},"Dev Console"),"."))}s.isMDXComponent=!0}}]);