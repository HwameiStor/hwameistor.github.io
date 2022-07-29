"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={sidebar_position:1,sidebar_label:"Kubernetes Storage"},o="Kubernetes Storage",i={unversionedId:"concepts/k8s-store",id:"concepts/k8s-store",title:"Kubernetes Storage",description:"Kubernetes has made several enhancements to support running Stateful Workloads by providing the required abstractions for Platform (or Cluster Administrators) and Application developers. The abstractions ensure that different types of file and block storage (whether ephemeral or persistent, local or remote) are available wherever a container is scheduled (including provisioning/creating, attaching, mounting, unmounting, detaching, and deleting of volumes), storage capacity management (container ephemeral storage usage, volume resizing, etc.), influencing scheduling of containers based on storage (data gravity, availability, etc.), and generic operations on storage (snapshoting, etc.).",source:"@site/docs/04.concepts/00.k8s-store.md",sourceDirName:"04.concepts",slug:"/concepts/k8s-store",permalink:"/docs/concepts/k8s-store",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/04.concepts/00.k8s-store.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Kubernetes Storage"},sidebar:"tutorialSidebar",previous:{title:"FAQs",permalink:"/docs/CRDs"},next:{title:"CAS",permalink:"/docs/concepts/cas"}},l={},c=[{value:"Container Storage Interface",id:"container-storage-interface",level:2},{value:"Storage Classes and Dynamic Provisioning",id:"storage-classes-and-dynamic-provisioning",level:2},{value:"Persistent Volume Claims",id:"persistent-volume-claims",level:2},{value:"Persistent Volume",id:"persistent-volume",level:2},{value:"StatefulSets and Deployments",id:"statefulsets-and-deployments",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kubernetes-storage"},"Kubernetes Storage"),(0,n.kt)("p",null,"Kubernetes has made several enhancements to support running Stateful Workloads by providing the required abstractions for Platform (or Cluster Administrators) and Application developers. The abstractions ensure that different types of file and block storage (whether ephemeral or persistent, local or remote) are available wherever a container is scheduled (including provisioning/creating, attaching, mounting, unmounting, detaching, and deleting of volumes), storage capacity management (container ephemeral storage usage, volume resizing, etc.), influencing scheduling of containers based on storage (data gravity, availability, etc.), and generic operations on storage (snapshoting, etc.)."),(0,n.kt)("p",null,"The most important Kubernetes Storage abstractions to be aware of for running Stateful workloads using HwameiStor are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#container-storage-interface"},"Container Storage Interface (CSI)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#storage-classes-and-dynamic-provisioning"},"Storage Classes and Dynamic Provisioning")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#persistent-volume"},"Persistent Volume")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#persistent-volume-claims"},"Persistent Volume Claims")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#statefulsets-and-deployments"},"StatefulSets and Deployments"))),(0,n.kt)("h2",{id:"container-storage-interface"},"Container Storage Interface"),(0,n.kt)("p",null,"The Container Storage Interface (CSI) is a standard for exposing arbitrary block and file storage systems to containerized workloads on Container Orchestration Systems (COs) like Kubernetes. Using CSI third-party storage providers like HwameiStor can write and deploy plugins exposing new storage volumes like HwameiStor Local and Replicated Volumes in Kubernetes without ever having to touch the core Kubernetes code."),(0,n.kt)("p",null,"When cluster administrators install HwameiStor, the required HwameiStor CSI driver components are installed into the Kubernetes cluster."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"Prior to CSI, Kubernetes supported adding storage providers using out-of-tree provisioners referred to as external provisioners. And Kubernetes in-tree volumes pre-date the external provisioners. There is an ongoing effort in the Kubernetes community to deprecate in-tree volumes with CSI based volumes.\n")),(0,n.kt)("h2",{id:"storage-classes-and-dynamic-provisioning"},"Storage Classes and Dynamic Provisioning"),(0,n.kt)("p",null,'A StorageClass provides a way for administrators to describe the "classes" of storage they offer. Different classes might map to quality-of-service levels, or to backup policies, or to arbitrary policies determined by the cluster administrators. This concept is sometimes called "profiles" in other storage systems.'),(0,n.kt)("p",null,"The dynamic provisioning feature eliminates the need for cluster administrators to pre-provision storage. Instead, it automatically provisions storage when it is requested by users. The implementation of dynamic volume provisioning is based on the StorageClass abstraction. A cluster administrator can define as many StorageClass objects as needed, each specifying a volume plugin (aka provisioner) that provisions a volume and the set of parameters to pass to that provisioner when provisioning."),(0,n.kt)("p",null,"A cluster administrator can define and expose multiple flavors of storage (from the same or different storage systems) within a cluster, each with a custom set of parameters. This design also ensures that end users don't have to worry about the complexity and nuances of how storage is provisioned, but still have the ability to select from multiple storage options."),(0,n.kt)("p",null,"When HwameiStor is installed, it ships with a couple of default storage classes that allow users to create either local (HwameiStor LocalVolume) or replicated (HwameiStor LocalVolumeReplica) volumes. The cluster administrator can enable the required storage engines and then create Storage Classes for the required Data Engines."),(0,n.kt)("h2",{id:"persistent-volume-claims"},"Persistent Volume Claims"),(0,n.kt)("p",null,"PersistentVolumeClaim (PVC) is a user\u2019s storage request that is served by a StorageClass offered by the cluster administrator. An application running on a container can request a certain type of storage. For example, a container can specify the size of storage it needs or the way it needs to access the data (read only, read/write, read-write many, etc.,)."),(0,n.kt)("p",null,"Beyond storage size and access mode, administrators create Storage Classes to provided PVs with custom properties, such as the type of disk (HDD vs. SSD), the level of performance, or the storage tier (regular or cold storage)."),(0,n.kt)("h2",{id:"persistent-volume"},"Persistent Volume"),(0,n.kt)("p",null,"The PersistentVolume(PV) is dynamically provisioned by the storage providers when users request for a PVC. PV contains the details on how the storage can be consumed by the container. Kubernetes and the Volume Drivers use the details in the PV to attach/detach the storage to the node where the container is running and mount/unmount storage to a container."),(0,n.kt)("p",null,"HwameiStor Control Plane dynamically provisions HwameiStor Local and Replicated volumes and helps in creating the PV objects in the cluster."),(0,n.kt)("h2",{id:"statefulsets-and-deployments"},"StatefulSets and Deployments"),(0,n.kt)("p",null,"Kubernetes provides several built-in workload resources such as StatefulSets and Deployments that let application developers define an application running on Kubernetes. You can run a stateful application by creating a Kubernetes Deployment/Statefulset and connecting it to a PersistentVolume using a PersistentVolumeClaim."),(0,n.kt)("p",null,"For example, you can create a MySQL Deployment YAML that references a PersistentVolumeClaim. The MySQL PersistentVolumeClaim referenced by the Deployment should be created with the requested size and StorageClass. Once the HwameiStor control plane provisions a PersistenceVolume for the required StorageClass and requested capacity, the claim is set as satisfied. Kubernetes will then mount the PersistentVolume and launch the MySQL Deployment."))}p.isMDXComponent=!0}}]);