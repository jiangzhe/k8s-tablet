import { PodAffinityTerm } from "./pod-affinity-term";

export interface WeightedPodAffinityTerm {
  weight: number;
  podAffinityTerm: PodAffinityTerm;
}