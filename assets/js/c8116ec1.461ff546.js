"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3971],{4185:function(e,t,i){i.r(t),i.d(t,{default:function(){return ee},prepareUserState:function(){return D}});var a=i(7294),r=i(2434),n=i(6010),s=i(7462),o=i(3366),c={svgIcon:"svgIcon_R3jO",small:"small_SUAn",medium:"medium_GxVq",large:"large_TyPU",primary:"primary_V8Cc",secondary:"secondary_WyIo",success:"success_lY5U",error:"error_eHdq",warning:"warning_IB04",inherit:"inherit_2ln5"},l=["svgClass","colorAttr","children","color","size","viewBox"];function u(e){var t=e.svgClass,i=e.colorAttr,r=e.children,u=e.color,g=void 0===u?"inherit":u,m=e.size,p=void 0===m?"medium":m,d=e.viewBox,h=void 0===d?"0 0 24 24":d,b=(0,o.Z)(e,l);return a.createElement("svg",(0,s.Z)({viewBox:h,color:i,"aria-hidden":!0,className:(0,n.Z)(c.svgIcon,c[g],c[p],t)},b),r)}function g(e){return a.createElement(u,e,a.createElement("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}))}var m=i(6775);function p(e,t){var i=[].concat(e);return i.sort((function(e,i){return t(e)>t(i)?1:t(i)>t(e)?-1:0})),i}var d="checkboxLabel_jpO0",h=["id","icon","label","tag"],b="tags";function w(e){return new URLSearchParams(e).getAll(b)}var k=a.forwardRef((function(e,t){var i=e.id,r=e.icon,n=e.label,c=e.tag,l=(0,o.Z)(e,h),u=(0,m.TH)(),g=(0,m.k6)(),p=(0,a.useState)(!1),k=p[0],f=p[1];(0,a.useEffect)((function(){var e=w(u.search);f(e.includes(c))}),[c,u]);var v=(0,a.useCallback)((function(){var e=function(e,t){var i=e.indexOf(t);if(-1===i)return e.concat(t);var a=[].concat(e);return a.splice(i,1),a}(w(u.search),c),t=function(e,t){var i=new URLSearchParams(e);return i.delete(b),t.forEach((function(e){return i.append(b,e)})),i.toString()}(u.search,e);g.push(Object.assign({},u,{search:t,state:D()}))}),[c,u,g]);return a.createElement(a.Fragment,null,a.createElement("input",(0,s.Z)({type:"checkbox",id:i,className:"screen-reader-only",onKeyDown:function(e){"Enter"===e.key&&v()},onFocus:function(e){var t;e.relatedTarget&&(null==(t=e.target.nextElementSibling)||t.dispatchEvent(new KeyboardEvent("focus")))},onBlur:function(e){var t;null==(t=e.target.nextElementSibling)||t.dispatchEvent(new KeyboardEvent("blur"))},onChange:v,checked:k},l)),a.createElement("label",{ref:t,htmlFor:i,className:d},n,r))})),f={checkboxLabel:"checkboxLabel_DBPG"},v="operator";function E(e){var t;return null!=(t=new URLSearchParams(e).get(v))?t:"OR"}function y(){var e="showcase_filter_toggle",t=(0,m.TH)(),i=(0,m.k6)(),r=(0,a.useState)(!1),s=r[0],o=r[1];(0,a.useEffect)((function(){o("AND"===E(t.search))}),[t]);var c=(0,a.useCallback)((function(){o((function(e){return!e}));var e=new URLSearchParams(t.search);e.delete(v),s||e.append(v,s?"OR":"AND"),i.push(Object.assign({},t,{search:e.toString(),state:D()}))}),[s,t,i]);return a.createElement("div",null,a.createElement("input",{type:"checkbox",id:e,className:"screen-reader-only","aria-label":"Toggle between or and and for the tags you selected",onChange:c,onKeyDown:function(e){"Enter"===e.key&&c()},checked:s}),a.createElement("label",{htmlFor:e,className:(0,n.Z)(f.checkboxLabel,"shadow--md")},a.createElement("span",{className:f.checkboxLabelOr},"OR"),a.createElement("span",{className:f.checkboxLabelAnd},"AND")))}var P=i(9960),A=i(5999),C={showcaseCardImage:"showcaseCardImage_Hm8Y",showcaseCardHeader:"showcaseCardHeader_FP8i",showcaseCardTitle:"showcaseCardTitle_GY3z",svgIconFavorite:"svgIconFavorite_Gbue",showcaseCardSrcBtn:"showcaseCardSrcBtn_Ut2F",showcaseCardBody:"showcaseCardBody_HyTU",cardFooter:"cardFooter_X_DN",tag:"tag_HSOc",textLabel:"textLabel_ZVTT",colorLabel:"colorLabel_wC3o"},L=i(3935),_=i(6441),x="tooltip_kh9f",N="tooltipArrow_TAKU";function S(e){var t=e.children,i=e.id,r=e.anchorEl,n=e.text,o=e.delay,c=(0,a.useState)(!1),l=c[0],u=c[1],g=(0,a.useState)(null),m=g[0],p=g[1],d=(0,a.useState)(null),h=d[0],b=d[1],w=(0,a.useState)(null),k=w[0],f=w[1],v=(0,a.useState)(null),E=v[0],y=v[1],P=(0,_.D)(m,h,{modifiers:[{name:"arrow",options:{element:k}},{name:"offset",options:{offset:[0,8]}}]}),A=P.styles,C=P.attributes,S=(0,a.useRef)(null),F=i+"_tooltip";return(0,a.useEffect)((function(){y(r?"string"==typeof r?document.querySelector(r):r:document.body)}),[E,r]),(0,a.useEffect)((function(){var e=["mouseenter","focus"],t=["mouseleave","blur"],i=function(){""!==n&&(null==m||m.removeAttribute("title"),S.current=window.setTimeout((function(){u(!0)}),o||400))},a=function(){clearInterval(S.current),u(!1)};return m&&(e.forEach((function(e){m.addEventListener(e,i)})),t.forEach((function(e){m.addEventListener(e,a)}))),function(){m&&(e.forEach((function(e){m.removeEventListener(e,i)})),t.forEach((function(e){m.removeEventListener(e,a)})))}}),[m,n,o]),a.createElement(a.Fragment,null,a.cloneElement(t,{ref:p,"aria-describedby":l?F:void 0}),E?L.createPortal(l&&a.createElement("div",(0,s.Z)({id:F,role:"tooltip",ref:b,className:x,style:A.popper},C.popper),n,a.createElement("span",{ref:f,className:N,style:A.arrow})),E):E)}var F={favorite:{label:"Favorite",description:"Our favorite plugins that you must absolutely check-out!",color:"#e9669e"},opensource:{label:"Open-Source",description:"Open-Source plugins can be useful for inspiration!",color:"#39ca30"},standard:{label:"Standard Library",description:"Plugins built by the Ambient team.",color:"#dfd545"},generic:{label:"Generic",description:"Plugins that perform blog or management capabilities.",color:"#a44fb7"},router:{label:"Router",description:"Plugins that provide routing capabilities.",color:"#127f82"},templateengine:{label:"Template Engine",description:"Plugins that render HTML from templates.",color:"#fe6829"},sessionmanager:{label:"Session Manager",description:"Plugins that manage user authentication and user sessions/",color:"#8c2f00"},middleware:{label:"Middleware",description:"Plugins that include middleware.",color:"#4267b2"},storagesystem:{label:"Storage System",description:"Plugins that read and write the app configuration.",color:"#14cfc3"},logger:{label:"Logger",description:"",color:"#ffcfc3"}},I=[{title:"author",description:"Package author is an Ambient plugin that sets an author meta tag in the HTML header.",website:"https://github.com/ambientkit/plugin/tree/main/generic/author",source:"https://github.com/ambientkit/plugin/tree/main/generic/author",tags:["opensource","standard","generic"]},{title:"awayrouter",description:"Package awayrouter is an Ambient plugin for a router using a variation of the matryer/way router.",website:"https://github.com/matryer/way",source:"https://github.com/ambientkit/plugin/tree/main/router/awayrouter",tags:["opensource","standard","router","favorite"]},{title:"awsbucketstorage",description:"Package awsbucketstorage is an Ambient plugin that provides storage in AWS S3.",website:"https://github.com/ambientkit/plugin/tree/main/storage/awsbucketstorage",source:"https://github.com/ambientkit/plugin/tree/main/storage/awsbucketstorage",tags:["opensource","standard","storagesystem"]},{title:"azureblobstorage",description:"Package azureblobstorage is an Ambient plugin that provides storage in Azure Blob Storage.",website:"https://github.com/ambientkit/plugin/tree/main/storage/azureblobstorage",source:"https://github.com/ambientkit/plugin/tree/main/storage/azureblobstorage",tags:["opensource","standard","storagesystem"]},{title:"bearblog",description:"Package bearblog is an Ambient plugin that provides basic blog functionality.",website:"https://github.com/HermanMartinus/bearblog/",source:"https://github.com/ambientkit/plugin/tree/main/generic/bearblog",tags:["opensource","standard","generic","favorite"]},{title:"bearcss",description:"Package bearcss is an Ambient plugin that provides styles from the Bear Blog.",website:"https://bearblog.dev/",source:"https://github.com/ambientkit/plugin/tree/main/generic/bearcss",tags:["opensource","standard","generic","favorite"]},{title:"charset",description:"Package charset is an Ambient plugin that sets a charset meta tag in the HTML header.",website:"https://github.com/ambientkit/plugin/tree/main/generic/charset",source:"https://github.com/ambientkit/plugin/tree/main/generic/charset",tags:["opensource","standard","generic"]},{title:"chirouter",description:"Package chirouter is an Ambient plugin for a router using go-chi/chi.",website:"https://github.com/go-chi/chi",source:"https://github.com/ambientkit/plugin/tree/main/router/chirouter",tags:["opensource","standard","router"]},{title:"cors",description:"Package cors is an Ambient plugin that enables CORS.",website:"https://github.com/ambientkit/plugin/tree/main/middleware/cors",source:"https://github.com/ambientkit/plugin/tree/main/middleware/cors",tags:["opensource","standard","middleware"]},{title:"debugpprof",description:"Package debugpprof is an Ambient plugin that provides pprof functionality.",website:"https://pkg.go.dev/net/http/pprof",source:"https://github.com/ambientkit/plugin/tree/main/generic/debugpprof",tags:["opensource","standard","generic"]},{title:"description",description:"Package description is an Ambient plugin that sets a description meta tag in the HTML header.",website:"https://github.com/ambientkit/plugin/tree/main/generic/description",source:"https://github.com/ambientkit/plugin/tree/main/generic/description",tags:["opensource","standard","generic"]},{title:"disqus",description:"Package disqus is an Ambient plugin that provides Disqus commenting.",website:"https://disqus.com/",source:"https://github.com/ambientkit/plugin/tree/main/generic/disqus",tags:["opensource","standard","generic"]},{title:"envinfo",description:"Package envinfo is an Ambient plugin that provides a dashboard page showing env variables.",website:"https://github.com/ambientkit/plugin/tree/main/generic/envinfo",source:"https://github.com/ambientkit/plugin/tree/main/generic/envinfo",tags:["opensource","standard","generic"]},{title:"etagcache",description:"Package etagcache is an Ambient plugin that provides caching using etag.",website:"https://github.com/ambientkit/plugin/tree/main/middleware/etagcache",source:"https://github.com/ambientkit/plugin/tree/main/middleware/etagcache",tags:["opensource","standard","middleware"]},{title:"gcpbucketstorage",description:"Package gcpbucketstorage is an Ambient plugin that provides storage in GCP Cloud Storage.",website:"https://github.com/ambientkit/plugin/tree/main/storage/gcpbucketstorage",source:"https://github.com/ambientkit/plugin/tree/main/storage/gcpbucketstorage",tags:["opensource","standard","storagesystem"]},{title:"googleanalytics",description:"Package googleanalytics is an Ambient plugin that provides Google Analytics tracking.",website:"https://analytics.google.com/",source:"https://github.com/ambientkit/plugin/tree/main/generic/googleanalytics",tags:["opensource","standard","generic"]},{title:"gorillamux",description:"Package gorillamux is an Ambient plugin for a router using gorilla/mux.",website:"https://github.com/gorilla/mux",source:"https://github.com/ambientkit/plugin/tree/main/router/gorillamux",tags:["opensource","standard","router"]},{title:"gzipresponse",description:"Package gzipresponse is an Ambient plugin that provides gzip content compression middleware.",website:"https://github.com/ambientkit/plugin/tree/main/middleware/gzipresponse",source:"https://github.com/ambientkit/plugin/tree/main/middleware/gzipresponse",tags:["opensource","standard","middleware"]},{title:"healthcheck",description:"Package healthcheck is an Ambient plugin that responds back with 200.",website:"https://github.com/ambientkit/plugin/tree/main/middleware/healthcheck",source:"https://github.com/ambientkit/plugin/tree/main/middleware/healthcheck",tags:["opensource","standard","middleware"]},{title:"htmlengine",description:"Package bearblog is an Ambient plugin that provides basic blog functionality.",website:"https://github.com/ambientkit/plugin/tree/main/templateengine/htmlengine",source:"https://github.com/ambientkit/plugin/tree/main/templateengine/htmlengine",tags:["opensource","standard","templateengine"]},{title:"jshttprouter",description:"Package jshttprouter is an Ambient plugin for a router using julienschmidt/httprouter.",website:"https://github.com/julienschmidt/httprouter",source:"https://github.com/ambientkit/plugin/tree/main/router/jshttprouter",tags:["opensource","standard","router"]},{title:"jwt",description:"Package jwt is an Ambient plugin that enables jwt.",website:"https://github.com/golang-jwt/jwt",source:"https://github.com/ambientkit/plugin/tree/main/middleware/jwt",tags:["opensource","standard","middleware"]},{title:"localstorage",description:"Package localstorage is an Ambient plugin that provides local storage.",website:"https://github.com/ambientkit/plugin/tree/main/storage/localstorage",source:"https://github.com/ambientkit/plugin/tree/main/storage/localstorage",tags:["opensource","standard","storagesystem"]},{title:"logrequest",description:"Package logrequest is an Ambient plugin that provides request logging middleware.",website:"https://github.com/ambientkit/plugin/tree/main/middleware/logrequest",source:"https://github.com/ambientkit/plugin/tree/main/middleware/logrequest",tags:["opensource","standard","middleware"]},{title:"logruslogger",description:"Package logruslogger is an Ambient plugin that provides log functionality using logrus.",website:"https://github.com/sirupsen/logrus",source:"https://github.com/ambientkit/plugin/tree/main/logger/logruslogger",tags:["opensource","standard","logger"]},{title:"memorystorage",description:"Package memorystorage is an Ambient plugin that provides storage in memory.",website:"https://github.com/ambientkit/plugin/tree/main/storage/memorystorage",source:"https://github.com/ambientkit/plugin/tree/main/storage/memorystorage",tags:["opensource","standard","storagesystem"]},{title:"notrailingslash",description:"Package notrailingslash is an Ambient plugin with middleware that removes trailing slashes from requests.",website:"https://github.com/ambientkit/plugin/tree/main/middleware/notrailingslash",source:"https://github.com/ambientkit/plugin/tree/main/middleware/notrailingslash",tags:["opensource","standard","middleware"]},{title:"patrouter",description:"Package patrouter is an Ambient plugin for a router using bmizerany/pat.",website:"https://github.com/bmizerany/pat",source:"https://github.com/ambientkit/plugin/tree/main/router/patrouter",tags:["opensource","standard","router"]},{title:"pluginmanager",description:"Package pluginmanager is an Ambient plugin that provides a plugin management system.",website:"https://github.com/ambientkit/plugin/tree/main/generic/pluginmanager",source:"https://github.com/ambientkit/plugin/tree/main/generic/pluginmanager",tags:["opensource","standard","generic","favorite"]},{title:"prism",description:"Package prism is an Ambient plugin that provides syntax highlighting using Prism.",website:"https://prismjs.com/",source:"https://github.com/ambientkit/plugin/tree/main/generic/prism",tags:["opensource","standard","generic"]},{title:"proxyrequest",description:"Package proxyrequest is an Ambient plugin with middleware that proxies requests.",website:"https://github.com/ambientkit/plugin/tree/main/middleware/proxyrequest",source:"https://github.com/ambientkit/plugin/tree/main/middleware/proxyrequest",tags:["opensource","standard","middleware"]},{title:"redirecttourl",description:"Package redirecttourl is an Ambient plugin with middlware that redirects to the correct site URL.",website:"https://github.com/ambientkit/plugin/tree/main/middleware/redirecttourl",source:"https://github.com/ambientkit/plugin/tree/main/middleware/redirecttourl",tags:["opensource","standard","middleware"]},{title:"robots",description:"Package robots is an Ambient plugin that serves a robots.txt file.",website:"https://github.com/ambientkit/plugin/tree/main/generic/robots",source:"https://github.com/ambientkit/plugin/tree/main/generic/robots",tags:["opensource","standard","generic"]},{title:"routerecorder",description:"Package routerecorder keeps track of each of the routes a plugin adds to the router. It is not a functioning router.",website:"https://github.com/ambientkit/plugin/tree/main/router/routerecorder",source:"https://github.com/ambientkit/plugin/tree/main/router/routerecorder",tags:["opensource","standard","router"]},{title:"rove",description:"Package rove is an Ambient plugin that provides MySQL migrations.",website:"https://github.com/josephspurrier/rove",source:"https://github.com/ambientkit/plugin/tree/main/generic/rove",tags:["opensource","standard","generic"]},{title:"rssfeed",description:"Package rssfeed is an Ambient plugin that provides an RSS feed.",website:"https://github.com/ambientkit/plugin/tree/main/generic/rssfeed",source:"https://github.com/ambientkit/plugin/tree/main/generic/rssfeed",tags:["opensource","standard","generic"]},{title:"scssession",description:"Package scssession is an Ambient plugin that provides session management using SCS.",website:"https://github.com/alexedwards/scss",source:"https://github.com/ambientkit/plugin/tree/main/sessionmanager/scssession",tags:["opensource","standard","sessionmanager","middleware"]},{title:"securedashboard",description:"Package securedashboard is an Ambient plugins that prevents unauthenticated access to the /dashboard routes.",website:"https://github.com/ambientkit/plugin/tree/main/middleware/securedashboard",source:"https://github.com/ambientkit/plugin/tree/main/middleware/securedashboard",tags:["opensource","standard","middleware"]},{title:"simplelogin",description:"Package simplelogin is an Ambient plugin that provides a basic website template with a login page.",website:"https://github.com/ambientkit/plugin/tree/main/generic/simplelogin",source:"https://github.com/ambientkit/plugin/tree/main/generic/simplelogin",tags:["opensource","standard","generic"]},{title:"sitemap",description:"Package sitemap is an Ambient plugin that provides a sitemap.",website:"https://github.com/ambientkit/plugin/tree/main/generic/sitemap",source:"https://github.com/ambientkit/plugin/tree/main/generic/sitemap",tags:["opensource","standard","generic"]},{title:"stackedit",description:"Package stackedit is an Ambient plugin that provides a markdown editor using StackEdit.",website:"https://stackedit.io/",source:"https://github.com/ambientkit/plugin/tree/main/generic/stackedit",tags:["opensource","standard","generic"]},{title:"styles",description:"Package styles is an Ambient plugin that provides a page to edit styles.",website:"https://github.com/ambientkit/plugin/tree/main/generic/styles",source:"https://github.com/ambientkit/plugin/tree/main/generic/styles",tags:["opensource","standard","generic"]},{title:"uptimerobotok",description:"Package uptimerobotok is an Ambient plugin to support UptimeRobot that sends a 200 status code when a HEAD request is sent to /.",website:"https://github.com/ambientkit/plugin/tree/main/middleware/uptimerobotok",source:"https://github.com/ambientkit/plugin/tree/main/middleware/uptimerobotok",tags:["opensource","standard","middleware"]},{title:"viewport",description:"Package viewport is an Ambient plugin that sets a viewport meta tag in the HTML header.",website:"https://github.com/ambientkit/plugin/tree/main/generic/viewport",source:"https://github.com/ambientkit/plugin/tree/main/generic/viewport",tags:["opensource","standard","generic"]},{title:"zaplogger",description:"Package zaplogger is an Ambient plugin that provides logging using zap.",website:"https://github.com/uber-go/zap",source:"https://github.com/ambientkit/plugin/tree/main/logger/zaplogger",tags:["opensource","standard","logger"]}],T=Object.keys(F);var Z,H=(Z=p(Z=I,(function(e){return e.title.toLowerCase()})),Z=p(Z,(function(e){return!e.tags.includes("favorite")}))),z=a.forwardRef((function(e,t){var i=e.label,r=e.color,n=e.description;return a.createElement("li",{ref:t,className:C.tag,title:n},a.createElement("span",{className:C.textLabel},i.toLowerCase()),a.createElement("span",{className:C.colorLabel,style:{backgroundColor:r}}))}));function O(e){var t=p(e.tags.map((function(e){return Object.assign({tag:e},F[e])})),(function(e){return T.indexOf(e.tag)}));return a.createElement(a.Fragment,null,t.map((function(e,t){var i="showcase_card_tag_"+e.tag;return a.createElement(S,{key:t,text:e.description,anchorEl:"#__docusaurus",id:i},a.createElement(z,(0,s.Z)({key:t},e)))})))}var R=(0,a.memo)((function(e){var t=e.user;return a.createElement("li",{key:t.title,className:"card shadow--md"},a.createElement("div",{className:"card__body"},a.createElement("div",{className:(0,n.Z)(C.showcaseCardHeader)},a.createElement("h4",{className:C.showcaseCardTitle},a.createElement(P.Z,{href:t.website,className:C.showcaseCardLink},t.title)),t.tags.includes("favorite")&&a.createElement(g,{svgClass:C.svgIconFavorite,size:"small"}),t.source&&a.createElement(P.Z,{href:t.source,className:(0,n.Z)("button button--secondary button--sm",C.showcaseCardSrcBtn)},a.createElement(A.Z,{id:"showcase.card.sourceLink"},"source"))),a.createElement("p",{className:C.showcaseCardBody},t.description)),a.createElement("ul",{className:(0,n.Z)("card__footer",C.cardFooter)},a.createElement(O,{tags:t.tags})))})),q=i(412),j=i(9548),B={filterCheckbox:"filterCheckbox_CQkF",checkboxList:"checkboxList_XCE3",showcaseList:"showcaseList_aYIE",checkboxListItem:"checkboxListItem_AnoN",searchContainer:"searchContainer_lMwO",showcaseFavorite:"showcaseFavorite_VMbR",showcaseFavoriteHeader:"showcaseFavoriteHeader_NPko",svgIconFavoriteXs:"svgIconFavoriteXs_giT5",svgIconFavorite:"svgIconFavorite_WOq6"},U="Ambient Plugins",M="List of plugins that work with Ambient";function D(){var e;if(q.default.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:null==(e=document.activeElement)?void 0:e.id}}var G="name";function K(e){return new URLSearchParams(e).get(G)}function X(){var e=(0,m.TH)(),t=(0,a.useState)("OR"),i=t[0],r=t[1],n=(0,a.useState)([]),s=n[0],o=n[1],c=(0,a.useState)(null),l=c[0],u=c[1];return(0,a.useEffect)((function(){var t,i,a,n,s;o(w(e.search)),r(E(e.search)),u(K(e.search)),t=e.state,n=(a=null!=t?t:{scrollTopPosition:0,focusedElementId:void 0}).scrollTopPosition,s=a.focusedElementId,null==(i=document.getElementById(s))||i.focus(),window.scrollTo({top:n})}),[e]),(0,a.useMemo)((function(){return function(e,t,i,a){return a&&(e=e.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}))),0===t.length?e:e.filter((function(e){return 0!==e.tags.length&&("AND"===i?t.every((function(t){return e.tags.includes(t)})):t.some((function(t){return e.tags.includes(t)})))}))}(H,s,i,l)}),[s,i,l])}function Y(){return a.createElement("section",{className:"margin-top--lg margin-bottom--lg text--center"},a.createElement("h1",null,U),a.createElement("p",null,M),a.createElement("a",{className:"button button--primary",href:"https://github.com/ambientkit/ambientkit.github.io/edit/main/src/data/plugins.tsx",target:"_blank",rel:"noreferrer"},a.createElement(A.Z,{id:"showcase.header.button"},"Add your plugin \ud83d\ude4f")))}function V(){var e,t=X(),i=(e=(0,j.c2)().selectMessage,function(t){return e(t,(0,A.I)({id:"showcase.filters.resultCount",description:'Pluralized label for the number of plugins found in the library. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"1 plugin|{sitesCount} plugins"},{sitesCount:t}))});return a.createElement("section",{className:"container margin-top--l margin-bottom--lg"},a.createElement("div",{className:(0,n.Z)("margin-bottom--sm",B.filterCheckbox)},a.createElement("div",null,a.createElement("h2",null,a.createElement(A.Z,{id:"showcase.filters.title"},"Filters")),a.createElement("span",null,i(t.length))),a.createElement(y,null)),a.createElement("ul",{className:B.checkboxList},T.map((function(e,t){var i=F[e],r=i.label,n=i.description,s=i.color,o="showcase_checkbox_id_"+e;return a.createElement("li",{key:t,className:B.checkboxListItem},a.createElement(S,{id:o,text:n,anchorEl:"#__docusaurus"},a.createElement(k,{tag:e,id:o,label:r,icon:"favorite"===e?a.createElement(g,{svgClass:B.svgIconFavoriteXs}):a.createElement("span",{style:{backgroundColor:s,width:10,height:10,borderRadius:"50%",marginLeft:8}})})))}))))}var W=H.filter((function(e){return e.tags.includes("favorite")})),Q=H.filter((function(e){return!e.tags.includes("favorite")}));function J(){var e=(0,m.k6)(),t=(0,m.TH)(),i=(0,a.useState)(null),r=i[0],n=i[1];return(0,a.useEffect)((function(){n(K(t.search))}),[t]),a.createElement("div",{className:B.searchContainer},a.createElement("input",{id:"searchbar",placeholder:(0,A.I)({message:"Search for plugin name...",id:"showcase.searchBar.placeholder"}),value:null!=r?r:void 0,onInput:function(i){n(i.currentTarget.value);var a=new URLSearchParams(t.search);a.delete(G),i.currentTarget.value&&a.set(G,i.currentTarget.value),e.push(Object.assign({},t,{search:a.toString(),state:D()})),setTimeout((function(){var e;null==(e=document.getElementById("searchbar"))||e.focus()}),0)}}))}function $(){var e=X();return 0===e.length?a.createElement("section",{className:"margin-top--lg margin-bottom--xl"},a.createElement("div",{className:"container padding-vert--md text--center"},a.createElement("h2",null,a.createElement(A.Z,{id:"showcase.usersList.noResult"},"No result")),a.createElement(J,null))):a.createElement("section",{className:"margin-top--lg margin-bottom--xl"},e.length===H.length?a.createElement(a.Fragment,null,a.createElement("div",{className:B.showcaseFavorite},a.createElement("div",{className:"container"},a.createElement("div",{className:(0,n.Z)("margin-bottom--md",B.showcaseFavoriteHeader)},a.createElement("h2",null,a.createElement(A.Z,{id:"showcase.favoritesList.title"},"Favorites")),a.createElement(g,{svgClass:B.svgIconFavorite}),a.createElement(J,null)),a.createElement("ul",{className:(0,n.Z)("container",B.showcaseList)},W.map((function(e){return a.createElement(R,{key:e.title,user:e})}))))),a.createElement("div",{className:"container margin-top--lg"},a.createElement("h2",{className:B.showcaseHeader},a.createElement(A.Z,{id:"showcase.usersList.allUsers"},"All plugins")),a.createElement("ul",{className:B.showcaseList},Q.map((function(e){return a.createElement(R,{key:e.title,user:e})}))))):a.createElement("div",{className:"container"},a.createElement("div",{className:(0,n.Z)("margin-bottom--md",B.showcaseFavoriteHeader)},a.createElement(J,null)),a.createElement("ul",{className:B.showcaseList},e.map((function(e){return a.createElement(R,{key:e.title,user:e})})))))}var ee=function(){return a.createElement(r.Z,{title:U,description:M},a.createElement("main",{className:"margin-vert--lg"},a.createElement(Y,null),a.createElement(V,null),a.createElement($,null)))}}}]);