(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{152:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return d}));var n=t(2),i=t(6),c=(t(0),t(203)),o=["components"],a={id:"architecture",title:"Architecture"},s={unversionedId:"design/architecture",id:"version-0.10.0/design/architecture",isDocsHomePage:!1,title:"Architecture",description:"\x3c!--",source:"@site/versioned_docs/version-0.10.0/design/architecture.md",slug:"/design/architecture",permalink:"/docs/design/architecture",version:"0.10.0",sidebar:"version-0.10.0/docs",previous:{title:"Development in CodeReady Containers",permalink:"/docs/developer_guide/openshift_development"},next:{title:"Scheduler Core Design",permalink:"/docs/design/scheduler_core_design"}},u=[{value:"Architecture",id:"architecture",children:[]},{value:"Components",id:"components",children:[{value:"Scheduler interface",id:"scheduler-interface",children:[]},{value:"Scheduler core",id:"scheduler-core",children:[]},{value:"Kubernetes shim",id:"kubernetes-shim",children:[]}]}],l={rightToc:u};function d(e){var r=e.components,a=Object(i.a)(e,o);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Apache YuniKorn (Incubating) is a light-weight, universal resource scheduler for container orchestrator systems.\nIt is created to achieve fine-grained resource sharing for various workloads efficiently on a large scale, multi-tenant,\nand cloud-native environment. YuniKorn brings a unified, cross-platform, scheduling experience for mixed workloads that\nconsist of stateless batch workloads and stateful services."),Object(c.b)("p",null,"YuniKorn now supports K8s and can be deployed as a custom K8s scheduler. YuniKorn's architecture design also allows\nadding different shim layer and adopt to different ResourceManager implementation including Apache Hadoop YARN,\nor any other systems."),Object(c.b)("h2",{id:"architecture"},"Architecture"),Object(c.b)("p",null,"Following chart illustrates the high-level architecture of YuniKorn."),Object(c.b)("img",{src:t(303).default}),Object(c.b)("h2",{id:"components"},"Components"),Object(c.b)("h3",{id:"scheduler-interface"},"Scheduler interface"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"Scheduler interface")," is an abstract layer\nwhich resource management platform (like YARN/K8s) will speak with, via API like GRPC/programing language bindings."),Object(c.b)("h3",{id:"scheduler-core"},"Scheduler core"),Object(c.b)("p",null,"Scheduler core encapsulates all scheduling algorithms, it collects resources from underneath resource management\nplatforms (like YARN/K8s), and is responsible for container allocation requests. It makes the decision where is the\nbest spot for each request and then sends response allocations to the resource management platform.\nScheduler core is agnostic about underneath platforms, all the communications are through the ",Object(c.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"scheduler interface"),".\nPlease read more about the design of schedule core ",Object(c.b)("a",{parentName:"p",href:"/docs/design/scheduler_core_design"},"here"),"."),Object(c.b)("h3",{id:"kubernetes-shim"},"Kubernetes shim"),Object(c.b)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the ",Object(c.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"scheduler interface"),".\nPlease read more about the design of the Kubernetes shim ",Object(c.b)("a",{parentName:"p",href:"/docs/design/k8shim"},"here")))}d.isMDXComponent=!0},203:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),i=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),l=function(e){var r=i.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=l(e.components);return i.a.createElement(u.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},p=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=n,f=d["".concat(o,".").concat(p)]||d[p]||h[p]||c;return t?i.a.createElement(f,a(a({ref:r},u),{},{components:t})):i.a.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=p;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var u=2;u<c;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},303:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/architecture-333225e01d82300eb9ee34e76cf34697.png"}}]);