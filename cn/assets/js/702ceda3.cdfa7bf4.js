"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4,sidebar_label:"\u6570\u636e\u5377IO\u9650\u901f"},l="\u6570\u636e\u5377 IO \u9650\u901f",s={unversionedId:"quick_start/advanced_features/volume_provisioned_io",id:"quick_start/advanced_features/volume_provisioned_io",title:"\u6570\u636e\u5377 IO \u9650\u901f",description:"\u5728 HwameiStor \u4e2d\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u6307\u5b9a Kuberentes \u96c6\u7fa4\u4e0a\u5377\u7684\u6700\u5927 IOPS \u548c\u541e\u5410\u91cf\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/quick_start/advanced_features/volume_provisioned_io.md",sourceDirName:"quick_start/advanced_features",slug:"/quick_start/advanced_features/volume_provisioned_io",permalink:"/cn/docs/quick_start/advanced_features/volume_provisioned_io",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/advanced_features/volume_provisioned_io.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"\u6570\u636e\u5377IO\u9650\u901f"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5377\u9a71\u9010",permalink:"/cn/docs/quick_start/advanced_features/volume_eviction"},next:{title:"\u5378\u8f7d",permalink:"/cn/docs/quick_start/uninstall"}},i={},c=[{value:"\u4f7f\u7528\u6700\u5927 IOPS \u548c\u541e\u5410\u91cf\u53c2\u6570\u521b\u5efa\u65b0\u7684 StorageClass",id:"\u4f7f\u7528\u6700\u5927-iops-\u548c\u541e\u5410\u91cf\u53c2\u6570\u521b\u5efa\u65b0\u7684-storageclass",level:2},{value:"\u4f7f\u7528 StorageClass \u521b\u5efa PVC",id:"\u4f7f\u7528-storageclass-\u521b\u5efa-pvc",level:2},{value:"\u521b\u5efa\u5e26\u6709 PVC \u7684 Deployment",id:"\u521b\u5efa\u5e26\u6709-pvc-\u7684-deployment",level:2},{value:"\u5982\u4f55\u66f4\u6539\u6570\u636e\u5377\u7684\u6700\u5927 IOPS \u548c\u541e\u5410\u91cf",id:"\u5982\u4f55\u66f4\u6539\u6570\u636e\u5377\u7684\u6700\u5927-iops-\u548c\u541e\u5410\u91cf",level:2},{value:"\u67e5\u627e\u7ed9\u5b9a PVC \u5bf9\u5e94\u7684 LocalVolume CR",id:"\u67e5\u627e\u7ed9\u5b9a-pvc-\u5bf9\u5e94\u7684-localvolume-cr",level:3},{value:"\u4fee\u6539 LocalVolume CR",id:"\u4fee\u6539-localvolume-cr",level:3},{value:"\u5982\u4f55\u68c0\u67e5\u6570\u636e\u5377\u7684\u5b9e\u9645 IOPS \u548c\u541e\u5410\u91cf",id:"\u5982\u4f55\u68c0\u67e5\u6570\u636e\u5377\u7684\u5b9e\u9645-iops-\u548c\u541e\u5410\u91cf",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6570\u636e\u5377-io-\u9650\u901f"},"\u6570\u636e\u5377 IO \u9650\u901f"),(0,o.kt)("p",null,"\u5728 HwameiStor \u4e2d\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u6307\u5b9a Kuberentes \u96c6\u7fa4\u4e0a\u5377\u7684\u6700\u5927 IOPS \u548c\u541e\u5410\u91cf\u3002"),(0,o.kt)("p",null,"\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u521b\u5efa\u5177\u6709\u6700\u5927 IOPS \u548c\u541e\u5410\u91cf\u7684\u5377\u5e76\u521b\u5efa\u5de5\u4f5c\u8d1f\u8f7d\u6765\u4f7f\u7528\u5b83\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u6700\u5927-iops-\u548c\u541e\u5410\u91cf\u53c2\u6570\u521b\u5efa\u65b0\u7684-storageclass"},"\u4f7f\u7528\u6700\u5927 IOPS \u548c\u541e\u5410\u91cf\u53c2\u6570\u521b\u5efa\u65b0\u7684 StorageClass"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHwameiStor \u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u81ea\u52a8\u521b\u5efa\u8fd9\u6837\u7684 StorageClass\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u624b\u52a8\u521b\u5efa StorageClass\u3002"),(0,o.kt)("p",null,"\u793a\u4f8b StorageClass \u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'allowVolumeExpansion: true\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: hwameistor-storage-lvm-hdd-sample\nparameters:\n  convertible: "false"\n  csi.storage.k8s.io/fstype: xfs\n  poolClass: HDD\n  poolType: REGULAR\n  provision-iops-on-creation: "100"\n  provision-throughput-on-creation: 1Mi\n  replicaNumber: "1"\n  striped: "true"\n  volumeKind: LVM\nprovisioner: lvm.hwameistor.io\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\n')),(0,o.kt)("p",null,"\u4e0e HwameiStor \u5b89\u88c5\u7a0b\u5e8f\u521b\u5efa\u7684\u5e38\u89c4 StorageClass \u76f8\u6bd4\uff0c\u6dfb\u52a0\u4e86\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provision-iops-on-creation\uff1a\u6307\u5b9a\u521b\u5efa\u65f6\u5377\u7684\u6700\u5927 IOPS\u3002"),(0,o.kt)("li",{parentName:"ul"},"Provision-throughput-on-creation\uff1a\u5b83\u6307\u5b9a\u521b\u5efa\u65f6\u5377\u7684\u6700\u5927\u541e\u5410\u91cf\u3002")),(0,o.kt)("p",null,"\u521b\u5efa StorageClass \u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u521b\u5efa PVC\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528-storageclass-\u521b\u5efa-pvc"},"\u4f7f\u7528 StorageClass \u521b\u5efa PVC"),(0,o.kt)("p",null,"\u793a\u4f8b PVC \u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: pvc-sample\nspec:\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 10Gi\n  storageClassName: hwameistor-storage-lvm-hdd-sample\n")),(0,o.kt)("p",null,"\u521b\u5efa PVC \u540e\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa Deployment \u6765\u4f7f\u7528 PVC\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa\u5e26\u6709-pvc-\u7684-deployment"},"\u521b\u5efa\u5e26\u6709 PVC \u7684 Deployment"),(0,o.kt)("p",null,"\u793a\u4f8b Deployment \u5982\u4e0b\uff1a:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: pod-sample\n  name: pod-sample\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: pod-sample\n  strategy: {}\n  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        app: pod-sample\n    spec:\n      volumes:\n      - name: data\n        persistentVolumeClaim:\n          claimName: pvc-sample\n      containers:\n      - command:\n        - sleep\n        - "100000"\n        image: busybox\n        name: busybox\n        resources: {}\n        volumeMounts:\n        - name: data\n          mountPath: /data\nstatus: {}\n')),(0,o.kt)("p",null,"\u521b\u5efa Deployment \u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6d4b\u8bd5\u5377\u7684 IOPS \u548c\u541e\u5410\u91cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl exec -it pod-sample-5f5f8f6f6f-5q4q5 -- /bin/sh\n$ dd if=/dev/zero of=/data/test bs=4k count=1000000 oflag=direct\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u7531\u4e8e cgroupv1 \u9650\u5236\uff0c\u6700\u5927 IOPS \u548c\u541e\u5410\u91cf\u7684\u8bbe\u7f6e\u53ef\u80fd\u5bf9\u975e\u76f4\u63a5 IO \u4e0d\u751f\u6548\u3002"),(0,o.kt)("h2",{id:"\u5982\u4f55\u66f4\u6539\u6570\u636e\u5377\u7684\u6700\u5927-iops-\u548c\u541e\u5410\u91cf"},"\u5982\u4f55\u66f4\u6539\u6570\u636e\u5377\u7684\u6700\u5927 IOPS \u548c\u541e\u5410\u91cf"),(0,o.kt)("p",null,"\u6700\u5927 IOPS \u548c\u541e\u5410\u91cf\u5728 StorageClass \u7684\u53c2\u6570\u4e0a\u6307\u5b9a\uff0c\u60a8\u4e0d\u80fd\u76f4\u63a5\u66f4\u6539\u5b83\uff0c\u56e0\u4e3a\u5b83\u73b0\u5728\u662f\u4e0d\u53ef\u53d8\u7684\u3002"),(0,o.kt)("p",null,"\u4e0e\u5176\u4ed6\u5b58\u50a8\u5382\u5546\u4e0d\u540c\u7684\u662f\uff0cHwameiStor \u662f\u4e00\u4e2a\u57fa\u4e8e Kubernetes \u7684\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\uff0c\u5b83\u5b9a\u4e49\u4e86\u4e00\u7ec4\u64cd\u4f5c\u539f\u8bed\n\u57fa\u4e8e Kubernetes CRD\u3002 \u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u4fee\u6539\u76f8\u5173\u7684 CRD \u6765\u66f4\u6539\u5377\u7684\u5b9e\u9645\u6700\u5927 IOPS \u548c\u541e\u5410\u91cf\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u663e\u793a\u5982\u4f55\u66f4\u6539\u6570\u636e\u5377\u7684\u6700\u5927 IOPS \u548c\u541e\u5410\u91cf\u3002"),(0,o.kt)("h3",{id:"\u67e5\u627e\u7ed9\u5b9a-pvc-\u5bf9\u5e94\u7684-localvolume-cr"},"\u67e5\u627e\u7ed9\u5b9a PVC \u5bf9\u5e94\u7684 LocalVolume CR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get pvc pvc-sample\n\nNAME             STATUS    VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS                        AGE\ndemo             Bound     pvc-c354a56a-5cf4-4ff6-9472-4e24c7371e10   10Gi       RWO            hwameistor-storage-lvm-hdd          5d23h\npvc-sample       Bound     pvc-cac82087-6f6c-493a-afcd-09480de712ed   10Gi       RWO            hwameistor-storage-lvm-hdd-sample   5d23h\n\n\n$ kubectl get localvolume\n\nNAME                                       POOL                   REPLICAS   CAPACITY      USED       STATE   RESOURCE   PUBLISHED   FSTYPE   AGE\npvc-c354a56a-5cf4-4ff6-9472-4e24c7371e10   LocalStorage_PoolHDD   1          10737418240   33783808   Ready   -1         master      xfs      5d23h\npvc-cac82087-6f6c-493a-afcd-09480de712ed   LocalStorage_PoolHDD   1          10737418240   33783808   Ready   -1         master      xfs      5d23h\n")),(0,o.kt)("p",null,"\u6839\u636e\u6253\u5370\u8f93\u51fa\uff0cPVC \u7684 LocalVolume CR \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"pvc-cac82087-6f6c-493a-afcd-09480de712ed"),"\u3002"),(0,o.kt)("h3",{id:"\u4fee\u6539-localvolume-cr"},"\u4fee\u6539 LocalVolume CR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl edit localvolume pvc-cac82087-6f6c-493a-afcd-09480de712ed\n")),(0,o.kt)("p",null,"\u5728\u7f16\u8f91\u5668\u4e2d\uff0c\u627e\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.volumeQoS")," \u90e8\u5206\u5e76\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"iops")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"throughput")," \u5b57\u6bb5\u3002 \u987a\u4fbf\u8bf4\u4e00\u4e0b\uff0c\u7a7a\u503c\u610f\u5473\u7740\u6ca1\u6709\u9650\u5236\u3002"),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u4fdd\u5b58\u66f4\u6539\u5e76\u9000\u51fa\u7f16\u8f91\u5668\u3002\u8bbe\u7f6e\u5c06\u5728\u51e0\u79d2\u949f\u540e\u751f\u6548\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5c06\u6765\uff0c\u4e00\u65e6 Kubernetes \u652f\u6301",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/enhancements/tree/master/keps/sig-storage/3751-volume-attributes-class#motivation"},"\u5b83"),"\uff0c\u6211\u4eec\u5c06\u5141\u8bb8\u7528\u6237\u76f4\u63a5\u4fee\u6539\u5377\u7684\u6700\u5927 IOPS \u548c\u541e\u5410\u91cf\u3002"),(0,o.kt)("h2",{id:"\u5982\u4f55\u68c0\u67e5\u6570\u636e\u5377\u7684\u5b9e\u9645-iops-\u548c\u541e\u5410\u91cf"},"\u5982\u4f55\u68c0\u67e5\u6570\u636e\u5377\u7684\u5b9e\u9645 IOPS \u548c\u541e\u5410\u91cf"),(0,o.kt)("p",null,"HwameiStor \u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/Documentation/cgroup-v1/blkio-controller.txt"},"cgroupv1"),"\n\u6765\u9650\u5236\u6570\u636e\u5377\u7684 IOPS \u548c\u541e\u5410\u91cf\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u68c0\u67e5\u6570\u636e\u5377\u7684\u5b9e\u9645 IOPS \u548c\u541e\u5410\u91cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ lsblk\nNAME            MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda               8:0    0   160G  0 disk\n\u251c\u2500sda1            8:1    0     1G  0 part /boot\n\u2514\u2500sda2            8:2    0   159G  0 part\n  \u251c\u2500centos-root 253:0    0   300G  0 lvm  /\n  \u251c\u2500centos-swap 253:1    0   7.9G  0 lvm\n  \u2514\u2500centos-home 253:2    0 101.1G  0 lvm  /home\nsdb               8:16   0   100G  0 disk\n\u251c\u2500LocalStorage_PoolHDD-pvc--cac82087--6f6c--493a--afcd--09480de712ed\n                253:3    0    10G  0 lvm  /var/lib/kubelet/pods/3d6bc980-68ae-4a65-a1c8-8b410b7d240f/v\n\u2514\u2500LocalStorage_PoolHDD-pvc--c354a56a--5cf4--4ff6--9472--4e24c7371e10\n                253:4    0    10G  0 lvm  /var/lib/kubelet/pods/521fd7b4-3bef-415b-8720-09225f93f231/v\nsdc               8:32   0   300G  0 disk\n\u2514\u2500sdc1            8:33   0   300G  0 part\n  \u2514\u2500centos-root 253:0    0   300G  0 lvm  /\nsr0              11:0    1   973M  0 rom\n\n$ cat /sys/fs/cgroup/blkio/blkio.throttle.read_iops_device\n253:3 100\n\n$ cat /sys/fs/cgroup/blkio/blkio.throttle.write_iops_device\n253:3 100\n\n$ cat /sys/fs/cgroup/blkio/blkio.throttle.read_bps_device\n253:3 1048576\n\n$ cat /sys/fs/cgroup/blkio/blkio.throttle.write_bps_device\n253:3 1048576\n")))}u.isMDXComponent=!0}}]);