"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4405],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,v=m["".concat(c,".").concat(d)]||m[d]||i[d]||o;return a?n.createElement(v,s(s({ref:t},u),{},{components:a})):n.createElement(v,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},744:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:5,sidebar_label:"\u6570\u636e\u5377\u5feb\u7167"},s="\u6570\u636e\u5377\u5feb\u7167",l={unversionedId:"quick_start/advanced_features/volume_snapshot",id:"quick_start/advanced_features/volume_snapshot",title:"\u6570\u636e\u5377\u5feb\u7167",description:"\u5728 HwameiStor \u4e2d\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u521b\u5efa\u975e\u9ad8\u53ef\u7528\u6570\u636e\u5377\u7684\u5feb\u7167\uff0c\u4e14\u53ef\u4ee5\u57fa\u4e8e\u6570\u636e\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u3001\u56de\u6eda\u64cd\u4f5c\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/quick_start/advanced_features/volume_snapshot.md",sourceDirName:"quick_start/advanced_features",slug:"/quick_start/advanced_features/volume_snapshot",permalink:"/cn/docs/quick_start/advanced_features/volume_snapshot",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/advanced_features/volume_snapshot.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"\u6570\u636e\u5377\u5feb\u7167"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5377IO\u9650\u901f",permalink:"/cn/docs/quick_start/advanced_features/volume_provisioned_io"},next:{title:"\u5378\u8f7d",permalink:"/cn/docs/quick_start/uninstall"}},c={},p=[{value:"\u521b\u5efa\u65b0\u7684\u5377\u5feb\u7167\u7c7b\uff08VolumeSnapshotClass\uff09",id:"\u521b\u5efa\u65b0\u7684\u5377\u5feb\u7167\u7c7bvolumesnapshotclass",level:2},{value:"\u4f7f\u7528 \u5377\u5feb\u7167\u7c7b\uff08VolumeSnapshotClass\uff09 \u521b\u5efa \u5377\u5feb\u7167\uff08VolumeSnapshot\uff09",id:"\u4f7f\u7528-\u5377\u5feb\u7167\u7c7bvolumesnapshotclass-\u521b\u5efa-\u5377\u5feb\u7167volumesnapshot",level:2},{value:"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u64cd\u4f5c",id:"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u64cd\u4f5c",level:2},{value:"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u56de\u6eda\u64cd\u4f5c",id:"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u56de\u6eda\u64cd\u4f5c",level:2}],u={toc:p};function i(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6570\u636e\u5377\u5feb\u7167"},"\u6570\u636e\u5377\u5feb\u7167"),(0,r.kt)("p",null,"\u5728 HwameiStor \u4e2d\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u521b\u5efa\u975e\u9ad8\u53ef\u7528\u6570\u636e\u5377\u7684\u5feb\u7167\uff0c\u4e14\u53ef\u4ee5\u57fa\u4e8e\u6570\u636e\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u3001\u56de\u6eda\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u521b\u5efa\u5377\u5feb\u7167\u7c7b\uff08VolumeSnapshotClass\uff09\u548c\u5377\u5feb\u7167\uff08VolumeSnapshot\uff09\u6765\u4f7f\u7528\u5b83\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa\u65b0\u7684\u5377\u5feb\u7167\u7c7bvolumesnapshotclass"},"\u521b\u5efa\u65b0\u7684\u5377\u5feb\u7167\u7c7b\uff08VolumeSnapshotClass\uff09"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHwameiStor \u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u81ea\u52a8\u521b\u5efa\u8fd9\u6837\u7684 \u5377\u5feb\u7167\u7c7b\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u624b\u52a8\u521b\u5efa \u5377\u5feb\u7167\u7c7b\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b \u5377\u5feb\u7167\u7c7b\uff08VolumeSnapshotClass\uff09 \u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: VolumeSnapshotClass\napiVersion: snapshot.storage.k8s.io/v1\nmetadata:\n  name: hwameistor-storage-lvm-snapshot\n  annotations:\n    snapshot.storage.kubernetes.io/is-default-class: "true"\nparameters:\n  snapsize: "1073741824"\ndriver: lvm.hwameistor.io\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"snapsize\uff1a\u6307\u5b9a\u521b\u5efa\u5377\u5feb\u7167\u7684\u5927\u5c0f\u3002")),(0,r.kt)("p",null,"\u521b\u5efa \u5377\u5feb\u7167\u7c7b \u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u521b\u5efa \u5377\u5feb\u7167\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-\u5377\u5feb\u7167\u7c7bvolumesnapshotclass-\u521b\u5efa-\u5377\u5feb\u7167volumesnapshot"},"\u4f7f\u7528 \u5377\u5feb\u7167\u7c7b\uff08VolumeSnapshotClass\uff09 \u521b\u5efa \u5377\u5feb\u7167\uff08VolumeSnapshot\uff09"),(0,r.kt)("p",null,"\u793a\u4f8b \u5377\u5feb\u7167\uff08VolumeSnapshot\uff09 \u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshot\nmetadata:\n  name: snapshot-local-storage-pvc-lvm\nspec:\n  volumeSnapshotClassName: hwameistor-storage-lvm-snapshot\n  source:\n    persistentVolumeClaimName: local-storage-pvc-lvm\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"persistentVolumeClaimName\uff1a\u6307\u5b9a\u8981\u521b\u5efa\u5feb\u7167\u7684 PVC\u3002")),(0,r.kt)("p",null,"\u521b\u5efa \u5377\u5feb\u7167 \u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5 \u5377\u5feb\u7167\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kubectl get vs\nNAME                             READYTOUSE   SOURCEPVC               SOURCESNAPSHOTCONTENT   RESTORESIZE   SNAPSHOTCLASS                     SNAPSHOTCONTENT                                    CREATIONTIME   AGE\nsnapshot-local-storage-pvc-lvm   true         local-storage-pvc-lvm                           1Gi           hwameistor-storage-lvm-snapshot   snapcontent-0fc17697-68ea-49ce-8e4c-7a791e315110   53y            2m57s\n\n")),(0,r.kt)("p",null,"\u521b\u5efa \u5377\u5feb\u7167 \u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5 HwameiStor \u672c\u5730\u5377\u5feb\u7167\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kubectl get lvs\nNAME                                               CAPACITY     SOURCEVOLUME                               STATE   MERGING   INVALID   AGE\nsnapcontent-0fc17697-68ea-49ce-8e4c-7a791e315110   1073741824   pvc-967baffd-ce10-4739-b996-87c9ed24e635   Ready                       5m31s\n\n")),(0,r.kt)("p",null,"\u521b\u5efa \u5377\u5feb\u7167 \u540e\uff0c\u60a8\u53ef\u4ee5\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u3001\u56de\u6eda\u64cd\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u64cd\u4f5c"},"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u64cd\u4f5c"),(0,r.kt)("p",null,"\u53ef\u4ee5\u521b\u5efapvc\uff0c\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u64cd\u4f5c\u3002\u5177\u4f53\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: local-storage-pvc-lvm-restore\nspec:\n  storageClassName: local-storage-hdd-lvm\n  dataSource:\n    name: snapshot-local-storage-pvc-lvm\n    kind: VolumeSnapshot\n    apiGroup: snapshot.storage.k8s.io\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 1Gi\n")),(0,r.kt)("h2",{id:"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u56de\u6eda\u64cd\u4f5c"},"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u56de\u6eda\u64cd\u4f5c"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u8d44\u6e90 LocalVolumeSnapshotRecover\uff0c\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u56de\u6eda\u64cd\u4f5c\u3002\u5177\u4f53\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: hwameistor.io/v1alpha1\nkind: LocalVolumeSnapshotRecover\nmetadata:\n  name: recover-test\nspec:\n  sourceVolumeSnapshot: snapcontent-0fc17697-68ea-49ce-8e4c-7a791e315110\n  recoverType: "rollback"\n  targetPoolName: LocalStorage_PoolHDD\n  targetVolume: pvc-967baffd-ce10-4739-b996-87c9ed24e635\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sourceVolumeSnapshot\uff1a\u6307\u5b9a\u8981\u8fdb\u884c\u56de\u6eda\u64cd\u4f5c\u7684 \u5377\u5feb\u7167\u3002"),(0,r.kt)("li",{parentName:"ul"},"targetPoolName: \u6307\u5b9a\u56de\u6eda\u76ee\u6807\u6570\u636e\u5377\u6240\u5728\u7684\u5b58\u50a8\u6c60\u3002"),(0,r.kt)("li",{parentName:"ul"},"targetVolume:  \u6307\u5b9a\u56de\u6eda\u7684\u76ee\u6807\u6570\u636e\u5377\u3002")))}i.isMDXComponent=!0}}]);