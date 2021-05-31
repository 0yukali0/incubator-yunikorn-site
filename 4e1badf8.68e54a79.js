(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{203:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,h=d["".concat(i,".").concat(s)]||d[s]||b[s]||a;return n?o.a.createElement(h,c(c({ref:t},p),{},{components:n})):o.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(203)),i=["components"],c={id:"build_local",title:"Build Local"},l={unversionedId:"setup/build_local",id:"version-0.8.0/setup/build_local",isDocsHomePage:!1,title:"Build Local",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/setup/build_local.md",slug:"/setup/build_local",permalink:"/docs/0.8.0/setup/build_local",version:"0.8.0",sidebar:"version-0.8.0/docs",previous:{title:"Developer Guide",permalink:"/docs/0.8.0/get_started/developer_guide"},next:{title:"Configure Scheduler",permalink:"/docs/0.8.0/setup/configure_scheduler"}},p=[{value:"Affected repositories",id:"affected-repositories",children:[]},{value:"Making local changes",id:"making-local-changes",children:[]},{value:"Updating dependencies",id:"updating-dependencies",children:[]}],u={rightToc:p};function d(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"building-with-local-dependencies"},"Building with local dependencies"),Object(a.b)("p",null,"The YuniKorn project has four repositories three of those repositories have a dependency at the go level.\nThese dependencies are part of the go modules and point to the github repositories.\nDuring development it can be required to break the dependency on the committed version from github.\nThis requires making changes in the module file to allow loading a local copy or a forked copy from a different repository.  "),Object(a.b)("h2",{id:"affected-repositories"},"Affected repositories"),Object(a.b)("p",null,"The following dependencies exist between the repositories:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"repository"),Object(a.b)("th",{parentName:"tr",align:null},"depends on"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"yunikorn-core"),Object(a.b)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"yunikorn-k8shim"),Object(a.b)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface, yunikorn-core")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface"),Object(a.b)("td",{parentName:"tr",align:null},"none")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"yunikorn-web"),Object(a.b)("td",{parentName:"tr",align:null},"yunikorn-core")))),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"yunikorn-web")," repository has no direct go dependency on the other repositories. However any change to the ",Object(a.b)("inlineCode",{parentName:"p"},"yunikorn-core")," webservices can affect the web interface. "),Object(a.b)("h2",{id:"making-local-changes"},"Making local changes"),Object(a.b)("p",null,"To make sure that the local changes will not break other parts of the build you should run:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A full build ",Object(a.b)("inlineCode",{parentName:"li"},"make")," (build target depends on the repository)"),Object(a.b)("li",{parentName:"ul"},"A full unit test run ",Object(a.b)("inlineCode",{parentName:"li"},"make test"))),Object(a.b)("p",null,"Any test failures should be fixed before proceeding."),Object(a.b)("h2",{id:"updating-dependencies"},"Updating dependencies"),Object(a.b)("p",null,"The simplest way is to use the ",Object(a.b)("inlineCode",{parentName:"p"},"replace")," directive in the module file. The ",Object(a.b)("inlineCode",{parentName:"p"},"replace")," directive allows you to override the import path with a new (local) path.\nThere is no need to change any of the imports in the source code. The change must be made in the ",Object(a.b)("inlineCode",{parentName:"p"},"go.mod")," file of the repository that has the dependency. "),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"replace")," to use of a forked dependency, such as:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"replace github.com/apache/incubator-yunikorn-core => example.com/some/forked-yunikorn\n")),Object(a.b)("p",null,"There is no requirement to fork and create a new repository. If you do not have a repository you can use a local checked out copy too.\nUsing ",Object(a.b)("inlineCode",{parentName:"p"},"replace")," to use of a local directory as a dependency:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"replace github.com/apache/incubator-yunikorn-core => /User/example/local/checked-out-yunikorn\n")),Object(a.b)("p",null,"and for the same dependency using a relative path:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"replace github.com/apache/incubator-yunikorn-core => ../checked-out-yunikorn\n")),Object(a.b)("p",null,"Note: if the ",Object(a.b)("inlineCode",{parentName:"p"},"replace")," directive is using a local filesystem path, then the target must have the ",Object(a.b)("inlineCode",{parentName:"p"},"go.mod")," file at that location."),Object(a.b)("p",null,"Further details on the modules wiki: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/Modules#when-should-i-use-the-replace-directive"},"When should I use the 'replace' directive?"),"."))}d.isMDXComponent=!0}}]);