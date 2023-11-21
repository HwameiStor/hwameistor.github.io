"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5658],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4860:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1,sidebar_label:"Local Disk Manager"},i="Local Disk Manager",s={unversionedId:"modules/ldm",id:"modules/ldm",title:"Local Disk Manager",description:"Local Disk Manager (LDM) is one of the modules of HwameiStor. LDM is used to simplify the management of disks on nodes. It can abstract the disk on a node into a resource for monitoring and management purposes. It's a daemon that will be deployed on each node, then detect the disk on the node, abstract it into local disk (LD) resources and save it to kubernetes.",source:"@site/docs/modules/ldm.md",sourceDirName:"modules",slug:"/modules/ldm",permalink:"/cn/docs/modules/ldm",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/modules/ldm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Local Disk Manager"},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/cn/docs/category/modules"},next:{title:"Local Storage",permalink:"/cn/docs/modules/ls"}},l={},c=[{value:"Concepts",id:"concepts",level:2},{value:"Usage",id:"usage",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-disk-manager"},"Local Disk Manager"),(0,r.kt)("p",null,"Local Disk Manager (LDM) is one of the modules of HwameiStor. ",(0,r.kt)("inlineCode",{parentName:"p"},"LDM")," is used to simplify the management of disks on nodes. It can abstract the disk on a node into a resource for monitoring and management purposes. It's a daemon that will be deployed on each node, then detect the disk on the node, abstract it into local disk (LD) resources and save it to kubernetes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LDM architecture",src:a(8485).Z,width:"1209",height:"474"})),(0,r.kt)("p",null,"At present, the LDM project is still in the ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha")," stage."),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("p",null,"LocalDisk (LD): LDM abstracts disk resources into objects in kubernetes. An ",(0,r.kt)("inlineCode",{parentName:"p"},"LD")," resource object represents the disk resources on the host."),(0,r.kt)("p",null,"LocalDiskClaim (LDC): This is a way to use disks. A user can add the disk description to select a disk for use."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"At present, LDC supports the following options to describe disk:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"NodeName"),(0,r.kt)("li",{parentName:"ul"},"Capacity"),(0,r.kt)("li",{parentName:"ul"},"DiskType (such as HDD/SSD/NVMe)"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the LocalDisk information."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get localdisk\nNAME               NODEMATCH        PHASE\n10-6-118-11-sda    10-6-118-11      Available\n10-6-118-11-sdb    10-6-118-11      Available\n")),(0,r.kt)("p",{parentName:"li"},"Get locally discovered disk resource information with three columns displayed."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NAME:")," represents how this disk is displayed in the cluster resources."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NODEMATCH:")," indicates which host this disk is on."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PHASE:")," represents the current state of the disk.")),(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get localdisk <name> -o yaml")," to view more information about disks.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Claim available disks."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Apply a LocalDiskClaim."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF | kubectl apply -f -\napiVersion: hwameistor.io/v1alpha1\nkind: LocalDiskClaim\nmetadata:\n  name: <localDiskClaimName>\nspec:\n  description:\n    # e.g. HDD,SSD,NVMe\n    diskType: <diskType>\n  # the node where disks attached\n  nodeName: <nodeName>\n  # the owner of the allocated disks e.g. local-storage,local-disk-manager\n  owner: <ownerName>\nEOF\n")),(0,r.kt)("p",{parentName:"li"}," Allocate available disks by issuing a disk usage request. In the request description, you can add more requirements about the disk, such as disk type and capacity.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the LocalDiskClaim information."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get localdiskclaim <name>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the LDC is processed successfully, it will be cleanup by the system automatically. The result will be recorded in the ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalStorageNode")," if the owner is ",(0,r.kt)("inlineCode",{parentName:"p"},"local-storage"),"."))))))}d.isMDXComponent=!0},8485:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ldm-7f971c9841f19c3a68776110daba7c7b.png"}}]);