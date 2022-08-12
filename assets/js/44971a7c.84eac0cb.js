"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[359],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,m=u["".concat(i,".").concat(d)]||u[d]||k[d]||n;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={sidebar_position:3,sidebar_label:"Post-Deployment Check"},l="Post-Deployment Check",s={unversionedId:"quick_start/install/post_check",id:"quick_start/install/post_check",title:"Post-Deployment Check",description:"The below example is from a 4-node kubernetes cluster:",source:"@site/docs/quick_start/install/post_check.md",sourceDirName:"quick_start/install",slug:"/quick_start/install/post_check",permalink:"/docs/quick_start/install/post_check",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/quick_start/install/post_check.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Post-Deployment Check"},sidebar:"tutorialSidebar",previous:{title:"Deploy by Helm Charts",permalink:"/docs/quick_start/install/deploy"},next:{title:"Set up a Storage Pool",permalink:"/docs/quick_start/install/storage_pool"}},i={},c=[{value:"Step 1: Check the pods",id:"step-1-check-the-pods",level:2},{value:"Step 2: Check the APIs",id:"step-2-check-the-apis",level:2}],p={toc:c};function k(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-deployment-check"},"Post-Deployment Check"),(0,o.kt)("p",null,"The below example is from a 4-node kubernetes cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get no\nNAME           STATUS   ROLES   AGE   VERSION\nk8s-master-1   Ready    master  82d   v1.24.3-2+63243a96d1c393\nk8s-worker-1   Ready    worker  36d   v1.24.3-2+63243a96d1c393\nk8s-worker-2   Ready    worker  59d   v1.24.3-2+63243a96d1c393\nk8s-worker-3   Ready    worker  36d   v1.24.3-2+63243a96d1c393\n")),(0,o.kt)("h2",{id:"step-1-check-the-pods"},"Step 1: Check the pods"),(0,o.kt)("p",null,"The following pods should be up and running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl -n hwameistor get pod\nNAME                                                       READY   STATUS                  RESTARTS   AGE\nhwameistor-local-disk-csi-controller-665bb7f47d-6227f      2/2     Running                 0          30s\nhwameistor-local-disk-manager-5ph2d                        2/2     Running                 0          30s\nhwameistor-local-disk-manager-jhj59                        2/2     Running                 0          30s\nhwameistor-local-disk-manager-k9cvj                        2/2     Running                 0          30s\nhwameistor-local-disk-manager-kxwww                        2/2     Running                 0          30s\nhwameistor-local-storage-csi-controller-667d949fbb-k488w   3/3     Running                 0          30s\nhwameistor-local-storage-csqqv                             2/2     Running                 0          30s\nhwameistor-local-storage-gcrzm                             2/2     Running                 0          30s\nhwameistor-local-storage-v8g7t                             2/2     Running                 0          30s\nhwameistor-local-storage-zkwmn                             2/2     Running                 0          30s\nhwameistor-scheduler-58dfcf79f5-lswkt                      1/1     Running                 0          30s\nhwameistor-webhook-986479678-278cr                         1/1     Running                 0          30s\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"local-disk-manager")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"local-storage")," are ",(0,o.kt)("inlineCode",{parentName:"p"},"DaemonSets"),". They should have one pod on each Kubernetes node.")),(0,o.kt)("h2",{id:"step-2-check-the-apis"},"Step 2: Check the APIs"),(0,o.kt)("p",null,"HwameiStor CRDs create the following APIs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl api-resources --api-group hwameistor.io\nNAME                       SHORTNAMES   APIVERSION               NAMESPACED   KIND\nlocaldiskclaims            ldc          hwameistor.io/v1alpha1   false        LocalDiskClaim\nlocaldisknodes             ldn          hwameistor.io/v1alpha1   false        LocalDiskNode\nlocaldisks                 ld           hwameistor.io/v1alpha1   false        LocalDisk\nlocaldiskvolumes           ldv          hwameistor.io/v1alpha1   false        LocalDiskVolume\nlocalstoragenodes          lsn          hwameistor.io/v1alpha1   false        LocalStorageNode\nlocalvolumeconverts        lvconvert    hwameistor.io/v1alpha1   true         LocalVolumeConvert\nlocalvolumeexpands         lvexpand     hwameistor.io/v1alpha1   false        LocalVolumeExpand\nlocalvolumegroupconverts   lvgconvert   hwameistor.io/v1alpha1   true         LocalVolumeGroupConvert\nlocalvolumegroupmigrates   lvgmigrate   hwameistor.io/v1alpha1   true         LocalVolumeGroupMigrate\nlocalvolumegroups          lvg          hwameistor.io/v1alpha1   true         LocalVolumeGroup\nlocalvolumemigrates        lvmigrate    hwameistor.io/v1alpha1   true         LocalVolumeMigrate\nlocalvolumereplicas        lvr          hwameistor.io/v1alpha1   false        LocalVolumeReplica\nlocalvolumes               lv           hwameistor.io/v1alpha1   false        LocalVolume\n")),(0,o.kt)("p",null,"For the details about CRDs, please also refer to the chapter ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/apis"},"CRDs"),"."),(0,o.kt)("h1",{id:"step-3-check-the-localdisknode-and-localdisks"},"Step 3: Check the localDiskNode and localDisks"),(0,o.kt)("p",null,"HwameiStor autoscans each node and registers each disk as CRD ",(0,o.kt)("inlineCode",{parentName:"p"},"localDisk(ld)"),". The unused disks are displayed with ",(0,o.kt)("inlineCode",{parentName:"p"},"PHASE: Unclaimed"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get localdisknodes\nNAME           TOTALDISK   FREEDISK\nk8s-master-1   5           3\nk8s-worker-1   5           2\nk8s-worker-2   5           2\nk8s-worker-3   5           2\n\n$ kubectl get localdisks\nNAME               NODEMATCH      CLAIM   PHASE\nk8s-master-1-sda   k8s-master-1           Inuse\nk8s-worker-1-sda   k8s-worker-1           Inuse\nk8s-worker-1-sdb   k8s-worker-1           Unclaimed\nk8s-worker-1-sdc   k8s-worker-1           Unclaimed\nk8s-worker-2-sda   k8s-worker-2           Inuse\nk8s-worker-2-sdb   k8s-worker-2           Unclaimed\nk8s-worker-2-sdc   k8s-worker-2           Unclaimed\nk8s-worker-3-sda   k8s-worker-3           Inuse\nk8s-worker-3-sdb   k8s-worker-3           Unclaimed\nk8s-worker-3-sdc   k8s-worker-3           Unclaimed\n")))}k.isMDXComponent=!0}}]);