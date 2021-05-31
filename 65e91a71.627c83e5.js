(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return h}));var r=n(2),o=n(6),a=(n(0),n(203)),i=["components"],s={id:"rn-0.9.0",title:"Release Announcement v0.9.0"},c={type:"mdx",permalink:"/release-announce/0.9.0",source:"@site/src/pages/release-announce/0.9.0.md"},u=[{value:"Overview",id:"overview",children:[]},{value:"Highlights",id:"highlights",children:[{value:"Resource Quota Management",id:"resource-quota-management",children:[]},{value:"Job Ordering Policy: StateAware (optimized FIFO)",id:"job-ordering-policy-stateaware-optimized-fifo",children:[]},{value:"Improvements for Auto-scaling",id:"improvements-for-auto-scaling",children:[]},{value:"Event Cache System",id:"event-cache-system",children:[]},{value:"More Comprehensive Web UI",id:"more-comprehensive-web-ui",children:[]}]},{value:"Community",id:"community",children:[]}],l={rightToc:u};function h(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"release-announcement-v090"},"Release Announcement v0.9.0"),Object(a.b)("p",null,"It gives us great pleasure to announce that the Apache YuniKorn (Incubating) community has voted to release 0.9.0. This is the 2nd release as an Apache Incubator project."),Object(a.b)("p",null,"Apache YuniKorn (Incubating) is a standalone resource scheduler, designed for managing, and scheduling Big Data workloads on the container orchestration framework for on-prem and on-cloud use cases.",Object(a.b)("br",{parentName:"p"}),"\n","This release has further improved the capabilities of resource scheduling and management on Kubernetes, along with some optimizations for running Apache Spark, Apache Flink workloads."),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"The Apache YuniKorn (Incubating) community has fixed over 130 JIRAs in this release: ",Object(a.b)("a",{parentName:"p",href:"https://issues.apache.org/jira/issues/?filter=12348947"},"YuniKorn jiras fixed in 0.9.0")),Object(a.b)("p",null,"Release manager: Wilfred Spiegelenburg"),Object(a.b)("p",null,"Release date: 2020-08-28"),Object(a.b)("h2",{id:"highlights"},"Highlights"),Object(a.b)("h3",{id:"resource-quota-management"},"Resource Quota Management"),Object(a.b)("p",null,"This version YuniKorn provides a seamless way to manage resource quota for a Kubernetes cluster, it can work as an alternative to the ",Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"namespace resource quota"),".",Object(a.b)("br",{parentName:"p"}),"\n","There are 2 main advantages of using this feature comparing to the namespace resource quota:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The namespace resource quota is counting resources at the admission phase, irrespective of whether the pod is using the resources or not. This can lead up to issues that the namespace resources could not be efficiently used."),Object(a.b)("li",{parentName:"ol"},"The namespace resource quota is flat, it doesn't support hierarchy resource quota management.")),Object(a.b)("p",null,"The resource quota admission controller rejects the pods if it could cause the namespace to exceed its quota, this increases the complexity of the client side code.",Object(a.b)("br",{parentName:"p"}),"\n","By using the resource quota management provided by YuniKorn, it is more efficient, seamlessly setup and it provides the job queue to handle common scheduling ordering requirements."),Object(a.b)("h3",{id:"job-ordering-policy-stateaware-optimized-fifo"},"Job Ordering Policy: StateAware (optimized FIFO)"),Object(a.b)("p",null,"The StateAware app sorting policy orders jobs in a queue in FIFO order, and schedules them one by one on conditions. The condition is to wait for the application to enter a runnable state. This avoids the common race condition while submitting lots of batch jobs, e.g Spark, to a single namespace (or cluster). By enforcing the certain ordering of jobs, it also improves the scheduling of jobs to be more predictable. More explanation of this feature can be found in doc here."),Object(a.b)("h3",{id:"improvements-for-auto-scaling"},"Improvements for Auto-scaling"),Object(a.b)("p",null,"In this release, YuniKorn has been tested heavily to work nicely with the Kubernetes cluster-autoscaler. It brings the maximum elasticity to the Kubernetes cluster by working efficiently with the cluster-autoscaler. Some bugs are fixed and some improvements are done in this release."),Object(a.b)("h3",{id:"event-cache-system"},"Event Cache System"),Object(a.b)("p",null,"In this release, an efficient event cache system is added into the scheduler. This system caches some key scheduling events in a memory store and publishes them to the Kubernetes event system when needed. More scheduling events are visible directly from Kubernetes by using kubectl command. This helps to improve the usability and debuggability a lot."),Object(a.b)("h3",{id:"more-comprehensive-web-ui"},"More Comprehensive Web UI"),Object(a.b)("p",null,'YuniKorn UI provides a better centralized view for resource management. A new "nodes" page has been added to the UI, to display the detailed nodes info in the cluster.',Object(a.b)("br",{parentName:"p"}),"\n","The apps page has been enhanced, it now provides a search box to search apps by queue name or application ID."),Object(a.b)("h2",{id:"community"},"Community"),Object(a.b)("p",null,"The Apache YuniKorn community is pleased to welcome a new committer Gao Li. We would love to see more committers joining the community and help to shape the project. In the past few months, we continue to have bi-weekly community meetings in 2 different time zones. Thanks for all the community folks who joined these meetings and provided feedback and valuable ideas."),Object(a.b)("p",null,"Thanks to the following contributors who directly contributed code to the project: Adam Antal, Akhil Puthenveettil Balan, Ayub Khan Pathan, Kinga Marton, Manikandan R, Sunil Govindan, Tao Yang, Tingyao Huang, Tim Rots, Wangda Tan, Wanqiang Ji, Weiwei Yang, Wilfred Spiegelenburg."))}h.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(n),d=r,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||a;return n?o.a.createElement(m,s(s({ref:t},u),{},{components:n})):o.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);