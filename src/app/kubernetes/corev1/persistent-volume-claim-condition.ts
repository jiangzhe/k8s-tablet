export interface PersistentVolumeClaimCondition {
  type: string;  // enum
  status: string;  // enum
  lastProbeTime: string;
  lastTransitionTime: string;
  reason: string;
  message: string;
}