"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9361],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),g=n,h=m["".concat(o,".").concat(g)]||m[g]||d[g]||s;return a?i.createElement(h,r(r({ref:t},c),{},{components:a})):i.createElement(h,r({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<s;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8608:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const s={sidebar_position:3,sidebar_label:"Minio"},r="Minio",l={unversionedId:"apps/minio/minio",id:"apps/minio/minio",title:"Minio",description:"Introduction to Minio",source:"@site/docs/apps/minio/minio.md",sourceDirName:"apps/minio",slug:"/apps/minio/",permalink:"/docs/apps/minio/",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/apps/minio/minio.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Minio"},sidebar:"tutorialSidebar",previous:{title:"TiDB",permalink:"/docs/apps/tidb"},next:{title:"Terminologies",permalink:"/docs/category/terminologies"}},o={},p=[{value:"Introduction to Minio",id:"introduction-to-minio",level:2},{value:"MinIO architecture",id:"minio-architecture",level:3},{value:"Build test environment",id:"build-test-environment",level:2},{value:"Deploy Kubernetes cluster",id:"deploy-kubernetes-cluster",level:3},{value:"Deploy HwameiStor local storage",id:"deploy-hwameistor-local-storage",level:3},{value:"Deploy distributed multi-tenant cluster (minio-operator)",id:"deploy-distributed-multi-tenant-cluster-minio-operator",level:2},{value:"Deploy minio-operator",id:"deploy-minio-operator",level:3},{value:"Create tenants",id:"create-tenants",level:3},{value:"Configure HwameiStor local volumes",id:"configure-hwameistor-local-volumes",level:3},{value:"Test HwameiStor&#39;s support for MinIo",id:"test-hwameistors-support-for-minio",level:2},{value:"Test basic features",id:"test-basic-features",level:3},{value:"Test tenant isolation",id:"test-tenant-isolation",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function d(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minio"},"Minio"),(0,n.kt)("h2",{id:"introduction-to-minio"},"Introduction to Minio"),(0,n.kt)("p",null,"MinIO is a high performance object storage solution with native support for Kubernetes deployments.\nIt can provide distributed, S3-compatible, and multi-cloud storage service in public cloud, private cloud,\nand edge computing scenarios. MinIO is a software-defined product and released under ",(0,n.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/agpl-3.0.en.html"},"GNU Affero General Public License v3.0"),".\nIt can also run well on x86 and other standard hardware."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"MinIO design",src:a(1036).Z,width:"245",height:"219"})),(0,n.kt)("p",null,"MinIO is designed to meet private cloud's requirements for high performance,\nin addition to all required features of object storage.\nMinIO features easy to use, cost-effective, and high performance in providing scalable cloud-native object storage services."),(0,n.kt)("p",null,"MinIO works well in traditional object storage scenarios, such as secondary storage, disaster recovery, and archiving.\nIt also shows competitive capabilities in machine learning, big data, private cloud, hybrid cloud,\nand other emerging fields to well support data analysis, high performance workloads, and cloud-native applications."),(0,n.kt)("h3",{id:"minio-architecture"},"MinIO architecture"),(0,n.kt)("p",null,"MinIO is designed for the cloud-native architecture, so it can be run as a lightweight container\nand managed by external orchestration tools like Kubernetes."),(0,n.kt)("p",null,"The MinIO package comprises of static binary files less than 100 MB.\nThis small package enables it to efficiently use CPU and memory resources even\nwith high workloads and can host a large number of tenants on shared hardware."),(0,n.kt)("p",null,"MinIO's architecture is as follows:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture",src:a(9735).Z,width:"1092",height:"684"})),(0,n.kt)("p",null,"MinIO can run on a standard server that have installed proper local drivers (JBOD/JBOF).\nAn MinIO cluster has a totally symmetric architecture. In other words,\neach server provide same functions, without any name node or metadata server."),(0,n.kt)("p",null,"MinIO can write both data and metadata as objects, so there is no need to use metadata servers.\nMinIO provides erasure coding, bitrot protection, encryption and other features in a strict and consistent way."),(0,n.kt)("p",null,"Each MinIO cluster is a set of distributed MinIO servers, one MinIO process running on each node."),(0,n.kt)("p",null,"MinIO runs in a userspace as a single process, and it uses lightweight co-routines for high concurrence.\nIt divides drivers into erasure sets (generally 16 drivers in each set),\nand uses the deterministic hash algorithm to place objects into these erasure sets."),(0,n.kt)("p",null,"MinIO is specifically designed for large-scale and multi-datacenter cloud storage service.\nTenants can run their own MinIO clusters separately from others, getting rid of interruptions\nfrom upgrade or security problems. Tenants can scale up by connecting multi clusters across geographical regions."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"node-distribution-setup",src:a(7547).Z,width:"1271",height:"1057"})),(0,n.kt)("h2",{id:"build-test-environment"},"Build test environment"),(0,n.kt)("h3",{id:"deploy-kubernetes-cluster"},"Deploy Kubernetes cluster"),(0,n.kt)("p",null,"A Kubernetes cluster was deployed with three virtual machines: one as the master node and two as worker nodes. The kubelet version is 1.22.0."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"k8s-cluster",src:a(5283).Z,width:"553",height:"117"})),(0,n.kt)("h3",{id:"deploy-hwameistor-local-storage"},"Deploy HwameiStor local storage"),(0,n.kt)("p",null,"Deploy HwameiStor local storage on Kubernetes:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"check HwameiStor local storage",src:a(4872).Z,width:"553",height:"87"})),(0,n.kt)("p",null,"Allocate five disks (SDB, SDC, SDD, SDE, and SDF) for each worker node to support HwameiStor local disk management:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"lsblk",src:a(3969).Z,width:"553",height:"192"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"lsblk",src:a(9803).Z,width:"553",height:"147"})),(0,n.kt)("p",null,"Check node status of local storage:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"get-lsn",src:a(5709).Z,width:"553",height:"67"})),(0,n.kt)("p",null,"Create storageClass:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"get-sc",src:a(8745).Z,width:"553",height:"48"})),(0,n.kt)("h2",{id:"deploy-distributed-multi-tenant-cluster-minio-operator"},"Deploy distributed multi-tenant cluster (minio-operator)"),(0,n.kt)("p",null,"This section will show how to deploy minio-operator, how to create a tenant,\nand how to configure HwameiStor local volumes."),(0,n.kt)("h3",{id:"deploy-minio-operator"},"Deploy minio-operator"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy minio-operator repo to your local environment"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"git clone <https://github.com/minio/operator.git>\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"helm-repo-list",src:a(7208).Z,width:"538",height:"50"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"ls-operator",src:a(2443).Z,width:"554",height:"47"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter helm operator directory ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/operator/helm/operator")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"ls-pwd",src:a(5e3).Z,width:"448",height:"119"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Deploy the minio-operator instance"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm install minio-operator \\\n--namespace minio-operator \\\n--create-namespace \\\n--generate-name .\n--set persistence.storageClass=local-storage-hdd-lvm .\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check minio-operator running status"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"get-all",src:a(5677).Z,width:"553",height:"252"})))),(0,n.kt)("h3",{id:"create-tenants"},"Create tenants"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/operator/examples/kustomization/base")," directory and change ",(0,n.kt)("inlineCode",{parentName:"p"},"tenant.yaml")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"git-diff-yaml",src:a(8734).Z,width:"553",height:"489"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/operator/helm/tenant/")," directory and change ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"git-diff-values.yaml",src:a(3037).Z,width:"553",height:"576"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/operator/examples/kustomization/tenant-lite")," directory and change ",(0,n.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"git-diff-kustomization-yaml",src:a(3577).Z,width:"553",height:"249"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change ",(0,n.kt)("inlineCode",{parentName:"p"},"tenant.yaml")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"git-diff-tenant-yaml02",src:a(9602).Z,width:"553",height:"266"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change ",(0,n.kt)("inlineCode",{parentName:"p"},"tenantNamePatch.yaml")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"git-diff-tenant-name-patch-yaml",src:a(2637).Z,width:"553",height:"125"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a tenant"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl apply \u2013k . \n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check resource status of the tenant minio-t1"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"kubectl-get-all-nminio-tenant",src:a(402).Z,width:"553",height:"322"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To create another new tenant, you can first create a new directory ",(0,n.kt)("inlineCode",{parentName:"p"},"tenant")," (in this example ",(0,n.kt)("inlineCode",{parentName:"p"},"tenant-lite-2"),") under ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/operator/examples/kustomization")," and change the files listed above"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"pwd-ls-ls",src:a(9231).Z,width:"1078",height:"209"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl apply \u2013k .")," to create the new tenant ",(0,n.kt)("inlineCode",{parentName:"p"},"minio-t2")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"kubectl-get-all-nminio",src:a(1276).Z,width:"1022",height:"659"})))),(0,n.kt)("h3",{id:"configure-hwameistor-local-volumes"},"Configure HwameiStor local volumes"),(0,n.kt)("p",null,"Run the following commands in sequence to finish this configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get statefulset.apps/minio-t1-pool-0 -nminio-tenant -oyaml\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"local-storage-hdd-lvm",src:a(1594).Z,width:"437",height:"382"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get pvc \u2013A\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubectl-get-pvc",src:a(5441).Z,width:"553",height:"105"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get pvc export-minio6-0 -nminio-6 -oyaml\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubectl-get-pvc-export-oyaml",src:a(2090).Z,width:"553",height:"371"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get pv\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubectl-get-pv",src:a(9618).Z,width:"553",height:"85"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get pvc data0-minio-t1-pool-0-0 -nminio-tenant -oyaml\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubectl-get-pvc-oyaml",src:a(6348).Z,width:"553",height:"448"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get lv\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubectl-get-lv",src:a(9260).Z,width:"553",height:"95"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubect get lvr\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubectl-get-lvr",src:a(9957).Z,width:"553",height:"86"})),(0,n.kt)("h2",{id:"test-hwameistors-support-for-minio"},"Test HwameiStor's support for MinIo"),(0,n.kt)("p",null,"With the above settings in place, now let's test basic features and tenant isolation."),(0,n.kt)("h3",{id:"test-basic-features"},"Test basic features"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in to ",(0,n.kt)("inlineCode",{parentName:"p"},"minio console\uff1a10.6.163.52:30401/login")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"minio-opeartor-console-login",src:a(1197).Z,width:"681",height:"369"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Get JWT by ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl minio proxy -n minio-operator")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"minio-opeartor-console-login",src:a(631).Z,width:"1144",height:"328"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Browse and manage information about newly-created tenants"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"tenant01",src:a(3646).Z,width:"1265",height:"562"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"tenant02",src:a(7788).Z,width:"1265",height:"715"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"tenant03",src:a(3839).Z,width:"1265",height:"583"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"tenant04",src:a(9519).Z,width:"1265",height:"748"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"tenant05",src:a(9127).Z,width:"1271",height:"733"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"tenant06",src:a(4822).Z,width:"1271",height:"855"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in as tenant minio-t1 (Account: minio)"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"login-minio",src:a(2245).Z,width:"1265",height:"760"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"login-minio",src:a(8119).Z,width:"1265",height:"754"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Browse bucket bk-1"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"view-bucket-1",src:a(9917).Z,width:"1271",height:"409"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"view-bucket-1",src:a(9439).Z,width:"1271",height:"378"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"view-bucket-1",src:a(4607).Z,width:"1271",height:"467"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new bucket bk-1-1"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-bucket-1-1",src:a(3374).Z,width:"1271",height:"415"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-bucket-1-1",src:a(6742).Z,width:"1271",height:"669"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-bucket-1-1",src:a(3991).Z,width:"1271",height:"354"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create path path-1-2"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-path-1-2",src:a(8090).Z,width:"1265",height:"644"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-path-1-2",src:a(8399).Z,width:"1271",height:"336"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upload the file"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-file",src:a(9696).Z,width:"1271",height:"375"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-file",src:a(1262).Z,width:"1265",height:"534"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-file",src:a(4318).Z,width:"1271",height:"495"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upload the folder"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-folder",src:a(8395).Z,width:"1271",height:"406"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-folder",src:a(7416).Z,width:"1271",height:"375"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-folder",src:a(1818).Z,width:"1265",height:"495"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-folder",src:a(6457).Z,width:"1265",height:"501"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a user with read-only permission"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-user",src:a(4780).Z,width:"1271",height:"745"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-user",src:a(9160).Z,width:"1271",height:"287"})))),(0,n.kt)("h3",{id:"test-tenant-isolation"},"Test tenant isolation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in as tenant minio-t2"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"login-t2",src:a(2256).Z,width:"1271",height:"715"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"login-t2",src:a(5128).Z,width:"1265",height:"531"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Only minio-t2 information is visible. You cannot see information about tenant minio-t1."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"only-t2",src:a(8709).Z,width:"1271",height:"748"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create bucket"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-bucket",src:a(2484).Z,width:"1271",height:"641"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-bucket",src:a(109).Z,width:"1271",height:"357"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create path"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-path",src:a(2053).Z,width:"1271",height:"589"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-path",src:a(7181).Z,width:"1265",height:"281"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upload the file"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-file",src:a(6578).Z,width:"1271",height:"253"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-file",src:a(4295).Z,width:"1271",height:"440"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a user"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-user",src:a(2660).Z,width:"1173",height:"565"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-user",src:a(6606).Z,width:"956",height:"562"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-user",src:a(4777).Z,width:"1063",height:"330"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-user",src:a(3681).Z,width:"1087",height:"418"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-user",src:a(6198).Z,width:"1265",height:"436"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure user policies"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"user-policy",src:a(6972).Z,width:"1271",height:"559"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"user-policy",src:a(3163).Z,width:"1271",height:"482"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Delete a bucket"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"delete-bucket",src:a(2002).Z,width:"1265",height:"620"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"delete-bucket",src:a(3129).Z,width:"1265",height:"666"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"delete-bucket",src:a(8342).Z,width:"1265",height:"519"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"delete-bucket",src:a(8653).Z,width:"1265",height:"495"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"delete-bucket",src:a(767).Z,width:"1271",height:"605"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"delete-bucket",src:a(5140).Z,width:"1277",height:"369"})))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this test, we successfully deployed MinIO distributed object storage on the basis of Kubernetes 1.22 and\nthe HwameiStor local storage. We performed the basic feature test,\nsystem security test, and operation and maintenance management test."),(0,n.kt)("p",null,"All tests are passed, proving HwameiStor can well support for MinIO."))}d.isMDXComponent=!0},9735:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/architect-ce129da6d73d13ffdbb0e813bb33fe58.png"},3374:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-bucket-1-1-6dd53d944ee882f572e7f1d4599ca021.png"},6742:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-bucket-1-2-16fe74cc6ae2eac86d13da593666f786.png"},3991:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-bucket-1-3-8388f7f0c3ae95ef6086aebd48e9bc8a.png"},2484:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-bucket01-5ff6c1c329b6894a95327fd058418214.png"},8090:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-path-1-2-01-a92a560272a856ed5844706f34e201a2.png"},8399:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-path-1-2-02-dbc0eb8def9147bbbab83a8ded628579.png"},2053:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-path01-6301c1074307216c3715f745ad37862b.png"},7181:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-path02-b3875fbfee991a8c69f8627fbf8988b4.png"},4780:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-readonly-user-01-c0dfec1a26c75309bd158812dfa38440.png"},9160:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-readonly-user-02-2cf0cf8de540ded84b5d7adca914409e.png"},2660:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-user01-fdaa9d62a2b77f01b9c25e90947d01b7.png"},6606:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-user02-02688ec4dcdbfd13c23bde27cbe97adb.png"},4777:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-user03-c8e0e15d94570c56b210a807bea71dbc.png"},3681:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-user04-a25e1de99cff7c39c5c6074bf99b171e.png"},6198:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-user05-3094cf2cce3288d4b268b168376d9787.png"},109:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/createbucket02-c74362e3b73378315452553cca4a910d.png"},2002:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/delete-bk01-ac535d4a12f5d328317e526567bb08a2.png"},3129:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/delete-bk02-59b03c470e6adf4d1cd9780c949a3e60.png"},8342:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/delete-bk03-7b7bcdc79caf87744c8b91bcd9e6888f.png"},8653:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/delete-bk04-3bf4c2f3cf510b65ecf9da53c8f5a5c6.png"},767:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/delete-bk05-68ca55612e200403f48078d611d8897f.png"},5140:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/delete-bk06-eb4f8695cdc29d00bc1c4d59566a0525.png"},3577:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/git-diff-kustomization-yaml-0ad007bd15ea443b07d8366fb2eb65bd.png"},2637:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/git-diff-tenant-name-patch-yaml-4b8be598ff292c9492f86640650d8a0c.png"},8734:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/git-diff-tenant-yaml-7ae47ae03222e56b47635aea676dc294.png"},9602:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/git-diff-tenant-yaml02-24937bd8e84cfb6f82a3d4c61f3cb5ff.png"},3037:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/git-diff-values-yaml-4a948a45aba4b18a76b4938e24b0dfe7.png"},7208:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/helm-repo-list-f96e598528d3d564bcbb129221360620.png"},5283:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/k8s-cluster-2e9998ffef1d3a00bad3b7e3a164e4ff.png"},1276:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-all-minio-8c0df6d0f7c86bf1ac6260795a55ab3c.png"},402:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-all-nminio-tenant-497b2e2eab8bb4d29b3de1c0b1a6dd7b.png"},5677:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-all-026455ec24122121ef5763df0c6f1d71.png"},4872:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-hwamei-pod-0cd9b8d67e92c776b7bcd8b348f70496.png"},5709:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-lsn-9655d5b584e42874a92047354ff54c15.png"},9260:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-lv-b1a03ec396f97f755f15ad387225c38a.png"},9957:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-lvr-aa5334390dd09d70b369178e2a40df54.png"},9618:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-pv-d6a7f8f8d6abe20eb23588513908066d.png"},2090:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-pvc-export-oyaml-bd9d6c3aea26b5e4217bb163f26b68f9.png"},6348:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-pvc-oyaml-71f7f2ebc33ee977d2c399425bab30bd.png"},5441:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-pvc-b00f37660c7a43e7a79d9fdb12116a6b.png"},8745:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-sc-860a03c344d7d8b2e26157ca5f6730a9.png"},631:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-minio-proxy-jwt-9e10468de2cb3110cccb7949ba403e65.png"},1594:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/local-storage-hdd-lvm-214813a44eb9b94a4a7c12b592bdca77.png"},2245:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/login-minio-t1-01-68939a43710d29e15a94152ff248f7a6.png"},8119:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/login-minio-t1-02-b65ab20229aa0efd8e586c7467514ab6.png"},2256:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/login-minio-t2-01-05164403493b1533fd4e66907fcc4e17.png"},5128:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/login-minio-t2-02-cb97b40d183a2c04c20d5a1583ba2448.png"},2443:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ls-opeartor-2d0c847e0ae10e022f408516d0b15c46.png"},5e3:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ls-pwd-177620b3543a6e3211f2ada8d9af1893.png"},3969:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/lsblk01-1b81d8560261b1885437ed9fb82481cc.png"},9803:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/lsblk02-9d75cd284b90f360762e7b6b4003f1fe.png"},1036:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/minio-design-50c5ded4364db203250dc5f007b8f613.png"},1197:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/minio-opeartor-console-login-d2690ef3832515f90e4bb546c515cc0f.png"},7547:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/node-setup-83bd490fd5bac9fadf3650ed4d61314e.png"},8709:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/only-t2-cdc2c92d78952f8ef3dac0f0a08c5f4f.png"},9231:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/pwd-ls-ls-3c18ba9e4e0eabed279cac4788adc00e.png"},3646:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tenant01-823ef226f559957037ea57ed833ef2c2.png"},7788:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tenant02-847ee3e98f7fb5cad5151f28d1624676.png"},3839:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tenant03-39a6e5a9ece83b93a6fc68bdf709db12.png"},9519:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tenant04-517db946c00cc899af5dc790a055f793.png"},9127:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tenant05-3a12444cc96c9cd2dbf73fa722b9b2c0.png"},4822:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tenant06-15e19517c953f7c9820da7c818837250.png"},1262:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-file-success-02-f26a3be0810b08e933b1a53e894840e7.png"},4318:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-file-success-03-94d9c32d8be5cb1fcf7e791f6e0564e6.png"},9696:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-file-success-71d39754b906216229e242c7a9691b88.png"},6578:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-file01-a81dcfaf0cb69e2f3d2b4452fcc8d587.png"},4295:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-file02-688141fc03bc83b4884b1e309dc8fec3.png"},8395:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-folder-success-01-ce4cca3d1572ed78c4d1445ef8ec5092.png"},7416:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-folder-success-02-8f527aa3a8d07d88c957615746852652.png"},1818:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-folder-success-03-d4251b86ee85bd5792e199680e9bb763.png"},6457:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-folder-success-04-ba90cf6c9b40c242cdb6e7bbd4e77ff1.png"},6972:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/user-policy01-d7ff1a7f6daa3180766f2e3f5aadb33a.png"},3163:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/user-policy02-52963322402c0fc498c958fc115bf05d.png"},9917:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/view-bucket-01-50f2dac3e66f455de29df8ea6679f7fc.png"},9439:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/view-bucket-02-fb93474795cf22f2edea0fde91a5ad19.png"},4607:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/view-bucket-03-313ac3d13919cc855ac4e5e17d9cf61f.png"}}]);