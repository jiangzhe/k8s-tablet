import { ListMeta } from "../metav1/list-meta";
import { DaemonSet } from "./daemon-set";

export interface DaemonSetList {
  kind: string;
  apiVersion: string;
  metadata: ListMeta;
  items: DaemonSet[];
}