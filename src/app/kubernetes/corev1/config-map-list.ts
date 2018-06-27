import { ObjectMeta } from "../metav1/object-meta";
import { ListMeta } from "../metav1/list-meta";
import { ConfigMap } from "./config-map";

export interface ConfigMapList {
  kind: string;
  apiVersion: string;
  metadata: ListMeta;
  items: ConfigMap[];
}