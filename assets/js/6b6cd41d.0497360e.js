"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"user_guide",title:"Get Started",slug:"/"},i=void 0,l={unversionedId:"get_started/user_guide",id:"version-0.9.0/get_started/user_guide",title:"Get Started",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/get_started/get_started.md",sourceDirName:"get_started",slug:"/",permalink:"/docs/0.9.0/",draft:!1,tags:[],version:"0.9.0",frontMatter:{id:"user_guide",title:"Get Started",slug:"/"},sidebar:"version-0.9.0/docs",next:{title:"Features",permalink:"/docs/0.9.0/get_started/core_features"}},s={},u=[{value:"Install",id:"install",level:2},{value:"Uninstall",id:"uninstall",level:2},{value:"Access the Web UI",id:"access-the-web-ui",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before reading this guide, we assume you either have a Kubernetes cluster, or a local Kubernetes dev environment, e.g MiniKube.\nIt is also assumed that ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," is on your path and properly configured.\nFollow this ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.9.0/developer_guide/env_setup"},"guide")," on how to setup a local Kubernetes cluster using docker-desktop."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"The easiest way to get started is to use our Helm Charts to deploy YuniKorn on an existing Kubernetes cluster.\nIt is recommended to use Helm 3 or later versions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add yunikorn  https://apache.github.io/incubator-yunikorn-release\nhelm repo update\nkubectl create namespace yunikorn\nhelm install yunikorn yunikorn/yunikorn --namespace yunikorn\n")),(0,a.kt)("p",null,"By default, the helm chart will install the scheduler, web-server and the admission-controller in the cluster.\nWhen ",(0,a.kt)("inlineCode",{parentName:"p"},"admission-controller")," is installed, it simply routes all traffic to YuniKorn. That means the resource scheduling\nis delegated to YuniKorn. You can disable it by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"embedAdmissionController")," flag to false during the helm install.  "),(0,a.kt)("p",null,"If you don't want to use helm charts, you can find our step-by-step\ntutorial ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.9.0/developer_guide/deployment"},"here"),"."),(0,a.kt)("h2",{id:"uninstall"},"Uninstall"),(0,a.kt)("p",null,"Run the following command to uninstall YuniKorn:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm uninstall yunikorn --namespace yunikorn\n")),(0,a.kt)("h2",{id:"access-the-web-ui"},"Access the Web UI"),(0,a.kt)("p",null,"When the scheduler is deployed, the web UI is also deployed in a container.\nPort forwarding for the web interface on the standard ports can be turned on via:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl port-forward svc/yunikorn-service 9889:9889 -n yunikorn\nkubectl port-forward svc/yunikorn-service 9080:9080 -n yunikorn\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"9889")," is the default port for Web UI, ",(0,a.kt)("inlineCode",{parentName:"p"},"9080")," is the default port of scheduler's Restful service where web UI retrieves info from.\nOnce this is done, web UI will be available at: http://localhost:9889."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"UI Screenshots",src:n(96609).Z,width:"800",height:"450"})),(0,a.kt)("p",null,"YuniKorn UI provides a centralised view for cluster resource capacity, utilization, and all application info."))}d.isMDXComponent=!0},96609:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/yk-ui-screenshots-0ed0a6715b3eaf299745512c3907ce9c.gif"}}]);