"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3553],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2,sidebar_label:"\u9ad8\u53ef\u7528\u5377"},l="\u9ad8\u53ef\u7528\u5377",s={unversionedId:"quick_start/create_stateful/basic/ha",id:"quick_start/create_stateful/basic/ha",title:"\u9ad8\u53ef\u7528\u5377",description:"\u5f53 HwameiStor \u7684 HA \u6a21\u5757\u88ab\u5f00\u542f\u540e\uff0cHwameiStor Operator \u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a HA \u7684 StorageClass \u7528\u4e8e\u521b\u5efa HA \u6570\u636e\u5377\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/quick_start/create_stateful/basic/ha.md",sourceDirName:"quick_start/create_stateful/basic",slug:"/quick_start/create_stateful/basic/ha",permalink:"/cn/docs/quick_start/create_stateful/basic/ha",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/create_stateful/basic/ha.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u9ad8\u53ef\u7528\u5377"},sidebar:"tutorialSidebar",previous:{title:"\u672c\u5730\u5377",permalink:"/cn/docs/quick_start/create_stateful/basic/local"},next:{title:"Advanced Operations",permalink:"/cn/docs/category/advanced-operations"}},i={},c=[{value:"\u67e5\u770b <code>StorageClass</code>",id:"\u67e5\u770b-storageclass",level:2},{value:"Create <code>StatefulSet</code>",id:"create-statefulset",level:2},{value:"\u67e5\u770b MySQL Pod and <code>PVC/PV</code>",id:"\u67e5\u770b-mysql-pod-and-pvcpv",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9ad8\u53ef\u7528\u5377"},"\u9ad8\u53ef\u7528\u5377"),(0,r.kt)("p",null,"\u5f53 HwameiStor \u7684 HA \u6a21\u5757\u88ab\u5f00\u542f\u540e\uff0cHwameiStor Operator \u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a HA \u7684 StorageClass \u7528\u4e8e\u521b\u5efa HA \u6570\u636e\u5377\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u4e00\u4e2a MySQL \u5e94\u7528\u4f5c\u4e3a\u4f8b\u5b50\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0b\u9762\u7684 MySQL Yaml \u6587\u4ef6\u6765\u81ea\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/website/blob/main/content/en/examples/application/mysql/mysql-statefulset.yaml"},"Kubernetes \u7684\u5b98\u65b9 Repo"))),(0,r.kt)("h2",{id:"\u67e5\u770b-storageclass"},"\u67e5\u770b ",(0,r.kt)("inlineCode",{parentName:"h2"},"StorageClass")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"StorageClass"),' "hwameistor-storage-lvm-hdd-ha" \u4f7f\u7528\u53c2\u6570 ',(0,r.kt)("inlineCode",{parentName:"p"},'replicaNumber: "2"')," \u5f00\u542f\u9ad8\u53ef\u7528\u529f\u80fd\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl apply -f examples/sc_ha.yaml\n\n$ kubectl get sc hwameistor-storage-lvm-hdd-ha -o yaml\n\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: hwameistor-storage-lvm-hdd-ha\nparameters:\n  replicaNumber: "2"\n  convertible: "false"\n  csi.storage.k8s.io/fstype: xfs\n  poolClass: HDD\n  poolType: REGULAR\n  striped: "true"\n  volumeKind: LVM\nprovisioner: lvm.hwameistor.io\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\nallowVolumeExpansion: true\n')),(0,r.kt)("h2",{id:"create-statefulset"},"Create ",(0,r.kt)("inlineCode",{parentName:"h2"},"StatefulSet")),(0,r.kt)("p",null,"\u5728 HwameiStor \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageClass")," \u5c31\u7eea\u540e, \u4e00\u6761\u547d\u4ee4\u5c31\u80fd\u521b\u5efa MySQL \u5bb9\u5668\u548c\u5b83\u7684\u6570\u636e\u5377:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Console"},"$ kubectl apply -f exapmles/sts-mysql_ha.yaml\n")),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f ",(0,r.kt)("inlineCode",{parentName:"p"},"volumeClaimTemplates")," \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"storageClassName: hwameistor-storage-lvm-hdd-ha"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  volumeClaimTemplates:\n  - metadata:\n      name: data\n      labels:\n        app: sts-mysql-ha\n        app.kubernetes.io/name: sts-mysql-ha\n    spec:\n      storageClassName: hwameistor-storage-lvm-hdd-ha\n      accessModes: ["ReadWriteOnce"]\n      resources:\n        requests:\n          storage: 1Gi\n')),(0,r.kt)("h2",{id:"\u67e5\u770b-mysql-pod-and-pvcpv"},"\u67e5\u770b MySQL Pod and ",(0,r.kt)("inlineCode",{parentName:"h2"},"PVC/PV")),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u91cc\uff0cMySQL \u5bb9\u5668\u88ab\u8c03\u5ea6\u5230\u4e86\u8282\u70b9 ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s-worker-3"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get po -l  app=sts-mysql-ha -o wide\nNAME                READY   STATUS    RESTARTS   AGE     IP            NODE        \nsts-mysql-ha-0   2/2     Running   0          3m08s   10.1.15.151   k8s-worker-1\n\n$ kubectl get pvc -l  app=sts-mysql-ha\nNAME                     STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS                 AGE   VOLUMEMODE\ndata-sts-mysql-ha-0   Bound    pvc-5236ee6f-8212-4628-9876-1b620a4c4c36   1Gi        RWO            hwameistor-storage-lvm-hdd    3m   Filesystem\n")),(0,r.kt)("h1",{id:"\u67e5\u770b-localvolume-and-localvolumereplica-\u5bf9\u8c61"},"\u67e5\u770b ",(0,r.kt)("inlineCode",{parentName:"h1"},"LocalVolume")," and ",(0,r.kt)("inlineCode",{parentName:"h1"},"LocalVolumeReplica")," \u5bf9\u8c61"),(0,r.kt)("p",null,"\u901a\u8fc7\u67e5\u770b\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"PV")," \u540c\u540d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalVolume(LV)"),", \u53ef\u4ee5\u770b\u5230\u672c\u5730\u5377\u521b\u5efa\u5728\u4e86\u8282\u70b9 ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s-worker-1")," \u548c\u8282\u70b9 ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s-worker-2"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get lv pvc-5236ee6f-8212-4628-9876-1b620a4c4c36\n\nNAME                                       POOL                   REPLICAS   CAPACITY     ACCESSIBILITY   STATE   RESOURCE   PUBLISHED                    AGE\npvc-5236ee6f-8212-4628-9876-1b620a4c4c36   LocalStorage_PoolHDD   1          1073741824                   Ready   -1         k8s-worker-1,k8s-worker-2    3m\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica (LVR)")," \u8fdb\u4e00\u6b65\u663e\u793a\u6bcf\u4e2a\u8282\u70b9\u4e0a\u7684\u540e\u7aef\u903b\u8f91\u5377\u8bbe\u5907\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get lvr\nNAME                                          CAPACITY     NODE           STATE   SYNCED   DEVICE                                                              AGE\n5236ee6f-8212-4628-9876-1b620a4c4c36-d2kn55   1073741824   k8s-worker-1   Ready   true     /dev/LocalStorage_PoolHDD-HA/5236ee6f-8212-4628-9876-1b620a4c4c36   4m\n5236ee6f-8212-4628-9876-1b620a4c4c36-glm7rf   1073741824   k8s-worker-3   Ready   true     /dev/LocalStorage_PoolHDD-HA/5236ee6f-8212-4628-9876-1b620a4c4c36   4m\n")))}m.isMDXComponent=!0}}]);