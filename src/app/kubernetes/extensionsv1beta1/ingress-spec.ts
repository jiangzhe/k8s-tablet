import { IngressTLS } from "./ingress-tls";
import { IngressRule } from "./ingress-rule";
import { IngressBackend } from "./ingress-backend";

export interface IngressSpec {
  backend: IngressBackend;
  tls: IngressTLS[];
  rules: IngressRule[];
}