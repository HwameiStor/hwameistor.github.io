"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2506],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=l.createContext({}),i=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=i(e.components);return l.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=i(a),u=n,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return a?l.createElement(f,s(s({ref:t},p),{},{components:a})):l.createElement(f,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var i=2;i<o;i++)s[i]=a[i];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8811:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var l=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1,sidebar_label:"Local Volumes"},s="Local Volumes",r={unversionedId:"quick_start/create_stateful/basic/local",id:"quick_start/create_stateful/basic/local",title:"Local Volumes",description:"Running a stateful application with HwameiStor is super easy.",source:"@site/docs/quick_start/create_stateful/basic/local.md",sourceDirName:"quick_start/create_stateful/basic",slug:"/quick_start/create_stateful/basic/local",permalink:"/docs/quick_start/create_stateful/basic/local",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/quick_start/create_stateful/basic/local.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Local Volumes"},sidebar:"tutorialSidebar",previous:{title:"Basic Operations",permalink:"/docs/category/basic-operations"},next:{title:"HA Volumes",permalink:"/docs/quick_start/create_stateful/basic/ha"}},c={},i=[{value:"Verify <code>StorageClass</code>",id:"verify-storageclass",level:2},{value:"Create <code>StatefulSet</code>",id:"create-statefulset",level:2},{value:"Verify MySQL Pod and <code>PVC/PV</code>",id:"verify-mysql-pod-and-pvcpv",level:2},{value:"Verify <code>LocalVolume</code> objects",id:"verify-localvolume-objects",level:2},{value:"Optional Scale MySQL out into a 3-node Cluster",id:"optional-scale-mysql-out-into-a-3-node-cluster",level:2}],p={toc:i};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"local-volumes"},"Local Volumes"),(0,n.kt)("p",null,"Running a stateful application with HwameiStor is super easy."),(0,n.kt)("p",null,"Here we use a MySQL an example for demonstration."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The yaml file for MySQL is borrowed from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/website/blob/main/content/en/examples/application/mysql/mysql-statefulset.yaml"},"the official Repo of Kubernetes"))),(0,n.kt)("h2",{id:"verify-storageclass"},"Verify ",(0,n.kt)("inlineCode",{parentName:"h2"},"StorageClass")),(0,n.kt)("p",null,"HwameiStor helm charts by default install a ",(0,n.kt)("inlineCode",{parentName:"p"},"StorageClass")," named ",(0,n.kt)("inlineCode",{parentName:"p"},"hwameistor-storage-lvm-hdd"),", which provisions basic local volumes."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl get sc hwameistor-storage-lvm-hdd -o yaml\n\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: hwameistor-storage-lvm-hdd\nparameters:\n  convertible: "false"\n  csi.storage.k8s.io/fstype: xfs\n  poolClass: HDD\n  poolType: REGULAR\n  replicaNumber: "1"\n  striped: "true"\n  volumeKind: LVM\nprovisioner: lvm.hwameistor.io\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\nallowVolumeExpansion: true\n')),(0,n.kt)("p",null,"If it is missing, you can recreate it by:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl apply -f examples/sc-local.yaml\n")),(0,n.kt)("h2",{id:"create-statefulset"},"Create ",(0,n.kt)("inlineCode",{parentName:"h2"},"StatefulSet")),(0,n.kt)("p",null,"With HwameiStor and its ",(0,n.kt)("inlineCode",{parentName:"p"},"StorageClass")," ready, a MySQL StatefulSet and its volumes can be deployed by a single command: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Console"},"$ kubectl apply -f sts-mysql_local.yaml\n")),(0,n.kt)("p",null,"Please note the ",(0,n.kt)("inlineCode",{parentName:"p"},"volumeClaimTemplates")," uses ",(0,n.kt)("inlineCode",{parentName:"p"},"storageClassName: hwameistor-storage-lvm-hdd"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  volumeClaimTemplates:\n  - metadata:\n      name: data\n      labels:\n        app: sts-mysql-local\n        app.kubernetes.io/name: sts-mysql-local\n    spec:\n      storageClassName: hwameistor-storage-lvm-hdd\n      accessModes: ["ReadWriteOnce"]\n      resources:\n        requests:\n          storage: 1Gi\n')),(0,n.kt)("p",null,"and ",(0,n.kt)("inlineCode",{parentName:"p"},"schedulerName: hwameistor-scheduler"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  template:\n    spec:\n      schedulerName: hwameistor-scheduler\n")),(0,n.kt)("h2",{id:"verify-mysql-pod-and-pvcpv"},"Verify MySQL Pod and ",(0,n.kt)("inlineCode",{parentName:"h2"},"PVC/PV")),(0,n.kt)("p",null,"In this example, the pod is scheduled on node ",(0,n.kt)("inlineCode",{parentName:"p"},"k8s-worker-3"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get po -l  app=sts-mysql-local -o wide\nNAME                READY   STATUS    RESTARTS   AGE     IP            NODE        \nsts-mysql-local-0   2/2     Running   0          3m08s   10.1.15.154   k8s-worker-3\n\n$ kubectl get pvc -l  app=sts-mysql-local\nNAME                     STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS                 AGE   VOLUMEMODE\ndata-sts-mysql-local-0   Bound    pvc-accf1ddd-6f47-4275-b520-dc317c90f80b   1Gi        RWO            hwameistor-storage-lvm-hdd    3m   Filesystem\n")),(0,n.kt)("h2",{id:"verify-localvolume-objects"},"Verify ",(0,n.kt)("inlineCode",{parentName:"h2"},"LocalVolume")," objects"),(0,n.kt)("p",null,"By listing ",(0,n.kt)("inlineCode",{parentName:"p"},"LocalVolume(LV)")," objects with the same name as that of the ",(0,n.kt)("inlineCode",{parentName:"p"},"PV"),", we can see that the local volume is also created on node ",(0,n.kt)("inlineCode",{parentName:"p"},"k8s-worker-3")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get lv pvc-accf1ddd-6f47-4275-b520-dc317c90f80b\n\nNAME                                       POOL                   REPLICAS   CAPACITY     ACCESSIBILITY   STATE   RESOURCE   PUBLISHED      AGE\npvc-accf1ddd-6f47-4275-b520-dc317c90f80b   LocalStorage_PoolHDD   1          1073741824                   Ready   -1         k8s-worker-3    3m\n")),(0,n.kt)("h2",{id:"optional-scale-mysql-out-into-a-3-node-cluster"},"[Optional]"," Scale MySQL out into a 3-node Cluster"),(0,n.kt)("p",null,"HwameiStor supports ",(0,n.kt)("inlineCode",{parentName:"p"},"StatefulSet")," scaleout. Each ",(0,n.kt)("inlineCode",{parentName:"p"},"pod")," of the ",(0,n.kt)("inlineCode",{parentName:"p"},"StatefulSet")," will attach and mount an independent HwameiStor volume."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl scale sts/sts-mysql-local --replicas=3\n\n$ kubectl get po -l  app=sts-mysql-local -o wide\nNAME                READY   STATUS     RESTARTS   AGE     IP            NODE        \nsts-mysql-local-0   2/2     Running    0          4h38m   10.1.15.154   k8s-worker-3\nsts-mysql-local-1   2/2     Running    0          19m     10.1.57.44    k8s-worker-2\nsts-mysql-local-2   0/2     Init:0/2   0          14s     10.1.42.237   k8s-worker-1\n\n$ kubectl get pvc -l  app=sts-mysql-local -o wide\nNAME                     STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS                 AGE     VOLUMEMODE\ndata-sts-mysql-local-0   Bound    pvc-accf1ddd-6f47-4275-b520-dc317c90f80b   1Gi        RWO            hwameistor-storage-lvm-hdd   3m07s   Filesystem\ndata-sts-mysql-local-1   Bound    pvc-a4f8b067-9c1d-450f-aff4-5807d61f5d88   1Gi        RWO            hwameistor-storage-lvm-hdd   2m18s   Filesystem\ndata-sts-mysql-local-2   Bound    pvc-47ee308d-77da-40ec-b06e-4f51499520c1   1Gi        RWO            hwameistor-storage-lvm-hdd   2m18s   Filesystem\n\n$ kubectl get lv\nNAME                                       POOL                   REPLICAS   CAPACITY     ACCESSIBILITY   STATE   RESOURCE   PUBLISHED      AGE\npvc-47ee308d-77da-40ec-b06e-4f51499520c1   LocalStorage_PoolHDD   1          1073741824                   Ready   -1         k8s-worker-1   2m50s\npvc-a4f8b067-9c1d-450f-aff4-5807d61f5d88   LocalStorage_PoolHDD   1          1073741824                   Ready   -1         k8s-worker-2   2m50s\npvc-accf1ddd-6f47-4275-b520-dc317c90f80b   LocalStorage_PoolHDD   1          1073741824                   Ready   -1         k8s-worker-3   3m40s\n")))}m.isMDXComponent=!0}}]);