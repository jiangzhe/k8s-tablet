export interface ServicePort {
  name: string;
  protocol: string;  // enum
  port: number;
  targetPort: string | number;
  nodePort: number;
}