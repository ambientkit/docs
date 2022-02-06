"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[213],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?i.createElement(g,r(r({ref:n},p),{},{components:t})):i.createElement(g,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var u=2;u<l;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3157:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var i=t(7462),a=t(3366),l=(t(7294),t(3905)),r=["components"],o={},s="Plugins",u={unversionedId:"plugins/overview",id:"plugins/overview",title:"Plugins",description:"Plugins are the building blocks for an Ambient web app. They must implement (satisfy) an interface to be usable by Ambient.",source:"@site/docs/plugins/overview.md",sourceDirName:"plugins",slug:"/plugins/overview",permalink:"/docs/docs/plugins/overview",editUrl:"https://github.com/ambientkit/docs/tree/main/packages/create-docusaurus/templates/shared/docs/plugins/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Barebones App",permalink:"/docs/docs/architecture/barebones"},next:{title:"Library",permalink:"/docs/docs/plugins/library"}},p=[{value:"Plugin Loader",id:"plugin-loader",children:[],level:2},{value:"Boot Process",id:"boot-process",children:[{value:"Considerations",id:"considerations",children:[],level:3}],level:2},{value:"Tookit",id:"tookit",children:[],level:2},{value:"Grants",id:"grants",children:[],level:2}],d={toc:p};function c(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"plugins"},"Plugins"),(0,l.kt)("p",null,"Plugins are the building blocks for an Ambient web app. They must implement (satisfy) an interface to be usable by Ambient."),(0,l.kt)("h2",{id:"plugin-loader"},"Plugin Loader"),(0,l.kt)("p",null,"To boot an Ambient web app, you will need to load plugins by populating the ",(0,l.kt)("inlineCode",{parentName:"p"},"ambient.PluginLoader")," struct. The minimum plugins required to boot are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"logger"),(0,l.kt)("li",{parentName:"ul"},"storage system"),(0,l.kt)("li",{parentName:"ul"},"router"),(0,l.kt)("li",{parentName:"ul"},"template engine"),(0,l.kt)("li",{parentName:"ul"},"session manager")),(0,l.kt)("p",null,"Here is an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "log"\n    "os"\n\n    "github.com/ambientkit/ambient"\n    "github.com/ambientkit/plugin/router/awayrouter"\n    "github.com/ambientkit/plugin/sessionmanager/scssession"\n    "github.com/ambientkit/plugin/templateengine/htmlengine"\n)\n\n// Plugins defines the plugins.\nfunc Plugins() *ambient.PluginLoader {\n    // Get the environment variables.\n    secretKey := os.Getenv("AMB_SESSION_KEY")\n    if len(secretKey) == 0 {\n        log.Fatalf("app: environment variable missing: %v\\n", "AMB_SESSION_KEY")\n    }\n\n    // Define the session manager so it can be used as a core plugin and\n    // middleware.\n    sessionManager := scssession.New(secretKey)\n\n    return &ambient.PluginLoader{\n        // Core plugins are implicitly trusted.\n        Router:         awayrouter.New(nil),\n        TemplateEngine: htmlengine.New(),\n        SessionManager: sessionManager,\n        // Trusted plugins are those that are typically needed to boot so they\n        // will be enabled and given full access.\n        TrustedPlugins: map[string]bool{},\n        Plugins:        []ambient.Plugin{},\n        Middleware: []ambient.MiddlewarePlugin{\n            // Middleware - executes bottom to top.\n            sessionManager, // Session manager middleware.\n        },\n    }\n}\n')),(0,l.kt)("h2",{id:"boot-process"},"Boot Process"),(0,l.kt)("p",null,"To help you understand how an Ambient web app works, this is the process it follows during boot:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Load logger plugin by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"Logger()")," func."),(0,l.kt)("li",{parentName:"ul"},"Load storage plugin by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"Storage()")," func."),(0,l.kt)("li",{parentName:"ul"},"Enable and grant permissions to trusted plugins."),(0,l.kt)("li",{parentName:"ul"},"Load session manager plugin by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"SessionManager()")," func."),(0,l.kt)("li",{parentName:"ul"},"Load template engine plugin by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"TemplateEngine()")," func."),(0,l.kt)("li",{parentName:"ul"},"Load router plugin by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"Router()")," func."),(0,l.kt)("li",{parentName:"ul"},"Load each plugin (except those above) only if enabled in ",(0,l.kt)("inlineCode",{parentName:"li"},"site.bin")," file:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Enable plugin by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"Enable()")," and passing in ",(0,l.kt)("inlineCode",{parentName:"li"},"ambient.Toolkit"),"."),(0,l.kt)("li",{parentName:"ul"},"Add routes from plugin to router by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"Routes()"),"."),(0,l.kt)("li",{parentName:"ul"},"Load assets from plugin by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"Assets()"),"."))),(0,l.kt)("li",{parentName:"ul"},"Load each middleware plugin (first handler is the handler from router):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Wrap the middleware around the previous handler by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"Middleware()")," func and adding a conditional so it's only run if enabled in ",(0,l.kt)("inlineCode",{parentName:"li"},"site.bin")," file."))),(0,l.kt)("li",{parentName:"ul"},"Pass the handler to ",(0,l.kt)("inlineCode",{parentName:"li"},"ListenAndServe()")," func.")),(0,l.kt)("h3",{id:"considerations"},"Considerations"),(0,l.kt)("p",null,"A few things to note:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An Ambient app can have a plugin enabled or disabled while it's running (through the pluginmanager). It will then load or unload the plugin making changes to routes, assets, and middleware."),(0,l.kt)("li",{parentName:"ul"},"When a change to the app is made or data is read or modified in ",(0,l.kt)("inlineCode",{parentName:"li"},"site.bin")," file, the permissions of the plugin are checked first to ensure the user granted the plugin permissions to perform their action. The permissions are stored in the ",(0,l.kt)("inlineCode",{parentName:"li"},"site.bin")," file."),(0,l.kt)("li",{parentName:"ul"},"Logger plugin and storage plugin are automatically trusted because they are loaded before the plugin system boots."),(0,l.kt)("li",{parentName:"ul"},"Router plugin and template engine plugin are automatically trusted because they are explicitly passed to the plugin system."),(0,l.kt)("li",{parentName:"ul"},"Logger, storage, template engine, and router won't have the ",(0,l.kt)("inlineCode",{parentName:"li"},"Enable()")," func called so it will only be able to use parts of the toolkit that are passed in when their respective functions are called. You can also remove the ",(0,l.kt)("inlineCode",{parentName:"li"},"*ambient.PluginBase")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"*ambient.Toolkit")," from the main struct since they won't be used. You can see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/plugin/blob/main/logger/zaplogger/zaplogger.go"},"zaplogger")," as an example."),(0,l.kt)("li",{parentName:"ul"},"Session manager should always have a middleware component to it so shouldn't be listed in the Plugins section, but it should be listed in the Middleware section. Be sure to define it only once and then use it as both a parameter for ",(0,l.kt)("inlineCode",{parentName:"li"},"ambient.PluginLoader.SessionManager")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"ambient.PluginLoader.Middleware"),". You define it in middleware so you can control when it gets called relative to other middleware."),(0,l.kt)("li",{parentName:"ul"},"Plugin manager should be in the trusted plugins list since it's required to enable other plugins.")),(0,l.kt)("h2",{id:"tookit"},"Tookit"),(0,l.kt)("p",null,"Almost all plugins have access to a toolkit that gives them access to approved services that they can use."),(0,l.kt)("h2",{id:"grants"},"Grants"),(0,l.kt)("p",null,"Granular read and write access must be explicitly requested by a plugin and then explicitly granted by the administrator of the application."),(0,l.kt)("h2",{id:""}),(0,l.kt)("p",null,"TODO: Talk about the core plugins here."),(0,l.kt)("p",null,"We'll walk you through creating a plugin in the next few pages."))}c.isMDXComponent=!0}}]);