(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),r=(a(0),a(203)),o=["components"],c={id:"scheduler_object_states",title:"Scheduler Object States"},s={unversionedId:"design/scheduler_object_states",id:"design/scheduler_object_states",isDocsHomePage:!1,title:"Scheduler Object States",description:"\x3c!--",source:"@site/docs/design/scheduler_object_states.md",slug:"/design/scheduler_object_states",permalink:"/docs/next/design/scheduler_object_states",version:"current",sidebar:"docs",previous:{title:"Batch Workloads Ordering with StateAware Policy",permalink:"/docs/next/design/state_aware_scheduling"},next:{title:"Gang scheduling design",permalink:"/docs/next/design/gang_scheduling"}},l=[{value:"Core Scheduler",id:"core-scheduler",children:[{value:"Application State",id:"application-state",children:[]},{value:"Object State",id:"object-state",children:[]},{value:"Node",id:"node",children:[]}]},{value:"K8Shim Resource Manager",id:"k8shim-resource-manager",children:[{value:"Application",id:"application",children:[]},{value:"Task",id:"task",children:[]},{value:"Node",id:"node-1",children:[]},{value:"Scheduler",id:"scheduler",children:[]}]}],d={rightToc:l};function p(e){var t=e.components,c=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(n.a)({},d,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The YuniKorn project uses state machines to track the states of different objects.\nThis ranges from applications in the core to nodes in the k8shim.\nThe state machines are independent and not shared between the resource managers and core.\nA resource manager shim, and the core can thus have an independent idea of the state of a similar object."),Object(r.b)("h2",{id:"core-scheduler"},"Core Scheduler"),Object(r.b)("p",null,"State change are triggered by events that get processed.\nOne event can cause a change for multiple states or no change at all."),Object(r.b)("h3",{id:"application-state"},"Application State"),Object(r.b)("p",null,"Applications have a complex state model.\nAn application when created starts ain the new state."),Object(r.b)("p",null,"An application can have the following states:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"New: A new application that is being submitted or created, from here the application transitions into the accepted state when it is ready for scheduling.\nThe first ask to be added will trigger the transition."),Object(r.b)("li",{parentName:"ul"},"Accepted: The application is ready and part of the scheduling cycle.\nOn allocation of the first ask the application moves into a starting state.\nThis state is part of the normal scheduling cycle."),Object(r.b)("li",{parentName:"ul"},"Starting: The application has exactly one allocation confirmed this corresponds to one running container/pod.\nThe application transitions to running if and when more allocations are added to the application.\nThis state times out automatically to prevent applications that consist of just one allocation from getting stuck in this state.\nThe current time out is set to 5 minutes, and cannot be changed.\nIf after the timeout expires the application will auto transition to running.\nThe state change on time out is independent of the number of allocations added.\nThis state is part of the normal scheduling cycle."),Object(r.b)("li",{parentName:"ul"},"Running: The state in which the application will spend most of its time.\nContainers/pods can be added to and removed from the application.\nThis state is part of the normal scheduling cycle."),Object(r.b)("li",{parentName:"ul"},"Completing: An application that has no pending requests or running containers/pod will be completing.\nThis state shows that the application has not been marked completed yet but currently is not actively being scheduled."),Object(r.b)("li",{parentName:"ul"},"Completed: An application is considered completed when it has been in the completing state for a defined time period.\nFrom this state the application can only move to the Expired state, and it cannot move back into any of scheduling states (Running or Completing)\nThe current timeout is set to 30 seconds."),Object(r.b)("li",{parentName:"ul"},"Expired: The completed application is tracked for a period of time, after that is expired and deleted from the scheduler.\nThis is a final state and after this state the application cannot be tracked anymore. "),Object(r.b)("li",{parentName:"ul"},"Failing: An application marked for failing, what still has some allocations or asks what needs to be cleaned up before entering into the Failed state.\nThe application can be Failing when the partition it belongs to is removed or during gang scheduling, if the placeholder processing times out, and the application has no real allocations yet."),Object(r.b)("li",{parentName:"ul"},"Failed: An application is considered failed when it was marked for failure and all the pending requests and allocations were already removed.\nThis is a final state. The application cannot change state after entering."),Object(r.b)("li",{parentName:"ul"},"Rejected: The application was rejected when it was added to the scheduler.\nThis only happens when a resource manager tries to add a new application, when it gets created in a New state, and the scheduler rejects the creation.\nApplications can be rejected due ACLs denying access to a queue the application has specified, or a placement via placement rules has failed.\nThis is a final state. The application cannot change state after entering.")),Object(r.b)("p",null,"The events that can trigger a state change:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Reject: rejecting the application by the scheduler (source: core scheduler)"),Object(r.b)("li",{parentName:"ul"},"Run: progress an application to the next active state (source: core scheduler)"),Object(r.b)("li",{parentName:"ul"},"Complete: mark an application as idle or complete (source: core scheduler)"),Object(r.b)("li",{parentName:"ul"},"Fail: fail an application (source: resource manager or core scheduler)"),Object(r.b)("li",{parentName:"ul"},"Expire: progress the application to the expired state and remove it from the scheduler (source: core scheduler)")),Object(r.b)("p",null,"Here is a diagram that shows the states with the event that causes the state to change:",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("img",{alt:"application state diagram",src:a(275).default})),Object(r.b)("h3",{id:"object-state"},"Object State"),Object(r.b)("p",null,"The object state is used by the following objects:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"queues"),Object(r.b)("li",{parentName:"ul"},"partitions")),Object(r.b)("p",null,"The object states are as follows: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Active: The object is active and used during the scheduling cycle.\nThis is the starting and normal state of an object.\nAn active object transitions to draining when it is removed.  "),Object(r.b)("li",{parentName:"ul"},"Stopped: The object is stopped and no longer actively scheduled.\nThe object if empty is ready to be removed from the scheduler.\nThe object can transition back into active state if it gets re-started."),Object(r.b)("li",{parentName:"ul"},"Draining: Before an object can be removed it needs to be cleaned up.\nThe cleanup starts with placing the object in the draining state.\nIn this state it does not accept additions or changes but is still actively being scheduled.\nThis allows for a graceful shutdown, cleanup and removal of the object.\nThis is the final state.")),Object(r.b)("p",null,"The events that can trigger a state change:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Start: make the object active (source: core scheduler)"),Object(r.b)("li",{parentName:"ul"},"Stop: make the object inactive (source: core scheduler)"),Object(r.b)("li",{parentName:"ul"},"Remove: mark an object for removal (source: core scheduler)")),Object(r.b)("p",null,"Here is a diagram that shows the states with the event that causes the state to change:",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("img",{alt:"object state diagram",src:a(276).default})),Object(r.b)("h3",{id:"node"},"Node"),Object(r.b)("p",null,"Node objects in the core are not using a state machine but do have a state.\nA node can have one of two states: ",Object(r.b)("inlineCode",{parentName:"p"},"schedulable")," or ",Object(r.b)("inlineCode",{parentName:"p"},"not schedulable"),".\nThere is no complex state model or complex transition logic.\nThe scheduler can either use the node or not."),Object(r.b)("p",null,"The node status changes based on the status provided by the resource manager (shim) that owns the node. "),Object(r.b)("h2",{id:"k8shim-resource-manager"},"K8Shim Resource Manager"),Object(r.b)("h3",{id:"application"},"Application"),Object(r.b)("p",null,"To be added"),Object(r.b)("h3",{id:"task"},"Task"),Object(r.b)("p",null,"To be added"),Object(r.b)("h3",{id:"node-1"},"Node"),Object(r.b)("p",null,"To be added"),Object(r.b)("h3",{id:"scheduler"},"Scheduler"),Object(r.b)("p",null,"To be added"))}p.isMDXComponent=!0},203:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,b=p["".concat(o,".").concat(u)]||p[u]||h[u]||r;return a?i.a.createElement(b,c(c({ref:t},l),{},{components:a})):i.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},275:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/application-state-f3d15da3212088b0d9ee85037e110175.png"},276:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/object-state-ce78c19f65c895bbbddd0e48b4c22d8f.png"}}]);