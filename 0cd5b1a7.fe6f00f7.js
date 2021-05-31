(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{203:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),p=r,h=b["".concat(c,".").concat(p)]||b[p]||d[p]||i;return n?a.a.createElement(h,o(o({ref:t},u),{},{components:n})):a.a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},238:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/throughput-5a45b5084a84d880c20179703af1e6b4.png"},239:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/queue-fairness-3a524e14fa54750fdc0d5456852f05f2.png"},240:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/node-fair-1fecf15a75eff14ca8371bc927152d84.png"},241:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/node-bin-packing-7d63f9e4a088f0b271580b794ff8c71c.png"},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(203)),c=["components"],o={id:"evaluate_perf_function_with_kubemark",title:"Evaluate YuniKorn function & performance with Kubemark",keywords:["performance","throughput"]},s={unversionedId:"performance/evaluate_perf_function_with_kubemark",id:"performance/evaluate_perf_function_with_kubemark",isDocsHomePage:!1,title:"Evaluate YuniKorn function & performance with Kubemark",description:"\x3c!--",source:"@site/docs/performance/evaluate_perf_function_with_kubemark.md",slug:"/performance/evaluate_perf_function_with_kubemark",permalink:"/docs/next/performance/evaluate_perf_function_with_kubemark",version:"current",sidebar:"docs",previous:{title:"Gang scheduling design",permalink:"/docs/next/design/gang_scheduling"},next:{title:"Scheduler Metrics",permalink:"/docs/next/performance/metrics"}},u=[{value:"Scheduler Throughput",id:"scheduler-throughput",children:[]},{value:"Resource Fairness between queues",id:"resource-fairness-between-queues",children:[]},{value:"Node sorting policies",id:"node-sorting-policies",children:[{value:"FAIR Policy",id:"fair-policy",children:[]},{value:"BIN-PACKING",id:"bin-packing",children:[]}]}],l={rightToc:u};function b(e){var t=e.components,o=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"All the following tests are done with ",Object(i.b)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/release-1.3/docs/devel/kubemark-guide.md#starting-a-kubemark-cluster"},"Kubemark"),",\na tool helps us to simulate large K8s cluster and run experimental workloads.\nThere were 18 bare-metal servers being used to simulate 2000/4000 nodes for these tests. "),Object(i.b)("h2",{id:"scheduler-throughput"},"Scheduler Throughput"),Object(i.b)("p",null,"When running Big Data batch workloads, e.g Spark, on K8s, scheduler throughput becomes to be one of the main concerns.\nIn YuniKorn, we have done lots of optimizations to improve the performance, such as a fully async event-driven system\nand low-latency sorting policies. The following chart reveals the scheduler throughput (by using Kubemark simulated\nenvironment, and submitting 50,000 pods), comparing to the K8s default scheduler."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Scheduler Throughput",src:n(238).default})),Object(i.b)("p",null,"The charts record the time spent until all pods are running on the cluster"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:"center"},"THROUGHPUT (pods/sec)"),Object(i.b)("th",{parentName:"tr",align:"center"},"THROUGHPUT (pods/sec)"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ENVIRONMENT (# nodes)"),Object(i.b)("td",{parentName:"tr",align:"center"},"Default Scheduler"),Object(i.b)("td",{parentName:"tr",align:"center"},"YuniKorn")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"2000"),Object(i.b)("td",{parentName:"tr",align:"center"},"263"),Object(i.b)("td",{parentName:"tr",align:"center"},"617")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"4000"),Object(i.b)("td",{parentName:"tr",align:"center"},"141"),Object(i.b)("td",{parentName:"tr",align:"center"},"373")))),Object(i.b)("h2",{id:"resource-fairness-between-queues"},"Resource Fairness between queues"),Object(i.b)("p",null,"Each of YuniKorn queues has its guaranteed and maximum capacity. When we have lots of jobs submitted to these queues,\nYuniKorn ensures each of them gets its fair share. When we monitor the resource usage of these queues, we can clearly\nsee how fairness was enforced:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Queue Fairness",src:n(239).default})),Object(i.b)("p",null,"We set up 4 heterogeneous queues on this cluster, and submit different workloads against these queues.\nFrom the chart, we can see the queue resources are increasing nearly in the same trend, which means the resource\nfairness across queues is honored."),Object(i.b)("h2",{id:"node-sorting-policies"},"Node sorting policies"),Object(i.b)("p",null,"There are 2 node sorting policies available in YuniKorn, with regarding the pod distributing flavors. One is ",Object(i.b)("em",{parentName:"p"},"FAIR"),",\nwhich tries best to evenly distribute pods to nodes; the other one is ",Object(i.b)("em",{parentName:"p"},"BIN-PACKING"),", which tries best to bin pack pods\nto less number of nodes. The former one is suitable for the Data Center scenarios, it helps to balance the stress of\ncluster nodes; the latter one is suitable to be used on Cloud, it can minimize the number of instances when working\nwith auto-scaler, in order to save cost."),Object(i.b)("h3",{id:"fair-policy"},"FAIR Policy"),Object(i.b)("p",null,"We group nodes into 10 buckets, each bucket represents for the number of nodes that has a similar resource\nutilization (a range).  To help you understand the chart, imagine the buckets have the following values at a certain\npoint of time:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"BUCKET"),Object(i.b)("th",{parentName:"tr",align:"center"},"RESOURCE UTILIZATION RANGE"),Object(i.b)("th",{parentName:"tr",align:"center"},"VALUE"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"bucket-0"),Object(i.b)("td",{parentName:"tr",align:"center"},"0% - 10%"),Object(i.b)("td",{parentName:"tr",align:"center"},"100")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"bucket-1"),Object(i.b)("td",{parentName:"tr",align:"center"},"10% - 20%"),Object(i.b)("td",{parentName:"tr",align:"center"},"300")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"..."),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"bucket-9"),Object(i.b)("td",{parentName:"tr",align:"center"},"90% - 100%"),Object(i.b)("td",{parentName:"tr",align:"center"},"0")))),Object(i.b)("p",null,"This means at the given time, this cluster has 100 nodes whose utilization is in the range 0% to 10%;\nit has 300 nodes whose utilization is in the range 10% - 20%, and so on\u2026 Now, we run lots of workloads and\ncollect metrics, see the below chart:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Node Fairness",src:n(240).default})),Object(i.b)("p",null,"We can see all nodes have 0% utilization, and then all of them move to bucket-1, then bucket-2 \u2026 and eventually\nall nodes moved to bucket-9, which means all capacity is used. In another word, nodes\u2019 resource has been used in\na fairness manner."),Object(i.b)("h3",{id:"bin-packing"},"BIN-PACKING"),Object(i.b)("p",null,"This is When the bin-packing policy is enabled, we can see the following pattern:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Node Bin-Packing",src:n(241).default})),Object(i.b)("p",null,"On the contrary, all nodes are moving between 2 buckets, bucket-0 and bucket-9. Nodes in bucket-0 (0% - 10%)\nare decreasing in a linear manner, and nodes in bucket-9 (90% - 100%) are increasing with the same curve.\nIn other words, node resources are being used up one by one."))}b.isMDXComponent=!0}}]);