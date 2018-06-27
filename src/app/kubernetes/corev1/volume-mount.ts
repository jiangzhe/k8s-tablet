export interface VolumeMount {
  name: string;
  readOnly: boolean;
  mountPath: string;
  subPath: string;
}