import { ObjectReference } from "./object-reference";

export interface EndpointAddress {
  ip: string;
  hostname: string;
  nodeName: string;
  targetRef: ObjectReference;
}