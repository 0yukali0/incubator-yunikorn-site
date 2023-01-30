"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6244],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=a,m=c["".concat(d,".").concat(h)]||c[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27236:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"dependencies",title:"Go module updates"},d=void 0,l={unversionedId:"developer_guide/dependencies",id:"version-1.0.0/developer_guide/dependencies",title:"Go module updates",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/developer_guide/dependencies.md",sourceDirName:"developer_guide",slug:"/developer_guide/dependencies",permalink:"/zh-cn/docs/1.0.0/developer_guide/dependencies",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"dependencies",title:"Go module updates"},sidebar:"docs",previous:{title:"Build and Run",permalink:"/zh-cn/docs/1.0.0/developer_guide/build"},next:{title:"Deploy to Kubernetes",permalink:"/zh-cn/docs/1.0.0/developer_guide/deployment"}},p={},c=[{value:"When to update",id:"when-to-update",level:2},{value:"Why a pseudo version",id:"why-a-pseudo-version",level:2},{value:"Updating the core dependency",id:"updating-the-core-dependency",level:2},{value:"Updating a shim dependency",id:"updating-a-shim-dependency",level:2},{value:"Generating a pseudo version",id:"generating-a-pseudo-version",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"when-to-update"},"When to update"),(0,o.kt)("p",null,"The references in the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branches must be updated if a change is made in the scheduler interface.\nUpdating the dependency of a shim in reference to the core might be needed even if the scheduler interface does not change.\nNew functionality could be added that rely on changed content of the messages.\nIn that case just the shim dependency needs to be updated."),(0,o.kt)("h2",{id:"why-a-pseudo-version"},"Why a pseudo version"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch we ",(0,o.kt)("strong",{parentName:"p"},"must")," use a pseudo version for all the YuniKorn repository references we use.\nAs the branch is in active development and not released we do not have a real version tag to reference.\nHowever, we still need to be able to point to the right commit for the dependencies."),(0,o.kt)("p",null,"Go allows using ",(0,o.kt)("a",{parentName:"p",href:"https://go.dev/ref/mod#pseudo-versions"},"pseudo versions")," for these specific cases.\nAn example of the pseudo versions we use in the Kubernetes shim:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"module github.com/apache/yunikorn-k8shim\n\ngo 1.16\n\nrequire (\n    github.com/apache/yunikorn-core v0.0.0-20220325135453-73d55282f052\n    github.com/apache/yunikorn-scheduler-interface v0.0.0-20220325134135-4a644b388bc4\n    ...\n)\n")),(0,o.kt)("p",null,"Release branches ",(0,o.kt)("strong",{parentName:"p"},"must")," not use pseudo versions.\nDuring the creation of a release, ",(0,o.kt)("a",{parentName:"p",href:"/community/release_procedure#tag-and-update-release-for-version"},"tags")," will be created.\nThese tags will be used as the reference in the go.mod files for the release.    "),(0,o.kt)("h2",{id:"updating-the-core-dependency"},"Updating the core dependency"),(0,o.kt)("p",null,"Before updating the core dependency must make sure that the scheduler interface changes are finalised."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make the changes in the scheduler interface."),(0,o.kt)("li",{parentName:"ol"},"Commit the changes into the master branch on GitHub and pull the latest master branch commit."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#generating-a-pseudo-version"},"Generate a new pseudo version")," for the scheduler-interface.")),(0,o.kt)("p",null,"Updating the core dependency"),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Update the go.mod file for the dependent repository: core repository",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Open the go.mod file"),(0,o.kt)("li",{parentName:"ul"},"Copy the generated pseudo version reference"),(0,o.kt)("li",{parentName:"ul"},"Replace the scheduler-interface version reference with the one generated in step 3."),(0,o.kt)("li",{parentName:"ul"},"Save the go.mod file"))),(0,o.kt)("li",{parentName:"ol"},"Run a ",(0,o.kt)("inlineCode",{parentName:"li"},"make test")," to be sure that the change works. The build will pull down the new dependency and the change in the scheduler interface will be used."),(0,o.kt)("li",{parentName:"ol"},"Commit the changes into the master branch on GitHub and pull the latest master branch commit")),(0,o.kt)("h2",{id:"updating-a-shim-dependency"},"Updating a shim dependency"),(0,o.kt)("p",null,"Before updating a shim dependency you must make sure that the core dependency has been updated and committed.\nThere are cases that the reference for the scheduler-interface has not changed.\nThis is not an issue, either skip the update steps or execute them as per normal resulting in no changes as part of the commit."),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#generating-a-pseudo-version"},"Generate a new pseudo version")," for the core"),(0,o.kt)("li",{parentName:"ol"},"Update the go.mod file for the dependent repository: k8shim repository",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Open the go.mod file"),(0,o.kt)("li",{parentName:"ul"},"Copy the generated pseudo version reference of the scheduler interface"),(0,o.kt)("li",{parentName:"ul"},"Replace the scheduler-interface version reference with the one generated in step 3."),(0,o.kt)("li",{parentName:"ul"},"Copy the generated pseudo version reference of the core"),(0,o.kt)("li",{parentName:"ul"},"Replace the core version reference with the one generated in step 7."),(0,o.kt)("li",{parentName:"ul"},"Save the go.mod file"))),(0,o.kt)("li",{parentName:"ol"},"Run a ",(0,o.kt)("inlineCode",{parentName:"li"},"make test")," to be sure that the change works. The build will pull down the new dependency and the changes in the core and scheduler interface will be used."),(0,o.kt)("li",{parentName:"ol"},"Commit the changes into the master branch on GitHub")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If multiple PRs are being worked on in the scheduler interface and or core at the same time a different PR might have already applied the update.\nThis will all depend on the commit order.\nIt is therefor that steps 5 and 8 are performed to make sure there is no regression.")),(0,o.kt)("h2",{id:"generating-a-pseudo-version"},"Generating a pseudo version"),(0,o.kt)("p",null,"A pseudo references for use in a go.mod file is based on the commit hash and timestamp.\nIt is simple to generate one using the following steps: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Change to the repository for which the new pseudo version needs to be generated."),(0,o.kt)("li",{parentName:"ol"},"Update the local checked out code for the master branch to get the latest commits")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git pull; git status\n")),(0,o.kt)("p",null,"The status should show up to date with the ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," from where it was cloned.\n3. Run the following command to get the pseudo version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TZ=UTC git --no-pager show --quiet --abbrev=12 --date='format-local:%Y%m%d%H%M%S' --format='v0.0.0-%cd-%h'\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"This command will print a line like this:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"v0.0.0-20220318052402-b3dfd0d2adaa\n")),(0,o.kt)("p",null,"That is the pseudo version that can be used in the go.mod files."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The pseudo version must be based on a commit that is in the vcs system, i.e. from Github.\nLocal commits or commits that are not yet merged in a PR cannot be used.")))}h.isMDXComponent=!0}}]);