export class NodeSelectorRequirement {
  constructor(
    public key: string,
    public operator: string,
    public values: string
  ) {}
}