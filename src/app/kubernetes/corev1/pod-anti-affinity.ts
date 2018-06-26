import { PodAffinityTerm } from "./pod-affinity-term";
import { WeightedPodAffinityTerm } from "./weighted-pod-affinity-term";

export class PodAntiAffinity {
  constructor(
    public requiredDuringSchedulingIgnoredDuringExecution: PodAffinityTerm[],
    public preferredDuringSchedulingIgnoredDuringExecution: WeightedPodAffinityTerm[]
  ) { }
}