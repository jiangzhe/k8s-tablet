import { OwnerReference } from "../metav1/owner-reference";
import { DeploymentSpec } from "./deployment-spec";
import { DeploymentStatus } from "./deployment-status";

export class Deployment {
  constructor(
    public kind: string,
    public apiVersion: string,
    public metadata: { [name: string]: string },
    public annotations: { [name: string]: string },
    public ownerReferences: OwnerReference[],
    public spec: DeploymentSpec,
    public status: DeploymentStatus
  ) { }
}