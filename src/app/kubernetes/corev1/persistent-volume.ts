import { PersistentVolumeSpec } from './persistent-volume-spec';
import { PersistentVolumeStatus } from './persistent-volume-status';

export interface PersistentVolume {
  kind: string;
  apiVersion: string;
  spec: PersistentVolumeSpec;
  status: PersistentVolumeStatus;
}