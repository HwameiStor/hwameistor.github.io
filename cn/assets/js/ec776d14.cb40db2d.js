"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,sidebar_label:"\u6570\u636e\u76d8\u6269\u5c55"},s="\u6570\u636e\u76d8\u6269\u5c55",i={unversionedId:"quick_start/advanced_features/disk_expansion",id:"quick_start/advanced_features/disk_expansion",title:"\u6570\u636e\u76d8\u6269\u5c55",description:"\u5f53\u5b58\u50a8\u7cfb\u7edf\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\u5b58\u50a8\u5bb9\u91cf\u4e0d\u8db3\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e3a\u8be5\u8282\u70b9\u589e\u52a0\u78c1\u76d8\u6269\u5145\u5bb9\u91cf\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/quick_start/advanced_features/disk_expansion.md",sourceDirName:"quick_start/advanced_features",slug:"/quick_start/advanced_features/disk_expansion",permalink:"/cn/docs/quick_start/advanced_features/disk_expansion",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/advanced_features/disk_expansion.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u6570\u636e\u76d8\u6269\u5c55"},sidebar:"tutorialSidebar",previous:{title:"\u8282\u70b9\u6269\u5c55",permalink:"/cn/docs/quick_start/advanced_features/node_expansion"},next:{title:"\u6570\u636e\u5377\u9a71\u9010",permalink:"/cn/docs/quick_start/advanced_features/volume_eviction"}},l={},c=[{value:"\u51c6\u5907\u65b0\u7684\u5b58\u50a8\u78c1\u76d8",id:"\u51c6\u5907\u65b0\u7684\u5b58\u50a8\u78c1\u76d8",level:2},{value:"\u5c06\u65b0\u589e\u78c1\u76d8\u52a0\u5165\u5230\u8282\u70b9\u7684\u5b58\u50a8\u6c60",id:"\u5c06\u65b0\u589e\u78c1\u76d8\u52a0\u5165\u5230\u8282\u70b9\u7684\u5b58\u50a8\u6c60",level:2},{value:"\u540e\u7eed\u68c0\u67e5",id:"\u540e\u7eed\u68c0\u67e5",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6570\u636e\u76d8\u6269\u5c55"},"\u6570\u636e\u76d8\u6269\u5c55"),(0,r.kt)("p",null,"\u5f53\u5b58\u50a8\u7cfb\u7edf\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\u5b58\u50a8\u5bb9\u91cf\u4e0d\u8db3\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e3a\u8be5\u8282\u70b9\u589e\u52a0\u78c1\u76d8\u6269\u5145\u5bb9\u91cf\u3002\n\u5728 HwameiStor \u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u5217\u6b65\u9aa4\u5b8c\u6210\u4e3a\u8282\u70b9\u589e\u52a0\u78c1\u76d8\uff08\u6570\u636e\u76d8\uff09\u3002"),(0,r.kt)("h2",{id:"\u51c6\u5907\u65b0\u7684\u5b58\u50a8\u78c1\u76d8"},"\u51c6\u5907\u65b0\u7684\u5b58\u50a8\u78c1\u76d8"),(0,r.kt)("p",null,"\u4ece HwameiStor \u4e2d\u9009\u62e9\u9700\u8981\u6269\u5bb9\u7684\u8282\u70b9\uff0c\u5c06\u65b0\u589e\u78c1\u76d8\u63d2\u5165\u8be5\u8282\u70b9\u7684\u78c1\u76d8\u69fd\u4f4d\u3002\n\u672c\u4f8b\u4e2d\uff0c\u6240\u7528\u7684\u65b0\u589e\u5b58\u50a8\u8282\u70b9\u548c\u78c1\u76d8\u4fe1\u606f\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name: k8s-worker-4"),(0,r.kt)("li",{parentName:"ul"},"devPath: /dev/sdc"),(0,r.kt)("li",{parentName:"ul"},"diskType: SSD")),(0,r.kt)("p",null,"\u5728\u65b0\u589e\u78c1\u76d8\u88ab\u63d2\u5165\u5230 HwameiStor \u5b58\u50a8\u8282\u70b9 ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s-worker-4")," \u540e\uff0c\u68c0\u67e5\u8be5\u8282\u70b9\u4e0a\u7684\u65b0\u78c1\u76d8\u72b6\u6001\uff0c\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5\u65b0\u589e\u78c1\u76d8\u662f\u5426\u6210\u529f\u63d2\u5165\u8282\u70b9\uff0c\u5e76\u88ab\u6b63\u786e\u8bc6\u522b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh root@k8s-worker-4\nlsblk | grep sdc\n")),(0,r.kt)("p",{parentName:"li"},"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-none"},"sdc        8:32     0     20G  1 disk\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5 HwameiStor \u662f\u5426\u4e3a\u65b0\u589e\u78c1\u76d8\u6b63\u786e\u521b\u5efa\u8d44\u6e90 LocalDisk\uff0c\u5e76\u4e14\u72b6\u6001\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Unclaimed")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get localdisk | grep k8s-worker-4 | grep sdc\n")),(0,r.kt)("p",{parentName:"li"},"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-none"},"k8s-worker-4-sdc   k8s-worker-4       Available \n")))),(0,r.kt)("h2",{id:"\u5c06\u65b0\u589e\u78c1\u76d8\u52a0\u5165\u5230\u8282\u70b9\u7684\u5b58\u50a8\u6c60"},"\u5c06\u65b0\u589e\u78c1\u76d8\u52a0\u5165\u5230\u8282\u70b9\u7684\u5b58\u50a8\u6c60"),(0,r.kt)("p",null,"\u901a\u8fc7\u521b\u5efa\u8d44\u6e90 LocalDiskClaim\uff0c\u5c06\u65b0\u589e\u78c1\u76d8\u52a0\u5165\u8282\u70b9\u7684\u5b58\u50a8\u6c60\u3002\n\u5b8c\u6210\u4e0b\u5217\u64cd\u4f5c\u540e\uff0c\u65b0\u78c1\u76d8\u5e94\u8be5\u88ab\u81ea\u52a8\u52a0\u5165\u8282\u70b9\u7684 SSD \u5b58\u50a8\u6c60\u4e2d\u3002\n\u5982\u679c\u8be5\u8282\u70b9\u4e0a\u6ca1\u6709 SSD \u5b58\u50a8\u6c60\uff0cHwameiStor \u4f1a\u4e3a\u5176\u81ea\u52a8\u521b\u5efa\uff0c\u5e76\u5c06\u65b0\u78c1\u76d8\u52a0\u5165\u5176\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl apply -f - <<EOF\napiVersion: hwameistor.io/v1alpha1\nkind: LocalDiskClaim\nmetadata:\n  name: k8s-worker-4-expand\nspec:\n  nodeName: k8s-worker-4\n  owner: local-storage\n  description:\n    localDiskNames:\n      - k8s-worker-4-sdc\nEOF\n")),(0,r.kt)("h2",{id:"\u540e\u7eed\u68c0\u67e5"},"\u540e\u7eed\u68c0\u67e5"),(0,r.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9aa4\u540e\uff0c\u68c0\u67e5\u65b0\u589e\u78c1\u76d8\u53ca\u5176\u5b58\u50a8\u6c60\u7684\u72b6\u6001\uff0c\u786e\u4fdd\u8282\u70b9\u548c HwameiStor \u7cfb\u7edf\u7684\u6b63\u5e38\u8fd0\u884c\u3002\u5177\u4f53\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get localstoragenode k8s-worker-4\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: hwameistor.io/v1alpha1\nkind: LocalStorageNode\nmetadata:\n  name: k8s-worker-4\nspec:\n  hostname: k8s-worker-4\n  storageIP: 10.6.182.103\n  topogoly:\n    region: default\n    zone: default\nstatus:\n  pools:\n    LocalStorage_PoolSSD:\n      class: SSD\n      disks:\n      - capacityBytes: 214744170496\n        devPath: /dev/sdb\n        state: InUse\n        type: SSD\n      - capacityBytes: 214744170496\n        devPath: /dev/sdc\n        state: InUse\n        type: SSD\n      freeCapacityBytes: 429488340992\n      freeVolumeCount: 1000\n      name: LocalStorage_PoolSSD\n      totalCapacityBytes: 429488340992\n      totalVolumeCount: 1000\n      type: REGULAR\n      usedCapacityBytes: 0\n      usedVolumeCount: 0\n      volumeCapacityBytesLimit: 429488340992\n      volumes:\n  state: Ready\n")))}u.isMDXComponent=!0}}]);