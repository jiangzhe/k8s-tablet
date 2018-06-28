import { ObjectMeta } from "../metav1/object-meta";
import { ServiceSpec } from "./service-spec";
import { ServiceStatus } from "./service-status";

export interface Service {
  kind: string;
  apiVersion: string;
  metadata: ObjectMeta;
  spec: ServiceSpec;
  status: ServiceStatus;
}