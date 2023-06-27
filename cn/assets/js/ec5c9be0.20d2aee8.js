"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8713],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),d=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,k=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return t?o.createElement(k,s(s({ref:n},c),{},{components:t})):o.createElement(k,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<a;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6961:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:1,sidebar_label:"LVM \u5b58\u50a8\u8282\u70b9"},s="LVM \u5b58\u50a8\u8282\u70b9",l={unversionedId:"volumes_and_nodes/node_expansion/lvm_nodes",id:"volumes_and_nodes/node_expansion/lvm_nodes",title:"LVM \u5b58\u50a8\u8282\u70b9",description:"LVM \u5b58\u50a8\u8282\u70b9\u5c06\u8282\u70b9\u4e0a\u9762\u7684\u78c1\u76d8\u8fdb\u884c\u6c60\u5316\u5e76\u4e3a\u5e94\u7528\u63d0\u4f9b\u4e86 LVM \u7c7b\u578b\u7684\u6570\u636e\u5377\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/volumes_and_nodes/node_expansion/lvm_nodes.md",sourceDirName:"volumes_and_nodes/node_expansion",slug:"/volumes_and_nodes/node_expansion/lvm_nodes",permalink:"/cn/docs/volumes_and_nodes/node_expansion/lvm_nodes",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/volumes_and_nodes/node_expansion/lvm_nodes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"LVM \u5b58\u50a8\u8282\u70b9"},sidebar:"tutorialSidebar",previous:{title:"Node Expansion",permalink:"/cn/docs/category/node-expansion"},next:{title:"\u88f8\u78c1\u76d8\u5b58\u50a8\u8282\u70b9",permalink:"/cn/docs/volumes_and_nodes/node_expansion/disk_nodes"}},i={},d=[{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:2},{value:"1. \u51c6\u5907\u65b0\u7684\u5b58\u50a8\u8282\u70b9",id:"1-\u51c6\u5907\u65b0\u7684\u5b58\u50a8\u8282\u70b9",level:3},{value:"2. \u6dfb\u52a0\u65b0\u589e\u5b58\u50a8\u8282\u70b9\u5230 HwameiStor \u7cfb\u7edf",id:"2-\u6dfb\u52a0\u65b0\u589e\u5b58\u50a8\u8282\u70b9\u5230-hwameistor-\u7cfb\u7edf",level:3},{value:"3. \u540e\u7eed\u68c0\u67e5",id:"3-\u540e\u7eed\u68c0\u67e5",level:3}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lvm-\u5b58\u50a8\u8282\u70b9"},"LVM \u5b58\u50a8\u8282\u70b9"),(0,r.kt)("p",null,"LVM \u5b58\u50a8\u8282\u70b9\u5c06\u8282\u70b9\u4e0a\u9762\u7684\u78c1\u76d8\u8fdb\u884c\u6c60\u5316\u5e76\u4e3a\u5e94\u7528\u63d0\u4f9b\u4e86 LVM \u7c7b\u578b\u7684\u6570\u636e\u5377\u3002"),(0,r.kt)("h2",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,r.kt)("h3",{id:"1-\u51c6\u5907\u65b0\u7684\u5b58\u50a8\u8282\u70b9"},"1. \u51c6\u5907\u65b0\u7684\u5b58\u50a8\u8282\u70b9"),(0,r.kt)("p",null,"\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u65b0\u589e\u4e00\u4e2a\u8282\u70b9\uff0c\u6216\u8005\uff0c\u9009\u62e9\u4e00\u4e2a\u5df2\u6709\u7684\u96c6\u7fa4\u8282\u70b9\uff08\u975e HwameiStor \u8282\u70b9\uff09\u3002\n\u8be5\u8282\u70b9\u5fc5\u987b\u6ee1\u8db3 ",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/quick_start/install/prereq"},"Prerequisites")," \u8981\u6c42\u7684\u6240\u6709\u6761\u4ef6\u3002\n\u672c\u4f8b\u4e2d\uff0c\u6240\u7528\u7684\u65b0\u589e\u5b58\u50a8\u8282\u70b9\u548c\u78c1\u76d8\u4fe1\u606f\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name: k8s-worker-4"),(0,r.kt)("li",{parentName:"ul"},"devPath: /dev/sdb"),(0,r.kt)("li",{parentName:"ul"},"diskType: SSD disk")),(0,r.kt)("p",null,"\u65b0\u589e\u8282\u70b9\u5df2\u7ecf\u6210\u529f\u52a0\u5165 Kubernetes \u96c6\u7fa4\u4e4b\u540e\uff0c\u68c0\u67e5\u5e76\u786e\u4fdd\u4e0b\u5217 Pod \u6b63\u5e38\u8fd0\u884c\u5728\u8be5\u8282\u70b9\u4e0a\uff0c\u4ee5\u53ca\u76f8\u5173\u8d44\u6e90\u5b58\u5728\u4e8e\u96c6\u7fa4\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get node\nNAME           STATUS   ROLES            AGE     VERSION\nk8s-master-1   Ready    master           96d     v1.24.3-2+63243a96d1c393\nk8s-worker-1   Ready    worker           96h     v1.24.3-2+63243a96d1c393\nk8s-worker-2   Ready    worker           96h     v1.24.3-2+63243a96d1c393\nk8s-worker-3   Ready    worker           96d     v1.24.3-2+63243a96d1c393\nk8s-worker-4   Ready    worker           1h      v1.24.3-2+63243a96d1c393\n\n$ kubectl -n hwameistor get pod -o wide | grep k8s-worker-4\nhwameistor-local-disk-manager-c86g5     2/2     Running   0     19h   10.6.182.105      k8s-worker-4   <none>  <none>\nhwameistor-local-storage-s4zbw          2/2     Running   0     19h   192.168.140.82    k8s-worker-4   <none>  <none>\n\n# \u68c0\u67e5 LocalStorageNode \u8d44\u6e90\n$ kubectl get localstoragenode k8s-worker-4\nNAME                 IP           ZONE      REGION    STATUS   AGE\nk8s-worker-4   10.6.182.103       default   default   Ready    8d\n")),(0,r.kt)("h3",{id:"2-\u6dfb\u52a0\u65b0\u589e\u5b58\u50a8\u8282\u70b9\u5230-hwameistor-\u7cfb\u7edf"},"2. \u6dfb\u52a0\u65b0\u589e\u5b58\u50a8\u8282\u70b9\u5230 HwameiStor \u7cfb\u7edf"),(0,r.kt)("p",null,"\u4e3a\u589e\u52a0\u5b58\u50a8\u8282\u70b9\u521b\u5efa\u8d44\u6e90 LocalStorageClaim\uff0c\u4ee5\u6b64\u4e3a\u65b0\u589e\u5b58\u50a8\u8282\u70b9\u6784\u5efa\u5b58\u50a8\u6c60\u3002\u8fd9\u6837\uff0c\u8282\u70b9\u5c31\u5df2\u7ecf\u6210\u529f\u52a0\u5165 HwameiStor \u7cfb\u7edf\u3002\u5177\u4f53\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl apply -f - <<EOF\napiVersion: hwameistor.io/v1alpha1\nkind: LocalDiskClaim\nmetadata:\n  name: k8s-worker-4\nspec:\n  nodeName: k8s-worker-4\n  owner: local-storage\n  description:\n    diskType: SSD\nEOF\n")),(0,r.kt)("h3",{id:"3-\u540e\u7eed\u68c0\u67e5"},"3. \u540e\u7eed\u68c0\u67e5"),(0,r.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9aa4\u540e\uff0c\u68c0\u67e5\u65b0\u589e\u5b58\u50a8\u8282\u70b9\u53ca\u5176\u5b58\u50a8\u6c60\u7684\u72b6\u6001\uff0c\u786e\u4fdd\u8282\u70b9\u548c HwameiStor \u7cfb\u7edf\u7684\u6b63\u5e38\u8fd0\u884c\u3002\u5177\u4f53\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get localstoragenode k8s-worker-4 -o yaml\napiVersion: hwameistor.io/v1alpha1\nkind: LocalStorageNode\nmetadata:\n  name: k8s-worker-4\nspec:\n  hostname: k8s-worker-4\n  storageIP: 10.6.182.103\n  topogoly:\n    region: default\n    zone: default\nstatus:\n  pools:\n    LocalStorage_PoolSSD:\n      class: SSD\n      disks:\n      - capacityBytes: 214744170496\n        devPath: /dev/sdb\n        state: InUse\n        type: SSD\n      freeCapacityBytes: 214744170496\n      freeVolumeCount: 1000\n      name: LocalStorage_PoolSSD\n      totalCapacityBytes: 214744170496\n      totalVolumeCount: 1000\n      type: REGULAR\n      usedCapacityBytes: 0\n      usedVolumeCount: 0\n      volumeCapacityBytesLimit: 214744170496\n      volumes:\n  state: Ready\n")))}p.isMDXComponent=!0}}]);