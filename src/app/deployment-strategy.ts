import { RollingUpdateDeployment } from "./rolling-update-deployment";

export class DeploymentStrategy {
  constructor(
    type: string,
    rollingUpdate: RollingUpdateDeployment
  ) {}
}