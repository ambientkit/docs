"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8565],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var s=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=s.createContext({}),p=function(e){var n=s.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return s.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},g=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),g=p(t),m=r,d=g["".concat(u,".").concat(m)]||g[m]||c[m]||i;return t?s.createElement(d,a(a({ref:n},l),{},{components:t})):s.createElement(d,a({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=g;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<i;p++)a[p]=t[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5848:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return g}});var s=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],o={},u="Session Manager",p={unversionedId:"plugins/session",id:"plugins/session",title:"Session Manager",description:"A session manager authenticates and verify users.",source:"@site/docs/plugins/session.md",sourceDirName:"plugins",slug:"/plugins/session",permalink:"/docs/plugins/session",editUrl:"https://github.com/ambientkit/ambientkit.github.io/blob/main/docs/plugins/session.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Storage System",permalink:"/docs/plugins/storage"},next:{title:"Template Engine",permalink:"/docs/plugins/template-engine"}},l=[{value:"Test Suite",id:"test-suite",children:[],level:2}],c={toc:l};function g(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,s.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"session-manager"},"Session Manager"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/blob/main/sessionmanager/scssession/scssession.go"},"session manager")," authenticates and verify users."),(0,i.kt)("p",null,"The session manager plugin must include the MVP code as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"SessionManager()")," function. It should also include a ",(0,i.kt)("inlineCode",{parentName:"p"},"Middleware()")," function to verify users when they try to access authenticated routes. You can get more information in the the ",(0,i.kt)("a",{parentName:"p",href:"#middleware"},"Middleware")," section below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// SessionManager returns the session manager.\nfunc (p *Plugin) SessionManager(logger ambient.Logger, ss ambient.SessionStorer) (ambient.AppSession, error) {\n    // Set up the session storage provider.\n    en := websession.NewEncryptedStorage(p.sessionKey)\n    store, err := websession.NewJSONSession(ss, en)\n    if err != nil {\n        return nil, err\n    }\n\n    sessionName := "session"\n\n    p.sessionManager = scs.New()\n    p.sessionManager.Lifetime = 24 * time.Hour\n    p.sessionManager.Cookie.Persist = false\n    p.sessionManager.Store = store\n    p.sess = websession.New(sessionName, p.sessionManager)\n\n    return p.sess, nil\n}\n\n// Middleware returns router middleware.\nfunc (p *Plugin) Middleware() []func(next http.Handler) http.Handler {\n    return []func(next http.Handler) http.Handler{\n        p.sessionManager.LoadAndSave,\n    }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SessionManager()")," function should return an object that satisfies the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/ambient/blob/main/ambient_session.go"},(0,i.kt)("inlineCode",{parentName:"a"},"AppSession"))," interface. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Middleware()")," function should return an object that satisfies the ",(0,i.kt)("inlineCode",{parentName:"p"},"[]func(next http.Handler) http.Handler")," definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="ambient_session.go"',title:'"ambient_session.go"'},"// AppSession represents a user session.\ntype AppSession interface {\n    AuthenticatedUser(r *http.Request) (string, error)\n    Login(r *http.Request, username string)\n    Logout(r *http.Request)\n    LogoutAll(r *http.Request) error\n    Persist(r *http.Request, persist bool)\n    SetCSRF(r *http.Request) string\n    CSRF(r *http.Request) bool\n    SessionValue(r *http.Request, name string) string\n    SetSessionValue(r *http.Request, name string, value string) error\n    DeleteSessionValue(r *http.Request, name string)\n}\n")),(0,i.kt)("h2",{id:"test-suite"},"Test Suite"),(0,i.kt)("p",null,"You can also run the session manager test suite against your plugin to make sure it meets all the requirements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="sessmgr_test.go"',title:'"sessmgr_test.go"'},'package sessmgr_test\n\nimport (\n    "net/http"\n    "testing"\n\n    "github.com/ambientkit/ambient"\n    "github.com/ambientkit/plugin/pkg/sessmgrtestsuite"\n)\n\n// Run the standard session manager test suite.\nfunc TestMain(t *testing.T) {\n    ts := sessmgrtestsuite.New()\n    ts.Run(t, func() (ambient.AppSession, func(next http.Handler) http.Handler) {\n        return setup(t) // Replace with your own setup function.\n    })\n}\n')))}g.isMDXComponent=!0}}]);