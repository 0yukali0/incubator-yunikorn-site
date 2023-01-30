"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7137],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||l[d]||s;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[m]="string"==typeof e?e:r,o[1]=u;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10546:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],u={id:"namespace_resource_quota",title:"Namespace Resource Quota"},i=void 0,p={unversionedId:"design/namespace_resource_quota",id:"version-0.12.1/design/namespace_resource_quota",title:"Namespace Resource Quota",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.1/design/namespace_resource_quota.md",sourceDirName:"design",slug:"/design/namespace_resource_quota",permalink:"/docs/0.12.1/design/namespace_resource_quota",draft:!1,tags:[],version:"0.12.1",frontMatter:{id:"namespace_resource_quota",title:"Namespace Resource Quota"},sidebar:"version-0.12.1/docs",previous:{title:"Cross Queue Preemption",permalink:"/docs/0.12.1/design/cross_queue_preemption"},next:{title:"Pluggable App Management",permalink:"/docs/0.12.1/design/pluggable_app_management"}},c={},m=[{value:"Best practice",id:"best-practice",level:2},{value:"1. Setup namespace",id:"1-setup-namespace",level:3},{value:"2. Setup YuniKorn queues",id:"2-setup-yunikorn-queues",level:3},{value:"3. Mapping applications to queues &amp; namespace",id:"3-mapping-applications-to-queues--namespace",level:3},{value:"Future Work",id:"future-work",level:2}],l={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In K8s, user can setup namespace with ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"resource quotas")," to limit aggregated resource consumption in this namespace. The validation of namespace resource quotas is handled in api-server directly, therefore YuniKorn simply honors the quotas like the default scheduler."),(0,s.kt)("h2",{id:"best-practice"},"Best practice"),(0,s.kt)("p",null,"It is not mandatory to setup YuniKorn queues with respect of namespaces.\nHowever, in practice, it makes more sense to do so.\nNamespace is often used to set a cap for resource consumptions per user-group/team,\nYuniKorn queue is also meant to divide cluster resource into multiple groups.\nLet's go through an example."),(0,s.kt)("h3",{id:"1-setup-namespace"},"1. Setup namespace"),(0,s.kt)("p",null,"Namespace: ",(0,s.kt)("inlineCode",{parentName:"p"},"advertisement"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: advertisement\nspec:\n  hard:\n    requests.cpu: "200m"\n    requests.memory: 2000Mi\n    limits.cpu: "200m"\n    limits.memory: 4000Mi\n')),(0,s.kt)("p",null,"Create the namespace"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl create namespace advertisement\nkubectl create -f ./advertisement.yaml --namespace=advertisement\nkubectl get quota --namespace=advertisement\nkubectl describe quota advertisement --namespace=advertisement\n\n// output\nName:            advertisement\nNamespace:       advertisement\nResource         Used  Hard\n--------         ----  ----\nlimits.cpu       0     200m\nlimits.memory    0     4000Mi\nrequests.cpu     0     200m\nrequests.memory  0     2000Mi\n")),(0,s.kt)("h3",{id:"2-setup-yunikorn-queues"},"2. Setup YuniKorn queues"),(0,s.kt)("p",null,"Queue: ",(0,s.kt)("inlineCode",{parentName:"p"},"advertisement"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"name: advertisement\nresources:\n  guaranteed:\n    vcore: 100\n    memory: 1000\n  max:\n    vcore: 200\n    memory: 2000\n")),(0,s.kt)("p",null,"ensure ",(0,s.kt)("inlineCode",{parentName:"p"},"QueueMaxResource <= NamespaceResourceQuotaRequests")),(0,s.kt)("h3",{id:"3-mapping-applications-to-queues--namespace"},"3. Mapping applications to queues & namespace"),(0,s.kt)("p",null,"In a pod spec"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  namespace: advertisement\n  labels:\n    app: sleep\n    applicationId: "application_2019_01_22_00001"\n    queue: "root.advertisement"\n  name: task0\nspec:\n  schedulerName: yunikorn\n  containers:\n    - name: sleep-5s\n      image: "alpine:latest"\n      command: ["/bin/ash", "-ec", "while :; do echo \'.\'; sleep 5 ; done"]\n      resources:\n        requests:\n          cpu: "50m"\n          memory: "800M"\n        limits:\n          cpu: "100m"\n          memory: "1000M"\n')),(0,s.kt)("p",null,"Check Quota"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl describe quota advertisement --namespace=advertisement\n\nName:            advertisement\nNamespace:       advertisement\nResource         Used  Hard\n--------         ----  ----\nlimits.cpu       100m  200m\nlimits.memory    1G    4000Mi\nrequests.cpu     50m   200m\nrequests.memory  800M  2000Mi\n")),(0,s.kt)("p",null,"Now submit another application,"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  namespace: advertisement\n  labels:\n    app: sleep\n    applicationId: "application_2019_01_22_00002"\n    queue: "root.advertisement"\n  name: task1\nspec:\n  schedulerName: yunikorn\n  containers:\n    - name: sleep-5s\n      image: "alpine:latest"\n      command: ["/bin/ash", "-ec", "while :; do echo \'.\'; sleep 5 ; done"]\n      resources:\n        requests:\n          cpu: "200m"\n          memory: "800M"\n        limits:\n          cpu: "200m"\n          memory: "1000M"\n')),(0,s.kt)("p",null,"pod will not be able to submitted to api-server, because the requested cpu ",(0,s.kt)("inlineCode",{parentName:"p"},"200m")," + used cpu ",(0,s.kt)("inlineCode",{parentName:"p"},"100m")," = ",(0,s.kt)("inlineCode",{parentName:"p"},"300m")," which exceeds the resource quota."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'kubectl create -f pod_ns_adv_task1.yaml\nError from server (Forbidden): error when creating "pod_ns_adv_task1.yaml": pods "task1" is forbidden: exceeded quota: advertisement, requested: limits.cpu=200m,requests.cpu=200m, used: limits.cpu=100m,requests.cpu=50m, limited: limits.cpu=200m,requests.cpu=200m\n')),(0,s.kt)("h2",{id:"future-work"},"Future Work"),(0,s.kt)("p",null,"For compatibility, we should respect namespaces and resource quotas.\nResource quota is overlapped with queue configuration in many ways,\nfor example the ",(0,s.kt)("inlineCode",{parentName:"p"},"requests")," quota is just like queue's max resource. However,\nthere are still a few features resource quota can do but queue cannot, such as"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Resource ",(0,s.kt)("inlineCode",{parentName:"li"},"limits"),". The aggregated resource from all pods in a namespace cannot exceed this limit."),(0,s.kt)("li",{parentName:"ol"},"Storage Resource Quota, e.g storage size, PVC number, etc."),(0,s.kt)("li",{parentName:"ol"},"Object Count Quotas, e.g count of PVCs, services, configmaps, etc."),(0,s.kt)("li",{parentName:"ol"},"Resource Quota can map to priority class.")),(0,s.kt)("p",null,"Probably we can build something similar to cover (3) in this list.\nBut it would be hard to completely support all these cases."),(0,s.kt)("p",null,"But currently, setting applications mapping to a queue as well as a corresponding namespace is over complex.\nSome future improvements might be:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Automatically detects namespaces in k8s-shim and map them to queues. Behind the scenes, we automatically generates queue configuration based on namespace definition. Generated queues are attached under root queue."),(0,s.kt)("li",{parentName:"ol"},"When new namespace added/updated/removed, similarly to (1), we automatically update queues."),(0,s.kt)("li",{parentName:"ol"},"User can add more configuration to queues, e.g add queue ACL, add child queues on the generated queues."),(0,s.kt)("li",{parentName:"ol"},"Applications submitted to namespaces are transparently submitted to corresponding queues.")))}d.isMDXComponent=!0}}]);