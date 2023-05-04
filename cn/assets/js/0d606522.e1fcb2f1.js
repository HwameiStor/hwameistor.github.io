"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3939],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(v,c(c({ref:t},d),{},{components:n})):a.createElement(v,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,sidebar_label:"\u5377\u7684\u6269\u5bb9"},c="\u5377\u7684\u6269\u5bb9",l={unversionedId:"quick_start/create_stateful/advanced/expand",id:"quick_start/create_stateful/advanced/expand",title:"\u5377\u7684\u6269\u5bb9",description:"HwameiStor \u652f\u6301 CSI \u5377\u6269\u5bb9 \u3002\u8fd9\u4e2a\u529f\u80fd\u5b9e\u73b0\u4e86\u901a\u8fc7\u4fee\u6539 PVC \u7684\u5927\u5c0f\u5728\u7ebf\u6269\u5bb9\u5377\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/quick_start/create_stateful/advanced/expand.md",sourceDirName:"quick_start/create_stateful/advanced",slug:"/quick_start/create_stateful/advanced/expand",permalink:"/cn/docs/quick_start/create_stateful/advanced/expand",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/create_stateful/advanced/expand.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u5377\u7684\u6269\u5bb9"},sidebar:"tutorialSidebar",previous:{title:"Advanced Operations",permalink:"/cn/docs/category/advanced-operations"},next:{title:"\u5377\u7684\u8fc1\u79fb",permalink:"/cn/docs/quick_start/create_stateful/advanced/migrate"}},s={},i=[{value:"\u67e5\u770b <code>StorageClass</code> \u662f\u5426\u4f7f\u7528\u4e86\u53c2\u6570 <code>allowVolumeExpansion: true</code>",id:"\u67e5\u770b-storageclass-\u662f\u5426\u4f7f\u7528\u4e86\u53c2\u6570-allowvolumeexpansion-true",level:2},{value:"\u4fee\u6539 <code>PVC</code> \u7684\u5927\u5c0f",id:"\u4fee\u6539-pvc-\u7684\u5927\u5c0f",level:2},{value:"\u89c2\u5bdf\u6269\u5bb9\u8fc7\u7a0b",id:"\u89c2\u5bdf\u6269\u5bb9\u8fc7\u7a0b",level:2},{value:"\u89c2\u5bdf\u6269\u5bb9\u5b8c\u6210\u540e\u7684 <code>PVC/PV</code>",id:"\u89c2\u5bdf\u6269\u5bb9\u5b8c\u6210\u540e\u7684-pvcpv",level:2}],d={toc:i};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5377\u7684\u6269\u5bb9"},"\u5377\u7684\u6269\u5bb9"),(0,r.kt)("p",null,"HwameiStor \u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"CSI \u5377\u6269\u5bb9")," \u3002\u8fd9\u4e2a\u529f\u80fd\u5b9e\u73b0\u4e86\u901a\u8fc7\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"PVC")," \u7684\u5927\u5c0f\u5728\u7ebf\u6269\u5bb9\u5377\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u91cc\uff0c\u6211\u4eec\u628a PVC ",(0,r.kt)("inlineCode",{parentName:"p"},"data-sts-mysql-local-0")," \u4ece 1GiB \u6269\u5bb9\u5230 2GiB\u3002"),(0,r.kt)("p",null,"\u5f53\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"PVC/PV")," \u5927\u5c0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get pvc data-sts-mysql-local-0\nNAME                     STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS                 AGE\ndata-sts-mysql-local-0   Bound    pvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8   1Gi        RWO            hwameistor-storage-lvm-hdd   85m\n\n$ kubectl get pv pvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8\nNAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                            STORAGECLASS                 REASON   AGE\npvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8   1Gi        RWO            Delete           Bound    default/data-sts-mysql-local-0   hwameistor-storage-lvm-hdd            85m\n")),(0,r.kt)("h2",{id:"\u67e5\u770b-storageclass-\u662f\u5426\u4f7f\u7528\u4e86\u53c2\u6570-allowvolumeexpansion-true"},"\u67e5\u770b ",(0,r.kt)("inlineCode",{parentName:"h2"},"StorageClass")," \u662f\u5426\u4f7f\u7528\u4e86\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"h2"},"allowVolumeExpansion: true")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get pvc data-sts-mysql-local-0 -o jsonpath='{.spec.storageClassName}'\nhwameistor-storage-lvm-hdd\n\n$ kubectl get sc hwameistor-storage-lvm-hdd -o jsonpath='{.allowVolumeExpansion}'\ntrue\n")),(0,r.kt)("h2",{id:"\u4fee\u6539-pvc-\u7684\u5927\u5c0f"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"h2"},"PVC")," \u7684\u5927\u5c0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl edit pvc data-sts-mysql-local-0\n\n...\nspec:\n  resources:\n    requests:\n      storage: 2Gi\n...\n")),(0,r.kt)("h2",{id:"\u89c2\u5bdf\u6269\u5bb9\u8fc7\u7a0b"},"\u89c2\u5bdf\u6269\u5bb9\u8fc7\u7a0b"),(0,r.kt)("p",null,"\u589e\u52a0\u7684\u5bb9\u91cf\u8d8a\u591a\uff0c\u6269\u5bb9\u6240\u9700\u65f6\u95f4\u8d8a\u957f\u3002\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"PVC")," \u7684\u4e8b\u4ef6\u65e5\u5fd7\u4e2d\u89c2\u5bdf\u6574\u4e2a\u6269\u5bb9\u7684\u8fc7\u7a0b."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl describe pvc data-sts-mysql-local-0\n\nEvents:\n  Type     Reason                      Age                From                                Message\n  ----     ------                      ----               ----                                -------\n  Warning  ExternalExpanding           34s                volume_expand                       Ignoring the PVC: didn\'t find a plugin capable of expanding the volume; waiting for an external controller to process this PVC.\n  Warning  VolumeResizeFailed          33s                external-resizer lvm.hwameistor.io  resize volume "pvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8" by resizer "lvm.hwameistor.io" failed: rpc error: code = Unknown desc = volume expansion not completed yet\n  Normal   Resizing                    32s (x2 over 33s)  external-resizer lvm.hwameistor.io  External resizer is resizing volume pvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8\n  Normal   FileSystemResizeRequired    32s                external-resizer lvm.hwameistor.io  Require file system resize of volume on node\n  Normal   FileSystemResizeSuccessful  11s                kubelet                             MountVolume.NodeExpandVolume succeeded for volume "pvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8" k8s-worker-3\n')),(0,r.kt)("h2",{id:"\u89c2\u5bdf\u6269\u5bb9\u5b8c\u6210\u540e\u7684-pvcpv"},"\u89c2\u5bdf\u6269\u5bb9\u5b8c\u6210\u540e\u7684 ",(0,r.kt)("inlineCode",{parentName:"h2"},"PVC/PV")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get pvc data-sts-mysql-local-0\nNAME                     STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS                 AGE\ndata-sts-mysql-local-0   Bound    pvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8   2Gi        RWO            hwameistor-storage-lvm-hdd   96m\n\n$ kubectl get pv pvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8\nNAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                            STORAGECLASS                 REASON   AGE\npvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8   2Gi        RWO            Delete           Bound    default/data-sts-mysql-local-0   hwameistor-storage-lvm-hdd            96m\n")))}p.isMDXComponent=!0}}]);