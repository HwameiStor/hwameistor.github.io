"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[370],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,y=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return t?n.createElement(y,l(l({ref:a},c),{},{components:t})):n.createElement(y,l({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6138:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:2,sidebar_label:"Use HA Volumes"},l="Use HA Volumes",s={unversionedId:"apps/ha",id:"apps/ha",title:"Use HA Volumes",description:"When the HA module is enabled, HwameiStor Operator will generate a StorageClass of HA automatically.",source:"@site/docs/apps/ha.md",sourceDirName:"apps",slug:"/apps/ha",permalink:"/docs/apps/ha",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/apps/ha.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Use HA Volumes"},sidebar:"tutorialSidebar",previous:{title:"Use Disk Volume",permalink:"/docs/apps/disk"},next:{title:"Fast Failover",permalink:"/docs/fast_failover"}},i={},p=[{value:"Verify <code>StorageClass</code>",id:"verify-storageclass",level:2},{value:"Create <code>StatefulSet</code>",id:"create-statefulset",level:2},{value:"Verify MySQL Pod and <code>PVC/PV</code>",id:"verify-mysql-pod-and-pvcpv",level:2},{value:"Verify <code>LocalVolume</code> and <code>LocalVolumeReplica</code> objects",id:"verify-localvolume-and-localvolumereplica-objects",level:2}],c={toc:p};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-ha-volumes"},"Use HA Volumes"),(0,r.kt)("p",null,"When the HA module is enabled, HwameiStor Operator will generate a StorageClass of HA automatically."),(0,r.kt)("p",null,"As an example, we will deploy a MySQL application by creating a highly available (HA) volume."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The yaml file for MySQL is learnt from\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/website/blob/main/content/en/examples/application/mysql/mysql-statefulset.yaml"},"Kubernetes repo"))),(0,r.kt)("h2",{id:"verify-storageclass"},"Verify ",(0,r.kt)("inlineCode",{parentName:"h2"},"StorageClass")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"StorageClass"),' "hwameistor-storage-lvm-hdd-ha" has parameter ',(0,r.kt)("inlineCode",{parentName:"p"},'replicaNumber: "2"'),",\nwhich indicates a DRBD replication pair."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl apply -f examples/sc_ha.yaml\n\n$ kubectl get sc hwameistor-storage-lvm-hdd-ha -o yaml\n\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: hwameistor-storage-lvm-hdd-ha\nparameters:\n  replicaNumber: "2"\n  convertible: "false"\n  csi.storage.k8s.io/fstype: xfs\n  poolClass: HDD\n  poolType: REGULAR\n  striped: "true"\n  volumeKind: LVM\nprovisioner: lvm.hwameistor.io\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\nallowVolumeExpansion: true\n')),(0,r.kt)("h2",{id:"create-statefulset"},"Create ",(0,r.kt)("inlineCode",{parentName:"h2"},"StatefulSet")),(0,r.kt)("p",null,"With HwameiStor and its ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageClass")," ready, a MySQL StatefulSet and its volumes\ncan be deployed by a single command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Console"},"$ kubectl apply -f exapmles/sts-mysql_ha.yaml\n")),(0,r.kt)("p",null,"Please note the ",(0,r.kt)("inlineCode",{parentName:"p"},"volumeClaimTemplates")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"storageClassName: hwameistor-storage-lvm-hdd-ha"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  volumeClaimTemplates:\n  - metadata:\n      name: data\n      labels:\n        app: sts-mysql-ha\n        app.kubernetes.io/name: sts-mysql-ha\n    spec:\n      storageClassName: hwameistor-storage-lvm-hdd-ha\n      accessModes: ["ReadWriteOnce"]\n      resources:\n        requests:\n          storage: 1Gi\n')),(0,r.kt)("h2",{id:"verify-mysql-pod-and-pvcpv"},"Verify MySQL Pod and ",(0,r.kt)("inlineCode",{parentName:"h2"},"PVC/PV")),(0,r.kt)("p",null,"In this example, the pod is scheduled on node ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s-worker-3"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get po -l  app=sts-mysql-ha -o wide\nNAME                READY   STATUS    RESTARTS   AGE     IP            NODE        \nsts-mysql-ha-0   2/2     Running   0          3m08s   10.1.15.151   k8s-worker-1\n\n$ kubectl get pvc -l  app=sts-mysql-ha\nNAME                     STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS                 AGE   VOLUMEMODE\ndata-sts-mysql-ha-0   Bound    pvc-5236ee6f-8212-4628-9876-1b620a4c4c36   1Gi        RWO            hwameistor-storage-lvm-hdd    3m   Filesystem\n")),(0,r.kt)("h2",{id:"verify-localvolume-and-localvolumereplica-objects"},"Verify ",(0,r.kt)("inlineCode",{parentName:"h2"},"LocalVolume")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"LocalVolumeReplica")," objects"),(0,r.kt)("p",null,"By listing ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalVolume(LV)")," objects with the same name as that of the ",(0,r.kt)("inlineCode",{parentName:"p"},"PV"),",\nwe can see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"LV")," object is created on two nodes: ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s-worker-1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s-worker-2"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get lv pvc-5236ee6f-8212-4628-9876-1b620a4c4c36\n\nNAME                                       POOL                   REPLICAS   CAPACITY     ACCESSIBILITY   STATE   RESOURCE   PUBLISHED                    AGE\npvc-5236ee6f-8212-4628-9876-1b620a4c4c36   LocalStorage_PoolHDD   1          1073741824                   Ready   -1         k8s-worker-1,k8s-worker-2    3m\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica (LVR)")," further shows the backend logical volume devices on each node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-concole"},"$ kubectl get lvr\nNAME                                          CAPACITY     NODE           STATE   SYNCED   DEVICE                                                              AGE\n5236ee6f-8212-4628-9876-1b620a4c4c36-d2kn55   1073741824   k8s-worker-1   Ready   true     /dev/LocalStorage_PoolHDD-HA/5236ee6f-8212-4628-9876-1b620a4c4c36   4m\n5236ee6f-8212-4628-9876-1b620a4c4c36-glm7rf   1073741824   k8s-worker-3   Ready   true     /dev/LocalStorage_PoolHDD-HA/5236ee6f-8212-4628-9876-1b620a4c4c36   4m\n")))}m.isMDXComponent=!0}}]);