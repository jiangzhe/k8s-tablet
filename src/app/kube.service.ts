import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { NamespaceList } from './kubernetes/corev1/namespace-list';
import { Observable } from 'rxjs';
import { Namespace } from './kubernetes/corev1/namespace';

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
}
