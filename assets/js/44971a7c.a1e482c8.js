"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=u;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const l={sidebar_position:3,sidebar_label:"Post-Check after Deployment"},s="Post-Check after Deployment",r={unversionedId:"quick_start/install/post_check",id:"quick_start/install/post_check",title:"Post-Check after Deployment",description:"The example below is from a 3-node kubernetes cluster:",source:"@site/docs/quick_start/install/post_check.md",sourceDirName:"quick_start/install",slug:"/quick_start/install/post_check",permalink:"/docs/quick_start/install/post_check",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/install/post_check.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Post-Check after Deployment"},sidebar:"tutorialSidebar",previous:{title:"Deploy with hwameistor-operator",permalink:"/docs/quick_start/install/operator"},next:{title:"Start a Stateful Application",permalink:"/docs/category/start-a-stateful-application"}},i={},c=[{value:"Check Components",id:"check-components",level:2},{value:"Check APIs",id:"check-apis",level:2},{value:"Check <code>LocalDiskNodes</code> and <code>localDisks</code>",id:"check-localdisknodes-and-localdisks",level:2},{value:"Check <code>LocalStorageNodes</code> and Storage Pools",id:"check-localstoragenodes-and-storage-pools",level:2},{value:"Check <code>StorageClass</code>",id:"check-storageclass",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-check-after-deployment"},"Post-Check after Deployment"),(0,o.kt)("p",null,"The example below is from a 3-node kubernetes cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get node\nNAME           STATUS   ROLES   AGE   VERSION\n10-6-234-40   Ready    control-plane,master   140d   v1.21.11\n10-6-234-41   Ready    <none>                 140d   v1.21.11\n10-6-234-42   Ready    <none>                 140d   v1.21.11\n")),(0,o.kt)("h2",{id:"check-components"},"Check Components"),(0,o.kt)("p",null,"The following pods should be up and running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl -n hwameistor get pod\nNAME                                                       READY   STATUS                  RESTARTS   AGE\ndrbd-adapter-10-6-234-40-rhel7-shfgt                      0/2     Completed   0          39s\ndrbd-adapter-10-6-234-41-rhel7-sw75z                      0/2     Completed   0          39s\ndrbd-adapter-10-6-234-42-rhel7-4vnl9                      0/2     Completed   0          39s\nhwameistor-admission-controller-6995559b48-rxs4s          1/1     Running     0          40s\nhwameistor-apiserver-677ddbdb8-9969c                      1/1     Running     0          40s\nhwameistor-exporter-66784d5745-xwsxx                      1/1     Running     0          39s\nhwameistor-local-disk-csi-controller-5d74d6c8cf-8vx5v     2/2     Running     0          40s\nhwameistor-local-disk-manager-9vc75                       2/2     Running     0          40s\nhwameistor-local-disk-manager-r42sg                       2/2     Running     0          40s\nhwameistor-local-disk-manager-v75qb                       2/2     Running     0          40s\nhwameistor-local-storage-csi-controller-758c94489-7g5tl   4/4     Running     0          40s\nhwameistor-local-storage-pr265                            2/2     Running     0          40s\nhwameistor-local-storage-qvrgb                            2/2     Running     0          40s\nhwameistor-local-storage-zvggz                            2/2     Running     0          40s\nhwameistor-scheduler-7585d88d9-8tbms                      1/1     Running     0          40s\nhwameistor-ui-9885d9dc5-l4tlx                             1/1     Running     0          40s\nhwameistor-volume-evictor-56df755847-m4h8b                1/1     Running     0          40s\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The components of ",(0,o.kt)("inlineCode",{parentName:"p"},"local-disk-manager")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"local-storage")," are ",(0,o.kt)("inlineCode",{parentName:"p"},"DaemonSets"),", and should have one pod on each Kubernetes node.")),(0,o.kt)("h2",{id:"check-apis"},"Check APIs"),(0,o.kt)("p",null,"HwameiStor CRDs create the following APIs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl api-resources --api-group hwameistor.io\n\nNAME                       SHORTNAMES   APIVERSION               NAMESPACED   KIND\nlocaldiskclaims            ldc          hwameistor.io/v1alpha1   false        LocalDiskClaim\nlocaldisknodes             ldn          hwameistor.io/v1alpha1   false        LocalDiskNode\nlocaldisks                 ld           hwameistor.io/v1alpha1   false        LocalDisk\nlocaldiskvolumes           ldv          hwameistor.io/v1alpha1   false        LocalDiskVolume\nlocalstoragenodes          lsn          hwameistor.io/v1alpha1   false        LocalStorageNode\nlocalvolumeconverts        lvconvert    hwameistor.io/v1alpha1   true         LocalVolumeConvert\nlocalvolumeexpands         lvexpand     hwameistor.io/v1alpha1   false        LocalVolumeExpand\nlocalvolumegroupconverts   lvgconvert   hwameistor.io/v1alpha1   true         LocalVolumeGroupConvert\nlocalvolumegroupmigrates   lvgmigrate   hwameistor.io/v1alpha1   true         LocalVolumeGroupMigrate\nlocalvolumegroups          lvg          hwameistor.io/v1alpha1   true         LocalVolumeGroup\nlocalvolumemigrates        lvmigrate    hwameistor.io/v1alpha1   true         LocalVolumeMigrate\nlocalvolumereplicas        lvr          hwameistor.io/v1alpha1   false        LocalVolumeReplica\nlocalvolumes               lv           hwameistor.io/v1alpha1   false        LocalVolume\n")),(0,o.kt)("p",null,"For the details about CRDs, please also refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/apis"},"CRDs"),"."),(0,o.kt)("h2",{id:"check-localdisknodes-and-localdisks"},"Check ",(0,o.kt)("inlineCode",{parentName:"h2"},"LocalDiskNodes")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"localDisks")),(0,o.kt)("p",null,"HwameiStor automatically scans each node and registers each disk as CRD ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalDisk(ld)"),".\nThe unused disks are displayed with ",(0,o.kt)("inlineCode",{parentName:"p"},"PHASE: Available"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get localdisknodes\nNAME          TOTALDISK   FREEDISK\n10-6-234-40   1\n10-6-234-41   8\n10-6-234-42   8\n\n$ kubectl get localdisks\nNAME              NODEMATCH     PHASE\n10-6-234-40-sda   10-6-234-40   Bound\n10-6-234-41-sda   10-6-234-41   Bound\n10-6-234-41-sdb   10-6-234-41   Bound\n10-6-234-41-sdc   10-6-234-41   Bound\n10-6-234-41-sdd   10-6-234-41   Bound\n10-6-234-41-sde   10-6-234-41   Bound\n10-6-234-41-sdf   10-6-234-41   Bound\n10-6-234-41-sdg   10-6-234-41   Bound\n10-6-234-41-sdh   10-6-234-41   Bound\n10-6-234-42-sda   10-6-234-42   Bound\n10-6-234-42-sdb   10-6-234-42   Bound\n10-6-234-42-sdc   10-6-234-42   Bound\n10-6-234-42-sdd   10-6-234-42   Bound\n10-6-234-42-sde   10-6-234-42   Bound\n10-6-234-42-sdf   10-6-234-42   Bound\n10-6-234-42-sdg   10-6-234-42   Bound\n10-6-234-42-sdh   10-6-234-42   Bound\n")),(0,o.kt)("h2",{id:"check-localstoragenodes-and-storage-pools"},"Check ",(0,o.kt)("inlineCode",{parentName:"h2"},"LocalStorageNodes")," and Storage Pools"),(0,o.kt)("p",null,"HwameiStor automatically generates the LocalStorageNode (i.e. LSN) resource for each node.\nEach LSN will record the resources and status of the node, including Storage Pool, Volumes, etc.."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl get lsn\nNAME          IP            STATUS   AGE\n10-6-234-40   10.6.234.40   Ready    3m52s\n10-6-234-41   10.6.234.41   Ready    3m54s\n10-6-234-42   10.6.234.42   Ready    3m55s\n\n$ kubectl get lsn 10-6-234-41 -o yaml\n[root@10-6-234-40 ~]# k get lsn 10-6-234-41 -o yaml\napiVersion: hwameistor.io/v1alpha1\nkind: LocalStorageNode\nmetadata:\n  creationTimestamp: "2023-04-11T06:46:52Z"\n  generation: 1\n  name: 10-6-234-41\n  resourceVersion: "13575433"\n  uid: 4986f7b8-6fe1-43f1-bdca-e68b6fa53f92\nspec:\n  hostname: 10-6-234-41\n  storageIP: 10.6.234.41\n  topogoly:\n    region: default\n    zone: default\nstatus:\n  pools:\n    LocalStorage_PoolHDD:\n      class: HDD\n      disks:\n      - capacityBytes: 10733223936\n        devPath: /dev/sdb\n        state: InUse\n        type: HDD\n      - capacityBytes: 1069547520\n        devPath: /dev/sdc\n        state: InUse\n        type: HDD\n      - capacityBytes: 1069547520\n        devPath: /dev/sdd\n        state: InUse\n        type: HDD\n      - capacityBytes: 1069547520\n        devPath: /dev/sde\n        state: InUse\n        type: HDD\n      - capacityBytes: 1069547520\n        devPath: /dev/sdf\n        state: InUse\n        type: HDD\n      - capacityBytes: 1069547520\n        devPath: /dev/sdg\n        state: InUse\n        type: HDD\n      freeCapacityBytes: 16080961536\n      freeVolumeCount: 1000\n      name: LocalStorage_PoolHDD\n      totalCapacityBytes: 16080961536\n      totalVolumeCount: 1000\n      type: REGULAR\n      usedCapacityBytes: 0\n      usedVolumeCount: 0\n      volumeCapacityBytesLimit: 16080961536\n  state: Ready\n')),(0,o.kt)("h2",{id:"check-storageclass"},"Check ",(0,o.kt)("inlineCode",{parentName:"h2"},"StorageClass")),(0,o.kt)("p",null,"The Operator will automatically create the StorageClasses as following according to the HwameiStor system's configuration (e.g. HA enabled, disk type, etc ..)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get sc\nNAME                                     PROVISIONER         RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE\nhwameistor-storage-lvm-hdd               lvm.hwameistor.io   Delete          WaitForFirstConsumer   false                  23h\nhwameistor-storage-lvm-hdd-convertible   lvm.hwameistor.io   Delete          WaitForFirstConsumer   false                  23h\nhwameistor-storage-lvm-hdd-ha            lvm.hwameistor.io   Delete          WaitForFirstConsumer   false                  23h\n")))}p.isMDXComponent=!0}}]);