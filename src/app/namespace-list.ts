import { Namespace } from "./namespace";

export class NamespaceList {
  constructor(
    public kind: string,
    public apiVersion: string,
    public metadata: {[name: string]: string},
    public items: Namespace[]
  ) {}
}