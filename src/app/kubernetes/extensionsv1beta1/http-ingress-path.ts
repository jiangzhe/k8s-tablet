import { IngressBackend } from "./ingress-backend";

export interface HTTPIngressPath {
  path: string;
  backend: IngressBackend;
}