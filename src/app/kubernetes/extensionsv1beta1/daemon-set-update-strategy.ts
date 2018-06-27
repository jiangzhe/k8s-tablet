import { RollingUpdateDaemonSet } from "./rolling-update-daemon-set";

export interface DaemonSetUpdateStrategy {
  type: string;  // enum
  rollingUpdate: RollingUpdateDaemonSet;
}