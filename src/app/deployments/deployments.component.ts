import { Component, OnInit } from '@angular/core';
import { KubeService } from '../kube.service';
import { Deployment } from '../kubernetes/extensionsv1beta1/deployment';
import { ListFilter } from '../utils/list-filter';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.css']
})
export class DeploymentsComponent implements OnInit {
  deployments: Deployment[];
  fullDeployments: Deployment[];
  filter: ListFilter = new ListFilter();
  showNamespaceFilter = false;
  showInstanceFilter = false;
  
  instanceEnabled = KubeService.getInstanceEnabled;
  instanceName = KubeService.getInstanceNameFromMetadata;

  constructor(private kubeService: KubeService) { }

  ngOnInit() {
    this.kubeService.getDeployments().subscribe(dms => {
      // console.log(dms);
      this.fullDeployments = dms.items;
      this.onFilter();
    })
  }

  onFilter(): void {
    this.deployments = this.fullDeployments.filter(d => this.filter.check(d.metadata));
  }
}
