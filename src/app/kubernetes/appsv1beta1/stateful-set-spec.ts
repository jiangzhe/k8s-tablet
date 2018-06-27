import { LabelSelector } from "../metav1/label-selector";
import { PodTemplateSpec } from "../corev1/pod-template-spec";
import { PersistentVolumeClaim } from "../corev1/persistent-volume-claim";
import { StatefulSetUpdateStrategy } from "./stateful-set-update-strategy";

export interface StatefulSetSpec {
  replicas: number;
  selector: LabelSelector;
  template: PodTemplateSpec;
  volumeClaimTemplates: PersistentVolumeClaim[];
  serviceName: string;
  podManagementPolicy: string;  // enum
  updateStrategy: StatefulSetUpdateStrategy;
  revisionHistoryLimit: number;
}