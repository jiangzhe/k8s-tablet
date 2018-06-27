import { Component, OnInit } from '@angular/core';
import { KubeService } from '../kube.service';
import { Deployment } from '../kubernetes/extensionsv1beta1/deployment';
import { ListFilter } from './list-filter';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.css']
})
export class DeploymentsComponent implements OnInit {
  deployments: Deployment[];
  fullDeployments: Deployment[];
  filter: ListFilter = {namespace: "", instance: ""};
  showNamespaceFilter = false;
  showInstanceFilter = false;

  instanceName = KubeService.getInstanceNameFromMetadata;

  constructor(private kubeService: KubeService) { }

  ngOnInit() {
    this.kubeService.getDeployments().subscribe(dms => {
      // console.log(dms);
      this.fullDeployments = dms.items;
      this.doFilter();
    })
  }

  doFilter(): void {
    this.deployments = this.fullDeployments.filter(d => {
      if (this.filter.namespace !== "") {
        if (!d.metadata.namespace) {
          return false;
        }
        if (!d.metadata.namespace.includes(this.filter.namespace)) {
          return false;
        }
      }
      if (this.filter.instance !== "") {
        if (!d.metadata.ownerReferences || !d.metadata.ownerReferences[0] || !d.metadata.ownerReferences[0].name) {
          return false;
        }
        if (!d.metadata.ownerReferences[0].name.includes(this.filter.instance)) {
          return false;
        }
      }
      return true;
    })
  }

  onFilter(): void { this.doFilter(); }
}
