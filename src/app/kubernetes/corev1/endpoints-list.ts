import { ListMeta } from "../metav1/list-meta";
import { Endpoints } from "./endpoints";

export interface EndpointsList {
  kind: string;
  apiVersion: string;
  metadata: ListMeta;
  items: Endpoints[];
}