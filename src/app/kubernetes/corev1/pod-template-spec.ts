import { PodSpec } from "./pod-spec";

export interface PodTemplateSpec {
  metadata: {[name: string]: string};
  spec: PodSpec;
}