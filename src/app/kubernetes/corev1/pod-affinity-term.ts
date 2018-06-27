import { LabelSelector } from "../metav1/label-selector";

export interface PodAffinityTerm {
  labelSelector: LabelSelector;
  namespaces: string[];
  topologyKey: string;
}