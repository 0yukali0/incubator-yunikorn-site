"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75853],{1362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var o=n(13274),i=n(1780);const s={id:"user_group",title:"User/Group handling and lookup design"},r=void 0,a={id:"design/user_group",title:"User/Group handling and lookup design",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.0/design/user_group_handling.md",sourceDirName:"design",slug:"/design/user_group",permalink:"/docs/1.5.0/design/user_group",draft:!1,unlisted:!1,tags:[],version:"1.5.0",frontMatter:{id:"user_group",title:"User/Group handling and lookup design"},sidebar:"docs",previous:{title:"Gang scheduling design",permalink:"/docs/1.5.0/design/gang_scheduling"},next:{title:"User Based Resource Usage Tracking",permalink:"/docs/1.5.0/design/user_based_resource_usage_tracking"}},l={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Goals",id:"goals",level:2},{value:"Non Goals",id:"non-goals",level:2},{value:"Kubernetes user and group handling",id:"kubernetes-user-and-group-handling",level:2},{value:"User model",id:"user-model",level:3},{value:"User information as part of authentication",id:"user-information-as-part-of-authentication",level:3},{value:"Groups in authentication",id:"groups-in-authentication",level:3},{value:"Current findings and challenges",id:"current-findings-and-challenges",level:3},{value:"YuniKorn group retrieval",id:"yunikorn-group-retrieval",level:2},{value:"Proposed user information object",id:"proposed-user-information-object",level:2},{value:"Annotation name",id:"annotation-name",level:3},{value:"Annotation content",id:"annotation-content",level:3},{value:"Annotation mutation",id:"annotation-mutation",level:3},{value:"Backwards compatibility",id:"backwards-compatibility",level:3},{value:"Providing user and group externally",id:"providing-user-and-group-externally",level:2},{value:"Pods from controllers",id:"pods-from-controllers",level:3},{value:"External applications",id:"external-applications",level:3},{value:"Configuration",id:"configuration",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["Currently, user-handling in YuniKorn is handled in a relatively simple manner. If the submitted pod contains a user label the content will be set as the username. The label name is configurable and defaults to yunikorn.apache.org/username. The value is extracted in the shim code ",(0,o.jsx)(t.a,{href:"https://github.com/apache/yunikorn-k8shim/blob/v1.0.0/pkg/common/utils/utils.go#L220",children:"GetUserFromPod"})," and passed to the core. If the label is not present or no value is set the username will be set to default."]}),"\n",(0,o.jsxs)(t.p,{children:["However, this makes it possible for every authenticated user to freely impersonate anyone. This allows a user to circumvent quotas and other user-based restrictions inside YuniKorn. Therefore, we need a robust, secure way to make sure that users are who they say they are. This impersonation should not be confused with ",(0,o.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#user-impersonation",children:"Kubernetes impersonation"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"In the core part of YuniKorn, we also perform group resolution, similar to a unix based system or for instance Hadoop. The default implementation is a nil-lookup. It simply populates the group slice with a single entry which is the same as the username. This is not fit for purpose and was only added as a placeholder until proper user and group resolution could be added."}),"\n",(0,o.jsx)(t.h2,{id:"goals",children:"Goals"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Define a stable way for user & group retrieval from Kubernetes"}),"\n",(0,o.jsx)(t.li,{children:"Assess fit of the current group resolution in the shim"}),"\n",(0,o.jsx)(t.li,{children:"Definition of user and group info on Kubernetes objects"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"non-goals",children:"Non Goals"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Authorisation or Authentication as part of:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"YuniKorn"}),"\n",(0,o.jsx)(t.li,{children:"Kubernetes"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"Changes to the way users are propagated between the shim and the core"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"kubernetes-user-and-group-handling",children:"Kubernetes user and group handling"}),"\n",(0,o.jsxs)(t.p,{children:["Dealing with how users are actually managed in Kubernetes is out of scope. What is important is the definitions that are used by Kubernetes for users. In Kubernetes, there are two kinds of accounts defined: ",(0,o.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/",children:"service and user accounts"}),". User accounts are for humans. Service accounts are set up for processes which run inside a pod and want to access the API server."]}),"\n",(0,o.jsx)(t.h3,{id:"user-model",children:"User model"}),"\n",(0,o.jsx)(t.p,{children:"Kubernetes, at this point in time, only manages service accounts, not users. Kubernetes does not have objects which represent user accounts. A user with valid credentials is considered authenticated."}),"\n",(0,o.jsx)(t.p,{children:"During the authentication phase the user account is mapped to a service account. For authorisation Kubernertes uses a sophisticated role-based (RBAC) or a simpler attribute-based (ABAC) model. All authorisation is linked to the service accounts, not to the user accounts. Beside the authentication there is thus no need for the user accounts. This is reflected in Kubernetes as after the authentication phase the user account is no longer tracked or available."}),"\n",(0,o.jsx)(t.p,{children:"The model used by Kubernetes thus limits what we can do to retrieve the user and or group details. All objects that are available inside the cluster to a scheduler, like YuniKorn, only have the service account information available. Getting access to the user account means that we need to intercept the information at an earlier stage."}),"\n",(0,o.jsx)(t.h3,{id:"user-information-as-part-of-authentication",children:"User information as part of authentication"}),"\n",(0,o.jsxs)(t.p,{children:["User accounts are required during the authentication stage. Authentication in Kubernetes is configurable via plugins. For more details, see the official document on ",(0,o.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/",children:"Kubernetes authentication"}),". The list of supported authentication plugins, not all of these plugins will be configured and or active by default:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"X.509 certificate"}),"\n",(0,o.jsx)(t.li,{children:"Static token file"}),"\n",(0,o.jsx)(t.li,{children:"OpenID connect tokens"}),"\n",(0,o.jsx)(t.li,{children:"Authentication proxy"}),"\n",(0,o.jsxs)(t.li,{children:["Authentication webhooks (",(0,o.jsx)(t.a,{href:"https://itnext.io/implementing-ldap-authentication-for-kubernetes-732178ec2155",children:"LDAP example"}),")"]}),"\n",(0,o.jsx)(t.li,{children:"Bootstrap token"}),"\n",(0,o.jsx)(t.li,{children:"Service Account Tokens"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"When using test clusters created by Minikube or KIND, X509 authentication is used by default and the current context is updated with the appropriate certificates and keys, making cluster access transparent."}),"\n",(0,o.jsx)(t.p,{children:"Authentication, independent of which option is used, provides the following details:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Username"}),"\n",(0,o.jsx)(t.li,{children:"userID"}),"\n",(0,o.jsx)(t.li,{children:"Groups"}),"\n",(0,o.jsx)(t.li,{children:"Extra information"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Where the details are stored or how they are retrieved depends on the authentication plugin used."}),"\n",(0,o.jsxs)(t.p,{children:["Kubernetes defines a special user for anonymous access, the ",(0,o.jsx)(t.code,{children:"system:anonymous"})," user belonging to the ",(0,o.jsx)(t.code,{children:"system:unauthenticated"})," group. Anonymous access is a security issue and should have been turned off in most clusters. This default mapping to a standardised user does provide the possibility to process authenticated and anonymous workloads in the same way."]}),"\n",(0,o.jsx)(t.h3,{id:"groups-in-authentication",children:"Groups in authentication"}),"\n",(0,o.jsxs)(t.p,{children:["Users may belong to zero or more groups. The authentication system of Kubernetes adds one of two default groups to each user. The ",(0,o.jsx)(t.code,{children:"system:authenticated"})," group is added to the list of groups for authenticated users, the ",(0,o.jsx)(t.code,{children:"system:unauthenticated"})," group is added for anonymous users."]}),"\n",(0,o.jsx)(t.p,{children:"For example, when generating an X509 certificate, we can define the username and organisation information like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'openssl req -new -key alice.key \\\n-out alice.csr \\\n-subj "/CN=alice/O=users/O=devops"\n'})}),"\n",(0,o.jsxs)(t.p,{children:["This certificate, after being processed, provides an authenticated user with the username alice and sets the groups list to users, devops and system",":authenticated",". Other authentication methods allow specifying groups in their specific way. How groups are specified for each authentication option is not relevant to this design as it is encapsulated in the authentication layer and not in the exposed model."]}),"\n",(0,o.jsx)(t.h3,{id:"current-findings-and-challenges",children:"Current findings and challenges"}),"\n",(0,o.jsx)(t.p,{children:"None of the objects in Kubernetes contain the authentication information and thus the user details. After the authentication has been processed the objects inside Kubernetes either use the service account that was specified as part of the object definition or the Default service account."}),"\n",(0,o.jsxs)(t.p,{children:["That means that the pod which is processed by YuniKorn, represented by the ",(0,o.jsx)(t.code,{children:"k8s.io/api/core/v1/Pod"})," object, only has the service account as a reference.This is similar to the details available to someone using the Kubernetes tools to describe the object."]}),"\n",(0,o.jsx)(t.p,{children:"The only way to retrieve the authentication information is during the admission phase of a new object into the Kubernetes system. This process is handled by the admission controllers which are part of the decision process to allow or disallow the new object to be created, modified or removed."}),"\n",(0,o.jsx)(t.p,{children:"This finding does allow YuniKorn, via its admission controller, to retrieve the authentication information of objects."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"user group lookup",src:n(24520).A+"",width:"1375",height:"726"})}),"\n",(0,o.jsx)(t.p,{children:"However there are some further complications to this process. Pods are the units that the scheduler works with. Objects like deployments or jobs do not get scheduled, they in turn create a pod to be scheduled. Pods could thus be created in a number of ways."}),"\n",(0,o.jsx)(t.p,{children:"If a pod is created by a direct request, then the pod creation process contains the authentication information. This allows the YuniKorn admission controller to access and propagate the authenticated user information as part of the MutatingAdmissionWebhook."}),"\n",(0,o.jsx)(t.p,{children:"An example of a review of a direct call to create a pod with the user information shown:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'INFO  webhook/admission_controller.go:180  AdmissionReview  {"Namespace": "default", "UID": "3f8c8df5-0272-4c85-874f-0aa1ece74fbc", "Operation": "CREATE", "UserInfo": {"username":"minikube-user","groups":["system:masters","system:authenticated"]}}\n'})}),"\n",(0,o.jsx)(t.p,{children:"On the other hand, if a deployment, job or replica set is submitted, then the pod is not directly created. This also means that the user is not identifiable. The pod that YuniKorn, via the admission controller, sees is created by a controller. The user in the authentication information is not the end user that created the original object but the controller service account."}),"\n",(0,o.jsx)(t.p,{children:"An example review of a pod created as part of a Kubernetes job with the user information shown:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'INFO  webhook/admission_controller.go:177  AdmissionReview  {"Namespace": "default", "UID": "be94ea46-c1d2-442a-a46a-60589d582abd", "Operation": "CREATE", "UserInfo": {"username":"system:serviceaccount:kube-system:job-controller","uid":"32abc062-eb53-4dca-9669-55251d687939","groups":["system:serviceaccounts","system:serviceaccounts:kube-system","system:authenticated"]}}\n'})}),"\n",(0,o.jsx)(t.p,{children:"It is possible to create separate webhooks for the API objects that could result in the creation of pods. Other objects that we should watch and mutate if necessary:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Deployment"}),"\n",(0,o.jsx)(t.li,{children:"ReplicaSet"}),"\n",(0,o.jsx)(t.li,{children:"DaemonSet"}),"\n",(0,o.jsx)(t.li,{children:"StatefulSet"}),"\n",(0,o.jsx)(t.li,{children:"Job"}),"\n",(0,o.jsx)(t.li,{children:"CronJob"}),"\n",(0,o.jsx)(t.li,{children:"ReplicationController (deprecated)"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"For example, adding a modification on the admission controller which instals a MutatingAdmissionWebhook for deployments, the username can be determined:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'INFO  webhook/admission_controller.go:483  Deployment validation - pass through  {"User": {"username":"minikube-user","groups":["system:masters","system:authenticated"]}}\n'})}),"\n",(0,o.jsx)(t.p,{children:"By intercepting the original object the submitting user information can be retrieved in the admission controller. The set of objects of interest, mentioned in the list above, all contain a pod template to specify the pod that will be created by the controller. As part of the mutating admission webhook the pod template can be updated with the user information."}),"\n",(0,o.jsxs)(t.p,{children:["To confirm that this approach is viable a simple proof of concept (POC) was created. The example POC code for the current admission controller adds the currently defined yunikorn.apache.org/username label to the pod template of a deployment: ",(0,o.jsx)(t.a,{href:"https://github.com/pbacsko/incubator-yunikorn-k8shim/commit/478d688675a1ca98afb895672295d61b47172d19",children:"Github commit"})]}),"\n",(0,o.jsxs)(t.p,{children:["There is an interaction with the processing of a directly created pod. Pods that are created via a controller will have the user information already set via the pod template. The admission controller processing the request should allow for the user information to be present and not overwrite or replace it with the controller service account. This case will be further defined and detailed in the chapter on ",(0,o.jsx)(t.a,{href:"#providing-user-and-group-externally",children:"Providing user and group externally"})," due to the similarity in solution design."]}),"\n",(0,o.jsx)(t.h2,{id:"yunikorn-group-retrieval",children:"YuniKorn group retrieval"}),"\n",(0,o.jsxs)(t.p,{children:["As mentioned in the introduction, the YuniKorn core can retrieve a group for a given user by doing a lookup (see implementation in ",(0,o.jsx)(t.a,{href:"https://github.com/apache/yunikorn-core/blob/161c38100317ec239965e21806ebb35c6583ddcd/pkg/common/security/usergroup.go",children:"usergroup.go"}),"). The lookup is pluggable and the current implementations provided are a simple OS-based and a dummy lookup."]}),"\n",(0,o.jsx)(t.p,{children:"The dummy lookup mimics the simple unix OS behaviour for new users. It sets the group to the same value as the username. The dummy lookup is enabled as the default lookup."}),"\n",(0,o.jsx)(t.p,{children:"Resolving users using the OS-based resolver has limited functionality. The container that the scheduler runs in has only a base OS installed. There is no integration with an external identity provider. That means resolving groups for users running pods would normally fail as they do not exist on the OS layer that is accessible from the scheduler."}),"\n",(0,o.jsx)(t.p,{children:"The YuniKorn core only performs a group lookup if the UserGroupInformation object passed from the shim to the core does not define a list of groups. This is independent of the resolver defined in the code. By default the shim in its current implementation only passes the user name to the core. That means it always triggers the group resolution."}),"\n",(0,o.jsxs)(t.p,{children:["For our purposes, both options are too simplistic. YuniKorn core should not perform any group retrieval but instead rely on the shim and the group and user information retrieved there. With the current functionality to only resolve if no group details are provided changes required should be minimal. The current default dummy resolver should be updated to not set any group and just leave the current groups. Even if that means the user is not part of any group. Based on the ",(0,o.jsx)(t.a,{href:"#groups-in-authentication",children:"Groups in authentication"})," details when using the Kubernetes shim we should always have at least one group set. All users are members of either system",":authenticated"," or system",":unauthenticated",". Even without changes the current group retrieval code could be used as is."]}),"\n",(0,o.jsx)(t.p,{children:"The design does not require any code changes in the core code."}),"\n",(0,o.jsx)(t.h2,{id:"proposed-user-information-object",children:"Proposed user information object"}),"\n",(0,o.jsxs)(t.p,{children:["The admission controller has access to more detailed user information than what is available on the objects that are available to the shim. See the ",(0,o.jsx)(t.a,{href:"#current-findings-and-challenges",children:"Current findings and challenges"})," for more details."]}),"\n",(0,o.jsxs)(t.p,{children:["First change is that we need to use annotations instead of ",(0,o.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",children:"labels"}),". The value of labels is limited to 63 characters, which will not be flexible enough to hold group information. If a user is a member of multiple groups it could easily exceed the value limit. Spitting the groups over multiple labels or encoding is not a viable option as stability is not a guarantee."]}),"\n",(0,o.jsx)(t.p,{children:"Supporting a single label for the user\u2019s name and annotations for the groups is not a good user experience. We must provide a single object that can contain the user name as well as the group details."}),"\n",(0,o.jsx)(t.h3,{id:"annotation-name",children:"Annotation name"}),"\n",(0,o.jsxs)(t.p,{children:["The new name for the annotation should clearly cover the content and not interfere with existing annotations. Beside that we are free to use any name that complies with the naming ",(0,o.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set",children:"conventions for names"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The proposal is to use one annotation:\n",(0,o.jsx)(t.code,{children:"yunikorn.apache.org/user.info"})]}),"\n",(0,o.jsx)(t.h3,{id:"annotation-content",children:"Annotation content"}),"\n",(0,o.jsx)(t.p,{children:"There is already a definition for the user information as part of the scheduler interface.The definition in the scheduler interface is:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"message UserGroupInformation {\n// the user name\nstring user = 1;\n// the list of groups of the user, can be empty\nrepeated string groups = 2;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The content of the ",(0,o.jsx)(t.code,{children:"UserGroupInformation"})," message as defined in the Scheduler Interface provides a stable Go object with defined group ordering. Since the content of an annotation must be a simple string we should use a simple json representation for the user info that contains the user name and a list of groups. This also guarantees the ordering of the groups to be stable and will not change when read from the pod."]}),"\n",(0,o.jsxs)(t.p,{children:["An example of the annotation for a user called joe who is a member of the group developers. The system",":authenticated"," group is added by the Kubernetes authentication layer:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'yunikorn.apache.org/user.info = "\n{\n  username: \\"joe\\",\n  groups: [\n    \\"developers\\",\n    \\"system:authenticated\\"\n  ]\n}"\n'})}),"\n",(0,o.jsx)(t.h3,{id:"annotation-mutation",children:"Annotation mutation"}),"\n",(0,o.jsx)(t.p,{children:"In the current design a restriction on mutating the annotation is required to prevent users from updating the pod after creation. After YuniKorn is informed of the pod\u2019s existence and the application is created the user information will not change inside YuniKorn. Kubernetes however does not guarantee that the shim will be informed of the pod creation before any modifications are made to the pod. This would leave a short window for a user to create a pod and then update the pod. Allowing a user to overwrite the annotation must be prevented to make sure we have guaranteed and auditable user information."}),"\n",(0,o.jsx)(t.p,{children:"The admission controller must therefore validate update requests that include changes to the annotation. It is the only way to guarantee that the user information in the annotations cannot be modified."}),"\n",(0,o.jsx)(t.p,{children:"The YuniKorn admission controller is currently only registered as a mutating admission controller for pods with the operation type \u201ccreate\u201d. This can be extended to include operation type \u201cupdate\u201d for pods. A validating hook is registered for the configmap object, this one could be extended to include the pod object."}),"\n",(0,o.jsx)(t.p,{children:"This means that there are two options for the update operation:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"mutating"}),"\n",(0,o.jsx)(t.li,{children:"validating"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"In the validating case we can simply reject the change if the annotation is changed as part of the update request. In the mutating case we can undo the change by overwriting the annotation with the original value. Both solutions will work, and will take about the same amount of processing time in the admission controller."}),"\n",(0,o.jsx)(t.p,{children:"The proposal is to add the pod object to the validating webhook for update operations."}),"\n",(0,o.jsx)(t.h3,{id:"backwards-compatibility",children:"Backwards compatibility"}),"\n",(0,o.jsxs)(t.p,{children:["The current label will remain supported for the 1.x minor releases. Deprecation will be announced with the first release that supports the new annotation. Messages mentioning the processing of the old label will also be logged at a WARN level in the logs. The existing behaviour might require changes to the default setting see ",(0,o.jsx)(t.a,{href:"#configuration",children:"Configuration"})," for more details."]}),"\n",(0,o.jsx)(t.p,{children:"Removal of processing of the currently supported label should be part of the next major release. The next major release is 2.0.0. This is based on the fact that we do not have a deprecation policy defined as yet."}),"\n",(0,o.jsx)(t.p,{children:"Preference in processing will be with the new annotations. In the case that both the user label and new annotations are present on the namespace the new annotation will be used. Using both the user label and new annotations, i.e. merging of the two, will not be supported."}),"\n",(0,o.jsx)(t.h2,{id:"providing-user-and-group-externally",children:"Providing user and group externally"}),"\n",(0,o.jsx)(t.p,{children:"As with the current label for the username we could allow for providing user and group information via annotations on the submitted objects. Although this is not a secure solution, as is pointed out in the introduction, support for this option might be a requirement to support certain use cases."}),"\n",(0,o.jsx)(t.p,{children:"We must build in an option to turn the functionality off and or mitigations to limit the possibility to bypass reading the authentication information. Based on the earlier diagram of the admission controller being used to intercept the authentication information a similar diagram for this use case. The admission controller will validate the annotation provided by the user, or system, and enforce compliance with the rules set by the administrator."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"external user info",src:n(23816).A+"",width:"1375",height:"726"})}),"\n",(0,o.jsx)(t.h3,{id:"pods-from-controllers",children:"Pods from controllers"}),"\n",(0,o.jsx)(t.p,{children:"The first use case for allowing the user information to be provided on pods when they are created is linked to controller created pods."}),"\n",(0,o.jsxs)(t.p,{children:["To correctly account for these pods the admission controller should be able to not overwrite the user information if the submitting user is one of a specific group of users. Depending on the way the system is configured all controllers run as the same service account or each controller uses a specifically created service account. The ",(0,o.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#controller-roles",children:"RBAC documentation"})," describes the two options."]}),"\n",(0,o.jsxs)(t.p,{children:["If the controller manager runs with the option ",(0,o.jsx)(t.code,{children:"--use-service-account-credentials"})," each controller uses a service account in the kube-system namespace. Running with the option set is recommended from an auditing point of view."]}),"\n",(0,o.jsxs)(t.p,{children:["If the option is not enabled, which seems to be the default, the controller submits the pods as the user ",(0,o.jsx)(t.code,{children:"system:kube-controller-manager"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Both values of the option must be supported by the admission controller. That means the admission controller must have an allow list which contains at least the following users:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"system:serviceaccount:kube-system:*"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"system:kube-controller-manager"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"An option would be to further limit the service accounts to a subset of the service account from the kube-system namespace. The configuration should support this without changes, it would come down to a change of the default value for the allow list."}),"\n",(0,o.jsx)(t.p,{children:"There is only a limited set of controllers that can create pods. The group information does, at this point in time, not look deterministic enough to warrant a group allow list."}),"\n",(0,o.jsxs)(t.p,{children:["Note that the user system",":kube-controller-manager"," name is based on some older github issue references and needs to be confirmed in a test setup."]}),"\n",(0,o.jsx)(t.h3,{id:"external-applications",children:"External applications"}),"\n",(0,o.jsx)(t.p,{children:"In a similar setup applications could be used to provide a frontend for pod creation. These front-ends might or might not use individual users to submit pods. They could even leverage jobs or other objects to indirectly create pods."}),"\n",(0,o.jsx)(t.p,{children:"As an example an application might be used to provide a simple user interface to create a Spark application. Apache Airflow, Livy or similar tools come to mind."}),"\n",(0,o.jsx)(t.p,{children:"The admission controller should allow the annotation to be provided as part of the pod creation. This follows the same code and configuration path as designed for the pods submitted by the controllers."}),"\n",(0,o.jsx)(t.p,{children:"This functionality must be configurable separately from the pods created by the controllers. A similar allow list should be configurable to limit the user. For this use case we also should support an allow list for groups of users. This should allow administrators to specify one or more groups of users that are allowed to set the user information on the pods."}),"\n",(0,o.jsx)(t.p,{children:"For the first design there are no plans to add deny lists for either groups or users."}),"\n",(0,o.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(t.p,{children:"As described in the previous sections, making the behaviour configurable is a requirement. The proposal is to add the following configuration values for the behaviour. All configuration options are prefixed by \u201cADMISSION_CONTROLLER_\u201d."}),"\n",(0,o.jsx)(t.p,{children:"The setting should be migrated to a configuration object or file when that is implemented for the admission controller. At this point the configuration uses environment settings as part of the deployment file."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Default"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"BYPASS_AUTH"})}),(0,o.jsx)(t.td,{children:"Allow external users to create pods with user information set. Type: boolean"}),(0,o.jsx)(t.td,{children:"false"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"BYPASS_CONTROLLERS"})}),(0,o.jsx)(t.td,{children:"Allow controller users to create pods with user information set. Type: boolean"}),(0,o.jsx)(t.td,{children:"true"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"SYSTEM_USERS"})}),(0,o.jsx)(t.td,{children:"Regular expression for the allowed controller service account list. Type: string"}),(0,o.jsx)(t.td,{children:'"system:serviceaccount:kube-system:*"'})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"EXTERNAL_USERS"})}),(0,o.jsx)(t.td,{children:"Regular expression for the allowed external user list. Type: string"}),(0,o.jsx)(t.td,{children:'""'})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"EXTERNAL_GROUPS"})}),(0,o.jsx)(t.td,{children:"Regular expression for the allowed external group list. Type: string"}),(0,o.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,o.jsx)(t.p,{children:"The configuration will be read as part of the startup of the admission controller. Automatic refresh or reload of the settings to allow changes while the admission controller is running is not part of the design as it is not supported for any other settings at this moment."}),"\n",(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.code,{children:"BYPASS_AUTH"})," is set to true the admission controller will not add the annotation to a pod if the annotation is not present and the deprecated user labell is set. If the annotation is not set and the user label is not set the new annotation will be added. In the case that ",(0,o.jsx)(t.code,{children:"BYPASS_AUTH"})," is false, the default, the admission controller will always add the new annotation, regardless of the existence of the deprecated label."]}),"\n",(0,o.jsxs)(t.p,{children:["The behaviour will take into account the user and group filters as defined in ",(0,o.jsx)(t.code,{children:"EXTERNAL_USERS"})," and ",(0,o.jsx)(t.code,{children:"EXTERNAL_GROUPS"}),". This means that retaining the existing behaviour and preferencing the existing label will require changing a default setting."]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},23816:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/external_userinfo-13c7c6924fa7b8cd38e6af40687ac1e5.png"},24520:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ug_lookup-e12ae5202bd46caf6e20837e09b28fef.png"},1780:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(79474);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);