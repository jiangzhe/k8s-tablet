import { NodeSelectorTerm } from "./node-selector-term";

export class PreferredSchedulingTerm {
  constructor(
    public weight: number,
    public preference: NodeSelectorTerm
  ) {}
}