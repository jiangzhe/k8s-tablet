import { PersistentVolumeClaimCondition } from "./persistent-volume-claim-condition";

export interface PersistentVolumeClaimStatus {
  phase: string;  // enum
  accessModes: string[]; // enum
  capacity: {[name: string]: string | number};  // enum
  conditions: PersistentVolumeClaimCondition[];
}