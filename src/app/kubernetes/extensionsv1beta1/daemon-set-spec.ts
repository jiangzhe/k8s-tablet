import { LabelSelector } from "../metav1/label-selector";
import { PodTemplateSpec } from "../corev1/pod-template-spec";
import { DaemonSetUpdateStrategy } from "./daemon-set-update-strategy";

export interface DaemonSetSpec {
  selector: LabelSelector;
  template: PodTemplateSpec;
  updateStrategy: DaemonSetUpdateStrategy;
  minReadySeconds: number;
  revisionHistoryLimit: number;
}