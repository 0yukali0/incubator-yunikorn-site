"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7552],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,m=c["".concat(i,".").concat(k)]||c[k]||s[k]||l;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},76469:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],p={id:"troubleshooting",title:"\u6545\u969c\u6392\u9664"},i=void 0,u={unversionedId:"user_guide/troubleshooting",id:"version-1.2.0/user_guide/troubleshooting",title:"\u6545\u969c\u6392\u9664",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.2.0/user_guide/troubleshooting.md",sourceDirName:"user_guide",slug:"/user_guide/troubleshooting",permalink:"/zh-cn/docs/user_guide/troubleshooting",draft:!1,tags:[],version:"1.2.0",frontMatter:{id:"troubleshooting",title:"\u6545\u969c\u6392\u9664"},sidebar:"docs",previous:{title:"System",permalink:"/zh-cn/docs/api/system"},next:{title:"Dev Environment Setup",permalink:"/zh-cn/docs/developer_guide/env_setup"}},d={},c=[{value:"\u8c03\u5ea6\u65e5\u5fd7(Scheduler logs)",id:"\u8c03\u5ea6\u65e5\u5fd7scheduler-logs",level:2},{value:"\u68c0\u7d22\u8c03\u5ea6\u65e5\u5fd7",id:"\u68c0\u7d22\u8c03\u5ea6\u65e5\u5fd7",level:3},{value:"\u8bbe\u5b9a\u65e5\u5fd7\u7ea7\u522b",id:"\u8bbe\u5b9a\u65e5\u5fd7\u7ea7\u522b",level:3},{value:"Pods\u5361\u5728<code>Pending</code>\u72b6\u6001",id:"pods\u5361\u5728pending\u72b6\u6001",level:2},{value:"1.\u6ca1\u6709\u8282\u70b9\u6ee1\u8db3pod\u7684\u653e\u7f6e\u8981\u6c42",id:"1\u6ca1\u6709\u8282\u70b9\u6ee1\u8db3pod\u7684\u653e\u7f6e\u8981\u6c42",level:3},{value:"2.\u961f\u5217\u7684\u53ef\u7528\u8d44\u6e90\u4e0d\u8db3",id:"2\u961f\u5217\u7684\u53ef\u7528\u8d44\u6e90\u4e0d\u8db3",level:3},{value:"\u83b7\u53d6\u5b8c\u6574\u7684\u72b6\u6001",id:"\u83b7\u53d6\u5b8c\u6574\u7684\u72b6\u6001",level:2},{value:"1.\u8c03\u5ea6\u5668URL",id:"1\u8c03\u5ea6\u5668url",level:3},{value:"2.\u8c03\u5ea6\u5668\u7684REST API",id:"2\u8c03\u5ea6\u5668\u7684rest-api",level:3},{value:"\u91cd\u542f\u8c03\u5ea6\u5668",id:"\u91cd\u542f\u8c03\u5ea6\u5668",level:2},{value:"\u6210\u7ec4\u8c03\u5ea6",id:"\u6210\u7ec4\u8c03\u5ea6",level:2},{value:"1.\u6ca1\u6709\u5360\u4f4d\u7b26\u88ab\u521b\u5efa\uff0c\u4e14app\u5904\u4e8epending\u72b6\u6001",id:"1\u6ca1\u6709\u5360\u4f4d\u7b26\u88ab\u521b\u5efa\u4e14app\u5904\u4e8epending\u72b6\u6001",level:3},{value:"2.\u6709\u4e9b\u5360\u4f4d\u7b26\u6ca1\u6709\u88ab\u5206\u914d",id:"2\u6709\u4e9b\u5360\u4f4d\u7b26\u6ca1\u6709\u88ab\u5206\u914d",level:3},{value:"3.\u6709\u4e9b\u5360\u4f4d\u7b26\u6ca1\u6709\u88ab\u4ea4\u6362",id:"3\u6709\u4e9b\u5360\u4f4d\u7b26\u6ca1\u6709\u88ab\u4ea4\u6362",level:3},{value:"4.\u5e94\u7528\u7a0b\u5e8f\u7ec8\u6b62\u65f6\u4e0d\u4f1a\u6e05\u9664\u5360\u4f4d\u7b26",id:"4\u5e94\u7528\u7a0b\u5e8f\u7ec8\u6b62\u65f6\u4e0d\u4f1a\u6e05\u9664\u5360\u4f4d\u7b26",level:3},{value:"\u4ecd\u7136\u9047\u5230\u95ee\u9898\uff1f",id:"\u4ecd\u7136\u9047\u5230\u95ee\u9898",level:2}],s={toc:c},k="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)(k,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8c03\u5ea6\u65e5\u5fd7scheduler-logs"},"\u8c03\u5ea6\u65e5\u5fd7(Scheduler logs)"),(0,l.kt)("h3",{id:"\u68c0\u7d22\u8c03\u5ea6\u65e5\u5fd7"},"\u68c0\u7d22\u8c03\u5ea6\u65e5\u5fd7"),(0,l.kt)("p",null,"\u8c03\u5ea6\u5668\u4f1a\u5c06\u65e5\u5fd7\u5199\u5165stdout/stderr\uff0cdocker\u5bb9\u5668\u5c31\u4f1a\u5c06\u8fd9\u4e9b\u65e5\u5fd7\u91cd\u65b0\u5bfc\u5411\u5230\u8282\u70b9\u7684\u672c\u5730\u4f4d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u4ece",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/logging/configure/"},"\u8fd9\u91cc"),"\u8bfb\u5230\u66f4\u591a\u7684\u6587\u6863\uff0c\u8fd9\u4e9b\u65e5\u5fd7\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#logs"},"kuberctl logs"),"\u68c0\u7d22\u3002\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"//\u83b7\u53d6\u8c03\u5ea6\u7684pod\nkubectl get pod -l component=yunikorn-scheduler -n yunikorn\nNAME READY STATUS RESTARTS AGE\nyunikorn-scheduler-766d7d6cdd-44b82 2/2 Running 0 33h\n\n//\u68c0\u7d22\u65e5\u5fd7\nkubectl logs yunikorn-scheduler-766d7d6cdd-44b82 yunikorn-scheduler-k8s -n yunikorn\n")),(0,l.kt)("p",null,"\u5728\u5927\u591a\u6570\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u547d\u4ee4\u6ca1\u6709\u529e\u6cd5\u83b7\u53d6\u6240\u6709\u7684\u65e5\u5fd7\uff0c\u56e0\u4e3a\u8c03\u5ea6\u7a0b\u5e8f\u7684\u65e5\u5fd7\u6570\u91cf\u5e9e\u5927\uff0c\u60a8\u9700\u8981\u8bbe\u7f6e",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/#cluster-level-logging-architectures"},"\u96c6\u7fa4\u7ea7\u522b\u7684\u65e5\u5fd7\u6536\u96c6"),"\u3002\u63a8\u8350\u7684\u8bbe\u7f6e\u65b9\u5f0f\u662f\u5229\u7528",(0,l.kt)("a",{parentName:"p",href:"https://www.fluentd.org/"},"fluentd"),"\u5728\u5916\u90e8\u50a8\u5b58(\u4f8b\u5982s3)\u4e0a\u6301\u4e45\u7684\u6536\u96c6\u65e5\u5fd7\u3002"),(0,l.kt)("h3",{id:"\u8bbe\u5b9a\u65e5\u5fd7\u7ea7\u522b"},"\u8bbe\u5b9a\u65e5\u5fd7\u7ea7\u522b"),(0,l.kt)("h3",{id:""}),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u5efa\u8bae\u901a\u8fc7REST API\u6765\u8c03\u6574\u65e5\u5fd7\u7ea7\u522b\uff0c\u5982\u6b64\u4ee5\u6765\u6211\u4eec\u4e0d\u9700\u8981\u6bcf\u6b21\u4fee\u6539\u7ea7\u522b\u65f6\u91cd\u65b0\u542f\u52a8\u8c03\u52a8\u7a0b\u5e8f\u7684pod\u3002\u4f46\u662f\u900f\u8fc7\u7f16\u8f91\u90e8\u7f72\u914d\u7f6e\u6765\u8bbe\u5b9a\u65e5\u5fd7\u7ea7\u522b\u65f6\uff0c\u9700\u8981\u91cd\u65b0\u542f\u7528\u8c03\u5ea6\u7a0b\u5e8f\u7684pod\uff0c\u56e0\u6b64\u5f3a\u70c8\u4e0d\u5efa\u8bae\u8fd9\u4e48\u505a\u3002")),(0,l.kt)("p",null,"\u505c\u6b62\u8c03\u5ea6\u5668\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=0\n")),(0,l.kt)("p",null,"\u4f7f\u7528vim\u7f16\u8f91\u90e8\u7f72\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl edit deployment yunikorn-scheduler -n yunikorn\n")),(0,l.kt)("p",null,"\u5728\u5bb9\u5668\u6a21\u677f\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"env"),"\u5b57\u6bb5\u4e2d\u52a0\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL"),"\u3002\u4f8b\u5982\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL"),"\u8bbe\u7f6e\u4e3a0\u4f1a\u5c06\u65e5\u5fd7\u7eaa\u5f55\u7684\u7ea7\u522b\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"INFO"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n\u2026\nspec:\ntemplate:\n\u2026\nspec:\ncontainers:\n- env:\n- name: LOG_LEVEL\nvalue: '0'\n")),(0,l.kt)("p",null,"\u542f\u7528\u8c03\u5ea6\u5668\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=1\n")),(0,l.kt)("p",null,"\u53ef\u4f7f\u7528\u7684\u65e5\u5fd7\u7ea7\u522b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u65e5\u5fd7\u7ea7\u522b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"-1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DEBUG")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"INFO")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"WARN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"ERROR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"3"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DPanic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"4"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Panic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"5"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Fatal")))),(0,l.kt)("h2",{id:"pods\u5361\u5728pending\u72b6\u6001"},"Pods\u5361\u5728",(0,l.kt)("inlineCode",{parentName:"h2"},"Pending"),"\u72b6\u6001"),(0,l.kt)("p",null,"\u5982\u679cPod\u5361\u5728Pending\u72b6\u6001\uff0c\u5219\u610f\u5473\u7740\u8c03\u5ea6\u7a0b\u5e8f\u627e\u4e0d\u5230\u5206\u914dPod\u7684\u8282\u70b9\u3002\u9020\u6210\u8fd9\u79cd\u60c5\u51b5\u6709\u4ee5\u4e0b\u51e0\u79cd\u53ef\u80fd\uff1a"),(0,l.kt)("h3",{id:"1\u6ca1\u6709\u8282\u70b9\u6ee1\u8db3pod\u7684\u653e\u7f6e\u8981\u6c42"},"1.\u6ca1\u6709\u8282\u70b9\u6ee1\u8db3pod\u7684\u653e\u7f6e\u8981\u6c42"),(0,l.kt)("p",null,"\u53ef\u4ee5\u5728Pod\u4e2d\u914d\u7f6e\u4e00\u4e9b\u653e\u7f6e\u9650\u5236\uff0c\u4f8b\u5982",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector"},"\u8282\u70b9\u9009\u62e9\u5668(node-selector)"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity"},"\u4eb2\u5408/\u53cd\u4eb2\u5408\u6027(affinity/anti-affinity)"),"\u3001\u5bf9\u8282\u70b9\u7684",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"},"\u6c61\u70b9(taints)"),"\u6ca1\u6709\u4e00\u5b9a\u7684\u5bb9\u5fcd\u5ea6\u7b49\u3002\u82e5\u8981\u4fee\u6b63\u6b64\u7c7b\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u89c2\u5bdfpod\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl describe pod <pod\u540d\u79f0> -n <\u547d\u540d\u7a7a\u95f4>\n")),(0,l.kt)("p",null,"pod\u4e8b\u4ef6\u4e2d\u5305\u542b\u9884\u6d4b\u5931\u8d25\uff0c\u800c\u8fd9\u89e3\u91ca\u4e86\u4e3a\u4ec0\u4e48\u8282\u70b9\u4e0d\u7b26\u5408\u5206\u914d\u6761\u4ef6"),(0,l.kt)("h3",{id:"2\u961f\u5217\u7684\u53ef\u7528\u8d44\u6e90\u4e0d\u8db3"},"2.\u961f\u5217\u7684\u53ef\u7528\u8d44\u6e90\u4e0d\u8db3"),(0,l.kt)("p",null,"\u5982\u679c\u961f\u5217\u7684\u53ef\u7528\u8d44\u6e90\u4e0d\u8db3\uff0cPod\u5c06\u7b49\u5f85\u961f\u5217\u8d44\u6e90\u3002\u68c0\u67e5\u961f\u5217\u662f\u5426\u8fd8\u6709\u7a7a\u95f4\u53ef\u4ee5\u7ed9Pending pod\u7684\u65b9\u6cd5\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,l.kt)("p",null,"1 ) \u4eceYunikorn UI\u68c0\u67e5\u961f\u5217\u4f7f\u7528\u60c5\u51b5"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u5982\u4f55\u8bbf\u95eeUI\uff0c\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/#%E8%AE%BF%E9%97%AE-web-ui"},"\u8fd9\u91cc"),"\u7684\u6587\u6863\u3002\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Queues"),"\u9875\u9762\u4e2d\uff0c\u5bfb\u627ePod\u5bf9\u5e94\u5230\u7684\u961f\u5217\u3002\u4f60\u5c06\u80fd\u591f\u770b\u5230\u961f\u5217\u4e2d\u5269\u9980\u7684\u53ef\u7528\u8d44\u6e90\u3002"),(0,l.kt)("p",null,"2 ) \u68c0\u67e5pod\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl describe pod"),"\u4ee5\u83b7\u53d6pod\u4e8b\u4ef6\u3002\u5982\u679c\u4f60\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u4e8b\u4ef6\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Application <appID> does not fit into <\u961f\u5217\u8def\u5f84> queue"),"\u3002\u5219\u4ee3\u8868pod\u65e0\u6cd5\u5206\u914d\uff0c\u56e0\u4e3a\u961f\u5217\u7684\u8d44\u6e90\u7528\u5b8c\u4e86\u3002"),(0,l.kt)("p",null,"\u5f53\u961f\u5217\u4e2d\u7684\u5176\u4ed6Pod\u5b8c\u6210\u5de5\u4f5c\u6216\u88ab\u5220\u9664\u65f6\uff0c\u4ee3\u8868\u76ee\u524dPending\u7684pod\u80fd\u5f97\u5230\u5206\u914d\uff0c\u5982\u679cPod\u4f9d\u65e7\u5728\u6709\u8db3\u591f\u7684\u5269\u9980\u8d44\u6e90\u4e0b\uff0c\u4fdd\u6301pending\u72b6\u6001\uff0c\u5219\u53ef\u80fd\u662f\u56e0\u4e3a\u4ed6\u6b63\u5728\u7b49\u5f85\u96c6\u7fa4\u6269\u5c55\u3002"),(0,l.kt)("h2",{id:"\u83b7\u53d6\u5b8c\u6574\u7684\u72b6\u6001"},"\u83b7\u53d6\u5b8c\u6574\u7684\u72b6\u6001"),(0,l.kt)("p",null,"Yunikorn\u72b6\u6001\u50a8\u5b58\u4e2d\uff0c\u5305\u542b\u4e86\u5bf9\u6bcf\u4e2a\u8fdb\u7a0b\u4e2d\u6bcf\u4e2a\u5bf9\u8c61\u7684\u72b6\u6001\u3002\u900f\u8fc7\u7aef\u70b9\u6765\u68c0\u7d22\uff0c\u6211\u4eec\u53ef\u4ee5\u6709\u5f88\u591a\u6709\u7528\u7684\u4fe1\u606f\uff0c\u4e3e\u4e00\u4e2a\u6545\u969c\u6392\u9664\u7684\u4f8b\u5b50\uff1a\u5206\u533a\u5217\u8868\u3001\u5e94\u7528\u7a0b\u5e8f\u5217\u8868(\u5305\u62ec\u6b63\u5728\u8fd0\u884c\u7684\u3001\u5df2\u5b8c\u6210\u7684\u4ee5\u53ca\u5386\u53f2\u5e94\u7528\u7a0b\u5e8f\u7684\u8be6\u7ec6\u4fe1\u606f)\u3001\u8282\u70b9\u6570\u91cf\u3001\u8282\u70b9\u5229\u7528\u7387\u3001\u901a\u7528\u96c6\u7fa4\u4fe1\u606f\u3001\u96c6\u7fa4\u5229\u7528\u7387\u7684\u8be6\u7ec6\u4fe1\u606f\u3001\u5bb9\u5668\u5386\u53f2\u7eaa\u5f55\u548c\u961f\u5217\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u72b6\u6001\u662fYunikorn\u63d0\u4f9b\u7684\u7528\u4e8e\u6545\u969c\u6392\u9664\u7684\u5b9d\u8d35\u8d44\u6e90\u3002"),(0,l.kt)("p",null,"\u6709\u51e0\u79cd\u65b9\u6cd5\u53ef\u4ee5\u83b7\u5f97\u5b8c\u6574\u7684\u72b6\u6001\uff1a"),(0,l.kt)("h3",{id:"1\u8c03\u5ea6\u5668url"},"1.\u8c03\u5ea6\u5668URL"),(0,l.kt)("p",null,"\u6b65\u9aa4\uff1a\n",(0,l.kt)("em",{parentName:"p"},"\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00Yunikorn UI\uff0c\u4e14\u5728URL\u4e2d\u7f16\u8f91\uff1a\n"),"\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"/#/dashboard"),"\u53d6\u4ee3\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"/ws/v1/fullstatedump"),"\uff0c(\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:9889/ws/v1/fullstatedump"),")\n*\u6309\u4e0b\u56de\u8f66\u952e\u3002"),(0,l.kt)("p",null,"\u900f\u8fc7\u8fd9\u4e2a\u7b80\u5355\u7684\u65b9\u6cd5\u6765\u89c2\u770b\u5373\u65f6\u4e14\u5b8c\u6574\u7684\u72b6\u6001\u3002"),(0,l.kt)("h3",{id:"2\u8c03\u5ea6\u5668\u7684rest-api"},"2.\u8c03\u5ea6\u5668\u7684REST API"),(0,l.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u7684\u8c03\u5ea6\u5668REST API\uff0c\u80fd\u591f\u8ba9\u6211\u4eec\u770b\u5230Yunikorn\u7684\u5b8c\u6574\u72b6\u6001\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"curl -X 'GET'http://localhost:9889/ws/v1/fullstatedump-H 'accept: application/json'")),(0,l.kt)("p",null,"\u6709\u5173\u50a8\u5b58\u72b6\u6001\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/scheduler#retrieve-full-state-dump"},"\u68c0\u7d22\u5b8c\u6574\u72b6\u6001"),"\u7684\u6587\u6863\u3002"),(0,l.kt)("h2",{id:"\u91cd\u542f\u8c03\u5ea6\u5668"},"\u91cd\u542f\u8c03\u5ea6\u5668"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u6700\u597d\u7684\u6545\u969c\u6392\u9664\u65b9\u6cd5\u662f\u2500\u628a\u300c\u91cd\u542f\u8c03\u5ea6\u5668\u300d\u5f53\u4f5c\u5b8c\u5168\u6ca1\u6709\u5176\u4ed6\u65b9\u6cd5\u4e4b\u4e0b\u7684\u6700\u540e\u4e00\u6b65\uff0c\u4ed6\u4e0d\u5e94\u8be5\u5728\u641c\u96c6\u6240\u6709\u65e5\u5fd7\u548c\u72b6\u6001\u4e4b\u524d\u4f7f\u7528\u3002")),(0,l.kt)("p",null,"Yunikorn\u53ef\u4ee5\u5728\u91cd\u542f\u4e4b\u540e\u6062\u590d\u5176\u72b6\u6001\u3002Yunikorn\u8c03\u5ea6\u5668\u7684pod\u4f5c\u4e3adeployment\u90e8\u7f72\u3002\u6211\u4eec\u53ef\u4ee5\u900f\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"scale"),"\u6765\u589e\u52a0\u548c\u51cf\u5c11\u526f\u672c\u6570\u91cf\u6765\u91cd\u542fYunikorn\u8c03\u5ea6\u5668\uff0c\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=0\nkubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=1\n")),(0,l.kt)("h2",{id:"\u6210\u7ec4\u8c03\u5ea6"},"\u6210\u7ec4\u8c03\u5ea6"),(0,l.kt)("h3",{id:"1\u6ca1\u6709\u5360\u4f4d\u7b26\u88ab\u521b\u5efa\u4e14app\u5904\u4e8epending\u72b6\u6001"},"1.\u6ca1\u6709\u5360\u4f4d\u7b26\u88ab\u521b\u5efa\uff0c\u4e14app\u5904\u4e8epending\u72b6\u6001"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u539f\u56e0"),"\uff1a\u8fd9\u901a\u5e38\u662f\u56e0\u4e3a\u5e94\u7528\u7a0b\u5e8f\u88ab\u8c03\u5ea6\u6c14\u62d2\u7edd\uff0c\u56e0\u6b64\u6ca1\u6709\u4e00\u4e2apod\u88ab\u8c03\u5ea6\u3002"),(0,l.kt)("p",null,"\u5bfc\u81f4\u62d2\u7edd\u7684\u5e38\u89c1\u539f\u56e0\u6709\uff1a"),(0,l.kt)("p",null,"1)\u4efb\u52a1\u7fa4\u7ec4(taskGroups)\u5b9a\u4e49\u65e0\u6548\u3002\u8c03\u5ea6\u7a0b\u5e8f\u5728\u5e94\u7528\u7a0b\u5e8f\u88ab\u63d0\u4ea4\u65f6\u4f1a\u8fdb\u884c\u5065\u5168\u6027\u68c0\u67e5\uff0c\u4ee5\u786e\u4fdd\u6b63\u786e\u5b9a\u4e49\u6240\u6709\u4efb\u52a1\u7fa4\u7ec4\uff0c\u5982\u679c\u8fd9\u4e9b\u4fe1\u606f\u7684\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8c03\u5ea6\u7a0b\u5e8f\u5c06\u62d2\u7edd\u8be5\u5e94\u7528\u7a0b\u5e8f"),(0,l.kt)("p",null,"2)\u4efb\u52a1\u7fa4\u7ec4\u4e2d\u5b9a\u4e49\u7684\u603b\u6700\u5c0f\u8d44\u6e90\u91cf\u5927\u4e8e\u961f\u5217\u7684\u6700\u5927\u8d44\u6e90\u91cf\uff0c\u56e0\u6b64\u8c03\u5ea6\u7a0b\u5e8f\u62d2\u7edd\u8be5\u5e94\u7528\u7a0b\u5e8f\uff0c\u56e0\u4e3a\u961f\u5217\u7684\u8d44\u6e90\u91cf\u65e0\u6cd5\u6ee1\u8db3\u5b83\u3002\u53ef\u4ee5\u901a\u8fc7\u68c0\u67e5pod\u4e8b\u4ef6\u4e2d\u7684\u76f8\u5173\u6d88\u606f\uff0c\u6216\u8c03\u5ea6\u5668\u65e5\u5fd7\u6765\u627e\u5230\u66f4\u591a\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848"),"\uff1a\u66f4\u6b63\u4efb\u52a1\u7fa4\u7ec4\u7684\u5b9a\u4e49\u5e76\u91cd\u65b0\u63d0\u4ea4\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,l.kt)("h3",{id:"2\u6709\u4e9b\u5360\u4f4d\u7b26\u6ca1\u6709\u88ab\u5206\u914d"},"2.\u6709\u4e9b\u5360\u4f4d\u7b26\u6ca1\u6709\u88ab\u5206\u914d"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u539f\u56e0"),"\uff1a\u5360\u4f4d\u7b26\u4e5f\u4f1a\u6d88\u8017\u8d44\u6e90\uff0c\u5982\u679c\u4e0d\u80fd\u5168\u90e8\u5206\u914d\uff0c\u901a\u5e38\u662f\u961f\u5217\u6216\u8005\u96c6\u7fa4\u6ca1\u6709\u8db3\u591f\u7684\u8d44\u6e90\u5206\u914d\u7ed9\u5b83\u4eec\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5360\u4f4d\u7b26\u5c06\u5728\u4e00\u5b9a\u65f6\u95f4\u540e\u88ab\u6e05\u7406\uff0c\u8be5\u65f6\u95f4\u7531\u8c03\u5ea6\u7b56\u7565\u53c2\u6570\u2500",(0,l.kt)("inlineCode",{parentName:"p"},"placeholderTimeoutInSeconds"),"\u6240\u5b9a\u4e49\u3002"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848"),"\uff1a\u5982\u679c\u5360\u4f4d\u7b26\u8d85\u65f6\u4e86\uff0c\u76ee\u524d\u7684app\u5c06\u4f1a\u8f6c\u4e3afailed\u72b6\u6001\uff0c\u65e0\u6cd5\u518d\u88ab\u8c03\u5ea6\u3002\u5982\u679c\u60a8\u613f\u610f\u7b49\u5f85\u66f4\u957f\u7684\u65f6\u95f4\uff0c\u53ef\u4ee5\u589e\u52a0\u5360\u4f4d\u7b26\u8d85\u65f6\u7684\u503c\u3002\u5c06\u6765\u53ef\u80fd\u4f1a\u6dfb\u52a0\u5012\u9000\u7b56\u7565\u4ee5\u63d0\u4f9b\u91cd\u8bd5\uff0c\u800c\u4e0d\u662f\u4f7f\u5e94\u7528\u7a0b\u5e8f\u5931\u8d25\u3002"),(0,l.kt)("h3",{id:"3\u6709\u4e9b\u5360\u4f4d\u7b26\u6ca1\u6709\u88ab\u4ea4\u6362"},"3.\u6709\u4e9b\u5360\u4f4d\u7b26\u6ca1\u6709\u88ab\u4ea4\u6362"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u539f\u56e0"),"\uff1a\u8fd9\u901a\u5e38\u4ee3\u8868\u5e94\u7528\u7a0b\u5e8f\u7684pod\u5c11\u4e8e\u4efb\u52a1\u7fa4\u7ec4\u4e2d\u5b9a\u4e49\u7684\u6700\u5c0f\u6210\u5458\u6570(",(0,l.kt)("inlineCode",{parentName:"p"},"minMembers"),")"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848"),"\uff1a\u68c0\u67e5\u4efb\u52a1\u7fa4\u7ec4\u5b57\u6bb5\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"minMember"),"\u5e76\u786e\u4fdd\u5176\u8bbe\u7f6e\u6b63\u786e\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"minMember"),"\u53ef\u4ee5\u5c0f\u4e8e\u5b9e\u9645\u7684pod\u6570\uff0c\u8bbe\u7f6e\u5927\u4e8e\u5b9e\u9645pod\u6570\u662f\u65e0\u6548\u7684\u3002"),(0,l.kt)("h3",{id:"4\u5e94\u7528\u7a0b\u5e8f\u7ec8\u6b62\u65f6\u4e0d\u4f1a\u6e05\u9664\u5360\u4f4d\u7b26"},"4.\u5e94\u7528\u7a0b\u5e8f\u7ec8\u6b62\u65f6\u4e0d\u4f1a\u6e05\u9664\u5360\u4f4d\u7b26"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u539f\u56e0"),"\uff1a\u6240\u6709\u5360\u4f4d\u7b26\u90fd\u4f1a\u8bbe\u7f6e",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/#owners-and-dependents"},"ownerReference"),"\u5230\u5e94\u7528\u7a0b\u5e8f\u7684\u7b2c\u4e00\u4e2a\u771f\u5b9e\u7684pod\uff0c\u6216\u63a7\u5236\u5668\u53c2\u8003\u3002\u5982\u679c\u65e0\u6cd5\u6e05\u7406\u5360\u4f4d\u7b26\uff0c\u5219\u610f\u5473\u7740\u5783\u573e\u56de\u6536(garbage collector)\u7684\u673a\u5236\u4e0d\u6b63\u5e38\u3002"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848"),"\uff1a\u68c0\u67e5\u5360\u4f4d\u7b26\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ownerReference"),"\u548cKubernetes\u4e2d\u7684\u5783\u573e\u6536\u96c6\u5668\u3002"),(0,l.kt)("h2",{id:"\u4ecd\u7136\u9047\u5230\u95ee\u9898"},"\u4ecd\u7136\u9047\u5230\u95ee\u9898\uff1f"),(0,l.kt)("p",null,"\u6ca1\u95ee\u9898\uff01Apache Yunikorn\u793e\u533a\u5c06\u5f88\u4e50\u610f\u63d0\u4f9b\u5e2e\u52a9\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u9009\u9879\u8054\u7cfb\u793e\u533a\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06\u60a8\u7684\u95ee\u9898\u53d1\u5e03\u5230",(0,l.kt)("a",{parentName:"li",href:"mailto:dev@yunikorn.apache.org"},"dev@yunikorn.apache.org"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u52a0\u5165",(0,l.kt)("a",{parentName:"li",href:"https://join.slack.com/t/yunikornworkspace/shared_invite/enQtNzAzMjY0OTI4MjYzLTBmMDdkYTAwNDMwNTE3NWVjZWE1OTczMWE4NDI2Yzg3MmEyZjUyYTZlMDE5M2U4ZjZhNmYyNGFmYjY4ZGYyMGE"},"YuniKorn slack"),"\u5e76\u5c06\u60a8\u7684\u95ee\u9898\u53d1\u5e03\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"#yunikorn-user"),"\u9891\u9053\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u52a0\u5165",(0,l.kt)("a",{parentName:"li",href:"http://yunikorn.apache.org/community/get_involved#community-meetings"},"\u793e\u533a\u4f1a\u8bae"),"\u5e76\u76f4\u63a5\u4e0e\u793e\u533a\u6210\u5458\u4ea4\u8c08\u3002")))}m.isMDXComponent=!0}}]);