import { DeploymentStrategy } from "./deployment-strategy";
import { LabelSelector } from "../metav1/label-selector";
import { PodTemplateSpec } from "../corev1/pod-template-spec";

export class DeploymentSpec {
  constructor(
    replicas: number,
    selector: LabelSelector,
    template: PodTemplateSpec,
    strategy: DeploymentStrategy
  ) { }
}