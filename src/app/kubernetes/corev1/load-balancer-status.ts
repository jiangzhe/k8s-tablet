import { LoadBalancerIngress } from "./load-balancer-ingress";

export interface LoadBalancerStatus {
  ingress: LoadBalancerIngress[];
}