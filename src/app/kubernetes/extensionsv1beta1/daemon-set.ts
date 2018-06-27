import { ObjectMeta } from "../metav1/object-meta";
import { DaemonSetSpec } from "./daemon-set-spec";
import { DaemonSetStatus } from "./daemon-set-status";

export interface DaemonSet {
  kind: string;
  apiVersion: string;
  metadata: ObjectMeta;
  spec: DaemonSetSpec;
  status: DaemonSetStatus;
}