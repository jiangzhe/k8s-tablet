import { NodeSelectorRequirement } from "./node-selector-requirement";

export class NodeSelectorTerm {
  constructor(
    public matchExpressions: NodeSelectorRequirement[],
    public matchFields: NodeSelectorRequirement[]
  ) { }
}