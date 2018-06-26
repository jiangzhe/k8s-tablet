import { NodeSelector } from "./node-selector";
import { PreferredSchedulingTerm } from "./preferred-scheduling-term";

export class NodeAffinity {
  constructor(
    public requiredDuringSchedulingIgnoredDuringExecution: NodeSelector,
    public preferredDuringSchedulingIgnoredDuringExecution: PreferredSchedulingTerm
  ) { }
}