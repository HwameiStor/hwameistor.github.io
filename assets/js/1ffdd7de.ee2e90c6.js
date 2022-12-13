"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3211],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return a?o.createElement(h,l(l({ref:t},c),{},{components:a})):o.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:8,sidebar_label:"FAQs"},l="FAQs",i={unversionedId:"faqs",id:"faqs",title:"FAQs",description:"Q1: How does HwameiStor scheduler work in a Kubernetes platform?",source:"@site/docs/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/docs/faqs",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/faqs.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"FAQs"},sidebar:"tutorialSidebar",previous:{title:"Community",permalink:"/docs/community"}},s={},d=[{value:"Q1: How does HwameiStor scheduler work in a Kubernetes platform?",id:"q1-how-does-hwameistor-scheduler-work-in-a-kubernetes-platform",level:2},{value:"Q2: How does HwameiStor schedule applications with multi-replicas workloads and what are the differences compared to the traditional shared storage (NFS / block)?",id:"q2-how-does-hwameistor-schedule-applications-with-multi-replicas-workloads-and-what-are-the-differences-compared-to-the-traditional-shared-storage-nfs--block",level:2},{value:"Q3: How to maintain a Kubernetes node?",id:"q3-how-to-maintain-a-kubernetes-node",level:2},{value:"Retire a node",id:"retire-a-node",level:3},{value:"Reboot a node",id:"reboot-a-node",level:3},{value:"For the traditional shared storage",id:"for-the-traditional-shared-storage",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"faqs"},"FAQs"),(0,n.kt)("h2",{id:"q1-how-does-hwameistor-scheduler-work-in-a-kubernetes-platform"},"Q1: How does HwameiStor scheduler work in a Kubernetes platform?"),(0,n.kt)("p",null,"The HwameiStor scheduler is deployed as a pod in the HwameiStor namespace."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(8841).Z,width:"553",height:"196"})),(0,n.kt)("p",null,"Once the applications (Deployment or StatefulSet) are created, the pod will\nbe scheduled to the worker nodes on which HwameiStor is already configured."),(0,n.kt)("h2",{id:"q2-how-does-hwameistor-schedule-applications-with-multi-replicas-workloads-and-what-are-the-differences-compared-to-the-traditional-shared-storage-nfs--block"},"Q2: How does HwameiStor schedule applications with multi-replicas workloads and what are the differences compared to the traditional shared storage (NFS / block)?"),(0,n.kt)("p",null,"We strongly recommend using StatefulSet for applications with multi-replica workloads."),(0,n.kt)("p",null,"StatefulSet will deploy replicas on the same worker node with the original pod, and will\nalso create a PV data volume for each replica. If you need to deploy replicas on different\nworker nodes, you shall manually configure them with ",(0,n.kt)("inlineCode",{parentName:"p"},"pod affinity"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(2933).Z,width:"1382",height:"426"})),(0,n.kt)("p",null,"We suggest using a single pod for deployment because the block data volumes can not be shared."),(0,n.kt)("h2",{id:"q3-how-to-maintain-a-kubernetes-node"},"Q3: How to maintain a Kubernetes node?"),(0,n.kt)("p",null,"HwameiStor provides the volume eviction/migration functions to keep the Pods and HwameiStor\nvolumes' data running when retiring/rebooting a node."),(0,n.kt)("h3",{id:"retire-a-node"},"Retire a node"),(0,n.kt)("p",null,"Before remove a node from a Kubernetes cluster, the Pods and volumes on the node should be\nrescheduled and migrated to another available node, and keep the Pods/volumes running."),(0,n.kt)("p",null,"Follow these steps to retire a node:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Drain node."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl drain NODE --ignore-daemonsets=true. --ignore-daemonsets=true\n")),(0,n.kt)("p",{parentName:"li"},"Allows the above command to succeed even if pods managed by daemonset exist.\nIf it stacks due to PodDisruptionBudgets or something, try --force option.\nThe command will also trigger HwameiStor to migrate all the volumes' replicas\nto another available node. Make sure the migration to complete by following\ncommand before moving ahead.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Get LocalStorageNode."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get localstoragenode NODE\n")),(0,n.kt)("p",{parentName:"li"},"The output may look like:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: hwameistor.io/v1alpha1\nkind: LocalStorageNode\nmetadata:\n  name: NODE\nspec:\n  hostname: NODE\n  storageIP: 10.6.113.22\n  topogoly:\n    region: default\n    zone: default\nstatus:\n  ...\n  pools:\n    LocalStorage_PoolHDD:\n      class: HDD\n      disks:\n      - capacityBytes: 17175674880\n        devPath: /dev/sdb\n        state: InUse\n        type: HDD\n      freeCapacityBytes: 16101933056\n      freeVolumeCount: 999\n      name: LocalStorage_PoolHDD\n      totalCapacityBytes: 17175674880\n      totalVolumeCount: 1000\n      type: REGULAR\n      usedCapacityBytes: 1073741824\n      usedVolumeCount: 1\n      volumeCapacityBytesLimit: 17175674880\n    ## **** make sure volumes is empty **** ##\n      volumes:  \n  state: Ready\n")),(0,n.kt)("p",{parentName:"li"},"At the same time, HwameiStor will automatically reschedule the evicted Pods\nto the other node which has the associated volume' replica, and continue to run.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remove the NODE from the cluster."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete nodes NODE\n")))),(0,n.kt)("h3",{id:"reboot-a-node"},"Reboot a node"),(0,n.kt)("p",null,"It ususally takes a long time (~10mins) to reboot a node. All the Pods and volumes on\nthe node will not work until the node is back online. For some applications like DataBase,\nthe long downtime is very costly and even unacceptable."),(0,n.kt)("p",null,"HwameiStor can immediately reschedule the Pod to another available node with associated\nvolume data and bring the Pod back to running in very short time (~ 10 seconds for the\nPod using a HA volume, and longer time for the Pod with non-HA volume depends on the data size)."),(0,n.kt)("p",null,"If user doesn't want to migrate the volumes during the node reboots, can add the following\nlabel to the node before draining it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label node NODE hwameistor.io/eviction=disable\n")),(0,n.kt)("p",null,"To reboot a node, the step 1 and 2 are same as above (in section of ",(0,n.kt)("inlineCode",{parentName:"p"},"Retire a node"),")."),(0,n.kt)("p",null,"After the node reboots and comes back online, the volumes on this node can still be avaiable for access."),(0,n.kt)("p",null,"Run the following command to bring the node back to normal"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl uncordon NODE\n")),(0,n.kt)("h3",{id:"for-the-traditional-shared-storage"},"For the traditional shared storage"),(0,n.kt)("p",null,"StatefulSet will deploy replicas to other worker nodes for workload distribution and\nwill also create a PV data volume for each replica."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Deployment")," will also deploy replicas to other worker nodes for workload distribution\nbut will share the same PV data volume (only for NFS). We suggest using a single pod for\nblock storage because the block data volumes can not be shared."))}p.isMDXComponent=!0},8841:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/clip_image002-ab1b7f5938d19fde9eee9c8e334a392e.png"},2933:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/clip_image004-ea219969be0d9d975904a119d3135ff1.png"}}]);