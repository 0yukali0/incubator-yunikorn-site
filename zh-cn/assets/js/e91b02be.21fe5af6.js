"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6978],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||i;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},77450:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"labels_and_annotations_in_yunikorn",title:"Labels and Annotations in YuniKorn"},u=void 0,p={unversionedId:"user_guide/labels_and_annotations_in_yunikorn",id:"user_guide/labels_and_annotations_in_yunikorn",title:"Labels and Annotations in YuniKorn",description:"\x3c!--",source:"@site/docs/user_guide/labels_and_annotations_in_yunikorn.md",sourceDirName:"user_guide",slug:"/user_guide/labels_and_annotations_in_yunikorn",permalink:"/zh-cn/docs/next/user_guide/labels_and_annotations_in_yunikorn",draft:!1,tags:[],version:"current",frontMatter:{id:"labels_and_annotations_in_yunikorn",title:"Labels and Annotations in YuniKorn"},sidebar:"docs",previous:{title:"Gang Scheduling",permalink:"/zh-cn/docs/next/user_guide/gang_scheduling"},next:{title:"\u6982\u8ff0",permalink:"/zh-cn/docs/next/user_guide/workloads/workload_overview"}},d={},s=[{value:"Labels and Annotations in YuniKorn",id:"labels-and-annotations-in-yunikorn",level:2},{value:"Labels in YuniKorn",id:"labels-in-yunikorn",level:3},{value:"Annotations in YuniKorn",id:"annotations-in-yunikorn",level:3}],c={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"labels-and-annotations-in-yunikorn"},"Labels and Annotations in YuniKorn"),(0,i.kt)("p",null,"YuniKorn utilizes several Kubernetes labels and annotations to support various features:"),(0,i.kt)("h3",{id:"labels-in-yunikorn"},"Labels in YuniKorn"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"applicationId")),(0,i.kt)("td",{parentName:"tr",align:null},"Associates this pod with an application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"queue")),(0,i.kt)("td",{parentName:"tr",align:null},"Selects the YuniKorn queue this application should be scheduled in. This may be ignored if a placement policy is in effect.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SparkLabelAppID ")),(0,i.kt)("td",{parentName:"tr",align:null},"Alternative method of specifying ",(0,i.kt)("inlineCode",{parentName:"td"},"applicationId")," used by Spark Operator if the label ",(0,i.kt)("inlineCode",{parentName:"td"},"applicationId")," and annotation ",(0,i.kt)("inlineCode",{parentName:"td"},"yunikorn.apache.org/app-id")," unset.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"disableStateAware")),(0,i.kt)("td",{parentName:"tr",align:null},"If present, disables the YuniKorn state-aware scheduling policy for this pod. Set internally by the YuniKorn admission controller.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"placeholder")),(0,i.kt)("td",{parentName:"tr",align:null},"Set if this pod represents a placeholder for gang scheduling. Set internally by YuniKorn.")))),(0,i.kt)("h3",{id:"annotations-in-yunikorn"},"Annotations in YuniKorn"),(0,i.kt)("p",null,"All annotations are under the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org"),". For example ",(0,i.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org/app-id"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"app-id")),(0,i.kt)("td",{parentName:"tr",align:null},"Assoiates this pod with an application.",(0,i.kt)("br",null),"The priority of applicationID is determined by: annotation ",(0,i.kt)("inlineCode",{parentName:"td"},"yunikorn.apache.org/app-id")," > label ",(0,i.kt)("inlineCode",{parentName:"td"},"applicationId")," > label ",(0,i.kt)("inlineCode",{parentName:"td"},"SparkLabelAppID"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"queue")),(0,i.kt)("td",{parentName:"tr",align:null},"Selects the YuniKorn queue this application should be scheduled in.",(0,i.kt)("br",null),"The priority of queue is determined by: label ",(0,i.kt)("inlineCode",{parentName:"td"},"queue")," > annotation ",(0,i.kt)("inlineCode",{parentName:"td"},"yunikorn.apache.org/queue")," > default.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"task-group-name")),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the task group name this pod belongs to for the purposes of gang scheduling. It must be listed within ",(0,i.kt)("inlineCode",{parentName:"td"},"task-groups"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"task-groups")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the set of task groups for this application for gang scheduling. Each pod within an application must define all task groups.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"schedulingPolicyParameters")),(0,i.kt)("td",{parentName:"tr",align:null},"Arbitrary key-value pairs used to customize scheduling policies such as gang scheduling.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"placeholder")),(0,i.kt)("td",{parentName:"tr",align:null},"Set if this pod represents a placeholder for gang scheduling. Set internally by YuniKorn.")))),(0,i.kt)("p",null,"For more details surrounding gang-scheduling labels and annotations, please refer to the documentation on ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/user_guide/gang_scheduling"},"gang scheduling"),"."))}m.isMDXComponent=!0}}]);