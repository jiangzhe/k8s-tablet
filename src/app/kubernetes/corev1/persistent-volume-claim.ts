import { ObjectMeta } from "../metav1/object-meta";
import { PersistentVolumeClaimSpec } from "./persistent-volume-claim-spec";
import { PersistentVolumeClaimStatus } from "./persistent-volume-claim-status";

export interface PersistentVolumeClaim {
  kind: string;
  apiVersion: string;
  metadata: ObjectMeta;
  spec: PersistentVolumeClaimSpec;
  status: PersistentVolumeClaimStatus;
}