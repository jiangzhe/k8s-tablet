export class Volume {
  constructor(
    public name: string,
    public tosDisk: {[name: string]: string}
  ) {}
}