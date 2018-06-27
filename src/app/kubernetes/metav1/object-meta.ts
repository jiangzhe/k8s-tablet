import { OwnerReference } from "./owner-reference";

export interface ObjectMeta {
  name: string;
  generateName: string;
  namespace: string;
  selfLink: string;
  uid: string;
  resourceVersion: string;
  generation: number;
  creationTimestamp: string;
  deletionTimestamp: string;
  deletionGracePeriodSeconds: number;
  labels: {[name: string]: string};
  annotations: {[name: string]: string};
  ownerReferences: OwnerReference[];
  // initializers: Initializer[];
  // finalizers: string[];
  // clusterName: string;
}