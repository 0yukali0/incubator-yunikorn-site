"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14705],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,b=f["".concat(i,".").concat(m)]||f[m]||c[m]||a;return r?n.createElement(b,s(s({ref:t},p),{},{components:r})):n.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[f]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70415:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={id:"run_tf",title:"Run Tensorflow Jobs",keywords:["tensorflow"]},s=void 0,l={unversionedId:"user_guide/workloads/run_tf",id:"version-0.11.0/user_guide/workloads/run_tf",title:"Run Tensorflow Jobs",description:"\x3c!--",source:"@site/versioned_docs/version-0.11.0/user_guide/workloads/run_tensorflow.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_tf",permalink:"/docs/0.11.0/user_guide/workloads/run_tf",draft:!1,tags:[],version:"0.11.0",frontMatter:{id:"run_tf",title:"Run Tensorflow Jobs",keywords:["tensorflow"]},sidebar:"version-0.11.0/docs",previous:{title:"Run Flink Jobs",permalink:"/docs/0.11.0/user_guide/workloads/run_flink"},next:{title:"Cluster",permalink:"/docs/0.11.0/api/cluster"}},i={},u=[],p={toc:u},f="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here is an example for Tensorflow job. You must install tf-operator first.\nYou can install tf-operator by applying all yaml from two website down below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CRD: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-crds/base"},"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-crds/base")),(0,o.kt)("li",{parentName:"ul"},"Deployment: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-operator/base"},"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-operator/base"),"\nAlso you can install kubeflow which can auto install tf-operator for you, URL: ",(0,o.kt)("a",{parentName:"li",href:"https://www.kubeflow.org/docs/started/getting-started/"},"https://www.kubeflow.org/docs/started/getting-started/"))),(0,o.kt)("p",null,"A simple Tensorflow job example:"),(0,o.kt)("p",null,"You need to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/tf-operator/tree/master/examples/v1/dist-mnist"},"build the image")," which used in example yaml."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f examples/tfjob/tf-job-mnist.yaml\n")),(0,o.kt)("p",null,"The file for this example can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#Tensorflow-job"},"README Tensorflow job")," section."))}c.isMDXComponent=!0}}]);