"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4124],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),g=r,p=h["".concat(l,".").concat(g)]||h[g]||u[g]||n;return a?o.createElement(p,i(i({ref:t},d),{},{components:a})):o.createElement(p,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7463:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_position:2,sidebar_label:"CAS"},i="CAS",s={unversionedId:"terminologies/6.2.cas",id:"terminologies/6.2.cas",title:"CAS",description:"Container Attached Storage (CAS) is software that includes microservice based storage controllers that are orchestrated by Kubernetes. These storage controllers can run anywhere that Kubernetes can run which means any cloud or even bare metal server or on top of a traditional shared storage system. Critically, the data itself is also accessed via containers as opposed to being stored in an off platform shared scale out storage system. Because CAS leverages a microservices architecture, it keeps the storage solution closely tied to the application bound to the physical storage device, reducing I/O latency.",source:"@site/docs/6.terminologies/6.2.cas.md",sourceDirName:"6.terminologies",slug:"/terminologies/6.2.cas",permalink:"/docs/terminologies/6.2.cas",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/6.terminologies/6.2.cas.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"CAS"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Storage",permalink:"/docs/terminologies/6.1.kubernetes_storage"},next:{title:"CSI",permalink:"/docs/terminologies/6.3.csi"}},l={},c=[{value:"Advantages of CAS",id:"advantages-of-cas",level:2},{value:"Agility",id:"agility",level:3},{value:"Granularity of Storage Policies",id:"granularity-of-storage-policies",level:3},{value:"Avoid Lock-in",id:"avoid-lock-in",level:3},{value:"Cloud Native",id:"cloud-native",level:3},{value:"Lower Blast Radius",id:"lower-blast-radius",level:3}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cas"},"CAS"),(0,r.kt)("p",null,"Container Attached Storage (CAS) is software that includes microservice based storage controllers that are orchestrated by Kubernetes. These storage controllers can run anywhere that Kubernetes can run which means any cloud or even bare metal server or on top of a traditional shared storage system. Critically, the data itself is also accessed via containers as opposed to being stored in an off platform shared scale out storage system. Because CAS leverages a microservices architecture, it keeps the storage solution closely tied to the application bound to the physical storage device, reducing I/O latency."),(0,r.kt)("p",null,"CAS is a pattern very much in line with the trend towards disaggregated data and the rise of small, autonomous teams running small, loosely coupled workloads. For example, my team might need Postgres for our microservice, and yours might depend on Redis and MongoDB. Some of our use cases might require performance, some might be gone in 20 minutes, others are write intensive, others read intensive, and so on. In a large organization, the technology that teams depend on will vary more and more as the size of the organization grows and as organizations increasingly trust teams to select their own tools."),(0,r.kt)("p",null,"CAS means that developers can work without worrying about the underlying requirements of their organizations' storage architecture. To CAS, a cloud disk is the same as a SAN which is the same as bare metal or virtualized hosts. Developers and Platform SREs don\u2019t have meetings to select the next storage vendor or to argue for settings to support their use case, instead Developers remain autonomous and can spin up their own CAS containers with whatever storage is available to the Kubernetes clusters."),(0,r.kt)("p",null,"CAS reflects a broader trend of solutions \u2013 many of which are now part of Cloud Native Foundation \u2013 that reinvent particular categories or create new ones \u2013 by being built on Kubernetes and microservice and that deliver capabilities to Kubernetes based microservice environments. For example, new projects for security, DNS, networking, network policy management, messaging, tracing, logging and more have emerged in the cloud-native ecosystem and often in CNCF itself."),(0,r.kt)("h2",{id:"advantages-of-cas"},"Advantages of CAS"),(0,r.kt)("h3",{id:"agility"},"Agility"),(0,r.kt)("p",null,"Each storage volume in CAS has a containerized storage controller and corresponding containerized replicas. Hence, maintenance and tuning of the resources around these components are truly agile. The capability of Kubernetes for rolling upgrades enables seamless upgrades of storage controllers and storage replicas. Resources such as CPU and memory can be tuned using container cgroups."),(0,r.kt)("h3",{id:"granularity-of-storage-policies"},"Granularity of Storage Policies"),(0,r.kt)("p",null,"Containerizing the storage software and dedicating the storage controller to each volume brings maximum granularity in storage policies. With CAS architecture, you can configure all storage policies on a per-volume basis. In addition, you can monitor storage parameters of every volume and dynamically update storage policies to achieve the desired result for each workload. The control of storage throughput, IOPS, and latency increases with this additional level of granularity in the volume storage policies."),(0,r.kt)("h3",{id:"avoid-lock-in"},"Avoid Lock-in"),(0,r.kt)("p",null,"Avoiding cloud vendor lock-in is a common goal for many Kubernetes users. However, the data of stateful applications often remains dependent on the cloud provider and technology or on an underlying traditional shared storage system, NAS or SAN. With the CAS approach, storage controllers can migrate the data in the background per workload and live migration becomes simpler. In other words, the granularity of control of CAS simplifies the movement of stateful workloads from one Kubernetes cluster to another in a non-disruptive way."),(0,r.kt)("h3",{id:"cloud-native"},"Cloud Native"),(0,r.kt)("p",null,"CAS containerizes the storage software and uses Kubernetes Custom Resource Definitions (CRDs) to represent low-level storage resources, such as disks and storage pools. This model enables storage to be integrated into other cloud-native tools seamlessly. The storage resources can be provisioned, monitored, and managed using cloud-native tools such as Prometheus, Grafana, Fluentd, Weavescope, Jaeger, and others."),(0,r.kt)("p",null,"Similar to hyperconverged systems, storage and performance of a volume in CAS are scalable. As each volume has it's own storage controller, the storage can scale up within the permissible limits of a storage capacity of a node. As the number of container applications increases in a given Kubernetes cluster, more nodes are added, which increases the overall availability of storage capacity and performance, thereby making the storage available to the new application containers."),(0,r.kt)("h3",{id:"lower-blast-radius"},"Lower Blast Radius"),(0,r.kt)("p",null,"Because the CAS architecture is per workload and components are loosely coupled, CAS has a much smaller blast radius than a typical distributed storage architecture."),(0,r.kt)("p",null,"CAS can deliver high availability through synchronous replication from storage controllers to storage replicas. The metadata required to maintain the replicas is simplified to store the information of the nodes that have replicas and information about the status of replicas to help with quorum. If a node fails, the storage controller, which is a stateless container in this case, is spun on a node where second or third replica is running and data continues to be available. Hence, with CAS the blast radius is much lower and also localized to the volumes that have replicas on that node."))}u.isMDXComponent=!0}}]);