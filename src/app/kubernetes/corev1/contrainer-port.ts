export class ContainerPort {
  constructor(
    public name: string,
    public hostPort: number,
    public containerPort: number,
    public protocol: string,
    public hostIP: string
  ) {}
}