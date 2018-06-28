import { LoadBalancerStatus } from "./load-balancer-status";

export interface ServiceStatus {
  loadBalancer: LoadBalancerStatus;
}