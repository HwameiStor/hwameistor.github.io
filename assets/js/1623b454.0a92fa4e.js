"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8020],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,d=m["".concat(i,".").concat(h)]||m[h]||c[h]||s;return a?o.createElement(d,l(l({ref:t},u),{},{components:a})):o.createElement(d,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var p=2;p<s;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const s={sidebar_position:5,sidebar_label:"Volume Snapshot"},l="Volume Snapshot",r={unversionedId:"quick_start/advanced_features/volume_snapshot",id:"quick_start/advanced_features/volume_snapshot",title:"Volume Snapshot",description:"In HwameiStor, it allows users to create snapshots of data volumes and perform restore and rollback operations based on data volume snapshots.",source:"@site/docs/quick_start/advanced_features/volume_snapshot.md",sourceDirName:"quick_start/advanced_features",slug:"/quick_start/advanced_features/volume_snapshot",permalink:"/docs/quick_start/advanced_features/volume_snapshot",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/advanced_features/volume_snapshot.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Volume Snapshot"},sidebar:"tutorialSidebar",previous:{title:"Volume Provisioned IO",permalink:"/docs/quick_start/advanced_features/volume_provisioned_io"},next:{title:"Uninstall",permalink:"/docs/quick_start/uninstall"}},i={},p=[{value:"Create a new VolumeSnapshotClass",id:"create-a-new-volumesnapshotclass",level:2},{value:"Create a VolumeSnapshot using the VolumeSnapshotClass",id:"create-a-volumesnapshot-using-the-volumesnapshotclass",level:2},{value:"Restore VolumeSnapshot",id:"restore-volumesnapshot",level:2},{value:"Rollback VolumeSnapshot",id:"rollback-volumesnapshot",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"volume-snapshot"},"Volume Snapshot"),(0,n.kt)("p",null,"In HwameiStor, it allows users to create snapshots of data volumes and perform restore and rollback operations based on data volume snapshots."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Currently, only snapshots are supported for non highly available LVM type data volumes."),(0,n.kt)("p",{parentName:"admonition"},"To avoid data inconsistency, please pause or stop I/O before taking a snapshot.")),(0,n.kt)("p",null,"Please follow the steps below to create a VolumeSnapshotClass and a VolumeSnapshot to use it."),(0,n.kt)("h2",{id:"create-a-new-volumesnapshotclass"},"Create a new VolumeSnapshotClass"),(0,n.kt)("p",null,"By default, HwameiStor does not automatically create a VolumeSnapshotClass during installation, so you need to create a VolumeSnapshotClass manually."),(0,n.kt)("p",null,"A sample VolumeSnapshotClass is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: VolumeSnapshotClass\napiVersion: snapshot.storage.k8s.io/v1\nmetadata:\n  name: hwameistor-storage-lvm-snapshot\n  annotations:\n    snapshot.storage.kubernetes.io/is-default-class: "true"\nparameters:\n  snapsize: "1073741824"\ndriver: lvm.hwameistor.io\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"snapsize\uff1aIt specifies the size of VolumeSnapshot")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If the snapsize parameter is not specified, the size of the created snapshot is consistent with the size of the source volume.")),(0,n.kt)("p",null,"After you create a VolumeSnapshotClass, you can use it to create VolumeSnapshot."),(0,n.kt)("h2",{id:"create-a-volumesnapshot-using-the-volumesnapshotclass"},"Create a VolumeSnapshot using the VolumeSnapshotClass"),(0,n.kt)("p",null,"A sample VolumeSnapshot is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshot\nmetadata:\n  name: snapshot-local-storage-pvc-lvm\nspec:\n  volumeSnapshotClassName: hwameistor-storage-lvm-snapshot\n  source:\n    persistentVolumeClaimName: local-storage-pvc-lvm\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"persistentVolumeClaimName\uff1aIt specifies the PVC to create the VolumeSnapshot")),(0,n.kt)("p",null,"After creating a VolumeSnapshot, you can check the VolumeSnapshot using the following command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kubectl get vs\nNAME                             READYTOUSE   SOURCEPVC               SOURCESNAPSHOTCONTENT   RESTORESIZE   SNAPSHOTCLASS                     SNAPSHOTCONTENT                                    CREATIONTIME   AGE\nsnapshot-local-storage-pvc-lvm   true         local-storage-pvc-lvm                           1Gi           hwameistor-storage-lvm-snapshot   snapcontent-0fc17697-68ea-49ce-8e4c-7a791e315110   53y            2m57s\n\n")),(0,n.kt)("p",null,"After creating a VolumeSnapshot, you can check the Hwameistor LocalvolumeSnapshot using the following command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kubectl get lvs\nNAME                                               CAPACITY     SOURCEVOLUME                               STATE   MERGING   INVALID   AGE\nsnapcontent-0fc17697-68ea-49ce-8e4c-7a791e315110   1073741824   pvc-967baffd-ce10-4739-b996-87c9ed24e635   Ready                       5m31s\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CAPACITY: The capacity size of the snapshot"),(0,n.kt)("li",{parentName:"ul"},"SourceVOLUME: The source volume name of the snapshot"),(0,n.kt)("li",{parentName:"ul"},"MERGING: Whether the snapshot is in a merged state (usually triggered by ",(0,n.kt)("em",{parentName:"li"}," rollback operation "),")"),(0,n.kt)("li",{parentName:"ul"},"INVALID: Whether the snapshot is invalidated (usually triggered when ",(0,n.kt)("em",{parentName:"li"}," the snapshot capacity is full "),")"),(0,n.kt)("li",{parentName:"ul"},"AGE: The actual creation time of the snapshot (different from the CR creation time, this time is the creation time of the underlying snapshot data volume)")),(0,n.kt)("p",null,"After creating a VolumeSnapshot, you can restore and rollback the VolumeSnapshot."),(0,n.kt)("h2",{id:"restore-volumesnapshot"},"Restore VolumeSnapshot"),(0,n.kt)("p",null,"You can create pvc to restore VolumeSnapshot, as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: local-storage-pvc-lvm-restore\nspec:\n  storageClassName: local-storage-hdd-lvm\n  dataSource:\n    name: snapshot-local-storage-pvc-lvm\n    kind: VolumeSnapshot\n    apiGroup: snapshot.storage.k8s.io\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 1Gi\n")),(0,n.kt)("h2",{id:"rollback-volumesnapshot"},"Rollback VolumeSnapshot"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To roll back a snapshot, you must first stop the I/O of the source volume, such as stopping the application and waiting for the rollback operation to complete,\n",(0,n.kt)("em",{parentName:"p"},"confirm data consistency")," before using the rolled back data volume.")),(0,n.kt)("p",null,"VolumeSnapshot can be rolled back by creating the resource LocalVolumeSnapshotRecover, as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: hwameistor.io/v1alpha1\nkind: LocalVolumeSnapshotRecover\nmetadata:\n  name: recover-test\nspec:\n  sourceVolumeSnapshot: snapcontent-0fc17697-68ea-49ce-8e4c-7a791e315110\n  recoverType: "rollback"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"sourceVolumeSnapshot\uff1aIt specifies the VolumeSnapshot to be rollback.")))}c.isMDXComponent=!0}}]);