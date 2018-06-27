export interface StatefulSetCondition {
  type: string;
  status: string;  // enum
  lastTransitionTime: string;
  reason: string;
  message: string;
}