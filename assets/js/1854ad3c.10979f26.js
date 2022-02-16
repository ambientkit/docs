"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9181],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),g=a,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},355:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},s="Barebones App",p={unversionedId:"architecture/barebones",id:"architecture/barebones",title:"Barebones App",description:"Follow these steps to create a barebones Ambient app. These steps are intentionally verbose to help with the understanding.",source:"@site/docs/architecture/barebones.md",sourceDirName:"architecture",slug:"/architecture/barebones",permalink:"/docs/docs/architecture/barebones",editUrl:"https://github.com/ambientkit/docs/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/barebones.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Session Manager",permalink:"/docs/docs/architecture/session"},next:{title:"Plugins",permalink:"/docs/docs/plugins/overview"}},u=[],c={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"barebones-app"},"Barebones App"),(0,o.kt)("p",null,"Follow these steps to create a barebones Ambient app. These steps are intentionally verbose to help with the understanding."),(0,o.kt)("p",null,"Create a few folders."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p myapp/storage\n")),(0,o.kt)("p",null,"Change to the ",(0,o.kt)("inlineCode",{parentName:"p"},"myapp")," folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd myapp\n")),(0,o.kt)("p",null,"Initialize the Go module. You should swap out username for your GitHub username."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/username/ambapp\n")),(0,o.kt)("p",null,"Create the site file where the app configuration will be stored."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo '{}'> storage/site.bin\n")),(0,o.kt)("p",null,"Create the session file where the user sessions will be stored."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch storage/session.bin\n")),(0,o.kt)("p",null,"Create an environment variable file to hold the session key for the Session Manager."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch .env\n")),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, paste in the line starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"AMB_SESSION_KEY")," from the output of this program (click ",(0,o.kt)("inlineCode",{parentName:"p"},"Run"),"): ",(0,o.kt)("a",{parentName:"p",href:"https://go.dev/play/p/PdQcNiw4WFz"},"https://go.dev/play/p/PdQcNiw4WFz")),(0,o.kt)("p",null,"Create a main.go file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "log"\n    "os"\n\n    "github.com/ambientkit/ambient"\n    "github.com/ambientkit/ambient/pkg/envdetect"\n    "github.com/ambientkit/plugin/logger/zaplogger"\n    "github.com/ambientkit/plugin/router/awayrouter"\n    "github.com/ambientkit/plugin/sessionmanager/scssession"\n    "github.com/ambientkit/plugin/storage/localstorage"\n    "github.com/ambientkit/plugin/templateengine/htmlengine"\n    "github.com/joho/godotenv"\n)\n\nfunc main() {\n    // Load the .env file if AMB_DOTENV=true.\n    if envdetect.LoadDotEnv() {\n        err := godotenv.Load()\n        if err != nil {\n            log.Fatalf("app: error loading .env file: %v\\n", err.Error())\n        }\n    }\n\n    // Create the ambient app.\n    plugins := Plugins()\n    ambientApp, logger, err := ambient.NewApp("myapp", "1.0",\n        zaplogger.New(),\n        ambient.StoragePluginGroup{\n            Storage: localstorage.New("storage/site.bin", "storage/session.bin"),\n        },\n        plugins)\n    if err != nil {\n        log.Fatalln(err.Error())\n    }\n\n    // Load the plugins and return the handler.\n    mux, err := ambientApp.Handler()\n    if err != nil {\n        logger.Fatal(err.Error())\n    }\n\n    // Start the web listener.\n    ambientApp.ListenAndServe(mux)\n}\n\n// Plugins defines the plugins.\nfunc Plugins() *ambient.PluginLoader {\n    // Get the environment variables.\n    secretKey := os.Getenv("AMB_SESSION_KEY")\n    if len(secretKey) == 0 {\n        log.Fatalf("app: environment variable missing: %v\\n", "AMB_SESSION_KEY")\n    }\n\n    // Define the session manager so it can be used as a core plugin and\n    // middleware.\n    sessionManager := scssession.New(secretKey)\n\n    return &ambient.PluginLoader{\n        // Core plugins are implicitly trusted.\n        Router:         awayrouter.New(nil),\n        TemplateEngine: htmlengine.New(),\n        SessionManager: sessionManager,\n        // Trusted plugins are those that are typically needed to boot so they\n        // will be enabled and given full access.\n        TrustedPlugins: map[string]bool{},\n        Plugins:        []ambient.Plugin{},\n        Middleware: []ambient.MiddlewarePlugin{\n            // Middleware - executes bottom to top.\n            sessionManager, // Session manager middleware.\n        },\n    }\n}\n')),(0,o.kt)("p",null,"Download the dependencies - you can remove the last argument if running less than Go 1.17."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go mod tidy -compat=1.17\n")),(0,o.kt)("p",null,"Start the app. ",(0,o.kt)("inlineCode",{parentName:"p"},"AMB_DOTENV=true")," tells the app to load the session key from the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"AMB_DOTENV=true go run main.go\n")),(0,o.kt)("p",null,"You should be able to access the app at: http://localhost:8080"),(0,o.kt)("p",null,"The app will output this message because there are no pages yet: ",(0,o.kt)("inlineCode",{parentName:"p"},"404 Darn, we cannot find the page.")))}m.isMDXComponent=!0}}]);