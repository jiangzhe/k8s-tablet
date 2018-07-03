import { HTTPIngressRuleValue } from "./http-ingress-rule-value";

export interface IngressRule {
  host: string;
  http: HTTPIngressRuleValue;
}