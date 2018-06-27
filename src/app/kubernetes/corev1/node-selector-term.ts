import { NodeSelectorRequirement } from "./node-selector-requirement";

export interface NodeSelectorTerm {
  matchExpressions: NodeSelectorRequirement[];
  matchFields: NodeSelectorRequirement[];
}