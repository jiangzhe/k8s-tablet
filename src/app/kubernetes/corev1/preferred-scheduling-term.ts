import { NodeSelectorTerm } from "./node-selector-term";

export interface PreferredSchedulingTerm {
  weight: number;
  preference: NodeSelectorTerm;
}