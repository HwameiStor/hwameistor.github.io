"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[359],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>u});var r=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,o=function(e,a){if(null==e)return{};var n,r,o={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var a=r.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=c(e.components);return r.createElement(i.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var n=e.components,o=e.mdxType,t=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,m=p["".concat(i,".").concat(u)]||p[u]||k[u]||t;return n?r.createElement(m,l(l({ref:a},d),{},{components:n})):r.createElement(m,l({ref:a},d))}));function u(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=n.length,l=new Array(t);l[0]=p;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<t;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2457:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const t={sidebar_position:3,sidebar_label:"Post-Check after Deployment"},l="Post-Check after Deployment",s={unversionedId:"quick_start/install/post_check",id:"quick_start/install/post_check",title:"Post-Check after Deployment",description:"The example below is from a 4-node kubernetes cluster:",source:"@site/docs/quick_start/install/post_check.md",sourceDirName:"quick_start/install",slug:"/quick_start/install/post_check",permalink:"/docs/quick_start/install/post_check",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/quick_start/install/post_check.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Post-Check after Deployment"},sidebar:"tutorialSidebar",previous:{title:"Deploy by Helm Charts",permalink:"/docs/quick_start/install/deploy"},next:{title:"Set up a Storage Pool",permalink:"/docs/quick_start/install/storage_pool"}},i={},c=[{value:"Check pods",id:"check-pods",level:2},{value:"Check APIs",id:"check-apis",level:2},{value:"Check <code>LocalDiskNode</code> and <code>localDisks</code>",id:"check-localdisknode-and-localdisks",level:2},{value:"Optional Check DRBD installation",id:"optional-check-drbd-installation",level:2}],d={toc:c};function k(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-check-after-deployment"},"Post-Check after Deployment"),(0,o.kt)("p",null,"The example below is from a 4-node kubernetes cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get no\nNAME           STATUS   ROLES   AGE   VERSION\nk8s-master-1   Ready    master  82d   v1.24.3-2+63243a96d1c393\nk8s-worker-1   Ready    worker  36d   v1.24.3-2+63243a96d1c393\nk8s-worker-2   Ready    worker  59d   v1.24.3-2+63243a96d1c393\nk8s-worker-3   Ready    worker  36d   v1.24.3-2+63243a96d1c393\n")),(0,o.kt)("h2",{id:"check-pods"},"Check pods"),(0,o.kt)("p",null,"The following pods should be up and running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl -n hwameistor get pod\nNAME                                                       READY   STATUS                  RESTARTS   AGE\nhwameistor-local-disk-csi-controller-665bb7f47d-6227f      2/2     Running                 0          30s\nhwameistor-local-disk-manager-5ph2d                        2/2     Running                 0          30s\nhwameistor-local-disk-manager-jhj59                        2/2     Running                 0          30s\nhwameistor-local-disk-manager-k9cvj                        2/2     Running                 0          30s\nhwameistor-local-disk-manager-kxwww                        2/2     Running                 0          30s\nhwameistor-local-storage-csi-controller-667d949fbb-k488w   3/3     Running                 0          30s\nhwameistor-local-storage-csqqv                             2/2     Running                 0          30s\nhwameistor-local-storage-gcrzm                             2/2     Running                 0          30s\nhwameistor-local-storage-v8g7t                             2/2     Running                 0          30s\nhwameistor-local-storage-zkwmn                             2/2     Running                 0          30s\nhwameistor-scheduler-58dfcf79f5-lswkt                      1/1     Running                 0          30s\nhwameistor-webhook-986479678-278cr                         1/1     Running                 0          30s\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"local-disk-manager")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"local-storage")," are ",(0,o.kt)("inlineCode",{parentName:"p"},"DaemonSets"),". They should have one pod on each Kubernetes node.")),(0,o.kt)("h2",{id:"check-apis"},"Check APIs"),(0,o.kt)("p",null,"HwameiStor CRDs create the following APIs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl api-resources --api-group hwameistor.io\n\nNAME                       SHORTNAMES   APIVERSION               NAMESPACED   KIND\nlocaldiskclaims            ldc          hwameistor.io/v1alpha1   false        LocalDiskClaim\nlocaldisknodes             ldn          hwameistor.io/v1alpha1   false        LocalDiskNode\nlocaldisks                 ld           hwameistor.io/v1alpha1   false        LocalDisk\nlocaldiskvolumes           ldv          hwameistor.io/v1alpha1   false        LocalDiskVolume\nlocalstoragenodes          lsn          hwameistor.io/v1alpha1   false        LocalStorageNode\nlocalvolumeconverts        lvconvert    hwameistor.io/v1alpha1   true         LocalVolumeConvert\nlocalvolumeexpands         lvexpand     hwameistor.io/v1alpha1   false        LocalVolumeExpand\nlocalvolumegroupconverts   lvgconvert   hwameistor.io/v1alpha1   true         LocalVolumeGroupConvert\nlocalvolumegroupmigrates   lvgmigrate   hwameistor.io/v1alpha1   true         LocalVolumeGroupMigrate\nlocalvolumegroups          lvg          hwameistor.io/v1alpha1   true         LocalVolumeGroup\nlocalvolumemigrates        lvmigrate    hwameistor.io/v1alpha1   true         LocalVolumeMigrate\nlocalvolumereplicas        lvr          hwameistor.io/v1alpha1   false        LocalVolumeReplica\nlocalvolumes               lv           hwameistor.io/v1alpha1   false        LocalVolume\n")),(0,o.kt)("p",null,"For the details about CRDs, please also refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/apis"},"CRDs"),"."),(0,o.kt)("h2",{id:"check-localdisknode-and-localdisks"},"Check ",(0,o.kt)("inlineCode",{parentName:"h2"},"LocalDiskNode")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"localDisks")),(0,o.kt)("p",null,"HwameiStor automatically scans each node and registers each disk as CRD ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalDisk(ld)"),".\nThe unused disks are displayed with ",(0,o.kt)("inlineCode",{parentName:"p"},"PHASE: Unclaimed"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get localdisknodes\nNAME           TOTALDISK   FREEDISK\nk8s-master-1   5           3\nk8s-worker-1   5           2\nk8s-worker-2   5           2\nk8s-worker-3   5           2\n\n$ kubectl get localdisks\nNAME               NODEMATCH      CLAIM   PHASE\nk8s-master-1-sda   k8s-master-1           Inuse\nk8s-worker-1-sda   k8s-worker-1           Inuse\nk8s-worker-1-sdb   k8s-worker-1           Unclaimed\nk8s-worker-1-sdc   k8s-worker-1           Unclaimed\nk8s-worker-2-sda   k8s-worker-2           Inuse\nk8s-worker-2-sdb   k8s-worker-2           Unclaimed\nk8s-worker-2-sdc   k8s-worker-2           Unclaimed\nk8s-worker-3-sda   k8s-worker-3           Inuse\nk8s-worker-3-sdb   k8s-worker-3           Unclaimed\nk8s-worker-3-sdc   k8s-worker-3           Unclaimed\n")),(0,o.kt)("h2",{id:"optional-check-drbd-installation"},"[Optional]"," Check DRBD installation"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"drbd-adapter")," pod should be running on each worker node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl -n hwameistor get po -l k8s-app=drbd-adapter -o wide\nNAME                 READY   STATUS    RESTARTS   AGE   IP            NODE        \ndrbd-adapter-4rndg   1/1     Running   0          9h    10.6.254.22   k8s-worker-2   \ndrbd-adapter-bpprj   1/1     Running   0          9h    10.6.254.21   k8s-worker-1\ndrbd-adapter-n52w4   1/1     Running   0          9h    10.6.254.24   k8s-worker-4\ndrbd-adapter-rs9zk   1/1     Running   0          9h    10.6.254.25   k8s-worker-5\ndrbd-adapter-zc882   1/1     Running   0          9h    10.6.254.23   k8s-worker-3\n")),(0,o.kt)("p",null,"On each worker node, the DRBD kernel module should be loaded, for example on node ",(0,o.kt)("inlineCode",{parentName:"p"},"k8s-worker-1"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"[root@k8s-worker-1 ~]$ lsmod | grep ^drbd\ndrbd_transport_tcp     22227  0\ndrbd                  606840  1 drbd_transport_tcp\n\n[root@k8s-worker-1 ~]$ cat /proc/drbd\nversion: 9.0.32-1 (api:2/proto:86-121)\nGIT-hash: 7d2933d5a3764fcc5e0bf54b71fd9cfb0363be1a build by @4904565a901d, 2022-09-07 08:53:17\nTransports (api:17): tcp (9.0.32-1)\n")))}k.isMDXComponent=!0}}]);