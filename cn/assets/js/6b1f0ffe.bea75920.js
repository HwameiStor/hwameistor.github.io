"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7517],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,sidebar_label:"\u521b\u5efa LVM \u5b58\u50a8\u6c60"},s="LVM \u6570\u636e\u5377",l={unversionedId:"storageclass/lvm_volumes",id:"storageclass/lvm_volumes",title:"LVM \u6570\u636e\u5377",description:"HwameiStor \u63d0\u4f9b\u4e86\u57fa\u4e8e LVM \u7684\u6570\u636e\u5377\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/storageclass/lvm_volumes.md",sourceDirName:"storageclass",slug:"/storageclass/lvm_volumes",permalink:"/cn/docs/storageclass/lvm_volumes",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/storageclass/lvm_volumes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u521b\u5efa LVM \u5b58\u50a8\u6c60"},sidebar:"tutorialSidebar",previous:{title:"StorageClass",permalink:"/cn/docs/category/storageclass"},next:{title:"\u521b\u5efa\u88f8\u78c1\u76d8\u5b58\u50a8\u6c60",permalink:"/cn/docs/storageclass/disk_volumes"}},i={},c=[],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lvm-\u6570\u636e\u5377"},"LVM \u6570\u636e\u5377"),(0,a.kt)("p",null,"HwameiStor \u63d0\u4f9b\u4e86\u57fa\u4e8e LVM \u7684\u6570\u636e\u5377\u3002\n\u8fd9\u79cd\u7c7b\u578b\u7684\u6570\u636e\u5377\u63d0\u4f9b\u4e86\u63a5\u8fd1\u539f\u751f\u78c1\u76d8\u7684\u8bfb\u5199\u6027\u80fd\uff0c\u5e76\u4e14\u5728\u6b64\u4e4b\u4e0a\u63d0\u4f9b\u4e86\u6570\u636e\u5377\u6269\u5bb9\u3001\u8fc1\u79fb\u3001HA \u7b49\u7b49\u9ad8\u7ea7\u7279\u6027\u3002"),(0,a.kt)("p",null,"\u4e0b\u6587\u5c06\u793a\u4f8b\u521b\u5efa\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u975e HA \u7c7b\u578b\u6570\u636e\u5377\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u51c6\u5907 LVM \u5b58\u50a8\u8282\u70b9"),(0,a.kt)("p",{parentName:"li"},"\u9700\u8981\u4fdd\u8bc1\u8be5\u5b58\u50a8\u8282\u70b9\u6709\u53ef\u7528\u5bb9\u91cf\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/cn/docs/nodes_and_disks/lvm_nodes"},"LVM \u5b58\u50a8\u8282\u70b9\u6269\u5bb9"),"\u3002"),(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u662f\u5426\u6709\u53ef\u7528\u5bb9\u91cf\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get localstoragenodes k8s-worker-2 -oyaml | grep freeCapacityBytes\nfreeCapacityBytes: 10523508736\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u51c6\u5907 StorageClass"),(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u540d\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"hwameistor-storage-lvm-ssd")," \u7684 StorageClass\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},'$ cat << EOF | kubectl apply -f - \napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:  \n  name: hwameistor-storage-lvm-ssd \nparameters:\n  convertible: "false"\n  csi.storage.k8s.io/fstype: xfs\n  poolClass: SSD\n  poolType: REGULAR\n  replicaNumber: "1"\n  striped: "true"\n  volumeKind: LVM\nprovisioner: lvm.hwameistor.io\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\nallowVolumeExpansion: true\nEOF \n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u6570\u636e\u5377 PVC"),(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u540d\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"hwameistor-lvm-volume")," \u7684 PVC\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ cat << EOF | kubectl apply -f -\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: hwameistor-lvm-volume\nspec:\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 1Gi\n  storageClassName: hwameistor-storage-lvm-ssd\nEOF\n")))))}m.isMDXComponent=!0}}]);