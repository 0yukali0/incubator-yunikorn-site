"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17369],{3230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(13274),s=n(1780);const i={id:"evaluate_perf_function_with_kubemark",title:"Evaluate YuniKorn Performance with Kubemark",keywords:["performance","throughput"]},o=void 0,a={id:"performance/evaluate_perf_function_with_kubemark",title:"Evaluate YuniKorn Performance with Kubemark",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/performance/evaluate_perf_function_with_kubemark.md",sourceDirName:"performance",slug:"/performance/evaluate_perf_function_with_kubemark",permalink:"/docs/1.0.0/performance/evaluate_perf_function_with_kubemark",draft:!1,unlisted:!1,tags:[],version:"1.0.0",frontMatter:{id:"evaluate_perf_function_with_kubemark",title:"Evaluate YuniKorn Performance with Kubemark",keywords:["performance","throughput"]},sidebar:"docs",previous:{title:"K8s Scheduler Plugin",permalink:"/docs/1.0.0/design/scheduler_plugin"},next:{title:"Benchmarking Tutorial",permalink:"/docs/1.0.0/performance/performance_tutorial"}},c={},l=[{value:"Environment setup",id:"environment-setup",level:2},{value:"Scheduler Throughput",id:"scheduler-throughput",level:2},{value:"Performance Analysis",id:"performance-analysis",level:2},{value:"K8s Limitation",id:"k8s-limitation",level:3},{value:"Node Sorting",id:"node-sorting",level:3},{value:"Per Node Precondition Checks",id:"per-node-precondition-checks",level:3},{value:"Why YuniKorn is faster?",id:"why-yunikorn-is-faster",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The YuniKorn community concerns about the scheduler\u2019s performance and continues to optimize it over the releases. The community has developed some tools in order to test and tune the performance repeatedly."}),"\n",(0,r.jsx)(t.h2,{id:"environment-setup",children:"Environment setup"}),"\n",(0,r.jsxs)(t.p,{children:["We leverage ",(0,r.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/blob/release-1.3/docs/devel/kubemark-guide.md#starting-a-kubemark-cluster",children:"Kubemark"})," to evaluate scheduler\u2019s performance. Kubemark is a testing tool that simulates large scale clusters. It create hollow nodes which runs hollow kubelet to pretend original kubelet behavior. Scheduled pods on these hollow nodes won\u2019t actually execute. It is able to create a big cluster that meets our experiment requirement that reveals the yunikorn scheduler performance. Please see the ",(0,r.jsx)(t.a,{href:"/docs/1.0.0/performance/performance_tutorial",children:"detail steps"})," about how to setup the environment."]}),"\n",(0,r.jsx)(t.h2,{id:"scheduler-throughput",children:"Scheduler Throughput"}),"\n",(0,r.jsxs)(t.p,{children:["We have designed some simple benchmarking scenarios on a simulated large scale environment in order to evaluate the scheduler performance. Our tools measure the ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Throughput",children:"throughput"})," and use these key metrics to evaluate the performance. In a nutshull, scheduler throughput is the rate of processing pods from discovering them on the cluster to allocating them to nodes."]}),"\n",(0,r.jsxs)(t.p,{children:["In this experiment, we setup a simulated 2000/4000 nodes cluster with ",(0,r.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/blob/release-1.3/docs/devel/kubemark-guide.md#starting-a-kubemark-cluster",children:"Kubemark"}),". Then we launch 10 ",(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",children:"deployments"}),", with setting replicas to 5000 in each deployment respectively. This simulates large scale workloads submitting to the K8s cluster simultaneously. Our tool periodically monitors and checks pods status, counting the number of started pods based on ",(0,r.jsx)(t.code,{children:"podSpec.StartTime"})," as time elapses. As a comparison, we apply the same experiment to the default scheduler in the same environment. And we see the YuniKorn performance advantage over the default scheduler as illustrated below:"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Scheduler Throughput",src:n(49795).A+"",width:"1920",height:"1080"}),"\n",(0,r.jsx)("p",{align:"center",children:"Fig 1. Yunikorn and default scheduler throughput "})]}),"\n",(0,r.jsx)(t.p,{children:"The charts record the time spent until all pods are running on the cluster:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Number of Nodes"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"yunikorn"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"k8s default scheduler"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Diff"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2000(nodes)"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"204(pods/sec)"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"49(pods/sec)"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"416%"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4000(nodes)"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"115(pods/sec)"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"48(pods/sec)"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"240%"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["In order to normalize the result, we have been running the tests for several rounds. As shown above, YuniKorn achieves a ",(0,r.jsx)(t.code,{children:"2x"})," ~ ",(0,r.jsx)(t.code,{children:"4x"})," performance gain comparing to the default scheduler."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Like other performance testing, the result is highly variable depending on the underlying hardware, e.g server CPU/memory, network bandwidth, I/O speed, etc. To get an accurate result that applies to your environment, we encourage you to run these tests on a cluster that is close to your production environment."})}),"\n",(0,r.jsx)(t.h2,{id:"performance-analysis",children:"Performance Analysis"}),"\n",(0,r.jsx)(t.p,{children:"The results we got from the experiment are promising. We further take a deep dive to analyze the performance by observing more internal YuniKorn metrics, and we are able to locate a few key areas affecting the performance."}),"\n",(0,r.jsx)(t.h3,{id:"k8s-limitation",children:"K8s Limitation"}),"\n",(0,r.jsx)(t.p,{children:"We found the overall performance actually is capped by the K8s master services, such as api-server, controller-manager and etcd, it did not reached the limit of YuniKorn in all our experiments. If you look at the internal scheduling metrics, you can see:"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Allocation latency",src:n(90412).A+"",width:"1697",height:"703"}),"\n",(0,r.jsx)("p",{align:"center",children:"Fig 2. Yunikorn metric in 4k nodes "})]}),"\n",(0,r.jsxs)(t.p,{children:["Figure 2 is a screenshot from Prometheus, which records the ",(0,r.jsx)(t.a,{href:"/docs/1.0.0/performance/metrics",children:"internal metrics"})," ",(0,r.jsx)(t.code,{children:"containerAllocation"})," in YuniKorn. They are the number of pods being allocated by the scheduler, but have not necessarily been bound to nodes. It consumes roughly 122 seconds to finish scheduling 50k pods, i.e 410 pod/sec. The actual throughput drops to 115 pods/sec, and the extra time was used to bind the pods on different nodes. If K8s side could catch up, we will see a better result. Actually, when we tune the performance on a large scale cluster, the first thing we do is to tune up some parameters in API-server, controller manager in order to increase the throughput. See more in the ",(0,r.jsx)(t.a,{href:"/docs/1.0.0/performance/performance_tutorial",children:"performance tutorial doc"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"node-sorting",children:"Node Sorting"}),"\n",(0,r.jsxs)(t.p,{children:["When the cluster size grows, we see an obvious performance drop in YuniKorn. This is because in YuniKorn, we do a full sorting of the cluster nodes in order to find the ",(0,r.jsx)(t.strong,{children:'"best-fit"'})," node for a given pod. Such strategy makes the pods distribution more optimal based on the ",(0,r.jsx)(t.a,{href:"./../user_guide/sorting_policies#node-sorting",children:"node sorting policy"})," being used. However, sorting nodes is expensive, doing this in the scheduling cycle creates a lot of overhead. To overcome this, we have improved our node sorting mechanism in ",(0,r.jsx)(t.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-807",children:"YUNIKORN-807"}),", the idea behind of this is to use a ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/B-tree",children:"B-Tree"})," to store all nodes and applies an incremental updates when necessary. This significantly improves the latency, according to our benchmark testing, this improves 35x, 42x, 51x, 74x respectively on 500, 1000, 2000 and 5000 nodes clusters."]}),"\n",(0,r.jsx)(t.h3,{id:"per-node-precondition-checks",children:"Per Node Precondition Checks"}),"\n",(0,r.jsx)(t.p,{children:'In each scheduling cycle, another time consuming part is the "Precondition Checks" for a node. In this phase, YuniKorn evaluates all K8s standard predicates, e.g node-selector, pod affinity/anti-affinity, etc, in order to qualify a pod is fit onto a node. These evaluations are expensive.'}),"\n",(0,r.jsx)(t.p,{children:"We have done two experiments to compare the case where the predicates evaluation was enabled with being disabled. See the results below:"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Allocation latency",src:n(22265).A+"",width:"1920",height:"1080"}),"\n",(0,r.jsx)("p",{align:"center",children:"Fig 3. Predicate effect comparison in yunikorn "})]}),"\n",(0,r.jsx)(t.p,{children:"When the predicates evaluation is disabled, the throughput improves a lot. We looked further into the latency distribution of the entire scheduling cycle and the predicates-eval latency. And found:"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"YK predicate latency",src:n(74237).A+"",width:"1854",height:"817"}),"\n",(0,r.jsx)("p",{align:"center",children:"Fig 4. predicate latency "})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"YK scheduling with predicate",src:n(86286).A+"",width:"1855",height:"808"}),"\n",(0,r.jsx)("p",{align:"center",children:"Fig 5. Scheduling time with predicate active "})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"YK scheduling with no predicate",src:n(13778).A+"",width:"1841",height:"797"}),"\n",(0,r.jsx)("p",{align:"center",children:"Fig 6. Scheduling time with predicate inactive "})]}),"\n",(0,r.jsxs)(t.p,{children:["Overall, YuniKorn scheduling cycle runs really fast, and the latency drops in ",(0,r.jsx)(t.strong,{children:"0.001s - 0.01s"})," range per cycle. And the majority of the time was used for predicates evaluation, 10x to other parts in the scheduling cycle."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"scheduling latency distribution(second)"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"predicates-eval latency distribution(second)"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"predicates enabled"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0.01 - 0.1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0.01-0.1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"predicates disabled"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0.001 - 0.01"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"none"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"why-yunikorn-is-faster",children:"Why YuniKorn is faster?"}),"\n",(0,r.jsx)(t.p,{children:"The default scheduler was created as a service-oriented scheduler; it is less sensitive in terms of throughput compared to YuniKorn. YuniKorn community works really hard to keep the performance outstanding in the line and keep improving it. The reasons that YuniKorn can run faster than the default scheduler are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Short Circuit Scheduling Cycle"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["YuniKorn keeps the scheduling cycle short and efficient. YuniKorn uses all async communication protocol to make sure all the critical paths are non-blocking calls. Most of the places are just doing in-memory calculation which can be highly efficient. The default scheduler leverages ",(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/",children:"scheduling framework"}),", it provides lots of flexibility to extend the scheduler, however, the trade-off is the performance. The scheduling cycle becomes to be a really long chain because it needs to visit all these plugins."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Async Events Handling"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"YuniKorn leverages an async event handling framework to deal with internal states. And this allows the core scheduling cycle can run fast without being blocked by any expensive calls. An example is the default scheduler needs to write state updates, events to pod objects, that is done inside of the scheduling cycle. This involves persisting data to etcd which could be slow. YuniKorn, instead, caches all such events in a queue and writes back to the pod in asynchronous manner."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Faster Node Sorting"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["After ",(0,r.jsx)(t.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-807",children:"YUNIKORN-807"}),', YuniKorn does the incremental node sorting which is highly efficient. This is built on top of the so-called "resource-weight" based node scoring mechanism, and it is also extensible via plugins. All these together reduce the overhead while computing node scores. In comparison, the default scheduler provides a few extension points for calculating node scores, such as ',(0,r.jsx)(t.code,{children:"PreScore"}),", ",(0,r.jsx)(t.code,{children:"Score"})," and ",(0,r.jsx)(t.code,{children:"NormalizeScore"}),". These computations are heavy and they are called in every scheduling cycle. See details in ",(0,r.jsx)(t.a,{href:"https://github.com/kubernetes/kubernetes/blob/481459d12dc82ab88e413886e2130c2a5e4a8ec4/pkg/scheduler/framework/runtime/framework.go#L857",children:"code lines"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(t.p,{children:"During the tests, we found YuniKorn is performing really well, especially compared to the default scheduler. We have identified the major factors in YuniKorn where we can continue to improve the performance, and also explained why YuniKorn is performing better than the default scheduler. We also realized the limitations while scaling Kubernetes to thousands of nodes, that can be alleviated by using other techiques such as, e.g federation. At a result, YuniKorn is a high-efficient, high-throughput scheduler that perfectly positioned for running batch/mixed workloads on Kubernetes."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},90412:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/allocation_4k-55774ca09e13367c41799e4172d34a87.png"},22265:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/predicateComaparation-301262c33323e9faad72a1143ccc1617.png"},74237:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/predicate_4k-3ad50742ac5f0356e7707e6a01cbba0f.png"},13778:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/scheduling_no_predicate_4k-bfbb358a7c3c555ecdfbd218eefa1257.png"},86286:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/scheduling_with_predicate_4k_-951a3d6c4f1614330bb567cb5a797d24.png"},49795:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/yunirkonVSdefault-933832efd32ef583c6415a07c0d9b50b.png"},1780:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(79474);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);