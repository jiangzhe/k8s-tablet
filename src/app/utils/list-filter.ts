import { ObjectMeta } from "../kubernetes/metav1/object-meta";
import { KubeService} from "../kube.service";

export class ListFilter {
  constructor(
    public namespace: string = '', 
    public instance: string = ''
  ) {}

  check(metadata: ObjectMeta): boolean {
    if (this.namespace && this.namespace !== "") {
      if (!metadata.namespace || metadata.namespace === "") {
        return false;
      }
      if (!metadata.namespace.includes(this.namespace)) {
        return false;
      }
    }
    if (this.instance !== "") {
      let instance = KubeService.getInstanceNameFromMetadata(metadata);
      if (!instance.includes(this.instance)) {
        return false;
      }
    }
    return true;
  }
}