export interface ContainerPort {
  name: string;
    hostPort: number;
    containerPort: number;
    protocol: string;
    hostIP: string;
}