import { ConfigMapEnvSource } from "./config-map-env-source";
import { SecretEnvSource } from "./secret-env-source";

export interface EnvFromSource {
  prefix: string;
  configMapRef: ConfigMapEnvSource;
  secretRef: SecretEnvSource;
}