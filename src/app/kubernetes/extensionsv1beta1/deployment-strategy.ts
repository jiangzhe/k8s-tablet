import { RollingUpdateDeployment } from "./rolling-update-deployment";

export interface DeploymentStrategy {
  type: string;
  rollingUpdate: RollingUpdateDeployment;
}