import { PodAffinityTerm } from "./pod-affinity-term";

export class WeightedPodAffinityTerm {
  constructor(
    public weight: number,
    public podAffinityTerm: PodAffinityTerm
  ) {}
}