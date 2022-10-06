"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3404],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11391:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"trouble_shooting",title:"Trouble Shooting"},s=void 0,c={unversionedId:"user_guide/trouble_shooting",id:"version-0.9.0/user_guide/trouble_shooting",title:"Trouble Shooting",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/user_guide/trouble_shooting.md",sourceDirName:"user_guide",slug:"/user_guide/trouble_shooting",permalink:"/zh-cn/docs/0.9.0/user_guide/trouble_shooting",draft:!1,tags:[],version:"0.9.0",frontMatter:{id:"trouble_shooting",title:"Trouble Shooting"},sidebar:"version-0.9.0/docs",previous:{title:"System",permalink:"/zh-cn/docs/0.9.0/api/system"},next:{title:"Dev Environment Setup",permalink:"/zh-cn/docs/0.9.0/developer_guide/env_setup"}},u={},p=[{value:"Scheduler logs",id:"scheduler-logs",level:2},{value:"Retrieve scheduler logs",id:"retrieve-scheduler-logs",level:3},{value:"Set Logging Level",id:"set-logging-level",level:3},{value:"Pods are stuck at Pending state",id:"pods-are-stuck-at-pending-state",level:2},{value:"1. Non of the nodes satisfy pod placement requirement",id:"1-non-of-the-nodes-satisfy-pod-placement-requirement",level:3},{value:"2. The queue is running out of capacity",id:"2-the-queue-is-running-out-of-capacity",level:3},{value:"Restart the scheduler",id:"restart-the-scheduler",level:2},{value:"Still got questions?",id:"still-got-questions",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"scheduler-logs"},"Scheduler logs"),(0,a.kt)("h3",{id:"retrieve-scheduler-logs"},"Retrieve scheduler logs"),(0,a.kt)("p",null,"Currently, the scheduler writes its logs to stdout/stderr, docker container handles the redirection of these logs to a\nlocal location on the underneath node, you can read more document ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/logging/configure/"},"here"),".\nThese logs can be retrieved by ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#logs"},"kubectl logs"),". Such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"// get the scheduler pod\nkubectl get pod -l component=yunikorn-scheduler -n yunikorn\nNAME                                  READY   STATUS    RESTARTS   AGE\nyunikorn-scheduler-766d7d6cdd-44b82   2/2     Running   0          33h\n\n// retrieve logs\nkubectl logs yunikorn-scheduler-766d7d6cdd-44b82 yunikorn-scheduler-k8s -n yunikorn\n")),(0,a.kt)("p",null,"In most cases, this command cannot get all logs because the scheduler is rolling logs very fast. To retrieve more logs in\nthe past, you will need to setup the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/#cluster-level-logging-architectures"},"cluster level logging"),".\nThe recommended setup is to leverage ",(0,a.kt)("a",{parentName:"p",href:"https://www.fluentd.org/"},"fluentd")," to collect and persistent logs on an external storage, e.g s3. "),(0,a.kt)("h3",{id:"set-logging-level"},"Set Logging Level"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Changing the logging level requires a restart of the scheduler pod.")),(0,a.kt)("p",null,"Stop the scheduler:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=0\n")),(0,a.kt)("p",null,"edit the deployment config in vim:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl edit deployment yunikorn-scheduler -n yunikorn\n")),(0,a.kt)("p",null,"add ",(0,a.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," field of the container template. For example setting ",(0,a.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," sets the logging\nlevel to ",(0,a.kt)("inlineCode",{parentName:"p"},"INFO"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n ...\nspec:\n  template: \n   ...\n    spec:\n      containers:\n      - env:\n        - name: LOG_LEVEL\n          value: '0'\n")),(0,a.kt)("p",null,"Start the scheduler:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=1\n")),(0,a.kt)("p",null,"Available logging levels:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Value"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Logging Level"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"DEBUG")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"INFO")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"WARN")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ERROR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"3"),(0,a.kt)("td",{parentName:"tr",align:"center"},"DPanic")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Panic")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"5"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Fatal")))),(0,a.kt)("h2",{id:"pods-are-stuck-at-pending-state"},"Pods are stuck at Pending state"),(0,a.kt)("p",null,"If some pods are stuck at Pending state, that means the scheduler could not find a node to allocate the pod. There are\nseveral possibilities to cause this:"),(0,a.kt)("h3",{id:"1-non-of-the-nodes-satisfy-pod-placement-requirement"},"1. Non of the nodes satisfy pod placement requirement"),(0,a.kt)("p",null,"A pod can be configured with some placement constraints, such as ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector"},"node-selector"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity"},"affinity/anti-affinity"),",\ndo not have certain toleration for node ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"},"taints"),", etc.\nTo debug such issues, you can describe the pod by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl describe pod <pod-name> -n <namespace>\n")),(0,a.kt)("p",null,"the pod events will contain the predicate failures and that explains why nodes are not qualified for allocation."),(0,a.kt)("h3",{id:"2-the-queue-is-running-out-of-capacity"},"2. The queue is running out of capacity"),(0,a.kt)("p",null,"If the queue is running out of capacity, pods will be pending for available queue resources. To check if a queue is still\nhaving enough capacity for the pending pods, there are several approaches:"),(0,a.kt)("p",null,"1) check the queue usage from yunikorn UI"),(0,a.kt)("p",null,"If you do not know how to access the UI, you can refer the document ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/0.9.0/#access-the-web-ui"},"here"),". Go\nto the ",(0,a.kt)("inlineCode",{parentName:"p"},"Queues")," page, navigate to the queue where this job is submitted to. You will be able to see the available capacity\nleft for the queue."),(0,a.kt)("p",null,"2) check the pod events"),(0,a.kt)("p",null,"Run the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl describe pod")," to get the pod events. If you see some event like:\n",(0,a.kt)("inlineCode",{parentName:"p"},"Application <appID> does not fit into <queuePath> queue"),". That means the pod could not get allocated because the queue\nis running out of capacity."),(0,a.kt)("p",null,"The pod will be allocated if some other pods in this queue is completed or removed. If the pod remains pending even\nthe queue has capacity, that may because it is waiting for the cluster to scale up."),(0,a.kt)("h2",{id:"restart-the-scheduler"},"Restart the scheduler"),(0,a.kt)("p",null,"YuniKorn can recover its state upon a restart. YuniKorn scheduler pod is deployed as a deployment, restart the scheduler\ncan be done by scale down and up the replica:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=0\nkubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=1\n")),(0,a.kt)("h2",{id:"still-got-questions"},"Still got questions?"),(0,a.kt)("p",null,"No problem! The Apache YuniKorn community will be happy to help. You can reach out to the community with the following options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Post your questions to ",(0,a.kt)("a",{parentName:"li",href:"mailto:dev@yunikorn.apache.org"},"dev@yunikorn.apache.org")),(0,a.kt)("li",{parentName:"ol"},"Join the ",(0,a.kt)("a",{parentName:"li",href:"https://join.slack.com/t/yunikornworkspace/shared_invite/enQtNzAzMjY0OTI4MjYzLTBmMDdkYTAwNDMwNTE3NWVjZWE1OTczMWE4NDI2Yzg3MmEyZjUyYTZlMDE5M2U4ZjZhNmYyNGFmYjY4ZGYyMGE"},"YuniKorn slack channel")," and post your questions to the ",(0,a.kt)("inlineCode",{parentName:"li"},"#yunikorn-user")," channel."),(0,a.kt)("li",{parentName:"ol"},"Join the ",(0,a.kt)("a",{parentName:"li",href:"http://yunikorn.apache.org/community/getInvolved#community-meetings"},"community sync up meetings")," and directly talk to the community members.")))}h.isMDXComponent=!0}}]);