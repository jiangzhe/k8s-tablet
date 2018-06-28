import { ServicePort } from "./service-port";
import { SessionAffinityConfig } from "./session-affinity-config";

export interface ServiceSpec {
  ports: ServicePort[];
  selector: {[name: string]: string};
  clusterIP: string;
  type: string;  // enum
  externalIPs: string[];
  sessionAffinity: string;  // enum
  loadBalancerIP: string;
  loadBalancerSourceRanges: string[];
  externalName: string;
  externalTrafficPolicy: string;  // enum
  healthCheckNodePort: number;
  publishNotReadyAddresses: boolean;
  sessionAffinityConfig: SessionAffinityConfig;
}