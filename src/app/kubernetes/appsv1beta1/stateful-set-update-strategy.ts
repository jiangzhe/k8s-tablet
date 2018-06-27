import { RollingUpdateStatefulSetStrategy } from "./rolling-update-stateful-set-strategy";

export interface StatefulSetUpdateStrategy {
  type: string;  // enum
  rollingUpdate: RollingUpdateStatefulSetStrategy;
}