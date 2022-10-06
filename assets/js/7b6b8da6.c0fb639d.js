"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7370],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,m=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30481:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return h}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"release_procedure",title:"Release Procedure"},s=void 0,p={type:"mdx",permalink:"/community/release_procedure",source:"@site/src/pages/community/release_procedure.md",title:"Release Procedure",description:"\x3c!--",frontMatter:{id:"release_procedure",title:"Release Procedure"}},h=[{value:"Release Procedure",id:"release-procedure",level:2},{value:"Step-by-step procedure",id:"step-by-step-procedure",level:2},{value:"Tag and update release for version",id:"tag-and-update-release-for-version",level:3},{value:"Update the CHANGELOG",id:"update-the-changelog",level:3},{value:"Run the release tool",id:"run-the-release-tool",level:3},{value:"Create Signature",id:"create-signature",level:4},{value:"Create Checksum",id:"create-checksum",level:4},{value:"Upload Release Candidate Artifacts",id:"upload-release-candidate-artifacts",level:3},{value:"Start Voting Thread",id:"start-voting-thread",level:3},{value:"Publish the Release",id:"publish-the-release",level:3},{value:"Release Docker images",id:"release-docker-images",level:4},{value:"Release Helm Charts",id:"release-helm-charts",level:4},{value:"Update the website",id:"update-the-website",level:4},{value:"Cleanup",id:"cleanup",level:4},{value:"Create the GIT releases",id:"create-the-git-releases",level:4},{value:"Verify the release",id:"verify-the-release",level:3},{value:"Website updates for a new release",id:"website-updates-for-a-new-release",level:2},{value:"Version the documentation",id:"version-the-documentation",level:3},{value:"Release announcement",id:"release-announcement",level:3},{value:"Update the download page",id:"update-the-download-page",level:3},{value:"Signing your first release",id:"signing-your-first-release",level:2},{value:"Generate a Key",id:"generate-a-key",level:3},{value:"Add the signature to the project KEYS file",id:"add-the-signature-to-the-project-keys-file",level:3}],u={toc:h};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"yunikorn-release-procedure"},"YuniKorn Release Procedure"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release"},"release repository")," contains the code and configuration to create a release for Apache YuniKorn.\nBefore starting the release procedure clone the repository and checkout the master branch.\nEven if a release has been made before make sure that the latest version is checked out as the code and or config might have changed.  "),(0,l.kt)("p",null,"The instructions and tools obey the ASF ",(0,l.kt)("a",{parentName:"p",href:"http://www.apache.org/legal/release-policy.html"},"release policy"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#release-procedure"},"Release procedure")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#step-by-step-procedure"},"Step-by-step procedure"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tag-and-update-release-for-version"},"Tag and update release for version")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#update-the-changelog"},"Update the CHANGELOG")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#run-the-release-tool"},"Run the release tool"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-signature"},"Create Signature")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-checksum"},"Create Checksum")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#upload-release-candidate-artifacts"},"Upload Release Candidate Artifacts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#start-voting-thread"},"Start Voting Thread")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#publish-the-release"},"Publish the Release"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#release-docker-images"},"Release Docker images")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#release-helm-charts"},"Release Helm Charts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#update-the-website"},"Update the website")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cleanup"},"Cleanup")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-the-git-releases"},"Create the GIT releases")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#verify-the-release"},"Verify the release")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#website-updates-for-a-new-release"},"Website updates for a new release"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-the-documentation"},"Version the documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#release-announcement"},"Release announcement")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#update-the-download-page"},"Update the download page")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#signing-your-first-release"},"Signing your first release"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#generate-a-key"},"Generate a Key")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#add-the-signature-to-the-project-keys-file"},"Add the signature to the project KEYS file"))))),(0,l.kt)("h2",{id:"release-procedure"},"Release Procedure"),(0,l.kt)("p",null,"Simplified release procedure:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a release branch for the target release in all git repos, such as ",(0,l.kt)("inlineCode",{parentName:"li"},"branch-0.8")),(0,l.kt)("li",{parentName:"ol"},"Stabilize the release by fixing test failures and bugs only"),(0,l.kt)("li",{parentName:"ol"},"Tag update release for a new version to prepare a release candidate, e.g ",(0,l.kt)("inlineCode",{parentName:"li"},"v0.8.0-1")," for RC1"),(0,l.kt)("li",{parentName:"ol"},"Update the CHANGELOG"),(0,l.kt)("li",{parentName:"ol"},"Configure ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-release/tree/master/tools/release-configs.json"},"release-configs.json")),(0,l.kt)("li",{parentName:"ol"},"Run script ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-release/tree/master/tools/build-release.py"},"build-release.py")," to generate source code tarball, checksum and signature."),(0,l.kt)("li",{parentName:"ol"},"Voting and releasing the candidate")),(0,l.kt)("h2",{id:"step-by-step-procedure"},"Step-by-step procedure"),(0,l.kt)("h3",{id:"tag-and-update-release-for-version"},"Tag and update release for version"),(0,l.kt)("p",null,"Branching and tagging can, and in most cases will, require changes in the go mod files.\nBranching is part of the release preparation and often has happened some time before the release process starts.\nA release needs to be tagged in git before starting the release process.\nAs an example check ",(0,l.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-358"},"YUNIKORN-358")," and ",(0,l.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1004"},"YUNIKORN-1004"),".\nRelease candidates should be tagged with the version and build number of the release candidate.\nFor example, artifacts used to build 0.8.0 RC2 should be tagged ",(0,l.kt)("inlineCode",{parentName:"p"},"v0.8.0-2")," and releases created in GitHub.\nOnce the release is finalized, git tags and GitHub releases should be created for ",(0,l.kt)("inlineCode",{parentName:"p"},"v0.8.0")," pointing to the same commits.\nUnder no circumstances should an existing tag be removed or moved. This will break golang dependency resolution for downstream users."),(0,l.kt)("p",null,"The tagging is multistep process, all actions are done on the branch that will be released, like ",(0,l.kt)("inlineCode",{parentName:"p"},"branch-0.8"),":"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Tag the web and scheduler interface with the release tag."),(0,l.kt)("li",{parentName:"ol"},"Update the ",(0,l.kt)("inlineCode",{parentName:"li"},"go.mod")," file in the core using ",(0,l.kt)("inlineCode",{parentName:"li"},"go get github.com/apache/yunikorn-scheduler-interface"),(0,l.kt)("br",{parentName:"li"}),"Add the tag and commit the changes."),(0,l.kt)("li",{parentName:"ol"},"Update the ",(0,l.kt)("inlineCode",{parentName:"li"},"go.mod")," file in the shim using ",(0,l.kt)("inlineCode",{parentName:"li"},"go get github.com/apache/yunikorn-scheduler-interface")," and",(0,l.kt)("br",{parentName:"li"}),(0,l.kt)("inlineCode",{parentName:"li"},"go get github.com/apache/yunikorn-core"),". Add the tag and commit the changes."),(0,l.kt)("li",{parentName:"ol"},"Create a new branch in the yunikorn-release repo, set the correct chart version in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-release/tree/master/helm-charts/yunikorn/Chart.yaml"},"Chart.yaml"),", and then create the tag.")),(0,l.kt)("h3",{id:"update-the-changelog"},"Update the CHANGELOG"),(0,l.kt)("p",null,"In the release artifacts a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release/tree/master/release-top-level-artifacts/CHANGELOG"},"CHANGELOG")," is added for each release.\nThe CHANGELOG should contain the list of jiras fixed in the release.\nFollow these steps to generate the list:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Go to the ",(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/projects/YUNIKORN?selectedItem=com.atlassian.jira.jira-projects-plugin%3Arelease-page&status=released-unreleased"},"releases page in jira")),(0,l.kt)("li",{parentName:"ul"},"Click on the version that is about to be released, i.e. ",(0,l.kt)("inlineCode",{parentName:"li"},"0.8.0")),(0,l.kt)("li",{parentName:"ul"},"Click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"Release Notes")," link on the top of the page"),(0,l.kt)("li",{parentName:"ul"},"Click the button ",(0,l.kt)("inlineCode",{parentName:"li"},"Configure Release Notes")),(0,l.kt)("li",{parentName:"ul"},"Select the style ",(0,l.kt)("inlineCode",{parentName:"li"},"Text")," and click ",(0,l.kt)("inlineCode",{parentName:"li"},"create")),(0,l.kt)("li",{parentName:"ul"},"Scroll to the bottom of the page and copy the content of the text area and update the CHANGELOG file in the ../release-top-level-artifacts directory.")),(0,l.kt)("h3",{id:"run-the-release-tool"},"Run the release tool"),(0,l.kt)("p",null,"A tool has been written to handle most of the release tasks.\nThe tool requires a simple ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release/tree/master/tools/release-configs.json"},"json")," input file to be updated before running.\nThis configuration points to the tag to use in the release and the version to release.\nUpdate the version to release and the tag for each repository.\nThe version used must be the ",(0,l.kt)("em",{parentName:"p"},"exact")," version that you intend to release.\nSo ",(0,l.kt)("inlineCode",{parentName:"p"},"0.8.0")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"0.12.2")," ",(0,l.kt)("strong",{parentName:"p"},"without")," any additional references like a ",(0,l.kt)("inlineCode",{parentName:"p"},"RC1")," or something similar.\nThe version is used as part of the source code, inside the Makefile etc., and to name the release artefact and cannot be changed anymore.\nThe tag format is as described in the ",(0,l.kt)("a",{parentName:"p",href:"#tag-and-update-release-for-version"},"step tag and release version")),(0,l.kt)("p",null,"As an example when releasing the first release candidate for ",(0,l.kt)("inlineCode",{parentName:"p"},"0.8.0")," the json file should contain version and tag information like below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "release": {\n    "version": "0.8.0"\n  },\n\n  "tag": "v0.8.0-1",\n  "repository": "https://github..."\n}\n')),(0,l.kt)("p",null,"The tool has one requirement outside of standard Python 3: ",(0,l.kt)("a",{parentName:"p",href:"https://gitpython.readthedocs.io/en/stable/intro.html"},"GitPython"),"\nMake sure you have installed it by running ",(0,l.kt)("inlineCode",{parentName:"p"},"pip install gitpython"),"."),(0,l.kt)("p",null,"Run the tool:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"python3 build-release.py\n")),(0,l.kt)("p",null,"If you want to automatically sign the release using your GPG key run the tool using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"python3 build-release.py --sign <email-address>\n")),(0,l.kt)("h4",{id:"create-signature"},"Create Signature"),(0,l.kt)("p",null,"If you have GPG with a ",(0,l.kt)("em",{parentName:"p"},"pinentry")," program setup you can automatically sign the release using the release tool.\nOn MacOSX this will be setup automatically if you use the keychain for the keys.\nFor more details check the ",(0,l.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/index.php/GnuPG"},"GnuPG tools wiki")," and specifically the ",(0,l.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/index.php/GnuPG#pinentry"},"pinentry")," chapter."),(0,l.kt)("p",null,"Run the release tool using the option ",(0,l.kt)("inlineCode",{parentName:"p"},"--sign <email-address>")," to auto sign the release."),(0,l.kt)("p",null,"Manually creating the signature for the file generated by the tool:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"gpg --local-user <email-address> --armor --output apache-yunikorn-0.8.0-src.tar.gz.asc --detach-sig apache-yunikorn-0.8.0-src.tar.gz\n")),(0,l.kt)("p",null,"This will create the signature in the file: ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-yunikorn-0.8.0-src.tar.gz.asc"),"\nVerify that the signature is correct using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"gpg --verify apache-yunikorn-0.8.0-src.tar.gz.asc apache-yunikorn-0.8.0-src.tar.gz\n")),(0,l.kt)("h4",{id:"create-checksum"},"Create Checksum"),(0,l.kt)("p",null,"This step is included in the release after generation of the source tar ball, if the release tool is used this step can be skipped."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"shasum -a 512 apache-yunikorn-0.8.0-src.tar.gz > apache-yunikorn-0.8.0-src.tar.gz.sha512\n")),(0,l.kt)("p",null,"This will create the checksum in the file: ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-yunikorn-0.8.0-src.tar.gz.sha512"),"\nVerify that the checksum is correct using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"shasum -a 512 -c apache-yunikorn-0.8.0-src.tar.gz.sha512 \n")),(0,l.kt)("h3",{id:"upload-release-candidate-artifacts"},"Upload Release Candidate Artifacts"),(0,l.kt)("p",null,"The release artifacts consist of three parts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"source tarball"),(0,l.kt)("li",{parentName:"ul"},"signature file"),(0,l.kt)("li",{parentName:"ul"},"checksum file")),(0,l.kt)("p",null,"The three artefacts need to be uploaded to: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://dist.apache.org/repos/dist/dev/yunikorn/")," "),(0,l.kt)("p",null,"Create a release directory based on the version, i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},"0.8.0"),", add the three files to directory.\nCommit the changes."),(0,l.kt)("p",null,"If you have not done so already make sure to ",(0,l.kt)("a",{parentName:"p",href:"#add-the-signature-to-the-project-keys-file"},"add your signature")," to the KEYS file.\nDo not remove any keys from the file they are kept here to enable older releases to be verified."),(0,l.kt)("p",null,"NOTE: you will need to install subversion to access this repo (use your apache ID). You can use any SVN client, e.g svnX, for convenience."),(0,l.kt)("h3",{id:"start-voting-thread"},"Start Voting Thread"),(0,l.kt)("p",null,"According to the Apache ",(0,l.kt)("a",{parentName:"p",href:"http://www.apache.org/legal/release-policy.html#release-approval"},"release approval doc"),"\nA voting thread must be created on ",(0,l.kt)("inlineCode",{parentName:"p"},"dev@yunikorn.apache.org")," and run for at least 72 hours.\nAt least three +1 votes are required and more +1 votes than -1 votes."),(0,l.kt)("h3",{id:"publish-the-release"},"Publish the Release"),(0,l.kt)("p",null,"Once the voting is passed, move the release artefacts from the staging area to the release location ",(0,l.kt)("inlineCode",{parentName:"p"},"https://dist.apache.org/repos/dist/release/yunikorn/"),".\nOnce moved to this space, the content will be automatically synced to ",(0,l.kt)("inlineCode",{parentName:"p"},"https://downloads.apache.org/yunikorn/")," which must be used as the final location for all release files."),(0,l.kt)("p",null,"Read more about the ",(0,l.kt)("a",{parentName:"p",href:"https://apache.org/history/mirror-history.html"},"distribution services")," for the source code."),(0,l.kt)("p",null,"This will temporarily provide us with two releases in the release area.\nThis is needed to allow the start the mirror sync process and allow for the download page to be updated.\nCleanup of the older release is handled after the website has been updated in the ",(0,l.kt)("a",{parentName:"p",href:"#cleanup"},"cleanup"),"."),(0,l.kt)("h4",{id:"release-docker-images"},"Release Docker images"),(0,l.kt)("p",null,"As part of the release convenience images are build and uploaded to the Apache account on DockerHub.\nAs we added multi architecture support the release of the images has become a bit more complex and is now tool driven."),(0,l.kt)("p",null,"The Go compiler built-in in functionality is leveraged to cross-compile the executables for the scheduler and admission controller.\nThe web UI is a javascript application which does not require any special handling."),(0,l.kt)("p",null,"Besides that, the minimum requirement for building the multi architecture images is multi architecture support in Docker.\nMulti architecture support is needed to be able to build both ",(0,l.kt)("inlineCode",{parentName:"p"},"amd64")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"arm64")," images on your local machine.\nBuilding the images for different architectures requires emulation of the non-native architecture to run the build instructions."),(0,l.kt)("p",null,"Support for emulating different architectures is provided by ",(0,l.kt)("a",{parentName:"p",href:"https://www.qemu.org"},"QEMU"),".\nThe QEMU software is installed as part of Docker Desktop on Mac OSX and Windows.\nFor linux based build machines a manual installation of the QEMU package has to be performed.\nThe multi architecture build has been tested using Docker on Debian also. On Debian this only requires the ",(0,l.kt)("inlineCode",{parentName:"p"},"qemu-user-static")," package.\nOther distribution might require different docker and or QEMU install instructions."),(0,l.kt)("p",null,"The expectation is that this tool is run from the same location as the ",(0,l.kt)("a",{parentName:"p",href:"#run-the-release-tool"},"release tool")," was run from.\nConfiguration and code used as the input for this build ",(0,l.kt)("strong",{parentName:"p"},"must")," be the same as that was used for the source release."),(0,l.kt)("p",null,"Run the image release tool:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"python3 build-image.py\n")),(0,l.kt)("p",null,"A standard run of the tool will ask for the docker hub credentials.\nThe credentials used must have ",(0,l.kt)("em",{parentName:"p"},"write")," access to the ",(0,l.kt)("inlineCode",{parentName:"p"},"apache/yunikorn")," docker hub area."),(0,l.kt)("p",null,"The tool will then build all the images:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"admission"),(0,l.kt)("li",{parentName:"ul"},"scheduler"),(0,l.kt)("li",{parentName:"ul"},"scheduler-plugin"),(0,l.kt)("li",{parentName:"ul"},"web")),(0,l.kt)("p",null,"Each image will be built twice, once for ",(0,l.kt)("inlineCode",{parentName:"p"},"amd64")," and once for ",(0,l.kt)("inlineCode",{parentName:"p"},"arm64"),".\nAll images are pushed to the docker hub.\nWhen both architectures are built a manifest is created for the multi architecture image.\nThe manifest is pushed to docker hub and a cleanup of unused tags is executed."),(0,l.kt)("p",null,"The whole process can take a while as builds of executables and docker images are executed multiple times. "),(0,l.kt)("p",null,"If you want to test the tool run to make sure it all works you can run the tool against a non apache repository.\nFor this you provide the optional variable on the command line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"python3 build-release.py --repository <name>\n")),(0,l.kt)("h4",{id:"release-helm-charts"},"Release Helm Charts"),(0,l.kt)("p",null,"This step is part of the release tool if the release tool is used the packaging can be skipped."),(0,l.kt)("p",null,"If the release tool is ",(0,l.kt)("strong",{parentName:"p"},"not")," used the ",(0,l.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," must be updated manually.\nThe other option is to run the helm script against the generated source directory as the tool does:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm package --sign --key ${your_key_name} --keyring ${path/to/keyring.secret} staging/<release-dir>/helm-charts/yunikorn --destination staging/\n")),(0,l.kt)("p",null,"Signing the helm package requires a legacy PGP keyring. The PGP v2 keyring must be converted to the legacy format.\nFor more information please check ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/provenance/"},"Helm documentation"),".\nHelm charts should be signed on release.\nContrary to the source code tar ball signing, signing the helm charts requires manual entry of the key password."),(0,l.kt)("p",null,"The helm package will generate two files:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"helm package: example ",(0,l.kt)("inlineCode",{parentName:"li"},"yunikorn-0.8.0.tgz")),(0,l.kt)("li",{parentName:"ul"},"provenance or signature file: example ",(0,l.kt)("inlineCode",{parentName:"li"},"yunikorn-0.8.0.tgz.prov"))),(0,l.kt)("p",null,"Both files should be attached to the ",(0,l.kt)("a",{parentName:"p",href:"#create-the-git-releases"},"release in GIT")," for the release repository."),(0,l.kt)("p",null,"Last step is to update the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release/blob/gh-pages/index.yaml"},"index.yaml")," file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch with the new release.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"digest")," mentioned in the index.yaml file is the digest that gets printed by the tool (unsigned package) or stored in the provenance file.\nIt can be generated manually using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"shasum -a 256 yunikorn-0.8.0.tgz\n")),(0,l.kt)("p",null,"Note: do not use the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm repo index")," command to update the ",(0,l.kt)("inlineCode",{parentName:"p"},"index.yaml")," file. The command does not handle the enhanced information stored in the ",(0,l.kt)("inlineCode",{parentName:"p"},"index.yaml")," file nicely.\nUpdate the file manually."),(0,l.kt)("h4",{id:"update-the-website"},"Update the website"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a new documentation version on YuniKorn website based on the latest content in the ",(0,l.kt)("inlineCode",{parentName:"li"},"docs")," directory.\nRefer to ",(0,l.kt)("a",{parentName:"li",href:"#version-the-documentation"},"these steps")," on how to create the new documentation version. "),(0,l.kt)("li",{parentName:"ul"},"Create the release announcement to be referenced from download page on the website.\nThe release announcement is a markdown file based on the version: ",(0,l.kt)("inlineCode",{parentName:"li"},"0.8.0.md"),".\nThe steps on how to create the ",(0,l.kt)("a",{parentName:"li",href:"#release-announcement"},"release announcement")," explains the content and where to add the file. "),(0,l.kt)("li",{parentName:"ul"},"Update the ",(0,l.kt)("a",{parentName:"li",href:"/community/download"},"download page")," of the website as per the ",(0,l.kt)("a",{parentName:"li",href:"#update-the-download-page"},"steps"),".")),(0,l.kt)("p",null,"The site can, and most likely will, contain an announcement bar.\nThis announcement bar is part of the ",(0,l.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file in the root of the source tree.\nUpdate the announcement bar to the correct release."),(0,l.kt)("p",null,"At this point all changes for the release are done and an announcement email can be sent to the ",(0,l.kt)("inlineCode",{parentName:"p"},"dev@yunikorn.apache.org")," email list."),(0,l.kt)("h4",{id:"cleanup"},"Cleanup"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE"),": this step should be performed after the website updates have been made as the download links change."),(0,l.kt)("p",null,"There should only be one release, the latest, in the release area.\nAny release that has been in the release area will be automatically copied to the archive.\nOlder releases should be downloaded from the archive directly, not from the release area."),(0,l.kt)("p",null,"The releases need to clean up in two locations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Remove the newly released version from the ",(0,l.kt)("em",{parentName:"li"},"dev")," area by removing the old release candidate directory.\nFor the location see ",(0,l.kt)("a",{parentName:"li",href:"#upload-release-candidate-artifacts"},"release candidate location")),(0,l.kt)("li",{parentName:"ul"},"Remove the non-current release from the ",(0,l.kt)("em",{parentName:"li"},"release")," area by removing the old release directory.\nFor the location see ",(0,l.kt)("a",{parentName:"li",href:"#publish-the-release"},"release location"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE"),": If there are multiple releases actively maintained then there could be multiple releases in the release area.\nWe ",(0,l.kt)("em",{parentName:"p"},"must")," have only one release per active branch in the ",(0,l.kt)("em",{parentName:"p"},"release")," area, i.e. one for 1.0, one for 1.1 etc.\nFor detailed information you can check the ",(0,l.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-distribution.html"},"release distribution policy"),".   "),(0,l.kt)("h4",{id:"create-the-git-releases"},"Create the GIT releases"),(0,l.kt)("p",null,"In the GIT repositories finish the release process by creating a release based on the git tag that was added.\nRepeat these steps for all five repositories (core, k8shim, web, scheduler-interface and release):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Go to the ",(0,l.kt)("inlineCode",{parentName:"li"},"tags")," page"),(0,l.kt)("li",{parentName:"ul"},"click the ",(0,l.kt)("inlineCode",{parentName:"li"},"...")," at the right-hand side of the page that you want to release, select ",(0,l.kt)("inlineCode",{parentName:"li"},"Create Release")," from the drop down"),(0,l.kt)("li",{parentName:"ul"},"update the name and note"),(0,l.kt)("li",{parentName:"ul"},"add the packaged helm chart files (yunikorn-release repository only)"),(0,l.kt)("li",{parentName:"ul"},"click ",(0,l.kt)("inlineCode",{parentName:"li"},"Publish Release")," to finish the steps")),(0,l.kt)("h3",{id:"verify-the-release"},"Verify the release"),(0,l.kt)("p",null,"After the whole procedure has been finalised verify the documentation on the website.\nCheck that the released artifacts can be downloaded from the download page."),(0,l.kt)("h2",{id:"website-updates-for-a-new-release"},"Website updates for a new release"),(0,l.kt)("p",null,"Releasing a new version requires you to have yarn locally installed."),(0,l.kt)("p",null,"Pre-requisites:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The release must have been approved via the release process."),(0,l.kt)("li",{parentName:"ul"},"The source archive file and signatures must have been uploaded to the Apache locations."),(0,l.kt)("li",{parentName:"ul"},"The docker convenience images must have been pushed to the Apache docker hub.")),(0,l.kt)("p",null,"Open a PR and commit all the changes below to the ",(0,l.kt)("strong",{parentName:"p"},"master")," branch, once the auto-build is done, the new documentation will be presented on the website."),(0,l.kt)("h3",{id:"version-the-documentation"},"Version the documentation"),(0,l.kt)("p",null,"Documentation versioning uses the simple ",(0,l.kt)("strong",{parentName:"p"},"MAJOR.MINOR.PATCH")," semver version of the release.\nThis means no letters, release candidate tags or anything like that:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"yarn release 0.8.0\n")),(0,l.kt)("p",null,"This command will snapshot all the docs from the current ",(0,l.kt)("inlineCode",{parentName:"p"},"docs")," directory, and copy all files to another new directory\nunder ",(0,l.kt)("inlineCode",{parentName:"p"},"versioned_docs"),", e.g ",(0,l.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-0.8.0"),".\nA similar copy will be generated for the sidebar under ",(0,l.kt)("inlineCode",{parentName:"p"},"versioned_sidebars")," that belongs to the documentation version."),(0,l.kt)("p",null,"This process will also update the ",(0,l.kt)("inlineCode",{parentName:"p"},"version.json")," file in the root and add the new release as a line item."),(0,l.kt)("h3",{id:"release-announcement"},"Release announcement"),(0,l.kt)("p",null,"The release announcement is a static Markdown file added to the directory ",(0,l.kt)("inlineCode",{parentName:"p"},"src/pages/release-announce"),".\nThe file name is the same a simple semver version of the release:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"src/pages/release-announce/0.8.0.md\n")),(0,l.kt)("p",null,"The page is in Markdown format and should follow the example of the already existing pages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"id and title definition (docusaurus syntax)"),(0,l.kt)("li",{parentName:"ul"},"Apache license"),(0,l.kt)("li",{parentName:"ul"},"Following headings",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Overview of the release (level 2)"),(0,l.kt)("li",{parentName:"ul"},"Incompatible changes",(0,l.kt)("br",{parentName:"li"}),"Details for incompatible changes at level 3 heading"),(0,l.kt)("li",{parentName:"ul"},"Highlights (level 2)",(0,l.kt)("br",{parentName:"li"}),"Chosen highlights at level 3 heading"),(0,l.kt)("li",{parentName:"ul"},"Community update (level 2)")))),(0,l.kt)("h3",{id:"update-the-download-page"},"Update the download page"),(0,l.kt)("p",null,"The download page contains the link to the Apache source download, signatures etc.\nThe table on the page has a specific layout that is correctly rendered after going through the docusaurus build.\nPlease do not change the release entry layout in the table."),(0,l.kt)("p",null,"First step is to update the ",(0,l.kt)("inlineCode",{parentName:"p"},"latest release")," line to the correct version.",(0,l.kt)("br",{parentName:"p"}),"\n","Second step is to update the table: remove the last row from the table.\nDuplicate the first row of the table and change the links and details to reflect the new release details.\nAll links must be updated:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"3 for the download (source tar, checksum and signature)"),(0,l.kt)("li",{parentName:"ul"},"3 for the docker images (scheduler, admission controller and web)"),(0,l.kt)("li",{parentName:"ul"},"1 release announcement using a link in the form of ",(0,l.kt)("inlineCode",{parentName:"li"},"/release-announce/0.8.0"))),(0,l.kt)("p",null,"For the second row update the download links for the source tar, checksum and signature."),(0,l.kt)("p",null,"Links for the releases have to follow these rules:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The first download link on the page ",(0,l.kt)("strong",{parentName:"li"},"must")," use the mirror resolution link for the source tar ball only."),(0,l.kt)("li",{parentName:"ul"},"The signature and checksum links ",(0,l.kt)("strong",{parentName:"li"},"must")," point to the release location."),(0,l.kt)("li",{parentName:"ul"},"The non-current releases ",(0,l.kt)("strong",{parentName:"li"},"must")," use the archive links: ",(0,l.kt)("inlineCode",{parentName:"li"},"https://archive.apache.org/dist/yunikorn/")," for the tar ball, the signature and the checksum.")),(0,l.kt)("p",null,"A limited set of three (3) or four (4) releases should be maintained in the table for direct access.\nOlder releases not mentioned in the table can still be accessed via the archive link on the bottom of the page and do not need to be referenced."),(0,l.kt)("h2",{id:"signing-your-first-release"},"Signing your first release"),(0,l.kt)("p",null,"If you haven't signed any releases before, read the documentation to ",(0,l.kt)("a",{parentName:"p",href:"https://infra.apache.org/openpgp.html#generate-key"},"generate signing key"),"\nFollow the steps below to add the key you can use to sign."),(0,l.kt)("h3",{id:"generate-a-key"},"Generate a Key"),(0,l.kt)("p",null,"Generate a new PGP key (skip this step if you already have an Apache linked key):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"gpg --gen-key\n")),(0,l.kt)("p",null,"Fill out the requested information using your full name and Apache email address."),(0,l.kt)("p",null,"Upload the exported key to a public key server like ",(0,l.kt)("inlineCode",{parentName:"p"},"https://pgp.mit.edu/"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"gpg --export --armor <email-address>\n")),(0,l.kt)("p",null,"Upload the fingerprint to apache server: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://id.apache.org/"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"gpg --fingerprint <email-address>\n")),(0,l.kt)("h3",{id:"add-the-signature-to-the-project-keys-file"},"Add the signature to the project KEYS file"),(0,l.kt)("p",null,"Only needed if this is the first release signed with the specific key.\nMore detail can be found in the document: ",(0,l.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-signing.html#keys-policy"},"Signing a Release")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"(gpg --list-sigs <email-address> && gpg --armor --export <email-address>) >> MY_KEY\n")),(0,l.kt)("p",null,"Add the content of the generated file to the existing KEYS list at ",(0,l.kt)("inlineCode",{parentName:"p"},"https://dist.apache.org/repos/dist/release/yunikorn/KEYS"),"\nNever remove a key from this list!"),(0,l.kt)("p",null,"NOTE: you will need to install subversion to access this repo (use your apache ID). You can use any SVN client, e.g. svnX, for convenience."))}d.isMDXComponent=!0}}]);