import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { NamespaceList } from './kubernetes/corev1/namespace-list';
import { Observable } from 'rxjs';
import { Namespace } from './kubernetes/corev1/namespace';
import { DeploymentList } from './kubernetes/extensionsv1beta1/deployment-list';
import { Deployment } from './kubernetes/extensionsv1beta1/deployment';
import { StatefulSetList } from './kubernetes/appsv1beta1/stateful-set-list';
import { StatefulSet } from './kubernetes/appsv1beta1/stateful-set';
import { ObjectMeta } from './kubernetes/metav1/object-meta';
import { DaemonSetList } from './kubernetes/extensionsv1beta1/daemon-set-list';
import { DaemonSet } from './kubernetes/extensionsv1beta1/daemon-set';
import { ConfigMap } from './kubernetes/corev1/config-map';
import { ConfigMapList } from './kubernetes/corev1/config-map-list';
import { ServiceList } from './kubernetes/corev1/service-list';
import { Service } from './kubernetes/corev1/service';

@Injectable({
  providedIn: 'root'
})
export class KubeService {

  constructor(private restService: RestService) { }

  getNamespaces(): Observable<NamespaceList> {
    const nssUrl = `/api/v1/namespaces`;
    return this.restService.get<NamespaceList>(nssUrl);
  }

  getNamespace(name: string): Observable<Namespace> {
    const nsUrl = `/api/v1/namespaces/${name}`;
    return this.restService.get<Namespace>(nsUrl);
  }

  getDeployments(): Observable<DeploymentList> {
    const dmsUrl = `/apis/extensions/v1beta1/deployments`;
    return this.restService.get<DeploymentList>(dmsUrl);
  }

  getNamespacedDeployment(namespace: string, name: string): Observable<Deployment> {
    const dmUrl = `/apis/extensions/v1beta1/namespaces/${namespace}/deployments/${name}`
    return this.restService.get<Deployment>(dmUrl);
  }

  getStatefulSets(): Observable<StatefulSetList> {
    const sssUrl = `/apis/apps/v1beta1/statefulsets`;
    return this.restService.get<StatefulSetList>(sssUrl);
  }

  getNamespacedStatefulSet(namespace: string, name: string): Observable<StatefulSet> {
    const ssUrl = `/apis/apps/v1beta1/namespaces/${namespace}/statefulsets/${name}`;
    return this.restService.get<StatefulSet>(ssUrl);
  }

  getDaemonSets(): Observable<DaemonSetList> {
    const dssUrl = `/apis/extensions/v1beta1/daemonsets`;
    return this.restService.get<DaemonSetList>(dssUrl);
  }

  getNamespacedDaemonSet(namespace: string, name: string): Observable<DaemonSet> {
    const dsUrl = `/apis/extensions/v1beta1/namespaces/${namespace}/daemonsets/${name}`;
    return this.restService.get<DaemonSet>(dsUrl);
  }

  getConfigMaps(): Observable<ConfigMapList> {
    const cmsUrl = `/api/v1/configmaps`;
    return this.restService.get<ConfigMapList>(cmsUrl);
  }

  getNamespacedConfigMap(namespace: string, name: string): Observable<ConfigMap> {
    const cmUrl = `/api/v1/namespaces/${namespace}/configmaps/${name}`;
    return this.restService.get<ConfigMap>(cmUrl);
  }

  getServices(): Observable<ServiceList> {
    const svcsUrl = `/api/v1/services`;
    return this.restService.get<ServiceList>(svcsUrl);
  }

  getNamespacedService(namespace: string, name: string): Observable<Service> {
    const svcUrl = `/api/v1/namespaces/${namespace}/services/${name}`;
    return this.restService.get<Service>(svcUrl);
  }

  public static getInstanceNameFromMetadata(metadata: ObjectMeta): string {
    if (!metadata) {
      return '';
    }
    if (!metadata.ownerReferences) {
      return '';
    }
    if (!metadata.ownerReferences[0]) {
      return '';
    }
    return metadata.ownerReferences[0].name;
  }
}
