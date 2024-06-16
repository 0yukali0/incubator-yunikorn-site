"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40683],{54435:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=o(13274),i=o(1780);const r={id:"cross_queue_preemption",title:"Cross Queue Preemption"},s=void 0,a={id:"archived_design/cross_queue_preemption",title:"Cross Queue Preemption",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.1/archived_design/cross_queue_preemption.md",sourceDirName:"archived_design",slug:"/archived_design/cross_queue_preemption",permalink:"/docs/archived_design/cross_queue_preemption",draft:!1,unlisted:!1,tags:[],version:"1.5.1",frontMatter:{id:"cross_queue_preemption",title:"Cross Queue Preemption"},sidebar:"docs",previous:{title:"Batch Workloads Ordering with StateAware Policy",permalink:"/docs/archived_design/state_aware_scheduling"},next:{title:"Pluggable App Management",permalink:"/docs/archived_design/pluggable_app_management"}},l={},c=[{value:"Problems:",id:"problems",level:2},{value:"Answer some questions for design/implementation choices",id:"answer-some-questions-for-designimplementation-choices",level:2},{value:"Pseudo code",id:"pseudo-code",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"problems",children:"Problems:"}),"\n",(0,t.jsx)(n.p,{children:"According to lessons we learned from YARN Scheduler preemption."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Here're top bad things:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Preemption is a shotgun instead of a sniper, when a preemption decision is made, nobody knows if preempted resources will go to demanding queue/app/user or not."}),"\n",(0,t.jsx)(n.li,{children:"Preemption logic and allocation is different, we have to implement (and mimic) what we have done in scheduler allocation logic."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Here're top good things:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Preemption is fast (thanks to the shotgun), reclaiming thousands of containers only takes ~ 1 sec."}),"\n",(0,t.jsx)(n.li,{children:"We have understand how painful it is to handle DRF, multiple preemption policies (inter/intra-queue, shotgun/surgical preemption, etc.) And we have developed some good logic\nto make sure better modularization and plug-ability"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"answer-some-questions-for-designimplementation-choices",children:"Answer some questions for design/implementation choices"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"1. Do we really want preemption-delay? (Or we just want to control pace)"})}),"\n",(0,t.jsx)(n.p,{children:"In CS, we have preemption-delay, which select victims in preemption candidates, wait for a certain time before killing it."}),"\n",(0,t.jsx)(n.p,{children:"The purposes of preemption delay are: a. give heads-up time to apps so\nthey can prepare bad things happen (unfortunately no app do anything for these heads up, at least from what I knew). b. control preemption pace."}),"\n",(0,t.jsx)(n.p,{children:"And in practice, I found it causes a lot of issues, for example when a\ncluster state keep changing, it is very hard to ensure accurate preemption."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Proposal:"})}),"\n",(0,t.jsxs)(n.p,{children:["Remove the preemption-delay, keep the logics of controlling preemption pace. (such as ",(0,t.jsx)(n.code,{children:"yarn.resourcemanager.monitor.capacity.preemption .total_preemption_per_round"}),"). And we can do allocation together with preemption.\nThis don't mean containers will be stopped immediately after preemption issued. Instead, RM can control delays between signal a container and kill a container. Such as grace\ntermination of POD in K8s: ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/workloads/pods/pod/#termination-of-pods",children:"https://kubernetes.io/docs/concepts/workloads/pods/pod/#termination-of-pods"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"2. Do we want to do preemption for every scheduling logic, or we can do periodically?"})}),"\n",(0,t.jsx)(n.p,{children:"In CS, we have preemption logic runs periodically, like every 1 sec or 3 sec."}),"\n",(0,t.jsx)(n.p,{children:"Since preemption logic involves some heavy logics, like calculating shares of queues/apps. And when doing accurate preemption, we may need to scan nodes for preemption candidate.\nConsidering this, I propose to have preemption runs periodically. But it is important to note that, we need to try to use as much code as possible for\nallocation-inside-preemption, otherwise there will be too much duplicated logic and very hard to be maintained in the future."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"3. Preemption cost and function"})}),"\n",(0,t.jsx)(n.p,{children:"We found it is helpful to add cost for preemption, such as container live time, priority, type of container. It could be a cost function (Which returns a numeric value) or it\ncould be a comparator (which compare two allocations for preemption ask)."}),"\n",(0,t.jsx)(n.h2,{id:"pseudo-code",children:"Pseudo code"}),"\n",(0,t.jsx)(n.p,{children:"Logic of allocation (invoked every allocation cycle)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"input:\n  - nAlloc, allocate N allocations for this allocation cycle.\n\nfor partition: \n  askCandidates := findAskCandidates(nAlloc, preemption=false)\n  \n  allocated, failed_to_allocated := tryAllocate(askCandidates);\n  \n  send-allocated-to-cache-to-commit;\n  \n  update-missed-opportunity (allocated, failed_to_allocated);\n  \n  nAlloc -= len(allocated)   \n"})}),"\n",(0,t.jsx)(n.p,{children:"Logic of preemption (invoked every preemption cycle)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// It has to be done for every preemption-policy because calculation is different.\nfor preemption-policy: \n  preempt_results := policy.preempt()\n  for preempt_results: \n     send-preempt-result-to-cache-to-commit;\n     updated-missed-opportunity (allocated)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Inside preemption policy"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"inter-queue-preempt-policy:\n  calculate-preemption-quotas;\n  \n  for partitions:\n    total_preempted := resource(0);\n    \n    while total_preempted < partition-limited:\n      // queues will be sorted by allocating - preempting\n      // And ignore any key in preemption_mask\n      askCandidates := findAskCandidates(N, preemption=true)\n      \n      preempt_results := tryAllocate(askCandidates, preemption=true);\n      \n      total_preempted += sigma(preempt_result.allocResource)\n      \n      send-allocated-to-cache-to-commit;\n      \n      update-missed-opportunity (allocated, failed_to_allocated);\n      \n      update-preemption-mask(askCandidates.allocKeys - preempt_results.allocKeys)\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1780:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(79474);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);