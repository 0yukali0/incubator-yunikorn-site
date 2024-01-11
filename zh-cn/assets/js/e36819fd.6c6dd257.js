"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"cluster",title:"\u96c6\u7fa4"},l=void 0,i={unversionedId:"api/cluster",id:"version-1.3.0/api/cluster",title:"\u96c6\u7fa4",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.3.0/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/zh-cn/docs/1.3.0/api/cluster",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"cluster",title:"\u96c6\u7fa4"},sidebar:"docs",previous:{title:"\u8fd0\u884cMPI\u4f5c\u4e1a",permalink:"/zh-cn/docs/1.3.0/user_guide/workloads/run_mpi"},next:{title:"\u8c03\u5ea6\u5668",permalink:"/zh-cn/docs/1.3.0/api/scheduler"}},p={},s=[{value:"\u96c6\u7fa4",id:"\u96c6\u7fa4",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",level:3},{value:"\u51fa\u9519\u65f6\u7684\u54cd\u5e94",id:"\u51fa\u9519\u65f6\u7684\u54cd\u5e94",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u96c6\u7fa4"},"\u96c6\u7fa4"),(0,a.kt)("p",null,"\u5c06\u56de\u4f20Yunikorn\u6240\u7ba1\u7406\u7684\u96c6\u7fa4\u7684\u4fe1\u606f\u3002\u4fe1\u606f\u5305\u62ec\u5e94\u7528\u7a0b\u5e8f\u7684\u6570\u91cf\uff08\u5305\u542b\u603b\u6570\u3001\u5931\u8d25\u3001\u6302\u8d77\u3001\u6b63\u5728\u8fd0\u884c\u3001\u5df2\u5b8c\u6210\uff09\u548c\u5bb9\u5668\u7684\u6570\u91cf\uff0c\u4ee5\u53ca\u8d44\u6e90\u7ba1\u7406\u5668\u7684\u6784\u5efa\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/ws/v1/clusters")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9700\u6c42\u6743\u9650"),"\uff1a\u65e0"),(0,a.kt)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u54cd\u5e94\u7684\u5185\u5bb9\u6765\u81ea\u4e00\u4e2a\u7fa4\u96c6\uff0c\u62e5\u6709\u4e00\u4e2a\u8d44\u6e90\u7ba1\u7406\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "startTime": 1649167576110754000,\n        "rmBuildInformation": [\n            {\n                "buildDate": "2022-02-21T19:09:16+0800",\n                "buildVersion": "latest",\n                "isPluginVersion": "false",\n                "rmId": "rm-123"\n            }\n        ],\n        "partition": "default",\n        "clusterName": "kubernetes"\n    }\n]\n')),(0,a.kt)("h3",{id:"\u51fa\u9519\u65f6\u7684\u54cd\u5e94"},"\u51fa\u9519\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"500 Internal Server Error")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n')))}m.isMDXComponent=!0}}]);