import { ContainerPort } from "./contrainer-port";
import { EnvFromSource } from "./env-from-source";
import { EnvVar } from "./env-var";
import { ResourceRequirements } from "./resource-requirements";
import { VolumeMount } from "./volume-mount";
import { Probe } from "./probe";
import { Lifecycle } from "./lifecycle";

export class Container {
  constructor(
    public name: string,
    public image: string,
    public command: string[],
    public args: string[],
    public workingDir: string,
    public ports: ContainerPort[],
    public envFrom: EnvFromSource[],
    public env: EnvVar[],
    public resources: ResourceRequirements,
    public volumeMounts: VolumeMount[],
    public livenessProbe: Probe,
    public readinessProbe: Probe,
    public lifecycle: Lifecycle,
    public terminationMessagePath: string,
    public terminationMessagePolicy: string,
    public imagePullPolicy: string,
    // public securityContext: SecurityContext,
    public stdin: boolean,
    public stdinOnce: boolean,
    public tty: boolean
  ) {}
}