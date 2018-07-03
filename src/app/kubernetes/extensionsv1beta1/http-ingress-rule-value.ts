import { HTTPIngressPath } from "./http-ingress-path";

export interface HTTPIngressRuleValue {
  paths: HTTPIngressPath[];
}