"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"What is HwameiStor","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Quick Start","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Installation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Prerequisites","href":"/docs/quick_start/install/prereq","docId":"quick_start/install/prereq"},{"type":"link","label":"Deploy with hwameistor-operator","href":"/docs/quick_start/install/operator","docId":"quick_start/install/operator"},{"type":"link","label":"Post-Check after Deployment","href":"/docs/quick_start/install/post_check","docId":"quick_start/install/post_check"}],"href":"/docs/category/installation"},{"type":"category","label":"Start a Stateful Application","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Basic Operations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Local Volumes","href":"/docs/quick_start/create_stateful/basic/local","docId":"quick_start/create_stateful/basic/local"},{"type":"link","label":"HA Volumes","href":"/docs/quick_start/create_stateful/basic/ha","docId":"quick_start/create_stateful/basic/ha"}],"href":"/docs/category/basic-operations"},{"type":"category","label":"Advanced Operations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Expand Volumes","href":"/docs/quick_start/create_stateful/advanced/expand","docId":"quick_start/create_stateful/advanced/expand"},{"type":"link","label":"Migrate Volumes","href":"/docs/quick_start/create_stateful/advanced/migrate","docId":"quick_start/create_stateful/advanced/migrate"}],"href":"/docs/category/advanced-operations"}],"href":"/docs/category/start-a-stateful-application"},{"type":"category","label":"Advanced Features","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Node Expansion","href":"/docs/quick_start/advanced_features/node_expansion","docId":"quick_start/advanced_features/node_expansion"},{"type":"link","label":"Disk Expansion","href":"/docs/quick_start/advanced_features/disk_expansion","docId":"quick_start/advanced_features/disk_expansion"},{"type":"link","label":"Eviction","href":"/docs/quick_start/advanced_features/volume_eviction","docId":"quick_start/advanced_features/volume_eviction"},{"type":"link","label":"Upgrade","href":"/docs/quick_start/advanced_features/upgrade","docId":"quick_start/advanced_features/upgrade"}],"href":"/docs/category/advanced-features"},{"type":"link","label":"Uninstall","href":"/docs/quick_start/uninstall","docId":"quick_start/uninstall"}],"href":"/docs/category/quick-start"},{"type":"category","label":"Architecture of HwameiStor","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/architecture/overview","docId":"architecture/overview"},{"type":"category","label":"Modules","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Local Disk Manager","href":"/docs/architecture/modules/ldm","docId":"architecture/modules/ldm"},{"type":"link","label":"Local Storage","href":"/docs/architecture/modules/ls","docId":"architecture/modules/ls"},{"type":"link","label":"Scheduler","href":"/docs/architecture/modules/scheduler","docId":"architecture/modules/scheduler"},{"type":"link","label":"Admission Controller","href":"/docs/architecture/modules/admission_controller","docId":"architecture/modules/admission_controller"},{"type":"link","label":"Evictor","href":"/docs/architecture/modules/evictor","docId":"architecture/modules/evictor"},{"type":"link","label":"Exporter","href":"/docs/architecture/modules/exporter","docId":"architecture/modules/exporter"},{"type":"link","label":"GUI","href":"/docs/architecture/modules/gui","docId":"architecture/modules/gui"}],"href":"/docs/category/modules"},{"type":"link","label":"APIs","href":"/docs/architecture/apis","docId":"architecture/apis"}],"href":"/docs/category/architecture-of-hwameistor"},{"type":"category","label":"Applications","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/apps/overview","docId":"apps/overview"},{"type":"link","label":"TiDB","href":"/docs/apps/tidb","docId":"apps/tidb"},{"type":"link","label":"Minio","href":"/docs/apps/minio/","docId":"apps/minio/minio"}],"href":"/docs/category/applications"},{"type":"category","label":"Terminologies","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"K8s Storage","href":"/docs/terms/k8s_storage","docId":"terms/k8s_storage"},{"type":"link","label":"CAS","href":"/docs/terms/cas","docId":"terms/cas"},{"type":"link","label":"CSI","href":"/docs/terms/csi","docId":"terms/csi"},{"type":"link","label":"CRD and CR","href":"/docs/terms/crd_and_cr","docId":"terms/crd_and_cr"},{"type":"link","label":"Volume","href":"/docs/terms/volume","docId":"terms/volume"},{"type":"link","label":"LVM","href":"/docs/terms/lvm","docId":"terms/lvm"},{"type":"link","label":"PV and PVC","href":"/docs/terms/pv_pvc","docId":"terms/pv_pvc"}],"href":"/docs/category/terminologies"},{"type":"link","label":"Community","href":"/docs/community","docId":"community"},{"type":"link","label":"FAQs","href":"/docs/faqs","docId":"faqs"}]},"docs":{"apps/minio/minio":{"id":"apps/minio/minio","title":"Minio","description":"Introduction to Minio","sidebar":"tutorialSidebar"},"apps/overview":{"id":"apps/overview","title":"Overview","description":"HwameiStor provisions two kind of local volumes: LVM and Disk.","sidebar":"tutorialSidebar"},"apps/tidb":{"id":"apps/tidb","title":"TiDB","description":"Introduction to TiDB","sidebar":"tutorialSidebar"},"architecture/apis":{"id":"architecture/apis","title":"APIs","description":"CRD Object Classes","sidebar":"tutorialSidebar"},"architecture/modules/admission_controller":{"id":"architecture/modules/admission_controller","title":"admission-controller","description":"admission-controller is a webhook that can automatically verify which pod uses the HwameiStor volume and help to modify the schedulerName to hwameistor-scheduler. For the specific principle, refer to K8S Dynamic Admission Control.","sidebar":"tutorialSidebar"},"architecture/modules/evictor":{"id":"architecture/modules/evictor","title":"Evictor","description":"The Evictor is used to automatically migrate HwameiStor volumes in case of node or pod eviction. When a node or pod is evicted as either Planned or Unplanned, the associated HwameiStor volumes, which have a replica on the node, will be detected and migrated out this node automatically. A scheduler will work for both LVM and Disk volumes.","sidebar":"tutorialSidebar"},"architecture/modules/exporter":{"id":"architecture/modules/exporter","title":"Exporter","description":"Exporter is HwameiStor\'s metrics server which will collect the metrics for the system resources, such as Disk, Volumes, Operations, etc.., and supply for the Prometheus module.","sidebar":"tutorialSidebar"},"architecture/modules/gui":{"id":"architecture/modules/gui","title":"GUI","description":"HwameiStor has a module of Graph User Interface. It will provide user an easy way to manage the HwameiStor system. The GUI can be deployed by Operator.","sidebar":"tutorialSidebar"},"architecture/modules/ldm":{"id":"architecture/modules/ldm","title":"Local Disk Manager","description":"Local Disk Manager (LDM) is one of the modules of HwameiStor. LDM is used to simplify the management of disks on nodes. It can abstract the disk on a node into a resource for monitoring and management purposes. It\'s a daemon that will be deployed on each node, then detect the disk on the node, abstract it into local disk (LD) resources and save it to kubernetes.","sidebar":"tutorialSidebar"},"architecture/modules/ls":{"id":"architecture/modules/ls","title":"Local Storage","description":"Local Storage is one of the modules of HwameiStor which is a cloud-native local storage system. It provisions high performance and persistent LVM volume with local access to applications.","sidebar":"tutorialSidebar"},"architecture/modules/scheduler":{"id":"architecture/modules/scheduler","title":"Scheduler","description":"The Scheduler is used to automatically schedule the Pod to a correct node which is associated with the HwameiStor volume.","sidebar":"tutorialSidebar"},"architecture/overview":{"id":"architecture/overview","title":"Overview","description":"Hwameistor is an HA local storage system for cloud-native stateful workloads.","sidebar":"tutorialSidebar"},"community":{"id":"community","title":"Community","description":"If you have any questions about the HwameiStor cloud-native local storage system, welcome to join the community to explore this metaverse world dedicated to developers and grow together!","sidebar":"tutorialSidebar"},"faqs":{"id":"faqs","title":"FAQs","description":"Q1: How does HwameiStor scheduler work in a Kubernetes platform?","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"What is HwameiStor","description":"Hwameistor is an HA local storage system for cloud-native stateful workloads.","sidebar":"tutorialSidebar"},"quick_start/advanced_features/disk_expansion":{"id":"quick_start/advanced_features/disk_expansion","title":"Disk Expansion","description":"A storage system is usually expected to expand its capacity by adding a new disk","sidebar":"tutorialSidebar"},"quick_start/advanced_features/node_expansion":{"id":"quick_start/advanced_features/node_expansion","title":"Node Expansion","description":"A storage system is usually expected to expand its capacity by adding a new storage node.","sidebar":"tutorialSidebar"},"quick_start/advanced_features/upgrade":{"id":"quick_start/advanced_features/upgrade","title":"Upgrade","description":"Helm makes upgrading HwameiStor very easy:","sidebar":"tutorialSidebar"},"quick_start/advanced_features/volume_eviction":{"id":"quick_start/advanced_features/volume_eviction","title":"Eviction","description":"Data volume migration along with node eviction is very important to keep the data","sidebar":"tutorialSidebar"},"quick_start/create_stateful/advanced/expand":{"id":"quick_start/create_stateful/advanced/expand","title":"Expand Volumes","description":"HwameiStor supports CSI Volume Expansion, by which altering the size of PVC","sidebar":"tutorialSidebar"},"quick_start/create_stateful/advanced/migrate":{"id":"quick_start/create_stateful/advanced/migrate","title":"Migrate Volumes","description":"Volume Migration is an important operation and maintenance management function of HwameiStor.","sidebar":"tutorialSidebar"},"quick_start/create_stateful/basic/ha":{"id":"quick_start/create_stateful/basic/ha","title":"HA Volumes","description":"When the HA module is enabled, HwameiStor Operator will generate a StorageClass of HA automatically.","sidebar":"tutorialSidebar"},"quick_start/create_stateful/basic/local":{"id":"quick_start/create_stateful/basic/local","title":"Local Volumes","description":"Running a stateful application with HwameiStor is super easy.","sidebar":"tutorialSidebar"},"quick_start/install/operator":{"id":"quick_start/install/operator","title":"Deploy with hwameistor-operator","description":"You can use hwameistor-operator to deploy and manage HwameiStor system.","sidebar":"tutorialSidebar"},"quick_start/install/post_check":{"id":"quick_start/install/post_check","title":"Post-Check after Deployment","description":"The example below is from a 3-node kubernetes cluster:","sidebar":"tutorialSidebar"},"quick_start/install/prereq":{"id":"quick_start/install/prereq","title":"Prerequisites","description":"Kubernetes","sidebar":"tutorialSidebar"},"quick_start/uninstall":{"id":"quick_start/uninstall","title":"Uninstallation (For test purpose, not use for production)","description":"This page describes two schemes to uninstall your HwameiStor.","sidebar":"tutorialSidebar"},"terms/cas":{"id":"terms/cas","title":"CAS","description":"Container Attached Storage (CAS) is software that includes microservice based storage","sidebar":"tutorialSidebar"},"terms/crd_and_cr":{"id":"terms/crd_and_cr","title":"CRD and CR","description":"CRD","sidebar":"tutorialSidebar"},"terms/csi":{"id":"terms/csi","title":"CSI","description":"CSI is the abbreviation of Container Storage Interface. To have a better understanding","sidebar":"tutorialSidebar"},"terms/k8s_storage":{"id":"terms/k8s_storage","title":"K8s Storage","description":"Kubernetes has made several enhancements to support running Stateful Workloads","sidebar":"tutorialSidebar"},"terms/lvm":{"id":"terms/lvm","title":"LVM","description":"The full name of LVM is Logical Volume Manager. It adds a logical layer between","sidebar":"tutorialSidebar"},"terms/pv_pvc":{"id":"terms/pv_pvc","title":"PV and PVC","description":"The PersistentVolume subsystem provides an API for users and administrators that","sidebar":"tutorialSidebar"},"terms/volume":{"id":"terms/volume","title":"Volume","description":"On-disk files in a container are ephemeral, which presents some problems for non-trivial","sidebar":"tutorialSidebar"}}}')}}]);