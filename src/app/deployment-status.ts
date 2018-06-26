import { DeploymentCondition } from "./deployment-condition";

export class DeploymentStatus {
  constructor(
    public observedGeneration: number,
    public replicas: number,
    public updatedReplicas: number,
    public availableReplicas: number,
    public unavailableReplicas: number,
    public conditions: DeploymentCondition[],
  ) {}
}