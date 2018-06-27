import { LabelSelector } from "../metav1/label-selector";
import { ResourceRequirements } from "./resource-requirements";

export interface PersistentVolumeClaimSpec {
  accessModes: string[];  // enum
  selector: LabelSelector;
  resources: ResourceRequirements;
  volumeName: string;
  storageClassName: string;
  volumeMode: string; // enum
}