export class LabelSelectorRequirement {
  constructor(
    public key: string,
    public operator: string,
    public values: string[]
  ) {}
}