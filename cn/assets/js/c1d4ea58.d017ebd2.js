"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4887],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),c=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,f=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return a?l.createElement(f,r(r({ref:t},m),{},{components:a})):l.createElement(f,r({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},910:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var l=a(7462),n=(a(7294),a(3905));const o={sidebar_position:8,sidebar_label:"Local Volumes"},r="Local Volumes",s={unversionedId:"volumes/local",id:"volumes/local",title:"Local Volumes",description:"Running a stateful application with HwameiStor is super easy.",source:"@site/docs/volumes/local.md",sourceDirName:"volumes",slug:"/volumes/local",permalink:"/cn/docs/volumes/local",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/volumes/local.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Local Volumes"},sidebar:"tutorialSidebar",previous:{title:"\u672c\u5730\u7f13\u5b58\u5377 ",permalink:"/cn/docs/volumes/cache"},next:{title:"\u6570\u636e\u5377\u52a0\u5bc6",permalink:"/cn/docs/volumes/volume_encrypt"}},i={},c=[{value:"Verify <code>StorageClass</code>",id:"verify-storageclass",level:2},{value:"Create <code>StatefulSet</code>",id:"create-statefulset",level:2},{value:"Verify MySQL Pod and <code>PVC/PV</code>",id:"verify-mysql-pod-and-pvcpv",level:2},{value:"Verify <code>LocalVolume</code> objects",id:"verify-localvolume-objects",level:2},{value:"Optional Scale MySQL out into a 3-node Cluster",id:"optional-scale-mysql-out-into-a-3-node-cluster",level:2}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"local-volumes"},"Local Volumes"),(0,n.kt)("p",null,"Running a stateful application with HwameiStor is super easy."),(0,n.kt)("p",null,"As an example, we will deploy a MySQL application by creating a local volume."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The yaml file for MySQL is learnt from\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/website/blob/main/content/en/examples/application/mysql/mysql-statefulset.yaml"},"Kubernetes repo"))),(0,n.kt)("h2",{id:"verify-storageclass"},"Verify ",(0,n.kt)("inlineCode",{parentName:"h2"},"StorageClass")),(0,n.kt)("p",null,"Make sure the StorageClasses have been created successfully by HwameiStor Operator. And then select one of them to provision the data volume for the application."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl get sc hwameistor-storage-lvm-hdd -o yaml\n\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: hwameistor-storage-lvm-hdd\nparameters:\n  convertible: "false"\n  csi.storage.k8s.io/fstype: xfs\n  poolClass: HDD\n  poolType: REGULAR\n  replicaNumber: "1"\n  striped: "true"\n  volumeKind: LVM\nprovisioner: lvm.hwameistor.io\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\nallowVolumeExpansion: true\n')),(0,n.kt)("h2",{id:"create-statefulset"},"Create ",(0,n.kt)("inlineCode",{parentName:"h2"},"StatefulSet")),(0,n.kt)("p",null,"With HwameiStor and its ",(0,n.kt)("inlineCode",{parentName:"p"},"StorageClass")," ready, a MySQL StatefulSet and its volumes\ncan be deployed by a single command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Console"},"$ kubectl apply -f sts-mysql_local.yaml\n")),(0,n.kt)("p",null,"Please note the ",(0,n.kt)("inlineCode",{parentName:"p"},"volumeClaimTemplates")," uses ",(0,n.kt)("inlineCode",{parentName:"p"},"storageClassName: hwameistor-storage-lvm-hdd"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  volumeClaimTemplates:\n  - metadata:\n      name: data\n      labels:\n        app: sts-mysql-local\n        app.kubernetes.io/name: sts-mysql-local\n    spec:\n      storageClassName: hwameistor-storage-lvm-hdd\n      accessModes: ["ReadWriteOnce"]\n      resources:\n        requests:\n          storage: 1Gi\n')),(0,n.kt)("p",null,"Please note the minimum PVC size need to be over 4096 blocks, for example, 16MB with 4KB block."),(0,n.kt)("h2",{id:"verify-mysql-pod-and-pvcpv"},"Verify MySQL Pod and ",(0,n.kt)("inlineCode",{parentName:"h2"},"PVC/PV")),(0,n.kt)("p",null,"In this example, the pod is scheduled on node ",(0,n.kt)("inlineCode",{parentName:"p"},"k8s-worker-3"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get po -l  app=sts-mysql-local -o wide\nNAME                READY   STATUS    RESTARTS   AGE     IP            NODE        \nsts-mysql-local-0   2/2     Running   0          3m08s   10.1.15.154   k8s-worker-3\n\n$ kubectl get pvc -l  app=sts-mysql-local\nNAME                     STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS                 AGE   VOLUMEMODE\ndata-sts-mysql-local-0   Bound    pvc-accf1ddd-6f47-4275-b520-dc317c90f80b   1Gi        RWO            hwameistor-storage-lvm-hdd    3m   Filesystem\n")),(0,n.kt)("h2",{id:"verify-localvolume-objects"},"Verify ",(0,n.kt)("inlineCode",{parentName:"h2"},"LocalVolume")," objects"),(0,n.kt)("p",null,"By listing ",(0,n.kt)("inlineCode",{parentName:"p"},"LocalVolume(LV)")," objects with the same name as that of the ",(0,n.kt)("inlineCode",{parentName:"p"},"PV"),",\nwe can see that the local volume is also created on node ",(0,n.kt)("inlineCode",{parentName:"p"},"k8s-worker-3")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get lv pvc-accf1ddd-6f47-4275-b520-dc317c90f80b\n\nNAME                                       POOL                   REPLICAS   CAPACITY     ACCESSIBILITY   STATE   RESOURCE   PUBLISHED      AGE\npvc-accf1ddd-6f47-4275-b520-dc317c90f80b   LocalStorage_PoolHDD   1          1073741824                   Ready   -1         k8s-worker-3    3m\n")),(0,n.kt)("h2",{id:"optional-scale-mysql-out-into-a-3-node-cluster"},"[Optional]"," Scale MySQL out into a 3-node Cluster"),(0,n.kt)("p",null,"HwameiStor supports ",(0,n.kt)("inlineCode",{parentName:"p"},"StatefulSet")," scaleout. Each ",(0,n.kt)("inlineCode",{parentName:"p"},"pod")," of the ",(0,n.kt)("inlineCode",{parentName:"p"},"StatefulSet")," will\nattach and mount an independent HwameiStor volume."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl scale sts/sts-mysql-local --replicas=3\n\n$ kubectl get po -l  app=sts-mysql-local -o wide\nNAME                READY   STATUS     RESTARTS   AGE     IP            NODE        \nsts-mysql-local-0   2/2     Running    0          4h38m   10.1.15.154   k8s-worker-3\nsts-mysql-local-1   2/2     Running    0          19m     10.1.57.44    k8s-worker-2\nsts-mysql-local-2   0/2     Init:0/2   0          14s     10.1.42.237   k8s-worker-1\n\n$ kubectl get pvc -l  app=sts-mysql-local -o wide\nNAME                     STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS                 AGE     VOLUMEMODE\ndata-sts-mysql-local-0   Bound    pvc-accf1ddd-6f47-4275-b520-dc317c90f80b   1Gi        RWO            hwameistor-storage-lvm-hdd   3m07s   Filesystem\ndata-sts-mysql-local-1   Bound    pvc-a4f8b067-9c1d-450f-aff4-5807d61f5d88   1Gi        RWO            hwameistor-storage-lvm-hdd   2m18s   Filesystem\ndata-sts-mysql-local-2   Bound    pvc-47ee308d-77da-40ec-b06e-4f51499520c1   1Gi        RWO            hwameistor-storage-lvm-hdd   2m18s   Filesystem\n\n$ kubectl get lv\nNAME                                       POOL                   REPLICAS   CAPACITY     ACCESSIBILITY   STATE   RESOURCE   PUBLISHED      AGE\npvc-47ee308d-77da-40ec-b06e-4f51499520c1   LocalStorage_PoolHDD   1          1073741824                   Ready   -1         k8s-worker-1   2m50s\npvc-a4f8b067-9c1d-450f-aff4-5807d61f5d88   LocalStorage_PoolHDD   1          1073741824                   Ready   -1         k8s-worker-2   2m50s\npvc-accf1ddd-6f47-4275-b520-dc317c90f80b   LocalStorage_PoolHDD   1          1073741824                   Ready   -1         k8s-worker-3   3m40s\n")))}p.isMDXComponent=!0}}]);