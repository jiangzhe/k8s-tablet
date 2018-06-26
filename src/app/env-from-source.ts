import { ConfigMapEnvSource } from "./config-map-env-source";
import { SecretEnvSource } from "./secret-env-source";

export class EnvFromSource {
  constructor(
    public prefix: string,
    configMapRef: ConfigMapEnvSource,
    secretRef: SecretEnvSource
  ) {}
}