export class ResourceRequirements {
  constructor(
    public limits: {[name: string]: string | number},
    public requests: {[name: string]: string | number}
  ) {}
}