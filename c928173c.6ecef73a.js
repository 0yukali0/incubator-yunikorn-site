(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(203)),i=["components"],c={id:"deployment",title:"Deploy to Kubernetes"},l={unversionedId:"developer_guide/deployment",id:"version-0.10.0/developer_guide/deployment",isDocsHomePage:!1,title:"Deploy to Kubernetes",description:"\x3c!--",source:"@site/versioned_docs/version-0.10.0/developer_guide/deployment.md",slug:"/developer_guide/deployment",permalink:"/docs/developer_guide/deployment",version:"0.10.0",sidebar:"version-0.10.0/docs",previous:{title:"Build and Run",permalink:"/docs/developer_guide/build"},next:{title:"Development in CodeReady Containers",permalink:"/docs/developer_guide/openshift_development"}},u=[{value:"Build docker image",id:"build-docker-image",children:[]},{value:"Setup RBAC",id:"setup-rbac",children:[]},{value:"Create the ConfigMap",id:"create-the-configmap",children:[]},{value:"Attach ConfigMap to the Scheduler Pod",id:"attach-configmap-to-the-scheduler-pod",children:[]},{value:"Deploy the Scheduler",id:"deploy-the-scheduler",children:[]},{value:"Access to the web UI",id:"access-to-the-web-ui",children:[]},{value:"Configuration Hot Refresh",id:"configuration-hot-refresh",children:[]}],p={rightToc:u};function d(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The easiest way to deploy YuniKorn is to leverage our ",Object(a.b)("a",{parentName:"p",href:"https://hub.helm.sh/charts/yunikorn/yunikorn"},"helm charts"),",\nyou can find the guide ",Object(a.b)("a",{parentName:"p",href:"/docs/"},"here"),". This document describes the manual process to deploy YuniKorn\nscheduler and it is majorly for developers."),Object(a.b)("h2",{id:"build-docker-image"},"Build docker image"),Object(a.b)("p",null,"Under project root of the ",Object(a.b)("inlineCode",{parentName:"p"},"yunikorn-k8shim"),", run the command to build an image using the map for the configuration:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"make image\n")),Object(a.b)("p",null,"This command will build an image. The image will be tagged with a default version and image tag."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note")," the default build uses a hardcoded user and tag. You ",Object(a.b)("em",{parentName:"p"},"must")," update the ",Object(a.b)("inlineCode",{parentName:"p"},"IMAGE_TAG")," variable in the ",Object(a.b)("inlineCode",{parentName:"p"},"Makefile")," to push to an appropriate repository. "),Object(a.b)("h2",{id:"setup-rbac"},"Setup RBAC"),Object(a.b)("p",null,"The first step is to create the RBAC role for the scheduler, see ",Object(a.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/scheduler/yunikorn-rbac.yaml"},"yunikorn-rbac.yaml")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubectl create -f scheduler/yunikorn-rbac.yaml\n")),Object(a.b)("p",null,"The role is a requirement on the current versions of kubernetes."),Object(a.b)("h2",{id:"create-the-configmap"},"Create the ConfigMap"),Object(a.b)("p",null,"This must be done before deploying the scheduler. It requires a correctly setup kubernetes environment.\nThis kubernetes environment can be either local or remote. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"download configuration file if not available on the node to add to kubernetes:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -o queues.yaml https://raw.githubusercontent.com/apache/incubator-yunikorn-k8shim/master/conf/queues.yaml\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"create ConfigMap in kubernetes:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubectl create configmap yunikorn-configs --from-file=queues.yaml\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"check if the ConfigMap was created correctly:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubectl describe configmaps yunikorn-configs\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note")," if name of the ConfigMap is changed the volume in the scheduler yaml file must be updated to reference the new name otherwise the changes to the configuration will not be picked up. "),Object(a.b)("h2",{id:"attach-configmap-to-the-scheduler-pod"},"Attach ConfigMap to the Scheduler Pod"),Object(a.b)("p",null,"The ConfigMap is attached to the scheduler as a special volume. First step is to specify where to mount it in the pod:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"  volumeMounts:\n    - name: config-volume\n      mountPath: /etc/yunikorn/\n")),Object(a.b)("p",null,"Second step is to link the mount point back to the configuration map created in kubernetes:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"  volumes:\n    - name: config-volume\n      configMap:\n        name: yunikorn-configs\n")),Object(a.b)("p",null,"Both steps are part of the scheduler yaml file, an example can be seen at ",Object(a.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/scheduler/scheduler.yaml"},"scheduler.yaml"),"\nfor reference."),Object(a.b)("h2",{id:"deploy-the-scheduler"},"Deploy the Scheduler"),Object(a.b)("p",null,"The scheduler can be deployed with following command."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubectl create -f deployments/scheduler/scheduler.yaml\n")),Object(a.b)("p",null,"The deployment will run 2 containers from your pre-built docker images in 1 pod,"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"yunikorn-scheduler-core (yunikorn scheduler core and shim for K8s)"),Object(a.b)("li",{parentName:"ul"},"yunikorn-scheduler-web (web UI)")),Object(a.b)("p",null,"The pod is deployed as a customized scheduler, it will take the responsibility to schedule pods which explicitly specifies ",Object(a.b)("inlineCode",{parentName:"p"},"schedulerName: yunikorn")," in pod's spec. In addition to the ",Object(a.b)("inlineCode",{parentName:"p"},"schedulerName"),", you will also have to add a label ",Object(a.b)("inlineCode",{parentName:"p"},"applicationId")," to the pod."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"  metadata:\n    name: pod_example\n    labels:\n      applicationId: appID\n  spec:\n    schedulerName: yunikorn\n")),Object(a.b)("p",null,"Note: Admission controller abstracts the addition of ",Object(a.b)("inlineCode",{parentName:"p"},"schedulerName")," and ",Object(a.b)("inlineCode",{parentName:"p"},"applicationId")," from the user and hence, routes all traffic to YuniKorn. If you use helm chart to deploy, it will install admission controller along with the scheduler."),Object(a.b)("h2",{id:"access-to-the-web-ui"},"Access to the web UI"),Object(a.b)("p",null,"When the scheduler is deployed, the web UI is also deployed in a container.\nPort forwarding for the web interface on the standard ports can be turned on via:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'POD=`kubectl get pod -l app=yunikorn -o jsonpath="{.items[0].metadata.name}"` && \\\nkubectl port-forward ${POD} 9889 9080\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"9889")," is the default port for Web UI, ",Object(a.b)("inlineCode",{parentName:"p"},"9080")," is the default port of scheduler's Restful service where web UI retrieves info from.\nOnce this is done, web UI will be available at: http://localhost:9889."),Object(a.b)("h2",{id:"configuration-hot-refresh"},"Configuration Hot Refresh"),Object(a.b)("p",null,"YuniKorn supports to load configuration changes automatically from attached configmap. Simply update the content in the configmap,\nthat can be done either via Kubernetes dashboard UI or commandline. ",Object(a.b)("em",{parentName:"p"},"Note"),", changes made to the configmap might have some\ndelay to be picked up by the scheduler."))}d.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,h=d["".concat(i,".").concat(s)]||d[s]||b[s]||a;return n?o.a.createElement(h,c(c({ref:t},u),{},{components:n})):o.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);