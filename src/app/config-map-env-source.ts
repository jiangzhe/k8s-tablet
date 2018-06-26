export class ConfigMapEnvSource {
  constructor(
    public name: string,
    public optional: boolean
  ) {}
}