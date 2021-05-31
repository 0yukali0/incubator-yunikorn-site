(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(203)),i=["components"],p={id:"pluggable_app_management",title:"Pluggable App Management"},c={unversionedId:"design/pluggable_app_management",id:"design/pluggable_app_management",isDocsHomePage:!1,title:"Pluggable App Management",description:"\x3c!--",source:"@site/docs/design/pluggable_app_management.md",slug:"/design/pluggable_app_management",permalink:"/docs/next/design/pluggable_app_management",version:"current",sidebar:"docs",previous:{title:"Namespace Resource Quota",permalink:"/docs/next/design/namespace_resource_quota"},next:{title:"Resilience",permalink:"/docs/next/design/resilience"}},s=[{value:"The Problem",id:"the-problem",children:[]},{value:"K8s Operator Pattern",id:"k8s-operator-pattern",children:[]},{value:"Design",id:"design",children:[]}],l={rightToc:s};function u(e){var t=e.components,p=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},l,p,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"the-problem"},"The Problem"),Object(o.b)("p",null,"Currently, we schedule and group an application is based on a label on the pod.\nThis generic way works for any type of workload. It does however give us a limited information on the lifecycle\nand application. On the K8s side, operators have been introduced to provide more detail on the application\nand help scheduling. We cannot use them currently and want to add that functionality."),Object(o.b)("h2",{id:"k8s-operator-pattern"},"K8s Operator Pattern"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"},"K8s operator"),"\nis a pattern in K8s to manage applications, it's a handy way to manage application's lifecycle out-of-box on K8s.\nYou define several CRDs and some controllers to monitor and mutate the state of the application based on the CRD definition."),Object(o.b)("p",null,"For example in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator"},"spark-k8s-operator"),",\nit defines a CRD called ",Object(o.b)("inlineCode",{parentName:"p"},"SparkApplication"),", the controller watches the events of add/update/delete of this CRD\nand trigger corresponding actions on event notifications. The ",Object(o.b)("inlineCode",{parentName:"p"},"SparkApplication")," looks like\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator/blob/master/examples/spark-pi.yaml"},"this example"),". There\nare a lot more popular operators, such as ",Object(o.b)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/flink-on-k8s-operator"},"flink-k8s-operator"),",\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/kubeflow/tf-operator"},"tf-operator"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kubeflow/pytorch-operator"},"pytorch-operator"),", etc. "),Object(o.b)("p",null,"Use Spark as an example. YuniKorn is able to schedule resources for all pods in K8s, that seamlessly supports Spark. It\nworks with ",Object(o.b)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html"},"native Spark on K8s"),", or\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator/blob/master/docs/design.md#architecture"},"spark on K8s with operator"),",\nyou'll find the difference from the design architecture chart from the given link. To support native Spark on K8s,\nYuniKorn reads pods' spec and group Spark pods by a label-selector, based on ",Object(o.b)("inlineCode",{parentName:"p"},"spark-app-selector"),".\nThe operator approach gives us more context about the Spark job, such as a better understanding about job state.\nBut all these info requires us to look at ",Object(o.b)("inlineCode",{parentName:"p"},"SparkApplication")," CRD, currently, there is no neat way to\nadd such functionality. That's why we need to design a flexible approach to support 3rd party operators\n(retrieving info from their CRDs), so we can easily integrate with other operators with small effort."),Object(o.b)("h2",{id:"design"},"Design"),Object(o.b)("p",null,"The key issue here is we need a app-management interface, that can be easily extended.\nIt needs to be decoupled with existing scheduling logic. For each operator, we create a service to manage this type app's lifecycle,\nand communicate with the scheduling cache independently. The high-level design looks like below:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Pluggable App Management",src:n(279).default})),Object(o.b)("p",null,"Where"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppManagementService")," is a composite set of services that can be managed together."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppManager")," is a specific app management service for a particular type of application. In each service, it has\naccess to K8s clients, such as informers, listers, in order to monitor CRD events. And it collects necessary info\nand talk with scheduler cache through ",Object(o.b)("inlineCode",{parentName:"li"},"AMProtocol"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"APIProvider")," encapsulate a set of useful APIs that can be shared, such as kube-client, pod/node/storage informers, etc.\nEach of such informers, it can be shared with multiple app managers, to avoid the overhead."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AMProtocol")," defines the basic interaction contract between app manager and the scheduler cache, that helps the cache\nto performs app lifecycle management without understanding what type of the application it is.")),Object(o.b)("p",null,"In the upon chart, the AppManagementService has 2 services, the ",Object(o.b)("em",{parentName:"p"},"general")," one is managing normal applications, that\nrecognizes applications by pod labels; the ",Object(o.b)("em",{parentName:"p"},"spark-k8s-operator")," one watches ",Object(o.b)("inlineCode",{parentName:"p"},"SparkApplication")," CRD and manage jobs'\nlifecycle defined by this CRD."))}u.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(h,p(p({ref:t},s),{},{components:n})):r.a.createElement(h,p({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},279:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pluggable-app-mgmt-2bf575c7d0093bd5087763ea9de41a11.jpg"}}]);