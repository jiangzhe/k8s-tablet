export interface IngressBackend {
  serviceName: string;
  servicePort: number| string;
}