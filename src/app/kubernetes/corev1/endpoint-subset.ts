import { EndpointAddress } from "./endpoint-address";
import { EndpointPort } from "./endpoint-port";

export interface EndpointSubset {
  addresses: EndpointAddress[];
  notReadyAddresses: EndpointAddress[];
  ports: EndpointPort[];
}