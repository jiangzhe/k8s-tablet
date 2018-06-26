export class VolumeMount {
  constructor(
    public name: string,
    public readOnly: boolean,
    public mountPath: string,
    public subPath: string
  ) {}
}