"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1966],{3905:(e,r,t)=>{t.d(r,{Zo:()=>k,kt:()=>m});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),c=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},k=function(e){var r=c(e.components);return a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return t?a.createElement(d,o(o({ref:r},k),{},{components:t})):a.createElement(d,o({ref:r},k))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5137:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const l={sidebar_position:4,sidebar_label:"\u521b\u5efa\u5b58\u50a8\u6c60"},o="\u521b\u5efa\u5b58\u50a8\u6c60",s={unversionedId:"quick_start/install/storage_pool",id:"quick_start/install/storage_pool",title:"\u521b\u5efa\u5b58\u50a8\u6c60",description:"\u6b65\u9aa4 1\uff1a\u521b\u5efa LocalDiskClaim \u5bf9\u8c61",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/quick_start/install/storage_pool.md",sourceDirName:"quick_start/install",slug:"/quick_start/install/storage_pool",permalink:"/cn/docs/quick_start/install/storage_pool",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/quick_start/install/storage_pool.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"\u521b\u5efa\u5b58\u50a8\u6c60"},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u540e\u68c0\u67e5",permalink:"/cn/docs/quick_start/install/post_check"},next:{title:"\u57fa\u672c\u64cd\u4f5c",permalink:"/cn/docs/quick_start/create_stateful/basic"}},i={},c=[{value:"\u6b65\u9aa4 1\uff1a\u521b\u5efa LocalDiskClaim \u5bf9\u8c61",id:"\u6b65\u9aa4-1\u521b\u5efa-localdiskclaim-\u5bf9\u8c61",level:2},{value:"\u6b65\u9aa4 2\uff1a\u9a8c\u8bc1 LocalDiskClaim \u5bf9\u8c61",id:"\u6b65\u9aa4-2\u9a8c\u8bc1-localdiskclaim-\u5bf9\u8c61",level:2},{value:"\u6b65\u9aa4 3\uff1a\u9a8c\u8bc1 StorageClass",id:"\u6b65\u9aa4-3\u9a8c\u8bc1-storageclass",level:2},{value:"\u6b65\u9aa4 4\uff1a\u9a8c\u8bc1 LocalDisk \u5bf9\u8c61",id:"\u6b65\u9aa4-4\u9a8c\u8bc1-localdisk-\u5bf9\u8c61",level:2},{value:"\u6b65\u9aa4 5\uff08\u53ef\u9009\uff09\uff1a\u89c2\u5bdf VG",id:"\u6b65\u9aa4-5\u53ef\u9009\u89c2\u5bdf-vg",level:2},{value:"\u5b89\u88c5\u671f\u95f4\u914d\u7f6e\u5b58\u50a8\u6c60",id:"\u5b89\u88c5\u671f\u95f4\u914d\u7f6e\u5b58\u50a8\u6c60",level:2}],k={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},k,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u521b\u5efa\u5b58\u50a8\u6c60"},"\u521b\u5efa\u5b58\u50a8\u6c60"),(0,n.kt)("h2",{id:"\u6b65\u9aa4-1\u521b\u5efa-localdiskclaim-\u5bf9\u8c61"},"\u6b65\u9aa4 1\uff1a\u521b\u5efa LocalDiskClaim \u5bf9\u8c61"),(0,n.kt)("p",null,"HwameiStor \u6839\u636e\u5b58\u50a8\u4ecb\u8d28\u7c7b\u578b\u521b\u5efa ",(0,n.kt)("inlineCode",{parentName:"p"},"LocalDiskClaim")," \u5bf9\u8c61\u6765\u521b\u5efa\u5b58\u50a8\u6c60\u3002\n\u8981\u5728\u6240\u6709 Kubernetes Worker \u8282\u70b9\u4e0a\u521b\u5efa\u4e00\u4e2a HDD \u5b58\u50a8\u6c60\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm template helm/hwameistor \\\n      -s templates/post-install-claim-disks.yaml \\\n      --set storageNodes='{k8s-worker-1,k8s-worker-2,k8s-worker-3}' \\\n      | kubectl apply -f -\n")),(0,n.kt)("h2",{id:"\u6b65\u9aa4-2\u9a8c\u8bc1-localdiskclaim-\u5bf9\u8c61"},"\u6b65\u9aa4 2\uff1a\u9a8c\u8bc1 LocalDiskClaim \u5bf9\u8c61"),(0,n.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ldc\n")),(0,n.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"NAME           NODEMATCH      PHASE\nk8s-worker-1   k8s-worker-1   Bound\nk8s-worker-2   k8s-worker-2   Bound\nk8s-worker-3   k8s-worker-3   Bound\n")),(0,n.kt)("h2",{id:"\u6b65\u9aa4-3\u9a8c\u8bc1-storageclass"},"\u6b65\u9aa4 3\uff1a\u9a8c\u8bc1 StorageClass"),(0,n.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get sc hwameistor-storage-lvm-hdd\n")),(0,n.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"NAME                         PROVISIONER         RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE\nhwameistor-storage-lvm-hdd   lvm.hwameistor.io   Delete          WaitForFirstConsumer   true                   114s\n")),(0,n.kt)("h2",{id:"\u6b65\u9aa4-4\u9a8c\u8bc1-localdisk-\u5bf9\u8c61"},"\u6b65\u9aa4 4\uff1a\u9a8c\u8bc1 LocalDisk \u5bf9\u8c61"),(0,n.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ld\n")),(0,n.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"NAME               NODEMATCH      CLAIM          PHASE\nk8s-worker-1-sda   k8s-worker-1                  Inuse\nk8s-worker-1-sdb   k8s-worker-1   k8s-worker-1   Claimed\nk8s-worker-1-sdc   k8s-worker-1   k8s-worker-1   Claimed\nk8s-worker-2-sda   k8s-worker-2                  Inuse\nk8s-worker-2-sdb   k8s-worker-2   k8s-worker-2   Claimed\nk8s-worker-2-sdc   k8s-worker-2   k8s-worker-2   Claimed\nk8s-worker-3-sda   k8s-worker-3                  Inuse\nk8s-worker-3-sdb   k8s-worker-3   k8s-worker-3   Claimed\nk8s-worker-3-sdc   k8s-worker-3   k8s-worker-3   Claimed\n")),(0,n.kt)("h2",{id:"\u6b65\u9aa4-5\u53ef\u9009\u89c2\u5bdf-vg"},"\u6b65\u9aa4 5\uff08\u53ef\u9009\uff09\uff1a\u89c2\u5bdf VG"),(0,n.kt)("p",null,"\u5728\u4e00\u4e2a Kubernetes Worker \u8282\u70b9\u4e0a\uff0c\u89c2\u5bdf\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"LocalDiskClaim")," \u5bf9\u8c61\u521b\u5efa ",(0,n.kt)("inlineCode",{parentName:"p"},"VG"),"\u3002"),(0,n.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"vgdisplay LocalStorage_PoolHDD\n")),(0,n.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"  --- Volume group ---\n  VG Name               LocalStorage_PoolHDD\n  System ID\n  Format                lvm2\n  Metadata Areas        2\n  Metadata Sequence No  1\n  VG Access             read/write\n  VG Status             resizable\n  MAX LV                0\n  Cur LV                0\n  Open LV               0\n  Max PV                0\n  Cur PV                2\n  Act PV                2\n  VG Size               199.99 GiB\n  PE Size               4.00 MiB\n  Total PE              51198\n  Alloc PE / Size       0 / 0\n  Free  PE / Size       51198 / 199.99 GiB\n  VG UUID               jJ3s7g-iyoJ-c4zr-3Avc-3K4K-BrJb-A5A5Oe\n")),(0,n.kt)("h2",{id:"\u5b89\u88c5\u671f\u95f4\u914d\u7f6e\u5b58\u50a8\u6c60"},"\u5b89\u88c5\u671f\u95f4\u914d\u7f6e\u5b58\u50a8\u6c60"),(0,n.kt)("p",null,"\u901a\u8fc7 Helm \u547d\u4ee4\u5b89\u88c5 HwameiStor \u671f\u95f4\u53ef\u4ee5\u914d\u7f6e\u4e00\u4e2a\u5b58\u50a8\u6c60\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install \\\n  --namespace hwameistor \\\n  --create-namespace \\\n  hwameistor \\\n  helm/hwameistor \\\n  --set storageNodes='{k8s-worker-1,k8s-worker-2,k8s-worker-3}'\n")))}u.isMDXComponent=!0}}]);