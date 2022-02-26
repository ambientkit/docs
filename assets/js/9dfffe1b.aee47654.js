"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9456],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||o;return n?r.createElement(m,u(u({ref:t},p),{},{components:n})):r.createElement(m,u({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},441:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=["components"],i={},s="Router",l={unversionedId:"plugins/router",id:"plugins/router",title:"Router",description:"A router handles web requests based on the HTTP method and route.",source:"@site/docs/plugins/router.md",sourceDirName:"plugins",slug:"/plugins/router",permalink:"/docs/plugins/router",editUrl:"https://github.com/ambientkit/ambientkit.github.io/blob/main/docs/plugins/router.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Middleware",permalink:"/docs/plugins/middleware"},next:{title:"Routes",permalink:"/docs/plugins/routes"}},p=[{value:"Custom Handler",id:"custom-handler",children:[],level:2},{value:"Test Suite",id:"test-suite",children:[],level:2}],h={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"router"},"Router"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/blob/main/router/awayrouter/awayrouter.go"},"router")," handles web requests based on the HTTP method and route."),(0,o.kt)("p",null,"A router plugin must include the ",(0,o.kt)("a",{parentName:"p",href:"mvp"},"MVP")," code as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"Router()")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Router returns a router.\nfunc (p *Plugin) Router(logger ambient.Logger, te ambient.Renderer) (ambient.AppRouter, error) {\n    // Set up the default router.\n    mux := router.New()\n\n    // Set the NotFound and custom ServeHTTP handlers.\n    p.setupRouter(logger, mux, te)\n\n    return mux, nil\n}\n")),(0,o.kt)("p",null,"The function should:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"return an object that satisfies the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/ambient/blob/main/ambient_router.go"},(0,o.kt)("inlineCode",{parentName:"a"},"AppRouter"))," interface."),(0,o.kt)("li",{parentName:"ul"},"support wildcards in routes using braces: ",(0,o.kt)("inlineCode",{parentName:"li"},"/url/{param}"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'if the router uses the alternative "colon" parameters (',(0,o.kt)("inlineCode",{parentName:"li"},"/url/:param"),"), you can use the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/plugin/blob/main/pkg/paramconvert/paramconvert.go"},"paramconvert")," package. An example of it's usage is ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/plugin/blob/main/router/jshttprouter/router/method.go#L11"},"here"),".")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="ambient_router.go"',title:'"ambient_router.go"'},"// AppRouter represents a router.\ntype AppRouter interface {\n    Router\n\n    ServeHTTP(w http.ResponseWriter, r *http.Request)\n    Clear(method string, path string)\n    SetNotFound(notFound http.Handler)\n    SetServeHTTP(h func(w http.ResponseWriter, r *http.Request, status int, err error))\n}\n\n// Router represents a router.\ntype Router interface {\n    Get(path string, fn func(http.ResponseWriter, *http.Request) (int, error))\n    Post(path string, fn func(http.ResponseWriter, *http.Request) (int, error))\n    Patch(path string, fn func(http.ResponseWriter, *http.Request) (int, error))\n    Put(path string, fn func(http.ResponseWriter, *http.Request) (int, error))\n    Delete(path string, fn func(http.ResponseWriter, *http.Request) (int, error))\n    Head(path string, fn func(http.ResponseWriter, *http.Request) (int, error))\n    Options(path string, fn func(http.ResponseWriter, *http.Request) (int, error))\n    Error(status int, w http.ResponseWriter, r *http.Request)\n    Param(r *http.Request, name string) string\n    Wrap(handler http.HandlerFunc) func(w http.ResponseWriter, r *http.Request) (status int, err error)\n}\n")),(0,o.kt)("h2",{id:"custom-handler"},"Custom Handler"),(0,o.kt)("p",null,"The standard Go ",(0,o.kt)("inlineCode",{parentName:"p"},"http.HandlerFunc")," looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="net/http/server.go"',title:'"net/http/server.go"'},"// The HandlerFunc type is an adapter to allow the use of\n// ordinary functions as HTTP handlers. If f is a function\n// with the appropriate signature, HandlerFunc(f) is a\n// Handler that calls f.\ntype HandlerFunc func(ResponseWriter, *Request)\n\n// ServeHTTP calls f(w, r).\nfunc (f HandlerFunc) ServeHTTP(w ResponseWriter, r *Request) {\n    f(w, r)\n}\n")),(0,o.kt)("p",null,"Ambient uses a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/blob/main/pkg/ambhandler/ambhandler.go"},"custom handler")," that requires a return of both a HTTP status code as well as an error (which can be nil)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="plugin/pkg/ambhandler/ambhandler.go"',title:'"plugin/pkg/ambhandler/ambhandler.go"'},"// Handler represents an Ambient handler.\ntype Handler struct {\n    HandlerFunc     func(w http.ResponseWriter, r *http.Request) (status int, err error)\n    CustomServeHTTP func(w http.ResponseWriter, r *http.Request, status int, err error)\n}\n\n// ServeHTTP handles all the errors from the HTTP handlers.\nfunc (fn Handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {\n    status, err := fn.HandlerFunc(w, r)\n\n    if fn.CustomServeHTTP == nil {\n        return\n    }\n\n    fn.CustomServeHTTP(w, r, status, err)\n}\n")),(0,o.kt)("p",null,"There are a few articles that talk about custom handlers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://go.dev/blog/error-handling-and-go"},"Error handling and Go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.questionable.services/article/custom-handlers-avoiding-globals/"},"Custom Handlers and Avoiding Globals in Go Web Applications"))),(0,o.kt)("p",null,"The advantage of return values means that for every ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," in a handler, the developer has to specify the response. It's easy for a developer to do something like this where they return in a handler without writing a status code or content and the response will be a 200 with no content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func hello(w http.ResponseWriter, r *http.Request) {\n    if r.Method != "POST" {\n        // This return will send incorrectly a 200 and no content.\n        return\n    }\n\n    fmt.Fprint(w, "hello")\n}\n')),(0,o.kt)("p",null,"Once you add the return values, the developer must be explicit on what is returned in the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func hello(w http.ResponseWriter, r *http.Request) (status int, err error) {\n    if r.Method != "POST" {\n        // This return will send correctly a 403 and the default error message.\n        return http.StatusForbidden, nil\n    }\n\n    fmt.Fprint(w, "hello")\n    return http.StatusOK, nil\n}\n')),(0,o.kt)("p",null,"You can then take it a step further and create functions that output to the writer with correct formats which makes the code very clean and understandable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (h *Handler) hello(w http.ResponseWriter, r *http.Request) (status int, err error) {\n    if r.Method != "POST" {\n        return h.JSON(w, http.StatusForbidden, nil)\n    }\n\n    return h.JSON(w, http.StatusOK, "hello")\n}\n')),(0,o.kt)("p",null,"This is what it would look like without the return values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (h *Handler) hello(w http.ResponseWriter, r *http.Request) {\n    if r.Method != "POST" {\n        h.JSON(w, http.StatusForbidden, nil)\n        // If this return is forgotten, it will cause an undesirable behavior.\n        return\n    }\n\n    h.JSON(w, http.StatusOK, "hello")\n}\n')),(0,o.kt)("h2",{id:"test-suite"},"Test Suite"),(0,o.kt)("p",null,"You can also run the router test suite against your plugin to make sure it meets all the requirements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="router_test.go"',title:'"router_test.go"'},'package router_test\n\nimport (\n    "testing"\n\n    "github.com/ambientkit/ambient"\n    "github.com/ambientkit/plugin/pkg/routertestsuite"\n)\n\n// Run the standard router test suite.\nfunc TestMain(t *testing.T) {\n    rt := routertestsuite.New()\n    rt.Run(t, func() ambient.AppRouter {\n        return New() // Replace with your own router.\n    })\n}\n')))}c.isMDXComponent=!0}}]);