"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,v=d["".concat(i,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(v,l(l({ref:t},u),{},{components:n})):a.createElement(v,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:6,sidebar_label:"Volume Clone"},l="Volume Clone",s={unversionedId:"quick_start/advanced_features/volume_clone",id:"quick_start/advanced_features/volume_clone",title:"Volume Clone",description:"In HwameiStor, users can create clone volume for data volumes that have the same data as the source volume at the moment the clone occurs.",source:"@site/docs/quick_start/advanced_features/volume_clone.md",sourceDirName:"quick_start/advanced_features",slug:"/quick_start/advanced_features/volume_clone",permalink:"/docs/quick_start/advanced_features/volume_clone",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/advanced_features/volume_clone.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Volume Clone"},sidebar:"tutorialSidebar",previous:{title:"Fast Failover",permalink:"/docs/quick_start/advanced_features/fast_failover"},next:{title:"System Audit",permalink:"/docs/quick_start/advanced_features/system_audit"}},i={},c=[{value:"1. Create Clone Volume",id:"1-create-clone-volume",level:2},{value:"2. Use Clone Volume",id:"2-use-clone-volume",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"volume-clone"},"Volume Clone"),(0,o.kt)("p",null,"In HwameiStor, users can create clone volume for data volumes that have the same data as the source volume at the moment the clone occurs."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Creating clones of non-HA volume is currently only supported, and only in-place cloning is supported."),(0,o.kt)("p",{parentName:"admonition"},"Volume clone is implemented using snapshot technology. To avoid data inconsistency, please pause or stop I/O before cloning.")),(0,o.kt)("p",null,"Follow the steps below to create and use clone volume."),(0,o.kt)("h2",{id:"1-create-clone-volume"},"1. Create Clone Volume"),(0,o.kt)("p",null,"You can create a pvc to perform a cloning operation on a data volume. The details are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n    name: hwameistor-lvm-volume-clone\nspec:\n  storageClassName: hwameistor-storage-lvm-ssd\n  dataSource:\n    # Bound data volumes must be provided\n    name: data-sts-mysql-local-0\n    kind: PersistentVolumeClaim\n    apiGroup: ""\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 1Gi\n')),(0,o.kt)("h2",{id:"2-use-clone-volume"},"2. Use Clone Volume"),(0,o.kt)("p",null,"Use the following command to create an ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx")," application and use the data volume ",(0,o.kt)("inlineCode",{parentName:"p"},"hwameistor-lvm-volume-clone"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cat << EOF | kubectl apply -f -\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  namespace: default\nspec:\n  containers:\n  - name: nginx\n    image: docker.io/library/nginx:latest\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: data\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: data\n    persistentVolumeClaim:\n      claimName: hwameistor-lvm-volume-clone\nEOF\n")))}m.isMDXComponent=!0}}]);