import { EnvVarSource } from "./env-var-source";

export class EnvVar {
  constructor(
    public name: string,
    public value: string,
    public valueFrom: EnvVarSource
  ) {}
}