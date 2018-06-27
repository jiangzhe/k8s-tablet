import { ObjectMeta } from "../metav1/object-meta";

export interface ConfigMap {
  kind: string;
  apiVersion: string;
  metadata: ObjectMeta;
  data: {[name: string]: string};
  // binaryData
}