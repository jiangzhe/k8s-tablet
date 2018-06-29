import { ObjectMeta } from "../metav1/object-meta";
import { EndpointSubset } from "./endpoint-subset";

export interface Endpoints {
  kind: string;
  apiVersion: string;
  metadata: ObjectMeta;
  subsets: EndpointSubset[];
}