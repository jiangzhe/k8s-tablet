import { NamespaceSpec } from "./namespace-spec";
import { NamespaceStatus } from "./namespace-status";

export interface Namespace {
  kind: string;
  apiVersion: string;
  metadata: { [name: string]: string };
  spec: NamespaceSpec;
  status: NamespaceStatus;
}