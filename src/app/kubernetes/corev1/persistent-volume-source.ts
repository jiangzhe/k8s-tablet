export interface PersistentVolumeSource {
  gcePersistentDisk: GCEPersistentDiskVolumeSource;
  awsElasticBlockStore: AWSElasticBlockStoreVolumeSource;
  hostPath: HostPathVolumeSource;
  glusterfs: GlusterfsVolumeSource;
  nfs: NFSVolumeSource;
  rbd: RBDPersistentVolumeSource;
  iscsi: ISCSIPersistentVolumeSource;
  cinder: CinderPersistentVolumeSource;
  cephfs: CephFSPersistentVolumeSource;
  fc: FCVolumeSource;
  flocker: FlockerVolumeSource;
  flexVolume: FlexPersistentVolumeSource;
  azureFile: AzureFilePersistentVolumeSource;
  vsphereVolume: VsphereVirtualDiskVolumeSource;
  quobyte: QuobyteVolumeSource;
  azureDisk: AzureDiskVolumeSource;
  photonPersistentDisk: PhotonPersistentDiskVolumeSource;
  portworxVolume: PortworxVolumeSource;
  scaleIO: ScaleIOPersistentVolumeSource;
  local: LocalVolumeSource;
  storageos: StorageOSPersistentVolumeSource;
  csi: CSIPersistentVolumeSource;
}
export interface GCEPersistentDiskVolumeSource {}
export interface AWSElasticBlockStoreVolumeSource {}
export interface HostPathVolumeSource {}
export interface GlusterfsVolumeSource {}
export interface NFSVolumeSource {}
export interface RBDPersistentVolumeSource {}
export interface ISCSIPersistentVolumeSource {}
export interface CinderPersistentVolumeSource {}
export interface CephFSPersistentVolumeSource {}
export interface FCVolumeSource {}
export interface FlockerVolumeSource {}
export interface FlexPersistentVolumeSource {}
export interface AzureFilePersistentVolumeSource {}
export interface VsphereVirtualDiskVolumeSource {}
export interface QuobyteVolumeSource {}
export interface AzureDiskVolumeSource {}
export interface PhotonPersistentDiskVolumeSource {}
export interface PortworxVolumeSource {}
export interface ScaleIOPersistentVolumeSource {}
export interface LocalVolumeSource {}
export interface StorageOSPersistentVolumeSource {}
export interface CSIPersistentVolumeSource {}
