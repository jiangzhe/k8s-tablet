import { LabelSelector } from "./label-selector";

export class PodAffinityTerm {
  constructor(
    public labelSelector: LabelSelector,
    public namespaces: string[],
    public topologyKey: string
  ) {}
}