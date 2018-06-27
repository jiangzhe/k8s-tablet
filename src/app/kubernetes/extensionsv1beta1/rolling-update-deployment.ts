export interface RollingUpdateDeployment {
  maxUnavailable: number;
  maxSurge: number;
}