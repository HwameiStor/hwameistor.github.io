"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),k=o,m=u["".concat(d,".").concat(k)]||u[k]||p[k]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2,sidebar_label:"Disk Expansion"},s="Disk Expansion",i={unversionedId:"quick_start/advanced_features/disk_expansion",id:"quick_start/advanced_features/disk_expansion",title:"Disk Expansion",description:"A storage system is usually expected to expand its capacity by adding a new disk into a storage node. In HwameiStor, it can be done with the following steps.",source:"@site/docs/quick_start/advanced_features/disk_expansion.md",sourceDirName:"quick_start/advanced_features",slug:"/quick_start/advanced_features/disk_expansion",permalink:"/docs/quick_start/advanced_features/disk_expansion",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/quick_start/advanced_features/disk_expansion.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Disk Expansion"},sidebar:"tutorialSidebar",previous:{title:"Node Expansion",permalink:"/docs/quick_start/advanced_features/node_expansion"},next:{title:"Eviction",permalink:"/docs/quick_start/advanced_features/volume_eviction"}},d={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Prepare a new storage disk",id:"1-prepare-a-new-storage-disk",level:3},{value:"2. Add the new disk into the node&#39;s storage pool",id:"2-add-the-new-disk-into-the-nodes-storage-pool",level:3},{value:"3. Post check",id:"3-post-check",level:3}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"disk-expansion"},"Disk Expansion"),(0,o.kt)("p",null,"A storage system is usually expected to expand its capacity by adding a new disk into a storage node. In HwameiStor, it can be done with the following steps."),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"1-prepare-a-new-storage-disk"},"1. Prepare a new storage disk"),(0,o.kt)("p",null,"Select a storage node from the HwameiStor system, and add a new disk into it."),(0,o.kt)("p",null,"For example, the storage node and new disk information are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"name: k8s-worker-4"),(0,o.kt)("li",{parentName:"ul"},"devPath: /dev/sdc"),(0,o.kt)("li",{parentName:"ul"},"diskType: SSD")),(0,o.kt)("p",null,"After the new disk is added into the storage node ",(0,o.kt)("inlineCode",{parentName:"p"},"k8s-worker-4"),", you can check the disk status as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'# 1. Check if the new disk is added into the node successfully\n$ ssh root@k8s-worker-4\n$ lsblk | grep sdc\nsdc        8:32     0     20G  1 disk\n\n\n# 2. Check if the LocalDisk CR already exists for the new disk and the status is "Unclaimed"\n$ kubectl get localdisk | grep k8s-worker-4 | grep sdc\nk8s-worker-4-sdc   k8s-worker-4       Unclaimed \n')),(0,o.kt)("h3",{id:"2-add-the-new-disk-into-the-nodes-storage-pool"},"2. Add the new disk into the node's storage pool"),(0,o.kt)("p",null,"The new disk should be added into the existing SSD storage pool of the node. If the storage pool doesn't exist, it will be constructed automatically and the new disk should be added into it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl apply -f - <<EOF\napiVersion: hwameistor.io/v1alpha1\nkind: LocalDiskClaim\nmetadata:\n  name: k8s-worker-4-expand\nspec:\n  nodeName: k8s-worker-4\n  description:\n    diskType: SSD\nEOF\n")),(0,o.kt)("h3",{id:"3-post-check"},"3. Post check"),(0,o.kt)("p",null,"Finally, check if the new disk has been added into the node's storage pool successfully by checking the LocalStorageNode CR:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get localstoragenode k8s-worker-4\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: hwameistor.io/v1alpha1\nkind: LocalStorageNode\nmetadata:\n  name: k8s-worker-4\nspec:\n  hostname: k8s-worker-4\n  storageIP: 10.6.182.103\n  topogoly:\n    region: default\n    zone: default\nstatus:\n  pools:\n    LocalStorage_PoolSSD:\n      class: SSD\n      disks:\n      - capacityBytes: 214744170496\n        devPath: /dev/sdb\n        state: InUse\n        type: SSD\n      - capacityBytes: 214744170496\n        devPath: /dev/sdc\n        state: InUse\n        type: SSD\n      freeCapacityBytes: 429488340992\n      freeVolumeCount: 1000\n      name: LocalStorage_PoolSSD\n      totalCapacityBytes: 429488340992\n      totalVolumeCount: 1000\n      type: REGULAR\n      usedCapacityBytes: 0\n      usedVolumeCount: 0\n      volumeCapacityBytesLimit: 429488340992\n      volumes:\n  state: Ready\n")))}p.isMDXComponent=!0}}]);