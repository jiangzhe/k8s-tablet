import { DeploymentCondition } from "./deployment-condition";

export interface DeploymentStatus {
  observedGeneration: number;
  replicas: number;
  updatedReplicas: number;
  availableReplicas: number;
  unavailableReplicas: number;
  conditions: DeploymentCondition[];
}