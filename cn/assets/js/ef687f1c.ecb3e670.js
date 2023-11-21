"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7137],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||n;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8843:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(7462),o=(a(7294),a(3905));const n={sidebar_position:2,sidebar_label:"Deploy with hwameistor-operator"},i="Deploy with hwameistor-operator",l={unversionedId:"install/operator",id:"install/operator",title:"Deploy with hwameistor-operator",description:"You can use hwameistor-operator to deploy and manage HwameiStor system.",source:"@site/docs/install/operator.md",sourceDirName:"install",slug:"/install/operator",permalink:"/cn/docs/install/operator",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/install/operator.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Deploy with hwameistor-operator"},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/cn/docs/install/prereq"},next:{title:"Post-Check after Deployment",permalink:"/cn/docs/install/post_check"}},s={},p=[{value:"Steps",id:"steps",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-with-hwameistor-operator"},"Deploy with hwameistor-operator"),(0,o.kt)("p",null,"You can use hwameistor-operator to deploy and manage HwameiStor system."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Perform Life Cycle Management (LCM) for HwameiStor components:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"LocalDiskManager"),(0,o.kt)("li",{parentName:"ul"},"LocalStorage"),(0,o.kt)("li",{parentName:"ul"},"Scheduler"),(0,o.kt)("li",{parentName:"ul"},"AdmissionController"),(0,o.kt)("li",{parentName:"ul"},"VolumeEvictor"),(0,o.kt)("li",{parentName:"ul"},"Exporter"),(0,o.kt)("li",{parentName:"ul"},"HA module"),(0,o.kt)("li",{parentName:"ul"},"Apiserver"),(0,o.kt)("li",{parentName:"ul"},"Graph UI"))),(0,o.kt)("li",{parentName:"ul"},"Configure the disks for different purposes"),(0,o.kt)("li",{parentName:"ul"},"Set up the storage pools automatically by discovering the underlying disks' type (e.g. HDD, SSD)"),(0,o.kt)("li",{parentName:"ul"},"Set up the StorageClasses automatically according to the Hwameistor's configurations and capabilities")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add hwameistor-operator Helm Repo"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add hwameistor-operator https://hwameistor.io/hwameistor-operator\nhelm repo update hwameistor-operator\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install HwameiStor with hwameistor-operator"),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If no available clean disk provided, the operator will not create StorageClass automatically.\nOperator will claim disk automatically while installing, the available disks will be added into\npool of LocalStorageNode. If available clean disk provided after installing, it's needed to apply\na LocalDiskClaim manually to added the disk into pool of LocalStorageNode. Once LocalStorageNode has\nany disk available in its pool, the operator will create StorageClass automatically.\nThat is to say, no capacity, no StorageClass.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install hwameistor-operator hwameistor-operator/hwameistor-operator -n hwameistor --create-namespace\n")))),(0,o.kt)("p",null,"Optional installation parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Disk Reserve"),(0,o.kt)("p",{parentName:"li"},"Available clean disk will be claimed and added into pool of LocalStorageNode by default.If you want to\nreserve some disks for other use before installing,you can set diskReserveConfigurations by helm values."),(0,o.kt)("p",{parentName:"li"},"Method 1:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install hwameistor-operator hwameistor-operator/hwameistor-operator  -n hwameistor --create-namespace \\\n--set diskReserve\\[0\\].nodeName=node1 \\\n--set diskReserve\\[0\\].devices={/dev/sdc\\,/dev/sdd} \\\n--set diskReserve\\[1\\].nodeName=node2 \\\n--set diskReserve\\[1\\].devices={/dev/sdc\\,/dev/sde}\n")),(0,o.kt)("p",{parentName:"li"},"This is a example to set diskReserveConfigurations by helm install --set,it may be hard to write --set options like that.If it's possible, we suggest write the diskReserveConfigurations values into a file."),(0,o.kt)("p",{parentName:"li"},"Method 2:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"diskReserve:\n- nodeName: node1\n  devices:\n  - /dev/sdc\n  - /dev/sdd\n- nodeName: node2\n  devices:\n  - /dev/sdc\n  - /dev/sde\n")),(0,o.kt)("p",{parentName:"li"},"For example, you write values like this into a file call diskReserve.yaml, you can apply the file when helm install."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install hwameistor-operator hwameistor-operator/hwameistor-operator -n hwameistor --create-namespace -f diskReserve.yaml\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enable authentication"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install hwameistor-operator hwameistor-operator/hwameistor-operator  -n hwameistor --create-namespace \\\n--set apiserver.authentication.enable=true \\\n--set apiserver.authentication.accessId={YourName} \\\n--set apiserver.authentication.secretKey={YourPassword}\n")),(0,o.kt)("p",{parentName:"li"},"You can also enable authentication by editing deployment/apiserver.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install operator by using DaoCloud image registry:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install hwameistor-operator hwameistor-operator/hwameistor-operator  -n hwameistor --create-namespace \\\n--set global.hwameistorImageRegistry=ghcr.m.daocloud.io \\\n--set global.k8sImageRegistry=m.daocloud.io/registry.k8s.io\n")))))}c.isMDXComponent=!0}}]);