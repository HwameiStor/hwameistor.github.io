"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3830],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>u});var a=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,a,o=function(e,r){if(null==e)return{};var n,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var r=a.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=c(e.components);return a.createElement(i.Provider,{value:r},e.children)},k={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var n=e.components,o=e.mdxType,t=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,m=p["".concat(i,".").concat(u)]||p[u]||k[u]||t;return n?a.createElement(m,l(l({ref:r},d),{},{components:n})):a.createElement(m,l({ref:r},d))}));function u(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=n.length,l=new Array(t);l[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<t;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8201:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const t={sidebar_position:3,sidebar_label:"\u5b89\u88c5\u540e\u68c0\u67e5"},l="\u5b89\u88c5\u540e\u68c0\u67e5",s={unversionedId:"quick_start/install/post_check",id:"quick_start/install/post_check",title:"\u5b89\u88c5\u540e\u68c0\u67e5",description:"\u4e0b\u6587\u7684\u793a\u4f8b\u6765\u81ea\u4e00\u4e2a 4 \u8282\u70b9\u7684 Kubernetes \u96c6\u7fa4",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/quick_start/install/post_check.md",sourceDirName:"quick_start/install",slug:"/quick_start/install/post_check",permalink:"/cn/docs/quick_start/install/post_check",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/quick_start/install/post_check.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u5b89\u88c5\u540e\u68c0\u67e5"},sidebar:"tutorialSidebar",previous:{title:"Deploy with hwameistor-operator",permalink:"/cn/docs/quick_start/install/operator"},next:{title:"\u521b\u5efa\u5b58\u50a8\u6c60",permalink:"/cn/docs/quick_start/install/storage_pool"}},i={},c=[{value:"\u68c0\u67e5 Pod",id:"\u68c0\u67e5-pod",level:2},{value:"\u68c0\u67e5 <code>StorageClass</code>",id:"\u68c0\u67e5-storageclass",level:2},{value:"\u68c0\u67e5 API",id:"\u68c0\u67e5-api",level:2},{value:"\u68c0\u67e5 <code>LocalDiskNode</code> \u548c <code>LocalDisks</code>",id:"\u68c0\u67e5-localdisknode-\u548c-localdisks",level:2},{value:"\u53ef\u9009 \u68c0\u67e5 DRBD \u7684\u5b89\u88c5",id:"\u53ef\u9009-\u68c0\u67e5-drbd-\u7684\u5b89\u88c5",level:2}],d={toc:c};function k(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5b89\u88c5\u540e\u68c0\u67e5"},"\u5b89\u88c5\u540e\u68c0\u67e5"),(0,o.kt)("p",null,"\u4e0b\u6587\u7684\u793a\u4f8b\u6765\u81ea\u4e00\u4e2a 4 \u8282\u70b9\u7684 Kubernetes \u96c6\u7fa4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get no\nNAME           STATUS   ROLES   AGE   VERSION\nk8s-master-1   Ready    master  82d   v1.24.3-2+63243a96d1c393\nk8s-worker-1   Ready    worker  36d   v1.24.3-2+63243a96d1c393\nk8s-worker-2   Ready    worker  59d   v1.24.3-2+63243a96d1c393\nk8s-worker-3   Ready    worker  36d   v1.24.3-2+63243a96d1c393\n")),(0,o.kt)("h2",{id:"\u68c0\u67e5-pod"},"\u68c0\u67e5 Pod"),(0,o.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5 hwameistor \u76f8\u5173 Pod\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl -n hwameistor get pod\nNAME                                                       READY   STATUS                  RESTARTS   AGE\nhwameistor-local-disk-csi-controller-665bb7f47d-6227f      2/2     Running                 0          30s\nhwameistor-local-disk-manager-5ph2d                        2/2     Running                 0          30s\nhwameistor-local-disk-manager-jhj59                        2/2     Running                 0          30s\nhwameistor-local-disk-manager-k9cvj                        2/2     Running                 0          30s\nhwameistor-local-disk-manager-kxwww                        2/2     Running                 0          30s\nhwameistor-local-storage-csi-controller-667d949fbb-k488w   3/3     Running                 0          30s\nhwameistor-local-storage-csqqv                             2/2     Running                 0          30s\nhwameistor-local-storage-gcrzm                             2/2     Running                 0          30s\nhwameistor-local-storage-v8g7t                             2/2     Running                 0          30s\nhwameistor-local-storage-zkwmn                             2/2     Running                 0          30s\nhwameistor-scheduler-58dfcf79f5-lswkt                      1/1     Running                 0          30s\nhwameistor-webhook-986479678-278cr                         1/1     Running                 0          30s\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"local-disk-manager")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"local-storage")," \u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"DaemonSet"),"\u3002\u5728\u6bcf\u4e2a Kubernetes \u8282\u70b9\u4e0a\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a DaemonSet Pod\u3002")),(0,o.kt)("h2",{id:"\u68c0\u67e5-storageclass"},"\u68c0\u67e5 ",(0,o.kt)("inlineCode",{parentName:"h2"},"StorageClass")),(0,o.kt)("p",null,"\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"StorageClass")," \u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get storageclass hwameistor-storage-disk-hdd\n\nNAME                          PROVISIONER          RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE\nhwameistor-storage-disk-hdd   disk.hwameistor.io   Delete          WaitForFirstConsumer   true                   4m29s\n")),(0,o.kt)("h2",{id:"\u68c0\u67e5-api"},"\u68c0\u67e5 API"),(0,o.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u901a\u8fc7 HwameiStor CRD \u521b\u5efa API\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl api-resources --api-group hwameistor.io\n\n```console\nNAME                       SHORTNAMES   APIVERSION               NAMESPACED   KIND\nlocaldiskclaims            ldc          hwameistor.io/v1alpha1   false        LocalDiskClaim\nlocaldisknodes             ldn          hwameistor.io/v1alpha1   false        LocalDiskNode\nlocaldisks                 ld           hwameistor.io/v1alpha1   false        LocalDisk\nlocaldiskvolumes           ldv          hwameistor.io/v1alpha1   false        LocalDiskVolume\nlocalstoragenodes          lsn          hwameistor.io/v1alpha1   false        LocalStorageNode\nlocalvolumeconverts        lvconvert    hwameistor.io/v1alpha1   true         LocalVolumeConvert\nlocalvolumeexpands         lvexpand     hwameistor.io/v1alpha1   false        LocalVolumeExpand\nlocalvolumegroupconverts   lvgconvert   hwameistor.io/v1alpha1   true         LocalVolumeGroupConvert\nlocalvolumegroupmigrates   lvgmigrate   hwameistor.io/v1alpha1   true         LocalVolumeGroupMigrate\nlocalvolumegroups          lvg          hwameistor.io/v1alpha1   true         LocalVolumeGroup\nlocalvolumemigrates        lvmigrate    hwameistor.io/v1alpha1   true         LocalVolumeMigrate\nlocalvolumereplicas        lvr          hwameistor.io/v1alpha1   false        LocalVolumeReplica\nlocalvolumes               lv           hwameistor.io/v1alpha1   false        LocalVolume\n")),(0,o.kt)("h2",{id:"\u68c0\u67e5-localdisknode-\u548c-localdisks"},"\u68c0\u67e5 ",(0,o.kt)("inlineCode",{parentName:"h2"},"LocalDiskNode")," \u548c ",(0,o.kt)("inlineCode",{parentName:"h2"},"LocalDisks")),(0,o.kt)("p",null,"HwameiStor \u81ea\u52a8\u626b\u63cf\u6bcf\u4e2a\u8282\u70b9\u5e76\u5c06\u6bcf\u5757\u6570\u636e\u76d8\u6ce8\u518c\u4e3a CRD ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalDisk(ld)"),"\u3002\u672a\u4f7f\u7528\u7684\u6570\u636e\u76d8\u663e\u793a\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"PHASE: Unclaimed"),"\u3002"),(0,o.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u5e26\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalDisk")," \u7684\u8282\u70b9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get localdisknodes\nNAME           TOTALDISK   FREEDISK\nk8s-master-1   5           3\nk8s-worker-1   5           2\nk8s-worker-2   5           2\nk8s-worker-3   5           2\n\n$ kubectl get localdisks\n\nNAME               NODEMATCH      CLAIM   PHASE\nk8s-master-1-sda   k8s-master-1           Inuse\nk8s-worker-1-sda   k8s-worker-1           Inuse\nk8s-worker-1-sdb   k8s-worker-1           Unclaimed\nk8s-worker-1-sdc   k8s-worker-1           Unclaimed\nk8s-worker-2-sda   k8s-worker-2           Inuse\nk8s-worker-2-sdb   k8s-worker-2           Unclaimed\nk8s-worker-2-sdc   k8s-worker-2           Unclaimed\nk8s-worker-3-sda   k8s-worker-3           Inuse\nk8s-worker-3-sdb   k8s-worker-3           Unclaimed\nk8s-worker-3-sdc   k8s-worker-3           Unclaimed\n")),(0,o.kt)("h2",{id:"\u53ef\u9009-\u68c0\u67e5-drbd-\u7684\u5b89\u88c5"},"[\u53ef\u9009]"," \u68c0\u67e5 DRBD \u7684\u5b89\u88c5"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"drbd-adapter")," Pod \u9700\u8981\u5728\u6bcf\u4e2a Worker \u8282\u70b9\u4e0a\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl -n hwameistor get po -l k8s-app=drbd-adapter -o wide\nNAME                 READY   STATUS    RESTARTS   AGE   IP            NODE        \ndrbd-adapter-4rndg   1/1     Running   0          9h    10.6.254.22   k8s-worker-2   \ndrbd-adapter-bpprj   1/1     Running   0          9h    10.6.254.21   k8s-worker-1\ndrbd-adapter-n52w4   1/1     Running   0          9h    10.6.254.24   k8s-worker-4\ndrbd-adapter-rs9zk   1/1     Running   0          9h    10.6.254.25   k8s-worker-5\ndrbd-adapter-zc882   1/1     Running   0          9h    10.6.254.23   k8s-worker-3\n")),(0,o.kt)("p",null,"\u5728\u6bcf\u4e2a Worker \u8282\u70b9\u4e0a\uff0cDRBD \u7684\u5185\u6838\u6a21\u5757\u5fc5\u987b\u88ab\u52a0\u8f7d\uff0c\u4f8b\u5982\u5728\u8282\u70b9 ",(0,o.kt)("inlineCode",{parentName:"p"},"k8s-worker-1")," \u4e0a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"[root@k8s-worker-1 ~]$ lsmod | grep ^drbd\ndrbd_transport_tcp     22227  0\ndrbd                  606840  1 drbd_transport_tcp\n\n# cat /proc/drbd\nversion: 9.0.32-1 (api:2/proto:86-121)\nGIT-hash: 7d2933d5a3764fcc5e0bf54b71fd9cfb0363be1a build by @4904565a901d, 2022-09-07 08:53:17\nTransports (api:17): tcp (9.0.32-1)\n")))}k.isMDXComponent=!0}}]);