import { Volume } from "./volume";
import { Container } from "./container";
import { LocalObjectReference } from "./local-object-reference";
import { Affinity } from "./affinity";
import { HostAlias } from "./host-alias";
import { PodDNSConfig } from "./pod-dns-config";

export class PodSpec {
  constructor(
    public volumes: Volume[],
    public initContainers: Container[],
    public containers: Container[],
    public restartPolicy: string,
    public terminationGracePeriodSeconds: number,
    public activeDeadlineSeconds: number,
    public dnsPolicy: string,
    public nodeSelector: { [name: string]: string },
    public serviceAccountName: string,
    public automountServiceAccountToken: boolean,
    public nodeName: string,
    public hostNetwork: boolean,
    public hostPID: boolean,
    public hostIPC: boolean,
    public shareProcessNamespace: boolean,
    // public securityContext: SecurityContext,
    public imagePullSecrets: LocalObjectReference[],
    public hostname: string,
    public subdomain: string,
    public affinity: Affinity,
    public schedulerName: string,
    // public tolerations: Toleration[],
    public hostAliases: HostAlias[],
    public priorityClassName: string,
    public priority: number,
    public dnsConfig: PodDNSConfig,
    // public readinessGates: PodReadinessGate[]
  ) { }
}