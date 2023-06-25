"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5945],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return a?o.createElement(h,l(l({ref:t},c),{},{components:a})):o.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:4,sidebar_label:"Volume Provisioned IO"},l="Volume Provisioned IO",i={unversionedId:"quick_start/advanced_features/volume_provisioned_io",id:"quick_start/advanced_features/volume_provisioned_io",title:"Volume Provisioned IO",description:"In Hwameistor, it allows users to specify the maximum IOPS and throughput of a volume on a Kuberentes cluster.",source:"@site/docs/quick_start/advanced_features/volume_provisioned_io.md",sourceDirName:"quick_start/advanced_features",slug:"/quick_start/advanced_features/volume_provisioned_io",permalink:"/docs/quick_start/advanced_features/volume_provisioned_io",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/advanced_features/volume_provisioned_io.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Volume Provisioned IO"},sidebar:"tutorialSidebar",previous:{title:"Eviction",permalink:"/docs/quick_start/advanced_features/volume_eviction"},next:{title:"Uninstall",permalink:"/docs/quick_start/uninstall"}},s={},u=[{value:"Create a new StorageClass with the maximum IOPS and throughput parameters",id:"create-a-new-storageclass-with-the-maximum-iops-and-throughput-parameters",level:2},{value:"Create a PVC with the StorageClass",id:"create-a-pvc-with-the-storageclass",level:2},{value:"Create a Deployment with the PVC",id:"create-a-deployment-with-the-pvc",level:2},{value:"How to change the maximum IOPS and throughput of a volume",id:"how-to-change-the-maximum-iops-and-throughput-of-a-volume",level:2},{value:"Find the corresponding LocalVolume CR for the given PVC",id:"find-the-corresponding-localvolume-cr-for-the-given-pvc",level:3},{value:"Modify the LocalVolume CR",id:"modify-the-localvolume-cr",level:3},{value:"How to check the actual IOPS and throughput of a volume",id:"how-to-check-the-actual-iops-and-throughput-of-a-volume",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"volume-provisioned-io"},"Volume Provisioned IO"),(0,n.kt)("p",null,"In Hwameistor, it allows users to specify the maximum IOPS and throughput of a volume on a Kuberentes cluster."),(0,n.kt)("p",null,"Please follow the steps below to create a volume with the maximum IOPS and throughput and create a workload to use it."),(0,n.kt)("h2",{id:"create-a-new-storageclass-with-the-maximum-iops-and-throughput-parameters"},"Create a new StorageClass with the maximum IOPS and throughput parameters"),(0,n.kt)("p",null,"By default, Hwameistor won't auto-create such a StorageClass during the installation, so you need to create it manually."),(0,n.kt)("p",null,"A sample StorageClass is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'allowVolumeExpansion: true\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: hwameistor-storage-lvm-hdd-sample\nparameters:\n  convertible: "false"\n  csi.storage.k8s.io/fstype: xfs\n  poolClass: HDD\n  poolType: REGULAR\n  provision-iops-on-creation: "100"\n  provision-throughput-on-creation: 1Mi\n  replicaNumber: "1"\n  striped: "true"\n  volumeKind: LVM\nprovisioner: lvm.hwameistor.io\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\n')),(0,n.kt)("p",null,"Compare to the regular StorageClass created by Hwameistor installer, the following parameters are added:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"provision-iops-on-creation: It specifies the maximum IOPS of the volume on creation."),(0,n.kt)("li",{parentName:"ul"},"provision-throughput-on-creation: It specifies the maximum throughput of the volume on creation.")),(0,n.kt)("p",null,"After the StorageClass is created, you can use it to create a PVC."),(0,n.kt)("h2",{id:"create-a-pvc-with-the-storageclass"},"Create a PVC with the StorageClass"),(0,n.kt)("p",null,"A sample PVC is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: pvc-sample\nspec:\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 10Gi\n  storageClassName: hwameistor-storage-lvm-hdd-sample\n")),(0,n.kt)("p",null,"After the PVC is created, you can create a deployment to use it."),(0,n.kt)("h2",{id:"create-a-deployment-with-the-pvc"},"Create a Deployment with the PVC"),(0,n.kt)("p",null,"A sample Deployment is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: pod-sample\n  name: pod-sample\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: pod-sample\n  strategy: {}\n  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        app: pod-sample\n    spec:\n      volumes:\n      - name: data\n        persistentVolumeClaim:\n          claimName: pvc-sample\n      containers:\n      - command:\n        - sleep\n        - "100000"\n        image: busybox\n        name: busybox\n        resources: {}\n        volumeMounts:\n        - name: data\n          mountPath: /data\nstatus: {}\n')),(0,n.kt)("p",null,"After the Deployment is created, you can test the volume's IOPS and throughput by using the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl exec -it pod-sample-5f5f8f6f6f-5q4q5 -- /bin/sh\n$ dd if=/dev/zero of=/data/test bs=4k count=1000000 oflag=direct\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": due to the cgroupv1 limitation, the settings of the maximum IOPS and throughput may not take effect on non-direct IO."),(0,n.kt)("h2",{id:"how-to-change-the-maximum-iops-and-throughput-of-a-volume"},"How to change the maximum IOPS and throughput of a volume"),(0,n.kt)("p",null,"The maximum IOPS and throughput are specified on the parameters of the StorageClass, you can not change it directly because it is immutable today. "),(0,n.kt)("p",null,"Different from the other storage vendors, Hwameistor is a Native Kubernetes storage solution and it defines a set of operation primitives\nbased on the Kubernetes CRDs. It means that you can modify the related CRD to change the actual maximum IOPS and throughput of a volume. "),(0,n.kt)("p",null,"The following steps show how to change the maximum IOPS and throughput of a volume."),(0,n.kt)("h3",{id:"find-the-corresponding-localvolume-cr-for-the-given-pvc"},"Find the corresponding LocalVolume CR for the given PVC"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get pvc pvc-sample\n\nNAME             STATUS    VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS                        AGE\ndemo             Bound     pvc-c354a56a-5cf4-4ff6-9472-4e24c7371e10   10Gi       RWO            hwameistor-storage-lvm-hdd          5d23h\npvc-sample       Bound     pvc-cac82087-6f6c-493a-afcd-09480de712ed   10Gi       RWO            hwameistor-storage-lvm-hdd-sample   5d23h\n\n\n$ kubectl get localvolume\n\nNAME                                       POOL                   REPLICAS   CAPACITY      USED       STATE   RESOURCE   PUBLISHED   FSTYPE   AGE\npvc-c354a56a-5cf4-4ff6-9472-4e24c7371e10   LocalStorage_PoolHDD   1          10737418240   33783808   Ready   -1         master      xfs      5d23h\npvc-cac82087-6f6c-493a-afcd-09480de712ed   LocalStorage_PoolHDD   1          10737418240   33783808   Ready   -1         master      xfs      5d23h\n")),(0,n.kt)("p",null,"According to the print out, the LocalVolume CR for the PVC is ",(0,n.kt)("inlineCode",{parentName:"p"},"pvc-cac82087-6f6c-493a-afcd-09480de712ed"),"."),(0,n.kt)("h3",{id:"modify-the-localvolume-cr"},"Modify the LocalVolume CR"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl edit localvolume pvc-cac82087-6f6c-493a-afcd-09480de712ed\n")),(0,n.kt)("p",null,"In the editor, find the ",(0,n.kt)("inlineCode",{parentName:"p"},"spec.volumeQoS")," section and modify the ",(0,n.kt)("inlineCode",{parentName:"p"},"iops")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"throughput")," fields. By the way, an empty value means no limit."),(0,n.kt)("p",null,"At last, save the changes and exit the editor. The settings will take effect in a few seconds. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": In the future, we will allow users to modify the maximum IOPS and throughput of a volume directly once the Kubernetes supports ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/enhancements/tree/master/keps/sig-storage/3751-volume-attributes-class#motivation"},"it"),"."),(0,n.kt)("h2",{id:"how-to-check-the-actual-iops-and-throughput-of-a-volume"},"How to check the actual IOPS and throughput of a volume"),(0,n.kt)("p",null,"Hwameistor uses the ",(0,n.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/Documentation/cgroup-v1/blkio-controller.txt"},"cgroupv1")," to limit the IOPS and throughput of a volume, so you can use the following command to check the actual IOPS and throughput of a volume."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ lsblk\nNAME            MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda               8:0    0   160G  0 disk\n\u251c\u2500sda1            8:1    0     1G  0 part /boot\n\u2514\u2500sda2            8:2    0   159G  0 part\n  \u251c\u2500centos-root 253:0    0   300G  0 lvm  /\n  \u251c\u2500centos-swap 253:1    0   7.9G  0 lvm\n  \u2514\u2500centos-home 253:2    0 101.1G  0 lvm  /home\nsdb               8:16   0   100G  0 disk\n\u251c\u2500LocalStorage_PoolHDD-pvc--cac82087--6f6c--493a--afcd--09480de712ed\n                253:3    0    10G  0 lvm  /var/lib/kubelet/pods/3d6bc980-68ae-4a65-a1c8-8b410b7d240f/v\n\u2514\u2500LocalStorage_PoolHDD-pvc--c354a56a--5cf4--4ff6--9472--4e24c7371e10\n                253:4    0    10G  0 lvm  /var/lib/kubelet/pods/521fd7b4-3bef-415b-8720-09225f93f231/v\nsdc               8:32   0   300G  0 disk\n\u2514\u2500sdc1            8:33   0   300G  0 part\n  \u2514\u2500centos-root 253:0    0   300G  0 lvm  /\nsr0              11:0    1   973M  0 rom\n\n$ cat /sys/fs/cgroup/blkio/blkio.throttle.read_iops_device\n253:3 100\n\n$ cat /sys/fs/cgroup/blkio/blkio.throttle.write_iops_device\n253:3 100\n\n$ cat /sys/fs/cgroup/blkio/blkio.throttle.read_bps_device\n253:3 1048576\n\n$ cat /sys/fs/cgroup/blkio/blkio.throttle.write_bps_device\n253:3 1048576\n")))}p.isMDXComponent=!0}}]);