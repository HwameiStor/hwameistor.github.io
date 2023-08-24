"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3211],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?o.createElement(h,i(i({ref:t},p),{},{components:a})):o.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:8,sidebar_label:"FAQs"},i="FAQs",l={unversionedId:"faqs",id:"faqs",title:"FAQs",description:"Q1: How does hwameistor-scheduler work in a Kubernetes platform?",source:"@site/docs/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/docs/faqs",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/faqs.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"FAQs"},sidebar:"tutorialSidebar",previous:{title:"HwameiStor Membership Roles",permalink:"/docs/contribute/membership"}},s={},d=[{value:"Q1: How does hwameistor-scheduler work in a Kubernetes platform?",id:"q1-how-does-hwameistor-scheduler-work-in-a-kubernetes-platform",level:2},{value:"Q2: How to schedule applications with multi-replica workloads?",id:"q2-how-to-schedule-applications-with-multi-replica-workloads",level:2},{value:"Q3: How to maintain a Kubernetes node?",id:"q3-how-to-maintain-a-kubernetes-node",level:2},{value:"Remove a node",id:"remove-a-node",level:3},{value:"Reboot a node",id:"reboot-a-node",level:3},{value:"Traditional shared storage",id:"traditional-shared-storage",level:3}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"faqs"},"FAQs"),(0,n.kt)("h2",{id:"q1-how-does-hwameistor-scheduler-work-in-a-kubernetes-platform"},"Q1: How does hwameistor-scheduler work in a Kubernetes platform?"),(0,n.kt)("p",null,"The hwameistor-scheduler is deployed as a pod in the hwameistor namespace."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(8841).Z,width:"553",height:"196"})),(0,n.kt)("p",null,"Once the applications (Deployment or StatefulSet) are created, the pod will\nbe scheduled to the worker nodes on which HwameiStor is already configured."),(0,n.kt)("h2",{id:"q2-how-to-schedule-applications-with-multi-replica-workloads"},"Q2: How to schedule applications with multi-replica workloads?"),(0,n.kt)("p",null,"This question can be extended to:\nHow does HwameiStor schedule applications with multi-replica workloads and how does it differ from traditional shared storage (NFS/block)?"),(0,n.kt)("p",null,"To efficiently schedule applications with multi-replica workloads, we highly recommend using StatefulSet."),(0,n.kt)("p",null,"StatefulSet ensures that replicas are deployed on the same worker node as the original pod.\nIt also creates a PV data volume for each replica. If you need to deploy replicas on different\nworker nodes, manual configuration with ",(0,n.kt)("inlineCode",{parentName:"p"},"pod affinity")," is necessary."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(2933).Z,width:"1382",height:"426"})),(0,n.kt)("p",null,"We suggest using a single pod for deployment because the block data volumes can not be shared."),(0,n.kt)("h2",{id:"q3-how-to-maintain-a-kubernetes-node"},"Q3: How to maintain a Kubernetes node?"),(0,n.kt)("p",null,"HwameiStor provides the volume eviction/migration functions to keep the Pods and HwameiStor\nvolumes' data running when retiring/rebooting a node."),(0,n.kt)("h3",{id:"remove-a-node"},"Remove a node"),(0,n.kt)("p",null,"Before you remove a node from a Kubernetes cluster, the Pods and volumes on the node should be\nrescheduled and migrated to another available node, and keep the Pods/volumes running."),(0,n.kt)("p",null,"Follow these steps to remove a node:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Drain node."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl drain NODE --ignore-daemonsets=true. --ignore-daemonsets=true\n")),(0,n.kt)("p",{parentName:"li"},"This command can evict and reschedule Pods on the node. It also automatically\ntriggers HwameiStor's data volume eviction behavior. HwameiStor will automatically\nmigrate all replicas of the data volumes from that node to other nodes, ensuring data availability.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the migration progress."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get localstoragenode NODE -o yaml\n")),(0,n.kt)("p",{parentName:"li"},"The output may look like:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: hwameistor.io/v1alpha1\nkind: LocalStorageNode\nmetadata:\n  name: NODE\nspec:\n  hostname: NODE\n  storageIP: 10.6.113.22\n  topogoly:\n    region: default\n    zone: default\nstatus:\n  ...\n  pools:\n    LocalStorage_PoolHDD:\n      class: HDD\n      disks:\n      - capacityBytes: 17175674880\n        devPath: /dev/sdb\n        state: InUse\n        type: HDD\n      freeCapacityBytes: 16101933056\n      freeVolumeCount: 999\n      name: LocalStorage_PoolHDD\n      totalCapacityBytes: 17175674880\n      totalVolumeCount: 1000\n      type: REGULAR\n      usedCapacityBytes: 1073741824\n      usedVolumeCount: 1\n      volumeCapacityBytesLimit: 17175674880\n      ## **** make sure volumes is empty **** ##\n      volumes:  \n  state: Ready\n")),(0,n.kt)("p",{parentName:"li"},"At the same time, HwameiStor will automatically reschedule the evicted Pods\nto the other node which has the associated volume replica, and continue to run.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remove the NODE from the cluster."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete nodes NODE\n")))),(0,n.kt)("h3",{id:"reboot-a-node"},"Reboot a node"),(0,n.kt)("p",null,"It usually takes a long time (~10minutes) to reboot a node. All the Pods and volumes on\nthe node will not work until the node is back online. For some applications like DataBase,\nthe long downtime is very costly and even unacceptable."),(0,n.kt)("p",null,"HwameiStor can immediately reschedule the Pod to another available node with associated\nvolume data and bring the Pod back to running in very short time (~ 10 seconds for the\nPod using a HA volume, and longer time for the Pod with non-HA volume depends on the data size)."),(0,n.kt)("p",null,"If users wish to keep data volumes on a specific node, accessible even after the node restarts,\nthey can add the following labels to the node. This prevents the system from migrating the data volumes\nfrom that node. However, the system will still immediately schedule Pods on other nodes that have\nreplicas of the data volumes."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add a label (optional)"),(0,n.kt)("p",{parentName:"li"},"If it is not required to migrate the volumes during the node reboots,\nyou can add the following label to the node before draining it."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label node NODE hwameistor.io/eviction=disable\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Drain the node."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl drain NODE --ignore-daemonsets=true. --ignore-daemonsets=true\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If Step 1 has been performed, you can reboot the node after Step 2 is successful."),(0,n.kt)("li",{parentName:"ul"},"If Step 1 has not been performed, you should check if the data migration is complete\nafter Step 2 is successful (similar to Step 2 in ",(0,n.kt)("a",{parentName:"li",href:"#remove-a-node"},"remove node"),").\nAfter the data migration is complete, you can reboot the node.")),(0,n.kt)("p",{parentName:"li"},"After the first two steps are successful, you can reboot the node and wait for the node system to return to normal.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Bring the node back to normal."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl uncordon NODE\n")))),(0,n.kt)("h3",{id:"traditional-shared-storage"},"Traditional shared storage"),(0,n.kt)("p",null,"StatefulSet, which is used for stateful applications, prioritizes deploying replicated replicas\nto different nodes to distribute the workload. However, it creates a PV data volume\nfor each Pod replica. Only when the number of replicas exceeds the number of worker nodes,\nmultiple replicas will be deployed on the same node."),(0,n.kt)("p",null,"On the other hand, Deployments, which are used for stateless applications, prioritize deploying\nreplicated replicas to different nodes to distribute the workload. All Pods share a single PV data volume\n(currently only supports NFS). Similar to StatefulSets, multiple replicas will be deployed on the same node\nonly when the number of replicas exceeds the number of worker nodes. For block storage, as data volumes\ncannot be shared, it is recommended to use a single replica."))}c.isMDXComponent=!0},8841:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/clip_image002-ab1b7f5938d19fde9eee9c8e334a392e.png"},2933:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/clip_image004-ea219969be0d9d975904a119d3135ff1.png"}}]);