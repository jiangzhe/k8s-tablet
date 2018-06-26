import { PodSpec } from "./pod-spec";

export class PodTemplateSpec {
  constructor(
    public metadata: {[name: string]: string},
    public spec: PodSpec
  ) {}
}