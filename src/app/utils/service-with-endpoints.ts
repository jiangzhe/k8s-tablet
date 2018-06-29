import { Service } from "../kubernetes/corev1/service";
import { Endpoints } from "../kubernetes/corev1/endpoints";

export interface ServiceWithEndpoints {
  service: Service;
  endpoints: Endpoints;
}