import { ObjectFieldSelector } from "./object-field-selector";
import { ResourceFieldSelector } from "./resource-field-selector";
import { ConfigMapKeySelector } from "./config-map-key-selector";
import { SecretKeySelector } from "./secret-key-selector";

export interface EnvVarSource {
  fieldRef: ObjectFieldSelector;
  resourceFieldRef: ResourceFieldSelector;
  configMapKeyRef: ConfigMapKeySelector;
  secretKeyRef: SecretKeySelector;
}