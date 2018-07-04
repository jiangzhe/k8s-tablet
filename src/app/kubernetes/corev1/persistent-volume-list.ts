import { ListMeta } from "../metav1/list-meta";
import { PersistentVolume } from "./persistent-volume";

export interface PersistentVolumeList {
  kind: string;
  apiVersion: string;
  metadata: ListMeta;
  items: PersistentVolume[];
}