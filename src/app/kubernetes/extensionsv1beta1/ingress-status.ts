import { LoadBalancerStatus } from "../corev1/load-balancer-status";

export interface IngressStatus {
  loadBalancer: LoadBalancerStatus;
}