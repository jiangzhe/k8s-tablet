import { Deployment } from "./deployment";
import { ListMeta } from "../metav1/list-meta";

export interface DeploymentList {
  kind: string;
  metadata: ListMeta;
  // continue: string;
  items: Deployment[];
}