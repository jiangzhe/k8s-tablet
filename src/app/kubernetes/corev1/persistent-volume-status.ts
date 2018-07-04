export interface PersistentVolumeStatus {
  phase: string;  // enum
  message: string;
  reason: string;
}