"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,sidebar_label:"Prerequisites"},l="Prerequisites",o={unversionedId:"quick_start/install/prereq",id:"quick_start/install/prereq",title:"Prerequisites",description:"Kubernetes",source:"@site/docs/quick_start/install/prereq.md",sourceDirName:"quick_start/install",slug:"/quick_start/install/prereq",permalink:"/docs/quick_start/install/prereq",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/quick_start/install/prereq.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Prerequisites"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/category/installation"},next:{title:"Deploy by Helm Charts",permalink:"/docs/quick_start/install/deploy"}},s={},u=[{value:"Kubernetes",id:"kubernetes",level:2},{value:"Unsupported platforms",id:"unsupported-platforms",level:3},{value:"Hosts",id:"hosts",level:2},{value:"Linux distributions",id:"linux-distributions",level:3},{value:"Processor architecture",id:"processor-architecture",level:3},{value:"Package dependencies",id:"package-dependencies",level:3},{value:"Secure Boot",id:"secure-boot",level:3},{value:"Data disks",id:"data-disks",level:3},{value:"Network",id:"network",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kubernetes ",(0,i.kt)("inlineCode",{parentName:"li"},"1.18+")),(0,i.kt)("li",{parentName:"ul"},"CoreDNS is deployed")),(0,i.kt)("h3",{id:"unsupported-platforms"},"Unsupported platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OpenShift"),(0,i.kt)("li",{parentName:"ul"},"Rancher")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Above platforms are not supported currently but will be in the future.")),(0,i.kt)("h2",{id:"hosts"},"Hosts"),(0,i.kt)("h3",{id:"linux-distributions"},"Linux distributions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"CentOS/RHEL ",(0,i.kt)("inlineCode",{parentName:"li"},"7.4+")),(0,i.kt)("li",{parentName:"ol"},"Rocky Linux ",(0,i.kt)("inlineCode",{parentName:"li"},"8.4+")),(0,i.kt)("li",{parentName:"ol"},"Ubuntu ",(0,i.kt)("inlineCode",{parentName:"li"},"18+")),(0,i.kt)("li",{parentName:"ol"},"Kylin ",(0,i.kt)("inlineCode",{parentName:"li"},"V10"))),(0,i.kt)("h3",{id:"processor-architecture"},"Processor architecture"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"x86_64"),(0,i.kt)("li",{parentName:"ol"},"ARM64")),(0,i.kt)("h3",{id:"package-dependencies"},"Package dependencies"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"LVM2")," is installed"),(0,i.kt)("li",{parentName:"ol"},"For HA features, ",(0,i.kt)("inlineCode",{parentName:"li"},"kernel-devel")," must be installed and match the version of the operating ",(0,i.kt)("inlineCode",{parentName:"li"},"kernel"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="CentOS/RHEL, Rocky and Kylin"',title:'"CentOS/RHEL,',Rocky:!0,and:!0,'Kylin"':!0},"$ yum install -y lvm2\n$ yum install -y kernel-devel-$(uname -r)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Ubuntu"',title:'"Ubuntu"'},"$ apt-get install -y lvm2\n$ apt-get install -y linux-headers-$(uname -r)\n")),(0,i.kt)("h3",{id:"secure-boot"},"Secure Boot"),(0,i.kt)("p",null,"The HA feature does not support ",(0,i.kt)("inlineCode",{parentName:"p"},"Secure Boot")," currently. Make sure ",(0,i.kt)("inlineCode",{parentName:"p"},"Secure Boot")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"disabled"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ mokutil --sb-state\nSecureBoot disabled\n\n$ dmesg | grep secureboot\n[    0.000000] secureboot: Secure boot disabled\n")),(0,i.kt)("h3",{id:"data-disks"},"Data disks"),(0,i.kt)("p",null,"HwameiStor supports ",(0,i.kt)("inlineCode",{parentName:"p"},"HDD"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SSD"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"NVMe"),"."),(0,i.kt)("p",null,"For test, each host must have at least one unused drive with a minimal size of ",(0,i.kt)("inlineCode",{parentName:"p"},"10GiB"),"."),(0,i.kt)("p",null,"For production, it is recommended to have at least one unused drive, protected by RAID1 or RAID5/6, with a minimal size of ",(0,i.kt)("inlineCode",{parentName:"p"},"200GiB"),"."),(0,i.kt)("h3",{id:"network"},"Network"),(0,i.kt)("p",null,"For production, it is recommended to have a redundant ",(0,i.kt)("inlineCode",{parentName:"p"},"10Giga TCP/IP")," network, if the HA feature is enabled."))}d.isMDXComponent=!0}}]);