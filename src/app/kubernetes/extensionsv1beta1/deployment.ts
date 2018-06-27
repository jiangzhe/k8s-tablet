import { OwnerReference } from "../metav1/owner-reference";
import { DeploymentSpec } from "./deployment-spec";
import { DeploymentStatus } from "./deployment-status";
import { ObjectMeta } from "../metav1/object-meta";

export interface Deployment {
  kind: string;
  apiVersion: string;
  metadata: ObjectMeta;
  annotations: { [name: string]: string };
  ownerReferences: OwnerReference[];
  spec: DeploymentSpec;
  status: DeploymentStatus;
}