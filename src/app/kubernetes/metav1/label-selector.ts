import { LabelSelectorRequirement } from "./label-selector-requirement";

export interface LabelSelector {
  matchLabels: {[name: string]: string};
  matchExpressions: LabelSelectorRequirement;
}