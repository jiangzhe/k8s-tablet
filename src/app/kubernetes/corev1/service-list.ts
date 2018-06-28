import { ListMeta } from "../metav1/list-meta";
import { Service } from "./service";

export interface ServiceList {
  kind: string;
  apiVersion: string;
  metadata: ListMeta;
  items: Service[];
}