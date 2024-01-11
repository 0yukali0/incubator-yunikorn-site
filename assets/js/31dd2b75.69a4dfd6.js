"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,m=c["".concat(s,".").concat(d)]||c[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={id:"run_tf",title:"Run TensorFlow Jobs",description:"How to run TensorFlow jobs with YuniKorn",keywords:["tensorflow"]},i=void 0,l={unversionedId:"user_guide/workloads/run_tf",id:"version-1.0.0/user_guide/workloads/run_tf",title:"Run TensorFlow Jobs",description:"How to run TensorFlow jobs with YuniKorn",source:"@site/versioned_docs/version-1.0.0/user_guide/workloads/run_tensorflow.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_tf",permalink:"/docs/1.0.0/user_guide/workloads/run_tf",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"run_tf",title:"Run TensorFlow Jobs",description:"How to run TensorFlow jobs with YuniKorn",keywords:["tensorflow"]},sidebar:"docs",previous:{title:"Run Flink Jobs",permalink:"/docs/1.0.0/user_guide/workloads/run_flink"},next:{title:"Cluster",permalink:"/docs/1.0.0/api/cluster"}},s={},u=[{value:"Install training-operator",id:"install-training-operator",level:2},{value:"Prepare the docker image",id:"prepare-the-docker-image",level:2},{value:"Run a TensorFlow job",id:"run-a-tensorflow-job",level:2}],p={toc:u},c="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide gives an overview of how to set up ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/training-operator"},"training-operator"),"\nand how to run a Tensorflow job with YuniKorn scheduler. The training-operator is a unified training operator maintained by\nKubeflow. It not only supports TensorFlow but also PyTorch, XGboots, etc."),(0,o.kt)("h2",{id:"install-training-operator"},"Install training-operator"),(0,o.kt)("p",null,"You can use the following command to install training operator in kubeflow namespace by default. If you have problems with installation,\nplease refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/training-operator#installation"},"this doc")," for details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl apply -k "github.com/kubeflow/training-operator/manifests/overlays/standalone?ref=v1.3.0"\n')),(0,o.kt)("h2",{id:"prepare-the-docker-image"},"Prepare the docker image"),(0,o.kt)("p",null,"Before you start running a TensorFlow job on Kubernetes, you'll need to build the docker image."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download files from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/examples/tfjob"},"deployment/examples/tfjob")),(0,o.kt)("li",{parentName:"ol"},"To build this docker image with the following command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -f Dockerfile -t kubeflow/tf-dist-mnist-test:1.0 .\n")),(0,o.kt)("h2",{id:"run-a-tensorflow-job"},"Run a TensorFlow job"),(0,o.kt)("p",null,"Here is a TFJob yaml for MNIST ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/examples/tfjob/tf-job-mnist.yaml"},"example"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kubeflow.org/v1\nkind: TFJob\nmetadata:\n  name: dist-mnist-for-e2e-test\n  namespace: kubeflow\nspec:\n  tfReplicaSpecs:\n    PS:\n      replicas: 2\n      restartPolicy: Never\n      template:\n        metadata:\n          labels:\n            applicationId: "tf_job_20200521_001"\n            queue: root.sandbox\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - name: tensorflow\n              image: kubeflow/tf-dist-mnist-test:1.0\n    Worker:\n      replicas: 4\n      restartPolicy: Never\n      template:\n        metadata:\n          labels:\n            applicationId: "tf_job_20200521_001"\n            queue: root.sandbox\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - name: tensorflow\n              image: kubeflow/tf-dist-mnist-test:1.0\n')),(0,o.kt)("p",null,"Create the TFJob"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f deployments/examples/tfjob/tf-job-mnist.yaml\n")),(0,o.kt)("p",null,"You can view the job info from YuniKorn UI. If you do not know how to access the YuniKorn UI,\nplease read the document ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.0.0/#access-the-web-ui"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tf-job-on-ui",src:n(35351).Z,width:"2442",height:"1308"})))}f.isMDXComponent=!0},35351:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tf-job-on-ui-e31edb85612822915f336b8cf9a25c3f.png"}}]);