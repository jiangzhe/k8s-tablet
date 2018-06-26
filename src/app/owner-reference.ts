export class OwnerReference {
  constructor(
    public apiVersion: string,
    public kind: string,
    public name: string,
    public uid: string,
    public controller: boolean
  ) {}
}