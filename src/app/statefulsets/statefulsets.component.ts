import { Component, OnInit } from '@angular/core';
import { KubeService } from '../kube.service';
import { StatefulSet } from '../kubernetes/appsv1beta1/stateful-set';
import { ListFilter } from './list-filter';

@Component({
  selector: 'app-statefulsets',
  templateUrl: './statefulsets.component.html',
  styleUrls: ['./statefulsets.component.css']
})
export class StatefulsetsComponent implements OnInit {
  instanceName = KubeService.getInstanceNameFromMetadata;

  statefulsets: StatefulSet[];
  fullStatefulsets: StatefulSet[];
  filter: ListFilter = {namespace: "", instance: ""};
  showNamespaceFilter = false;
  showInstanceFilter = false;

  constructor(private kubeService: KubeService) { }

  ngOnInit() {
    this.kubeService.getStatefulSets().subscribe(sss => {
      this.fullStatefulsets = sss.items;
      this.doFilter();
    })
  }

  doFilter(): void {
    this.statefulsets = this.fullStatefulsets.filter(s => {
      if (this.filter.namespace !== "") {
        if (!s.metadata.namespace) {
          return false;
        }
        if (!s.metadata.namespace.includes(this.filter.namespace)) {
          return false;
        }
      }
      if (this.filter.instance !== "") {
        if (!s.metadata.ownerReferences || !s.metadata.ownerReferences[0] || !s.metadata.ownerReferences[0].name) {
          return false;
        }
        if (!s.metadata.ownerReferences[0].name.includes(this.filter.instance)) {
          return false;
        }
      }
      return true;
    })
  }

  onFilter(): void {
    this.doFilter();
  }
}
