export interface DaemonSetCondition {
  type: string;
  status: string;  // enum
  lastTransitionTime: string;
  reason: string;
  message: string;
}