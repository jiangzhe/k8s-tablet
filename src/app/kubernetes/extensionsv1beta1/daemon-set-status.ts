import { DaemonSetCondition } from "./daemon-set-condition";

export interface DaemonSetStatus {
  currentNumberScheduled: number;
  numberMisscheduled: number;
  desiredNumberScheduled: number;
  numberReady: number;
  observedGeneration: number;
  updatedNumberScheduled: number;
  numberAvailable: number;
  numberUnavailable: number;
  collisionCount: number;
  conditions: DaemonSetCondition[];
}