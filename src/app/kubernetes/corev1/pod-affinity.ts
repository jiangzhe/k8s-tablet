import { PodAffinityTerm } from "./pod-affinity-term";
import { WeightedPodAffinityTerm } from "./weighted-pod-affinity-term";

export class PodAffinity {
  constructor(
    public requiredDuringSchedulingIgnoredDuringExecution: PodAffinityTerm[],
    public preferredDuringSchedulingIgnoredDuringExecution: WeightedPodAffinityTerm[]
  ) { }
}