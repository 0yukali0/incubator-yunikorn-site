(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(203)),i=["components"],c={id:"core_features",title:"Features",keywords:["feature"]},s={unversionedId:"get_started/core_features",id:"version-0.10.0/get_started/core_features",isDocsHomePage:!1,title:"Features",description:"\x3c!--",source:"@site/versioned_docs/version-0.10.0/get_started/core_features.md",slug:"/get_started/core_features",permalink:"/docs/get_started/core_features",version:"0.10.0",sidebar:"version-0.10.0/docs",previous:{title:"Get Started",permalink:"/docs/"},next:{title:"Partition and Queue Configuration",permalink:"/docs/user_guide/queue_config"}},u=[{value:"Gang Scheduling",id:"gang-scheduling",children:[]},{value:"Application Tracking API and CRD Phase One",id:"application-tracking-api-and-crd-phase-one",children:[]}],p={rightToc:u};function l(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The main features of YuniKorn include:"),Object(o.b)("h2",{id:"gang-scheduling"},"Gang Scheduling"),Object(o.b)("p",null,"In this release, YuniKorn starts to support the Gang Scheduling. Users can apply Gang Scheduling for the applications requiring gang scheduling semantics, such as Spark, Tensorflow, Pytorch, etc. YuniKorn proactively reserves resources for gang scheduling applications, which can work more efficiently with cluster-autoscaler. The initial support has been well tested with Spark, and it can be used with the native Spark on K8s or the Spark K8s operator. For more information how to enable and use Gang Scheduling, please read the doc ",Object(o.b)("a",{parentName:"p",href:"/docs/user_guide/gang_scheduling"},"here"),"."),Object(o.b)("h2",{id:"application-tracking-api-and-crd-phase-one"},"Application Tracking API and CRD Phase One"),Object(o.b)("p",null,"This release introduces an application tracking API and K8s custom resource definition (CRD) to further improve the user experience. The CRD will be used by the app operator/job server to interact with YuniKorn, to provide a better app lifecycle management. The first phase has defined the common protocol messages and CRD object formats."))}l.isMDXComponent=!0},203:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,g=l["".concat(i,".").concat(f)]||l[f]||d[f]||o;return r?a.a.createElement(g,c(c({ref:t},u),{},{components:r})):a.a.createElement(g,c({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);