import { Namespace } from "./namespace";
import { ListMeta } from "../metav1/list-meta";

export interface NamespaceList {
    kind: string,
    apiVersion: string,
    metadata: ListMeta,
    items: Namespace[]
}