"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5144],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>N});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),o=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(m.Provider,{value:n},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=o(t),c=r,N=s["".concat(m,".").concat(c)]||s[c]||k[c]||p;return t?a.createElement(N,l(l({ref:n},u),{},{components:t})):a.createElement(N,l({ref:n},u))}));function N(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,l=new Array(p);l[0]=c;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var o=2;o<p;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},56356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const p={id:"queue_config",title:"\u5206\u533a\u548c\u961f\u5217\u914d\u7f6e"},l=void 0,i={unversionedId:"user_guide/queue_config",id:"user_guide/queue_config",title:"\u5206\u533a\u548c\u961f\u5217\u914d\u7f6e",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/user_guide/queue_config.md",sourceDirName:"user_guide",slug:"/user_guide/queue_config",permalink:"/zh-cn/docs/next/user_guide/queue_config",draft:!1,tags:[],version:"current",frontMatter:{id:"queue_config",title:"\u5206\u533a\u548c\u961f\u5217\u914d\u7f6e"},sidebar:"docs",previous:{title:"\u670d\u52a1\u914d\u7f6e",permalink:"/zh-cn/docs/next/user_guide/service_config"},next:{title:"App \u653e\u7f6e\u89c4\u5219",permalink:"/zh-cn/docs/next/user_guide/placement_rules"}},m={},o=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5206\u533a",id:"\u5206\u533a",level:2},{value:"\u961f\u5217",id:"\u961f\u5217",level:3},{value:"\u653e\u7f6e\u89c4\u5219",id:"\u653e\u7f6e\u89c4\u5219",level:3},{value:"\u72b6\u6001\u8f6c\u50a8\u6587\u4ef6\u8def\u5f84",id:"\u72b6\u6001\u8f6c\u50a8\u6587\u4ef6\u8def\u5f84",level:3},{value:"\u9650\u5236",id:"\u9650\u5236",level:3},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:3},{value:"\u5b50\u6a21\u677f",id:"\u5b50\u6a21\u677f",level:3}],u={toc:o},s="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u961f\u5217\u914d\u7f6e\u57fa\u7840\u5728",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/design/scheduler_configuration"},"\u914d\u7f6e\u8bbe\u8ba1\u6587\u6863"),"\u4e2d\u6709\u63cf\u8ff0\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u6863\u63d0\u4f9b\u901a\u7528\u961f\u5217\u914d\u7f6e\u3002\n\u961f\u5217\u914d\u7f6e\u5f15\u7528\u4e86",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/user_guide/acls"},"\u8bbf\u95ee\u63a7\u5236\u5217\u8868"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/user_guide/placement_rules"},"\u653e\u7f6e\u89c4\u5219"),"\u6587\u6863\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u6863\u901a\u8fc7\u793a\u4f8b\u8bf4\u660e\u5982\u4f55\u4e3a\u8c03\u5ea6\u7a0b\u5e8f\u521b\u5efa\u5206\u533a\u548c\u961f\u5217\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u8c03\u5ea6\u7a0b\u5e8f\u4f9d\u9760shim\u53ef\u9760\u5730\u63d0\u4f9b\u7528\u6237\u4fe1\u606f\u4f5c\u4e3a\u5e94\u7528\u7a0b\u5e8f\u63d0\u4ea4\u7684\u4e00\u90e8\u5206\u3002\n\u5f53\u524dshim\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"usergroup_resolution"},"\u7528\u6237\u548c\u7ec4\u89e3\u6790"),"\u4e2d\u63d0\u4f9b\u7684\u65b9\u6cd5\u8bc6\u522b\u7528\u6237\u548c\u7528\u6237\u6240\u5c5e\u7684\u7ec4\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u6b64\u5904\u63cf\u8ff0\u7684\u8c03\u5ea6\u5668\u7684\u914d\u7f6e\u6587\u4ef6\u4ec5\u63d0\u4f9b\u5206\u533a\u548c\u961f\u5217\u7684\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5728\u90e8\u7f72\u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"queues.yaml"),"\u6587\u4ef6\u3002\n\u6587\u4ef6\u540d\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u66f4\u6539\u8c03\u5ea6\u5668\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"policyGroup"),"\u6807\u5fd7\u3002\n\u66f4\u6539\u6587\u4ef6\u540d\u540e\u5fc5\u987b\u5bf9\u90e8\u7f72\u7ec6\u8282\u8fdb\u884c\u76f8\u5e94\u7684\u66f4\u6539\uff0c\u53ef\u4ee5\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"configmap"),"\u6216\u5305\u542b\u5728docker\u5bb9\u5668\u4e2d\u7684\u6587\u4ef6\u3002\n\u914d\u7f6e\u7684\u793a\u4f8b\u6587\u4ef6\u4f4d\u4e8eyunikorn-core\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-core/blob/master/config/queues.yaml"},"queues.yaml"),"."),(0,r.kt)("h2",{id:"\u5206\u533a"},"\u5206\u533a"),(0,r.kt)("p",null,"\u5206\u533a(partitions)\u662f\u8c03\u5ea6\u5668\u914d\u7f6e\u7684\u6700\u9ad8\u7ea7\u522b\u3002\n\u5728\u914d\u7f6e\u4e2d\u53ef\u4ee5\u5b9a\u4e49\u591a\u4e2a\u5206\u533a\u3002"),(0,r.kt)("p",null,"\u914d\u7f6e\u4e2d\u5206\u533a\u5b9a\u4e49\u7684\u57fa\u672c\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: <\u7b2c\u4e00\u4e2a\u5206\u533a\u7684\u540d\u79f0>\n  - name: <\u7b2c\u4e8c\u4e2a\u5206\u533a\u7684\u540d\u79f0>\n")),(0,r.kt)("p",null,"\u5206\u533a\u7684\u9ed8\u8ba4\u540d\u79f0\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\u3002\n\u5206\u533a\u5b9a\u4e49\u5305\u542b\u7279\u5b9ashim\u76f8\u5e94\u8c03\u5ea6\u5668\u7684\u5b8c\u6574\u914d\u7f6e\u3002\n\u6bcf\u4e2ashim\u90fd\u4f7f\u7528\u81ea\u5df1\u72ec\u7279\u7684\u5206\u533a\u3002"),(0,r.kt)("p",null,"\u5206\u533a\u5fc5\u987b\u81f3\u5c11\u9700\u8981\u5b9a\u4e49\u4ee5\u4e0b\u952e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E9%98%9F%E5%88%97"},"queues"))),(0,r.kt)("p",null,"\u961f\u5217\u914d\u7f6e\u4f1a\u5728\u5206\u533a\u7ed3\u675f\u540e\u4ecb\u7ecd\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u9009\u62e9\u4e3a\u5206\u533a\u5b9a\u4e49\u4ee5\u4e0b\u952e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%94%BE%E7%BD%AE%E8%A7%84%E5%88%99"},"placementrules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%8A%B6%E6%80%81%E8%BD%AC%E5%82%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84"},"statedumpfilepath")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E9%99%90%E5%88%B6"},"limits")),(0,r.kt)("li",{parentName:"ul"},"nodesortpolicy"),(0,r.kt)("li",{parentName:"ul"},"preemption")),(0,r.kt)("p",null,"\u653e\u7f6e\u89c4\u5219\u548c\u9650\u5236\u5728\u5404\u81ea\u7684\u7ae0\u8282\u4e2d\u89e3\u91ca\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nodesortpolicy"),"\u5b9a\u4e49\u8282\u70b9\u4e3a\u5206\u533a\u6392\u5e8f\u7684\u65b9\u5f0f\u3002\n\u6709\u5173\u53ef\u4ee5\u4f7f\u7528\u7684\u8282\u70b9\u6392\u5e8f\u7b56\u7565\u503c\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/user_guide/sorting_policies#node-sorting"},"\u6392\u5e8f\u7b56\u7565"),"\u6587\u6863\u3002"),(0,r.kt)("p",null,"\u62a2\u5360\u952e\u76ee\u524d\u53ea\u80fd\u6709\u4e00\u4e2a\u5b50\u952e\uff1a ",(0,r.kt)("em",{parentName:"p"},"enabled"),"\u3002\n\u8fd9\u4e2a\u5e03\u6797\u503c\u5b9a\u4e49\u4e86\u6574\u4e2a\u5206\u533a\u7684\u62a2\u5360\u884c\u4e3a\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"enabled"),"\u7684\u9ed8\u8ba4\u503c\u4e3a",(0,r.kt)("em",{parentName:"p"},"false"),"\u3002\n",(0,r.kt)("em",{parentName:"p"},"enabled"),"\u7684\u5141\u8bb8\u503c\uff1a",(0,r.kt)("em",{parentName:"p"},"true"),"\u6216",(0,r.kt)("em",{parentName:"p"},"false"),"\uff0c\u4efb\u4f55\u5176\u4ed6\u503c\u90fd\u4f1a\u5bfc\u81f4\u89e3\u6790\u9519\u8bef\u3002"),(0,r.kt)("p",null,"\u4e0b\u65b9\u7684\u793a\u4f8b\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"partition")," yaml\u6761\u76ee\u662f\u5e26\u6709",(0,r.kt)("em",{parentName:"p"},"preemption"),"\u6807\u5fd7\u96c6\u548c",(0,r.kt)("em",{parentName:"p"},"fair"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"nodesortpolicy"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: <\u5206\u533a\u540d\u79f0>\n    nodesortpolicy: fair\n    preemption:\n      enabled: true\n")),(0,r.kt)("p",null,"\u5907\u6ce8\uff1a\n\u76ee\u524d\uff0cKubernetes\u72ec\u7279\u7684shim\u4e0d\u652f\u6301\u9664",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\u5206\u533a\u4e4b\u5916\u7684\u4efb\u4f55\u5176\u4ed6\u5206\u533a\u3002\n\u8fd9\u5df2\u88ab\u8bb0\u5f55\u4e3ashim\u7684",(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-22"},"jira"),"\u3002"),(0,r.kt)("h3",{id:"\u961f\u5217"},"\u961f\u5217"),(0,r.kt)("p",null,"YuniKorn\u901a\u8fc7\u5229\u7528\u8d44\u6e90\u961f\u5217\u6765\u7ba1\u7406\u8d44\u6e90\u3002\n\u8d44\u6e90\u961f\u5217(queues)\u5177\u6709\u4ee5\u4e0b\u7279\u5f81\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u961f\u5217\u53ef\u4ee5\u6709",(0,r.kt)("strong",{parentName:"li"},"\u5c42\u6b21"),"\u7ed3\u6784"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u961f\u5217\u90fd\u53ef\u4ee5\u9884\u8bbe",(0,r.kt)("strong",{parentName:"li"},"\u6700\u5c0f/\u6700\u5927\u5bb9\u91cf"),"\uff0c\u5176\u4e2d\u6700\u5c0f\u5bb9\u91cf\u5b9a\u4e49\u4fdd\u8bc1\u8d44\u6e90\uff0c\u6700\u5927\u5bb9\u91cf\u5b9a\u4e49\u8d44\u6e90\u9650\u5236(\u6240\u8c13\u7684\u8d44\u6e90\u914d\u989d)"),(0,r.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u5fc5\u987b\u5728\u67d0\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"leaf"),"\u961f\u5217\u4e0b\u8fd0\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u961f\u5217\u53ef\u4ee5\u662f",(0,r.kt)("strong",{parentName:"li"},"\u9759\u6001"),"(\u4ece\u914d\u7f6e\u6587\u4ef6\u52a0\u8f7d)\u6216",(0,r.kt)("strong",{parentName:"li"},"\u52a8\u6001"),"(\u7531YuniKorn\u5185\u90e8\u7ba1\u7406)"),(0,r.kt)("li",{parentName:"ul"},"\u961f\u5217\u7ea7\u522b\u7684",(0,r.kt)("strong",{parentName:"li"},"\u8d44\u6e90\u516c\u5e73"),"\u662f\u7531\u8c03\u5ea6\u5668\u5f3a\u5236\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u4f5c\u4e1a\u53ea\u80fd\u5728\u7279\u5b9a\u961f\u5217\u4e0b\u8fd0\u884c")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"YuniKorn\u961f\u5217\u4e0e",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Kubernetes\u547d\u540d\u7a7a\u95f4"),"\u7684\u533a\u522b\uff1a\nKubernetes\u547d\u540d\u7a7a\u95f4\u63d0\u4f9b\u4e86Kubernetes\u8d44\u6e90\u7684\u8303\u56f4\uff0c\u5305\u62ec\u5b89\u5168\u73af\u5883(\u5373\u8c01\u53ef\u4ee5\u8bbf\u95ee\u5bf9\u8c61)\uff0c\u4ee5\u53ca\u5b9a\u4e49",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"\u8d44\u6e90\u914d\u989d"),"\u65f6\u7684\u8d44\u6e90\u8fb9\u754c(\u5373\u5bf9\u8c61\u53ef\u4ee5\u4f7f\u7528\u591a\u5c11\u8d44\u6e90)\u3002\n\u53e6\u4e00\u65b9\u9762\uff0cYuniKorn\u961f\u5217\u4ec5\u4f7f\u7528\u4e00\u7ec4\u4f5c\u4e1a\u53ef\u4ee5\u4f7f\u7528\u591a\u5c11\u8d44\u6e90\uff0c\u4ee5\u53ca\u4ee5\u4f55\u79cd\u987a\u5e8f\u4f7f\u7528\u3002\nYuniKorn\u961f\u5217\u5728\u8003\u8651\u8d44\u6e90\u516c\u5e73\u6027\u3001\u4f5c\u4e1a\u6392\u5e8f\u7b49\u65b9\u9762\u63d0\u4f9b\u4e86\u66f4\u7ec6\u7c92\u5ea6\u7684\u591a\u79df\u6237\u8d44\u6e90\u5171\u4eab\u63a7\u5236\u3002\n\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cYuniKorn\u961f\u5217\u53ef\u7528\u4e8e\u66ff\u4ee3\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d\uff0c\u4ee5\u63d0\u4f9b\u66f4\u591a\u7684\u8c03\u5ea6\u7279\u6027\u3002")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"queues"),"\u6761\u76ee\u662f\u4e3b\u8981\u7684\u914d\u7f6e\u5143\u7d20\uff0c\u5b83\u4e3a\u961f\u5217\u5b9a\u4e49\u4e86\u5c42\u6b21\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"\u5b83\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"root"),"\u961f\u5217\uff0c\u4f46\u5b83\u4e0d\u662f\u5fc5\u9700\u7684\u5143\u7d20\u3002\n\u5982\u679c\u672a\u5b9a\u4e49",(0,r.kt)("inlineCode",{parentName:"p"},"root"),"\u961f\u5217\uff0c\u914d\u7f6e\u89e3\u6790\u5c06\u63d2\u5165root\u961f\u5217\u4ee5\u4fdd\u6301\u4e00\u81f4\u6027\u3002\n\u4ee5\u4e0b\u56e0\u7d20\u4f1a\u89e6\u53d1root\u961f\u5217\u7684\u63d2\u5165\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u914d\u7f6e\u5728\u9876\u5c42\u5b9a\u4e49\u4e86\u591a\u4e2a\u961f\u5217\uff0c\u5219\u4f1a\u63d2\u5165\u4e00\u4e2a\u6839\u961f\u5217\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5728\u9876\u5c42\u53ea\u5b9a\u4e49\u4e86\u4e00\u4e2a\u961f\u5217\u5e76\u4e14\u5b83\u4e0d\u88ab\u79f0\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"root"),"\uff0c\u5219\u63d2\u5165\u4e00\u4e2aroot\u961f\u5217\u3002")),(0,r.kt)("p",null,"\u5b9a\u4e49\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u961f\u5217\u5c06\u6210\u4e3a\u63d2\u5165\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"root"),"\u961f\u5217\u7684\u5b50\u961f\u5217\u3002"),(0,r.kt)("p",null,"\u5e26\u6709\u5b50\u961f\u5217\u7684\u57fa\u672c",(0,r.kt)("inlineCode",{parentName:"p"},"queue")," yaml\u6761\u76ee\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"queues:\n- name: <\u961f\u5217\u540d\u79f0>\n  queues:\n  - name: <\u961f\u5217\u540d\u79f0>\n")),(0,r.kt)("p",null,"\u961f\u5217\u652f\u6301\u7684\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name"),(0,r.kt)("li",{parentName:"ul"},"parent"),(0,r.kt)("li",{parentName:"ul"},"queues"),(0,r.kt)("li",{parentName:"ul"},"maxapplications"),(0,r.kt)("li",{parentName:"ul"},"properties"),(0,r.kt)("li",{parentName:"ul"},"adminacl"),(0,r.kt)("li",{parentName:"ul"},"submitacl"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E8%B5%84%E6%BA%90"},"resources")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E9%99%90%E5%88%B6"},"limits"))),(0,r.kt)("p",null,"\u6bcf\u4e2a\u961f\u5217\u90fd\u5fc5\u987b\u6709\u4e00\u4e2a",(0,r.kt)("em",{parentName:"p"},"name"),"\u5e76\u4e14\u961f\u5217\u7684\u540d\u79f0\u5728\u5b9a\u4e49\u961f\u5217\u7684\u540c\u4e00\u7ea7\u522b\u4e0a\u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002\n\u7531\u4e8e\u961f\u5217\u7ed3\u6784\u662f\u5b8c\u5168\u5c42\u6b21\u5316\u7684\uff0c\u5c42\u6b21\u7ed3\u6784\u4e2d\u4e0d\u540c\u70b9\u7684\u961f\u5217\u53ef\u80fd\u5177\u6709\u76f8\u540c\u7684\u540d\u79f0\u3002\n\u4f8b\u5982\uff1a\u961f\u5217\u7ed3\u6784",(0,r.kt)("inlineCode",{parentName:"p"},"root.testqueue"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"root.parent.testqueue"),"\u662f\u4e00\u4e2a\u6709\u6548\u7684\u7ed3\u6784\u3002\n\u9700\u6ce8\u610f\u7684\u662f\uff0c\u961f\u5217\u4e0d\u80fd\u5305\u542b\u70b9\u201c.\u201d\u5b57\u7b26\uff0c\u56e0\u4e3a\u8be5\u5b57\u7b26\u7528\u4e8e\u5206\u9694\u5c42\u6b21\u7ed3\u6784\u4e2d\u7684\u961f\u5217\u3002\n\u5982\u679c\u540d\u79f0\u5bf9\u4e8e\u914d\u7f6e\u4e2d\u7684\u961f\u5217\u4e0d\u662f\u552f\u4e00\u7684\uff0c\u6216\u8005\u540d\u79f0\u5305\u542b\u4e00\u4e2a\u70b9\uff0c\u5219\u4f1a\u751f\u6210\u89e3\u6790\u9519\u8bef\u5e76\u62d2\u7edd\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u4f9d\u961f\u5217\u7684\u7c7b\u578b\u662f\u5426\u4e8e\u961f\u5217\u6709\u5b50\u6a21\u677f\u961f\u5217\u548c\u5b50\u961f\u5217\u7684\u4e8b\u5b9e\uff0c\u7ed3\u6784\u4e2d\u7684\u961f\u5217\u5c06\u81ea\u52a8\u83b7\u5f97\u5206\u914d\u7684\u7c7b\u578b\u3002\n\u961f\u5217\u7c7b\u578b\u6709\u4e24\u79cd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parent"),(0,r.kt)("li",{parentName:"ul"},"leaf")),(0,r.kt)("p",null,"\u5e94\u7528\u53ea\u80fd\u5206\u914d\u7ed9",(0,r.kt)("em",{parentName:"p"},"leaf"),"\u961f\u5217\u3002\n\u5728\u914d\u7f6e\u4e2d\uff0c\u961f\u5217\u5177\u6709\u5b50\u6a21\u677f\u961f\u5217\u6216\u5b50\u961f\u5217\u5c06\u81ea\u52a8\u6210\u4e3a",(0,r.kt)("em",{parentName:"p"},"parent"),"\u961f\u5217\u3002\n\u5982\u679c\u961f\u5217\u5728\u914d\u7f6e\u4e2d\u6ca1\u6709\u5b50\u961f\u5217\uff0c\u5219\u8be5\u961f\u5217\u662f",(0,r.kt)("em",{parentName:"p"},"leaf"),"\u961f\u5217\uff0c\u9664\u975e\u8be5\u961f\u5217",(0,r.kt)("inlineCode",{parentName:"p"},"parent"),"\u53c2\u6570\u8bbe\u7f6e\u4e3a",(0,r.kt)("em",{parentName:"p"},"true"),"\u3002\n\u5c1d\u8bd5\u8986\u76d6\u914d\u7f6e\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"parent"),"\u961f\u5217\u7c7b\u578b\u5c06\u5bfc\u81f4\u914d\u7f6e\u89e3\u6790\u9519\u8bef\u3002"),(0,r.kt)("p",null,"parent\u961f\u5217\u7684\u5b50\u961f\u5217\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"queues"),"\u6761\u76ee\u4e0b\u5b9a\u4e49\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"queues"),"\u6761\u76ee\u662f\u961f\u5217\u7ea7\u522b\u7684\u9012\u5f52\u6761\u76ee\uff0c\u5b83\u4f7f\u7528\u5b8c\u5168\u76f8\u540c\u7684\u53c2\u6570\u96c6\u3002\n",(0,r.kt)("em",{parentName:"p"},"maxapplications"),"\u5c5e\u6027\u662f\u4e00\u4e2a\u5927\u4e8e 1 \u7684\u6574\u6570\u503c\uff0c\u5b83\u5141\u8bb8\u60a8\u9650\u5236\u961f\u5217\u4e2d\u6b63\u5728\u8fd0\u884c\u7684\u5e94\u7528\u7684\u6570\u91cf\u3002\n\u4e0d\u5141\u8bb8\u4e3a",(0,r.kt)("em",{parentName:"p"},"maxapplications"),"\u6307\u5b9a\u96f6\uff0c\u56e0\u4e3a\u5b83\u4f1a\u963b\u6b62\u961f\u5217\u4e2d\u5e94\u7528\u7684\u4efb\u4f55\u5206\u914d\u3002\n",(0,r.kt)("em",{parentName:"p"},"\u5b50"),"\u961f\u5217\u7684",(0,r.kt)("em",{parentName:"p"},"maxapplications"),"\u503c\u5fc5\u987b\u5c0f\u4e8e\u6216\u7b49\u4e8e",(0,r.kt)("em",{parentName:"p"},"parent"),"\u961f\u5217\u7684\u503c\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"properties"),"\u53c2\u6570\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u952e\u503c\u5bf9\u5217\u8868\uff0c\u5e76\u4e3a\u961f\u5217\u63d0\u4f9b\u4e00\u7ec4\u7b80\u5355\u7684\u5c5e\u6027\u3002\u5176\u4e2d\u7684\u952e\u6216\u503c\u6ca1\u6709\u9650\u5236\uff0c\u4efb\u4f55\u4e1c\u897f\u90fd\u662f\u5141\u8bb8\u7684\u3002\n\u76ee\u524d\uff0c\u5c5e\u6027\u5217\u8868\u4ec5\u5728\u8c03\u5ea6\u5668\u4e2d\u7528\u4e8e\u5b9a\u4e49leaf\u961f\u5217\u7684",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/user_guide/sorting_policies#application-sorting"},"\u6392\u5e8f\u987a\u5e8f"),"\u3002\n\u5728\u672a\u6765\u7684\u6269\u5c55\u4e2d\uff0c\u6dfb\u52a0\u6bd4\u5982\u6253\u5f00\u6216\u5173\u95ed\u961f\u5217\u62a2\u5360\u6216\u5176\u4ed6\u6392\u5e8f\u7b56\u7565\u7684\u9009\u9879\uff0c\u8ba9\u4f7f\u7528\u76f8\u540c\u7684\u5c5e\u6027\u6784\u9020\u800c\u65e0\u9700\u66f4\u6539\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"adminacl"),"\u8bbe\u7f6e\u5bf9\u961f\u5217\u7684\u8bbf\u95ee\u6743\u9650\u4ee5\u8fdb\u884c\u7ba1\u7406\u64cd\u4f5c\uff0c\u5e76\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"submitacl"),"\u6761\u76ee\u63d0\u4ea4\u5e94\u7528\u3002\n\u8bbf\u95ee\u63a7\u5236\u5217\u8868(ACLs)\u7684\u63cf\u8ff0\u53ef\u89c1",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/user_guide/acls"},"\u8bbf\u95ee\u63a7\u5236\u5217\u8868(ACLs)"),"\u6587\u6863\u3002"),(0,r.kt)("p",null,"\u961f\u5217\u8d44\u6e90\u9650\u5236\u662f\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"resources"),"\u53c2\u6570\u8bbe\u7f6e\u3002\n\u7528\u6237\u548c\u7fa4\u7ec4\u7684\u9650\u5236\u662f\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"limits"),"\u53c2\u6570\u8bbe\u7f6e\u3002\n\u7531\u4e8e\u8fd9\u4e24\u4e2a\u6761\u76ee\u90fd\u662f\u590d\u6742\u7684\u914d\u7f6e\u6761\u76ee\uff0c\u56e0\u6b64\u5b83\u4eec\u5728\u4e0b\u9762\u7684",(0,r.kt)("a",{parentName:"p",href:"#%E8%B5%84%E6%BA%90"},"resources"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"#%E9%99%90%E5%88%B6"},"limits"),"\u4e2d\u6709\u76f8\u5e94\u89e3\u91ca\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u914d\u7f6e\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"root.namespaces"),"\u961f\u5217\u4f5c\u4e3a\u5177\u6709\u9650\u5236\u7684",(0,r.kt)("em",{parentName:"p"},"parent"),"\u961f\u5217\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    queues:\n      - name: namespaces\n        parent: true\n        maxapplications: 12\n        resources:\n          guaranteed:\n            {memory: 1G, vcore: 10}\n          max:\n            {memory: 10G, vcore: 100}\n        queues:\n          - name: level1\n            maxapplications: 8\n            resources:\n              guaranteed:\n                {memory: 0.5G, vcore: 5}\n              max:\n                {memory: 5G, vcore: 50}\n")),(0,r.kt)("h3",{id:"\u653e\u7f6e\u89c4\u5219"},"\u653e\u7f6e\u89c4\u5219"),(0,r.kt)("p",null,"\u653e\u7f6e\u89c4\u5219(placement rules)\u5728",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/user_guide/placement_rules"},"\u653e\u7f6e\u89c4\u5219"),"\u6587\u6863\u4e2d\u6709\u76f8\u5173\u5b9a\u4e49\u548c\u8bb0\u5f55\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u5206\u533a\u53ea\u80fd\u5b9a\u4e49\u4e00\u7ec4\u653e\u7f6e\u89c4\u5219\u3002\n\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\u89c4\u5219\uff0c\u5219\u653e\u7f6e\u7ba1\u7406\u5668\u4e0d\u4f1a\u542f\u52a8\u3002\n\u6b64\u5916\uff0c\u5728\u63d0\u4ea4\u5e94\u7528\u65f6\uff0c",(0,r.kt)("em",{parentName:"p"},"\u5fc5\u987b"),"\u4e3a\u6bcf\u4e2a\u5e94\u7528\u8bbe\u7f6e\u4e00\u4e2a\u961f\u5217\u3002"),(0,r.kt)("h3",{id:"\u72b6\u6001\u8f6c\u50a8\u6587\u4ef6\u8def\u5f84"},"\u72b6\u6001\u8f6c\u50a8\u6587\u4ef6\u8def\u5f84"),(0,r.kt)("p",null,"\u72b6\u6001\u8f6c\u50a8\u6587\u4ef6\u8def\u5f84(Statedump filepath)\u5b9a\u4e49YuniKorn\u72b6\u6001\u8f6c\u50a8\u7684\u8f93\u51fa\u6587\u4ef6\u5e76\u4e14\u5b83\u53ef\u4ee5\u5728\u5206\u533a\u7ea7\u522b\u4e0a\u8bbe\u7f6e\u3002\n\u5982\u679c\u8bbe\u7f6e\u8f6c\u50a8\u6587\u4ef6\u8def\u5f84\uff0c\u8be5\u5b57\u6bb5\u7684\u503c\u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84\u6216\u7edd\u5bf9\u8def\u5f84(\u6b64\u5904\u76f8\u5bf9\u8def\u5f84\u662f\u57fa\u4e8e\u5de5\u4f5c\u76ee\u5f55)\u3002\n\u5982\u679cYuniKorn\u8c03\u5ea6\u5668\u6ca1\u6709\u8db3\u591f\u7684\u6743\u9650\u5728\u6307\u5b9a\u8def\u5f84\u521b\u5efa\u72b6\u6001\u8f6c\u50a8\u6587\u4ef6\uff0c\u5b83\u5c06\u65e0\u6cd5\u542f\u52a8\u72b6\u6001\u8f6c\u50a8\u7684\u529f\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"statedumpfilepath: <path/to/statedump/file>\n")),(0,r.kt)("p",null,"\u5982\u679c\u4e0a\u9762\u7684\u952e\u6ca1\u6709\u5728\u5206\u533a\u914d\u7f6e\u4e2d\u6307\u5b9a\uff0c\u5b83\u7684\u9ed8\u8ba4\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"yunikorn-state.txt"),"\u3002\n\u9700\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u952e\u5728\u591a\u4e2a\u5206\u533a\u4e2d\u6307\u5b9a\uff0c\u5219\u5176\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u503c\u4f18\u5148\u3002"),(0,r.kt)("p",null,"\u72b6\u6001\u8f6c\u50a8\u6587\u4ef6\u4e5f\u6709\u4e00\u4e2a\u56fa\u5b9a\u7684\u5faa\u73af\u7b56\u7565\u3002\n\u76ee\u524d\uff0c\u6bcf\u4e2a\u72b6\u6001\u8f6c\u50a8\u6587\u4ef6\u7684\u5bb9\u91cf\u4e3a10MB\uff0c\u6700\u591a\u53ef\u4ee5\u670910\u4e2a\u8fd9\u6837\u7684\u6587\u4ef6\u3002\n\u5f53\u524d\u6b63\u5728\u5199\u5165\u7684\u72b6\u6001\u8f6c\u50a8\u6587\u4ef6\u5c06\u59cb\u7ec8\u662f\u4e0a\u9762\u914d\u7f6e\u7684\u503c\u6216\u9ed8\u8ba4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"yunikorn-state.txt"),"\u3002\n\u5f53\u8fbe\u5230\u6587\u4ef6\u5927\u5c0f\u9650\u5236\u65f6\uff0c\u65e5\u5fd7\u65cb\u8f6c\u5668(",(0,r.kt)("inlineCode",{parentName:"p"},"lumberjack"),")\u5c06\u901a\u8fc7\u5728\u6587\u4ef6\u524d\u52a0\u4e0a\u65f6\u95f4\u6233\u6765\u4fee\u6539\u6587\u4ef6\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u76f8\u540c\u7684\u65e0\u524d\u7f00\u540d\u79f0\u7684\u65b0\u6587\u4ef6\u6765\u5199\u5165\u72b6\u6001\u8f6c\u50a8\u3002\n\u5982\u679c\u8fbe\u5230\u72b6\u6001\u8f6c\u50a8\u6587\u4ef6\u7684\u6700\u5927\u6570\u91cf\uff0c\u8f6e\u6362\u7b56\u7565\u5c06\u5220\u9664\u6839\u636e\u6807\u8bb0\u65f6\u95f4\u6233\u7684\u6700\u65e7\u6587\u4ef6\u3002"),(0,r.kt)("h3",{id:"\u9650\u5236"},"\u9650\u5236"),(0,r.kt)("p",null,"\u9650\u5236(limits)\u4e3a\u5206\u533a\u6216\u961f\u5217\u5b9a\u4e49\u4e00\u7ec4\u9650\u5236\u5bf9\u8c61\uff0c\u4ee5\u53ca\u5b83\u53ef\u4ee5\u5728\u5206\u533a\u6216\u4efb\u4f55\u7ea7\u522b\u7684\u961f\u5217\u4e0a\u8bbe\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"limits:\n  - limit: <\u63cf\u8ff0>\n  - limit: <\u63cf\u8ff0>\n")),(0,r.kt)("p",null,"\u9650\u5236\u5bf9\u8c61\u662f\u4e00\u4e2a\u590d\u6742\u7684\u914d\u7f6e\u5bf9\u8c61\uff0c\u5b83\u4e3a\u4e00\u7ec4\u7528\u6237\u548c/\u6216\u7fa4\u7ec4\u5b9a\u4e49\u4e00\u4e2a\u9650\u5236\u3002\n\u591a\u4e2a\u72ec\u7acb\u7684\u9650\u5236\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u961f\u5217\u6216\u5206\u533a\u4e0a\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"limits"),"\u6761\u76ee\u7684\u4e00\u90e8\u5206\u3002\n\u4e0d\u5c5e\u4e8e\u9650\u5236\u8bbe\u7f6e\u7684\u7528\u6237\u548c/\u6216\u7fa4\u7ec4\u5c06\u4e0d\u53d7\u9650\u5236\u3002"),(0,r.kt)("p",null,"limits\u6761\u76ee\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'limits:\n  - limit: <\u63cf\u8ff0>\n    users:\n    - <\u7528\u6237\u540d\u6216"*">\n    - <\u7528\u6237\u540d>\n    groups:\n    - <\u7fa4\u7ec4\u540d\u79f0\u6216"*">\n    - <\u7fa4\u7ec4\u540d\u79f0>\n    maxapplications: <1..\u6700\u5927\u503c>\n    maxresources:\n      <\u8d44\u6e90\u540d\u79f01>: <0..\u6700\u5927\u503c>[\u540e\u7f00]\n      <\u8d44\u6e90\u540d\u79f02>: <0..\u6700\u5927\u503c>[\u540e\u7f00]\n')),(0,r.kt)("p",null,"\u961f\u5217\u9650\u5236\u7684\u60c5\u51b5\u4e0b\uff0c\u5e94\u7528\u9012\u5f52\u9650\u5236\u3002\n\u8fd9\u610f\u5473\u7740\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"root"),"\u961f\u5217\u7684\u9650\u5236\u662f\u96c6\u7fa4\u4e2d\u7528\u6237\u6216\u7fa4\u7ec4\u7684\u603b\u4f53\u9650\u5236\u3002\n\u56e0\u6b64\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"root"),"\u961f\u5217\u9650\u5236\u4e5f\u7b49\u540c\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"partition"),"\u9650\u5236\u3002"),(0,r.kt)("p",null,"limits\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"limit"),(0,r.kt)("li",{parentName:"ul"},"users"),(0,r.kt)("li",{parentName:"ul"},"groups"),(0,r.kt)("li",{parentName:"ul"},"maxapplications"),(0,r.kt)("li",{parentName:"ul"},"maxresources")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"limit"),"\u53c2\u6570\u662flimits\u6761\u76ee\u7684\u53ef\u9009\u63cf\u8ff0\u3002\n\u9664\u4e86\u4f7f\u914d\u7f6e\u6613\u4e8e\u7406\u89e3\u548c\u53ef\u8bfb\u4e4b\u5916\uff0c\u5b83\u4e0d\u7528\u4e8e\u4efb\u4f55\u5176\u4ed6\u7528\u9014\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u914d\u7f6e\u7684",(0,r.kt)("em",{parentName:"p"},"users"),"\u548c",(0,r.kt)("em",{parentName:"p"},"groups"),"\u53ef\u4ee5\u662f\u4ee5\u4e0b\u4e24\u79cd\u7c7b\u578b\u4e4b\u4e00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\u4e00\u4e2a\u661f\u53f7\u5b57\u7b26 "*" '),(0,r.kt)("li",{parentName:"ul"},"users\u6216groups\u7684\u5217\u8868\u3002")),(0,r.kt)("p",null,"\u5982\u679cusers\u6216groups\u7684\u6761\u76ee\u5305\u542b\u8d85\u8fc71\u4e2a\u6761\u76ee\uff0c\u5219\u5b83\u59cb\u7ec8\u88ab\u89c6\u4e3ausers\u6216groups\u7684\u5217\u8868\u3002\n\u661f\u53f7\u5b57\u7b26\u201c*\u201d\u4e3a\u901a\u914d\u7b26\uff0c\u5339\u914d\u6240\u6709\u7528\u6237\u6216\u7fa4\u7ec4\u3002\n\u4e0d\u5141\u8bb8\u5728\u5176\u4ed6\u5217\u8868\u5143\u7d20\u65c1\u8fb9\u6307\u5b9a\u661f\u53f7\u5b57\u7b26\u3002\n\u5217\u8868\u4e2d\u7684\u91cd\u590d\u6761\u76ee\u5c06\u88ab\u5ffd\u7565\uff0c\u5e76\u4e0d\u4f1a\u5bfc\u81f4\u89e3\u6790\u9519\u8bef\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"maxapplications"),"\u662f\u4e00\u4e2a\u65e0\u7b26\u53f7\u6574\u6570\u503c\u3002\n\u5f53",(0,r.kt)("em",{parentName:"p"},"maxapplications"),"\u5927\u4e8e1\uff0c\u5b83\u5141\u8bb8\u60a8\u9650\u5236\u4e3a\u914d\u7f6e\u7684\u7528\u6237\u6216\u7fa4\u7ec4\u8fd0\u884c\u7684\u5e94\u7528\u7684\u6570\u91cf\u3002\n\u4e0d\u5141\u8bb8\u6307\u5b9a",(0,r.kt)("em",{parentName:"p"},"maxapplications"),"\u4e3a0\uff0c\u56e0\u4e3a",(0,r.kt)("em",{parentName:"p"},"maxapplications"),"\u4e3a0\u65f6\uff0c\u9690\u542b\u62d2\u7edd\u4efb\u4f55\u8bbf\u95ee\u3002\n\u62d2\u7edd\u8bbf\u95ee\u7684\u89c4\u8303\u5e94\u4ea4\u7531ACL\u6761\u76ee\u5904\u7406\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"maxresources"),"\u53c2\u6570\u53ef\u7528\u4e8e\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a\u8d44\u6e90\u7684\u9650\u5236\u3002\n",(0,r.kt)("em",{parentName:"p"},"maxresources"),"\u4f7f\u7528\u4e0e\u961f\u5217\u7684",(0,r.kt)("a",{parentName:"p",href:"#%E8%B5%84%E6%BA%90"},"resources"),"\u53c2\u6570\u76f8\u540c\u7684\u8bed\u6cd5\u3002\n\u672a\u5728\u5217\u8868\u4e2d\u6307\u5b9a\u7684\u8d44\u6e90\u4e0d\u53d7\u9650\u5236\u3002\n\u8d44\u6e90\u9650\u5236\u53ef\u4ee5\u8bbe\u7f6e\u4e3a 0\uff0c\u8fd9\u53ef\u4ee5\u9632\u6b62\u7528\u6237\u6216\u7fa4\u7ec4\u8bf7\u6c42\u6307\u5b9a\u7684\u8d44\u6e90\uff0c\u5373\u4f7f\u961f\u5217\u6216\u5206\u533a\u5177\u6709\u53ef\u7528\u7684\u7279\u5b9a\u8d44\u6e90\u4e5f\u662f\u5982\u6b64\u3002\n\u4e0d\u5141\u8bb8\u5c06\u603b\u4f53\u8d44\u6e90\u9650\u5236\u6307\u5b9a\u4e3a\u96f6\uff0c\u6362\u8a00\u4e4b\uff0c\u8fd9\u610f\u5473\u7740\u9650\u5236\u4e2d\u6307\u5b9a\u7684\u81f3\u5c11\u4e00\u4e2a\u8d44\u6e90\u5fc5\u987b\u5927\u4e8e\u96f6\u3002\n\u5982\u679c\u8d44\u6e90\u5728\u961f\u5217\u4e0a\u4e0d\u53ef\u7528\uff0c\u5219\u5e94\u4f7f\u7528\u961f\u5217\u5b9a\u4e49\u4e0a\u7684\u6700\u5927\u8d44\u6e90\u3002\n\u6307\u5b9a\u4e00\u4e2a\u5b9e\u9645\u4e0a\u4e3a\u96f6\u7684\u9650\u5236\uff0c",(0,r.kt)("em",{parentName:"p"},"maxapplications")," \u4e3a\u96f6\u5e76\u4e14\u6240\u6709\u8d44\u6e90\u9650\u5236\u4e3a\u96f6\uff0c\u8fd9\u662f\u4e0d\u5141\u8bb8\u7684\uff0c\u5e76\u4e14\u4f1a\u5bfc\u81f4\u89e3\u6790\u9519\u8bef\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u7528\u6237\u6216\u7fa4\u7ec4\u90fd\u6709\u4e00\u4e2a\u9650\u5236\uff0c\u5b83",(0,r.kt)("em",{parentName:"p"},"\u4e0d\u662f"),"\u6240\u6709\u7528\u6237\u6216\u7fa4\u7ec4\u7684\u7ec4\u5408\u9650\u5236\u3002"),(0,r.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'limit: "example entry"\nmaxapplications: 10\nusers:\n- sue\n- bob\n')),(0,r.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7528\u6237",(0,r.kt)("inlineCode",{parentName:"p"},"sue"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"bob"),"\u90fd\u88ab\u5141\u8bb8\u8fd0\u884c10\u4e2a\u5e94\u7528\u3002"),(0,r.kt)("h3",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,r.kt)("p",null,"\u961f\u5217\u7684resources\u6761\u76ee\u53ef\u4ee5\u4e3a\u961f\u5217\u8bbe\u7f6e",(0,r.kt)("em",{parentName:"p"},"guaranteed"),"\u548c/\u6216",(0,r.kt)("em",{parentName:"p"},"maximum"),"\u8d44\u6e90\uff0cyunikorn\u4f1a\u9012\u5f52\u5730\u68c0\u67e5\u8d44\u6e90\u9650\u5236\u3002\nleaf\u961f\u5217\u7684\u8d44\u6e90\u4f7f\u7528\u91cf\u662f\u4e3a\u8be5\u961f\u5217\u5206\u914d\u7684\u6240\u6709\u8d44\u6e90\u7684\u603b\u548c\u3002\nparent\u961f\u5217\u7684\u8d44\u6e90\u4f7f\u7528\u91cf\u662f\u8be5parent\u961f\u5217\u4e0b\u9762\u6240\u6709\u961f\u5217\uff0cleaf\u548cparent\u961f\u5217\u7684\u8d44\u6e90\u4f7f\u7528\u91cf\u7684\u603b\u548c\u3002"),(0,r.kt)("p",null,"root\u961f\u5217\u6ca1\u6709",(0,r.kt)("em",{parentName:"p"},"guaranteed"),"\u7684\u8d44\u6e90\u8bbe\u7f6e\u3002\nroot\u961f\u5217\u7684",(0,r.kt)("em",{parentName:"p"},"max"),"\u8d44\u6e90\u9650\u5236\u81ea\u52a8\u7b49\u4e8e\u96c6\u7fa4\u5927\u5c0f\u3002\n\u5982\u679croot\u961f\u5217\u8bbe\u7f6e\u4e86\u4efb\u4f55\u9650\u5236\uff0c\u5219\u4f1a\u53d1\u751f\u89e3\u6790\u9519\u8bef\u3002\nleaf\u961f\u5217\u5728\u5b9a\u4e49\u65f6\u4e0d\u80fd\u8bbe\u7f6e\u4efb\u4f55\u8d44\u6e90\u9650\u5236\u3002"),(0,r.kt)("p",null,"\u914d\u7f6e\u540e\u7684",(0,r.kt)("em",{parentName:"p"},"max"),"\u8d44\u6e90\u5bf9\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u95f4\u70b9\u5206\u914d\u7ed9\u961f\u5217\u7684\u6240\u6709\u5206\u914d\u7684\u5927\u5c0f\u8fdb\u884c\u4e86\u786c\u6027\u9650\u5236\u3002\n",(0,r.kt)("em",{parentName:"p"},"max"),"\u8d44\u6e90\u53ef\u4ee5\u8bbe\u7f6e\u4e3a0\uff0c\u8fd9\u4f7f\u5f97\u8d44\u6e90\u5bf9\u961f\u5217\u4e0d\u53ef\u7528\u3002\n",(0,r.kt)("em",{parentName:"p"},"guaranteed"),"\u8d44\u6e90\u7528\u4e8e\u8ba1\u7b97\u961f\u5217\u4efd\u989d\u548c\u5206\u914d\u671f\u95f4\uff0c\u5b83\u7528\u4f5c\u51b3\u5b9a\u5c06\u5206\u914d\u5206\u914d\u7ed9\u54ea\u4e2a\u961f\u5217\u7684\u8f93\u5165\u4e4b\u4e00\u3002\n\u62a2\u5360\u4f7f\u7528\u961f\u5217\u7684",(0,r.kt)("em",{parentName:"p"},"guaranteed"),"\u8d44\u6e90\u4f5c\u4e3a\u961f\u5217\u4e0d\u80fd\u4f4e\u4e8e\u7684\u57fa\u7840\u3002"),(0,r.kt)("p",null,"\u57fa\u672c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," yaml\u6761\u76ee\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n  guaranteed:\n    <\u8d44\u6e90\u540d\u79f01>: <0..\u6700\u5927\u503c>[\u540e\u7f00]\n    <\u8d44\u6e90\u540d\u79f02>: <0..\u6700\u5927\u503c>[\u540e\u7f00]\n  max:\n    <\u8d44\u6e90\u540d\u79f01>: <0..\u6700\u5927\u503c>[\u540e\u7f00]\n    <\u8d44\u6e90\u540d\u79f02>: <0..\u6700\u5927\u503c>[\u540e\u7f00]\n")),(0,r.kt)("p",null,"\u5217\u8868\u4e2d\u672a\u6307\u5b9a\u7684\u8d44\u6e90\u4e0d\u53d7\u9650\u5236\uff0c\u5bf9\u4e8e\u6700\u5927(max)\u8d44\u6e90\uff0c\u6216\u5728\u4fdd\u8bc1(guaranteed)\u8d44\u6e90\u7684\u60c5\u51b5\u4e0b\u4fdd\u8bc1\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4e3a\u8d44\u6e90\u6570\u91cf\u6307\u5b9a\u4e00\u4e2a\u53ef\u9009\u7684\u540e\u7f00\u3002\n\u6709\u6548\u7684\u56fd\u9645\u5355\u4f4d\u5236\u540e\u7f00\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"M"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"G"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"P")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),"\uff0c\u7528\u4e8e10\u7684\u5e42\uff0c\u4ee5\u53ca",(0,r.kt)("inlineCode",{parentName:"p"},"Ki"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Mi"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Gi"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Ti"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"Pi"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Ei"),"\u8868\u793a2\u7684\u5e42\u3002\n\u6b64\u5916\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"vcore"),"\u7c7b\u578b\u7684\u8d44\u6e90\u53ef\u80fd\u5e26\u6709\u540e\u7f00",(0,r.kt)("inlineCode",{parentName:"p"},"m"),"\u4ee5\u8868\u793amillicores\u3002 \u4f8b\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"500m"),"\u662fvcore\u768450%\u3002\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"memory"),"\u7c7b\u578b\u7684\u5355\u4f4d\u4ee5byte\u4e3a\u5355\u4f4d\u8fdb\u884c\u89e3\u91ca\u3002\n\u6240\u6709\u5176\u4ed6\u8d44\u6e90\u7c7b\u578b\u90fd\u6ca1\u6709\u6307\u5b9a\u7684\u57fa\u672c\u5355\u4f4d\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u4ee5\u4e0a\u5355\u4f4d\u884c\u4e3a\u4eceyunikorn 1.0\u5f00\u59cb\u6709\u6548\n\u4ee5\u524d\u7684\u7248\u672c\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"memory"),"\u89e3\u91ca\u4e3a1000000(\u767e\u4e07)bytes\u7684\u5355\u4f4d\uff0c\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"vcore"),"\u89e3\u91ca\u4e3amillicores\u3002"),(0,r.kt)("h3",{id:"\u5b50\u6a21\u677f"},"\u5b50\u6a21\u677f"),(0,r.kt)("p",null,"\u5b50\u6a21\u677f(child template)\u53ef\u4ee5\u5728\u7236\u7c7b\u578b\u961f\u5217\u7684\u961f\u5217\u5c42\u6b21\u7ed3\u6784\u4e2d\u7684\u4efb\u4f55\u7ea7\u522b\u6765\u5b9a\u4e49\u3002\nparent\u961f\u5217\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u6a21\u677f\u6765\u5b9a\u4e49\u5b83\u4e0b\u9762\u7684\u52a8\u6001leaf\u961f\u5217\u7684\u884c\u4e3a\u3002\n\u5982\u679cparent\u961f\u5217\u5b9a\u4e49\u4e86\u5b50\u6a21\u677f\uff0c\u5219\u6ca1\u6709\u5b50\u6a21\u677f\u7684parent\u961f\u5217\u4f1a\u4ece\u5176parent\u961f\u5217\u7ee7\u627f\u5b50\u6a21\u677f\u3002"),(0,r.kt)("p",null,"\u6a21\u677f\u4e2d\u652f\u6301\u7684\u914d\u7f6e\u5982\u4e0b\u6240\u793a\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"application sort policy"),(0,r.kt)("li",{parentName:"ol"},"max resources"),(0,r.kt)("li",{parentName:"ol"},"guaranteed resources"),(0,r.kt)("li",{parentName:"ol"},"max applications")),(0,r.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"}," partitions:\n   - name: default\n     placementrules:\n       - name: provided\n         create: true\n     queues:\n       - name: root\n         submitacl: '*'\n         childtemplate:\n           maxapplications: 10\n           properties:\n             application.sort.policy: stateaware\n           resources:\n             guaranteed:\n               vcore: 1\n               memory: 1G\n             max:\n               vcore: 20\n               memory: 600G\n         queues:\n           - name: parent\n             parent: true\n             childtemplate:\n               resources:\n                 max:\n                   vcore: 21\n                   memory: 610G\n           - name: notemplate\n             parent: true\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"root.parent.sales"),"\u5c06\u76f4\u63a5\u4f7f\u7528parent\u961f\u5217",(0,r.kt)("inlineCode",{parentName:"p"},"root.parent"),"\u7684\u5b50\u6a21\u677f\u3002\n\u76f8\u6bd4\u4e4b\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"root.notemplate.sales"),"\u5c06\u4f7f\u7528\u5728\u961f\u5217",(0,r.kt)("inlineCode",{parentName:"p"},"root"),"\u4e0a\u8bbe\u7f6e\u7684\u5b50\u6a21\u677f\uff0c\u56e0\u4e3a\u5176parent\u961f\u5217 ",(0,r.kt)("inlineCode",{parentName:"p"},"root.notemplate")," \u4ece\u961f\u5217",(0,r.kt)("inlineCode",{parentName:"p"},"root"),"\u7ee7\u627f\u4e86\u5b50\u6a21\u677f\u3002"))}k.isMDXComponent=!0}}]);