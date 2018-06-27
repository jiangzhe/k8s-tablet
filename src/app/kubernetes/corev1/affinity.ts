import { NodeAffinity } from "./node-affinity";
import { PodAffinity } from "./pod-affinity";
import { PodAntiAffinity } from "./pod-anti-affinity";

export interface Affinity {
  nodeAffinity: NodeAffinity;
  podAffinity: PodAffinity;
  podAntiAffinity: PodAntiAffinity;
}