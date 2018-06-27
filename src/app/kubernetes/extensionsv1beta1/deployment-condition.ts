export interface DeploymentCondition {
  type: string;
  status: string;
  lastUpdateTime: string;
  lastTransactionTime: string;
  reason: string;
  message: string;
}