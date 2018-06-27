import { ListMeta } from "../metav1/list-meta";
import { StatefulSet } from "./stateful-set";

export interface StatefulSetList {
  kind: string;
  apiVersion: string;
  metadata: ListMeta;
  items: StatefulSet[];
}