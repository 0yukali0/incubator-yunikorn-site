"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31836],{82923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=t(13274),i=t(1780);const a={id:"rn-1.5.1",title:"Release Announcement v1.5.1"},o="Release Announcement v1.5.1",d={type:"mdx",permalink:"/release-announce/1.5.1",source:"@site/src/pages/release-announce/1.5.1.md",title:"Release Announcement v1.5.1",description:"\x3c!--",frontMatter:{id:"rn-1.5.1",title:"Release Announcement v1.5.1"},unlisted:!1},r={},c=[{value:"Overview",id:"overview",level:2},{value:"Highlights",id:"highlights",level:2},{value:"Locking fixes to avoid existing and potential deadlocks",id:"locking-fixes-to-avoid-existing-and-potential-deadlocks",level:3},{value:"Deadlock detection",id:"deadlock-detection",level:3}];function l(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"release-announcement-v151",children:"Release Announcement v1.5.1"}),"\n",(0,s.jsx)(n.p,{children:"We are pleased to announce that the Apache YuniKorn community has voted to release 1.5.1.\nApache YuniKorn is a standalone resource scheduler, designed for managing and scheduling Batch and Data workloads on container\norchestration frameworks like Kubernetes for on-prem and on-cloud use cases."}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The Apache YuniKorn community has resolved 18 ",(0,s.jsx)(n.a,{href:"https://issues.apache.org/jira/issues/?filter=12353383",children:"JIRAs"})," in this release."]}),"\n",(0,s.jsx)(n.p,{children:"Release manager: Peter Bacsko"}),"\n",(0,s.jsx)(n.p,{children:"Release date: 2024-05-16"}),"\n",(0,s.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,s.jsx)(n.h3,{id:"locking-fixes-to-avoid-existing-and-potential-deadlocks",children:"Locking fixes to avoid existing and potential deadlocks"}),"\n",(0,s.jsxs)(n.p,{children:["YuniKorn 1.5.0 contained a deadlock as described in ",(0,s.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-2521",children:"YUNIKORN-2521"}),".\nThis deadlock is now fixed along with other potential deadlocks. See ",(0,s.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-2544",children:"YUNIKORN-2544"}),"\nfor a more detailed overview of the locking changes made."]}),"\n",(0,s.jsx)(n.h3,{id:"deadlock-detection",children:"Deadlock detection"}),"\n",(0,s.jsxs)(n.p,{children:["The tool ",(0,s.jsx)(n.a,{href:"https://github.com/sasha-s/go-deadlock",children:"go-deadlock"})," has been integrated to the codebase,\nwhich makes it possible to detect potential deadlocks at runtime. Since this slows down the scheduler\nand increases memory usage, it's disabled by default. However, it's enabled during the unit test phase\nwith \"make test\". See ",(0,s.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-2539",children:"YUNIKORN-2539"})," for details."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1780:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(79474);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);