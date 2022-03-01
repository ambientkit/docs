"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4324],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(n),m=a,d=g["".concat(u,".").concat(m)]||g[m]||c[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6159:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return g}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},u="Storage System",l={unversionedId:"plugins/storage",id:"plugins/storage",title:"Storage System",description:"A storage system stores the app settings (title, content, scheme, URL, etc.) as well as plugin status (enabled/disabled), settings, and permissions granted.",source:"@site/docs/plugins/storage.md",sourceDirName:"plugins",slug:"/plugins/storage",permalink:"/docs/plugins/storage",editUrl:"https://github.com/ambientkit/ambientkit.github.io/blob/main/docs/plugins/storage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logger",permalink:"/docs/plugins/logger"},next:{title:"Session Manager",permalink:"/docs/plugins/session"}},p=[],c={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storage-system"},"Storage System"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/blob/main/storage/gcpbucketstorage/gcpbucketstorage.go"},"storage system")," stores the app settings (title, content, scheme, URL, etc.) as well as plugin status (enabled/disabled), settings, and permissions granted."),(0,o.kt)("p",null,"A storage system plugin must include, at a minimum, the code below with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage()")," function. Notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"*ambient.PluginBase")," object is not included in the struct because this plugin type does need it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Package mvp provides a template for building a plugin for Ambient apps.\npackage mvp\n\nimport (\n    "github.com/ambientkit/ambient"\n)\n\n// Plugin represents an Ambient plugin.\ntype Plugin struct{}\n\n// New returns a new mvp plugin.\nfunc New() *Plugin {\n    return &Plugin{}\n}\n\n// PluginName returns the plugin name.\nfunc (p *Plugin) PluginName() string {\n    return "mvp"\n}\n\n// PluginVersion returns the plugin version.\nfunc (p *Plugin) PluginVersion() string {\n    return "1.0.0"\n}\n\n// Storage returns data and session storage.\nfunc (p *Plugin) Storage(logger ambient.Logger) (ambient.DataStorer, ambient.SessionStorer, error) {\n    // Add your code here.\n    return nil, nil, nil\n}\n')),(0,o.kt)("p",null,"The function should return objects that satisfy the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/ambient/blob/main/ambient_datastorer.go"},(0,o.kt)("inlineCode",{parentName:"a"},"DataStorer"))," interface and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/ambient/blob/main/ambient_sessionstorer.go"},(0,o.kt)("inlineCode",{parentName:"a"},"SessionStorer"))," interface. Notice you don't have to worry about the type of data. This makes it easy to read or write to any medium."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="ambient_datastorer.go"',title:'"ambient_datastorer.go"'},"// DataStorer reads and writes data to an object.\ntype DataStorer interface {\n    Save([]byte) error\n    Load() ([]byte, error)\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="ambient_sessionstorer.go"',title:'"ambient_sessionstorer.go"'},"// SessionStorer reads and writes data to an object.\ntype SessionStorer interface {\n    Save([]byte) error\n    Load() ([]byte, error)\n}\n")))}g.isMDXComponent=!0}}]);