import { Volume } from "./volume";
import { Container } from "./container";
import { LocalObjectReference } from "./local-object-reference";
import { Affinity } from "./affinity";
import { HostAlias } from "./host-alias";
import { PodDNSConfig } from "./pod-dns-config";

export interface PodSpec {
  volumes: Volume[];
  initContainers: Container[];
  containers: Container[];
  restartPolicy: string;
  terminationGracePeriodSeconds: number;
  activeDeadlineSeconds: number;
  dnsPolicy: string;
  nodeSelector: { [name: string]: string };
  serviceAccountName: string;
  automountServiceAccountToken: boolean;
  nodeName: string;
  hostNetwork: boolean;
  hostPID: boolean;
  hostIPC: boolean;
  shareProcessNamespace: boolean;
  // securityContext: SecurityContext;
  imagePullSecrets: LocalObjectReference[];
  hostname: string;
  subdomain: string;
  affinity: Affinity;
  schedulerName: string;
  // tolerations: Toleration[];
  hostAliases: HostAlias[];
  priorityClassName: string;
  priority: number;
  dnsConfig: PodDNSConfig;
  // readinessGates: PodReadinessGate[];
}