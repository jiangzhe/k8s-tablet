import { ObjectMeta } from "../metav1/object-meta";
import { IngressSpec } from "./ingress-spec";
import { IngressStatus } from "./ingress-status";

export interface Ingress {
  kind: string;
  apiVersion: string;
  metadata: ObjectMeta;
  spec: IngressSpec;
  status: IngressStatus;
}