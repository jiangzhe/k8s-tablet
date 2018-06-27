import { StatefulSetCondition } from "./stateful-set-condition";

export interface StatefulSetStatus {
  observedGeneration: number;
  replicas: number;
  readyReplicas: number;
  currentReplicas: number;
  updatedReplicas: number;
  currentRevision: string;
  updateRevision: string;
  collisionCount: number;
  conditions: StatefulSetCondition[];
}