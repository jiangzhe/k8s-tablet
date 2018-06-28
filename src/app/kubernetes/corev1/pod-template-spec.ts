import { PodSpec } from "./pod-spec";
import { ObjectMeta } from "../metav1/object-meta";

export interface PodTemplateSpec {
  metadata: ObjectMeta;
  spec: PodSpec;
}