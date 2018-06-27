import { ContainerPort } from "./contrainer-port";
import { EnvFromSource } from "./env-from-source";
import { EnvVar } from "./env-var";
import { ResourceRequirements } from "./resource-requirements";
import { VolumeMount } from "./volume-mount";
import { Probe } from "./probe";
import { Lifecycle } from "./lifecycle";

export interface Container {
  name: string;
  image: string;
  command: string[];
  args: string[];
  workingDir: string;
  ports: ContainerPort[];
  envFrom: EnvFromSource[];
  env: EnvVar[];
  resources: ResourceRequirements;
  volumeMounts: VolumeMount[];
  livenessProbe: Probe;
  readinessProbe: Probe;
  lifecycle: Lifecycle;
  terminationMessagePath: string;
  terminationMessagePolicy: string;
  imagePullPolicy: string;
  // securityContext: SecurityContext;
  stdin: boolean;
  stdinOnce: boolean;
  tty: boolean;
}