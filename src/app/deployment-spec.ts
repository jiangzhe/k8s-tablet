import { DeploymentStrategy } from "./deployment-strategy";
import { LabelSelector } from "./label-selector";
import { PodTemplateSpec } from "./pod-template-spec";

export class DeploymentSpec {
  constructor(
    replicas: number,
    selector: LabelSelector,
    template: PodTemplateSpec,
    strategy: DeploymentStrategy
  ) {}
}