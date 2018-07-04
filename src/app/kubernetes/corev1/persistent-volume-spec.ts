import { ObjectReference } from "./object-reference";
import { VolumeNodeAffinity } from "./volume-node-affinity";

export interface PersistentVolumeSpec {
  capacity: {[name: string]: number | string};
  // PersistentVolumeSource
  accessModes: string[];  // enum
  claimRef: ObjectReference;
  persistentVolumeReclaimPolicy: string;  // enum
  storageClassName: string;
  mountOptions: string[];
  volumeMode: string;  // enum
  nodeAffinity: VolumeNodeAffinity;
}