"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4564],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return g}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),i=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=i(e.components);return n.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=i(t),g=l,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||o;return t?n.createElement(m,s(s({ref:a},d),{},{components:t})):n.createElement(m,s({ref:a},d))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,s=new Array(o);s[0]=u;var r={};for(var c in a)hasOwnProperty.call(a,c)&&(r[c]=a[c]);r.originalType=e,r.mdxType="string"==typeof e?e:l,s[1]=r;for(var i=2;i<o;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},269:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return p}});var n=t(7462),l=t(3366),o=(t(7294),t(3905)),s=["components"],r={sidebar_position:3,sidebar_label:"Install Independently"},c="Install Independently",i={unversionedId:"02installation/02install",id:"02installation/02install",title:"Install Independently",description:"This page explains how you can independently install the HwaweiStor local storage on a Kubernetes node.",source:"@site/docs/02installation/02install.md",sourceDirName:"02installation",slug:"/02installation/02install",permalink:"/docs/02installation/02install",editUrl:"https://github.com/hwameistor/hwameistor/docs/02installation/02install.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Install Independently"},sidebar:"tutorialSidebar",previous:{title:"Install by Helm Charts",permalink:"/docs/02installation/01helm-chart"},next:{title:"Scenarios",permalink:"/docs/03scenarios"}},d={},p=[{value:"Step 1: Select and configure nodes",id:"step-1-select-and-configure-nodes",level:2},{value:"Step 2: Deploy local-storage, CSI sidecars, and scheduler",id:"step-2-deploy-local-storage-csi-sidecars-and-scheduler",level:2},{value:"Step 3: Create StorageClass",id:"step-3-create-storageclass",level:2},{value:"Step 4: Create PVC",id:"step-4-create-pvc",level:2},{value:"Step 5: Deploy Nginx with PVC",id:"step-5-deploy-nginx-with-pvc",level:2},{value:"Step 6: Check status of local-storage",id:"step-6-check-status-of-local-storage",level:2},{value:"Step 7: Deploy local disk manager service",id:"step-7-deploy-local-disk-manager-service",level:2}],u={toc:p};function g(e){var a=e.components,t=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-independently"},"Install Independently"),(0,o.kt)("p",null,"This page explains how you can independently install the HwaweiStor local storage on a Kubernetes node."),(0,o.kt)("h2",{id:"step-1-select-and-configure-nodes"},"Step 1: Select and configure nodes"),(0,o.kt)("p",null,'Before installing a local-storage, you should determine which Kubernetes nodes the storage will run on. These nodes will be added to the local-storage. The nodes should have free disks and also be able to host applications using local volumes. In addition, you should determine which kind of volume (LVM, DISK, or RAM) should be able to provision on each node. Besides, for the node which is already configured with LVM or DISK, you can still configure RAM volume for it by adding "ramdiskTotalCapacity" into the configuration as below.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# 1. List all the kubernetes nodes\n$ kubectl get nodes\nNAME                       STATUS   ROLES             AGE   VERSION\nlocalstorage-10-6-161-21   Ready    master,registry   10d   v1.18.6\nlocalstorage-10-6-161-25   Ready    <none>            10d   v1.18.6\nlocalstorage-10-6-161-26   Ready    <none>            10d   v1.18.6\nlocalstorage-10-6-161-27   Ready    <none>            10d   v1.18.6\n\n# 2. Add a local-storage label for each selected node and the key is "lvm.hwameistor.io/enable"\n$ kubectl label node localstorage-10-6-161-27 lvm.hwameistor.io/enable=true\nnode/localstorage-10-6-161-27 labeled\n\n# *** Important notes ***\n# Do NOT change the sequence of step 2 and 3\n')),(0,o.kt)("h2",{id:"step-2-deploy-local-storage-csi-sidecars-and-scheduler"},"Step 2: Deploy local-storage, CSI sidecars, and scheduler"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# 0. Check out the code\n$ git clone https://github.com/hwameistor/local-storage.git\n$ cd local-storage\n\n# 1. Create a separate namespace for local-storage, such as local-storage-system\n$ kubectl apply -f deploy/01_namespace.yaml\n\n# 2. Create a RBAC and limitrange in the namespace\n$ kubectl apply -f deploy/02_rbac.yaml\n$ kubectl apply -f deploy/03_limitsrange.yaml\n\n# 3. Deploy local-storage CRDs\n$ kubectl apply -f deploy/crds\n\n# 4. Deploy a local-storage cluster\n$ kubectl apply -f deploy/05_cluster.yaml\n\n# 5. Deploy CSI sidecars\n$ kubectl apply -f deploy/06_csi_controller.yaml\n\n# 6. Deploy scheduler\n$ kubectl apply -f deploy/07_scheduler.yaml\n\n# 7. Check status of the deployment\n$ kubectl -n local-storage-system get pod -o wide\nNAME                                READY STATUS  RESTARTS   AGE   IP               NODE              NOMINATED NODE   READINESS GATES\nhwameistor-csi-controller-0         3/3 Running     15      13h   172.29.54.20     localstorage-10-6-161-27   <none>    <none>\nhwameistor-local-storage-4b6n8      3/3 Running     0       18m   10.6.161.27      localstorage-10-6-161-27   <none>    <none>\nhwameistor-local-storage-dv7nd      3/3 Running     0       18m   10.6.161.26      localstorage-10-6-161-26   <none>    <none>\nhwameistor-local-storage-vzdqh      3/3 Running     0       18m   10.6.161.25      localstorage-10-6-161-25   <none>    <none>\nhwameistor-scheduler-6585bb5897-9xj85 1/1 Running   0       15h   172.29.164.160   localstorage-10-6-161-25   <none>     <none>\n")),(0,o.kt)("h2",{id:"step-3-create-storageclass"},"Step 3: Create StorageClass"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# You should create a storageclass for each volume kind, such as LVM, DISK, and RAM\n\n# LVM volume storageclass (waitforfistconsumer mode) with the expansion capability\n$ kubectl apply -f deploy/storageclass-lvm.yaml\n# Disk volume storageclass (waitforfistconsumer mode) without the expansion capability\n$ kubectl apply -f deploy/storageclass-disk.yaml\n# RAMdisk volume storageclass (waitforfistconsumer mode) without the expansion capability\n$ kubectl apply -f deploy/storageclass-ram.yaml\n\n# check for storageclass\n$ kubectl get sc\nNAME                     PROVISIONER                 RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE\nlocal-storage-hdd-disk   localstorage.hwameistor.io   Delete          WaitForFirstConsumer   false                  21d\nlocal-storage-hdd-lvm    localstorage.hwameistor.io   Delete          WaitForFirstConsumer   true                   21d\nlocal-storage-hdd-lvm-ha localstorage.hwameistor.io   Delete          WaitForFirstConsumer   true                   21d\nlocal-storage-hdd-ram    localstorage.hwameistor.io   Delete          WaitForFirstConsumer   false                  15d\n")),(0,o.kt)("h2",{id:"step-4-create-pvc"},"Step 4: Create PVC"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a test PVC with LVM local volume\n$ kubectl apply -f deploy/pvc-lvm.yaml\n\n# Check the PVC status, which should be in Pending\n$ kubectl get pvc\nNAME                     STATUS    VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS             AGE\nlocal-storage-pvc-lvm    Pending                                      local-storage-hdd-lvm    3s\n")),(0,o.kt)("h2",{id:"step-5-deploy-nginx-with-pvc"},"Step 5: Deploy Nginx with PVC"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Deploy a nginx application which uses the LVM local volume PVC\n$ kubectl apply -f deploy/nginx-lvm.yaml\n\n$ kubectl get pod\nNAME                                       READY   STATUS    RESTARTS   AGE\nnginx-local-storage-lvm-86d8c884c9-q58kq   0/1     Pending   0          63s\n\n$ kubectl get pvc\nNAME                    STATUS    VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS            AGE\nlocal-storage-pvc-lvm   Pending                                      local-storage-hdd-lvm   102s\n")),(0,o.kt)("h2",{id:"step-6-check-status-of-local-storage"},"Step 6: Check status of local-storage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Check status of local-storage nodes\n$ kubectl get lsn # localstoragenode\nNAME                       VOLUMEKIND   RAMDISKQUOTA   ZONE      REGION    STATUS   AGE\nlocalstorage-10-6-161-26   LVM          0              default   default   Ready    14d\n\n# Check status of local volume and volume replica\n$ kubectl get lv # localvolume\nNAME                    POOL    KIND   REPLICAS   CAPACITY     ACCESSIBILITY   STATE      RESOURCE   PUBLISHED   AGE\npvc-996b05e8-80f2-4240-ace4-5f5f250310e2   LocalStorage_PoolHDD   LVM   1   1073741824   k8s-node1  Creating    2m50s\n")),(0,o.kt)("p",null,"For the disk that is not allocated, the status of PVC is in pending and that of LV is in creating. Because of no storage capacity, you should deploy the local disk manager service to claim more storage resources."),(0,o.kt)("h2",{id:"step-7-deploy-local-disk-manager-service"},"Step 7: Deploy local disk manager service"),(0,o.kt)("p",null,"For installing local-disk-manager, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/01features/01local-disk-manager"},"local-disk-manager"),"."),(0,o.kt)("p",null,"Check specific information for each physical disk on the local-storage node, and check the disk claim information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get ldc -A # localdiskclaim\nNAMESPACE    NAME                      NODEMATCH   PHASE\nhwameistor   localdiskclaim-sample-1   k8s-node1   Bound\n$ kubectl get ld # localdisk\nNAME             NODEMATCH    CLAIM                     PHASE\nk8s-node1-sdb    k8s-node1    localdiskclaim-sample-1   Claimed\n")),(0,o.kt)("p",null,"The disk has been applied and successfully assigned to localstoragenode k8s-node1, and the service status is normal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pvc # pvc\nNAME                STATUS   VOLUME CAPACITY   ACCESS MODES   STORAGECLASS            AGE\nlocal-storage-pvc-lvm   Bound    pvc-996b05e8-80f2-4240-ace4-5f5f250310e2   1Gi        RWO            local-storage-hdd-lvm   37m\n#  Check status of local volume and volume replica\n$ kubectl get lv # localvolume\nNAME                POOL                   KIND   REPLICAS   CAPACITY     ACCESSIBILITY   STATE      RESOURCE   PUBLISHED   AGE\npvc-996b05e8-80f2-4240-ace4-5f5f250310e2   LocalStorage_PoolHDD   LVM   1   1073741824   k8s-node1          Ready   -1    22m\n\n$ kubectl get lvr # localvolumereplica\nNAME                            KIND   CAPACITY     NODE        STATE   SYNCED   DEVICE         AGE\npvc-996b05e8-80f2-4240-ace4-5f5f250310e2-v5scm9   LVM    1073741824   k8s-node1   Ready   true     /dev/LocalStorage_PoolHDD/pvc-996b05e8-80f2-4240-ace4-5f5f250310e2   80s\n\n$ kubectl get pod\nNAME                                       READY   STATUS    RESTARTS   AGE\nnginx-local-storage-lvm-86d8c884c9-q58kq   1/1     Running   0          36m\n")))}g.isMDXComponent=!0}}]);