"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8520],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),f=o,m=s["".concat(a,".").concat(f)]||s[f]||d[f]||i;return t?r.createElement(m,u(u({ref:n},p),{},{components:t})):r.createElement(m,u({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=s;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var c=2;c<i;c++)u[c]=t[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},83006:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),u=["components"],l={id:"deployment_modes",title:"\u90e8\u7f72\u6a21\u5f0f"},a=void 0,c={unversionedId:"user_guide/deployment_modes",id:"user_guide/deployment_modes",title:"\u90e8\u7f72\u6a21\u5f0f",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/user_guide/deployment_modes.md",sourceDirName:"user_guide",slug:"/user_guide/deployment_modes",permalink:"/zh-cn/docs/next/user_guide/deployment_modes",draft:!1,tags:[],version:"current",frontMatter:{id:"deployment_modes",title:"\u90e8\u7f72\u6a21\u5f0f"},sidebar:"docs",previous:{title:"\u7279\u5f81",permalink:"/zh-cn/docs/next/get_started/core_features"},next:{title:"Service Configuration",permalink:"/zh-cn/docs/next/user_guide/service_config"}},p={},d=[{value:"YuniKorn\u90e8\u7f72\u6a21\u5f0f",id:"yunikorn\u90e8\u7f72\u6a21\u5f0f",level:2},{value:"\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u7248\u672c\uff1f",id:"\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u7248\u672c",level:2},{value:"\u6807\u51c6\u6a21\u5f0f(Standard)",id:"\u6807\u51c6\u6a21\u5f0fstandard",level:3},{value:"\u63d2\u4ef6\u6a21\u5f0f(Plugin)",id:"\u63d2\u4ef6\u6a21\u5f0fplugin",level:3}],s={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"yunikorn\u90e8\u7f72\u6a21\u5f0f"},"YuniKorn\u90e8\u7f72\u6a21\u5f0f"),(0,i.kt)("p",null,"YuniKorn\u6709\u4e24\u79cd\u90e8\u7f72\u6a21\u5f0f: ",(0,i.kt)("inlineCode",{parentName:"p"},"\u6807\u51c6\u6a21\u5f0f"),"\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"\u63d2\u4ef6\u6a21\u5f0f"),"\u3002\n\u5728\u6807\u51c6\u6a21\u5f0f\u4e0b\uff0cYuniKorn\u4f5c\u4e3a\u81ea\u5b9a\u4e49\u6a21\u5f0f\u8fd0\u884cKubernetes\u8c03\u5ea6\u7a0b\u5e8f\u3002\n\u5728\u63d2\u4ef6\u6a21\u5f0f\u4e0b\uff0cYuniKorn\u88ab\u5b9e\u73b0\u4e3a\u9ed8\u8ba4Kubernetes\u8c03\u5ea6\u6846\u67b6\u4e4b\u4e0a\u7684\u4e00\u7ec4\u63d2\u4ef6\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0c\u5efa\u8bae\u540c\u65f6\u8fd0\u884c\u51c6\u5165\u63a7\u5236\u5668(admin controller)\uff0c\u8fd9\u4f1a\u786e\u4fdd\u53ea\u6709\u4e00\u4e2a\u8c03\u5ea6\u7a0b\u5e8f\u5728\u60a8\u7684Kubernetes\u96c6\u7fa4\u4e2d\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u3002\n\u5f53\u51c6\u5165\u63a7\u5236\u5668\u8fd0\u884c\u65f6\uff0c\u6240\u6709pod\u5c06\u4f1a\u7ed5\u8fc7Kubernetes\u7684\u9ed8\u8ba4\u8c03\u5ea6\u5668\uff0c\u9664\u4e86YuniKorn\u672c\u8eab\u7684pod\u3002"),(0,i.kt)("h2",{id:"\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u7248\u672c"},"\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u7248\u672c\uff1f"),(0,i.kt)("h3",{id:"\u6807\u51c6\u6a21\u5f0fstandard"},"\u6807\u51c6\u6a21\u5f0f(Standard)"),(0,i.kt)("p",null,"\u76ee\u524d\u7684\u9ed8\u8ba4\u6a21\u5f0f\u662f\u6807\u51c6\u6a21\u5f0f\u3002 \u6807\u51c6\u6a21\u5f0f\u63d0\u4f9b\u7a33\u5b9a\u3001\u9ad8\u6548\u3001\u826f\u597d\u6027\u80fd\u3002\n\u5f53pod\u5229\u7528YuniKorn\u7684\u961f\u5217\u529f\u80fd\uff0c\u6b64\u6a21\u5f0f\u975e\u5e38\u9002\u5408\u5927\u591a\u6570\u6b64\u7c7b\u90e8\u7f72\u3002"),(0,i.kt)("h3",{id:"\u63d2\u4ef6\u6a21\u5f0fplugin"},"\u63d2\u4ef6\u6a21\u5f0f(Plugin)"),(0,i.kt)("p",null,"\u63d2\u4ef6\u6a21\u5f0f\u662f\u4e00\u79cd\u65b0\u7684\u90e8\u7f72\u6a21\u578b\uff0c\u8c03\u5ea6\u5668\u662f\u5728\u9ed8\u8ba4\u7684Kubernetes\u8c03\u5ea6\u903b\u8f91\u4e4b\u4e0a\u5b9e\u73b0\u7684\uff0c\u53ef\u4ee5\u66f4\u597d\u5730\u517c\u5bb9\u9ed8\u8ba4\u7684Kubernetes\u8c03\u5ea6\u5668\u3002\n\u5b83\u975e\u5e38\u9002\u5408\u6df7\u5408\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5982\u4f20\u7edf\u7684Kubernetes\u4ee5\u53ca\u6392\u961f\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,i.kt)("p",null,"\u63d2\u4ef6\u6a21\u5f0f\u76ee\u524d\u975e\u5e38\u65b0\uff0c\u56e0\u6b64\u8fd8\u6ca1\u6709\u8fbe\u5230\u6807\u51c6\u6a21\u5f0f\u7684\u6210\u719f\u5ea6\u3002"),(0,i.kt)("p",null,"\u8981\u5728\u4f7f\u7528 Helm \u90e8\u7f72\u65f6\u6fc0\u6d3b\u63d2\u4ef6\u6a21\u5f0f\uff0c\u8bf7\u5c06\u53d8\u91cf",(0,i.kt)("inlineCode",{parentName:"p"},"enableSchedulerPlugin"),"\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"))}f.isMDXComponent=!0}}]);