import { NodeSelector } from "./node-selector";
import { PreferredSchedulingTerm } from "./preferred-scheduling-term";

export interface NodeAffinity {
  requiredDuringSchedulingIgnoredDuringExecution: NodeSelector;
  preferredDuringSchedulingIgnoredDuringExecution: PreferredSchedulingTerm;
}