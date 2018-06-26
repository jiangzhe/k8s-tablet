import { LabelSelectorRequirement } from "./label-selector-requirement";

export class LabelSelector {
  constructor(
    public matchLabels: {[name: string]: string},
    public matchExpressions: LabelSelectorRequirement
  ) {}
}