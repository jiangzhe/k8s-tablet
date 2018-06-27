import { PodAffinityTerm } from "./pod-affinity-term";
import { WeightedPodAffinityTerm } from "./weighted-pod-affinity-term";

export interface PodAntiAffinity {
  requiredDuringSchedulingIgnoredDuringExecution: PodAffinityTerm[];
  preferredDuringSchedulingIgnoredDuringExecution: WeightedPodAffinityTerm[];
}