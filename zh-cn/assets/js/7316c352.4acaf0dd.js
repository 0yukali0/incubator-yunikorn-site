"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92262],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),i=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(o.Provider,{value:r},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=i(t),h=a,d=c["".concat(o,".").concat(h)]||c[h]||k[h]||u;return t?n.createElement(d,l(l({ref:r},s),{},{components:t})):n.createElement(d,l({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var u=t.length,l=new Array(u);l[0]=h;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<u;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7306:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>l,default:()=>c,frontMatter:()=>u,metadata:()=>p,toc:()=>o});var n=t(87462),a=(t(67294),t(3905));const u={id:"rn-1.4.0",title:"Release Announcement v1.4.0"},l=void 0,p={type:"mdx",permalink:"/zh-cn/release-announce/1.4.0",source:"@site/i18n/zh-cn/docusaurus-plugin-content-pages/release-announce/1.4.0.md",title:"Release Announcement v1.4.0",description:"\x3c!--",frontMatter:{id:"rn-1.4.0",title:"Release Announcement v1.4.0"}},o=[{value:"Overview",id:"overview",level:2},{value:"\u4e0d\u517c\u5bb9\u53d8\u66f4",id:"\u4e0d\u517c\u5bb9\u53d8\u66f4",level:2},{value:"Kubernetes \u7248\u672c\u652f\u63f4",id:"kubernetes-\u7248\u672c\u652f\u63f4",level:3},{value:"\u4eae\u70b9",id:"\u4eae\u70b9",level:2},{value:"Kubernetes \u7248\u672c\u652f\u63f4",id:"kubernetes-\u7248\u672c\u652f\u63f4-1",level:3},{value:"PreEnqueue \u63d2\u4ef6\u5b9e\u4f5c",id:"preenqueue-\u63d2\u4ef6\u5b9e\u4f5c",level:3},{value:"\u8303\u56f4\u5316\u65e5\u5fd7",id:"\u8303\u56f4\u5316\u65e5\u5fd7",level:3},{value:"\u79fb\u9664 Spark Operator \u5e94\u7528\u7a0b\u5f0f\u7ba1\u7406\u5668",id:"\u79fb\u9664-spark-operator-\u5e94\u7528\u7a0b\u5f0f\u7ba1\u7406\u5668",level:3},{value:"\u79fb\u9664 YuniKorn \u5e94\u7528\u7a0b\u5f0f CRD",id:"\u79fb\u9664-yunikorn-\u5e94\u7528\u7a0b\u5f0f-crd",level:3},{value:"\u5e94\u7528\u7a0b\u5f0f\u53ef\u8ffd\u6eaf\u6027",id:"\u5e94\u7528\u7a0b\u5f0f\u53ef\u8ffd\u6eaf\u6027",level:3},{value:"\u5efa\u7f6e\u66f4\u65b0",id:"\u5efa\u7f6e\u66f4\u65b0",level:3},{value:"\u793e\u533a",id:"\u793e\u533a",level:2}],i={toc:o},s="wrapper";function c(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-announcement-v140"},"Release Announcement v1.4.0"),(0,a.kt)("p",null,"\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03Apache YuniKorn\u793e\u533a\u5df2\u6295\u7968\u51b3\u5b9a\u53d1\u5e031.4.0\u3002\nApache YuniKorn\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u8d44\u6e90\u8c03\u5ea6\u5668\uff0c\u4e13\u4e3a\u7ba1\u7406\u548c\u8c03\u5ea6\u5728\u5bb9\u5668\u7f16\u6392\u6846\u67b6(\u5982Kubernetes)\u4e0a\u7684\u5927\u6570\u636e\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u7528\u4e8e\u672c\u5730\u548c\u4e91\u7aef\u4f7f\u7528\u6848\u4f8b\u3002"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Apache YuniKorn\u793e\u533a\u5728\u6b64\u7248\u672c\u4e2d\u4fee\u590d\u4e86270\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/issues/?filter=12352769"},"JIRAs"),"\u3002"),(0,a.kt)("p",null,"\u53d1\u5e03\u7ecf\u7406: Wilfred Spiegelenburg"),(0,a.kt)("p",null,"\u53d1\u5e03\u65e5\u671f: 2023-11-20"),(0,a.kt)("h2",{id:"\u4e0d\u517c\u5bb9\u53d8\u66f4"},"\u4e0d\u517c\u5bb9\u53d8\u66f4"),(0,a.kt)("h3",{id:"kubernetes-\u7248\u672c\u652f\u63f4"},"Kubernetes \u7248\u672c\u652f\u63f4"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e0d"),"\u652f\u63f4\u5728 Kubernetes 1.23 \u6216\u66f4\u65e9\u671f\u7684\u7248\u672c\u4e2d\u8fd0\u884c\uff0c\u5bf9\u4e8e\u65e9\u671f\u7684 Kubernetes \u7248\u672c\u8bf7\u4f7f\u7528 YuniKorn 1.3.0\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5907\u6ce8"),": YuniKorn 1.3.0 \u662f\u652f\u63f4 Kubernetes 1.23 \u6216\u66f4\u65e9\u671f\u7248\u672c\u7684\u6700\u540e\u4e00\u4e2a\u7248\u672c\u3002"),(0,a.kt)("h2",{id:"\u4eae\u70b9"},"\u4eae\u70b9"),(0,a.kt)("h3",{id:"kubernetes-\u7248\u672c\u652f\u63f4-1"},"Kubernetes \u7248\u672c\u652f\u63f4"),(0,a.kt)("p",null,"YuniKorn 1.4.0 \u652f\u63f4\u5728\u7248\u672c 1.24 \u5230 1.28 \u7684 Kubernetes \u4e1b\u96c6\u4e0a\u8fd0\u884c\u3002"),(0,a.kt)("p",null,"\u8be6\u7ec6\u8d44\u8baf\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1841"},"YUNIKORN-1841")),(0,a.kt)("h3",{id:"preenqueue-\u63d2\u4ef6\u5b9e\u4f5c"},"PreEnqueue \u63d2\u4ef6\u5b9e\u4f5c"),(0,a.kt)("p",null,"YuniKorn \u6dfb\u52a0\u4e86\u8c03\u5ea6\u5668\u63d2\u4ef6\u7684 pre-enqueue \u8c03\u5ea6\u6302\u94a9\u3002\u8fd9\u5141\u8bb8\u6839\u636e\u961f\u5217\u538b\u529b\u963b\u6b62\u5c1a\u672a\u5c31\u7eea\u7684 Pod \u8fdb\u884c\u95e8\u63a7\u3002Pre-enqueue \u8c03\u5ea6\u6302\u94a9\u662f\u901a\u8fc7\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/enhancements/blob/master/keps/sig-scheduling/3521-pod-scheduling-readiness/README.md"},"KEP-3521")," \u6dfb\u52a0\u5230 Kubernetes \u4e2d\u7684\u3002 \u4ed6\u5c06\u5728 Kubernetes 1.27 \u7248\u672c\u4e2d\u9ed8\u8ba4\u5f00\u542f\u3002"),(0,a.kt)("p",null,"\u8fd9\u529f\u80fd\u5141\u8bb8\u5728 Kubernetes \u8d44\u6e90\u914d\u989d\u7cfb\u7edf\u4e4b\u5916\u7ba1\u7406\u914d\u989d\uff0c\u5e76\u5bf9\u4e8e API \u4f3a\u670d\u5668\u548c\u9884\u8bbe\u8c03\u5ea6\u7a0b\u5e8f\u7684\u5f71\u54cd\u8f83\u5c0f\u3002\u6b64\u529f\u80fd\u4ec5\u5bf9\u4e8e YuniKorn \u7684\u63d2\u4ef6\u5b9e\u4f5c\u5f88\u91cd\u8981\u3002\n\u5728\u6807\u51c6\u6a21\u5f0f\u4e0b\uff0cYuniKorn \u59cb\u7ec8\u5728\u6ca1\u6709\u5916\u90e8\u5f71\u54cd\u7684\u60c5\u51b5\u4e0b\u5bf9 Pod \u8fdb\u884c\u95e8\u63a7\u3002"),(0,a.kt)("p",null,"\u8be6\u7ec6\u8d44\u8baf\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1844"},"YUNIKORN-1844")),(0,a.kt)("h3",{id:"\u8303\u56f4\u5316\u65e5\u5fd7"},"\u8303\u56f4\u5316\u65e5\u5fd7"),(0,a.kt)("p",null,"YuniKorn \u7a0b\u5f0f\u7801\u5185\u7684\u65e5\u5fd7\u7eaa\u5f55\u5efa\u5728\u4ec5\u9650\u4e8e\u90e8\u5206\u7a0b\u5f0f\u7801\u5e93\u3002\u8303\u56f4\u65e5\u5fd7\u5141\u8bb8\u66f4\u6539\u90e8\u5206\u7a0b\u5f0f\u7801\u7684\u65e5\u5fd7\u7eaa\u5f55\u7b49\u7ea7\u3002\u8fd9\u4f7f\u7ba1\u7406\u5458\u53ef\u4ee5\u66f4\u597d\u5730\u63a7\u5236\u6bcf\u4e2a\u5b50\u7cfb\u7edf\u7684\u5c42\u7ea7\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u8fd8\u53ef\u4ee5\u4ee5\u6587\u5b57\u5f62\u5f0f\u6307\u5b9a\u65e5\u5fd7\u7ea7\u522b\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u6570\u5b57\u3002\u6587\u4ef6\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://yunikorn.apache.org/docs/user_guide/service_config"},"\u670d\u52a1\u914d\u7f6e")," \u7684\u4e00\u90e8\u5206\u3002"),(0,a.kt)("p",null,"\u8be6\u7ec6\u8d44\u8baf\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1823"},"YUNIKORN-1823")),(0,a.kt)("h3",{id:"\u79fb\u9664-spark-operator-\u5e94\u7528\u7a0b\u5f0f\u7ba1\u7406\u5668"},"\u79fb\u9664 Spark Operator \u5e94\u7528\u7a0b\u5f0f\u7ba1\u7406\u5668"),(0,a.kt)("p",null,"\u65b0\u589e\u4e86 Spark operator \u5e94\u7528\u7a0b\u5f0f\u7ba1\u7406\u5668\u4ee5\u652f\u63f4 Spark operator \u4f5c\u4e3a\u5916\u90e8\u6574\u5408\u3002\u5b83\u4e3a\u900f\u8fc7 operator \u63d0\u4ea4\u7684 Spark \u5e94\u7528\u7a0b\u5f0f\u6dfb\u52a0\u4e86\u5b8c\u6574\u7684\u751f\u547d\u5468\u671f\u3002\n\u5e94\u7528\u7a0b\u5f0f\u7ba1\u7406\u5668\u4ece\u672a\u9ed8\u8ba4\u542f\u7528\uff0c\u9700\u8981\u81ea\u8ba2\u914d\u7f6e\u624d\u80fd\u542f\u7528\u3002"),(0,a.kt)("p",null,"\u6b64\u5b9e\u4f5c\u5bfc\u81f4\u521b\u5efa\u91cd\u590d\u7684 Spark application\uff0c\u5e76\u5728\u4f5c\u4e3a YuniKorn 0.11 \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-643"},"YUNIKORN-643"),"\n\u4e2d\u56de\u6eda\u3002\u57fa\u672c\u7684 Pod \u5904\u7406\u6db5\u76d6\u4e86\u5269\u4e0b\u7684\u529f\u80fd\u3002\u4e3a\u4e86\u51cf\u5c11\u7a0b\u5f0f\u7801\u7ef4\u62a4\uff0c\u73b0\u5728\u4e5f\u5220\u9664\u4e86\u5269\u4f59\u7684\u7a0b\u5f0f\u7801\uff0c\u800c\u4e0d\u4f1a\u5931\u53bb\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u8be6\u7ec6\u8d44\u8baf\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-2092"},"YUNIKORN-2092")),(0,a.kt)("h3",{id:"\u79fb\u9664-yunikorn-\u5e94\u7528\u7a0b\u5f0f-crd"},"\u79fb\u9664 YuniKorn \u5e94\u7528\u7a0b\u5f0f CRD"),(0,a.kt)("p",null,"YuniKorn 1.4.0 \u5df2\u79fb\u9664\u5e94\u7528\u7a0b\u5f0f CRD\u3002\u6dfb\u52a0\u5e94\u7528\u7a0b\u5f0f CRD \u662f\u4e3a\u4e86\u66f4\u7b80\u5355\u5730\u5c06\u5e94\u7528\u7a0b\u5f0f\u4e0e YuniKorn \u6574\u5408\u3002\u8fd9\u79cd\u6574\u5408\u4ece\u672a\u88ab\u4f7f\u7528\u8fc7\uff0c\u76ee\u524d\u6240\u6709\u6574\u5408\u90fd\u4f9d\u8d56\nPod \u4e0a\u7684\u7b80\u5355\u6807\u7b7e\u6216\u662f\u6ce8\u91ca\u3002 "),(0,a.kt)("p",null,"\u8be6\u7ec6\u8d44\u8baf\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1672"},"YUNIKORN-1672")),(0,a.kt)("h3",{id:"\u5e94\u7528\u7a0b\u5f0f\u53ef\u8ffd\u6eaf\u6027"},"\u5e94\u7528\u7a0b\u5f0f\u53ef\u8ffd\u6eaf\u6027"),(0,a.kt)("p",null,"\u8ffd\u8e2a\u548c\u6545\u969c\u6392\u9664\u5e94\u7528\u7a0b\u5f0f\u662f\u4e13\u95e8\u9488\u5bf9 YuniKorn\u3002 Kubernetes \u4e2d\u6ca1\u6709\u5e94\u7528\u7a0b\u5f0f\u7684\u6982\u5ff5\u3002\u65b0\u589e\u4e86\u4e8b\u4ef6\u7cfb\u7edf\u6765\u516c\u5f00\u5e94\u7528\u7a0b\u5f0f\u3001\u961f\u5217\u548c\u8282\u70b9\u7684\u53d8\u66f4\u4ee5\u516c\u5916\u90e8\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u8be6\u7ec6\u8d44\u8baf\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1628"},"YUNIKORN-1628")),(0,a.kt)("h3",{id:"\u5efa\u7f6e\u66f4\u65b0"},"\u5efa\u7f6e\u66f4\u65b0"),(0,a.kt)("p",null,"\u5728\u5efa\u7f6e\u4e8c\u8fdb\u4f4d\u6863\u6848\u6216\u6620\u50cf\u65f6\uff0cYuniKorn \u5efa\u7f6e\u4e0d\u518d\u4f9d\u8d56\u96c6\u4e2d\u5b89\u88c5\u7684\u5de5\u5177\u3002\u6bcf\u4e2a\u7248\u672c\u90fd\u4f1a\u4e0b\u8f7d\u5e76\u7ef4\u62a4\u81ea\u5df1\u7684\u5de5\u5177\u96c6\uff0c\u751a\u81f3\u4e0d\u4f1a\u5728\u7b7e\u51fa\u7684\u50a8\u5b58\u5e93\u4e4b\u95f4\u5171\u7528\u3002"),(0,a.kt)("p",null,"\u8fd9\u9879\u53d8\u66f4\u4e8e 7 \u6708\u5e95\u5728 dev@ \u90ae\u4ef6\u5355\u4e0a\u5ba3\u5e03\u3002"),(0,a.kt)("p",null,"\u8bf7\u53c2\u9605\u8fd9\u4e9b jiras \u5df2\u4e86\u89e3\u8be6\u7ec6\u8d44\u8baf:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"k8shim: ",(0,a.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1862"},"YUNIKORN-1862")," and ",(0,a.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1865"},"YUNIKORN-1865")),(0,a.kt)("li",{parentName:"ul"},"core: ",(0,a.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1868"},"YUNIKORN-1868")),(0,a.kt)("li",{parentName:"ul"},"web UI: ",(0,a.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1873"},"YUNIKORN-1873"))),(0,a.kt)("h2",{id:"\u793e\u533a"},"\u793e\u533a"),(0,a.kt)("p",null,"Apache YuniKorn \u793e\u533a\u5f88\u9ad8\u5174\u6b22\u8fce\u65b0\u7684PMC: Rainie Li \u548ccommitters: Hsuang Zong Wu \u548c PoAn Yang\u3002"))}c.isMDXComponent=!0}}]);