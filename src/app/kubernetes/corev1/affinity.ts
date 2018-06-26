import { NodeAffinity } from "./node-affinity";
import { PodAffinity } from "./pod-affinity";
import { PodAntiAffinity } from "./pod-anti-affinity";

export class Affinity {
  constructor(
    public nodeAffinity: NodeAffinity,
    public podAffinity: PodAffinity,
    public podAntiAffinity: PodAntiAffinity
  ) {}
}