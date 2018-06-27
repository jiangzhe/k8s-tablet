import { ObjectMeta } from "../metav1/object-meta";
import { StatefulSetSpec } from "./stateful-set-spec";
import { StatefulSetStatus } from "./stateful-set-status";

export interface StatefulSet {
  kind: string;
  apiVersion: string;
  metadata: ObjectMeta;
  spec: StatefulSetSpec;
  status: StatefulSetStatus;
}