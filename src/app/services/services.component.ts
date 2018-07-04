import { Component, OnInit } from '@angular/core';
import { KubeService } from '../kube.service';
import { Service } from '../kubernetes/corev1/service';
import { ListFilter } from '../utils/list-filter';
import { forkJoin } from 'rxjs';
import { Endpoints } from '../kubernetes/corev1/endpoints';
import { ServiceWithEndpoints } from '../utils/service-with-endpoints';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: ServiceWithEndpoints[];
  fullServices: ServiceWithEndpoints[];
  filter: ListFilter = new ListFilter();
  showNamespaceFilter = false;
  showInstanceFilter = false;

  instanceEnabled = KubeService.getInstanceEnabled;
  instanceName = KubeService.getInstanceNameFromMetadata;
  uniqueName = KubeService.getUniqueNameFromMetadata;

  constructor(private kubeService: KubeService) { }

  ngOnInit() {
    forkJoin(this.kubeService.getServices(), this.kubeService.getEndpoints())
      .subscribe(data => {
        let svcs = data[0];
        let eps = data[1]

        let endpointsMap: {[name: string]: Endpoints} = {};
        eps.items.forEach((ep, i, arr) => {
          endpointsMap[this.uniqueName(ep.metadata)] = ep;
        });
        this.fullServices = svcs.items.map(svc => {
          let ep = endpointsMap[this.uniqueName(svc.metadata)];
          return {
            service: svc,
            endpoints: ep,
          }
        });
        this.onFilter();
      });
  }

  onFilter() {
    this.services = this.fullServices.filter(s => this.filter.check(s.service.metadata));
  }
}
