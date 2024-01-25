"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1325],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>w,contentTitle:()=>h,default:()=>C,frontMatter:()=>v,metadata:()=>y,toc:()=>N});var a=t(7462),r=t(7294),l=t(3905),i=t(6010),o=t(2389),s=t(7392),u=t(7094),p=t(2466);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){var n;const{lazy:t,block:l,defaultValue:o,values:m,groupId:k,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),h=(0,s.l)(v,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,u.U)(),[g,C]=(0,r.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=k){const e=w[k];null!=e&&e!==g&&v.some((n=>n.value===e))&&C(e)}const x=e=>{const n=e.currentTarget,t=O.indexOf(n),a=v[t].value;a!==g&&(T(n),C(a),null!=k&&N(k,String(a)))},S=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},b)},v.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,key:n,ref:e=>O.push(e),onKeyDown:S,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":g===n})}),t??n)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==g})))))}function k(e){const n=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}const b="tabItem_Ymn6";function f(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(b,a),hidden:t},n)}const v={sidebar_position:1,sidebar_label:"Prerequisites"},h="Prerequisites",y={unversionedId:"install/prereq",id:"install/prereq",title:"Prerequisites",description:"Kubernetes",source:"@site/docs/install/prereq.md",sourceDirName:"install",slug:"/install/prereq",permalink:"/docs/install/prereq",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/install/prereq.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Prerequisites"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/category/installation"},next:{title:"Deploy with hwameistor-operator",permalink:"/docs/install/operator"}},w={},N=[{value:"Kubernetes",id:"kubernetes",level:2},{value:"Unsupported platforms",id:"unsupported-platforms",level:3},{value:"Hosts",id:"hosts",level:2},{value:"Supported linux distributions",id:"supported-linux-distributions",level:3},{value:"Supported processors",id:"supported-processors",level:3},{value:"Required dependencies",id:"required-dependencies",level:3},{value:"Secure Boot",id:"secure-boot",level:3},{value:"Data disks",id:"data-disks",level:3},{value:"Network",id:"network",level:3}],g={toc:N};function C(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes ",(0,l.kt)("inlineCode",{parentName:"li"},"1.18+")),(0,l.kt)("li",{parentName:"ul"},"CoreDNS is deployed")),(0,l.kt)("h3",{id:"unsupported-platforms"},"Unsupported platforms"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OpenShift"),(0,l.kt)("li",{parentName:"ul"},"Rancher")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The aforementioned platforms are currently unsupported; however,\nthey will be supported in the future.")),(0,l.kt)("h2",{id:"hosts"},"Hosts"),(0,l.kt)("h3",{id:"supported-linux-distributions"},"Supported linux distributions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CentOS/RHEL ",(0,l.kt)("inlineCode",{parentName:"li"},"7.4+")),(0,l.kt)("li",{parentName:"ul"},"Rocky Linux ",(0,l.kt)("inlineCode",{parentName:"li"},"8.4+")),(0,l.kt)("li",{parentName:"ul"},"Ubuntu ",(0,l.kt)("inlineCode",{parentName:"li"},"18+")),(0,l.kt)("li",{parentName:"ul"},"Kylin ",(0,l.kt)("inlineCode",{parentName:"li"},"V10"))),(0,l.kt)("h3",{id:"supported-processors"},"Supported processors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x86_64"),(0,l.kt)("li",{parentName:"ul"},"ARM64")),(0,l.kt)("h3",{id:"required-dependencies"},"Required dependencies"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"LVM2")," is installed.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For HA features, it is necessary to install ",(0,l.kt)("inlineCode",{parentName:"p"},"kernel-devel")," with a compatible version to the current ",(0,l.kt)("inlineCode",{parentName:"p"},"kernel"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The HA features module cannot be automatically installed on nodes with certain kernel versions and needs to be installed manually."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to view all compatible kernel versions"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"5.8.0-1043-azure\n5.8.0-1042-azure\n5.8.0-1041-azure\n5.4.17-2102.205.7.2.el7uek\n5.4.17-2011.0.7.el8uek\n5.4.0-91\n5.4.0-90\n5.4.0-89\n5.4.0-88\n5.4.0-86\n5.4.0-84\n5.4.0-1064-azure\n5.4.0-1063-azure\n5.4.0-1062-azure\n5.4.0-1061-azure\n5.4.0-1060-aws\n5.4.0-1059-azure\n5.4.0-1059-aws\n5.4.0-1058-azure\n5.4.0-1058-aws\n5.4.0-1057-aws\n5.4.0-1056-aws\n5.4.0-1055-aws\n5.4.247-1.el7\n5.3.18-57.3\n5.3.18-22.2\n5.14.0-1.7.1.el9\n5.11.0-1022-azure\n5.11.0-1022-aws\n5.11.0-1021-azure\n5.11.0-1021-aws\n5.11.0-1020-azure\n5.11.0-1020-aws\n5.11.0-1019-aws\n5.11.0-1017-aws\n5.11.0-1016-aws\n5.10.0-8\n5.10.0-7\n5.10.0-6\n4.9.215-36.el7\n4.9.212-36.el7\n4.9.206-36.el7\n4.9.199-35.el7\n4.9.188-35.el7\n4.4.92-6.30.1\n4.4.74-92.38.1\n4.4.52-2.1\n4.4.27-572.565306\n4.4.0-217\n4.4.0-216\n4.4.0-214\n4.4.0-213\n4.4.0-210\n4.4.0-1133-aws\n4.4.0-1132-aws\n4.4.0-1131-aws\n4.4.0-1128-aws\n4.4.0-1121-aws\n4.4.0-1118-aws\n4.19.19-5.0.8\n4.19.0-8\n4.19.0-6\n4.19.0-5\n4.19.0-16\n4.18.0-80.1.2.el8_0\n4.18.0-348.el8\n4.18.0-305.el8\n4.18.0-240.1.1.el8_3\n4.18.0-193.el8\n4.18.0-147.el8\n4.15.0-163\n4.15.0-162\n4.15.0-161\n4.15.0-159\n4.15.0-158\n4.15.0-156\n4.15.0-112-lowlatency\n4.15.0-1113-azure\n4.15.0-1040-azure\n4.15.0-1036-azure\n4.14.35-2047.502.5.el7uek\n4.14.35-1902.4.8.el7uek\n4.14.35-1818.3.3.el7uek\n4.14.248-189.473.amzn2\n4.14.128-112.105.amzn2\n4.13.0-1018-azure\n4.12.14-95.3.1\n4.12.14-25.25.1\n4.12.14-197.29\n4.12.14-120.1\n4.1.12-124.49.3.1.el7uek\n4.1.12-124.26.3.el6uek\n4.1.12-124.21.1.el6uek\n3.10.0-957.el7\n3.10.0-862.el7\n3.10.0-693.el7\n3.10.0-693.21.1.el7\n3.10.0-693.17.1.el7\n3.10.0-514.6.2.el7\n3.10.0-514.36.5.el7\n3.10.0-327.el7\n3.10.0-229.1.2.el7\n3.10.0-123.20.1.el7\n3.10.0-1160.el7\n3.10.0-1127.el7\n3.10.0-1062.el7\n3.10.0-1049.el7\n3.0.101-108.13.1\n2.6.32-754.el6\n2.6.32-696.el6\n2.6.32-696.30.1.el6\n2.6.32-696.23.1.el6\n2.6.32-642.1.1.el6\n2.6.32-573.1.1.el6\n2.6.32-504.el6\n")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For VolumeResize features, a tool to resize the filesystem is required.\nBy default, ",(0,l.kt)("inlineCode",{parentName:"p"},"xfs")," is used as the volume filesystem. Therefore, you need to install ",(0,l.kt)("inlineCode",{parentName:"p"},"xfs_growfs")," on the host."))),(0,l.kt)(k,{mdxType:"Tabs"},(0,l.kt)(f,{value:"centos",label:"CentOS/RHEL, Rocky, and Kylin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y lvm2\nyum install -y kernel-devel-$(uname -r)\nyum install -y xfsprogs\n"))),(0,l.kt)(f,{value:"ubuntu",label:"Ubuntu",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install -y lvm2\napt-get install -y linux-headers-$(uname -r)\napt-get install -y xfsprogs\n")))),(0,l.kt)("h3",{id:"secure-boot"},"Secure Boot"),(0,l.kt)("p",null,"The HA feature does not support ",(0,l.kt)("inlineCode",{parentName:"p"},"Secure Boot")," currently. Make sure ",(0,l.kt)("inlineCode",{parentName:"p"},"Secure Boot")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"disabled"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ mokutil --sb-state\nSecureBoot disabled\n\n$ dmesg | grep secureboot\n[    0.000000] secureboot: Secure boot disabled\n")),(0,l.kt)("h3",{id:"data-disks"},"Data disks"),(0,l.kt)("p",null,"HwameiStor supports ",(0,l.kt)("inlineCode",{parentName:"p"},"HDD"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"SSD"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"NVMe"),"."),(0,l.kt)("p",null,"For test, each host must have at least one unused drive with a minimal size of ",(0,l.kt)("inlineCode",{parentName:"p"},"10GiB"),"."),(0,l.kt)("p",null,"For production, it is recommended to have at least one unused drive, protected by RAID1 or RAID5/6, with a minimal size of ",(0,l.kt)("inlineCode",{parentName:"p"},"200GiB"),"."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For virtual machine environments, please ensure that the disk serial number feature is enabled for each virtual machine. This will assist HwameiStor in better identifying and managing the disks on the host."),(0,l.kt)("p",{parentName:"admonition"},"To avoid disk identification conflicts, please ensure that the provided virtual disk serial numbers are not duplicated.")),(0,l.kt)("h3",{id:"network"},"Network"),(0,l.kt)("p",null,"For production, it is recommended to have a redundant ",(0,l.kt)("inlineCode",{parentName:"p"},"10Giga TCP/IP")," network, if the HA feature is enabled."))}C.isMDXComponent=!0}}]);