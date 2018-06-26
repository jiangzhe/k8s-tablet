export class SecretKeySelector {
  constructor(
    public name: string,
    public key: string,
    public optional: boolean
  ) {}
}