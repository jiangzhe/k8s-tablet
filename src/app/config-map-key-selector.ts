export class ConfigMapKeySelector {
  constructor(
    public name: string,
    public key: string,
    public optional: boolean
  ) {}
}