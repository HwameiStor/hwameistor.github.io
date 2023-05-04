"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,v=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(v,i(i({ref:t},d),{},{components:n})):a.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:3,sidebar_label:"Eviction"},i="Eviction",l={unversionedId:"quick_start/advanced_features/volume_eviction",id:"quick_start/advanced_features/volume_eviction",title:"Eviction",description:"Data volume migration along with node eviction is very important to keep the data",source:"@site/docs/quick_start/advanced_features/volume_eviction.md",sourceDirName:"quick_start/advanced_features",slug:"/quick_start/advanced_features/volume_eviction",permalink:"/docs/quick_start/advanced_features/volume_eviction",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/advanced_features/volume_eviction.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Eviction"},sidebar:"tutorialSidebar",previous:{title:"Disk Expansion",permalink:"/docs/quick_start/advanced_features/disk_expansion"},next:{title:"Uninstall",permalink:"/docs/quick_start/uninstall"}},c={},s=[{value:"Node Eviction",id:"node-eviction",level:2},{value:"Pod Eviction",id:"pod-eviction",level:2},{value:"Pod Migration",id:"pod-migration",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"eviction"},"Eviction"),(0,o.kt)("p",null,"Data volume migration along with node eviction is very important to keep the data\npersistent in a dynamic kubernetes native environment."),(0,o.kt)("p",null,"Node-pressure eviction is the process by which the kubelet proactively terminates pods\nto reclaim resources on nodes. The kubelet monitors resources like memory, disk space,\nand filesystem inodes on your cluster's nodes. When one or more of these resources\nreach specific consumption levels, the kubelet can proactively fail one or more pods\non the node to reclaim resources and prevent starvation."),(0,o.kt)("p",null,"HwameiStor will detect all the volume replicas located on the node to be evicted,\nautomatically migrate them to other available nodes, and the evicted pods will be\nrescheduled to the new pod, mount the new volume afterwards."),(0,o.kt)("h2",{id:"node-eviction"},"Node Eviction"),(0,o.kt)("p",null,"In a Kubernetes cluster, a node can be drained by using the following procedure.\nSo that, all the pods and volume replicas on this node will be evicted, and then\ncontinue the services on other avaliable nodes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl drain k8s-node-1 --ignore-daemonsets=true\n")),(0,o.kt)("p",null,"Check if all the volumes' migration complete or not by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get LocalStorageNode k8s-node-1 -o yaml\n")),(0,o.kt)("p",null,"The output may look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: hwameistor.io/v1alpha1\nkind: LocalStorageNode\nmetadata:\n  creationTimestamp: "2022-10-11T07:41:58Z"\n  generation: 1\n  name: k8s-node-1\n  resourceVersion: "6402198"\n  uid: c71cc6ac-566a-4e0b-8687-69679b07471f\nspec:\n  hostname: k8s-node-1\n  storageIP: 10.6.113.22\n  topogoly:\n    region: default\n    zone: default\nstatus:\n  ...\n  pools:\n    LocalStorage_PoolHDD:\n      class: HDD\n      disks:\n      - capacityBytes: 17175674880\n        devPath: /dev/sdb\n        state: InUse\n        type: HDD\n      freeCapacityBytes: 16101933056\n      freeVolumeCount: 999\n      name: LocalStorage_PoolHDD\n      totalCapacityBytes: 17175674880\n      totalVolumeCount: 1000\n      type: REGULAR\n      usedCapacityBytes: 1073741824\n      usedVolumeCount: 1\n      volumeCapacityBytesLimit: 17175674880\n      # ** make sure volumes is empty ** #\n      volumes:  \n  state: Ready  \n')),(0,o.kt)("p",null,"Check if there is any volume replica still located in the evicted node by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get localvolumereplica\n")),(0,o.kt)("p",null,"The output may look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"NAME                                              CAPACITY     NODE         STATE   SYNCED   DEVICE                                                                  AGE\npvc-1427f36b-adc4-4aef-8d83-93c59064d113-957f7g   1073741824   k8s-node-3   Ready   true     /dev/LocalStorage_PoolHDD-HA/pvc-1427f36b-adc4-4aef-8d83-93c59064d113   20h\npvc-1427f36b-adc4-4aef-8d83-93c59064d113-qlpbmq   1073741824   k8s-node-2   Ready   true     /dev/LocalStorage_PoolHDD-HA/pvc-1427f36b-adc4-4aef-8d83-93c59064d113   30m\npvc-6ca4c0d4-da10-4e2e-83b2-19cbf5c5e3e4-scrxjb   1073741824   k8s-node-2   Ready   true     /dev/LocalStorage_PoolHDD/pvc-6ca4c0d4-da10-4e2e-83b2-19cbf5c5e3e4      30m\npvc-f8f017f9-eb09-4fbe-9795-a6e2d6873148-5t782b   1073741824   k8s-node-2   Ready   true     /dev/LocalStorage_PoolHDD-HA/pvc-f8f017f9-eb09-4fbe-9795-a6e2d6873148   30m\n")),(0,o.kt)("p",null,"In some cases, user doesn't want to migrate the volumes when draining a node.\nUser can add a label into the node before draining it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label node k8s-node-1 hwameistor.io/eviction=disable\n")),(0,o.kt)("h2",{id:"pod-eviction"},"Pod Eviction"),(0,o.kt)("p",null,"When a Kubernetes node is overloaded, it will evict some low-priority pods to\nrecycle system's resources to keep other pods safe. HwameiStor will detect the\nevicted pod and migrate the associated volumes to another available node.\nSo that, the pod can continue to run on it."),(0,o.kt)("h2",{id:"pod-migration"},"Pod Migration"),(0,o.kt)("p",null,"The migration can be pro-actively triggered on the pod and associated HwameiStor\nvolume by using either one of following methods."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Method #1"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label pod mysql-pod hwameistor.io/eviction=start\nkubectl delete pod mysql-pod\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Method #2"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat << EOF | kubectl apply -f -\napiVersion: hwameistor.io/v1alpha1\nkind: LocalVolumeMigrate\nmetadata:\n  name: migrate-pvc-6ca4c0d4-da10-4e2e-83b2-19cbf5c5e3e4\nspec:\n  sourceNode: k8s-node-1\n  targetNodesSuggested: \n  - k8s-node-2\n  - k8s-node-3\n  volumeName: pvc-6ca4c0d4-da10-4e2e-83b2-19cbf5c5e3e4\n  migrateAllVols: true\nEOF\n\n$ kubectl delete pod mysql-pod\n")))))}u.isMDXComponent=!0}}]);