import { Component, OnInit } from '@angular/core';
import { KubeService } from '../kube.service';
import { Service } from '../kubernetes/corev1/service';
import { ListFilter } from '../utils/list-filter';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  instanceName = KubeService.getInstanceNameFromMetadata;

  services: Service[];
  fullServices: Service[];
  filter: ListFilter = new ListFilter();
  showNamespaceFilter = false;
  showInstanceFilter = false;

  constructor(private kubeService: KubeService) { }

  ngOnInit() {
    this.kubeService.getServices().subscribe(svcs => {
      this.fullServices = svcs.items;
      this.onFilter();
    })
  }

  onFilter() {
    this.services = this.fullServices.filter(s => this.filter.check(s.metadata));
  }
}
