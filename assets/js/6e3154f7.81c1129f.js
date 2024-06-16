"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37974],{47573:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=t(13274),r=t(1780);const i={id:"dependencies",title:"Go module updates"},o=void 0,d={id:"developer_guide/dependencies",title:"Go module updates",description:"\x3c!--",source:"@site/docs/developer_guide/dependencies.md",sourceDirName:"developer_guide",slug:"/developer_guide/dependencies",permalink:"/docs/next/developer_guide/dependencies",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"dependencies",title:"Go module updates"},sidebar:"docs",previous:{title:"Build and Run",permalink:"/docs/next/developer_guide/build"},next:{title:"Deploy to Kubernetes",permalink:"/docs/next/developer_guide/deployment"}},h={},c=[{value:"When to update",id:"when-to-update",level:2},{value:"Why a pseudo version",id:"why-a-pseudo-version",level:2},{value:"Enforcement of pseudo version",id:"enforcement-of-pseudo-version",level:2},{value:"Updating the core dependency",id:"updating-the-core-dependency",level:2},{value:"Updating a shim dependency",id:"updating-a-shim-dependency",level:2},{value:"Generating a pseudo version",id:"generating-a-pseudo-version",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"when-to-update",children:"When to update"}),"\n",(0,s.jsxs)(n.p,{children:["The references in the ",(0,s.jsx)(n.code,{children:"master"})," branches must be updated if a change is made in the scheduler interface.\nUpdating the dependency of a shim in reference to the core might be needed even if the scheduler interface does not change.\nNew functionality could be added that rely on changed field content of the messages, not the field layout of the message.\nIn that case just the shim dependency needs to be updated."]}),"\n",(0,s.jsx)(n.h2,{id:"why-a-pseudo-version",children:"Why a pseudo version"}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"master"})," branch we ",(0,s.jsx)(n.strong,{children:"must"})," use a pseudo version for all the YuniKorn repository references we use.\nAs the branch is in active development and not released we do not have a real version tag to reference.\nHowever, we still need to be able to point to the right commit for the dependencies."]}),"\n",(0,s.jsxs)(n.p,{children:["Go allows using ",(0,s.jsx)(n.a,{href:"https://go.dev/ref/mod#pseudo-versions",children:"pseudo versions"})," for these specific cases.\nAn example of the pseudo versions we use in the Kubernetes shim:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"module github.com/apache/yunikorn-k8shim\n\ngo 1.16\n\nrequire (\n\tgithub.com/apache/yunikorn-core v0.0.0-20220325135453-73d55282f052\n\tgithub.com/apache/yunikorn-scheduler-interface v0.0.0-20220325134135-4a644b388bc4\n\t...\n)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Release branches ",(0,s.jsx)(n.strong,{children:"must"})," not use pseudo versions.\nDuring the creation of a release, ",(0,s.jsx)(n.a,{href:"/community/release_procedure#tag-and-update-release-for-version",children:"tags"})," will be created.\nThese tags will be used as the reference in the go.mod files for the release."]}),"\n",(0,s.jsx)(n.h2,{id:"enforcement-of-pseudo-version",children:"Enforcement of pseudo version"}),"\n",(0,s.jsxs)(n.p,{children:["In the pull request checks for the ",(0,s.jsx)(n.code,{children:"yunikorn-core"})," and ",(0,s.jsx)(n.code,{children:"yunikorn-k8shim"})," repositories enforce the format of the versions.\nA build failure will be triggered if the version reference for the ",(0,s.jsx)(n.code,{children:"yunikorn-core"})," or ",(0,s.jsx)(n.code,{children:"yunikorn-scheduler-interface"}),"\nrepositories in the ",(0,s.jsx)(n.code,{children:"master"})," branch is not a pseudo version."]}),"\n",(0,s.jsxs)(n.p,{children:["The check enforces that the start of the version reference is ",(0,s.jsx)(n.code,{children:"v.0.0.0-"})]}),"\n",(0,s.jsxs)(n.p,{children:["Pseudo versions are not enforced in the release branches as per ",(0,s.jsx)(n.a,{href:"#why-a-pseudo-version",children:"why a pseudo version"})," explanation above."]}),"\n",(0,s.jsx)(n.h2,{id:"updating-the-core-dependency",children:"Updating the core dependency"}),"\n",(0,s.jsx)(n.p,{children:"Before updating the core dependency must make sure that the scheduler interface changes are finalised."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Make the changes in the scheduler interface."}),"\n",(0,s.jsx)(n.li,{children:"Commit the changes into the master branch on GitHub and pull the latest master branch commit."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#generating-a-pseudo-version",children:"Generate a new pseudo version"})," for the scheduler-interface."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Updating the core dependency"}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Update the go.mod file for the dependent repository: core repository","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open the go.mod file"}),"\n",(0,s.jsx)(n.li,{children:"Copy the generated pseudo version reference"}),"\n",(0,s.jsx)(n.li,{children:"Replace the scheduler-interface version reference with the one generated in step 3."}),"\n",(0,s.jsx)(n.li,{children:"Save the go.mod file"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Run a ",(0,s.jsx)(n.code,{children:"make test"})," to be sure that the change works. The build will pull down the new dependency and the change in the scheduler interface will be used."]}),"\n",(0,s.jsx)(n.li,{children:"Commit the changes into the master branch on GitHub and pull the latest master branch commit"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"updating-a-shim-dependency",children:"Updating a shim dependency"}),"\n",(0,s.jsx)(n.p,{children:"Before updating a shim dependency you must make sure that the core dependency has been updated and committed.\nThere are cases that the reference for the scheduler-interface has not changed.\nThis is not an issue, either skip the update steps or execute them as per normal resulting in no changes as part of the commit."}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#generating-a-pseudo-version",children:"Generate a new pseudo version"})," for the core"]}),"\n",(0,s.jsxs)(n.li,{children:["Update the go.mod file for the dependent repository: k8shim repository","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open the go.mod file"}),"\n",(0,s.jsx)(n.li,{children:"Copy the generated pseudo version reference of the scheduler interface"}),"\n",(0,s.jsx)(n.li,{children:"Replace the scheduler-interface version reference with the one generated in step 3."}),"\n",(0,s.jsx)(n.li,{children:"Copy the generated pseudo version reference of the core"}),"\n",(0,s.jsx)(n.li,{children:"Replace the core version reference with the one generated in step 7."}),"\n",(0,s.jsx)(n.li,{children:"Save the go.mod file"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Run a ",(0,s.jsx)(n.code,{children:"make test"})," to be sure that the change works. The build will pull down the new dependency and the changes in the core and scheduler interface will be used."]}),"\n",(0,s.jsx)(n.li,{children:"Commit the changes into the master branch on GitHub"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If multiple PRs are being worked on in the scheduler interface and or core at the same time a different PR might have already applied the update.\nThis will all depend on the commit order.\nIt is therefor that steps 5 and 8 are performed to make sure there is no regression."})}),"\n",(0,s.jsx)(n.h2,{id:"generating-a-pseudo-version",children:"Generating a pseudo version"}),"\n",(0,s.jsx)(n.p,{children:"A pseudo references for use in a go.mod file is based on the commit hash and timestamp.\nIt is simple to generate one using the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Change to the repository for which the new pseudo version needs to be generated."}),"\n",(0,s.jsx)(n.li,{children:"Update the local checked out code for the master branch to get the latest commits"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git pull; git status\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The status should show up to date with the ",(0,s.jsx)(n.code,{children:"origin"})," from where it was cloned.\n3. Run the following command to get the pseudo version:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"TZ=UTC git --no-pager show --quiet --abbrev=12 --date='format-local:%Y%m%d%H%M%S' --format='v0.0.0-%cd-%h'\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"This command will print a line like this:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"v0.0.0-20220318052402-b3dfd0d2adaa\n"})}),"\n",(0,s.jsx)(n.p,{children:"That is the pseudo version that can be used in the go.mod files."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The pseudo version must be based on a commit that is in the vcs system, i.e. from Github.\nLocal commits or commits that are not yet merged in a PR cannot be used."})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1780:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(79474);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);