"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9149],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,v=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return t?o.createElement(v,l(l({ref:n},m),{},{components:t})):o.createElement(v,l({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2746:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const r={sidebar_position:5,sidebar_label:"Volume Clone"},l="Volume Clone",i={unversionedId:"volumes/volume_clone",id:"volumes/volume_clone",title:"Volume Clone",description:"In HwameiStor, users can create clone volume for data volumes that have the same data as the source volume at the moment the clone occurs.",source:"@site/docs/volumes/volume_clone.md",sourceDirName:"volumes",slug:"/volumes/volume_clone",permalink:"/cn/docs/volumes/volume_clone",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/volumes/volume_clone.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Volume Clone"},sidebar:"tutorialSidebar",previous:{title:"Volume Provisioned IO",permalink:"/cn/docs/volumes/volume_provisioned_io"},next:{title:"Migrate Volumes",permalink:"/cn/docs/volumes/migrate"}},s={},c=[{value:"1. Create Clone Volume",id:"1-create-clone-volume",level:2},{value:"2. Use Clone Volume",id:"2-use-clone-volume",level:2}],m={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"volume-clone"},"Volume Clone"),(0,a.kt)("p",null,"In HwameiStor, users can create clone volume for data volumes that have the same data as the source volume at the moment the clone occurs."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Creating clones of non-HA volume is currently only supported, and only in-place cloning is supported."),(0,a.kt)("p",{parentName:"admonition"},"Volume clone is implemented using snapshot technology. To avoid data inconsistency, please pause or stop I/O before cloning.")),(0,a.kt)("p",null,"Follow the steps below to create and use clone volume."),(0,a.kt)("h2",{id:"1-create-clone-volume"},"1. Create Clone Volume"),(0,a.kt)("p",null,"You can create a pvc to perform a cloning operation on a data volume. The details are as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n    name: hwameistor-lvm-volume-clone\nspec:\n  storageClassName: hwameistor-storage-lvm-ssd\n  dataSource:\n    # Bound data volumes must be provided\n    name: data-sts-mysql-local-0\n    kind: PersistentVolumeClaim\n    apiGroup: ""\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 1Gi\n')),(0,a.kt)("h2",{id:"2-use-clone-volume"},"2. Use Clone Volume"),(0,a.kt)("p",null,"Use the following command to create an ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx")," application and use the data volume ",(0,a.kt)("inlineCode",{parentName:"p"},"hwameistor-lvm-volume-clone"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"cat << EOF | kubectl apply -f -\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  namespace: default\nspec:\n  containers:\n  - name: nginx\n    image: docker.io/library/nginx:latest\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: data\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: data\n    persistentVolumeClaim:\n      claimName: hwameistor-lvm-volume-clone\nEOF\n")))}u.isMDXComponent=!0}}]);