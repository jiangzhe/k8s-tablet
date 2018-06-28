import { ObjectMeta } from "../metav1/object-meta";
import { ObjectReference } from "./object-reference";
import { LocalObjectReference } from "./local-object-reference";

export interface ServiceAccount {
  kind: string;
  apiVersion: string;
  metadata: ObjectMeta;
  secrets: ObjectReference[];
  imagePullSecrets: LocalObjectReference[];
  automountServiceAccountToken: boolean;
}