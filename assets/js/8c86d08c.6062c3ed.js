"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6200],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),p=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(u.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,d=c["".concat(u,".").concat(m)]||c[m]||g[m]||o;return t?i.createElement(d,a(a({ref:n},s),{},{components:t})):i.createElement(d,a({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7207:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),a=["components"],l={},u="Doc Generation",p={unversionedId:"plugins/docgen",id:"plugins/docgen",title:"Doc Generation",description:"The goal of the documentation is to make it easy for other developers to see how the plugin will behave when it's added to their Ambient app. Also, documentation is not always fun to write and keep updated so this should help!",source:"@site/docs/plugins/docgen.md",sourceDirName:"plugins",slug:"/plugins/docgen",permalink:"/docs/plugins/docgen",editUrl:"https://github.com/ambientkit/ambientkit.github.io/blob/main/docs/plugins/docgen.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gRPC Compiled Plugins",permalink:"/docs/plugins/grpc"},next:{title:"Best Practices",permalink:"/docs/plugins/practices"}},s=[{value:"Sample Test File",id:"sample-test-file",children:[],level:2},{value:"Generated README.md",id:"generated-readmemd",children:[],level:2}],g={toc:s};function c(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"doc-generation"},"Doc Generation"),(0,o.kt)("p",null,"The goal of the documentation is to make it easy for other developers to see how the plugin will behave when it's added to their Ambient app. Also, documentation is not always fun to write and keep updated so this should help!"),(0,o.kt)("p",null,"You can automatically generate documentation for your plugin easily. Simply add this test file to the root of your project and reference your plugin. When you run ",(0,o.kt)("inlineCode",{parentName:"p"},"go test")," in the root of your project, it will run your plugin in a lightweight version of Ambient, and then output a markdown ",(0,o.kt)("inlineCode",{parentName:"p"},"README.md")," file in the same directory."),(0,o.kt)("h2",{id:"sample-test-file"},"Sample Test File"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="yourplugin_test.go"',title:'"yourplugin_test.go"'},'package yourplugin_test\n\nimport (\n    "log"\n    "testing"\n\n    "github.com/ambientkit/ambient"\n    "github.com/ambientkit/ambient/pkg/ambientapp"\n    "github.com/ambientkit/plugin/logger/zaplogger"\n    "github.com/ambientkit/plugin/pkg/docgen"\n    "github.com/ambientkit/plugin/storage/memorystorage"\n)\n\nfunc ExampleNew() {\n    plugins := &ambient.PluginLoader{\n        // Core plugins are implicitly trusted.\n        Router:         nil,\n        TemplateEngine: nil,\n        SessionManager: nil,\n        // Trusted plugins are those that are typically needed to boot so they\n        // will be enabled and given full access.\n        TrustedPlugins: map[string]bool{},\n        Plugins: []ambient.Plugin{\n            yourplugin.New(),\n        },\n        Middleware: []ambient.MiddlewarePlugin{\n            // Middleware - executes bottom to top.\n        },\n    }\n    _, _, err := ambientapp.NewApp("myapp", "1.0",\n        zaplogger.New(),\n        ambient.StoragePluginGroup{\n            Storage: memorystorage.New(),\n        },\n        plugins)\n    if err != nil {\n        log.Fatalln(err.Error())\n    }\n}\n\nfunc TestGenerateDocs(t *testing.T) {\n    docgen.Generate(t, yourplugin.New(), "")\n}\n\n')),(0,o.kt)("h2",{id:"generated-readmemd"},"Generated README.md"),(0,o.kt)("p",null,"This is an example of the ",(0,o.kt)("inlineCode",{parentName:"p"},"README.md")," file that gets generated by the test code above. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/pkg/docgen"},"docgen")," package handles the analysis and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/blob/main/pkg/docgen/template.tmpl"},"template generation"),"."),(0,o.kt)("p",null,"The title and version are pulled from the plugin functions. The package level comment is used as the plugin description. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Example Usage")," section pulls the first ",(0,o.kt)("a",{parentName:"p",href:"https://go.dev/blog/examples"},"testable example"),". The rest of the information is pulled by checking the plugin against interfaces and then executing functions to monitor how the plugin behaves."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="README.md"',title:'"README.md"'},'# yourplugin\n\nPackage yourplugin is an Ambient plugin that does something.\n\n**Import:** github.com/ambientkit/plugin/generic/yourplugin\n\n**Version:** 1.0.0\n\n## Plugin Type\n\nThe plugin can be used as the follow core types:\n\n- **Logger:** false\n- **Storage System:** false\n- **Router:** false\n- **Template Engine:** false\n- **Session Manager:** false\n\n## Grants\n\nThe plugin request the following grants (2):\n\n- **Name**: plugin.setting:read\n  - **Description**: Access to the yourplugin name.\n- **Name**: site.asset:write\n  - **Description**: Access to write a meta tag to the header.\n\n## Settings\n\nThe plugin has the follow settings (1):\n\n- **Name**: yourplugin\n  - **Type**: input\n  - **Hidden**: false\n\n## Routes\n\nThe plugin does not have any routes.\n\n## Middleware\n\nThe plugin does not have any middleware.\n\n## FuncMap\n\nThe plugin does not have a FuncMap.\n\n## Assets\n\nThe plugin does not inject any assets.\n\n## Embedded Files\n\nThe plugin does not have any embedded files.\n\n## Example Usage\n\npackage main\n\nimport (\n    "log"\n\n    "github.com/ambientkit/ambient"\n    "github.com/ambientkit/plugin/generic/yourplugin"\n    "github.com/ambientkit/plugin/logger/zaplogger"\n    "github.com/ambientkit/plugin/storage/memorystorage"\n)\n\nfunc main() {\n    plugins := &ambient.PluginLoader{\n        // Core plugins are implicitly trusted.\n        Router:         nil,\n        TemplateEngine: nil,\n        SessionManager: nil,\n        // Trusted plugins are those that are typically needed to boot so they\n        // will be enabled and given full access.\n        TrustedPlugins: map[string]bool{},\n        Plugins: []ambient.Plugin{\n            yourplugin.New(),\n        },\n        Middleware: []ambient.MiddlewarePlugin{\n            // Middleware - executes bottom to top.\n        },\n    }\n    _, _, err := ambientapp.NewApp("myapp", "1.0",\n        zaplogger.New(),\n        ambient.StoragePluginGroup{\n            Storage: memorystorage.New(),\n        },\n        plugins)\n    if err != nil {\n        log.Fatalln(err.Error())\n    }\n}\n\n---\n\nDocgen by [Ambient](https://ambientkit.github.io)\n')))}c.isMDXComponent=!0}}]);