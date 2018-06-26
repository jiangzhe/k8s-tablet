import { ObjectFieldSelector } from "./object-field-selector";
import { ResourceFieldSelector } from "./resource-field-selector";
import { ConfigMapKeySelector } from "./config-map-key-selector";
import { SecretKeySelector } from "./secret-key-selector";

export class EnvVarSource {
  constructor(
    public fieldRef: ObjectFieldSelector,
    public resourceFieldRef: ResourceFieldSelector,
    public configMapKeyRef: ConfigMapKeySelector,
    public secretKeyRef: SecretKeySelector
  ) {}
}