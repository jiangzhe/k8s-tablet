import { NamespaceSpec } from "./namespace-spec";
import { NamespaceStatus } from "./namespace-status";

export class Namespace {

  constructor(
    public kind: string,
    public apiVersion: string,
    public metadata: { [name: string]: string },
    public spec: NamespaceSpec,
    public status: NamespaceStatus
  ) { }
}