import { NodeSelectorTerm } from "./node-selector-term";

export class NodeSelector {
  constructor(
    public nodeSelectorTerms: NodeSelectorTerm[]
  ) {}
}