"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4047],{36604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(13274),o=n(1780);const r={id:"pluggable_app_management",title:"Pluggable App Management"},s=void 0,i={id:"design/pluggable_app_management",title:"Pluggable App Management",description:"\x3c!--",source:"@site/versioned_docs/version-1.3.0/design/pluggable_app_management.md",sourceDirName:"design",slug:"/design/pluggable_app_management",permalink:"/docs/1.3.0/design/pluggable_app_management",draft:!1,unlisted:!1,tags:[],version:"1.3.0",frontMatter:{id:"pluggable_app_management",title:"Pluggable App Management"},sidebar:"docs",previous:{title:"Generic Resource Types in Namespace Quota",permalink:"/docs/1.3.0/design/generic_resource"},next:{title:"Priority Scheduling",permalink:"/docs/1.3.0/design/priority_scheduling"}},l={},c=[{value:"The Problem",id:"the-problem",level:2},{value:"K8s Operator Pattern",id:"k8s-operator-pattern",level:2},{value:"Design",id:"design",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"the-problem",children:"The Problem"}),"\n",(0,a.jsx)(t.p,{children:"Currently, we schedule and group an application is based on a label on the pod.\nThis generic way works for any type of workload. It does however give us a limited information on the lifecycle\nand application. On the K8s side, operators have been introduced to provide more detail on the application\nand help scheduling. We cannot use them currently and want to add that functionality."}),"\n",(0,a.jsx)(t.h2,{id:"k8s-operator-pattern",children:"K8s Operator Pattern"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/",children:"K8s operator"}),"\nis a pattern in K8s to manage applications, it's a handy way to manage application's lifecycle out-of-box on K8s.\nYou define several CRDs and some controllers to monitor and mutate the state of the application based on the CRD definition."]}),"\n",(0,a.jsxs)(t.p,{children:["For example in ",(0,a.jsx)(t.a,{href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator",children:"spark-k8s-operator"}),",\nit defines a CRD called ",(0,a.jsx)(t.code,{children:"SparkApplication"}),", the controller watches the events of add/update/delete of this CRD\nand trigger corresponding actions on event notifications. The ",(0,a.jsx)(t.code,{children:"SparkApplication"})," looks like\n",(0,a.jsx)(t.a,{href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator/blob/master/examples/spark-pi.yaml",children:"this example"}),". There\nare a lot more popular operators, such as ",(0,a.jsx)(t.a,{href:"https://github.com/GoogleCloudPlatform/flink-on-k8s-operator",children:"flink-k8s-operator"}),",\n",(0,a.jsx)(t.a,{href:"https://github.com/kubeflow/tf-operator",children:"tf-operator"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/kubeflow/pytorch-operator",children:"pytorch-operator"}),", etc."]}),"\n",(0,a.jsxs)(t.p,{children:["Use Spark as an example. YuniKorn is able to schedule resources for all pods in K8s, that seamlessly supports Spark. It\nworks with ",(0,a.jsx)(t.a,{href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html",children:"native Spark on K8s"}),", or\n",(0,a.jsx)(t.a,{href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator/blob/master/docs/design.md#architecture",children:"spark on K8s with operator"}),",\nyou'll find the difference from the design architecture chart from the given link. To support native Spark on K8s,\nYuniKorn reads pods' spec and group Spark pods by a label-selector, based on ",(0,a.jsx)(t.code,{children:"spark-app-selector"}),".\nThe operator approach gives us more context about the Spark job, such as a better understanding about job state.\nBut all these info requires us to look at ",(0,a.jsx)(t.code,{children:"SparkApplication"})," CRD, currently, there is no neat way to\nadd such functionality. That's why we need to design a flexible approach to support 3rd party operators\n(retrieving info from their CRDs), so we can easily integrate with other operators with small effort."]}),"\n",(0,a.jsx)(t.h2,{id:"design",children:"Design"}),"\n",(0,a.jsx)(t.p,{children:"The key issue here is we need a app-management interface, that can be easily extended.\nIt needs to be decoupled with existing scheduling logic. For each operator, we create a service to manage this type app's lifecycle,\nand communicate with the scheduling cache independently. The high-level design looks like below:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Pluggable App Management",src:n(51002).A+"",width:"1416",height:"705"})}),"\n",(0,a.jsx)(t.p,{children:"Where"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"AppManagementService"})," is a composite set of services that can be managed together."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"AppManager"})," is a specific app management service for a particular type of application. In each service, it has\naccess to K8s clients, such as informers, listers, in order to monitor CRD events. And it collects necessary info\nand talk with scheduler cache through ",(0,a.jsx)(t.code,{children:"AMProtocol"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"APIProvider"})," encapsulate a set of useful APIs that can be shared, such as kube-client, pod/node/storage informers, etc.\nEach of such informers, it can be shared with multiple app managers, to avoid the overhead."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"AMProtocol"})," defines the basic interaction contract between app manager and the scheduler cache, that helps the cache\nto performs app lifecycle management without understanding what type of the application it is."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In the upon chart, the AppManagementService has 2 services, the ",(0,a.jsx)(t.em,{children:"general"})," one is managing normal applications, that\nrecognizes applications by pod labels; the ",(0,a.jsx)(t.em,{children:"spark-k8s-operator"})," one watches ",(0,a.jsx)(t.code,{children:"SparkApplication"})," CRD and manage jobs'\nlifecycle defined by this CRD."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},51002:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/pluggable-app-mgmt-2bf575c7d0093bd5087763ea9de41a11.jpg"},1780:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(79474);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);