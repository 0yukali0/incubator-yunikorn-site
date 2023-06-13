"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54181],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=u(n),d=a,m=k["".concat(p,".").concat(d)]||k[d]||s[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[k]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81232:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return k}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"evaluate_perf_function_with_kubemark",title:"\u4f7f\u7528 Kubemark \u8bc4\u4f30 YuniKorn \u7684\u6027\u80fd",keywords:["\u6027\u80fd","\u541e\u5410\u91cf"]},p=void 0,u={unversionedId:"performance/evaluate_perf_function_with_kubemark",id:"performance/evaluate_perf_function_with_kubemark",title:"\u4f7f\u7528 Kubemark \u8bc4\u4f30 YuniKorn \u7684\u6027\u80fd",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/performance/evaluate_perf_function_with_kubemark.md",sourceDirName:"performance",slug:"/performance/evaluate_perf_function_with_kubemark",permalink:"/zh-cn/docs/next/performance/evaluate_perf_function_with_kubemark",draft:!1,tags:[],version:"current",frontMatter:{id:"evaluate_perf_function_with_kubemark",title:"\u4f7f\u7528 Kubemark \u8bc4\u4f30 YuniKorn \u7684\u6027\u80fd",keywords:["\u6027\u80fd","\u541e\u5410\u91cf"]},sidebar:"docs",previous:{title:"Cross Queue Preemption",permalink:"/zh-cn/docs/next/archived_design/cross_queue_preemption"},next:{title:"\u57fa\u51c6\u6d4b\u8bd5\u6559\u7a0b",permalink:"/zh-cn/docs/next/performance/performance_tutorial"}},c={},k=[{value:"\u73af\u5883\u8bbe\u7f6e",id:"\u73af\u5883\u8bbe\u7f6e",level:2},{value:"\u8c03\u5ea6\u7a0b\u5e8f\u541e\u5410\u91cf",id:"\u8c03\u5ea6\u7a0b\u5e8f\u541e\u5410\u91cf",level:2},{value:"\u6027\u80fd\u5206\u6790",id:"\u6027\u80fd\u5206\u6790",level:2},{value:"K8s \u9650\u5236",id:"k8s-\u9650\u5236",level:3},{value:"\u8282\u70b9\u6392\u5e8f",id:"\u8282\u70b9\u6392\u5e8f",level:3},{value:"\u6bcf\u4e2a\u8282\u70b9\u7684\u524d\u63d0\u6761\u4ef6\u68c0\u67e5",id:"\u6bcf\u4e2a\u8282\u70b9\u7684\u524d\u63d0\u6761\u4ef6\u68c0\u67e5",level:3},{value:"\u4e3a\u4ec0\u4e48 YuniKorn \u66f4\u5feb?",id:"\u4e3a\u4ec0\u4e48-yunikorn-\u66f4\u5feb",level:2},{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2}],s={toc:k},d="wrapper";function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)(d,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"YuniKorn \u793e\u533a\u5173\u6ce8\u8c03\u5ea6\u7a0b\u5e8f\u7684\u6027\u80fd\uff0c\u5e76\u7ee7\u7eed\u5728\u53d1\u5e03\u65f6\u5bf9\u5176\u8fdb\u884c\u4f18\u5316\u3002 \u793e\u533a\u5df2\u7ecf\u5f00\u53d1\u4e86\u4e00\u4e9b\u5de5\u5177\u6765\u53cd\u590d\u6d4b\u8bd5\u548c\u8c03\u6574\u6027\u80fd\u3002"),(0,i.kt)("h2",{id:"\u73af\u5883\u8bbe\u7f6e"},"\u73af\u5883\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u6211\u4eec\u5229\u7528",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/release-1.3/docs/devel/kubemark-guide.md#starting-a-kubemark-cluster"},"Kubemark"),"\u8bc4\u4f30\u8c03\u5ea6\u5668\u7684\u6027\u80fd\u3002 Kubemark\u662f\u4e00\u4e2a\u6a21\u62df\u5927\u89c4\u6a21\u96c6\u7fa4\u7684\u6d4b\u8bd5\u5de5\u5177\u3002 \u5b83\u521b\u5efa\u7a7a\u8282\u70b9\uff0c\u8fd0\u884c\u7a7akubelet\u4ee5\u5047\u88c5\u539f\u59cbkubelet\u884c\u4e3a\u3002 \u8fd9\u4e9b\u7a7a\u8282\u70b9\u4e0a\u7684\u8c03\u5ea6pod\u4e0d\u4f1a\u771f\u6b63\u6267\u884c\u3002\u5b83\u80fd\u591f\u521b\u5efa\u4e00\u4e2a\u6ee1\u8db3\u6211\u4eec\u5b9e\u9a8c\u8981\u6c42\u7684\u5927\u96c6\u7fa4\uff0c\u63ed\u793ayunikorn\u8c03\u5ea6\u5668\u7684\u6027\u80fd\u3002 \u8bf7\u53c2\u9605\u6709\u5173\u5982\u4f55\u8bbe\u7f6e\u73af\u5883\u7684",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/performance/performance_tutorial"},"\u8be6\u7ec6\u6b65\u9aa4"),"\u3002"),(0,i.kt)("h2",{id:"\u8c03\u5ea6\u7a0b\u5e8f\u541e\u5410\u91cf"},"\u8c03\u5ea6\u7a0b\u5e8f\u541e\u5410\u91cf"),(0,i.kt)("p",null,"\u6211\u4eec\u5728\u6a21\u62df\u7684\u5927\u89c4\u6a21\u73af\u5883\u4e2d\u8bbe\u8ba1\u4e86\u4e00\u4e9b\u7b80\u5355\u7684\u57fa\u51c6\u6d4b\u8bd5\u573a\u666f\uff0c\u4ee5\u8bc4\u4f30\u8c03\u5ea6\u5668\u7684\u6027\u80fd\u3002 \u6211\u4eec\u7684\u5de5\u5177\u6d4b\u91cf",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Throughput"},"\u541e\u5410\u91cf"),"\u5e76\u4f7f\u7528\u8fd9\u4e9b\u5173\u952e\u6307\u6807\u6765\u8bc4\u4f30\u6027\u80fd\u3002 \u7b80\u800c\u8a00\u4e4b\uff0c\u8c03\u5ea6\u7a0b\u5e8f\u541e\u5410\u91cf\u662f\u5904\u7406pod\u4ece\u5728\u96c6\u7fa4\u4e0a\u53d1\u73b0\u5b83\u4eec\u5230\u5c06\u5b83\u4eec\u5206\u914d\u7ed9\u8282\u70b9\u7684\u901f\u7387\u3002"),(0,i.kt)("p",null,"\u5728\u672c\u5b9e\u9a8c\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/release-1.3/docs/devel/kubemark-guide.md#starting-a-kubemark-cluster"},"Kubemark")," \u8bbe\u7f6e\u4e86\u4e00\u4e2a\u6a21\u62df\u76842000/4000\u8282\u70b9\u96c6\u7fa4\u3002\u7136\u540e\u6211\u4eec\u542f\u52a810\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"\u90e8\u7f72"),"\uff0c\u6bcf\u4e2a\u90e8\u7f72\u5206\u522b\u8bbe\u7f6e5000\u4e2a\u526f\u672c\u3002 \u8fd9\u6a21\u62df\u4e86\u5927\u89c4\u6a21\u5de5\u4f5c\u8d1f\u8f7d\u540c\u65f6\u63d0\u4ea4\u5230K8s\u96c6\u7fa4\u3002 \u6211\u4eec\u7684\u5de5\u5177\u4f1a\u5b9a\u671f\u76d1\u63a7\u548c\u68c0\u67e5pod\u72b6\u6001\uff0c\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"podSpec.StartTime")," \u8ba1\u7b97\u542f\u52a8\u7684pod\u6570\u91cf\u3002 \u4f5c\u4e3a\u5bf9\u6bd4\uff0c\u6211\u4eec\u5c06\u76f8\u540c\u7684\u5b9e\u9a8c\u5e94\u7528\u5230\u76f8\u540c\u73af\u5883\u4e2d\u7684\u9ed8\u8ba4\u8c03\u5ea6\u7a0b\u5e8f\u3002 \u6211\u4eec\u770b\u5230\u4e86YuniKorn\u76f8\u5bf9\u4e8e\u9ed8\u8ba4\u8c03\u5ea6\u7a0b\u5e8f\u7684\u6027\u80fd\u4f18\u52bf\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Scheduler Throughput",src:n(36668).Z,width:"1920",height:"1080"})),(0,i.kt)("p",{align:"center"},"\u56fe 1. Yunikorn \u548c\u9ed8\u8ba4\u8c03\u5ea6\u5668\u541e\u5410\u91cf "),(0,i.kt)("p",null,"\u56fe\u8868\u8bb0\u5f55\u4e86\u96c6\u7fa4\u4e0a\u6240\u6709 Pod \u8fd0\u884c\u6240\u82b1\u8d39\u7684\u65f6\u95f4\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u8282\u70b9\u6570"),(0,i.kt)("th",{parentName:"tr",align:"center"},"yunikorn"),(0,i.kt)("th",{parentName:"tr",align:"center"},"k8s \u9ed8\u8ba4\u8c03\u5ea6\u5668"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5dee\u5f02"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2000(\u8282\u70b9)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"204(pods/\u79d2)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"49(pods/\u79d2)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"416%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4000(\u8282\u70b9)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"115(pods/\u79d2)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"48(pods/\u79d2)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"240%")))),(0,i.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7ed3\u679c\u6807\u51c6\u5316\uff0c\u6211\u4eec\u5df2\u7ecf\u8fd0\u884c\u4e86\u51e0\u8f6e\u6d4b\u8bd5\u3002 \u5982\u4e0a\u6240\u793a\uff0c\u4e0e\u9ed8\u8ba4\u8c03\u5ea6\u7a0b\u5e8f\u76f8\u6bd4\uff0cYuniKorn\u5b9e\u73b0\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"2 \u500d"),"~",(0,i.kt)("inlineCode",{parentName:"p"},"4 \u500d"),"\u7684\u6027\u80fd\u63d0\u5347\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u4e0e\u5176\u4ed6\u6027\u80fd\u6d4b\u8bd5\u4e00\u6837\uff0c\u7ed3\u679c\u56e0\u5e95\u5c42\u786c\u4ef6\u800c\u5f02\uff0c\u4f8b\u5982\u670d\u52a1\u5668CPU/\u5185\u5b58\u3001\u7f51\u7edc\u5e26\u5bbd\u3001I/O\u901f\u5ea6\u7b49\u3002\u4e3a\u4e86\u83b7\u5f97\u9002\u7528\u4e8e\u60a8\u7684\u73af\u5883\u7684\u51c6\u786e\u7ed3\u679c\uff0c\u6211\u4eec\u9f13\u52b1\u60a8\u8fd0\u884c\u8fd9\u4e9b\u6d4b\u8bd5\u5728\u9760\u8fd1\u751f\u4ea7\u73af\u5883\u7684\u96c6\u7fa4\u4e0a\u3002")),(0,i.kt)("h2",{id:"\u6027\u80fd\u5206\u6790"},"\u6027\u80fd\u5206\u6790"),(0,i.kt)("p",null,"\u6211\u4eec\u4ece\u5b9e\u9a8c\u4e2d\u5f97\u5230\u7684\u7ed3\u679c\u662f\u6709\u5e0c\u671b\u7684\u3002 \u6211\u4eec\u901a\u8fc7\u89c2\u5bdf\u66f4\u591a\u7684YuniKorn\u5185\u90e8\u6307\u6807\u8fdb\u4e00\u6b65\u6df1\u5165\u5206\u6790\u6027\u80fd\uff0c\u6211\u4eec\u80fd\u591f\u627e\u5230\u5f71\u54cd\u6027\u80fd\u7684\u51e0\u4e2a\u5173\u952e\u533a\u57df\u3002"),(0,i.kt)("h3",{id:"k8s-\u9650\u5236"},"K8s \u9650\u5236"),(0,i.kt)("p",null,"\u6211\u4eec\u53d1\u73b0\u6574\u4f53\u6027\u80fd\u5b9e\u9645\u4e0a\u53d7\u5230\u4e86K8s\u4e3b\u670d\u52a1\u7684\u9650\u5236\uff0c\u4f8b\u5982api-server\u3001controller-manager\u548cetcd\uff0c\u5728\u6211\u4eec\u6240\u6709\u7684\u5b9e\u9a8c\u4e2d\u90fd\u6ca1\u6709\u8fbe\u5230YuniKorn\u7684\u9650\u5236\u3002 \u5982\u679c\u60a8\u67e5\u770b\u5185\u90e8\u8c03\u5ea6\u6307\u6807\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Allocation latency",src:n(36658).Z,width:"1697",height:"703"})),(0,i.kt)("p",{align:"center"},"\u56fe 2. 4k \u8282\u70b9\u4e2d\u7684 Yunikorn \u6307\u6807 "),(0,i.kt)("p",null,"\u56fe2\u662fPrometheus\u7684\u622a\u56fe\uff0c\u5b83\u8bb0\u5f55\u4e86YuniKorn\u4e2d\u7684",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/performance/metrics"},"\u5185\u90e8\u6307\u6807")," ",(0,i.kt)("inlineCode",{parentName:"p"},"containerAllocation"),"\u3002 \u5b83\u4eec\u662f\u8c03\u5ea6\u7a0b\u5e8f\u5206\u914d\u7684 pod \u6570\u91cf\uff0c\u4f46\u4e0d\u4e00\u5b9a\u7ed1\u5b9a\u5230\u8282\u70b9\u3002 \u5b8c\u6210\u8c03\u5ea650k pod\u5927\u7ea6\u9700\u8981122\u79d2\uff0c\u5373410 pod/\u79d2\u3002 \u5b9e\u9645\u541e\u5410\u91cf\u4e0b\u964d\u5230115\u4e2a Pod/\u79d2\uff0c\u989d\u5916\u7684\u65f6\u95f4\u7528\u4e8e\u7ed1\u5b9a\u4e0d\u540c\u8282\u70b9\u4e0a\u7684Pod\u3002 \u5982\u679cK8s\u65b9\u9762\u80fd\u8d76\u4e0a\u6765\uff0c\u6211\u4eec\u4f1a\u770b\u5230\u66f4\u597d\u7684\u7ed3\u679c\u3002 \u5b9e\u9645\u4e0a\uff0c\u5f53\u6211\u4eec\u5728\u5927\u89c4\u6a21\u96c6\u7fa4\u4e0a\u8c03\u6574\u6027\u80fd\u65f6\uff0c\u6211\u4eec\u8981\u505a\u7684\u7b2c\u4e00\u4ef6\u4e8b\u5c31\u662f\u8c03\u6574API-server\u3001\u63a7\u5236\u5668\u7ba1\u7406\u5668\u4e2d\u7684\u4e00\u4e9b\u53c2\u6570\uff0c\u4ee5\u63d0\u9ad8\u541e\u5410\u91cf\u3002 \u5728",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/performance/performance_tutorial"},"\u6027\u80fd\u6559\u7a0b\u6587\u6863"),"\u4e2d\u67e5\u770b\u66f4\u591a\u4fe1\u606f\u3002"),(0,i.kt)("h3",{id:"\u8282\u70b9\u6392\u5e8f"},"\u8282\u70b9\u6392\u5e8f"),(0,i.kt)("p",null,"\u5f53\u96c6\u7fa4\u5927\u5c0f\u589e\u52a0\u65f6\uff0c\u6211\u4eec\u770b\u5230YuniKorn\u7684\u6027\u80fd\u660e\u663e\u4e0b\u964d\u3002 \u8fd9\u662f\u56e0\u4e3a\u5728YuniKorn\u4e2d\uff0c\u6211\u4eec\u5bf9\u96c6\u7fa4\u8282\u70b9\u8fdb\u884c\u4e86\u5b8c\u6574\u6392\u5e8f\uff0c\u4ee5\u4fbf\u4e3a\u7ed9\u5b9a\u7684pod\u627e\u5230 ",(0,i.kt)("strong",{parentName:"p"},"\u201cbest-fit\u201d")," \u8282\u70b9\u3002 \u8fd9\u79cd\u7b56\u7565\u4f7fPod\u5206\u5e03\u66f4\u52a0\u4f18\u5316\uff0c\u57fa\u4e8e\u6240\u4f7f\u7528\u7684 ",(0,i.kt)("a",{parentName:"p",href:"./../user_guide/sorting_policies#node-sorting"},"\u8282\u70b9\u6392\u5e8f\u7b56\u7565"),"\u3002 \u4f46\u662f\uff0c\u5bf9\u8282\u70b9\u8fdb\u884c\u6392\u5e8f\u5f88\u6602\u8d35\uff0c\u5728\u8c03\u5ea6\u5468\u671f\u4e2d\u8fd9\u6837\u505a\u4f1a\u4ea7\u751f\u5f88\u591a\u5f00\u9500\u3002 \u4e3a\u4e86\u514b\u670d\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-807"},"YUNIKORN-807")," \u4e2d\u6539\u8fdb\u4e86\u6211\u4eec\u7684\u8282\u70b9\u6392\u5e8f\u673a\u5236\uff0c\u5176\u80cc\u540e\u7684\u60f3\u6cd5\u662f\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/B-tree"},"B-Tree "),"\u6765\u5b58\u50a8\u6240\u6709\u8282\u70b9\u5e76\u5728\u5fc5\u8981\u65f6\u5e94\u7528\u589e\u91cf\u66f4\u65b0\u3002 \u8fd9\u663e\u7740\u6539\u5584\u4e86\u5ef6\u8fdf\uff0c\u6839\u636e\u6211\u4eec\u7684\u57fa\u51c6\u6d4b\u8bd5\uff0c\u8fd9\u5728500\u30011000\u30012000 \u548c 5000\u4e2a\u8282\u70b9\u7684\u96c6\u7fa4\u4e0a\u5206\u522b\u63d0\u9ad8\u4e86 35 \u500d\u300142 \u500d\u300151 \u500d\u300174 \u500d\u3002"),(0,i.kt)("h3",{id:"\u6bcf\u4e2a\u8282\u70b9\u7684\u524d\u63d0\u6761\u4ef6\u68c0\u67e5"},"\u6bcf\u4e2a\u8282\u70b9\u7684\u524d\u63d0\u6761\u4ef6\u68c0\u67e5"),(0,i.kt)("p",null,"\u5728\u6bcf\u4e2a\u8c03\u5ea6\u5468\u671f\u4e2d\uff0c\u53e6\u4e00\u4e2a\u8017\u65f6\u7684\u90e8\u5206\u662f\u8282\u70b9\u7684\u201c\u524d\u63d0\u6761\u4ef6\u68c0\u67e5\u201d\u3002 \u5728\u8fd9\u4e2a\u9636\u6bb5\uff0cYuniKorn\u8bc4\u4f30\u6240\u6709K8s\u6807\u51c6\u65ad\u8a00(Predicates)\uff0c\u4f8b\u5982\u8282\u70b9\u9009\u62e9\u5668\u3001pod\u4eb2\u548c\u6027/\u53cd\u4eb2\u548c\u6027\u7b49\uff0c\u4ee5\u786e\u5b9apod\u662f\u5426\u9002\u5408\u8282\u70b9\u3002 \u8fd9\u4e9b\u8bc4\u4f30\u6210\u672c\u5f88\u9ad8\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u505a\u4e86\u4e24\u4e2a\u5b9e\u9a8c\u6765\u6bd4\u8f83\u542f\u7528\u548c\u7981\u7528\u65ad\u8a00\u8bc4\u4f30\u7684\u60c5\u51b5\u3002 \u8bf7\u53c2\u9605\u4ee5\u4e0b\u7ed3\u679c\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Allocation latency",src:n(65233).Z,width:"1920",height:"1080"})),(0,i.kt)("p",{align:"center"},"\u56fe 3. Yunikorn \u4e2d\u7684\u65ad\u8a00\u6548\u679c\u6bd4\u8f83 "),(0,i.kt)("p",null,"\u5f53\u65ad\u8a00\u8bc4\u4f30\u88ab\u7981\u7528\u65f6\uff0c\u541e\u5410\u91cf\u4f1a\u63d0\u9ad8\u5f88\u591a\u3002 \u6211\u4eec\u8fdb\u4e00\u6b65\u7814\u7a76\u4e86\u6574\u4e2a\u8c03\u5ea6\u5468\u671f\u7684\u5ef6\u8fdf\u5206\u5e03\u548c\u65ad\u8a00\u8bc4\u4f30\u5ef6\u8fdf\u3002 \u5e76\u53d1\u73b0\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"YK predicate latency",src:n(99733).Z,width:"1854",height:"817"})),(0,i.kt)("p",{align:"center"},"\u56fe 4. \u65ad\u8a00\u5ef6\u8fdf "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"YK scheduling with predicate",src:n(14723).Z,width:"1855",height:"808"})),(0,i.kt)("p",{align:"center"},"\u56fe 5. \u542f\u7528\u65ad\u8a00\u7684\u8c03\u5ea6\u65f6\u95f4 "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"YK scheduling with no predicate",src:n(34352).Z,width:"1841",height:"797"})),(0,i.kt)("p",{align:"center"},"\u56fe 6. \u4e0d\u542f\u7528\u65ad\u8a00\u7684\u8c03\u5ea6\u65f6\u95f4 "),(0,i.kt)("p",null,"\u603b\u4f53\u800c\u8a00\uff0cYuniKorn \u8c03\u5ea6\u5468\u671f\u8fd0\u884c\u5f97\u975e\u5e38\u5feb\uff0c\u6bcf\u4e2a\u5468\u671f\u7684\u5ef6\u8fdf\u4e0b\u964d\u5728 ",(0,i.kt)("strong",{parentName:"p"},"0.001s - 0.01s")," \u8303\u56f4\u5185\u3002 \u5e76\u4e14\u5927\u90e8\u5206\u65f6\u95f4\u7528\u4e8e\u65ad\u8a00\u8bc4\u4f30\uff0c10\u500d\u4e8e\u8c03\u5ea6\u5468\u671f\u4e2d\u7684\u5176\u4ed6\u90e8\u5206\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u8c03\u5ea6\u5ef6\u8fdf\u5206\u5e03\uff08\u79d2\uff09"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u65ad\u8a00-\u8bc4\u4f30\u5ef6\u8fdf\u5206\u5e03\uff08\u79d2\uff09"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u65ad\u8a00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.01 - 0.1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.01-0.1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u4e0d\u542f\u7528\u65ad\u8a00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.001 - 0.01"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u65e0")))),(0,i.kt)("h2",{id:"\u4e3a\u4ec0\u4e48-yunikorn-\u66f4\u5feb"},"\u4e3a\u4ec0\u4e48 YuniKorn \u66f4\u5feb?"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u8c03\u5ea6\u5668\u88ab\u521b\u5efa\u4e3a\u9762\u5411\u670d\u52a1\u7684\u8c03\u5ea6\u5668\uff1b \u4e0eYuniKorn\u76f8\u6bd4\uff0c\u5b83\u5728\u541e\u5410\u91cf\u65b9\u9762\u7684\u654f\u611f\u6027\u8f83\u4f4e\u3002 YuniKorn\u793e\u533a\u975e\u5e38\u52aa\u529b\u5730\u4fdd\u6301\u51fa\u8272\u7684\u6027\u80fd\u5e76\u4e0d\u65ad\u6539\u8fdb\u3002 YuniKorn\u53ef\u4ee5\u6bd4\u9ed8\u8ba4\u8c03\u5ea6\u5668\u8fd0\u884c\u5f97\u66f4\u5feb\u7684\u539f\u56e0\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u77ed\u8c03\u5ea6\u5468\u671f")),(0,i.kt)("p",null,"YuniKorn \u4fdd\u6301\u8c03\u5ea6\u5468\u671f\u77ed\u800c\u9ad8\u6548\u3002 YuniKorn \u4f7f\u7528\u6240\u6709\u5f02\u6b65\u901a\u4fe1\u534f\u8bae\u6765\u786e\u4fdd\u6240\u6709\u5173\u952e\u8def\u5f84\u90fd\u662f\u975e\u963b\u585e\u8c03\u7528\u3002 \u5927\u591a\u6570\u5730\u65b9\u53ea\u662f\u5728\u8fdb\u884c\u5185\u5b58\u8ba1\u7b97\uff0c\u8fd9\u53ef\u80fd\u975e\u5e38\u9ad8\u6548\u3002 \u9ed8\u8ba4\u8c03\u5ea6\u5668\u5229\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/"},"\u8c03\u5ea6\u6846\u67b6"),"\uff0c\u5b83\u4e3a\u6269\u5c55\u8c03\u5ea6\u5668\u63d0\u4f9b\u4e86\u5f88\u5927\u7684\u7075\u6d3b\u6027\uff0c\u4f46\u662f\uff0c\u6743\u8861\u662f\u6027\u80fd\u3002 \u8c03\u5ea6\u5468\u671f\u53d8\u6210\u4e86\u4e00\u6761\u5f88\u957f\u7684\u94fe\uff0c\u56e0\u4e3a\u5b83\u9700\u8981\u8bbf\u95ee\u6240\u6709\u8fd9\u4e9b\u63d2\u4ef6\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u4e8b\u4ef6\u5904\u7406")),(0,i.kt)("p",null,"YuniKorn\u5229\u7528\u5f02\u6b65\u4e8b\u4ef6\u5904\u7406\u6846\u67b6\u6765\u5904\u7406\u5185\u90e8\u72b6\u6001\u3002 \u8fd9\u4f7f\u5f97\u6838\u5fc3\u8c03\u5ea6\u5468\u671f\u53ef\u4ee5\u5feb\u901f\u8fd0\u884c\u800c\u4e0d\u4f1a\u88ab\u4efb\u4f55\u6602\u8d35\u7684\u8c03\u7528\u963b\u585e\u3002 \u4f8b\u5982\uff0c\u9ed8\u8ba4\u8c03\u5ea6\u7a0b\u5e8f\u9700\u8981\u5c06\u72b6\u6001\u66f4\u65b0\u3001\u4e8b\u4ef6\u5199\u5165pod\u5bf9\u8c61\uff0c\u8fd9\u662f\u5728\u8c03\u5ea6\u5468\u671f\u5185\u5b8c\u6210\u7684\u3002 \u8fd9\u6d89\u53ca\u5c06\u6570\u636e\u6301\u4e45\u5316\u5230etcd\uff0c\u8fd9\u53ef\u80fd\u5f88\u6162\u3002 YuniKorn\u5c06\u6240\u6709\u6b64\u7c7b\u4e8b\u4ef6\u7f13\u5b58\u5728\u4e00\u4e2a\u961f\u5217\u4e2d\uff0c\u5e76\u4ee5\u5f02\u6b65\u65b9\u5f0f\u5199\u56depod\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u66f4\u5feb\u7684\u8282\u70b9\u6392\u5e8f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-807"},"YUNIKORN-807"),"\u4e4b\u540e\uff0cYuniKorn\u8fdb\u884c\u4e86\u9ad8\u6548\u7684\u589e\u91cf\u8282\u70b9\u6392\u5e8f\u3002 \u8fd9\u662f\u5efa\u7acb\u5728\u6240\u8c13\u7684\u57fa\u4e8e\u201c\u8d44\u6e90\u6743\u91cd\u201d\u7684\u8282\u70b9\u8bc4\u5206\u673a\u5236\u4e4b\u4e0a\u7684\uff0c\u5b83\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u8fdb\u884c\u6269\u5c55\u3002 \u6240\u6709\u8fd9\u4e9b\u4e00\u8d77\u51cf\u5c11\u4e86\u8ba1\u7b97\u8282\u70b9\u5206\u6570\u65f6\u7684\u5f00\u9500\u3002 \u76f8\u6bd4\u4e4b\u4e0b\uff0c\u9ed8\u8ba4\u8c03\u5ea6\u5668\u63d0\u4f9b\u4e86\u4e00\u4e9b\u8ba1\u7b97\u8282\u70b9\u5206\u6570\u7684\u6269\u5c55\u70b9\uff0c\u4f8b\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"PreScore"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Score"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"NormalizeScore"),"\u3002 \u8fd9\u4e9b\u8ba1\u7b97\u91cf\u5f88\u5927\uff0c\u5e76\u4e14\u5728\u6bcf\u4e2a\u8c03\u5ea6\u5468\u671f\u4e2d\u90fd\u4f1a\u8c03\u7528\u5b83\u4eec\u3002 \u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/481459d12dc82ab88e413886e2130c2a5e4a8ec4/pkg/scheduler/framework/runtime/framework.go#L857"},"\u4ee3\u7801\u884c"),"\u4e2d\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,i.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,i.kt)("p",null,"\u5728\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0YuniKorn\u7684\u6027\u80fd\u975e\u5e38\u597d\uff0c\u5c24\u5176\u662f\u4e0e\u9ed8\u8ba4\u8c03\u5ea6\u7a0b\u5e8f\u76f8\u6bd4\u3002 \u6211\u4eec\u5df2\u7ecf\u786e\u5b9a\u4e86YuniKorn\u4e2d\u53ef\u4ee5\u7ee7\u7eed\u63d0\u9ad8\u6027\u80fd\u7684\u4e3b\u8981\u56e0\u7d20\uff0c\u5e76\u89e3\u91ca\u4e86\u4e3a\u4ec0\u4e48YuniKorn\u7684\u6027\u80fd\u4f18\u4e8e\u9ed8\u8ba4\u8c03\u5ea6\u7a0b\u5e8f\u3002 \u6211\u4eec\u8fd8\u610f\u8bc6\u5230\u5c06Kubernetes\u6269\u5c55\u5230\u6570\u5343\u4e2a\u8282\u70b9\u65f6\u7684\u5c40\u9650\u6027\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u5176\u4ed6\u6280\u672f\uff08\u4f8b\u5982\u8054\u5408\uff09\u6765\u7f13\u89e3\u8fd9\u4e9b\u5c40\u9650\u6027\u3002 \u56e0\u6b64\uff0cYuniKorn\u662f\u4e00\u4e2a\u9ad8\u6548\u3001\u9ad8\u541e\u5410\u91cf\u7684\u8c03\u5ea6\u7a0b\u5e8f\uff0c\u975e\u5e38\u9002\u5408\u5728Kubernetes\u4e0a\u8fd0\u884c\u6279\u5904\u7406/\u6df7\u5408\u5de5\u4f5c\u8d1f\u8f7d\u3002"))}m.isMDXComponent=!0},36658:function(e,t,n){t.Z=n.p+"assets/images/allocation_4k-55774ca09e13367c41799e4172d34a87.png"},65233:function(e,t,n){t.Z=n.p+"assets/images/predicateComaparation-301262c33323e9faad72a1143ccc1617.png"},99733:function(e,t,n){t.Z=n.p+"assets/images/predicate_4k-3ad50742ac5f0356e7707e6a01cbba0f.png"},34352:function(e,t,n){t.Z=n.p+"assets/images/scheduling_no_predicate_4k-bfbb358a7c3c555ecdfbd218eefa1257.png"},14723:function(e,t,n){t.Z=n.p+"assets/images/scheduling_with_predicate_4k_-951a3d6c4f1614330bb567cb5a797d24.png"},36668:function(e,t,n){t.Z=n.p+"assets/images/yunirkonVSdefault-933832efd32ef583c6415a07c0d9b50b.png"}}]);