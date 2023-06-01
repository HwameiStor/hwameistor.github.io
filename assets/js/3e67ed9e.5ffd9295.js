"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[742],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3241:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(7462),o=(a(7294),a(3905));const n={sidebar_position:2,sidebar_label:"Deploy with hwameistor-operator"},l="Deploy with hwameistor-operator",i={unversionedId:"quick_start/install/operator",id:"quick_start/install/operator",title:"Deploy with hwameistor-operator",description:"You can use hwameistor-operator to deploy and manage HwameiStor system.",source:"@site/docs/quick_start/install/operator.md",sourceDirName:"quick_start/install",slug:"/quick_start/install/operator",permalink:"/docs/quick_start/install/operator",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/install/operator.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Deploy with hwameistor-operator"},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/docs/quick_start/install/prereq"},next:{title:"Post-Check after Deployment",permalink:"/docs/quick_start/install/post_check"}},s={},p=[{value:"Steps",id:"steps",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-with-hwameistor-operator"},"Deploy with hwameistor-operator"),(0,o.kt)("p",null,"You can use hwameistor-operator to deploy and manage HwameiStor system."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Perform Life Cycle Management (LCM) for HwameiStor components:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"LocalDiskManager"),(0,o.kt)("li",{parentName:"ul"},"LocalStorage"),(0,o.kt)("li",{parentName:"ul"},"Scheduler"),(0,o.kt)("li",{parentName:"ul"},"AdmissionController"),(0,o.kt)("li",{parentName:"ul"},"VolumeEvictor"),(0,o.kt)("li",{parentName:"ul"},"Exporter"),(0,o.kt)("li",{parentName:"ul"},"HA module"),(0,o.kt)("li",{parentName:"ul"},"Apiserver"),(0,o.kt)("li",{parentName:"ul"},"Graph UI"))),(0,o.kt)("li",{parentName:"ul"},"Configure the disks for different purpose;"),(0,o.kt)("li",{parentName:"ul"},"Setup the storage pools automatically by discovering the underlying disks' type (e.g. HDD, SSD);"),(0,o.kt)("li",{parentName:"ul"},"Setup the StorageClasses automatically according to the Hwameistor's configurations and capabilities;")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add hwameistor-operator Helm Repo"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add hwameistor-operator https://hwameistor.io/hwameistor-operator\nhelm repo update hwameistor-operator\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install hwameistor-operator"),(0,o.kt)("p",{parentName:"li"},"Note:If no available clean disk provided, operator will not create storageclass automaticlly.\nOperator will claim disk automaticlly while installing, the available disks will be added into\npool of localstoragenode. If available clean disk provided after installing, it's needed to apply\na localdiskclaim manually to added the disk into pool of localstoragenode. Once localstoragenode has\npool holding disks, the operator will create storageclass automaticlly, that means, no capacity, no storageclass."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install hwameistor-operator hwameistor-operator/hwameistor-operator\n")))),(0,o.kt)("p",null,"Optional installation parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enable authentication"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install hwameistor-operator hwameistor-operator/hwameistor-operator \\\n--set apiserver.authentication.enable=true \\\n--set apiserver.authentication.accessId={YourName} \\\n--set apiserver.authentication.secretKey={YourPassword}\n")),(0,o.kt)("p",{parentName:"li"},"You can enable authentication by edit deployment/apiserver also.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install operator by with DaoCloud image registry:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install hwameistor-operator hwameistor-operator/hwameistor-operator \\\n--set global.hwameistorImageRegistry=ghcr.m.daocloud.io \\\n--set global.k8sImageRegistry=m.daocloud.io/registry.k8s.io\n")))))}m.isMDXComponent=!0}}]);