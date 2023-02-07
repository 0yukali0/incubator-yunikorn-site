"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9457],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69715:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),i=["components"],u={id:"resource_quota_management",title:"Resource Quota Management"},s=void 0,l={unversionedId:"user_guide/resource_quota_management",id:"version-0.9.0/user_guide/resource_quota_management",title:"Resource Quota Management",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/user_guide/resource_quota_mgmt.md",sourceDirName:"user_guide",slug:"/user_guide/resource_quota_management",permalink:"/docs/0.9.0/user_guide/resource_quota_management",draft:!1,tags:[],version:"0.9.0",frontMatter:{id:"resource_quota_management",title:"Resource Quota Management"},sidebar:"version-0.9.0/docs",previous:{title:"ACLs",permalink:"/docs/0.9.0/user_guide/acls"},next:{title:"Run Spark Jobs",permalink:"/docs/0.9.0/user_guide/workloads/run_spark"}},c={},p=[{value:"Option 1) Static queues",id:"option-1-static-queues",level:2},{value:"Goal",id:"goal",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Run workloads",id:"run-workloads",level:3},{value:"Option 2) 1:1 mapping from namespaces to queues",id:"option-2-11-mapping-from-namespaces-to-queues",level:2},{value:"Goal",id:"goal-1",level:3},{value:"Configuration",id:"configuration-1",level:3},{value:"Set up namespaces",id:"set-up-namespaces",level:3},{value:"Run workloads",id:"run-workloads-1",level:3}],m={toc:p},d="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"YuniKorn can offer more fine-grained resource quota management comparing to simply\nusing namespace resource quota. Here are some how-to documents about setting up\nresource quota management with YuniKorn queues."),(0,r.kt)("h2",{id:"option-1-static-queues"},"Option 1) Static queues"),(0,r.kt)("h3",{id:"goal"},"Goal"),(0,r.kt)("p",null,"Pre-setup a hierarchy of queues with min/max capacity, users can only submit\njobs to the leaf queues. This approach fully manages the resource capacity for\neach of the queues, which is suitable to the scenarios that queues do not change\ntoo often."),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The following configuration is an example to demonstrate the format,\nyou need to setup the queue hierarchy based on your own structure and capacity,")),(0,r.kt)("p",null,"Apply the following configuration to YuniKorn's configmap:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  -\n    name: default\n    queues:\n      -\n        name: root\n        submitacl: '*'\n        queues:\n          -\n            name: advertisement\n            resources:\n              guaranteed:\n                memory: 500000\n                vcore: 50000\n              max:\n                memory: 800000\n                vcore: 80000\n          -\n            name: search\n            resources:\n              guaranteed:\n                memory: 400000\n                vcore: 40000\n              max:\n                memory: 600000\n                vcore: 60000\n          -\n            name: sandbox\n            resources:\n              guaranteed:\n                memory: 100000\n                vcore: 10000\n              max:\n                memory: 100000\n                vcore: 10000\n")),(0,r.kt)("p",null,"in this example, we are going to setup 3 queues under root, and each of them has\na specific min/max capacity set up."),(0,r.kt)("h3",{id:"run-workloads"},"Run workloads"),(0,r.kt)("p",null,"In order to run jobs in specific queues, you will need to set the following label in all pods' spec:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'labels:\n  app: my-test-app\n  applicationId: " my-test-app-01"\n  queue: root.sandbox\n')),(0,r.kt)("h2",{id:"option-2-11-mapping-from-namespaces-to-queues"},"Option 2) 1:1 mapping from namespaces to queues"),(0,r.kt)("h3",{id:"goal-1"},"Goal"),(0,r.kt)("p",null,"User just needs to setup namespaces, YuniKorn automatically maps each namespace to an internal resource queue (AKA dynamical queue).\nThere is no additional steps to create YuniKorn queues, all queues will be created dynamically,\nresource allocation and quotas will be managed by YuniKorn instead of the namespace resource quota."),(0,r.kt)("h3",{id:"configuration-1"},"Configuration"),(0,r.kt)("p",null,"Apply the following configuration to YuniKorn's configmap:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  -\n    name: default\n    placementrules:\n      - name: tag\n        value: namespace\n        create: true\n    queues:\n      - name: root\n        submitacl: '*'\n        properties:\n          application.sort.policy: stateaware\n\n")),(0,r.kt)("p",null,"Note, the property ",(0,r.kt)("inlineCode",{parentName:"p"},"application.sort.policy")," in this configuration is set to\n",(0,r.kt)("inlineCode",{parentName:"p"},"stateaware"),". This is a simple app sorting policy applicable for batch jobs, you\ncan find more document ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.9.0/user_guide/sorting_policies#StateAwarePolicy"},"here"),"."),(0,r.kt)("p",null,"You can do this during the installation by overwriting the configuration in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-release/blob/724ec82d0d548598e170cc6d5ca6aaae00f8286c/helm-charts/yunikorn/values.yaml#L71-L81"},"helm chart template"),"."),(0,r.kt)("h3",{id:"set-up-namespaces"},"Set up namespaces"),(0,r.kt)("p",null,"Continue to create namespaces like before, do not create namespace quota anymore.\nInstead, set the following annotation in the namespace object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'yunikorn.apache.org/namespace.max.cpu: "64"\nyunikorn.apache.org/namespace.max.memory: "100Gi"\n')),(0,r.kt)("p",null,"YuniKorn will parse the annotation and set the max capacity of the dynamical queue\nthat mapped to this namespace to 64 CPU and 100GB memory."),(0,r.kt)("h3",{id:"run-workloads-1"},"Run workloads"),(0,r.kt)("p",null,"Jobs continue to be submitted to namespaces, based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Placementrule")," used\nin the configuration. YuniKorn will automatically run the job and all its pods in\nthe corresponding queue. For example, if a job is submitted to namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"development"),",\nthen you will see the job is running in ",(0,r.kt)("inlineCode",{parentName:"p"},"root.development")," queue."))}f.isMDXComponent=!0}}]);